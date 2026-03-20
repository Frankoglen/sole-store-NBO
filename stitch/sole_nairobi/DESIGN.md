```markdown
# DESIGN SYSTEM DOCUMENTATION: PREMIER E-COMMERCE

## 1. Overview & Creative North Star
**Creative North Star: "The Brutalist Boutique"**
This design system is built to bridge the gap between high-fashion editorial and raw, industrial functionality. It rejects the "bubbly" consumerism of modern apps in favor of a sharp, high-contrast aesthetic that mirrors the architecture of Nairobi and the precision of luxury footwear. 

We break the "template" look through **Intentional Asymmetry** and **Monolithic Blocking**. By utilizing hard edges (`0px` rounding) and a dominant dark canvas, we allow the product photography to act as the primary texture. This isn't just a store; it's a digital gallery where the UI acts as the frame—invisible but authoritative.

---

## 2. Colors
Our palette is rooted in absolute depth, using high-visibility accents to drive conversion.

### The Palette
*   **Background (`surface`):** `#131313` – The void. All design begins here.
*   **Cards (`surface_container`):** `#201f1f` – Subtle separation for product groupings.
*   **Accent (`primary_fixed`):** `#e3eb45` (Lime Yellow) – Use sparingly for critical actions and brand markers.
*   **Text (`on_surface`):** `#e5e2e1` – Off-white to reduce eye strain while maintaining punchy contrast.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning. 
Structure must be defined by background shifts. To separate a "New Arrivals" section from the "Hero," transition from `surface` to `surface_container_low`. If you feel the need for a line, increase your whitespace instead. Negative space is your primary structural tool.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked slabs. 
*   **Level 0 (Base):** `surface` (#131313)
*   **Level 1 (Sectioning):** `surface_container_low` (#1c1b1b)
*   **Level 2 (Interaction/Cards):** `surface_container` (#201f1f)
*   **Level 3 (Elevated Content):** `surface_container_highest` (#353534)

---

## 3. Typography
We utilize a "High-Low" typographic pairing to signal both authority and modern technicality.

*   **Display & Headline (Space Grotesk):** This is our "Voice." Large, bold, and unapologetic. Use `display-lg` (3.5rem) for hero statements and product names. The tight tracking of a condensed-feel font creates a sense of "Engineered Luxury."
*   **Body & Labels (Inter):** This is our "Function." Inter provides maximum legibility at small scales. Use `body-md` for product descriptions to ensure the technical specs are easily digestible.
*   **Visual Hierarchy:** Titles should be at least 2.5x the size of body text. This dramatic scale shift is what creates the "Editorial" feel.

---

## 4. Elevation & Depth
In this system, we do not use "depth" in the traditional sense. We use **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking" container tiers. A `surface_container_highest` card sitting on a `surface` background provides enough contrast to imply elevation without a single pixel of drop shadow.
*   **Ambient Shadows:** Shadows are strictly prohibited for standard components. The only exception is the **Sticky Nav**, which may use an ultra-diffused shadow (Blur: 40px, Opacity: 6%, Color: `#000000`) only when it scrolls over high-contrast imagery.
*   **Hard Edges:** All containers must maintain a `0px` radius. This reinforces the "Brutalist" aesthetic and differentiates the experience from generic, rounded e-commerce templates.

---

## 5. Components

### Buttons
*   **Primary:** Full-width, `primary_fixed` (#e3eb45) background, `on_primary_fixed` (#1c1d00) text. Sharp corners.
*   **Secondary:** Ghost style. Transparent background with a `primary_fixed` border.
*   **Interaction:** On hover, the Primary button should shift to `primary_fixed_dim` (#c7cf28).

### Size Selector Grids
*   **Unselected:** `surface_container_high` (#2a2a2a) background with `on_surface` text.
*   **Selected:** `primary_fixed` (#e3eb45) background with `on_primary_fixed` text.
*   **Layout:** Use a strict square grid. No rounded corners.

### Input Fields
*   **Base:** `surface_container_lowest` (#0e0e0e).
*   **Focus State:** The bottom border transforms into a 2px `primary_fixed` (#e3eb45) line. Label shifts to `primary_fixed`.
*   **Error:** Use the `error` token (#ffb4ab) only for the helper text and focus line.

### Sticky Navigation
*   **Style:** `surface` (#131313) at 95% opacity. 
*   **Layout:** Keep it minimal. Logo (Left), Categories (Center), Icons (Right). Use the `6` spacing scale (2rem) for horizontal padding.

### Trust Badges
*   Avoid colorful icons. Use monochromatic icons from the `on_surface_variant` (#c9c8ae) palette. Typography should be `label-md`.

---

## 6. Do's and Don'ts

### Do:
*   **Use Massive Padding:** When in doubt, double the spacing. Use `16` (5.5rem) or `20` (7rem) to separate major sections.
*   **Leverage Asymmetry:** Place a product image off-center and use the opposite white space for large `display-lg` typography.
*   **Maintain Sharpness:** Ensure every corner is `0px`. Rounding dilutes the premium, "engineered" feel of this system.

### Don't:
*   **Don't Use Dividers:** Never use a horizontal rule `<hr>` to separate content. Use a background color shift or a `12` (4rem) vertical spacing gap.
*   **Don't Use Gradients:** This system is built on flat, confident color blocks. Gradients add "visual noise" that contradicts our Minimal North Star.
*   **Don't Crowd the Grid:** E-commerce often tries to show as much as possible. We do the opposite. One hero product per scroll-depth feels more exclusive.

---
**Director's Final Note:** This design system is about the "Confidence of the Void." Do not fear the dark space; use it to make the lime-yellow accents and the product photography feel like a deliberate choice rather than an accident.```