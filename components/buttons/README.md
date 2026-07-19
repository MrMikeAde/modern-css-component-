# Buttons Category

## Overview
Buttons are crucial interactive triggers that execute user-driven actions. This category features clean, lightweight, accessibility-focused button variants leveraging Modern CSS3 structures (such as custom properties, fluid padding, and modern pseudo-states like `:focus-visible` and `:disabled`).

This is a production-ready collection of 25 beautifully designed, semantic, keyboard-accessible button elements that can be directly dropped into any modern SaaS product, dashboard, or landing page.

---

## Quick Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Gallery & Component Index

Below is the complete list of 25 unique button components. Each link leads to its specific folder containing the HTML markup (`index.html`), the clean CSS styles (`style.css`), and dedicated design and customization instructions (`README.md`).

| # | Button Component | Description | Key Modern CSS Features |
| :--- | :--- | :--- | :--- |
| 1 | [Primary Button](./primary-button) | Elegant Indigo primary brand trigger. | Lift transitions, custom properties, `:focus-visible` outlines |
| 2 | [Secondary Button](./secondary-button) | Neutral Slate low-emphasis support action. | Active press-scaling transitions, border alignment |
| 3 | [Outline Button](./outline-button) | Bordered minimalist element with a solid hover sweep. | Pure border outline, solid color transitions on `:hover` |
| 4 | [Ghost Button](./ghost-button) | Transparent text button for low prominence. | Soft opacity backdrops on interaction, zero boundaries |
| 5 | [Gradient Button](./gradient-button) | Sunset gradient calling element with animated backgrounds. | Double linear-gradient shifts, deep shadows |
| 6 | [Glassmorphism Button](./glassmorphism-button) | Opaque frosted-glass effect suitable for deep backgrounds. | Hardware-accelerated `backdrop-filter: blur()`, subpixel border frames |
| 7 | [Neumorphism Button](./neumorphism-button) | Tactile soft-shadow button with convex-to-concave transitions. | Compound box-shadow offsets, inset press animations |
| 8 | [Icon Button](./icon-button) | Circular trigger enclosing standard inline SVG elements. | Center alignments, SVG scale properties, `aria-label` settings |
| 9 | [Rounded Pill Button](./rounded-pill-button) | Rounded modern pill badge CTA trigger. | Standard `border-radius: 9999px`, distinct text contrast |
| 10 | [Animated Border Button](./animated-border-button) | Cyberpunk dark element with a flowing gradient outer border. | Moving background linear loops, nested element plates |
| 11 | [Shine Hover Button](./shine-hover-button) | Diagonal glass-sweep sheen trigger mapping on hover. | Absolute overlays, angled rotating sweep mechanics |
| 12 | [Ripple Style Button](./ripple-style-button) | Material design expand wave that swells outwards on clicks. | Pseudo `:active` sizing transitions, scale transformations |
| 13 | [Loading Button](./loading-button) | Disabled process button displaying a rotating circular spinner. | Rotating animation loops, `aria-busy` states, disabled pointer configurations |
| 14 | [Success Button](./success-button) | Confirmatory Emerald green alert interaction trigger. | Emerald color palette mapping, inline SVG alignment |
| 15 | [Danger Button](./danger-button) | Cautionary destructive Red trigger representing irreversible actions. | High-contrast alerting indicators, responsive layouts |
| 16 | [Warning Button](./warning-button) | Amber warning action trigger for non-destructive cautions. | Amber-gold color palettes, cautionary SVGs |
| 17 | [Floating Action Button (FAB)](./floating-action-button) | Elevated circular element designed for float screen layouts. | Absolute circular shadows, rotational SVG triggers |
| 18 | [Social Login Button](./social-login-button) | Official GitHub auth brand component. | Official brand colors, custom crisp inline SVG graphics |
| 19 | [3D Press Button](./3d-press-button) | Tactile isometric button shifting 6px down on clicks. | Dimensional box-shadow reductions, isometric shifts |
| 20 | [Minimal Button](./minimal-button) | Scandinavian boutique editorial serif action trigger. | Georgia typography, elegant letter-spacing hover expansions |
| 21 | [Underline Hover Button](./underline-hover-button) | Low-emphasis link that grows an underline outward from center. | Expanding absolute pseudo-element lines |
| 22 | [Split Color Button](./split-color-button) | Dual-tone layout sweeping colors left-to-right on hover. | Slide-in panels, relative indexing, overflow boundaries |
| 23 | [Dark Mode Button](./dark-mode-button) | Dark cyber-tech button emitting glowing neon cyan shadows. | Neon shadow glows, terminal Courier code typography |
| 24 | [Soft UI Button](./soft-ui-button) | Soft-lit elegant double shadow reporting button. | Double box-shadow parameters, premium high contrast colors |
| 25 | [Premium CTA Button](./premium-cta-button) | Luxe gold-brass gradient CTA with integrated shimmer sweeps. | Gold gradients, skews, transition filters |

---

## Core Guidelines For Buttons

When adopting these buttons, please adhere to our core standards:
1. **Always Use NATIVE Elements**: Use `<button>` or `<a>` with appropriate attributes. Avoid `<div role="button">`.
2. **Never Remove Focus Indicators**: We use `:focus-visible` to style beautiful rings for keyboard-only navigators while suppressing them for mouse users.
3. **Set Target States Natively**: Use native elements like `:disabled` or accessibility markers (`aria-busy`, `aria-label`) to convey states to screen readers.

---

## Future Button Roadmap
- [ ] Add dual-action "split" buttons (e.g., action + dropdown arrow).
- [ ] Implement toggle state buttons (like a pure CSS Bookmark/Favorite button).
- [ ] Introduce sliding tooltip attachments.
- [ ] Expand with fluid-padding custom parameters for ultra-wide mobile form scales.
