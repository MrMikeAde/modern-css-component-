# Modals Category

## Overview
Modals block primary document access to focus users on essential task checkpoints. This category utilizes the powerful native HTML5 `<dialog>` element, which handles background layering, focus trapping, and keyboard dismissal out of the box with minimal to no JavaScript.

---

## Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Planned Components
1. **Semantic Dialog Modal**: Action confirmation overlays using `<dialog>` with full backdrop styling.
2. **Slide-out Side Drawer**: Off-canvas sliding menus that slide out from the viewport's edge.
3. **Pure CSS Lightbox**: Overlay components utilizing `:target` triggers.

## Learning Highlights
- **Native `<dialog>` API**: Understanding how `dialog.showModal()` native calls automatically handle ARIA overlay requirements.
- **Backdrop Styling**: Styling underlying backdrops elegantly using the `::backdrop` pseudo-element.
- **Focus Trapping**: Realizing how modern browser engines trap focus inside dialog layers natively to protect screen-reader sequences.

## Preview Placeholders & Documentation
Future components will strictly adhere to the [COMPONENT_TEMPLATE](../../docs/COMPONENT_TEMPLATE.md) guidelines. No CSS or HTML files are generated yet to maintain a clean project structure prior to phase 2 development.
