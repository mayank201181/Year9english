import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "discursive-writing-public-speaking-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "discursive-essay-structure",
      question:
        'A student states an opponent’s strongest, fairest case before evaluating and rebutting it — rather than mocking a weak caricature. What two-word technique is this? (Starts with **s**.)',
      answer: {
        type: "text",
        accept: ["steel-manning", "steel manning", "steel man", "steel-man", "steelmanning", "steelman"],
        display: "steel-manning",
      },
      traps: [
        {
          spec: { type: "text", accept: ["straw man", "straw-man", "strawman", "straw-manning"] },
          feedback: "Careful — a straw man twists the rival view into a weak caricature; presenting it at its strongest is steel-manning!",
        },
      ],
      hints: [
        "Think of the opposite material to 'straw' — strong metal representing the opponent’s toughest version.",
      ],
      solution: [
        "Strengthening an opponent’s argument to its best form before answering it is **steel-manning**.",
      ],
    },
    {
      id: "discursive-writing-public-speaking-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "aristotelian-rhetoric",
      question:
        'Read this speech line:\n\n*"We will not trade long-term learning for short-term shortcuts. We will not mistake busyness for brilliance. We will not fear hard questions."*\n\nWhich rhetorical device repeats the exact opening words *"We will not"* across consecutive sentences? (One word.)',
      answer: {
        type: "text",
        accept: ["anaphora"],
        display: "anaphora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["antithesis", "hypophora", "ethos"] },
          feedback: "Notice the repeated opening phrase ('We will not') at the start of every sentence — that specific repetition is anaphora.",
        },
      ],
      hints: [
        "Focus on the repeated words right at the *start* of each sentence ('We will not…').",
      ],
      solution: [
        "Repeating the exact opening phrase across consecutive clauses is **anaphora**.",
      ],
    },
    {
      id: "discursive-writing-public-speaking-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "aristotelian-rhetoric",
      question:
        'Read this excerpt from a Year 9 speech:\n\n*"According to the 2024 national transport survey, dedicated school buses cut morning gate congestion by 44% and reduced local nitrogen-dioxide levels by nearly a third."*\n\nWhich Aristotelian appeal is used here?',
      options: [
        "Logos",
        "Pathos",
        "Ethos",
        "Hypophora",
      ],
      answerIndex: 0,
      hints: [
        "Spot the measurable percentages and empirical survey citation.",
      ],
      explanation:
        "Verifiable statistics ('44%', 'nearly a third') from an official survey appeal directly to reason and evidence — Logos.",
    },
    {
      id: "discursive-writing-public-speaking-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "spag-syntax-precision",
      question:
        'Identify the specific punctuation error in this sentence:\n\n*"The school extended library hours, however, few pupils knew the doors stayed open until six."*\n\n(Type the two-word name of this error.)',
      answer: {
        type: "text",
        accept: ["comma splice", "comma-splice"],
        display: "comma splice",
      },
      hints: [
        "Check the comma right before 'however': can a bare comma legally glue two complete sentences together?",
        "Recall the two-word error name for joining independent clauses with only a comma.",
      ],
      solution: [
        "'however' is a conjunctive adverb, not a FANBOYS conjunction, so putting only a comma before it between two full clauses creates a **comma splice**.",
      ],
    },
    {
      id: "discursive-writing-public-speaking-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "spag-syntax-precision",
      question:
        'Look at the blank in this formal discursive sentence:\n\n*"A balanced essay loses ___ authority when it mocks opposing viewpoints instead of testing them."*\n\nShould the missing word (`its` / `it\'s`) include an apostrophe? (Type `yes` or `no`.)',
      answer: {
        type: "text",
        accept: ["no", "no apostrophe", "without apostrophe"],
        display: "no",
      },
      traps: [
        {
          spec: { type: "text", accept: ["yes", "with apostrophe"] },
          feedback: "Test with 'it is': 'loses it is authority' does not make sense — possessive 'its' takes NO apostrophe!",
        },
      ],
      hints: [
        "Substitute 'it is' into the blank: does 'loses it is authority' make sense?",
        "Possessive pronouns like *his, hers, ours,* and *its* never use an apostrophe.",
      ],
      solution: [
        "Because 'it is' fails the substitution test, the sentence needs possessive `its` with **no** apostrophe.",
      ],
    },
    {
      id: "discursive-writing-public-speaking-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "public-speaking-competition",
      question:
        "During a 3-minute Tanglin Public Speaking Competition round, why is opening with *'Hello everyone, today I am going to talk about plastic waste'* a weak choice?",
      options: [
        "It breaks formal grammar rules by using a passive verb.",
        "It wastes the crucial first 15 seconds on predictable housekeeping instead of hooking curiosity.",
        "It reveals too many advanced statistics before the audience settles.",
        "It prevents the speaker from making eye contact across the hall.",
      ],
      answerIndex: 1,
      hints: [
        "Think about the golden rule for seconds 0:00–0:15 of a short competition speech.",
        "Audience attention peaks right when you begin — should you spend it on throat-clearing or a vivid hook?",
      ],
      explanation:
        "Predictable announcements ('today I am going to talk about…') burn the prime attention window; finalists launch directly into a vivid scene, paradox, or question.",
    },
    {
      id: "discursive-writing-public-speaking-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "aristotelian-rhetoric",
      question:
        'Read this speech line:\n\n*"Should we judge a teenager’s worth by a single Tuesday morning exam? Of course not — curiosity cannot be weighed on a timer."*\n\nName the rhetorical device of asking a question and immediately answering it yourself. (One word.)',
      answer: {
        type: "text",
        accept: ["hypophora"],
        display: "hypophora",
      },
      hints: [
        "Notice the speaker does not leave the question hanging — they immediately supply 'Of course not…'",
        "Think of the classical rhetorical term starting with 'h'.",
      ],
      solution: [
        "Posing a sharp question and immediately answering it yourself is **hypophora**.",
      ],
    },
    {
      id: "discursive-writing-public-speaking-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "spag-syntax-precision",
      question:
        "Which punctuation mark fits best in the blank?\n\n*\"Every compelling speech depends on one overlooked instrument ___ silence.\"*",
      options: [
        "A comma (`,`)",
        "A semicolon (`;`)",
        "A colon (`:`)",
        "A question mark (`?`)",
      ],
      answerIndex: 2,
      hints: [
        "Look at what follows the blank: a single noun ('silence') that dramatically reveals 'one overlooked instrument'.",
        "A semicolon requires a complete clause on BOTH sides, whereas a colon introduces a reveal after a complete clause.",
      ],
      explanation:
        "Because 'silence' is not an independent clause and directly reveals 'one overlooked instrument', a colon (`:`) delivers exact grammar and dramatic timing.",
    },
    {
      id: "discursive-writing-public-speaking-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "spag-syntax-precision",
      question:
        'Is the following sentence in the **active** or **passive** voice?\n\n*"The outdoor assembly was postponed until Friday afternoon."*\n\n(Type `active` or `passive`.)',
      answer: {
        type: "text",
        accept: ["passive", "passive voice"],
        display: "passive",
      },
      traps: [
        {
          spec: { type: "text", accept: ["active", "active voice"] },
          feedback: "Run the 'by zombies' test: 'was postponed [by zombies]' fits grammatically — and the real actor is hidden, so it is passive!",
        },
      ],
      hints: [
        "Look at the verb phrase 'was postponed' — is the assembly doing the postponing, or receiving the action?",
        "Try adding 'by zombies' right after 'was postponed'.",
      ],
      solution: [
        "The subject ('The outdoor assembly') receives the action via `was + past participle`, so the sentence is in the **passive** voice.",
      ],
    },
    {
      id: "discursive-writing-public-speaking-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "discursive-essay-structure",
      question:
        "Which closing sentence best concludes a balanced Year 9 discursive essay on **homework limits**?",
      options: [
        "In conclusion, homework has some good points and some bad points, so both sides have merit.",
        "Therefore, every school must immediately abolish homework forever because children hate worksheets.",
        "To sum up, teachers assign homework every week while students also participate in many clubs.",
        "On balance, while heavy nightly tasks harm sleep, brief targeted practice remains valuable when capped sensibly.",
      ],
      answerIndex: 3,
      hints: [
        "Avoid empty fence-sitting, angry absolutes, and mere topic summary.",
        "Look for a qualified synthesis verdict that weighs both sides and lands a clear, reasoned stance.",
      ],
      explanation:
        "Using 'On balance, while…' synthesises the sleep drawback and the learning benefit into a crisp, practical policy judgement.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 questions each: 6 short, 5 mcq, 4 written)
  // =========================================================================
  papers: [
    {
      id: "discursive-writing-public-speaking-p1",
      title: "Practice Paper 1 — Discursive Craft, Rhetoric & Stage Presence",
      questions: [
        {
          id: "discursive-writing-public-speaking-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "aristotelian-rhetoric",
          question:
            'Read this speech excerpt:\n\n*"Clearer focus, calmer corridors, deeper friendships."*\n\nName the classical rhetorical term for a rhythmic group of three parallel phrases. (One word.)',
          answer: {
            type: "text",
            accept: ["tricolon", "rule of three", "triad", "triplet"],
            display: "tricolon",
          },
          hints: [
            "Count the three parallel adjective + noun pairs.",
            "Recall the Greek rhetorical term starting with 'tri-'.",
          ],
          solution: [
            "A rhythmic sequence of three parallel phrases is a **tricolon** (or rule of three).",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "aristotelian-rhetoric",
          question:
            'Which Aristotelian appeal (one word: `ethos`, `pathos`, or `logos`) is primarily built when a speaker demonstrates calm fairness, relevant experience, and intellectual honesty?',
          answer: {
            type: "text",
            accept: ["ethos"],
            display: "ethos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathos"] },
              feedback: "Pathos appeals to audience emotion/empathy; credibility, character, and trustworthiness define Ethos.",
            },
            {
              spec: { type: "text", accept: ["logos"] },
              feedback: "Logos appeals to logic and data; speaker character and fairness build Ethos.",
            },
          ],
          hints: [
            "Match 'character / credibility / trust' to the correct Greek pillar.",
          ],
          solution: [
            "Credibility, character, and fair-minded authority build **Ethos**.",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "discursive-essay-structure",
          question:
            'Which discourse marker best opens the **Concede (steel-man)** sentence of a CAR counter-argument paragraph?',
          options: [
            "Admittedly,",
            "Therefore,",
            "Consequently,",
            "Furthermore,",
          ],
          answerIndex: 0,
          hints: [
            "You want to signal fair acknowledgement of a rival viewpoint BEFORE pivoting with 'nevertheless' or 'yet'.",
            "Eliminate markers of cause-and-effect or simple addition.",
          ],
          explanation:
            "'Admittedly' signals candid concession of an opposing strength, preparing the reader for a thoughtful pivot rather than blunt dismissal.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            'Look at the plural possessive needed here (**more than one teacher**):\n\n*"The committee reviewed the ___ (teachers) proposals on timetable reform."*\n\nDoes the possessive apostrophe go **before** or **after** the final letter `s`? (Type `before` or `after`.)',
          answer: {
            type: "text",
            accept: ["after", "after the s", "after s"],
            display: "after",
          },
          traps: [
            {
              spec: { type: "text", accept: ["before", "before the s", "before s"] },
              feedback: "Putting the apostrophe before the s (`teacher's`) means just ONE teacher! For a regular plural ending in -s, place it AFTER the s (`teachers'`).",
            },
          ],
          hints: [
            "Notice the prompt specifies **more than one teacher** (a regular plural already ending in `-s`).",
            "Ask where the apostrophe sits in `teachers'` versus singular `teacher'`s.",
          ],
          solution: [
            "Regular plural possessives ending in `-s` place the apostrophe **after** the final `s` (`teachers'`).",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "public-speaking-competition",
          question:
            "A speaker prepares a 3-minute competition talk and marks `//` on three cue cards. What stage craft habit do those `//` symbols control?",
          options: [
            "Switching immediately to a louder shout on every card",
            "Inserting deliberate two-second strategic pauses at key turns",
            "Skipping over counter-arguments if the clock nears two minutes",
            "Reading full written paragraphs straight from the cue cards",
          ],
          answerIndex: 1,
          hints: [
            "Think about how skilled speakers stop themselves from rushing nervously over punchlines and rhetorical questions.",
            "Visual pause markings remind you to breathe and let key lines sink in.",
          ],
          explanation:
            "Marking pause slashes (`/` or `//`) directly on cue cards prevents nervous speeding and gives rhetorical questions and punchlines space to land.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "aristotelian-rhetoric",
          question:
            'Read this line:\n\n*"Great debates sharpen minds, not tempers."*\n\nName the rhetorical device pairing opposite ideas in balanced mirror syntax. (One word.)',
          answer: {
            type: "text",
            accept: ["antithesis"],
            display: "antithesis",
          },
          hints: [
            "Notice 'minds' contrasted directly against 'tempers' inside a crisp, balanced phrase.",
            "Think of the classical term meaning 'setting opposites side by side'.",
          ],
          solution: [
            "Placing contrasting nouns ('minds' vs 'tempers') in balanced grammatical contrast is **antithesis**.",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            "Which repair **correctly** fixes this comma splice?\n\n*Broken:* `The motion sparked intense debate, several pupils stayed back to question the panel.`",
          options: [
            "The motion sparked intense debate, however, several pupils stayed back to question the panel.",
            "The motion sparked intense debate; and several pupils stayed back to question the panel.",
            "The motion sparked intense debate; several pupils stayed back to question the panel.",
            "The motion sparked intense debate: because several pupils stayed back to question the panel.",
          ],
          answerIndex: 2,
          hints: [
            "Check each option carefully: remember `, however,` is STILL a comma splice, and semicolons do not pair with FANBOYS like `and`.",
            "Look for two complete independent clauses joined cleanly by a semicolon.",
          ],
          explanation:
            "Both halves are closely linked independent clauses, so replacing the comma with a semicolon (`;`) repairs the comma splice cleanly and stylistically.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "public-speaking-competition",
          question:
            'A Year 9 finalist opens her speech with an image of a locked glass trophy cabinet and ends at 2:50 by imagining unlocking that exact cabinet to make room for unfinished student prototypes.\n\nWhat two-word speech technique links the ending back to the opening image?',
          answer: {
            type: "text",
            accept: ["cyclical call-back", "cyclical callback", "cyclical ending", "cyclical structure", "circular structure", "call-back", "callback"],
            display: "cyclical call-back",
          },
          hints: [
            "Notice how the opening object returns at the very end with a fresh, transformed twist.",
            "Pair 'cyclical' with the public speaking term for echoing an earlier moment.",
          ],
          solution: [
            "Returning to the opening trophy-cabinet image with transformed meaning at the close is a **cyclical call-back**.",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "aristotelian-rhetoric",
          question:
            "Why does combining **Pathos** and **Logos** inside a single speech outperform relying solely on one?",
          options: [
            "Logos makes listeners care about a story while Pathos supplies statistical percentages.",
            "Pathos eliminates the need to establish speaker credibility or fair counter-arguments.",
            "Mixing both automatically halves the total word count needed for a three-minute talk.",
            "Pathos makes the audience care emotionally while Logos proves the solution actually works.",
          ],
          answerIndex: 3,
          hints: [
            "Think about what happens to a speech with ONLY numbers (cold/abstract) vs ONLY emotion (unverified/manipulative).",
            "How do heart and head reinforce each other?",
          ],
          explanation:
            "Pathos creates human urgency so the audience cares, while Logos supplies concrete evidence showing the proposed course of action is sound and realistic.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            'Look at the missing opening word (`Its` / `It\'s`) in this sentence:\n\n*"___ tempting to judge a speech solely by volume, yet quiet pauses often carry deeper authority."*\n\nShould this word include an apostrophe? (Type `yes` or `no`.)',
          answer: {
            type: "text",
            accept: ["yes", "with apostrophe"],
            display: "yes",
          },
          traps: [
            {
              spec: { type: "text", accept: ["no", "no apostrophe"] },
              feedback: "Try expanding to 'It is': 'It is tempting to judge…' works perfectly, so you MUST include the apostrophe (`It's`).",
            },
          ],
          hints: [
            "Test replacing the blank with 'It is'.",
            "Contractions always require an apostrophe to mark omitted letters.",
          ],
          solution: [
            "Because the blank contracts 'It is', the answer is **yes** — it requires an apostrophe (`It's`).",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            "Which sentence demonstrates accurate **irregular plural possessive** punctuation?",
          options: [
            "The council renovated the childrens' library and the womens' reading lounge.",
            "The council renovated the children's library and the women's reading lounge.",
            "The council renovated the childrens library and the womens reading lounge.",
            "The council renovated the children's' library and the women's' reading lounge.",
          ],
          answerIndex: 1,
          hints: [
            "Check whether 'children' and 'women' already end in the letter `-s`.",
            "Irregular plurals NOT ending in `-s` always take `'s`.",
          ],
          explanation:
            "Because 'children' and 'women' are already plural without an `-s`, their possessive forms take `'s`: `children's` and `women's`.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "discursive-essay-structure",
          marks: 4,
          question:
            'Discursive essay prompt: *"Should secondary schools replace graded exams in Year 9 with portfolio projects?"*\n\nWrite ONE balanced **CAR** (Concede–Analyse–Rebut) counter-argument paragraph that **steel-mans** the case for graded exams before pivoting smoothly into a reasoned case for portfolios (or a qualified hybrid). (4 marks)',
          hints: [
            "Open with a fair concession marker ('Admittedly', 'Granted') giving the strongest real argument for graded exams (e.g. objective fairness, time-pressure readiness).",
            "Pivot cleanly with a formal discourse marker ('Nevertheless', 'However', 'Conversely') and weigh why portfolios or a hybrid model better capture real understanding.",
          ],
          modelAnswer:
            "Admittedly, defenders of traditional examinations raise a fair concern: timed assessments test individual recall under consistent conditions, preventing unequal home support from skewing results. Nevertheless, relying exclusively on high-stakes recall papers rewards short-term cramming over sustained inquiry and penalises anxious learners who think deeply across drafts. Conversely, integrating structured portfolio projects alongside concise exams preserves fairness while cultivating research, revision, and independent critical thinking.",
          markScheme: [
            {
              point: "Opens with a formal concession marker (e.g. admittedly, granted, proponents argue) steel-manning the rival view",
              keywords: ["admittedly", "granted", "proponents", "defenders", "concede", "fair", "compelling", "valid"],
            },
            {
              point: "Articulates a genuinely strong reason for timed exams (e.g. consistent fairness, objective comparison, independent recall, preventing outside help)",
              keywords: ["consistent", "objective", "fairness", "independent", "standardised", "standardized", "recall", "unequal", "conditions"],
            },
            {
              point: "Pivots clearly using a formal contrast discourse marker (nevertheless, however, conversely, yet)",
              keywords: ["nevertheless", "however", "conversely", "nonetheless", "yet", "despite"],
            },
            {
              point: "Rebuts or qualifies logically (e.g. cramming/anxiety flaws of exams vs deeper inquiry, drafting, or a balanced hybrid)",
              keywords: ["cramming", "anxious", "inquiry", "drafts", "revision", "research", "critical", "hybrid", "sustained", "memorisation"],
            },
          ],
          commonError:
            "Straw-manning exams as 'pointless torture invented by grumpy adults' instead of steel-manning fairness/objectivity before pivoting.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "aristotelian-rhetoric",
          marks: 3,
          question:
            'Draft a **3-sentence persuasive paragraph** for a Tanglin assembly speech urging students to cut canteen food waste. You must deliberately weave in **Ethos** (or **Logos**), restrained **Pathos**, and either **anaphora**, **tricolon**, or **antithesis**. (3 marks)',
          hints: [
            "Avoid melodrama — ground your Pathos in one specific, relatable lunchroom detail.",
            "Include a crisp statistic/factual anchor (Logos) or student-council credibility (Ethos), and finish on a clean tricolon or antithesis.",
          ],
          modelAnswer:
            "Last week, while helping our Eco-Council weigh the lunchroom bins, I watched a full tray of untouched rice slide straight into landfill beside a poster fundraising for regional food banks. Every term, our dining hall discards hundreds of kilograms of edible meals — wasting clean water, kitchen labour, and energy that could nourish whole communities. Taking smaller first portions is not about sacrifice; it is about respect, awareness, and gratitude.",
          markScheme: [
            {
              point: "Includes a credible Ethos anchor (experience/stewardship) or concrete Logos evidence (quantities, resource cost)",
              keywords: ["weigh", "kilograms", "survey", "council", "hundreds", "percent", "%", "energy", "water", "labour", "cost", "edible"],
            },
            {
              point: "Uses specific, restrained Pathos (a vivid lunchroom image or human contrast without cheesy melodrama)",
              keywords: ["untouched", "tray", "landfill", "food bank", "communities", "hungry", "nourish", "watched", "imagine", "bin"],
            },
            {
              point: "Deploys a clear rhetorical craft device (antithesis 'not about… it is about…', tricolon, anaphora, or hypophora)",
              keywords: ["not about", "instead of", "rather than", "respect", "awareness", "gratitude", "we can", "we must", "why", "?"],
            },
          ],
          commonError:
            "Writing vague slogans ('Food waste is really bad! Stop wasting food!') without specific imagery, factual grounding, or intentional rhetorical rhythm.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "public-speaking-competition",
          marks: 3,
          question:
            'A Year 9 competitor opens her 3-minute speech on **Why Boredom Sparks Creativity** with:\n*"Hello judges, my name is Chloe and today I am going to talk about why boredom is actually good for your brain."*\n\nRewrite this opening into a **15-second competition hook** (2–3 sentences) and briefly state **one delivery direction** (pause, vocal contrast, or eye contact) you would apply on stage. (3 marks)',
          hints: [
            "Cut all throat-clearing ('Hello, my name is… today I am going to talk about…') and drop the audience straight into a vivid everyday moment or paradox.",
            "Specify a concrete stage direction such as pausing two seconds before speaking or holding eye contact across Left–Centre–Right.",
          ],
          modelAnswer:
            "When was the last time you sat for five full minutes with nothing in your hands — no screen, no playlist, not even a fidget pen? Most of us treat an empty minute like an emergency to cure immediately, yet neuroscientists now warn that killing boredom quietly starves our boldest ideas. [Delivery direction: Hold two full seconds of calm silence and triangulate eye contact across the hall after the opening question so listeners genuinely search their own memories.]",
          markScheme: [
            {
              point: "Eliminates throat-clearing ('my name is… today I will talk about') and launches directly into a vivid hook (question, concrete scene, or paradox)",
              keywords: ["when was", "imagine", "last time", "five", "minute", "screen", "empty", "silence", "paradox", "?"],
            },
            {
              point: "Links the hook smoothly to the core argument that boredom fuels imagination or creative thinking",
              keywords: ["starves", "ideas", "imagination", "creative", "invent", "sparks", "neuroscien", "empty", "wanders", "focus"],
            },
            {
              point: "Specifies a purposeful live delivery cue (strategic pause, vocal pacing/volume drop, or eye-contact triangulation)",
              keywords: ["pause", "silence", "eye contact", "triangulat", "slow", "quieter", "breath", "volume", "beat"],
            },
          ],
          commonError:
            "Keeping 'Hi everyone, today I will prove…' or giving vague delivery advice like 'speak loudly and clearly'.",
        },
        {
          id: "discursive-writing-public-speaking-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "spag-syntax-precision",
          marks: 4,
          question:
            'Edit and upgrade this flawed paragraph by fixing **all four** SPaG/style weaknesses (a comma splice before *however*, an `its/it\'s` error, a plural possessive apostrophe error, and weak passive voice):\n\n*"The school revised it’s homework timetable, however, the student’s feedback (plural) was ignored by the planners."*\n\nWrite your corrected, polished active-voice version. (4 marks)',
          hints: [
            "Fix 1: `it’s` → possessive without apostrophe. Fix 2: replace the comma before `however` with a semicolon (or full stop).",
            "Fix 3: plural possessive `students'`. Fix 4: turn `was ignored by the planners` into crisp active voice (`the planners ignored…`).",
          ],
          modelAnswer:
            "The school updated its homework schedule; however, the planners ignored the students' feedback.",
          markScheme: [
            {
              point: "Corrects possessive 'its' (no apostrophe)",
              keywords: ["its homework", "its schedule", "its timetable", "updated its", "revised its"],
            },
            {
              point: "Eliminates the comma splice before 'however' using a semicolon (or full stop / ', yet')",
              keywords: ["; however", ". however", ", yet", ", but", "; nevertheless"],
            },
            {
              point: "Punctuates the plural possessive accurately as students'",
              keywords: ["students'"],
            },
            {
              point: "Converts the passive clause into crisp active voice putting 'the planners' as the subject",
              keywords: ["planners ignored", "planners overlooked", "planners disregarded"],
            },
          ],
          commonError:
            "Fixing `its` and `students'` while leaving `, however,` as a comma splice or leaving the passive `was ignored by` untouched.",
        },
      ],
    },

    // =========================================================================
    // PAPER P2: Rhetoric, Speech Delivery, Q&A & Advanced SPaG Control
    // =========================================================================
    {
      id: "discursive-writing-public-speaking-p2",
      title: "Practice Paper 2 — Counter-Arguments, Speech Structure & SPaG Mastery",
      questions: [
        {
          id: "discursive-writing-public-speaking-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "spag-syntax-precision",
          question:
            'Recall the seven coordinating conjunctions remembered by the **FANBOYS** mnemonic. Is **`however`** one of those seven FANBOYS coordinating conjunctions? (Type `yes` or `no`.)',
          answer: {
            type: "text",
            accept: ["no"],
            display: "no",
          },
          traps: [
            {
              spec: { type: "text", accept: ["yes"] },
              feedback: "Careful! 'however' is a conjunctive adverb — never a FANBOYS conjunction — which is why placing a comma before it between two full clauses creates a comma splice.",
            },
          ],
          hints: [
            "Check the initial letters of F-A-N-B-O-Y-S — there is no 'H'!",
          ],
          solution: [
            "**No** — 'however' is a conjunctive adverb, so it requires a semicolon or full stop before it between two independent clauses.",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p2-q02",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "aristotelian-rhetoric",
          question:
            'Read this speech sentence:\n\n*"Last Tuesday, a nine-year-old boy waited alone outside the closed community clinic clutching a hand-drawn bus map."*\n\nWhich Aristotelian appeal drives this opening line?',
          options: [
            "Logos through statistical sampling",
            "Ethos through academic credentials",
            "Pathos through concrete human empathy",
            "Antithesis through mirror contrast",
          ],
          answerIndex: 2,
          hints: [
            "Notice the quiet, specific human detail ('nine-year-old boy', 'hand-drawn bus map') inviting immediate empathy.",
          ],
          explanation:
            "A restrained, vivid human portrait evokes genuine empathy without melodrama — strong Pathos.",
        },
        {
          id: "discursive-writing-public-speaking-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "public-speaking-competition",
          question:
            'In competition Q&A, the acronym **PREP** helps speakers stay concise and structured: Point → Reason → ___ → Point. What single word fills the blank?',
          answer: {
            type: "text",
            accept: ["example", "evidence"],
            display: "Example",
          },
          hints: [
            "After making your point and giving a reason, what concrete 'E' proves your claim memorably?",
            "Starts with 'E'.",
          ],
          solution: [
            "PREP stands for Point → Reason → **Example** → Point.",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "discursive-essay-structure",
          question:
            'Read these two sentences from a discursive essay on city e-scooters:\n*"Proponents rightly emphasise that compact electric scooters bridge the final kilometre between train stations and home. Conversely, emergency doctors point to rising pedestrian collisions on narrow pavements."*\n\nWhat makes this transition effective?',
          options: [
            "It mocks scooter riders using emotional exaggeration.",
            "It balances a fair steel-man point with a crisp contrasting marker.",
            "It avoids taking any position on transport throughout the essay.",
            "It relies on informal conversational slang to relax the reader.",
          ],
          answerIndex: 1,
          hints: [
            "Look at how both viewpoints are grounded in credible stakeholders ('Proponents', 'emergency doctors') linked by 'Conversely'.",
            "Is there any straw-manning or slang here?",
          ],
          explanation:
            "Presenting the strongest transport benefit honestly before pivoting with 'Conversely' to clinical safety data exemplifies disciplined discursive balance.",
        },
        {
          id: "discursive-writing-public-speaking-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            'Which punctuation mark (`semicolon` or `colon`) belongs in the blank?\n\n*"The trial revealed a clear pattern ___ students who slept eight hours solved twice as many logic puzzles."*',
          answer: {
            type: "text",
            accept: ["colon", ":"],
            display: "colon",
          },
          traps: [
            {
              spec: { type: "text", accept: ["semicolon", ";", "comma", ","] },
              feedback: "Look at the setup phrase 'a clear pattern' — the second half explicitly defines and reveals that pattern, making a colon the exact stylistic choice!",
            },
          ],
          hints: [
            "Notice how the second clause directly reveals what 'a clear pattern' actually IS.",
            "Which mark acts like a signpost pointing straight into a reveal or explanation?",
          ],
          solution: [
            "Because the second clause explicitly defines 'a clear pattern', a **colon** (`:`) is the sharpest punctuation choice.",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            "Which sentence is punctuated with **100% SPaG accuracy**?",
          options: [
            "Because the auditorium echoed; speakers slowed down their pacing.",
            "The three judges' notes praised Maya's poise, timing, and clarity.",
            "Every finalist checked their cue card's before stepping onstage.",
            "Its essential to rehearse aloud, otherwise your pacing accelerates.",
          ],
          answerIndex: 1,
          hints: [
            "Check each sentence for: semicolon after 'Because', stray plural apostrophe, missing apostrophe in 'It's', comma splice before 'otherwise', and plural possessive `judges'`.",
            "Three options contain classic SPaG traps; only one is spotless.",
          ],
          explanation:
            "'The three judges' notes' punctuates the plural possessive cleanly, 'Maya's' punctuates the singular possessive, and the tricolon commas are accurate.",
        },
        {
          id: "discursive-writing-public-speaking-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            'Classify the voice of this sentence (`active` or `passive`):\n\n*"Engineers installed acoustic panels along the ceiling before finals week."*',
          answer: {
            type: "text",
            accept: ["active", "active voice"],
            display: "active",
          },
          traps: [
            {
              spec: { type: "text", accept: ["passive", "passive voice"] },
              feedback: "Look at the subject: 'Engineers' directly perform the verb 'installed' — that is active voice!",
            },
          ],
          hints: [
            "Ask who is doing the installing, and check whether that actor sits right at the start of the sentence.",
            "Can you insert 'by zombies' after 'installed' here? No!",
          ],
          solution: [
            "The actor ('Engineers') directly performs the verb ('installed') on the object ('acoustic panels') → **active** voice.",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "public-speaking-competition",
          question:
            "A student’s draft speech for a 3-minute competition is **610 words** long. When she rehearses with natural pauses, she hits 4 minutes 20 seconds. What is the **best** revision strategy?",
          options: [
            "Speak 45% faster and delete every pause so all 610 words squeeze in.",
            "Cut roughly 180–210 words of repetition so core images and pauses breathe.",
            "Drop the entire conclusion and stop talking as soon as the bell rings.",
            "Whisper the middle paragraph quickly while reading directly from paper.",
          ],
          answerIndex: 1,
          hints: [
            "Never solve an over-length script by talking like an auctioneer!",
            "Recall the ~380–430 word sweet spot for a poised 3-minute speech.",
          ],
          explanation:
            "Trimming roughly 180–210 redundant words brings the script into the ~400–430 word target zone, protecting calm cadence, vocal variety, and strategic pauses.",
        },
        {
          id: "discursive-writing-public-speaking-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "aristotelian-rhetoric",
          question:
            'Read this speech excerpt:\n\n*"Every library we close narrows a child’s horizon. Every park we concrete erases a neighbourhood’s lungs. Every choir we cut silences a shared voice."*\n\nWhich single rhetorical device is created by repeating *"Every …"* at the start of all three sentences?',
          answer: {
            type: "text",
            accept: ["anaphora"],
            display: "anaphora",
          },
          hints: [
            "Look at the very first word of all three parallel sentences.",
            "Name the classical device for repeated clause openings.",
          ],
          solution: [
            "Repeating 'Every…' at the start of consecutive clauses is **anaphora** (here combined with a three-part tricolon).",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            "Which sentence uses a **single em-dash (`—`)** most effectively for a sharp rhetorical reveal?",
          options: [
            "The survey — interviewed four hundred pupils in November.",
            "Because the hall — filled quickly, chairs were added.",
            "The committee spent six months debating one word — accountability.",
            "Although she rehearsed — yet she remained calm on stage.",
          ],
          answerIndex: 2,
          hints: [
            "A single dash acts like an energetic colon, building a pause right before a dramatic final word or punchline.",
            "Check that the words BEFORE the dash form a complete, grammatical clause.",
          ],
          explanation:
            "Placing a single dash after a complete clause to spotlight 'accountability' creates crisp suspense and punch.",
        },
        {
          id: "discursive-writing-public-speaking-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          question:
            'Which punctuation mark (`semicolon` or `comma`) belongs in the blank to repair this sentence?\n\n*"Discursive essays weigh both sides ___ however, their conclusions still reach a clear verdict."*',
          answer: {
            type: "text",
            accept: ["semicolon", ";"],
            display: "semicolon",
          },
          traps: [
            {
              spec: { type: "text", accept: ["comma", ","] },
              feedback: "A comma before 'however' between two independent clauses creates a comma splice — upgrade to a semicolon!",
            },
          ],
          hints: [
            "Check both halves: 'Discursive essays weigh both sides' and 'their conclusions still reach a clear verdict' are both full sentences.",
            "Remember the golden rule before `however,` between two independent clauses.",
          ],
          solution: [
            "Because both halves are independent clauses linked by the conjunctive adverb `however`, the slot requires a **semicolon** (`;`).",
          ],
        },
        {
          id: "discursive-writing-public-speaking-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "spag-syntax-precision",
          marks: 3,
          question:
            'Rewrite this flat, repetitive Year 7 paragraph into **two sophisticated Year 9 sentences** using **one semicolon** (or colon), **varied clause opening** (e.g. *Although…* / participle phrase), and **active voice**:\n\n*"Schools give students tablets. Tablets can help research. Tablets can also distract students. Clear rules are needed by teachers to keep focus high."*\n\n(3 marks)',
          hints: [
            "Open sentence 1 with a subordinate clause ('Although…') or participle phrase ('While offering…') to combine the first three choppy sentences cleanly.",
            "Convert 'Clear rules are needed by teachers' into active voice ('teachers must establish clear rules') and link the clauses with a crisp semicolon or colon.",
          ],
          modelAnswer:
            "Although school tablets accelerate classroom research, their glowing alerts can fracture adolescent attention; consequently, teachers must establish clear usage boundaries to protect deep focus. Technology should serve learning cleanly: sharp routines turn distractions into tools.",
          markScheme: [
            {
              point: "Uses a varied non-subject opening (subordinate clause like 'although/while' or participle phrase) to eliminate choppy repetition",
              keywords: ["although", "while", "whilst", "despite", "accelerating", "offering", "providing", "balancing", "though"],
            },
            {
              point: "Deploys a semicolon or colon accurately between/introducing clauses",
              keywords: [";", ":"],
            },
            {
              point: "Converts the passive closing clause into active voice with 'teachers' (or 'schools') directly performing the verb",
              keywords: ["teachers must", "teachers need", "teachers should", "teachers establish", "teachers set", "teachers enforce", "schools must", "schools need"],
            },
          ],
          commonError:
            "Leaving four choppy subject-first sentences or adding a comma splice before 'however/consequently'.",
        },
        {
          id: "discursive-writing-public-speaking-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "aristotelian-rhetoric",
          marks: 3,
          question:
            'A speaker is arguing that **every secondary pupil should learn basic first aid**. Write a short persuasive excerpt (2–4 sentences) that includes **hypophora** (asking and answering your own question) AND **antithesis** (balanced contrast), while keeping the tone poised and persuasive. (3 marks)',
          hints: [
            "Open with a sharp question ('Who stands beside…?' or 'What separates panic from…?') and answer it immediately.",
            "Close with a crisp mirror-image contrast ('not just… but…' or 'memorise… save…').",
          ],
          modelAnswer:
            "Who arrives first when a teammate collapses on a weekend pitch? Not an ambulance fifteen minutes away — the classmate standing three metres off. Schools teach us to calculate gradients and parse verbs; surely we can also teach young people to replace helpless panic with calm, life-saving action.",
          markScheme: [
            {
              point: "Uses genuine hypophora — asks a pointed question AND immediately supplies a crisp answer",
              keywords: ["?", "not ", "answer", "it is", "the classmate", "ourselves", "we are", "nobody", "only"],
            },
            {
              point: "Includes balanced antithesis contrasting two clear opposites (e.g. panic vs calm action, or exams vs saving lives)",
              keywords: ["panic", "calm", "not just", "rather than", "instead of", "not an", "helpless", "confidence", "fear", "courage"],
            },
            {
              point: "Maintains concrete, poised persuasive framing connected clearly to student first aid",
              keywords: ["first aid", "ambulance", "life-saving", "lifesaving", "emergency", "teammate", "cpr", "save", "resc"],
            },
          ],
          commonError:
            "Asking a rhetorical question without answering it (missing hypophora) or forgetting balanced contrast (antithesis).",
        },
        {
          id: "discursive-writing-public-speaking-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "public-speaking-competition",
          marks: 4,
          question:
            'In the Q&A round of the Tanglin Public Speaking Competition, you have just argued that **cities should turn half of urban car lanes into shaded walking and cycling corridors**. A judge challenges you:\n*"Doesn’t narrowing roads unfairly punish elderly residents and tradespeople who rely on vans?"*\n\nWrite a poised **PREP** Q&A answer (3–4 sentences) that protects **Ethos** and directly addresses the judge’s concern. (4 marks)',
          hints: [
            "Step 1: Calmly validate the judge’s question — never get defensive.",
            "Step 2 (PREP): State a clear Point (essential vehicles stay prioritised), give a Reason (fewer single-occupant commuter cars actually clear traffic for vans/ambulances), cite a concrete Example (blue-badge access / electric shuttles / timed loading bays), and wrap up crisply.",
          ],
          modelAnswer:
            "That is a crucial fairness test, and accessibility must sit at the heart of any street redesign. In fact, removing solo commuter cars actually frees road space so tradespeople, delivery vans, and mobility vehicles move faster rather than sitting in gridlock. Cities like Ghent and Barcelona proved this by preserving dedicated loading windows, blue-badge permits, and frequent electric minibuses alongside shaded pavements. Smart reallocation therefore protects both clean air and essential access.",
          markScheme: [
            {
              point: "Validates the judge's challenge calmly and respectfully (protecting Ethos without defensiveness)",
              keywords: ["crucial", "important", "fair", "vital", "essential", "good point", "accessibility", "thank"],
            },
            {
              point: "Gives a clear Point and logical Reason (e.g. cutting solo commuter traffic actually reduces congestion for vans/essential vehicles)",
              keywords: ["frees", "faster", "gridlock", "commuter", "congestion", "prioritis", "exempt", "essential", "reduces"],
            },
            {
              point: "Supplies a concrete practical Example or safeguard (e.g. loading bays, blue-badge permits, electric shuttles, or city precedent)",
              keywords: ["permit", "badge", "shuttle", "minibus", "loading", "bay", "exemption", "ghent", "barcelona", "amsterdam", "pilot", "window"],
            },
            {
              point: "Closes with a crisp wrap-up Point reconciling green streets with practical access",
              keywords: ["therefore", "both", "protects", "balances", "access", "cleaner", "everyone", "serves"],
            },
          ],
          commonError:
            "Dismissing elderly drivers rudely ('they can just ride bikes') or ignoring the question by repeating your original speech.",
        },
        {
          id: "discursive-writing-public-speaking-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "discursive-essay-structure",
          marks: 4,
          question:
            'Write a **nuanced discursive conclusion** (3–4 sentences) to the essay prompt: *"Should teenagers under sixteen be banned from algorithmic social-media feeds?"*\n\nAvoid empty fence-sitting (*"there are pros and cons"*). Synthesise **both sides** fairly and deliver a clear, **qualified policy verdict** using formal academic register. (4 marks)',
          hints: [
            "Open with a formal verdict signal ('On balance,', 'Ultimately,').",
            "Acknowledge both genuine youth benefits (creative communities, staying connected) and serious harms (addictive feeds, sleep erosion).",
            "Land a sharp qualified verdict (e.g. restricting predatory ranking algorithms and late-night feeds rather than cutting off safe messaging entirely).",
          ],
          modelAnswer:
            "On balance, treating teenage social media as an all-or-nothing battle misses the core danger. While online spaces genuinely help isolated young people discover creative communities and stay close to distant relatives, profit-driven recommendation engines exploit adolescent sleep and self-esteem far beyond what individual willpower can resist. Ultimately, governments and schools should restrict algorithmic infinite-scroll feeds for under-sixteens while preserving safe, chronological messaging tools — protecting adolescent wellbeing without cutting young citizens off from modern connection.",
          markScheme: [
            {
              point: "Uses formal synthesis framing (e.g. on balance, ultimately, weighing both) rather than 'pros and cons'",
              keywords: ["on balance", "ultimately", "weighing", "synthesis", "overall", "all-or-nothing"],
            },
            {
              point: "Briefly honours genuine benefits of online connection (community, creativity, staying in touch)",
              keywords: ["communit", "creative", "relatives", "connection", "friends", "belonging", "support", "staying"],
            },
            {
              point: "Weighs serious harms clearly (addictive algorithms, sleep loss, anxiety, self-esteem)",
              keywords: ["sleep", "self-esteem", "mental", "addict", "exploit", "anxiety", "scroll", "attention", "wellbeing"],
            },
            {
              point: "Delivers a decisive, qualified policy verdict (specific safeguard, age threshold, or distinction between algorithms and safe messaging)",
              keywords: ["restrict", "chronological", "safeguard", "provided", "messaging", "regulate", "ban", "limit", "protecting"],
            },
          ],
          commonError:
            "Closing with 'In conclusion, there are good and bad sides so parents should decide' — dodging a reasoned synthesis verdict.",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard questions, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "discursive-writing-public-speaking-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "spag-syntax-precision",
      question:
        "Inspect these four complex sentences carefully. Which single sentence is **100% free** of comma splices, colon misuse, dangling modifiers, and apostrophe traps?",
      options: [
        "Having weighed every submission, the judges awarded first place to Priya; her cyclical call-back stunned the hall.",
        "Having weighed every submission, first place was awarded to Priya; her cyclical call-back stunned the hall.",
        "Having weighed every submission, the judges awarded first place to Priya, however, the margin was razor-thin.",
        "Having weighed every submission, the judges praised: Priya's poise, timing, and it's quiet closing beat.",
      ],
      answerIndex: 0,
      hints: [
        "Test Option by Option for FOUR separate bugs: (1) who is 'Having weighed every submission'?, (2) comma splice before 'however', (3) colon directly after a verb ('praised:'), (4) `it's` vs `its`.",
        "Look for the sentence where 'the judges' sits right after the introductory participle phrase AND the semicolon links two complete clauses.",
        "Confirm every apostrophe and punctuation mark in the surviving candidate.",
      ],
      explanation:
        "Putting 'the judges' immediately after 'Having weighed every submission' avoids a dangling modifier, while the semicolon cleanly links two complete independent clauses.",
    },
    {
      id: "discursive-writing-public-speaking-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "aristotelian-rhetoric",
      question:
        'Read this single sentence from an iconic-style speech:\n\n*"Do not ask what comfort costs today; ask what silence will cost tomorrow."*\n\nWhich single classical device (starting with **a**) drives the sharp mirror-image contrast between *comfort/today* and *silence/tomorrow*?',
      answer: {
        type: "text",
        accept: ["antithesis"],
        display: "antithesis",
      },
      hints: [
        "Look closely across the semicolon: 'Do not ask what comfort costs today' mirrors 'ask what silence will cost tomorrow'.",
        "Notice the balanced pairs of opposites: comfort vs silence, today vs tomorrow.",
        "Name the 10-letter rhetorical term for balanced mirror-image contrast.",
      ],
      solution: [
        "Mirroring opposite pairs ('comfort/today' vs 'silence/tomorrow') across parallel syntax creates crisp **antithesis**.",
      ],
    },
    {
      id: "discursive-writing-public-speaking-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "discursive-essay-structure",
      question:
        'A Year 9 writer argues against mandatory school sport every afternoon. Which counter-argument paragraph demonstrates **true steel-manning** rather than disguised dismissal?',
      options: [
        "Some people foolishly imagine that forcing exhausted pupils onto muddy pitches magically builds character overnight.",
        "Admittedly, daily sport builds health and resilience, yet mandating identical competitive drills overlooks pupils who thrive in dance or swimming.",
        "Although sport is occasionally enjoyable in warm weather, everyone knows academic revision matters far more during Year 9.",
        "Proponents claim daily sport is useful; however, they clearly forget that many teenagers dislike getting sweaty before maths.",
      ],
      answerIndex: 1,
      hints: [
        "Ask: would a passionate PE teacher read this concession and nod, 'Yes, you stated my strongest points honestly'?",
        "Notice which option honours genuine benefits before qualifying the policy intelligently rather than mocking it.",
        "Eliminate sarcastic adverbs ('foolishly', 'magically') and weak trivialising excuses.",
      ],
      explanation:
        "Honouring health and resilience fairly before arguing for broader movement choices (dance or swimming) models peak steel-manning and qualified synthesis.",
    },
    {
      id: "discursive-writing-public-speaking-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "public-speaking-competition",
      marks: 4,
      question:
        'A Year 9 finalist opens her 3-minute speech on **Why Cities Need Wild Corners** with this 15-second hook:\n*"Behind my apartment block, a single cracked slab of tarmac refuses to behave — every monsoon, wild yellow ferns push straight through the concrete."*\n\nWrite a **closing cyclical call-back** (3–4 sentences, designed for minute 2:40–3:00) that returns to the **cracked tarmac and yellow ferns** with deeper metaphorical meaning, weaves in a **tricolon** or **antithesis**, and includes **one stage delivery cue**. (4 marks)',
      hints: [
        "Echo the opening concrete image (the cracked tarmac and wild ferns) — now transforming it into a symbol for urban resilience and human wellbeing.",
        "Craft either a rhythmic three-part tricolon or a sharp balanced antithesis in the final two lines.",
        "Add one concrete stage cue (e.g. dropping volume, pausing 2 seconds before the last line, holding eye contact).",
      ],
      modelAnswer:
        "Next time you walk past a crack in the pavement where stubborn yellow ferns push toward sunlight, do not see a maintenance error — see an invitation. Wild corners remind our concrete skylines of three truths we keep forgetting: nature heals, patience outlasts steel, and beauty refuses perfection. Let us stop paving over every wild inch and start designing cities that breathe. [Delivery cue: Slow down deliberately before 'see an invitation', pause two full seconds before the final sentence, and hold steady eye contact after the last word.]",
      markScheme: [
        {
          point: "Executes a genuine cyclical call-back revisiting the opening ferns/cracked pavement image",
          keywords: ["fern", "crack", "pavement", "tarmac", "concrete", "sunlight", "push"],
        },
        {
          point: "Transforms the opening image into a broader thematic metaphor (resilience, renewal, living cities, or human spirit)",
          keywords: ["invitation", "symbol", "remind", "resilien", "heals", "breathe", "hope", "living", "outlasts", "wild"],
        },
        {
          point: "Incorporates a crisp tricolon (three parallel parts) or balanced antithesis ('stop… start…' / 'not… see…')",
          keywords: ["not ", "stop ", "start ", "instead", "three", "heals", "breathe", "refuses", "rather than"],
        },
        {
          point: "Specifies an intentional delivery direction (slowing pace, dramatic pause, vocal drop, or closing eye contact)",
          keywords: ["pause", "slow", "quieter", "volume", "eye contact", "beat", "silence", "breath"],
        },
      ],
      commonError:
        "Simply repeating the opening sentence without deepening its meaning, or omitting the stage delivery cue.",
    },
    {
      id: "discursive-writing-public-speaking-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "spag-syntax-precision",
      question:
        'Look at this sentence containing a list with internal commas:\n\n*"The finalists represented Kyoto, Japan ___ Bergen, Norway ___ and Valdivia, Chile."*\n\nWhich single punctuation mark belongs in both blanks to prevent ambiguity? (Type the name of the mark.)',
      answer: {
        type: "text",
        accept: ["semicolon", "semicolons", ";"],
        display: "semicolon",
      },
      hints: [
        "Notice that each item ('Kyoto, Japan') ALREADY has a comma inside it.",
        "If you put ordinary commas in the blanks, the reader sees six separate places instead of three city-country pairs.",
        "Which punctuation mark acts as a 'super-comma' inside complex lists?",
      ],
      solution: [
        "When items in a series contain internal commas, separate the items with a **semicolon** (`;`): *Kyoto, Japan; Bergen, Norway; and Valdivia, Chile.*",
      ],
    },
    {
      id: "discursive-writing-public-speaking-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "aristotelian-rhetoric",
      question:
        'Read this paragraph from a speech on youth journalism:\n\n*"If we silence student newspapers whenever an article makes adults uncomfortable, we teach teenagers one cynical lesson: loyalty matters more than truth. Who wins when young citizens stop asking difficult questions? Only power that fears daylight."*\n\nWhich **exact set of craft features** is combined inside these three sentences?',
      options: [
        "Colon reveal, hypophora, and light/dark metaphor",
        "Passive voice evasion, euphemism, and cyclical flashback",
        "Anecdote, nostalgic diction, and statistical citation",
        "Anaphora, irregular plural apostrophe, and straw-man fallacy",
      ],
      answerIndex: 0,
      hints: [
        "Check sentence 1: notice the colon introducing the stark lesson ('loyalty matters more than truth').",
        "Check sentences 2–3: a pointed question answered immediately by the speaker — what device is that?",
        "Check the closing word ('daylight'): what metaphor equates scrutiny with sunlight?",
      ],
      explanation:
        "Sentence 1 uses a dramatic colon reveal, sentences 2–3 execute sharp hypophora, and 'fears daylight' closes with a vivid light/scrutiny metaphor.",
    },
    {
      id: "discursive-writing-public-speaking-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "spag-syntax-precision",
      marks: 4,
      question:
        'A newspaper prints this evasive corporate statement after a ferry breakdown:\n*"Delays were experienced on Friday morning, however, passenger’s (plural) comfort was prioritized by management, it’s hoped normal timetables resume soon."*\n\nWrite a **completely repaired, active-voice journalist’s rewrite** (1–2 crisp sentences) that eliminates the passive evasion, fixes BOTH comma splices, fixes the plural possessive apostrophe, and corrects `it’s` (or replaces it cleanly). (4 marks)',
      hints: [
        "Identify all four errors: (1) evasive passives 'Delays were experienced' / 'was prioritized by management', (2) comma splice before 'however' AND comma splice before 'it’s hoped', (3) plural possessive `passengers'`, (4) passive/impersonal `it’s hoped`.",
        "Put concrete actors first: 'Friday’s breakdown delayed commuters' and 'managers claimed they prioritised passengers’ comfort'.",
        "Use a semicolon before `however,` and a crisp full stop, semicolon, or colon cleanly with zero comma splices.",
      ],
      modelAnswer:
        "Friday morning’s breakdown delayed hundreds of commuters; however, ferry managers insisted they prioritised passengers' comfort. The operator now expects normal timetables to resume shortly.",
      markScheme: [
        {
          point: "Replaces evasive passive voice with clear active actors performing direct verbs (e.g. 'breakdown delayed' / 'managers insisted/prioritised')",
          keywords: ["delayed", "managers", "operator", "company", "prioritised", "prioritized", "expects", "hopes"],
        },
        {
          point: "Fixes the comma splice before 'however' cleanly ('; however,' or '. However,' or ', yet')",
          keywords: ["; however,", ". however,", ", yet", ", but"],
        },
        {
          point: "Corrects the plural possessive apostrophe to passengers'",
          keywords: ["passengers'"],
        },
        {
          point: "Eliminates the second comma splice before the closing clause (starts a fresh sentence or joins cleanly with a semicolon/conjunction)",
          keywords: [". the ", ". it ", "; the ", "; it ", "and expects", "and hopes", "expects normal", "resume shortly"],
        },
      ],
      commonError:
        "Repairing the first comma splice before `however` while missing the second comma splice before `it’s hoped`, or leaving `passenger's` singular.",
    },
    {
      id: "discursive-writing-public-speaking-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "aristotelian-rhetoric",
      marks: 4,
      question:
        'A classmate submits this opening paragraph for a discursive article on **AI-generated art**:\n*"AI art is totally stealing from real human artists and anyone who uses it is lazy! Machines have no soul!! Obviously governments must ban AI art immediately!!!"*\n\nDiagnose **two** specific discursive/rhetorical flaws in this draft, then rewrite it into a **measured, high-band Year 9 discursive opening** (2–3 sentences) that frames the real ethical tension fairly. (4 marks)',
      hints: [
        "Diagnose flaws precisely: one-sided rant / melodramatic tone (exclamation marks, slang 'totally'), straw-manning opponents as 'lazy', and zero acknowledgement of the rival perspective.",
        "In your rewrite, frame both sides neutrally: creative accessibility/new artistic tools vs copyright, human craft, and artist livelihoods.",
        "Keep formal academic register with zero exclamation marks.",
      ],
      modelAnswer:
        "Flaws: First, the draft collapses into a one-sided rant riddled with melodramatic exclamation marks and informal phrasing ('totally'), destroying Ethos. Second, dismissing all users as 'lazy' commits a straw-man fallacy instead of addressing real counter-arguments. Rewritten opening: Generative image tools promise accessible visual expression for creators without formal studio training; however, training models on copyrighted portfolios without consent raises urgent ethical questions about ownership and human craft. Weighing technological democratisation against artists' livelihoods reveals why simple bans rarely solve the dilemma alone.",
      markScheme: [
        {
          point: "Diagnoses melodrama / informal one-sided rant damaging Ethos or discursive balance",
          keywords: ["one-sided", "melodram", "rant", "ethos", "informal", "exclamation", "aggressive", "biased"],
        },
        {
          point: "Diagnoses straw-manning / unfair dismissal of opponents ('lazy') without engaging rival points",
          keywords: ["straw man", "straw-man", "caricature", "dismiss", "counter", "unfair", "attack"],
        },
        {
          point: "Rewrites the opening fairly acknowledging a genuine benefit/perspective of AI tools (accessibility, experimentation, new creative medium)",
          keywords: ["accessible", "accessibility", "tool", "democratis", "experiment", "creators", "assist", "innovat"],
        },
        {
          point: "Frames the real ethical tension (copyright, consent, livelihoods, or human craft) in calm formal discursive register",
          keywords: ["copyright", "consent", "livelihood", "ethical", "craft", "ownership", "tension", "weighing", "however", "whereas"],
        },
      ],
      commonError:
        "Rewriting the paragraph to still sound one-sided without naming both rhetorical flaws (melodrama/Ethos loss + straw-manning).",
    },
  ],
};
