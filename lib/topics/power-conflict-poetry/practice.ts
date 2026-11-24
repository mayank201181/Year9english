import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "power-conflict-poetry-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "themes-of-power-conflict",
      question:
        "What six-letter literary term names excessive arrogance or overweening pride in a powerful ruler that invites ironic downfall (as seen in the **example poem** *Ozymandias*, where a ruler's grand boast *“King of Kings”* sits beside empty ruins)?",
      answer: {
        type: "text",
        accept: ["hubris"],
        display: "Hubris",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pathos", "ethos"] },
          feedback: "Pathos and ethos are rhetorical appeals; we need the six-letter Greek term for excessive, blinding pride.",
        },
      ],
      hints: [
        "It comes from ancient Greek tragedy and starts with 'hu-'.",
      ],
      solution: [
        "**Hubris** names dangerous excessive pride that blinds rulers to impermanence and invites ironic collapse.",
      ],
    },
    {
      id: "power-conflict-poetry-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "poetic-form-metre-structure",
      question:
        "Read these original lines:\n*“The sentry paused — a branch snapped in the fog — / Then raised his trembling lantern toward the wire.”*\n\nName the single poetic term for the strong mid-line punctuation pauses around *“— a branch snapped in the fog —”*.",
      answer: {
        type: "text",
        accept: ["caesura", "a caesura", "caesurae"],
        display: "Caesura",
      },
      traps: [
        {
          spec: { type: "text", accept: ["enjambment"] },
          feedback: "Enjambment runs a clause over the end of a line without punctuation; this is a pause *inside* the line.",
        },
      ],
      hints: [
        "Think of a seven-letter Latin-derived term meaning 'a cutting' or mid-line pause.",
      ],
      solution: [
        "A strong punctuation pause *inside* a line of poetry is a **caesura**, here mirroring alert stillness and dread.",
      ],
    },
    {
      id: "power-conflict-poetry-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "poetic-form-metre-structure",
      question:
        "Read these original lines:\n*“The winter gale tore straight across the ridge / stripping the canvas from the watchman's frame.”*\n\nName the single poetic term for running a clause straight over the line break after *“ridge”* with no punctuation.",
      answer: {
        type: "text",
        accept: ["enjambment", "enjambement"],
        display: "Enjambment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura"] },
          feedback: "Caesura is a pause *inside* a line; here grammar strides straight *past* the line end.",
        },
      ],
      hints: [
        "Borrowed from French meaning 'striding over' — starts with 'en-'.",
      ],
      solution: [
        "**Enjambment** sends the sentence past the line break without stopping, physically mimicking the gale's relentless rush.",
      ],
    },
    {
      id: "power-conflict-poetry-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "poetic-form-metre-structure",
      question:
        "How many lines does a traditional **sonnet** contain, and where does its **volta** (turning point) classically fall in a Petrarchan sonnet?",
      options: [
        "Fourteen lines, with the volta classically pivoting around line 9",
        "Twelve lines, with the volta classically pivoting around line 2",
        "Sixteen lines, with no turning point permitted until the title",
        "Eight lines, arranged exclusively in unrhymed free verse strips",
      ],
      answerIndex: 0,
      hints: [
        "Recall the standard sonnet line count and the octave (8) + sestet (6) division.",
      ],
      explanation:
        "A sonnet has **14 lines**; in a Petrarchan sonnet, the **volta** pivots after the opening 8-line octave, opening the final 6-line sestet at **line 9**.",
    },
    {
      id: "power-conflict-poetry-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "imagery-sound-connotation",
      question:
        "Read this original line: *“Broken boots battered the blackened bridge.”*\n\nName the specific sound category (`p, b, t, d, k, g`) that bursts explosively across this line to echo violence or gunfire.",
      answer: {
        type: "text",
        accept: ["plosives", "plosive", "plosive sounds", "plosive consonants", "plosive alliteration"],
        display: "Plosives",
      },
      traps: [
        {
          spec: { type: "text", accept: ["sibilance"] },
          feedback: "Sibilance repeats hissing 's/sh' sounds; hard 'b/t/k/d' stops belong to a different consonant group.",
        },
      ],
      hints: [
        "Think of the root inside the word 'explosive' — these consonants release tiny bursts of blocked air.",
        "Starts with 'pl-'.",
      ],
      solution: [
        "Hard stop consonants (`b, t, k, d`) are **plosives**, mimicking percussive impact and battlefield aggression.",
      ],
    },
    {
      id: "power-conflict-poetry-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "imagery-sound-connotation",
      question:
        "Read this original line: *“Silent snow slid softly over the sunken street.”*\n\nName the specific sound device created by the repeated hissing/hushed `s` sounds.",
      answer: {
        type: "text",
        accept: ["sibilance", "sibilant"],
        display: "Sibilance",
      },
      traps: [
        {
          spec: { type: "text", accept: ["plosives", "plosive"] },
          feedback: "Plosives are hard stops like p/b/t/d/k/g; hissing 's/sh' sounds have their own nine-letter term.",
        },
      ],
      hints: [
        "It starts with 'sib-' and describes repeated 's', 'sh', 'z' or soft 'c' sounds.",
        "Notice how it hushes or adds sinister stealth to the line.",
      ],
      solution: [
        "Repeated `s` sounds produce **sibilance**, creating an eerie, hushed atmosphere.",
      ],
    },
    {
      id: "power-conflict-poetry-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "imagery-sound-connotation",
      question:
        "Read these original line endings: *“Their bright brass medals gleamed in **flash**, / While frozen trenches claimed young **flesh**.”* Why does linking *“flash”* and *“flesh”* with **half-rhyme** sharpen the anti-war message?",
      options: [
        "It creates a cheerful marching song celebrating polished medals",
        "It denies soothing harmony so the jarring vowel drop mirrors brutal loss",
        "It proves the poet forgot how to spell both nouns accurately",
        "It shifts the poem smoothly into lighthearted comic dialogue",
      ],
      answerIndex: 1,
      hints: [
        "Listen to the drop from bright 'flash' to dull, heavy 'flesh'.",
        "Ask why an anti-war poet would *refuse* a neat, comforting full rhyme.",
      ],
      explanation:
        "Using **half-rhyme (pararhyme)** lets consonants lock together while the vowel drops hollowly from gleaming *“flash”* to vulnerable *“flesh,”* enacting harsh disillusionment.",
    },
    {
      id: "power-conflict-poetry-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "imagery-sound-connotation",
      question:
        "Read this original phrase describing an uneasy truce: *“a violent silence”* (or Shelley's *“colossal Wreck”* in the **example poem** *Ozymandias*). What one-word figurative term names two contradictory words placed directly beside each other?",
      answer: {
        type: "text",
        accept: ["oxymoron", "an oxymoron"],
        display: "Oxymoron",
      },
      traps: [
        {
          spec: { type: "text", accept: ["simile", "personification"] },
          feedback: "Look at the direct contradiction compressed into just two adjoining words ('violent' + 'silence').",
        },
      ],
      hints: [
        "Starts with 'oxy-' and pairs two exact opposites side by side.",
        "An eight-letter literary term.",
      ],
      solution: [
        "Locking two contradictory words side by side (*“violent silence”*) forms an **oxymoron**.",
      ],
    },
    {
      id: "power-conflict-poetry-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "comparative-poetry-essay",
      question:
        "Which approach guarantees an **integrated comparative poetry essay** rather than a weak block essay?",
      options: [
        "Analysing Poem A in Paragraphs 1–2 and saving Poem B strictly for Paragraph 3",
        "Listing five literary devices shared by both poems without quoting either text",
        "Weaving Poem A and Poem B inside every body paragraph via conceptual claims and pivots",
        "Summarising both poets' childhood biographies before quoting one closing metaphor",
      ],
      answerIndex: 2,
      hints: [
        "Recall the C–A–P–B–S woven structure.",
        "Both poems should converse inside *every* body paragraph.",
      ],
      explanation:
        "An **integrated comparative essay** weaves Poem A and Poem B inside every body paragraph around shared conceptual claims using purposeful comparative connectives.",
    },
    {
      id: "power-conflict-poetry-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "themes-of-power-conflict",
      question:
        "Read these original lines: *“My father's old passport stays wrapped in blue silk; / The border guard stamped it VOID in three seconds flat.”* Which comparison lens best frames this conflict?",
      options: [
        "Glorious military victory celebrated by returning cavalry troops",
        "Romantic awe before towering snow-capped alpine glaciers",
        "Humorous disagreement over luggage fees at a holiday resort",
        "Cold bureaucratic power colliding with personal heritage and identity",
      ],
      answerIndex: 3,
      hints: [
        "Contrast 'wrapped in blue silk' (treasured heritage) with 'stamped it VOID in three seconds flat' (brusque state power).",
        "Identify the dimension of Power & Conflict shown here.",
      ],
      explanation:
        "Juxtaposing tender domestic care (*“blue silk”*) against brusque institutional erasure (*“stamped it VOID”*) captures **bureaucratic power clashing with personal and cultural identity**.",
    },
  ],
  papers: [
    {
      id: "power-conflict-poetry-p1",
      title: "Practice Paper 1 — Themes, Form, Metre & Structural Craft",
      questions: [
        {
          id: "power-conflict-poetry-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "poetic-form-metre-structure",
          question:
            "What five-letter Italian-derived poetic term names the decisive turning point in mood, argument or power balance within a poem?",
          answer: {
            type: "text",
            accept: ["volta", "the volta", "a volta"],
            display: "Volta",
          },
          traps: [
            {
              spec: { type: "text", accept: ["stanza", "refrain"] },
              feedback: "A stanza is a verse paragraph and a refrain is a repeated line; we need the five-letter term for the turning point.",
            },
          ],
          hints: [
            "Literally means 'turn' in Italian — often signalled by 'Yet' or 'But'.",
          ],
          solution: [
            "A **volta** marks the poem's turning point in attitude, insight or perspective.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "poetic-form-metre-structure",
          question:
            "How many syllables are in one strictly regular line of **iambic pentameter** (five unstressed–stressed pairs)? Type a number.",
          answer: {
            type: "number",
            value: 10,
            display: "10",
          },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "5 is the number of *iambs* (feet); each iamb contains 2 syllables, so multiply by 2!",
            },
            {
              spec: { type: "number", value: 14 },
              feedback: "14 is the number of *lines* in a sonnet, not syllables per line of iambic pentameter.",
            },
          ],
          hints: [
            "An iamb has 2 syllables (da-DUM) and 'penta-' means 5.",
          ],
          solution: [
            "5 iambs × 2 syllables per iamb = **10** syllables per regular line of iambic pentameter.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "poetic-form-metre-structure",
          question:
            "How many lines are in a traditional **sonnet** (such as the **example poem** *Ozymandias*)? Type a number.",
          answer: {
            type: "number",
            value: 14,
            display: "14",
          },
          traps: [
            {
              spec: { type: "number", value: 10 },
              feedback: "10 is the syllable count of iambic pentameter; a sonnet's line count is larger.",
            },
          ],
          hints: [
            "Think of an octave (8 lines) plus a sestet (6 lines), or three quatrains (12) plus a couplet (2).",
          ],
          solution: [
            "Every traditional sonnet contains **14** lines.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "poetic-form-metre-structure",
          question:
            "What two-word poetic form is spoken entirely by one fictional character addressing an implied silent listener, often unwittingly exposing their vanity, cruelty or obsession (as in the **example poem** *My Last Duchess*)?",
          answer: {
            type: "text",
            accept: ["dramatic monologue", "a dramatic monologue"],
            display: "Dramatic monologue",
          },
          traps: [
            {
              spec: { type: "text", accept: ["soliloquy"] },
              feedback: "A soliloquy is spoken aloud alone on stage in a play; in poetry, a single persona addressing a silent listener has a two-word name.",
            },
          ],
          hints: [
            "First word links to theatre ('dramatic'); second word means 'single speech'.",
            "Two words: 'd_______ m________'.",
          ],
          solution: [
            "A **dramatic monologue** lets one persona speak to a silent listener while the poet uses irony to expose hidden character flaws.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "poetic-form-metre-structure",
          question:
            "What two-word term names poetry written with **no fixed metre and no regular rhyme scheme**, often used to mirror fractured trauma, authentic speech or refusal to conform?",
          answer: {
            type: "text",
            accept: ["free verse"],
            display: "Free verse",
          },
          traps: [
            {
              spec: { type: "text", accept: ["blank verse"] },
              feedback: "Blank verse keeps strict iambic pentameter (only dropping rhyme); we want poetry free from BOTH fixed metre and regular rhyme.",
            },
          ],
          hints: [
            "Do not confuse it with blank verse: this form is 'free' from regular metrical and rhyming cages.",
            "Two short words: 'f___ v____'.",
          ],
          solution: [
            "**Free verse** discards regular rhyme and fixed metre, letting jagged rhythm and lineation follow raw emotional movement.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "poetic-form-metre-structure",
          question:
            "What two-word term names **unrhymed iambic pentameter** — keeping a steady 10-syllable heartbeat without end-rhyme (used in narrative poems such as the **example poem** *The Prelude*)?",
          answer: {
            type: "text",
            accept: ["blank verse"],
            display: "Blank verse",
          },
          traps: [
            {
              spec: { type: "text", accept: ["free verse"] },
              feedback: "Free verse has no regular metre; this form keeps regular iambic pentameter while leaving the rhyme 'blank'.",
            },
          ],
          hints: [
            "The rhyme endings are left 'blank', while the 10-syllable metre stays intact.",
            "Two words: 'b____ v____'.",
          ],
          solution: [
            "**Blank verse** is unrhymed iambic pentameter.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "poetic-form-metre-structure",
          question:
            "In a conflict poem, the closing line of every stanza repeats the exact haunting phrase *“But nothing happens.”* (as in the **example poem** *Exposure*). What one-word structural term names a repeated line returning at stanza boundaries?",
          answer: {
            type: "text",
            accept: ["refrain", "a refrain"],
            display: "Refrain",
          },
          traps: [
            {
              spec: { type: "text", accept: ["volta"] },
              feedback: "A volta marks a change/turn; this seven-letter musical term names a recurring repeated line.",
            },
          ],
          hints: [
            "Also used in ballads and songs — a seven-letter word starting with 're-'.",
            "Repeating the same line traps the poem in an unchanging loop.",
          ],
          solution: [
            "A line repeated across stanzas is a **refrain**, here reinforcing bleak stalemate and futility.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "themes-of-power-conflict",
          question:
            "When analysing a dramatic monologue spoken by a boastful tyrant, you must never confuse the **poet** with the fictional voice inside the poem. What one-word literary term names that fictional voice?",
          answer: {
            type: "text",
            accept: ["speaker", "persona", "the speaker", "the persona"],
            display: "Speaker (or Persona)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["author", "poet"] },
              feedback: "The poet is the real-world writer crafting the text; we want the term for the fictional voice speaking inside the poem.",
            },
          ],
          hints: [
            "In prose we say 'narrator'; in poetry we say 's______' (or 'p______').",
            "Seven letters, derived from the verb 'speak'.",
          ],
          solution: [
            "In poetry, the fictional voice delivering the lines is the **speaker** (or **persona**), distinct from the **poet**.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "poetic-form-metre-structure",
          question:
            "What one-word poetic form traditionally uses four-line stanzas (quatrains) with a strong song-like rhythm to tell a dramatic narrative or commemorate public events (such as the **example poem** *The Rime of the Ancient Mariner*)?",
          answer: {
            type: "text",
            accept: ["ballad", "a ballad"],
            display: "Ballad",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sonnet"] },
              feedback: "A sonnet is fixed at 14 lines; this narrative song-like form uses rhythmic stanzas and often a refrain.",
            },
          ],
          hints: [
            "A six-letter folk-song narrative form starting with 'ba-'.",
            "Traditionally passed down aloud to commemorate heroic or tragic deeds.",
          ],
          solution: [
            "A **ballad** tells a story in rhythmic, song-like stanzas, lending momentum and public memory to conflict poems.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "themes-of-power-conflict",
          question:
            "What single Romantic literary term names the overwhelming mixture of **awe and terror** humans feel when dwarfed by vast, indifferent nature (such as a towering storm or black mountain peak)?",
          answer: {
            type: "text",
            accept: ["sublime", "the sublime"],
            display: "The sublime",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hubris"] },
              feedback: "Hubris is human arrogance; this seven-letter term describes nature's terrifying majesty that humbles human pride.",
            },
          ],
          hints: [
            "Think of the Romantic adjective/noun 'the s______' — awe mixed with terror.",
            "Starts with 'sub-' and has seven letters.",
          ],
          solution: [
            "**The sublime** captures awe edged with terror in the presence of nature's immense, humbling power.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "poetic-form-metre-structure",
          question:
            "What two-word label describes a line of poetry that finishes with clear punctuation (`.`, `;`, `?`, `!`) so the thought halts neatly at the right-hand margin — the exact opposite of enjambment?",
          answer: {
            type: "text",
            accept: ["end-stopped", "end stopped", "end-stopped line", "end stopped line"],
            display: "End-stopped",
          },
          traps: [
            {
              spec: { type: "text", accept: ["caesura"] },
              feedback: "Caesura pauses in the *middle* of a line; this hyphenated term describes stopping squarely at the *end* of the line.",
            },
          ],
          hints: [
            "Combine 'end' with 'stopped' into a hyphenated term.",
            "Opposite of a run-on (enjambed) line.",
          ],
          solution: [
            "A line closed by terminal punctuation is **end-stopped**, often conveying finality, restraint or rigid control.",
          ],
        },
        {
          id: "power-conflict-poetry-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "themes-of-power-conflict",
          marks: 3,
          question:
            "Read these original lines from a poem about political tyranny:\n\n*“The marble emperor raised his sceptre toward the clouds, / Demanding that the wind bow down and learn his name. / Next autumn, wild oats rooted neatly through his crown.”*\n\nExplain how the poet exposes political hubris and nature's superior power across these three lines. [3 marks]",
          hints: [
            "Analyse the ruler's arrogant gesture and command ('raised his sceptre', 'Demanding that the wind bow down').",
            "Track the sudden shift in line 3 ('Next autumn') and zoom into the quiet irony of 'wild oats rooted neatly through his crown'.",
            "State the poet's broader message about human empire versus natural endurance.",
          ],
          markScheme: [
            {
              point: "Analyses the emperor's arrogance/command ('raised his sceptre', 'Demanding that the wind bow down') as foolish hubris attempting to rule nature.",
              keywords: ["sceptre", "demanding", "bow down", "arrogant", "arrogance", "imperative", "command", "pride"],
            },
            {
              point: "Analyses the ironic deflation in line 3 ('Next autumn', 'wild oats rooted neatly through his crown') showing effortless natural reclamation.",
              keywords: ["wild oats", "rooted", "neatly", "crown", "irony", "ironic", "deflation", "reclaim"],
            },
            {
              point: "Links to the wider message: human authority is fleeting and temporary whereas nature effortlessly outlasts empires.",
              keywords: ["fleeting", "temporary", "impermanen", "outlast", "endur", "humble", "fragile"],
            },
          ],
          modelAnswer:
            "The poet mocks the ruler's absurd arrogance as he raises his 'sceptre' and insists on 'Demanding that the wind bow down,' trying to command forces far beyond human authority. That pompous pride is deflated swiftly by 'Next autumn,' when humble 'wild oats rooted neatly through his crown' — the ironic adverb 'neatly' suggesting nature dismantles tyranny effortlessly without even a struggle. Ultimately, the contrast underscores that human empires are fleeting and fragile while the natural world effortlessly outlasts every ruler.",
          commonError:
            "Simply paraphrasing 'weeds grew on his statue' without unpacking the sharp irony of the adverb 'neatly' or the contrast between commanding the wind and crumbling in a single autumn.",
        },
        {
          id: "power-conflict-poetry-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "poetic-form-metre-structure",
          marks: 3,
          question:
            "Read these original lines from a war-memory poem:\n\n*“We waited — nobody spoke — the flare sank slow / into the frozen ditch where seven helmets lay.”*\n\nIdentify **both** lineation techniques used here (mid-line pause AND run-on line) and explain how each shapes the reader's experience of tension. [3 marks]",
          hints: [
            "Name the punctuation pauses inside line 1 ('— nobody spoke —') and link them to suffocating silence or fear.",
            "Name the unpunctuated spill from 'sank slow / into the frozen ditch'.",
            "Explain how contrasting halt (line 1) with slow sinking flow (line 1→2) mirrors dread and macabre discovery.",
          ],
          markScheme: [
            {
              point: "Accurately identifies caesura ('— nobody spoke —') and links it to tense silence, held breath or paralysed waiting.",
              keywords: ["caesura", "nobody spoke", "halt", "breath", "paralys", "silence", "pause"],
            },
            {
              point: "Accurately identifies enjambment ('sank slow / into the frozen ditch') running over the line break without punctuation.",
              keywords: ["enjambment", "sank slow", "run-on", "line break", "spill", "drift"],
            },
            {
              point: "Explains the combined effect: enjambment drags the eye downward like the falling flare to expose the grim casualty image ('seven helmets').",
              keywords: ["downward", "helmets", "death", "dread", "casualt", "reveal", "horr"],
            },
          ],
          modelAnswer:
            "In line 1, heavy caesura framing '— nobody spoke —' breaks the rhythm into tense, held-breath fragments, enacting the soldiers' paralysed dread. The poet then switches to enjambment across 'sank slow / into the frozen ditch,' pulling the reader's eye steadily downward like the fading flare itself. This structural drop lands directly on the stark image of 'seven helmets,' forcing the reader to confront silent death and wartime loss.",
          commonError:
            "Naming caesura and enjambment correctly but writing only generic definitions ('caesura makes you pause; enjambment makes it flow') instead of linking them to held breath and the falling flare.",
        },
        {
          id: "power-conflict-poetry-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "themes-of-power-conflict",
          marks: 4,
          question:
            "Read these lines from the **example poem** *London* by William Blake:\n\n*“I wander thro' each charter'd street, / Near where the charter'd Thames does flow. / And mark in every face I meet / Marks of weakness, marks of woe.”*\n\nAnalyse how Blake uses **repetition**, **diction** and **tight poetic form** to convey institutional oppression. [4 marks]",
          hints: [
            "Zoom into the repeated word 'charter'd' — even the natural river Thames is mapped, owned and restricted.",
            "Analyse the shift in 'mark' (verb: notice) to 'Marks' (noun: scars/stains) paired with 'weakness' and 'woe'.",
            "Note the rigid ABAB quatrain and regular metre mirroring a caged, controlled city.",
            "Conclude with Blake's broader social protest against oppressive urban authority.",
          ],
          markScheme: [
            {
              point: "Analyses the repetition of 'charter'd' extending ownership/restriction from streets even onto the natural River Thames.",
              keywords: ["charter", "owned", "restrict", "control", "river", "thames", "nature"],
            },
            {
              point: "Analyses 'mark / Marks' (noticing vs visible scars/stains) and/or emotive pairing 'weakness' and 'woe' showing universal suffering ('every face').",
              keywords: ["scar", "stain", "weakness", "woe", "every face", "universal", "suffer"],
            },
            {
              point: "Links rigid quatrain form / alternating ABAB rhyme / steady metre to entrapment or relentless marching monotony.",
              keywords: ["quatrain", "abab", "rhyme", "metre", "meter", "cage", "trap", "rigid", "regiment"],
            },
            {
              point: "Articulates Blake's critical intent: protesting institutional exploitation and dehumanisation in the city.",
              keywords: ["protest", "critiqu", "expose", "institution", "oppress", "tyranny", "exploit"],
            },
          ],
          modelAnswer:
            "Blake exposes pervasive institutional oppression by repeating 'charter'd' across both the streets and the 'Thames,' implying that state and commercial ownership have fenced in even nature itself. Moving from the verb 'mark' (to witness) to the plural noun 'Marks' turns sorrow into physical scars stamped across 'every face,' while the pairing of 'weakness' and 'woe' underscores universal suffering. Furthermore, locking the lines inside a rigid ABAB quatrain and steady metre structurally mirrors a caged city with no escape, sharpening Blake's indignant protest against urban exploitation.",
          commonError:
            "Mentioning that 'charter'd' is repeated without explaining what 'charter'd' means (mapped, commercially controlled) or why applying it to the Thames is shocking.",
        },
        {
          id: "power-conflict-poetry-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "poetic-form-metre-structure",
          marks: 4,
          question:
            "Read this original 6-line conflict poem:\n\n*“They promised brass parades and laurel crowns,\nBright ribbons pinned above our Sunday coats,\nA quick campaign before the autumn frost.\nYet here the rain erases every map;\nOur boots sink deep in nameless clay —\nNo brass, no ribbon, only mist.”*\n\nAnalyse how the poet uses the **volta**, **contrasting imagery** and **ending rhythm** to chart disillusionment. [4 marks]",
          hints: [
            "Pinpoint the exact volta word at line 4 ('Yet') dividing propaganda promises (lines 1–3) from trench reality (lines 4–6).",
            "Contrast the glittering ceremonial imagery ('brass parades', 'laurel crowns', 'Bright ribbons') with bleak erasure ('erases every map', 'nameless clay').",
            "Zoom into the adjective 'nameless' or verb 'erases' (loss of identity and purpose).",
            "Analyse the shortened final line ('No brass, no ribbon, only mist.') cancelling the opening promises through negation and truncated rhythm.",
          ],
          markScheme: [
            {
              point: "Identifies the volta at line 4 ('Yet') pivoting sharply from patriotic promises to harsh battlefield reality.",
              keywords: ["yet", "line 4", "pivot", "shift", "turn", "propaganda", "reality"],
            },
            {
              point: "Analyses opening ceremonial/glorious imagery ('brass parades', 'laurel crowns', 'Bright ribbons', 'quick campaign') as seductive illusion.",
              keywords: ["brass", "laurel", "ribbons", "ceremon", "glory", "illusion", "promise"],
            },
            {
              point: "Zooms into bleak erasure diction ('erases every map', 'nameless clay') revealing lost direction, identity or futility.",
              keywords: ["erases", "nameless", "clay", "identity", "futility", "direction", "mud"],
            },
            {
              point: "Analyses the clipped/truncated final line and negative repetition ('No brass, no ribbon, only mist.') stripping away every illusion into hollow emptiness.",
              keywords: ["no brass", "only mist", "negat", "short", "truncat", "emptiness", "hollow", "strip"],
            },
          ],
          modelAnswer:
            "The poet structures disillusionment cleanly around a sharp volta at line 4, where 'Yet' punctures three lines of glossy propaganda promises. Initially, ceremonial tokens — 'brass parades,' 'laurel crowns' and 'Bright ribbons' — dress war in effortless glory and a 'quick campaign.' After the pivot, however, nature 'erases every map' and traps the soldiers in 'nameless clay,' the adjective 'nameless' implying both anonymous death and stripped human identity. Closing on a stark, shortened line built from blunt negation ('No brass, no ribbon, only mist.') systematically cancels every earlier pledge, leaving readers suspended in hollow futility.",
          commonError:
            "Discussing the war theme broadly without pinning down line 4's 'Yet' as the structural volta or noticing how the final line explicitly echoes and cancels lines 1–2.",
        },
      ],
    },
    {
      id: "power-conflict-poetry-p2",
      title: "Practice Paper 2 — Imagery, Sound Craft & Comparative Essays",
      questions: [
        {
          id: "power-conflict-poetry-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "imagery-sound-connotation",
          question:
            "What two-word linguistic term names a deliberate cluster of words drawn from one shared conceptual family (such as *“barrage”*, *“trench”*, *“shrapnel”*, *“bayonet”*) woven across a poem?",
          answer: {
            type: "text",
            accept: ["semantic field", "a semantic field", "lexical field", "a lexical field"],
            display: "Semantic field",
          },
          traps: [
            {
              spec: { type: "text", accept: ["extended metaphor"] },
              feedback: "An extended metaphor develops one specific comparison; here we mean a whole family of related vocabulary from one domain.",
            },
          ],
          hints: [
            "Two words: first word means 'relating to meaning' ('s_______'), second word is 'field'.",
          ],
          solution: [
            "A family of related vocabulary saturating a poem's mood is a **semantic field** (or lexical field).",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "imagery-sound-connotation",
          question:
            "Read this original line from a storm-conflict poem: *“The gale chewed furiously at the harbour pilings.”*\n\nName the figurative device that gives the gale a living, predatory mouth (*“chewed furiously”*).",
          answer: {
            type: "text",
            accept: ["personification", "zoomorphism"],
            display: "Personification",
          },
          traps: [
            {
              spec: { type: "text", accept: ["simile"] },
              feedback: "There is no 'like' or 'as' comparison; the storm is given living anger and biting actions directly.",
            },
          ],
          hints: [
            "Giving human emotions ('furiously') and living actions ('chewed') to an inanimate natural force.",
          ],
          solution: [
            "Treating the gale as an enraged living attacker is **personification** (also showing zoomorphic predation).",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "imagery-sound-connotation",
          question:
            "Read these original line endings:\n*“They marched into the grey **mist**, / Not one of them would be **missed**.”* — Wait, compare THAT with:\n*“They marched into the frozen **mist**, / Beneath a sky of splintered **mast**.”*\n\nWhat hyphenated sound term names the near-rhyme pairing *“mist / mast”* (shared consonants, shifted vowel)?",
          answer: {
            type: "text",
            accept: ["half-rhyme", "half rhyme", "pararhyme", "slant rhyme", "near rhyme"],
            display: "Half-rhyme (pararhyme)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["full rhyme", "rhyming couplet"] },
              feedback: "Notice the vowel changes from 'i' (mist) to 'a' (mast) — it is deliberately imperfect, not a full rhyme.",
            },
          ],
          hints: [
            "Matching consonants with a shifted vowel creates an unsettled near-rhyme.",
            "Starts with 'half-' (or 'para-').",
          ],
          solution: [
            "Pairing *“mist”* with *“mast”* uses **half-rhyme** (**pararhyme**) to deny comforting harmonic resolution.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "imagery-sound-connotation",
          question:
            "Read this original line mourning fallen sailors: *“Cold foam rolled slowly over lonely stones.”*\n\nName the sound device repeating the long internal `o` vowel across *“Cold”*, *“foam”*, *“rolled”*, *“slowly”*, *“over”*, *“lonely”* and *“stones”*.",
          answer: {
            type: "text",
            accept: ["assonance"],
            display: "Assonance",
          },
          traps: [
            {
              spec: { type: "text", accept: ["alliteration", "sibilance"] },
              feedback: "Alliteration and sibilance repeat consonants; this nine-letter term specifically names repeated internal *vowel* sounds.",
            },
          ],
          hints: [
            "A nine-letter term starting with 'ass-' for repeated vowel sounds inside words.",
            "Notice how the long 'oh' vowels draw the tempo out like a slow moan.",
          ],
          solution: [
            "**Assonance** repeats internal vowel sounds — here slow long `o` vowels mimicking mournful waves and grief.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "imagery-sound-connotation",
          question:
            "When a poet sustains one single metaphor across multiple lines or an entire poem (e.g. comparing bureaucratic control to a tightening spider's web from Stanza 1 through Stanza 4), what two-word term names this technique?",
          answer: {
            type: "text",
            accept: ["extended metaphor", "an extended metaphor"],
            display: "Extended metaphor",
          },
          traps: [
            {
              spec: { type: "text", accept: ["simile", "oxymoron"] },
              feedback: "A simile uses 'like/as' and an oxymoron pairs two opposite words; here a single metaphor is stretched across the whole poem.",
            },
          ],
          hints: [
            "Combine an adjective meaning 'stretched out' with 'metaphor'.",
            "Two words: 'e_______ m_______'.",
          ],
          solution: [
            "Sustaining one central figurative comparison across stanzas creates an **extended metaphor**.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "imagery-sound-connotation",
          question:
            "Read this original line about winter trenches: *“Fierce frost flayed their frozen fingers.”*\n\nName the specific consonant sound family (`f, v, th`) dominating this line to evoke harsh rushing wind and friction.",
          answer: {
            type: "text",
            accept: ["fricatives", "fricative", "fricative sounds", "fricative consonants", "fricative alliteration"],
            display: "Fricatives",
          },
          traps: [
            {
              spec: { type: "text", accept: ["plosives", "plosive"] },
              feedback: "Plosives (p/b/t/d/k/g) block air completely before popping; 'f' forces air through narrow friction.",
            },
            {
              spec: { type: "text", accept: ["sibilance"] },
              feedback: "Sibilance specifically marks hissing 's/sh/z' sounds; 'f/v/th' share a broader term derived from 'friction'.",
            },
          ],
          hints: [
            "Notice the word 'friction' — air rubs harshly between lip and teeth on every 'f'.",
            "Starts with 'fric-'.",
          ],
          solution: [
            "Repeated `f` sounds are **fricatives**, acoustically mimicking biting wind scraping across exposed skin.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "comparative-poetry-essay",
          question:
            "What two-word label criticises the weak comparative essay structure where a student writes all paragraphs on Poem A first and then all paragraphs on Poem B separately?",
          answer: {
            type: "text",
            accept: ["block essay", "a block essay", "block structure", "blocked essay"],
            display: "Block essay",
          },
          traps: [
            {
              spec: { type: "text", accept: ["integrated essay", "woven essay"] },
              feedback: "Integrated/woven essays are the *strong* method combining both poems per paragraph; we want the name for the weak separated structure.",
            },
          ],
          hints: [
            "Think of stacking one giant 'block' of Poem A on top of one giant 'block' of Poem B.",
            "Two words: 'b____ e____'.",
          ],
          solution: [
            "A **block essay** separates Poem A and Poem B into disconnected halves, weakening sustained comparison.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "comparative-poetry-essay",
          question:
            "Classify this comparative connective as signalling **similarity** or **contrast**: *“Conversely, Poet B strips away heroic rhythm to expose raw exhaustion.”*",
          answer: {
            type: "text",
            accept: ["contrast", "difference"],
            display: "Contrast",
          },
          traps: [
            {
              spec: { type: "text", accept: ["similarity", "similar"] },
              feedback: "'Conversely' pivots to an *opposite* or contrasting point, not an echoing similarity.",
            },
          ],
          hints: [
            "Check what the clause does after 'Conversely': it introduces an opposing method.",
            "Answer with one word: similarity or contrast.",
          ],
          solution: [
            "*“Conversely”* signals direct **contrast** between Poet A's method and Poet B's approach.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "comparative-poetry-essay",
          question:
            "Classify this comparative connective as signalling **similarity** or **contrast**: *“Likewise, Poem B employs cold natural imagery to shrink human ambition.”*",
          answer: {
            type: "text",
            accept: ["similarity", "similar"],
            display: "Similarity",
          },
          traps: [
            {
              spec: { type: "text", accept: ["contrast", "difference"] },
              feedback: "'Likewise' means 'in a matching way' — linking a shared idea or technique.",
            },
          ],
          hints: [
            "Look at the root word 'like' inside 'Likewise'.",
            "Answer with one word: similarity or contrast.",
          ],
          solution: [
            "*“Likewise”* signals **similarity**, smoothly linking parallel thematic craft across both poems.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "imagery-sound-connotation",
          question:
            "Read these lines from the **example poem** *The Charge of the Light Brigade* by Tennyson:\n*“Cannon to right of them, / Cannon to left of them, / Cannon in front of them / Volley'd and thunder'd...”*\n\nName the rhetorical device repeating the exact opening word *“Cannon”* at the start of three consecutive lines to create overwhelming entrapment.",
          answer: {
            type: "text",
            accept: ["anaphora"],
            display: "Anaphora",
          },
          traps: [
            {
              spec: { type: "text", accept: ["enjambment", "caesura"] },
              feedback: "Those describe lineation/pauses; we want the eight-letter Greek term for repeating the same opening word(s) at the start of successive lines.",
            },
          ],
          hints: [
            "An eight-letter rhetorical term starting with 'ana-' for repetition at the beginning of consecutive lines.",
            "Also used in speeches like 'We shall fight... We shall fight...'.",
          ],
          solution: [
            "Repeating *“Cannon”* at the opening of successive lines is **anaphora**, hammering home encirclement from every side.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "comparative-poetry-essay",
          question:
            "Give ONE high-precision **contrast connective** (one word, e.g. beginning with *w* or *u*) that smoothly pivots from Poem A to a sharply different attitude in Poem B inside the same sentence.",
          answer: {
            type: "text",
            accept: ["whereas", "unlike", "conversely", "however", "yet", "although", "while"],
            display: "Whereas (or Unlike / Conversely)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["similarly", "likewise", "also", "equally"] },
              feedback: "That connective signals similarity rather than contrast!",
            },
          ],
          hints: [
            "Think of the single word that links 'Both poems explore power; ______ Poet A mocks tyranny, Poet B mourns ordinary soldiers.'",
            "Starts with 'wh-' or 'un-'.",
          ],
          solution: [
            "**Whereas** (as well as *unlike*, *conversely*, *however*) pivots smoothly into direct contrast within a woven paragraph.",
          ],
        },
        {
          id: "power-conflict-poetry-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "imagery-sound-connotation",
          marks: 3,
          question:
            "Read these original lines about an occupying patrol at night:\n\n*“Black boots struck sparks along the cobbles; / Soft shadows slipped sideways behind shuttered doors.”*\n\nExplain how the poet contrasts TWO distinct **sound devices** across lines 1 and 2 to capture the clash between violent authority and terrified citizens. [3 marks]",
          hints: [
            "Identify the harsh plosives in line 1 ('Black boots struck sparks... cobbles') and link them to aggressive military dominance.",
            "Identify the sibilance in line 2 ('Soft shadows slipped sideways... shuttered') and link it to stealthy fear or hiding.",
            "Explain how contrasting the two sound textures highlights the unequal power balance.",
          ],
          markScheme: [
            {
              point: "Identifies plosives in line 1 ('Black boots struck sparks', 'cobbles') mimicking heavy footsteps, violence or loud military power.",
              keywords: ["plosive", "black boots", "struck", "sparks", "loud", "aggress", "militar", "heavy"],
            },
            {
              point: "Identifies sibilance in line 2 ('Soft shadows slipped sideways', 'shuttered') evoking hushed stealth, fear or hiding.",
              keywords: ["sibilan", "soft shadows", "slipped", "hush", "whisper", "fear", "hiding", "stealth"],
            },
            {
              point: "Explains the contrast: booming acoustic authority drives ordinary residents into silent, shadowy retreat.",
              keywords: ["contrast", "juxtapos", "unequal", "intimidat", "retreat", "silenc", "dominan"],
            },
          ],
          modelAnswer:
            "In line 1, heavy plosives ('Black boots struck sparks... cobbles') burst aggressively off the tongue, acoustically mimicking violent marching authority claiming the street. By contrast, line 2 drops abruptly into hushed sibilance ('Soft shadows slipped sideways... shuttered'), reducing the townspeople to fearful whispers retreating behind closed doors. Juxtaposing loud percussive dominance against furtive stillness vividly enacts how military intimidation silences ordinary life.",
          commonError:
            "Only saying 'both lines use alliteration' without distinguishing harsh plosives from hushed sibilance or linking the acoustic shift to power versus fear.",
        },
        {
          id: "power-conflict-poetry-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "imagery-sound-connotation",
          marks: 4,
          question:
            "Read these lines from the **example poem** *Dulce et Decorum Est* by Wilfred Owen:\n\n*“Bent double, like old beggars under sacks, / Knock-kneed, coughing like hags, we cursed through sludge...”*\n\nUsing WHAT–HOW–WHY + single-word zoom, analyse how Owen's **imagery and sound craft** dismantle romantic myths of warfare. [4 marks]",
          hints: [
            "Open with a conceptual WHAT claim about stripping soldiers of heroic youth and glamour.",
            "Analyse the degrading similes ('like old beggars', 'like hags') ageing young troops into broken outcasts.",
            "Analyse the harsh plosive/guttural sounds ('Bent double', 'Knock-kneed', 'coughing', 'cursed') plus single-word zoom on 'sludge' or 'beggars'.",
            "Connect to Owen's broader protest against wartime recruitment propaganda.",
          ],
          markScheme: [
            {
              point: "Makes a conceptual claim that Owen strips away romantic glory to expose war's degrading physical toll.",
              keywords: ["degrad", "glory", "propaganda", "heroic", "toll", "reality", "unheroic", "shatter"],
            },
            {
              point: "Analyses the similes ('like old beggars', 'like hags') showing premature ageing, poverty or loss of youthful strength.",
              keywords: ["simile", "beggars", "hags", "age", "aged", "poverty", "broken", "exhaust"],
            },
            {
              point: "Analyses sound craft (harsh plosives/guttural consonants in 'Bent double', 'Knock-kneed', 'coughing', 'cursed') AND/OR zooms into 'sludge' (suffocating filth/heaviness).",
              keywords: ["plosive", "knock-kneed", "bent double", "sludge", "filth", "heavy", "laboured", "clatter"],
            },
            {
              point: "Uses tentative phrasing ('arguably', 'implies', 'suggests') linking to Owen's indignant protest or reader shock.",
              keywords: ["arguably", "implies", "suggests", "perhaps", "protest", "indict", "shock", "horror"],
            },
          ],
          modelAnswer:
            "Owen systematically demolishes romantic propaganda by depicting young soldiers as physically degraded wrecks. His bleak similes comparing the men to 'old beggars' and 'hags' strip away youthful strength and honour, prematurely ageing them into exhausted outcasts. Acoustically, clumsy plosives and harsh consonants ('Bent double,' 'Knock-kneed,' 'coughing,' 'cursed') clatter painfully in the mouth to mimic laboured endurance, while the blunt noun 'sludge' drags the battlefield into heavy, suffocating filth. Arguably, this visceral ugliness implies bitter protest, shocking readers out of heroic illusions about war.",
          commonError:
            "Quoting the entire two lines without zooming into specific similes ('beggars'/'hags') or explaining why the harsh plosive sounds mirror physical collapse.",
        },
        {
          id: "power-conflict-poetry-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "comparative-poetry-essay",
          marks: 4,
          question:
            "Compare these two original short extracts on **power and memory**:\n\n**Poem A:** *“The dictator's bronze statue still glares over the avenue, / Yet pigeons nest boldly inside his hollow iron helmet.”*\n**Poem B:** *“Long after the fortress fell, my grandmother still checks the lock three times / Before switching off the kitchen light.”*\n\nWrite ONE **integrated comparative paragraph (C–A–P–B–S)** comparing how both poets present the lasting reach — or collapse — of oppressive power. [4 marks]",
          hints: [
            "Open with a conceptual comparative claim noting how Poem A shows external power mocked by decay, whereas Poem B shows psychological fear enduring long after walls fall.",
            "Analyse Poem A with embedded micro-quotes ('glares', 'hollow iron helmet', 'pigeons nest boldly').",
            "Use a clear contrast connective ('Conversely', 'Whereas', 'By contrast') to pivot into Poem B.",
            "Analyse Poem B ('checks the lock three times', 'kitchen light') and finish with a sharp synthesis judgement.",
          ],
          markScheme: [
            {
              point: "Opens with a conceptual comparative claim contrasting crumbling public monuments (Poem A) against enduring psychological fear (Poem B).",
              keywords: ["endur", "psycholog", "crumbl", "fragil", "last", "contrast", "outlast", "fear"],
            },
            {
              point: "Analyses Poem A using embedded evidence ('glares', 'hollow', 'pigeons nest boldly') showing nature mocking empty tyranny.",
              keywords: ["glares", "hollow", "pigeons", "mock", "empty", "satir", "deflate"],
            },
            {
              point: "Uses an explicit comparative contrast connective ('whereas', 'conversely', 'by contrast', 'however') to weave Poem B inside the same paragraph.",
              keywords: ["whereas", "conversely", "by contrast", "however", "unlike"],
            },
            {
              point: "Analyses Poem B's domestic habit ('checks the lock three times', 'kitchen light') and synthesises that trauma lingers inside memory even after regimes fall.",
              keywords: ["lock three times", "kitchen", "trauma", "habit", "memory", "lingers", "haunt", "internal"],
            },
          ],
          modelAnswer:
            "Both poets examine the aftermath of tyranny, yet they diverge sharply on whether oppressive power truly dies. In Poem A, the statue still 'glares,' attempting intimidating dominance, yet 'pigeons nest boldly inside his hollow iron helmet' — the adjective 'hollow' ironically mocking empty authority reclaimed effortlessly by everyday nature. Conversely, Poem B suggests that even after the physical 'fortress fell,' fear endures psychologically as the grandmother 'checks the lock three times' beside her ordinary 'kitchen light.' Together, the extracts imply that while stone monuments easily become laughable relics, trauma lingers quietly inside human memory.",
          commonError:
            "Writing two disconnected paragraphs with no comparative connective pivot, or merely saying 'Poem A is about a statue and Poem B is about a grandmother.'",
        },
        {
          id: "power-conflict-poetry-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "comparative-poetry-essay",
          marks: 5,
          question:
            "Compare how these two public-domain **example poem** excerpts present **conflict and obedience**:\n\n**Example Poem A** (Tennyson, *The Charge of the Light Brigade*): *“Theirs not to make reply, / Theirs not to reason why, / Theirs but to do and die.”*\n**Example Poem B** (Wilfred Owen, *Exposure*): *“Our brains ache, in the merciless iced east winds that knive us... / But nothing happens.”*\n\nWrite a polished **conceptual comparative thesis + one woven analytical paragraph** comparing: (1) shared theme with clear tonal divergence, (2) Poem A's rhythm/anaphora and attitude to duty, (3) a clear comparative pivot, (4) Poem B's personification/refrain and attitude to futility, and (5) a closing synthesis on reader effect. [5 marks]",
          hints: [
            "Draft a 'Both... however, whereas...' comparative thesis contrasting heroic commemoration against bleak anti-war disillusionment.",
            "Analyse Tennyson's anaphora ('Theirs not...') and brisk, driving rhythm enforcing unquestioning obedience.",
            "Pivot cleanly ('By contrast', 'Conversely', 'Whereas') into Owen's lines.",
            "Analyse Owen's violent personification ('merciless iced east winds that knive us') and deflated refrain ('But nothing happens.').",
            "Close with a sharp synthesis judging how each poet positions the reader toward military sacrifice.",
          ],
          markScheme: [
            {
              point: "Includes a conceptual comparative thesis uniting both poems around soldiers' powerlessness/conflict while diverging on tone (commemoration vs disillusionment/protest).",
              keywords: ["commemorat", "honour", "honor", "disillusion", "protest", "futility", "obedien", "sacrifice"],
            },
            {
              point: "Analyses Example Poem A's anaphora ('Theirs not...'), driving rhythm or stark rhyme ('reply / why / die') enacting unquestioning duty.",
              keywords: ["anaphora", "theirs not", "rhythm", "do and die", "duty", "discipline", "marching", "command"],
            },
            {
              point: "Uses a clear comparative connective ('whereas', 'conversely', 'by contrast', 'however') linking both poems inside the paragraph.",
              keywords: ["whereas", "conversely", "by contrast", "however", "unlike"],
            },
            {
              point: "Analyses Example Poem B's hostile personification ('knive us', 'merciless') and/or anti-climactic refrain ('But nothing happens.') exposing passive waste.",
              keywords: ["personif", "knive", "merciless", "refrain", "nothing happens", "passive", "winter", "nature"],
            },
            {
              point: "Closes with an evaluative synthesis comparing reader impact (stirring awe/admiration vs aching grief/outrage at senseless waste).",
              keywords: ["admiration", "awe", "grief", "waste", "sympathy", "outrage", "reader", "ultimately"],
            },
          ],
          modelAnswer:
            "Both poets expose soldiers trapped beneath forces larger than themselves; however, whereas Tennyson commemorates noble obedience in fatal action, Owen protests the numbing futility of passive endurance. In Example Poem A, insistent anaphora ('Theirs not... Theirs not...') and brisk marching rhythm drive the cavalry straight from 'reason why' into 'do and die,' honouring collective discipline even inside disaster. Conversely, Example Poem B strips away heroic momentum entirely: Owen personifies 'merciless iced east winds that knive us,' turning nature into a sadistic assassin before deflating tension with the haunting refrain 'But nothing happens.' Ultimately, while Tennyson stirs solemn admiration for brave sacrifice, Owen leaves the reader aching with grief and outrage at war's senseless waste.",
          commonError:
            "Treating both poems in separate blocks or forgetting to analyse a poetic method (anaphora/rhythm in Poem A, personification/refrain in Poem B).",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "power-conflict-poetry-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "poetic-form-metre-structure",
      question:
        "Read these original closing lines of a 14-line conflict sonnet:\n*“They swore the fortress wall would never yield; / Yet moss now climbs across the iron gate, / While rusted cannons sleep inside the wheatfield's mud.”*\nNotice that line 14 breaks the regular 10-syllable rhythm and drops the expected closing rhyme (*yield / gate / mud*). Why is this **formal disruption** analytically significant?",
      options: [
        "Breaking neat sonnet symmetry mirrors military permanence yielding to quiet, organic peace",
        "Dropping rhyme proves the speaker still supports building stronger stone fortresses",
        "Rusted cannons sleeping in wheatfields create an urgent, galloping cavalry charge rhythm",
        "Violating sonnet expectations removes all thematic tension between warfare and nature",
      ],
      answerIndex: 0,
      hints: [
        "Notice what happens simultaneously in meaning (moss and wheat reclaiming cannons) and in form (the strict sonnet loosening).",
        "Compare rigid military architecture ('fortress wall') with organic growth ('moss', 'wheatfield').",
        "Ask how relaxing the rigid rhyme scheme physically mirrors nature disarming human control.",
      ],
      explanation:
        "Just as *“moss”* and *“wheatfield”* soften and reclaim *“rusted cannons,”* loosening the rigid sonnet's rhyme and metre structurally enacts military rigidity giving way to peaceful natural reclamation.",
    },
    {
      id: "power-conflict-poetry-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "imagery-sound-connotation",
      question:
        "Read these original line endings from an anti-war poem:\n*“The bright brass bugles called across the **hill**, / While silent stretchers waited in the **hall**.”*\n\nName the exact literary term (hyphenated or Greek-rooted) for pairing *“hill”* and *“hall”* — identical consonant frame with a hollow downward vowel shift.",
      answer: {
        type: "text",
        accept: ["half-rhyme", "half rhyme", "pararhyme", "slant rhyme", "near rhyme"],
        display: "Half-rhyme (pararhyme)",
      },
      hints: [
        "Compare the consonants (h - l) and the vowels (short 'i' dropping to broad 'a').",
        "Wilfred Owen famously used this device in anti-war poetry to withhold musical resolution.",
        "Give the hyphenated term ('h___-r____') or its nine-letter technical twin ('p________').",
      ],
      solution: [
        "Matching consonants while dropping the vowel pitch (*hill / hall*) is **half-rhyme** (**pararhyme**), evoking hollow anti-climax.",
      ],
    },
    {
      id: "power-conflict-poetry-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "comparative-poetry-essay",
      question:
        "A student compares two unseen Power & Conflict poems:\n- **Poem A** uses a **dramatic monologue** spoken by a smug colonial governor bragging about mapping conquered rivers.\n- **Poem B** uses **free verse** spoken by a displaced child remembering the untranslatable local names of those same rivers.\nWhich conceptual line of argument unlocks the **deepest** Year 9 comparison?",
      options: [
        "Both poems mention flowing rivers, proving both poets primarily enjoy writing serene nature descriptions.",
        "Both poems treat naming as contested power: Poem A maps rivers to claim control, whereas Poem B remembers to resist.",
        "Poem A is structurally superior to Poem B solely because dramatic monologues always contain far more lines.",
        "Poem A has an angry political tone whereas Poem B has a lighthearted tone simply because a child speaks.",
      ],
      answerIndex: 1,
      hints: [
        "Look beyond the literal noun 'rivers' — ask what BOTH speakers are actually doing with *names and language*.",
        "Contrast the governor's possessive mapping against the child's private memory.",
        "Find the option framing language itself as the site of power and resistance.",
      ],
      explanation:
        "Framing **language as a battleground of power** — imperial mapping seeking possession versus personal naming resisting erasure — transforms a surface similarity (*rivers*) into a brilliant, top-band conceptual thesis.",
    },
    {
      id: "power-conflict-poetry-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "poetic-form-metre-structure",
      question:
        "A conflict poem written strictly in steady ten-syllable unrhymed lines (*da-DUM × 5*) suddenly breaks into a three-word line at its crisis. Name the **two-word poetic form** of unrhymed iambic pentameter used before the break.",
      answer: {
        type: "text",
        accept: ["blank verse"],
        display: "Blank verse",
      },
      hints: [
        "Notice the two clues: 'ten-syllable' (iambic pentameter) AND 'unrhymed'.",
        "Do not write 'free verse' — free verse has no regular metre.",
        "Two short words: 'b____ v____'.",
      ],
      solution: [
        "Unrhymed iambic pentameter is **blank verse** — establishing steady metrical order so any abrupt three-word break lands with maximum shock.",
      ],
    },
    {
      id: "power-conflict-poetry-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "imagery-sound-connotation",
      question:
        "Read this original line from a poem about an oppressive surveillance state:\n*“Glass towers listened coldly as every whisper was filed, stamped, numbered and archived.”*\n\nName the **two-word linguistic term** for the cluster of administrative words (*“filed”*, *“stamped”*, *“numbered”*, *“archived”*) used here to dehumanise citizens.",
      answer: {
        type: "text",
        accept: ["semantic field", "lexical field", "a semantic field", "a lexical field"],
        display: "Semantic field",
      },
      hints: [
        "All four verbs belong to the single conceptual world of cold bureaucracy and record-keeping.",
        "First word means 'relating to word meaning' ('s_______'); second word is 'field'.",
        "Two words total.",
      ],
      solution: [
        "Clustering *“filed”*, *“stamped”*, *“numbered”* and *“archived”* builds a **semantic field** of bureaucracy, portraying surveillance as impersonal clerical erasure.",
      ],
    },
    {
      id: "power-conflict-poetry-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "themes-of-power-conflict",
      marks: 4,
      question:
        "Read these original lines from a dramatic monologue spoken by a conquering general inspecting a captured city:\n\n*“Admire how neatly the new avenue runs straight — / We had to clear three crooked alleys of noisy weavers, / Of course, yet order always looks cleaner on my map. / Do note the bronze plaque spelling my name correctly.”*\n\nAnalyse how the poet uses **dramatic monologue**, **diction** and **ironic subtext** to condemn authoritarian arrogance. [4 marks]",
      hints: [
        "Separate the smug speaker from the critical poet: notice who he addresses ('Admire...', 'Do note...') like a guide showing off a trophy.",
        "Zoom into euphemistic, sanitising diction ('neatly', 'clear', 'cleaner on my map') hiding brutal displacement of real people ('noisy weavers').",
        "Analyse the chilling dismissiveness of the parenthesis/clause 'Of course' treating ruined lives as trivial inconvenience.",
        "Zoom into his closing obsession ('bronze plaque spelling my name correctly') exposing petty narcissism beneath grand talk of 'order'.",
      ],
      markScheme: [
        {
          point: "Distinguishes speaker from poet, noting how the dramatic monologue's imperative tour ('Admire', 'Do note') unwittingly exposes vanity to the reader.",
          keywords: ["speaker", "poet", "imperative", "admire", "do note", "vanity", "unwitting"],
        },
        {
          point: "Zooms into sanitising/euphemistic language ('neatly', 'clear', 'cleaner on my map') disguising violence and erasure as tidy planning.",
          keywords: ["euphemis", "clear", "cleaner", "map", "sanitis", "eras", "displac", "neat"],
        },
        {
          point: "Analyses the callous contrast with living human community ('three crooked alleys of noisy weavers', casual 'Of course') exposing dehumanisation.",
          keywords: ["weavers", "crooked", "of course", "callous", "dehumanis", "indifferen", "human"],
        },
        {
          point: "Analyses the closing fixation on the 'bronze plaque spelling my name correctly' exposing hollow narcissism/hubris beneath talk of 'order'.",
          keywords: ["bronze plaque", "my name", "narciss", "hubris", "ego", "petty", "selfish"],
        },
      ],
      modelAnswer:
        "Through dramatic monologue, the poet lets the general condemn himself before a silent listener: commanding imperatives like 'Admire' and 'Do note' cast the conquered city as a personal trophy, unwittingly exposing vanity. Sanitising euphemisms — 'neatly,' 'clear,' and 'cleaner on my map' — reduce the brutal displacement of 'noisy weavers' to tidy geometry, while the casual aside 'Of course' reveals chilling indifference to erased human lives. Finally, his petty closing obsession with the 'bronze plaque spelling my name correctly' punctures every claim of civic order, exposing hollow narcissism and hubris.",
      commonError:
        "Writing 'the poet likes neat maps' (confusing speaker and poet!) or overlooking the chilling euphemism hidden inside the ordinary verb 'clear'.",
    },
    {
      id: "power-conflict-poetry-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "poetic-form-metre-structure",
      marks: 4,
      question:
        "Read these original lines describing a coastal storm striking a fishing village:\n\n*“The breakwater braced its concrete chest — crack —\nblack surf vaulted straight across\nthe shutters where three children counted\nseconds between thunder.”*\n\nAnalyse how the poet combines **personification**, **sound craft**, **caesura** and **enjambment** to make nature feel overwhelmingly superior to human defences. [4 marks]",
      hints: [
        "Examine the personification of human defence ('braced its concrete chest') versus agile, athletic assault ('vaulted').",
        "Zoom into the violent mid-line caesura + plosive onomatopoeia ('— crack —') shattering the seawall physically inside the line.",
        "Track the cascading enjambment across lines 2–4 ('across / the shutters... counted / seconds') mirroring unstoppable flooding.",
        "Link the final zoom onto 'three children counted seconds' to fragile human vulnerability beside nature's power.",
      ],
      markScheme: [
        {
          point: "Analyses personification/contrast between 'braced its concrete chest' (rigid human defiance) and 'vaulted' (effortless natural dominance).",
          keywords: ["braced", "concrete chest", "vaulted", "defiance", "agile", "overpower", "effortless"],
        },
        {
          point: "Analyses the abrupt caesura and harsh plosive onomatopoeia ('— crack —') enacting the literal fracturing of human defence.",
          keywords: ["crack", "plosive", "onomatopoeia", "fractur", "break", "shatter", "snap"],
        },
        {
          point: "Analyses the tumbling enjambment ('across / the shutters', 'counted / seconds') mimicking unstoppable surging water and breathless fear.",
          keywords: ["run-on", "surging", "spill", "unstoppable", "breathless", "cascad", "flood"],
        },
        {
          point: "Explains the poignant shift to 'three children counted seconds' highlighting innocent vulnerability dwarfed by natural fury.",
          keywords: ["children", "seconds", "vulnerab", "innocent", "fragil", "helpless", "dwarfed"],
        },
      ],
      modelAnswer:
        "The poet sets human pride up to collapse by giving the seawall stubborn resolve ('braced its concrete chest'), only for that defence to snap instantly at the harsh plosive onomatopoeia '— crack —', whose sudden caesura visually fractures the line itself. Immediately, tumbling enjambment ('across / the shutters' and 'counted / seconds') spills uncontrollably down the stanza as the agile verb 'vaulted' shows the surf leaping effortlessly over concrete. Landing finally on 'three children' measuring 'seconds between thunder' narrows the scene to fragile, helpless innocence completely dwarfed by nature's fury.",
      commonError:
        "Spotting 'crack' and enjambment without connecting the dash-framed break to the wall splitting and the cascading line breaks to water pouring inward.",
    },
    {
      id: "power-conflict-poetry-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "comparative-poetry-essay",
      marks: 5,
      question:
        "Compare these two original short poems on **identity and power**:\n\n**Poem A (*The Flagmaker's Ledger*):**\n*“Four thousand yards of scarlet cloth, stitched tight,\nMarch down the square in faultless crimson rows;\nNo loose thread dares remember what it weighed.”*\n\n**Poem B (*The Unfolded Map*):**\n*“My grandfather's atlas splits along the spine —\nBorders drawn in pencil, rubbed grey, redrawn again —\nYet still he traces rivers no empire could rename.”*\n\nWrite a **conceptual comparative thesis + ONE woven analytical paragraph (C–A–P–B–S)** comparing how both poets present **control versus resistance** through imagery, form/punctuation and closing tone. [5 marks]",
      hints: [
        "Open with a sharp conceptual thesis: both poems explore political authority trying to impose uniformity, yet Poem A emphasises erasure through discipline whereas Poem B celebrates quiet endurance of memory.",
        "Analyse Poem A: tight regularity, semantic field of regimentation ('stitched tight', 'faultless crimson rows') and chilling closing line ('No loose thread dares remember').",
        "Pivot with an explicit contrast connective ('Conversely', 'Whereas', 'By contrast').",
        "Analyse Poem B: fractured dashes ('—'), impermanent pencil borders ('rubbed grey, redrawn'), and volta ('Yet still') turning to enduring natural identity ('rivers no empire could rename').",
        "Synthesise the closing contrast: forced silence in Poem A versus quiet, unbreakable resilience in Poem B.",
      ],
      markScheme: [
        {
          point: "States a conceptual comparative thesis contrasting Poem A's enforced uniformity/erasure against Poem B's quiet resilience/resistance.",
          keywords: ["uniform", "eras", "resilien", "resistan", "control", "memory", "endur", "identity"],
        },
        {
          point: "Analyses Poem A's craft ('stitched tight', 'faultless crimson rows', 'No loose thread dares remember') showing ruthless suppression of individuality or conscience.",
          keywords: ["stitched tight", "crimson", "loose thread", "suppress", "individual", "regiment", "dissent"],
        },
        {
          point: "Uses an explicit comparative connective ('whereas', 'conversely', 'by contrast', 'however', 'unlike') inside the woven paragraph.",
          keywords: ["whereas", "conversely", "by contrast", "however", "unlike"],
        },
        {
          point: "Analyses Poem B's fragile artificial borders ('splits along the spine', 'pencil, rubbed grey') and volta ('Yet still') leading to enduring 'rivers no empire could rename'.",
          keywords: ["pencil", "rubbed grey", "yet still", "volta", "rivers", "rename", "impermanen", "artificial"],
        },
        {
          point: "Synthesises the contrasting endings/tones: ominous compliance in Poem A versus dignified, hopeful permanence of heritage in Poem B.",
          keywords: ["ominous", "complian", "digni", "hope", "heritage", "outlast", "ultimately", "defian"],
        },
      ],
      modelAnswer:
        "Both poets examine how political power attempts to overwrite individual identity; however, whereas Poem A portrays authoritarian conformity silencing memory altogether, Poem B celebrates how lived heritage quietly outlasts artificial empires. In Poem A, tightly measured lines and disciplined diction ('stitched tight,' 'faultless crimson rows') enact military uniformity, culminating in the chilling warning that 'No loose thread dares remember' — a metaphor equating individual dissent or conscience with a flaw to be erased. Conversely, Poem B fractures its lines with reflective dashes to expose imperial borders as fragile 'pencil, rubbed grey,' before pivoting on the defiant volta 'Yet still' toward 'rivers no empire could rename.' Ultimately, while Poem A closes on ominous enforced compliance, Poem B leaves the reader with dignified hope that natural belonging and personal memory endure far longer than political maps.",
      commonError:
        "Writing about Poem A and Poem B in two separate blocks or missing the structural volta 'Yet still' that flips Poem B from fragility to endurance.",
    },
  ],
};
