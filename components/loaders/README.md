# Loaders Category

## Overview
Loaders inform users that a task is executing in the background, minimizing perceived latency. This category explores high-performance CSS keyframe animations, spinners, loading dots, and skeleton loader blocks.

---

## Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Planned Components
1. **Classic CSS Spinner**: Circular rotating spinner using pure CSS properties and seamless `@keyframes` rotations.
2. **Skeleton Preview Screen**: Glowing card structures mimicking content layout blocks during content loads.
3. **Bouncing Dots**: Interactive loading dots that scale or bounce sequentially using transition delays.

## Learning Highlights
- **Performance Optimization**: Animating elements using GPU-friendly properties like `transform` and `opacity` to avoid triggering browser repaints.
- **Motion Reduction**: Wrapping animations inside `@media (prefers-reduced-motion)` to ensure comfort and safety for users with vestibular conditions.
- **Visual Contrast**: Ensuring loader indicators remain highly visible against different background layers.

## Preview Placeholders & Documentation
Future components will strictly adhere to the [COMPONENT_TEMPLATE](../../docs/COMPONENT_TEMPLATE.md) guidelines. No CSS or HTML files are generated yet to maintain a clean project structure prior to phase 2 development.
