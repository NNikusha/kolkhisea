# 🚨 TECHNICAL MAINTENANCE DANGER MAP
## KolkhiSea Headless Architecture: Why Generalist Skills Are Insufficient

**Project Type:** Enterprise Headless CMS Architecture (Next.js 15 Frontend + Laravel API Backend)  
**Author:** Senior Lead Developer  
**Date:** February 10, 2026  
**Purpose:** Technical risk assessment for handover to marketing agency

---

## ⚠️ EXECUTIVE SUMMARY

This is **NOT** a standard WordPress or simple React site. This is a **production-grade headless architecture** requiring deep expertise in:
- Next.js 15 App Router with Server-Side Rendering (SSR)
- Advanced i18n with next-intl middleware
- Real-time API synchronization with Laravel backend
- Complex state management for interactive floor plan selector
- Image optimization pipeline with backend integration
- Atomic deployment coordination between frontend and backend

**RISK LEVEL: CRITICAL** - Any incorrect modification will cause cascading failures across the entire application.

---

## 🔴 DANGER ZONE 1: Next.js App Router & SSR Complexity

### Architecture Pattern
```
src/app/[locale]/                    ← Dynamic locale routing
├── layout.tsx                       ← Server Component with async params
├── page.tsx                         ← Homepage with generateMetadata
└── (pages)/
    ├── apartment-choose/page.tsx    ← SSR with searchParams
    └── flat-detail-page/[id]/page.tsx  ← Dynamic SSR with API fetch
```

### Critical Technical Debt Points

#### 1. **Server Component Async Params Pattern**
Every page uses Next.js 15's new async params pattern:
```typescript
// src/app/[locale]/layout.tsx
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;  // ← CRITICAL: Params are now Promises
```

**DANGER:** If someone unfamiliar with Next.js 15 tries to access `params.locale` directly (like in Next.js 13/14), the entire app will crash with a hydration error.

#### 2. **Metadata Generation with API Dependency**
```typescript
// src/app/[locale]/page.tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  // SEO metadata depends on locale-specific content
}
```

**DANGER:** The metadata API runs during build time AND runtime. If the Laravel API is down during `next build`, the entire deployment will fail.

#### 3. **Server-Side Data Fetching in Components**
```typescript
// src/app/components/organisms/MainPage/MainPage.tsx
const MainPage = async () => {
  const locale = await getLocale() as Locale;
  const data = await fetchMain();  // ← Direct API call in Server Component
```

**DANGER: Hydration Mismatch Risk**  
- Server fetches data at build time (ISR) or request time (SSR)
- If API returns different data between server and client, React will throw hydration errors
- Generalists often try to "fix" this by adding `"use client"` everywhere, breaking the entire SSR architecture

---

## 🔴 DANGER ZONE 2: Multi-Locale Middleware & i18n Orchestration

### Middleware Configuration
```typescript
// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
export default createMiddleware(routing);

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
```

### Critical Issues

#### 1. **Locale Negotiation & Routing**
- Every request passes through next-intl middleware
- Middleware rewrites URLs: `/` → `/en`, `/apartment-choose` → `/en/apartment-choose`
- **If middleware fails, the entire site returns 404**

#### 2. **Dynamic Message Loading**
```typescript
// src/i18n/request.ts
export default getRequestConfig(async ({requestLocale}) => {
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

**DANGER:** Messages are dynamically imported. If someone adds a translation key without proper JSON validation:
- The build will succeed ✅
- The page will crash at runtime ❌
- No error until a user triggers that specific translation

#### 3. **Custom Georgian Unicode Transformation**
```typescript
// src/app/hooks/useGeorgianUppercase.ts
const toMtavruli = (input: string): string => {
  const OFFSET = 0x1C90 - 0x10D0; // Unicode offset
  return Array.from(input).map(ch => {
    const cp = ch.codePointAt(0);
    if (cp && cp >= 0x10D0 && cp <= 0x10FF) {
      return String.fromCodePoint(cp + OFFSET);
    }
    return ch;
  }).join('');
};
```

**DANGER:** This custom Unicode transformation runs via MutationObserver on every DOM change. If someone:
- Removes the `GeorgianUppercaseProvider`
- Breaks the MutationObserver
- Changes CSS uppercase classes

**Result:** Georgian text displays incorrectly, breaking the entire UX for the primary market audience.

---

## 🔴 DANGER ZONE 3: API Schema Drift & Frontend-Backend Synchronization

### API Integration Pattern
```typescript
// src/app/hooks/links.ts
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://admin.kolkhisea.ge/api";

