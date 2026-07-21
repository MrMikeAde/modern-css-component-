# Event Card

## Overview
Visual calendar event listing displaying schedule poster, poster badges, date stamp sheet, and locator pins. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Event Card Mockup]                 │
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
<article class="card-event">
  <div class="card-event__image">
    <img src="https://picsum.photos/400/250?random=17" alt="Tech Expo Event Poster" class="card-event__img">
    <div class="card-event__date-badge">
      <span class="card-event__month">OCT</span>
      <span class="card-event__day">15</span>
    </div>
  </div>
  <div class="card-event__body">
    <h3 class="card-event__title">International Tech Summit 2026</h3>
    <p class="card-event__loc">📍 Moscone Center, SF</p>
    <button class="card-event__btn" type="button">Get Tickets</button>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-event-bg` | `#ffffff` | Background color |
| `--card-event-border` | `#f1f5f9` | Border color boundary line |
| `--card-event-primary` | `#ef4444` | Monthly date badge background and primary CTA color |
| `--card-event-accent` | `#0f172a` | Header title text font color |
| `--card-event-text` | `#64748b` | Location pin and schedule subtext color |
| `--card-event-radius` | `12px` | Border radius boundary size |

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
