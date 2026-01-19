# Personal Website

## Project Overview

A professional portfolio and personal showcase website that highlights software development skills while giving visitors insight into my interests in aviation, language learning, and backpacking.

**Primary Goal**: Showcase technical expertise and attract professional opportunities
**Secondary Goal**: Share personal interests and create a memorable, authentic impression

---

## Design Language Concept

### Core Philosophy: "Precision with Personality"

The design balances **technical precision** (reflecting software engineering skills) with **human warmth** (showing interests and personality). Think of it as a well-architected codebase meets a personal journal.

### Design Pillars

1. **Clarity First**: Information hierarchy that guides visitors naturally
2. **Technical Craft**: Clean, intentional design that demonstrates attention to detail
3. **Subtle Motion**: Purposeful animations that enhance without distracting
4. **Authentic Voice**: Personal touches that make the site memorable

---

## Visual Design System

### Color Palette

- **Primary**: Deep navy (`#0A1929`) - sophistication and depth
- **Secondary**: Electric blue (`#00D4FF`) - technology and energy
- **Accent**: Warm amber (`#FFB830`) - aviation/adventure callback
- **Neutrals**: Slate grays (`#1E293B`, `#64748B`, `#F1F5F9`)
- **Success/CTA**: Vibrant green (`#10B981`)

**Rationale**: Professional with pops of energy. The amber acts as a bridge to aviation interests (cockpit lighting, sunsets at altitude).

### Typography

**Display/Headers**:

- Modern geometric sans: Inter, Manrope, or Space Grotesk
- Clean, technical feel with excellent readability

**Body Text**:

- Readable sans: Inter, System UI stack, or Atkinson Hyperlegible
- Optimized for long-form reading

**Code/Technical**:

- Monospace: JetBrains Mono, Fira Code, or SF Mono
- For code snippets, technical details, or decorative elements

**Accent/Optional**:

- Consider a subtle serif for pull quotes or section intros (Crimson Pro, Lora)

### Layout Philosophy

**Grid System**: 12-column responsive grid with generous whitespace

**Spacing Scale**: 4px base unit (4, 8, 16, 24, 32, 48, 64, 96, 128px)

**Breakpoints**:

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+
- Wide: 1440px+

**Max Content Width**: 1200px for optimal readability

---

## Layout & Structure Ideas

### Navigation

- Sticky header with minimal navigation
- Sections: About, Work/Projects, Interests, Contact
- Smooth scroll to sections OR multi-page with thoughtful transitions

### Hero Section

**Concept 1**: Split personality

- Left: Professional headshot/avatar
- Right: Rotating taglines that show different facets
  - "Software Developer"
  - "Private Pilot" (with aviation icon)
  - "Language Enthusiast" (rotating through languages you speak)
  - "Backpacker" (trail icon)

**Concept 2**: Terminal intro

```
> whoami
John Champion

> cat interests.txt
software_development: true
aviation: PPL_certified
languages: [en, es, ...]
miles_hiked: updating...

> ls projects/
Loading projects...
```

**Concept 3**: Clean and direct

- Large, confident headline
- Short, authentic bio
- Clear CTA to view work
- Background: Subtle gradient OR full-bleed background image (mountain/cockpit/code?)

### Projects/Portfolio Section

**Layout**: Card-based grid or featured project showcase

**Each Project Card Includes**:

- Hero image/screenshot
- Title & short description
- Tech stack (as tags/badges)
- Link to live demo + GitHub
- Brief "challenge & solution" summary

**Filtering**: Allow filtering by technology, type, or topic

**Special Touch**: Use micro-interactions (hover states, card lifts, subtle parallax)

### Interests Section

**Aviation**:

- Certificate/rating callouts
- Flight hours counter
- Favorite flying memory or photo
- Map of places flown?

**Language Learning**:

- Languages studied with proficiency levels
- Current learning project
- Fun fact (e.g., "Can debug in 3 languages")

**Backpacking**:

- Trail map visualization
- Notable hikes/trips
- Gear philosophy or favorite location

**Layout Idea**: Three-column cards with icons, or a horizontal scrolling timeline

### About/Bio Section

- Professional background
- Current role/availability
- Skills matrix or tech stack visualization
- Link to resume/CV
- Personality: Inject some humor or unique perspective

### Contact/Footer

- Email, LinkedIn, GitHub, other relevant links
- "Open to opportunities" status indicator
- Fun easter egg for persistent visitors?

---

## Component & Interaction Ideas

### Micro-Interactions

1. **Hover states**: Smooth transitions, subtle lifts or color shifts
2. **Scroll reveals**: Fade in sections as they enter viewport
3. **Code snippet animations**: Typing effect or syntax highlighting reveal
4. **Navigation**: Underline animations, active state indicators

