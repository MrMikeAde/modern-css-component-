# Tooltips Category

## Overview
Tooltips reveal context-sensitive, non-essential descriptions when users hover over or focus on interactive elements. This collection utilizes pure CSS layout formulas and absolute coordinate tracking to position tooltips without heavy JS layout engines (like Popper or Floating UI).

---

## Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Planned Components
1. **Dynamic Directional Tooltips**: Floating indicators positioned dynamically (Top, Bottom, Left, Right) relative to the parent element.
2. **Interactive Popover Tooltip**: Tooltips that accept richer HTML markup (such as links or buttons) and remain open on hover.
3. **Pure CSS Hover Info**: Light inline indicators that scale based on custom attributes (`data-tooltip`).

## Learning Highlights
- **Positioning Strategies**: Positioning relative tooltip content precisely using parent `position: relative` anchors.
- **Content Attributes**: Displaying text dynamically using `content: attr(data-tooltip)` within the CSS `::after` pseudo-element.
- **Accessibility Attributes**: Associating tooltips correctly using `aria-describedby` to guarantee assistive devices read the content.

## Preview Placeholders & Documentation
Future components will strictly adhere to the [COMPONENT_TEMPLATE](../../docs/COMPONENT_TEMPLATE.md) guidelines. No CSS or HTML files are generated yet to maintain a clean project structure prior to phase 2 development.
