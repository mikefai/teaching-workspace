/* ApexPrep Academy — ESL Hub (B1–B2) data module
   Schema documented at bottom of file. Loaded as a global (no fetch/CORS issues offline). */
window.APEX_DATA = window.APEX_DATA || {};

window.APEX_DATA.esl = {

  notes: [
    {
      id: "esl-01",
      title: "Zero & First Conditionals",
      category: "grammar",
      level: "B1",
      tags: ["conditionals", "if clauses", "grammar", "b1"],
      summary: "Talking about facts, habits, and realistic future possibilities.",
      body: [
        {
          heading: "Zero Conditional — General Truths & Habits",
          html: "Structure: <strong>If + present simple, present simple</strong>. Use it for facts, scientific truths, and habitual results — things that are <em>always</em> true, not just possible.",
          examples: [
            "If you heat ice, it melts.",
            "If Ahmet finishes work early, he usually goes to the gym.",
            "Water boils if you heat it to 100°C at sea level."
          ]
        },
        {
          heading: "First Conditional — Real Future Possibility",
          html: "Structure: <strong>If + present simple, will + base verb</strong>. Use it for a realistic or likely situation in the future and its probable result. The 'if clause' can also come second.",
          examples: [
            "If it rains tomorrow, we will cancel the picnic.",
            "She'll pass the exam if she studies every day this week.",
            "If you don't book now, the tickets will sell out."
          ]
        },
        {
          heading: "Variations Worth Knowing",
          html: "You can replace <em>will</em> with a modal (<em>can, might, should</em>) when the result is a possibility, permission, or recommendation rather than a certainty: <em>'If you finish early, you can leave.'</em> You can also use <em>unless</em> (= if...not): <em>'Unless you hurry, you'll miss the bus.'</em>"
        }
      ],
      commonMistakes: [
        "Using 'will' in the if-clause: ❌ 'If it will rain...' → ✅ 'If it rains...'",
        "Confusing zero and first conditional when the result is only a possibility, not a certainty.",
        "Forgetting the comma when the if-clause comes first in writing."
      ],
      practiceTip: "Write five zero-conditional sentences about a daily routine, then rewrite them as first conditionals by changing the result to something uncertain."
    },
    {
      id: "esl-02",
      title: "Second, Third & Mixed Conditionals",
      category: "grammar",
      level: "B2",
      tags: ["conditionals", "hypothetical", "grammar", "b2"],
      summary: "Imagining unreal present situations, unreal pasts, and their mixed combinations.",
      body: [
        {
          heading: "Second Conditional — Unreal Present/Future",
          html: "Structure: <strong>If + past simple, would + base verb</strong>. Use it for hypothetical or unlikely situations now or in the future. Note: we use 'were' for all persons in formal style (<em>If I were you...</em>).",
          examples: [
            "If I won the lottery, I would travel the world.",
            "If she were the manager, she would change the schedule.",
            "What would you do if you lost your passport abroad?"
          ]
        },
        {
          heading: "Third Conditional — Unreal Past (Regret/Speculation)",
          html: "Structure: <strong>If + past perfect, would have + past participle</strong>. Use it to talk about an imaginary result of something that did NOT happen in the past.",
          examples: [
            "If I had studied harder, I would have passed the test.",
            "They wouldn't have missed the flight if they had left earlier.",
            "If she hadn't called me, I would never have known."
          ]
        },
        {
          heading: "Mixed Conditionals",
          html: "Combine a past condition with a present result, or a present condition with a past result, when the timeframes don't match: <em>'If I had taken that job (past), I would be living in Istanbul now (present).'</em> or <em>'If she weren't so shy (present), she would have spoken up yesterday (past).'</em>"
        }
      ],
      commonMistakes: [
        "Double conditionals: ❌ 'If I would have known...' → ✅ 'If I had known...'",
        "Mixing up second and third conditional verb forms under exam pressure.",
        "Turkish L1 note: learners often avoid the third conditional entirely because Turkish expresses unreal past differently — practise it actively, don't just recognise it passively."
      ],
      practiceTip: "Take three real regrets from your own life and turn each into a third-conditional sentence, then a mixed conditional connecting that past decision to your present life."
    },
    {
      id: "esl-03",
      title: "Passive Voice — All Tenses",
      category: "grammar",
      level: "B2",
      tags: ["passive voice", "grammar", "b2", "formal writing"],
      summary: "Shifting focus from the doer of an action to the action or the receiver.",
      body: [
        {
          heading: "Why Use the Passive?",
          html: "The passive voice (<strong>be + past participle</strong>) is used when the action matters more than who did it, when the doer is unknown/obvious/irrelevant, or in formal/academic writing (reports, news, scientific text). Overusing the active voice in formal writing is a common learner habit that lowers register."
        },
        {
          heading: "Forming the Passive Across Tenses",
          html: "Take the object of the active sentence and make it the subject; use the correct tense of 'be'; add the past participle; the original subject becomes optional 'by + agent'.",
          examples: [
            "Present simple: The reports are checked every Friday.",
            "Past simple: The bridge was built in 1932.",
            "Present perfect: The documents have been signed.",
            "Future: The results will be announced tomorrow.",
            "Modal passive: The rules must be followed by all staff."
          ]
        },
        {
          heading: "Passive with Two Objects",
          html: "Verbs like 'give', 'send', 'offer' have two possible passive forms: <em>'She was given an award'</em> (more natural) or <em>'An award was given to her.'</em>"
        }
      ],
      commonMistakes: [
        "Forgetting the past participle: ❌ 'The car was steal' → ✅ 'The car was stolen.'",
        "Turkish L1 note: Turkish uses the passive far less than English, especially in speech, so learners tend to under-use it in formal writing — this caps GRA and Task Achievement in IELTS-style tasks.",
        "Using passive with intransitive verbs (verbs with no object): ❌ 'It was happened' → ✅ 'It happened.'"
      ],
      practiceTip: "Rewrite a short news paragraph from active to passive voice, keeping only the agents that are genuinely important information."
    },
    {
      id: "esl-04",
      title: "Reported Speech",
      category: "grammar",
      level: "B2",
      tags: ["reported speech", "indirect speech", "grammar", "b2"],
      summary: "Reporting statements, questions, and commands without quoting directly.",
      body: [
        {
          heading: "Backshift for Statements",
          html: "When the reporting verb is in the past (said, told, explained), tenses usually 'shift back' one step: present simple → past simple; present continuous → past continuous; present perfect → past perfect; will → would; can → could.",
          examples: [
            "Direct: 'I live in Denizli.' → Reported: She said (that) she lived in Denizli.",
            "Direct: 'I have finished.' → Reported: He said he had finished.",
            "Direct: 'I will call you.' → Reported: She said she would call me."
          ]
        },
        {
          heading: "Reported Questions",
          html: "Word order becomes statement order (no inversion, no auxiliary 'do'), and there's no question mark. Use 'if/whether' for yes-no questions; keep the wh-word for wh-questions.",
          examples: [
            "Direct: 'Are you coming?' → Reported: He asked if I was coming.",
            "Direct: 'Where do you live?' → Reported: She asked where I lived."
          ]
        },
        {
          heading: "Reported Commands & Requests",
          html: "Use <strong>told/asked + object + (not) to + base verb</strong>.",
          examples: [
            "Direct: 'Close the door.' → Reported: He told me to close the door.",
            "Direct: 'Please don't be late.' → Reported: She asked us not to be late."
          ]
        },
        { heading: "When NOT to Backshift", html: "If the reported information is still true/general (a fact, a habit, something timeless), backshift is optional: <em>'She said she lives in Izmir'</em> is fine if she still does." }
      ],
      commonMistakes: [
        "Keeping question word order in reported questions: ❌ 'She asked where did I live' → ✅ 'She asked where I lived.'",
        "Forgetting to change time/place references: 'tomorrow' → 'the next day'; 'here' → 'there'.",
        "Overusing 'that' incorrectly or omitting necessary pronoun changes."
      ],
      practiceTip: "Record a short real conversation (or use a text exchange) and rewrite the whole exchange as a single reported-speech paragraph."
    },
    {
      id: "esl-05",
      title: "Present Perfect vs Past Simple",
      category: "grammar",
      level: "B1",
      tags: ["present perfect", "past simple", "grammar", "b1", "tenses"],
      summary: "Choosing between a finished past action and a past action connected to now.",
      body: [
        {
          heading: "Past Simple — Finished Time",
          html: "Use for actions completed at a specific, finished time in the past. Time markers: yesterday, last week, in 2019, ago, when I was a child.",
          examples: ["I visited Paris in 2018.", "She called me an hour ago."]
        },
        {
          heading: "Present Perfect — Unfinished Time / Connection to Now",
          html: "Use for life experience (no specific time), a recent action with present relevance, or an action continuing up to now. Time markers: ever, never, just, already, yet, since, for, so far.",
          examples: ["I have visited Paris twice. (life experience, no fixed time)", "She has just called me. (recent, relevant now)", "We have lived here since 2015. (continues to now)"]
        },
        {
          heading: "The Core Test",
          html: "Ask: 'Is the time period finished, or still open/connected to now?' If the speaker gives or implies a finished time point, use past simple. If the timeframe is still open (life, this week, since X), use present perfect."
        }
      ],
      commonMistakes: [
        "Turkish L1 note: Turkish learners often over-rely on present simple/past simple and avoid present perfect, since Turkish aspect marking works differently — this is one of the most persistent B1→B2 errors.",
        "Using present perfect with a finished time marker: ❌ 'I have seen him yesterday' → ✅ 'I saw him yesterday.'",
        "Confusing 'for' (duration) and 'since' (starting point): 'for three years' vs 'since 2021'."
      ],
      practiceTip: "Write ten sentences about your life: five must use past simple with a specific date, five must use present perfect with 'ever/never/since/for'."
    },
    {
      id: "esl-06",
      title: "Present Perfect Continuous",
      category: "grammar",
      level: "B2",
      tags: ["present perfect continuous", "grammar", "b2", "tenses"],
      summary: "Emphasising the duration or ongoing nature of a recent activity.",
      body: [
        {
          heading: "Form & Core Meaning",
          html: "Structure: <strong>have/has + been + verb-ing</strong>. Use it to emphasise duration ('how long') or to explain a present result caused by a recent, possibly still-ongoing activity.",
          examples: [
            "I've been studying for three hours. (emphasis on duration)",
            "Why are you so tired? — I've been running. (activity explains present result)",
            "She has been working here since 2019 and still works here now."
          ]
        },
        {
          heading: "Present Perfect Continuous vs Simple",
          html: "Present perfect simple often focuses on completed result/quantity; continuous focuses on the activity/process itself and may not be finished. Compare: <em>'I've painted the fence'</em> (result: it's done) vs <em>'I've been painting the fence'</em> (process: may or may not be finished, explains why you're covered in paint)."
        },
        { heading: "Verbs That Resist the Continuous", html: "Stative verbs (know, believe, own, love, understand) are rarely used in any continuous form, including this one: ❌ 'I've been knowing him for years' → ✅ 'I've known him for years.'" }
      ],
      commonMistakes: [
        "Using it with stative verbs.",
        "Confusing duration emphasis (continuous) with result/quantity emphasis (simple): 'I've read three books' vs 'I've been reading all afternoon.'"
      ],
      practiceTip: "Describe your day so far using at least three present perfect continuous sentences that explain a current state (tiredness, hunger, a messy room, etc.)."
    },
    {
      id: "esl-07",
      title: "Future Forms: Will, Going To, Present Continuous & Present Simple",
      category: "grammar",
      level: "B1",
      tags: ["future tenses", "grammar", "b1", "will", "going to"],
      summary: "Four ways to talk about the future, each with a distinct shade of meaning.",
      body: [
        { heading: "Will — Predictions, Decisions Made Now, Promises", html: "Use for spontaneous decisions, predictions without present evidence, offers, and promises.", examples: ["I think it will rain later.", "I'll help you with that bag.", "I promise I will call you tonight."] },
        { heading: "Going To — Plans & Predictions With Evidence", html: "Use for prior intentions/plans and predictions based on present evidence.", examples: ["I'm going to study medicine next year. (prior plan)", "Look at those clouds — it's going to rain. (evidence now)"] },
        { heading: "Present Continuous — Fixed Arrangements", html: "Use for future events that are already arranged, often with another person, usually with a specific time.", examples: ["I'm meeting Elif at 6pm on Friday.", "We're flying to London next Tuesday."] },
        { heading: "Present Simple — Timetables & Schedules", html: "Use for fixed, official schedules (transport, programmes) rather than personal arrangements.", examples: ["The train leaves at 9:15.", "The course starts on Monday."] }
      ],
      commonMistakes: [
        "Using 'will' for a fixed arrangement: it sounds like a spontaneous guess rather than a real plan.",
        "Confusing 'going to' (plan) with present continuous (arrangement) — both are correct in many cases, but only continuous implies it's already organised with someone else."
      ],
      practiceTip: "Describe your plans for next week using all four future forms at least once each, matching the correct meaning to the correct form."
    },
    {
      id: "esl-08",
      title: "Modal Verbs: Deduction & Obligation",
      category: "grammar",
      level: "B2",
      tags: ["modals", "deduction", "obligation", "grammar", "b2"],
      summary: "Expressing certainty, possibility, and levels of obligation with modal verbs.",
      body: [
        { heading: "Deduction (Present)", html: "must (almost certain, positive logic) / can't (almost certain, negative logic) / might, may, could (possible, not certain).", examples: ["He must be exhausted — he's been working all day.", "She can't be at home — the lights are off.", "They might be stuck in traffic."] },
        { heading: "Deduction (Past)", html: "must have / can't have / might have + past participle — same logic, moved into the past.", examples: ["She must have missed the bus.", "He can't have forgotten — he never forgets.", "They might have left already."] },
        { heading: "Obligation & Prohibition", html: "must / have to (strong obligation — 'must' often personal/internal, 'have to' often external rule); mustn't (prohibition); don't have to / needn't (no obligation, it's optional).", examples: ["Staff must wear a badge at all times. (rule)", "I have to renew my visa this month. (external requirement)", "You mustn't park here. (prohibited)", "You don't have to attend — it's optional."] }
      ],
      commonMistakes: [
        "Confusing 'mustn't' (prohibited) with 'don't have to' (optional) — this is one of the most common B2 errors and a frequent IELTS/exam trap.",
        "Using 'must' for past obligation: ❌ 'Yesterday I must go' → ✅ 'Yesterday I had to go.'"
      ],
      practiceTip: "Look at a photo of a messy or confusing scene and write five deduction sentences (present and past) about what probably happened."
    },
    {
      id: "esl-09",
      title: "Relative Clauses: Defining & Non-Defining",
      category: "grammar",
      level: "B2",
      tags: ["relative clauses", "grammar", "b2", "who which that"],
      summary: "Adding essential or extra information to a noun using who, which, that, whose, where.",
      body: [
        { heading: "Defining Relative Clauses", html: "Give essential information — without it, we don't know which person/thing is meant. No commas. 'That' is possible here (informal).", examples: ["The woman who called earlier is my aunt.", "This is the book that/which changed my life."] },
        { heading: "Non-Defining Relative Clauses", html: "Add extra, non-essential information — the sentence still makes sense without it. Always use commas; never use 'that'.", examples: ["My brother, who lives in Ankara, is visiting next week.", "Denizli, which is famous for Pamukkale, gets many tourists."] },
        { heading: "Whose, Where, When", html: "'whose' = possession; 'where' = place; 'when' = time.", examples: ["That's the man whose car was stolen.", "This is the café where we first met.", "I'll never forget the day when I graduated."] }
      ],
      commonMistakes: [
        "Adding an extra pronoun: ❌ 'The man who he called me' → ✅ 'The man who called me.'",
        "Turkish L1 note: because Turkish forms relative structures before the noun (pre-nominal), learners sometimes produce awkward word order when translating directly — practise building the clause AFTER the noun.",
        "Using 'that' in a non-defining clause."
      ],
      practiceTip: "Combine five pairs of short simple sentences into one sentence each using an appropriate relative pronoun."
    },
    {
      id: "esl-10",
      title: "Gerunds vs Infinitives",
      category: "grammar",
      level: "B2",
      tags: ["gerunds", "infinitives", "grammar", "b2", "verb patterns"],
      summary: "Choosing -ing forms or to-infinitives after certain verbs, with meaning changes for some.",
      body: [
        { heading: "Verb + Gerund", html: "enjoy, avoid, suggest, finish, mind, consider, admit, deny, imagine, practise, risk, keep (on) — all take the -ing form.", examples: ["She enjoys reading before bed.", "I avoid drinking coffee after 6pm."] },
        { heading: "Verb + Infinitive", html: "want, decide, plan, hope, promise, refuse, manage, afford, agree, offer, learn, pretend — take 'to + base verb'.", examples: ["We decided to leave early.", "He refused to apologise."] },
        { heading: "Verbs That Change Meaning", html: "'stop + -ing' (stop an activity) vs 'stop + to-infinitive' (stop in order to do something else); 'remember/forget + -ing' (memory of a past action) vs '+ to-infinitive' (a task not yet done, or done as planned).", examples: ["She stopped smoking. (quit)", "She stopped to smoke. (paused to do it)", "I remember locking the door. (memory of doing it)", "Remember to lock the door! (don't forget the task)"] }
      ],
      commonMistakes: [
        "Using the infinitive after prepositions: ❌ 'good at to cook' → ✅ 'good at cooking' (verb after a preposition is always -ing).",
        "Mixing up 'stop doing' and 'stop to do' — a genuinely high-value distinction for accuracy scores."
      ],
      practiceTip: "Make a list of ten verbs from your own vocabulary notebook and sort them into 'gerund', 'infinitive', or 'both/meaning changes'."
    },
    {
      id: "esl-11",
      title: "Phrasal Verbs — Essential Set for B1/B2",
      category: "phrasal-verbs",
      level: "B1-B2",
      tags: ["phrasal verbs", "vocabulary", "b1", "b2"],
      summary: "20 high-frequency phrasal verbs for daily life, work, and study contexts.",
      body: [
        { heading: "Daily Life & Relationships", html: "<ul><li><strong>look after</strong> — take care of: 'She looks after her grandmother.'</li><li><strong>get on with</strong> — have a good relationship: 'I get on with my flatmates.'</li><li><strong>put up with</strong> — tolerate: 'I can't put up with the noise anymore.'</li><li><strong>fall out with</strong> — argue and stop being friends: 'He fell out with his brother.'</li><li><strong>make up</strong> — resolve an argument / invent a story: 'They made up after the fight.'</li></ul>" },
        { heading: "Work & Study", html: "<ul><li><strong>hand in</strong> — submit: 'Hand in your essay by Friday.'</li><li><strong>look into</strong> — investigate: 'We'll look into the complaint.'</li><li><strong>carry out</strong> — perform/execute: 'They carried out a survey.'</li><li><strong>come up with</strong> — think of (an idea): 'She came up with a great solution.'</li><li><strong>catch up on</strong> — do something you're behind on: 'I need to catch up on my reading.'</li></ul>" },
        { heading: "General & Formal", html: "<ul><li><strong>set up</strong> — establish/organise: 'They set up a new company.'</li><li><strong>point out</strong> — indicate/mention: 'She pointed out an error.'</li><li><strong>bring about</strong> — cause (used in formal/academic writing): 'The policy brought about major change.'</li><li><strong>carry on</strong> — continue: 'Carry on with the exercise.'</li><li><strong>turn down</strong> — reject/refuse: 'He turned down the offer.'</li><li><strong>run out of</strong> — have no more: 'We ran out of milk.'</li><li><strong>give up</strong> — stop trying/quit: 'Don't give up on your goal.'</li><li><strong>go over</strong> — review: 'Let's go over the notes again.'</li><li><strong>work out</strong> — calculate / exercise / succeed: 'It worked out fine in the end.'</li><li><strong>take after</strong> — resemble a family member: 'She takes after her mother.'</li></ul>" }
      ],
      commonMistakes: [
        "Separating inseparable phrasal verbs incorrectly, or failing to separate separable ones with pronouns: ✅ 'look after her' (inseparable) but ✅ 'give it up' not 'give up it' (separable + pronoun must go in the middle).",
        "Using very informal phrasal verbs ('hang out', 'chill out') in formal writing tasks."
      ],
      practiceTip: "Pick five phrasal verbs from this list and use each one in a sentence about your own week."
    },
    {
      id: "esl-12",
      title: "Idioms in Context — Top 20",
      category: "idioms",
      level: "B1-B2",
      tags: ["idioms", "vocabulary", "b1", "b2", "speaking"],
      summary: "Common idioms that add natural colour to speaking and informal writing.",
      body: [
        { heading: "Talking About Effort & Difficulty", html: "<ul><li><strong>bite the bullet</strong> — do something unpleasant but necessary: 'I finally bit the bullet and went to the dentist.'</li><li><strong>a piece of cake</strong> — very easy: 'The test was a piece of cake.'</li><li><strong>hit the books</strong> — study hard: 'I need to hit the books before finals.'</li><li><strong>under the weather</strong> — feeling slightly ill: 'I'm a bit under the weather today.'</li><li><strong>go the extra mile</strong> — make extra effort: 'She always goes the extra mile for her students.'</li></ul>" },
        { heading: "Talking About Decisions & Opinions", html: "<ul><li><strong>on the fence</strong> — undecided: 'I'm still on the fence about the job offer.'</li><li><strong>see eye to eye</strong> — agree: 'We don't always see eye to eye on politics.'</li><li><strong>the best of both worlds</strong> — advantages of two different things: 'Working remotely gives me the best of both worlds.'</li><li><strong>weigh up the pros and cons</strong> — consider advantages/disadvantages: 'Let's weigh up the pros and cons first.'</li><li><strong>get the ball rolling</strong> — start something: 'Let's get the ball rolling on the project.'</li></ul>" },
        { heading: "Talking About Time & Change", html: "<ul><li><strong>once in a blue moon</strong> — very rarely: 'We only meet once in a blue moon now.'</li><li><strong>in the long run</strong> — over a long period of time: 'It'll pay off in the long run.'</li><li><strong>a turning point</strong> — a moment of important change: 'Moving abroad was a turning point in my life.'</li><li><strong>back to square one</strong> — starting over: 'The plan failed, so we're back to square one.'</li><li><strong>break the ice</strong> — ease tension in a social situation: 'He told a joke to break the ice.'</li></ul>" },
        { heading: "Everyday Expressions", html: "<ul><li><strong>cost an arm and a leg</strong> — very expensive: 'That laptop cost an arm and a leg.'</li><li><strong>keep an eye on</strong> — watch/monitor: 'Can you keep an eye on my bag?'</li><li><strong>speak of the devil</strong> — said when someone appears just as you're talking about them.</li><li><strong>call it a day</strong> — stop working for now: 'Let's call it a day.'</li><li><strong>get cold feet</strong> — become nervous about a decision: 'He got cold feet before the wedding.'</li></ul>" }
      ],
      commonMistakes: [
        "Overusing idioms in academic writing — save them for speaking and informal/creative writing.",
        "Mixing idioms up with similar-sounding ones — always learn the whole fixed phrase, not individual words."
      ],
      practiceTip: "Tell a one-minute story about your week using at least four idioms from this list naturally."
    },
    {
      id: "esl-13",
      title: "Linking Words & Cohesive Devices",
      category: "writing",
      level: "B2",
      tags: ["linking words", "cohesion", "writing", "b2"],
      summary: "Connecting ideas clearly across sentences and paragraphs in writing.",
      body: [
        { heading: "Addition", html: "in addition, furthermore, moreover, as well as, not only...but also.", examples: ["The plan is cost-effective. In addition, it is environmentally friendly.", "Not only did sales rise, but customer satisfaction also improved."] },
        { heading: "Contrast", html: "however, on the other hand, nevertheless, despite/in spite of + noun, although/even though + clause, whereas.", examples: ["The results were promising; however, further research is needed.", "Despite the rain, the event went ahead.", "Although he was tired, he finished the report."] },
        { heading: "Cause & Effect", html: "as a result, therefore, consequently, due to/owing to + noun, because/since/as + clause.", examples: ["Demand fell sharply; as a result, prices dropped.", "Due to heavy traffic, the meeting started late."] },
        { heading: "Sequencing & Summarising", html: "firstly/secondly/finally, subsequently, to conclude, in summary, overall.", examples: ["Firstly, the data was collected. Subsequently, it was analysed.", "Overall, the benefits outweigh the drawbacks."] }
      ],
      commonMistakes: [
        "Turkish L1 note: directly translating Turkish discourse markers produces unnatural phrases like 'In addition to this situation' — learn the fixed English collocations instead of translating word-for-word.",
        "Starting every sentence with a linking word, which makes writing feel mechanical rather than cohesive.",
        "Confusing 'despite' (+ noun/gerund) with 'although' (+ clause): ❌ 'Despite he was tired' → ✅ 'Despite being tired' or 'Although he was tired.'"
      ],
      practiceTip: "Take a paragraph you've written before and upgrade at least four basic connectors ('but', 'so', 'and') to more precise academic linkers."
    },
    {
      id: "esl-14",
      title: "Functional Writing: Formal & Informal Emails",
      category: "writing",
      level: "B1-B2",
      tags: ["emails", "functional writing", "formal", "informal", "b1", "b2"],
      summary: "Templates and register rules for writing appropriate emails in different contexts.",
      body: [
        {
          heading: "Formal Email Template",
          html: "<strong>Opening:</strong> Dear Mr/Ms [Surname], / Dear Sir or Madam, (if name unknown)<br><strong>Purpose line:</strong> I am writing to enquire about.../ to inform you that.../ to complain about...<br><strong>Body:</strong> 2–3 clear paragraphs, one idea each, formal vocabulary, no contractions.<br><strong>Closing:</strong> I look forward to hearing from you. / Please do not hesitate to contact me.<br><strong>Sign-off:</strong> Yours faithfully (unknown name) / Yours sincerely (named person)"
        },
        {
          heading: "Informal Email Template",
          html: "<strong>Opening:</strong> Hi [Name], / Hey [Name],<br><strong>Body:</strong> Conversational tone, contractions are fine, personal comments welcome.<br><strong>Closing:</strong> Can't wait to hear from you! / Speak soon!<br><strong>Sign-off:</strong> Take care, / Best, / See you soon,"
        },
        {
          heading: "Register Markers to Control",
          html: "Formal: 'I would be grateful if...', 'Furthermore', 'enclosed please find'. Informal: 'Let me know', 'By the way', 'Thanks a lot!'. Mixing registers (e.g. 'Hey Mr Smith, I would be grateful...') is a common and noticeable exam error."
        }
      ],
      commonMistakes: [
        "Using contractions in formal emails (don't, can't, I'm).",
        "Mismatched sign-off: using 'Yours sincerely' after 'Dear Sir or Madam' (should be 'Yours faithfully').",
        "Turkish L1 note: some learners transfer Turkish formal-letter openings word-for-word, which can sound overly ornate in English business correspondence — aim for direct, professional simplicity."
      ],
      practiceTip: "Write two emails about the same situation (e.g. a delayed delivery) — one formal to a company, one informal to a friend — and compare the register differences."
    },
    {
      id: "esl-15",
      title: "Vocabulary in Context: Collocations & Word Formation",
      category: "vocabulary",
      level: "B2",
      tags: ["collocations", "word formation", "vocabulary", "b2"],
      summary: "Building natural-sounding language through word partnerships and prefixes/suffixes.",
      body: [
        {
          heading: "Why Collocations Matter More Than Single Words",
          html: "Native-like fluency comes from knowing which words 'go together' naturally. 'Make a decision' is correct; 'do a decision' is not, even though 'do' and 'make' are both correct translations of the same Turkish verb in other contexts."
        },
        {
          heading: "High-Value Collocations",
          html: "<ul><li><strong>make:</strong> a decision, an effort, progress, a mistake, an impression</li><li><strong>do:</strong> homework, damage, a favour, business, research</li><li><strong>take:</strong> a risk, responsibility, a break, action, a chance</li><li><strong>have:</strong> an argument, an experience, a conversation, an opportunity</li><li><strong>strong/heavy vs high/big:</strong> 'strong coffee', 'heavy rain', 'high demand', 'big decision' — these adjective-noun pairs cannot be swapped freely.</li></ul>"
        },
        {
          heading: "Word Formation Patterns",
          html: "Recognise families to expand vocabulary fast: <em>success (n) → succeed (v) → successful (adj) → successfully (adv)</em>. Common prefixes: un-/in-/dis- (negative: unhappy, inaccurate, disagree); re- (again: rewrite); over-/under- (too much/little: overcooked, underpaid). Common suffixes: -tion/-ment (noun: education, development), -able/-ful (adjective: reliable, useful), -ly (adverb: quickly)."
        }
      ],
      commonMistakes: [
        "Word-for-word collocation transfer from Turkish (a frequent Lexical Resource cap in exam writing) — always learn new vocabulary in its collocational chunk, not as an isolated word.",
        "Wrong word class in a sentence (using a noun form where an adjective is needed): ❌ 'It was a success experience' → ✅ 'It was a successful experience.'"
      ],
      practiceTip: "Choose five words from a recent reading text and write out their full word-formation family (noun/verb/adjective/adverb), then use each form in one sentence."
    }
  ],

  mockExams: {
    b1: {
      id: "esl-mock-b1",
      title: "ESL Mock Exam — B1 Level",
      level: "B1",
      timeLimitMinutes: 40,
      sections: [
        {
          id: "b1-reading",
          title: "Reading Comprehension",
          type: "reading",
          passage: {
            title: "A Change of Pace",
            text: "Two years ago, Elif made a decision that surprised everyone who knew her. She left her job at a busy marketing agency in Istanbul and moved to a small town near the coast to open a bookshop. 'Everyone thought I was crazy,' she says, laughing. 'I had a good salary and a nice apartment. But I wasn't happy. I used to work twelve hours a day and I never had time to read, which was strange because reading was the thing I loved most.'\n\nAt first, the business was difficult. The town was small, and not many tourists visited in winter. Elif had to learn how to manage money carefully, and some months she barely made enough to pay the rent. However, she says she never regretted the decision. 'I was tired, but it was a different kind of tired. I was tired because I was building something, not because I was stuck.'\n\nSlowly, things began to change. Elif started organising small events in the shop: poetry evenings, book clubs, and afternoons where local writers could read their work aloud. Word spread, and people began travelling from nearby towns just to visit. Today, the bookshop is well known in the region, and Elif has even hired two part-time employees to help her.\n\nHer advice for anyone thinking about a similar change is simple: 'Don't expect it to be easy, and don't expect it to happen quickly. But if you're doing something you truly care about, the hard days feel completely different from the hard days in a job you don't love.'"
          },
          questions: [
            { id: "b1r-1", type: "mcq", prompt: "Why did Elif leave her marketing job?", options: ["She lost the job.", "She was unhappy and had no time to read.", "She wanted to earn more money.", "Her company closed down."], correctAnswer: 1, explanation: "Paragraph 1: 'I wasn't happy... I never had time to read, which was strange because reading was the thing I loved most.'", tag: "detail" },
            { id: "b1r-2", type: "mcq", prompt: "What was the biggest challenge when the shop first opened?", options: ["Finding a good location", "Managing money and low tourist numbers in winter", "Hiring staff", "Choosing which books to sell"], correctAnswer: 1, explanation: "Paragraph 2: 'The town was small, and not many tourists visited in winter... had to learn how to manage money carefully.'", tag: "detail" },
            { id: "b1r-3", type: "mcq", prompt: "What does 'it was a different kind of tired' suggest?", options: ["She was less tired than before.", "The tiredness felt meaningful because she was building her own project.", "She was too tired to continue.", "She missed being tired at her old job."], correctAnswer: 1, explanation: "The text contrasts being 'tired because I was building something' with being 'stuck' — the tiredness had a different emotional meaning.", tag: "inference" },
            { id: "b1r-4", type: "mcq", prompt: "How did the bookshop become more popular?", options: ["Elif advertised on social media.", "A newspaper wrote an article about it.", "Elif organised events like poetry evenings and book clubs.", "She reduced her prices."], correctAnswer: 2, explanation: "Paragraph 3: 'Elif started organising small events in the shop... Word spread.'", tag: "detail" },
            { id: "b1r-5", type: "mcq", prompt: "What is Elif's main advice at the end of the text?", options: ["Change careers as quickly as possible.", "Expect an easy and fast transition.", "Be patient — but doing something you love makes hard days easier to bear.", "Avoid small towns for business."], correctAnswer: 2, explanation: "Final paragraph: 'Don't expect it to be easy... the hard days feel completely different from the hard days in a job you don't love.'", tag: "main-idea" }
          ]
        },
        {
          id: "b1-gapfill",
          title: "Gap-Fill: Verb Forms in Context",
          type: "gapfill",
          instructions: "Complete each sentence with the correct form of the verb in brackets.",
          questions: [
            { id: "b1g-1", prompt: "If she ___ (have) more time, she would visit her parents more often.", correctAnswer: "had", explanation: "Second conditional (hypothetical present) → past simple in the if-clause.", tag: "conditionals" },
            { id: "b1g-2", prompt: "I ___ (live) in this city since 2019.", correctAnswer: "have lived", explanation: "'Since' + a starting point requires present perfect.", tag: "present-perfect" },
            { id: "b1g-3", prompt: "By the time we arrived, the film ___ already (start).", correctAnswer: "had already started", explanation: "Past perfect is used for an action completed before another past action.", tag: "past-perfect" },
            { id: "b1g-4", prompt: "The letter ___ (send) yesterday afternoon.", correctAnswer: "was sent", explanation: "Passive voice, past simple: was/were + past participle.", tag: "passive" },
            { id: "b1g-5", prompt: "She suggested ___ (go) to the new restaurant.", correctAnswer: "going", explanation: "'Suggest' is followed by a gerund (-ing form), not an infinitive.", tag: "gerunds" },
            { id: "b1g-6", prompt: "He asked me where I ___ (work).", correctAnswer: "worked", explanation: "Reported question: backshift from present simple to past simple, statement word order.", tag: "reported-speech" },
            { id: "b1g-7", prompt: "You ___ (must/not) park here — it's private property.", correctAnswer: "mustn't", explanation: "'Mustn't' expresses prohibition, unlike 'don't have to' (no obligation).", tag: "modals" },
            { id: "b1g-8", prompt: "This is the man ___ car was stolen last week.", correctAnswer: "whose", explanation: "'Whose' shows possession in a relative clause.", tag: "relative-clauses" },
            { id: "b1g-9", prompt: "We ___ (go) to the cinema tomorrow evening — I already bought the tickets.", correctAnswer: "are going", explanation: "Present continuous for a fixed future arrangement.", tag: "future-forms" },
            { id: "b1g-10", prompt: "If you heat water to 100°C, it ___ (boil).", correctAnswer: "boils", explanation: "Zero conditional: if + present simple, present simple (a scientific fact).", tag: "conditionals" }
          ]
        },
        {
          id: "b1-transformations",
          title: "Sentence Transformations",
          type: "transformation",
          instructions: "Rewrite each sentence using the word given, keeping the same meaning. Do not change the word given.",
          questions: [
            { id: "b1t-1", original: "It's possible that he missed the bus.", keyword: "MIGHT", correctAnswer: "He might have missed the bus.", explanation: "Modal of past deduction: 'might have' + past participle expresses possibility about the past.", tag: "modals" },
            { id: "b1t-2", original: "'I will call you tomorrow,' she said.", keyword: "TOLD", correctAnswer: "She told me (that) she would call me the next day.", explanation: "Reported speech: backshift 'will' → 'would'; 'tomorrow' → 'the next day'.", tag: "reported-speech" },
            { id: "b1t-3", original: "Someone stole my bike last night.", keyword: "WAS", correctAnswer: "My bike was stolen last night.", explanation: "Active to passive: object becomes subject + was/were + past participle.", tag: "passive" },
            { id: "b1t-4", original: "I don't have enough money, so I can't buy the tickets.", keyword: "IF", correctAnswer: "If I had enough money, I could buy the tickets.", explanation: "Second conditional expresses the hypothetical opposite of the real present situation.", tag: "conditionals" },
            { id: "b1t-5", original: "She started working here in 2020 and still works here.", keyword: "SINCE", correctAnswer: "She has worked here since 2020.", explanation: "Present perfect + 'since' for an action continuing from a past point to now.", tag: "present-perfect" }
          ]
        }
      ]
    },
    b2: {
      id: "esl-mock-b2",
      title: "ESL Mock Exam — B2 Level",
      level: "B2",
      timeLimitMinutes: 45,
      sections: [
        {
          id: "b2-reading",
          title: "Reading Comprehension",
          type: "reading",
          passage: {
            title: "The Quiet Cost of Constant Notifications",
            text: "It has become almost impossible to imagine a working day without the soft buzz of a phone notification. Emails, messages, calendar reminders and social media alerts compete for our attention dozens, sometimes hundreds, of times a day. While each individual interruption seems trivial, a growing body of research suggests that the cumulative effect on our concentration — and our stress levels — is far from negligible.\n\nA widely cited study found that it can take over twenty minutes to fully regain deep focus after a significant interruption. Given that the average office worker checks their phone or inbox every few minutes, true uninterrupted concentration has, for many people, become vanishingly rare. This matters because complex cognitive tasks — writing, analysis, problem-solving — depend heavily on a mental state researchers call 'flow', in which sustained attention allows ideas to connect in ways that are simply not possible when the mind is constantly switching tasks.\n\nCompanies have begun to respond, if unevenly. Some organisations have introduced 'focus hours', during which employees are neither expected nor permitted to respond to messages. Others have gone further, discouraging after-hours emails altogether or building software that batches non-urgent notifications into a single daily digest. Critics argue that such measures treat the symptom rather than the cause, since the underlying pressure to appear constantly available often comes from workplace culture rather than the technology itself.\n\nWhat is less often discussed is the psychological toll of anticipation. Even when no notification arrives, many people report a persistent, low-level urge to check their devices — a habit reinforced by the unpredictable nature of digital rewards, similar in structure to the mechanisms that make slot machines compelling. Breaking this cycle, psychologists suggest, requires more than willpower alone; it requires deliberately redesigning one's environment to remove the trigger altogether, whether that means switching off notifications entirely or leaving a phone in another room while working.\n\nUltimately, the debate is not really about technology itself, but about attention as a finite and valuable resource — one that, once fragmented, is far harder to reassemble than most of us assume."
          },
          questions: [
            { id: "b2r-1", type: "tfng", prompt: "According to the passage, it takes more than twenty minutes to fully regain deep focus after a serious interruption.", correctAnswer: "True", explanation: "Directly stated in paragraph 2: 'it can take over twenty minutes to fully regain deep focus after a significant interruption.'", tag: "tfng" },
            { id: "b2r-2", type: "tfng", prompt: "The passage states that all companies have introduced 'focus hours' successfully.", correctAnswer: "False", explanation: "The passage says companies have responded 'if unevenly' and only 'some organisations' have introduced focus hours — not all, and success is not claimed.", tag: "tfng" },
            { id: "b2r-3", type: "tfng", prompt: "The writer's personal daily notification count is mentioned in the passage.", correctAnswer: "Not Given", explanation: "The passage discusses averages and research findings generally, but never mentions the writer's own personal notification count.", tag: "tfng" },
            { id: "b2r-4", type: "mcq", prompt: "What do critics say about workplace measures like 'focus hours'?", options: ["They are too expensive to maintain.", "They address the symptom, not the underlying cultural pressure to be available.", "They are more effective than expected.", "They are only useful for senior staff."], correctAnswer: 1, explanation: "Paragraph 3: critics argue such measures 'treat the symptom rather than the cause, since the underlying pressure... often comes from workplace culture.'", tag: "detail" },
            { id: "b2r-5", type: "mcq", prompt: "The comparison to slot machines is used to illustrate what idea?", options: ["Notifications are a form of gambling addiction requiring treatment.", "The unpredictable nature of notifications creates a compelling, habit-forming psychological pull.", "Phones are designed primarily for entertainment.", "Slot machines and phones have the same interface design."], correctAnswer: 1, explanation: "Paragraph 4 compares the unpredictability of digital rewards to the mechanism that makes slot machines compelling, illustrating why checking becomes habitual.", tag: "inference" },
            { id: "b2r-6", type: "mcq", prompt: "What is the passage's overall conclusion?", options: ["Technology companies must be regulated more strictly.", "Attention is a limited resource that is difficult to restore once fragmented.", "Working from home solves the notification problem.", "Younger workers are more affected than older workers."], correctAnswer: 1, explanation: "Final paragraph: the debate is about 'attention as a finite and valuable resource... far harder to reassemble than most of us assume.'", tag: "main-idea" }
          ]
        },
        {
          id: "b2-gapfill",
          title: "Gap-Fill: Advanced Structures",
          type: "gapfill",
          instructions: "Complete each sentence with one appropriate word or correct verb form.",
          questions: [
            { id: "b2g-1", prompt: "___ the heavy rain, the match went ahead as planned.", correctAnswer: "Despite", explanation: "'Despite' is followed by a noun phrase; 'although' would need a full clause instead.", tag: "linking-words" },
            { id: "b2g-2", prompt: "If I ___ (know) about the traffic, I would have left earlier.", correctAnswer: "had known", explanation: "Third conditional: if + past perfect, would have + past participle.", tag: "conditionals" },
            { id: "b2g-3", prompt: "The proposal, ___ was submitted last week, has already been approved.", correctAnswer: "which", explanation: "Non-defining relative clause referring to the whole proposal; 'that' cannot be used after a comma.", tag: "relative-clauses" },
            { id: "b2g-4", prompt: "She has been ___ (study) English for six years, and she's nearly fluent now.", correctAnswer: "studying", explanation: "Present perfect continuous emphasises the duration of an ongoing activity.", tag: "present-perfect-continuous" },
            { id: "b2g-5", prompt: "The new policy is expected to ___ about significant change in the department.", correctAnswer: "bring", explanation: "'Bring about' = cause, a formal phrasal verb common in academic/report writing.", tag: "phrasal-verbs" },
            { id: "b2g-6", prompt: "He denied ___ (take) the missing files.", correctAnswer: "taking", explanation: "'Deny' is always followed by a gerund, never an infinitive.", tag: "gerunds" },
            { id: "b2g-7", prompt: "All visitors ___ report to reception upon arrival.", correctAnswer: "must", explanation: "Obligation (a rule that applies to everyone) is expressed with 'must' in formal notices.", tag: "modals" },
            { id: "b2g-8", prompt: "The results ___ (announce) at the conference next month.", correctAnswer: "will be announced", explanation: "Future passive: will + be + past participle.", tag: "passive" }
          ]
        },
        {
          id: "b2-transformations",
          title: "Sentence Transformations",
          type: "transformation",
          instructions: "Rewrite each sentence using the word given, keeping the same meaning. Do not change the word given.",
          questions: [
            { id: "b2t-1", original: "I regret not applying for that job.", keyword: "WISH", correctAnswer: "I wish I had applied for that job.", explanation: "'Wish + past perfect' expresses regret about a past action (or inaction).", tag: "wish-regret" },
            { id: "b2t-2", original: "It is not necessary for you to attend the meeting.", keyword: "HAVE", correctAnswer: "You don't have to attend the meeting.", explanation: "'Don't have to' expresses lack of obligation, distinct from 'mustn't' (prohibition).", tag: "modals" },
            { id: "b2t-3", original: "'Where have you put my keys?' she asked him.", keyword: "ASKED", correctAnswer: "She asked him where he had put her keys.", explanation: "Reported question: backshift present perfect → past perfect; pronoun and possessive changes ('my'→'her').", tag: "reported-speech" },
            { id: "b2t-4", original: "People believe that the company lost millions last year.", keyword: "BELIEVED", correctAnswer: "The company is believed to have lost millions last year.", explanation: "Passive reporting structure: subject + is/are believed + to have + past participle.", tag: "passive" },
            { id: "b2t-5", original: "Although she was very tired, she finished the report.", keyword: "DESPITE", correctAnswer: "Despite being very tired, she finished the report.", explanation: "'Despite' must be followed by a noun phrase or gerund, not a full clause like 'although'.", tag: "linking-words" }
          ]
        }
      ]
    }
  },

  flashcardDecks: [
    {
      id: "esl-deck-phrasal-verbs", title: "Phrasal Verbs — Essential Set", sourceNoteId: "esl-11",
      cards: [
        { id: "pv-1", term: "look after", definition: "take care of", example: "She looks after her grandmother." },
        { id: "pv-2", term: "get on with", definition: "have a good relationship with", example: "I get on with my flatmates." },
        { id: "pv-3", term: "put up with", definition: "tolerate", example: "I can't put up with the noise anymore." },
        { id: "pv-4", term: "fall out with", definition: "argue and stop being friends", example: "He fell out with his brother." },
        { id: "pv-5", term: "make up", definition: "resolve an argument / invent a story", example: "They made up after the fight." },
        { id: "pv-6", term: "hand in", definition: "submit", example: "Hand in your essay by Friday." },
        { id: "pv-7", term: "look into", definition: "investigate", example: "We'll look into the complaint." },
        { id: "pv-8", term: "carry out", definition: "perform / execute", example: "They carried out a survey." },
        { id: "pv-9", term: "come up with", definition: "think of (an idea)", example: "She came up with a great solution." },
        { id: "pv-10", term: "catch up on", definition: "do something you're behind on", example: "I need to catch up on my reading." },
        { id: "pv-11", term: "set up", definition: "establish / organise", example: "They set up a new company." },
        { id: "pv-12", term: "point out", definition: "indicate / mention", example: "She pointed out an error." },
        { id: "pv-13", term: "bring about", definition: "cause (formal register)", example: "The policy brought about major change." },
        { id: "pv-14", term: "carry on", definition: "continue", example: "Carry on with the exercise." },
        { id: "pv-15", term: "turn down", definition: "reject / refuse", example: "He turned down the offer." },
        { id: "pv-16", term: "run out of", definition: "have no more of something", example: "We ran out of milk." },
        { id: "pv-17", term: "give up", definition: "stop trying / quit", example: "Don't give up on your goal." },
        { id: "pv-18", term: "go over", definition: "review", example: "Let's go over the notes again." },
        { id: "pv-19", term: "work out", definition: "calculate / exercise / succeed", example: "It worked out fine in the end." },
        { id: "pv-20", term: "take after", definition: "resemble a family member", example: "She takes after her mother." }
      ]
    },
    {
      id: "esl-deck-idioms", title: "Idioms in Context — Top 20", sourceNoteId: "esl-12",
      cards: [
        { id: "id-1", term: "bite the bullet", definition: "do something unpleasant but necessary", example: "I finally bit the bullet and went to the dentist." },
        { id: "id-2", term: "a piece of cake", definition: "very easy", example: "The test was a piece of cake." },
        { id: "id-3", term: "hit the books", definition: "study hard", example: "I need to hit the books before finals." },
        { id: "id-4", term: "under the weather", definition: "feeling slightly ill", example: "I'm a bit under the weather today." },
        { id: "id-5", term: "go the extra mile", definition: "make extra effort", example: "She always goes the extra mile for her students." },
        { id: "id-6", term: "on the fence", definition: "undecided", example: "I'm still on the fence about the job offer." },
        { id: "id-7", term: "see eye to eye", definition: "agree", example: "We don't always see eye to eye on politics." },
        { id: "id-8", term: "the best of both worlds", definition: "the advantages of two different things at once", example: "Working remotely gives me the best of both worlds." },
        { id: "id-9", term: "weigh up the pros and cons", definition: "consider advantages and disadvantages", example: "Let's weigh up the pros and cons first." },
        { id: "id-10", term: "get the ball rolling", definition: "start something", example: "Let's get the ball rolling on the project." },
        { id: "id-11", term: "once in a blue moon", definition: "very rarely", example: "We only meet once in a blue moon now." },
        { id: "id-12", term: "in the long run", definition: "over a long period of time", example: "It'll pay off in the long run." },
        { id: "id-13", term: "a turning point", definition: "a moment of important change", example: "Moving abroad was a turning point in my life." },
        { id: "id-14", term: "back to square one", definition: "starting over", example: "The plan failed, so we're back to square one." },
        { id: "id-15", term: "break the ice", definition: "ease tension in a social situation", example: "He told a joke to break the ice." },
        { id: "id-16", term: "cost an arm and a leg", definition: "be very expensive", example: "That laptop cost an arm and a leg." },
        { id: "id-17", term: "keep an eye on", definition: "watch / monitor", example: "Can you keep an eye on my bag?" },
        { id: "id-18", term: "speak of the devil", definition: "said when someone appears just as you're talking about them", example: "Speak of the devil — here's Ali now!" },
        { id: "id-19", term: "call it a day", definition: "stop working for now", example: "Let's call it a day." },
        { id: "id-20", term: "get cold feet", definition: "become nervous about a decision", example: "He got cold feet before the wedding." }
      ]
    }
  ]
};

/* SCHEMA NOTES — for adding future ESL content packs:
 * notes[]: { id, title, category, level, tags[], summary, body:[{heading, html, examples?}], commonMistakes[], practiceTip }
 * mockExams.<level>: { id, title, level, timeLimitMinutes, sections:[{id, title, type, passage?|instructions?, questions:[...]}] }
 * Question shapes:
 *   reading (mcq/tfng): { id, type, prompt, options?, correctAnswer, explanation, tag }
 *   gapfill: { id, prompt (use ___ for blank), correctAnswer, explanation, tag }
 *   transformation: { id, original, keyword, correctAnswer, explanation, tag }
 * To add ESL Mock Exam Pack 2 (additional B1/B2 sets), append new keys under mockExams (e.g. mockExams.b1Pack2)
 * and register them in js/app.js renderEslMockList().
 * flashcardDecks[]: { id, title, sourceNoteId?, cards:[{id, term, definition, example}] } — add a new deck object
 * to grow the Flashcards tool; app.js discovers decks generically, no UI changes needed.
 */
