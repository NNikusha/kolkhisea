import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getSalesManagerPrompt } from '@/app/lib/prompts';
import { Message } from '@/app/types/chat';

// Initialize Google Gemini with API key from environment
const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY || 'AIzaSyDFF4LTGCnji2g9nZmuUXLasBVfQli1YeI'
);

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory, conversationId } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    // Get the Gemini model (using gemini-1.5-flash for free tier)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build the conversation history for Gemini
    const systemPrompt = getSalesManagerPrompt();
    
    // Format conversation history - Gemini requires history to start with 'user' role
    let formattedHistory = conversationHistory
      .filter((msg: Message) => msg.role !== 'system')
      .map((msg: Message) => {
        const role = msg.role === 'user' ? 'user' : 'model';
        return {
          role,
          parts: [{ text: msg.content }],
        };
      });

    // Remove any leading 'model' messages (like initial greeting)
    // Gemini requires the first message to be from 'user'
    while (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
      formattedHistory.shift();
    }

    // Start chat with history
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 800,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    // Create the full prompt with system instructions for the first message
    const fullPrompt = formattedHistory.length === 0 
      ? `${systemPrompt}\n\nUser: ${message}\n\nAssistant:`
      : message;

    // Send message and get response
    const result = await chat.sendMessage(fullPrompt);
    const response = await result.response;
    const aiMessage = response.text();

    // Check if we should capture lead (simple keyword detection)
    const shouldCaptureLead = detectLeadIntent(aiMessage);

    return NextResponse.json({
      message: aiMessage,
      conversationId,
      shouldCaptureLead,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Return a fallback message
    return NextResponse.json({
      message: "I apologize for the inconvenience. I'm having trouble processing your request. Please contact us directly at +995 599 123 456 or sales@kolkhisea.ge for immediate assistance.",
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}

// Simple lead detection based on keywords
function detectLeadIntent(message: string): boolean {
  const leadKeywords = [
    'name and phone',
    'contact information',
    'may i have your',
    'could you share',
    'provide your details',
    'get in touch',
    'contact you',
  ];

  const lowerMessage = message.toLowerCase();
  return leadKeywords.some(keyword => lowerMessage.includes(keyword));
}
