/* ApexPrep Academy — Interactive Test Engine
   Generic runner for ESL mock exams, IELTS mocks/guided practice, and SAT mock tests.
   Consumes a normalized "runner" object: { id, title, subjectBadge, parts: [...] }
   Part shapes:
     { id, title, kind:'objective', passage?, audioSrc?, audioTitle?, audioContext?, transcript?,
       instructions?, questions:[...], timeLimitMinutes? }
     { id, title, kind:'writing', prompt, minWords?, dataTable?:{caption?,headers[],rows[][]},
       modelAnswer:{text,bandAnnotation}, timeLimitMinutes? }
*/

class TestEngine {
  constructor(rootEl, onExit) {
    this.root = rootEl;
    this.onExit = onExit || function () {};
    this.runner = null;
    this.partIndex = 0;
    this.partState = {}; // { [partId]: { answers:{}, submitted:bool, revealed:bool, selfChecks:{}, draft:'' } }
    this.timerSeconds = 0;
    this.timerHandle = null;
    this.overtime = false;
  }

  load(runner) {
    this.runner = runner;
    this.partIndex = 0;
    this.partState = {};
    runner.parts.forEach(p => {
      this.partState[p.id] = { answers: {}, submitted: false, revealed: false, selfChecks: {}, draft: "" };
    });
    this._resetTimerForCurrentPart();
    this.render();
  }

  _currentPart() { return this.runner.parts[this.partIndex]; }
  _state(partId) { return this.partState[partId || this._currentPart().id]; }

  _resetTimerForCurrentPart() {
    clearInterval(this.timerHandle);
    const part = this._currentPart();
    const mins = part.timeLimitMinutes || this.runner.timeLimitMinutes || 20;
    this.timerSeconds = mins * 60;
    this.overtime = false;
    this.timerHandle = setInterval(() => {
      this.timerSeconds -= 1;
      if (this.timerSeconds <= 0 && !this.overtime) { this.overtime = true; this.timerSeconds = 0; }
      if (this.overtime) this.timerSeconds += 1; // count up in overtime
      this._updateTimerDisplay();
    }, 1000);
    this._updateTimerDisplay();
  }

  _updateTimerDisplay() {
    const el = this.root.querySelector("#te-timer");
    if (!el) return;
    const mm = Math.floor(this.timerSeconds / 60).toString().padStart(2, "0");
    const ss = (this.timerSeconds % 60).toString().padStart(2, "0");
    el.textContent = (this.overtime ? "+" : "") + mm + ":" + ss;
    el.parentElement.classList.toggle("is-low", !this.overtime && this.timerSeconds <= 60);
    el.parentElement.classList.toggle("is-running", true);
  }

  destroy() { clearInterval(this.timerHandle); }

  selectPart(i) { this.partIndex = i; this._resetTimerForCurrentPart(); this.render(); }

  // ---------- answer capture ----------
  _setAnswer(qid, value) {
    const st = this._state();
    st.answers[qid] = value;
  }

  _isCorrect(q, userVal) {
    if (userVal === undefined || userVal === null || userVal === "") return false;
    if (Array.isArray(q.options)) return Number(userVal) === Number(q.correctAnswer);
    if (q.type === "gridin") {
      const num = parseFloat(userVal);
      if (isNaN(num)) return false;
      const tol = q.tolerance !== undefined ? q.tolerance : 0.01;
      return Math.abs(num - q.correctAnswer) <= tol;
    }
    if (["True", "False", "Not Given"].includes(q.correctAnswer)) {
      return String(userVal).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
    }
    // short text (gapfill/summary/listening form-completion) — internal whitespace is
    // ignored too, so a phone number typed as "07945 226130" still matches "07945226130"
    const norm = s => String(s).trim().toLowerCase().replace(/[.,!?;:]$/g, "").replace(/\s+/g, "");
    return norm(userVal) === norm(q.correctAnswer);
  }

  _questionKind(q) {
    if (Array.isArray(q.options)) return "mcq";
    if (q.original && q.keyword) return "selfcheck";
    if (q.type === "gridin") return "gridin";
    if (["True", "False", "Not Given"].includes(q.correctAnswer)) return "tfng";
    return "short";
  }

  submitPart() {
    const part = this._currentPart();
    const st = this._state();
    st.submitted = true;
    this._recordAttempt(part, st);
    this.render();
  }

  _subjectKey() {
    const id = (this.runner && this.runner.id) || "";
    if (id.startsWith("esl")) return "esl";
    if (id.startsWith("ielts")) return "ielts";
    if (id.startsWith("sat")) return "sat";
    return "other";
  }

