# Course Card

## Overview
Educational item highlighting online lessons count, course duration tracks, tutor icons, and interactive buy controls. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Course Card Mockup]                 │
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
<article class="card-course">
  <div class="card-course__banner">
    <img src="https://picsum.photos/400/220?random=18" alt="Visual CSS Course cover" class="card-course__img">
    <span class="card-course__difficulty">Intermediate</span>
  </div>
  <div class="card-course__content">
    <h3 class="card-course__title">Mastering Modern CSS Layouts</h3>
    <span class="card-course__tutor">By Dr. Linda Vance</span>
    <div class="card-course__stats">
      <span>📚 12 Lessons</span>
      <span>⏱ 4.5 Hours</span>
    </div>
    <div class="card-course__footer">
      <span class="card-course__price">$39.00</span>
      <button class="card-course__btn" type="button">Enroll Now</button>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-course-bg` | `#ffffff` | Background color |
| `--card-course-border` | `#f1f5f9` | Border color boundary line |
| `--card-course-primary` | `#4f46e5` | Price text and primary CTA highlight color |
| `--card-course-accent` | `rgba(15,23,42,0.8)` | Difficulty overlay tag background |
| `--card-course-text` | `#475569` | Lessons count and hours text color |
| `--card-course-radius` | `12px` | Border radius size |

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
