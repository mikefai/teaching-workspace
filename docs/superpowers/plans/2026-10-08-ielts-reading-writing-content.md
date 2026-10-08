# IELTS Reading & Writing Content Pack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the 8 Reading/Writing roadmap stubs (`ielts-16`–`ielts-23`) into full study notes, and add interactive Reading and Writing exercise sets plus extra guided-practice drills.

**Architecture:** All content lives in `js/data/ielts.js` under the existing `notes[]` and `guidedPractice[]` arrays plus two new arrays, `readingSets[]` and `writingSets[]`. Both new arrays run on the existing `TestEngine` (`kind:"objective"` with a passage, `kind:"writing"`), launched from two new IELTS tab views in `js/app.js`. The engine gains one optional render field, `dataTable`, so Writing Task 1 exercises can show their data. A Node validator (`scripts/validate-content.js`) is the test harness for content, because the project has no test framework.

**Tech Stack:** Vanilla JS (no build), Node (`node --check`, validator script), Playwright MCP for UI verification via the `apexprep-static` preview (port 8532).

**Spec:** No separate spec exists. Requirements are the user request ("build IELTS reading and writing content for study notes and exercises"), the `SCHEMA NOTES` comment at `js/data/ielts.js:489`, and `CLAUDE.md`.

## Global Constraints

- All content is original. No copied passages, charts or model answers from Cambridge IELTS or any published source.
- Note, set and drill IDs: notes `ielts-NN`; reading sets `ielts-read-NN`; writing sets `ielts-write-NN`; drills `gp-w3`…`gp-w6`, `gp-r2`…`gp-r4`. Anything the engine runs MUST start with `ielts` (`engine.js` `_subjectKey()` keys progress by prefix).
- MCQ-style questions (anything with `options[]`) use a 0-based **index** for `correctAnswer`. TFNG answers are exactly `"True"`, `"False"` or `"Not Given"`. Text answers are matched after lower-casing, stripping a trailing `.,!?;:` and removing all whitespace — so no hyphens, slashes or digit/word alternatives in text answers.
- Every question has `id`, `prompt`, `correctAnswer`, `explanation`, `tag`.
- `body[].html` is raw HTML: use only `<p> <ul> <li> <strong> <em> <br>`, escape `&` as `&amp;`, and balance every tag.
- Writing Task 1 model answers ≥150 words, Task 2 ≥250 words, each ≤1.6× the minimum. Annotations name TA, CC, LR and GRA.
- Reading passages 600–900 words, 13 questions each, `timeLimitMinutes: 20`.
- Keep Pack 2 notes `ielts-24`–`ielts-30` (Listening/Speaking/Strategy) as `comingSoon: true` stubs, untouched.
- Author with the `anthropic-skills:ielts-academic-instructor` skill. After each content task, run the `content-qa-reviewer` agent on the changed IDs and fix its errors before committing.
- `.claude/hooks/check-js-syntax.js` runs `node --check` on every edit under `js/` and `scripts/`. A comma slip in `ielts.js` is reported immediately.

## Review Focus

1. A summary/gap answer with a hyphen, slash or digit form (e.g. `well-known`) never matches what learners type — the validator rejects `-` and `/` in text answers (Task 1).
2. A set whose ID doesn't start with `ielts` is silently recorded under subject `other` in My Progress — the validator rejects it (Task 1).
3. A `dataTable` wider than a 375px phone forces horizontal page scroll — the table sits in an `overflow-x-auto` wrapper (Task 2).
4. Table cells containing `<1%`, `R&D` or `A > B` must render literally, not as markup — cells go through `escapeHtml` (Task 2).
5. Unbalanced or unescaped HTML in a note's `body[].html` breaks the surrounding card layout — the validator counts open/close tags and bare `&` (Task 1).

---

### Task 1: Content validator and baseline commit

**Files:**
- Create: `scripts/validate-content.js`
- Modify: none (first commit also records the existing project)

**Interfaces:**
- Produces: CLI `node scripts/validate-content.js [--expect-authored <id,id,…>] [--expect-practice <id,id,…>] [--expect-reading <n>] [--expect-writing <n>]`. Exit 0 = all checks pass, exit 1 = prints one `FAIL <id>: <reason>` line per problem. Later tasks use the `--expect-*` flags as their failing test.
- Loads data by evaluating `js/data/ielts.js` with `vm.runInNewContext` against a `{ window: {} }` sandbox, then reads `window.APEX_DATA.ielts`.

