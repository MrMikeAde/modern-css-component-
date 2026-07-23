# Contact Form

## Overview
An elegant customer touchpoint form featuring grid-based layouts, responsive structure, and custom-styled textarea wrapper.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Contact Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Double column grid with logical alignment rules\n- Highly adjustable standard responsive text area block\n- Robust focus indicators mapping deep teal colors\n- Screen reader native validation messages

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-contact">
    <header class="form-contact__header">
      <h2 class="form-contact__title">Get in Touch</h2>
      <p class="form-contact__subtitle">We would love to hear from you. Please fill out this form.</p>
    </header>

    <form class="form-contact__body" action="#" method="POST" novalidate>
      <div class="form-contact__row">
        <div class="form-contact__field">
          <label class="form-contact__label" for="contact-name">Full Name <span class="form-contact__required" aria-hidden="true">*</span></label>
          <input class="form-contact__input" type="text" id="contact-name" name="name" placeholder="Sarah Jenkins" required autocomplete="name">
        </div>
        <div class="form-contact__field">
          <label class="form-contact__label" for="contact-email">Email Address <span class="form-contact__required" aria-hidden="true">*</span></label>
          <input class="form-contact__input" type="email" id="contact-email" name="email" placeholder="sarah@example.com" required autocomplete="email">
          <span class="form-contact__error-message" role="alert">Please enter a valid email.</span>
        </div>
      </div>

      <div class="form-contact__field">
        <label class="form-contact__label" for="contact-subject">Subject <span class="form-contact__required" aria-hidden="true">*</span></label>
        <input class="form-contact__input" type="text" id="contact-subject" name="subject" placeholder="How can we help you?" required>
      </div>

      <div class="form-contact__field">
        <label class="form-contact__label" for="contact-message">Message <span class="form-contact__required" aria-hidden="true">*</span></label>
        <textarea class="form-contact__textarea" id="contact-message" name="message" placeholder="Type your message here..." rows="5" required></textarea>
        <span class="form-contact__error-message" role="alert">Message cannot be empty.</span>
      </div>

      <button class="form-contact__submit" type="submit">Send Message</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --contact-bg: #ffffff;
  --contact-border: #e2e8f0;
  --contact-text: #334155;
  --contact-text-light: #64748b;
  --contact-title: #0f172a;
  --contact-primary: #0f766e;
  --contact-primary-hover: #115e59;
  --contact-primary-light: #ccfbf1;
  --contact-radius: 12px;
  --contact-error: #ef4444;
}

.form-contact {
  background-color: var(--contact-bg);
  border: 1px solid var(--contact-border);
  border-radius: var(--contact-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 600px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-contact__header {
  text-align: center;
}

.form-contact__title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--contact-title);
  margin-block-end: 0.5rem;
  letter-spacing: -0.025em;
}

.form-contact__subtitle {
  font-size: 0.875rem;
  color: var(--contact-text-light);
  margin: 0;
}

.form-contact__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-contact__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 480px) {
  .form-contact__row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-contact__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--contact-title);
}

.form-contact__required {
  color: var(--contact-error);
}

.form-contact__input,
.form-contact__textarea {
  padding-block: 0.75rem;
  padding-inline: 1rem;
  border: 1px solid var(--contact-border);
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  color: var(--contact-title);
  background-color: #fff;
  font-family: inherit;
}

.form-contact__input::placeholder,
.form-contact__textarea::placeholder {
  color: var(--contact-text-light);
  opacity: 0.6;
}

.form-contact__input:hover,
.form-contact__textarea:hover {
  border-color: #cbd5e1;
}

.form-contact__input:focus,
.form-contact__textarea:focus {
  outline: none;
  border-color: var(--contact-primary);
  box-shadow: 0 0 0 3px var(--contact-primary-light);
}

.form-contact__input:invalid:not(:placeholder-shown),
.form-contact__textarea:invalid:not(:placeholder-shown) {
  border-color: var(--contact-error);
}

.form-contact__input:invalid:not(:placeholder-shown) + .form-contact__error-message,
.form-contact__textarea:invalid:not(:placeholder-shown) + .form-contact__error-message {
  display: block;
}

.form-contact__error-message {
  display: none;
  font-size: 0.75rem;
  color: var(--contact-error);
  margin-block-start: 0.25rem;
}

.form-contact__submit {
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
  background-color: var(--contact-primary);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
  text-align: center;
}

.form-contact__submit:hover {
  background-color: var(--contact-primary-hover);
}

.form-contact__submit:focus-visible {
  outline: 2px solid var(--contact-primary);
  outline-offset: 2px;
}
```

## Responsive Notes
This component uses a modern mobile-first strategy, CSS Grid, Flexbox, and Logical Properties (`inline-size`, `margin-block`, etc.) to scale beautifully across smartphones, tablets, and wide monitors.

## Accessibility
- **Semantic HTML5 Elements**: Proper form controls (`input`, `select`, `textarea`, `button`) inside a semantic form.
- **Labels**: Every control has an explicit `<label for="...">` pairing to ensure screen readers understand the context.
- **Keyboard Navigation**: High-contrast, custom-tailored `:focus-within` and `:focus-visible` highlights.

## Browser Support
Fully compatible with all major evergreen browsers (Chrome, Safari, Firefox, Edge). Uses standard CSS custom properties and logical parameters natively.

## Customization
Below is the list of key CSS variables that can be easily overridden to adapt the component's appearance.

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--contact-bg` | `#ffffff` | Background color of the contact card |\n| `--contact-border` | `#e2e8f0` | Border outline color |\n| `--contact-primary` | `#0f766e` | Brand teal element highlight color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
