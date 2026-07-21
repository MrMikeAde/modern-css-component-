# Music Album Card

## Overview
Tactile musical compilation layout featuring absolute playback overlays and compact duration labels. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Music Album Card Mockup]                 │
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
<article class="card-album">
  <div class="card-album__art">
    <img src="https://picsum.photos/350/350?random=24" alt="Synthesized Nebula Album Art" class="card-album__img">
    <button class="card-album__play-btn" type="button" aria-label="Play album">▶</button>
  </div>
  <div class="card-album__info">
    <h3 class="card-album__title">Synthesized Nebula</h3>
    <span class="card-album__artist">The Retro Beats</span>
    <span class="card-album__year">LP • 2026</span>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-album-bg` | `#ffffff` | Background color |
| `--card-album-border` | `#f1f5f9` | Border color line |
| `--card-album-primary` | `#3b82f6` | Play button highlight background |
| `--card-album-accent` | `#475569` | Artist name subtext color |
| `--card-album-radius` | `12px` | Border radius size |

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
