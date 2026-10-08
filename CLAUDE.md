# ApexPrep Academy — ESL / IELTS / SAT resource bank

Static, build-less site: open `index.html` or run the `apexprep-static` preview (`.claude/launch.json`, port 8532). No npm, no bundler. Tailwind comes from a CDN.

## Layout
- `index.html` — shell, nav tabs (home, esl, ielts, sat, progress)
- `js/app.js` — rendering/routing; `js/engine.js` — mock-exam timer and scoring; `js/flashcards.js`; `js/store.js` — localStorage (`apexprep_v1`)
- `js/data/{esl,ielts,sat}.js` — all content, exposed as `window.APEX_DATA.<esl|ielts|sat>`
- `audio/ielts/section{N}/` — listening MP3s; `scripts/` — authoring-time tools (never run by the site)

## Adding content
Each data file ends with a `SCHEMA NOTES` comment. Follow it exactly; `app.js` discovers notes, decks and listening sets generically, so content additions normally need no UI changes. Use `/add-content` and `/new-listening-set`.
- IELTS Pack 2 notes `ielts-24`, `25`, `26` (Listening) and `30` (Strategy) are still stubs with `comingSoon: true`; flip to `false` once authored. Notes 16–23 (Reading/Writing) and 27–29 (Speaking) are authored.
- IELTS data arrays: `notes`, `guidedPractice`, `listeningSets`, `readingSets` (13 questions, `[A]`–`[F]` paragraph markers in the passage text), `writingSets` (Task 1 sets carry a `dataTable` shown under the prompt), `speakingSets` (Parts 1–3, run on the engine's writing kind with a model answer), `flashcardDecks`, `ultimateMock`.
- IDs must be unique across the whole file; anything the engine runs must start with `ielts` (progress is keyed by prefix). Answer keys must match the options and explanations; options-based questions use a 0-based index.
- **Content test:** `node scripts/validate-content.js` (schema, answer keys, word counts, HTML balance). Run it after every edit to `js/data/ielts.js`.
- Known issue: `ultimateMock` Reading headings refer to "Paragraph B" but the passage has no visible letters, and its Writing Task 1 prompt describes a chart without showing the data.

## Rules
- Run the `content-qa-reviewer` agent after authoring content; run `ui-reviewer` after UI changes.
- Hooks in `.claude/settings.json` syntax-check edited JS and block edits to sqlite, `__pycache__` and `.remember/`.
- `ELEVENLABS_API_KEY` is environment-only. Never write it to a file.
- Audio generation needs `ffmpeg` on PATH (not currently installed) and a paid ElevenLabs plan.

## Colour coding
Subject colour comes from `#main-content[data-subject]` (set in `renderMainOnly`): ESL teal, IELTS indigo, SAT amber. Skill sub-colours are classes `skill-<subject>-<skill>` (e.g. `skill-ielts-writing`, `skill-esl-grammar`, `skill-sat-math`) on cards and `badge-skill` chips; add a new skill by defining its `--skill-base` in `css/styles.css` and the class is picked up by `skillClass()` in `js/app.js`. Badge text colour is derived with `color-mix` so it stays readable in dark mode (checked at >= 5.3:1).
