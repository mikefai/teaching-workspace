/* ApexPrep Academy — localStorage persistence layer.
   Single namespaced blob; every reader/writer goes through this module so the
   storage shape can change later without touching app.js/engine.js call sites. */

const Store = (() => {
  const KEY = "apexprep_v1";
  const MAX_ATTEMPTS = 500;

  function _default() {
    return { theme: "light", fontScale: 1, bookmarks: [], attempts: [], flashcards: {}, lastTab: "home" };
  }

  function _read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return _default();
      const parsed = JSON.parse(raw);
      return Object.assign(_default(), parsed);
    } catch (e) {
      return _default();
    }
  }

  function _write(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* storage unavailable/full — fail silently, app still works in-memory */ }
  }

  return {
    // ---- theme ----
    getTheme() { return _read().theme; },
    setTheme(t) { const d = _read(); d.theme = t; _write(d); },

    // ---- reading comfort ----
    getFontScale() { return _read().fontScale || 1; },
    setFontScale(s) { const d = _read(); d.fontScale = Math.min(1.3, Math.max(0.85, s)); _write(d); return d.fontScale; },

    // ---- last tab (resume where you left off) ----
    getLastTab() { return _read().lastTab; },
    setLastTab(t) { const d = _read(); d.lastTab = t; _write(d); },

    // ---- bookmarks ----
    isBookmarked(id) { return _read().bookmarks.includes(id); },
    toggleBookmark(id) {
      const d = _read();
      const i = d.bookmarks.indexOf(id);
      if (i >= 0) d.bookmarks.splice(i, 1); else d.bookmarks.push(id);
      _write(d);
      return d.bookmarks.includes(id);
    },
    listBookmarks() { return _read().bookmarks; },

    // ---- test attempt history ----
    recordAttempt(entry) {
      const d = _read();
      d.attempts.push(Object.assign({ ts: Date.now() }, entry));
      if (d.attempts.length > MAX_ATTEMPTS) d.attempts.splice(0, d.attempts.length - MAX_ATTEMPTS);
      _write(d);
    },
    listAttempts() { return _read().attempts; },

    // ---- flashcard mastery state: { [cardId]: { level: 0|1|2, seen: n, lastSeen: ts } } ----
    getCardState(cardId) { return (_read().flashcards || {})[cardId] || { level: 0, seen: 0, lastSeen: 0 }; },
    setCardState(cardId, state) {
      const d = _read();
      d.flashcards = d.flashcards || {};
      d.flashcards[cardId] = state;
      _write(d);
    },
    allFlashcardStates() { return _read().flashcards || {}; },

    // ---- bulk reset (student-facing "clear my local progress" control) ----
    clearAll() { try { localStorage.removeItem(KEY); } catch (e) { /* noop */ } }
  };
})();
