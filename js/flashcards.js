/* ApexPrep Academy — Flashcard study tool.
   Lightweight mastery model (not full spaced-repetition, deliberately simple):
   level 0 = new, 1 = still learning, 2 = known. "I Know This" advances a level;
   "Still Learning" drops a card back to level 1. Each session queues every
   level-0/1 card plus a light sample of level-2 cards for maintenance review. */

class FlashcardSession {
  constructor(rootEl, onExit) {
    this.root = rootEl;
    this.onExit = onExit || function () {};
    this.deck = null;
    this.queue = [];
    this.pos = 0;
    this.flipped = false;
    this.tally = { known: 0, learning: 0 };
  }

  load(deck) {
    this.deck = deck;
    this.pos = 0;
    this.flipped = false;
    this.tally = { known: 0, learning: 0 };
    this.queue = this._buildQueue(deck);
    this.render();
  }

  _buildQueue(deck) {
    const due = [];
    const maintenance = [];
    deck.cards.forEach(card => {
      const st = Store.getCardState(card.id);
      if ((st.level || 0) < 2) due.push(card);
      else if (Math.random() < 0.15) maintenance.push(card);
    });
    const shuffledDue = shuffle(due);
    const shuffledMaint = shuffle(maintenance);
    return shuffledDue.concat(shuffledMaint);
  }

  _current() { return this.queue[this.pos]; }

  flip() { this.flipped = !this.flipped; this.render(); }

  mark(verdict) {
    const card = this._current();
    if (!card) return;
    const st = Store.getCardState(card.id);
    const newLevel = verdict === "known" ? Math.min(2, (st.level || 0) + 1) : 1;
    Store.setCardState(card.id, { level: newLevel, seen: (st.seen || 0) + 1, lastSeen: Date.now() });
    this.tally[verdict === "known" ? "known" : "learning"]++;
    this.pos++;
    this.flipped = false;
    this.render();
  }

  restart() { this.load(this.deck); }

  destroy() { /* no timers to clear */ }

  render() {
    if (!this.deck) return;
    const total = this.queue.length;
    if (total === 0) {
      this.root.innerHTML = this._chrome(`
        <div class="apex-card p-8 text-center">
          <div class="text-lg font-semibold mb-2">Every card in this deck is already mastered 🎉</div>
          <p class="text-sm text-[color:var(--muted)] mb-4">Come back later for a maintenance review, or exit to try another deck.</p>
          <button class="btn btn-outline" id="fc-exit-2">&larr; Back to Flashcards</button>
        </div>
      `);
      this.root.querySelector("#fc-exit-2").addEventListener("click", () => this.onExit());
      this._wireHeaderExit();
      return;
    }

    if (this.pos >= total) {
      this.root.innerHTML = this._chrome(`
        <div class="apex-card p-8 text-center fade-in">
          <div class="text-lg font-semibold mb-1">Session complete</div>
          <p class="text-sm text-[color:var(--muted)] mb-5">${total} card${total === 1 ? "" : "s"} reviewed this round.</p>
          <div class="flex justify-center gap-6 mb-6">
            <div class="stat-tile"><div class="big">${this.tally.known}</div><div class="label">Marked Known</div></div>
            <div class="stat-tile"><div class="big">${this.tally.learning}</div><div class="label">Still Learning</div></div>
          </div>
          <div class="flex justify-center gap-3">
            <button class="btn btn-primary" id="fc-restart">Study Again</button>
            <button class="btn btn-outline" id="fc-exit-3">Back to Flashcards</button>
          </div>
        </div>
      `);
      this.root.querySelector("#fc-restart").addEventListener("click", () => this.restart());
      this.root.querySelector("#fc-exit-3").addEventListener("click", () => this.onExit());
      this._wireHeaderExit();
      return;
    }

    const card = this._current();
    const st = Store.getCardState(card.id);
    const pct = Math.round((this.pos / total) * 100);

    this.root.innerHTML = this._chrome(`
      <div class="text-sm text-[color:var(--muted)] mb-2 flex items-center justify-between">
        <span>Card ${this.pos + 1} of ${total}</span>
        <span class="flash-mastery-dot flash-mastery-${st.level || 0}"></span>
      </div>
      <div class="deck-progress-track mb-6"><div class="deck-progress-fill" style="width:${pct}%"></div></div>

      <div class="flash-stage">
        <div class="flash-card ${this.flipped ? "is-flipped" : ""}" id="fc-card">
          <div class="flash-face flash-face-front">
            <div class="flash-hint">Tap to reveal</div>
            <div class="flash-term">${escapeHtml(card.term)}</div>
          </div>
          <div class="flash-face flash-face-back">
            <div class="flash-hint">Definition</div>
            <div class="flash-term">${escapeHtml(card.definition)}</div>
            ${card.example ? `<div class="flash-example">&ldquo;${escapeHtml(card.example)}&rdquo;</div>` : ""}
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-3 mt-6 no-print">
        ${this.flipped ? `
          <button class="btn btn-outline" id="fc-mark-learning">Still Learning</button>
          <button class="btn btn-primary" id="fc-mark-known">I Know This</button>
        ` : `<div class="text-sm text-[color:var(--muted)]">Click the card to see the definition</div>`}
      </div>
    `);

    this.root.querySelector("#fc-card").addEventListener("click", () => this.flip());
    const learnBtn = this.root.querySelector("#fc-mark-learning");
    const knowBtn = this.root.querySelector("#fc-mark-known");
    if (learnBtn) learnBtn.addEventListener("click", e => { e.stopPropagation(); this.mark("learning"); });
    if (knowBtn) knowBtn.addEventListener("click", e => { e.stopPropagation(); this.mark("known"); });
    this._wireHeaderExit();
  }

  _wireHeaderExit() {
    const btn = this.root.querySelector("#fc-exit");
    if (btn) btn.addEventListener("click", () => this.onExit());
  }

  _chrome(inner) {
    return `
      <div class="apex-card p-4 md:p-6 fade-in">
        <div class="flex items-center justify-between mb-5">
          <div>
            <div class="text-xs uppercase tracking-wide text-[color:var(--muted)] font-semibold">Flashcards</div>
            <h2 class="font-serif-academic text-xl font-bold text-[color:var(--heading)]">${escapeHtml(this.deck.title)}</h2>
          </div>
          <button class="btn btn-outline no-print" id="fc-exit">&times; Exit</button>
        </div>
        ${inner}
      </div>
    `;
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