  _scorePartState(part, st) {
    let total = 0, correct = 0;
    const byTag = {};
    part.questions.forEach(q => {
      const kind = this._questionKind(q);
      let ok;
      if (kind === "selfcheck") {
        const verdict = st.selfChecks[q.id];
        if (verdict === undefined) return;
        ok = verdict;
      } else {
        ok = this._isCorrect(q, st.answers[q.id]);
      }
      total++; if (ok) correct++;
      const tag = q.tag || q.domain || "general";
      byTag[tag] = byTag[tag] || { total: 0, correct: 0 };
      byTag[tag].total++; if (ok) byTag[tag].correct++;
    });
    return { total, correct, byTag };
  }

  _recordAttempt(part, st) {
    if (typeof Store === "undefined") return; // Store not loaded (e.g. standalone test page) — skip persistence
    const scored = this._scorePartState(part, st);
    Store.recordAttempt({
      subject: this._subjectKey(),
      testId: this.runner.id,
      testTitle: this.runner.title,
      partId: part.id,
      partTitle: part.title,
      correct: scored.correct,
      total: scored.total,
      byTag: scored.byTag
    });
  }

  revealWriting() {
    const st = this._state();
    st.revealed = true;
    this.render();
  }

  toggleSelfCheck(qid, verdict) {
    const st = this._state();
    st.selfChecks[qid] = verdict;
    this.render();
  }

  toggleExplain(qid) {
    const key = "_explainOpen_" + qid;
    this[key] = !this[key];
    this.render();
  }

  // ---------- aggregate scoring across all submitted objective parts ----------
  _aggregate() {
    let total = 0, correct = 0;
    const byTag = {};
    this.runner.parts.forEach(part => {
      if (part.kind !== "objective") return;
      const st = this.partState[part.id];
      if (!st.submitted) return;
      const scored = this._scorePartState(part, st);
      total += scored.total;
      correct += scored.correct;
      Object.entries(scored.byTag).forEach(([tag, v]) => {
        byTag[tag] = byTag[tag] || { total: 0, correct: 0 };
        byTag[tag].total += v.total;
        byTag[tag].correct += v.correct;
      });
    });
    return { total, correct, byTag, pct: total ? Math.round((correct / total) * 100) : 0 };
  }

  anyPartSubmitted() {
    return this.runner.parts.some(p => p.kind === "objective" && this.partState[p.id].submitted);
  }

  // ================= RENDER =================
  render() {
    const part = this._currentPart();
    const partsNav = this.runner.parts.map((p, i) => {
      const st = this.partState[p.id];
      const done = p.kind === "objective" ? st.submitted : st.revealed;
      const cls = ["sec-pill"];
      if (i === this.partIndex) cls.push("active");
      else if (done) cls.push("done");
      return `<button class="${cls.join(" ")}" data-part-i="${i}">${escapeHtml(p.title)}${done ? " ✓" : ""}</button>`;
    }).join("");

    this.root.innerHTML = `
      <div class="apex-card p-4 md:p-6 fade-in">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <div class="text-xs uppercase tracking-wide text-[color:var(--muted)] font-semibold">${escapeHtml(this.runner.subjectBadge || "")}</div>
            <h2 class="font-serif-academic text-xl md:text-2xl font-bold text-[var(--heading)]">${escapeHtml(this.runner.title)}</h2>
          </div>
          <div class="flex items-center gap-2">
            <div class="timer-pill" title="Time remaining for this part"><span>⏱</span><span id="te-timer">--:--</span></div>
            <button class="btn btn-outline no-print" id="te-print">🖨 Print</button>
            <button class="btn btn-outline no-print" id="te-exit">✕ Exit</button>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-5 no-print">${partsNav}</div>

        <div id="te-part-body"></div>

        <div class="mt-6 border-t border-[var(--line)] pt-4 flex flex-wrap items-center justify-between gap-3 no-print">
          <div class="text-sm text-[color:var(--muted)]">${this.anyPartSubmitted() ? "Aggregate results update as you submit each section." : "Submit a section to see instant scoring."}</div>
          <button class="btn btn-amber" id="te-report">📊 View Full Report</button>
        </div>

        <div id="te-report-panel" class="mt-5"></div>
      </div>
    `;

    this._renderPartBody(part);
    this._wireChrome();
  }

  _renderPartBody(part) {
    const body = this.root.querySelector("#te-part-body");
    if (part.kind === "writing") { body.innerHTML = this._renderWritingPart(part); this._wireWritingPart(part); return; }
    body.innerHTML = this._renderObjectivePart(part);
    this._wireObjectivePart(part);
  }

