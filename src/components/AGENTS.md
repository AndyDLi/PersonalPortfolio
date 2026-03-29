# AGENTS.md (`src/components` Layer)

## Scope
- Applies to all files in `src/components/`.
- Inherits rules from repository root and `src/AGENTS.md`.

## Component Design Standards
- Build components as focused, single-responsibility UI units.
- Keep props explicit, minimal, and easy to reason about.
- Prefer stateless components unless local state is required for UI behavior.
- Use hooks correctly: top-level only, stable dependencies, clean event listeners.

## Coding Conventions
- Match existing export/import style and file naming (`PascalCase.jsx`).
- Keep JSX readable; extract repeated markup only when reuse is clear.
- Use descriptive handler names (`handleToggle`, `onFormUpdate`, etc.).
- Preserve existing React Bootstrap usage patterns.

## UX and Accessibility Expectations
- Ensure interactive elements are keyboard-usable.
- Include meaningful `alt` text for non-decorative images.
- Keep form fields labeled/understandable and preserve required validation.
- Avoid regressions in mobile menu behavior, navigation state, and form flows.

## Constraints (Do Not)
- Do not introduce unrelated business logic into presentational components.
- Do not hardcode sensitive values or private endpoints.
- Do not add unused props/state/effects.
- Do not break existing class names relied on by shared CSS without coordinated updates.

## Done When
- Component change is isolated and easy to review.
- Behavior is preserved (or intentionally changed per request).
- Accessibility basics are satisfied for new/updated UI.
- No lint issues introduced by the component edit.
