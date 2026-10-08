/* ApexPrep Academy — IELTS Academic & General Suite data module
   23 of 30 study notes are fully authored (Pack 1 plus the Pack 2 Reading/Writing notes). The remaining 7 (Pack 2: Listening/Speaking/Strategy) are
   listed as roadmap stubs with comingSoon:true — see schema notes at the bottom
   for how to complete them without touching app.js. */
window.APEX_DATA = window.APEX_DATA || {};

window.APEX_DATA.ielts = {

  notes: [
    // ===================== PACK 1 — FULLY AUTHORED (15) =====================
    {
      id: "ielts-01", title: "Writing Task 1 (Academic): Line Graphs & Trends", skill: "Writing",
      category: "writing-t1", bandFocus: "6.5–9.0", comingSoon: false,
      tags: ["writing task 1", "line graph", "trends", "academic"],
      summary: "Describing change over time with accurate trend and data language — the Band 9 template.",
      body: [
        { heading: "Task Overview", html: "You have 20 minutes to describe a line graph in at least 150 words. You are NOT asked for an opinion — only an objective summary of the visual data. Task Achievement (TA) is scored on whether you accurately select and report the <em>main</em> features and trends, not every single data point." },
        { heading: "The Four-Paragraph Structure", html: "<strong>1. Introduction</strong> — paraphrase the task question (never copy it). <strong>2. Overview</strong> — 2 sentences, no numbers, stating the 1–2 most striking overall trends. This single paragraph is worth roughly as much as the rest of the task combined for TA — most Band 5–6 answers skip it entirely. <strong>3–4. Body paragraphs</strong> — group similar data logically (e.g. rising lines together, falling/stable lines together) and support with specific figures." },
        { heading: "Trend Language Bank", html: "<strong>Verbs (rise):</strong> increase, rise, climb, grow, surge, soar (dramatic), edge up (small). <strong>Verbs (fall):</strong> decrease, decline, drop, fall, plummet, plunge (dramatic), dip (small, temporary). <strong>Verbs (stable):</strong> remain stable/steady, level off, plateau, stagnate. <strong>Adverbs (rate/degree):</strong> sharply, dramatically, steadily, gradually, slightly, marginally. <strong>Nouns:</strong> a sharp rise, a steady decline, a gradual increase, a slight fluctuation." },
        { heading: "Band 9 Model Answer", html: "<em>Task: The graph below shows the number of visitors (in millions) to three London museums between 2010 and 2020.</em>" }
      ],
      modelAnswer: {
        text: "The line graph illustrates how visitor numbers at three major London museums changed over an eleven-year period from 2010 to 2020.\n\nOverall, all three museums experienced a general upward trend in visitor numbers over most of the period, although a sharp and unprecedented decline is visible for all of them at the very end, corresponding to 2020. The Natural History Museum consistently attracted the highest number of visitors throughout.\n\nIn 2010, the Natural History Museum welcomed approximately 4.5 million visitors, compared to around 3 million at the Science Museum and just 2 million at the Design Museum. Over the following eight years, all three figures rose steadily, with the Natural History Museum reaching a peak of roughly 6 million visitors by 2018. The Science Museum followed a broadly similar, if less pronounced, trajectory, climbing to approximately 4.5 million in the same year, while the Design Museum grew at a comparatively modest pace, edging up to just over 2.5 million.\n\nFrom 2019 onwards, however, all three museums saw a dramatic reversal of this pattern. Visitor numbers plummeted across the board, with the Natural History Museum falling to under 1 million by 2020 — its lowest point in the entire period. The other two museums mirrored this sudden collapse, converging at similarly low figures by the end of the timeframe.",
        bandAnnotation: "TA: Clear overview identifying both the shared upward trend and the shared 2020 collapse, plus the standout feature (NHM's consistent lead). CC: Logical grouping (rise phase, then reversal phase) with fluent linking (however, while, with). LR: Precise, varied trend vocabulary (plummeted, edging up, converging) without repetition. GRA: A wide range of complex structures (relative clauses, participle clauses 'corresponding to', 'reaching a peak') used accurately."
      },
      turkishL1Note: "Turkish learners often begin Task 1 with an opinion or a cause ('This is because...') — Task 1 is descriptive only; save analysis and causes for Task 2. Also watch for a missing overview paragraph, the single biggest TA-cost error for this group."
    },

    {
      id: "ielts-02", title: "Writing Task 2: Opinion Essays (Agree/Disagree)", skill: "Writing",
      category: "writing-t2", bandFocus: "6.5–9.0", comingSoon: false,
      tags: ["writing task 2", "opinion essay", "agree disagree", "academic"],
      summary: "Building a clear, consistent position and a logical four-paragraph argument in 40 minutes.",
      body: [
        { heading: "Task Overview", html: "You have 40 minutes and at least 250 words. The examiner must be able to identify your position from the introduction onward, and that position must not shift or contradict itself later — inconsistency is one of the fastest ways to cap Task Response (TA) at Band 6 or below, regardless of language quality." },
        { heading: "The Thesis Statement Formula", html: "State the topic + your clear position + a one-clause preview of your two main reasons. Example: <em>'While some argue that university education should be free for all students, I firmly believe that a means-tested funding system is fairer, primarily because it targets resources more effectively and preserves institutional quality.'</em>" },
        { heading: "Four-Paragraph Structure", html: "<strong>1. Introduction</strong> — paraphrase + thesis statement. <strong>2. Body 1</strong> — first reason + explanation + specific example. <strong>3. Body 2</strong> — second reason + explanation + specific example. <strong>4. Conclusion</strong> — restate position (different words) + brief summary of reasons. No new ideas in the conclusion." },
        { heading: "Topic Sentence Method", html: "Start every body paragraph with a topic sentence stating the single main idea of that paragraph, then develop it with: explanation ('This is because...') → example ('For instance...') → result/link back to the thesis." }
      ],
      modelAnswer: {
        prompt: "Some people believe that unpaid community service should be a compulsory part of high school education. To what extent do you agree or disagree?",
        text: "It has been suggested that all secondary school students should be required to complete a fixed number of unpaid hours serving their local community before graduation. I largely agree with this proposal, primarily because it builds practical civic skills and exposes young people to social realities that classroom learning alone cannot provide.\n\nFirstly, mandatory service teaches responsibility and teamwork in a way that few academic subjects can replicate. When a student is required to show up consistently to help at a food bank or tutor younger children, they learn accountability to people outside their immediate family and friendship circle. For example, schools in several Canadian provinces that have implemented mandatory volunteer hours report that participating students demonstrate improved time-management skills and a stronger sense of belonging within their communities, benefits that persist well beyond the specific hours logged.\n\nSecondly, compulsory service exposes students to social issues that many would otherwise never encounter directly. A teenager from a comfortable background who spends time at a homeless shelter or an elderly care home gains a form of social awareness that lectures on inequality cannot replicate. This exposure often shapes career choices and civic attitudes well into adulthood; indeed, several long-term studies have linked mandatory youth volunteering to higher rates of civic engagement, such as voting, in later life.\n\nHowever, critics rightly point out that forcing participation may undermine the very spirit of volunteerism, since students who are compelled to serve may do so resentfully rather than genuinely. This concern can largely be addressed through thoughtful implementation — allowing students to choose from a range of approved organisations, for instance, preserves an element of autonomy while still guaranteeing the exposure.\n\nIn conclusion, while a compulsory scheme carries some risk of resentment, the practical and civic benefits of mandatory service make it a worthwhile addition to secondary education, provided students retain some choice over how they fulfil the requirement.",
        bandAnnotation: "TA: Clear, sustained position ('largely agree'); addresses the counter-argument without abandoning the thesis — a Band 7+ marker. CC: Each body paragraph opens with a clear topic sentence and closes by linking back to the thesis. LR: Precise collocations ('civic engagement', 'sense of belonging', 'thoughtful implementation') with no repetition of 'good/bad'. GRA: A mix of complex sentences (relative clauses, conditional 'This concern can largely be addressed through...') with high accuracy."
      },
      turkishL1Note: "A frequent Turkish L1 pattern is stating a position in the introduction, then unconsciously arguing 'both sides equally' in the body — this reads as inconsistent to an examiner even if each individual sentence is grammatically fine. Reread your thesis before writing each body paragraph to check it still supports the same side."
    },

    {
      id: "ielts-03", title: "Writing Task 2: Discussion Essays (Both Views)", skill: "Writing",
      category: "writing-t2", bandFocus: "6.5–9.0", comingSoon: false,
      tags: ["writing task 2", "discussion essay", "both views", "academic"],
      summary: "Presenting two sides fairly before giving your own opinion — a distinct structure from the opinion essay.",
      body: [
        { heading: "Recognising the Task Type", html: "Look for the phrase 'Discuss both views and give your own opinion.' This is NOT the same as an opinion essay — you must give real, balanced weight to both perspectives before stating your own view, usually in the conclusion (though some Band 8+ writers signal their view from the introduction while still developing both views fairly in the body)." },
        { heading: "Four-Paragraph Structure", html: "<strong>1. Introduction</strong> — paraphrase + state that there are two views + (optional) preview your own opinion. <strong>2. Body 1</strong> — View A, developed with reasons/examples as if you believe it. <strong>3. Body 2</strong> — View B, developed equally seriously. <strong>4. Conclusion</strong> — weigh the two views and state your own opinion clearly." },
        { heading: "The Fairness Trap", html: "A common Band 6 ceiling is giving View A one weak sentence and View B a full paragraph, revealing bias too early. Both body paragraphs should be similar in length and developed with equal seriousness, even if you privately disagree with one — your own opinion belongs at the end, not smuggled into the 'wrong side's' paragraph." }
      ],
      modelAnswer: {
        prompt: "Some people think that the government should invest more money in public transport, while others believe building more roads is a better solution to traffic congestion. Discuss both views and give your own opinion.",
        text: "Traffic congestion is a growing concern in cities worldwide, and opinions differ sharply on the best solution: expanding public transport networks or building additional road infrastructure. This essay will examine both perspectives before outlining my own view.\n\nProponents of road expansion argue that new roads and additional lanes provide immediate relief to bottlenecks, allowing existing traffic to flow more freely without requiring commuters to change their habits. This view holds particular appeal for policymakers under pressure to show quick results, since road construction, while disruptive in the short term, can visibly reduce a specific congestion point within a year or two. Furthermore, in regions with low population density, where public transport ridership would likely remain low regardless of investment, expanding roads may represent a more cost-effective use of public funds.\n\nOn the other hand, advocates of public transport investment contend that new roads merely encourage more car use, a phenomenon economists refer to as 'induced demand', meaning that congestion returns within a few years as more drivers take advantage of the improved capacity. Investment in buses, trams and rail, by contrast, offers a long-term structural solution: cities such as Copenhagen and Singapore have demonstrated that a reliable, well-funded public transport network can substantially reduce private car dependency over time, with associated benefits for air quality and urban space that road expansion cannot provide.\n\nIn my view, while road improvements may offer short-term relief in specific circumstances, public transport investment represents the more sustainable long-term strategy for most urban areas. The evidence on induced demand suggests that road expansion alone tends to reproduce the very problem it aims to solve, whereas transport systems that give commuters a genuinely attractive alternative to driving address the root cause of congestion rather than its symptoms.\n\nIn conclusion, although both approaches have situational merit, prioritising public transport investment offers a more durable solution to the underlying problem of urban traffic.",
        bandAnnotation: "TA: Both views receive genuinely balanced development (similar length, real reasons, real examples) before the writer's own opinion is clearly stated. CC: Clear signposting ('Proponents of...', 'On the other hand...', 'In my view...') guides the reader through the discussion structure. LR: Topic-specific vocabulary ('induced demand', 'ridership', 'urban car dependency') used accurately and naturally. GRA: Complex noun phrases and subordination used with control ('a phenomenon economists refer to as...')."
      },
      turkishL1Note: "Watch for calque connectors like 'In addition to this situation' or 'Besides this' used as paragraph openers — replace with natural English discourse markers ('Furthermore', 'By contrast', 'On the other hand') to avoid a Coherence and Cohesion ceiling around Band 6."
    },

    {
      id: "ielts-04", title: "Reading Strategy: Skimming, Scanning & Time Management", skill: "Reading",
      category: "reading", bandFocus: "5.5–9.0", comingSoon: false,
      tags: ["reading strategy", "skimming", "scanning", "time management"],
      summary: "The skim-scan-read sequence and a realistic 60-minute time budget across three passages.",
      body: [
        { heading: "The Skim-Scan-Read Sequence", html: "<strong>1. Skim (1–2 min per passage)</strong> — read the title, first and last sentence of each paragraph, to build a rough mental map of what each paragraph covers. Do not read every word. <strong>2. Scan</strong> — for a specific question, search only for the relevant keyword/paraphrase area located during skimming, rather than rereading the whole passage. <strong>3. Close-read</strong> — only the 2–3 sentences around a located answer get careful, word-by-word attention." },
        { heading: "A Realistic 60-Minute Budget", html: "20 minutes per passage is the standard target, but passage 3 is usually hardest — many high-scoring candidates use 17/20/23 minutes across passages 1/2/3 rather than a strict even split. Always transfer answers as you go; never save all transfer for the end, since IELTS Reading (paper-based) gives no extra transfer time." },
        { heading: "Prioritise Question Order Strategically", html: "Within a passage, question types that follow the passage's paragraph order (TFNG, Matching Information) should generally be done in order — this lets your eyes move forward through the text only once. Question types that require the whole passage (Matching Headings) are often more efficient done last, once you already know each paragraph's content from earlier questions." }
      ],
      commonMistakes: [
        "Reading the whole passage word-for-word before looking at any question — the single biggest time-waster.",
        "Spending more than 3 minutes stuck on one question; guess-and-flag, then return only if time remains.",
        "Turkish L1 note: many learners read left-to-right at a fixed academic-reading pace learned for L1 texts; practising scanning specifically as a distinct, faster eye-movement skill (not just 'reading faster') closes this gap quickly."
      ],
      practiceTip: "Take any passage you've already read carefully once. Time yourself finding five specific facts by scanning only — no rereading from the start — and compare your time to your first read."
    },

    {
      id: "ielts-05", title: "True / False / Not Given — The Complete Framework", skill: "Reading",
      category: "reading", bandFocus: "5.5–9.0", comingSoon: false,
      tags: ["tfng", "true false not given", "reading question types"],
      summary: "The single highest-value framework for the question type that causes the most band loss.",
      body: [
        { heading: "The Core Logic", html: "<strong>TRUE</strong> — the statement matches passage information (often paraphrased). <strong>FALSE</strong> — the statement contradicts the passage. <strong>NOT GIVEN</strong> — the passage does not mention this specific information at all, so it can be neither confirmed nor denied — even if it 'seems likely' to be true based on general knowledge." },
        { heading: "The Most Common Trap", html: "Candidates confuse FALSE and NOT GIVEN far more than TRUE errors. Ask: 'Does the passage directly contradict this?' → FALSE. 'Does the passage simply never address this specific claim?' → NOT GIVEN, even if a related topic is discussed nearby." },
        { heading: "Watch for Qualifying Words", html: "Absolute words in the statement (always, never, all, only, completely) versus softer words in the passage (often, most, generally) frequently create a FALSE answer, because the statement over-claims what the passage actually says. Comparative and superlative claims ('the most important factor') are Not Given traps if the passage lists several factors without ranking them." },
        { heading: "A Worked Example", html: "Passage extract: <em>'Many researchers now believe that regular exercise can improve short-term memory, although the long-term cognitive benefits remain the subject of ongoing debate.'</em><br>Statement: <em>'Scientists agree that exercise improves long-term memory.'</em> → <strong>FALSE</strong> (the passage says this is 'debated', not agreed, and specifically about long-term, not short-term, effects — a double contradiction)." }
      ],
      commonMistakes: [
        "Choosing FALSE when the correct answer is NOT GIVEN, because the topic is 'nearby' in the text even though the specific claim isn't addressed.",
        "Being influenced by outside/general knowledge rather than only what the passage states.",
        "Missing negation words (rarely, seldom, unless) that flip a statement's logical value."
      ],
      practiceTip: "Take three TFNG questions you got wrong in past practice and, for each, write one sentence explaining exactly which word in the statement caused the trap."
    },

    {
      id: "ielts-06", title: "Matching Headings — Paraphrase Traps", skill: "Reading",
      category: "reading", bandFocus: "6.0–9.0", comingSoon: false,
      tags: ["matching headings", "reading question types", "paraphrase"],
      summary: "Matching a paragraph's main idea (not its topic detail) to a heading — with more headings than paragraphs.",
      body: [
        { heading: "Main Idea, Not Just Topic", html: "A heading matches the paragraph's <strong>overall purpose or argument</strong>, not just a topic word mentioned inside it. A paragraph that mentions 'cost' in one sentence is not automatically matched to a heading about cost if the paragraph's main point is actually about safety." },
        { heading: "Method: First & Last Sentence First", html: "Read the first and last sentence of the paragraph carefully — these usually frame the main idea. Then skim the middle only to confirm. This is faster and more accurate than reading the whole paragraph in detail before deciding." },
        { heading: "There Are Always Extra Headings", html: "Because there are more headings than paragraphs, at least 2–3 headings are deliberately wrong distractors, usually built from a paraphrase of a MINOR detail within a paragraph rather than its main idea — this is the single most common trap in this question type." },
        { heading: "Cross-Elimination", html: "Once a heading is used, cross it out. If you're stuck between two headings for one paragraph, check whether either heading fits a different, still-unmatched paragraph better — headings are unique, so this process of elimination often resolves ambiguity." }
      ],
      commonMistakes: [
        "Matching a heading based on one repeated keyword rather than the paragraph's actual main idea.",
        "Forgetting that headings are used only once — reusing a 'good fit' from an earlier paragraph.",
        "Attempting Matching Headings questions before understanding roughly what each paragraph covers — do a light skim of the whole passage first."
      ],
      practiceTip: "For a passage you've read before, cover the given headings and write your own one-line heading for each paragraph first — then compare your version to the exam's paraphrased options."
    },

    {
      id: "ielts-07", title: "Listening Sections 1 & 2: Form Completion & Prediction", skill: "Listening",
      category: "listening", bandFocus: "5.5–8.0", comingSoon: false,
      tags: ["listening", "section 1", "section 2", "form completion", "prediction"],
      summary: "Everyday social and informational contexts — the highest-scoring sections if strategy is solid.",
      body: [
        { heading: "Section Profiles", html: "<strong>Section 1</strong> — a conversation between two speakers in an everyday social context (e.g. booking a hotel, enrolling in a course). <strong>Section 2</strong> — a monologue giving information about a facility or event (e.g. a museum tour, a local festival). Both are considered the 'easier half' of the Listening test and should be a near-perfect score for a Band 7+ target." },
        { heading: "Predict Before You Listen", html: "Always use the given time before audio starts to read ahead and predict: word type needed (name, number, date, place), likely spelling issues, and plural/singular clues. For a form field 'Postcode: ___', you already know to expect letters and numbers, which primes your ear before the audio begins." },
        { heading: "Common Traps in These Sections", html: "Speakers often self-correct ('It's on Baker Street — no wait, sorry, Barker Street') — the corrected version is the answer, so keep listening past the first-mentioned option. Spelling is frequently given aloud letter-by-letter for names; practise the English alphabet at natural speaking speed, since B/P/D and M/N confusion is a common cause of lost marks even for accurate listeners." }
      ],
      commonMistakes: [
        "Writing the FIRST number/word heard instead of waiting for a correction or a more specific later mention.",
        "Losing your place after missing one answer — always move on immediately; a missed question costs 1 mark, but chasing it usually costs 2–3 more.",
        "Ignoring the stated word limit (e.g. 'NO MORE THAN TWO WORDS') — writing three words when the limit is two results in the entire answer being marked wrong, even if the content is correct."
      ],
      practiceTip: "Practise writing dictated addresses, phone numbers, and spelled names at natural native speed — this specific micro-skill accounts for a disproportionate number of Section 1 errors."
    },

    {
      id: "ielts-08", title: "Listening Sections 3 & 4: Academic Lecture Mapping", skill: "Listening",
      category: "listening", bandFocus: "6.0–9.0", comingSoon: false,
      tags: ["listening", "section 3", "section 4", "academic lecture"],
      summary: "Multi-speaker academic discussions and a single extended lecture — the highest-difficulty sections.",
      body: [
        { heading: "Section Profiles", html: "<strong>Section 3</strong> — a discussion between 2–4 speakers in an academic context (e.g. students discussing an assignment with a tutor); requires tracking who says what and distinguishing agreement from disagreement. <strong>Section 4</strong> — a single unbroken academic lecture with no natural conversational pauses, testing sustained concentration for roughly five minutes." },
        { heading: "Mapping the Lecture Structure", html: "Before Section 4 starts, quickly scan the question set for structural signal words (Introduction / Causes / Effects / Solutions / Case study) — these often mirror the lecture's own signposting language ('Firstly... Turning now to... Finally...'), letting you anticipate roughly where in the talk each answer will appear." },
        { heading: "Handling Speaker Disagreement in Section 3", html: "Distinguish which speaker holds which opinion, especially when one speaker initially agrees then partially disagrees ('That's true, but I still think...') — questions frequently test the FINAL, qualified opinion rather than the first reaction." }
      ],
      commonMistakes: [
        "Losing concentration midway through Section 4's unbroken monologue — practise sustained 5-minute listening specifically, not just short clips.",
        "Attributing an opinion to the wrong speaker in Section 3's multi-speaker format.",
        "Getting stuck trying to understand every word rather than tracking the answer-relevant structure signposted by the question paper."
      ],
      practiceTip: "After listening to any academic podcast segment, write a 4-line structural outline (Intro/Main point 1/Main point 2/Conclusion) purely from listening, without reading a transcript."
    },

    {
      id: "ielts-09", title: "Speaking Part 1: Extended Answers (The AREA Framework)", skill: "Speaking",
      category: "speaking", bandFocus: "5.5–8.0", comingSoon: false,
      tags: ["speaking part 1", "area framework", "fluency"],
      summary: "Turning short factual answers into natural, extended responses without over-rehearsing.",
      body: [
        { heading: "Why Short Answers Cap Your Band", html: "Part 1 asks familiar, personal questions (home, work/study, hobbies, daily routine). A one-sentence answer ('I live with my family') gives the examiner almost nothing to assess for Fluency & Coherence or Lexical Resource — extension is not optional, it's the whole point of the task." },
        { heading: "The AREA Framework", html: "<strong>A</strong>nswer the question directly. <strong>R</strong>eason — briefly explain why. <strong>E</strong>xample — give one specific, concrete example or detail. <strong>A</strong>dd a related comment or feeling to close naturally.<br><br>Example — Q: 'Do you enjoy cooking?'<br>A: 'Yeah, I actually really enjoy it.' (Answer)<br>R: 'It's one of the few times in the day I can completely switch off from screens.' (Reason)<br>E: 'Last weekend, for instance, I spent almost two hours making a proper Turkish menemen from scratch just for fun.' (Example)<br>A: 'It's become a bit of a stress-reliever for me, to be honest.' (Add)" },
        { heading: "Avoiding the 'Memorised Speech' Trap", html: "Examiners are trained to detect rehearsed, generic answers that don't quite fit the actual question asked. AREA is a flexible thinking framework, not a script to memorise word-for-word — practise applying the structure spontaneously to new, unpredictable Part 1 topics." }
      ],
      commonMistakes: [
        "Giving a one-word or one-sentence answer and stopping, forcing the examiner to ask another question to get any material to assess.",
        "Reciting a clearly pre-memorised answer that doesn't match the specific question — examiners are trained to spot and penalise this.",
        "Turkish L1 note: rising, list-like intonation transferred from Turkish speech patterns can make fluent English sound hesitant or unfinished to an examiner's ear — practising AREA answers aloud (not just planning them silently) helps fix this."
      ],
      practiceTip: "Record yourself answering five random Part 1 questions using AREA, without any prior preparation, then listen back and check each answer genuinely has all four AREA elements."
    },

    {
      id: "ielts-10", title: "Speaking Part 2: Cue Card Strategy & the 1-Minute Plan", skill: "Speaking",
      category: "speaking", bandFocus: "6.0–8.5", comingSoon: false,
      tags: ["speaking part 2", "cue card", "long turn"],
      summary: "Structuring a 2-minute 'long turn' using the full 1-minute planning time effectively.",
      body: [
        { heading: "Task Structure", html: "You get a cue card with a topic and 3–4 bullet prompts, 1 minute to plan (with paper and pencil provided), and must speak for 1–2 minutes without interruption. The examiner will not speak during your turn, so pacing is entirely your responsibility." },
        { heading: "The 1-Minute Plan (4 Bullet Notes, Not Full Sentences)", html: "Write single words or short phrases, one per bullet point on the card, plus a note for tense (many cue cards ask about the past, e.g. 'Describe a time when...' — decide your timeframe immediately). Do not attempt to write full sentences; you will run out of time and end up reading rather than speaking naturally." },
        { heading: "A Simple 4-Part Content Structure", html: "<strong>1. Set the scene</strong> (who/what/when/where). <strong>2. Give the main story/description</strong> — the bulk of your 2 minutes. <strong>3. Add a specific detail or example</strong> that makes it feel real, not generic. <strong>4. Close with a reflection</strong> (how you felt, why it mattered, what changed) — this naturally signals a strong ending to the examiner rather than trailing off." },
        { heading: "If You Run Out of Things to Say", html: "Add a related but natural tangent: a comparison to a similar experience, what you'd do differently now, or how a friend/family member reacted — running past 1 minute without excessive padding is normal and expected." }
      ],
      commonMistakes: [
        "Writing full sentences during planning time and then reading them aloud in a flat, unnatural rhythm.",
        "Ignoring one or two of the bullet points entirely — try to touch on all of them, even briefly.",
        "Stopping after 45–60 seconds — this signals underdevelopment and limits both Fluency & Coherence and Lexical Resource scoring."
      ],
      practiceTip: "Set a timer and give yourself exactly 1 minute to plan (bullet notes only) and 2 minutes to speak on a randomly chosen cue card topic — record it and check you covered all 4 structural parts."
    },

    {
      id: "ielts-11", title: "Speaking Part 3: Abstract Discussion & Idea Development", skill: "Speaking",
      category: "speaking", bandFocus: "6.5–9.0", comingSoon: false,
      tags: ["speaking part 3", "abstract discussion", "idea development"],
      summary: "Moving from personal experience to broader, idea-based discussion — the hardest part for most candidates.",
      body: [
        { heading: "What Changes in Part 3", html: "Part 3 questions extend the Part 2 topic into abstract, societal, or comparative territory ('How has X changed in your country over the last 20 years?', 'Do you think Y will become more common in the future?'). Personal anecdotes are no longer the main content — the examiner wants to hear you reason, compare, speculate, and evaluate." },
        { heading: "Idea-Development Scaffolding", html: "For any 'why/how has this changed/what will happen' question: state a general trend or claim → give one clear reason → acknowledge a counterpoint or exception → give a brief speculative conclusion. This mirrors academic paragraph structure translated into spoken language." },
        { heading: "Hedging Language for Speculation", html: "Native-like abstract discussion relies heavily on hedging: 'It's likely that...', 'I'd imagine that...', 'To some extent, I think...', 'It really depends on...'. Overusing flat, absolute claims ('It is definitely true that...') for every answer sounds unnatural and under-uses a key Band 7+ language resource." }
      ],
      commonMistakes: [
        "Answering an abstract 'in society' question with only a personal anecdote, without generalising to the wider question asked.",
        "Giving a one-sentence opinion with no reasoning — Part 3 specifically rewards developed, multi-step reasoning.",
        "Turkish L1 note: learners sometimes over-hedge in Turkish-influenced ways ('maybe, I don't know, perhaps') that read as uncertainty rather than natural academic speculation — practise confident hedging language instead ('It's likely that...', 'I'd argue that...')."
      ],
      practiceTip: "Take one Part 2 cue card topic and write three Part 3-style 'wider society' follow-up questions for it yourself, then answer each using the scaffold above."
    },

    {
      id: "ielts-12", title: "Band 6→7 Vocabulary Upgrade: Topic Collocations", skill: "Vocabulary & Grammar",
      category: "vocab-grammar", bandFocus: "6.0–7.5", comingSoon: false,
      tags: ["vocabulary", "collocations", "band 7", "lexical resource"],
      summary: "Precise, topic-specific collocations that separate Band 6 vocabulary from Band 7+.",
      body: [
        { heading: "Why 'Upgrading' Beats 'Adding' Vocabulary", html: "Lexical Resource (LR) rewards precision and naturalness, not rare or complicated words used incorrectly. The most efficient path from Band 6 to 7 is replacing common, slightly imprecise words with more specific collocations you already understand — not memorising obscure vocabulary lists." },
        { heading: "Environment", html: "Band 6: 'bad for the environment', 'pollution is a big problem'. Band 7+: 'environmentally damaging / detrimental to ecosystems', 'a pressing environmental concern', 'carbon emissions', 'unsustainable practices', 'biodiversity loss'." },
        { heading: "Education", html: "Band 6: 'learn a lot', 'get good marks'. Band 7+: 'acquire practical skills', 'academic achievement', 'a rigorous curriculum', 'rote learning' (vs) 'critical thinking', 'higher education institutions'." },
        { heading: "Technology & Society", html: "Band 6: 'technology changes things fast'. Band 7+: 'rapid technological advancement', 'digital transformation', 'a double-edged sword', 'widen/narrow the digital divide', 'data privacy concerns'." },
        { heading: "Economy & Work", html: "Band 6: 'people don't have jobs', 'the economy is bad'. Band 7+: 'unemployment rates', 'economic downturn/recession', 'job security', 'a competitive job market', 'income inequality'." }
      ],
      commonMistakes: [
        "Inserting a sophisticated word from a vocabulary list into the wrong collocation — examiners notice unnatural pairings immediately, and this can cost more than it gains.",
        "Turkish L1 note: direct word-for-word translation of Turkish collocations often produces phrases that are grammatically fine but not how English speakers actually pair these words — always learn new vocabulary in full collocational chunks, never as single isolated words."
      ],
      practiceTip: "Take an essay you wrote previously and highlight five 'Band 6' vocabulary choices, then rewrite each using a more precise collocation from this note or your own notes."
    },

    {
      id: "ielts-13", title: "Grammar-Band Mapping: Structures That Unlock Band 7", skill: "Vocabulary & Grammar",
      category: "vocab-grammar", bandFocus: "6.0–8.0", comingSoon: false,
      tags: ["grammar", "band 7", "gra", "complex sentences"],
      summary: "Which specific grammar structures the GRA descriptor actually rewards at each band, with before/after examples.",
      body: [
        { heading: "Why This Matters More Than 'Grammar Accuracy' Alone", html: "GRA (Grammatical Range and Accuracy) scores BOTH range and accuracy — a candidate who writes only simple sentences with zero errors is still capped around Band 5–6, because 'range' is explicitly required for Band 7+. The goal is controlled complexity, not maximum complexity." },
        { heading: "Band 5 → Band 7 Structure Upgrades", html: "<strong>Relative clauses:</strong> 'The plan is good. It saves money.' → 'The plan, which saves money, is generally well received.' <strong>Passive voice for objectivity:</strong> 'People believe the policy failed.' → 'The policy is widely believed to have failed.' <strong>Conditionals for argumentation:</strong> 'If we don't act, problems will get worse.' → 'Were governments to delay action further, the resulting problems would likely prove far more costly to resolve.' <strong>Participle clauses:</strong> 'The report was published last year. It highlighted several risks.' → 'Published last year, the report highlighted several risks.'" },
        { heading: "Cumulative/Reduced Clauses for Fluency", html: "Combining ideas with '-ing' clauses avoids a string of short, choppy sentences: 'The company reduced costs. This allowed it to lower prices.' → 'By reducing costs, the company was able to lower its prices.'" }
      ],
      commonMistakes: [
        "Forcing complex structures inaccurately just to 'show range' — one accurate complex sentence is worth more than three inaccurate ones.",
        "Turkish L1 note: because Turkish embeds relative-clause-like information before the noun, learners sometimes avoid English relative clauses altogether even when they understand the rule — deliberately including at least 2–3 per essay builds the habit."
      ],
      practiceTip: "Take three simple sentences from a recent practice essay and rewrite each using a different structure from this note: one relative clause, one passive, one participle clause."
    },

    {
      id: "ielts-14", title: "Turkish L1 Error Patterns — Full Diagnostic Guide", skill: "Vocabulary & Grammar",
      category: "vocab-grammar", bandFocus: "All bands", comingSoon: false,
      tags: ["turkish l1", "error patterns", "diagnostic", "gra", "lr"],
      summary: "A consolidated diagnostic map of the ten most predictable Turkish-to-English transfer errors in IELTS performance.",
      body: [
        { heading: "How to Use This Guide", html: "These are not random mistakes — they are systematic, predictable patterns that arise from real structural differences between Turkish and English. Framing them this way (a predictable pattern, not a personal deficiency) also helps students correct them faster and with less discouragement." },
        { heading: "The Ten Core Patterns", html: "<table class='diag-table'><tr><th>Domain</th><th>Typical Error</th><th>Band Impact</th></tr>" +
          "<tr><td>Articles</td><td>Omitting 'the/a' (Turkish has no articles)</td><td>GRA capped ~5.5</td></tr>" +
          "<tr><td>Word order</td><td>SOV-influenced word order in complex sentences</td><td>GRA capped ~5.5</td></tr>" +
          "<tr><td>Verb tenses</td><td>Over-reliance on present simple; avoidance of perfect aspects</td><td>GRA capped ~6.0</td></tr>" +
          "<tr><td>Passive voice</td><td>Under-use in formal writing (rarer in spoken Turkish)</td><td>GRA / LR both affected</td></tr>" +
          "<tr><td>Relative clauses</td><td>Avoidance due to pre-nominal Turkish equivalent structure</td><td>GRA capped ~6.0</td></tr>" +
          "<tr><td>Connectors</td><td>Direct translation of Turkish discourse markers</td><td>CC capped ~6.0</td></tr>" +
          "<tr><td>Lexical chunks</td><td>Word-for-word translation of Turkish collocations</td><td>LR capped ~5.5</td></tr>" +
          "<tr><td>Prepositions</td><td>Postposition→preposition mapping errors</td><td>GRA accuracy</td></tr>" +
          "<tr><td>Pronunciation</td><td>Final consonant cluster reduction; vowel harmony transfer</td><td>Speaking fluency</td></tr>" +
          "<tr><td>Register</td><td>Formal/informal register confusion</td><td>TA / LR</td></tr></table>" },
        { heading: "Self-Diagnostic Routine", html: "After writing or recording any practice task, check specifically for these ten patterns in order, rather than reading generally for 'mistakes'. Most students carry 2–4 dominant patterns, not all ten equally — identify your personal top 3 and target them directly for the fastest band gains." }
      ],
      commonMistakes: [
        "Treating every error as random rather than checking it against this list — most Turkish L1 errors cluster predictably and respond well to targeted, not general, correction.",
        "Correcting only written grammar while ignoring the same patterns in spontaneous speech, where they are usually more frequent."
      ],
      practiceTip: "Mark up your last written or recorded practice task using only this table's ten categories as your checklist — most students find 2–3 patterns account for the majority of their errors."
    },

    {
      id: "ielts-15", title: "IELTS Test Day Strategy & Time Management", skill: "Strategy",
      category: "strategy", bandFocus: "All bands", comingSoon: false,
      tags: ["test day", "strategy", "time management", "exam technique"],
      summary: "A section-by-section execution plan for the day itself, when nerves and time pressure are highest.",
      body: [
        { heading: "Listening (≈30 min + transfer time)", html: "Use every gap between sections to read ahead, not to relax — the recording gives you time before each section starts specifically for this. Never leave a blank answer; an educated guess costs nothing, a blank guarantees zero." },
        { heading: "Reading (60 minutes, no extra transfer time)", html: "Decide your time budget before starting (e.g. 17/20/23 minutes across the three passages) and stick to it with a watch, not a feeling. If a question is taking more than ~90 seconds with no progress, mark your best guess and move on — you can return only if time remains at the end." },
        { heading: "Writing (60 minutes total: 20 + 40)", html: "Start with Task 2 if you tend to run out of time and it's worth double the marks — but only if you've practised this order beforehand; test day is not the time to try a new strategy for the first time. Leave 2–3 minutes at the end of each task to check articles, subject-verb agreement, and word count." },
        { heading: "Speaking (11–14 minutes)", html: "Arrive with a calm, rehearsed opening routine (not rehearsed content) — a few slow breaths before entering the room measurably reduces the physiological anxiety response and improves initial fluency in Part 1." }
      ],
      commonMistakes: [
        "Trying an unfamiliar new time-management strategy for the first time on the actual test day rather than in practice.",
        "Spending so long perfecting Task 1 that Task 2 (worth twice the marks) is rushed or incomplete.",
        "Leaving Listening or Reading questions blank instead of guessing — there is no penalty for a wrong guess."
      ],
      practiceTip: "Do one full timed mock under real conditions (no pausing, phone away) within the final two weeks before your test — time-pressure familiarity is itself a trainable skill, not just content knowledge."
    },

    // ===================== PACK 2 — ROADMAP STUBS (15) =====================
    {
      id: "ielts-16",
      title: "Writing Task 1: Bar & Pie Charts — Data Selection Framework",
      skill: "Writing",
      category: "writing-t1",
      bandFocus: "5.5–9.0",
      comingSoon: false,
      tags: ["writing task 1", "bar chart", "pie chart", "data selection", "academic"],
      summary: "Choosing which figures matter, grouping categories logically, and reporting them with accurate approximation language.",
      body: [
        {
          heading: "What the Examiner Is Really Marking",
          html: "<p>Task 1 has 20 minutes and a 150-word minimum. Task Achievement (TA) does <strong>not</strong> reward reporting every number. It rewards <em>selecting</em> the key features, reporting them accurately, and giving a clear overview. A response that lists all twenty figures in the order they appear is unlikely to score above Band 5 for Task Achievement because nothing has been selected.</p>"
        },
        {
          heading: "The Select–Group–Compare Method",
          html: "<ul><li><strong>Select:</strong> pick the highest value, the lowest value, and the biggest change (if there are two time points). That is usually about 4–8 figures in total.</li><li><strong>Group:</strong> put categories that behave alike in the same sentence or paragraph (for example, the two age groups that rose slightly versus the one that rose sharply).</li><li><strong>Compare:</strong> use a ratio or a gap instead of repeating raw numbers: <em>'roughly double'</em>, <em>'a third lower'</em>, <em>'a gap of 15 percentage points'</em>.</li></ul>"
        },
        {
          heading: "Writing the Overview (No Numbers)",
          html: "<p>The overview is a separate paragraph that states the 2 most important patterns in words only. Weak: <em>'The chart shows many different figures.'</em> Strong: <em>'Overall, participation rose in every group, and the largest increase occurred among the oldest adults.'</em> Place it directly after your introduction so the examiner cannot miss it.</p>"
        },
        {
          heading: "Approximation and Data Language",
          html: "<ul><li><strong>Approximating:</strong> <em>just over, roughly, approximately, a little under, close to, nearly</em>.</li><li><strong>Reporting a share:</strong> <em>accounted for, made up, represented, stood at, was responsible for</em>.</li><li><strong>Comparing:</strong> <em>twice as high as, considerably lower than, marginally ahead of, in contrast, whereas</em>.</li><li><strong>Units:</strong> a <em>percentage</em> is a number out of 100; a <em>percentage point</em> is the difference between two percentages. Writing '15 per cent' when you mean a 15-point gap changes the meaning.</li></ul>"
        },
        {
          heading: "Pie Charts and Multiple Charts",
          html: "<p>A pie chart shows parts of a whole, so the natural language is rank and share: <em>'the largest share'</em>, <em>'a quarter'</em>, <em>'the remaining'</em>. With two pies for different years, describe the biggest shift first, then the categories that stayed stable. With a bar chart <em>and</em> a table, use the table to support one or two points rather than writing a second report.</p>"
        }
      ],
      modelAnswer: {
        prompt: "The bar chart shows the percentage of adults in four age groups who exercised at least three times a week in a European country in 2005 and 2020. Data (2005 → 2020): ages 18–29: 45% → 52%; ages 30–44: 38% → 41%; ages 45–59: 30% → 35%; ages 60 and over: 22% → 37%. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        text: "The bar chart compares the proportion of adults in four age groups who exercised at least three times a week in a European country in 2005 and 2020.\n\nOverall, regular exercise became more common in every age group, and the increase was most striking among the oldest adults, who moved from having the lowest participation to a level close to that of the middle-aged groups.\n\nIn 2005, young adults aged 18 to 29 were the most active, at 45 per cent, followed by the 30 to 44 group on 38 per cent. Participation then fell steadily with age, reaching just 22 per cent among people aged 60 and over.\n\nBy 2020, the youngest group had risen modestly to 52 per cent and remained the most active, while the 30 to 44 and 45 to 59 groups gained only three and five percentage points respectively, reaching 41 and 35 per cent. The most dramatic change occurred among the over-60s, whose figure climbed by 15 points to 37 per cent, overtaking the 45 to 59 group.",
        bandAnnotation: "TA: A clear overview with no numbers, followed by selected figures (highest, lowest, biggest change) rather than a full data dump. CC: Paragraphs are organised by time period, with 'overtaking' creating a natural link between the final two points. LR: Accurate data vocabulary ('modestly', 'dramatic', 'percentage points') and correct use of 'per cent' versus 'points'. GRA: A range of structures, including a relative clause ('who moved from...'), a participle phrase ('reaching just 22 per cent') and 'while' contrast, all accurate."
      },
      turkishL1Note: "Writers at this level may tend to move through the chart one figure at a time in the order shown. Group instead: put the categories that behave alike in one sentence. Remember too that Turkish has no articles, so check 'the' and 'a' in comparisons: 'the oldest adults', 'a steady rise'.",
      commonMistakes: [
        "Reporting every figure in the chart instead of selecting the key features, which gives no overview and leaves the examiner nothing to credit for TA.",
        "Putting numbers in the overview. Numbers belong in the body paragraphs; the overview describes patterns in words only.",
        "Confusing 'percentage' and 'percentage points', for example writing that a rise from 22% to 37% is 'a 15 per cent increase'."
      ],
      practiceTip: "Take any bar chart and give yourself 3 minutes to write only two things: the overview (2 sentences, no numbers) and a list of 4–8 figures you would select. Check that every figure is either an extreme or a major change."
    },
    {
      id: "ielts-17",
      title: "Writing Task 1: Process Diagrams — Sequencing Language",
      skill: "Writing",
      category: "writing-t1",
      bandFocus: "5.5–9.0",
      comingSoon: false,
      tags: ["writing task 1", "process diagram", "passive voice", "sequencing"],
      summary: "Describing a linear or cyclical process clearly using the passive voice, precise verbs and varied sequencing connectors.",
      body: [
        {
          heading: "What Makes a Process Task Different",
          html: "<p>A process diagram has no trends and no comparisons. You are explaining <em>how something happens</em>, step by step. There are two types: <strong>man-made</strong> processes (producing olive oil, recycling glass), where people or machines act, and <strong>natural</strong> processes (the water cycle, the life cycle of a frog), where nature acts. The type decides your grammar: man-made processes are mostly passive; natural processes often use the active voice.</p>"
        },
        {
          heading: "The Overview: Count, Start, Finish",
          html: "<p>Your overview should state <strong>how many stages</strong> there are, <strong>where the process begins and ends</strong>, and whether it is linear or cyclical. Example: <em>'Overall, the production of olive oil involves seven stages, beginning with the harvesting of the olives and ending with the bottling of the filtered oil.'</em> Do not describe individual steps in the overview.</p>"
        },
        {
          heading: "Passive Voice for Man-Made Processes",
          html: "<ul><li>Active: <em>Workers shake the trees.</em> → Passive: <em>The olives are shaken from the trees.</em></li><li>Use the passive when the doer is obvious or unimportant; add 'by' only when the machine matters: <em>'by a centrifuge'</em>.</li><li>Keep tense consistent: present simple passive (<em>is/are + past participle</em>) for a general process.</li></ul>"
        },
        {
          heading: "Sequencing Without Repeating 'Then'",
          html: "<ul><li><strong>Beginning:</strong> <em>At the first stage, To begin with, The process starts when</em></li><li><strong>Middle:</strong> <em>Next, Following this, After that, Once this has been completed, Subsequently</em></li><li><strong>Simultaneous:</strong> <em>At the same time, Meanwhile, while this is happening</em></li><li><strong>End:</strong> <em>Finally, In the last stage, The process concludes when</em></li></ul><p>Join short steps into one sentence with participles or 'before/after': <em>'The paste is mixed for about 30 minutes before being spun in a centrifuge.'</em></p>"
        },
        {
          heading: "Cyclical Processes",
          html: "<p>For a cycle such as the water cycle, say that it has no real beginning or end: <em>'The diagram illustrates a continuous cycle with four main stages.'</em> Choose a logical starting point (for example evaporation), and finish by noting that the cycle then repeats.</p>"
        }
      ],
      modelAnswer: {
        prompt: "The diagram shows how olive oil is produced. Stages: 1) Olives are harvested by shaking the trees. 2) The olives are washed to remove leaves. 3) The olives are crushed into a paste. 4) The paste is mixed slowly for 30 to 40 minutes. 5) The paste is spun in a centrifuge, which separates oil from water and solids. 6) The oil is filtered. 7) The oil is stored in steel tanks and then bottled. Summarise the information by selecting and reporting the main features.",
        text: "The diagram illustrates the process by which olive oil is produced, from the harvesting of the fruit to the final bottling.\n\nOverall, the process is linear and consists of seven stages, beginning with the collection of olives from the trees and ending with the storage and bottling of the filtered oil.\n\nAt the first stage, the olives are harvested by shaking the trees, and they are then washed so that any leaves are removed. Next, the clean olives are crushed to form a thick paste. This paste is mixed slowly for between 30 and 40 minutes.\n\nFollowing this, the mixture is spun in a centrifuge, which separates the oil from the water and the solids. Once the oil has been extracted, it is filtered to remove any remaining particles. Finally, the oil is kept in steel tanks before being poured into bottles for sale.",
        bandAnnotation: "TA: The overview states the number of stages, the type of process and its start and end points; all seven stages are covered. CC: Sequencing is varied ('At the first stage', 'Next', 'Following this', 'Once...', 'Finally') and short steps are joined into longer sentences. LR: Process-specific vocabulary ('centrifuge', 'solids', 'particles') and accurate reference words ('this paste', 'the mixture'). GRA: Consistent passive voice, a relative clause ('which separates...'), and 'before being + past participle' used accurately."
      },
      turkishL1Note: "Turkish verb endings can express the passive, so students understand it well but sometimes build English passives with the wrong auxiliary ('The olives are shake'). Check every passive for 'be + past participle' and make sure the verb form is the third form (shaken, crushed, filtered).",
      commonMistakes: [
        "Repeating 'then' at the start of every sentence, which typically holds Coherence and Cohesion around Band 5–6.",
        "Mixing active and passive for a man-made process ('The workers wash the olives and the paste is crushed'), which makes the description inconsistent.",
        "Adding explanation or opinion that is not in the diagram. Describe only what the diagram shows."
      ],
      practiceTip: "Describe any everyday process (making tea, recharging a phone) in 8 passive sentences using 6 different sequencing expressions, then underline each connector and check that none is used twice."
    },
    {
      id: "ielts-18",
      title: "Writing Task 1: Maps & Comparisons",
      skill: "Writing",
      category: "writing-t1",
      bandFocus: "5.5–9.0",
      comingSoon: false,
      tags: ["writing task 1", "maps", "change over time", "spatial language"],
      summary: "Describing change between two maps using controlled tenses, precise spatial prepositions and a clear overview of the biggest transformation.",
      body: [
        {
          heading: "Reading a Map Task",
          html: "<p>Map tasks show the same place at two (or three) different times, or a plan of a site before and after development. The task is to describe <strong>what changed</strong>, <strong>what stayed the same</strong> and <strong>where</strong>. There is no trend language; the skill is spatial precision and tense control.</p>"
        },
        {
          heading: "Tense Control",
          html: "<ul><li>Both maps in the past: use the <strong>past simple</strong> for each (<em>'was replaced'</em>, <em>'were built'</em>).</li><li>One past, one present: use the past simple for the earlier map and the <strong>present simple or present perfect</strong> for the later one (<em>'Today, a supermarket stands...'</em>).</li><li>Past and future (a planned development): use <em>'will be'</em> or <em>'is planned to'</em> for the later map.</li></ul>"
        },
        {
          heading: "Spatial Language",
          html: "<ul><li><strong>Position:</strong> <em>in the north-east, to the west of, alongside, adjacent to, in the centre, opposite, between...</em></li><li><strong>Change verbs:</strong> <em>was demolished, was replaced by, was converted into, was extended, was built, was relocated, remained unchanged</em>.</li><li><strong>Quantity of change:</strong> <em>doubled in size, was enlarged, was reduced</em>.</li></ul>"
        },
        {
          heading: "Overview and Grouping",
          html: "<p>Your overview should say what kind of change dominates: <em>'Overall, the village changed from a mainly agricultural area into a more developed, residential community with better road access.'</em> In the body, organise by <strong>area</strong> (north, centre, south) or by <strong>type of change</strong> (new buildings, demolished features, unchanged features). Do not describe the maps one feature at a time.</p>"
        }
      ],
      modelAnswer: {
        prompt: "The maps show a village in 1995 and today. 1995: farmland in the north; a small primary school in the centre; a river along the east side with a wooden footbridge; a few houses on the west along the main road; a pond in the south. Today: the northern farmland is a housing estate; the school has been extended and has a playground; the footbridge is a road bridge; a supermarket with a car park occupies the area where the pond was; the western houses remain. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        text: "The two maps illustrate how a village changed between 1995 and the present day.\n\nOverall, the village developed from a largely agricultural settlement into a more built-up community with better facilities and improved access, although the western part along the main road remained the same.\n\nIn 1995, the northern part of the village consisted entirely of farmland, while a small primary school stood in the centre. A river ran along the eastern edge and was crossed by a wooden footbridge, and a pond was located in the south.\n\nToday, the farmland in the north has been replaced by a housing estate. The primary school has been extended and now includes a playground. In the east, the footbridge has been replaced by a road bridge, which allows vehicles to cross the river. In the south, the pond has disappeared, and a supermarket with its own car park now occupies the site. The houses on the western side of the main road are the only feature that has not changed.",
        bandAnnotation: "TA: The overview identifies the dominant change (agricultural to built-up) and the one unchanged area; every feature on the maps is covered. CC: Information is grouped by time (1995, then today) and by area, with 'which' clauses showing results. LR: Precise change verbs ('replaced by', 'extended', 'occupies the site') and position language ('along the eastern edge', 'in the south'). GRA: Accurate tense shift from past simple to present perfect passive, plus relative clauses."
      },
      turkishL1Note: "Prepositions of place are a common Turkish L1 weak spot (case suffixes do this job in Turkish). Practise 'in the north', 'on the river', 'to the west of', 'at the entrance', and check that you have not written 'in the east side' where 'on the east side' is needed.",
      commonMistakes: [
        "Describing each map separately and never comparing them, so the examiner cannot see the change.",
        "Using the past simple ('a supermarket was built') for the second map when no past time is given and the focus is what exists today; the present perfect or present simple is usually clearer.",
        "Using vague spatial language such as 'on the left' instead of compass points or fixed reference features."
      ],
      practiceTip: "Sketch two quick maps of your own street (then and now, or now and planned) and write 6 sentences using 6 different change verbs, each with a precise position phrase."
    },
    {
      id: "ielts-19",
      title: "Writing Task 2: Problem/Solution Essays",
      skill: "Writing",
      category: "writing-t2",
      bandFocus: "6.0–9.0",
      comingSoon: false,
      tags: ["writing task 2", "problem solution", "causes", "essay structure"],
      summary: "Mapping every part of a problem/solution question to a paragraph, and proposing solutions that are specific, realistic and linked to the causes.",
      body: [
        {
          heading: "Identify the Exact Question Type",
          html: "<p>Problem/solution prompts come in two main shapes, and the paragraph plan depends on which you have:</p><ul><li><strong>Causes + solutions:</strong> 'What are the causes and what can be done?'</li><li><strong>Problems + solutions:</strong> 'What problems does this cause and how can they be solved?'</li></ul><p>Underline each question word. Leaving a part of the question unanswered usually limits Task Response to about Band 5, so each question needs its own clearly marked paragraph or half-paragraph.</p>"
        },
        {
          heading: "The Four-Paragraph Plan",
          html: "<ul><li><strong>Introduction:</strong> paraphrase the topic + a thesis that previews both parts (<em>'This essay will examine the main causes and propose two practical solutions.'</em>).</li><li><strong>Body 1:</strong> two causes (or problems), each with an explanation and a specific example.</li><li><strong>Body 2:</strong> two solutions, each linked to a cause from Body 1, with an explanation of <em>how</em> it would work.</li><li><strong>Conclusion:</strong> a brief summary and, if you like, a final judgment on which solution is most effective.</li></ul>"
        },
        {
          heading: "Making Solutions Realistic",
          html: "<p>Band 7+ solutions are <em>specific, actionable and explained</em>. Weak: <em>'The government should do something about it.'</em> Stronger: <em>'Governments could introduce congestion charges in city centres, which would discourage unnecessary car journeys and generate revenue to improve bus services.'</em> Always include who acts (government, schools, individuals), what they do, and why it works.</p>"
        },
        {
          heading: "Useful Language",
          html: "<ul><li><strong>Causes:</strong> <em>stems from, is largely attributable to, can be traced back to, is driven by</em></li><li><strong>Effects:</strong> <em>leads to, results in, gives rise to, has a knock-on effect on</em></li><li><strong>Solutions:</strong> <em>could be tackled by, one effective measure would be, this would help to, would go a long way towards</em></li></ul>"
        }
      ],
      modelAnswer: {
        prompt: "In many cities, traffic congestion is becoming a serious problem. What are the causes of this, and what solutions can be suggested?",
        text: "Traffic congestion has become a daily frustration for residents of many large cities. This essay will examine two major causes of the problem and propose measures that could realistically reduce it.\n\nOne significant cause is the continuing growth in private car ownership. As incomes rise, more households buy a car, and many commuters choose to drive alone because public transport seems slow or unreliable. A second cause is poor urban planning. When housing, jobs and shops are located in different parts of a city, people are forced to make long journeys every day. In several fast-growing cities, for example, new apartment districts have been built on the outskirts with no direct rail link to the business centre, so thousands of residents depend on a single motorway.\n\nTo address the first cause, governments should invest in fast, frequent and affordable public transport, because commuters will leave their cars at home only if buses and trains offer a genuine alternative. This could be supported by congestion charges in city centres, which would discourage unnecessary journeys and raise money for further improvements. As for the second cause, planners could encourage mixed-use development so that people can live close to where they work and shop. Cities that have created compact neighbourhoods with local services have seen far fewer long-distance commuting trips.\n\nIn conclusion, congestion results mainly from rising car use and poorly planned cities. Better public transport, charges on driving in busy areas and more integrated planning would together make urban travel faster and less stressful.",
        bandAnnotation: "TA: Both parts of the question (causes and solutions) are answered fully, and each solution is explicitly matched to a cause. CC: Clear paragraphing with a preview in the introduction; solutions are introduced with 'To address the first cause' and 'As for the second cause', giving a logical link to Body 1. LR: Topic-specific vocabulary ('congestion charges', 'mixed-use development', 'compact neighbourhoods') and accurate cause-effect verbs. GRA: A wide range of complex structures (relative clauses, a 'so that' purpose clause, 'when' and 'only if' clauses) with high accuracy."
      },
      turkishL1Note: "Writers at this level may name a solution without saying how it works ('The government must build more roads'). Add a 'because/which would' clause to every solution. This turns a bare instruction into an explained argument, which is what Task Response rewards.",
      commonMistakes: [
        "Answering only one part of the question (for example, giving three solutions but no causes), which usually limits Task Response to about Band 5.",
        "Offering solutions that do not match the causes you described, so the essay reads as two separate lists.",
        "Proposing unrealistic or vague solutions such as 'ban all cars' or 'people should be more careful' without explaining how they would work."
      ],
      practiceTip: "Take five problem/solution questions and, for each, spend 5 minutes writing only the plan: two causes, two matching solutions, and one concrete example for each. Check that every solution names who acts and how it works."
    },
    {
      id: "ielts-20",
      title: "Writing Task 2: Advantages/Disadvantages & Direct Question Essays",
      skill: "Writing",
      category: "writing-t2",
      bandFocus: "6.0–9.0",
      comingSoon: false,
      tags: ["writing task 2", "advantages disadvantages", "outweigh", "direct question"],
      summary: "Handling the two remaining Task 2 essay types: weighing advantages against disadvantages, and answering two-part direct questions in full.",
      body: [
        {
          heading: "Advantages/Disadvantages: Three Prompt Shapes",
          html: "<ul><li><strong>Discuss both:</strong> 'What are the advantages and disadvantages?' — present both sides; a personal opinion is optional.</li><li><strong>Outweigh:</strong> 'Do the advantages outweigh the disadvantages?' — you <em>must</em> take a position.</li><li><strong>Single side:</strong> 'What are the advantages of...?' — write only about the side asked for.</li></ul>"
        },
        {
          heading: "Balanced vs Position Plan",
          html: "<p>For 'discuss both', use two equal body paragraphs, one per side. For 'outweigh', state your verdict in the introduction (<em>'I believe the benefits are greater'</em>) and give more space to the side you support, while still acknowledging the other. Do not write a plan of two equal paragraphs and then a conclusion that reverses your view.</p>"
        },
        {
          heading: "Direct Questions: Answer Each One Explicitly",
          html: "<p>Direct-question essays ask two separate questions, for example <em>'Why is this happening? Is it a positive or negative development?'</em> Plan one body paragraph for each question and answer them in the order given. Use the question's own words in your topic sentences: <em>'There are several reasons why...'</em>, <em>'On balance, I consider this development to be positive.'</em></p>"
        },
        {
          heading: "Language for Weighing",
          html: "<ul><li><strong>Advantage:</strong> <em>a key benefit is, one clear advantage is, this offers the opportunity to</em></li><li><strong>Disadvantage:</strong> <em>a notable drawback is, this comes at a cost, the downside is</em></li><li><strong>Weighing:</strong> <em>outweigh, on balance, although this is true, nevertheless, the benefits clearly exceed</em></li></ul>"
        }
      ],
      modelAnswer: {
        prompt: "More and more people are choosing to work from home instead of travelling to an office. Do the advantages of this development outweigh the disadvantages?",
        text: "Advances in communication technology have made it possible for many employees to work from home rather than commute to an office. Although this arrangement has some drawbacks, I believe that the advantages are greater, both for workers and for employers.\n\nThe most obvious benefit is the time and money that employees save. Without a daily commute, a worker in a large city can regain an hour or more each day, which can be spent on family life, exercise or rest. This often leads to better wellbeing and higher productivity, because people feel less tired and have more control over their working hours. Employers also gain, since they can reduce expensive office space and recruit talented staff from anywhere, rather than only from the local area.\n\nHowever, working from home is not without problems. Some employees feel isolated without daily contact with colleagues, and younger workers may miss the informal learning that comes from watching experienced staff. In addition, the boundary between work and personal life can disappear when the kitchen table becomes an office, leading some people to work longer hours than before.\n\nNevertheless, these drawbacks can largely be managed. Companies can arrange regular video meetings and occasional days in the office, which maintain team spirit and allow training, while clear working hours protect personal time. In conclusion, although remote work requires careful management, its benefits for time, wellbeing and flexibility outweigh its disadvantages.",
        bandAnnotation: "TA: A clear position is given in the introduction and maintained throughout; the disadvantages are acknowledged and then answered, as the 'outweigh' question requires. CC: Four logical paragraphs, with 'However' and 'Nevertheless' signalling the shift in argument. LR: Natural collocations ('regain an hour', 'maintain team spirit', 'informal learning') and precise weighing vocabulary. GRA: A variety of complex structures (concessive 'Although', 'since' reason clause, relative clauses) with very few errors."
      },
      turkishL1Note: "A common pattern at this level, not specific to Turkish, is writing a long list of advantages and disadvantages with no weighing. Add one sentence that explicitly compares the two sides ('Nevertheless, these drawbacks can largely be managed...'). The examiner needs to see your judgment, not just your inventory of points.",
      commonMistakes: [
        "Treating an 'outweigh' question as 'discuss both' and never stating which side is stronger.",
        "In a direct-question essay, answering only the first question or merging both answers into one paragraph so the second is not clearly addressed.",
        "Giving a conclusion that contradicts the position taken in the introduction."
      ],
      practiceTip: "For three different prompts (one of each shape), write only the introduction and the topic sentences of the body paragraphs. Read them aloud: do they show your position and answer every part of the question?"
    },
    {
      id: "ielts-21",
      title: "Sentence & Summary Completion — Word Limit Rules",
      skill: "Reading",
      category: "reading",
      bandFocus: "5.0–8.0",
      comingSoon: false,
      tags: ["reading", "summary completion", "sentence completion", "word limit"],
      summary: "Exact word-limit compliance, grammar-fit checking and paraphrase-aware locating for gap-fill questions.",
      body: [
        {
          heading: "Read the Instruction First, Every Time",
          html: "<p>The instruction line sets the rule that decides whether your answer is marked correct. The common versions are <strong>NO MORE THAN TWO WORDS</strong>, <strong>ONE WORD ONLY</strong>, and <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong>. An answer that exceeds the limit is wrong even if the idea is right.</p><ul><li>A hyphenated word counts as <strong>one</strong> word (<em>well-known</em>).</li><li>A number counts as one word (<em>20</em> or <em>twenty</em>).</li><li>Copy the word <strong>exactly as it appears in the passage</strong>. Do not change its form, and spell it correctly.</li></ul>"
        },
        {
          heading: "Predict the Missing Word Before You Look",
          html: "<p>Read the sentence with the gap and decide what is needed: a noun, an adjective, a verb, a number? The words around the gap tell you. <em>'a ______ increase'</em> needs an adjective; <em>'an ______'</em> needs a word that begins with a vowel sound; <em>'the number of ______ rose'</em> needs a plural noun. After you choose a word, read the whole sentence again: it must be grammatically correct and make sense.</p>"
        },
        {
          heading: "Locate by Paraphrase, Not by Matching Words",
          html: "<p>The sentence you complete is a <em>paraphrase</em> of the passage, so the exact words rarely match. Find the idea using synonyms and numbers or names, then read the sentence around it. In summary completion the gaps usually follow the order of the passage, so after you find gap 1 you can start looking for gap 2 further down, not back at the beginning.</p>"
        },
        {
          heading: "Worked Example",
          html: "<p><strong>Passage:</strong> <em>'Beekeepers have long known that bees navigate using the position of the sun, but researchers have recently shown that bees also rely on patterns of polarised light when the sun is hidden by cloud.'</em></p><p><strong>Question (NO MORE THAN TWO WORDS):</strong> <em>When the sun cannot be seen, bees use ______ light to find their way.</em></p><p><strong>Answer: polarised.</strong> The gap sits before 'light', so an adjective is needed. 'Cannot be seen' paraphrases 'hidden by cloud', and 'find their way' paraphrases 'navigate'. 'The sun' is wrong because it does not fit the grammar and is the first method, not the one used when the sun is hidden.</p>"
        },
        {
          heading: "When You Are Given a Word Box",
          html: "<p>If the task gives a list of words (A–J), you write only the <strong>letter</strong> (or the word if the instructions say so). There are more words than gaps, so some are distractors; cross out each word as you use it. Choose by part of speech first, then by meaning.</p>"
        }
      ],
      turkishL1Note: "Turkish has no articles, so students can overlook the clue in 'a', 'an' or 'the' before a gap. Check the word before the gap ('an' signals a vowel sound) and check that your answer is singular or plural as the sentence requires.",
      commonMistakes: [
        "Writing three words when the limit is two, or adding an extra word such as 'the' that is not required.",
        "Choosing a word from the right area of the passage that does not fit the grammar of the sentence.",
        "Changing the form of the word (writing 'polarise' for 'polarised') or misspelling it, which makes the answer wrong."
      ],
      practiceTip: "For ten gap-fill sentences, write down the part of speech you expect before you search the passage. After you find the answer, check whether your prediction was right; this trains the grammar-fit habit that prevents most lost marks."
    },
    {
      id: "ielts-22",
      title: "Multiple Choice & Matching Features",
      skill: "Reading",
      category: "reading",
      bandFocus: "5.5–8.5",
      comingSoon: false,
      tags: ["reading", "mcq", "matching features", "multiple answer"],
      summary: "Eliminating plausible wrong options in multiple-choice questions and matching names or terms to statements without confusing similar ideas.",
      body: [
        {
          heading: "Single-Answer Multiple Choice",
          html: "<p>Questions follow the order of the passage. Read the question stem, underline its keywords, and locate the matching section before you look at the options. Then check each option against the text. Wrong options are rarely absurd; they are usually <em>almost</em> right, so eliminate them by finding the exact word or detail that makes each one wrong rather than picking the one that sounds best.</p><ul><li>Decide your own answer from the passage first, then see which option matches it.</li><li>If two options seem right, one of them contains a detail the passage does not support.</li><li>Never choose an option only because it repeats a phrase from the passage; the repeated phrase is often the trap.</li></ul>"
        },
        {
          heading: "Multiple-Answer Multiple Choice (Choose TWO or THREE)",
          html: "<p>Here you pick two or three letters from five or more options. The answers may come from <strong>different parts</strong> of the passage and the questions are usually not in text order, so find the evidence for each option separately. Do not give more letters than the instruction asks for, and the letters may be written in either order.</p>"
        },
        {
          heading: "Matching Features",
          html: "<p>You match statements to a list of features: people, places, theories, or companies. Read the list first and underline each feature, then scan the passage for the names; they usually stand out because they are capitalised. Read the sentences around each name to find the opinion or fact attached to it. The statements are not necessarily in passage order, so search for each statement's idea separately.</p><ul><li>Check the instruction: if it says <em>'You may use any letter more than once'</em>, one feature can match several statements.</li><li>A name may appear several times, so match the <em>statement</em>, not just the first mention.</li></ul>"
        },
        {
          heading: "Worked Example (Matching Features)",
          html: "<p><strong>Passage:</strong> <em>'Dr Okafor argues that city trees mainly reduce noise. Professor Lindqvist, by contrast, believes their main benefit is lowering summer temperatures, while Dr Reyes focuses on the improvement in residents’ mental health.'</em></p><p><strong>Statement:</strong> <em>The main value of urban trees is that they make cities cooler.</em></p><p><strong>Answer: Professor Lindqvist.</strong> 'Lowering summer temperatures' paraphrases 'make cities cooler'. Dr Okafor is a trap because the same topic (city trees) is attached to a different benefit, noise.</p>"
        }
      ],
      turkishL1Note: "Long English sentences with several clauses can hide who said what. When you find a name, mark the verb that goes with it ('argues', 'believes', 'focuses on') and read only that clause. This stops you attributing an opinion to the wrong person.",
      commonMistakes: [
        "Choosing the option that contains the most words from the passage rather than the one that carries the same meaning.",
        "In multiple-answer questions, selecting two options from the same paragraph without checking the other options.",
        "In matching features, matching a statement to the first name mentioned near the topic instead of the name attached to that specific idea."
      ],
      practiceTip: "Do one multiple-choice set and, for every question, write one sentence explaining why each wrong option is wrong. If you cannot explain a wrong option, you have not yet understood the question."
    },
    {
      id: "ielts-23",
      title: "Reading: Distractor Analysis Masterclass",
      skill: "Reading",
      category: "reading",
      bandFocus: "6.0–9.0",
      comingSoon: false,
      tags: ["reading", "distractors", "tfng", "mcq", "error analysis"],
      summary: "Why each wrong answer is designed to look plausible, and how to recognise five common distractor patterns across every question type.",
      body: [
        {
          heading: "Why Distractors Exist",
          html: "<p>IELTS Reading questions are built so that a candidate who only <em>matches words</em> will choose wrongly. Each wrong option is a deliberate trap, and many traps follow one of five common patterns. Naming the pattern is faster than re-reading the whole passage.</p>"
        },
        {
          heading: "Five Common Distractor Patterns",
          html: "<ul><li><strong>1. Partial match:</strong> the option is true for part of the idea but wrong for the rest.</li><li><strong>2. Wrong subject:</strong> a true fact attached to a different person, place or group.</li><li><strong>3. Over-generalisation:</strong> the passage says <em>some, often, may</em>; the option says <em>all, always, will</em>.</li><li><strong>4. Opposite polarity:</strong> the option reverses the direction (an increase becomes a decrease).</li><li><strong>5. True but irrelevant:</strong> the statement is in the passage but does not answer this question.</li></ul>"
        },
        {
          heading: "Distractors by Question Type",
          html: "<ul><li><strong>True/False/Not Given:</strong> 'False' contradicts the passage; 'Not Given' is a claim the passage never makes. Over-generalisation is a common Not Given trap.</li><li><strong>Multiple choice:</strong> wrong options often follow these patterns; try to name the pattern in each one.</li><li><strong>Matching headings:</strong> the wrong heading matches a <em>detail</em> in the paragraph, not the main idea.</li><li><strong>Summary completion:</strong> a wrong word may fit the grammar but not the meaning of the passage.</li></ul>"
        },
        {
          heading: "Worked Example",
          html: "<p><strong>Passage:</strong> <em>'A trial in two of the six schools found that pupils who started lessons at 9:30 rather than 8:30 performed better in afternoon tests. The researchers say further trials are needed before any national policy is considered.'</em></p><p><strong>Question:</strong> What do the researchers conclude about later school start times?</p><ul><li><strong>A</strong> They improve results in every school. <em>(Over-generalisation: the trial covered two schools.)</em></li><li><strong>B</strong> They should be introduced nationally. <em>(Partial match / goes beyond the text: the researchers say more trials are needed first.)</em></li><li><strong>C</strong> They helped in the schools tested, but more evidence is needed. <em>(Correct.)</em></li><li><strong>D</strong> They reduced the length of the school day. <em>(Not mentioned.)</em></li></ul>"
        }
      ],
      turkishL1Note: "Limiting words such as 'some', 'may' and 'often' are easy to skim past, and they are exactly what separates a correct option from an over-generalised one. Circle every limiting or absolute word (all, never, only, always) in both the question and the passage.",
      commonMistakes: [
        "Choosing an option because it contains the exact words from the passage, when the same words are used to say something different.",
        "Choosing False for a statement the passage simply does not mention, when it should be Not Given.",
        "Choosing a heading that matches one detail in the paragraph instead of the main idea."
      ],
      practiceTip: "After finishing any reading set, review your errors only. For each one, write the name of the distractor pattern that caught you. After 20 errors, you will see which pattern is your personal weakness and can target it."
    },
    { id: "ielts-24", title: "Listening: Parallel Expression & Paraphrase", skill: "Listening", category: "listening", comingSoon: true, tags: ["listening", "paraphrase"], summary: "Recognising when the recording says X but the correct answer requires understanding it means Y. Coming in Content Pack 2." },
    { id: "ielts-25", title: "Listening: Spelling, Numbers & Common Traps", skill: "Listening", category: "listening", comingSoon: true, tags: ["listening", "spelling", "numbers"], summary: "High-frequency number and spelling traps across all four sections. Coming in Content Pack 2." },
    { id: "ielts-26", title: "Listening: Map/Plan/Diagram Labelling", skill: "Listening", category: "listening", comingSoon: true, tags: ["listening", "map labelling"], summary: "Following spatial/directional language in real time to label a plan correctly. Coming in Content Pack 2." },
    { id: "ielts-27", title: "Speaking: Band 7+ Idiomatic Language Bank", skill: "Speaking", category: "speaking", comingSoon: true, tags: ["speaking", "idiomatic language"], summary: "Natural idiomatic phrases that read as native-like rather than textbook-rehearsed. Coming in Content Pack 2." },
    { id: "ielts-28", title: "Speaking: Fluency & Coherence — Managing Hesitation", skill: "Speaking", category: "speaking", comingSoon: true, tags: ["speaking", "fluency", "hesitation"], summary: "Natural filler strategies that buy thinking time without being penalised. Coming in Content Pack 2." },
    { id: "ielts-29", title: "Speaking: Pronunciation for Turkish L1 Speakers", skill: "Speaking", category: "speaking", comingSoon: true, tags: ["speaking", "pronunciation", "turkish l1"], summary: "Consonant-cluster reduction and vowel-harmony transfer, and how to target them directly. Coming in Content Pack 2." },
    { id: "ielts-30", title: "Overcoming Test Anxiety — Psychology for Band Success", skill: "Strategy", category: "strategy", comingSoon: true, tags: ["psychology", "test anxiety", "mindset"], summary: "Self-efficacy, reframing, and calm-focus techniques grounded in test-anxiety research. Coming in Content Pack 2." }
  ],

  guidedPractice: [
    {
      id: "gp-w1", skill: "Writing Task 1", title: "Overview Paragraph Drill",
      prompt: "The chart shows the percentage of households with internet access in four countries from 2000 to 2020. Write ONLY the overview paragraph (2 sentences, no numbers) — the part most Band 5–6 candidates skip entirely.",
      rubric: {
        TA: "Does the overview correctly capture the 1–2 most significant overall trends, without listing every data point?",
        CC: "Is it clearly separated from the introduction and body, and logically sequenced?",
        LR: "Are general trend words used accurately (e.g. 'a general upward trend', 'converged', 'diverged') without needing specific figures?",
        GRA: "Is at least one complex structure used accurately (e.g. a relative clause or 'while' contrast)?"
      },
      bandNote: "A Band 7+ overview names the two most important patterns in the data (e.g., 'all countries rose overall, but Country A consistently led') using zero numbers — numbers belong only in the body paragraphs."
    },
    {
      id: "gp-w2", skill: "Writing Task 2", title: "Thesis Statement Builder",
      prompt: "Topic: 'Some believe social media has a positive effect on society, while others disagree.' Write ONE thesis statement sentence using the formula: topic + clear position + one-clause preview of two reasons.",
      rubric: {
        TA: "Is the position unambiguous and specific (not 'it depends' or 'both sides have points')?",
        CC: "Does the sentence structure logically preview what the two body paragraphs will cover?",
        LR: "Is topic-specific vocabulary used precisely (e.g. 'social connectivity', 'misinformation') rather than vague words like 'good/bad things'?",
        GRA: "Is a complex sentence used accurately (e.g. 'While... I believe... primarily because...')?"
      },
      bandNote: "Weak: 'Social media has good and bad points.' Band 7+: 'While social media undeniably strengthens social connectivity across distances, I believe its overall societal effect is negative, primarily because it accelerates the spread of misinformation and contributes to declining mental wellbeing among young users.'"
    },
    {
      id: "gp-r1", skill: "Reading", title: "TFNG Micro-Set",
      prompt: "Passage extract: 'City councils in several European countries have begun trialling four-day work weeks for municipal employees. Early results from Iceland's large-scale trial were widely reported as positive, though researchers caution that results may not generalise to the private sector or to countries with different labour structures.' Statement: 'Researchers agree the four-day week will succeed in every country.'",
      rubric: {
        TA: "Correct classification: NOT GIVEN — the passage explicitly cautions against generalising, which is a signal against blanket success, but does not make a direct claim either way about 'every country'.",
        CC: "N/A for this micro-drill (single-question focus).",
        LR: "N/A for this micro-drill.",
        GRA: "N/A for this micro-drill."
      },
      bandNote: "Common trap: students choose FALSE because the passage 'sounds cautious', but caution about generalising is not the same as a direct contradiction of the specific claim — that distinction is exactly what separates FALSE from NOT GIVEN."
    },
    {
      id: "gp-l1", skill: "Listening", title: "Prediction Warm-Up",
      prompt: "You will hear a form with the field: 'Preferred appointment time: _______ (no more than two words)'. Before listening, predict: what word TYPE is required, and what plural/spelling issues might arise.",
      rubric: {
        TA: "Correctly predicts a time-related answer type (e.g. 'morning', 'early afternoon') rather than a name or number.",
        CC: "N/A for this micro-drill.",
        LR: "Recognises common time-related vocabulary that might be spoken (e.g. 'quarter past', 'first thing').",
        GRA: "N/A for this micro-drill."
      },
      bandNote: "Prediction narrows your listening attention to a specific word class before the audio starts, which measurably reduces the 'panic gap' between hearing the answer and writing it correctly."
    },
    {
      id: "gp-s2", skill: "Speaking Part 2", title: "Cue Card Bullet-Note Practice",
      prompt: "Cue card: 'Describe a skill you learned that you found difficult at first. You should say: what the skill was, how you learned it, how long it took, and explain why you found it difficult.' Write ONLY your 1-minute bullet-point plan (not full sentences).",
      rubric: {
        TA: "Does the plan address all four bullet points, even briefly?",
        CC: "Is there a clear beginning/middle/end structure implied by the notes' order?",
        LR: "Are 2–3 specific topic words jotted down (not full sentences) to prompt precise vocabulary later?",
        GRA: "Is a tense/timeframe decision made explicitly in the notes (e.g. 'past — 2 years ago')?"
      },
      bandNote: "A strong bullet-note plan is 8–12 words total across all four points — if your notes look like full sentences, you're writing too much and will run out of planning time."
    },
    {
      id: "gp-s3", skill: "Speaking Part 3", title: "Idea-Development Scaffold Drill",
      prompt: "Question: 'Do you think skills like this will become more or less important in the future?' Answer using the scaffold: general trend → one clear reason → a counterpoint/exception → brief speculative conclusion.",
      rubric: {
        TA: "Does the answer move beyond personal anecdote into a genuine, reasoned prediction?",
        CC: "Are the four scaffold steps signalled with clear discourse markers (e.g. 'That said...', 'It's likely that...')?",
        LR: "Is hedging language used naturally (e.g. 'I'd imagine', 'to some extent') rather than flat absolute claims?",
        GRA: "Is at least one conditional or speculative structure used accurately (e.g. 'if X continues, Y will likely...')?"
      },
      bandNote: "This is the clearest Band 6 vs Band 7+ divide in Part 3: Band 6 answers often stop after the 'reason' step; Band 7+ answers reliably add the counterpoint and speculative close."
    },
    {
      id: "gp-w3",
      skill: "Writing Task 1",
      title: "Bar-Chart Data Selection Drill",
      prompt: "A bar chart shows the number of visitors (in thousands) to five museums in one year: Science 480, History 410, Art 350, Maritime 120, Toy 95. (1) List the THREE features you would select for a Task 1 report. (2) Write ONE sentence that compares two of them using an approximation phrase.",
      rubric: {
        TA: "Are the selected features the highest (Science), the lowest (Toy) and one meaningful comparison or gap, rather than all five museums?",
        CC: "Is the comparison sentence a single, clear statement rather than a list of numbers?",
        LR: "Is approximation language used accurately (e.g. 'just under half a million', 'roughly five times', 'close to')?",
        GRA: "Is a comparative structure used accurately (e.g. 'attracted just over five times as many visitors as')?"
      },
      bandNote: "Weak: 'Science had 480, History had 410, Art had 350...' (a list). Band 7+: 'The Science museum was by far the most popular, attracting roughly five times as many visitors as the Toy museum, which received the fewest at 95,000.' Two extremes and one comparison say more than five numbers."
    },
    {
      id: "gp-w4",
      skill: "Writing Task 1",
      title: "Process Sequencing Sentence-Builder",
      prompt: "Combine these four steps into TWO passive sentences using different sequencing expressions (do not use 'then' or 'and then'): the tea leaves are picked; the leaves are dried in the sun; the dried leaves are rolled; the rolled leaves are packed into boxes.",
      rubric: {
        TA: "Are all four steps included, in the correct order, with no steps added or invented?",
        CC: "Are two different sequencing devices used (e.g. 'Once...', 'Following this', 'before being...') and is each sentence clearly linked to the next?",
        LR: "Are the process verbs precise and varied (picked, dried, rolled, packed) with accurate reference words ('the dried leaves')?",
        GRA: "Is the passive formed correctly (be + past participle) and is the tense consistent?"
      },
      bandNote: "Band 5–6: 'The leaves are picked. Then they are dried. Then they are rolled. Then they are packed.' Band 7+: 'Once the tea leaves have been picked, they are dried in the sun. Following this, the leaves are rolled before being packed into boxes.' Fewer, longer sentences with varied connectors raise CC and GRA at the same time."
    },
    {
      id: "gp-w5",
      skill: "Writing Task 2",
      title: "Problem/Solution Paragraph Plan",
      prompt: "Topic: 'Many young people spend several hours a day on their phones.' What problems does this cause and how can they be solved? Write a plan (not the essay): two problems, and for each one a matched solution in one line stating WHO acts, WHAT they do, and WHY it works.",
      rubric: {
        TA: "Does each solution directly address one of the two problems named, and is each realistic and specific?",
        CC: "Is the plan organised so that Body 1 (problems) and Body 2 (solutions) can be linked point by point?",
        LR: "Are problems and solutions described with precise vocabulary (e.g. 'reduced concentration', 'screen-time limits') rather than 'bad' and 'good'?",
        GRA: "Are 'who/what/why' expressed in a complete clause, for example with 'which would' or 'because'?"
      },
      bandNote: "Weak: 'Problem: phones are bad. Solution: parents should stop them.' Band 7+: 'Problem: poor sleep. Solution: schools and parents could agree a phone-free evening routine, which would give teenagers a regular chance to rest.' Notice the solution names who acts and why it works."
    },
    {
      id: "gp-w6",
      skill: "Writing Task 2",
      title: "Advantages/Disadvantages Introduction",
      prompt: "Topic: 'Many universities now offer complete degree courses online. Do the advantages of this development outweigh the disadvantages?' Write a TWO-sentence introduction: sentence 1 paraphrases the topic; sentence 2 states your position and previews the main reasons.",
      rubric: {
        TA: "Is a clear position given (it must answer 'outweigh'), rather than 'there are both advantages and disadvantages'?",
        CC: "Does sentence 2 preview the structure of the essay (what the two body paragraphs will cover)?",
        LR: "Is the topic paraphrased with synonyms (e.g. 'distance learning', 'degree programmes') instead of copying the question?",
        GRA: "Is a complex sentence used accurately (e.g. 'Although... I believe... mainly because...')?"
      },
      bandNote: "Weak: 'Online degrees have advantages and disadvantages. In this essay I will discuss them.' Band 7+: 'Fully online degree programmes have become widespread in higher education. Although they raise concerns about isolation, I believe their advantages outweigh these drawbacks, mainly because they are flexible and affordable.'"
    },
    {
      id: "gp-r2",
      skill: "Reading",
      title: "Summary Completion Word-Limit Check",
      prompt: "Passage: 'Researchers found that the new road reduced journey times by about twenty minutes, although the cost of building it was higher than expected.' Complete the summary using NO MORE THAN ONE WORD AND/OR A NUMBER: The new road reduced journey times by about ______ minutes, but the ______ of building it was higher than expected. Give both answers, and explain why 'about twenty' would be marked wrong for the first gap.",
      rubric: {
        TA: "Correct answers: gap 1 = 'twenty' (or '20'); gap 2 = 'cost'. 'About twenty' is wrong because it is two words and the limit is one word and/or a number.",
        CC: "N/A for this micro-drill.",
        LR: "N/A for this micro-drill.",
        GRA: "N/A for this micro-drill."
      },
      bandNote: "'About' is already printed in the summary, so repeating it breaks the word limit and also duplicates the sentence. Always read the words either side of the gap, and check the gap against the instruction line before you write."
    },
    {
      id: "gp-r3",
      skill: "Reading",
      title: "Matching Features Micro-Set",
      prompt: "Passage: 'Maya Chen believes the main cause of the decline in bee numbers is pesticide use. Tomas Weber, however, points to the loss of wild-flower habitat, while Aisha Rahman argues that disease spread by imported colonies is the key factor.' Match each statement to a researcher: A Chen, B Weber, C Rahman. You may use any letter more than once. (1) The decline is mainly caused by the destruction of wild-flower areas. (2) Chemicals used on crops are chiefly responsible.",
      rubric: {
        TA: "Correct answers: (1) B, Weber; (2) A, Chen. Statement 1 paraphrases 'loss of wild-flower habitat'; statement 2 paraphrases 'pesticide use'.",
        CC: "N/A for this micro-drill.",
        LR: "N/A for this micro-drill.",
        GRA: "N/A for this micro-drill."
      },
      bandNote: "All three researchers discuss the same topic, so matching a name to the topic alone gets you nowhere. Match the specific cause: 'destruction of wild-flower areas' is a paraphrase of 'loss of habitat', and that belongs to Weber, not to the first name mentioned."
    },
    {
      id: "gp-r4",
      skill: "Reading",
      title: "Spot the Distractor",
      prompt: "Passage: 'Although electric buses cost about forty per cent more to buy than diesel ones, city councils that have adopted them report lower running costs over ten years.' What does the passage say about electric buses? A They are cheaper to buy than diesel buses. B They are more expensive to buy but cheaper to run. C They are more expensive both to buy and to run. D They have been adopted by every city council. Choose the answer, and name the distractor pattern behind each wrong option.",
      rubric: {
        TA: "Correct answer: B. A = opposite polarity (the passage says they cost more to buy). C = partial match (right about purchase cost, wrong about running costs). D = over-generalisation (the passage says 'city councils that have adopted them', not all councils).",
        CC: "N/A for this micro-drill.",
        LR: "N/A for this micro-drill.",
        GRA: "N/A for this micro-drill."
      },
      bandNote: "Three of the four options reuse words from the passage, so word-matching cannot separate them. The skill being tested is naming why an option is wrong: reversed direction, half-true, or too general. That is the same skill you need for True/False/Not Given."
    }
  ],

  listeningSets: [
    {
      id: "ielts-listen-s1-01",
      title: "Section 1 — Riverside Fitness: Gym Membership Enquiry",
      section: 1,
      contextType: "Social/transactional (2-speaker conversation)",
      bandFocus: "5.5–7.0",
      timeLimitMinutes: 12,
      audioSrc: "audio/ielts/section1/gym-membership-enquiry.mp3",
      audioTitle: "Gym Membership Enquiry",
      audioContext: "You will hear a man phoning a gym to ask about membership and book an induction session. First, you have some time to look at questions 1–10.",
      instructions: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
      transcript: "RECEPTIONIST: Good morning, Riverside Fitness, how can I help you today?\nCALLER: Oh, hi. I was hoping to get some information about joining the gym — memberships, prices, that kind of thing.\nRECEPTIONIST: Of course. Have you been to Riverside before, or would this be your first time?\nCALLER: First time, yeah. A friend of mine goes there and said good things about it.\nRECEPTIONIST: Great, we're always happy to hear that. Right, shall I take a few details first, and then I can talk you through what we offer?\nCALLER: Sure.\nRECEPTIONIST: Could I get your full name, please?\nCALLER: It's Daniel Whitfield.\nRECEPTIONIST: Sorry, could you spell the surname for me?\nCALLER: Yep — W-H-I-T-F-I-E-L-D.\nRECEPTIONIST: Perfect, thank you. And a contact number?\nCALLER: It's 07 — sorry, let me just check — 07945 226130.\nRECEPTIONIST: 07945 226130, got it. And would you prefer we contact you by phone or email?\nCALLER: Email's probably easier, actually.\nRECEPTIONIST: No problem — what's the address?\nCALLER: It's d dot whitfield, all one word, at skymail dot com.\nRECEPTIONIST: Great, thank you. Now, in terms of membership, we've actually got three main options. There's the Standard membership, which is gym-floor access only; the Premium, which adds the pool and the fitness classes; and then there's an Off-Peak option, which is cheaper but restricted to before 10am and after 7pm.\nCALLER: Right. What sort of price are we talking?\nRECEPTIONIST: Standard's 35 pounds a month, Premium's 52, and Off-Peak works out at 28.\nCALLER: I think Premium sounds like what I need, to be honest — I really want to get back into swimming.\nRECEPTIONIST: Good choice — the pool's one of our most popular facilities. I'll also mention there's a one-off joining fee of 20 pounds, but that's waived if you sign up before the end of the month, which — actually, that's this Friday, so you're just in time.\nCALLER: Oh, that's handy.\nRECEPTIONIST: It is. Now, we do recommend booking an induction session before you start using the equipment on your own — it's about 45 minutes with one of our trainers, just going over the machines and general safety.\nCALLER: Yeah, that makes sense. When could I do that?\nRECEPTIONIST: Let me check... we've got a slot this Thursday at 6pm, or otherwise the following Tuesday at 9am.\nCALLER: Thursday at 6 works better for me.\nRECEPTIONIST: Lovely, I'll pencil you in for that. Oh, and one more thing — is there anything we should know, medically, before your induction? Any injuries, conditions, anything like that?\nCALLER: Um, I did have a knee operation a couple of years ago, but it's fully healed now — just thought I'd mention it.\nRECEPTIONIST: Thanks for letting us know, I'll add a note to your file so the trainer's aware. Right, I think that's everything — welcome to Riverside Fitness, Daniel!\nCALLER: Thanks very much, see you Thursday.",
      questions: [
        { id: "l1-q1", prompt: "1. Surname:", correctAnswer: "Whitfield", explanation: "Spelled aloud letter by letter: 'W-H-I-T-F-I-E-L-D.'", tag: "spelling" },
        { id: "l1-q2", prompt: "2. Contact number:", correctAnswer: "07945226130", explanation: "The caller self-corrects mid-number ('It's 07 — sorry, let me just check — 07945 226130'), and the receptionist repeats it back to confirm — the repeated version is the reliable answer.", tag: "numbers" },
        { id: "l1-q3", prompt: "3. Preferred contact method:", correctAnswer: "email", explanation: "'Email's probably easier, actually.'", tag: "detail" },
        { id: "l1-q4", prompt: "4. Email address:", correctAnswer: "d.whitfield@skymail.com", explanation: "'It's d dot whitfield, all one word, at skymail dot com.'", tag: "spelling" },
        { id: "l1-q5", prompt: "5. Membership type chosen:", correctAnswer: "Premium", explanation: "'I think Premium sounds like what I need, to be honest.'", tag: "detail" },
        { id: "l1-q6", prompt: "6. Monthly price: £", correctAnswer: "52", explanation: "'Standard's 35 pounds a month, Premium's 52, and Off-Peak works out at 28' — the caller chose Premium.", tag: "numbers" },
        { id: "l1-q7", prompt: "7. Joining fee waived if signed up by:", correctAnswer: "Friday", explanation: "Parallel-expression/self-correction trap: the receptionist first says 'before the end of the month', then corrects herself — 'actually, that's this Friday' — Friday is the real deadline, not a vague 'end of the month.'", tag: "parallel-expression" },
        { id: "l1-q8", prompt: "8. Induction session day:", correctAnswer: "Thursday", explanation: "'We've got a slot this Thursday at 6pm... Thursday at 6 works better for me.'", tag: "detail" },
        { id: "l1-q9", prompt: "9. Induction session time:", correctAnswer: "6pm", explanation: "'This Thursday at 6pm' — confirmed again by the caller as 'Thursday at 6.'", tag: "numbers" },
        { id: "l1-q10", prompt: "10. Medical note added about:", correctAnswer: "knee", explanation: "'I did have a knee operation a couple of years ago, but it's fully healed now.'", tag: "detail" }
      ]
    }
  ],

  readingSets: [
    {
      id: "ielts-read-01",
      title: "Reading Practice 1 — Bees in the City",
      bandFocus: "6.0–7.5",
      passageTitle: "Bees in the City",
      timeLimitMinutes: 20,
      instructions: "Read the passage and answer questions 1–13. (The studies and people described are fictional and written for practice.) Where a question says NO MORE THAN TWO WORDS, write words exactly as they appear in the passage. For True / False / Not Given, type True, False or Not Given.",
      text: "[A] For many years, conservationists assumed that the countryside was the natural home of wild bees and that cities were hostile places where few species could survive. Concrete, traffic and a lack of open land seemed to leave little room for insects that depend on flowers. However, a series of surveys carried out in several European cities over the past decade has challenged this belief. In some cases, researchers recorded a greater variety of bee species in urban parks and gardens than in the surrounding farmland.\n\n[B] The explanation lies partly in the way modern farming has changed the countryside. Large fields planted with a single crop provide food for only a short period each year, and the hedgerows that once offered nesting sites have often been removed. Cities, by contrast, contain a patchwork of small habitats. Private gardens, allotments, railway embankments and roadside verges flower at different times, so that bees can find food from early spring until late autumn. Many wild species, particularly those that nest in the ground, also take advantage of bare soil and gaps in old walls.\n\n[C] Not all urban bees benefit equally, however. A study led by the ecologist Dr Marit Solberg compared the bee populations of twelve cities. She found that species which feed on a wide range of flowers, known as generalists, were thriving, while specialist species, which rely on a single type of plant, were often missing. One reason is that ornamental gardens frequently contain showy varieties bred for their appearance. These plants may produce little nectar or pollen, so they attract visitors but offer them almost nothing to eat. Dr Solberg argues that cities should therefore plant native wildflowers rather than decorative hybrids.\n\n[D] Another challenge is competition from managed honey bees. In recent years, rooftop hives have become fashionable in many cities, and some local governments have encouraged them as a way of supporting nature. Yet honey bees are a single species kept in large numbers, and they collect from the same flowers as wild bees. Researchers at one university monitored a park in which the number of hives was doubled. Over two summers, they observed that wild bees visited fewer flowers and that several rarer species disappeared from the park. The scientists stress that this finding comes from one site and should not be treated as proof that all rooftop hives cause harm, but they recommend that cities limit the density of hives until more evidence is available.\n\n[E] Despite these concerns, there are encouraging examples of how simple changes can help. In one northern city, officials stopped mowing selected areas of grass until late summer, allowing clover and dandelions to flower. Within three years, volunteer counters recorded a noticeable rise in the number of bee species in those areas. Residents were asked to leave a small corner of their gardens untidy, and many agreed. Dr Solberg believes that such low-cost measures, combined with a ban on certain pesticides in public spaces, would do more for urban bees than any single large project. \"Cities do not have to be perfect,\" she says. \"They only have to stop being empty.\"\n\n[F] Public involvement is also changing how bees are studied. Because professional surveys are expensive, many cities now rely on volunteers who photograph insects and upload the images to a shared database. Specialists then identify the species. Critics point out that volunteers tend to photograph the large, colourful bees that are easy to see and may overlook small or dull species, which could bias the results. To reduce this problem, some projects provide training days and simple identification guides. Even so, the researchers who manage the database accept that the figures show general trends, not exact numbers.",
      questions: [
        {
          id: "rd1-q01",
          type: "summary",
          prompt: "1. Complete the sentence using NO MORE THAN TWO WORDS from the passage: In some surveys, more bee species were found in urban parks and gardens than in the surrounding ______.",
          correctAnswer: "farmland",
          explanation: "Paragraph A: 'a greater variety of bee species in urban parks and gardens than in the surrounding farmland'. Pattern: wrong subject — 'countryside' is the general term earlier in the paragraph but is not the word used in this sentence.",
          tag: "summary-completion"
        },
        {
          id: "rd1-q02",
          type: "summary",
          prompt: "2. Complete the sentence using NO MORE THAN TWO WORDS from the passage: On modern farms, a field planted with a single crop provides food for only a ______ period each year.",
          correctAnswer: "short",
          explanation: "Paragraph B: 'provide food for only a short period each year'. The gap needs an adjective before 'period'. Pattern: opposite polarity — 'long' would reverse the meaning.",
          tag: "summary-completion"
        },
        {
          id: "rd1-q03",
          type: "summary",
          prompt: "3. Complete the sentence using NO MORE THAN TWO WORDS from the passage: Bees can find food in cities from early spring until late autumn because different habitats flower at different ______.",
          correctAnswer: "times",
          explanation: "Paragraph B: 'flower at different times'. Pattern: partial match — 'habitats' appears nearby and fits the grammar but changes the meaning.",
          tag: "summary-completion"
        },
        {
          id: "rd1-q04",
          type: "summary",
          prompt: "4. Complete the sentence using NO MORE THAN TWO WORDS from the passage: Bee species that feed on a wide range of flowers are known as ______.",
          correctAnswer: "generalists",
          explanation: "Paragraph C: 'species which feed on a wide range of flowers, known as generalists'. Pattern: opposite polarity — 'specialist' is the nearby word with the reverse meaning.",
          tag: "summary-completion"
        },
        {
          id: "rd1-q05",
          type: "summary",
          prompt: "5. Complete the sentence using NO MORE THAN TWO WORDS from the passage: Showy garden plants bred for their appearance may produce little nectar or ______.",
          correctAnswer: "pollen",
          explanation: "Paragraph C: 'little nectar or pollen'. The gap follows 'nectar or', so a second food source of the same kind is needed. Pattern: true but irrelevant — 'nothing to eat' in the next sentence repeats the idea but is not the word that completes this one.",
          tag: "summary-completion"
        },
        {
          id: "rd1-q06",
          type: "tfng",
          prompt: "6. The surveys that challenged the old belief about wild bees were carried out in a single European city.",
          correctAnswer: "False",
          explanation: "Paragraph A: 'surveys carried out in several European cities'. The statement contradicts 'several'. Pattern: partial match — the surveys and the European setting are right, but the number of cities is wrong.",
          tag: "tfng"
        },
        {
          id: "rd1-q07",
          type: "tfng",
          prompt: "7. Specialist bee species were often absent from the cities that Dr Solberg studied.",
          correctAnswer: "True",
          explanation: "Paragraph C: 'specialist species ... were often missing'. 'Absent' paraphrases 'missing'.",
          tag: "tfng"
        },
        {
          id: "rd1-q08",
          type: "tfng",
          prompt: "8. Rooftop hives were first introduced to cities by local governments.",
          correctAnswer: "Not Given",
          explanation: "Paragraph D says some governments 'have encouraged them', but nothing is said about who introduced hives first. Pattern: true but irrelevant — governments and hives are linked in the text, but not in the way the statement claims.",
          tag: "tfng"
        },
        {
          id: "rd1-q09",
          type: "tfng",
          prompt: "9. The scientists say their park study proves that rooftop hives harm wild bees.",
          correctAnswer: "False",
          explanation: "Paragraph D: the finding 'should not be treated as proof that all rooftop hives cause harm'. Pattern: over-generalisation — the statement turns a one-site observation into proof.",
          tag: "tfng"
        },
        {
          id: "rd1-q10",
          type: "tfng",
          prompt: "10. In the northern city, the number of bee species rose after mowing was reduced.",
          correctAnswer: "True",
          explanation: "Paragraph E: officials stopped mowing selected areas and 'volunteer counters recorded a noticeable rise in the number of bee species in those areas'.",
          tag: "tfng"
        },
        {
          id: "rd1-q11",
          type: "mcq",
          prompt: "11. What is the writer's main purpose in paragraph B?",
          options: [
            "To criticise farmers for removing hedgerows",
            "To explain why cities can support many bee species",
            "To describe how ground bees build their nests",
            "To compare private gardens with allotments"
          ],
          correctAnswer: 1,
          explanation: "Paragraph B explains how farming reduced food and nesting sites and how a patchwork of urban habitats provides both. A: wrong emphasis (hedgerow removal is one detail). C and D: true but irrelevant details.",
          tag: "mcq"
        },
        {
          id: "rd1-q12",
          type: "mcq",
          prompt: "12. What do the researchers recommend about rooftop hives?",
          options: [
            "Banning all hives in cities",
            "Limiting the density of hives until more evidence is available",
            "Doubling the number of hives in parks",
            "Replacing honey bees with wild bees"
          ],
          correctAnswer: 1,
          explanation: "Paragraph D: 'they recommend that cities limit the density of hives until more evidence is available'. A is an over-generalisation; C repeats a detail of the experiment, not a recommendation; D is not mentioned.",
          tag: "mcq"
        },
        {
          id: "rd1-q13",
          type: "mcq",
          prompt: "13. What criticism of volunteer data is mentioned in paragraph F?",
          options: [
            "There are too few volunteers",
            "Photographs are too expensive to collect",
            "Volunteers may record mainly large, colourful bees",
            "Specialists cannot identify bees from photographs"
          ],
          correctAnswer: 2,
          explanation: "Paragraph F: volunteers 'tend to photograph the large, colourful bees' and 'may overlook small or dull species'. Pattern for A, B, D: true-sounding but unsupported claims; the text says surveys by professionals are expensive, and specialists do identify species from images.",
          tag: "mcq"
        }
      ]
    },
    {
      id: "ielts-read-02",
      title: "Reading Practice 2 — Cities Built for Walking",
      bandFocus: "6.5–8.0",
      passageTitle: "Cities Built for Walking",
      timeLimitMinutes: 20,
      instructions: "Read the passage and answer questions 1–13. (The studies and people described are fictional and written for practice.) Questions 1–5 ask you to choose the best heading for a paragraph. Questions 6–9 ask which researcher holds each view (each researcher is used once). Questions 10–13 are multiple choice.",
      text: "[A] Throughout the twentieth century, most cities were planned around the car. Wide roads, large car parks and separate districts for housing, shopping and work made sense when petrol was cheap and traffic was light. Today, however, a growing number of planners argue that this model has reached its limits. They advocate \"walkable\" cities, in which daily needs can be reached on foot within about fifteen minutes. The idea is simple, but its effects, and the arguments surrounding it, are surprisingly wide-ranging. Supporters point to cities in parts of northern Europe, where walking and cycling already account for a large share of everyday trips, while critics doubt that the same approach can be copied in places with very different climates, histories and street layouts. The debate is therefore as much about local conditions as about general principles, and the evidence discussed below should be read with that in mind.\n\n[B] The most immediate argument concerns health. Dr Lena Fischer, a public health researcher, has followed the habits of residents in two neighbourhoods with similar populations. In the first, shops, schools and parks were close to homes; in the second, they were separated by main roads. Over a three-year period, people in the first neighbourhood walked on average nearly twice as far each day, often without thinking of it as exercise. Dr Fischer concludes that the most effective way to increase physical activity is not to persuade people to exercise but to design places where walking is the easiest option.\n\n[C] Economists have also taken an interest. Professor Idris Moyo studied streets where traffic lanes were narrowed and pavements widened. Many shopkeepers had feared that fewer parking spaces would drive customers away. In fact, Professor Moyo found that sales in most of the shops rose, because pedestrians stop more often and visit more premises than drivers do. He cautions, though, that the results depended on the streets being close to public transport and that the same changes might not succeed in areas with few bus or train services.\n\n[D] A third strand of argument concerns the character of neighbourhoods. The urban planner Dr Helena Park believes that walkable design strengthens community life. When people pass one another on foot, they are more likely to recognise neighbours, stop for a conversation and notice when something is wrong. She points to a district in which a new pedestrian square was opened and reports that the number of community events organised by residents more than tripled within two years. Critics reply that such figures are hard to interpret, because the district also received extra funding for cultural activities during the same period.\n\n[E] Not everyone is convinced. Carlos Duarte, who manages transport for a mid-sized city, says that walkable ideals are easiest to apply in compact, older centres and much harder in sprawling suburbs. Many residents of such suburbs live several kilometres from the nearest shop and have no realistic alternative to driving. Mr Duarte also notes that elderly and disabled residents may find long walks difficult. He argues that cities should improve buses, cycle lanes and footpaths together, rather than concentrate on walking alone.\n\n[F] Most experts now agree that no single measure can transform a city. Walkable design works best when it is combined with reliable public transport and mixed housing, so that people on different incomes can live near services. Several cities have begun to measure success not by how quickly cars move through them but by how many people choose to spend time in public spaces. Whether this change in thinking will survive pressure from drivers remains to be seen, but the debate has already altered the questions that planners ask.",
      questions: [
        {
          id: "rd2-q01",
          type: "heading",
          forParagraph: "B",
          prompt: "1. Choose the best heading for paragraph B.",
          options: [
            "Why design may matter more than exercise campaigns",
            "The cost of building new parks",
            "A comparison of two school systems",
            "Why many people dislike walking"
          ],
          correctAnswer: 0,
          explanation: "Paragraph B reports that people walk more where facilities are close and concludes that design matters more than persuading people to exercise. B names a detail the text never costs; C and D are not mentioned. Pattern: heading matches a minor detail or an unsupported claim.",
          tag: "matching-headings"
        },
        {
          id: "rd2-q02",
          type: "heading",
          forParagraph: "C",
          prompt: "2. Choose the best heading for paragraph C.",
          options: [
            "The rising price of petrol",
            "How parking charges are set",
            "Unexpected effects on local businesses",
            "The decline of public transport"
          ],
          correctAnswer: 2,
          explanation: "Paragraph C: shopkeepers feared a loss of customers, but 'sales in most of the shops rose'. Parking is mentioned only as the shopkeepers' worry, so B is a detail (true but irrelevant); A and D are not discussed.",
          tag: "matching-headings"
        },
        {
          id: "rd2-q03",
          type: "heading",
          forParagraph: "D",
          prompt: "3. Choose the best heading for paragraph D.",
          options: [
            "The history of pedestrian squares",
            "Funding for sports clubs",
            "Why residents dislike events",
            "Possible benefits for community life"
          ],
          correctAnswer: 3,
          explanation: "Paragraph D argues that walkable design 'strengthens community life'. B picks up the 'extra funding' detail; A and C are not mentioned. Pattern: heading matches a detail, not the main idea.",
          tag: "matching-headings"
        },
        {
          id: "rd2-q04",
          type: "heading",
          forParagraph: "E",
          prompt: "4. Choose the best heading for paragraph E.",
          options: [
            "Advantages of suburban life",
            "Limits of walkable ideas outside city centres",
            "How to build more car parks",
            "The need for faster trains"
          ],
          correctAnswer: 1,
          explanation: "Paragraph E: ideals are 'easiest to apply in compact, older centres and much harder in sprawling suburbs'. A is the reverse of the paragraph's concern (opposite polarity); C and D are not discussed.",
          tag: "matching-headings"
        },
        {
          id: "rd2-q05",
          type: "heading",
          forParagraph: "F",
          prompt: "5. Choose the best heading for paragraph F.",
          options: [
            "A call to ban private cars",
            "The failure of recent projects",
            "Combining walking with other improvements",
            "Why drivers prefer cities"
          ],
          correctAnswer: 2,
          explanation: "Paragraph F: walkable design 'works best when it is combined with reliable public transport and mixed housing'. A is over-generalisation (no one proposes a ban); B contradicts the paragraph's tone; D is not mentioned.",
          tag: "matching-headings"
        },
        {
          id: "rd2-q06",
          type: "matching",
          prompt: "6. Which researcher holds this view? 'Making walking the easiest choice is more effective than encouraging people to exercise.'",
          options: ["Dr Fischer", "Professor Moyo", "Dr Park", "Mr Duarte"],
          correctAnswer: 0,
          explanation: "Paragraph B: Dr Fischer concludes the best way is 'to design places where walking is the easiest option'. Pattern: wrong subject — Dr Park also supports walkable design but argues from community life.",
          tag: "matching-features"
        },
        {
          id: "rd2-q07",
          type: "matching",
          prompt: "7. Which researcher holds this view? 'The benefit to shops may depend on nearby public transport.'",
          options: ["Dr Fischer", "Professor Moyo", "Dr Park", "Mr Duarte"],
          correctAnswer: 1,
          explanation: "Paragraph C: Professor Moyo says 'the results depended on the streets being close to public transport'. Pattern: wrong subject — Mr Duarte also mentions buses, but as part of overall transport improvements, not shop sales.",
          tag: "matching-features"
        },
        {
          id: "rd2-q08",
          type: "matching",
          prompt: "8. Which researcher holds this view? 'Walkable design helps neighbours recognise and look out for one another.'",
          options: ["Dr Fischer", "Professor Moyo", "Dr Park", "Mr Duarte"],
          correctAnswer: 2,
          explanation: "Paragraph D: Dr Park says people are 'more likely to recognise neighbours ... and notice when something is wrong'.",
          tag: "matching-features"
        },
        {
          id: "rd2-q09",
          type: "matching",
          prompt: "9. Which researcher holds this view? 'Buses, cycle lanes and footpaths should all be improved, not walking alone.'",
          options: ["Dr Fischer", "Professor Moyo", "Dr Park", "Mr Duarte"],
          correctAnswer: 3,
          explanation: "Paragraph E: Mr Duarte argues that cities 'should improve buses, cycle lanes and footpaths together'.",
          tag: "matching-features"
        },
        {
          id: "rd2-q10",
          type: "mcq",
          prompt: "10. What did Dr Fischer's study find?",
          options: [
            "Residents of both neighbourhoods walked equally far",
            "People walked further where facilities were close to their homes",
            "Main roads made residents exercise more",
            "Residents preferred to exercise in parks"
          ],
          correctAnswer: 1,
          explanation: "Paragraph B: people in the neighbourhood with nearby shops, schools and parks 'walked on average nearly twice as far'. A is opposite polarity; C reverses the cause; D is not stated.",
          tag: "mcq"
        },
        {
          id: "rd2-q11",
          type: "mcq",
          prompt: "11. Why are the figures about community events hard to interpret?",
          options: [
            "The events were very small",
            "The district also received extra funding for culture",
            "Residents refused to attend",
            "The pedestrian square was unfinished"
          ],
          correctAnswer: 1,
          explanation: "Paragraph D: the district 'also received extra funding for cultural activities during the same period', so the rise may have another cause. The other options are not mentioned.",
          tag: "mcq"
        },
        {
          id: "rd2-q12",
          type: "mcq",
          prompt: "12. According to Mr Duarte, what is the main difficulty for suburban residents?",
          options: [
            "There are no shops in any suburb",
            "They live far from shops and have no realistic alternative to driving",
            "They dislike public transport",
            "Cycle lanes are too dangerous"
          ],
          correctAnswer: 1,
          explanation: "Paragraph E: many residents 'live several kilometres from the nearest shop and have no realistic alternative to driving'. A is over-generalisation ('no shops in any suburb'); C and D are not stated.",
          tag: "mcq"
        },
        {
          id: "rd2-q13",
          type: "mcq",
          prompt: "13. What do some cities now measure to judge success?",
          options: [
            "The speed of traffic",
            "The number of cars sold",
            "How many people choose to spend time in public spaces",
            "The total length of pavements"
          ],
          correctAnswer: 2,
          explanation: "Paragraph F: 'not by how quickly cars move through them but by how many people choose to spend time in public spaces'. A is the old measure that the paragraph rejects (opposite polarity).",
          tag: "mcq"
        }
      ]
    },
    {
      id: "ielts-read-03",
      title: "Reading Practice 3 — Sleep and the Student (Distractor Workout)",
      bandFocus: "7.0–8.5",
      passageTitle: "Sleep and the Student",
      timeLimitMinutes: 20,
      instructions: "Read the passage and answer questions 1–13. (The studies and people described are fictional and written for practice.) Every explanation names the distractor pattern that the wrong options use, so review each one after you finish. For True / False / Not Given, type True, False or Not Given. Where a question says NO MORE THAN TWO WORDS, write words exactly as they appear in the passage.",
      text: "[A] Students have long been told that an all-night revision session is the best way to prepare for an exam. A growing body of research suggests the opposite. When we sleep, the brain does not simply switch off; it replays the day's experiences and moves important information from short-term to long-term storage. A student who sacrifices sleep to read one more chapter may therefore be undermining the very process that makes learning permanent. Sleep researchers have studied this link for more than a century, but modern brain-scanning techniques have allowed them to observe memory processing directly, and the picture that is emerging is more detailed than anyone expected. Understanding what happens during the night is important not only for individual students but also for teachers and parents who set study routines. This article reviews some of the main findings, the limits of the evidence and the practical advice that scientists offer.\n\n[B] One influential experiment, carried out at a university in Canada, divided sixty volunteers into two groups. Both groups learned a list of unfamiliar word pairs in the evening. One group then slept normally; the other stayed awake all night and was allowed to sleep for the following two nights. When both groups were tested a week later, the group that had slept on the first night recalled about a fifth more word pairs. The researchers noted that the sleep-deprived volunteers had made up the lost hours, which suggests that the timing of sleep, not merely the total amount, affects memory.\n\n[C] Different types of sleep seem to serve different purposes. Deep sleep, which occurs mainly in the first half of the night, appears to be important for facts and figures, while the dreaming stage, which dominates the later hours, may help with creative problem-solving and the understanding of complex ideas. Cutting a night short by two hours, for example by waking early to revise, therefore removes a disproportionate share of the dreaming stage. Sleep scientist Dr Amara Osei warns that students who regularly sleep for five hours may be losing the very stage that allows them to link new knowledge with what they already know.\n\n[D] Critics urge caution. Some psychologists point out that many sleep studies involve small groups of volunteers who are mostly university students, and that results may not apply to older learners or to children. Others note that individuals differ: a few people seem to function well on much less sleep than average. There is also the difficulty that a participant who feels well rested may simply be more motivated to perform well in a test. Researchers acknowledge these limits, but they argue that findings from different laboratories point in the same direction.\n\n[E] What practical advice follows? Dr Osei suggests that students should plan to finish their main revision by early evening, allowing time to relax before bed. She also recommends a short review of key material just before sleep, since information seen last may be replayed first. Napping can help, she adds, but only if it is brief, as naps longer than about thirty minutes can leave a person groggy. Above all, she stresses regularity: going to bed and getting up at similar times each day gives the brain a predictable rhythm that supports both sleep and memory.\n\n[F] Some schools have responded by starting lessons later. A district that moved its first lesson from 8.00 to 9.00 reported fewer absences in the following year, although it is difficult to separate the effect of sleep from other changes made at the same time, such as a new timetable. Teachers said that students appeared more alert in morning classes, but the district did not collect test scores, so the question of exam performance remains open.",
      questions: [
        {
          id: "rd3-q01",
          type: "tfng",
          prompt: "1. The brain is inactive during sleep.",
          correctAnswer: "False",
          explanation: "Paragraph A: 'the brain does not simply switch off; it replays the day's experiences'. Pattern: opposite polarity — the statement is the old belief that the passage rejects.",
          tag: "tfng"
        },
        {
          id: "rd3-q02",
          type: "tfng",
          prompt: "2. The volunteers in the Canadian experiment were all university students.",
          correctAnswer: "Not Given",
          explanation: "Paragraph B says only 'sixty volunteers'. Paragraph D says many studies use mostly students, but does not say this one did. Pattern: true but irrelevant — a general remark about studies is not a fact about this experiment.",
          tag: "tfng"
        },
        {
          id: "rd3-q03",
          type: "tfng",
          prompt: "3. The group that slept on the first night remembered more word pairs a week later.",
          correctAnswer: "True",
          explanation: "Paragraph B: the group that slept on the first night 'recalled about a fifth more word pairs'. Pattern: a statement that the other group did better would be opposite polarity.",
          tag: "tfng"
        },
        {
          id: "rd3-q04",
          type: "tfng",
          prompt: "4. Long naps are as helpful as short ones.",
          correctAnswer: "False",
          explanation: "Paragraph E: napping helps 'only if it is brief', and naps longer than about thirty minutes 'can leave a person groggy'. Pattern: over-generalisation — the statement treats all naps as equally helpful.",
          tag: "tfng"
        },
        {
          id: "rd3-q05",
          type: "mcq",
          prompt: "5. What does the experiment in paragraph B suggest?",
          options: [
            "Total sleep matters more than timing",
            "The timing of sleep as well as the amount affects memory",
            "Staying awake improves recall",
            "Word pairs are difficult to learn"
          ],
          correctAnswer: 1,
          explanation: "Paragraph B: 'the timing of sleep, not merely the total amount, affects memory'. A is a partial match that drops 'timing'; C is opposite polarity; D is true but irrelevant.",
          tag: "mcq"
        },
        {
          id: "rd3-q06",
          type: "mcq",
          prompt: "6. According to paragraph C, what does waking two hours early mainly remove?",
          options: ["Deep sleep", "The dreaming stage", "The need for naps", "Facts and figures"],
          correctAnswer: 1,
          explanation: "Paragraph C: deep sleep occurs mainly in the first half, the dreaming stage 'dominates the later hours', so cutting the end of the night 'removes a disproportionate share of the dreaming stage'. A is wrong subject (deep sleep belongs to the first half, which is unaffected); C is true but irrelevant (naps are discussed elsewhere); D confuses what deep sleep is for with what is lost.",
          tag: "mcq"
        },
        {
          id: "rd3-q07",
          type: "mcq",
          prompt: "7. What is the overall message of paragraph D?",
          options: [
            "It has no value",
            "Cautious: limits are acknowledged but findings agree overall",
            "Completely certain",
            "It applies only to children"
          ],
          correctAnswer: 1,
          explanation: "Paragraph D lists limits but ends 'findings from different laboratories point in the same direction'. A is opposite polarity; C is over-generalisation; D reverses a limitation about children.",
          tag: "mcq"
        },
        {
          id: "rd3-q08",
          type: "mcq",
          prompt: "8. What is said about the district that started lessons later?",
          options: [
            "Test scores rose",
            "Absences fell, but the cause is unclear",
            "Teachers disliked the change",
            "Nothing changed"
          ],
          correctAnswer: 1,
          explanation: "Paragraph F: 'fewer absences' but it is 'difficult to separate the effect of sleep from other changes'. A is Not Given (no scores were collected) and is true but irrelevant to absences; C and D are opposite polarity, since teachers reported students seemed more alert.",
          tag: "mcq"
        },
        {
          id: "rd3-q09",
          type: "summary",
          prompt: "9. Complete the sentence using NO MORE THAN TWO WORDS from the passage: During sleep, the brain ______ the day's experiences.",
          correctAnswer: "replays",
          explanation: "Paragraph A: 'it replays the day's experiences'. Pattern: opposite polarity — 'switch off' is the nearby phrase for what the brain does not do.",
          tag: "summary-completion"
        },
        {
          id: "rd3-q10",
          type: "summary",
          prompt: "10. Complete the sentence using NO MORE THAN TWO WORDS from the passage: Deep sleep occurs mainly in the ______ of the night.",
          correctAnswer: "first half",
          explanation: "Paragraph C: 'mainly in the first half of the night'. Pattern: opposite polarity — 'later hours' belongs to the dreaming stage.",
          tag: "summary-completion"
        },
        {
          id: "rd3-q11",
          type: "summary",
          prompt: "11. Complete the sentence using NO MORE THAN TWO WORDS from the passage: The dreaming stage may help with creative problem-solving and the ______ of complex ideas.",
          correctAnswer: "understanding",
          explanation: "Paragraph C: 'the understanding of complex ideas'. Pattern: partial match — 'link' (in the next sentence) fits the meaning but not the grammar of the gap.",
          tag: "summary-completion"
        },
        {
          id: "rd3-q12",
          type: "summary",
          prompt: "12. Complete the sentence using NO MORE THAN TWO WORDS from the passage: Dr Osei recommends a short ______ of key material just before sleep.",
          correctAnswer: "review",
          explanation: "Paragraph E: 'a short review of key material just before sleep'. Pattern: true but irrelevant — 'revision' appears earlier in the paragraph but refers to the main study session.",
          tag: "summary-completion"
        },
        {
          id: "rd3-q13",
          type: "summary",
          prompt: "13. Complete the sentence using NO MORE THAN TWO WORDS from the passage: Going to bed at similar times each day gives the brain a predictable ______.",
          correctAnswer: "rhythm",
          explanation: "Paragraph E: 'a predictable rhythm that supports both sleep and memory'. Pattern: wrong subject — 'regularity' is the habit, not what the brain receives.",
          tag: "summary-completion"
        }
      ]
    }
  ],

  writingSets: [
    {
      id: "ielts-write-01",
      title: "Writing Practice 1 — Task 1: Teenage Leisure Time (Bar Chart)",
      task: 1,
      bandFocus: "6.0–8.0",
      timeLimitMinutes: 20,
      minWords: 150,
      prompt: "The bar chart shows the average number of hours per week that teenagers in one country spent on four leisure activities in 2010 and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      dataTable: {
        caption: "Average hours per week spent on leisure activities by teenagers",
        headers: ["Activity", "2010 (hours)", "2022 (hours)"],
        rows: [
          ["Watching television", "12", "6"],
          ["Playing video games", "5", "9"],
          ["Using social media", "3", "11"],
          ["Reading for pleasure", "4", "2"]
        ]
      },
      modelAnswer: "The bar chart compares the average number of hours per week that teenagers in one country spent on four leisure activities in 2010 and 2022.\n\nOverall, time spent on video games and social media rose, while the time given to television and reading fell. Social media showed the most dramatic increase, and television the most significant decline.\n\nIn 2010, television was by far the most popular activity, at 12 hours a week, followed by video games at five hours. Reading for pleasure and social media occupied only four and three hours respectively.\n\nBy 2022, the picture had changed markedly. Social media use more than tripled to 11 hours, making it the most time-consuming activity, and video games rose by four hours to nine. In contrast, television viewing halved to six hours, and reading, already the second lowest, fell from four hours to just two. In total, the four activities took up 28 hours a week in 2022, compared with 24 hours in 2010.",
      bandAnnotation: "TA: The overview names both the shared direction of change and the two extreme movements before any numbers are given. CC: Paragraphs are organised by time period, and 'By 2022, the picture had changed markedly' links them. LR: Precise data vocabulary ('more than tripled', 'halved', 'by far the most popular', 'respectively'). GRA: Accurate past tenses, comparative structures and a participle phrase ('making it the most time-consuming activity')."
    },
    {
      id: "ielts-write-02",
      title: "Writing Practice 2 — Task 1: Household Energy Use (Pie Charts)",
      task: 1,
      bandFocus: "6.0–8.0",
      timeLimitMinutes: 20,
      minWords: 150,
      prompt: "The two pie charts show the percentage of household energy used for five different purposes in a country in 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      dataTable: {
        caption: "Share of household energy use by purpose (%)",
        headers: ["Purpose", "1990 (%)", "2020 (%)"],
        rows: [
          ["Heating", "58", "44"],
          ["Water heating", "20", "18"],
          ["Lighting", "9", "4"],
          ["Appliances and electronics", "8", "28"],
          ["Cooking", "5", "6"]
        ]
      },
      modelAnswer: "The pie charts compare how households in one country used energy for five purposes in 1990 and 2020.\n\nOverall, heating remained the largest use of household energy in both years, although its share fell considerably, while the proportion used by appliances and electronics increased dramatically.\n\nIn 1990, heating accounted for more than half of all energy use, at 58 per cent, followed by water heating at 20 per cent. Lighting, appliances and cooking were all minor categories, making up 9, 8 and 5 per cent respectively.\n\nBy 2020, heating had dropped to 44 per cent, and lighting had more than halved to just 4 per cent. In contrast, appliances and electronics rose from 8 to 28 per cent, meaning that they overtook water heating, which stood at 18 per cent, to become the second largest category. Cooking changed very little, edging up by one percentage point to 6 per cent. Lighting was the smallest category at the end of the period.",
      bandAnnotation: "TA: A clear overview of the largest category and the biggest change; all five categories are reported and compared across both years. CC: Information is grouped by year, with 'In contrast' and 'meaning that' linking cause and result. LR: Share language ('accounted for', 'making up', 'stood at') and correct 'per cent' versus 'percentage point'. GRA: Participle phrases ('making up', 'edging up'), a relative clause ('which stood at 18 per cent') and consistent tenses."
    },
    {
      id: "ielts-write-03",
      title: "Writing Practice 3 — Task 1: How Recycled Paper Is Made (Process)",
      task: 1,
      bandFocus: "6.0–8.0",
      timeLimitMinutes: 20,
      minWords: 150,
      prompt: "The diagram shows the stages in the process of making recycled paper from used paper. Summarise the information by selecting and reporting the main features. Write at least 150 words.",
      dataTable: {
        caption: "Stages in the production of recycled paper",
        headers: ["Stage", "What happens"],
        rows: [
          ["1. Collection", "Used paper is collected from homes and offices."],
          ["2. Sorting", "Paper is sorted by type and quality; non-paper items are removed."],
          ["3. Pulping", "Paper is mixed with water and chemicals in a large tank to form a pulp."],
          ["4. Cleaning", "The pulp is screened and cleaned to remove ink, staples and glue."],
          ["5. Pressing", "Clean pulp is spread on a moving belt and pressed to squeeze out water."],
          ["6. Drying", "The pressed sheet passes over heated rollers and dries."],
          ["7. Rolling", "Dried paper is wound onto large rolls and cut."]
        ]
      },
      modelAnswer: "The diagram illustrates the process by which used paper is turned into new paper, from the collection of waste paper to the cutting of the finished product.\n\nOverall, the process is linear and consists of seven stages, beginning with the collection of used paper and ending with the winding and cutting of the dried sheets.\n\nFirst, used paper is collected from homes and offices and then sorted by type and quality, so that any non-paper items can be removed. Next, the sorted paper is mixed with water and chemicals in a large tank, where it forms a pulp.\n\nFollowing this, the pulp is screened and cleaned to remove ink, staples and glue. Once it is clean, the pulp is spread onto a moving belt and pressed so that the water is squeezed out.\n\nThe resulting sheet then passes over heated rollers, which dry it. In the final stage, the dried paper is wound onto large rolls and cut.",
      bandAnnotation: "TA: The overview states the type of process, the number of stages and the start and end points; all seven stages are covered accurately. CC: Varied sequencing ('First', 'Next', 'Following this', 'Once it is clean', 'In the final stage') with short steps joined into longer sentences. LR: Process vocabulary ('screened', 'pulp', 'squeezed out') and accurate reference ('the resulting sheet'). GRA: Consistent passive voice, relative clauses ('which dry it') and 'so that' purpose clauses."
    },
    {
      id: "ielts-write-04",
      title: "Writing Practice 4 — Task 1: A Coastal Town Centre (Maps)",
      task: 1,
      bandFocus: "6.0–8.0",
      timeLimitMinutes: 20,
      minWords: 150,
      prompt: "The two maps show a coastal town centre in 2000 and at the present time. The table describes what each map shows. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      dataTable: {
        caption: "A coastal town centre: 2000 and today",
        headers: ["Feature", "2000", "Today"],
        rows: [
          ["Harbour", "Fishing boats and a fish market", "Marina for leisure boats and a café"],
          ["Main street", "Open to traffic", "Pedestrian zone with trees"],
          ["North-west", "Textile factory", "Apartment block"],
          ["East", "Small surface car park", "Multi-storey car park"],
          ["Railway station", "One platform", "Extended, with a new ticket hall"],
          ["Beach", "Open sand with a few huts", "Promenade along the beach"]
        ]
      },
      modelAnswer: "The two maps show how a coastal town centre has changed between 2000 and the present day.\n\nOverall, the town has changed from a working fishing and industrial community into a more leisure-oriented area, with improved facilities for visitors and pedestrians.\n\nIn 2000, the harbour was used by fishing boats and contained a fish market, while the main street was open to traffic. A textile factory stood in the north-west, and a small surface car park was located to the east. The railway station had a single platform, and the beach consisted of open sand with a few huts.\n\nToday, the harbour has been converted into a marina for leisure boats, and a café has been added. The main street has become a pedestrian zone with trees, and the old factory has been replaced by an apartment block. The surface car park has been replaced by a multi-storey car park, and the station has been extended with a new ticket hall. Finally, a promenade has been built along the beach.",
      bandAnnotation: "TA: The overview identifies the dominant change (working to leisure) and every feature in the table is described. CC: The answer moves from the earlier map to the later one in a clear order, with 'Finally' closing the sequence. LR: Change verbs ('converted into', 'replaced by', 'added', 'extended') and position language ('in the north-west', 'to the east'). GRA: Accurate shift from past simple to present perfect passive, with complex sentences using 'while' and compound sentences using 'and'."
    },
    {
      id: "ielts-write-05",
      title: "Writing Practice 5 — Task 2: Childhood Obesity (Problem/Solution)",
      task: 2,
      bandFocus: "6.5–8.5",
      timeLimitMinutes: 40,
      minWords: 250,
      prompt: "In many countries, the number of overweight children is increasing. What are the causes of this problem, and what can be done to solve it? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
      modelAnswer: "In many countries, the number of overweight children has risen sharply in recent decades. This essay will examine the main causes of this trend and suggest practical measures to reverse it.\n\nOne major cause is a change in diet. Processed snacks and sugary drinks are cheap, heavily advertised and available almost everywhere, so many children consume far more calories than they need. A second cause is a decline in physical activity. Children now spend long hours sitting in front of screens, and in busy cities many parents consider the streets too dangerous for children to play outside or cycle to school. As a result, the energy children take in is no longer balanced by the energy they use. Together, these two changes make it far easier for children to gain weight than it was for earlier generations.\n\nTo address the dietary problem, governments could restrict the advertising of unhealthy food aimed at children and introduce a tax on sugary drinks, as Mexico and the United Kingdom have already done. Schools can also help by serving nutritious meals and teaching children to cook simple, healthy dishes, which would build habits that last into adulthood. To increase activity, local authorities should create safe parks and cycle lanes, while schools could extend daily sport and active play. Parents, too, have a role to play by limiting screen time and eating together as a family.\n\nIn conclusion, childhood obesity is mainly caused by poor diets and inactive lifestyles. A combination of government regulation, better school programmes and responsible parenting would give children the best chance of growing up healthy.",
      bandAnnotation: "TA: Both parts of the question are answered; each solution is matched to a cause (diet and activity) and explained. CC: A clear preview in the introduction, one cause paragraph and one solution paragraph, and a conclusion that summarises both. LR: Topic vocabulary ('processed snacks', 'nutritious meals', 'screen time') and accurate cause-effect phrases ('As a result'). GRA: A range of structures, including a relative clause ('which would build habits'), a comparative ('far more calories than') and a passive ('is no longer balanced'), used accurately."
    },
    {
      id: "ielts-write-06",
      title: "Writing Practice 6 — Task 2: International Tourism (Advantages/Disadvantages)",
      task: 2,
      bandFocus: "6.5–8.5",
      timeLimitMinutes: 40,
      minWords: 250,
      prompt: "International tourism has increased greatly in recent years. Discuss the advantages and disadvantages of this development for the countries that receive tourists. Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
      modelAnswer: "Tourism has grown rapidly in recent years, and millions of people now travel abroad every year. While this brings clear economic benefits to host countries, it also creates problems that should not be ignored.\n\nThe most obvious advantage is economic. Tourists spend money on hotels, restaurants, transport and souvenirs, which creates jobs and generates tax revenue. In countries with few other industries, such as small island nations, tourism may be the main source of income, allowing governments to invest in roads, hospitals and schools. Tourism can also encourage countries to protect their heritage, since historic buildings and natural parks attract visitors and therefore have a financial value. Local crafts and traditions may also be revived, since visitors are willing to pay for authentic products.\n\nHowever, there are significant disadvantages. Large numbers of visitors can damage the very attractions they come to see: fragile coral reefs, ancient monuments and quiet villages suffer from pollution, litter and overcrowding. In addition, rising demand for hotels and holiday homes can push up housing costs, making it difficult for local residents to afford to live in their own communities. Many tourism jobs are also seasonal and low-paid, so the economic benefits are not always shared fairly. Furthermore, some of the income may leave the country when foreign companies own the large hotels.\n\nIn my opinion, the benefits of tourism outweigh the drawbacks, provided that governments manage visitor numbers carefully. Limits on daily visitors, taxes that fund environmental protection and regulations on holiday rentals would help countries enjoy the advantages of tourism without sacrificing their environment or their residents' quality of life.",
      bandAnnotation: "TA: Both sides are developed with comparable depth and specific support; an opinion is added, which is optional for a 'discuss both' question but is clearly consistent. CC: Each paragraph has a clear topic sentence ('The most obvious advantage...', 'However, there are significant disadvantages'), and the conclusion links back to both sides. LR: Natural collocations ('generates tax revenue', 'push up housing costs', 'fragile coral reefs'). GRA: Participle phrases ('allowing governments...', 'making it difficult...'), a concessive 'While' clause and a conditional-style 'provided that' clause, all accurate."
    },
    {
      id: "ielts-write-07",
      title: "Writing Practice 7 — Task 2: Online Shopping (Direct Questions)",
      task: 2,
      bandFocus: "6.5–8.5",
      timeLimitMinutes: 40,
      minWords: 250,
      prompt: "Many people now do most of their shopping online instead of in physical shops. Why is this happening? Is this a positive or negative development? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
      modelAnswer: "Online shopping has expanded enormously in recent years, and many consumers now buy most of their goods through websites and apps instead of visiting physical shops. This essay will explain the main reasons for this change and argue that, on balance, it is a positive development.\n\nThere are several reasons why shopping online has become so popular. The first is convenience: customers can compare products at any hour, from home or while travelling, without queuing or carrying heavy bags. The second is price and choice. Online retailers often have lower costs than high-street shops, so they can offer discounts, and they can display a far wider range of products than any physical store. Fast delivery and free returns have also removed much of the risk of buying something unseen. Taken together, these factors make buying online faster and less stressful than a trip to town.\n\nOn balance, I believe this trend is positive. It saves time and money for consumers and gives people in remote areas, or those with limited mobility, access to goods that were previously difficult to obtain. It also allows small businesses to reach customers across the country without paying for expensive shop premises. However, the shift does have a cost, since many town-centre shops are closing and delivery vehicles add to traffic and pollution. These problems are real but can be reduced through measures such as encouraging local pick-up points and electric delivery vans.\n\nIn conclusion, online shopping has grown because it is convenient, cheap and offers a wide choice, and its benefits for consumers and small businesses outweigh its drawbacks.",
      bandAnnotation: "TA: Both questions are answered in order (why, then positive or negative), with a clear judgement and a brief acknowledgement of the downside. CC: Paragraph 2 answers the first question and paragraph 3 the second, signalled by 'There are several reasons why' and 'On balance'. LR: Precise vocabulary ('queuing', 'premises', 'limited mobility', 'pick-up points') and natural collocations. GRA: A mix of complex structures (reason clause with 'since', relative clauses, a participle phrase 'while travelling') with high accuracy."
    }
  ],

  ultimateMock: {
    id: "ielts-ultimate-mock-1",
    title: "IELTS Ultimate Mock Exam — Set 1",
    note: "A full, integrated Academic mock: one Reading passage with a mixed question set, plus both Writing tasks with Band 9 model answers and full annotations. Sets 2–5 follow the same schema (see roadmap notes) and will be added as Content Pack 2.",
    reading: {
      title: "Vertical Farming: Growing Up, Not Out",
      timeLimitMinutes: 20,
      text: "For most of agricultural history, growing more food has meant using more land. Vertical farming challenges that basic assumption by stacking growing systems upward, inside climate-controlled buildings, rather than spreading them outward across fields. Advocates argue that the approach could transform how cities feed themselves; sceptics counter that the economics remain, for now, deeply uncertain.\n\nThe core appeal of vertical farming lies in its extraordinary land efficiency. A single hectare of vertically stacked growing trays, arranged across multiple levels within a warehouse, can theoretically produce the yield of many hectares of traditional open-field farmland, since the constraint of horizontal space is effectively removed. Combined with hydroponic or aeroponic growing methods, which deliver nutrients directly to plant roots without soil, water usage can also be reduced dramatically compared with conventional irrigation — some operators claim reductions of over ninety percent.\n\nProximity to consumers offers a second major advantage. Because vertical farms can be built inside or near the cities they serve, produce can be harvested and sold within hours rather than being transported for days across long supply chains. This proximity not only reduces the environmental cost associated with transportation but also allows crops to be picked at peak ripeness, since they no longer need to survive a lengthy journey before reaching a supermarket shelf.\n\nHowever, the technology faces a significant and, so far, unresolved economic obstacle: energy consumption. Unlike traditional farms, which rely on free sunlight, most vertical farms depend on artificial LED lighting to drive photosynthesis around the clock, and that electricity demand is substantial. Several well-funded vertical farming startups have collapsed in recent years, largely because their operating costs — dominated by electricity — made it impossible to price produce competitively against traditionally grown alternatives, particularly for lower-margin staple crops. As a result, the crops currently grown profitably in vertical farms tend to be high-value, fast-growing leafy greens and herbs rather than staples such as wheat or rice, which require far more space and time to reach a comparable market value.\n\nProponents respond that the economics will shift as renewable energy becomes cheaper and LED efficiency continues to improve, pointing to the dramatic cost declines already seen in solar panel and battery technology over the past two decades. Critics remain more cautious, noting that agricultural economics differ in important ways from those of other energy-dependent technologies, and that vertical farming may ultimately prove to be a valuable niche solution — well suited to leafy greens in dense urban centres — rather than a wholesale replacement for traditional agriculture.\n\nWhat seems increasingly clear is that vertical farming is unlikely to solve global food security on its own. Even the most optimistic projections suggest it will remain a complement to, rather than a substitute for, traditional farming for the foreseeable future. Its most promising role may be geographic and logistical rather than purely agricultural: bringing fresh produce closer to dense urban populations, reducing food miles, and providing a degree of resilience against supply-chain disruptions that affect conventionally sourced produce.",
      paragraphLabels: ["A", "B", "C", "D", "E", "F"],
      questions: [
        { id: "um-r-1", type: "heading", forParagraph: "B", prompt: "Choose the best heading for Paragraph B.", options: ["The rising cost of urban land", "Why less land is needed to grow the same amount of food", "A comparison between hydroponics and aeroponics", "The history of greenhouse farming"], correctAnswer: 1, explanation: "Paragraph B's main idea is land efficiency through stacking and reduced water use — not a cost comparison or historical account.", tag: "matching-headings" },
        { id: "um-r-2", type: "heading", forParagraph: "C", prompt: "Choose the best heading for Paragraph C.", options: ["The benefits of shorter supply chains", "Why supermarkets prefer local produce", "The rising popularity of urban farming as a hobby", "How transportation costs are calculated"], correctAnswer: 0, explanation: "Paragraph C focuses on proximity to consumers reducing transport time and environmental cost, and improving freshness — i.e., benefits of shorter supply chains.", tag: "matching-headings" },
        { id: "um-r-3", type: "heading", forParagraph: "D", prompt: "Choose the best heading for Paragraph D.", options: ["The environmental benefits of LED technology", "Government subsidies for renewable energy", "The energy cost problem limiting profitability", "Why staple crops are always unprofitable"], correctAnswer: 2, explanation: "Paragraph D's main idea is that energy consumption/electricity cost is the key economic obstacle limiting which crops are profitable — not a blanket claim that staples are 'always' unprofitable (an overstatement trap).", tag: "matching-headings" },
        { id: "um-r-4", type: "tfng", prompt: "Vertical farms typically use significantly less water than traditional farms, according to the passage.", correctAnswer: "True", explanation: "Paragraph B: 'water usage can also be reduced dramatically... some operators claim reductions of over ninety percent.'", tag: "tfng" },
        { id: "um-r-5", type: "tfng", prompt: "The passage states that all vertical farming startups have failed financially.", correctAnswer: "False", explanation: "Paragraph D says 'several' well-funded startups have collapsed, not all — this overstates the passage's actual claim.", tag: "tfng" },
        { id: "um-r-6", type: "tfng", prompt: "The passage specifies the exact percentage of vertical farms currently growing leafy greens worldwide.", correctAnswer: "Not Given", explanation: "The passage states leafy greens/herbs 'tend to' be the profitable crops but gives no specific worldwide percentage figure.", tag: "tfng" },
        { id: "um-r-7", type: "summary", prompt: "Complete the summary using NO MORE THAN TWO WORDS from the passage: Vertical farms mostly grow high-value, fast-growing ______ rather than staple crops.", correctAnswer: "leafy greens", explanation: "Paragraph D: 'the crops currently grown profitably in vertical farms tend to be high-value, fast-growing leafy greens and herbs.'", tag: "summary-completion" },
        { id: "um-r-8", type: "summary", prompt: "Complete the summary using NO MORE THAN TWO WORDS from the passage: Proponents believe costs will fall as ______ becomes cheaper, similar to trends seen in solar and battery technology.", correctAnswer: "renewable energy", explanation: "Paragraph E: 'the economics will shift as renewable energy becomes cheaper and LED efficiency continues to improve.'", tag: "summary-completion" },
        { id: "um-r-9", type: "mcq", prompt: "According to the final paragraph, what is likely to be vertical farming's most valuable long-term role?", options: ["Fully replacing traditional agriculture worldwide", "Solving global food security independently", "Complementing traditional farming by supplying fresh produce closer to cities", "Eliminating the need for supermarkets"], correctAnswer: 2, explanation: "Final paragraph: 'it will remain a complement to, rather than a substitute for, traditional farming... bringing fresh produce closer to dense urban populations.'", tag: "detail" },
        { id: "um-r-10", type: "mcq", prompt: "What is the writer's overall stance on vertical farming?", options: ["Enthusiastically in favour, with no reservations", "Dismissive, viewing it as a failed technology", "Balanced — acknowledging real advantages alongside a significant unresolved economic challenge", "Neutral to the point of expressing no clear view at all"], correctAnswer: 2, explanation: "The passage presents genuine advantages (land/water efficiency, proximity) alongside a clearly stated obstacle (energy cost) and a measured conclusion — a balanced stance, not enthusiasm, dismissal, or total neutrality.", tag: "main-idea" }
      ]
    },
    writingTask1: {
      timeLimitMinutes: 20,
      minWords: 150,
      prompt: "The chart below shows the percentage of households with internet access in four countries (Brazil, Germany, Kenya, and South Korea) between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      modelAnswer: "The chart illustrates trends in household internet access across four countries — Brazil, Germany, Kenya and South Korea — over a twenty-year period.\n\nOverall, all four countries saw substantial growth in internet access, though they started from very different points and South Korea maintained a clear lead throughout, while Kenya remained consistently behind the other three nations.\n\nIn 2000, South Korea already had comparatively high internet penetration at around 40%, far ahead of Germany (20%), Brazil (5%) and Kenya (under 1%). Over the next decade, South Korea's rate climbed rapidly, surpassing 90% by 2010, while Germany followed a similar upward path at a slightly slower pace, reaching approximately 80% in the same year.\n\nBrazil's growth, though starting from a low base, accelerated sharply after 2005, eventually converging with Germany's figures by around 2018, when both countries hovered near 85–90%. Kenya's trajectory was markedly different: although access remained minimal until roughly 2010, a rapid rise followed over the subsequent decade, reaching approximately 30% by 2020 — still considerably lower than the other three nations, but representing by far the steepest proportional increase of any country shown.",
      bandAnnotation: "TA: Clear overview naming both the shared growth trend and the two standout features (South Korea's lead, Kenya's lag) before any numbers appear. CC: Logical grouping by growth pattern rather than a robotic country-by-country list. LR: Precise data language ('converging', 'hovered near', 'markedly different trajectory'). GRA: Complex structures used accurately throughout (participle clause 'though starting from a low base', comparative structures)."
    },
    writingTask2: {
      timeLimitMinutes: 40,
      minWords: 250,
      prompt: "Some people believe that the best way to reduce crime is to give longer prison sentences. Others, however, believe there are better alternative methods of reducing crime. Discuss both views and give your own opinion.",
      modelAnswer: "Rising crime rates in many societies have reignited debate over the most effective response: some argue for longer prison sentences as a deterrent, while others advocate alternative approaches such as rehabilitation and addressing root causes. This essay will examine both perspectives before presenting my own view.\n\nSupporters of longer sentences argue that harsher punishment deters potential offenders and keeps convicted criminals off the streets for extended periods, directly reducing their opportunity to reoffend. This view has particular intuitive appeal for violent or repeat offenders, where public safety concerns are most acute, and many governments have responded to public pressure by lengthening minimum sentences for serious crimes.\n\nHowever, advocates of alternative methods point to a substantial body of criminological research suggesting that sentence length has only a weak deterrent effect on most offenders, particularly those driven by poverty, addiction, or lack of education rather than rational cost-benefit calculation. Countries such as Norway, which prioritise rehabilitation and reintegration over punishment, report considerably lower reoffending rates than nations with comparatively longer average sentences, suggesting that addressing the underlying drivers of criminal behaviour may be more effective than punishment alone. Proponents of this view also highlight that overcrowded prisons focused purely on punishment can function as 'crime schools', where first-time offenders learn from more experienced criminals rather than reforming.\n\nIn my opinion, while longer sentences remain justifiable for the most serious and violent crimes, where public protection is paramount, alternative approaches offer a more effective long-term strategy for the majority of offences. Rehabilitation programmes, employment support, and addiction treatment address the actual causes of reoffending in a way that imprisonment alone does not, and the comparative international evidence on reoffending rates supports this conclusion.\n\nIn conclusion, although both perspectives contain valid concerns, a combined strategy — firm sentencing for serious violent crime alongside genuine investment in rehabilitation for the broader offender population — is likely to reduce crime more effectively than relying on prison length alone.",
      bandAnnotation: "TA: Both views are developed with comparable depth and specific supporting evidence (Norway example) before the writer's own nuanced position is stated. CC: Clear paragraph-level signposting throughout ('Supporters of...', 'However, advocates of...', 'In my opinion...'). LR: Precise topic vocabulary ('reoffending rates', 'deterrent effect', 'reintegration') used naturally. GRA: Wide range of accurate complex structures, including a reduced relative clause ('Countries such as Norway, which prioritise...') and abstract noun phrases ('the underlying drivers of criminal behaviour')."
    }
  },

  flashcardDecks: [
    {
      id: "ielts-deck-vocab-upgrade", title: "Band 6→7 Vocabulary Upgrade", sourceNoteId: "ielts-12",
      cards: [
        { id: "vu-1", term: "bad for the environment", definition: "Band 7 upgrade: environmentally damaging / detrimental to ecosystems", example: "Plastic waste is detrimental to marine ecosystems." },
        { id: "vu-2", term: "a big problem", definition: "Band 7 upgrade: a pressing concern", example: "Air pollution is a pressing concern in major cities." },
        { id: "vu-3", term: "gases that cause warming", definition: "Band 7 upgrade: carbon emissions", example: "Carbon emissions from vehicles remain a major contributor to climate change." },
        { id: "vu-4", term: "using resources badly", definition: "Band 7 upgrade: unsustainable practices", example: "Overfishing is an example of unsustainable practices." },
        { id: "vu-5", term: "loss of animal species", definition: "Band 7 upgrade: biodiversity loss", example: "Deforestation is a leading cause of biodiversity loss." },
        { id: "vu-6", term: "learn a lot", definition: "Band 7 upgrade: acquire practical skills", example: "Students acquire practical skills through internships." },
        { id: "vu-7", term: "get good marks", definition: "Band 7 upgrade: academic achievement", example: "Academic achievement is influenced by many factors beyond intelligence." },
        { id: "vu-8", term: "a hard course", definition: "Band 7 upgrade: a rigorous curriculum", example: "The rigorous curriculum prepares students for university." },
        { id: "vu-9", term: "memorising facts", definition: "Band 7 upgrade (as a contrast term): rote learning", example: "Rote learning is being replaced by critical thinking in modern classrooms." },
        { id: "vu-10", term: "technology changes fast", definition: "Band 7 upgrade: rapid technological advancement", example: "Rapid technological advancement has transformed the workplace." },
        { id: "vu-11", term: "going digital", definition: "Band 7 upgrade: digital transformation", example: "The digital transformation of banking has reduced the need for physical branches." },
        { id: "vu-12", term: "something with good and bad sides", definition: "Band 7 upgrade: a double-edged sword", example: "Social media is often described as a double-edged sword." },
        { id: "vu-13", term: "gap between rich/poor tech access", definition: "Band 7 upgrade: the digital divide", example: "Government investment aims to narrow the digital divide." },
        { id: "vu-14", term: "worries about privacy", definition: "Band 7 upgrade: data privacy concerns", example: "Data privacy concerns have grown alongside AI adoption." },
        { id: "vu-15", term: "people don't have jobs", definition: "Band 7 upgrade: unemployment rates", example: "Unemployment rates rose sharply during the recession." },
        { id: "vu-16", term: "the economy is bad", definition: "Band 7 upgrade: an economic downturn", example: "The country is experiencing an economic downturn." },
        { id: "vu-17", term: "jobs are hard to find", definition: "Band 7 upgrade: a competitive job market", example: "Graduates face a highly competitive job market." },
        { id: "vu-18", term: "rich and poor gap", definition: "Band 7 upgrade: income inequality", example: "Income inequality has widened in many developed nations." }
      ]
    },
    {
      id: "ielts-deck-turkish-l1", title: "Turkish L1 Error Spotting", sourceNoteId: "ielts-14",
      cards: [
        { id: "l1-1", term: "Articles — spot the fix", definition: "❌ 'She is teacher at local school.' → ✅ 'She is a teacher at the local school.' (Turkish has no articles — GRA capped ~5.5 if frequent)", example: "She is a teacher at the local school." },
        { id: "l1-2", term: "Word order — spot the fix", definition: "❌ 'Yesterday I my homework finished.' → ✅ 'Yesterday I finished my homework.' (SOV-influenced order — GRA capped ~5.5)", example: "Yesterday I finished my homework." },
        { id: "l1-3", term: "Verb tenses — spot the fix", definition: "❌ 'I live here since 2015.' → ✅ 'I have lived here since 2015.' (avoidance of perfect aspect — GRA capped ~6.0)", example: "I have lived here since 2015." },
        { id: "l1-4", term: "Passive voice — spot the fix", definition: "❌ 'Someone must do this before Friday.' (in a formal report) → ✅ 'This must be done before Friday.' (under-use of passive)", example: "This must be done before Friday." },
        { id: "l1-5", term: "Relative clauses — spot the fix", definition: "❌ avoids the clause entirely → ✅ 'The report, which had already been reviewed, was approved.' (GRA capped ~6.0 if avoided)", example: "The report, which had already been reviewed, was approved." },
        { id: "l1-6", term: "Connectors — spot the fix", definition: "❌ 'In addition to this situation, prices rose.' → ✅ 'Furthermore, prices rose.' (calqued discourse marker — CC capped ~6.0)", example: "Furthermore, prices rose." },
        { id: "l1-7", term: "Lexical chunks — spot the fix", definition: "❌ 'do a mistake' → ✅ 'make a mistake' (word-for-word collocation transfer — LR capped ~5.5)", example: "make a mistake" },
        { id: "l1-8", term: "Prepositions — spot the fix", definition: "❌ 'depend to' → ✅ 'depend on' (postposition→preposition mapping error)", example: "It depends on the weather." },
        { id: "l1-9", term: "Register — spot the fix", definition: "❌ 'Hey, I would be grateful if...' → ✅ pick one register and hold it consistently (formal OR informal, never mixed)", example: "I would be grateful if you could confirm the details." }
      ]
    }
  ]
};

