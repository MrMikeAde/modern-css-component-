# Loading Button

## Overview
Interactive action button displaying an elegant hardware-accelerated infinite circular loader spinner alongside text.

## Preview Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Loading Button Mockup]               │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Hardware accelerated rotational transitions\n- Exposes correct `aria-busy` states for screen readers\n- Disabled cursor and state defaults integrated naturally

## HTML Usage
```html
<button class="btn-loading" type="button" disabled aria-busy="true" aria-label="Loading action">
  <span class="spinner"></span>
  Processing...
</button>
```

## CSS Customization
List of CSS Variables you can override locally or in your global variables file:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--btn-loading-bg` | `#475569` | Primary loader layout background |\n| `--btn-loading-text` | `#ffffff` | Processing label color |

## Accessibility Notes
- Always supply `aria-busy="true"` and proper textual indicators to let screen readers understand background processes.

## Browser Support
- All modern browsers. Uses pure CSS animation loops.

## Best Use Cases
- Form submittals, network data queries, checkout finalizations.

## License
MIT License.
