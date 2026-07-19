# Icon Button

## Overview
Circular icon trigger using embedded vector SVG, optimized for visual interface triggers.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Icon Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Circular modern profile\n- Smooth inline SVG scaling interactions\n- Aria-label optimization for screen readers

## HTML Usage
```html
<button class="btn-icon" type="button" aria-label="Search items">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
</button>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-icon-size` | `42px` | Overall button diameter |\n| `--btn-icon-bg` | `#ffffff` | Background color |

## Accessibility Notes
- Always supply an explicit `aria-label` attribute on pure icon buttons.

## Browser Support
- All modern browsers.

## Best Use Cases
- Global navigation search toggles, control bars, or dismiss buttons.

## License
MIT License.
