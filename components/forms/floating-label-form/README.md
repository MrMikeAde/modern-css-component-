# Floating Label Form

## Overview
A custom user sign in card where text inputs transition elegantly to headers on focus using placeholder-shown.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Floating Label Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Pure CSS transition animations managing label scales\n- Zero JavaScript requirements leveraging native selector pseudo elements\n- Highly visible active focus outlines\n- Semantic and highly accessible label pairing

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-floating">
    <header class="form-floating__header">
      <h2 class="form-floating__title">Floating Labels</h2>
      <p class="form-floating__subtitle">Experience pure CSS label transitions on active inputs.</p>
    </header>

    <form class="form-floating__body" action="#" method="POST" novalidate>
      <div class="form-floating__field">
        <input class="form-floating__input" type="text" id="fl-user" name="user" placeholder=" " required>
        <label class="form-floating__label" for="fl-user">Username</label>
      </div>

      <div class="form-floating__field">
        <input class="form-floating__input" type="password" id="fl-pass" name="pass" placeholder=" " required>
        <label class="form-floating__label" for="fl-pass">Password</label>
      </div>

      <button class="form-floating__submit" type="submit">Process Action</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --float-bg: #ffffff;
  --float-border: #e2e8f0;
  --float-text: #334155;
  --float-text-light: #64748b;
  --float-title: #0f172a;
  --float-primary: #4f46e5;
  --float-primary-hover: #4338ca;
  --float-primary-light: #e0e7ff;
  --float-radius: 12px;
}

.form-floating {
  background-color: var(--float-bg);
  border: 1px solid var(--float-border);
  border-radius: var(--float-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 440px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-floating__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--float-title);
  margin-block-end: 0.375rem;
}

.form-floating__subtitle {
  font-size: 0.875rem;
  color: var(--float-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-floating__body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-floating__field {
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-floating__input {
  padding-block-start: 1.25rem;
  padding-block-end: 0.5rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--float-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--float-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-floating__input:focus {
  outline: none;
  border-color: var(--float-primary);
  box-shadow: 0 0 0 3px var(--float-primary-light);
}

.form-floating__label {
  position: absolute;
  left: 0.875rem;
  top: 0.875rem;
  font-size: 0.875rem;
  color: var(--float-text-light);
  transition: all 0.2s ease;
  pointer-events: none;
}

.form-floating__input:focus ~ .form-floating__label,
.form-floating__input:not(:placeholder-shown) ~ .form-floating__label {
  top: 0.25rem;
  font-size: 0.675rem;
  font-weight: 700;
  color: var(--float-primary);
}

.form-floating__submit {
  padding-block: 0.75rem;
  background-color: var(--float-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-floating__submit:hover {
  background-color: var(--float-primary-hover);
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
| `--float-bg` | `#ffffff` | Background of the container box |\n| `--float-border` | `#e2e8f0` | Inactive field boundaries |\n| `--float-primary` | `#4f46e5` | Primary highlight brand color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
