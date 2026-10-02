# Design System Specification: Platinum Hotel & Resort

## 1. Overview & Brand Identity
**Platinum Hotel & Resort** is an ultra-luxury hospitality brand catering to bespoke galas, milestone weddings, diplomatic summits, and high-net-worth leisure. The aesthetic balances timeless classic elegance with modern cinematic web presentation (GSAP-ready scroll narratives, glassmorphism, subtle micro-interactions).

* **Tone & Persona**: Aristocratic, sophisticated, understated opulence, architectural precision, welcoming concierge warmth.
* **Core Metaphor**: A nocturnal sanctuary illuminated by warm ambient candlelight and brushed gold highlights.

---

## 2. Color Palette & Token System

### 2.1 Primary & Neutral Colors (Dark Mode Foundation)
The canvas operates on an intentional dark/light rhythmic structure: nocturnal hero and closing sections contrasted by an ivory gallery section.

| Token Name | Hex Code | Tailwind Equivalent / Usage | Description |
|---|---|---|---|
| `--color-obsidian-950` | `#0A0A0C` | `bg-[#0A0A0C]` / `bg-neutral-950` | Dominant global dark background, deep void |
| `--color-charcoal-900` | `#111216` | `bg-[#111216]` | Secondary dark surface (Cards, Form containers) |
| `--color-charcoal-800` | `#1B1C22` | `bg-[#1B1C22]` | Input field backgrounds, elevated surface layers |
| `--color-charcoal-700` | `#282A33` | `border-[#282A33]` | Subtle surface dividers, form field borders |
| `--color-charcoal-600` | `#3E4150` | `border-[#3E4150]` | Active borders, hairline dividers |

### 2.2 Accent & Metallic Tones (Gold / Champagne)
Used sparingly for focus, prestige badges, micro-borders, and high-conversion actions.

| Token Name | Hex Code | Tailwind Equivalent / Usage | Description |
|---|---|---|---|
| `--color-gold-400` | `#E8C86A` | `text-[#E8C86A]` | Bright metallic gold highlight, heading accents |
| `--color-gold-500` | `#D4AF37` | `bg-[#D4AF37]` / `text-[#D4AF37]` | Primary brand gold (Hero CTA, Active tab, Star ratings) |
| `--color-gold-600` | `#B89326` | `hover:bg-[#B89326]` | Deep burnished gold (CTA hover state, pressed state) |
| `--color-gold-muted` | `rgba(212, 175, 55, 0.15)` | `bg-[#D4AF37]/15` | Pill badges, badge borders, glow effects |
| `--color-champagne` | `#F5E8C7` | `text-[#F5E8C7]` | Soft highlight text, italicized secondary headlines |

### 2.3 Light Section Tokens ("Discover Our Spaces")
The editorial break in the page narrative uses an ivory daylight backdrop to showcase architectural spaces clearly.

| Token Name | Hex Code | Tailwind Equivalent / Usage | Description |
|---|---|---|---|
| `--color-ivory-50` | `#FBFBF9` | `bg-[#FBFBF9]` / `bg-neutral-50` | Ivory background for daytime venue gallery |
| `--color-ivory-100` | `#F3F3EE` | `bg-[#F3F3EE]` | Card background in light section |
| `--color-slate-900` | `#1A1A1E` | `text-[#1A1A1E]` | Deep headline color in light section |
| `--color-slate-600` | `#5C5E6B` | `text-[#5C5E6B]` | Body copy and meta text in light section |

### 2.4 Functional & Feedback Colors
| Token Name | Hex Code | Tailwind Equivalent / Usage | Description |
|---|---|---|---|
| `--color-whatsapp` | `#25D366` | `bg-[#25D366]` | Floating concierge trigger & active chat badge |
| `--color-text-primary`| `#FFFFFF` | `text-white` | Primary headline and readable dark-surface text |
| `--color-text-secondary`| `#A1A3B0` | `text-neutral-400` | Secondary metadata, captions, date stamps |
| `--color-border-subtle` | `rgba(255,255,255,0.08)` | `border-white/10` | Glassmorphism borders and section separators |

---

## 3. Typography Hierarchy

### 3.1 Font Families
* **Display / Headings (Serif)**: `Cinzel`, `Playfair Display`, or `Cormorant Garamond` (fallback: `Georgia`, `serif`)
* **Body / Subheadings / UI (Sans-Serif)**: `Plus Jakarta Sans`, `Inter`, or `Montserrat` (fallback: `system-ui`, `-apple-system`, `sans-serif`)

