# Job Listing Card

## Overview
Horizontal job post card showing company logo metadata, salary labels, location markers, and job status badges. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Job Listing Card Mockup]                 │
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
<article class="card-job">
  <div class="card-job__left">
    <div class="card-job__logo">💼</div>
    <div class="card-job__details">
      <h3 class="card-job__title">Senior UX/UI Architect</h3>
      <span class="card-job__company">ByteCraft Systems</span>
      <div class="card-job__tags">
        <span class="card-job__tag card-job__tag--type">Full-Time</span>
        <span class="card-job__tag">Remote</span>
        <span class="card-job__tag card-job__tag--salary">$120k - $150k</span>
      </div>
    </div>
  </div>
  <div class="card-job__right">
    <button class="card-job__btn" type="button">Apply Now</button>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-job-bg` | `#ffffff` | Background color |
| `--card-job-border` | `#e2e8f0` | Border color boundary line |
| `--card-job-primary` | `#1e3a8a` | Apply button and header title text color |
| `--card-job-accent` | `#eff6ff` | Salary tag highlight background |
| `--card-job-text` | `#475569` | Company details subtext color |
| `--card-job-radius` | `12px` | Border radius size |

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
