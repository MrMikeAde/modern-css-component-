# Login Form

## Overview
A classic, highly accessible login form with custom properties, input states, and social auth.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Login Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Pure HTML5 form validation checks\n- Sleek custom checkbox design\n- Dual social auth secondary action inputs\n- Keyboard friendly tab indexing and distinct focus indicators

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-login">
    <header class="form-login__header">
      <h2 class="form-login__title">Welcome Back</h2>
      <p class="form-login__subtitle">Enter your credentials to access your account</p>
    </header>

    <form class="form-login__body" action="#" method="POST" novalidate>
      <div class="form-login__field">
        <label class="form-login__label" for="login-email">Email Address <span class="form-login__required" aria-hidden="true">*</span></label>
        <input class="form-login__input" type="email" id="login-email" name="email" placeholder="you@example.com" required autocomplete="email">
        <span class="form-login__error-message" role="alert">Please enter a valid email address.</span>
      </div>

      <div class="form-login__field">
        <div class="form-login__field-header">
          <label class="form-login__label" for="login-password">Password <span class="form-login__required" aria-hidden="true">*</span></label>
          <a class="form-login__link" href="#forgot-password">Forgot password?</a>
        </div>
        <input class="form-login__input" type="password" id="login-password" name="password" placeholder="••••••••" required autocomplete="current-password" minlength="8">
        <span class="form-login__error-message" role="alert">Password must be at least 8 characters.</span>
      </div>

      <div class="form-login__options">
        <label class="form-login__checkbox-container">
          <input class="form-login__checkbox-input" type="checkbox" name="remember">
          <span class="form-login__checkbox-custom"></span>
          <span class="form-login__checkbox-label">Remember me for 30 days</span>
        </label>
      </div>

      <button class="form-login__submit" type="submit">Sign In</button>
    </form>

    <div class="form-login__divider">
      <span class="form-login__divider-text">Or continue with</span>
    </div>

    <div class="form-login__social">
      <button class="form-login__social-btn" type="button" aria-label="Sign in with Google">
        <svg class="form-login__social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.7 0 3.3.59 4.5 1.7l2.4-2.4C17.3 1.5 14.9 0 12.24 0 6.13 0 1.24 4.9 1.24 11s4.89 11 11 11c6.38 0 11-4.5 11-11 0-.727-.1-1.4-.259-2h-10.74z"/></svg>
        Google
      </button>
      <button class="form-login__social-btn" type="button" aria-label="Sign in with GitHub">
        <svg class="form-login__social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        GitHub
      </button>
    </div>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --login-bg: #ffffff;
  --login-border: #e2e8f0;
  --login-text: #334155;
  --login-text-light: #64748b;
  --login-title: #0f172a;
  --login-primary: #4f46e5;
  --login-primary-hover: #4338ca;
  --login-primary-light: #e0e7ff;
  --login-radius: 12px;
  --login-error: #ef4444;
}

.form-login {
  background-color: var(--login-bg);
  border: 1px solid var(--login-border);
  border-radius: var(--login-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 450px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-login__header {
  text-align: center;
}

.form-login__title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--login-title);
  margin-block-end: 0.5rem;
  letter-spacing: -0.025em;
}

.form-login__subtitle {
  font-size: 0.875rem;
  color: var(--login-text-light);
  margin: 0;
}

.form-login__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-login__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-login__field-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-login__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--login-title);
}

.form-login__required {
  color: var(--login-error);
}

.form-login__input {
  padding-block: 0.75rem;
  padding-inline: 1rem;
  border: 1px solid var(--login-border);
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  color: var(--login-title);
  background-color: #fff;
}

.form-login__input::placeholder {
  color: var(--login-text-light);
  opacity: 0.6;
}

.form-login__input:hover {
  border-color: #cbd5e1;
}

.form-login__input:focus {
  outline: none;
  border-color: var(--login-primary);
  box-shadow: 0 0 0 3px var(--login-primary-light);
}

.form-login__input:invalid:not(:placeholder-shown) {
  border-color: var(--login-error);
}

.form-login__input:invalid:not(:placeholder-shown) + .form-login__error-message {
  display: block;
}

.form-login__error-message {
  display: none;
  font-size: 0.75rem;
  color: var(--login-error);
  margin-block-start: 0.25rem;
}

.form-login__link {
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--login-primary);
  text-decoration: none;
}

.form-login__link:hover {
  text-decoration: underline;
}

.form-login__options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-login__checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.form-login__checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.form-login__checkbox-custom {
  position: relative;
  block-size: 18px;
  inline-size: 18px;
  background-color: #fff;
  border: 1px solid var(--login-border);
  border-radius: 4px;
  transition: all 0.2s ease;
}

.form-login__checkbox-container:hover .form-login__checkbox-custom {
  border-color: #cbd5e1;
}

.form-login__checkbox-input:checked ~ .form-login__checkbox-custom {
  background-color: var(--login-primary);
  border-color: var(--login-primary);
}

.form-login__checkbox-custom::after {
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

.form-login__checkbox-input:checked ~ .form-login__checkbox-custom::after {
  display: block;
}

.form-login__checkbox-label {
  font-size: 0.825rem;
  color: var(--login-text-light);
}

.form-login__submit {
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
  background-color: var(--login-primary);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-login__submit:hover {
  background-color: var(--login-primary-hover);
}

.form-login__submit:focus-visible {
  outline: 2px solid var(--login-primary);
  outline-offset: 2px;
}

.form-login__divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin-block: 0.5rem;
}

.form-login__divider::before,
.form-login__divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--login-border);
}

.form-login__divider-text {
  padding-inline: 0.75rem;
  font-size: 0.75rem;
  color: var(--login-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-login__social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.form-login__social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-block: 0.625rem;
  padding-inline: 1rem;
  border: 1px solid var(--login-border);
  border-radius: 8px;
  background-color: #fff;
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--login-text);
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-login__social-btn:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1;
}

.form-login__social-icon {
  width: 16px;
  height: 16px;
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
| `--login-bg` | `#ffffff` | Background color of the login container |\n| `--login-border` | `#e2e8f0` | Border outline color |\n| `--login-primary` | `#4f46e5` | Primary brand CTA styling accent |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
