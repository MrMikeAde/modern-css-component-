# Animated Border Button

## Overview
Technically advanced dark-vibe button with an animated gradient border running along its outer container edge.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Animated Border Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Hardware-accelerated moving linear-gradient border loop\n- Nested dark background plate for depth\n- Highly visual aesthetic suitable for modern Web3 or tech products

## HTML Usage
```html
<button class="btn-animated-border" type="button">
  <span>Secure Access</span>
</button>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-anim-bg` | `#111` | Inside background core |\n| `--btn-anim-radius` | `10px` | Corner border scale ratio |

## Accessibility Notes
- Make sure reduced-motion media overrides stop the fast gradient flow for sensitive eyes.

## Browser Support
- Requires CSS keyframes and background-size support.

## Best Use Cases
- Web3 projects, technical SaaS portal entries, secure payment buttons.

## License
MIT License.