- [ ] **Step 1: Make the baseline commit** of the existing project so later diffs are reviewable.

```bash
git add -A && git commit -m "chore: baseline ApexPrep site with Claude Code automations"
```

- [ ] **Step 2: Write `scripts/validate-content.js`** implementing these checks (each failing check names the offending id):
  - IDs unique across `notes`, `guidedPractice`, `listeningSets`, `readingSets`, `writingSets`, `flashcardDecks`; IDs of the last four plus `ultimateMock` start with `ielts`.
  - Authored notes (`comingSoon:false`): `body` has ≥3 entries each with `heading` + `html`; `commonMistakes` ≥3; non-empty `practiceTip`; `skill:"Writing"` notes also need `modelAnswer.text` and `modelAnswer.bandAnnotation`. Stubs (`comingSoon:true`) are exempt.
  - Every `html` string: counts of `<p>`/`</p>`, `<ul>`/`</ul>`, `<li>`/`</li>`, `<strong>`/`</strong>`, `<em>`/`</em>` equal, no bare `&` (an `&` not followed by `[a-z#0-9]+;`), no tags outside the allowed list.
  - `readingSets` (treat missing as `[]`): exactly 13 questions; passage `text` 600–900 words; `timeLimitMinutes` 20; options-questions have integer `correctAnswer` in `0..options.length-1`; `tfng` answers in the three allowed strings; text answers contain no `-` or `/`; a prompt containing `NO MORE THAN (ONE|TWO|THREE) WORD` limits the answer's word count; every question has `explanation` and `tag`; question IDs unique within the set.
  - `writingSets` (missing = `[]`): `task` is 1 or 2; `minWords` is 150/250 by task; `modelAnswer.text` word count within `[minWords, 1.6×minWords]`; `bandAnnotation` contains `TA`, `CC`, `LR`, `GRA`; if `dataTable` present, every row length equals `headers.length`; task 1 sets must have a `dataTable`.
  - `--expect-authored` ids exist with `comingSoon:false`; `--expect-practice` ids exist in `guidedPractice` with `rubric.TA/CC/LR/GRA` and `bandNote`; `--expect-reading`/`--expect-writing` set counts are ≥ n.

- [ ] **Step 3: Run baseline — expect pass.**

Run: `node scripts/validate-content.js`
Expected: exit 0, prints `OK`.

- [ ] **Step 4: Prove it can fail.**

Run: `node scripts/validate-content.js --expect-authored ielts-16 --expect-reading 1`
Expected: exit 1 with `FAIL ielts-16: comingSoon is true` and `FAIL readingSets: expected >= 1, found 0`.

- [ ] **Step 5: Commit.**

```bash
git add scripts/validate-content.js
git commit -m "test: add IELTS content validator"
```

---

### Task 2: Engine `dataTable` and prompt line breaks

**Files:**
- Modify: `js/engine.js` (`_renderWritingPart`, near line 248; header comment near line 7)
- Modify: `css/styles.css` (append rules)

**Interfaces:**
- Consumes: writing part shape `{ id, title, kind:"writing", prompt, minWords, timeLimitMinutes, modelAnswer:{text,bandAnnotation} }`.
- Produces: optional `part.dataTable: { caption?: string, headers: string[], rows: string[][] }` rendered under the prompt. Tasks 5 and 6 pass it through unchanged.

- [ ] **Step 1: Write the failing check** (browser-side, nothing is saved to disk). Start the preview (`mcp__Claude_Browser__preview_start` name `apexprep-static`), open IELTS → Mock → launch, and via `javascript_tool` run `new TestEngine(document.getElementById("main-content"), ()=>{}).load({id:"ielts-t", title:"t", parts:[{id:"w", title:"w", kind:"writing", prompt:"Line one\nLine two", minWords:150, dataTable:{caption:"c", headers:["Item","Share"], rows:[["R&D","<1%"]]}, modelAnswer:{text:"m", bandAnnotation:"TA CC LR GRA"}}]})`.
Expected before the change: the page shows no table and "Line one Line two" on one line.

