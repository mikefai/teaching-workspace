/* ApexPrep Academy — application shell: navigation, search/filter, content rendering,
   and wiring the shared TestEngine + FlashcardSession into ESL / IELTS / SAT content.

   Performance note ("build for scale"): all click handling for content rendered inside
   #main-content is done via ONE delegated listener (wireContentDelegation, bound once at
   startup) rather than re-attaching a listener to every card/button on every render. That
   keeps re-render cost flat as the content catalog grows from dozens to hundreds of items. */

const APP = {
  tab: "home",
  eslView: "notes",       // notes | mocks | flashcards
  ieltsView: "notes",     // notes | practice | listening | reading | writing | speaking | mock | flashcards
  search: "",
  filter: "all",
  detail: null,           // { kind:'esl-note'|'ielts-note', id }
  engine: null,
  flashSession: null,
  engineTimerPoll: null
};

const D = () => window.APEX_DATA;
let searchDebounceHandle = null;

document.addEventListener("DOMContentLoaded", () => {
  initComfortSettings();
  APP.tab = Store.getLastTab() || "home";
  wireNav();
  wireHeaderControls();
  wireSearchAndFilter();
  wireContentDelegation();
  render();
});

// ======================= COMFORT: THEME + FONT SCALE =======================
function initComfortSettings() {
  document.documentElement.dataset.theme = Store.getTheme();
  applyFontScale(Store.getFontScale());
}

function applyFontScale(v) {
  const clamped = Store.setFontScale(v);
  document.documentElement.style.setProperty("--content-scale", clamped.toFixed(2));
  return clamped;
}

function wireHeaderControls() {
  const themeBtn = document.getElementById("theme-toggle");
  themeBtn.textContent = Store.getTheme() === "dark" ? "☀️" : "🌙";
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    Store.setTheme(next);
    themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
  });
  document.getElementById("font-scale-up").addEventListener("click", () => applyFontScale(Store.getFontScale() + 0.1));
  document.getElementById("font-scale-down").addEventListener("click", () => applyFontScale(Store.getFontScale() - 0.1));
}

// ======================= NAV (header — bound once, lives outside #main-content) =======================
function wireNav() {
  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => goToTab(btn.dataset.tab));
  });
}

function goToTab(tab) {
  APP.tab = tab;
  APP.detail = null;
  APP.search = "";
  APP.filter = "all";
  document.getElementById("search-input").value = "";
  Store.setLastTab(tab);
  render();
}

function wireSearchAndFilter() {
  document.getElementById("search-input").addEventListener("input", e => {
    const val = e.target.value.toLowerCase();
    clearTimeout(searchDebounceHandle);
    searchDebounceHandle = setTimeout(() => { APP.search = val; renderMainOnly(); }, 150);
  });
  document.getElementById("category-filter").addEventListener("change", e => {
    APP.filter = e.target.value;
    renderMainOnly();
  });
}

// ======================= DELEGATED CONTENT CLICKS (bound once) =======================
function wireContentDelegation() {
  document.getElementById("main-content").addEventListener("click", e => {
    const bookmarkBtn = e.target.closest("[data-bookmark]");
    if (bookmarkBtn) { Store.toggleBookmark(bookmarkBtn.dataset.bookmark); renderMainOnly(); return; }

    const deckBtn = e.target.closest("[data-deck]");
    if (deckBtn) { launchFlashcardDeck(deckBtn.dataset.deck); return; }

    const tabBtn = e.target.closest("[data-tab]");
    if (tabBtn) { goToTab(tabBtn.dataset.tab); return; }

    const subnavBtn = e.target.closest("[data-subnav]");
    if (subnavBtn) {
      const [key, val] = subnavBtn.dataset.subnav.split(":");
      APP[key] = val;
      APP.filter = "all";
      render();
      return;
    }

    const openBtn = e.target.closest("[data-open]");
    if (openBtn) {
      const [kind, id] = openBtn.dataset.open.split(":");
      APP.detail = { kind, id };
      renderMainOnly();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const backBtn = e.target.closest("#back-btn");
    if (backBtn) { APP.detail = null; renderMainOnly(); return; }

    const clearBtn = e.target.closest("#clear-progress-btn");
    if (clearBtn) {
      if (window.confirm("Clear all locally saved progress (test history, flashcard mastery, bookmarks)? This can't be undone.")) {
        Store.clearAll();
        renderMainOnly();
      }
      return;
    }
  });
}

function setActiveNavStyles() {
  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === APP.tab);
  });
}

function render() {
  setActiveNavStyles();
  updateCategoryFilterOptions();
  renderMainOnly();
  startGlobalTimerPoll();
}

function renderMainOnly() {
  const main = document.getElementById("main-content");
  if (APP.engine || APP.flashSession) { return; } // engine/flashcards own #main-content while active
  main.setAttribute("data-subject", ["esl", "ielts", "sat"].includes(APP.tab) ? APP.tab : "");
  if (APP.tab === "home") main.innerHTML = renderHome();
  else if (APP.tab === "esl") main.innerHTML = renderEslHub();
  else if (APP.tab === "ielts") main.innerHTML = renderIeltsSuite();
  else if (APP.tab === "sat") main.innerHTML = renderSatZone();
  else if (APP.tab === "progress") main.innerHTML = renderProgress();
}

