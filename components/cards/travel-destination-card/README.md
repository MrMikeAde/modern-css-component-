# Travel Destination Card

## Overview
Inspiring travel layout with background-image overlay, location, rating, and brief highlight text. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Travel Destination Card Mockup]                 │
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
<article class="card-travel">
  <div class="card-travel__cover">
    <img src="https://picsum.photos/400/500?random=21" alt="Kyoto Pagoda Travel Landscape" class="card-travel__img">
    <div class="card-travel__overlay">
      <div class="card-travel__meta">
        <span class="card-travel__badge">Asia</span>
        <span class="card-travel__rating">★ 4.9</span>
      </div>
      <div class="card-travel__content">
        <h3 class="card-travel__title">Ancient Kyoto</h3>
        <p class="card-travel__desc">Step back in time through historic temple grounds, bamboo pathways, and classic timber teahouses.</p>
        <span class="card-travel__price">From $1,200</span>
      </div>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-travel-bg` | `#0f172a` | Cover backdrop background fallback |
| `--card-travel-primary` | `#38bdf8` | Starting price and accent color |
| `--card-travel-accent` | `#fbbf24` | Rating star highlight color |
| `--card-travel-radius` | `16px` | Border radius size |

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
