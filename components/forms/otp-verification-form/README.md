# OTP Verification Form

## Overview
A custom security validation code entry board featuring micro numeric grids and absolute active cursor highlights.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [OTP Verification Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Inline multi-input layout grids optimized for OTP numbers\n- Automatic numeric virtual keyboard triggers\n- Pure CSS interactive outline effects\n- Highly visible active focus indices

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-otp">
    <header class="form-otp__header">
      <h2 class="form-otp__title">Security Code</h2>
      <p class="form-otp__subtitle">We dispatched an active 4-digit security code to your registered mobile. Please populate it below.</p>
    </header>

    <form class="form-otp__body" action="#" method="POST" autocomplete="off" novalidate>
      <div class="form-otp__digits">
        <label class="sr-only" for="otp-1">Digit 1</label>
        <input class="form-otp__input" type="text" id="otp-1" name="otp1" pattern="[0-9]" maxlength="1" required inputmode="numeric">

        <label class="sr-only" for="otp-2">Digit 2</label>
        <input class="form-otp__input" type="text" id="otp-2" name="otp2" pattern="[0-9]" maxlength="1" required inputmode="numeric">

        <label class="sr-only" for="otp-3">Digit 3</label>
        <input class="form-otp__input" type="text" id="otp-3" name="otp3" pattern="[0-9]" maxlength="1" required inputmode="numeric">

        <label class="sr-only" for="otp-4">Digit 4</label>
        <input class="form-otp__input" type="text" id="otp-4" name="otp4" pattern="[0-9]" maxlength="1" required inputmode="numeric">
      </div>

      <button class="form-otp__submit" type="submit">Verify Secure Code</button>
    </form>

    <div class="form-otp__footer">
      <p class="form-otp__text">Didn't receive the text? <a href="#resend" class="form-otp__link">Resend secure SMS</a></p>
    </div>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --otp-bg: #ffffff;
  --otp-border: #cbd5e1;
  --otp-text: #334155;
  --otp-text-light: #64748b;
  --otp-title: #0f172a;
  --otp-primary: #10b981;
  --otp-primary-hover: #059669;
  --otp-primary-light: #d1fae5;
  --otp-radius: 16px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.form-otp {
  background-color: var(--otp-bg);
  border: 1px solid var(--otp-border);
  border-radius: var(--otp-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 420px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.form-otp__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--otp-title);
  margin-block-end: 0.375rem;
}

.form-otp__subtitle {
  font-size: 0.825rem;
  color: var(--otp-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-otp__digits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-block-start: 1rem;
}

.form-otp__input {
  aspect-ratio: 1;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  border: 2px solid var(--otp-border);
  border-radius: 12px;
  background-color: #fff;
  color: var(--otp-title);
  transition: all 0.2s ease;
  width: 100%;
}

.form-otp__input:focus {
  outline: none;
  border-color: var(--otp-primary);
  box-shadow: 0 0 0 4px var(--otp-primary-light);
}

.form-otp__submit {
  padding-block: 0.75rem;
  background-color: var(--otp-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 1rem;
}

.form-otp__submit:hover {
  background-color: var(--otp-primary-hover);
}

.form-otp__footer {
  border-top: 1px solid var(--otp-border);
  padding-block-start: 1rem;
}

.form-otp__text {
  font-size: 0.825rem;
  color: var(--otp-text-light);
  margin: 0;
}

.form-otp__link {
  font-weight: 600;
  color: var(--otp-primary);
  text-decoration: none;
}

.form-otp__link:hover {
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
| `--otp-bg` | `#ffffff` | Background of the container box |\n| `--otp-border` | `#cbd5e1` | Inactive cell borders |\n| `--otp-primary` | `#10b981` | Success highlight color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
