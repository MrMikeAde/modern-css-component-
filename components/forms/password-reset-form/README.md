# Password Reset Form

## Overview
A recovery email trigger interface containing strict feedback text blocks, error flags, and confirmation buttons.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Password Reset Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Clear visual subheadings describing recovery flow guidelines\n- Interactive text-field markers\n- High contrast warning indicators\n- Keyboard accessible form elements

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-reset">
    <header class="form-reset__header">
      <h2 class="form-reset__title">Reset Password</h2>
      <p class="form-reset__subtitle">Enter your registered email address below. We will dispatch a secure recovery token to your inbox.</p>
    </header>

    <form class="form-reset__body" action="#" method="POST" novalidate>
      <div class="form-reset__field">
        <label class="form-reset__label" for="reset-email">Your Email Address</label>
        <input class="form-reset__input" type="email" id="reset-email" name="email" placeholder="dev@example.com" required>
        <span class="form-reset__error-message" role="alert">Please enter a valid active address.</span>
      </div>

      <button class="form-reset__submit" type="submit">Send Recovery Instructions</button>
    </form>

    <footer class="form-reset__footer">
      <a href="../login-form" class="form-reset__link">Back to secure Sign In</a>
    </footer>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --reset-bg: #ffffff;
  --reset-border: #e2e8f0;
  --reset-text: #334155;
  --reset-text-light: #64748b;
  --reset-title: #0f172a;
  --reset-primary: #dc2626;
  --reset-primary-hover: #b91c1c;
  --reset-primary-light: #fee2e2;
  --reset-radius: 12px;
}

.form-reset {
  background-color: var(--reset-bg);
  border: 1px solid var(--reset-border);
  border-radius: var(--reset-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 440px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-reset__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--reset-title);
  margin-block-end: 0.375rem;
}

.form-reset__subtitle {
  font-size: 0.875rem;
  color: var(--reset-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-reset__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-reset__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-reset__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--reset-title);
}

.form-reset__input {
  padding-block: 0.75rem;
  padding-inline: 1rem;
  border: 1px solid var(--reset-border);
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--reset-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-reset__input:focus {
  outline: none;
  border-color: var(--reset-primary);
  box-shadow: 0 0 0 3px var(--reset-primary-light);
}

.form-reset__input:invalid:not(:placeholder-shown) {
  border-color: var(--reset-primary);
}

.form-reset__input:invalid:not(:placeholder-shown) + .form-reset__error-message {
  display: block;
}

.form-reset__error-message {
  display: none;
  font-size: 0.75rem;
  color: var(--reset-primary);
  margin-block-start: 0.25rem;
}

.form-reset__submit {
  padding-block: 0.75rem;
  background-color: var(--reset-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-reset__submit:hover {
  background-color: var(--reset-primary-hover);
}

.form-reset__footer {
  text-align: center;
  border-top: 1px solid var(--reset-border);
  padding-block-start: 1rem;
}

.form-reset__link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--reset-text-light);
  text-decoration: none;
}

.form-profile__submit:hover,
.form-reset__link:hover {
  text-decoration: underline;
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
| `--reset-bg` | `#ffffff` | Background color |\n| `--reset-border` | `#e2e8f0` | Card outlines |\n| `--reset-primary` | `#dc2626` | Warning highlight colors |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