### Unique Elements

**Skill Visualization**:

- Instead of boring bars: Interactive tech stack bubbles
- Cluster related technologies
- Hover to see experience level or project count

**Project Timeline**:

- Visual timeline showing evolution as a developer
- Annotate with milestones (first job, certifications, major projects)

**Aviation Dashboard** (optional):

- Live flight tracking widget if you're currently flying
- Or a "flight log" style stat counter

**Background Elements**:

- Subtle topographic lines (maps/hiking theme)
- Circuit board patterns (tech theme)
- Code rain (Matrix-style, but tasteful)
- Constellation/navigation stars (ties aviation + navigation)

### Performance & Polish

- Optimize all images (WebP, lazy loading)
- Smooth 60fps animations
- Fast initial load (< 2 seconds)
- Accessibility: WCAG AA compliance minimum
- Dark mode toggle (bonus points)

---

## Content Strategy

### Tone of Voice

- **Professional but approachable**: Not stuffy, not overly casual
- **Confident without arrogance**: Let work speak for itself
- **Authentic**: Real interests, real voice
- **Concise**: Respect visitor's time

### Key Messages

1. "I build thoughtful, well-crafted software"
2. "I bring diverse perspectives from aviation, languages, and outdoor experiences"
3. "I'm curious, detail-oriented, and love solving complex problems"

### CTAs (Calls to Action)

- "View My Work"
- "See My Projects"
- "Let's Connect"
- "Download Resume"
- "Read More About [Interest]"

---

## Technical Stack Considerations

### Recommended Options

- Vanilla HTML/CSS/JavaScript (showcase fundamentals)
- Add interactivity with vanilla JS or lightweight library
- Use CSS custom properties for theming
- Implement progressive enhancement

---

## Development Roadmap

### Phase 1: Foundation

- [ ] Finalize design language and color palette
- [ ] Create design mockups (Figma, Sketch, or in-browser)
- [ ] Set up project structure and tooling
- [ ] Implement base HTML structure
- [ ] Build design system (typography, colors, spacing)

### Phase 2: Core Content

- [ ] Hero section with introduction
- [ ] Projects/portfolio section with 3-5 featured projects
- [ ] About section with bio and skills
- [ ] Contact section
- [ ] Responsive layout

### Phase 3: Personality & Polish

- [ ] Interests section (aviation, languages, backpacking)
- [ ] Add micro-interactions and animations
- [ ] Implement smooth scrolling and transitions
- [ ] Dark mode (optional)
- [ ] Performance optimization

### Phase 4: Launch

- [ ] Content review and copywriting
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] SEO optimization (meta tags, Open Graph, etc.)
- [ ] Deploy to hosting
- [ ] Set up custom domain

### Phase 5: Iterate

- [ ] Gather feedback
- [ ] Add blog or writing section (optional)
- [ ] Project case studies
- [ ] Analytics and tracking

---

## Design Decisions & Rationale

### Why This Approach?

**Professional Focus**: The primary goal is showcasing software skills, so the design itself becomes a demonstration of:

- Clean code and structure
- Attention to detail
- User experience thinking
- Technical implementation

**Personal Touch**: The interests sections humanize the portfolio and create conversation starters, making you more memorable than a generic developer portfolio.

**Performance as Feature**: A fast, accessible site demonstrates technical competence better than flashy but slow animations.

---

## Inspiration & References

### Portfolio Sites to Study

- Cassie Evans (cassie.codes) - playful animations
- Josh Comeau (joshwcomeau.com) - excellent technical writing + design
- Brittany Chiang (brittanychiang.com) - clean, developer-focused
- Bruno Simon (bruno-simon.com) - creative and memorable
- Lynn Fisher (lynnandtonic.com) - yearly redesigns with personality

### Design Systems

- Tailwind CSS color palettes
- Material Design 3 (for component ideas)
- Carbon Design System (IBM) - technical aesthetic
- GitHub Primer - developer-friendly patterns

### Aviation/Outdoor Aesthetic

- Cockpit UI design (clean, functional, high contrast)
- Topographic maps (contour lines, color schemes)
- National park posters (vintage, clean, iconic)

---

## Success Metrics

**Qualitative**:

- Does the site feel professional and trustworthy?
- Does it showcase technical skills effectively?
- Do the personal touches create authentic connection?
- Is it memorable?

**Quantitative**:

- Page load time < 2 seconds
- Mobile-friendly (responsive design)
- Accessibility score (Lighthouse) > 90
- Projects clearly visible within 2 clicks

---

## Next Steps

1. Review this design language document
2. Create a design language page to set the direction
3. Sketch or wireframe key sections
4. Gather content (project details, photos, copy)
5. Start building!

---

_Last Updated: 2025-12-18_
