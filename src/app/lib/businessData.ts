import apartmentsData from '@/../../data/apartments.json';
import pricingData from '@/../../data/pricing.json';
import companyInfoData from '@/../../data/company-info.json';
import { Apartment, ApartmentPricing, PaymentPlan, CompanyInfo } from '../types/chat';

export interface BusinessData {
  apartments: Apartment[];
  pricing: {
    currency: string;
    pricePerSqm: number;
    apartments: ApartmentPricing[];
    paymentPlans: PaymentPlan[];
    additionalCosts: Array<{
      name: string;
      price: number;
      description?: string;
    }>;
    investorDiscounts: Array<{
      minUnits: number;
      discount: number;
      description: string;
    }>;
  };
  companyInfo: CompanyInfo;
}

export function getBusinessData(): BusinessData {
  return {
    apartments: apartmentsData.apartments,
    pricing: pricingData,
    companyInfo: companyInfoData,
  };
}

export function formatBusinessDataForAI(): string {
  const data = getBusinessData();
  
  return `
# KOLKHISEA BUSINESS INFORMATION

## Company Overview
${data.companyInfo.name} - ${data.companyInfo.tagline}
${data.companyInfo.description}

Contact: ${data.companyInfo.contact.phone} | ${data.companyInfo.contact.email}
Website: ${data.companyInfo.contact.website}
Location: ${data.companyInfo.location.city}, ${data.companyInfo.location.region}, ${data.companyInfo.location.country}

Working Hours:
- ${data.companyInfo.workingHours.weekdays}
- ${data.companyInfo.workingHours.saturday}
- ${data.companyInfo.workingHours.sunday}

Project Status: ${data.companyInfo.projectStatus.phase} - ${data.companyInfo.projectStatus.currentProgress} complete
Expected Completion: ${data.companyInfo.projectStatus.completionDate}

## Available Apartments

${data.apartments.map(apt => {
  const pricing = data.pricing.apartments.find(p => p.apartmentId === apt.id);
  return `
### ${apt.name} (${apt.type})
- Size: ${apt.size.min}-${apt.size.max} ${apt.size.unit}
- Price Range: $${pricing?.priceRange.min.toLocaleString()} - $${pricing?.priceRange.max.toLocaleString()} USD
- Average Price: $${pricing?.averagePrice.toLocaleString()} USD
- Floors: ${apt.floors}
- Features: ${apt.features.join(', ')}
- Description: ${apt.description}
`;
}).join('\n')}

## Pricing Information

Currency: ${data.pricing.currency}
Price per sqm: $${data.pricing.pricePerSqm}

### Payment Plans:
${data.pricing.paymentPlans.map(plan => `
- **${plan.name}**: ${plan.description}
  ${plan.discount ? `Discount: ${plan.discount}%` : ''}
  ${plan.downPayment ? `Down Payment: ${plan.downPayment}%` : ''}
  ${plan.installmentMonths ? `Installments: ${plan.installmentMonths} months` : ''}
  ${plan.interestRate ? `Interest Rate: ${plan.interestRate}%` : ''}
`).join('\n')}

### Additional Options:
${data.pricing.additionalCosts.map(cost => `
- ${cost.name}: $${cost.price.toLocaleString()} ${cost.description ? `(${cost.description})` : ''}
`).join('\n')}

### Investor Discounts:
${data.pricing.investorDiscounts.map(discount => `
- ${discount.description}
`).join('\n')}

## Services Offered

${data.companyInfo.services.map(service => `
- **${service.name}**: ${service.description}
  ${service.price === 0 ? 'FREE' : `Price: $${service.price}`}
  ${service.included ? '(Included in purchase)' : ''}
`).join('\n')}

## Key Selling Points

${data.companyInfo.sellingPoints.map((point, i) => `${i + 1}. ${point}`).join('\n')}

## Frequently Asked Questions

${data.companyInfo.faqs.map(faq => `
Q: ${faq.question}
A: ${faq.answer}
`).join('\n')}

## Location Highlights

${data.companyInfo.location.nearbyAttractions.map(attr => `- ${attr}`).join('\n')}
`;
}

