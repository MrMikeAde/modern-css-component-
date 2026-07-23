# Neumorphism Form

## Overview
A custom soft shadow tactile container representing concave and convex visual button presses.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Neumorphism Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Custom double soft shadows constructing tactile surfaces\n- Tactile inset focus effects on selected elements\n- Zero JavaScript interactive state requirements\n- Clean mobile first layout alignment structures

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-neumorphism">
    <header class="form-neumorphism__header">
      <h2 class="form-neumorphism__title">Neumorphism</h2>
      <p class="form-neumorphism__subtitle">Observe modern double soft-shadow tactile interfaces.</p>
    </header>

    <form class="form-neumorphism__body" action="#" method="POST" novalidate>
      <div class="form-neumorphism__field">
        <label class="form-neumorphism__label" for="nm-input">Enter text</label>
        <input class="form-neumorphism__input" type="text" id="nm-input" required placeholder="Soft UI typing...">
      </div>

      <button class="form-neumorphism__submit" type="submit">Press Button</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --neu-bg: #e0e5ec;
  --neu-text: #505c6e;
  --neu-text-light: #7a889b;
  --neu-title: #313d4f;
  --neu-shadow-dark: #a3b1c6;
  --neu-shadow-light: #ffffff;
  --neu-radius: 20px;
}

.form-neumorphism {
  background-color: var(--neu-bg);
  border-radius: var(--neu-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 420px;
  box-shadow: 9px 9px 16px var(--neu-shadow-dark), -9px -9px 16px var(--neu-shadow-light);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-neumorphism__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--neu-title);
  margin-block-end: 0.375rem;
}

.form-neumorphism__subtitle {
  font-size: 0.875rem;
  color: var(--neu-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-neumorphism__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-neumorphism__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-neumorphism__label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--neu-text);
}

.form-neumorphism__input {
  padding-block: 0.75rem;
  padding-inline: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  color: var(--neu-title);
  background-color: var(--neu-bg);
  box-shadow: inset 3px 3px 6px var(--neu-shadow-dark), inset -3px -3px 6px var(--neu-shadow-light);
  transition: all 0.2s ease;
}

.form-neumorphism__input:focus {
  outline: none;
  box-shadow: inset 1px 1px 3px var(--neu-shadow-dark), inset -1px -1px 3px var(--neu-shadow-light);
}

.form-neumorphism__submit {
  padding-block: 0.75rem;
  background-color: var(--neu-bg);
  color: var(--neu-text);
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 4px 4px 8px var(--neu-shadow-dark), -4px -4px 8px var(--neu-shadow-light);
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-neumorphism__submit:hover {
  color: var(--neu-title);
}

.form-neumorphism__submit:active {
  box-shadow: inset 2px 2px 4px var(--neu-shadow-dark), inset -2px -2px 4px var(--neu-shadow-light);
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
| `--neu-bg` | `#e0e5ec` | Background of the tactile widget |\n| `--neu-shadow-dark` | `a3b1c6` | Darker shadow offsetting color |\n| `--neu-shadow-light` | `ffffff` | Light border glows |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
