# Video Thumbnail Card

## Overview
Video compilation container featuring responsive aspect-ratio overlays, progress trackers, and metadata rows. Built with strictly semantic markup, modern CSS variables, logical properties, and beautiful hover animations.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Video Thumbnail Card Mockup]                 │
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
<article class="card-video">
  <div class="card-video__preview">
    <img src="https://picsum.photos/400/225?random=25" alt="Clean Web Workspace Video Thumbnail" class="card-video__img">
    <time class="card-video__duration">14:22</time>
  </div>
  <div class="card-video__body">
    <img src="https://picsum.photos/80/80?random=26" alt="Layout Labs Channel Avatar" class="card-video__chan-avatar">
    <div class="card-video__info">
      <h3 class="card-video__title">Mastering Responsive CSS Container Queries</h3>
      <span class="card-video__channel">Layout Labs</span>
      <div class="card-video__meta">
        <span>48K views</span>
        <span>•</span>
        <span>2 days ago</span>
      </div>
    </div>
  </div>
</article>
```

## CSS Customization
Exposed styling custom variables available for local overriding:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--card-video-bg` | `#0f172a` | Preview container fallback background |
| `--card-video-border` | `#f1f5f9` | Visual border line |
| `--card-video-primary` | `#0f172a` | Title text font color |
| `--card-video-accent` | `rgba(0,0,0,0.8)` | Timeline duration tag background |
| `--card-video-text` | `#475569` | Channel name subtext color |
| `--card-video-radius` | `10px` | Border radius size |

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
