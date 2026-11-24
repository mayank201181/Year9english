import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "comprehension-inference-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "retrieval-vs-inference",
      question:
        'Read the extract:\n\n*"The lighthouse keeper kept a fresh wick trimmed beside the lantern every afternoon, even three years after the automated solar beacon replaced his post."*\n\nIs the statement *"The keeper struggles to let go of his former purpose and routine"* an **explicit** fact or an **inference**? (Type one word.)',
      answer: {
        type: "text",
        accept: ["inference", "inferred", "implicit"],
        display: "inference",
      },
      traps: [
        {
          spec: { type: "text", accept: ["explicit", "fact", "retrieval"] },
          feedback: "The passage never states his emotions outright — we deduce his attachment from the clue that he still trims a wick three years after automation.",
        },
      ],
      hints: [
        "Check whether the sentence directly says he struggles to let go, or leaves clues for you to deduce it.",
      ],
      solution: [
        "Explicitly, the text only states that he trims a wick three years after automation.",
        "Deducing his emotional attachment to his old purpose is reading between the lines: an **inference**.",
      ],
    },
    {
      id: "comprehension-inference-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "attitude-tone-bias",
      question:
        'Read the extract:\n\n*"Visitors step softly along the mossy stone path, instinctively lowering their cameras as mist curls around the ancient cedar trunks."*\n\nWhich tone best describes the writer’s attitude?',
      options: [
        "Sardonic",
        "Reverent",
        "Sceptical",
        "Urgent",
      ],
      answerIndex: 1,
      hints: [
        "Look at cues of quiet respect: 'step softly', 'lowering their cameras', 'ancient cedar trunks'.",
      ],
      explanation:
        "Hushed physical restraint and awe-filled natural detail ('ancient cedar trunks', 'mist curls') establish a deeply respectful, reverent tone.",
    },
    {
      id: "comprehension-inference-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "attitude-tone-bias",
      question:
        'Read the extract:\n\n*"For the modest fee of forty dollars a month, the gym’s ‘wellness concierge’ sends you three automated emails reminding you to drink water."*\n\nWhich nuanced tone word (beginning with **s** — meaning grimly or darkly mocking) best fits this sentence?',
      answer: {
        type: "text",
        accept: ["sardonic", "satirical", "sarcastic", "scornful"],
        display: "sardonic",
      },
      traps: [
        {
          spec: { type: "text", accept: ["sad", "serious", "sympathetic"] },
          feedback: "Look at the ironic scare quotes around 'wellness concierge' and the trivial payoff ('reminding you to drink water') — the writer is mocking, not sad.",
        },
      ],
      hints: [
        "Notice the scare quotes around 'wellness concierge' and the sarcastic contrast with 'modest fee of forty dollars'.",
        "Recall the Year 9 tone word for dry, biting mockery that sounds sharper than 'negative'.",
      ],
      solution: [
        "Pairing 'modest fee' with the absurdly trivial payoff of automated water reminders creates dry, biting mockery.",
        "The sharpest tone adjective is **sardonic**.",
      ],
    },
    {
      id: "comprehension-inference-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "nonfiction-language-structure",
      question:
        'Read the extract from a speech:\n\n*"Every single morning, you step past the overflowing recycling bins outside Block C. Every single afternoon, you tell yourself someone else will sort it."*\n\nWhich language technique directly implicates the listener here?',
      options: [
        "Expert statistical testimony",
        "Passive voice detachment",
        "Direct address with repetition",
        "Nostalgic historical flashback",
      ],
      answerIndex: 2,
      hints: [
        "Spot the pronoun aimed straight at the audience ('you') and the echoed opening rhythm ('Every single…').",
        "Ask how that repeated pronoun removes the audience’s excuse to stay detached.",
      ],
      explanation:
        "Repeating 'Every single…' alongside direct address ('you') corners the audience personally, preventing them from blaming outsiders.",
    },
    {
      id: "comprehension-inference-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "nonfiction-language-structure",
      question:
        'An article on vanishing neighbourhood bookshops opens with the chime of a brass bell above Mrs Chen’s doorway, widens into national retail statistics, and closes in the final line with the same brass bell falling silent as the shutters lock.\n\nName this overarching structural technique (2 words).',
      answer: {
        type: "text",
        accept: ["cyclical structure", "cyclical ending", "circular structure", "circular ending", "cyclical callback", "cyclical call-back"],
        display: "cyclical structure",
      },
      hints: [
        "Notice how the closing image deliberately returns to the exact detail introduced in the opening.",
        "Think of the structural term related to a circle or cycle.",
      ],
      solution: [
        "Returning at the end to the exact brass bell image from the opening frames the entire piece.",
        "This technique is **cyclical structure** (or cyclical ending).",
      ],
    },
    {
      id: "comprehension-inference-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "attitude-tone-bias",
      question:
        'A local blog criticising a new tram line interviews only two taxi drivers who dislike it and skips the independent passenger survey showing 78% resident support.\n\nWhat form of bias is occurring?',
      options: [
        "Selective omission",
        "Cyclical framing",
        "Reverent hyperbole",
        "Balanced concession",
      ],
      answerIndex: 0,
      hints: [
        "Focus on what evidence the blogger intentionally left out of the report.",
        "Leaving out counter-evidence to skew opinion has a specific two-word name.",
      ],
      explanation:
        "Choosing only critical voices while excluding contradictory survey data is selective omission — a primary driver of media bias.",
    },
    {
      id: "comprehension-inference-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "synthesis-summary",
      question:
        'Compare two short extracts on evening homework:\n- **Text A:** *"Quiet evening practice cements classroom ideas into long-term memory."*\n- **Text B:** *"Independent review after school helps learners retain new methods more securely."*\n\nDo these two extracts show **agreement** or **contrast**? (Type one word.)',
      answer: {
        type: "text",
        accept: ["agreement", "similarity", "agree", "similar"],
        display: "agreement",
      },
      traps: [
        {
          spec: { type: "text", accept: ["contrast", "disagreement", "different"] },
          feedback: "Look closely: 'cements into long-term memory' and 'retain new methods more securely' express the same core idea in different words.",
        },
      ],
      hints: [
        "Compare 'cements… into long-term memory' with 'retain new methods more securely'.",
        "Even though the wording differs, check whether the underlying claim aligns or clashes.",
      ],
      solution: [
        "Both writers argue that after-school practice strengthens long-term retention.",
        "Therefore, the relationship is **agreement**.",
      ],
    },
    {
      id: "comprehension-inference-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "synthesis-summary",
      question:
        'Read two extracts on city parks:\n- **Text A:** *"Our park lawn offers rare open grass where families spread picnic blankets on Sunday afternoons."*\n- **Text B:** *"Maintaining manicured turf in a tropical climate swallows vast amounts of potable water and mower fuel."*\n\nWhich synthesis sentence integrates both passages most effectively?',
        options: [
          "Text A likes Sunday picnics while Text B talks about petrol mowers and tropical rain.",
          "Both passages agree that manicured lawns should be replaced by indoor shopping plazas.",
          "Text A says families love open grass, and Text B agrees that parks waste water.",
          "Whereas Text A values urban lawns as communal leisure space, Text B critiques their steep environmental cost.",
        ],
        answerIndex: 3,
        hints: [
          "Check which option merges both writers cleanly using a comparative connective and precise conceptual phrasing.",
          "Reject options that distort a writer’s viewpoint or sound informal.",
        ],
        explanation:
          "Pairing communal leisure value from Text A directly against environmental resource cost in Text B with 'Whereas' produces crisp, accurate synthesis.",
    },
    {
      id: "comprehension-inference-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "nonfiction-language-structure",
      question:
        'Read the opening of a health article:\n\n*"Last Tuesday, twelve-year-old Sam collapsed after drinking three caffeinated energy cans before football trials."*\n\nWhat specific non-fiction technique (a brief true-life human story used to hook empathy) is this opening? (One word.)',
      answer: {
        type: "text",
        accept: ["anecdote", "personal anecdote", "case study"],
        display: "anecdote",
      },
      hints: [
        "Notice how the article begins with one named individual’s real-life incident rather than statistics.",
        "What single word describes a brief human story used at the start of an article or speech?",
      ],
      solution: [
        "Opening on Sam’s specific real-life incident humanises the health risk before broader evidence appears.",
        "This technique is an **anecdote**.",
      ],
    },
    {
      id: "comprehension-inference-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "retrieval-vs-inference",
      question:
        'Read the extract:\n\n*"Although the brochure guaranteed ‘bilingual guides on every departure’, our guide’s entire English vocabulary consisted of ‘bus’, ‘ten minutes’, and an apologetic shrug."*\n\nWhat combination of inference and tone is **most accurate**?',
        options: [
          "The writer uses wry understatement to expose misleading travel marketing.",
          "The writer praises the guide for mastering essential travel phrases quickly.",
          "The writer urges readers never to visit countries with different languages.",
          "The writer adopts a detached tone to report an accurate travel itinerary.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the brochure’s grand guarantee ('bilingual guides') against the comic three-item list ending in 'an apologetic shrug'.",
          "Notice the writer’s target: is it the polite guide, or the misleading brochure?",
        ],
        explanation:
          "Contrasting the quoted marketing promise with the guide’s two English words and 'apologetic shrug' uses dry comic understatement to mock exaggerated travel brochures without cruelty toward the guide.",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS P1 & P2 (15 questions each, mix of short, mcq, 4 written)
  // =========================================================================
  papers: [
    {
      id: "comprehension-inference-p1",
      title: "Practice Paper 1 — Inference, Tone, Non-Fiction Craft & Synthesis",
      questions: [
        {
          id: "comprehension-inference-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "retrieval-vs-inference",
          question:
            'Read the extract:\n\n*"Founded in 1924, the coastal observatory records tide heights every fifteen minutes using three brass gauges bolted into the seawall."*\n\nAccording to the passage, how many brass gauges record the tide heights? (Type a number.)',
          answer: { type: "number", value: 3, display: "3" },
          hints: [
            "This is an explicit retrieval check — scan directly for the count before 'brass gauges'.",
          ],
          solution: [
            "The passage explicitly states 'three brass gauges bolted into the seawall'.",
            "Answer: **3**.",
          ],
        },
        {
          id: "comprehension-inference-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "retrieval-vs-inference",
          question:
            'Read the extract:\n\n*"Halfway through his apology, Devon glanced twice at his smartwatch and tapped his heel against the linoleum."*\n\nIs the statement *"Devon is impatient and not fully sincere in his apology"* **explicit** or an **inference**? (Type one word.)',
          answer: {
            type: "text",
            accept: ["inference", "inferred", "implicit"],
            display: "inference",
          },
          traps: [
            {
              spec: { type: "text", accept: ["explicit", "stated", "fact"] },
              feedback: "His impatience and insincerity are never stated directly — they are deduced from his restless body language.",
            },
          ],
          hints: [
            "Ask whether the sentence directly says he is insincere, or invites you to read body-language clues.",
          ],
          solution: [
            "Glancing at a watch and tapping a heel are explicit actions; deducing insincerity and impatience is an **inference**.",
          ],
        },
        {
          id: "comprehension-inference-p1-q03",
          kind: "mcq",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          question:
            'Read the extract:\n\n*"The developers boast that their glass tower will ‘revitalise the waterfront’, yet their own impact study admits the building will cast the public promenade into shadow for seven hours a day."*\n\nWhich tone best fits the writer’s voice?',
        options: [
          "Reverent",
          "Nostalgic",
          "Sceptical",
          "Enthusiastic",
        ],
          answerIndex: 2,
          hints: [
            "Look at the verb 'boast', the quotation marks around 'revitalise', and the evidence introduced after 'yet'.",
            "Which attitude questions an exaggerated claim by testing it against facts?",
          ],
          explanation:
            "Using 'boast' and contrasting the slogan with the developers’ own impact study creates a probing, sceptical tone that exposes contradiction.",
        },
        {
          id: "comprehension-inference-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          question:
            'Compare these two sentences:\n- Sentence A: *"The committee proposed a revised timetable."*\n- Sentence B: *"The committee rammed through a punishing timetable."*\n\nWhat two-word term describes emotionally slanted word choices like *rammed through* and *punishing*?',
          answer: {
            type: "text",
            accept: ["loaded diction", "loaded language", "emotive language", "emotive diction", "biased language"],
            display: "loaded diction",
          },
          hints: [
            "Notice how neutral verbs/adjectives ('proposed', 'revised') were swapped for aggressive, negatively charged equivalents.",
            "Recall the bias term pairing 'loaded' with word choice.",
          ],
          solution: [
            "Swapping neutral wording for emotionally slanted words to steer reader judgement is **loaded diction** (or loaded/emotive language).",
          ],
        },
        {
          id: "comprehension-inference-p1-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "nonfiction-language-structure",
          question:
            'Read this extract from a newspaper feature:\n\n*"On one side of the canal, glass-walled studios glow over espresso bars and designer bicycles; ten strides across the footbridge, damp stairwell corridors smell of rust and peeling paint."*\n\nWhich structural method is being used to influence the reader?',
          options: [
            "Juxtaposition of contrasting wealth",
            "Cyclical repetition of a closing image",
            "Chronological narration of canal history",
            "Direct address questioning local cyclists",
          ],
          answerIndex: 0,
          hints: [
            "Notice the semicolon linking two starkly different scenes separated by just 'ten strides'.",
            "What structural technique places stark opposites side by side?",
          ],
          explanation:
            "Placing gleaming wealth directly beside neglected decay just 'ten strides' apart uses sharp juxtaposition to heighten the reader’s awareness of inequality.",
        },
        {
          id: "comprehension-inference-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          question:
            'Read the extract:\n\n*"Until we cut storm-drain plastics this year, another nesting season will be lost before the next election arrives. Delay is a choice — and the reef cannot afford it."*\n\nName the single tone word (starting with **u**) that best describes this extract.',
          answer: {
            type: "text",
            accept: ["urgent", "urgency"],
            display: "urgent",
          },
          hints: [
            "Look at the tight time pressure ('this year', 'before the next election') and high stakes.",
            "Which tone demands rapid, immediate action?",
          ],
          solution: [
            "Time-critical deadlines paired with ecological peril create an **urgent** tone.",
          ],
        },
        {
          id: "comprehension-inference-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "nonfiction-language-structure",
          question:
            'Read the extract from an educational speech:\n\n*"Only 19% of secondary pupils say they read for pleasure daily — yet every single hour of voluntary reading widens vocabulary more effectively than any worksheet."*\n\nWhy does the speaker pair the **19% statistic** with the contrast after the dash?',
          options: [
            "To prove that worksheets should be banned from all classrooms",
            "To shock listeners with low uptake before stressing reading’s value",
            "To entertain the crowd with humorous memories of reading novels",
            "To suggest that four out of five students dislike vocabulary tests",
          ],
          answerIndex: 1,
          hints: [
            "Look at the two halves: first a troubling low number ('Only 19%'), then a sharp '— yet' turning to high payoff.",
            "Think about how that gap motivates action.",
          ],
          explanation:
            "Leading with the stark low figure ('Only 19%') establishes the scale of the problem, while the dash pivot magnifies how much students are losing by neglecting daily reading.",
        },
        {
          id: "comprehension-inference-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "synthesis-summary",
          question:
            'Read the paired notes on urban trees:\n- **Text A:** *"Street trees shade pavements by up to 6°C during afternoon heatwaves."*\n- **Text B:** *"Falling branches and uplifted paving slabs drive up annual council maintenance bills."*\n\nWhich single comparative connective (beginning with **w** — e.g. linking two contrasting clauses in one sentence) cleanly joins Text A’s cooling benefit and Text B’s maintenance cost?',
          answer: {
            type: "text",
            accept: ["whereas", "while", "whilst"],
            display: "whereas",
          },
          hints: [
            "You need a formal subordinating connective that sets two contrasting facts side by side in one sentence.",
            "Think of the standard comparative word starting with 'w' used in synthesis.",
          ],
          solution: [
            "**Whereas** (or while/whilst) links contrasting perspectives smoothly inside a single integrated synthesis sentence.",
          ],
        },
        {
          id: "comprehension-inference-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "retrieval-vs-inference",
          question:
            'Read the extract:\n\n*"When the violin case clicked shut, Aunt Mei did not applaud immediately; she sat motionless for three seconds, dabbing the corner of one eye with her programme before rising first to her feet."*\n\nWhat can we infer about Aunt Mei’s reaction to the performance?',
          options: [
            "She felt bored during the final movement and wanted to leave.",
            "She noticed a mistake in the printed concert programme.",
            "She disliked the violinist’s tempo and hesitated to clap.",
            "She was deeply moved and needed a moment before applauding.",
          ],
          answerIndex: 3,
          hints: [
            "Combine all three clues: 'motionless for three seconds', 'dabbing the corner of one eye', and 'rising first to her feet'.",
            "Does rising *first* to her feet signal boredom or profound admiration?",
          ],
          explanation:
            "Brief stunned stillness, wiping away a tear, and then leading a standing ovation together imply she was overwhelmed with emotion and admiration.",
        },
        {
          id: "comprehension-inference-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          question:
            'Read the extract:\n\n*"I can still taste the salted plum ice we bought for twenty cents outside the old cinema, before the block became a twenty-storey car park."*\n\nName the nuanced tone word (beginning with **n**) that best captures this wistful look back at the past.',
          answer: {
            type: "text",
            accept: ["nostalgic", "nostalgia"],
            display: "nostalgic",
          },
          hints: [
            "Notice the fond sensory memory ('salted plum ice', 'twenty cents') set against modern change.",
            "What tone word describes bittersweet longing for the past?",
          ],
          solution: [
            "Fond sensory memories contrasted with a vanished local landmark produce a **nostalgic** tone.",
          ],
        },
        {
          id: "comprehension-inference-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "synthesis-summary",
          question:
            'Which student practice **loses** summary marks on a Year 9 comprehension paper?',
          options: [
            "Grouping points from both extracts under shared thematic headings",
            "Paraphrasing key arguments concisely into abstract own words",
            "Lifting whole sentences verbatim and including long decorative anecdotes",
            "Cutting irrelevant background facts that fall outside the prompt focus",
          ],
          answerIndex: 2,
          hints: [
            "Recall the SIFT rule: filter fluff and translate into your own words.",
            "Which habit signals copying rather than genuine synthesis?",
          ],
          explanation:
            "Copying whole sentences and retaining decorative anecdotes wastes words and fails to demonstrate independent comprehension in your own phrasing.",
        },
        {
          id: "comprehension-inference-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "retrieval-vs-inference",
          marks: 3,
          question:
            'Read the extract:\n\n*"Every morning after the merger, Arthur still arrived twenty minutes early, sharpened three pencils he never used, and left his old department badge clipped neatly inside his jacket pocket where nobody could see it."*\n\nWhat can you **infer** about Arthur’s feelings after the company merger? Support your answer with brief embedded evidence. (3 marks)',
          hints: [
            "Apply ICE: make a clear inferred claim about Arthur’s feelings, embed 1–3 word clues, and explain what they imply.",
            "Examine both the unused pencils (habit/lack of real work) and hiding his old badge inside his pocket (quiet grief/loyalty).",
          ],
          modelAnswer:
            "Arthur appears quietly sidelined and reluctant to let go of his former identity. Arriving early to sharpen pencils he 'never used' suggests he feels redundant or underused after the takeover, clinging to old routines for purpose. Keeping his old badge hidden inside his pocket implies deep nostalgia and quiet grief for his previous team, yet a guarded awareness that displaying loyalty openly might now seem unwelcome.",
          markScheme: [
            {
              point: "Infers a clear emotional state (e.g. feeling redundant, sidelined, displaced, or grieving his old role)",
              keywords: ["redundant", "sidelined", "unneeded", "underused", "displaced", "alienated", "grief", "unwanted", "loss"],
            },
            {
              point: "Embeds and unpacks a clue of empty routine ('never used' pencils / arriving early) showing lack of real work or clinging to habit",
              keywords: ["routine", "habit", "purpose", "never used", "useless", "role"],
            },
            {
              point: "Explains the hidden badge as quiet attachment/loyalty coupled with caution or embarrassment about showing it",
              keywords: ["loyalty", "attachment", "identity", "nostalgia", "hidden", "secret", "guarded", "reluctant"],
            },
          ],
          commonError:
            "Simply retelling the literal actions ('he sharpens pencils and hides his badge') without inferring redundancy, attachment, or quiet discomfort.",
        },
        {
          id: "comprehension-inference-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          marks: 3,
          question:
            'Read the extract from an editorial:\n\n*"After spending millions on glossy brochures promising ‘seamless travel’, the rail company unveiled its bold remedy for broken escalators: a printed poster advising tired commuters to treat the stairs as ‘free cardio’."*\n\nEvaluate the writer’s **tone** and explain **two methods** used to convey this attitude. (3 marks)',
          hints: [
            "Start with a precise Year 9 tone word rather than 'negative' or 'angry'.",
            "Look at the ironic quotation marks and the sharp deflation after the colon.",
          ],
          modelAnswer:
            "The writer adopts a sharply sardonic and mocking tone toward the rail operator. First, placing 'seamless travel' and 'free cardio' in ironic scare quotes distances the writer from corporate spin and exposes its absurdity. Second, the colon sets up a mocking anticlimax: building grand expectations with 'bold remedy' before deflating them to a cheap printed poster, highlighting blatant corporate incompetence.",
          markScheme: [
            {
              point: "Identifies a precise tone word (e.g. sardonic, mocking, ironic, sarcastic, or scornful)",
              keywords: ["sardonic", "mocking", "ironic", "sarcastic", "scornful", "cynical", "derisive"],
            },
            {
              point: "Analyses the ironic quotation marks / scare quotes undermining corporate slogans",
              keywords: ["scare quotes", "quotation marks", "inverted commas", "spin", "absurdity", "insincere", "distances"],
            },
            {
              point: "Explains the anticlimax / contrast after the colon (grand promise vs trivial poster) exposing incompetence",
              keywords: ["anticlimax", "colon", "deflating", "contrast", "incompetence", "trivial", "underwhelming", "gap"],
            },
          ],
          commonError:
            "Writing 'the tone is negative' without naming sardonic mockery or unpacking how scare quotes and the colon anticlimax work.",
        },
        {
          id: "comprehension-inference-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "nonfiction-language-structure",
          marks: 4,
          question:
            'Read the opening of a travel article:\n\n*"Before sunrise, the harbour smells of diesel, wet rope, and roasting coffee; fishermen haul silver mackerel across timber planks without wasting a single syllable. Then, at nine o’clock, the cruise ship docks. Within minutes, loudspeakers echo across the quay."*\n\nAnalyse how the writer uses **language** and **structure** to contrast the harbour before and after nine o’clock. (4 marks)',
          hints: [
            "Compare sentence length and sensory atmosphere before and after 'Then, at nine o’clock'.",
            "Zoom into specific word choices: 'without wasting a single syllable' vs 'loudspeakers echo'.",
          ],
          modelAnswer:
            "The writer first immerses the reader in authentic working craft through vivid sensory listing ('diesel, wet rope, and roasting coffee') and disciplined quietness ('single syllable'), creating a reverent portrait of local labour. Structurally, the abrupt short sentence 'cruise ship docks' snaps the flowing rhythm in two, marking an intrusive turning point. Finally, the harsh auditory verb 'echo' replaces hushed human focus with mechanical noise, inviting the reader to feel dismay at how mass tourism disrupts living heritage.",
          markScheme: [
            {
              point: "Analyses sensory imagery / listing in the opening showing authentic, grounded working life",
              keywords: ["sensory", "listing", "authentic", "craft", "working", "labour", "immerses", "triplets"],
            },
            {
              point: "Analyses the quiet focus / admiration implied before nine o'clock (e.g. disciplined silence, respect)",
              keywords: ["quiet", "hushed", "reverent", "disciplined", "respect", "focused", "calm", "peaceful"],
            },
            {
              point: "Explains the structural shift in sentence length / pacing at the pivot ('Then, at nine o'clock…')",
              keywords: ["short sentence", "abrupt", "rhythm", "pacing", "turning point", "pivot", "structurally", "shift"],
            },
            {
              point: "Explains the jarring effect of intrusive noise / tourism disrupting the atmosphere",
              keywords: ["intrusive", "disrupts", "tourism", "mechanical", "noise", "dismay", "jarring", "shatters", "invades"],
            },
          ],
          commonError:
            "Describing what happens in the harbour without analysing sensory diction, the abrupt pacing shift, or the contrast between authentic labour and intrusive tourism.",
        },
        {
          id: "comprehension-inference-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "synthesis-summary",
          marks: 4,
          question:
            'Read the two extracts about night trains:\n- **Text A:** *"Boarding a sleeper carriage at dusk feels like stepping into a rolling hotel: linen curtains hush the corridor while distant towns drift past like constellations."*\n- **Text B:** *"Sleeper tickets often cost triple a budget flight, and cramped berths rattled by track joints leave business travellers too bleary-eyed for morning meetings."*\n\n**Synthesise** the differences between how Text A and Text B present night-train travel, using your own words and integrated comparison. (4 marks)',
          hints: [
            "Avoid summarising Text A in one block and Text B in another — pair them along shared themes (comfort/atmosphere, practical value).",
            "Use comparative connectives ('whereas', 'conversely', 'in contrast') and paraphrase into your own vocabulary.",
          ],
          modelAnswer:
            "The two writers diverge sharply in both atmosphere and practicality. Whereas Text A romanticises sleeper travel as tranquil, dreamy comfort — evoking peaceful seclusion and scenic wonder — Text B dismisses it as exhausting discomfort, highlighting tight sleeping spaces and noisy vibrations that ruin rest. Furthermore, while Text A treats the slow overnight journey as an enchanting experience in itself, Text B evaluates it pragmatically through expense and productivity, warning that inflated fares and poor sleep make it uncompetitive against cheap aviation.",
          markScheme: [
            {
              point: "Uses integrated comparative connectives weaving both texts together (not separate blocks)",
              keywords: ["whereas", "conversely", "contrast", "diverge", "unlike", "however", "while"],
            },
            {
              point: "Paraphrases Text A's romantic, tranquil, or scenic view of comfort in own words",
              keywords: ["romantic", "tranquil", "peaceful", "comfort", "dreamy", "scenic", "enchanting", "relaxing", "luxurious"],
            },
            {
              point: "Paraphrases Text B's physical discomfort / poor rest in own words",
              keywords: ["exhausting", "discomfort", "noisy", "poor sleep", "restless", "tight", "tired", "uncomfortable"],
            },
            {
              point: "Contrasts Text A's experiential enjoyment with Text B's pragmatic focus on high cost or workplace efficiency",
              keywords: ["pragmatic", "expense", "cost", "fares", "expensive", "productivity", "practical", "efficiency", "aviation"],
            },
          ],
          commonError:
            "Copying 'rolling hotel' and 'bleary-eyed for morning meetings' verbatim into two disconnected paragraphs without comparative connectives.",
        },
      ],
    },

    // =========================================================================
    // PAPER P2: Deeper Non-Fiction Analysis, Bias & Synthesis
    // =========================================================================
    {
      id: "comprehension-inference-p2",
      title: "Practice Paper 2 — Bias, Structural Shifts & Cross-Text Synthesis",
      questions: [
        {
          id: "comprehension-inference-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "retrieval-vs-inference",
          question:
            'Read the extract:\n\n*"Fourteen volunteers cleared 310 kilograms of fishing line from Changi shoreline in under two hours, filling twenty-six heavy sacks."*\n\nAccording to the passage, how many kilograms of fishing line were cleared? (Type a number.)',
          answer: { type: "number", value: 310, display: "310" },
          hints: [
            "Scan directly for the figure paired with 'kilograms of fishing line'.",
          ],
          solution: [
            "The text explicitly reports **310** kilograms of fishing line.",
          ],
        },
        {
          id: "comprehension-inference-p2-q02",
          kind: "mcq",
          difficulty: "warmup",
          guideRef: "attitude-tone-bias",
          question:
            'Read the extract:\n\n*"The charity’s annual audit showed that 84% of donations funded direct classroom meals, while 16% covered transport and staff salaries — a ratio broadly comparable to similar regional charities."*\n\nWhich tone best describes this sentence?',
          options: [
            "Objective and measured",
            "Sardonic and cynical",
            "Urgent and panicked",
            "Nostalgic and sentimental",
          ],
          answerIndex: 0,
          hints: [
            "Notice neutral verbs ('showed', 'covered') and the calm benchmark ('broadly comparable').",
          ],
          explanation:
            "Presenting exact figures calmly alongside an impartial comparison ('broadly comparable') without emotionally charged adjectives marks an objective, measured tone.",
        },
        {
          id: "comprehension-inference-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          question:
            'An opinion column attacking a new sports complex mentions rising noise and parking shortages but hides the fact that local schools have lacked a swimming pool for twelve years.\n\nWhat two-word bias technique involves leaving out awkward counter-facts?',
          answer: {
            type: "text",
            accept: ["selective omission", "omission", "omission bias"],
            display: "selective omission",
          },
          hints: [
            "Think about what the writer deliberately left *out* of the column.",
            "Combine 'selective' with the noun for leaving something out.",
          ],
          solution: [
            "Deliberately excluding relevant counter-facts to slant an audience’s view is **selective omission**.",
          ],
        },
        {
          id: "comprehension-inference-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "retrieval-vs-inference",
          question:
            'Read the extract:\n\n*"Although every teammate shouted instructions from the touchline, Hana waited half a beat, scanned the quiet far post, and slotted the pass softly past two lunging defenders."*\n\nWhat can a reader infer about Hana’s temperament under pressure?',
          options: [
            "She ignored her teammates because she wanted to score alone.",
            "She felt confused by the noisy advice from the sideline.",
            "She stayed composed and relied on sharp, calm judgement.",
            "She lacked the strength to strike the ball forcefully.",
          ],
          answerIndex: 2,
          hints: [
            "Contrast the chaotic sideline ('shouted instructions') and 'lunging defenders' against 'waited half a beat', 'scanned', and 'slotted… softly'.",
            "What mental quality does pausing to scan amid chaos reveal?",
          ],
          explanation:
            "Pausing calmly amid shouting and 'lunging' opponents to spot the 'quiet far post' implies poise, composure, and tactical intelligence under pressure.",
        },
        {
          id: "comprehension-inference-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "nonfiction-language-structure",
          question:
            'Read the extract from a speech:\n\n*"Who pays the price when a river turns grey? Not the boardrooms miles upriver — the farmers drawing irrigation water at dawn."*\n\nName the technique of asking a question and immediately answering it yourself. (One word.)',
          answer: {
            type: "text",
            accept: ["hypophora", "rhetorical question"],
            display: "hypophora",
          },
          hints: [
            "Notice that unlike an unanswered rhetorical question, the speaker supplies a punchy answer right away.",
            "Think of the classical rhetorical term starting with 'h' (or the broader question device).",
          ],
          solution: [
            "Posing a sharp question and immediately delivering the answer is **hypophora** (a controlled form of rhetorical questioning that guides the listener straight to the speaker’s conclusion).",
          ],
        },
        {
          id: "comprehension-inference-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "nonfiction-language-structure",
          question:
            'Read the extract from an investigative report:\n\n*"First came the promotional billboards. Then came the cranes. Within fourteen months, the marshland that once buffered coastal floods had vanished beneath a showroom car park."*\n\nHow does the pacing of these three sentences shape the reader’s response?',
          options: [
            "It slows time down to celebrate careful architectural planning.",
            "It mimics the rapid, unstoppable erasure of a natural habitat.",
            "It creates playful humour about building showroom car parks.",
            "It confuses the timeline so readers cannot track construction.",
          ],
          answerIndex: 1,
          hints: [
            "Notice two brisk four-word sentences ('First came… Then came…') speeding into 'vanished beneath'.",
            "What does that acceleration make the destruction feel like?",
          ],
          explanation:
            "Clipped, escalating chronological steps ('First… Then… Within fourteen months') accelerate the rhythm to mirror how alarmingly swiftly a vital wetland was erased.",
        },
        {
          id: "comprehension-inference-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          question:
            'Read the extract:\n\n*"The brochure claims the ‘artisan loft’ lies five minutes from downtown — provided you own a helicopter and ignore two railway crossings."*\n\nWhich single tone word best describes this sentence: `sardonic`, `reverent`, `urgent`, or `objective`?',
          answer: {
            type: "text",
            accept: ["sardonic"],
            display: "sardonic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["objective", "reverent", "urgent"] },
              feedback: "Look at the absurd joke ('provided you own a helicopter') mocking the estate agent’s claim — that is biting, sardonic irony.",
            },
          ],
          hints: [
            "Spot the scare quotes around 'artisan loft' and the mocking exaggeration about owning a helicopter.",
            "Pick the word for dry, biting mockery.",
          ],
          solution: [
            "Puncturing exaggerated estate-agent prose with a dry helicopter joke creates a **sardonic** tone.",
          ],
        },
        {
          id: "comprehension-inference-p2-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "synthesis-summary",
          question:
            'Read two short extracts on paper diaries vs digital calendars:\n- **Text A:** *"Writing appointments in ink slows my thoughts enough to see when a week is dangerously overcrowded."*\n- **Text B:** *"Cloud calendars sync instantly across family phones, preventing missed orthodontist visits and double-booked evenings."*\n\nWhich shared theme axis best organises a synthesis comparing both extracts?',
          options: [
            "Different brands of blue fountain pens sold in stationery shops",
            "Whether orthodontists prefer working in the morning or evening",
            "How the prices of smartphones have fallen over twenty years",
            "Mindful personal reflection versus shared logistical convenience",
          ],
          answerIndex: 3,
          hints: [
            "Abstract each extract’s core strength: Text A = slowing down to reflect; Text B = syncing smoothly across a household.",
            "Choose the conceptual axis that directly captures both.",
          ],
          explanation:
            "Framing the comparison around mindful reflection in Text A versus instant shared logistics in Text B elevates the synthesis from literal details to sharp concepts.",
        },
        {
          id: "comprehension-inference-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "nonfiction-language-structure",
          question:
            'Read this opening of a persuasive article:\n\n*"We all share the same crowded pavements; we all breathe the same exhaust at the school gate."*\n\nWhat two-word grammatical term describes pronouns like *we* and *our* used to unite writer and reader?',
          answer: {
            type: "text",
            accept: ["inclusive pronouns", "inclusive pronoun", "first-person plural", "first person plural"],
            display: "inclusive pronouns",
          },
          hints: [
            "Look at 'We' — it pulls both speaker and audience into a single shared group.",
            "Pair 'inclusive' with the part of speech for words like *we* and *our*.",
          ],
          solution: [
            "Using 'we' and 'our' to create shared ownership and solidarity is called **inclusive pronouns**.",
          ],
        },
        {
          id: "comprehension-inference-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "retrieval-vs-inference",
          question:
            'Read the extract:\n\n*"When the auctioneer knocked down the tarnished silver locket for nine pounds, the elderly woman in row four closed her eyes and exhaled as though she had been holding her breath since Tuesday."*\n\nWhat can a reader best infer about the woman in row four?',
          options: [
            "She feared she might lose or be priced out of an item precious to her.",
            "She felt annoyed that the locket was tarnished instead of polished.",
            "She was disappointed that she had not sold the locket for more cash.",
            "She had been feeling unwell from sitting inside a crowded room.",
          ],
          answerIndex: 0,
          hints: [
            "Look at the intense physical relief ('closed her eyes and exhaled as though… holding her breath since Tuesday') right when the bidding closes cheaply.",
            "Why would someone hold their breath for days over a nine-pound tarnished locket?",
          ],
          explanation:
            "Profound physical relief at a modest nine-pound hammer price implies she anxiously needed to win (or secure) a personally precious object and feared being outbid.",
        },
        {
          id: "comprehension-inference-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "synthesis-summary",
          question:
            'Read the two claims on zoo conservation:\n- **Text A:** *"Modern zoos fund vital breeding programmes that have pulled endangered amphibians back from extinction."*\n- **Text B:** *"Although zoos support rare-species breeding, cramped enclosures cannot replicate the roaming instincts of wide-ranging predators."*\n\nDoes Text B show pure **agreement**, pure **contrast**, or **qualification** (acknowledging a point while adding a key limit)? (Type one word.)',
          answer: {
            type: "text",
            accept: ["qualification", "nuance", "qualified"],
            display: "qualification",
          },
          traps: [
            {
              spec: { type: "text", accept: ["agreement", "contrast"] },
              feedback: "Notice the opening word 'Although': Text B concedes Text A’s breeding point *before* introducing a serious limitation — that is qualification!",
            },
          ],
          hints: [
            "Look at the opening clause of Text B: 'Although zoos support rare-species breeding…'",
            "When a second text accepts part of the first text’s claim while setting an important boundary or limitation, what word describes that move?",
          ],
          solution: [
            "Text B explicitly concedes Text A’s conservation value ('Although…') before restricting it with welfare concerns — a **qualification**.",
          ],
        },
        {
          id: "comprehension-inference-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "attitude-tone-bias",
          marks: 3,
          question:
            'Read this headline and opening sentence from a local paper:\n\n**"BUREAUCRATS CRUSH COMMUNITY SPIRIT WITH PETTY PARK CURFEW"**\n*"Without consulting families who cherish evening strolls, officials quietly imposed a 9 p.m. gate lock that punishes ordinary residents."*\n\nExplain **how** the writer introduces **bias** here, referring to three specific methods or word choices. (3 marks)',
          hints: [
            "Test words like 'BUREAUCRATS', 'CRUSH', 'PETTY', 'quietly imposed', and 'punishes' with the Synonym Swap Test.",
            "Also check whose perspective is completely missing from this opening!",
          ],
          modelAnswer:
            "The writer steers opinion aggressively through loaded diction: 'bureaucrats' reduces officials to faceless, uncaring paper-pushers, while 'crush' and 'punishes' frame a routine safety rule as deliberate cruelty. Second, emotive contrast pits sympathetic 'ordinary residents' who 'cherish' strolls against secretive officials who 'quietly imposed' the lock. Third, selective omission hides any legitimate rationale — such as vandalism, wildlife protection, or policing costs — leaving readers with a purely one-sided verdict.",
          markScheme: [
            {
              point: "Analyses loaded diction ('bureaucrats', 'crush', 'petty', or 'punishes') and its emotionally slanted connotations",
              keywords: ["loaded", "cruelty", "aggressive", "slanted", "emotive", "harsher", "hostile", "faceless"],
            },
            {
              point: "Identifies the polarised framing / contrast between sympathetic residents and secretive officials",
              keywords: ["contrast", "sympathetic", "secretive", "us and them", "victim", "villain", "ordinary", "cherish"],
            },
            {
              point: "Notes selective omission — hiding any council justification (e.g. safety, vandalism, cost, or wildlife)",
              keywords: ["omission", "one-sided", "missing", "justification", "safety", "reasons", "counter", "hides"],
            },
          ],
          commonError:
            "Stating 'it is biased because it uses strong words' without unpacking exact lexical connotations or noting omitted counter-reasons.",
        },
        {
          id: "comprehension-inference-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "nonfiction-language-structure",
          marks: 3,
          question:
            'Read this short extract from a speech on teenage volunteering:\n\n*"Fourteen-year-old Kabir started tutoring two primary pupils in a stairwell after school; six months later, his club had forty mentors. Yet we still hear adults claim young people care only about screens. Look around this hall — do we look indifferent to you?"*\n\nAnalyse how the speaker uses **three** distinct persuasive techniques in this extract. (3 marks)',
          hints: [
            "Spot the opening human story, the contrast with adult stereotypes, and the closing command + question.",
            "Remember: always link each named method to its exact effect on the audience.",
          ],
          modelAnswer:
            "First, the speaker opens with an inspiring anecdote about Kabir to provide concrete, relatable proof of youth initiative rather than vague claims. Second, after challenging unfair stereotypes with 'Yet', the imperative 'Look around' forces listeners to verify youth engagement with their own eyes. Finally, the closing rhetorical question combines inclusive 'we' with direct address ('you') to rally unity among young speakers while politely daring sceptical adults to abandon prejudice.",
          markScheme: [
            {
              point: "Identifies and explains the anecdote / case study (humanising proof of youth leadership)",
              keywords: ["anecdote", "case study", "relatable", "proof", "inspiring", "concrete", "human"],
            },
            {
              point: "Identifies and explains the imperative / counter-stereotype contrast challenging adult prejudice",
              keywords: ["imperative", "command", "stereotype", "prejudice", "forces", "evidence", "verify", "challenge"],
            },
            {
              point: "Identifies and explains the rhetorical question / inclusive or direct address uniting and confronting listeners",
              keywords: ["rhetorical question", "inclusive", "direct address", "unity", "rally", "confront", "solidarity", "daring"],
            },
          ],
          commonError:
            "Feature-spotting ('uses an anecdote and rhetorical question') without explaining how each technique dismantles the stereotype.",
        },
        {
          id: "comprehension-inference-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "synthesis-summary",
          marks: 3,
          question:
            'Read this passage carefully:\n\n*"Vertical farms stacked inside converted warehouses grow leafy herbs year-round without pesticides, use roughly 90% less water than open fields by recycling mist, and sit minutes from city supermarkets so lorries burn far less diesel. However, banks of LED grow-lights consume heavy electricity, making staple grains like wheat uneconomical indoors."*\n\nWrite a **concise summary** in your own words covering **two advantages** and **one limitation** of vertical farming. (3 marks)',
          hints: [
            "Paraphrase into your own words — avoid copying '90% less water', 'converted warehouses', or 'uneconomical indoors'.",
            "Check that you clearly include two distinct benefits plus the energy/crop limitation.",
          ],
          modelAnswer:
            "Indoor stacked farming sharply conserves water through closed-loop recycling and cuts transport emissions by locating harvests close to urban shoppers (while also eliminating chemical sprays). Nonetheless, high power demand for artificial lighting makes it financially impractical for staple crops.",
          markScheme: [
            {
              point: "Summarises one distinct environmental/supply advantage in own words (water conservation, pesticide-free year-round harvest, or shorter transport)",
              keywords: ["conserves", "saves", "water", "recycling", "chemical", "sprays", "year-round", "continuous"],
            },
            {
              point: "Summarises a second distinct advantage in own words (e.g. cutting transport emissions / food miles or pesticide elimination)",
              keywords: ["emissions", "transport", "miles", "fuel", "closer", "urban", "shoppers", "pesticide", "pollut"],
            },
            {
              point: "Summarises the limitation in own words (high power/energy cost or unsuitability for staple grain crops)",
              keywords: ["power", "energy", "lighting", "impractical", "costly", "expensive", "staple", "crops", "grains"],
            },
          ],
          commonError:
            "Copying whole clauses verbatim or listing three advantages while forgetting to include the limitation requested by the question.",
        },
        {
          id: "comprehension-inference-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "synthesis-summary",
          marks: 4,
          question:
            'Compare how both writers present **public libraries**:\n- **Text A (1956 memoir):** *"Step inside the reading room and the rain vanished; beneath green brass lamps, factory apprentices and professors shared the same long oak tables in egalitarian silence."*\n- **Text B (2025 council review):** *"Today’s branch libraries serve as vital digital lifelines — hosting coding workshops, toddler storytimes, and job-application terminals — though some older patrons mourn the loss of silent reading rooms."*\n\n**Synthesise** the similarities and differences between the two portrayals in your own words. (4 marks)',
          hints: [
            "Identify a subtle **similarity** first (both portray libraries as democratic, inclusive civic spaces serving diverse people).",
            "Then contrast atmosphere (strict silence vs lively community hub) and purpose (quiet book study vs digital/social services), noting Text B’s internal tension.",
          ],
          modelAnswer:
            "Both writers present public libraries as democratic, inclusive spaces that welcome citizens across social boundaries. However, they diverge sharply in atmosphere and function: whereas Text A looks back nostalgically at a hushed refuge defined by quiet equality and focused study, Text B depicts a bustling, multifunctional hub offering modern technology and community classes. Crucially, Text B bridges both worlds by acknowledging generational tension — recognising that shifting toward noisy digital outreach has come at the expense of the tranquil silence Text A treasured.",
          markScheme: [
            {
              point: "Identifies a shared similarity (democratic, inclusive, or welcoming diverse people/classes)",
              keywords: ["democratic", "inclusive", "welcome", "social", "equal", "diverse", "community", "everyone", "both"],
            },
            {
              point: "Contrasts Text A's nostalgic/hushed sanctuary with Text B's lively, multifunctional modern role",
              keywords: ["whereas", "however", "diverge", "contrast", "bustling", "multifunctional", "lively", "hub"],
            },
            {
              point: "Paraphrases Text A's quiet/egalitarian study refuge and Text B's digital/practical outreach services in own words",
              keywords: ["refuge", "sanctuary", "quiet", "technology", "classes", "outreach", "services", "modern"],
            },
            {
              point: "Perceptively notes the subtle tension / nostalgia inside Text B (older visitors missing quiet rooms)",
              keywords: ["tension", "generational", "expense", "regret", "missing", "mourn", "nostalg", "trade-off", "bridges"],
            },
          ],
          commonError:
            "Focusing only on differences (old vs new) while missing both the shared civic inclusivity and the internal tension noted at the end of Text B.",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 AoPS-hard questions, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "comprehension-inference-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "retrieval-vs-inference",
      question:
        'Read this excerpt from a nineteenth-century explorer’s journal:\n\n*"Our local porters warned that the northern pass would flood by noon; naturally, Captain Briggs consulted his London pocket-almanac instead and ordered the march at eleven. By one o’clock we were drying our soaked dispatch boxes over damp twigs."*\n\nWhich nuanced inference best captures the narrator’s unspoken attitude toward Captain Briggs?',
      options: [
        "Quietly mocking contempt for Briggs’s colonial arrogance over local expertise",
        "Genuine sympathy for Briggs’s bad luck with unexpected mountain weather",
        "Deep admiration for Briggs’s strict discipline and punctual schedule",
        "Complete detachment reporting routine rainfall without any judgement",
      ],
      answerIndex: 0,
      hints: [
        "Focus on the single adverb 'naturally' linking the local warning to Briggs consulting a 'London pocket-almanac'.",
        "Look at the quiet two-hour jump from 'ordered the march at eleven' to 'drying our soaked dispatch boxes'.",
        "Ask who the narrator trusts — the local porters or the London almanac?",
      ],
      explanation:
        "The dry adverb 'naturally' signals predictable folly, while juxtaposing a 'London pocket-almanac' against soaked boxes quietly ridicules Briggs’s arrogant dismissal of local knowledge.",
    },
    {
      id: "comprehension-inference-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "attitude-tone-bias",
      question:
        'Read the extract:\n\n*"In its press release, the airline described the nine-hour runway wait as an ‘extended pre-boarding hospitality interval’ — during which each passenger received one warm biscuit and half a paper cup of water."*\n\nWhat one-word literary/bias device describes dressing an unpleasant reality in polite, sanitised corporate phrasing like *extended pre-boarding hospitality interval*?',
      answer: {
        type: "text",
        accept: ["euphemism", "euphemistic language", "corporate euphemism", "verbal irony", "doublespeak", "loaded euphemism"],
        display: "euphemism",
      },
      hints: [
        "Notice how a miserable nine-hour delay is renamed as a pleasant-sounding 'hospitality interval'.",
        "Think of the term for substituting mild, flattering language to disguise something harsh or embarrassing.",
        "The word starts with 'eu-' (Greek for 'good/pleasant speech').",
      ],
      solution: [
        "Disguising a nine-hour runway delay as a 'hospitality interval' uses **euphemism** (or corporate doublespeak), which the journalist then punctuates with sardonic reality ('one warm biscuit').",
      ],
    },
    {
      id: "comprehension-inference-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "nonfiction-language-structure",
      question:
        'An investigative essay about fast fashion opens with a glittering Paris runway paragraph filled with French loanwords and silky sibilance, then immediately cuts to Paragraph 2 — written in blunt, clipped sentences reciting factory stitch rates, toxic dye runoff, and hourly wages.\n\nWhat is the primary **structural and stylistic** effect of this sudden shift in register?',
      options: [
        "It demonstrates that two separate journalists accidentally merged drafts.",
        "It mirrors the glamorous facade ripping away to expose brutal industrial truth.",
        "It reassures shoppers that luxury runway garments avoid factory production.",
        "It creates playful comedy by comparing French fashion to chemistry.",
      ],
      answerIndex: 1,
      hints: [
        "Think about how form mirrors meaning here: silky lyrical prose = surface glamour; clipped harsh facts = factory reality.",
        "Notice there is no soft transition — the abrupt cut is deliberate.",
        "How does that structural shock make a consumer feel?",
      ],
      explanation:
        "Abruptly tearing from lush, sibilant glamour into blunt, clinical factory data makes the text’s own style enact the stripping away of marketing illusions to expose human and ecological cost.",
    },
    {
      id: "comprehension-inference-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "attitude-tone-bias",
      marks: 4,
      question:
        'Read the extract from a column on smartphone-free concerts:\n\n*"For ten glorious minutes after the lights dimmed, nobody held up a glowing rectangle to prove to strangers that they were enjoying themselves. We simply listened. Of course, a few furious guests later complained online that locking away phones violated their ‘creative freedom’ — by which they apparently meant the freedom to film a shaky, distorted clip they will never watch again."*\n\nAnalyse how the writer’s **tone shifts** across the extract and evaluate how language reinforces their perspective. (4 marks)',
      hints: [
        "Split the passage at the pivot 'Of course': compare the atmosphere before and after.",
        "Examine the short sentence 'We simply listened.' and the inclusive pronoun 'We'.",
        "Unpack the scare quotes around 'creative freedom' and the biting redefinition after the dash.",
      ],
      modelAnswer:
        "The writer opens in a euphoric, reverent tone, celebrating shared presence through 'ten glorious minutes' and the stark, peaceful three-word sentence 'We simply listened.', whose inclusive pronoun unites the audience in genuine absorption. At 'Of course', the tone pivots sharply into sardonic mockery aimed at phone-obsessed concertgoers. Placing 'creative freedom' in scare quotes punctures their inflated self-importance, while the dash redefines their complaint into a petty habit ('shaky, distorted clip'), making their outrage appear absurdly hollow.",
      markScheme: [
        {
          point: "Identifies the warm/reverent/celebratory opening tone and unpacks 'We simply listened.' (brevity or inclusive 'we')",
          keywords: ["reverent", "euphoric", "celebrat", "peaceful", "inclusive", "short sentence", "presence", "genuine", "absorption"],
        },
        {
          point: "Pinpoints the tonal shift at 'Of course' into sardonic, mocking, or ironic disapproval",
          keywords: ["shift", "pivots", "sardonic", "mocking", "ironic", "scornful", "sarcastic", "derisive"],
        },
        {
          point: "Analyses the scare quotes around 'creative freedom' undermining the critics' grandiose claim",
          keywords: ["scare quotes", "quotation marks", "inverted commas", "punctures", "inflated", "undermines", "mocks"],
        },
        {
          point: "Explains the deflating effect after the dash (reducing 'creative freedom' to a trivial, unwatchable clip)",
          keywords: ["dash", "redefines", "trivial", "hollow", "absurd", "deflating", "petty", "unwatchable", "pointless"],
        },
      ],
      commonError:
        "Missing the warm/reverent first half and treating the whole extract as uniformly sarcastic.",
    },
    {
      id: "comprehension-inference-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "synthesis-summary",
      question:
        'Read two extracts on extreme adventure tourism:\n- **Text A:** *"Guiding amateurs up Everest turns a sacred peak into a queue of oxygen cylinders and litter, outsourcing risk to local Sherpas while wealthy clients buy prestige."*\n- **Text B:** *"Guided expeditions bring vital seasonal income to remote Himalayan valleys, funding village clinics and schools — provided operators enforce strict waste removal and fair wages."*\n\nWhich thesis sentence offers the **strongest conceptual synthesis**?',
      options: [
        "Text A hates Everest climbers completely, whereas Text B believes climbing Everest has zero problems at all.",
        "Both writers agree that wealthy climbers leave oxygen cylinders behind and that village clinics are expensive.",
        "While Text A condemns commercial expeditions as exploitative vanity, Text B defends their economic lifeline under strict ethical conditions.",
        "Text A focuses on Sherpas and litter in the mountains, while Text B talks about schools in remote valleys.",
      ],
      answerIndex: 2,
      hints: [
        "Read the crucial final clause of Text B carefully: 'provided operators enforce…' — Text B is NOT uncritical!",
        "Look for a thesis that captures BOTH Text A’s moral condemnation AND Text B’s *conditional* economic defence.",
        "Eliminate options that flatten Text B into blind support or stay purely literal.",
      ],
      explanation:
        "Capturing both Text A’s moral indictment ('exploitative vanity') and Text B’s conditional defence ('economic lifeline under strict ethical conditions') demonstrates sharp, nuanced synthesis.",
    },
    {
      id: "comprehension-inference-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "nonfiction-language-structure",
      marks: 4,
      question:
        'Read this closing paragraph from a speech on youth mental health:\n\n*"We measure a student’s worth in decimal points, rank them on spreadsheets, and call their exhaustion ‘resilience’. Yet ask any adult what they remember from fourteen: not a single grade boundary — only the teacher who stayed back ten minutes, the friend who shared a bench, the moment they felt seen. If we want braver young minds, stop tightening the stopwatch. Start widening the table."*\n\nAnalyse how the writer uses **language, contrast, and structural rhythm** to deliver a memorable ending. (4 marks)',
      hints: [
        "Examine the cold, mechanical semantic field at the start ('decimal points', 'spreadsheets') and ironic scare quotes ('resilience').",
        "Contrast that with the warm tricolon of human memories after the dash.",
        "Look at the final two paired imperatives — notice their antithetical verbs ('stop tightening' vs 'start widening').",
      ],
      modelAnswer:
        "The speaker opens with a clinical semantic field of quantification ('decimal points', 'spreadsheets') paired with ironic scare quotes around 'resilience', exposing how schools disguise burnout as virtue. After the pivot 'Yet', a warm tricolon of intimate human moments shifts the register from cold data to belonging, proving that empathy outlasts marks. Structurally, the speech culminates in a sharp antithesis of paired imperatives ('stop tightening' versus 'start widening'): replacing the pressured metaphor of a 'stopwatch' with the inclusive symbol of a 'table' leaves listeners with a crisp, memorable call for compassion.",
      markScheme: [
        {
          point: "Analyses the cold/mechanical semantic field ('decimal points', 'spreadsheets') or scare quotes ('resilience') exposing dehumanisation/burnout",
          keywords: ["semantic field", "clinical", "mechanical", "quantification", "scare quotes", "burnout", "dehumanis", "data", "numbers"],
        },
        {
          point: "Analyses the shift at 'Yet' into the tricolon / warm human memories valuing relationships over grades",
          keywords: ["tricolon", "rule of three", "list of three", "belonging", "empathy", "relationships", "human", "warm"],
        },
        {
          point: "Identifies the final paired imperatives / antithesis contrasting pressure with inclusion",
          keywords: ["antithesis", "imperatives", "paired", "contrast", "command", "parallel", "stop", "start"],
        },
        {
          point: "Unpacks the closing metaphors ('stopwatch' = relentless pressure vs 'table' = community/inclusion)",
          keywords: ["stopwatch", "pressure", "table", "inclusion", "inclusive", "metaphor", "symbol", "community", "compassion"],
        },
      ],
      commonError:
        "Only commenting on 'good metaphors' without analysing the semantic-field clash, the tricolon shift, or the closing antithetical imperatives.",
    },
    {
      id: "comprehension-inference-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "retrieval-vs-inference",
      question:
        'Read the extract:\n\n*"The school’s anniversary chronicle devoted twelve gleaming pages to rowing trophies, three to the newly gilded entrance gates, and a single footnote at the bottom of page forty-two to the cleaners and bus drivers who kept the campus running through two typhoons."*\n\nWhich single word (beginning with **i**) best names the literary/rhetorical effect created by the glaring mismatch between twelve pages for trophies and one footnote for essential workers?',
      answer: {
        type: "text",
        accept: ["irony", "ironic", "inequality", "injustice", "indictment"],
        display: "irony",
      },
      hints: [
        "Compare the real-world importance of people keeping a campus running in typhoons with the tiny footnote they received.",
        "When a writer exposes a stark contradiction between claimed values and actual priorities, what device is at work?",
        "It is a five-letter word starting with 'i'.",
      ],
      solution: [
        "Highlighting twelve gleaming pages for trophies against one buried footnote for typhoon heroes exposes biting **irony** (and implied institutional injustice).",
      ],
    },
    {
      id: "comprehension-inference-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "synthesis-summary",
      marks: 4,
      question:
        'Compare how these two travel writers react to **crowded historic landmarks**:\n- **Text A (1889 letter):** *"Five dozen tourists chattered across the cloister like starlings, armed with guidebooks and folding parasols; I fled into an olive grove where at least the cicadas did not mispronounce Latin."*\n- **Text B (2024 essay):** *"Yes, the piazza pulses with selfie sticks and tour flags, yet watching strangers from twelve nations marvel together under the same sunlit dome feels oddly hopeful — heritage kept alive rather than locked behind velvet ropes."*\n\n**Synthesise** how the two writers’ **attitudes and tones** toward crowds differ, embedding short micro-quotations and comparing both texts throughout. (4 marks)',
      hints: [
        "Both writers observe crowded, noisy landmarks — start by noting that shared observation before contrasting their reactions.",
        "Text A adopts a snooty, sardonic/exasperated tone (mocking tourists as 'starlings' and retreating to solitude).",
        "Text B makes a concession ('Yes… yet') and embraces a warm, egalitarian/hopeful tone celebrating shared living heritage.",
      ],
      modelAnswer:
        "Although both writers encounter noisy, bustling crowds at historic sites, their attitudes diverge sharply from elitist irritation to warm inclusivity. Text A adopts a wryly sardonic and snobbish tone, demeaning fellow visitors through the dismissive simile 'like starlings' and retreating in exasperation to mock their ignorance. Conversely, Text B begins with a realistic concession ('selfie sticks') before pivoting via 'yet' into an appreciative, hopeful tone: rather than resenting crowds, she celebrates global solidarity and living culture ('kept alive'), framing shared wonder as preferable to sterile exclusivity.",
      markScheme: [
        {
          point: "Acknowledges the shared premise (both describe noisy/crowded historic landmarks) while integrating both texts comparatively",
          keywords: ["although", "whereas", "conversely", "both", "diverge", "contrast"],
        },
        {
          point: "Pinpoints Text A's sardonic/snobbish/exasperated tone and links to a brief clue (e.g. 'like starlings', fleeing, mocking Latin)",
          keywords: ["sardonic", "snobbish", "elitist", "irritat", "exasperat", "dismissive", "starlings", "mock"],
        },
        {
          point: "Pinpoints Text B's hopeful/inclusive/appreciative tone after the concession ('Yes… yet')",
          keywords: ["hopeful", "inclusive", "appreciative", "warm", "concession", "solidarity", "egalitarian", "welcoming"],
        },
        {
          point: "Contrasts Text A's desire for private solitude/exclusivity with Text B's celebration of living, accessible heritage",
          keywords: ["solitude", "exclusiv", "living", "accessible", "shared", "culture", "sterile", "preserved"],
        },
      ],
      commonError:
        "Summarising what each writer saw ('parasols vs selfie sticks') without comparing their contrasting tones (snobbish/sardonic vs warm/inclusive) and philosophies of heritage.",
    },
  ],
};
