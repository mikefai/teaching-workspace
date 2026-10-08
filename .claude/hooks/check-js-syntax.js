// PostToolUse (Edit|Write): syntax-check edited JS so a stray comma in a data file is caught immediately.
const { spawnSync } = require("child_process");
const path = require("path");
let raw = "";
process.stdin.on("data", d => (raw += d));
process.stdin.on("end", () => {
  let file;
  try { file = JSON.parse(raw).tool_input.file_path; } catch { process.exit(0); }
  if (!file || !/\.js$/i.test(file)) process.exit(0);
  const norm = path.resolve(file).replace(/\\/g, "/");
  if (!/\/(js|scripts)\//.test(norm)) process.exit(0);
  const r = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (r.status !== 0) {
    process.stderr.write(`Syntax error in ${file}:\n${r.stderr}`);
    process.exit(2);
  }
});
