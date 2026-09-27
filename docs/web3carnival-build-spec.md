# Web3 Carnival Redesign — Build Spec

Kalakriti Round 1 · Theme 3 FinTech · Scenario 1

---

## THE ARGUMENT (memorize this, it's your round 2 opening)

The current web3carnival.world is an archive pretending to be an event page.
Page title still reads "Web3 Carnival 2023." Three years of events have been
bolted onto a dead 2023 landing page.

They have genuinely strong assets buried in bad structure:
- 70+ speakers including people from AWS, Mastercard, Coinbase, Accenture
- 14 real events across Bengaluru, Dubai, Singapore, Delhi
- 5000+ attendees, 250+ investors, 750+ partners
- 100+ partner and media logos

We are not adding content. We are giving existing content a spine.

**The redesign turns the archive into the proof.** Past editions stop being
clutter and become the credibility engine that sells the next event.

---

## AUDIENCE — every design decision traces back here

Four people land on this site, and they want different things:

1. **Attendee** — "is this worth my time and ticket?"
   Needs: what is it, who's speaking, where/when, register.

2. **Sponsor** — "is this audience worth my money?"
   Needs: numbers, past sponsors, who attends, partner CTA.

3. **Speaker** — "is this stage worth my reputation?"
   Needs: who spoke before, tracks, apply.

4. **Ecosystem partner** (media, community, VC) — "what's in it for us?"
   Needs: partner tiers, past partners, apply.

The existing site serves all four with the same undifferentiated scroll.
Ours splits the paths early and routes each one.

---

## VISUAL DIRECTION — how we avoid "AI slop"

Banned, because it reads as generated:
- purple-to-blue gradient blobs
- glassmorphism cards with generic blur
- three identical feature cards in a row
- every heading centered
- Inter at one weight everywhere
- floating 3D blobs / abstract crypto orbs

Instead:

**Type**
- Display: one heavy condensed or wide grotesque for headlines (Archivo,
  Space Grotesk, or Clash Display). Big. 64–96px desktop hero.
- Body: clean neutral sans, 16–18px, 1.6 line height.
- Rule: exactly two typefaces. Scale of 6 sizes, no more.
- Numbers get display treatment — "5000+" should be huge, not body text.

**Color**
- Dark base, since it's a Web3 event and the existing site is dark.
- One accent, used sparingly. Pull the exact accent from their existing logo
  SVG, don't invent one.
- Neutrals: near-black background, two greys for surfaces, off-white text.
- Rule: accent only on interactive things and key numbers. If the accent is
  everywhere it means nothing.

**Layout**
- 12-column grid, generous gutters.
- Asymmetry on purpose. Left-aligned headlines, content offset from center.
- Whitespace is the premium signal. Sections breathe.
- Cards: sharp corners or one consistent small radius. Pick one and never vary.

**Motion** (doc lists this as bonus — do it)
- Scroll-triggered reveals, subtle, 200–300ms, never bouncy.
- Speaker cards: hover reveals role + socials.
- Number counters animate up when the stats section enters viewport.
- Hero has a slow ambient element, not a spinning crypto coin.

---

## SECTIONS — the doc requires these, in this order

### 1. Hero
- Event name, one line of positioning, date/location
- Two CTAs: primary Register, secondary Explore ecosystem
- Live countdown to next edition
- NOT another "World's Premier Blockchain Event" generic banner — lead with
  something concrete (the numbers or the next date)

### 2. The numbers (moved way up from where they currently sit)
5000+ attendees · 250+ investors · 1000+ developers · 500+ KOLs ·
750+ partners · 1500+ startups
- Big display type, animated count-up
- This is the sponsor hook and it's currently buried. Move it to position 2.

### 3. What is Web3 Carnival
- Short. Three sentences max. The current copy is four dense paragraphs.

### 4. Tracks / Themes
Seven existing tracks: Blockchain Infrastructure, DAO & Governance,
Metaverse & GameFi, ZK & Security, CeFi DeFi & Staking, Enterprise Blockchain,
NFT & Utilities
- Interactive cards, each expands or links to detail
- Currently all seven link to the homepage — dead links. Fix that.

### 5. Speakers
- **This is the biggest fix.** 70+ speakers currently in one flat grid.
- Featured row: 6–8 biggest names (AWS, Mastercard, Coinbase, Forbes 30u30)
- Then: filterable grid by track or region
- Card: photo, name, role, company, country, socials on hover
- "View all speakers" rather than dumping 70 on the homepage

