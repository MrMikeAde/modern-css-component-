# Registration Form

## Overview
A robust, semantic account creation form with standard field validations, checkmarks, and dynamic hover states.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Registration Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Grid layout for multi-input rows on desktop screens\n- Automatic required field indicator alerts\n- Pure CSS checkbox toggle mechanism\n- High contrast focus styles and accessible markup

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-register">
    <header class="form-register__header">
      <h2 class="form-register__title">Create Account</h2>
      <p class="form-register__subtitle">Join our platform today and start building.</p>
    </header>

    <form class="form-register__body" action="#" method="POST" novalidate>
      <div class="form-register__row">
        <div class="form-register__field">
          <label class="form-register__label" for="reg-firstname">First Name <span class="form-register__required" aria-hidden="true">*</span></label>
          <input class="form-register__input" type="text" id="reg-firstname" name="firstname" placeholder="Jane" required autocomplete="given-name">
        </div>
        <div class="form-register__field">
          <label class="form-register__label" for="reg-lastname">Last Name <span class="form-register__required" aria-hidden="true">*</span></label>
          <input class="form-register__input" type="text" id="reg-lastname" name="lastname" placeholder="Doe" required autocomplete="family-name">
        </div>
      </div>

      <div class="form-register__field">
        <label class="form-register__label" for="reg-email">Email Address <span class="form-register__required" aria-hidden="true">*</span></label>
        <input class="form-register__input" type="email" id="reg-email" name="email" placeholder="jane.doe@example.com" required autocomplete="email">
        <span class="form-register__error-message" role="alert">Please enter a valid email address.</span>
      </div>

      <div class="form-register__field">
        <label class="form-register__label" for="reg-password">Password <span class="form-register__required" aria-hidden="true">*</span></label>
        <input class="form-register__input" type="password" id="reg-password" name="password" placeholder="Min. 8 characters" required autocomplete="new-password" minlength="8">
        <span class="form-register__error-message" role="alert">Password must be at least 8 characters.</span>
      </div>

      <div class="form-register__options">
        <label class="form-register__checkbox-container">
          <input class="form-register__checkbox-input" type="checkbox" name="terms" required>
          <span class="form-register__checkbox-custom"></span>
          <span class="form-register__checkbox-label">I agree to the <a href="#terms" class="form-register__link">Terms of Service</a> and <a href="#privacy" class="form-register__link">Privacy Policy</a></span>
        </label>
      </div>

      <button class="form-register__submit" type="submit">Create Free Account</button>
    </form>

    <footer class="form-register__footer">
      <p class="form-register__footer-text">Already have an account? <a href="../login-form" class="form-register__link">Sign in</a></p>
    </footer>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --reg-bg: #ffffff;
  --reg-border: #e2e8f0;
  --reg-text: #334155;
  --reg-text-light: #64748b;
  --reg-title: #0f172a;
  --reg-primary: #2563eb;
  --reg-primary-hover: #1d4ed8;
  --reg-primary-light: #dbeafe;
  --reg-radius: 12px;
  --reg-error: #ef4444;
}

.form-register {
  background-color: var(--reg-bg);
  border: 1px solid var(--reg-border);
  border-radius: var(--reg-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 500px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-register__header {
  text-align: center;
}

.form-register__title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--reg-title);
  margin-block-end: 0.5rem;
  letter-spacing: -0.025em;
}

.form-register__subtitle {
  font-size: 0.875rem;
  color: var(--reg-text-light);
  margin: 0;
}

.form-register__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-register__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 480px) {
  .form-register__row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-register__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-register__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--reg-title);
}

.form-register__required {
  color: var(--reg-error);
}

.form-register__input {
  padding-block: 0.75rem;
  padding-inline: 1rem;
  border: 1px solid var(--reg-border);
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  color: var(--reg-title);
  background-color: #fff;
}

.form-register__input::placeholder {
  color: var(--reg-text-light);
  opacity: 0.6;
}

.form-register__input:hover {
  border-color: #cbd5e1;
}

.form-register__input:focus {
  outline: none;
  border-color: var(--reg-primary);
  box-shadow: 0 0 0 3px var(--reg-primary-light);
}

.form-register__input:invalid:not(:placeholder-shown) {
  border-color: var(--reg-error);
}

.form-register__input:invalid:not(:placeholder-shown) + .form-register__error-message {
  display: block;
}

.form-register__error-message {
  display: none;
  font-size: 0.75rem;
  color: var(--reg-error);
  margin-block-start: 0.25rem;
}

.form-register__link {
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--reg-primary);
  text-decoration: none;
}

.form-register__link:hover {
  text-decoration: underline;
}

.form-register__options {
  display: flex;
  align-items: center;
}

.form-register__checkbox-container {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.form-register__checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.form-register__checkbox-custom {
  position: relative;
  flex-shrink: 0;
  block-size: 18px;
  inline-size: 18px;
  background-color: #fff;
  border: 1px solid var(--reg-border);
  border-radius: 4px;
  margin-block-start: 2px;
  transition: all 0.2s ease;
}

.form-register__checkbox-container:hover .form-register__checkbox-custom {
  border-color: #cbd5e1;
}

.form-register__checkbox-input:checked ~ .form-register__checkbox-custom {
  background-color: var(--reg-primary);
  border-color: var(--reg-primary);
}

.form-register__checkbox-custom::after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.form-register__checkbox-input:checked ~ .form-register__checkbox-custom::after {
  display: block;
}

.form-register__checkbox-label {
  font-size: 0.825rem;
  color: var(--reg-text-light);
  line-height: 1.4;
}

.form-register__submit {
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
  background-color: var(--reg-primary);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-register__submit:hover {
  background-color: var(--reg-primary-hover);
}

.form-register__submit:focus-visible {
  outline: 2px solid var(--reg-primary);
  outline-offset: 2px;
}

.form-register__footer {
  border-top: 1px solid var(--reg-border);
  padding-block-start: 1.25rem;
  text-align: center;
}

.form-register__footer-text {
  font-size: 0.875rem;
  color: var(--reg-text-light);
  margin: 0;
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
| `--reg-bg` | `#ffffff` | Background color of the registration container |\n| `--reg-border` | `#e2e8f0` | Border outline color |\n| `--reg-primary` | `#2563eb` | Primary trigger action and highlight tone |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
