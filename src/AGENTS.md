# AGENTS.md (`src` Layer)

## Scope
- Applies to everything under `src/` unless a deeper `AGENTS.md` overrides.
- Inherits root rules from the repository `AGENTS.md`.

## Architecture Expectations
- `App.jsx` composes top-level layout and route mapping.
- `main.jsx` remains the single React entrypoint.
- Route components live in `src/components/` and are imported explicitly.
- Keep page structure simple: nav shell + routed content sections.

## Frontend Conventions
- Prefer named exports for components to match existing patterns.
- Keep component logic local and straightforward; avoid premature abstractions.
- Reuse existing CSS classes and design language before adding new patterns.
- Keep CSS organized by section and consistent with current style conventions.
- Preserve responsive behavior across mobile/tablet/desktop breakpoints.

## Styling Rules
- Favor existing global/theme styles in `App.css` and `index.css`.
- Avoid inline style objects unless dynamic styling is required.
- Keep animations purposeful and lightweight.
- Maintain accessible contrast, focus states, and semantic structure.

## Constraints (Do Not)
- Do not change route paths or navigation behavior unless requested.
- Do not split or relocate files just for stylistic preference.
- Do not introduce large CSS rewrites for small feature updates.
- Do not duplicate styles/components when extension is possible.

## Done When
- React code is consistent with existing `src/` architecture.
- Imports compile cleanly and route rendering still works.
- UI remains responsive and visually coherent with current brand direction.
- Any new styles are minimal, scoped, and non-regressive.