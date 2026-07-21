# Cards Category

## Overview
Cards are versatile containers designed to display structured content, media, and quick actions. This category showcases modern responsive cards utilizing CSS Grid, Flexbox, Fluid Typography, CSS Custom Properties, and Modern CSS pseudo-elements.

This is a premium, production-ready collection of 30 beautifully designed, semantic, and keyboard-accessible card components that can be directly dropped into any modern SaaS product, dashboard, e-commerce site, or portfolio.

---

## Quick Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Gallery & Component Index

Below is the complete list of 30 unique card components. Each link leads to its specific folder containing the HTML markup (`index.html`), the clean CSS styles (`style.css`), and dedicated design and customization instructions (`README.md`).

| # | Card Component | Description | Key Modern CSS Features |
| :--- | :--- | :--- | :--- |
| 1 | [Basic Card](./basic-card) | Clean content container with soft shadows. | Flexbox column layout, CSS Variables, hover lift |
| 2 | [Product Card](./product-card) | E-commerce layout with badge overlays & ratings. | Aspect ratio overlays, zoom on hover, ratings spacing |
| 3 | [Blog Post Card](./blog-post-card) | Article preview with category tags and date. | Image scaling, inline layout, metadata spacing |
| 4 | [Pricing Card](./pricing-card) | SaaS subscription option with popular choices. | Featured scale highlights, customized checkmark SVGs |
| 5 | [User Profile Card](./user-profile-card) | User profile block with cover banners and actions. | Avatar offset margins, status badge styling |
| 6 | [Team Member Card](./team-member-card) | Photo frame with overlay hover-triggers. | Image transforms, background gradient overlays |
| 7 | [Testimonial Card](./testimonial-card) | Styled quote with large quotes and customer info. | Blockquote semantic structure, quote styling |
| 8 | [Feature Card](./feature-card) | Icon-first layout emphasizing product values. | Box model hover shifts, dynamic colored icon panels |
| 9 | [Service Card](./service-card) | Grid service block with checklist details. | Micro layouts, bulleted check list, arrow triggers |
| 10 | [Statistics Card](./statistics-card) | Trend reporter displaying positive/negative indicators. | Row metrics, contrast badges, descriptive tags |
| 11 | [Dashboard Summary Card](./dashboard-summary-card) | Usage metric block with horizontal progress bar. | Progress trackers, warning level indicators |
| 12 | [Event Card](./event-card) | Calendar layout with schedule details & pins. | Calendar badge grids, absolute dates, action indicators |
| 13 | [Course Card](./course-card) | Study plan with tutor indicators and lesson counts. | Layout badges, course length bounds, custom triggers |
| 14 | [Job Listing Card](./job-listing-card) | Wide post displaying company logos and tags. | Horizontal flex/grid bounds, media-query layouts, apply buttons |
| 15 | [Property Listing Card](./property-listing-card) | Real estate feature with apartment stats. | Property specs columns, absolute value tag labels |
| 16 | [Restaurant Card](./restaurant-card) | Food rating layout with prep-times & cuisines. | Prep badge overlays, cuisine ratings, custom text boundaries |
| 17 | [Travel Destination Card](./travel-destination-card) | Scenic bleed visual displaying overlay descriptions. | Full bleeds, linear darker gradients, hover sweeps |
| 18 | [E-commerce Product Card](./e-commerce-product-card) | Shopping block with price reductions and variants. | Favorite heart triggers, discount tags, variant dots |
| 19 | [Shopping Cart Card](./shopping-cart-card) | Wide checkout list displaying stepper counts. | Stepper wrappers, count bounds, spacing margins |
| 20 | [Music Album Card](./music-album-card) | Cover artwork card with hover play buttons. | Artwork squares, play toggle transitions, duration metadata |
| 21 | [Video Thumbnail Card](./video-thumbnail-card) | 16:9 thumbnail preview displaying channels metadata. | Video timers, channel avatar flows, duration overlays |
| 22 | [News Card](./news-card) | Editorial column utilizing large bold serif titles. | Serif titles, category borders, authors metadata |
| 23 | [Portfolio Project Card](./portfolio-project-card) | Project case listing with overlay action masks. | Layout action masks, tech tags list, scale transforms |
| 24 | [NFT Showcase Card](./nft-showcase-card) | Digital asset container with auction clock details. | Dark slate backgrounds, bidding Ethereum tags, countdown tickers |
| 25 | [Glassmorphism Card](./glassmorphism-card) | Frost card using backdrop filter blur effects. | Backdrop filter blurs, white borders, glow spots |
| 26 | [Neumorphism Card](./neumorphism-card) | Soft UI tactile block with extruded offsets. | Double box shadows, concave button press effects |
| 27 | [Minimal Card](./minimal-card) | Scandinavian boutique editorial layout. | Serif fonts, fine line divisions, high whitespace |
| 28 | [Gradient Card](./gradient-card) | Vibrant mesh linear gradient background wrapper. | Colorful gradients, text overlay scales, glowing buttons |
| 29 | [Dark Theme Card](./dark-theme-card) | Coding terminal layout with console logs. | Terminal layouts, monospace elements, syntax color labels |
| 30 | [Premium SaaS Feature Card](./premium-saas-feature-card) | High-end feature container with golden trim frames. | Gold-trim borders, premium tags, hover shimmers |

---

## Core Guidelines For Cards

When implementing these cards, please adhere to our core standards:
1. **Semantic HTML5 wrappers**: Always wrap cards in appropriate semantic tags like `<article>`, `<blockquote>`, or `<aside>` instead of a plain generic `<div>` soup.
2. **Proper Header Hierarchies**: Ensure headers scale logically (e.g. starting at `<h3>` if the card sits within an `<h2>` section container).
3. **Alt Text Guidelines**: Always populate layout images with descriptive, meaningful `alt` text to assist screen-reader navigators.
4. **No Cumulative Layout Shift**: Utilize explicit aspect-ratio and flex basis dimensions to prevent visual shifting on page loading.

---

## Future Card Roadmap
- [ ] Add sliding drag-and-drop card stack patterns.
- [ ] Integrate CSS Subgrid models for perfect multi-row alignments.
- [ ] Incorporate interactive flip-card states using modern CSS transform-style.
- [ ] Introduce expandable details drawers natively within cards.
