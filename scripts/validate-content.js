#!/usr/bin/env node
// Validates js/data/ielts.js content. Usage:
//   node scripts/validate-content.js [--expect-authored id,id] [--expect-practice id,id]
//                                    [--expect-reading n] [--expect-writing n]
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const file = path.join(__dirname, "..", "js", "data", "ielts.js");
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox, { filename: file });
const D = sandbox.window.APEX_DATA.ielts;

const args = process.argv.slice(2);
const failures = [];
const flag = name => {
  const i = args.indexOf(name);
  if (i === -1) return null;
  const v = args[i + 1];
  if (v === undefined || v.startsWith("--")) {
    failures.push(`FAIL args: ${name} needs a value`);
    return null;
  }
  return v;
};
const countFlag = name => {
  const v = flag(name);
  if (v === null) return null;
  if (!/^\d+$/.test(v)) {
    failures.push(`FAIL args: ${name} needs a whole number (got '${v}')`);
    return null;
  }
  return Number(v);
};

const fail = (id, msg) => failures.push(`FAIL ${id}: ${msg}`);
const words = s => String(s || "").trim().split(/\s+/).filter(Boolean).length;

// ---------- unique ids / prefixes ----------
const seen = new Map();
function claim(id, where) {
  if (!id) return fail(where, "missing id");
  // ids are interpolated into inline onclick handlers, so keep them to a safe charset
  if (!/^[A-Za-z0-9-]+$/.test(id)) fail(id, "id must match [A-Za-z0-9-]+");
  if (seen.has(id)) fail(id, `duplicate id (also in ${seen.get(id)})`);
  seen.set(id, where);
}
(D.notes || []).forEach(n => claim(n.id, "notes"));
(D.guidedPractice || []).forEach(p => claim(p.id, "guidedPractice"));
(D.listeningSets || []).forEach(s => { claim(s.id, "listeningSets"); if (!/^ielts/.test(s.id)) fail(s.id, "must start with 'ielts'"); });
(D.readingSets || []).forEach(s => { claim(s.id, "readingSets"); if (!/^ielts/.test(s.id)) fail(s.id, "must start with 'ielts'"); });
(D.writingSets || []).forEach(s => { claim(s.id, "writingSets"); if (!/^ielts/.test(s.id)) fail(s.id, "must start with 'ielts'"); });
(D.flashcardDecks || []).forEach(d => claim(d.id, "flashcardDecks"));