  // ---------- WRITING PART ----------
  _renderWritingPart(part) {
    const st = this._state(part.id);
    return `
      <div class="space-y-4">
        <div class="apex-card p-4 bg-[var(--amber-50)]">
          <div class="font-semibold text-sm text-[var(--amber-600)] mb-1">Task Prompt</div>
          <div class="text-sm leading-relaxed" style="white-space:pre-line">${escapeHtml(part.prompt)}</div>
          ${this._renderDataTable(part.dataTable)}
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label class="text-sm font-semibold text-[color:var(--ink-soft)]">Your Draft (optional — for your own practice)</label>
            <span id="te-word-count" class="text-xs font-semibold"></span>
          </div>
          <textarea id="te-draft" rows="8" class="apex-input w-full mt-1" placeholder="Write your answer here before revealing the model...">${escapeHtml(st.draft || "")}</textarea>
        </div>
        <div class="flex gap-2 no-print">
          <button class="btn btn-primary" id="te-reveal-writing">${st.revealed ? "Model Answer Revealed ✓" : "Reveal Band 9 Model Answer"}</button>
        </div>
        ${st.revealed ? `
          <div class="model-answer">${escapeHtml(part.modelAnswer.text)}</div>
          <div class="band-annotation"><strong>Band Annotation:</strong> ${escapeHtml(part.modelAnswer.bandAnnotation)}</div>
        ` : ""}
      </div>
    `;
  }

  // Optional chart/process/map data shown under a Writing Task 1 prompt. All text is escaped.
  _renderDataTable(table) {
    if (!table || !Array.isArray(table.headers) || !Array.isArray(table.rows)) return "";
    const head = table.headers.map(h => `<th scope="col">${escapeHtml(h)}</th>`).join("");
    const rows = table.rows.map(r => `<tr>${r.map(c => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`).join("");
    const label = (table.caption || "Data table") + " (scrolls horizontally)";
    return `<div class="overflow-x-auto mt-3 apex-datatable-wrap" tabindex="0" role="region" aria-label="${escapeHtml(label)}">
      <table class="apex-datatable">
        ${table.caption ? `<caption>${escapeHtml(table.caption)}</caption>` : ""}
        <thead><tr>${head}</tr></thead><tbody>${rows}</tbody>
      </table>
    </div>`;
  }

  _wireWritingPart(part) {
    const st = this._state(part.id);
    const ta = this.root.querySelector("#te-draft");
    const updateCount = () => this._updateWordCount(part, st.draft || "");
    if (ta) ta.addEventListener("input", e => { st.draft = e.target.value; updateCount(); });
    updateCount();
    const revealBtn = this.root.querySelector("#te-reveal-writing");
    if (revealBtn) revealBtn.addEventListener("click", () => this.revealWriting());
  }

  _updateWordCount(part, text) {
    const el = this.root.querySelector("#te-word-count");
    if (!el) return;
    const count = text.trim() ? text.trim().split(/\s+/).length : 0;
    const min = part.minWords;
    if (!min) { el.textContent = count + " words"; el.style.color = "var(--muted)"; return; }
    el.textContent = count + " / " + min + " words";
    el.style.color = count >= min ? "var(--green-700)" : "var(--amber-600)";
  }

  // ---------- OBJECTIVE PART ----------
  _renderObjectivePart(part) {
    const st = this._state(part.id);
    let html = "";
    if (part.audioSrc) {
      html += this._renderAudioPanel(part, st);
    } else if (part.passage) {
      html += `<div class="passage-panel mb-5"><h3 class="font-serif-academic">${escapeHtml(part.passage.title || "Reading Passage")}</h3>${escapeHtml(part.passage.text)}</div>`;
    }
    if (part.instructions) {
      html += `<div class="text-sm text-[color:var(--muted)] mb-4 italic">${escapeHtml(part.instructions)}</div>`;
    }
    html += `<div class="space-y-4">`;
    part.questions.forEach((q, idx) => {
      html += this._renderQuestion(q, idx, st);
    });
    html += `</div>`;
    if (!st.submitted) {
      html += `<div class="mt-5 no-print"><button class="btn btn-primary" id="te-submit-part">Submit Section &amp; See Score</button></div>`;
    } else {
      const scored = part.questions.filter(q => this._questionKind(q) !== "selfcheck");
      const correctCount = scored.filter(q => this._isCorrect(q, st.answers[q.id])).length;
      html += `<div class="mt-5 apex-card p-4 bg-[var(--indigo-100)]"><strong>Section score:</strong> ${correctCount} / ${scored.length} auto-graded correct.</div>`;
    }
    return html;
  }

