# Accordions Category

## Overview
Accordions organize and consolidate content into vertically collapsing panels. This category provides pure, native HTML/CSS implementations that require absolutely zero JavaScript while remaining completely accessible to screen readers.

---

## Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Planned Components
1. **Details/Summary Accordion**: Pure native collapsing lists utilizing the semantic `<details>` and `<summary>` elements.
2. **Smooth Transition Accordion**: Expanding panels with modern height-transition strategies (e.g., transitioning `grid-template-rows`).
3. **Multi-Panel Accordion**: Clean stacked configurations optimized for FAQ lists.

## Learning Highlights
- **Native Elements**: Harnessing `<details>` and `<summary>` to automatically inherit native accessibility roles and keyboard navigation (Tab & Enter).
- **Smooth Height Animations**: Transitioning components from closed to open heights smoothly using CSS grid height interpolation (`0fr` to `1fr`).
- **Custom Indicators**: Customizing the native dropdown arrow using `summary::-webkit-details-marker` and the standard `summary` marker selectors.

## Preview Placeholders & Documentation
Future components will strictly adhere to the [COMPONENT_TEMPLATE](../../docs/COMPONENT_TEMPLATE.md) guidelines. No CSS or HTML files are generated yet to maintain a clean project structure prior to phase 2 development.
