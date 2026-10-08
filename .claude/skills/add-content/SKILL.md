---
name: add-content
description: Add or complete an ESL/IELTS/SAT note, mock question set, flashcard deck or guided practice following the SCHEMA NOTES at the bottom of js/data/*.js
disable-model-invocation: true
argument-hint: "<esl|ielts|sat> <note|deck|mock|practice> <topic>"
---

Add content for: $ARGUMENTS

1. Read the `SCHEMA NOTES` comment at the bottom of the target file in `js/data/` and 2-3 existing entries of the same kind to match tone, level and formatting.
2. Author the entry using that exact schema. Rules:
   - IDs are unique and follow the file's existing pattern (e.g. `ielts-16`); grep the file first.
   - For a `comingSoon: true` stub, replace/complete it and set `comingSoon: false`.
   - MCQ `correctAnswer` must match the options (SAT uses an index); every question needs an `explanation` and `tag`.
   - ESL content stays at B1/B2; IELTS band descriptors must be accurate. Use the `anthropic-skills:ielts-academic-instructor` skill for IELTS writing and listening.
3. Insert it without disturbing neighbouring entries (watch commas). The syntax hook will run `node --check`.
4. Run the `content-qa-reviewer` agent on the new entry and fix what it finds.
5. Report the new IDs. Only mention `js/app.js` if the schema notes say registration is required (e.g. new ESL mock packs or IELTS mock sets).
