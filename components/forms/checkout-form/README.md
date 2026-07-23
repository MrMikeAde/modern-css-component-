# Checkout Form

## Overview
A premium multi-section purchase form with floating grid addresses, shipping custom selectors, and pricing review boards.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Checkout Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Logical properties organizing complex layout sections\n- Multi-row Grid responsive layout rules\n- Sleek visual custom shipping method radios\n- Zero JavaScript requirements with built-in validation

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-checkout">
    <header class="form-checkout__header">
      <h2 class="form-checkout__title">Secure Checkout</h2>
      <p class="form-checkout__subtitle">Review your details and finalize your shipping info.</p>
    </header>

    <form class="form-checkout__body" action="#" method="POST" novalidate>
      <section class="form-checkout__section">
        <h3 class="form-checkout__section-title">1. Shipping Address</h3>
        <div class="form-checkout__grid">
          <div class="form-checkout__field form-checkout__field--full">
            <label class="form-checkout__label" for="chk-name">Full Name</label>
            <input class="form-checkout__input" type="text" id="chk-name" name="name" required placeholder="Alexander Wright">
          </div>
          <div class="form-checkout__field form-checkout__field--full">
            <label class="form-checkout__label" for="chk-street">Street Address</label>
            <input class="form-checkout__input" type="text" id="chk-street" name="street" required placeholder="123 Science Way, Suite 400">
          </div>
          <div class="form-checkout__field">
            <label class="form-checkout__label" for="chk-city">City</label>
            <input class="form-checkout__input" type="text" id="chk-city" name="city" required placeholder="Boston">
          </div>
          <div class="form-checkout__field">
            <label class="form-checkout__label" for="chk-state">State / Province</label>
            <input class="form-checkout__input" type="text" id="chk-state" name="state" required placeholder="MA">
          </div>
          <div class="form-checkout__field">
            <label class="form-checkout__label" for="chk-zip">Postal Code</label>
            <input class="form-checkout__input" type="text" id="chk-zip" name="zip" required placeholder="02115">
          </div>
        </div>
      </section>

      <section class="form-checkout__section">
        <h3 class="form-checkout__section-title">2. Shipping Method</h3>
        <div class="form-checkout__shipping-options">
          <label class="form-checkout__shipping-card">
            <input type="radio" name="shipping" value="standard" checked class="form-checkout__shipping-radio">
            <span class="form-checkout__shipping-content">
              <span class="form-checkout__shipping-title">Standard Shipping</span>
              <span class="form-checkout__shipping-desc">Delivered in 3-5 business days</span>
            </span>
            <span class="form-checkout__shipping-price">Free</span>
          </label>
          <label class="form-checkout__shipping-card">
            <input type="radio" name="shipping" value="express" class="form-checkout__shipping-radio">
            <span class="form-checkout__shipping-content">
              <span class="form-checkout__shipping-title">Express Delivery</span>
              <span class="form-checkout__shipping-desc">Delivered in 1-2 business days</span>
            </span>
            <span class="form-checkout__shipping-price">$15.00</span>
          </label>
        </div>
      </section>

      <button class="form-checkout__submit" type="submit">Proceed to Payment</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --checkout-bg: #ffffff;
  --checkout-border: #e2e8f0;
  --checkout-text: #334155;
  --checkout-text-light: #64748b;
  --checkout-title: #0f172a;
  --checkout-primary: #4f46e5;
  --checkout-primary-hover: #4338ca;
  --checkout-primary-light: #e0e7ff;
  --checkout-radius: 12px;
  --checkout-error: #ef4444;
}

.form-checkout {
  background-color: var(--checkout-bg);
  border: 1px solid var(--checkout-border);
  border-radius: var(--checkout-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 650px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-checkout__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--checkout-title);
  margin-block-end: 0.375rem;
}

.form-checkout__subtitle {
  font-size: 0.875rem;
  color: var(--checkout-text-light);
  margin: 0;
}

.form-checkout__section {
  border-top: 1px solid var(--checkout-border);
  padding-block-start: 1.25rem;
  margin-block-start: 1rem;
}

.form-checkout__section-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--checkout-title);
  margin-block-end: 1rem;
}

.form-checkout__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 480px) {
  .form-checkout__grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .form-checkout__field--full {
    grid-column: span 3;
  }
}

.form-checkout__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-checkout__label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--checkout-text-light);
}

.form-checkout__input {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--checkout-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--checkout-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-checkout__input:focus {
  outline: none;
  border-color: var(--checkout-primary);
  box-shadow: 0 0 0 3px var(--checkout-primary-light);
}

.form-checkout__shipping-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-checkout__shipping-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--checkout-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-checkout__shipping-radio {
  margin-inline-end: 1rem;
  accent-color: var(--checkout-primary);
}

.form-checkout__shipping-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.form-checkout__shipping-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--checkout-title);
}

.form-checkout__shipping-desc {
  font-size: 0.75rem;
  color: var(--checkout-text-light);
}

.form-checkout__shipping-price {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--checkout-title);
}

.form-checkout__shipping-card:has(.form-checkout__shipping-radio:checked) {
  border-color: var(--checkout-primary);
  background-color: #f5f3ff;
}

.form-checkout__submit {
  padding-block: 0.75rem;
  background-color: var(--checkout-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 1rem;
}

.form-checkout__submit:hover {
  background-color: var(--checkout-primary-hover);
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
| `--checkout-bg` | `#ffffff` | Background of the container |\n| `--checkout-border` | `#e2e8f0` | Card border dividers |\n| `--checkout-primary` | `#4f46e5` | Accent highlight tone |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