### 3.2 Type Scale & Hierarchy Table
| Element | Font Family | Size / Leading (Desktop) | Size / Leading (Mobile) | Weight / Tracking | Case |
|---|---|---|---|---|---|
| **Eyebrow / Badge** | Sans-Serif | `11px` / `16px` | `10px` / `14px` | Medium (500), `tracking-[0.25em]` | UPPERCASE |
| **Hero Display H1** | Serif | `64px – 76px` / `1.05` | `38px – 46px` / `1.15` | Bold (700), `tracking-tight` | UPPERCASE |
| **Hero Accent H2** | Serif Italic | `28px – 32px` / `1.3` | `20px – 24px` / `1.3` | Regular (400), `italic` | Title Case |
| **Section Title H2**| Serif | `42px – 48px` / `1.15` | `30px – 34px` / `1.2` | SemiBold (600), `tracking-tight` | Title Case |
| **Card / Venue Title**| Serif | `22px – 24px` / `1.25` | `18px – 20px` / `1.3` | SemiBold (600) | Title Case |
| **Stat Numbers** | Sans / Serif | `32px – 36px` / `1.1` | `24px – 28px` / `1.1` | Bold (700), tabular | Numbers |
| **Body Primary** | Sans-Serif | `15px – 16px` / `1.6` | `14px – 15px` / `1.6` | Regular (400) | Sentence case |
| **Captions & Meta** | Sans-Serif | `12px – 13px` / `1.4` | `11px – 12px` / `1.4` | Medium (500), `tracking-wider` | Mixed / UPPER |
| **CTA Button Text** | Sans-Serif | `13px – 14px` / `1` | `13px` / `1` | SemiBold (600), `tracking-widest` | UPPERCASE |

---

## 4. Layout & Spacing System

### 4.1 Grid & Max-Width Constraints
* **Master Container**: `max-w-7xl` (`1280px`) with fluid side gutters (`px-4 sm:px-6 lg:px-8`).
* **Editorial Content Width**: `max-w-3xl` (`768px`) for centered hero messaging and section intros.
* **Form Container Width**: `max-w-4xl` (`896px`) centered on page.

### 4.2 Spacing Rhythm (Tailwind Scale)
* **Section Padding**: `py-20 lg:py-28` (vertical breathing room between distinct visual narrative acts).
* **Component Stacking**: `space-y-4` to `space-y-8` (rhythm between badge, headline, and paragraph).
* **Horizontal Scroll Gaps**: `gap-6` between venue cards with `px-4 md:px-8` scroll edge padding.

### 4.3 Breakpoints & Responsive Adaptations
* **Mobile (`< 768px`)**: Single-column vertical flow, horizontal snap-swipe carousels (`snap-x overflow-x-auto`), sticky glass bottom/top controls, collapsible hamburger navigation.
* **Desktop (`≥ 1024px`)**: Multi-column grids (3-column testimonials, 2-column footer/map split), expanded horizontal carousel with subtle navigational arrow triggers.

---

## 5. Component Guidelines & Specifications

### 5.1 Sticky Glassmorphic Navigation Bar
* **Styling**: `fixed top-0 left-0 right-0 z-50 bg-[#0A0A0C]/75 backdrop-blur-md border-b border-white/10`.
* **Left**: Brand logo icon (circular gold badge `P`) + dual-tier brand wordmark (`PLATINUM HOTEL & RESORT`).
* **Center / Right**: Clean text navigation links (`Home`, `Spaces`, `Reviews`, `Inquiries`, `FAQ`, `Location`) with champagne color transitions on hover (`hover:text-[#E8C86A]`).
* **Mobile State**: Minimalist gold SVG hamburger trigger with full-screen slide-down glass drawer.

### 5.2 Hero Section & GSAP Media Target (`#hero-media-container`)
* **Hierarchy**:
  1. Eyebrow badge with glowing gold bullet point.
  2. Massive Serif Title: `PLATINUM HOTEL & RESORT` in high-contrast crisp white with gold gradient treatment on `& RESORT`.
  3. Italic Champagne Subheading: *"Unforgettable Celebrations Begin Here"*.
  4. Centered descriptive paragraph with controlled line length (`max-w-2xl`).