  _renderAudioPanel(part, st) {
    let html = `<div class="audio-panel mb-5">
      <h3 class="font-serif-academic">${escapeHtml(part.audioTitle || "Listening Audio")}</h3>
      ${part.audioContext ? `<p class="audio-context">${escapeHtml(part.audioContext)}</p>` : ""}
      <audio controls preload="metadata" src="${escapeHtml(part.audioSrc)}">
        Your browser does not support audio playback. <a href="${escapeHtml(part.audioSrc)}">Download the audio file</a>.
      </audio>`;
    if (!st.submitted) {
      html += `<div class="text-xs text-[color:var(--muted)] mt-2 italic">Transcript is hidden until you submit this section — just like the real test.</div>`;
    } else if (part.transcript) {
      html += `<div class="mt-3">
        <span class="explain-toggle" id="te-toggle-transcript">${st.transcriptOpen ? "▾ Hide Transcript" : "▸ Show Transcript"}</span>
        ${st.transcriptOpen ? `<div class="transcript-panel mt-2">${escapeHtml(part.transcript)}</div>` : ""}
      </div>`;
    }
    html += `</div>`;
    return html;
  }

  _renderQuestion(q, idx, st) {
    const kind = this._questionKind(q);
    const userVal = st.answers[q.id];
    const submitted = st.submitted;
    let cardClass = "question-card";
    if (submitted && kind !== "selfcheck") cardClass += this._isCorrect(q, userVal) ? " correct" : " incorrect";

    let inner = "";
    if (q.domain) inner += `<div class="text-xs uppercase tracking-wide text-[color:var(--muted)] font-semibold mb-1">${escapeHtml(q.domain)}</div>`;
    if (q.passage) inner += `<div class="passage-panel mb-3 text-sm">${escapeHtml(q.passage)}</div>`;
    inner += `<div class="font-medium mb-2">${idx + 1}. ${escapeHtml(q.prompt || q.original || "")}</div>`;

    if (kind === "mcq") {
      inner += `<div class="space-y-2">` + q.options.map((opt, oi) => {
        let cls = "option-row";
        if (!submitted && Number(userVal) === oi) cls += " selected";
        if (submitted) {
          if (oi === Number(q.correctAnswer)) cls += " reveal-correct";
          else if (Number(userVal) === oi) cls += " reveal-incorrect";
        }
        return `<label class="${cls}"><input type="radio" name="${q.id}" value="${oi}" ${Number(userVal) === oi ? "checked" : ""} ${submitted ? "disabled" : ""}/><span>${escapeHtml(opt)}</span></label>`;
      }).join("") + `</div>`;
    } else if (kind === "tfng") {
      inner += `<div class="flex flex-wrap gap-2">` + ["True", "False", "Not Given"].map(opt => {
        let cls = "option-row !inline-flex";
        if (!submitted && userVal === opt) cls += " selected";
        if (submitted) {
          if (opt === q.correctAnswer) cls += " reveal-correct";
          else if (userVal === opt) cls += " reveal-incorrect";
        }
        return `<label class="${cls}"><input type="radio" name="${q.id}" value="${opt}" ${userVal === opt ? "checked" : ""} ${submitted ? "disabled" : ""}/><span>${opt}</span></label>`;
      }).join("") + `</div>`;
    } else if (kind === "gridin") {
      inner += `<input type="text" inputmode="decimal" class="apex-input gridin-input" data-qid="${q.id}" value="${userVal !== undefined ? escapeHtml(userVal) : ""}" ${submitted ? "disabled" : ""} placeholder="Answer"/>`;
    } else if (kind === "selfcheck") {
      inner += `<div class="text-sm text-[color:var(--muted)] mb-2">Keyword: <strong>${escapeHtml(q.keyword)}</strong></div>`;
      inner += `<input type="text" class="apex-input w-full mb-2" data-qid="${q.id}" value="${userVal !== undefined ? escapeHtml(userVal) : ""}" ${submitted ? "disabled" : ""} placeholder="Write your transformed sentence..."/>`;
      if (submitted) {
        const verdict = st.selfChecks[q.id];
        inner += `<div class="text-sm mb-2"><strong>Model answer:</strong> ${escapeHtml(q.correctAnswer)}</div>`;
        inner += `<div class="flex gap-2">
          <button class="btn ${verdict === true ? "btn-primary" : "btn-outline"} self-check-btn" data-qid="${q.id}" data-verdict="true">I got this right</button>
          <button class="btn ${verdict === false ? "btn-primary" : "btn-outline"} self-check-btn" data-qid="${q.id}" data-verdict="false">I got this wrong</button>
        </div>`;
      }
    } else {
      // short (gapfill / summary)
      inner += `<input type="text" class="apex-input w-full" data-qid="${q.id}" value="${userVal !== undefined ? escapeHtml(userVal) : ""}" ${submitted ? "disabled" : ""} placeholder="Type your answer"/>`;
    }

    if (submitted && kind !== "selfcheck") {
      inner += `<div class="explain-toggle mt-3" data-qid="${q.id}">▸ Explain Answer</div>`;
      if (this["_explainOpen_" + q.id]) {
        inner += `<div class="explain-panel">${escapeHtml(q.explanation || "")}</div>`;
      }
    } else if (submitted && kind === "selfcheck") {
      inner += `<div class="explain-toggle mt-3" data-qid="${q.id}">▸ Explain Answer</div>`;
      if (this["_explainOpen_" + q.id]) {
        inner += `<div class="explain-panel">${escapeHtml(q.explanation || "")}</div>`;
      }
    }

    return `<div class="${cardClass}">${inner}</div>`;
  }