// ---------- html hygiene ----------
const ALLOWED = ["p", "ul", "li", "strong", "em", "br", "table", "thead", "tbody", "tr", "th", "td"];
function checkHtml(id, html) {
  if (/&(?![a-zA-Z]+;|#\d+;)/.test(html)) fail(id, "bare '&' in html (use &amp;)");
  const tags = [...html.matchAll(/<\/?([a-zA-Z0-9]+)[^>]*>/g)];
  const counts = {};
  tags.forEach(m => {
    const name = m[1].toLowerCase();
    if (!ALLOWED.includes(name)) return fail(id, `disallowed tag <${name}>`);
    if (name === "br") return;
    counts[name] = counts[name] || { open: 0, close: 0 };
    counts[name][m[0].startsWith("</") ? "close" : "open"]++;
  });
  Object.entries(counts).forEach(([n, c]) => {
    if (c.open !== c.close) fail(id, `unbalanced <${n}> (${c.open} open, ${c.close} close)`);
  });
}

// ---------- notes ----------
// Pack 1 notes (ielts-01..15) predate these rules and are grandfathered.
const isLegacy = n => {
  const m = /^ielts-(\d+)$/.exec(String(n.id));
  return !!m && Number(m[1]) <= 15; // any other id shape is validated, never skipped
};
(D.notes || []).forEach(n => {
  if (n.comingSoon || isLegacy(n)) return;
  if (!n.summary) fail(n.id, "missing summary");
  if (!Array.isArray(n.body) || n.body.length < 3) fail(n.id, "body needs >= 3 sections");
  (n.body || []).forEach((b, i) => {
    if (!b.heading || !b.html) fail(n.id, `body[${i}] needs heading and html`);
    else checkHtml(`${n.id}.body[${i}]`, b.html);
  });
  if (!Array.isArray(n.commonMistakes) || n.commonMistakes.length < 3) fail(n.id, "needs >= 3 commonMistakes");
  if (!n.practiceTip) fail(n.id, "missing practiceTip");
  if (n.skill === "Writing" && !(n.modelAnswer && n.modelAnswer.text && n.modelAnswer.bandAnnotation)) {
    fail(n.id, "Writing note needs modelAnswer.text and modelAnswer.bandAnnotation");
  }
});

// ---------- reading sets ----------
const TFNG = ["True", "False", "Not Given"];
(D.readingSets || []).forEach(s => {
  const w = words(s.text);
  if (w < 600 || w > 900) fail(s.id, `passage is ${w} words, need 600-900`);
  if (s.timeLimitMinutes !== 20) fail(s.id, "timeLimitMinutes must be 20");
  const qs = s.questions || [];
  if (qs.length !== 13) fail(s.id, `needs 13 questions, has ${qs.length}`);
  const qids = new Set();
  qs.forEach(q => {
    const qid = q.id || `${s.id}.?`;
    if (qids.has(qid)) fail(qid, "duplicate question id");
    qids.add(qid);
    if (!q.prompt) fail(qid, "missing prompt");
    if (!q.explanation) fail(qid, "missing explanation");
    if (!q.tag) fail(qid, "missing tag");
    if (Array.isArray(q.options)) {
      if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
        fail(qid, `correctAnswer ${q.correctAnswer} is not a valid option index`);
      }
    } else if (q.type === "tfng" || TFNG.includes(q.correctAnswer)) {
      if (!TFNG.includes(q.correctAnswer)) fail(qid, "tfng answer must be True/False/Not Given");
    } else {
      const a = String(q.correctAnswer || "");
      if (!a) fail(qid, "missing correctAnswer");
      if (/[-\/]/.test(a)) fail(qid, "text answer must not contain '-' or '/'");
      const m = /NO MORE THAN (ONE|TWO|THREE) WORD/i.exec(q.prompt || "");
      if (m && words(a) > { ONE: 1, TWO: 2, THREE: 3 }[m[1].toUpperCase()]) fail(qid, "answer exceeds stated word limit");
    }
  });
});

// ---------- writing sets ----------
(D.writingSets || []).forEach(s => {
  if (s.task !== 1 && s.task !== 2) return fail(s.id, "task must be 1 or 2");
  const min = s.task === 1 ? 150 : 250;
  if (s.minWords !== min) fail(s.id, `minWords must be ${min}`);
  const w = words(s.modelAnswer);
  if (w < min || w > Math.round(min * 1.6)) fail(s.id, `modelAnswer is ${w} words, need ${min}-${Math.round(min * 1.6)}`);
  ["TA", "CC", "LR", "GRA"].forEach(k => {
    if (!new RegExp(`\\b${k}\\b`).test(s.bandAnnotation || "")) fail(s.id, `bandAnnotation missing ${k}`);
  });
  if (s.task === 1 && !s.dataTable) fail(s.id, "task 1 needs a dataTable");
  if (s.dataTable) {
    const t = s.dataTable;
    if (!Array.isArray(t.headers) || !Array.isArray(t.rows)) fail(s.id, "dataTable needs headers[] and rows[][]");
    else t.rows.forEach((r, i) => { if (!Array.isArray(r)) fail(s.id, `dataTable row ${i} is not an array`); else if (r.length !== t.headers.length) fail(s.id, `dataTable row ${i} has ${r.length} cells, expected ${t.headers.length}`); });
  }
});

// ---------- expectations ----------
const list = v => (v ? v.split(",").map(x => x.trim()).filter(Boolean) : []);
list(flag("--expect-authored")).forEach(id => {
  const n = (D.notes || []).find(x => x.id === id);
  if (!n) fail(id, "note missing");
  else if (n.comingSoon) fail(id, "comingSoon is true");
});
list(flag("--expect-practice")).forEach(id => {
  const p = (D.guidedPractice || []).find(x => x.id === id);
  if (!p) return fail(id, "practice drill missing");
  ["TA", "CC", "LR", "GRA"].forEach(k => { if (!(p.rubric && p.rubric[k])) fail(id, `rubric.${k} missing`); });
  if (!p.bandNote) fail(id, "bandNote missing");
});
// --expect-reading / --expect-writing mean "at least n sets exist"
const expR = countFlag("--expect-reading");
if (expR !== null && (D.readingSets || []).length < expR) fail("readingSets", `expected >= ${expR}, found ${(D.readingSets || []).length}`);
const expW = countFlag("--expect-writing");
if (expW !== null && (D.writingSets || []).length < expW) fail("writingSets", `expected >= ${expW}, found ${(D.writingSets || []).length}`);

if (failures.length) {
  console.log(failures.join("\n"));
  process.exit(1);
}
console.log("OK");