### 6. Past editions
- 14 events currently in a flat wall
- Restructure: timeline or filterable by city (Bengaluru / Dubai / Singapore /
  Delhi / Across India)
- Each card: image, name, date, location, link
- Frame as "proof of scale," not "old stuff"

### 7. Who attends (ecosystem)
Existing 8 segments: Startups, Developers, Investors, Policy Makers,
Enterprises, Web3 Enthusiasts, Academia, Incubators
- Keep all 8, give each an icon and one line
- Grid, not a list

### 8. Sponsors & partners
- Currently 100+ logos in uncategorized walls
- Split into clear tiers: Past Sponsors / VCs / Community / Media /
  Ticketing / Crypto Payment
- Collapse long tiers behind "show all"
- Logo grid, consistent sizing, greyscale with color on hover

### 9. Get involved
- Currently six raw Tally links at the bottom
- Turn into a proper section: 6 cards — Sponsor, Speak, Media, Community
  Partner, Volunteer, Super Demo
- Each with one line explaining what it is, then the CTA

### 10. Contact / final CTA
- Register, Book a call, newsletter

### 11. Footer
- Existing nav groups: Web3 Carnival / Get Involved / More / Legal
- Socials: WhatsApp, Telegram, Twitter, Instagram, LinkedIn, LinkTree
- Newsletter signup

---

## RESPONSIVE

Desktop and mobile both required by the brief. Build mobile-first.

- Mobile: single column, stacked, hamburger nav
- Speaker grid: 1 col mobile / 2 tablet / 4 desktop
- Logo walls: 2 col mobile / 4 tablet / 6 desktop
- Hero type scales down but stays dominant — don't shrink it to body size
- Touch targets minimum 44px
- Test at 375px, 768px, 1440px

---

## ACCESSIBILITY (round 2 asks about this directly)

- Contrast 4.5:1 minimum on all text. Check the accent against dark bg.
- Every image gets alt text
- Keyboard navigable, visible focus states
- Motion respects prefers-reduced-motion
- Semantic HTML — real h1/h2/h3 hierarchy, nav, main, footer

---

## BONUS ITEMS THE DOC REWARDS

- Scroll-based storytelling ✓ (section reveals, counter animation)
- Micro-interactions ✓ (speaker hover, track expand, logo hover)
- Interactive speaker/event cards ✓ (filter + hover)
- Innovative registration flow — consider a short multi-step register
  (who are you → which track → details) instead of a raw external link
- Dark/light theme toggle — doc lists this, worth doing if time allows

---

## REQUIRED EXTRA: company overview deck

Same brand kit as the site. Roughly 10 slides:
1. Cover
2. What is Web3 Carnival
3. The numbers
4. Tracks
5. Past editions map
6. Speaker highlights
7. Who attends
8. Sponsor tiers
9. Partners
10. Contact / CTA

Build this as HTML slides in the same codebase and export to PDF, so the
brand kit is literally identical to the site — that's a defensible point
in round 2.

---

## SUBMISSION (confirmed with organizer over WhatsApp)

- Public GitHub repo, codebase inspectable
- README with proper screenshots — every section, desktop AND mobile
- Deploy on Vercel, put the live link in the README too
- Submit the repo link via the Form before it closes at 12pm

README structure:
```
# Web3 Carnival — Redesign
Live: [vercel link]

## The problem with the current site
[your 5 bullet points]

## Our approach
[the archive-to-proof thesis]

## Screens
[desktop screenshots, section by section]

## Mobile
[mobile screenshots]

## Design decisions
[type, color, motion, accessibility]

## Stack
[what you built it with]
```

The README is doing double duty — it's the submission AND it's your round 2
presentation script already written.

---

## WHAT TO PULL FROM THE LIVE SITE

Assets you can grab directly:
- Logo: web3carnival.world/_next/static/media/logo.a67d6019.svg
- Event photos: /pizza.png, /web3.png, /1.png, /events/1-4.png, /maha.png,
  /2.avif through /7.avif
- Speaker photos: all under /_next/static/media/[name].jpeg
- Track icons: /_next/static/media/icon1-8.svg
- Partner logos: throughout, many under /c/ and /m/ and /sp/

Pull the real ones. Placeholder gradients are the fastest way to look
AI-generated.
