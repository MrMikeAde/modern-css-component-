# Portfolio Project Card

## Overview
Designer showcase block displaying project mockup, overlay masks, and category tags. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Portfolio Project Card Mockup]                 │
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
<article class="card-port">
  <div class="card-port__display">
    <img src="https://picsum.photos/400/300?random=27" alt="Fintech App Dashboard Mockup" class="card-port__img">
    <div class="card-port__mask">
      <a href="#" class="card-port__action" aria-label="View project details">View Case Study ↗</a>
    </div>
  </div>
  <div class="card-port__meta">
    <h3 class="card-port__title">Fintech App Dashboard</h3>
    <div class="card-port__tags">
      <span class="card-port__tag">UX/UI</span>
      <span class="card-port__tag">Design System</span>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-port-bg` | `#ffffff` | Background card base |
| `--card-port-border` | `#f1f5f9` | Card border divider line |
| `--card-port-primary` | `#0f172a` | Case study title color |
| `--card-port-accent` | `rgba(15,23,42,0.85)` | Hover project mask background overlay |
| `--card-port-text` | `#64748b` | Tech stacks tags description color |
| `--card-port-radius` | `12px` | Border radius size |

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
