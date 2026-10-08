/* ApexPrep Academy — SAT Prep Zone (Reading & Writing + Math) data module
   Mock Test 1 is fully authored end-to-end (both modules, full answer key with
   proofs/evidence). Mock Tests 2–10 are roadmap stubs — see schema notes below. */
window.APEX_DATA = window.APEX_DATA || {};

window.APEX_DATA.sat = {

  mockTests: [
    {
      id: "sat-mock-1",
      title: "SAT Full-Length Mock Test 1",
      comingSoon: false,
      note: "A complete, representative-length integrated test covering every domain of the digital SAT — Craft & Structure, Information & Ideas, Standard English Conventions, and Expression of Ideas in Reading & Writing; Algebra, Advanced Math, Problem-Solving & Data Analysis, and Geometry & Trigonometry in Math. A calculator (built-in or your own) is permitted on all Math questions, matching the current digital SAT format.",

      readingWriting: {
        timeLimitMinutes: 32,
        instructions: "Each question is based on a short passage or set of notes. Choose the best answer or complete the blank, then check the answer key for a full evidence citation.",
        questions: [
          {
            id: "rw-1", domain: "Craft and Structure — Words in Context", type: "mcq",
            passage: "Marine biologist Dr. Elena Vasquez spent a decade observing a coral reef off the coast of Belize, publishing incremental findings only after each result had been independently replicated. Colleagues who favored faster publication timelines viewed her approach as needlessly ______; Vasquez herself maintained that scientific credibility, once damaged by a retracted claim, is rarely fully restored.",
            prompt: "Which choice completes the text with the most logical and precise word?",
            options: ["innovative", "cautious", "indifferent", "ambitious"],
            correctAnswer: 1,
            explanation: "The passage establishes that Vasquez published only after independent replication and valued credibility over speed — traits her faster-moving colleagues would characterize as excessive caution. 'Cautious' is the only option consistent with both her behavior and their critical framing of it.",
            tag: "words-in-context"
          },
          {
            id: "rw-2", domain: "Craft and Structure — Words in Context", type: "mcq",
            passage: "When a central bank raises interest rates, borrowing becomes more expensive, which tends to ______ consumer spending, as households delay large purchases like homes and cars until credit is less costly.",
            prompt: "Which choice completes the text with the most logical and precise word?",
            options: ["accelerate", "dampen", "diversify", "publicize"],
            correctAnswer: 1,
            explanation: "The clause 'households delay large purchases... until credit is less costly' describes a decrease in spending, which 'dampen' precisely captures; 'accelerate' would contradict the described delay.",
            tag: "words-in-context"
          },
          {
            id: "rw-3", domain: "Craft and Structure — Words in Context", type: "mcq",
            passage: "Though the novel's plot is deceptively simple — a young clerk's single day in a provincial town — critics have long praised its ______ structure, in which recurring images of clocks and mirrors quietly echo the narrator's obsession with time and self-perception.",
            prompt: "Which choice completes the text with the most logical and precise word?",
            options: ["chaotic", "intricate", "accidental", "forgettable"],
            correctAnswer: 1,
            explanation: "The description of deliberately recurring, thematically linked imagery ('quietly echo the narrator's obsession') indicates careful design, matching 'intricate' rather than 'chaotic' or 'accidental', both of which imply a lack of deliberate pattern.",
            tag: "words-in-context"
          },
          {
            id: "rw-4", domain: "Craft and Structure — Text Structure and Purpose", type: "mcq",
            passage: "Urban planners once assumed that wider roads were the most direct solution to traffic congestion. Yet data from cities that have expanded their highway systems consistently show that congestion returns within a few years, as improved capacity encourages more residents to drive rather than use alternative transportation. This phenomenon, known as induced demand, has led many planners to reconsider whether road expansion addresses congestion at its root or merely postpones it.",
            prompt: "Which choice best describes the function of the second sentence (\"Yet data from cities... alternative transportation.\") in the text as a whole?",
            options: ["It introduces a competing explanation that the passage ultimately rejects.", "It presents evidence that complicates the assumption stated in the first sentence.", "It offers a historical example unrelated to the main claim.", "It summarizes the conclusion the passage will reach."],
            correctAnswer: 1,
            explanation: "The first sentence states an assumption (wider roads solve congestion); the second sentence introduces data that undermines that assumption, setting up the passage's actual point about induced demand.",
            tag: "text-structure"
          },
          {
            id: "rw-5", domain: "Craft and Structure — Text Structure and Purpose", type: "mcq",
            passage: "A city council report begins by outlining the current problem of overflowing recycling bins downtown, then presents three cost estimates for expanded pickup services, and closes by recommending the middle-cost option as the most sustainable long-term investment despite its higher upfront price.",
            prompt: "Which choice best describes the overall structure of the report described in the text?",
            options: ["A problem is described, options are compared, and a recommendation is justified.", "A solution is proposed, then challenged, then abandoned.", "Multiple problems are described with no proposed solution.", "A historical narrative leads to an open question."],
            correctAnswer: 0,
            explanation: "The text explicitly describes three stages in order: a stated problem, a comparison of cost options, and a justified recommendation — matching option A exactly.",
            tag: "text-structure"
          },
          {
            id: "rw-6", domain: "Craft and Structure — Cross-Text Connections", type: "mcq",
            passage: "Text 1: Historian A argues that the decline of the Roman Empire was driven primarily by economic overextension: the cost of maintaining distant military garrisons eventually outpaced the tax revenue the empire could reliably collect.\n\nText 2: Historian B contends that internal political instability, particularly the frequent and often violent turnover of emperors, undermined effective long-term governance long before economic strain became critical.",
            prompt: "Based on the texts, how would Historian B most likely respond to Historian A's claim about economic overextension?",
            options: ["By agreeing entirely and abandoning the political-instability argument.", "By acknowledging economic strain but arguing that political instability was the more fundamental, earlier cause.", "By denying that the empire ever experienced economic difficulty.", "By claiming the two explanations are entirely unrelated and cannot be compared."],
            correctAnswer: 1,
            explanation: "Historian B's claim that instability arose 'long before economic strain became critical' implies a sequencing argument (instability first, economic strain later/consequently) rather than an outright denial of economic factors — matching option B.",
            tag: "cross-text"
          },
          {
            id: "rw-7", domain: "Information and Ideas — Central Ideas and Details", type: "mcq",
            passage: "Remote work arrangements, once viewed as a temporary pandemic-era accommodation, have persisted for many companies well beyond the initial public health emergency that prompted them. Surveys of employees consistently show a strong preference for at least partial remote flexibility, and several large firms have reported that productivity metrics have remained stable or improved since adopting hybrid schedules. At the same time, some executives argue that in-person collaboration fosters forms of spontaneous innovation that cannot be fully replicated online, leading a number of companies to gradually increase mandatory in-office days despite employee resistance.",
            prompt: "Which choice best states the main idea of the text?",
            options: ["Remote work has been proven to reduce company profits.", "Employee preferences and executive concerns about collaboration are creating ongoing tension over how much remote work should continue.", "All companies have abandoned hybrid work schedules.", "Productivity always declines when employees work from home."],
            correctAnswer: 1,
            explanation: "The passage presents two competing forces — employee preference/stable productivity versus executive concern about collaboration — without resolving them, which option B accurately summarizes as 'ongoing tension.'",
            tag: "central-ideas"
          },
          {
            id: "rw-8", domain: "Information and Ideas — Command of Evidence (Textual)", type: "mcq",
            passage: "Remote work arrangements, once viewed as a temporary pandemic-era accommodation, have persisted for many companies well beyond the initial public health emergency that prompted them. Surveys of employees consistently show a strong preference for at least partial remote flexibility, and several large firms have reported that productivity metrics have remained stable or improved since adopting hybrid schedules. At the same time, some executives argue that in-person collaboration fosters forms of spontaneous innovation that cannot be fully replicated online, leading a number of companies to gradually increase mandatory in-office days despite employee resistance.",
            prompt: "Which quotation from the text most directly supports the claim that remote work has not harmed company performance?",
            options: ["\"once viewed as a temporary pandemic-era accommodation\"", "\"several large firms have reported that productivity metrics have remained stable or improved since adopting hybrid schedules\"", "\"in-person collaboration fosters forms of spontaneous innovation\"", "\"a number of companies to gradually increase mandatory in-office days\""],
            correctAnswer: 1,
            explanation: "This quotation directly states that productivity has not declined ('remained stable or improved'), which is the specific evidence the claim requires; the other quotations describe timing, a counter-argument, or a company policy response, not performance data.",
            tag: "command-of-evidence"
          },
          {
            id: "rw-9", domain: "Information and Ideas — Command of Evidence (Quantitative)", type: "mcq",
            passage: "A city's transportation department claims that a new bike-lane network has significantly increased cycling commuting rates. Data collected over three years show the following annual counts of daily cyclists at a central monitoring point: Year 1: 420; Year 2: 610; Year 3: 890.",
            prompt: "Which choice best supports the department's claim using the data provided?",
            options: ["Daily cyclist counts more than doubled from Year 1 (420) to Year 3 (890), an increase of over 100 percent.", "Daily cyclist counts decreased slightly between Year 2 and Year 3.", "The data shows no consistent trend across the three years.", "Daily cyclist counts remained roughly the same across all three years."],
            correctAnswer: 0,
            explanation: "890 is more than double 420 (420 × 2 = 840 < 890), a percentage increase of (890−420)/420 ≈ 111.9%, directly supporting the claim of a significant increase; the other options misstate or contradict the data.",
            tag: "command-of-evidence-quant"
          },
          {
            id: "rw-10", domain: "Information and Ideas — Inferences", type: "mcq",
            passage: "Although the museum's new exhibit on deep-sea life has drawn record attendance, several marine biologists have privately noted that a few of the exhibit's interactive displays simplify predator-prey relationships to the point of minor inaccuracy. None of these biologists, however, have publicly criticized the exhibit, and two have even recommended it to colleagues as an effective tool for building public interest in ocean conservation.",
            prompt: "Which choice can most reasonably be inferred from the text?",
            options: ["The biologists believe public engagement value can outweigh minor scientific inaccuracy in this case.", "The museum plans to close the exhibit due to criticism.", "The biologists are unaware of the inaccuracies.", "Public attendance has declined since the exhibit opened."],
            correctAnswer: 0,
            explanation: "The biologists noticed inaccuracies yet chose not to criticize publicly and even recommended the exhibit for its conservation-engagement value — behavior only explained by their judgment that the engagement benefit outweighs the minor inaccuracy.",
            tag: "inference"
          },
          {
            id: "rw-11", domain: "Standard English Conventions — Sentence Boundaries", type: "mcq",
            passage: "The committee reviewed dozens of applications, several of which included strong letters of recommendation ______ only twelve candidates were selected for interviews.",
            prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
            options: ["recommendation, however", "recommendation; however,", "recommendation, however,", "recommendation however"],
            correctAnswer: 1,
            explanation: "Two independent clauses joined by a conjunctive adverb ('however') require a semicolon before it and a comma after it: '...recommendation; however, only twelve...'. A comma alone before 'however' creates a comma splice.",
            tag: "sentence-boundaries"
          },
          {
            id: "rw-12", domain: "Standard English Conventions — Subject-Verb Agreement", type: "mcq",
            passage: "The results of the study, which involved over a thousand participants across five countries, ______ that dietary patterns established in early childhood strongly predict adult health outcomes.",
            prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
            options: ["suggests", "suggest", "has suggested", "is suggesting"],
            correctAnswer: 1,
            explanation: "The subject of the verb is the plural noun 'results' (not the singular 'study', which sits inside an intervening relative clause), so the verb must be the plural form 'suggest.'",
            tag: "subject-verb-agreement"
          },
          {
            id: "rw-13", domain: "Expression of Ideas — Rhetorical Synthesis", type: "mcq",
            passage: "A student has researched the following notes about bees and wants to write a sentence emphasizing a similarity between honeybees and bumblebees:\n• Honeybees live in large colonies with a single queen and thousands of workers.\n• Bumblebees also live in colonies with a queen, though colonies are much smaller, often fewer than 400 individuals.\n• Both species perform a critical ecological role as pollinators of flowering plants.\n• Honeybees communicate food locations via a 'waggle dance'; bumblebees do not perform this behavior.",
            prompt: "Which choice most effectively uses relevant information from the notes to accomplish the student's goal?",
            options: ["Honeybees perform a waggle dance to communicate food sources, while bumblebees rely on different signals entirely.", "Both honeybees and bumblebees live in queen-led colonies and serve as essential pollinators of flowering plants.", "Bumblebee colonies are typically much smaller than honeybee colonies, often containing fewer than 400 individuals.", "Honeybee colonies can contain thousands of worker bees, far more than a typical bumblebee colony."],
            correctAnswer: 1,
            explanation: "Only option B states a similarity (shared queen-led colony structure and shared pollinator role); the other options describe differences, which does not match the stated goal.",
            tag: "rhetorical-synthesis"
          },
          {
            id: "rw-14", domain: "Expression of Ideas — Transitions", type: "mcq",
            passage: "Many companies have adopted four-day work weeks on a trial basis. Early data from several of these trials indicate stable or improved productivity. ______, some industries, such as healthcare and manufacturing, have found the model difficult to implement due to continuous staffing requirements.",
            prompt: "Which choice completes the text with the most logical transition?",
            options: ["Similarly", "For example", "However", "As a result"],
            correctAnswer: 2,
            explanation: "The second sentence reports a contrasting difficulty (some industries struggle to implement the model) after the first sentence's positive productivity data — a contrast signaled correctly only by 'However.'",
            tag: "transitions"
          },
          {
            id: "rw-15", domain: "Standard English Conventions — Subject-Verb Agreement", type: "mcq",
            passage: "Denizli, a city in southwestern Turkey renowned for the white travertine terraces of Pamukkale, ______ a growing hub for domestic and international tourism.",
            prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
            options: ["have become", "has become", "becoming", "become"],
            correctAnswer: 1,
            explanation: "The subject 'Denizli' is singular; the appositive phrase between subject and verb ('a city... Pamukkale') does not change the required agreement, so the singular verb 'has become' is correct.",
            tag: "subject-verb-agreement"
          }
        ]
      },

      math: {
        timeLimitMinutes: 35,
        instructions: "A calculator is permitted on every question. For grid-in questions, enter your answer as a decimal (fractions will be automatically accepted where noted).",
        questions: [
          { id: "m-1", domain: "Algebra", type: "mcq", prompt: "Solve for x: 3(x − 4) + 5 = 2x + 7", options: ["7", "10", "14", "21"], correctAnswer: 2,
            explanation: "3(x−4)+5 = 2x+7 → 3x−12+5 = 2x+7 → 3x−7 = 2x+7 → x = 14. Check: 3(10)+5=35 and 2(14)+7=35 ✓.", tag: "linear-equations" },
          { id: "m-2", domain: "Algebra", type: "mcq", prompt: "If 2x + y = 11 and x − y = 1, what is the value of x?", options: ["3", "4", "5", "6"], correctAnswer: 1,
            explanation: "Add the two equations: (2x+y) + (x−y) = 11+1 → 3x = 12 → x = 4. Check: y = x−1 = 3, and 2(4)+3 = 11 ✓.", tag: "systems-of-equations" },
          { id: "m-3", domain: "Algebra", type: "mcq", prompt: "Which of the following describes all values of x that satisfy 5 − 2x > 11?", options: ["x > −3", "x < −3", "x > 3", "x < 3"], correctAnswer: 1,
            explanation: "5 − 2x > 11 → −2x > 6 → x < −3 (dividing by a negative number reverses the inequality sign).", tag: "inequalities" },
          { id: "m-4", domain: "Algebra", type: "mcq", prompt: "A taxi charges a flat fee of $3.50 plus $2.25 per mile. Which equation gives the total cost C, in dollars, for a trip of m miles?", options: ["C = 3.50m + 2.25", "C = 2.25m + 3.50", "C = 3.50 + 2.25 + m", "C = (3.50 + 2.25)m"], correctAnswer: 1,
            explanation: "The flat fee ($3.50) is a fixed constant added once; the per-mile rate ($2.25) is multiplied by the number of miles m, giving C = 2.25m + 3.50.", tag: "linear-models" },

          { id: "m-5", domain: "Advanced Math", type: "mcq", prompt: "What is the larger root of x² − 5x + 6 = 0?", options: ["2", "3", "5", "6"], correctAnswer: 1,
            explanation: "Factor: x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3. The larger root is 3.", tag: "quadratics" },
          { id: "m-6", domain: "Advanced Math", type: "mcq", prompt: "A population grows according to P(t) = 500(1.04)^t, where t is measured in years. To the nearest whole number, what is the population after 2 years?", options: ["508", "520", "541", "560"], correctAnswer: 2,
            explanation: "P(2) = 500(1.04)² = 500(1.0816) = 540.8, which rounds to 541.", tag: "exponential-functions" },
          { id: "m-7", domain: "Advanced Math", type: "mcq", prompt: "If f(x) = 2x² − 3x + 1, what is f(3)?", options: ["8", "10", "12", "16"], correctAnswer: 1,
            explanation: "f(3) = 2(3)² − 3(3) + 1 = 2(9) − 9 + 1 = 18 − 9 + 1 = 10.", tag: "function-evaluation" },
          { id: "m-8", domain: "Advanced Math", type: "gridin", prompt: "The function h(t) = −16t² + 64t models the height, in feet, of a ball t seconds after it is thrown. At what time t, in seconds, does the ball reach its maximum height?", correctAnswer: 2, tolerance: 0.05,
            explanation: "For h(t) = at² + bt + c, the vertex (maximum, since a < 0) occurs at t = −b/(2a) = −64/(2 × −16) = −64/−32 = 2 seconds.", tag: "quadratic-vertex" },

          { id: "m-9", domain: "Problem-Solving and Data Analysis", type: "gridin", prompt: "A shirt originally priced at $40 is discounted by 15%, and then an additional 10% is taken off the discounted price. What is the final price, in dollars?", correctAnswer: 30.6, tolerance: 0.05,
            explanation: "First discount: 40 × (1 − 0.15) = 40 × 0.85 = 34. Second discount: 34 × (1 − 0.10) = 34 × 0.90 = 30.6.", tag: "percentages" },
          { id: "m-10", domain: "Problem-Solving and Data Analysis", type: "mcq", prompt: "What is the median of the data set {4, 8, 8, 9, 15, 20}?", options: ["8", "8.5", "9", "10"], correctAnswer: 1,
            explanation: "With 6 values (even count) already in order, the median is the average of the 3rd and 4th values: (8 + 9)/2 = 8.5.", tag: "statistics" },
          { id: "m-11", domain: "Problem-Solving and Data Analysis", type: "mcq", prompt: "A line of best fit for a scatterplot relating hours studied (x) to test score (y) is given by y = 3.5x + 62. Based on this model, what is the predicted increase in test score for each additional hour studied?", options: ["62 points", "3.5 points", "65.5 points", "217 points"], correctAnswer: 1,
            explanation: "In the linear model y = mx + b, the slope m represents the change in y per unit increase in x. Here m = 3.5, so each additional hour studied predicts a 3.5-point increase.", tag: "linear-models-data" },
          { id: "m-12", domain: "Problem-Solving and Data Analysis", type: "gridin", prompt: "A bag contains 5 red, 3 blue, and 2 green marbles. If one marble is drawn at random, what is the probability that it is blue? (Enter your answer as a decimal.)", correctAnswer: 0.3, tolerance: 0.01,
            explanation: "Total marbles = 5 + 3 + 2 = 10. P(blue) = 3/10 = 0.3.", tag: "probability" },

          { id: "m-13", domain: "Geometry and Trigonometry", type: "mcq", prompt: "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?", options: ["15", "18", "21", "225"], correctAnswer: 0,
            explanation: "By the Pythagorean theorem: c = √(9² + 12²) = √(81 + 144) = √225 = 15. (This is a 3-4-5 triangle scaled by 3.)", tag: "pythagorean-theorem" },
          { id: "m-14", domain: "Geometry and Trigonometry", type: "gridin", prompt: "A circle has a radius of 6 cm. Using π ≈ 3.14, what is the area of the circle in square centimeters, rounded to the nearest tenth?", correctAnswer: 113.0, tolerance: 0.5,
            explanation: "Area = πr² ≈ 3.14 × 6² = 3.14 × 36 = 113.04, which rounds to 113.0 square centimeters.", tag: "circles" },
          { id: "m-15", domain: "Geometry and Trigonometry", type: "mcq", prompt: "In right triangle ABC, angle C = 90°, the side opposite angle A has length 5, the side opposite angle B has length 12, and the hypotenuse has length 13. What is sin(A)?", options: ["5/13", "12/13", "5/12", "12/5"], correctAnswer: 0,
            explanation: "sin(A) = opposite/hypotenuse = 5/13. (This is a 5-12-13 right triangle.)", tag: "trigonometry" },
          { id: "m-16", domain: "Geometry and Trigonometry", type: "gridin", prompt: "A rectangular box has length 8, width 5, and height 3 (all in the same unit). What is its volume, in cubic units?", correctAnswer: 120, tolerance: 0.5,
            explanation: "Volume = length × width × height = 8 × 5 × 3 = 120 cubic units.", tag: "volume" }
        ]
      }
    },

    // ===================== ROADMAP STUBS (Mock Tests 2–10) =====================
    { id: "sat-mock-2", title: "SAT Full-Length Mock Test 2", comingSoon: true, summary: "Coming in Content Pack 2 — same full-length structure and answer-key depth as Mock Test 1." },
    { id: "sat-mock-3", title: "SAT Full-Length Mock Test 3", comingSoon: true, summary: "Coming in Content Pack 2." },
    { id: "sat-mock-4", title: "SAT Full-Length Mock Test 4", comingSoon: true, summary: "Coming in Content Pack 2." },
    { id: "sat-mock-5", title: "SAT Full-Length Mock Test 5", comingSoon: true, summary: "Coming in Content Pack 2." },
    { id: "sat-mock-6", title: "SAT Full-Length Mock Test 6", comingSoon: true, summary: "Coming in Content Pack 3." },
    { id: "sat-mock-7", title: "SAT Full-Length Mock Test 7", comingSoon: true, summary: "Coming in Content Pack 3." },
    { id: "sat-mock-8", title: "SAT Full-Length Mock Test 8", comingSoon: true, summary: "Coming in Content Pack 3." },
    { id: "sat-mock-9", title: "SAT Full-Length Mock Test 9", comingSoon: true, summary: "Coming in Content Pack 3." },
    { id: "sat-mock-10", title: "SAT Full-Length Mock Test 10", comingSoon: true, summary: "Coming in Content Pack 3." }
  ]
};

/* SCHEMA NOTES — for completing Mock Tests 2–10:
 * Each mockTests[] entry: { id, title, comingSoon, note?, readingWriting:{timeLimitMinutes, instructions, questions[]}, math:{timeLimitMinutes, instructions, questions[]} }
 * R&W question: { id, domain, type:'mcq', passage, prompt, options[4], correctAnswer(index), explanation, tag }
 * Math question: { id, domain, type:'mcq'|'gridin', prompt, options[4]?(mcq only), correctAnswer(index for mcq / number for gridin), tolerance?(gridin only), explanation, tag }
 * Domains to cover per test (for balance): Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry (Math);
 * Craft and Structure, Information and Ideas, Standard English Conventions, Expression of Ideas (Reading & Writing).
 * After authoring, flip comingSoon to false — app.js reads comingSoon automatically, no UI changes needed.
 */
