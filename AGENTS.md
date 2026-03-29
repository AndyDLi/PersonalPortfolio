# AGENTS.md (Repository Root)

## Scope
- Applies to the entire repository unless a deeper `AGENTS.md` overrides a rule.
- This is the default instruction layer for all agentic edits.

## Project Context
- Stack: React 19 + Vite + React Router + React Bootstrap.
- Goal: maintain a polished, responsive portfolio site with clean structure and predictable behavior.

## Working Principles
- Make minimal, targeted changes; preserve existing architecture and style direction.
- Prefer readability and maintainability over clever abstractions.
- Keep user-facing behavior stable unless the task explicitly requests a change.
- Update only files relevant to the task; avoid opportunistic refactors.

## Conventions
- Use ESM imports/exports and functional React components.
- Follow existing naming patterns and folder boundaries.
- Keep dependencies lean; prefer existing libraries already in `package.json`.
- Ensure routes, assets, and imports remain valid after edits.

## Constraints (Do Not)
- Do not introduce breaking visual or routing changes without explicit request.
- Do not add heavy/new dependencies for small problems.
- Do not commit secrets, tokens, personal credentials, or environment-specific values.
- Do not leave dead code, unused imports, or placeholder TODO blocks.

## Validation Expectations
- Run relevant checks after meaningful code changes:
	- `npm run lint`
	- `npm run build`
- If checks are skipped or fail, document why and what remains.

## Done When
- The requested change is implemented and scoped correctly.
- Lint/build are clean, or unresolved issues are explicitly reported.
- No unrelated files were modified.
- Code and content align with existing portfolio quality and style.