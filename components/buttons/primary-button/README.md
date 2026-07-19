# Primary Button

## Overview
Sleek, highly visible primary action button with sophisticated shadow and state transitions.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Primary Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Modern deep indigo palette\n- Smooth lift animation on hover\n- Highly visible keyboard focus outline via `:focus-visible`\n- Responsive padding with system font stacks

## HTML Usage
```html
<button class="btn-primary" type="button">Get Started</button>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-primary-bg` | `#4f46e5` | Default background color |\n| `--btn-primary-bg-hover` | `#4338ca` | Hover background color |\n| `--btn-primary-radius` | `8px` | Border radius size |

## Accessibility Notes
- Fully keyboard navigable, utilizes proper focus-visible states, handles disabled state natively.

## Browser Support
- All modern browsers. Uses standardized CSS variables and focus-visible.

## Best Use Cases
- Primary registration forms, checkouts, and main website CTAs.

## License
MIT License.
