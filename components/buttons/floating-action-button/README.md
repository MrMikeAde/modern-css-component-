# Floating Action Button

## Overview
Classic circular Floating Action Button (FAB) styled for floating panels and high elevation overlays.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Floating Action Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Elevated float layout\n- Rotational SVG trigger transition upon hover\n- Standard FAB sizes matching core specs

## HTML Usage
```html
<div class="fab-position-context">
  <button class="btn-fab" type="button" aria-label="Add new entry">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </button>
</div>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-fab-size` | `56px` | Diameter profile |\n| `--btn-fab-bg` | `#4f46e5` | Core floating color |

## Accessibility Notes
- Always configure a screen-readable `aria-label` description.

## Browser Support
- All modern browsers. Uses pure CSS transitional rotation metrics.

## Best Use Cases
- Global mobile add indicators, float menus, live-chat triggers.

## License
MIT License.
