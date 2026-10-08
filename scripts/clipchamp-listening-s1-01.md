# Clipchamp recording guide — Section 1: "Gym Membership Enquiry"

Everything on the code side is already built and wired to expect the finished file at:
`audio/ielts/section1/gym-membership-enquiry.mp3`. You don't need to worry about that
path or the export format — just get the dialogue recorded in Clipchamp and send me
whatever it exports (MP4 or audio); I'll extract/convert it with ffmpeg and drop it
into place.

## 1. Pick two voices

In Clipchamp: **Record and create → Text to speech**. Pick one voice per speaker and
keep it consistent for every line of that speaker.

- **RECEPTIONIST** (female, British if available — e.g. *Libby* or *Sonia*)
- **CALLER** (male, British if available — e.g. *Ryan* or *Thomas*)

If no UK voices are offered in your Clipchamp voice list, any clear, natural-sounding
US/AUS pair is fine — the exercise still works, it just won't be UK-accented.

## 2. Generate each line

For each row below: select the speaker's voice, paste the **Text** into the
text-to-speech box, generate, and drag the resulting clip onto the timeline **in order**.
Leave a small gap (roughly a third of a second) between clips so it doesn't sound rushed —
Clipchamp's timeline snapping makes this easy to eyeball.

| # | Speaker | Text |
|---|---|---|
| 1 | RECEPTIONIST | Good morning, Riverside Fitness, how can I help you today? |
| 2 | CALLER | Oh, hi. I was hoping to get some information about joining the gym — memberships, prices, that kind of thing. |
| 3 | RECEPTIONIST | Of course. Have you been to Riverside before, or would this be your first time? |
| 4 | CALLER | First time, yeah. A friend of mine goes there and said good things about it. |
| 5 | RECEPTIONIST | Great, we're always happy to hear that. Right, shall I take a few details first, and then I can talk you through what we offer? |
| 6 | CALLER | Sure. |
| 7 | RECEPTIONIST | Could I get your full name, please? |
| 8 | CALLER | It's Daniel Whitfield. |
| 9 | RECEPTIONIST | Sorry, could you spell the surname for me? |
| 10 | CALLER | Yep — W, H, I, T, F, I, E, L, D. |
| 11 | RECEPTIONIST | Perfect, thank you. And a contact number? |
| 12 | CALLER | It's oh-seven — sorry, let me just check — oh-seven-nine-four-five, two-two-six, one-three-zero. |
| 13 | RECEPTIONIST | Oh-seven-nine-four-five, two-two-six, one-three-zero, got it. And would you prefer we contact you by phone or email? |
| 14 | CALLER | Email's probably easier, actually. |
| 15 | RECEPTIONIST | No problem — what's the address? |
| 16 | CALLER | It's d, dot, whitfield, all one word, at skymail dot com. |
| 17 | RECEPTIONIST | Great, thank you. Now, in terms of membership, we've actually got three main options. There's the Standard membership, which is gym-floor access only; the Premium, which adds the pool and the fitness classes; and then there's an Off-Peak option, which is cheaper but restricted to before 10am and after 7pm. |
| 18 | CALLER | Right. What sort of price are we talking? |
| 19 | RECEPTIONIST | Standard's 35 pounds a month, Premium's 52, and Off-Peak works out at 28. |
| 20 | CALLER | I think Premium sounds like what I need, to be honest — I really want to get back into swimming. |
| 21 | RECEPTIONIST | Good choice — the pool's one of our most popular facilities. I'll also mention there's a one-off joining fee of 20 pounds, but that's waived if you sign up before the end of the month, which — actually, that's this Friday, so you're just in time. |
| 22 | CALLER | Oh, that's handy. |
| 23 | RECEPTIONIST | It is. Now, we do recommend booking an induction session before you start using the equipment on your own — it's about 45 minutes with one of our trainers, just going over the machines and general safety. |
| 24 | CALLER | Yeah, that makes sense. When could I do that? |
| 25 | RECEPTIONIST | Let me check... we've got a slot this Thursday at 6pm, or otherwise the following Tuesday at 9am. |
| 26 | CALLER | Thursday at 6 works better for me. |
| 27 | RECEPTIONIST | Lovely, I'll pencil you in for that. Oh, and one more thing — is there anything we should know, medically, before your induction? Any injuries, conditions, anything like that? |
| 28 | CALLER | Um, I did have a knee operation a couple of years ago, but it's fully healed now — just thought I'd mention it. |
| 29 | RECEPTIONIST | Thanks for letting us know, I'll add a note to your file so the trainer's aware. Right, I think that's everything — welcome to Riverside Fitness, Daniel! |
| 30 | CALLER | Thanks very much, see you Thursday. |

Lines 10 and 12 are written with letters/numbers spelled out on purpose (e.g. "oh-seven"
instead of "07") — TTS engines often misread digit strings, so this phrasing gets a
cleaner result. The visible transcript students see in the app still shows the natural
written form ("07945 226130") — that's already handled in the code, you don't need to
match it here.

## 3. Export and send it to me

- Export the Clipchamp project as normal (MP4 is fine — you don't need to find an
  audio-only export option).
- Send me the exported file (or its file path if it's easier to hand over that way) and
  I'll pull the audio out, trim any leading/trailing silence, compress it to a small
  MP3, and save it to `audio/ielts/section1/gym-membership-enquiry.mp3` — the exact
  path the app is already expecting.
- Total runtime should land somewhere around 3–4 minutes, which is normal for a
  Section 1 clip.

## If you'd rather record it live instead of using Clipchamp's TTS

The same table works for that — read RECEPTIONIST/CALLER lines yourself (or with someone
else) into any recorder, and hand me the resulting file the same way. Nothing else about
the process changes.
