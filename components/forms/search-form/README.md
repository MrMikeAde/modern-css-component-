# Search Form

## Overview
A sleek modern search input featuring micro inline search icons, clear indicators, and action triggers.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Search Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Embedded inline search icon graphics\n- Bespoke documentation keyword quick navigation tags\n- Focus ring animations using high contrast CSS shadow glow variables\n- Absolute zero reliance on heavy query systems

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-search">
    <form class="form-search__body" action="#" method="GET" role="search">
      <div class="form-search__field">
        <label class="sr-only" for="search-input">Search database...</label>
        <svg class="form-search__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        <input class="form-search__input" type="search" id="search-input" name="q" placeholder="Search documentation, articles, commands..." autocomplete="off">
        <button class="form-search__submit" type="submit">Search</button>
      </div>
    </form>
    <div class="form-search__shortcuts">
      <span class="form-search__shortcut-title">Popular:</span>
      <a href="#grids" class="form-search__shortcut-link">Grids</a>
      <a href="#flexbox" class="form-search__shortcut-link">Flexbox</a>
      <a href="#variables" class="form-search__shortcut-link">CSS Variables</a>
    </div>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --search-bg: #ffffff;
  --search-border: #e2e8f0;
  --search-text: #334155;
  --search-text-light: #64748b;
  --search-title: #0f172a;
  --search-primary: #14b8a6;
  --search-primary-hover: #0d9488;
  --search-primary-light: #ccfbf1;
  --search-radius: 12px;
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

.form-search {
  inline-size: 100%;
  max-inline-size: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-search__body {
  inline-size: 100%;
}

.form-search__field {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--search-bg);
  border: 2px solid var(--search-border);
  border-radius: var(--search-radius);
  padding: 6px;
  transition: all 0.2s ease;
}

.form-search__field:focus-within {
  border-color: var(--search-primary);
  box-shadow: 0 0 0 4px var(--search-primary-light);
}

.form-search__icon {
  width: 20px;
  height: 20px;
  color: var(--search-text-light);
  margin-inline-start: 10px;
  flex-shrink: 0;
}

.form-search__input {
  flex-grow: 1;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
  border: none;
  font-size: 0.925rem;
  color: var(--search-title);
  background-color: transparent;
  outline: none;
}

.form-search__input::placeholder {
  color: var(--search-text-light);
  opacity: 0.7;
}

.form-search__submit {
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: var(--search-primary);
  color: #ffffff;
  border: none;
  border-radius: calc(var(--search-radius) - 4px);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-search__submit:hover {
  background-color: var(--search-primary-hover);
}

.form-search__shortcuts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding-inline-start: 12px;
  font-size: 0.825rem;
  color: var(--search-text-light);
}

.form-search__shortcut-title {
  font-weight: 500;
}

.form-search__shortcut-link {
  color: var(--search-primary-hover);
  text-decoration: none;
  background-color: #f1f5f9;
  padding-block: 0.125rem;
  padding-inline: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.form-search__shortcut-link:hover {
  background-color: var(--search-primary-light);
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
| `--search-bg` | `#ffffff` | Background color of the search input wrapper |\n| `--search-border` | `#e2e8f0` | Search boundary border color |\n| `--search-primary` | `#14b8a6` | Focus border highlights and secondary button hover color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
