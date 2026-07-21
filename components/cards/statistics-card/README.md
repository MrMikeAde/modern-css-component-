# Statistics Card

## Overview
Metric and label layout with custom upward trend badges and sparklines. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Statistics Card Mockup]                 │
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
<article class="card-stat">
  <span class="card-stat__label">Total Active Users</span>
  <div class="card-stat__row">
    <span class="card-stat__metric">84,204</span>
    <span class="card-stat__badge">+12.4%</span>
  </div>
  <p class="card-stat__desc">Compared to previous calendar quarter</p>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-stat-bg` | `#ffffff` | Background color |
| `--card-stat-border` | `#e2e8f0` | Border color line |
| `--card-stat-primary` | `#0f172a` | Metric text font color |
| `--card-stat-accent` | `#d1fae5` | Upward trend badge background |
| `--card-stat-text` | `#64748b` | Secondary label description color |
| `--card-stat-radius` | `12px` | Border radius size |

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
