# KolkhiSea AI Chat System

## 🎯 Overview

A WhatsApp-style AI chat assistant integrated into the KolkhiSea website that helps potential buyers learn about luxury Black Sea apartments, get pricing information, and schedule consultations.

**Technology Stack:**
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **State Management**: Zustand
- **AI Engine**: Google Gemini (via @google/generative-ai)
- **Storage**: localStorage (client-side)
- **UI Style**: WhatsApp-inspired design

---

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env.local` file in the project root:

```env
# Google Gemini API Configuration
GOOGLE_API_KEY=AIzaSyAMdywW4NyHVOzoYD8wFo022Gy3ef8T8ds

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=KolkhiSea
```

### 2. Install Dependencies

The required packages are already installed:
- `zustand` - State management
- `@google/generative-ai` - Google Gemini API client
- `react-markdown` - Render formatted AI responses

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` and you'll see the green chat button in the bottom-right corner!

---

## 📁 Project Structure

```
kolkhisea/
├── data/                           # Business data (JSON)
│   ├── apartments.json             # Apartment types, features, descriptions
│   ├── pricing.json                # Pricing, payment plans, discounts
│   └── company-info.json           # Company details, FAQs, services
│
├── src/app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts            # API endpoint for chat (Google Gemini)
│   │
│   ├── components/
│   │   └── chat/
│   │       ├── index.tsx           # Main ChatWidget export
│   │       ├── ChatButton.tsx      # Floating green button
│   │       ├── ChatInterface.tsx   # Main chat window
│   │       ├── MessageBubble.tsx   # Individual messages
│   │       ├── ChatInput.tsx       # Input field + send button
│   │       └── TypingIndicator.tsx # "AI is typing..." animation
│   │
│   ├── lib/
│   │   ├── businessData.ts         # Load and format business data
│   │   └── prompts.ts              # AI system prompt
│   │
│   ├── store/
│   │   └── chatStore.ts            # Zustand state management
│   │
│   ├── types/
│   │   └── chat.ts                 # TypeScript interfaces
│   │
│   └── globals.css                 # WhatsApp-style animations
```

---

## 🎨 Features

### ✅ Implemented Features

1. **WhatsApp-Style UI**
   - Green color scheme matching WhatsApp
   - Message bubbles (user: gray/right, AI: green/left)
   - Typing indicator with animated dots
   - Smooth animations and transitions

2. **AI Capabilities**
   - Answers questions about apartments (types, features, sizes)
   - Provides accurate pricing information
   - Explains payment plans (installments, discounts)
   - Shares company information (location, hours, contact)
   - Answers FAQs about foreign buyers, pets, completion date, etc.

3. **Conversation Management**
   - Persists chat history in localStorage
   - Maintains context across conversations
   - Auto-scrolls to latest message
   - Friendly greeting on first interaction

4. **Responsive Design**
   - Desktop: Fixed position (bottom-right, 400x600px)
   - Mobile: Full-width with responsive positioning
   - Touch-friendly buttons and inputs

5. **Lead Capture Detection**
   - AI naturally asks for contact information when interest is shown
   - Detects when AI is requesting user details
   - Foundation ready for future lead form integration

---

## 🤖 How the AI Works

### System Prompt

The AI is instructed to act as a professional sales consultant for KolkhiSea. The system prompt includes:

- Company information (location, hours, contact details)
- Complete apartment catalog (types, sizes, features)
- Pricing information (ranges, payment plans, discounts)
- Services offered (consultations, site visits, virtual tours)
- FAQs and selling points

**See:** `src/app/lib/prompts.ts`

### Business Data Injection

All business data from JSON files is automatically injected into the AI's context:

```typescript
import { formatBusinessDataForAI } from '@/app/lib/businessData';
const systemPrompt = getSalesManagerPrompt(); // Includes all data
```

### Conversation Flow

1. User clicks green chat button
2. Chat interface opens with greeting message
3. User types message and sends
4. Frontend sends request to `/api/chat` with:
   - Current message
   - Last 10 messages (for context)
   - Conversation ID
5. API calls Google Gemini with system prompt + history
6. AI response displayed in chat interface
7. Conversation saved to localStorage

---

## 💡 Customization Guide

### Update Business Information

Edit the JSON files in the `data/` directory:

**`data/apartments.json`** - Apartment types
```json
{
  "id": "studio",
  "name": "Studio Apartment",
  "type": "Studio",
  "size": { "min": 35, "max": 45, "unit": "sqm" },
  "features": ["Sea view balcony", "Open kitchen"],
  "description": "Perfect for singles or couples..."
}
```

**`data/pricing.json`** - Pricing and payment plans
```json
{
  "currency": "USD",
  "pricePerSqm": 1200,
  "apartments": [
    {
      "apartmentId": "studio",
      "priceRange": { "min": 42000, "max": 54000 }
    }
  ]
}
```

**`data/company-info.json`** - Company details
```json
{
  "name": "KolkhiSea",
  "contact": {
    "phone": "+995 599 123 456",
    "email": "sales@kolkhisea.ge"
  }
}
```

### Modify AI Personality

Edit `src/app/lib/prompts.ts` to change:
- Tone (formal, casual, luxury)
- Language style
- Response format
- Lead capture approach

### Change UI Colors

Edit `src/app/globals.css`:

```css
:root {
  --whatsapp-green: #25D366;        /* Chat button, send button */
  --whatsapp-dark-green: #128C7E;   /* Hover states */
  --whatsapp-light-green: #DCF8C6;  /* AI message bubbles */
  --whatsapp-gray: #E5E5E5;         /* User message bubbles */
}
```

### Adjust Chat Position

