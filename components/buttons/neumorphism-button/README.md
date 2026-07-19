# Neumorphism Button

## Overview
Elegant soft-shadow neumorphic press button displaying classic convex/concave transitions on active states.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Neumorphism Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Convex physical elevation outer shadows\n- Transitions to concave inset shadows on press active state\n- Soft pastel base context support

## HTML Usage
```html
<div class="neumorphic-bg-wrapper">
  <button class="btn-neumorphic" type="button">Press Me</button>
</div>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-neu-bg` | `#e0e8f6` | Matching background color |\n| `--btn-neu-text` | `#4a5568` | Interactive label color |

## Accessibility Notes
- Ensure text labels maintain high contrast against soft pastel background blocks.

## Browser Support
- All browsers supporting multiple box-shadow strings.

## Best Use Cases
- Visual control panels, soft minimalist dashboards, creative audio decks.

## License
MIT License.
