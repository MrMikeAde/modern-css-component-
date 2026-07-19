# Breadcrumbs Category

## Overview
Breadcrumbs provide hierarchical, linear navigation trails that clarify a user's location within a website. This category features clean, semantic, and highly readable breadcrumb indicators structured with modern list structures and flex alignment.

---

## Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Planned Components
1. **Classic Slash Breadcrumb**: Navigation trail separated by customizable forward-slashes.
2. **Icon-Enriched Breadcrumb**: Incorporates home and directional icons to maximize scanning speed.
3. **Collapsing Breadcrumb**: Responsive trails that condense nested intermediate pages into a dropdown on mobile viewports.

## Learning Highlights
- **Semantic Structure**: Organizing trails inside `<nav aria-label="Breadcrumb">` wrappers containing ordered lists (`<ol>`).
- **Pseudo-element Separators**: Generating slash dividers using CSS `::after { content: "/" }` to hide them from screen readers.
- **Current Page State**: Marking active terminal locations using the explicit `aria-current="page"` attribute.

## Preview Placeholders & Documentation
Future components will strictly adhere to the [COMPONENT_TEMPLATE](../../docs/COMPONENT_TEMPLATE.md) guidelines. No CSS or HTML files are generated yet to maintain a clean project structure prior to phase 2 development.
