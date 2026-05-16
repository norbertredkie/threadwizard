# ThreadWizard

Social media automation platform for creators.

## Brand Identity

- **Colors:** Violet (#7C3AED) + Cyan (#06B6D4) on dark background
- **Vibe:** Energetic, multi-platform, creator-focused
- **Typography:** Inter family (headings: SemiBold, body: Regular)

## Architecture

- **Framework:** Next.js 14 with React 18
- **Styling:** Tailwind CSS 3.3
- **Dark-first design:** All backgrounds dark, white/light text
- **Component system:** DRY, reusable, accessible

## Pages

1. **Homepage** (`/`) — Hero, features, value props, CTA
2. **Login** (`/login`) — Authentication with platform shortcuts
3. **Signup** (`/signup`) — Multi-step account creation + platform selection

## Design System

### Colors
- Primary: Violet (`#7C3AED`)
- Secondary: Cyan (`#06B6D4`)
- Background: Black (`#000000`)
- Surface: Dark Slate (`#1E293B`)

### Spacing (8px grid)
- xs: 4px | sm: 8px | md: 16px | lg: 24px | xl: 32px | 2xl: 48px

### Components
- Buttons: 8px radius, full-width or 140px+
- Cards: Dark background, subtle border, 16px gap
- Forms: Dark inputs, cyan focus state

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Deployment

```bash
npm run build
npm start
```

## Brand Compliance

All pages follow `BRAND_BOOK.md`:
- ✅ Dark backgrounds default
- ✅ Violet CTAs, Cyan secondary actions
- ✅ White text on dark, WCAG AA contrast
- ✅ 16px/24px spacing
- ✅ Creator-focused messaging

---

**Version:** 1.0.0  
**Status:** MVP in progress  
**Last Updated:** 2026-05-16
