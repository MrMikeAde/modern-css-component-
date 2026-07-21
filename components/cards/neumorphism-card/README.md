# Neumorphism Card

## Overview
Soft UI tactile layout featuring convex extruded curves and matching inset depression active states. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Neumorphism Card Mockup]                 │
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
<article class="card-neu">
  <h3 class="card-neu__title">Tactile Feed</h3>
  <p class="card-neu__desc">A soft UI dashboard block featuring compound shadows and smooth extruded responsive hover states.</p>
  <button class="card-neu__btn" type="button">Press Tracker</button>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-neu-bg` | `#e0e8f6` | Tactile body background color |
| `--card-neu-primary` | `#4a5568` | Content text and button font color |
| `--card-neu-radius` | `16px` | Border radius boundary size |

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
