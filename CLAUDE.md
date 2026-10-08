# ApexPrep Academy — ESL / IELTS / SAT resource bank

Static, build-less site: open `index.html` or run the `apexprep-static` preview (`.claude/launch.json`, port 8532). No npm, no bundler. Tailwind comes from a CDN.

## Layout
- `index.html` — shell, nav tabs (home, esl, ielts, sat, progress)
- `js/app.js` — rendering/routing; `js/engine.js` — mock-exam timer and scoring; `js/flashcards.js`; `js/store.js` — localStorage (`apexprep_v1`)
- `js/data/{esl,ielts,sat}.js` — all content, exposed as `window.APEX_DATA.<esl|ielts|sat>`
- `audio/ielts/section{N}/` — listening MP3s; `scripts/` — authoring-time tools (never run by the site)

## Adding content
Each data file ends with a `SCHEMA NOTES` comment. Follow it exactly; `app.js` discovers notes, decks and listening sets generically, so content additions normally need no UI changes. Use `/add-content` and `/new-listening-set`.
- IELTS Pack 2 notes are stubs with `comingSoon: true`; flip to `false` once authored.
- IDs must be unique across the whole file. Answer keys must match the options and explanations.

## Rules
- Run the `content-qa-reviewer` agent after authoring content; run `ui-reviewer` after UI changes.
- Hooks in `.claude/settings.json` syntax-check edited JS and block edits to sqlite, `__pycache__` and `.remember/`.
- `ELEVENLABS_API_KEY` is environment-only. Never write it to a file.
- Audio generation needs `ffmpeg` on PATH (not currently installed) and a paid ElevenLabs plan.