Edit `src/app/components/chat/ChatButton.tsx`:

```tsx
// Default: bottom-6 right-6 (24px from bottom/right)
className="fixed bottom-6 right-6 z-50"

// Example: Left side
className="fixed bottom-6 left-6 z-50"
```

---

## 🔧 Advanced Configuration

### Switch AI Provider

Currently using **Google Gemini** (free tier). To switch to OpenAI:

1. Install OpenAI SDK:
   ```bash
   npm install openai
   ```

2. Update `.env.local`:
   ```env
   OPENAI_API_KEY=sk-proj-xxxxx
   ```

3. Modify `src/app/api/chat/route.ts`:
   ```typescript
   import OpenAI from 'openai';
   const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
   
   const response = await openai.chat.completions.create({
     model: "gpt-4-turbo-preview",
     messages: [
       { role: "system", content: systemPrompt },
       ...conversationHistory
     ]
   });
   ```

### Add Multi-Language Support

The site already has i18n for EN/KA/RU. To add chat translations:

1. Create language-specific prompts:
   ```typescript
   // src/app/lib/prompts.ts
   export function getSalesManagerPrompt(locale: 'en' | 'ka' | 'ru') {
     const prompts = {
       en: "You are a sales consultant...",
       ka: "თქვენ ხართ გაყიდვების კონსულტანტი...",
       ru: "Вы консультант по продажам..."
     };
     return prompts[locale] + formatBusinessDataForAI(locale);
   }
   ```

2. Pass locale to API:
   ```typescript
   // ChatInterface.tsx
   const locale = useLocale();
   body: JSON.stringify({ message, conversationHistory, locale })
   ```

### Implement Lead Form

When AI asks for contact info, show a form:

1. Create `LeadCaptureForm.tsx`:
   ```tsx
   export const LeadCaptureForm = ({ onSubmit }) => (
     <form onSubmit={onSubmit}>
       <input name="name" placeholder="Your Name" required />
       <input name="phone" placeholder="Phone Number" required />
       <button type="submit">Submit</button>
     </form>
   );
   ```

2. Update `ChatInterface.tsx`:
   ```tsx
   const { shouldCaptureLead } = await response.json();
   if (shouldCaptureLead) {
     setShowLeadForm(true);
   }
   ```

3. Send leads to your CRM:
   ```typescript
   // src/app/api/leads/route.ts
   export async function POST(request) {
     const lead = await request.json();
     // Send to your CRM, Google Sheets, or email
     await fetch('https://your-crm.com/api/leads', {
       method: 'POST',
       body: JSON.stringify(lead)
     });
   }
   ```

---

## 📊 Analytics & Monitoring

### Track Chat Usage

Add to `ChatInterface.tsx`:

```typescript
useEffect(() => {
  if (isOpen) {
    gtag('event', 'chat_opened', { page_location: window.location.href });
  }
}, [isOpen]);

const handleSendMessage = async (content) => {
  gtag('event', 'chat_message_sent', { message_length: content.length });
  // ... existing code
};
```

### Monitor AI Costs

Google Gemini pricing (as of 2026):
- **Free tier**: 60 requests/minute
- **Paid**: ~$0.001 per request

Log API calls:
```typescript
// api/chat/route.ts
console.log('[Chat] Request:', { conversationId, messageLength: message.length });
console.log('[Chat] Response:', { tokens: aiMessage.length });
```

---

## 🐛 Troubleshooting

### Chat button doesn't appear

1. Check browser console for errors
2. Verify `ChatWidget` is imported in `layout.tsx`
3. Clear browser cache and restart dev server

### AI responses are slow

- Google Gemini typically responds in 2-5 seconds
- Check your internet connection
- Consider implementing streaming responses for real-time typing effect

### Chat history not persisting

- Check browser's localStorage is enabled
- Verify no incognito/private mode
- Check console for localStorage errors

### API key errors

```
Error: GOOGLE_API_KEY is not defined
```

**Solution**: Create `.env.local` file with your API key

---

## 🚀 Deployment to Vercel

1. **Push code to GitHub**

2. **Import project in Vercel**
   - Connect GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add: `GOOGLE_API_KEY=your_key_here`
   - Add: `NEXT_PUBLIC_APP_URL=https://kolkhisea.ge`

4. **Deploy**
   - Vercel builds and deploys automatically
   - Chat will be live on your domain!

---

## 📝 Future Enhancements

### Planned Features

- [ ] **Lead Form UI**: Inline form when AI requests contact info
- [ ] **Email Notifications**: Send lead info to sales team
- [ ] **Admin Dashboard**: View all conversations
- [ ] **Multi-language AI**: Auto-detect user language
- [ ] **Voice Input**: Allow voice messages
- [ ] **Image Sharing**: AI can share floor plans and photos
- [ ] **Booking System**: Direct appointment scheduling
- [ ] **CRM Integration**: Auto-sync with Salesforce/HubSpot
- [ ] **A/B Testing**: Test different AI prompts
- [ ] **Analytics Dashboard**: Track conversion rates

### Community Contributions

Want to improve the chat? Ideas:

1. Streaming responses (real-time typing effect)
2. Chat export feature (download conversation)
3. Emoji picker for user messages
4. Dark mode theme
5. Conversation ratings (thumbs up/down)

---

## 🤝 Support

**Need help?**

1. Check this README
2. Review code comments in source files
3. Contact development team

**Questions about the AI?**
- See `src/app/lib/prompts.ts` for AI instructions
- Edit `data/*.json` to update business information

---

## 📄 License

This chat system is part of the KolkhiSea website project.

---

**Built with ❤️ for KolkhiSea by the development team**

*Last updated: February 11, 2026*