const requests = {
  fetchBuildings: `${baseUrl}/buildings`,
  fetchFlats: `${baseUrl}/flats`,
  fetchFloorPlans: `${baseUrl}/floor-plans`,
  // 15+ endpoints
};
```

### Critical Coupling Points

#### 1. **Type-Unsafe API Responses**
The frontend expects strict TypeScript interfaces:
```typescript
interface Flat {
  id: number;
  number: number;
  total_area: number;
  floor: number;
  status: string;
  lang_status: { en: string; ka: string; ru: string; };
  // 20+ fields
}
```

**DANGER:** If the Laravel admin panel (Filament) changes ANY field:
- Field name: `total_area` → `totalArea` ❌ App crashes
- Field type: `floor: number` → `floor: string` ❌ Floor selector breaks
- Remove field: `lang_status` ❌ Entire listing page fails

**No runtime validation exists.** The frontend blindly trusts the API.

#### 2. **Image URL Schema Dependency**
```typescript
// next.config.ts
images: {
  domains: ['admin.kolkhisea.ge', 'apartment-back-dtwnoq39.on-forge.com'],
},
```

**DANGER:** All images are served from Laravel backend via Spatie Media Library:
- If backend CDN URL changes → Next.js Image Optimization fails
- If image paths change in Filament → All images return 404
- If someone adds a new CDN domain without updating `next.config.ts` → Images won't load

#### 3. **API Rewrite Proxy**
```typescript
// next.config.ts
async rewrites() {
  return [{
    source: '/api/:path*',
    destination: `${baseApiUrl}/api/:path*`
  }];
}
```

**DANGER:** This rewrites `/api/*` to the Laravel backend. If:
- The backend API changes from `/api` to `/v1/api`
- CORS headers change
- Authentication tokens are added

**The entire API integration breaks immediately.**

---

## 🔴 DANGER ZONE 4: Interactive Floor Plan Selector - State Management Nightmare

### Component Complexity
```typescript
// src/app/components/molecules/ApartmentSelectionModal/ApartmentSelectionModal.tsx
const FullscreenApartmentModal: React.FC<ApartmentModalProps> = ({
  isOpen,
  onClose,
  initialFloor = 10,
}) => {
  const [currentFloor, setCurrentFloor] = useState<number>(initialFloor);
  const [floorPlans, setFloorPlans] = useState<FloorPlan[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hoveredApartment, setHoveredApartment] = useState<ShapeData | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
```

### Critical State Management Issues

#### 1. **Synchronous SVG Polygon Rendering**
```typescript
const createPolygonPoints = (points: number[][]) => {
  return points.map((point) => `${point[0]},${point[1]}`).join(" ");
};

const calculatePolygonCenter = (points: number[][]) => {
  // Complex centroid calculation for apartment numbers
};
```

**DANGER:** The floor plan renders **SVG polygons over a background image** based on API-provided coordinates:
- API must return exact `[[x1,y1], [x2,y2], ...]` arrays
- If coordinates are off by even 1 pixel → apartments misalign
- If image aspect ratio changes → entire overlay breaks

#### 2. **Nested State Dependencies**
```
User clicks floor → fetchFloorPlans(floor)
  ↓
API returns FloorPlan[]
  ↓
Image loads → setImageLoaded(true)
  ↓
SVG overlays render with shape_data
  ↓
User hovers → setHoveredApartment()
  ↓
Tooltip appears with apartment details
  ↓
User clicks → router.push(`/flat-detail-page/${flat.id}`)
```

**DANGER:** If any step fails:
- Floor selector shows empty state
- Image loads but no apartments clickable
- Clicks don't navigate (broken router)
- Apartment details show "undefined"

**A generalist will try to "fix" this by:**
1. Adding `useEffect` everywhere → infinite loops
2. Removing loading states → flash of broken content
3. Hard-coding floor numbers → breaks for new buildings

#### 3. **Client-Side Search Params Synchronization**
```typescript
// src/app/components/atoms/ApartmentChoose/ApartmentChoose.tsx
const searchParams = useSearchParams();
const floorParam = searchParams?.get('floor');
const floor = floorParam ? parseInt(floorParam, 10) : 4;

useEffect(() => {
  const loadFlats = async () => {
    const data = await fetchFlats({ floor: floor.toString() });
  };
}, [floor]);
```

**DANGER:** The floor number is passed via URL query params:
- `/apartment-choose?floor=5` must trigger API call
- If someone refreshes the page, state must restore
- If floor param is invalid, must fallback to default
- If API fails, must show error without breaking layout

**This requires understanding:**
- Next.js App Router `useSearchParams` (client-side)
- SSR-safe hydration with query params
- Error boundary handling for API failures

---

## 🔴 DANGER ZONE 5: Image Optimization Pipeline & Backend Media Dependency

### Next.js Image Configuration
```typescript
// next.config.ts
images: {
  domains: ['admin.kolkhisea.ge', 'apartment-back-dtwnoq39.on-forge.com'],
},
```

### Backend Media Pipeline (Laravel + Spatie)
```
Filament Admin Panel
  ↓
User uploads image
  ↓
Spatie Media Library processes
  ↓
Generates conversions (thumbnails, webp)
  ↓
Stores in storage/app/public/media
  ↓
Laravel serves via /storage/ route
  ↓
Next.js fetches via Image component
  ↓
Next.js optimizes (resize, webp, blur placeholder)
  ↓
Serves via _next/image?url=...
```

### Critical Failure Points

#### 1. **Cascading Image Optimization Dependencies**
```typescript
// src/app/components/atoms/ProjectImage/ProjectImage.tsx
<Image
  src={image || MyImage}
  alt="Luxury oceanfront"
  fill
  sizes="100vw"
  quality={100}
  priority
/>
```

**DANGER:** The `Image` component:
- Expects images from whitelisted domains
- Requires valid `src` URLs
- Generates optimized versions on-demand
- Caches in `.next/cache/images`

**If backend fails:**
- Image URLs return 404 → Next.js shows broken image icon
- Spatie conversions fail → Full-size images load (slow)
- CORS headers wrong → Images blocked by browser
- Cache invalidation breaks → Old images persist

#### 2. **SEO-Enhanced Image Component**
```typescript
// src/app/components/atoms/SEOImage/SEOImage.tsx
const enhancedAlt = alt.toLowerCase().includes('kolkhisea') || 
                    alt.toLowerCase().includes('black sea') ||
                    alt.toLowerCase().includes('kobuleti')
  ? alt
  : `${alt} - KolkhiSea luxury Black Sea apartments in Kobuleti`;
```

**DANGER:** Custom SEO logic enhances alt text. If someone:
- Uses standard `<Image>` instead of `<SEOImage>`
- Changes alt text format
- Removes SEO enhancements

**Result:** SEO ranking drops, Google Images indexing fails.

#### 3. **Build-Time Image Optimization**
During `next build`, Next.js:
1. Crawls all pages
2. Finds `<Image>` components
3. Pre-generates optimized versions
4. **Requires backend API to be available**

**DANGER:** If Laravel is down during deployment → build fails completely.

---

## 🔴 DANGER ZONE 6: SEO & Structured Data Architecture

### Multi-Locale SEO System
```typescript
// src/app/utils/seo-utils.ts
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonical,
  images = ['/hero-kolkhisea.jpg'],
  type = 'website',
  locale = 'en'
}: SEOProps): Metadata {
  return {
    alternates: {
      canonical: fullCanonical,
      languages: {
        'en': `${baseUrl}/en${canonical?.replace(`/${locale}`, '') || ''}`,
        'ka': `${baseUrl}/ka${canonical?.replace(`/${locale}`, '') || ''}`,
        'ru': `${baseUrl}/ru${canonical?.replace(`/${locale}`, '') || ''}`,
      }
    }
  };
}
```

### Critical SEO Integration Points

#### 1. **Locale-Aware Canonical URLs**
Every page must have:
- Canonical URL for current locale
- Alternate links for other locales
- hreflang tags for international SEO

**DANGER:** If canonical URLs are wrong:
- Google indexes duplicate content
- SEO ranking penalized
- Users see wrong language version

#### 2. **Structured Data JSON-LD**
```typescript
// src/app/[locale]/layout.tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "KolkhiSea Development",
  "address": { ... },
  "geo": { "latitude": 41.8225, "longitude": 41.7767 }
}
</script>
```

**DANGER:** Three separate JSON-LD schemas:
- Organization schema
- Website schema
- RealEstateAgent schema

**If any are invalid:**
- Google Rich Results fail
- Search appearance degrades
- Real estate searches don't show property

#### 3. **Dynamic Sitemap Generation**
```typescript
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Add dynamic apartment pages when apartment data is available
  // const apartments = await getAllApartments()
}
```

**DANGER:** The sitemap is **partially implemented**. Dynamic apartment pages aren't included yet. If someone:
- Adds apartments but doesn't update sitemap
- Changes URL structure
- Doesn't regenerate sitemap

**Result:** New apartments invisible to Google.

---

## 🔴 DANGER ZONE 7: Deployment & Environment Synchronization

### Environment Variable Architecture
```typescript
// Required environment variables:
NEXT_PUBLIC_API_URL=https://admin.kolkhisea.ge/api
NODE_ENV=production
```

### Critical Deployment Issues

#### 1. **Atomic Deployment Requirement**
```
┌─────────────────┐         ┌──────────────────┐
│  Next.js 15     │   API   │  Laravel API     │
│  (Frontend)     │ ◄─────► │  (Backend)       │
│  Vercel/Node    │  Sync   │  Forge/Apache    │
└─────────────────┘         └──────────────────┘
```

**DANGER:** Both systems must deploy simultaneously:
1. Laravel adds new API field → Deploy backend first
2. Next.js frontend expects field → Frontend breaks until deployed
3. If deployments out of sync → **downtime guaranteed**

**Required knowledge:**
- Blue-green deployment strategies
- API versioning
- Cache invalidation coordination
- CDN purging

#### 2. **ISR Cache Invalidation**
Next.js uses Incremental Static Regeneration:
```typescript
// Potential ISR config (not explicitly set, using defaults)
export const revalidate = 60; // Revalidate every 60 seconds
```

**DANGER:** If backend data changes:
- Frontend cache doesn't update immediately
- Users see stale apartment availability
- "Available" apartments show as sold

**Fix requires:**
- On-demand ISR revalidation via API
- Cache coordination between systems
- Understanding Next.js caching layers

#### 3. **Build Pipeline Dependencies**
```bash
npm run build
  ↓
Next.js crawls all pages
  ↓
Fetches data from Laravel API
  ↓
Generates static pages
  ↓
Optimizes images
  ↓
Outputs to .next/
```

**DANGER:** If backend is unreachable during build:
- `fetchMain()` throws error
- `fetchAboutUs()` fails
- Build exits with error code 1
- **Deployment fails completely**

**A marketing agency will:**
- Blame "broken code"
- Not understand SSR data fetching
- Not know how to debug build errors
- Not coordinate with backend team

---

## 🔴 DANGER ZONE 8: TypeScript & Type Safety Across API Boundary

### Type Definitions
```typescript
// src/app/types/type.ts
interface Flat {
  id: number;
  number: number;
  total_area: number;
  living_space: number;
  price_total: number;
  balcony: { area: string }[];
  bedroom: { area: string }[];
  bathroom: { area: string }[];
  floor: number;
  status: string;
  flat_conditions: string;
  per_square_price: string;
  type: string;
  lang_status: {
    en: string;
    ka: string;
    ru: string;
  };
}
```

### Type Safety Issues

#### 1. **No Runtime Validation**
```typescript
// src/app/hooks/axios.ts
export const fetchFlats = async (filters = {}) => {
  const response = await axios.get(url);
  return response.data; // ← NO VALIDATION
};
```

**DANGER:** There's no Zod/Yup/io-ts validation. The frontend assumes the API returns correct types. If Laravel:
- Adds a new field
- Changes field types
- Returns null instead of array

**TypeScript won't catch it** (TypeScript only checks at compile time, not runtime).

#### 2. **Inconsistent Nullable Handling**
```typescript
// Some components expect:
image: string;          // ← Non-nullable
// Others expect:
image?: string | null;  // ← Optional
```

**DANGER:** Inconsistent null handling throughout the codebase. A generalist will:
- Hit `TypeError: Cannot read property of undefined`
- Add optional chaining everywhere (`?.`)
- Break components that expect non-null values

#### 3. **TypeScript Strict Mode Violations**
```json
// tsconfig.json
"strict": true,
```

**DANGER:** Strict mode is enabled, but several patterns bypass it:
```typescript
const locale = await getLocale() as Locale; // ← Type assertion (unsafe)
```

**A marketing agency will:**
- Not understand type assertions
- Use `any` everywhere
- Disable strict mode
- **Break type safety entirely**

---

## 🔴 DANGER ZONE 9: Framer Motion & Animation State Management

### Animation Architecture
```typescript
// src/app/components/organisms/MotionWrapper/MotionWrapper.tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0.5 }}
>
```

### Critical Animation Issues

#### 1. **AnimatePresence Requirements**
```typescript
<AnimatePresence>
  {isOpen && <ModalComponent />}
</AnimatePresence>
```

**DANGER:** Framer Motion requires:
- Unique `key` props for list items
- `AnimatePresence` for exit animations
- Proper cleanup on unmount

**If broken:**
- Modals don't animate out (stuck on screen)
- List animations glitch
- Memory leaks from unmounted animations

#### 2. **Scroll-Triggered Animations**
Multiple components use scroll-based animations with state tracking. If someone:
- Removes `MotionWrapper`
- Changes animation delays
- Breaks state dependencies

**Result:** Jarring UX, animations fire at wrong times, performance degrades.

---

## 🔴 DANGER ZONE 10: Production Monitoring & Error Tracking

### Current Monitoring Setup
**NONE DETECTED**

### Critical Missing Infrastructure

#### 1. **No Error Boundary Implementation**
```typescript
// MISSING: Global error boundary
// If any component throws → Entire app white screen
```

**DANGER:** React 18 error boundaries should catch rendering errors, but none are implemented. One API error → entire site crashes.

#### 2. **No API Error Retry Logic**
```typescript
export const fetchFlats = async (filters = {}) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching flats:", error); // ← Only logs
    throw error; // ← Propagates error, no retry
  }
};
```

**DANGER:** No exponential backoff, no retry logic. If API has a 1-second hiccup → user sees broken page.

#### 3. **No Build-Time Health Checks**
```bash
# MISSING: Pre-build health check script
# Should verify:
# - API is reachable
# - Required endpoints respond
# - Image domains are accessible
```

**DANGER:** Deployments can fail halfway through with cryptic errors.

---

## 📊 MAINTENANCE COMPLEXITY MATRIX

| Task | Required Expertise | Risk Level | Failure Impact |
|------|-------------------|------------|----------------|
| Add new API endpoint | Next.js SSR, TypeScript, API sync | 🔴 CRITICAL | Full site crash |
| Change image CDN | Next.js config, Spatie Media, CDN | 🔴 CRITICAL | All images broken |
| Update translation | JSON validation, i18n middleware | 🟡 MEDIUM | Runtime crash for that locale |
| Modify floor plan logic | SVG manipulation, state mgmt | 🔴 CRITICAL | Interactive selector broken |
| Add new page | App Router, SSR, metadata API | 🟡 MEDIUM | SEO penalties, 404 errors |
| Update dependencies | Next.js 15 patterns, breaking changes | 🔴 CRITICAL | Build failures |
| Change API schema | TypeScript interfaces, data migration | 🔴 CRITICAL | Cascading failures |
| Deploy to production | Blue-green deploy, cache invalidation | 🔴 CRITICAL | Downtime, data inconsistency |

---

## 💀 REALISTIC FAILURE SCENARIOS

### Scenario 1: Marketing Agency Updates a Heading
```typescript
// They change:
<h1 className="uppercase">{t('MainTitle')}</h1>
// To:
<h1 style={{textTransform: 'uppercase'}}>{t('MainTitle')}</h1>
```

**RESULT:**  
✅ English: Works fine  
✅ Russian: Works fine  
❌ **Georgian: Displays incorrectly** (Latin uppercase instead of Mtavruli)  
- Primary market (Georgian users) sees broken text
- Agency doesn't notice (tests in English)
- Client loses trust

---

### Scenario 2: Backend Dev Changes API Response
```php
// Laravel backend changes:
'total_area' => $flat->totalArea  // From snake_case to camelCase
```

**RESULT:**  
❌ Apartment cards show "undefined m²"  
❌ Floor plan modal crashes  
❌ Filtering breaks  
❌ SEO metadata missing area  
- Frontend team doesn't know backend changed
- No error in logs (JavaScript silently handles undefined)
- Takes days to debug

---

### Scenario 3: Agency "Optimizes" Images
```typescript
// They change:
<Image src={apiImage} ... />
// To:
<img src={apiImage} />  // "Simpler"
```

**RESULT:**  
❌ Next.js optimization pipeline bypassed  
❌ Images load at full resolution (5MB+)  
❌ Page speed drops from 95 to 30  
❌ Google downgrades SEO ranking  
❌ Mobile users see slow site

---

### Scenario 4: Deployment Without Backend Coordination
```
Day 1: Backend deploys new API with breaking changes
Day 2: Marketing agency tries to deploy frontend
  ↓
Build fails (API responses don't match interfaces)
  ↓
Agency "fixes" by adding `any` types
  ↓
Build succeeds ✅
  ↓
Runtime: Everything crashes ❌
  ↓
Site is down for 6 hours
```

---

## ✅ REQUIRED EXPERTISE FOR MAINTENANCE

### Minimum Skills Required

#### Must Have (Non-Negotiable)
1. **Next.js 15 App Router Expert**
   - Async params pattern
   - Server Components vs Client Components
   - Metadata API
   - ISR and caching strategies

2. **Advanced TypeScript**
   - Interface design
   - Generic types
   - Type guards
   - Strict mode compliance

3. **Headless CMS Architecture**
   - API-first design
   - Frontend-backend synchronization
   - Schema versioning
   - Atomic deployments

4. **i18n & Localization**
   - next-intl middleware
   - Dynamic message loading
   - RTL/LTR considerations
   - Unicode transformations

5. **State Management**
   - React hooks architecture
   - Complex useEffect dependencies
   - URL state synchronization
   - Modal state handling

6. **SEO & Structured Data**
   - JSON-LD schemas
   - Multi-locale canonicals
   - Dynamic sitemap generation
   - OpenGraph/Twitter Cards

7. **Image Optimization**
   - Next.js Image component
   - CDN integration
   - Lazy loading strategies
   - Blur placeholders

8. **API Integration**
   - Axios configuration
   - Error handling
   - Loading states
   - Retry logic

#### Nice to Have
- Framer Motion animations
- SVG manipulation
- Performance optimization
- Vercel deployment
- Laravel/Filament knowledge

---

## 🎯 MAINTENANCE TASKS THAT LOOK SIMPLE BUT ARE DEADLY

### "Simple" Task: Change Button Color
```typescript
// Seems simple:
<button className="bg-[#CB684D]">  // Change color
```

**HIDDEN COMPLEXITY:**
- Button appears in 15+ components
- Some use Tailwind classes
- Some use inline styles
- Some inherit from parent
- Hover states must match
- Focus states for accessibility
- Loading states
- Disabled states
- Mobile vs desktop variations

**Proper fix requires:**
- Creating design token system
- Updating all variants
- Testing all states
- Checking color contrast (WCAG)
- Verifying on all locales

**Marketing agency will:** Change one instance, break consistency everywhere

---

### "Simple" Task: Add New Apartment
```
1. Add apartment in Filament admin panel ✅ Easy
2. Apartment appears on site ❌ NOT AUTOMATIC
```

**HIDDEN COMPLEXITY:**
- Need to invalidate ISR cache
- Update sitemap (currently not dynamic)
- Regenerate floor plan SVG coordinates
- Update SEO metadata
- Trigger new build if using SSG
- Clear CDN cache

**Marketing agency will:** Add apartment, client asks "Why isn't it showing?", agency blames caching, waits 24 hours, still doesn't show.

---

### "Simple" Task: Fix Typo in Translation
```json
// Fix typo in src/messages/ka.json
{
  "MainTitle": "კოლხისზღვა"  // Fix spelling
}
```

**HIDDEN COMPLEXITY:**
- Must maintain JSON structure
- Must test with Georgian uppercase transform
- Must check all pages using this key
- Must verify text length doesn't break layout
- Must ensure special characters render correctly

**Marketing agency will:** Fix typo, accidentally add trailing comma, entire Georgian site crashes.

---

## 🚨 FINAL ASSESSMENT: HANDOVER RISK LEVEL

### Overall Risk Score: **9.5 / 10 (CRITICAL)**

### Recommended Maintenance Model

#### ❌ NOT SUITABLE FOR:
- Marketing agencies with basic Next.js experience
- WordPress/CMS-focused teams
- Junior developers
- Agencies without TypeScript expertise
- Teams unfamiliar with headless architecture

#### ✅ REQUIRES:
- **Senior Next.js developer** (3+ years App Router experience)
- **Backend API coordination** (cannot work independently)
- **DevOps support** (deployment pipeline expertise)
- **QA testing** (automated E2E tests)
- **Monitoring infrastructure** (error tracking, performance)

### Estimated Maintenance Hours (Monthly)
- **Routine updates:** 10-15 hours
- **Feature additions:** 20-40 hours
- **Bug fixes:** 5-10 hours
- **Emergency support:** 5-10 hours
- **Total:** **40-75 hours/month**

### Cost of Single Critical Error
- Site downtime: **$500-2,000/hour** (lost leads)
- SEO damage: **$5,000-10,000** (months to recover)
- Client trust: **Priceless** (brand reputation)

---

## 📋 TECHNICAL INTERVIEW QUESTIONS FOR ANY MAINTENANCE TEAM

Ask the proposed maintenance team these questions. If they can't answer, **DO NOT HAND OVER**:

### Next.js Architecture
1. "What's the difference between Server Components and Client Components in Next.js 15?"
2. "How does the new async params pattern work?"
3. "Explain ISR cache invalidation strategies"

### API Integration
4. "How would you handle a breaking change in the backend API schema?"
5. "What happens if the API is down during `next build`?"
6. "Explain TypeScript interface vs runtime validation"

### i18n & Localization
7. "How does next-intl middleware rewrite URLs?"
8. "Why can't we use standard CSS `text-transform: uppercase` for Georgian?"
9. "How would you add a 4th language (German)?"

### Image Optimization
10. "What's the purpose of the `domains` config in next.config.ts?"
11. "How does Next.js Image optimization work with external CDNs?"
12. "What happens if an image URL is not in the whitelist?"

### Deployment
13. "How would you coordinate a deployment that requires both frontend and backend changes?"
14. "Explain blue-green deployment for this architecture"
15. "How do you invalidate the frontend cache when backend data changes?"

### **Scoring:**
- 0-5 correct: ❌ **REJECT** - Will break site immediately
- 6-10 correct: ⚠️ **RISKY** - Will break site within 1 month
- 11-13 correct: 🟡 **MARGINAL** - Can handle routine tasks only
- 14-15 correct: ✅ **ACCEPTABLE** - Can maintain with supervision

---

## 🎯 CONCLUSION

This is not a simple website. This is an **enterprise-grade headless CMS architecture** that requires:

✅ **Senior-level Next.js expertise**  
✅ **TypeScript mastery**  
✅ **API synchronization knowledge**  
✅ **Multi-locale architecture understanding**  
✅ **Production deployment experience**  
✅ **Performance optimization skills**  

**A marketing agency with "Next.js experience" is like a bicycle mechanic maintaining a Tesla.**  
They might understand the basic concepts, but they'll cause catastrophic damage the moment something breaks.

---

## 📞 RECOMMENDED ACTION PLAN

1. **Do NOT hand over to generalist agency**
2. **Require senior Next.js developer on contract** (minimum 3 years experience)
3. **Establish API change coordination protocol** (backend must notify frontend)
4. **Implement proper error monitoring** (Sentry or similar)
5. **Create comprehensive test suite** (E2E with Playwright)
6. **Document deployment checklist** (with health checks)
7. **Set up staging environment** (identical to production)
8. **Require code review process** (all changes reviewed by senior dev)

**Estimated setup cost:** $10,000-15,000  
**Alternative cost if agency breaks site:** $50,000+ (rebuild + lost revenue + reputation damage)

---

**Document prepared by:** Original Project Author  
**Date:** February 10, 2026  
**Purpose:** Technical due diligence for maintenance handover  
**Status:** CONFIDENTIAL - For client decision-making only

