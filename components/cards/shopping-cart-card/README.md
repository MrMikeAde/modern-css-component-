# Shopping Cart Card

## Overview
List element layout containing product thumbnail, price calculations, item adjustment steppers. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Shopping Cart Card Mockup]                 │
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
<article class="card-cart">
  <img src="https://picsum.photos/120/120?random=23" alt="Leather Duffel Bag" class="card-cart__thumbnail">
  <div class="card-cart__content">
    <div class="card-cart__main">
      <h3 class="card-cart__title">Waterproof Travel Bag</h3>
      <span class="card-cart__meta">Size: Medium | Color: Tan</span>
    </div>
    <div class="card-cart__foot">
      <div class="card-cart__stepper">
        <button class="card-cart__step-btn" type="button" aria-label="Decrease quantity">-</button>
        <span class="card-cart__quantity">2</span>
        <button class="card-cart__step-btn" type="button" aria-label="Increase quantity">+</button>
      </div>
      <span class="card-cart__price">$180.00</span>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-cart-bg` | `#ffffff` | Background color |
| `--card-cart-border` | `#e2e8f0` | Border color boundary line |
| `--card-cart-primary` | `#0f172a` | Total pricing text color |
| `--card-cart-text` | `#64748b` | Item size and details color |
| `--card-cart-radius` | `12px` | Border radius size |

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