/* SCHEMA NOTES — for completing Pack 2 or adding Mock Sets 2–5:
 * notes[]: add { id, title, skill, category, bandFocus, comingSoon:false, tags[], summary, body:[{heading, html}],
 *                modelAnswer?:{prompt?, text, bandAnnotation}, turkishL1Note?, commonMistakes?, practiceTip? }
 *   then flip the matching stub's comingSoon to false (or replace it) — app.js reads comingSoon to render the "Coming Soon" badge automatically, no UI code changes needed.
 * guidedPractice[]: { id, skill, title, prompt, rubric:{TA,CC,LR,GRA}, bandNote }
 * ultimateMock: to add Set 2, duplicate the object under a new key (e.g. ultimateMock2) with the same
 *   {reading, writingTask1, writingTask2} shape, then register it in js/app.js renderIeltsMockList().
 * flashcardDecks[]: { id, title, sourceNoteId?, cards:[{id, term, definition, example}] } — add a new deck
 * object to grow the Flashcards tool; app.js discovers decks generically, no UI changes needed.
 * listeningSets[]: { id, title, section (1-4), contextType, bandFocus, timeLimitMinutes,
 *   audioSrc (relative path under audio/ielts/section{N}/...), audioTitle, audioContext,
 *   instructions, transcript (full script — shown only after submission, not during the
 *   exercise), questions:[{id, prompt, correctAnswer, explanation, tag}] } — the questions
 *   reuse the same plain-text shape as gapfill/summary questions elsewhere, so they're
 *   auto-scored with no engine changes. To add another Section 1 set or Sections 2–4: author
 *   the script with the anthropic-skills:ielts-academic-instructor skill (references/listening.md
 *   + references/exam-authenticity.md) for the correct section profile and difficulty, generate
 *   the audio (see scripts/clipchamp-listening-s1-01.md for the manual-recording process used
 *   for Set 1, or scripts/generate_listening_audio.py for the ElevenLabs API route — that one
 *   needs a paid ElevenLabs plan, free-tier accounts get a 402 on every TTS call) into
 *   audio/ielts/section{N}/, then add one object here — app.js discovers listeningSets generically
 *   (js/app.js renderIeltsSuite "listening" branch), no UI code changes needed.
 * readingSets[]: { id ("ielts-read-NN"), title, bandFocus, passageTitle, text, timeLimitMinutes:20, instructions,
 *   questions:[13 x { id, type, prompt, options?, correctAnswer, explanation, tag }] } — same question shapes as
 *   ultimateMock.reading: anything with options[] uses a 0-based INDEX answer; tfng uses "True"/"False"/"Not Given";
 *   text answers are compared lower-case, whitespace removed, so avoid hyphens/slashes. Listed generically in the
 *   "Reading Practice" sub-tab, no UI changes needed.
 * writingSets[]: { id ("ielts-write-NN"), title, task:1|2, bandFocus, timeLimitMinutes, minWords (150|250), prompt,
 *   dataTable?:{caption?, headers[], rows[][]} (required for task 1), modelAnswer (string), bandAnnotation (string,
 *   must name TA, CC, LR, GRA) } — listed in the "Writing Practice" sub-tab.
 * Validate any change with: node scripts/validate-content.js
 */