function updateCategoryFilterOptions() {
  const sel = document.getElementById("category-filter");
  let options = [];
  if (APP.tab === "esl" && APP.eslView === "notes") {
    options = uniqueBy(D().esl.notes.map(n => n.category));
  } else if (APP.tab === "ielts" && APP.ieltsView === "notes") {
    options = uniqueBy(D().ielts.notes.map(n => n.skill));
  }
  if (options.length === 0) {
    sel.classList.add("hidden");
    sel.innerHTML = "";
    return;
  }
  sel.classList.remove("hidden");
  sel.innerHTML = `<option value="all">All categories</option>` +
    options.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(titleCase(o))}</option>`).join("");
  sel.value = APP.filter;
}

function uniqueBy(arr) { return Array.from(new Set(arr)); }
function titleCase(s) { return String(s).replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()); }

// ======================= HOME =======================
function renderHome() {
  const eslNotes = D().esl.notes.length;
  const ieltsReady = D().ielts.notes.filter(n => !n.comingSoon).length;
  const ieltsTotal = D().ielts.notes.length;
  const satReady = D().sat.mockTests.filter(t => !t.comingSoon).length;
  const satTotal = D().sat.mockTests.length;
  const attemptCount = Store.listAttempts().length;
  const bookmarkCount = Store.listBookmarks().length;

  return `
  <section class="fade-in">
    <div class="apex-card p-8 md:p-12 mb-8 bg-gradient-to-br from-[color:var(--navy-950)] to-[color:var(--navy-700)] text-white border-none">
      <div class="max-w-2xl">
        <div class="text-xs uppercase tracking-widest text-amber-300 font-bold mb-3">LBEnglishCo &middot; Denizli</div>
        <h1 class="font-serif-academic text-3xl md:text-4xl font-bold mb-4 leading-tight">Everything your students need to prep, drill, and score higher — in one place.</h1>
        <p class="text-white/80 leading-relaxed mb-6">Complete study notes, functional writing templates, flashcards, and interactive timed mock exams for ESL (B1&ndash;B2), IELTS Academic &amp; General, and SAT Reading &amp; Writing + Math &mdash; with instant scoring and weak-area analytics on every test.</p>
        <div class="flex flex-wrap gap-3">
          <button class="btn btn-amber" data-tab="esl">Explore ESL Hub</button>
          <button class="btn btn-outline !text-white !border-white/40" data-tab="ielts">Explore IELTS Suite</button>
          <button class="btn btn-outline !text-white !border-white/40" data-tab="sat">Explore SAT Prep Zone</button>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-5 mb-6">
      ${homeStatCard("esl", "ESL Hub (B1&ndash;B2)", `${eslNotes} full study notes`, "2 timed mock exams + phrasal verb &amp; idiom flashcards", "var(--teal-700)")}
      ${homeStatCard("ielts", "IELTS Suite", `${ieltsReady} of ${ieltsTotal} study notes ready`, "Guided practice with TA/CC/LR/GRA rubrics + Ultimate Mock + flashcards", "var(--indigo-700)")}
      ${homeStatCard("sat", "SAT Prep Zone", `${satReady} of ${satTotal} full mock tests ready`, "Reading &amp; Writing + Math, with full proofs and evidence citations", "var(--amber-600)")}
    </div>

    <button data-tab="progress" class="apex-card p-5 w-full text-left mb-10 flex flex-wrap items-center justify-between gap-3">
      <div>
        <div class="font-serif-academic font-bold text-base text-[color:var(--heading)] mb-1">My Progress</div>
        <div class="text-sm text-[color:var(--muted)]">${attemptCount ? `${attemptCount} test section${attemptCount === 1 ? "" : "s"} completed` : "No tests taken yet"} &middot; ${bookmarkCount} note${bookmarkCount === 1 ? "" : "s"} saved</div>
      </div>
      <span class="badge badge-level">View Dashboard &rarr;</span>
    </button>

    <div class="apex-card p-6">
      <h2 class="font-serif-academic text-lg font-bold mb-3 text-[color:var(--heading)]">How this platform grows</h2>
      <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">Content is organized as modular data packs (see <code class="bg-[color:var(--line)] px-1 rounded">js/data/esl.js</code>, <code class="bg-[color:var(--line)] px-1 rounded">ielts.js</code>, <code class="bg-[color:var(--line)] px-1 rounded">sat.js</code>). Every subject already ships a fully interactive Content Pack 1; items marked <span class="badge badge-soon">Coming Soon</span> are scaffolded in the catalog now and documented at the bottom of each data file so the next pack can be dropped in without touching the app's UI code. Progress, bookmarks, and flashcard mastery are saved locally in this browser (see <code class="bg-[color:var(--line)] px-1 rounded">js/store.js</code>).</p>
    </div>
  </section>`;
}

function homeStatCard(tab, title, big, sub, color) {
  return `
  <button data-tab="${tab}" class="apex-card p-5 text-left">
    <div class="w-2 h-2 rounded-full mb-3" style="background:${color}"></div>
    <div class="font-serif-academic font-bold text-lg text-[color:var(--heading)] mb-1">${title}</div>
    <div class="text-sm font-semibold text-[color:var(--ink-soft)] mb-1">${big}</div>
    <div class="text-xs text-[color:var(--muted)] leading-relaxed">${sub}</div>
  </button>`;
}

// ======================= ESL HUB =======================
function renderEslHub() {
  if (APP.detail && APP.detail.kind === "esl-note") return renderEslNoteDetail(APP.detail.id);

  const subnav = renderSubnav([
    { id: "notes", label: "Study Notes" },
    { id: "mocks", label: "Mock Exams" },
    { id: "flashcards", label: "Flashcards" }
  ], APP.eslView, "eslView");

  let body = "";
  if (APP.eslView === "notes") {
    const notes = filterList(D().esl.notes, n => [n.title, n.summary, ...(n.tags || [])].join(" ").toLowerCase(), n => n.category);
    body = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">${notes.map(n => noteCard(n, "badge-esl", n.level, "esl-note")).join("") || emptyState()}</div>`;
  } else if (APP.eslView === "mocks") {
    const mocks = [D().esl.mockExams.b1, D().esl.mockExams.b2];
    body = `<div class="grid md:grid-cols-2 gap-4">${mocks.map(m => mockCard({
      title: m.title, badge: m.level, minutes: m.timeLimitMinutes,
      desc: "Reading comprehension, gap-fill, and sentence transformations with fully explained answer keys.",
      skillCls: "skill-esl-mocks",
      onLaunch: `launchEslMock('${m.level}')`
    })).join("")}</div>`;
  } else {
    body = deckListView(D().esl.flashcardDecks);
  }

  return `<section class="fade-in">
    <h1 class="font-serif-academic text-2xl font-bold mb-1 text-[color:var(--heading)]">ESL Hub <span class="badge badge-esl align-middle">B1&ndash;B2</span></h1>
    <p class="text-sm text-[color:var(--muted)] mb-5">Grammar, vocabulary, phrasal verbs, idioms, and functional writing &mdash; plus timed mock exams and flashcards.</p>
    ${subnav}
    <div class="mt-5">${body}</div>
  </section>`;
}

