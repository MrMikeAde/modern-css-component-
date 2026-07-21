# News Card

## Overview
High-impact editorial news card utilizing bold typography, category color lines, and date banners. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [News Card Mockup]                 │
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
<article class="card-news">
  <div class="card-news__accent"></div>
  <div class="card-news__body">
    <span class="card-news__tag">Breaking Tech</span>
    <h3 class="card-news__title"><a href="#" class="card-news__link">Quantum Computing Framework Launched</a></h3>
    <p class="card-news__desc">A consortium of research institutions has released the first open-source, logical qubits coding platform for modern browser interfaces.</p>
    <time class="card-news__time" datetime="2026-07-21">July 21, 2026</time>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-news-bg` | `#ffffff` | Background color |
| `--card-news-border` | `#e2e8f0` | Border color boundary line |
| `--card-news-primary` | `#f43f5e` | Accent border panel and breaking tag color |
| `--card-news-text` | `#475569` | Description summary text color |
| `--card-news-radius` | `8px` | Border radius size |

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