- [ ] **Step 2: Implement `_renderDataTable(table)` in `js/engine.js`** returning `""` when `table` is falsy, else an `overflow-x-auto` wrapper containing a `<table class="apex-datatable">` with `<caption>`, `<th scope="col">` headers and `<td>` cells, **every string passed through `escapeHtml`**. Call it in `_renderWritingPart` immediately after the prompt block, and give the prompt element `style="white-space:pre-line"`. Update the part-shape comment at the top of the file to list `dataTable?`.

- [ ] **Step 3: Add `.apex-datatable` styles** to `css/styles.css` using the existing CSS variables (`--line`, `--paper`, `--ink-soft`), compact cell padding, caption in `--muted`, and dark-theme compatibility through those variables only.

- [ ] **Step 4: Verify.** Reload, repeat the Step 1 snippet.
Expected: two lines in the prompt; a table whose cells read exactly `R&D` and `<1%`; at `resize_window` 375×812 the page has no horizontal scroll (`document.documentElement.scrollWidth <= 375`) and the table scrolls inside its wrapper. Console has no errors.

- [ ] **Step 5: Commit.**

```bash
git add js/engine.js css/styles.css
git commit -m "feat(engine): render optional dataTable and preserve prompt line breaks"
```

---

### Task 3: Reading and Writing views in the IELTS tab

**Files:**
- Modify: `js/app.js` (state comment line 12; IELTS view tab list ~line 283–285; view branches ~line 288–312; launchers near `launchIeltsMock` ~line 599)
- Modify: `js/data/ielts.js` (add empty `readingSets: []` and `writingSets: []` after `listeningSets`, and extend the SCHEMA NOTES comment at ~line 489 with both shapes below)