* **Media Container Architecture (`#hero-media-container`)**:
  - `relative mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10`
  - Dimensions: `aspect-[16/9] w-full max-w-5xl`
  - GSAP Hook: Prepared with `transform-origin: center center; will-change: transform;` so a GSAP ScrollTrigger timeline can scale it to `100vw` / `100vh` on scroll.
  - Video/Image Poster: Luxury gala reception video placeholder (`autoplay muted loop playsinline`).
* **CTAs & Estate Metrics**:
  - Gold primary CTA button (`Inquire Now`) + outline secondary button (`Discover Spaces`).
  - Three-pillar trust metrics (e.g., `120,000 SQ. FT. ESTATE`, `5-Star CONCIERGE`, `1,200+ GALAS HOSTED`).

### 5.3 "Discover Our Spaces" Horizontal Scrolling Carousel
* **Container Structure**:
  - `overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 no-scrollbar`
  - Prev/Next floating circle triggers (`w-10 h-10 rounded-full border border-neutral-300 hover:border-gold-500`).
* **Space Card Anatomy**:
  - **Wrapper**: `snap-start flex-shrink-0 w-[300px] md:w-[340px] rounded-xl overflow-hidden bg-white shadow-md border border-neutral-200/80 hover:shadow-xl transition-all duration-300`.
  - **Media Area**: `aspect-[4/3]` or `aspect-[16/10]` image with upper category badge (`GRAND BALLROOM`, `OCEANFRONT`, `OPEN AIR`).
  - **Capacity Overlay**: Bottom gradient bar with guest capacity icon and square footage badge (`Up to 500 Guests • 10,500 sq ft`).
  - **Content Area**: Space index number (`01 / BALLROOM`), bold venue title, refined architectural description, and direct link (`Inquire Space →`).

### 5.4 Testimonial Review Grid ("Real Experiences")
* **Structure**: 3-column responsive card layout on deep charcoal background (`bg-[#111216] border border-white/10`).
* **Components**:
  - Circular avatar with subtle gold border.
  - Client name, verified event tag (e.g., `Wedding Gala • October 2024`).
  - 5-Star rating row using SVG vector stars filled with `#D4AF37`.
  - Italicized quote block.
  - **Guest Photo Proof**: Square thumbnail badge (`w-12 h-12 rounded-lg border border-white/10 overflow-hidden`) acting as social verification.

### 5.5 Private Consultation & Concierge Form
* **Container**: `bg-[#111216] border border-[#282A33] rounded-2xl p-6 md:p-10 max-w-3xl mx-auto shadow-2xl`.
* **Form Inputs**:
  - Background: `bg-[#1B1C22]`, border `border-[#282A33]`, text `text-white`, placeholder `text-neutral-500`.
  - Focus State: `focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors duration-200`.
* **Submission CTA**: Full-width brushed gold button with dark bold typography (`SUBMIT CONCIERGE INQUIRY`).

### 5.6 Split Location & Footer
* **Left Column**: Monogram wordmark, physical estate coordinates (`700 Platinum Promenade, Emerald Coastline Estate, CA 90265`), direct phone lines with click-to-call, concierge email, and links for FAQ & Valet/Helipad Access.
* **Right Column**: Interactive 16:9 dark-mode map visual placeholder featuring glowing gold pin radar effect, GPS coordinate stamps, and an `OPEN IN GOOGLE MAPS` button.

### 5.7 Floating Action Button (Concierge WhatsApp FAB)
* **Position**: `fixed bottom-6 right-6 z-50`.
* **Visual**: `w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30`.
* **Animation**: Continuous subtle radar pulse ring (`animate-ping opacity-30`) to draw visual attention without obtrusiveness.

---

## 6. Interaction & Animation Directives

1. **Elevation & Motion Philosophy**: Micro-interactions must feel weighted, smooth, and deliberate (durations: `300ms` to `600ms` with `cubic-bezier(0.16, 1, 0.3, 1)` easing). Avoid playful or bouncy spring physics.
2. **Hover States**:
   - Primary Buttons: Subtle gold luminance expansion + `translate-y-[-1px]`.
   - Cards: Upward elevation `translate-y-[-4px]` with image zoom (`scale-105 duration-700`).
   - Links: Gold underline expansion from center (`transform origin-left scale-x-100`).
3. **Scroll Animations**:
   - `#hero-media-container` is primed for GSAP `ScrollTrigger` pin-and-expand.
   - Section headers reveal with staggered fade-in (`opacity-0 translate-y-6`).
