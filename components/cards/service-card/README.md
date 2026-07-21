# Service Card

## Overview
Grid-oriented service item with inline icon and key offerings list. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Service Card Mockup]                 │
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
<article class="card-service">
  <div class="card-service__icon">💻</div>
  <h3 class="card-service__title">Frontend Development</h3>
  <ul class="card-service__list" role="list">
    <li class="card-service__item">✓ Modern HTML5 / CSS3</li>
    <li class="card-service__item">✓ Design System Scale</li>
    <li class="card-service__item">✓ Accessibility Auditing</li>
  </ul>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-service-bg` | `#ffffff` | Background color |
| `--card-service-border` | `#f1f5f9` | Border color line |
| `--card-service-primary` | `#3b82f6` | Primary focus visual color |
| `--card-service-text` | `#475569` | Secondary items text color |
| `--card-service-radius` | `12px` | Border radius boundary size |

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
