# Forms Category

## Overview
Accessible, performant, and premium visual forms are fundamental to modern user interfaces. This category features a complete collection of 25 production-ready, highly accessible, keyboard-friendly HTML5 and CSS3 forms designed with high attention to detail, logical properties, custom properties, and focus outlines without relying on any JavaScript.

---

## Quick Navigation
[Getting Started](../../docs/getting-started.md) | [Coding Standards](../../docs/coding-standards.md) | [Accessibility (a11y)](../../docs/accessibility.md) | [Browser Support](../../docs/browser-support.md) | [Component Template](../../docs/COMPONENT_TEMPLATE.md)

---

## Gallery & Component Index

Below is the complete list of 25 unique form components. Each link leads to its specific folder containing the HTML markup (`index.html`), the clean CSS styles (`style.css`), and dedicated design and customization instructions (`README.md`).

| # | Form Component | Description | Key Modern CSS / Design Style |
| :--- | :--- | :--- | :--- |
| 1 | [Login Form](./login-form) | Classic credentials and social authentication portal. | CSS Validation overlays, customized checkboxes |
| 2 | [Registration Form](./registration-form) | Comprehensive user creation and validation grid. | Responsive single/double grid rows |
| 3 | [Contact Form](./contact-form) | Touchpoint grid layout with spacious text areas. | Clean focus transitions, Logical properties |
| 4 | [Newsletter Signup](./newsletter-signup) | Inline visual subscription bar. | Hidden labeled inputs (`sr-only`), rounded boundaries |
| 5 | [Search Form](./search-form) | Micro search input with popularity filter tags. | Embedded SVG graphics, hover background animations |
| 6 | [Checkout Form](./checkout-form) | Multi-step delivery detail grid and session choices. | Structural grid dividers, custom visual radio cards |
| 7 | [Payment Form](./payment-form) | Credit card detail touchpoint with interactive visual previews. | Mono-spacing typography, custom linear gradients |
| 8 | [Multi-Column Form](./multi-column-form) | Dynamic organizational panel splitting fields into grids. | Double and triple grid columns, logical alignments |
| 9 | [Profile Settings Form](./profile-settings-form) | Dashboard administrative settings with avatar mockups. | Floating uploads, customizable bio textareas |
| 10 | [Password Reset Form](./password-reset-form) | Clean safety instruction and recovery token triggers. | Visual sub-caption guidelines, high contrast red states |
| 11 | [OTP Verification Form](./otp-verification-form) | Compact multi-digit security code panel. | Aspect-ratio cell boxes, success green states |
| 12 | [File Upload Form](./file-upload-form) | Dotted visual drop zone container with file preview metrics. | Dotted outline hover animations, custom SVG graphics |
| 13 | [Appointment Booking Form](./appointment-booking-form) | Scheduling console with native calendars and slot options. | Native date picker controls, visual radio session choice slots |
| 14 | [Feedback Form](./feedback-form) | Client star rating reviews and additional text blocks. | Row-reverse star hover selection, spacious textareas |
| 15 | [Survey Form](./survey-form) | Segmented multi-metric questionnaire. | Select choice controls, customized circular radio bullets |
| 16 | [Job Application Form](./job-application-form) | Generous candidate file and personal detail divider card. | Segmented personal section dividers, upload fields |
| 17 | [Event Registration Form](./event-registration-form) | Admission passage pass with numeric seat counters. | Native numeric boundary inputs, meal selection lists |
| 18 | [Medical Intake Form](./medical-intake-form) | Emergency contact grids and diagnostic health disclosures. | Segmented clinic panels, emergency grid rows |
| 19 | [Support Ticket Form](./support-ticket-form) | Category priority lists and rich symptom description fields. | Custom priorities grids, flexible focus indicator outlines |
| 20 | [Subscription Form](./subscription-form) | SaaS subscription checkout panel showing plan comparisons. | Plan comparisons cards, customizable price tags |
| 21 | [Floating Label Form](./floating-label-form) | Textfields with absolute label animations translating upward. | CSS placeholder-shown transitions, zero JS |
| 22 | [Glassmorphism Form](./glassmorphism-form) | Translucent frosted glass panel with gorgeous border glows. | Backdrop blur filters, subpixel white translucent frames |
| 23 | [Neumorphism Form](./neumorphism-form) | Tactile double soft-shadow interface with inset press actions. | Inset box shadows, convex/concave tactile surfaces |
| 24 | [Minimal Form](./minimal-form) | Scandinavian editorial typography layout with thin borders. | Georgia serifs, bottom border outlines, spacious margins |
| 25 | [Premium SaaS Form](./premium-saas-form) | Luxe dark dark console displaying golden trims and radial mesh gradients. | Mesh gradients, gold brass borders, radial spotlights |

---

## Accessibility Principles For Forms

When adopting these forms, please adhere to our accessibility standards:
1. **Always Maintain Visible Labels**: Screen readers require standard `<label>` tags linked explicitly using `id` and `for` pairings.
2. **Never Remove Focus indicators**: High contrast focus rings (`outline` or `:focus-within` shadow glows) allow screen, keyboard-only, and zoom navigators to read and travel your web forms easily.
3. **Handle Errors Natively**: Use HTML5 attributes like `required`, `pattern`, `minlength` to enforce valid client-side entries naturally.
