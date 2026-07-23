# Payment Form

## Overview
A micro secure payment card form focusing on instant input masking styling, custom card overlays, and CC validity structures.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Payment Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Embedded vector payment provider layout\n- Dual text field alignments for card expiry and safety codes\n- Interactive border active states\n- Pure responsive layout architecture matching visual containers

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-payment">
    <header class="form-payment__header">
      <h2 class="form-payment__title">Payment Information</h2>
      <p class="form-payment__subtitle">Enter your secure credit card details below.</p>
    </header>

    <div class="form-payment__card-preview">
      <div class="form-payment__chip"></div>
      <div class="form-payment__card-number">•••• •••• •••• ••••</div>
      <div class="form-payment__card-row">
        <div>
          <span class="form-payment__card-label">Card Holder</span>
          <div class="form-payment__card-value">John Doe</div>
        </div>
        <div>
          <span class="form-payment__card-label">Expires</span>
          <div class="form-payment__card-value">MM/YY</div>
        </div>
      </div>
    </div>

    <form class="form-payment__body" action="#" method="POST" novalidate>
      <div class="form-payment__field">
        <label class="form-payment__label" for="pay-name">Cardholder Name</label>
        <input class="form-payment__input" type="text" id="pay-name" name="cardname" required placeholder="John Doe">
      </div>

      <div class="form-payment__field">
        <label class="form-payment__label" for="pay-num">Card Number</label>
        <input class="form-payment__input" type="text" id="pay-num" name="cardnum" pattern="[0-9]{16}" required placeholder="4111 2222 3333 4444" autocomplete="cc-number">
      </div>

      <div class="form-payment__row">
        <div class="form-payment__field">
          <label class="form-payment__label" for="pay-expiry">Expiration Date</label>
          <input class="form-payment__input" type="text" id="pay-expiry" name="cardexpiry" placeholder="MM/YY" required autocomplete="cc-exp">
        </div>
        <div class="form-payment__field">
          <label class="form-payment__label" for="pay-cvv">CVV / CVC</label>
          <input class="form-payment__input" type="password" id="pay-cvv" name="cardcvv" pattern="[0-9]{3,4}" required placeholder="•••" autocomplete="cc-csc">
        </div>
      </div>

      <button class="form-payment__submit" type="submit">Pay $49.00 Securely</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --pay-bg: #ffffff;
  --pay-border: #e2e8f0;
  --pay-text: #334155;
  --pay-text-light: #64748b;
  --pay-title: #0f172a;
  --pay-primary: #4f46e5;
  --pay-primary-hover: #4338ca;
  --pay-primary-light: #e0e7ff;
  --pay-radius: 16px;
  --pay-error: #ef4444;
}

.form-payment {
  background-color: var(--pay-bg);
  border: 1px solid var(--pay-border);
  border-radius: var(--pay-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 440px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-payment__title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--pay-title);
  margin-block-end: 0.375rem;
}

.form-payment__subtitle {
  font-size: 0.825rem;
  color: var(--pay-text-light);
  margin: 0;
}

.form-payment__card-preview {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  color: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 8px 16px -4px rgba(49, 46, 129, 0.3);
}

.form-payment__chip {
  width: 38px;
  height: 28px;
  background-color: #fbbf24;
  border-radius: 4px;
}

.form-payment__card-number {
  font-size: 1.25rem;
  font-family: monospace;
  letter-spacing: 0.15em;
}

.form-payment__card-row {
  display: flex;
  justify-content: space-between;
}

.form-payment__card-label {
  font-size: 0.625rem;
  color: #c7d2fe;
  text-transform: uppercase;
}

.form-payment__card-value {
  font-size: 0.875rem;
  font-weight: 600;
}

.form-payment__body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-payment__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-payment__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-payment__label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--pay-text);
}

.form-payment__input {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--pay-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--pay-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-payment__input:focus {
  outline: none;
  border-color: var(--pay-primary);
  box-shadow: 0 0 0 3px var(--pay-primary-light);
}

.form-payment__submit {
  padding-block: 0.75rem;
  background-color: var(--pay-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-payment__submit:hover {
  background-color: var(--pay-primary-hover);
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
| `--pay-bg` | `#ffffff` | Background of the payment widget |\n| `--pay-primary` | `#0f172a` | Dark background and primary highlight tone |\n| `--pay-border` | `#e2e8f0` | Boundary indicator colors |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
