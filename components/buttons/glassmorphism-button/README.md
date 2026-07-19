# Glassmorphism Button

## Overview
Stunning translucent frosted-glass style button ideal for immersive image backgrounds.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Glassmorphism Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Hardware-accelerated backdrop-filter blur\n- Elegant sub-pixel white border frames\n- Superb premium dark theme appearance

## HTML Usage
```html
<div class="glass-bg-wrapper">
  <button class="btn-glass" type="button">Explore Space</button>
</div>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-glass-bg` | `rgba(255, 255, 255, 0.08)` | Transparent background core |\n| `--btn-glass-radius` | `8px` | Corner roundness metric |

## Accessibility Notes
- Ensure background images offer sufficient dark contrast to keep white button text readable.

## Browser Support
- Requires backdrop-filter. Gracefully falls back to slightly opaque grey backgrounds on old browsers.

## Best Use Cases
- Landing banners containing rich background photographic frames.

## License
MIT License.