function renderEslNoteDetail(id) {
  const note = D().esl.notes.find(n => n.id === id);
  if (!note) return `<div>Note not found.</div>`;
  return `<section class="fade-in max-w-3xl">
    <button class="btn btn-outline mb-4 no-print" id="back-btn">&larr; Back to ESL Hub</button>
    ${noteDetailArticle(note, "badge-esl")}
  </section>`;
}

// ======================= IELTS SUITE =======================
function renderIeltsSuite() {
  if (APP.detail && APP.detail.kind === "ielts-note") return renderIeltsNoteDetail(APP.detail.id);

  const subnav = renderSubnav([
    { id: "notes", label: "Study Notes" },
    { id: "practice", label: "Guided Practice" },
    { id: "listening", label: "Listening Practice" },
    { id: "reading", label: "Reading Practice" },
    { id: "writing", label: "Writing Practice" },
    { id: "speaking", label: "Speaking Practice" },
    { id: "mock", label: "Ultimate Mock Exam" },
    { id: "flashcards", label: "Flashcards" }
  ], APP.ieltsView, "ieltsView");

  let body = "";
  if (APP.ieltsView === "notes") {
    const notes = filterList(D().ielts.notes, n => [n.title, n.summary, ...(n.tags || [])].join(" ").toLowerCase(), n => n.skill);
    body = `<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">${notes.map(n => noteCard(n, "badge-ielts", n.skill, "ielts-note")).join("") || emptyState()}</div>`;
  } else if (APP.ieltsView === "practice") {
    body = `<div class="grid md:grid-cols-2 gap-4">${D().ielts.guidedPractice.map(practiceCard).join("")}</div>`;
  } else if (APP.ieltsView === "listening") {
    const sets = D().ielts.listeningSets || [];
    body = `<div class="grid md:grid-cols-2 gap-4">${sets.map(s => mockCard({
      title: s.title,
      badge: "Section " + s.section,
      minutes: s.timeLimitMinutes,
      desc: (s.audioContext ? s.audioContext + " " : "") + "Band focus: " + s.bandFocus + ".",
      skillCls: "skill-ielts-listening",
      onLaunch: `launchIeltsListening('${s.id}')`
    })).join("") || emptyState()}</div>`;
  } else if (APP.ieltsView === "reading") {
    const sets = D().ielts.readingSets || [];
    body = `<div class="grid md:grid-cols-2 gap-4">${sets.map(s => mockCard({
      title: s.title,
      badge: "Reading",
      minutes: s.timeLimitMinutes,
      desc: "Band focus: " + s.bandFocus + ". " + s.questions.length + " questions.",
      skillCls: "skill-ielts-reading",
      onLaunch: `launchIeltsReading('${s.id}')`
    })).join("") || emptyState()}</div>`;
  } else if (APP.ieltsView === "writing") {
    const sets = D().ielts.writingSets || [];
    body = `<div class="grid md:grid-cols-2 gap-4">${sets.map(s => mockCard({
      title: s.title,
      badge: "Task " + s.task,
      minutes: s.timeLimitMinutes,
      desc: "Band focus: " + s.bandFocus + ". Minimum " + s.minWords + " words, with a model answer and annotation.",
      skillCls: "skill-ielts-writing",
      onLaunch: `launchIeltsWriting('${s.id}')`
    })).join("") || emptyState()}</div>`;
  } else if (APP.ieltsView === "speaking") {
    const sets = D().ielts.speakingSets || [];
    body = `<div class="grid md:grid-cols-2 gap-4">${sets.map(s => mockCard({
      title: s.title,
      badge: "Part " + s.part,
      minutes: s.timeLimitMinutes,
      desc: "Band focus: " + s.bandFocus + ". Plan, speak aloud, then compare with a model answer and annotation.",
      skillCls: "skill-ielts-speaking",
      onLaunch: `launchIeltsSpeaking('${s.id}')`
    })).join("") || emptyState()}</div>`;
  } else if (APP.ieltsView === "flashcards") {
    body = deckListView(D().ielts.flashcardDecks);
  } else {
    const mock = D().ielts.ultimateMock;
    body = `
      <div class="apex-card p-5 mb-4">
        <div class="text-sm text-[color:var(--ink-soft)] leading-relaxed">${escapeHtml(mock.note)}</div>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        ${mockCard({ title: mock.title, badge: "Academic", minutes: 90, desc: "Full Reading passage (mixed question types) + Writing Task 1 &amp; 2 with Band 9 models and full annotations.", skillCls: "skill-ielts-mock", onLaunch: "launchIeltsMock()" })}
      </div>`;
  }

  return `<section class="fade-in">
    <h1 class="font-serif-academic text-2xl font-bold mb-1 text-[color:var(--heading)]">IELTS Academic &amp; General Suite <span class="badge badge-ielts align-middle">Band 6.5&ndash;9.0</span></h1>
    <p class="text-sm text-[color:var(--muted)] mb-5">Writing, Reading, Listening &amp; Speaking notes, guided practice with full rubric breakdowns, an Ultimate Mock Exam, and vocabulary flashcards.</p>
    ${subnav}
    <div class="mt-5">${body}</div>
  </section>`;
}

