# User Profile Card

## Overview
Sleek user profile card with user avatar, status indicators, Job titles, and quick action buttons. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [User Profile Card Mockup]                 │
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
<article class="card-profile">
  <div class="card-profile__banner"></div>
  <div class="card-profile__body">
    <div class="card-profile__avatar-box">
      <img src="https://picsum.photos/120/120?random=14" alt="Seraphina Vance" class="card-profile__avatar">
    </div>
    <h3 class="card-profile__name">Seraphina Vance</h3>
    <span class="card-profile__role">Lead UI Designer</span>
    <p class="card-profile__bio">Passionate about design systems, responsive layouts, and pixel-perfect setups.</p>
    <div class="card-profile__actions">
      <button class="card-profile__btn card-profile__btn--primary" type="button">Follow</button>
      <button class="card-profile__btn card-profile__btn--secondary" type="button">Message</button>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-prof-primary` | `#10b981` | Status dot indicator and primary banner color |

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
