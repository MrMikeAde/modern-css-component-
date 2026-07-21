# Property Listing Card

## Overview
Real estate feature card listing property details with clean overlay tag badges. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Property Listing Card Mockup]                 │
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
<article class="card-prop">
  <div class="card-prop__photo">
    <img src="https://picsum.photos/400/280?random=19" alt="Beautiful Modern Apartment Living Space" class="card-prop__img">
    <span class="card-prop__price">$2,450/mo</span>
  </div>
  <div class="card-prop__body">
    <h3 class="card-prop__title">Sleek Loft near Mission Bay</h3>
    <p class="card-prop__address">844 Harrison Ave, San Francisco</p>
    <div class="card-prop__specs">
      <span>🛏 2 Beds</span>
      <span>🛁 2 Baths</span>
      <span>📐 1,120 sqft</span>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-prop-bg` | `#ffffff` | Background color |
| `--card-prop-border` | `#e2e8f0` | Border color boundary line |
| `--card-prop-primary` | `#0f172a` | Pricing badge background |
| `--card-prop-accent` | `#64748b` | Specifications subtext color |
| `--card-prop-text` | `#475569` | Beds and baths text icon color |
| `--card-prop-radius` | `12px` | Border radius size |

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
