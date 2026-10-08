// PreToolUse (Edit|Write): block generated/local-state files and hard-coded ElevenLabs keys.
let raw = "";
process.stdin.on("data", d => (raw += d));
process.stdin.on("end", () => {
  let input;
  try { input = JSON.parse(raw).tool_input || {}; } catch { process.exit(0); }
  const file = (input.file_path || "").replace(/\\/g, "/");
  const blocked = [/\.sqlite(-shm|-wal)?$/i, /\/__pycache__\//, /\.pyc$/i, /\/\.remember\//];
  if (blocked.some(re => re.test(file))) {
    process.stderr.write(`Blocked: ${file} is generated or local-state, not hand-edited.`);
    process.exit(2);
  }
  const text = `${input.content || ""}\n${input.new_string || ""}`;
  if (/ELEVENLABS_API_KEY\s*=\s*["']?[A-Za-z0-9_-]{16,}/.test(text) || /xi-api-key["']?\s*[:=]\s*["'][A-Za-z0-9_-]{16,}/i.test(text)) {
    process.stderr.write("Blocked: looks like a hard-coded ElevenLabs API key. Read it from the environment instead.");
    process.exit(2);
  }
});