function renderIeltsNoteDetail(id) {
  const note = D().ielts.notes.find(n => n.id === id);
  if (!note) return `<div>Note not found.</div>`;
  if (note.comingSoon) {
    return `<section class="fade-in max-w-3xl">
      <button class="btn btn-outline mb-4 no-print" id="back-btn">&larr; Back to IELTS Suite</button>
      <div class="apex-card p-6">
        <span class="badge badge-soon mb-3 inline-block">Coming Soon</span>
        <h2 class="font-serif-academic text-xl font-bold mb-2">${escapeHtml(note.title)}</h2>
        <p class="text-sm text-[color:var(--ink-soft)] leading-relaxed">${escapeHtml(note.summary)}</p>
        <p class="text-sm text-[color:var(--muted)] mt-4 italic">This module is scaffolded in the content catalog now and will be fully authored in the next content pack — see the schema notes at the bottom of js/data/ielts.js.</p>
      </div>
    </section>`;
  }
  return `<section class="fade-in max-w-3xl">
    <button class="btn btn-outline mb-4 no-print" id="back-btn">&larr; Back to IELTS Suite</button>
    ${noteDetailArticle(note, "badge-ielts")}
  </section>`;
}

function practiceCard(p) {
  const sk = skillClass("ielts", p.skill);
  return `<div class="apex-card p-5 ${sk}">
    <span class="badge badge-skill ${sk} mb-2 inline-block">${escapeHtml(p.skill)}</span>
    <h3 class="font-serif-academic font-bold text-base mb-2">${escapeHtml(p.title)}</h3>
    <p class="text-sm text-[color:var(--ink-soft)] mb-3 leading-relaxed">${escapeHtml(p.prompt)}</p>
    <div class="grid grid-cols-2 gap-2 text-xs mb-3">
      <div class="bg-[color:var(--paper)] border border-[color:var(--line)] rounded p-2"><strong>TA:</strong> ${escapeHtml(p.rubric.TA)}</div>
      <div class="bg-[color:var(--paper)] border border-[color:var(--line)] rounded p-2"><strong>CC:</strong> ${escapeHtml(p.rubric.CC)}</div>
      <div class="bg-[color:var(--paper)] border border-[color:var(--line)] rounded p-2"><strong>LR:</strong> ${escapeHtml(p.rubric.LR)}</div>
      <div class="bg-[color:var(--paper)] border border-[color:var(--line)] rounded p-2"><strong>GRA:</strong> ${escapeHtml(p.rubric.GRA)}</div>
    </div>
    <div class="band-annotation">${escapeHtml(p.bandNote)}</div>
  </div>`;
}

