# Pricing Card

## Overview
SaaS style pricing plan card with popular choice badge, feature checklists, and prominent upgrade action. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Pricing Card Mockup]                 │
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
<article class="card-pricing card-pricing--featured">
  <div class="card-pricing__badge">Popular</div>
  <header class="card-pricing__header">
    <h3 class="card-pricing__title">Growth Plan</h3>
    <div class="card-pricing__price-box">
      <span class="card-pricing__currency">$</span>
      <span class="card-pricing__price">49</span>
      <span class="card-pricing__period">/mo</span>
    </div>
  </header>
  <div class="card-pricing__body">
    <ul class="card-pricing__features" role="list">
      <li class="card-pricing__feature">✓ Up to 10 team seats</li>
      <li class="card-pricing__feature">✓ 50GB space allocation</li>
      <li class="card-pricing__feature">✓ Dedicated API endpoints</li>
    </ul>
  </div>
  <footer class="card-pricing__footer">
    <button class="card-pricing__btn" type="button">Upgrade Growth</button>
  </footer>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-price-primary` | `#4f46e5` | Featured border color, checkmark color, and button background |
| `--card-price-accent` | `#e0e7ff` | Featured popular badge background |

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
