import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "power-conflict-short-stories-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "short-story-architecture",
      question:
        "A short story opens directly on line one with: *\"Drop the satchel now,\" ordered the guard.* What Latin structural term describes starting in the middle of the action without prior backstory?",
      answer: {
        type: "text",
        accept: ["in media res", "in medias res"],
        display: "in media res",
      },
      traps: [
        {
          spec: { type: "text", accept: ["flashback", "analepsis"] },
          feedback: "A flashback jumps backward from the present timeline; starting directly mid-action on line one uses a three-word Latin phrase.",
        },
        {
          spec: { type: "text", accept: ["exposition"] },
          feedback: "Exposition gives slow background context; this opening skips exposition to drop you straight into the conflict.",
        },
      ],
      hints: [
        "It is a three-word Latin phrase meaning 'in the middle of things'.",
        "Check Section 1 on how short stories bypass slow exposition.",
      ],
      solution: [
        "Opening directly inside an urgent command skips background exposition and plunges readers straight into conflict.",
        "This structural technique is called **in media res** (also spelled *in medias res*).",
      ],
    },
    {
      id: "power-conflict-short-stories-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "tension-pacing-syntax",
      question:
        "Read this unseen line:\n\n*The torch clicked off. Boots stopped. Silence closed in.*\n\nName the syntactic technique of placing short, stark independent clauses side by side without subordinating conjunctions.",
      answer: {
        type: "text",
        accept: ["parataxis", "paratactic", "paratactic syntax"],
        display: "parataxis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hypotaxis", "hypotactic"] },
          feedback: "Hypotaxis uses nested subordinate clauses ('while', 'because', 'although'). Look for the opposite Greek term for equal side-by-side clauses.",
        },
        {
          spec: { type: "text", accept: ["asyndeton", "asyndetic listing"] },
          feedback: "Asyndeton refers specifically to omitting conjunctions inside a list; placing separate stark sentences side by side is a different Greek syntax term.",
        },
      ],
      hints: [
        "It starts with 'para-' (beside) and contrasts with hypotaxis.",
        "Each short clause stands side by side with equal blunt weight.",
      ],
      solution: [
        "Three brief independent clauses sit side by side without subordinating conjunctions (*while, because, although*).",
        "This blunt, urgent arrangement is **parataxis**.",
      ],
    },
    {
      id: "power-conflict-short-stories-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "power-dynamics-subtext",
      question:
        "Read this unseen exchange:\n\n*\"Did you unlock the archive?\"*\n*\"I was polishing the brass rail all afternoon, Sir,\" Owen replied calmly, tucking the cold key deeper into his sleeve.*\n\nWhat literary concept best captures the gap between Owen's polite words and his concealed key?",
      options: [
        "Pathetic fallacy aligning room temperature with gentle regret",
        "Subtext and concealed defiance hidden beneath outward compliance",
        "Cyclical resolution ending an argument through open honesty",
        "Polysyndeton accelerating the rhythm of formal courtroom speech",
      ],
      answerIndex: 1,
      hints: [
        "Compare what Owen says aloud with what he secretly hides up his sleeve.",
        "What term describes unspoken meaning operating beneath surface dialogue?",
      ],
      explanation:
        "Owen maintains polite deference (*'Sir'*, calm tone) while concealing the very key that proves his rebellion — classic **subtext** and hidden defiance beneath apparent obedience.",
    },
    {
      id: "power-conflict-short-stories-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "short-story-architecture",
      question:
        "On Freytag's Pyramid, what is the name of the **final stage** that follows the climax and settles (or deliberately unsettles) the aftermath?",
      answer: {
        type: "text",
        accept: ["denouement", "dénouement", "resolution"],
        display: "denouement",
      },
      traps: [
        {
          spec: { type: "text", accept: ["exposition"] },
          feedback: "Exposition is the opening stage at the start of the pyramid, not the closing stage after the climax.",
        },
        {
          spec: { type: "text", accept: ["inciting incident"] },
          feedback: "The inciting incident launches the conflict near the start, not after the climax.",
        },
      ],
      hints: [
        "It is a French literary term meaning 'untying the knot' (or its English equivalent starting with R).",
        "Recall the five stages: Exposition → Inciting Incident → Rising Action → Climax → ___.",
      ],
      solution: [
        "The five stages of Freytag's Pyramid finish with the **denouement** (or *resolution*).",
        "In short stories, the denouement is often razor-brief so a twist or epiphany lands sharply.",
      ],
    },
    {
      id: "power-conflict-short-stories-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "power-dynamics-subtext",
      question:
        "Read this unseen command:\n\n*\"Stand straight. Empty your pockets. Leave the letter on the bench.\"*\n\nWhat grammatical term describes verb forms like *Stand*, *Empty*, and *Leave* used to issue direct commands?",
      answer: {
        type: "text",
        accept: ["imperative", "imperatives", "imperative verb", "imperative verbs", "imperative mood"],
        display: "imperative",
      },
      traps: [
        {
          spec: { type: "text", accept: ["interrogative", "interrogatives"] },
          feedback: "Interrogatives ask questions; commands use a different grammatical mood.",
        },
        {
          spec: { type: "text", accept: ["declarative", "declaratives"] },
          feedback: "Declaratives state facts; these verbs issue direct orders.",
        },
      ],
      hints: [
        "Think of the grammatical mood associated with giving orders or instructions.",
        "It starts with 'imp-' (related to 'imperial' / command).",
      ],
      solution: [
        "Commands such as *Stand*, *Empty*, and *Leave* are **imperative** verbs (imperative mood).",
        "Stringing three bare imperatives together strips away politeness and asserts unchallenged control.",
      ],
    },
    {
      id: "power-conflict-short-stories-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "tension-pacing-syntax",
      question:
        "Read this unseen line:\n\n*Keys, boots, bolted doors, clipped orders closed around the hallway.*\n\nWhich listing device accelerates the sense of threat here?",
      options: [
        "Asyndetic listing removing conjunctions for brisk sensory overload",
        "Polysyndetic listing repeating 'and' to stretch out slow fatigue",
        "Rhetorical questioning inviting the reader to weigh moral choices",
        "Anaphora echoing a comforting greeting at the start of each clause",
      ],
      answerIndex: 0,
      hints: [
        "Check whether conjunctions like 'and' or 'or' appear between the listed items.",
        "Notice how rapidly the four harsh images collide.",
      ],
      explanation:
        "Omitting conjunctions creates **asyndetic listing**, piling instruments of authority together without pause so the space feels immediately suffocating.",
    },
    {
      id: "power-conflict-short-stories-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "short-story-architecture",
      question:
        "What two-word literary principle — named after a Russian playwright — states that a noticeable object planted in paragraph one (such as a brass key or rusted whistle) should pay off structurally later in the story?",
      answer: {
        type: "text",
        accept: ["chekhov's gun", "chekhovs gun", "chekov's gun", "chekovs gun"],
        display: "Chekhov's Gun",
      },
      traps: [
        {
          spec: { type: "text", accept: ["freytag's pyramid", "freytags pyramid"] },
          feedback: "Freytag's Pyramid maps the five narrative stages; look for the principle about an early detail returning to fire later.",
        },
      ],
      hints: [
        "The Russian writer warned that if a rifle hangs on the wall in Act 1, it must go off before the play ends.",
        "Two words: [Playwright's surname]'s [weapon].",
      ],
      solution: [
        "Anton Chekhov's famous rule of narrative economy is **Chekhov's Gun**.",
        "In short stories, spotting prominent opening objects often predicts the climax or ironic reversal.",
      ],
    },
    {
      id: "power-conflict-short-stories-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "close-reading-prose",
      question:
        "Read this sentence from an unseen extract:\n\n*The prefect snapped the register shut with the crisp finality of a trap.*\n\nWhich analytical sentence avoids feature-spotting and demonstrates strong single-word zoom?",
      options: [
        "The writer uses a good simile about a trap to make the prefect seem quite scary.",
        "The verb 'snapped' and noun 'trap' cast school authority as predatory capture.",
        "This quotation makes the reader picture a register closing and want to read on.",
        "First the prefect closes his book and then everyone feels very nervous in class.",
      ],
      answerIndex: 1,
      hints: [
        "Reject vague filler ('makes the reader want to read on', 'quite scary') and plot summary ('First... then...').",
        "Look for embedded micro-quotes paired with precise connotations about authority.",
      ],
      explanation:
        "Zooming in on *'snapped'* and *'trap'* links crisp auditory violence and hunting connotations directly to the theme of institutional intimidation, avoiding generic filler.",
    },
    {
      id: "power-conflict-short-stories-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "tension-pacing-syntax",
      marks: 3,
      question:
        "Read this unseen extract:\n\n*For half an hour the courtyard stayed warm and drowsy, bees humming lazily among the terracotta pots while the iron gate stood unlatched. Then boots struck the cobbles. Three knocks. Silence.*\n\nExplain how the writer uses **syntax contrast** and **pacing** to build sudden tension. (3 marks)",
      hints: [
        "Compare the length and rhythm of sentence one against the final three short beats.",
        "Name a specific syntactic feature such as minor sentences or parataxis.",
        "Explain the emotional effect of shattering calm normality so abruptly.",
      ],
      modelAnswer:
        "Initially, the writer lulls the reader with a slow, expansive hypotactic sentence filled with warm sensory calm ('bees humming lazily'), establishing peaceful stillness. This is abruptly ruptured by stark parataxis and minor sentences ('Three knocks. Silence.'), whose jagged rhythm fractures the flow of time. By contrasting leisurely syntax with abrupt fragments, the writer jolts the reader into sudden dread and hyper-vigilant suspense as intrusion shatters domestic safety.",
      markScheme: [
        {
          point: "Identifies the slow, expansive opening syntax creating calm or peace before the threat.",
          keywords: ["hypotac", "long", "calm", "peace", "lull", "expansive", "slow"],
        },
        {
          point: "Names and quotes the abrupt syntactic shift (parataxis, minor sentences, or fragments).",
          keywords: ["paratax", "minor", "fragment", "abrupt", "rupture", "jagged"],
        },
        {
          point: "Explains the precise reader effect of the contrast (shock, dread, shattered safety, hyper-vigilance).",
          keywords: ["contrast", "jolt", "dread", "shatter", "intrusion", "vigilant", "shock"],
        },
      ],
    },
    {
      id: "power-conflict-short-stories-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "power-dynamics-subtext",
      marks: 3,
      question:
        "Read this unseen exchange:\n\n*\"I only wanted to ask about the ration cards—\"*\n*\"Tea is getting cold, dear,\" the officer smiled, tapping his wristwatch once. \"Let's not spoil a pleasant afternoon with complaints.\"*\n\nAnalyse how the writer reveals an unequal balance of control through **dialogue subtext**. (3 marks)",
      hints: [
        "Notice the dash cutting off the first speaker mid-sentence.",
        "Look at the officer's condescending form of address ('dear'), polite distraction ('Tea'), and subtle physical gesture ('tapping his wristwatch').",
        "Explain what the polite dismissal really threatens beneath the surface.",
      ],
      modelAnswer:
        "The officer asserts immediate dominance through an abrupt interruption (marked by the em-dash), denying the citizen space to finish a tentative request ('only wanted'). By calling her 'dear' and pivoting casually to 'Tea', he weaponises domestic politeness and patronising address to belittle a serious grievance. Finally, tapping his wristwatch signals impatient control over her time, turning 'Let's not spoil a pleasant afternoon' into veiled coercion that silences dissent without shouting.",
      markScheme: [
        {
          point: "Identifies the interruption (em-dash) or the subordinate's tentative hedging ('only').",
          keywords: ["interrupt", "dash", "tentative", "hedg", "silenc", "cut off"],
        },
        {
          point: "Analyses the officer's patronising address ('dear') or weaponised domestic politeness ('Tea', 'pleasant').",
          keywords: ["patronis", "polite", "belittle", "trivial", "condescend", "domestic"],
        },
        {
          point: "Explains the veiled threat/coercion implied by tapping the wristwatch or dismissing complaints.",
          keywords: ["coerci", "veiled", "threat", "impatient", "dismiss", "dissent", "dominan"],
        },
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Architecture, Pacing & Dialogue Craft (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "power-conflict-short-stories-p1",
      title: "Practice Paper 1 — Story Craft, Pacing & Subtext",
      questions: [
        {
          id: "power-conflict-short-stories-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "short-story-architecture",
          question:
            "What term describes the short-story principle of compressing prose so that every single object, gesture, and line serves character, tension, or theme with zero wasted words?",
          answer: {
            type: "text",
            accept: ["narrative economy", "economy of detail", "economy"],
            display: "narrative economy",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathetic fallacy"] },
              feedback: "Pathetic fallacy links weather to emotion; look for the two-word craft term meaning zero wasted detail.",
            },
          ],
          hints: [
            "Two words: the first means 'storytelling' and the second means avoiding waste.",
            "Short stories rely on this discipline because they have far fewer pages than novels.",
          ],
          solution: [
            "In short fiction, every detail must carry multiple layers of meaning — setting mood, character, and theme simultaneously.",
            "This craft discipline is called **narrative economy**.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "short-story-architecture",
          question:
            "A short story opens with a servant unlocking an iron courtyard gate at dawn and ends with a newly hired servant unlocking the same iron gate at dawn. What two-word structural pattern shapes this narrative?",
          answer: {
            type: "text",
            accept: ["cyclical structure", "circular structure", "cyclical ending", "circular ending", "cyclical"],
            display: "cyclical structure",
          },
          traps: [
            {
              spec: { type: "text", accept: ["linear structure", "linear"] },
              feedback: "Linear structure moves straight forward without looping back; here the ending deliberately mirrors the opening.",
            },
          ],
          hints: [
            "Notice how the ending loops back to echo the exact opening image.",
            "Think of a circle or cycle repeating endlessly.",
          ],
          solution: [
            "Returning to the opening motif or image at the end creates a **cyclical structure** (or circular structure).",
            "In power-and-conflict stories, cyclical structure often suggests entrapment or unchanging systems of control.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "short-story-architecture",
          question:
            "What literary term names a sudden flash of painful moral or personal insight near the end of a short story (as seen in the *example story* *The Necklace* when Mathilde learns the lost jewels were fake)?",
          answer: {
            type: "text",
            accept: ["epiphany", "an epiphany"],
            display: "epiphany",
          },
          traps: [
            {
              spec: { type: "text", accept: ["exposition"] },
              feedback: "Exposition introduces background at the start; look for the Greek-derived word meaning a sudden revelation or realisation.",
            },
          ],
          hints: [
            "It is an eight-letter noun starting with 'e' meaning a sudden life-altering realisation.",
            "It often replaces a lengthy falling action in literary short stories.",
          ],
          solution: [
            "A sudden moment of sharp realisation that reframes prior events is an **epiphany**.",
            "In short fiction, an epiphany delivers emotional closure (or shock) in just a few closing lines.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          question:
            "Read this unseen sentence:\n\n*Although the stairwell smelled of damp lime and although he knew the patrol changed shifts every hour, Tariq waited until the footsteps faded before touching the latch.*\n\nWhat Greek-derived syntax term describes building a long, layered sentence out of nested subordinate clauses (*although... before...*)?",
          answer: {
            type: "text",
            accept: ["hypotaxis", "hypotactic", "hypotactic syntax"],
            display: "hypotaxis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["parataxis", "paratactic"] },
              feedback: "Parataxis places short independent clauses side by side without subordinators; here nested subordinators ('although', 'before') link the clauses.",
            },
          ],
          hints: [
            "It is the direct opposite of parataxis, beginning with 'hypo-' (under / subordinated).",
            "Subordinating conjunctions ('although', 'while', 'because') are its signature clue.",
          ],
          solution: [
            "Nesting subordinate clauses (*Although... and although... before...*) under one main clause is **hypotaxis**.",
            "Writers use hypotaxis to slow narrative time, stretch suspense, or mirror obsessive tension.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          question:
            "Read this unseen excerpt:\n\n*The searchlight swept the alley. Then — silence. Heavy boots. Closer now.*\n\nWhat grammatical term names deliberate, incomplete verbless chunks like *\"Heavy boots.\"* and *\"Closer now.\"*?",
          answer: {
            type: "text",
            accept: ["minor sentence", "minor sentences", "sentence fragment", "sentence fragments", "fragment", "fragments"],
            display: "minor sentence",
          },
          traps: [
            {
              spec: { type: "text", accept: ["complex sentence", "complex sentences"] },
              feedback: "Complex sentences combine a main clause with a subordinate clause; these chunks lack a main verb altogether.",
            },
            {
              spec: { type: "text", accept: ["compound sentence", "compound sentences"] },
              feedback: "Compound sentences join two full independent clauses; these are intentionally clipped fragments.",
            },
          ],
          hints: [
            "Look at whether 'Heavy boots.' contains a finite main verb.",
            "Two common accepted terms: '___ sentence' (opposite of major) or 'sentence ___'.",
          ],
          solution: [
            "Deliberately incomplete clauses without a main verb are **minor sentences** (or *sentence fragments*).",
            "They mimic fractured attention, gasping breath, or panic when danger closes in.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          question:
            "Read this unseen sentence:\n\n*The refugees carried bundles and blankets and tin kettles and silent children across the muddy bridge.*\n\nWhat term describes repeating the conjunction *and* between every item in a list to stretch rhythm and convey weary weight?",
          answer: {
            type: "text",
            accept: ["polysyndeton", "polysyndetic listing", "polysyndetic list", "polysyndetic"],
            display: "polysyndeton",
          },
          traps: [
            {
              spec: { type: "text", accept: ["asyndeton", "asyndetic", "asyndetic listing"] },
              feedback: "Asyndeton removes conjunctions; repeating 'and' uses the Greek prefix 'poly-' (many).",
            },
          ],
          hints: [
            "Start with the Greek prefix meaning 'many' ('poly-') plus '-syndeton' (bound together).",
            "Contrast it with asyndeton, which omits conjunctions completely.",
          ],
          solution: [
            "Repeating *'and'* between every element is **polysyndeton** (polysyndetic listing).",
            "Each repeated conjunction slows the cadence, mirroring the exhausting weight of displacement.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          question:
            "Read this unseen extract:\n\n*High above the city, dusk gilded the clocktower spire. Inside cell twelve, Maya watched a single drop of rust water slide down the hinge and fall onto her wrist.*\n\nHow does the writer's **focal shift** amplify conflict here?",
          options: [
            "It contrasts serene open freedom above with claustrophobic entrapment below",
            "It proves the city clocktower is leaking rainwater directly into Maya's room",
            "It speeds up the story by skipping straight to Maya's joyful release",
            "It uses humorous exaggeration to mock the design of historic city towers",
          ],
          answerIndex: 0,
          hints: [
            "Compare the scale and warmth of 'gilded... clocktower spire' with 'cell twelve' and 'rust water'.",
            "Think about moving from a wide open exterior to a suffocating close-up.",
          ],
          explanation:
            "Cutting from gilded open heights straight into a cramped cell and one drop of rust water creates sharp **spatial contrast and focal zoom**, magnifying Maya's isolation and sensory confinement.",
        },
        {
          id: "power-conflict-short-stories-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "power-dynamics-subtext",
          question:
            "Read this unseen dialogue:\n\n*\"I think there may be a mistake in the rent ledger—\"*\n*\"There is no mistake, Mrs Patel. Sign at the bottom.\"*\n\nWhat specific punctuation mark (`—`) visually signals that the speaker has been cut off mid-sentence by a dominant figure?",
          answer: {
            type: "text",
            accept: ["dash", "em-dash", "em dash", "a dash", "an em-dash", "an em dash"],
            display: "em-dash",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ellipsis", "ellipses"] },
              feedback: "An ellipsis (...) shows a speaker trailing off uncertainly on their own; an abrupt external interruption uses a single horizontal line.",
            },
            {
              spec: { type: "text", accept: ["semicolon", "semi-colon"] },
              feedback: "A semicolon links two related independent clauses; cutting off spoken dialogue uses a dash.",
            },
          ],
          hints: [
            "Distinguish trailing off ('...') from being abruptly cut off ('—').",
            "It is a crisp horizontal stroke at the end of Mrs Patel's unfinished speech.",
          ],
          solution: [
            "An **em-dash** (or *dash*) at the end of spoken dialogue marks an abrupt **interruption**, visually showing one speaker silencing another.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "power-dynamics-subtext",
          question:
            "What single literary word describes the unspoken threat, hidden resentment, or real emotional struggle operating beneath polite surface dialogue?",
          answer: {
            type: "text",
            accept: ["subtext"],
            display: "subtext",
          },
          traps: [
            {
              spec: { type: "text", accept: ["context"] },
              feedback: "Context refers to historical or social background around a text; look for the word meaning meaning 'under' the spoken text.",
            },
          ],
          hints: [
            "Think of the prefix 'sub-' (beneath) attached to 'text'.",
            "It sits below the surface of the iceberg diagram in Section 3.",
          ],
          solution: [
            "Meaning operating beneath surface dialogue is **subtext**.",
            "In power-and-conflict stories, polite phrases like *'Let's be sensible'* carry heavy coercive subtext.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "power-dynamics-subtext",
          question:
            "Read this unseen line:\n\n*\"Perhaps you might consider, if it isn't too much trouble, returning my brother's bicycle,\" Hannah whispered.*\n\nHow do the **modal verbs and hedges** (*'Perhaps'*, *'might'*, *'if it isn't too much trouble'*) characterise Hannah's position?",
        options: [
            "They reveal aggressive arrogance as Hannah tries to intimidate her listener",
            "They expose cautious subordination, showing she fears provoking retaliation",
            "They prove Hannah is uncertain whether her brother ever owned a bicycle",
            "They speed up dialogue rhythm to simulate an explosive public argument",
          ],
          answerIndex: 1,
          hints: [
            "Notice how many polite cushions Hannah places before making a simple, rightful request.",
            "Pair those hedges with the quiet speech verb 'whispered'.",
          ],
          explanation:
            "Stacking softening hedges (*'Perhaps'*, *'might'*, *'if it isn't too much trouble'*) alongside *'whispered'* exposes a sharp power imbalance: Hannah must apologise simply for asking back what belongs to her family.",
        },
        {
          id: "power-conflict-short-stories-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "close-reading-prose",
          question:
            "What analytical strategy (2–3 words) asks you to swap a writer's vivid verb (e.g., *barked* or *clutched*) for a neutral synonym (*said* or *held*) so you can see exactly which connotations disappear?",
          answer: {
            type: "text",
            accept: ["substitution test", "the substitution test"],
            display: "the Substitution Test",
          },
          traps: [
            {
              spec: { type: "text", accept: ["single-word zoom", "word zoom"] },
              feedback: "Single-word zoom is the final analysis you write; what is the quick diagnostic 'test' that swaps one word for a plain synonym?",
            },
          ],
          hints: [
            "It involves substituting a neutral everyday word for the writer's chosen word.",
            "Two words (or three with 'the'): the ___ Test.",
          ],
          solution: [
            "Replacing a loaded word with a plain synonym to isolate its lost connotations is **the Substitution Test**.",
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "short-story-architecture",
          marks: 3,
          question:
            "Read this unseen opening:\n\n*\"No lanterns after curfew,\" the crier's bell tolled down the lane. Upstairs, beneath three woollen blankets, Dev struck a single match and held it inches from the forbidden map.*\n\nAnalyse how the writer uses **short-story architecture** and **contrast** to establish conflict right from the opening. (3 marks)",
          hints: [
            "Identify how the story starts without slow background exposition.",
            "Contrast the public sound outside ('crier's bell', imperative curfew) with Dev's hidden interior space.",
            "Explain how the 'forbidden map' and 'single match' foreshadow rising tension.",
          ],
          modelAnswer:
            "The writer plunges the reader in media res with a stark public prohibition ('No lanterns after curfew'), compressing political oppression into four words while the verb 'tolled' adds ominous, funereal menace. Shifting immediately upstairs beneath 'three woollen blankets' builds claustrophobic spatial contrast between public enforcement and secret defiance. Finally, the 'single match' illuminating a 'forbidden map' functions as Chekhov's Gun, combining fragile light with dangerous disobedience to foreshadow imminent discovery.",
          markScheme: [
            {
              point: "Recognises the in media res opening or compressed exposition establishing immediate authority.",
              keywords: ["in media", "compress", "prohibition", "curfew", "econom", "tolled", "immediate"],
            },
            {
              point: "Analyses the contrast between public enforcement outside and hidden domestic secrecy upstairs.",
              keywords: ["public", "secret", "hidden", "claustrophob", "defian", "blankets", "spatial"],
            },
            {
              point: "Identifies the map or single match as foreshadowing / Chekhov's Gun showing fragile risk.",
              keywords: ["chekhov", "foreshadow", "fragile", "discovery", "risk", "disobedien", "rebel"],
            },
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          marks: 3,
          question:
            "Read this unseen extract:\n\n*The corridor stretched ahead like a grey tunnel, silent except for the hum of fluorescent tubes. Then the lift chimed. Door sliding. Heavy heels on tile. Closer. Right outside Room 9.*\n\nExplain how the writer manipulates **sentence length** and **sensory focus** to create claustrophobic suspense. (3 marks)",
          hints: [
            "Contrast the long opening simile with the clipped rhythm that follows 'Then'.",
            "Name the grammatical type of 'Door sliding.' and 'Closer.'",
            "Explain how the shift to auditory cues mimics being trapped inside Room 9.",
          ],
          modelAnswer:
            "The opening simile ('like a grey tunnel') uses measured, longer syntax to establish sterile isolation and narrow the setting before the threat arrives. Once the lift chimes, the writer switches abruptly to minor sentences and parataxis ('Door sliding. Heavy heels on tile. Closer.'), accelerating the tempo like a racing pulse. Restricting perception to approaching footsteps outside 'Room 9' traps the reader in blind auditory dread, heightening claustrophobia as escape routes vanish.",
          markScheme: [
            {
              point: "Explains how the opening simile/longer sentence creates sterile isolation or quiet baseline.",
              keywords: ["simile", "tunnel", "sterile", "isolat", "longer", "baseline", "narrow"],
            },
            {
              point: "Identifies the shift to parataxis or minor sentences/fragments and links it to accelerating pulse/panic.",
              keywords: ["paratax", "minor", "fragment", "accelerat", "pulse", "tempo", "abrupt"],
            },
            {
              point: "Analyses auditory focus (footsteps approaching) creating trapped dread or disappearing escape.",
              keywords: ["auditory", "sound", "trap", "dread", "blind", "approach", "escape"],
            },
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "power-dynamics-subtext",
          marks: 4,
          question:
            "Read this unseen dialogue:\n\n*\"You seem upset about the boundary fence, Mr Lin,\" the developer said smoothly, adjusting his silver cufflinks. \"It would be a shame if your irrigation permit were delayed another season.\"*\n*Mr Lin set his shovel upright between them like a spear. \"My permit has stood for forty years, Mr Crane. Look at the seal yourself.\"*\n\nHow does the writer present **competing forms of power** across this exchange? (4 marks)",
          hints: [
            "Analyse the developer's icy composure ('smoothly', 'silver cufflinks') and polite veiled threat ('would be a shame').",
            "Zoom in on the physical barrier and martial simile of Mr Lin's shovel ('like a spear').",
            "Explain how Mr Lin's imperative ('Look at the seal yourself') and forty-year claim shift the power dynamic.",
          ],
          modelAnswer:
            "Initially, Mr Crane performs effortless wealth and bureaucratic coercion: the adverb 'smoothly' and casual grooming of 'silver cufflinks' signal calm superiority, while his euphemistic subtext ('would be a shame if... delayed') disguises economic blackmail as polite concern. However, Mr Lin refuses subordination through a sharp physical counter-move, planting his shovel 'like a spear'—a martial simile that transforms an everyday farming tool into an emblem of defensive resistance. By invoking forty years of lawful legitimacy and issuing a direct imperative ('Look at the seal yourself'), Mr Lin seizes conversational control, pitting grounded moral tenacity against arrogant commercial privilege.",
          markScheme: [
            {
              point: "Analyses Mr Crane's composed, wealthy dominance ('smoothly' or 'silver cufflinks').",
              keywords: ["wealth", "cufflink", "smoothly", "superior", "arrogant", "privilege", "composure"],
            },
            {
              point: "Unpacks the veiled economic threat / coercive subtext in 'would be a shame' or 'delayed'.",
              keywords: ["veiled", "subtext", "coerci", "blackmail", "threat", "euphem", "polite"],
            },
            {
              point: "Analyses the martial simile 'like a spear' transforming an ordinary tool into physical defiance.",
              keywords: ["spear", "martial", "weapon", "defian", "resistan", "barrier", "simile"],
            },
            {
              point: "Tracks the power shift via Mr Lin's imperative ('Look') or forty-year moral legitimacy.",
              keywords: ["imperative", "shift", "revers", "legitima", "command", "seize", "moral"],
            },
          ],
        },
        {
          id: "power-conflict-short-stories-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "close-reading-prose",
          marks: 4,
          question:
            "Read this unseen closing extract:\n\n*The magistrate folded his robes and stepped into his waiting carriage without glancing back. Left alone in the courtyard, Elena picked up the torn petition from the puddle, smoothed the soaked paper across her knee, and began copying every single name onto a clean sheet.*\n\nWrite a structured **WHAT–HOW–WHY** response analysing how the writer ends the story on a shift from **institutional indifference** to **quiet resilience**. (4 marks)",
          hints: [
            "Open with a conceptual WHAT claim comparing the magistrate's departure with Elena's response.",
            "Embed micro-quotations analysing 'without glancing back' and 'torn petition from the puddle'.",
            "Zoom into the active verbs 'smoothed' and 'copying' + the symbolic contrast of the 'clean sheet'.",
          ],
          modelAnswer:
            "At the close of the extract, the writer contrasts cold institutional dismissal with stubborn grassroots perseverance. The magistrate's departure 'without glancing back' implies complete detachment, treating citizens' grievances as disposable once ceremony ends, reinforced by the degrading image of the 'torn petition' abandoned in a 'puddle'. Yet the structural pivot to Elena reverses despair into quiet resolve: the careful tactile verb 'smoothed' suggests patient dignity, while immediately 'copying every single name' onto a 'clean sheet' symbolises renewal and refusal to let individual voices be erased. Arguably, this ending implies that while official power can tear paper, it cannot extinguish collective memory or moral resistance.",
          markScheme: [
            {
              point: "Makes a clear conceptual claim contrasting official indifference with Elena's persistence.",
              keywords: ["dismiss", "detach", "indifferen", "persever", "resolve", "contrast"],
            },
            {
              point: "Analyses embedded evidence of institutional callousness ('without glancing back' or 'torn'/'puddle').",
              keywords: ["glancing", "puddle", "torn", "dispos", "degrad", "ceremony"],
            },
            {
              point: "Zooms into Elena's active verbs ('smoothed' / 'copying') or the symbolism of the 'clean sheet'.",
              keywords: ["smoothed", "copying", "clean sheet", "renewal", "dignity", "symbol"],
            },
            {
              point: "Uses tentative evaluative reasoning ('arguably'/'implies') linking the ending to a wider theme of power.",
              keywords: ["arguably", "implies", "suggests", "erased", "memory", "extinguish", "collective"],
            },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Unseen Prose Extracts & Analytical Precision (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "power-conflict-short-stories-p2",
      title: "Practice Paper 2 — Unseen Extracts & Analytical Precision",
      questions: [
        {
          id: "power-conflict-short-stories-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "short-story-architecture",
          question:
            "On Freytag's Pyramid, what is the name of the **single irreversible turning point** where tension reaches its highest peak?",
          answer: {
            type: "text",
            accept: ["climax", "the climax"],
            display: "climax",
          },
          traps: [
            {
              spec: { type: "text", accept: ["rising action"] },
              feedback: "Rising action builds tension upward toward the peak; name the highest peak itself.",
            },
            {
              spec: { type: "text", accept: ["denouement", "resolution"] },
              feedback: "The denouement follows after the peak to show the aftermath.",
            },
          ],
          hints: [
            "It sits at the apex of Freytag's Pyramid, right before the denouement.",
            "A six-letter word starting with 'c'.",
          ],
          solution: [
            "The highest turning point of tension on Freytag's Pyramid is the **climax**.",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "close-reading-prose",
          question:
            "In our timed close-reading framework, what **three-word framework** (three question words) structures a top-band analytical paragraph: Concept → Embedded Method & Zoom → Reader Effect?",
          answer: {
            type: "text",
            accept: ["what how why", "what-how-why", "what–how–why", "what, how, why"],
            display: "WHAT–HOW–WHY",
          },
          traps: [
            {
              spec: { type: "text", accept: ["who what where", "who where when"] },
              feedback: "Those are plot-summary questions; analytical paragraphs ask about idea, writer's craft, and effect.",
            },
          ],
          hints: [
            "Three question words: the writer's idea (___), the writer's method (___), and the effect on the reader (___).",
            "Think of the three-part paragraph engine in Section 4.",
          ],
          solution: [
            "Top-band Year 9 English analytical paragraphs follow **WHAT–HOW–WHY** (Idea → Method & Micro-Zoom → Effect & Deeper Layer).",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          question:
            "Read this unseen line:\n\n*Whistles, sirens, slammed shutters, running boots filled the street.*\n\nWhat term describes omitting conjunctions (*and*) between items in a list to create rapid sensory overload?",
          answer: {
            type: "text",
            accept: ["asyndeton", "asyndetic listing", "asyndetic list", "asyndetic"],
            display: "asyndeton",
          },
          traps: [
            {
              spec: { type: "text", accept: ["polysyndeton", "polysyndetic"] },
              feedback: "Polysyndeton repeats 'and' between every item; stripping conjunctions out starts with the prefix 'a-' (without).",
            },
          ],
          hints: [
            "It uses the Greek negative prefix 'a-' (without) + '-syndeton' (joining words).",
            "Notice there is not a single 'and' inside the four-item list.",
          ],
          solution: [
            "Omitting conjunctions inside a list is **asyndeton** (asyndetic listing), making threats collide breathlessly.",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "power-dynamics-subtext",
          question:
            "Read this unseen line:\n\n*\"I was only wondering if... perhaps... we could talk later...\"*\n\nWhat punctuation mark (`...`) signals that a nervous or subordinate speaker is trailing off in hesitation?",
          answer: {
            type: "text",
            accept: ["ellipsis", "ellipses", "an ellipsis"],
            display: "ellipsis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dash", "em-dash", "em dash"] },
              feedback: "A dash marks an abrupt cut-off or interruption; three dots showing faltering hesitation have a different name.",
            },
          ],
          hints: [
            "It consists of three consecutive dots showing faltering speech.",
            "Starts with 'ell-' (derived from the Greek for 'omission').",
          ],
          solution: [
            "Three dots marking fading, hesitant speech are an **ellipsis**.",
            "In power-and-conflict dialogue, ellipses often convey intimidation or self-censorship.",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "close-reading-prose",
          question:
            "Read this sentence from an unseen extract:\n\n*Iron padlocks, rusted bars, chalk tally marks, and cold stone lined the narrow passage.*\n\nWhat two-word literary term describes a deliberate group of words linked by a shared theme (here: imprisonment and harshness)?",
          answer: {
            type: "text",
            accept: ["semantic field", "lexical field", "a semantic field", "a lexical field"],
            display: "semantic field",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pathetic fallacy"] },
              feedback: "Pathetic fallacy projects human mood onto weather/nature; a cluster of thematically linked vocabulary has a different two-word name.",
            },
          ],
          hints: [
            "Two words: '___ field' (meaning a family of words sharing a common domain of meaning).",
            "Think of how words like 'padlocks', 'bars', and 'tally marks' cluster around one concept.",
          ],
          solution: [
            "A group of words united by a shared domain of meaning is a **semantic field** (or *lexical field*).",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "short-story-architecture",
          question:
            "Read this unseen micro-extract:\n\n*Every evening, the governor boasted that no whisper escaped his stone palace. Yet on the roof tiles directly above his chandelier, three pigeons settled with folded notes tied neatly to their ankles.*\n\nWhich literary device creates the sharpest tension between the two sentences?",
          options: [
            "Dramatic irony exposing the ruler's blind hubris above his own head",
            "Pathetic fallacy linking evening darkness to the pigeons' mild hunger",
            "Polysyndetic rhythm speeding up the governor's boastful banquet speech",
            "Stream of consciousness drifting randomly between unrelated bird facts",
          ],
          answerIndex: 0,
          hints: [
            "Ask: what does the reader know that the boasting governor completely fails to notice?",
            "Look at the irony of 'no whisper escaped' right beneath hidden carrier messages.",
          ],
          explanation:
            "The reader sees secret rebellion happening literally above the boasting governor's head — textbook **dramatic irony** that punctures authoritarian hubris with sharp narrative economy.",
        },
        {
          id: "power-conflict-short-stories-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          question:
            "Read this unseen extract and count the number of words in the **shortest sentence** (the deliberate pacing drop):\n\n*Across the quiet valley, the bells rang slowly for evening curfew while farmers latched their timber shutters. Then the engines roared. Run.*\n\nType the exact number of words in the shortest sentence.",
          answer: {
            type: "number",
            value: 1,
            display: "1",
          },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "'Then the engines roared.' has 4 words — look one sentence further for the ultimate abrupt pacing drop!",
            },
          ],
          hints: [
            "Look at the very final punctuated sentence of the extract.",
            "Notice how sentence length collapses from 17 words → 4 words → ___ word.",
          ],
          solution: [
            "Sentence lengths step down sharply: 17 words (*Across... shutters.*) → 4 words (*Then the engines roared.*) → **1** word (*Run.*).",
            "That final one-word imperative delivers maximum kinetic shock.",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "tension-pacing-syntax",
          question:
            "What narrative suspense technique deliberately holds back a crucial fact (such as who is knocking or what is inside a locked chest) so tension builds in the gap between curiosity and revelation?",
          answer: {
            type: "text",
            accept: ["withholding", "withholding information", "delayed reveal", "delayed revelation"],
            display: "withholding",
          },
          traps: [
            {
              spec: { type: "text", accept: ["foreshadowing"] },
              feedback: "Foreshadowing plants early clues; keeping crucial facts hidden from the reader until a late reveal has a more specific name.",
            },
          ],
          hints: [
            "It literally means keeping information back from the reader on purpose.",
            "In Section 2, we paired it with Edgar Allan Poe's *example story* *The Tell-Tale Heart*.",
          ],
          solution: [
            "Deliberately keeping back crucial information to intensify suspense is **withholding** (or *delayed reveal*).",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "power-dynamics-subtext",
          question:
            "Read this unseen line:\n\n*\"Your recent enthusiasm for asking questions has been noted, miss,\" the clerk murmured without looking up.*\n\nWhat term describes polite, softened phrasing (*'enthusiasm for asking questions'*) used to disguise an unpleasant accusation or warning?",
          answer: {
            type: "text",
            accept: ["euphemism", "a euphemism"],
            display: "euphemism",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hyperbole"] },
              feedback: "Hyperbole exaggerates wildly; softening a harsh accusation into polite institutional phrasing uses a different Greek term.",
            },
          ],
          hints: [
            "Starts with 'eu-' (meaning 'good' or 'pleasant' speech) to mask something harsh.",
            "Bureaucrats and oppressive figures frequently use it to make threats sound harmless.",
          ],
          solution: [
            "Disguising a harsh threat or accusation in polite, softened phrasing is a **euphemism**.",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "close-reading-prose",
          question:
            "Read this unseen sentence:\n\n*The colonel's medals chimed softly against his chest like tiny silver locks.*\n\nWhich analytical observation best unpacks this **simile**?",
          options: [
            "Comparing medals to 'locks' links military prestige with rigid confinement and secrecy",
            "The word 'silver' proves the colonel was wealthier than every soldier in the barracks",
            "This simile helps the reader hear loud metallic music playing across the parade ground",
            "Using 'like' creates a bright simile that makes the paragraph sound more poetic",
          ],
          answerIndex: 0,
          hints: [
            "Ask: what literal qualities do 'locks' have (shutting things in, barring access, cold metal), and what does that reveal about military honour?",
            "Reject generic answers ('makes it sound poetic') or literal misreadings ('loud metallic music').",
          ],
          explanation:
            "Comparing honours (*'medals'*) to *'tiny silver locks'* creates unsettling irony: the emblems of official power resemble instruments of imprisonment, suggesting his authority encloses both others and his own conscience.",
        },
        {
          id: "power-conflict-short-stories-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "close-reading-prose",
          question:
            "What one-word literary device places two contrasting images, tones, or worlds directly side by side (e.g., a velvet banquet hall beside a freezing prison yard) to sharpen their conflict?",
          answer: {
            type: "text",
            accept: ["juxtaposition", "structural contrast", "contrast"],
            display: "juxtaposition",
          },
          traps: [
            {
              spec: { type: "text", accept: ["oxymoron"] },
              feedback: "An oxymoron pairs two opposite words directly together ('deafening silence'); placing contrasting scenes or images side by side uses a broader term.",
            },
          ],
          hints: [
            "A 13-letter noun starting with 'juxta-' (Latin for 'side by side').",
            "Writers rely on it to expose inequality between the powerful and the powerless.",
          ],
          solution: [
            "Placing starkly opposing images, settings, or voices side by side to sharpen contrast is **juxtaposition**.",
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "close-reading-prose",
          marks: 3,
          question:
            "Read this unseen extract:\n\n*Every window in the ministry gleamed like polished ice. Inside, rows of clerks stamped blue passes in unison — thud, slide, thud, slide — without once lifting their eyes to the faces queuing across the glass.*\n\nHow does the writer present **bureaucratic power** as dehumanising? Use embedded micro-quotations and single-word zoom. (3 marks)",
          hints: [
            "Zoom into the cold simile 'polished ice' and what it suggests about empathy.",
            "Analyse the repetitive onomatopoeic rhythm 'thud, slide, thud, slide'.",
            "Explain how refusing to look up ('without once lifting their eyes') erases human individuality.",
          ],
          modelAnswer:
            "The writer depicts state bureaucracy as chillingly mechanical and devoid of empathy. Through the simile 'polished ice', the ministry's gleaming façade connotes freezing detachment and slipperiness, suggesting authority is immaculate yet unfeeling. Inside, the repetitive onomatopoeia 'thud, slide, thud, slide' reduces officials to factory machinery, while 'without once lifting their eyes' reveals how institutional routine erases the humanity of 'faces queuing across the glass', turning citizens into anonymous paperwork.",
          markScheme: [
            {
              point: "Analyses 'polished ice' linking coldness or immaculate facade to lack of human empathy.",
              keywords: ["ice", "cold", "empathy", "detach", "unfeeling", "facade", "chill"],
            },
            {
              point: "Examines the mechanical rhythm of 'thud, slide' or 'in unison' reducing people to machines.",
              keywords: ["mechan", "machin", "onomatopo", "repetit", "factory", "robot", "monoton"],
            },
            {
              point: "Explains how avoiding eye contact ('lifting their eyes' / 'glass') erases individuality.",
              keywords: ["eye", "anonym", "individual", "erases", "barrier", "paperwork", "faces"],
            },
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "short-story-architecture",
          marks: 3,
          question:
            "Read this unseen story outline:\n\n*Opening: A young border guard nervously checks an old violinist's battered wooden case, terrified of his sergeant's eyes. Middle: The guard discovers a forbidden folk-song sheet tucked beneath the velvet lining. Ending: The guard snaps the latches shut, stamps the pass, and steps aside as the violinist walks into the fog.*\n\nExplain how this **structural arc** shifts the reader's view of power and conscience. (3 marks)",
          hints: [
            "Track the three structural beats: frightened obedience → moral turning point → decisive quiet defiance.",
            "Mention how the hidden sheet music acts as the inciting/climactic pivot.",
            "Explain what the ending suggests about individual moral agency inside an oppressive system.",
          ],
          modelAnswer:
            "The opening establishes institutional fear, framing the guard as subordinate to surveillance ('terrified of his sergeant's eyes'). Discovering the 'forbidden folk-song sheet' serves as the dramatic pivot where external orders collide with personal conscience. By closing on decisive, controlled actions—snapping the latches and stamping the pass—the writer charts an arc from anxious compliance to silent rebellion, suggesting that even small acts of mercy can fracture authoritarian control from within.",
          markScheme: [
            {
              point: "Tracks the opening state of fear, compliance, or surveillance under the sergeant.",
              keywords: ["fear", "surveillan", "subordinat", "obedien", "complian", "anxious"],
            },
            {
              point: "Identifies the discovery of the forbidden sheet music as the structural pivot/turning point.",
              keywords: ["pivot", "turning", "climax", "collide", "dilemma", "choice"],
            },
            {
              point: "Analyses the ending as quiet rebellion or moral agency undermining tyranny.",
              keywords: ["rebel", "defian", "mercy", "agency", "fracture", "undermin", "subvert"],
            },
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "power-dynamics-subtext",
          marks: 4,
          question:
            "Read this unseen dialogue:\n\n*\"Did you hear the factory whistle at four?\" the inspector asked lightly, spinning a brass compass between his fingers.*\n*\"I was mending nets by the quay,\" Toma said.*\n*\"Strange,\" the inspector murmured, stopping the compass dead. \"The quay watchman swore the harbour was empty at four.\"*\n*Toma met his gaze without blinking. \"Then the watchman was asleep again.\"*\n\nAnalyse how **props, pacing, and conversational turns** create a tense duel of control. (4 marks)",
          hints: [
            "Examine the inspector's casual prop ('spinning a brass compass') and the abrupt physical halt ('stopping the compass dead').",
            "Note how the inspector springs an indirect trap ('Strange...') rather than accusing Toma outright.",
            "Analyse Toma's unflinching body language ('without blinking') and bold counter-attack flipping suspicion onto the watchman.",
          ],
          modelAnswer:
            "The inspector initially projects playful dominance through casual stage business, 'spinning a brass compass' while asking a deceptively 'lightly' toned question to lower Toma's guard. When he springs his trap—signalled by the ironic adjective 'Strange' and abruptly 'stopping the compass dead'—the arrested motion acts like a syntactic pause that tightens suspense and exposes his veiled accusation. Yet Toma refuses to flinch: meeting the gaze 'without blinking' demonstrates iron composure, and his sharp declarative counter-claim ('the watchman was asleep again') deflects scrutiny onto official incompetence, turning interrogation into an evenly matched psychological duel.",
          markScheme: [
            {
              point: "Analyses the inspector's deceptive casualness ('lightly', 'spinning a brass compass').",
              keywords: ["casual", "deceptiv", "playful", "guard", "spinning", "prop", "dominan"],
            },
            {
              point: "Explains the sudden physical halt ('stopping the compass dead') or indirect trap ('Strange').",
              keywords: ["halt", "arrest", "trap", "accus", "dead", "veiled", "suspense"],
            },
            {
              point: "Analyses Toma's physical composure ('without blinking') resisting intimidation.",
              keywords: ["blink", "compos", "unflinch", "steady", "resis", "intimidat"],
            },
            {
              point: "Shows how Toma redirects blame onto the watchman to reclaim psychological ground.",
              keywords: ["deflect", "redirect", "counter", "incompeten", "duel", "reclaim", "flip"],
            },
          ],
        },
        {
          id: "power-conflict-short-stories-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "close-reading-prose",
          marks: 4,
          question:
            "Read this unseen prose extract:\n\n*At the start of the winter term, everyone still whispered beneath the noticeboard, trading small jokes whenever the headmaster's shoes clicked past. By November, the corridor had learned a stricter grammar: eyes down, shoulders squared, heels silent on the linoleum. Only Nisha kept a yellow ribbon knotted around her satchel strap, bright as a match flame in the grey queue.*\n\nWrite a cohesive analytical response tracing how the extract shifts from **collective conformity** to **individual defiance**. (4 marks)",
          hints: [
            "Track the temporal shift from 'start of the winter term' to 'By November'.",
            "Zoom into the metaphor 'stricter grammar' and the clipped asyndetic list of body posture ('eyes down, shoulders squared, heels silent').",
            "Analyse the pivotal adverb 'Only' and the colour/fire simile ('yellow ribbon... bright as a match flame') against 'grey queue'.",
          ],
          modelAnswer:
            "Across just three sentences, the writer traces how institutional discipline gradually extinguishes youthful community before isolating a single spark of rebellion. Early warmth ('whispered', 'small jokes') collapses by November into the striking metaphor 'stricter grammar', implying control has rewritten the students' very bodies like rigid school rules. The clipped asyndetic list ('eyes down, shoulders squared, heels silent') mechanically breaks pupils into obedient body parts. Yet the structural pivot on 'Only' spotlights Nisha's 'yellow ribbon', whose vivid simile 'bright as a match flame' pierces the dreary 'grey queue'—connoting fragile warmth and potential ignition, suggesting that even suppressed dissent carries the spark to ignite wider change.",
          markScheme: [
            {
              point: "Tracks the chronological shift from early whispered community to November's rigid conformity.",
              keywords: ["november", "gradual", "warmth", "jokes", "collapse", "extinguish", "shift"],
            },
            {
              point: "Unpacks the metaphor 'stricter grammar' or the regimented asyndetic list of obedient posture.",
              keywords: ["grammar", "asyndet", "mechan", "rigid", "obedien", "regiment", "bodies"],
            },
            {
              point: "Identifies the structural pivot ('Only') and colour contrast ('yellow' vs 'grey queue').",
              keywords: ["only", "pivot", "isolat", "yellow", "grey", "colour", "contrast"],
            },
            {
              point: "Zooms into 'match flame' to explore connotations of fragile rebellion or potential ignition.",
              keywords: ["flame", "spark", "ignit", "fragile", "fire", "dissent", "rebel"],
            },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (9 AoPS-hard questions, all difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "power-conflict-short-stories-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "short-story-architecture",
      question:
        "Read this unseen ending to a dystopian short story:\n\n*After twenty years of fighting the Census Bureau, Zara finally reached the vault of forbidden names, struck a flare, and found only ten thousand blank ledgers — waiting for her own handwriting.*\n\nWhich layered interpretation best captures this **ironic twist**?",
      options: [
        "It reveals that Zara accidentally entered the wrong government building in the dark",
        "It warns that rebels who seize empty power risk becoming the very bureaucracy they fought",
        "It celebrates Zara's clean triumph because no citizens were ever actually monitored",
        "It explains that paper supplies were plentiful during the twenty-year rebellion",
      ],
      answerIndex: 1,
      hints: [
        "Notice the chilling final image: blank ledgers 'waiting for her own handwriting'.",
        "Ask what the Census Bureau represents (control through naming and classifying) and why the ledgers await *her*.",
        "Think about cyclical corruption of revolutionary power.",
      ],
      explanation:
        "Finding blank ledgers awaiting *Zara's own handwriting* creates bitter **situational irony**: the machinery of surveillance outlives any single regime and quietly invites the victorious rebel to become the next authoritarian recorder.",
    },
    {
      id: "power-conflict-short-stories-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "tension-pacing-syntax",
      question:
        "Compare these two sentences from an unseen suspense scene:\n\n**A:** *He listened to the boots on the stairs, waited for the lock to turn, and felt terror rising.*\n**B:** *One boot on the landing; a pause; the dry scrape of brass against brass; then his own pulse hammering louder than the latch.*\n\nWhy does **B** generate sharper tension than **A**?",
      options: [
        "B tells the reader directly that the character feels terror so no inference is required",
        "B replaces abstract telling ('felt terror') with fragmented sensory cues linked by semicolons",
        "B uses friendly polysyndeton so the character sounds calm and reassured on the stairs",
        "B widens the camera lens outward to describe the entire city street outside",
      ],
      answerIndex: 1,
      hints: [
        "Notice how A explicitly tells us 'felt terror', whereas B never uses the word 'terror' at all.",
        "Look closely at the semicolons, minor fragments, and hyper-focused acoustic details in B.",
        "Ask which version forces your brain to *experience* claustrophobic waiting.",
      ],
      explanation:
        "Version B obeys **show, don't tell**: cutting abstract emotion (*'felt terror'*) in favour of semicolon-paused sensory fragments (*'dry scrape of brass'*, *'pulse hammering'*) traps the reader inside hyper-alert silence.",
    },
    {
      id: "power-conflict-short-stories-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "power-dynamics-subtext",
      question:
        "Read this unseen exchange:\n\n*\"You look pale, Aunt Clara,\" Hector cooed, locking the parlour door from inside. \"Let me look after the deed box until you feel stronger.\"*\n*\"How thoughtful, Hector,\" Clara replied, pouring his tea from the green pot she kept on the top shelf. \"Drink up while it's hot.\"*\n\nWhat makes this dialogue a **double-layered power duel**?",
      options: [
        "Both speakers express genuine medical concern for each other's fragile winter health",
        "Hector relies on loud shouting while Clara surrenders the deed box immediately",
        "Both mask ruthless struggle under sugary domestic care, hinting Clara has a hidden counter-move",
        "Neither character understands the legal meaning of a family property deed box",
      ],
      answerIndex: 2,
      hints: [
        "Notice Hector's predatory verb 'cooed' paired with physically 'locking the parlour door'.",
        "Look closely at Clara's specific detail: 'the green pot she kept on the top shelf' + imperative 'Drink up'.",
        "Both characters speak lovingly while enacting menace — a battle of subtext!",
      ],
      explanation:
        "Hector weaponises infantilising concern (*'cooed'*, *'until you feel stronger'*) to seize Clara's property behind a locked door, yet Clara mirrors his sugary tone while mysteriously selecting a separate *'green pot'* from the *'top shelf'* — Chekhov's Gun subtext hinting at lethal retaliation.",
    },
    {
      id: "power-conflict-short-stories-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "close-reading-prose",
      question:
        "Read this unseen sentence:\n\n*The treaty arrived on embossed ivory parchment, witnessed by three generals, and signed in fading pencil.*\n\nWhat rhetorical term names this deliberate comic or ironic plunge from grand ceremonial buildup (*ivory parchment, three generals*) down to a trivial, anticlimactic detail (*fading pencil*)?",
      answer: {
        type: "text",
        accept: ["bathos", "anticlimax", "anti-climax"],
        display: "bathos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pathos"] },
          feedback: "Pathos appeals to genuine pity or sorrow; the abrupt ironic drop from lofty grandeur to trivial anticlimax starts with 'b'.",
        },
      ],
      hints: [
        "It rhymes with 'pathos' and describes a sharp drop from the sublime to the ridiculous or hollow.",
        "Think of an ironic anticlimax at the end of a tricolon.",
        "Six-letter Greek literary term (or its ten-letter English synonym).",
      ],
      solution: [
        "Building grand ceremonial expectation only to deflate it abruptly on *'fading pencil'* is **bathos** (or *anticlimax*).",
        "Here, bathos exposes political hypocrisy: the treaty looks solemn but is designed to be easily erased.",
      ],
    },
    {
      id: "power-conflict-short-stories-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "tension-pacing-syntax",
      question:
        "Read this unseen line:\n\n*He checked the lock. He checked the curtains. He checked the alley beyond the lamp.*\n\nName the rhetorical device of repeating the exact same opening phrase (*'He checked'*) at the start of consecutive clauses to mirror obsessive paranoia.",
      answer: {
        type: "text",
        accept: ["anaphora"],
        display: "anaphora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["epiphora", "epistrophe"] },
          feedback: "Epiphora/epistrophe repeats words at the *end* of clauses; repeating words at the *start* of successive clauses has a different name.",
        },
        {
          spec: { type: "text", accept: ["alliteration"] },
          feedback: "Alliteration repeats initial consonant sounds; repeating an entire opening phrase across successive sentences is a structural rhetorical device.",
        },
      ],
      hints: [
        "It is an eight-letter rhetorical term starting with 'ana-'.",
        "Look at the repeated opening words of all three sentences: 'He checked... He checked... He checked...'.",
        "It pairs closely with tricolon (a group of three).",
      ],
      solution: [
        "Repeating the same opening phrase (*'He checked'*) across consecutive sentences is **anaphora**.",
        "The compulsive repetition dramatises trapped hyper-vigilance and mounting paranoia.",
      ],
    },
    {
      id: "power-conflict-short-stories-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "short-story-architecture",
      marks: 4,
      question:
        "Read this complete micro-story:\n\n*On Monday, the mayor declared all mirrors dangerous and ordered every pane smashed before noon. By Wednesday, citizens walked with lowered chins so they would not catch their own faces in shop windows. On Friday, after heavy rain flooded the square, a child knelt beside a bright puddle, laughed aloud, and called her neighbours over to look.*\n\nAnalyse how the writer uses **short-story architecture, motif, and final imagery** to comment on the limits of tyranny. (4 marks)",
      hints: [
        "Trace the compressed three-beat timeline (Monday → Wednesday → Friday) across Freytag's arc.",
        "Examine what 'mirrors' symbolise (self-knowledge, identity, truth) and how citizens internalise control ('lowered chins').",
        "Analyse the shift from smashed artificial glass to 'heavy rain' and a 'bright puddle' — nature undermining human decree.",
        "Zoom into the child's joyous verbs ('knelt', 'laughed aloud', 'called her neighbours') signalling collective awakening.",
      ],
      modelAnswer:
        "Using tight narrative economy across a compressed three-day structure (Monday to Friday), the writer charts the rise and sudden crack of authoritarian control. Smashing mirrors symbolises a regime erasing self-awareness and identity, initially succeeding as citizens internalise fear with 'lowered chins'. Yet Friday's 'heavy rain' acts as an ironic structural pivot: natural water creates a 'bright puddle' that no decree can smash, exposing the fragility of artificial tyranny. Closing on an uncorrupted child who 'laughed aloud' and gathers her 'neighbours' transforms solitary compliance into joyful collective solidarity, implying human truth always resurfaces.",
      markScheme: [
        {
          point: "Analyses the compressed three-day timeline (narrative economy) charting oppression to reversal.",
          keywords: ["econom", "three-day", "timeline", "compress", "monday", "friday", "arc"],
        },
        {
          point: "Interprets the symbolism of mirrors (identity/truth) and internalised fear ('lowered chins').",
          keywords: ["identity", "self-aware", "truth", "internalis", "chins", "fear", "conform"],
        },
        {
          point: "Explains the structural pivot of nature ('rain'/'puddle') proving human tyranny cannot control everything.",
          keywords: ["nature", "natural", "puddle", "rain", "fragil", "pivot", "limit"],
        },
        {
          point: "Analyses the closing image of the child laughing and calling neighbours as collective renewal/solidarity.",
          keywords: ["child", "laugh", "collective", "solidarity", "neighbours", "community", "joy"],
        },
      ],
    },
    {
      id: "power-conflict-short-stories-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "tension-pacing-syntax",
      marks: 4,
      question:
        "Read this unseen extract:\n\n*For six floors the stairwell stayed cold and empty, echoing only the soft brush of her coat against damp concrete while she rehearsed the false name over and over beneath her breath. Floor three. A boot scraped above. Floor two. Keys jingled—fast now, two steps at a time. Floor one. The exit door was chained.*\n\nWrite an evaluative analysis of how **syntax, repetition, and the final reveal** engineer escalating claustrophobia. (4 marks)",
      hints: [
        "Contrast the winding, anxious 30-word opening sentence with the countdown fragments ('Floor three... Floor two... Floor one').",
        "Note how the descending numbers mimic both physical descent and shrinking time.",
        "Examine the dash and escalating acoustic threats ('boot scraped', 'Keys jingled—fast now').",
        "Analyse the brutal finality of the five-word passive closing sentence ('The exit door was chained.').",
      ],
      modelAnswer:
        "The writer initially stretches dread through a long, winding hypotactic sentence ('while she rehearsed the false name'), trapping the reader inside the protagonist's anxious internal monologue. Suddenly, the prose fractures into a descending countdown of minor sentences ('Floor three... Floor two... Floor one'), whose stark repetition accelerates tempo as pursuit closes in from above. Paired with an urgent dash ('Keys jingled—fast now'), sensory sounds compress space vertically until the final, blunt five-word sentence ('The exit door was chained.') slams shut like an iron trap—using passive voice ('was chained') to make the unseen authority feel omnipotent and inescapable.",
      markScheme: [
        {
          point: "Analyses the long opening hypotactic sentence evoking anxious anticipation/rehearsal.",
          keywords: ["hypotac", "long", "winding", "anxious", "rehears", "stretch", "monologue"],
        },
        {
          point: "Explains the countdown minor sentences ('Floor three/two/one') accelerating pace and narrowing time.",
          keywords: ["countdown", "minor", "fragment", "descend", "accelerat", "repetit"],
        },
        {
          point: "Zooms into escalating sound cues or the urgent dash ('Keys jingled—fast now') conveying pursuit.",
          keywords: ["dash", "pursuit", "jingled", "sound", "auditory", "clos", "vertical"],
        },
        {
          point: "Analyses the abrupt, passive closing reveal ('was chained') delivering trapped finality.",
          keywords: ["chained", "passive", "trap", "final", "blunt", "inescap", "omnipoten"],
        },
      ],
    },
    {
      id: "power-conflict-short-stories-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "power-dynamics-subtext",
      marks: 4,
      question:
        "Read this unseen dialogue:\n\n*\"Your sister has always been terribly impulsive,\" Lady Vane sighed, lifting a porcelain teacup with two gloved fingers. \"Fortunately, our family prefers quiet solutions.\"*\n*\"Like locking her letters in your bureau, Aunt?\" Theo asked softly, setting the small brass key beside her saucer.*\n*Lady Vane's saucer gave a single sharp rattle.*\n\nAnalyse how the writer uses **subtext, domestic objects, and a micro-physical reaction** to stage a dramatic power reversal. (4 marks)",
      hints: [
        "Unpack Lady Vane's veiled euphemism ('quiet solutions') and aristocratic poise ('porcelain teacup', 'gloved fingers').",
        "Note how Theo mirrors her soft register ('asked softly') rather than shouting, letting the brass key speak for him.",
        "Explain how placing the 'small brass key' (Chekhov's prop) exposes her hidden tyranny.",
        "Zoom into the final five-word sentence: 'a single sharp rattle' shattering Lady Vane's icy facade.",
      ],
      modelAnswer:
        "Lady Vane opens with refined aristocratic intimidation: the delicacy of 'porcelain' and 'gloved fingers' conveys aloof control, while the chilling euphemism 'quiet solutions' disguises domestic coercion as family duty. Rather than losing composure, Theo matches her quiet register ('asked softly') and weaponises an incisive question paired with concrete proof—placing the 'small brass key' directly beside her saucer to invade her immaculate territory. The culminating power reversal arrives without a single word of speech: 'a single sharp rattle' fractures Lady Vane's rehearsed poise, revealing sudden panic beneath polite tyranny.",
      markScheme: [
        {
          point: "Analyses Lady Vane's refined, aloof dominance ('porcelain', 'gloved fingers') and veiled euphemism ('quiet solutions').",
          keywords: ["euphem", "aristocrat", "aloof", "porcelain", "gloved", "coerci", "polite"],
        },
        {
          point: "Notes Theo's strategic calm ('asked softly') mirroring her composure rather than shouting.",
          keywords: ["softly", "calm", "mirror", "compos", "register", "restraint"],
        },
        {
          point: "Explains the symbolic force of placing the 'brass key' beside her saucer as undeniable leverage.",
          keywords: ["key", "proof", "leverag", "evidence", "territory", "expos"],
        },
        {
          point: "Zooms into 'single sharp rattle' as involuntary body language exposing cracking control.",
          keywords: ["rattle", "crack", "panic", "poise", "facade", "involuntary", "revers"],
        },
      ],
    },
    {
      id: "power-conflict-short-stories-ch-q09",
      kind: "written",
      difficulty: "challenge",
      guideRef: "close-reading-prose",
      marks: 4,
      question:
        "Read this weak Year 9 exam paragraph about the extract in Question 8:\n\n*\"Lady Vane holds a teacup and talks politely so she seems rich. Then Theo puts a key on the table and her saucer rattles. The writer uses the word 'rattle' which makes the reader hear a sound and want to read on.\"*\n\nDiagnose **two distinct analytical flaws** in this student paragraph, and rewrite it as a single **top-band WHAT–HOW–WHY sentence or short paragraph** with tentative academic phrasing. (4 marks)",
      hints: [
        "Spot where the student merely retells events ('Then Theo puts...') without making a conceptual claim.",
        "Spot the generic banned filler ('makes the reader hear a sound and want to read on').",
        "In your rewrite, link 'rattle' or 'gloved fingers' to a conceptual idea about power/facade using tentative verbs ('arguably', 'implies', 'suggests').",
      ],
      modelAnswer:
        "First, the paragraph relies on chronological plot retelling ('Then Theo puts...') rather than analysing how power shifts. Second, it falls into generic feature-spotting ('makes the reader hear a sound and want to read on') that fails to unpack specific connotations. Top-band rewrite: Arguably, by contrasting Lady Vane's aloof, 'gloved' poise with the sudden 'sharp rattle' of her saucer, the writer implies that polite domestic tyranny is brittle—shattering the instant its hidden secrets are placed openly on the table.",
      markScheme: [
        {
          point: "Diagnoses Flaw 1: plot retelling / narrative summary ('Then Theo puts...').",
          keywords: ["retell", "summar", "chronolog", "plot"],
        },
        {
          point: "Diagnoses Flaw 2: generic feature-spotting / vague reader effect ('want to read on').",
          keywords: ["feature-spot", "generic", "vague", "connot", "filler"],
        },
        {
          point: "Rewrites with embedded quotation and precise conceptual link to brittle power or facade.",
          keywords: ["brittle", "facade", "poise", "shatter", "tyranny", "power", "control"],
        },
        {
          point: "Uses tentative academic voice ('arguably', 'implies', 'suggests') in the upgraded analysis.",
          keywords: ["arguably", "implies", "suggests", "hints", "conveys"],
        },
      ],
    },
  ],
};