// ======================= SAT PREP ZONE =======================
function renderSatZone() {
  const tests = D().sat.mockTests;
  return `<section class="fade-in">
    <h1 class="font-serif-academic text-2xl font-bold mb-1 text-[color:var(--heading)]">SAT Prep Zone <span class="badge badge-sat align-middle">Reading &amp; Writing + Math</span></h1>
    <p class="text-sm text-[color:var(--muted)] mb-5">Full-length integrated mock tests covering every digital SAT domain, with complete answer keys, mathematical proofs, and evidence citations.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${tests.map(t => t.comingSoon
        ? mockCard({ title: t.title, badge: "Coming Soon", minutes: null, desc: t.summary, onLaunch: null, soon: true })
        : mockCard({ title: t.title, badge: "Ready", minutes: 67, desc: t.note, chips: SAT_CHIPS, onLaunch: `launchSatMock('${t.id}')` })
      ).join("")}
    </div>
  </section>`;
}

// ======================= MY PROGRESS =======================
function renderProgress() {
  const attempts = Store.listAttempts().slice().reverse();
  const bySubject = {};
  const weakTags = {};
  attempts.forEach(a => {
    bySubject[a.subject] = bySubject[a.subject] || { correct: 0, total: 0 };
    bySubject[a.subject].correct += a.correct;
    bySubject[a.subject].total += a.total;
    Object.entries(a.byTag || {}).forEach(([tag, v]) => {
      weakTags[tag] = weakTags[tag] || { correct: 0, total: 0 };
      weakTags[tag].correct += v.correct;
      weakTags[tag].total += v.total;
    });
  });
  const tagRows = Object.entries(weakTags)
    .map(([tag, v]) => ({ tag, pct: Math.round((v.correct / v.total) * 100), total: v.total, correct: v.correct }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 8);

  const allDecks = [].concat(D().esl.flashcardDecks || [], D().ielts.flashcardDecks || []);
  const allCards = allDecks.flatMap(d => d.cards);
  const cardStates = allCards.map(c => Store.getCardState(c.id));
  const known = cardStates.filter(s => (s.level || 0) === 2).length;
  const learning = cardStates.filter(s => (s.level || 0) === 1).length;
  const freshCount = cardStates.length - known - learning;

  const bookmarkedNotes = Store.listBookmarks().map(findNoteById).filter(Boolean);

  return `<section class="fade-in">
    <h1 class="font-serif-academic text-2xl font-bold mb-1 text-[color:var(--heading)]">My Progress</h1>
    <p class="text-sm text-[color:var(--muted)] mb-5">Your test history, weak areas, and flashcard mastery — saved locally in this browser, per device.</p>

    <div class="grid md:grid-cols-3 gap-4 mb-6">
      ${subjectStatTile("ESL Hub", bySubject.esl)}
      ${subjectStatTile("IELTS Suite", bySubject.ielts)}
      ${subjectStatTile("SAT Prep Zone", bySubject.sat)}
    </div>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="apex-card p-5">
        <h2 class="font-serif-academic font-bold text-base mb-3 text-[color:var(--heading)]">Weakest Areas (all-time)</h2>
        ${tagRows.length ? tagRows.map(r => `
          <div class="mb-3">
            <div class="flex justify-between text-xs mb-1"><span>${escapeHtml(r.tag)}</span><span>${r.correct}/${r.total} (${r.pct}%)</span></div>
            <div class="weak-bar-track"><div class="weak-bar-fill" style="width:${r.pct}%"></div></div>
          </div>`).join("") : `<p class="text-sm text-[color:var(--muted)]">Take a mock exam to see your weak areas here.</p>`}
      </div>
      <div class="apex-card p-5">
        <h2 class="font-serif-academic font-bold text-base mb-3 text-[color:var(--heading)]">Flashcard Mastery</h2>
        <div class="flex gap-4 flex-wrap">
          <div class="stat-tile flex-1"><div class="big">${known}</div><div class="label">Known</div></div>
          <div class="stat-tile flex-1"><div class="big">${learning}</div><div class="label">Learning</div></div>
          <div class="stat-tile flex-1"><div class="big">${freshCount}</div><div class="label">New</div></div>
        </div>
      </div>
    </div>

    <div class="apex-card p-5 mb-6">
      <h2 class="font-serif-academic font-bold text-base mb-3 text-[color:var(--heading)]">Recent Test Attempts</h2>
      ${attempts.length ? attempts.slice(0, 10).map(a => `
        <div class="attempt-row">
          <span>${escapeHtml(a.testTitle)} &mdash; ${escapeHtml(a.partTitle)}</span>
          <span class="font-semibold">${a.correct}/${a.total} (${a.total ? Math.round((a.correct / a.total) * 100) : 0}%)</span>
        </div>`).join("") : `<p class="text-sm text-[color:var(--muted)]">No test sections submitted yet — take a mock exam to start building history.</p>`}
    </div>

    <div class="apex-card p-5 mb-6">
      <h2 class="font-serif-academic font-bold text-base mb-3 text-[color:var(--heading)]">Saved Notes</h2>
      ${bookmarkedNotes.length ? `<div class="grid md:grid-cols-2 gap-3">${bookmarkedNotes.map(n => noteCard(n, n.level ? "badge-esl" : "badge-ielts", n.level || n.skill, n.level ? "esl-note" : "ielts-note")).join("")}</div>`
        : `<p class="text-sm text-[color:var(--muted)]">Click the &#9734; on any note to save it here for quick review.</p>`}
    </div>

    <button class="btn btn-outline no-print" id="clear-progress-btn">Clear My Local Progress</button>
  </section>`;
}

function subjectStatTile(label, data) {
  if (!data || !data.total) {
    return `<div class="stat-tile"><div class="big">&mdash;</div><div class="label">${escapeHtml(label)}</div></div>`;
  }
  const pct = Math.round((data.correct / data.total) * 100);
  return `<div class="stat-tile"><div class="big">${pct}%</div><div class="label">${escapeHtml(label)} &middot; ${data.correct}/${data.total}</div></div>`;
}

function findNoteById(id) {
  return D().esl.notes.find(n => n.id === id) || D().ielts.notes.find(n => n.id === id) || null;
}

// ======================= FLASHCARDS (shared across ESL/IELTS) =======================
function deckListView(decks) {
  if (!decks || !decks.length) return emptyState();
  return `<div class="grid md:grid-cols-2 gap-4">${decks.map(deck => {
    const states = deck.cards.map(c => Store.getCardState(c.id));
    const known = states.filter(s => (s.level || 0) === 2).length;
    const total = deck.cards.length;
    const pct = total ? Math.round((known / total) * 100) : 0;
    return `<div class="deck-card">
      <div class="font-serif-academic font-bold text-base mb-1 text-[color:var(--heading)]">${escapeHtml(deck.title)}</div>
      <div class="text-xs text-[color:var(--muted)] mb-2">${total} cards &middot; ${known} mastered</div>
      <div class="deck-progress-track"><div class="deck-progress-fill" style="width:${pct}%"></div></div>
      <button class="btn btn-primary mt-3" data-deck="${escapeHtml(deck.id)}">Study Deck</button>
    </div>`;
  }).join("")}</div>`;
}

function findDeckById(id) {
  return [].concat(D().esl.flashcardDecks || [], D().ielts.flashcardDecks || []).find(d => d.id === id) || null;
}

function launchFlashcardDeck(deckId) {
  const deck = findDeckById(deckId);
  if (!deck) return;
  const main = document.getElementById("main-content");
  APP.flashSession = new FlashcardSession(main, () => {
    APP.flashSession.destroy();
    APP.flashSession = null;
    renderMainOnly();
  });
  APP.flashSession.load(deck);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ======================= SHARED UI PIECES =======================
function renderSubnav(items, active, stateKey) {
  return `<div class="pill-group no-print">${items.map(i =>
    `<button class="btn ${active === i.id ? "btn-primary" : "btn-outline"}" data-subnav="${stateKey}:${i.id}">${i.label}</button>`
  ).join("")}</div>`;
}

function noteCard(note, badgeClass, badgeText, kind) {
  const subject = kind === "esl-note" ? "esl" : "ielts";
  const sk = skillClass(subject, subject === "esl" ? note.category : note.skill);
  const skillChip = subject === "esl" && note.category ? chipHtml({ text: note.category.replace(/-/g, " "), cls: sk }) : "";
  const soon = note.comingSoon ? `<span class="badge badge-soon ml-2">Coming Soon</span>` : "";
  const saved = Store.isBookmarked(note.id);
  return `<div class="apex-card p-5 text-left cursor-pointer ${sk}" data-open="${kind}:${note.id}">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div class="flex items-center flex-wrap gap-2">
        <span class="badge ${subject === "ielts" && sk ? "badge-skill " + sk : badgeClass}">${escapeHtml(badgeText || "")}</span>${skillChip}${soon}
      </div>
      <button class="bookmark-star ${saved ? "is-saved" : ""}" data-bookmark="${note.id}" title="${saved ? "Remove bookmark" : "Save for later"}">${saved ? "★" : "☆"}</button>
    </div>
    <div class="font-serif-academic font-bold text-base mb-1 text-[color:var(--heading)]">${escapeHtml(note.title)}</div>
    <div class="text-sm text-[color:var(--muted)] leading-relaxed">${escapeHtml(note.summary)}</div>
  </div>`;
}

// ---- colour coding: subject (esl / ielts / sat) -> skill sub-colour (see css "Subject + skill colour coding") ----
const SAT_CHIPS = [
  { text: "Reading & Writing", cls: "skill-sat-reading-writing" },
  { text: "Math", cls: "skill-sat-math" }
];

function skillSlug(subject, label) {
  const l = String(label || "").toLowerCase();
  if (subject === "ielts") {
    for (const k of ["writing", "reading", "listening", "speaking", "strategy"]) if (l.startsWith(k)) return k;
    if (l.startsWith("vocab")) return "vocabulary-grammar";
  }
  return l.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function skillClass(subject, label) {
  const slug = skillSlug(subject, label);
  return slug ? "skill-" + subject + "-" + slug : "";
}

function chipHtml(c) {
  return `<span class="badge badge-skill ${c.cls}">${escapeHtml(c.text)}</span>`;
}

function mockCard({ title, badge, minutes, desc, onLaunch, soon, skillCls = "", chips = [] }) {
  return `<div class="apex-card p-5 ${skillCls}">
    <div class="flex items-center flex-wrap gap-2 mb-2">
      <span class="badge ${soon ? "badge-soon" : skillCls ? "badge-skill " + skillCls : "badge-level"}">${escapeHtml(badge)}</span>${soon ? "" : chips.map(chipHtml).join("")}
      ${minutes ? `<span class="text-xs text-[color:var(--muted)]">&#9200; ~${minutes} min</span>` : ""}
    </div>
    <div class="font-serif-academic font-bold text-base mb-1 text-[color:var(--heading)]">${escapeHtml(title)}</div>
    <p class="text-sm text-[color:var(--muted)] leading-relaxed mb-3">${escapeHtml(desc)}</p>
    ${onLaunch ? `<button class="btn btn-primary" onclick="${onLaunch}">Start Timed Test</button>` : `<button class="btn btn-outline" disabled>Not yet available</button>`}
  </div>`;
}

function noteDetailArticle(note, badgeClass) {
  const bodyHtml = (note.body || []).map(sec => `
    <h4>${escapeHtml(sec.heading)}</h4>
    <p>${sec.html}</p>
    ${sec.examples ? `<ul>${sec.examples.map(ex => `<li>${escapeHtml(ex)}</li>`).join("")}</ul>` : ""}
  `).join("");

  const mistakes = note.commonMistakes ? `
    <h4>Common Mistakes</h4>
    <div class="mistake-box"><ul>${note.commonMistakes.map(m => `<li>${escapeHtml(m)}</li>`).join("")}</ul></div>` : "";

  const l1 = note.turkishL1Note ? `
    <h4>Turkish L1 Note</h4>
    <div class="l1-note">${escapeHtml(note.turkishL1Note)}</div>` : "";

  const tip = note.practiceTip ? `
    <h4>Practice Tip</h4>
    <div class="tip-box">${escapeHtml(note.practiceTip)}</div>` : "";

  const model = note.modelAnswer ? `
    <h4>Model Answer${note.modelAnswer.prompt ? " — " + escapeHtml(note.modelAnswer.prompt) : ""}</h4>
    <div class="model-answer">${escapeHtml(note.modelAnswer.text)}</div>
    <div class="band-annotation mt-2"><strong>Band Annotation:</strong> ${escapeHtml(note.modelAnswer.bandAnnotation)}</div>` : "";

  const saved = Store.isBookmarked(note.id);

  const nsk = note.skill ? skillClass("ielts", note.skill) : skillClass("esl", note.category);
  return `<article class="apex-card p-6 md:p-8 note-article ${nsk}">
    <div class="flex items-start justify-between gap-2 mb-3">
      <div class="flex items-center flex-wrap gap-2">
        <span class="badge ${note.skill && nsk ? "badge-skill " + nsk : badgeClass}">${escapeHtml(note.level || note.skill || "")}</span>${note.level && note.category ? chipHtml({ text: note.category.replace(/-/g, " "), cls: nsk }) : ""}
        ${note.bandFocus ? `<span class="badge badge-level">Band ${escapeHtml(note.bandFocus)}</span>` : ""}
      </div>
      <button class="bookmark-star ${saved ? "is-saved" : ""}" data-bookmark="${note.id}" title="${saved ? "Remove bookmark" : "Save for later"}">${saved ? "★ Saved" : "☆ Save"}</button>
    </div>
    <h1 class="font-serif-academic text-2xl font-bold mb-2 text-[color:var(--heading)]">${escapeHtml(note.title)}</h1>
    <p class="text-[color:var(--muted)] mb-2">${escapeHtml(note.summary)}</p>
    <button class="btn btn-outline no-print mb-4" onclick="window.print()">🖨 Print This Note</button>
    ${bodyHtml}
    ${model}
    ${mistakes}
    ${l1}
    ${tip}
  </article>`;
}

function emptyState() {
  return `<div class="col-span-full text-center text-sm text-[color:var(--muted)] py-10">No results match your search/filter.</div>`;
}

// ======================= FILTER HELPER =======================
function filterList(list, textKeyFn, catKeyFn) {
  return list.filter(item => {
    const matchesSearch = !APP.search || textKeyFn(item).includes(APP.search);
    const matchesFilter = APP.filter === "all" || catKeyFn(item) === APP.filter;
    return matchesSearch && matchesFilter;
  });
}

// ======================= TEST ENGINE LAUNCHERS =======================
function launchEslMock(level) {
  const mock = D().esl.mockExams[level.toLowerCase()];
  const runner = {
    id: mock.id, title: mock.title, subjectBadge: "ESL Hub · " + mock.level,
    timeLimitMinutes: mock.timeLimitMinutes,
    parts: mock.sections.map(s => ({ id: s.id, title: s.title, kind: "objective", passage: s.passage, instructions: s.instructions, questions: s.questions }))
  };
  startEngine(runner);
}

function launchIeltsMock() {
  const mock = D().ielts.ultimateMock;
  const runner = {
    id: mock.id, title: mock.title, subjectBadge: "IELTS Suite · Ultimate Mock Exam",
    parts: [
      { id: "reading", title: "Reading", kind: "objective", timeLimitMinutes: mock.reading.timeLimitMinutes, passage: { title: mock.reading.title, text: mock.reading.text }, questions: mock.reading.questions },
      { id: "w1", title: "Writing Task 1", kind: "writing", timeLimitMinutes: mock.writingTask1.timeLimitMinutes, minWords: mock.writingTask1.minWords, prompt: mock.writingTask1.prompt, modelAnswer: { text: mock.writingTask1.modelAnswer, bandAnnotation: mock.writingTask1.bandAnnotation } },
      { id: "w2", title: "Writing Task 2", kind: "writing", timeLimitMinutes: mock.writingTask2.timeLimitMinutes, minWords: mock.writingTask2.minWords, prompt: mock.writingTask2.prompt, modelAnswer: { text: mock.writingTask2.modelAnswer, bandAnnotation: mock.writingTask2.bandAnnotation } }
    ]
  };
  startEngine(runner);
}

function launchIeltsListening(setId) {
  const set = D().ielts.listeningSets.find(s => s.id === setId);
  const runner = {
    id: set.id, title: set.title, subjectBadge: "IELTS Suite · Listening Practice",
    timeLimitMinutes: set.timeLimitMinutes,
    parts: [{
      id: "listening", title: set.title, kind: "objective",
      timeLimitMinutes: set.timeLimitMinutes,
      audioSrc: set.audioSrc, audioTitle: set.audioTitle, audioContext: set.audioContext,
      transcript: set.transcript, instructions: set.instructions, questions: set.questions
    }]
  };
  startEngine(runner);
}

function launchIeltsReading(setId) {
  const set = (D().ielts.readingSets || []).find(s => s.id === setId);
  if (!set) return;
  startEngine({
    id: set.id, title: set.title, subjectBadge: "IELTS Suite · Reading Practice",
    timeLimitMinutes: set.timeLimitMinutes,
    parts: [{
      id: "reading", title: set.title, kind: "objective", timeLimitMinutes: set.timeLimitMinutes,
      passage: { title: set.passageTitle, text: set.text }, instructions: set.instructions, questions: set.questions
    }]
  });
}

function launchIeltsWriting(setId) {
  const set = (D().ielts.writingSets || []).find(s => s.id === setId);
  if (!set) return;
  startEngine({
    id: set.id, title: set.title, subjectBadge: "IELTS Suite · Writing Practice",
    parts: [{
      id: "writing", title: set.title, kind: "writing", timeLimitMinutes: set.timeLimitMinutes,
      minWords: set.minWords, prompt: set.prompt, dataTable: set.dataTable,
      modelAnswer: { text: set.modelAnswer, bandAnnotation: set.bandAnnotation }
    }]
  });
}

function launchIeltsSpeaking(setId) {
  const set = (D().ielts.speakingSets || []).find(s => s.id === setId);
  if (!set) return;
  startEngine({
    id: set.id, title: set.title, subjectBadge: "IELTS Suite · Speaking Practice",
    parts: [{
      id: "speaking", title: set.title, kind: "writing", timeLimitMinutes: set.timeLimitMinutes,
      prompt: set.prompt, revealLabel: "Reveal Model Answer", draftLabel: "Your notes or transcript (optional — say your answer aloud first)",
      modelAnswer: { text: set.modelAnswer, bandAnnotation: set.bandAnnotation }
    }]
  });
}

function launchSatMock(id) {
  const test = D().sat.mockTests.find(t => t.id === id);
  const runner = {
    id: test.id, title: test.title, subjectBadge: "SAT Prep Zone",
    parts: [
      { id: "rw", title: "Reading & Writing", kind: "objective", timeLimitMinutes: test.readingWriting.timeLimitMinutes, instructions: test.readingWriting.instructions, questions: test.readingWriting.questions },
      { id: "math", title: "Math", kind: "objective", timeLimitMinutes: test.math.timeLimitMinutes, instructions: test.math.instructions, questions: test.math.questions }
    ]
  };
  startEngine(runner);
}

function startEngine(runner) {
  const main = document.getElementById("main-content");
  APP.engine = new TestEngine(main, () => {
    APP.engine.destroy();
    APP.engine = null;
    renderMainOnly();
  });
  APP.engine.load(runner);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGlobalTimerPoll() {
  clearInterval(APP.engineTimerPoll);
  APP.engineTimerPoll = setInterval(() => {
    const pill = document.getElementById("global-timer-pill");
    const text = document.getElementById("global-timer-text");
    if (APP.engine) {
      const mm = Math.floor(APP.engine.timerSeconds / 60).toString().padStart(2, "0");
      const ss = (APP.engine.timerSeconds % 60).toString().padStart(2, "0");
      text.textContent = (APP.engine.overtime ? "+" : "") + mm + ":" + ss + " — test in progress";
      pill.classList.add("is-running");
    } else {
      text.textContent = "No active test";
      pill.classList.remove("is-running", "is-low");
    }
  }, 500);
}