**Interfaces:**
- Consumes: `mockCard({title, badge, minutes, desc, onLaunch, soon?})`, `emptyState()`, `startEngine(runner)` (existing).
- Produces:
  - `launchIeltsReading(setId: string): void` → `startEngine` with one part `{ id:"reading", kind:"objective", timeLimitMinutes, passage:{title: set.passageTitle, text: set.text}, instructions: set.instructions, questions }` and runner `id: set.id`, `subjectBadge:"IELTS Suite · Reading Practice"`.
  - `launchIeltsWriting(setId: string): void` → one part `{ id:"writing", kind:"writing", title, timeLimitMinutes, minWords, prompt, dataTable, modelAnswer:{text, bandAnnotation} }`, `subjectBadge:"IELTS Suite · Writing Practice"`.
  - Data shapes: `readingSets[]: { id, title, bandFocus, passageTitle, text, timeLimitMinutes:20, instructions, questions[] }` (question shapes identical to `ultimateMock.reading.questions`); `writingSets[]: { id, title, task:1|2, bandFocus, timeLimitMinutes, minWords, prompt, dataTable?, modelAnswer:string, bandAnnotation:string }` (the launcher maps `modelAnswer`/`bandAnnotation` into the engine's `modelAnswer:{text,bandAnnotation}`).

- [ ] **Step 1: Failing check.** In the preview, IELTS tab: the sub-tab bar has no "Reading Practice" or "Writing Practice".

- [ ] **Step 2: Add the two sub-tabs** (`reading` → "Reading Practice", `writing` → "Writing Practice") to the IELTS view tab list and `ieltsView` comment, and a branch for each that renders `mockCard`s from `(D().ielts.readingSets || [])` / `(D().ielts.writingSets || [])`, falling back to `emptyState()`. Badge: `"Task 1"`/`"Task 2"` for writing, `"Reading"` for reading. `minutes` from `timeLimitMinutes`.

- [ ] **Step 3: Implement `launchIeltsReading` and `launchIeltsWriting`** with the signatures above, modelled on `launchIeltsListening`.

- [ ] **Step 4: Add `readingSets: []`/`writingSets: []` and the schema notes** to `ielts.js`.

- [ ] **Step 5: Verify.**
Run: `node --check js/app.js && node scripts/validate-content.js`
Expected: exit 0. In the preview both new sub-tabs appear and show the empty state; console is clean; the existing Listening, Mock and Flashcards sub-tabs still launch.

- [ ] **Step 6: Commit.**

```bash
git add js/app.js js/data/ielts.js
git commit -m "feat(ielts): add Reading and Writing practice views"
```

---

### Task 4: Writing study notes `ielts-16`–`ielts-20`

**Files:**
- Modify: `js/data/ielts.js` — replace the five single-line stubs (`ielts-16` … `ielts-20`) in place, keeping their `id`, `title`, `skill`, `category`, `tags`.

**Interfaces:**
- Produces: five authored notes (`comingSoon:false`, `bandFocus`, `summary`, `body[]`, `modelAnswer`, `turkishL1Note`, `commonMistakes`, `practiceTip`). `modelAnswer` is `{ prompt, text, bandAnnotation }` with a task-appropriate length. `ielts-16/17/18` model answers include their data in the `prompt` text. Task 6 writing sets reuse these topics but must use different data and wording.

Content brief per note:
- `ielts-16` Bar & pie charts: data selection (pick extremes + one comparison), grouping, overview without numbers, approximation language, multiple-chart handling.
- `ielts-17` Process diagrams: passive voice, sequencing connectors, natural vs man-made, cyclical vs linear overview, stage-count overview.
- `ielts-18` Maps: past/present/future tense control, spatial prepositions, change verbs, overview of "what changed most".
- `ielts-19` Problem/solution: causes vs problems vs solutions mapping, two-question prompts, solution realism, paragraph plan.
- `ielts-20` Advantages/disadvantages (and "outweigh" variant) plus direct-question essays: balanced vs one-sided plans, answering each question explicitly.

- [ ] **Step 1: Failing test.**
Run: `node scripts/validate-content.js --expect-authored ielts-16,ielts-17,ielts-18,ielts-19,ielts-20`
Expected: FAIL for all five (`comingSoon is true`).

- [ ] **Step 2: Author the five notes** (one at a time, checking `node --check` after each), following `ielts-01`/`ielts-02` for depth and tone.

- [ ] **Step 3: Run the validator.**
Run: same command as Step 1, then `node scripts/validate-content.js`
Expected: both exit 0.

- [ ] **Step 4: Run `content-qa-reviewer`** on `ielts-16`–`ielts-20`; fix every `error`.

- [ ] **Step 5: Verify in the preview.** IELTS → Notes → Writing filter: the five cards no longer show "Coming Soon", each opens, the model answer and annotation render, and the Home card count reads 20 of 30.

- [ ] **Step 6: Commit.**

```bash
git add js/data/ielts.js
git commit -m "content(ielts): author Writing notes 16-20"
```

---

### Task 5: Reading study notes `ielts-21`–`ielts-23`

**Files:**
- Modify: `js/data/ielts.js` — replace stubs `ielts-21`, `ielts-22`, `ielts-23`.

**Interfaces:**
- Produces: three authored notes with the same fields as Task 4 minus `modelAnswer`; each includes at least one worked mini-example (passage excerpt + question + answer + why) inside a `body[].html` section.

Content brief:
- `ielts-21` Sentence/summary completion: word-limit rules (hyphenated words, numbers, "NO MORE THAN"), grammar-fit checking, paraphrase-aware locating.
- `ielts-22` Multi-answer MCQ and matching features: option elimination, locating names, one-to-many matches.
- `ielts-23` Distractor analysis: the five distractor patterns (partial match, wrong subject, over-generalisation, opposite polarity, true-but-irrelevant), by question type.

- [ ] **Step 1: Failing test.**
Run: `node scripts/validate-content.js --expect-authored ielts-21,ielts-22,ielts-23`
Expected: FAIL for all three.

- [ ] **Step 2: Author the three notes**, checking `node --check` after each.

- [ ] **Step 3: Run the validator** (same command, then bare). Expected: exit 0.

- [ ] **Step 4: Run `content-qa-reviewer`**; fix every `error`.

- [ ] **Step 5: Verify in the preview** (Reading filter shows 6 authored notes; Home count reads 23 of 30; console clean).

- [ ] **Step 6: Commit.**

```bash
git add js/data/ielts.js
git commit -m "content(ielts): author Reading notes 21-23"
```

---

### Task 6: Guided practice drills

**Files:**
- Modify: `js/data/ielts.js` — append to `guidedPractice[]` after `gp-s3`.

**Interfaces:**
- Produces: seven drills, each `{ id, skill, title, prompt, rubric:{TA,CC,LR,GRA}, bandNote }` (reading drills set rubric `CC/LR/GRA` to `"N/A for this micro-drill."` as `gp-r1` does):
  - `gp-w3` Writing Task 1 — Bar-chart data-selection drill (give a small data list in the prompt; learner picks 3 features).
  - `gp-w4` Writing Task 1 — Process sequencing sentence-builder.
  - `gp-w5` Writing Task 2 — Problem/solution paragraph plan.
  - `gp-w6` Writing Task 2 — Advantages/disadvantages introduction (paraphrase + outline).
  - `gp-r2` Reading — Summary completion word-limit check.
  - `gp-r3` Reading — Matching-features micro-set.
  - `gp-r4` Reading — Spot the distractor (MCQ, explain the trap).

- [ ] **Step 1: Failing test.**
Run: `node scripts/validate-content.js --expect-practice gp-w3,gp-w4,gp-w5,gp-w6,gp-r2,gp-r3,gp-r4`
Expected: FAIL for all seven (`missing`).

- [ ] **Step 2: Author the seven drills** following `gp-w1`/`gp-r1`. Each `bandNote` contrasts a weak response with a Band 7+ one.

- [ ] **Step 3: Run the validator** (same command, then bare). Expected: exit 0.

- [ ] **Step 4: Run `content-qa-reviewer`**; fix every `error`.

- [ ] **Step 5: Verify in the preview** (IELTS → Practice shows 13 cards, rubric grid renders, no layout overflow at 375px).

- [ ] **Step 6: Commit.**

```bash
git add js/data/ielts.js
git commit -m "content(ielts): add Reading and Writing guided practice drills"
```

---

### Task 7: Reading practice sets

**Files:**
- Modify: `js/data/ielts.js` — fill `readingSets[]`.

**Interfaces:**
- Consumes: `readingSets[]` shape from Task 3; question shapes from `ultimateMock.reading.questions` (`type` ∈ `heading | tfng | summary | mcq | matching`; `heading` questions carry `forParagraph` and the set carries `paragraphLabels`; `matching` uses a shared `options[]` and index answer).
- Produces: three sets, 13 questions each.
  - `ielts-read-01` "Academic science": 5 `summary` (≤2 words), 5 `tfng`, 3 `mcq`. Tags include `summary-completion`, `tfng`.
  - `ielts-read-02` "Social science / urban": 5 `heading`, 4 `matching` (four researchers or four cities), 4 `mcq`.
  - `ielts-read-03` "Distractor workout": 4 `tfng`, 4 `mcq`, 5 `summary`; every `explanation` names the distractor pattern it defeats (see note `ielts-23`).

- [ ] **Step 1: Failing test.**
Run: `node scripts/validate-content.js --expect-reading 3`
Expected: `FAIL readingSets: expected >= 3, found 0`.

- [ ] **Step 2: Author each passage** (600–900 words, labelled paragraphs where headings are used; original topic, no real statistics presented as fact — use clearly generic or fictional studies) and its 13 questions with explanations quoting the supporting sentence.

- [ ] **Step 3: Run the validator** (same command, then bare). Expected: exit 0.

- [ ] **Step 4: Run `content-qa-reviewer`**; work every question yourself against the passage and fix every `error`.

- [ ] **Step 5: Verify in the preview** with Playwright MCP: launch each set, answer one question of each type, submit, and confirm scoring and explanations show; a deliberately wrong summary answer scores wrong and `Leafy Greens.`-style casing/punctuation variants of a right answer score right. My Progress then lists the attempt under IELTS.

- [ ] **Step 6: Commit.**

```bash
git add js/data/ielts.js
git commit -m "content(ielts): add three Reading practice sets"
```

---

### Task 8: Writing practice sets

**Files:**
- Modify: `js/data/ielts.js` — fill `writingSets[]`.

**Interfaces:**
- Consumes: `writingSets[]` shape from Task 3; `dataTable` from Task 2.
- Produces: seven sets, each with `modelAnswer` and `bandAnnotation` per Global Constraints:
  - `ielts-write-01` Task 1 bar chart (`dataTable` with ≥4 categories × 2–3 series).
  - `ielts-write-02` Task 1 two pie charts (two series of percentages summing to 100).
  - `ielts-write-03` Task 1 process (`dataTable` headers `["Stage","What happens"]`, 6–8 rows).
  - `ielts-write-04` Task 1 map (headers `["Feature","Before","After"]`).
  - `ielts-write-05` Task 2 problem/solution.
  - `ielts-write-06` Task 2 advantages/disadvantages.
  - `ielts-write-07` Task 2 two-part direct question.
  Task 1 `minWords: 150`, `timeLimitMinutes: 20`; Task 2 `minWords: 250`, `timeLimitMinutes: 40`. Data is fictional and internally consistent with the model answer.

- [ ] **Step 1: Failing test.**
Run: `node scripts/validate-content.js --expect-writing 7`
Expected: `FAIL writingSets: expected >= 7, found 0`.

- [ ] **Step 2: Author the seven sets.** Every figure quoted in a model answer must appear in that set's `dataTable`.

- [ ] **Step 3: Run the validator** (same command, then bare). Expected: exit 0.

- [ ] **Step 4: Run `content-qa-reviewer`**; fix every `error` (it should recheck each model-answer figure against its table).

- [ ] **Step 5: Verify in the preview.** Launch `ielts-write-01` and `ielts-write-04`: the table shows beneath the prompt, the word counter works, submitting reveals the model answer and annotation. At 375px width there is no page-level horizontal scroll. Launch `ielts-write-05` (no table): layout is unchanged.

- [ ] **Step 6: Commit.**

```bash
git add js/data/ielts.js
git commit -m "content(ielts): add seven Writing practice sets"
```

---

### Task 9: Final regression pass and docs

**Files:**
- Modify: `CLAUDE.md` (Adding content section), `js/data/ielts.js` header comment (pack status line 1–4)

- [ ] **Step 1: Full validation.**
Run: `node scripts/validate-content.js --expect-authored ielts-16,ielts-17,ielts-18,ielts-19,ielts-20,ielts-21,ielts-22,ielts-23 --expect-practice gp-w3,gp-w4,gp-w5,gp-w6,gp-r2,gp-r3,gp-r4 --expect-reading 3 --expect-writing 7 && for f in js/*.js js/data/*.js scripts/*.js; do node --check "$f" || exit 1; done`
Expected: exit 0.

- [ ] **Step 2: Update docs.** Header comment of `ielts.js`: "23 of 30 study notes authored; remaining 7 (Listening/Speaking/Strategy) are roadmap stubs." In `CLAUDE.md`, mention `readingSets`/`writingSets`, the `dataTable` field, and `node scripts/validate-content.js` as the content test.

- [ ] **Step 3: Run `ui-reviewer`** over the new views and `dataTable`; fix `error`-level findings.

- [ ] **Step 4: Smoke test every IELTS sub-tab** in the preview (Notes, Practice, Listening, Reading Practice, Writing Practice, Mock, Flashcards): each loads, console is clean, dark mode toggles correctly on a writing set with a table.

- [ ] **Step 5: Commit.**

```bash
git add CLAUDE.md js/data/ielts.js
git commit -m "docs: record IELTS Pack 2 Reading/Writing status and validator"
```

---

## Self-review notes

- **Spec coverage:** notes 16–23 → Tasks 4–5; exercises → Tasks 6–8; engine/UI support → Tasks 2–3; verification → Tasks 1, 9.
- **Out of scope (deliberate):** Mock Set 2 (needs `launchIeltsMock()` and the mock tab, both hard-wired to one mock, generalised), Listening/Speaking/Strategy stubs 24–30, new flashcard decks.
- **Known pre-existing gap:** the existing `ultimateMock.writingTask1` prompt describes a chart but never shows its data. Task 2's `dataTable` makes a fix possible later; this plan doesn't retrofit it because the mock's model answer quotes only partial figures.
- **Type consistency:** `launchIeltsReading(setId)`, `launchIeltsWriting(setId)`, `_renderDataTable(table)` and `dataTable {caption?, headers, rows}` are named identically in Tasks 2, 3, 7 and 8.
