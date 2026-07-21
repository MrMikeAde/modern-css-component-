# Gradient Card

## Overview
Vibrant linear mesh gradients mapping glowing visual card containers and multi-colored highlights. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Gradient Card Mockup]                 │
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
<article class="card-grad">
  <div class="card-grad__glow"></div>
  <h3 class="card-grad__title">HyperScale Platform</h3>
  <p class="card-grad__desc">Accelerate asset compilations with automated pipelines running directly on distributed cloud infrastructure grids.</p>
  <button class="card-grad__btn" type="button">Deploy Stack</button>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-grad-bg` | `linear-gradient(135deg, #1e1b4b, #311042)` | Mesh layout gradient background style |
| `--card-grad-primary` | `#ffffff` | Primary highlight header text color |
| `--card-grad-accent` | `rgba(236,72,153,0.3)` | Absolute hover radial reflection circle |
| `--card-grad-radius` | `16px` | Border radius size |

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