  _wireObjectivePart(part) {
    const st = this._state(part.id);

    this.root.querySelectorAll('input[type="radio"]').forEach(r => {
      r.addEventListener("change", e => { this._setAnswer(e.target.name, e.target.value); this.render(); });
    });
    this.root.querySelectorAll('input[type="text"][data-qid]').forEach(inp => {
      inp.addEventListener("input", e => { this._setAnswer(e.target.dataset.qid, e.target.value); });
    });
    this.root.querySelectorAll(".self-check-btn").forEach(btn => {
      btn.addEventListener("click", () => this.toggleSelfCheck(btn.dataset.qid, btn.dataset.verdict === "true"));
    });
    this.root.querySelectorAll(".explain-toggle[data-qid]").forEach(t => {
      t.addEventListener("click", () => this.toggleExplain(t.dataset.qid));
    });
    const transcriptBtn = this.root.querySelector("#te-toggle-transcript");
    if (transcriptBtn) transcriptBtn.addEventListener("click", () => { st.transcriptOpen = !st.transcriptOpen; this.render(); });
    const submitBtn = this.root.querySelector("#te-submit-part");
    if (submitBtn) submitBtn.addEventListener("click", () => this.submitPart());
  }

  // ---------- chrome (header controls, part nav, report) ----------
  _wireChrome() {
    this.root.querySelectorAll("[data-part-i]").forEach(btn => {
      btn.addEventListener("click", () => this.selectPart(Number(btn.dataset.partI)));
    });
    this.root.querySelector("#te-print").addEventListener("click", () => window.print());
    this.root.querySelector("#te-exit").addEventListener("click", () => { this.destroy(); this.onExit(); });
    this.root.querySelector("#te-report").addEventListener("click", () => this._renderReport());
  }

  _renderReport() {
    const agg = this._aggregate();
    const panel = this.root.querySelector("#te-report-panel");
    if (agg.total === 0) {
      panel.innerHTML = `<div class="apex-card p-4 text-sm text-[color:var(--muted)]">No sections submitted yet — submit at least one section above to generate your report.</div>`;
      return;
    }
    const tagRows = Object.entries(agg.byTag)
      .map(([tag, v]) => ({ tag, pct: Math.round((v.correct / v.total) * 100), total: v.total, correct: v.correct }))
      .sort((a, b) => a.pct - b.pct);

    panel.innerHTML = `
      <div class="apex-card p-5 fade-in">
        <h3 class="font-serif-academic text-lg font-bold mb-3 text-[var(--heading)]">Performance Report</h3>
        <div class="flex flex-wrap items-center gap-6 mb-5">
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--heading)]">${agg.pct}%</div>
            <div class="text-xs uppercase tracking-wide text-[color:var(--muted)]">Accuracy</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[var(--heading)]">${agg.correct}/${agg.total}</div>
            <div class="text-xs uppercase tracking-wide text-[color:var(--muted)]">Correct</div>
          </div>
        </div>
        <div class="text-sm font-semibold text-[color:var(--ink-soft)] mb-2">Weak Areas (lowest accuracy first)</div>
        <div class="space-y-2">
          ${tagRows.map(r => `
            <div>
              <div class="flex justify-between text-xs mb-1"><span>${escapeHtml(r.tag)}</span><span>${r.correct}/${r.total} (${r.pct}%)</span></div>
              <div class="weak-bar-track"><div class="weak-bar-fill" style="width:${r.pct}%"></div></div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
}

function escapeHtml(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
