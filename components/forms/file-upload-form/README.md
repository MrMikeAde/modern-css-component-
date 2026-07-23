# File Upload Form

## Overview
A custom drag-and-drop styled file upload widget with file preview grids and beautiful focus indicators.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [File Upload Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Seamless file upload visual drop zone mapping\n- Hidden native controls accessible to screen readers\n- Embedded vector document SVG graphic indicators\n- Clean hover state transitions

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-file">
    <header class="form-file__header">
      <h2 class="form-file__title">Upload Documents</h2>
      <p class="form-file__subtitle">Drag your files here or browse to upload files.</p>
    </header>

    <form class="form-file__body" action="#" method="POST" enctype="multipart/form-file" novalidate>
      <label class="form-file__zone" for="file-input-id">
        <svg class="form-file__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
        <span class="form-file__zone-title">Choose local files</span>
        <span class="form-file__zone-subtitle">Supports PDF, DOCX, ZIP files up to 10MB</span>
        <input type="file" id="file-input-id" class="sr-only" name="uploaded_file" multiple required>
      </label>

      <button class="form-file__submit" type="submit">Upload Document</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --file-bg: #ffffff;
  --file-border: #cbd5e1;
  --file-text: #334155;
  --file-text-light: #64748b;
  --file-title: #0f172a;
  --file-primary: #6366f1;
  --file-primary-hover: #4f46e5;
  --file-primary-light: #e0e7ff;
  --file-radius: 12px;
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

.form-file {
  background-color: var(--file-bg);
  border: 1px solid var(--file-border);
  border-radius: var(--file-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 480px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.form-file__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--file-title);
  margin-block-end: 0.375rem;
}

.form-file__subtitle {
  font-size: 0.875rem;
  color: var(--file-text-light);
  margin: 0;
}

.form-file__zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--file-border);
  border-radius: 8px;
  padding: 2.5rem 1.5rem;
  cursor: pointer;
  background-color: #fafafa;
  transition: all 0.2s ease;
  margin-block-end: 1rem;
}

.form-file__zone:hover {
  background-color: #f5f3ff;
  border-color: var(--file-primary);
}

.form-file__zone:focus-within {
  border-color: var(--file-primary);
  box-shadow: 0 0 0 3px var(--file-primary-light);
}

.form-file__icon {
  width: 48px;
  height: 48px;
  color: var(--file-text-light);
  margin-block-end: 1rem;
}

.form-file__zone-title {
  font-size: 0.925rem;
  font-weight: 700;
  color: var(--file-title);
}

.form-file__zone-subtitle {
  font-size: 0.75rem;
  color: var(--file-text-light);
  margin-block-start: 0.25rem;
}

.form-file__submit {
  padding-block: 0.75rem;
  inline-size: 100%;
  background-color: var(--file-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-file__submit:hover {
  background-color: var(--file-primary-hover);
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
| `--file-bg` | `#ffffff` | Background of the container panel |\n| `--file-border` | `#cbd5e1` | Dotted boundary outlines |\n| `--file-primary` | `#6366f1` | Glow highlights and active buttons |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
