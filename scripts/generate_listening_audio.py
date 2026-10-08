#!/usr/bin/env python3
"""
Generates the audio for one IELTS Listening set by calling the ElevenLabs
text-to-speech API once per speaker turn, then stitching the turns together
with ffmpeg into a single MP3.

Usage:
    ELEVENLABS_API_KEY=xxxx python scripts/generate_listening_audio.py

This is an authoring-time tool, not part of the shipped site — it produces a
static MP3 that gets checked into audio/ielts/section{N}/... and referenced
by `audioSrc` in js/data/ielts.js. Nothing in the browser app calls this
script or the ElevenLabs API at runtime.

To generate a new set: duplicate SETS below with a new id/output path/turns,
run this script, then add the corresponding object to
`ielts.listeningSets[]` in js/data/ielts.js (see the SCHEMA NOTES at the
bottom of that file).
"""
import json
import os
import subprocess
import sys
import tempfile
import urllib.request
import urllib.error

API_KEY = os.environ.get("ELEVENLABS_API_KEY")
if not API_KEY:
    sys.exit("Set ELEVENLABS_API_KEY in the environment before running this script.")

VOICES = {
    "RECEPTIONIST": "FF59babHL8N8gfTgtBMT",  # Jodi — Clear British, conversational (added to account voices)
    "CALLER": "agL69Vji082CshT65Tcy",        # Blackwood — British male (added to account voices)
}

MODEL_ID = "eleven_multilingual_v2"
SILENCE_BETWEEN_TURNS_MS = 350

SETS = [
    {
        "output": "audio/ielts/section1/gym-membership-enquiry.mp3",
        "turns": [
            ("RECEPTIONIST", "Good morning, Riverside Fitness, how can I help you today?"),
            ("CALLER", "Oh, hi. I was hoping to get some information about joining the gym — memberships, prices, that kind of thing."),
            ("RECEPTIONIST", "Of course. Have you been to Riverside before, or would this be your first time?"),
            ("CALLER", "First time, yeah. A friend of mine goes there and said good things about it."),
            ("RECEPTIONIST", "Great, we're always happy to hear that. Right, shall I take a few details first, and then I can talk you through what we offer?"),
            ("CALLER", "Sure."),
            ("RECEPTIONIST", "Could I get your full name, please?"),
            ("CALLER", "It's Daniel Whitfield."),
            ("RECEPTIONIST", "Sorry, could you spell the surname for me?"),
            ("CALLER", "Yep — W, H, I, T, F, I, E, L, D."),
            ("RECEPTIONIST", "Perfect, thank you. And a contact number?"),
            ("CALLER", "It's oh-seven — sorry, let me just check — oh-seven-nine-four-five, two-two-six, one-three-zero."),
            ("RECEPTIONIST", "Oh-seven-nine-four-five, two-two-six, one-three-zero, got it. And would you prefer we contact you by phone or email?"),
            ("CALLER", "Email's probably easier, actually."),
            ("RECEPTIONIST", "No problem — what's the address?"),
            ("CALLER", "It's d, dot, whitfield, all one word, at skymail dot com."),
            ("RECEPTIONIST", "Great, thank you. Now, in terms of membership, we've actually got three main options. There's the Standard membership, which is gym-floor access only; the Premium, which adds the pool and the fitness classes; and then there's an Off-Peak option, which is cheaper but restricted to before 10am and after 7pm."),
            ("CALLER", "Right. What sort of price are we talking?"),
            ("RECEPTIONIST", "Standard's 35 pounds a month, Premium's 52, and Off-Peak works out at 28."),
            ("CALLER", "I think Premium sounds like what I need, to be honest — I really want to get back into swimming."),
            ("RECEPTIONIST", "Good choice — the pool's one of our most popular facilities. I'll also mention there's a one-off joining fee of 20 pounds, but that's waived if you sign up before the end of the month, which — actually, that's this Friday, so you're just in time."),
            ("CALLER", "Oh, that's handy."),
            ("RECEPTIONIST", "It is. Now, we do recommend booking an induction session before you start using the equipment on your own — it's about 45 minutes with one of our trainers, just going over the machines and general safety."),
            ("CALLER", "Yeah, that makes sense. When could I do that?"),
            ("RECEPTIONIST", "Let me check... we've got a slot this Thursday at 6pm, or otherwise the following Tuesday at 9am."),
            ("CALLER", "Thursday at 6 works better for me."),
            ("RECEPTIONIST", "Lovely, I'll pencil you in for that. Oh, and one more thing — is there anything we should know, medically, before your induction? Any injuries, conditions, anything like that?"),
            ("CALLER", "Um, I did have a knee operation a couple of years ago, but it's fully healed now — just thought I'd mention it."),
            ("RECEPTIONIST", "Thanks for letting us know, I'll add a note to your file so the trainer's aware. Right, I think that's everything — welcome to Riverside Fitness, Daniel!"),
            ("CALLER", "Thanks very much, see you Thursday."),
        ],
    },
]


def tts_turn(text, voice_id, out_path):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
    body = json.dumps({
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.75},
    }).encode("utf-8")
    req = urllib.request.Request(url, data=body, method="POST", headers={
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
    })
    try:
        with urllib.request.urlopen(req) as resp:
            with open(out_path, "wb") as f:
                f.write(resp.read())
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"TTS call failed ({e.code}) for voice {voice_id}: {detail}")


def make_silence(out_path, ms):
    subprocess.run([
        "ffmpeg", "-y", "-f", "lavfi", "-i", f"anullsrc=r=44100:cl=mono",
        "-t", str(ms / 1000), "-q:a", "9", out_path,
    ], check=True, capture_output=True)


def main():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for set_def in SETS:
        out_path = os.path.join(project_root, set_def["output"].replace("/", os.sep))
        os.makedirs(os.path.dirname(out_path), exist_ok=True)

        with tempfile.TemporaryDirectory() as tmp:
            silence_path = os.path.join(tmp, "silence.mp3")
            make_silence(silence_path, SILENCE_BETWEEN_TURNS_MS)

            clip_paths = []
            for i, (speaker, text) in enumerate(set_def["turns"]):
                voice_id = VOICES[speaker]
                clip_path = os.path.join(tmp, f"turn_{i:03d}.mp3")
                print(f"[{i+1}/{len(set_def['turns'])}] {speaker}: {text[:50]}...")
                tts_turn(text, voice_id, clip_path)
                clip_paths.append(clip_path)

            concat_list_path = os.path.join(tmp, "concat.txt")
            with open(concat_list_path, "w", encoding="utf-8") as f:
                for i, clip_path in enumerate(clip_paths):
                    f.write(f"file '{clip_path.replace(chr(92), '/')}'" + "\n")
                    if i < len(clip_paths) - 1:
                        f.write(f"file '{silence_path.replace(chr(92), '/')}'" + "\n")

            print(f"Concatenating {len(clip_paths)} clips -> {out_path}")
            subprocess.run([
                "ffmpeg", "-y", "-f", "concat", "-safe", "0",
                "-i", concat_list_path, "-c:a", "libmp3lame", "-b:a", "80k",
                out_path,
            ], check=True, capture_output=True)

        size_kb = os.path.getsize(out_path) / 1024
        print(f"Done: {out_path} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    main()
