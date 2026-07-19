# Component Template

This is the standard template that all component documentation inside `components/` should follow. When creating a new component, copy this file, rename it to `README.md`, and place it inside your component folder.

---

## Navigation
[Getting Started](../docs/getting-started.md) | [Coding Standards](../docs/coding-standards.md) | [Accessibility (a11y)](../docs/accessibility.md) | [Browser Support](../docs/browser-support.md) | [Component Template](COMPONENT_TEMPLATE.md)

---

# [Component Name]

## Overview
A brief, high-level description of what this component is, what problem it solves, and the primary modern CSS techniques it uses.

## Preview Image Placeholder
*(Provide a clear description or placeholder for where a preview image of this component will be. For example, a visual description of the layout.)*
```text
┌──────────────────────────────────────────────────────────┐
│                      [Component Mockup]                  │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
Highlight what makes this component awesome and modern:
- Feature 1 (e.g., Fluid responsiveness without media queries)
- Feature 2 (e.g., Pure CSS state management, no JS required)
- Feature 3 (e.g., Logical properties supporting multi-directional text)
- Feature 4 (e.g., Built-in high-contrast support)

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
<!-- Put HTML here -->
```

## CSS
Provide organized, modern CSS utilizing custom properties and modular BEM naming.
```css
/* Put CSS here */
```

## Responsive Notes
Explain how the layout handles different screen sizes. Mention if it uses Container Queries, CSS Grid, Flexbox, or custom `@media` queries.

## Accessibility
Outline the accessibility properties integrated into this component:
- Correct keyboard navigation guidelines.
- Dynamic attributes (e.g., `aria-expanded`, role structures).
- Contrast information.

## Browser Support
Indicate which browsers this component supports, highlighting any modern specifications like `@supports`, `:has()`, or Container Queries used.

## Customization
List the available CSS Variables that developers can override to customize this component.

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--comp-bg` | `#ffffff` | Background color of the component |
| `--comp-text` | `#1f2937` | Text color of the component |

## Usage Example
Provide a brief example of how to copy, import, and customize this component in a clean project.

## License
MIT License.
