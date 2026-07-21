# Product Card

## Overview
Clean e-commerce product card containing Picsum visual product image, rating stars, and customized actions. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Product Card Mockup]                 │
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
<article class="card-product">
  <div class="card-product__image-wrapper">
    <img src="https://picsum.photos/400/300?random=11" alt="Sleek Mechanical Keyboard" class="card-product__img" loading="lazy">
    <span class="card-product__tag">Best Seller</span>
  </div>
  <div class="card-product__body">
    <div class="card-product__rating">
      <span class="card-product__stars" aria-hidden="true">★★★★★</span>
      <span class="card-product__count">(48)</span>
    </div>
    <h3 class="card-product__title">HexaType Keyboard</h3>
    <p class="card-product__desc">Compact 65% hot-swappable keyboard with tactile switches.</p>
    <div class="card-product__footer">
      <span class="card-product__price">$149.00</span>
      <button class="card-product__btn" type="button">Add to Cart</button>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-prod-bg` | `#ffffff` | Background color of the card |
| `--card-prod-border` | `#f1f5f9` | Border color |
| `--card-prod-primary` | `#0f172a` | Primary title and price color |
| `--card-prod-accent` | `#f97316` | Accent badge overlay color |
| `--card-prod-text` | `#475569` | Secondary description text color |
| `--card-prod-radius` | `16px` | Border radius |

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
