# Basic Card

## Overview
Clean, versatile content container with soft shadows, subtle borders, and modern spacing. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Basic Card Mockup]                 │
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
<article class="card-basic">
  <header class="card-basic__header">
    <h3 class="card-basic__title">Workspace Optimization</h3>
    <span class="card-basic__badge">SaaS Tech</span>
  </header>
  <div class="card-basic__body">
    <p class="card-basic__text">Discover essential practices and systems to optimize your remote team's productivity and improve overall focus without digital fatigue.</p>
  </div>
  <footer class="card-basic__footer">
    <a href="#" class="card-basic__link">Read Article</a>
  </footer>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-basic-bg` | `#ffffff` | Background color of the card |
| `--card-basic-border` | `#e2e8f0` | Border color |
| `--card-basic-text` | `#334155` | Text content color |
| `--card-basic-title` | `#0f172a` | Title header color |
| `--card-basic-primary` | `#4f46e5` | Primary badge and link color |
| `--card-basic-radius` | `12px` | Card border radius |

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
