# Dashboard Summary Card

## Overview
Compact management metric block featuring progress bar capacity track. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Dashboard Summary Card Mockup]                 │
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
<article class="card-dash">
  <div class="card-dash__meta">
    <span class="card-dash__title">Cloud Disk Usage</span>
    <span class="card-dash__pct">72%</span>
  </div>
  <div class="card-dash__progress-bar" aria-label="Usage Percentage">
    <div class="card-dash__progress-fill" style="width: 72%;"></div>
  </div>
  <span class="card-dash__warning">Warning: Approaches full capacity limit.</span>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-dash-bg` | `#ffffff` | Background color |
| `--card-dash-border` | `#e2e8f0` | Border color boundary line |
| `--card-dash-primary` | `#f59e0b` | Progress bar highlight color |
| `--card-dash-accent` | `#f1f5f9` | Progress track base background |
| `--card-dash-text` | `#475569` | Metric description label color |
| `--card-dash-radius` | `10px` | Border radius size |

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
