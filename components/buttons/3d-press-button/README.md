# 3D Press Button

## Overview
Tactile isometric button that responds physically to clicks by shifting downwards and reducing its background border shadow.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [3D Press Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- High tactile 3D isometric response\n- Active state physically shifts down 6px\n- Deep underlying shadows for rich realism

## HTML Usage
```html
<button class="btn-3d" type="button">Launch Console</button>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-3d-bg` | `#8b5cf6` | Top button color |\n| `--btn-3d-shadow` | `#6d28d9` | Dimensional bottom side shadow |

## Accessibility Notes
- Keeps clean semantic focus-visible styles mapped off-site.

## Browser Support
- All modern browsers. Uses pure CSS box-shadow offsets.

## Best Use Cases
- Gaming interfaces, interactive playful web applications, checkout finalizations.

## License
MIT License.
