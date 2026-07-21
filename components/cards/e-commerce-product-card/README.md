# E-commerce Product Card

## Overview
Premium shopping layout featuring heart overlay, discount badges, pricing grids, and custom variant toggles. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [E-commerce Product Card Mockup]                 │
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
<article class="card-ecom">
  <div class="card-ecom__visual">
    <img src="https://picsum.photos/400/350?random=22" alt="Ergonomic S-Curve Office Chair" class="card-ecom__img">
    <span class="card-ecom__discount">-20%</span>
    <button class="card-ecom__favorite" type="button" aria-label="Add to wishlist">♥</button>
  </div>
  <div class="card-ecom__details">
    <h3 class="card-ecom__title">Ergonomic Mesh Chair</h3>
    <div class="card-ecom__pricing">
      <span class="card-ecom__current-price">$239.00</span>
      <span class="card-ecom__old-price">$299.00</span>
    </div>
    <div class="card-ecom__variants">
      <span class="card-ecom__var-dot card-ecom__var-dot--black" aria-label="Black color"></span>
      <span class="card-ecom__var-dot card-ecom__var-dot--blue" aria-label="Blue color"></span>
      <span class="card-ecom__var-dot card-ecom__var-dot--grey" aria-label="Grey color"></span>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-ecom-bg` | `#ffffff` | Background color |
| `--card-ecom-border` | `#f1f5f9` | Border color line |
| `--card-ecom-primary` | `#0f172a` | Title header text color |
| `--card-ecom-accent` | `#ef4444` | Discount tag and price reduction color |
| `--card-ecom-text` | `#64748b` | Old price and sub-elements color |
| `--card-ecom-radius` | `12px` | Border radius size |

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
