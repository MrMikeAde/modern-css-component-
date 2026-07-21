# Blog Post Card

## Overview
Article preview layout with tags, read time, responsive design, and hover animation triggers. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Blog Post Card Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Semantic, highly accessible markup structure
- Fully responsive design conforming to parent wrappers
- Hardware-accelerated transitions and subtle lift hover states
- Modern CSS variables facilitating fast brand customization

## HTML Usage
```html
<article class="card-blog">
  <div class="card-blog__thumbnail">
    <img src="https://picsum.photos/400/250?random=12" alt="CSS Grid Workspace" class="card-blog__img" loading="lazy">
  </div>
  <div class="card-blog__body">
    <div class="card-blog__meta">
      <span class="card-blog__category">Engineering</span>
      <time class="card-blog__date" datetime="2026-07-21">July 21, 2026</time>
    </div>
    <h3 class="card-blog__title">
      <a href="#" class="card-blog__link">Next-Gen CSS Subgrid Layouts</a>
    </h3>
    <p class="card-blog__text">Learn how subgrids are completely redefining standard card structures across multi-column layouts...</p>
    <div class="card-blog__author">
      <img src="https://picsum.photos/100/100?random=13" alt="Marcus Thompson" class="card-blog__avatar">
      <div class="card-blog__author-info">
        <span class="card-blog__name">Marcus Thompson</span>
        <span class="card-blog__read">5 min read</span>
      </div>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-blog-primary` | `#6366f1` | Primary category text and title link hover |
| `--card-blog-text` | `#64748b` | Secondary description and date color |
| `--card-blog-title` | `#0f172a` | Title and author header color |
| `--card-blog-radius` | `12px` | Border radius |

## Accessibility Notes
- Semantic sectioning wrappers (e.g. `<article>` or `<blockquote>`) provide proper screen-reader roles.
- Text colors have been strictly structured to ensure robust visual contrast ratios.
- Standard keyboard tab loops are preserved with distinct focused states.

## Browser Support
- Compatible with all modern browsers. Uses pure, standardized HTML5 and CSS3 logical properties.

## Best Use Cases
- Premium web platforms, enterprise SaaS portals, content feeds, and digital dashboards.

## License
MIT License.
