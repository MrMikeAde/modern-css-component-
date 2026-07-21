# Restaurant Card

## Overview
Food preview card featuring rating badges, cuisine labels, and delivery estimate parameters. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Restaurant Card Mockup]                 │
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
<article class="card-rest">
  <div class="card-rest__header">
    <img src="https://picsum.photos/400/280?random=20" alt="Specialty Neapolitan Pizza" class="card-rest__img">
    <span class="card-rest__delivery">30-40 min</span>
  </div>
  <div class="card-rest__body">
    <div class="card-rest__meta">
      <h3 class="card-rest__title">Luigi's Neapolitan Pizza</h3>
      <span class="card-rest__rating">★ 4.8</span>
    </div>
    <span class="card-rest__cuisine">Pizza • Italian • Vegetarian</span>
    <p class="card-rest__desc">Authentic wood-fired Neapolitan pizzas crafted with imported San Marzano tomatoes.</p>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-rest-bg` | `#ffffff` | Background color |
| `--card-rest-border` | `#f1f5f9` | Border color boundary line |
| `--card-rest-primary` | `#0f172a` | Title header text color |
| `--card-rest-accent` | `#fbbf24` | Rating stars visual color |
| `--card-rest-text` | `#475569` | Cuisine subtext and description color |
| `--card-rest-radius` | `12px` | Border radius size |

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
