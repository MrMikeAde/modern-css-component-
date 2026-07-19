# Warning Button

## Overview
High-contrast amber button suitable for caution triggers and system warning messages.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Warning Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- High-contrast amber alerting color palette\n- Incorporates warning triangle icon\n- Transitions smoothly on focus and active scaling

## HTML Usage
```html
<button class="btn-warning" type="button">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
  Deauthorize App
</button>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-warning-bg` | `#f59e0b` | Standard warning amber |\n| `--btn-warning-text` | `#ffffff` | Text label color |

## Accessibility Notes
- Ensures strong readable contrast across modern displays.

## Browser Support
- All modern browsers.

## Best Use Cases
- System resets, deauthorizations, secondary warning alerts.

## License
MIT License.
