# Migration Log: Vite -> Next.js

## 2025-10-06
- Initialized migration log.
- Installed Next.js 14 project `next-wedding` with Tailwind + TypeScript via create-next-app.
- Installed frontend dependencies `swiper` and `baguettebox.js` for UI parity.
- Prepared Next.js structure: created `src/components`, `src/data`, and `src/lib` directories.
- Added placeholder sample data for Next.js components (`src/data/sampleData.ts`).
- Ported hero intro structure into Next.js component `IntroSection` with Swiper setup.
- Replaced default Next.js home page with `IntroSection` rendering sample data.
- Copied legacy assets into Next.js `public/assets/undangan` for reuse.
- Copied sample media (`storage/app/public`) into Next.js `public/assets/images/uploads` for static preview.
- Created `src/styles` directory for legacy styling imports.
- Added `src/styles/legacy.css` to consume existing CSS bundles.
- Updated layout to load legacy styles and metadata.
- Extended sample data structure to support all sections.
- Added `TabSection` component with legacy tabs, galleries, wishes, and gifts layout.
- Updated Next.js page to render intro + tabs and load legacy scripts.
- Installed Prettier dev dependency for formatting.
- Attempted Next.js lint setup; pending ESLint configuration.
- Installed ESLint packages to prepare lint configuration.
- Attempted Next.js codemod for ESLint CLI; aborted due to git safety check.
- Installed ESLint and Prettier tooling, added lint script, and confirmed lint passes with flat config.
- Linked legacy CSS/JS via `<head>` and local copies in `public/assets`; Next.js build now succeeds.
