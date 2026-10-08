---
name: new-listening-set
description: Create a new IELTS Listening set end to end - script, ElevenLabs audio, and the listeningSets entry in js/data/ielts.js
disable-model-invocation: true
argument-hint: "<section 1-4> <topic>"
---

Create an IELTS Listening set: $ARGUMENTS

1. **Preflight (stop and tell the user if any fail):** `ffmpeg -version` works, and `ELEVENLABS_API_KEY` is set in the environment (test with `[ -n "$ELEVENLABS_API_KEY" ]`; never print or write the value). Free ElevenLabs accounts return 402; the manual route is in `scripts/clipchamp-listening-s1-01.md`.
2. **Script:** use the `anthropic-skills:ielts-academic-instructor` skill (listening + exam-authenticity references) for the correct section profile and difficulty. Include 10 questions with answer keys.
3. **Audio:** add a new object to `SETS` in `scripts/generate_listening_audio.py` (output `audio/ielts/section{N}/<slug>.mp3`, turns using the existing `VOICES` keys). Tell the user this spends API credits and confirm before running `python scripts/generate_listening_audio.py`.
4. **Data:** add one object to `ielts.listeningSets[]` in `js/data/ielts.js` per the SCHEMA NOTES (id, title, section, contextType, bandFocus, timeLimitMinutes, audioSrc, audioTitle, audioContext, instructions, transcript, questions[]). Make sure `audioSrc` matches the generated file.
5. Run the `content-qa-reviewer` agent on the set, then confirm the page loads and the audio plays via the preview.
