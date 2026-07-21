# Team Member Card

## Overview
Team profile photo container with layout overlays, animated zoom, and hover-triggered social icons. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Team Member Card Mockup]                 │
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
<article class="card-team">
  <div class="card-team__photo-wrapper">
    <img src="https://picsum.photos/400/500?random=15" alt="Sarah Connor" class="card-team__photo" loading="lazy">
    <div class="card-team__overlay">
      <span class="card-team__tag">Cybersecurity</span>
    </div>
  </div>
  <div class="card-team__info">
    <h3 class="card-team__name">Sarah Connor</h3>
    <p class="card-team__role">VP of Security</p>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-team-bg` | `#ffffff` | Background color of the card |
| `--card-team-title` | `#1e293b` | Name header color |
| `--card-team-role` | `#0284c7` | Job role text and primary hover color |
| `--card-team-radius` | `12px` | Border radius size |

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
