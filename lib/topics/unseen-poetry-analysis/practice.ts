import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      id: "unseen-poetry-analysis-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "first-read-protocol",
      question:
        "Read this fresh unseen stanza:\n\n*For ten winters the bench stood splintered in rain,*\n*yet every April moss embroidered its rough wood green.*\n\nWhat Italian literary term names the pivotal turning point launched by *\"yet\"* in line 2?",
      answer: {
        type: "text",
        accept: ["volta", "the volta", "a volta"],
        display: "volta",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura"] },
          feedback: "Caesura is a punctuation break inside a line; the emotional or logical turning point of a poem uses a five-letter Italian noun.",
        },
      ],
      hints: [
        "Italian for 'turn' — often signalled by pivot words like Yet, But, Still, or Now.",
        "Five-letter noun starting with 'v'.",
      ],
      solution: [
        "The pivot on *'yet'* shifts mood from winter decay (*splintered in rain*) to quiet natural renewal (*embroidered... green*).",
        "This emotional turning point is called the **volta**.",
      ],
    },
    {
      id: "unseen-poetry-analysis-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "unseen-structure-form",
      question:
        "Read these unseen lines:\n\n*The tide climbs past the granite pier*\n*and gathers every scattered shell*\n*into its dark, unhurried palm.*\n\nName the structural technique of running a sentence across line breaks without terminal punctuation.",
      answer: {
        type: "text",
        accept: ["enjambment", "enjambement"],
        display: "enjambment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura"] },
          feedback: "Caesura is a pause inside a line; letting a sentence spill across the end of a line without punctuation is enjambment.",
        },
        {
          spec: { type: "text", accept: ["end-stopped", "end stopped"] },
          feedback: "End-stopped lines close cleanly with punctuation at the right edge; these lines have no punctuation at line ends 1 and 2.",
        },
      ],
      hints: [
        "Derived from the French for 'striding over' — the sentence steps straight across the line ending.",
        "Starts with 'enj-'.",
      ],
      solution: [
        "Allowing a sentence to overflow past line endings without punctuation is **enjambment**, here mimicking the rising tide's smooth advance.",
      ],
    },
    {
      id: "unseen-poetry-analysis-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "unseen-structure-form",
      question:
        "Read this unseen line:\n\n*We packed the books, the lamps — then stopped.*\n\nWhat literary term names the deliberate mid-line pause created by the dash (`—`) inside this line?",
      answer: {
        type: "text",
        accept: ["caesura", "medial caesura", "a caesura"],
        display: "caesura",
      },
      traps: [
        {
          spec: { type: "text", accept: ["enjambment", "enjambement"] },
          feedback: "Enjambment spills over a line ending without punctuation; a strong pause *inside* a poetic line is a caesura.",
        },
      ],
      hints: [
        "Seven-letter Latin-derived noun starting with 'cae-' meaning a mid-line cut or pause.",
        "Here the mid-line dash visually snaps brisk packing into sudden grief.",
      ],
      solution: [
        "A deliberate punctuation pause inside a line of poetry is a **caesura**.",
      ],
    },
    {
      id: "unseen-poetry-analysis-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "decoding-imagery-ambiguity",
      question:
        "Read this unseen metaphor about a stern headteacher:\n\n*His voice was **winter granite** in the hall.*\n\nApplying the **Vehicle Qualities** method, which analysis best unlocks this image?",
        options: [
          "Granite is cold, heavy, and unyielding — implying merciless, emotionless authority",
          "The poet uses a metaphor here to make the speech sound more vivid and interesting",
          "Winter granite proves the school hall had poor stone heating during December",
          "Comparing speech to rock creates gentle warmth welcoming students into assembly",
        ],
        answerIndex: 0,
        hints: [
          "List literal qualities of 'winter granite': freezing, dense, immovable, impossible to soften.",
          "Transfer those qualities onto 'His voice' rather than writing generic filler.",
        ],
        explanation:
          "Unpacking literal qualities of *'winter granite'* (freezing, immovable, rigid) immediately illuminates an authority figure devoid of empathy or flexibility.",
    },
    {
      id: "unseen-poetry-analysis-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "decoding-imagery-ambiguity",
      question:
        "In metaphor analysis, a line calls an empty bedroom *'a museum of folded sleeves'*. The bedroom is the **Tenor** (literal subject). What is the technical term for the borrowed image (*'museum'*) used to describe it?",
      answer: {
        type: "text",
        accept: ["vehicle", "the vehicle"],
        display: "vehicle",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tenor"] },
          feedback: "The Tenor is the literal subject ('empty bedroom'); name the figurative image carrying new meaning onto it.",
        },
      ],
      hints: [
        "Literally means a 'carrier' — the image that carries fresh qualities onto the literal subject.",
        "Seven-letter word starting with 'v' paired with 'Tenor'.",
      ],
      solution: [
        "Every metaphor pairs a **Tenor** (literal subject) with a **Vehicle** (the figurative image carrying connotations onto it).",
      ],
    },
    {
      id: "unseen-poetry-analysis-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "unseen-structure-form",
      question:
        "Read these unseen end-words from a stanza about quiet tension after an argument:\n\n*...room / ...rim*\n*...warm / ...worn*\n\nWhat term names an imperfect, near-matching chime that creates acoustic unease?",
      answer: {
        type: "text",
        accept: ["half-rhyme", "half rhyme", "slant rhyme", "near rhyme", "pararhyme"],
        display: "half-rhyme",
      },
      traps: [
        {
          spec: { type: "text", accept: ["full rhyme", "perfect rhyme"] },
          feedback: "Full rhymes chime cleanly ('light/night'); 'warm/worn' shares consonant framing while deliberately missing the exact chime.",
        },
      ],
      hints: [
        "Two accepted terms: '___-rhyme' (meaning 50% matched) or '___ rhyme' (meaning slightly off-angle).",
        "Notice 'warm / worn' refuses tidy musical harmony.",
      ],
      solution: [
        "Imperfect chimes such as *room/rim* and *warm/worn* are **half-rhyme** (also called *slant rhyme* or *pararhyme*), evoking subtle emotional discord.",
      ],
    },
    {
      id: "unseen-poetry-analysis-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "writing-high-band-unseen",
      question:
        "Which student sentence **avoids feature-spotting** when analysing the unseen line *\"Grey gulls stitch low across the silent quay\"*?",
      options: [
        "The poet uses alliteration on 'grey gulls' to draw the reader's eye down the page.",
        "Soft sibilance in 'stitch... silent' hushes the quay, casting gulls as quiet menders of loneliness.",
        "This line contains imagery and consonant sounds that make the stanza flow nicely.",
        "Here we see a bird flying over a harbour which paints a nice picture in our minds.",
      ],
      answerIndex: 1,
      hints: [
        "Reject generic statements ('draw the reader's eye', 'flow nicely', 'nice picture').",
        "Look for a sound/image linked directly to a specific emotional mood and theme.",
      ],
      explanation:
        "Connecting hushed sibilance (*'stitch... silent'*) to delicate mending (*'stitch'*) transforms a technical label into genuine insight about quiet coastal solitude.",
    },
    {
      id: "unseen-poetry-analysis-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "first-read-protocol",
      question:
        "In unseen poetry essays, what term should you use for the crafted first-person voice (*\"I\"*) inside the poem so you do not automatically assume it is the poet's own autobiography?",
      answer: {
        type: "text",
        accept: ["speaker", "the speaker", "persona", "the persona", "narrator", "poetic voice"],
        display: "speaker",
      },
      traps: [
        {
          spec: { type: "text", accept: ["poet", "author"] },
          feedback: "The poet is the writer crafting the poem; use a different term for the voice speaking *inside* the poem.",
        },
      ],
      hints: [
        "Say 'the ___ confesses', while 'the poet crafts...'.",
        "Either a seven-letter everyday word ('s______') or its Latin-derived synonym ('p______').",
      ],
      solution: [
        "Always refer to the voice inside the poem as the **speaker** (or *persona*), reserving **the poet** for the writer's craft choices.",
      ],
    },
    {
      id: "unseen-poetry-analysis-quiz-q09",
      kind: "written",
      difficulty: "core",
      guideRef: "decoding-imagery-ambiguity",
      marks: 3,
      question:
        "Read this fresh unseen stanza about an abandoned school playground:\n\n*Swings hang like stopped pendulums in dusk;*\n*chalk hopscotch squares dissolve in rain,*\n*yet dandelions prize up the tarmac seam.*\n\nAnalyse how the poet uses **imagery and the volta** to contrast fading childhood with persistent life. (3 marks)",
      hints: [
        "Unpack the literal qualities of 'stopped pendulums' (frozen time, stillness) and 'dissolve' (fragile erasure).",
        "Identify the volta ('yet') pivoting from melancholy stillness into energetic nature.",
        "Zoom into the active verb 'prize up' showing stubborn natural force cracking human tarmac.",
      ],
      modelAnswer:
        "Initially, the poet evokes eerie, arrested childhood through the simile 'stopped pendulums', whose connotations of halted clocks suggest time itself has frozen over the empty yard, reinforced by chalk squares that 'dissolve' into fragile erasure. At the volta 'yet', however, the mood pivots from wistful decay to quiet resilience. The strenuous verb 'prize up' personifies humble 'dandelions' as stubborn levers cracking rigid 'tarmac', implying that living vitality quietly reclaims even abandoned human spaces.",
      markScheme: [
        {
          point: "Unpacks 'stopped pendulums' (frozen time/stillness) or 'dissolve' (fragile fading of childhood).",
          keywords: ["pendulum", "clock", "frozen", "halted", "dissolv", "eras", "still"],
        },
        {
          point: "Identifies the volta ('yet') shifting tone from decay/absence toward vitality or resilience.",
          keywords: ["volta", "yet", "pivot", "shift", "resilien", "vital", "renewal"],
        },
        {
          point: "Zooms into 'prize up' or 'dandelions' cracking 'tarmac' to explain nature's persistent strength.",
          keywords: ["prize", "lever", "crack", "reclaim", "stubborn", "personif", "strength"],
        },
      ],
    },
    {
      id: "unseen-poetry-analysis-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "unseen-structure-form",
      marks: 3,
      question:
        "Read these unseen lines about saying goodbye at an airport gate:\n\n*You turned to wave once through the frosted glass*\n*and lifted both small mittens — then the queue*\n*closed round your coat and took you out of view.*\n\nExplain how **enjambment, caesura, and rhyme** work together to enact sudden separation. (3 marks)",
      hints: [
        "Explain what the enjambment from line 1 to line 2 ('glass / and lifted') enacts as the speaker tracks the goodbye.",
        "Zoom into the mid-line dash ('mittens — then') fracturing tenderness into sudden loss.",
        "Comment on the tight closing rhyming couplet ('queue / view') sealing the departure shut.",
      ],
      modelAnswer:
        "At first, enjambment carries the speaker's eye eagerly across lines 1 and 2 ('frosted glass / and lifted'), lingering on the tender gesture of waving mittens. Suddenly, the abrupt mid-line caesura ('mittens — then') snaps that fragile visual link, mimicking the crowd stepping directly into the line of sight. Enjambing 'the queue / closed' enacts the crowd sweeping inexorably across the gap, while the clipped final rhyming couplet ('queue / view') locks the separation shut with painful finality.",
      markScheme: [
        {
          point: "Links enjambment to tracking motion, lingering gaze, or the unstoppable sweep of the crowd.",
          keywords: ["enjamb", "lingering", "sweep", "crowd", "unstopp", "spill", "motion"],
        },
        {
          point: "Analyses the mid-line caesura (dash after 'mittens') severing the tender farewell abruptly.",
          keywords: ["caesura", "dash", "sever", "snap", "fractur", "abrupt", "ruptur"],
        },
        {
          point: "Comments on the closing rhyming couplet ('queue / view') sealing finality or closure.",
          keywords: ["couplet", "rhyme", "final", "lock", "seal", "closure", "shut"],
        },
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions each)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: Protocol, Imagery & Poetic Form Craft (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "unseen-poetry-analysis-p1",
      title: "Practice Paper 1 — Protocol, Imagery & Structure Craft",
      questions: [
        {
          id: "unseen-poetry-analysis-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "What term describes the plain, literal dictionary definition of a word (as opposed to its richer emotional connotations)?",
          answer: {
            type: "text",
            accept: ["denotation", "denotations"],
            display: "denotation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["connotation", "connotations"] },
              feedback: "Connotation is the implied emotional association; the literal dictionary meaning starts with 'd' (like 'dictionary').",
            },
          ],
          hints: [
            "Starts with 'd' — just like 'dictionary' definition.",
            "Ten-letter noun paired directly against 'connotation'.",
          ],
          solution: [
            "**Denotation** is a word's literal dictionary meaning, whereas **connotation** captures its emotional and cultural resonance.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "Read this unseen line:\n\n*Silver streams slip softly past the sleeping stones.*\n\nName the specific sound technique repeating hushed `/s/` sounds across the line.",
          answer: {
            type: "text",
            accept: ["sibilance", "sibilant"],
            display: "sibilance",
          },
          traps: [
            {
              spec: { type: "text", accept: ["alliteration"] },
              feedback: "Alliteration is the broad umbrella term; what is the *specific* term for repeated /s/ and /sh/ hissing or hushed sounds?",
            },
            {
              spec: { type: "text", accept: ["plosives", "plosive"] },
              feedback: "Plosives are hard percussive bursts (/p, b, t, d, k, g/); repeated /s/ sounds have a softer name.",
            },
          ],
          hints: [
            "Specific sound term for repeated /s/, /sh/, and soft /c/ sounds.",
            "Nine-letter noun starting with 'sib-'.",
          ],
          solution: [
            "Repeating `/s/` sounds (*Silver, streams, slip, softly, sleeping, stones*) is **sibilance** — here evoking hushed, soothing water.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "Read this unseen line:\n\n*Black boots battered the bolted timber door.*\n\nWhat phonetic term names harsh, percussive consonant bursts like `/b/`, `/t/`, and `/d/` used to replicate physical impact?",
          answer: {
            type: "text",
            accept: ["plosive", "plosives", "plosive sounds", "plosive alliteration"],
            display: "plosives",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sibilance", "sibilant"] },
              feedback: "Sibilance repeats soft or hissing /s/ sounds; harsh percussive /p, b, t, d, k, g/ bursts are plosives.",
            },
          ],
          hints: [
            "Think of 'explosive' bursts of air stopped and released by the lips or tongue.",
            "Seven/eight-letter word naming /p, b, t, d, k, g/ consonants.",
          ],
          solution: [
            "Percussive bursts on `/b/`, `/t/`, and `/d/` are **plosives**, acoustically hammering the line like boots striking wood.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "unseen-structure-form",
          question:
            "What term describes a poetic line that finishes neatly with punctuation (`., ; ! ?`) at its right-hand edge, creating finality or controlled containment?",
          answer: {
            type: "text",
            accept: ["end-stopped", "end stopped", "end-stopped line", "end stopped line", "end-stopping"],
            display: "end-stopped line",
          },
          traps: [
            {
              spec: { type: "text", accept: ["enjambment", "enjambement"] },
              feedback: "Enjambment has *no* punctuation at the line edge; closing the line cleanly with punctuation is its direct opposite.",
            },
          ],
          hints: [
            "The direct opposite of an enjambed (run-on) line.",
            "Two hyphenated words describing a line stopped cleanly at its end.",
          ],
          solution: [
            "A line closed cleanly by punctuation at its right edge is an **end-stopped line**.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "unseen-structure-form",
          question:
            "What two-word term describes modern poetry written with **no fixed rhyme scheme** and **no regular metrical beat**, relying instead on line breaks, white space, and natural speech cadence?",
          answer: {
            type: "text",
            accept: ["free verse"],
            display: "free verse",
          },
          traps: [
            {
              spec: { type: "text", accept: ["blank verse"] },
              feedback: "Blank verse is unrhymed *iambic pentameter* (fixed regular metre!); poetry without rhyme OR fixed metre is free verse.",
            },
          ],
          hints: [
            "Do not confuse this with blank verse (which still follows strict iambic pentameter!).",
            "Two words: '___ verse' (unconstrained by fixed rhyme or metre).",
          ],
          solution: [
            "Poetry unconstrained by fixed rhyme or regular metre is **free verse**.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "unseen-structure-form",
          question:
            "What single word names a **four-line stanza**, one of the most common building blocks found in unseen exam poems?",
          answer: {
            type: "text",
            accept: ["quatrain", "a quatrain"],
            display: "quatrain",
          },
          traps: [
            {
              spec: { type: "text", accept: ["couplet"] },
              feedback: "A couplet has 2 lines; look for the French-derived word for a 4-line stanza.",
            },
            {
              spec: { type: "text", accept: ["tercet"] },
              feedback: "A tercet has 3 lines; name a 4-line stanza.",
            },
          ],
          hints: [
            "Think of the French word 'quatre' (four).",
            "Eight-letter stanza term starting with 'q'.",
          ],
          solution: [
            "A four-line stanza is a **quatrain** (2 lines = couplet, 3 = tercet, 4 = quatrain).",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "first-read-protocol",
          question:
            "Read this fresh unseen stanza:\n\n**Empty Allotment**\n*Beanpoles lean like crooked ribs in mud;*\n*last autumn's twine still knots a brittle stem.*\n*Yet underneath the rotted compost lid,*\n*pale shoots push upward toward the chilly grey.*\n\nWhich concise summary best captures **both** the literal situation and the deeper theme?",
          options: [
            "Literally a ruined vegetable patch in winter; thematically, quiet renewal persisting beneath apparent decay",
            "Literally a guide on staking summer beans; thematically, the importance of replacing cheap garden string",
            "Literally an abandoned seaside dock in mist; thematically, human anger at stormy harbour weather",
            "Literally a cheerful spring flower festival; thematically, celebration of wealthy country estates",
          ],
          answerIndex: 0,
          hints: [
            "Apply Pass 1 of the 5-Minute Protocol: what physical scene is pictured in lines 1–4?",
            "Track the volta on 'Yet' in line 3 shifting from 'crooked ribs / brittle' to 'pale shoots push upward'.",
          ],
          explanation:
            "On the surface, the speaker observes an overgrown winter allotment; after the volta *'Yet'*, fragile *'pale shoots'* rising beneath rot express the deeper theme of **quiet renewal outlasting decay**.",
        },
        {
          id: "unseen-poetry-analysis-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "unseen-structure-form",
          question:
            "What term names a line or phrase deliberately repeated at intervals across a poem (such as *'We walked the shore'* returning later with a poignant twist as *'I walk the shore'*)?",
          answer: {
            type: "text",
            accept: ["refrain", "a refrain", "altered refrain"],
            display: "refrain",
          },
          traps: [
            {
              spec: { type: "text", accept: ["volta"] },
              feedback: "A volta is a turning point; a recurring chorus-like line echoed across stanzas has a different seven-letter name.",
            },
          ],
          hints: [
            "Think of a song's repeated chorus line — seven-letter noun starting with 'ref-'.",
            "When one word changes on its final return, it becomes an altered ___.",
          ],
          solution: [
            "A recurring line or phrase echoed across a poem is a **refrain**.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "Read this unseen poetic line:\n\n*A **bright ache** lingered where the lantern swung.*\n\nWhat literary term names placing two directly contradictory words (*'bright'* + *'ache'*) immediately side by side to capture bittersweet ambiguity?",
          answer: {
            type: "text",
            accept: ["oxymoron", "an oxymoron"],
            display: "oxymoron",
          },
          traps: [
            {
              spec: { type: "text", accept: ["simile"] },
              feedback: "A simile compares using 'like' or 'as'; fusing two opposite words right next to each other is an oxymoron.",
            },
          ],
          hints: [
            "Eight-letter Greek term meaning 'sharp-dull' (two direct opposites welded together).",
            "Captures bittersweet tension inside just two adjacent words.",
          ],
          solution: [
            "Fusing two contradictory terms (*'bright ache'*) side by side is an **oxymoron**, condensing bittersweet longing into two syllables.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "writing-high-band-unseen",
          question:
            "A Year 9 student writes this opening line for a 40-minute unseen exam essay on *Empty Allotment*:\n\n*\"In this essay I will write about metaphors, similes, and enjambment in the poem 'Empty Allotment'.\"*\n\nWhich revision turns this into a **top-band conceptual thesis**?",
          options: [
            "First I will discuss stanza one, then stanza two, and finally conclude with the last line.",
            "In 'Empty Allotment', the poet uses four lines and nice imagery to make a garden sound sad.",
            "Through 'Empty Allotment', the poet reframes winter decay not as defeat, but as the quiet shelter where resilient new life begins.",
            "This poem has many poetic techniques such as 'crooked ribs' which makes the reader read on.",
          ],
          answerIndex: 2,
          hints: [
            "A conceptual thesis states WHAT big idea the poem explores and HOW it evolves — never a dull technique checklist!",
            "Avoid empty filler ('nice imagery', 'makes the reader read on').",
          ],
          explanation:
            "Leading with a sharp conceptual claim — reframing decay as shelter for resilient renewal — immediately anchors every paragraph to an authentic argument about meaning.",
        },
        {
          id: "unseen-poetry-analysis-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-high-band-unseen",
          question:
            "What exam trap describes listing technical terms (*'the poet uses alliteration, a simile, and enjambment'*) without analysing how those methods create specific connotations, mood, or meaning?",
          answer: {
            type: "text",
            accept: ["feature-spotting", "feature spotting", "technique-spotting", "technique spotting"],
            display: "feature-spotting",
          },
          traps: [
            {
              spec: { type: "text", accept: ["single-word zoom", "word zoom"] },
              feedback: "Single-word zoom is a top-band strength; naming devices without unpacking their meaning is a negative exam trap.",
            },
          ],
          hints: [
            "Two hyphenated words: merely 'spotting' literary features like trainspotting without explaining effect.",
            "Section 4 devotes a whole section to killing this habit forever!",
          ],
          solution: [
            "Naming devices without connecting them to meaning or emotional effect is **feature-spotting** (or *technique-spotting*).",
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "first-read-protocol",
          marks: 3,
          question:
            "Read this fresh unseen short poem:\n\n**Grandfather's Watch**\n*Its cracked glass clouds the Roman twelve,*\n*its strap worn smooth as river stone —*\n*yet pressed against my quiet ear,*\n*his steady seconds march straight on.*\n\nUsing the **5-Minute Protocol**, explain the literal situation, the **tonal shift** at the volta, and the deeper theme. (3 marks)",
          hints: [
            "State clearly what the speaker is literally holding and doing.",
            "Identify the volta ('yet') and name two nuanced tone adjectives (avoid plain 'sad' or 'happy').",
            "Articulate the big human idea about mortality, memory, or enduring legacy.",
          ],
          modelAnswer:
            "Literally, the speaker holds an elderly grandfather's worn pocket or wrist watch up to their ear and listens to it still ticking. In lines 1–2, the tone is wistful and tender as physical wear ('cracked glass', 'worn smooth') registers ageing and loss. At the volta 'yet', however, the mood pivots to quiet comfort and reverent awe as 'steady seconds march straight on', conveying the deeper theme that human love and legacy endure steadily even after physical frailty or absence.",
          markScheme: [
            {
              point: "Accurately states the literal situation (holding/listening to a grandfather's old ticking watch).",
              keywords: ["listen", "tick", "holding", "worn", "ear", "keepsake", "heirloom"],
            },
            {
              point: "Identifies the volta ('yet') and tracks a nuanced tonal shift (e.g. wistful/tender → comforting/reverent/reassured).",
              keywords: ["volta", "yet", "wistful", "tender", "reverent", "comfort", "reassur"],
            },
            {
              point: "States a conceptual deeper theme about enduring memory, love, or legacy outliving physical wear.",
              keywords: ["legacy", "endur", "memory", "outliv", "mortal", "persist", "absence"],
            },
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          marks: 3,
          question:
            "Read this unseen couplet about an apology arriving too late:\n\n*Your letter settled on the sill like autumn frost —*\n*silver and polite, yet stiffening the leaves.*\n\nUnpack the **simile** and **productive ambiguity** here using tentative academic phrasing. (3 marks)",
          hints: [
            "List literal qualities of 'autumn frost' (bright/silver, crisp, freezing, lethal to living leaves).",
            "Explore Layer 1 (outward elegance/politeness: 'silver and polite').",
            "Explore Layer 2 using tentative verbs ('arguably', 'implies') on 'stiffening the leaves' (emotional coldness damaging fragile feeling).",
          ],
          modelAnswer:
            "Comparing the belated apology to 'autumn frost' creates rich, productive ambiguity. On the surface, the adjectives 'silver and polite' evoke crisp elegance and gleaming formality, suggesting the writer of the letter strives to appear gracious and composed. Yet arguably, the participle 'stiffening' exposes the destructive literal quality of frost: rather than warming old hurt, such belated formality chills living tenderness ('the leaves'), implying that overly polished apologies can freeze relationships instead of healing them.",
          markScheme: [
            {
              point: "Analyses the surface connotations of 'silver and polite' (elegance, formality, gleaming composure).",
              keywords: ["elegan", "formal", "gleam", "gracious", "compos", "surface", "polish"],
            },
            {
              point: "Unpacks the colder/destructive connotations of 'autumn frost' or 'stiffening' damaging fragile feeling.",
              keywords: ["chill", "freez", "cold", "destruct", "damage", "hurt", "stiff"],
            },
            {
              point: "Uses tentative academic phrasing ('arguably', 'implies', 'suggests') to articulate layered ambiguity.",
              keywords: ["arguably", "implies", "suggests", "ambigu", "layer", "alternativ"],
            },
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "unseen-structure-form",
          marks: 4,
          question:
            "Read these unseen opening and closing stanzas from a poem titled *Night Bus Home*:\n\n**Stanza 1 (4 lines):**\n*Rain needles every yellow pane*\n*as tired strangers guard their knees*\n*and stare beyond the misty lane*\n*toward separate lamps among the trees.*\n\n**Stanza 3 (2 lines):**\n*One shared sigh rises as the brakes release —*\n*brief neighbours carried gently toward peace.*\n\nAnalyse how **stanza shape, rhyme, and emotional progression** transform isolation into quiet community. (4 marks)",
          hints: [
            "Analyse Stanza 1's enclosed quatrain and defensive imagery ('guard their knees', 'separate lamps').",
            "Notice the structural shift from an ABAB quatrain to a unified closing rhyming couplet ('release / peace').",
            "Zoom into the shift from 'separate' to 'shared sigh' and 'brief neighbours'.",
            "Explain how the closing couplet's rhyme acoustically enacts brief harmony.",
          ],
          modelAnswer:
            "In Stanza 1, the regular alternating quatrain (ABAB) mirrors the rigid personal boundaries of urban commuting: the defensive verb 'guard' and adjective 'separate' depict exhausted passengers locked inside private solitude while harsh weather ('Rain needles') reinforces outer hostility. By Stanza 3, however, the poem compresses into a tender rhyming couplet, visually pulling the separated lines closer together. Replacing 'separate' with the collective warmth of 'One shared sigh' and 'brief neighbours' softens strangers into fleeting community, while the soothing full chime of 'release / peace' acoustically resolves earlier tension into quiet solace.",
          markScheme: [
            {
              point: "Analyses Stanza 1's imagery/quatrain establishing guarded urban isolation ('guard', 'separate', 'needles').",
              keywords: ["isolat", "guard", "separate", "solitud", "boundar", "quatrain", "hostil"],
            },
            {
              point: "Identifies the structural shift to a closing rhyming couplet compressing or unifying the ending.",
              keywords: ["couplet", "compress", "unif", "closer", "shrink", "shift"],
            },
            {
              point: "Tracks the lexical/emotional progression to collective warmth ('shared sigh', 'brief neighbours').",
              keywords: ["shared", "communit", "warmth", "fleeting", "neighbours", "collective", "tender"],
            },
            {
              point: "Links the harmonious final rhyme ('release / peace') directly to soothing resolution or solace.",
              keywords: ["release", "peace", "harmon", "solace", "resolv", "chime", "sooth"],
            },
          ],
        },
        {
          id: "unseen-poetry-analysis-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "writing-high-band-unseen",
          marks: 4,
          question:
            "Read this fresh unseen short poem:\n\n**Monsoon Courtyard**\n*Heat presses flat against the iron rail;*\n*cicadas saw the breathless afternoon*\n*until one thunderclap splits silver pale*\n*and pours cool mercy on the blistered stone.*\n\nWrite ONE **integrated top-band WHAT–HOW–WHY paragraph** (combining language AND structure) answering: *How does the poet present the arrival of the monsoon?* (4 marks)",
          hints: [
            "Open with a conceptual WHAT topic sentence contrasting oppressive heat with sudden relief.",
            "Embed micro-quotations analysing 'presses flat' / 'saw' (suffocating auditory pressure) versus 'cool mercy' (spiritual relief).",
            "Integrate structure: note the enjambment from line 2 into the volta 'until' and across lines 3–4 ('pale / and pours') mimicking rain unleashing.",
            "Finish with a nuanced, tentative reflection on nature's dual power to punish and heal.",
          ],
          modelAnswer:
            "Across a single unbroken quatrain, the poet dramatises the monsoon's arrival as a visceral shift from suffocating torment to spiritual release. Initially, oppressive verbs like 'presses flat' and the harsh metaphor 'cicadas saw' evoke grinding physical and acoustic weight, intensified by the end-stopped pause of the semicolon in line 1 that traps stale air inside the courtyard. Pivoting abruptly on the volta 'until', however, crisp enjambment spills unchecked across lines 3 and 4 ('splits silver pale / and pours'), structurally enacting the sudden flood breaking open the sky. Describing rain as 'cool mercy' falling onto 'blistered stone' elevates weather into compassionate grace, arguably implying that nature holds simultaneous power to scorch and heal.",
          markScheme: [
            {
              point: "Opens with a clear conceptual claim contrasting oppressive heat with sudden relief.",
              keywords: ["suffocat", "oppress", "torment", "relief", "release", "contrast", "visceral"],
            },
            {
              point: "Embeds and zooms into opening heat imagery ('presses flat', 'saw', 'breathless', or 'blistered').",
              keywords: ["presses", "saw", "grinding", "blistered", "weight", "scorch"],
            },
            {
              point: "Integrates structural craft (volta 'until', semicolon containment, or enjambment enacting pouring rain).",
              keywords: ["volta", "until", "enjamb", "semicolon", "spill", "unleash", "break"],
            },
            {
              point: "Unpacks 'cool mercy' with tentative phrasing ('arguably', 'implies', 'suggests') to explore spiritual/dual power.",
              keywords: ["mercy", "spiritual", "grace", "compassion", "arguably", "implies", "heal"],
            },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: Exam Simulation — Unseen Stanzas & Essay Craft (15 Qs)
    // -----------------------------------------------------------------------
    {
      id: "unseen-poetry-analysis-p2",
      title: "Practice Paper 2 — End-of-Year Exam Craft & Deep Unseen Analysis",
      questions: [
        {
          id: "unseen-poetry-analysis-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "first-read-protocol",
          question:
            "In our **5-Minute Unseen Poetry Protocol** mnemonic (`T–L–S–V–T`), what does the first letter **T** stand for — the very first clue you examine before reading line 1?",
          answer: {
            type: "text",
            accept: ["title", "the title", "title clues"],
            display: "Title",
          },
          traps: [
            {
              spec: { type: "text", accept: ["theme", "tone"] },
              feedback: "Tone and Theme come later in the protocol; what is the very first line printed above the poem itself?",
            },
          ],
          hints: [
            "It sits right above line 1 of every unseen poem.",
            "Five-letter word starting with 't'.",
          ],
          solution: [
            "Minute 1 begins with the **Title** (Title → Literal story → Speaker & tone → Volta → Theme).",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "unseen-structure-form",
          question:
            "What term names a **two-line stanza** (or a rhyming final pair of lines that snaps a poem's verdict shut)?",
          answer: {
            type: "text",
            accept: ["couplet", "a couplet", "rhyming couplet"],
            display: "couplet",
          },
          traps: [
            {
              spec: { type: "text", accept: ["quatrain"] },
              feedback: "A quatrain has four lines; a pair of two lines is a couplet.",
            },
          ],
          hints: [
            "Think of 'couple' (two) plus '-et'.",
            "Seven-letter poetic stanza term.",
          ],
          solution: [
            "A pair of two poetic lines is a **couplet** (and when rhymed, a *rhyming couplet*).",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "Read this unseen line about an old bridge:\n\n*The weathered arch still shoulders winter floods without complaint.*\n\nWhat figurative device grants human body posture (*'shoulders'*) and attitude (*'without complaint'*) to an inanimate stone bridge?",
          answer: {
            type: "text",
            accept: ["personification"],
            display: "personification",
          },
          traps: [
            {
              spec: { type: "text", accept: ["simile"] },
              feedback: "A simile compares explicitly with 'like' or 'as'; attributing human qualities directly to an inanimate object is personification.",
            },
          ],
          hints: [
            "Derived from 'person' — giving human actions or resilience to a non-human thing.",
            "Fifteen-letter noun starting with 'pers-'.",
          ],
          solution: [
            "Granting human physical effort (*'shoulders'*) and stoicism (*'without complaint'*) to stone is **personification**.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "Read this unseen line about fog creeping across a bay:\n\n*Slow low boats groan home across the foam.*\n\nName the sound device repeating identical long vowel sounds (`/oʊ/`) inside neighbouring words.",
          answer: {
            type: "text",
            accept: ["assonance"],
            display: "assonance",
          },
          traps: [
            {
              spec: { type: "text", accept: ["alliteration"] },
              feedback: "Alliteration repeats initial consonant sounds; echoing *vowel* sounds inside words has a specific nine-letter name.",
            },
            {
              spec: { type: "text", accept: ["sibilance"] },
              feedback: "Sibilance repeats /s/ consonant sounds; look for the term for repeated internal vowel sounds.",
            },
          ],
          hints: [
            "Compare consonance (consonants) with this nine-letter noun for repeated *vowel* sounds.",
            "Starts with 'ass-' — here long /oʊ/ vowels stretch out mournful slowness.",
          ],
          solution: [
            "Repeating internal vowel sounds (*Slow, low, boats, groan, home, foam*) is **assonance**, stretching out the line's sleepy, mournful cadence.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "unseen-structure-form",
          question:
            "What term names a **single isolated one-line stanza** (often placed at the very end of an unseen poem to surround a closing revelation with stark white space)?",
          answer: {
            type: "text",
            accept: ["monostich", "single-line stanza", "single line stanza", "one-line stanza", "one line stanza"],
            display: "monostich",
          },
          traps: [
            {
              spec: { type: "text", accept: ["couplet"] },
              feedback: "A couplet has two lines; a lone single-line stanza uses the Greek prefix 'mono-' (one).",
            },
          ],
          hints: [
            "Greek prefix 'mono-' (one) + '-stich' (line) — or simply 'single-line stanza'.",
            "Surrounds one resonant line in stark white space on the page.",
          ],
          solution: [
            "An isolated one-line stanza is a **monostich** (or *single-line stanza*), visually enacting loneliness or stark emphasis.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "first-read-protocol",
          question:
            "Read this unseen line from a poem remembering a late grandmother's garden:\n\n*I kneel where her rosemary still scents the dusk, mourning softly what winter took.*\n\nWhat seven-letter exam-grade tone adjective (derived from *elegy*, a poem of mourning) describes a tone that is mournful, tender, and reverent toward loss?",
          answer: {
            type: "text",
            accept: ["elegiac"],
            display: "elegiac",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sardonic"] },
              feedback: "Sardonic means grimly mocking or sarcastic; look for the tender, mournful adjective derived from 'elegy'.",
            },
          ],
          hints: [
            "Formed directly from the poetic genre 'elegy' (a lament for the dead).",
            "Seven letters starting with 'eleg-'.",
          ],
          solution: [
            "A tender, mournful, reflective tone honouring loss is **elegiac** — one of the best tone adjectives to keep ready for unseen exams.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "Read this public-domain opening from William Blake's *A Poison Tree* (1794):\n\n*I was angry with my friend;*\n*I told my wrath, my wrath did end.*\n*I was angry with my foe:*\n*I told it not, my wrath did grow.*\n\nHow does Blake's **parallel structure and simple nursery-rhyme couplets** sharpen the poem's unsettling message?",
          options: [
            "Childlike simplicity makes secret resentment feel eerily effortless and deceptively dangerous",
            "Complex irregular stanzas show the speaker struggles to remember basic rhyming patterns",
            "Cheerful humour proves that anger between rivals is always harmless and quickly forgotten",
            "End-stopped lines hide the contrast between speaking honestly and bottling up hatred",
          ],
          answerIndex: 0,
          hints: [
            "Look at how deceptively simple the rhythm and rhymes ('friend/end', 'foe/grow') sound — almost like a children's rhyme.",
            "Contrast that innocent form with the menacing subject ('wrath did grow' into a poison tree).",
          ],
          explanation:
            "Pairing balanced **antithesis** (*told → end* vs *told it not → grow*) with deceptively sweet nursery-rhyme couplets makes hidden bitterness feel chillingly simple and insidious.",
        },
        {
          id: "unseen-poetry-analysis-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-high-band-unseen",
          question:
            "In our **40-Minute Unseen Exam Blueprint**, how many **integrated body paragraphs** (tracking Opening → Volta → Ending) should you aim to write between your conceptual intro and closing judgement?",
          answer: {
            type: "number",
            value: 3,
            display: "3",
          },
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback: "One body paragraph cannot trace Opening → Volta → Ending cleanly — aim for three focused arc-driven paragraphs!",
            },
          ],
          hints: [
            "Count the three structural beats: Opening → Volta → Ending.",
            "Enter a single whole number.",
          ],
          solution: [
            "Plan **3** deeply unpacked, integrated body paragraphs (Opening → Volta → Ending), spending roughly 8 minutes on each.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "writing-high-band-unseen",
          question:
            "What two-word term describes the concise 2–3 sentence opening argument of an unseen essay that states the poem's big idea and tonal arc without listing techniques?",
          answer: {
            type: "text",
            accept: ["conceptual thesis", "thesis statement", "a conceptual thesis"],
            display: "conceptual thesis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["plot summary", "feature-spotting"] },
              feedback: "Plot summary retells events; a concise overarching argument capturing big ideas is a conceptual thesis.",
            },
          ],
          hints: [
            "Two words: '___ thesis' (anchored in a big concept rather than a shopping list of devices).",
            "Introduced in Section 4's essay blueprint.",
          ],
          solution: [
            "Opening with a **conceptual thesis** (or *thesis statement*) anchors your essay immediately in top-band thematic evaluation.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "unseen-structure-form",
          question:
            "Read this fresh unseen stanza:\n\n*Three mornings running, snow sealed shut the lane,*\n*erasing wheel-track, boot-print, garden wall —*\n*until the milkman's red van carved a stain*\n*and woke the quiet street with one bright call.*\n\nHow does the **colour shift** from implied white snow to *'red van'* and *'bright call'* work with the volta *'until'*?",
          options: [
            "It shows that winter snowfall makes rural roads dangerously slippery for drivers",
            "It bursts sensory warmth and human connection into blank winter stillness",
            "It shifts the poem's focus onto mechanical engine noise ruining peaceful countryside",
            "It demonstrates that red paint fades faster than white chalk in cold rain",
          ],
          answerIndex: 1,
          hints: [
            "Contrast the blank, erased world of lines 1–2 ('sealed shut', 'erasing') with lines 3–4 ('carved', 'red', 'woke', 'bright call').",
            "Notice how 'woke' personifies the sleeping street returning to community life.",
          ],
          explanation:
            "Pivoting on *'until'*, the vivid splash of *'red'* and synaesthetic *'bright call'* rupture blank white isolation (*'erasing'*), celebrating humble everyday labour restoring human connection.",
        },
        {
          id: "unseen-poetry-analysis-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          question:
            "Read these lines from an unseen war-memorial poem:\n\n*Names carved in limestone, uniform and neat —*\n*silent battalions marching down the wall.*\n\nWhat two-word literary term describes a deliberate cluster of related vocabulary (*uniform, battalions, marching*) drawn from one domain (here: military regimentation)?",
          answer: {
            type: "text",
            accept: ["semantic field", "lexical field", "a semantic field", "a lexical field"],
            display: "semantic field",
          },
          traps: [
            {
              spec: { type: "text", accept: ["onomatopoeia"] },
              feedback: "Onomatopoeia imitates sounds; a family of words belonging to one thematic domain is a semantic field.",
            },
          ],
          hints: [
            "Two words: '___ field' (meaning a family of thematically linked words).",
            "Here 'uniform', 'battalions', and 'marching' all belong to the military domain.",
          ],
          solution: [
            "Grouping vocabulary from one domain (*uniform, battalions, marching*) builds a **semantic field** (or *lexical field*), ironically showing war still regimenting soldiers even in death.",
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "first-read-protocol",
          marks: 3,
          question:
            "Read this fresh unseen poem:\n\n**Last Day of Term**\n*Lockers stand gaping like emptied nests,*\n*torn timetables snowing the tiled floor —*\n*I shoulder my bag, half eager for July,*\n*half loath to let the heavy swing-door shut.*\n\nAnalyse how the poet presents **growing up and transition** through simile, contrast, and tone. (3 marks)",
          hints: [
            "Unpack the simile 'emptied nests' (fledglings leaving safety, bittersweet growth).",
            "Zoom into the balanced parallelism 'half eager... half loath' capturing divided emotion.",
            "Explain the symbolism of letting 'the heavy swing-door shut' at the end.",
          ],
          modelAnswer:
            "Through the tender simile 'emptied nests', the poet frames leaving school as a natural moment of fledging—exciting independence tinged with poignant abandonment of shelter. The balanced anaphora 'half eager... half loath' explicitly dramatises bittersweet ambivalence, suspending the speaker cleanly between freedom ('July') and lingering attachment. Finally, hesitating before 'the heavy swing-door shut[s]' turns an ordinary corridor threshold into a symbol of irreversible transition, capturing the quiet ache of outgrowing a familiar chapter.",
          markScheme: [
            {
              point: "Unpacks the simile 'emptied nests' (leaving safety/shelter, natural growth or poignant emptiness).",
              keywords: ["nest", "fledg", "shelter", "safety", "abandon", "empti", "growth"],
            },
            {
              point: "Analyses the balanced contrast 'half eager... half loath' capturing divided/ambivalent tone.",
              keywords: ["ambivalen", "divided", "bittersweet", "anaphora", "parallel", "half", "torn"],
            },
            {
              point: "Interprets 'heavy swing-door shut' symbolically as an irreversible threshold or closing chapter.",
              keywords: ["threshold", "irrevers", "chapter", "symbol", "door", "clos", "transition"],
            },
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "decoding-imagery-ambiguity",
          marks: 3,
          question:
            "Read this unseen stanza about a street musician playing at dusk:\n\n*His tin case drinks stray silver from the crowd,*\n*yet from four frayed strings spills a golden tide*\n*that washes grey commuters briefly bright.*\n\nAnalyse how **contrasting metallic/colour imagery** and **personification** elevate humble street music. (3 marks)",
          hints: [
            "Contrast cheap, needy material words ('tin', 'stray silver', 'frayed', 'grey') against rich radiance ('golden tide', 'bright').",
            "Unpack the personified verb 'drinks' (thirst/survival) versus the generous overflow of 'spills'.",
            "Explain the thematic message about art transforming weary urban life.",
          ],
          modelAnswer:
            "Initially, the poet grounds the scene in economic hardship: 'tin' and 'frayed' emphasise scarcity, while personifying the case as one that 'drinks stray silver' evokes quiet thirst and dependence on passers-by. Pivoting on 'yet', however, the imagery surges from dull metal into luminous wealth—a 'golden tide' that 'spills' with generous abundance. By claiming this music 'washes grey commuters briefly bright', the poet casts humble street art as cleansing grace, implying beauty can momentarily redeem exhausted urban anonymity.",
          markScheme: [
            {
              point: "Analyses hardship/scarcity imagery ('tin', 'frayed', or 'drinks stray silver' suggesting thirst/need).",
              keywords: ["scarcity", "hardship", "thirst", "need", "frayed", "tin", "poverty"],
            },
            {
              point: "Explores the colour/value contrast from 'grey'/'tin' to generous luminous 'golden tide'.",
              keywords: ["golden", "luminous", "abundan", "contrast", "spills", "bright", "wealth"],
            },
            {
              point: "Articulates the thematic effect of art cleansing or momentarily uplifting weary urban life.",
              keywords: ["cleans", "redeem", "uplift", "art", "anonym", "weary", "transform"],
            },
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "unseen-structure-form",
          marks: 4,
          question:
            "Read this unseen short poem:\n\n**Power Cut**\n*Screens blink out.*\n*The fridge lets go its steady hum.*\n*Across the block, black windows stare —*\n*then candles bloom along the sills,*\n*and voices lean out through the warm dark air*\n*to ask if neighbours need a light.*\n\nExplain how **line length, punctuation shifts, and imagery** enact the shift from technological shock to human warmth. (4 marks)",
          hints: [
            "Note the clipped 3-word end-stopped opening ('Screens blink out.') mimicking sudden electronic cutoff.",
            "Track how lines lengthen and soften after the mid-poem dash ('stare — / then candles bloom').",
            "Zoom into the organic metaphor 'candles bloom' versus cold 'black windows stare'.",
            "Link the final enjambment ('warm dark air / to ask') to voices reaching across physical barriers.",
          ],
          modelAnswer:
            "The poem opens with an abrupt three-word end-stopped line ('Screens blink out.'), acoustically snapping shut like a tripped circuit breaker, while eerie personification ('black windows stare') renders modern flats cold and alienated. At the structural pivot marked by the dash ('stare — / then'), both imagery and line length expand organically. Replacing artificial screens with the botanical metaphor 'candles bloom' transforms darkness into fertile warmth, while the enjambment across the final two lines ('warm dark air / to ask') literally lets neighbours' voices lean out across physical walls—implying that losing mechanical convenience unexpectedly restores human solidarity.",
          markScheme: [
            {
              point: "Analyses the abrupt, end-stopped short opening line ('Screens blink out.') enacting sudden cutoff.",
              keywords: ["abrupt", "end-stop", "short", "snap", "cutoff", "circuit", "sudden"],
            },
            {
              point: "Examines the eerie alienation of 'black windows stare' before the dash pivot ('— / then').",
              keywords: ["alienat", "stare", "dash", "pivot", "volta", "eerie", "cold"],
            },
            {
              point: "Unpacks the organic/botanical metaphor 'candles bloom' transforming darkness into living warmth.",
              keywords: ["bloom", "botan", "organic", "flower", "fertile", "warmth", "life"],
            },
            {
              point: "Links lengthening lines or closing enjambment ('air / to ask') to human connection crossing barriers.",
              keywords: ["enjamb", "expand", "solidarity", "communit", "lean", "reach", "connection"],
            },
          ],
        },
        {
          id: "unseen-poetry-analysis-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "writing-high-band-unseen",
          marks: 4,
          question:
            "Read this weak Year 9 student paragraph about *Power Cut* (from Question 14):\n\n*\"In this poem the poet uses a metaphor 'candles bloom' and enjambment in line 5. This makes the reader picture candles glowing and makes the poem flow nicely so it is very interesting to read.\"*\n\nDiagnose **two specific exam weaknesses** here, then rewrite the point as a **top-band integrated WHAT–HOW–WHY response** using tentative academic phrasing. (4 marks)",
          hints: [
            "Spot Flaw 1: feature-spotting 'candles bloom' without unpacking literal Vehicle qualities of 'bloom'.",
            "Spot Flaw 2: generic banned claim about enjambment ('makes the poem flow nicely') + vague filler ('very interesting').",
            "Rewrite with a conceptual WHAT opening, Vehicle analysis of 'bloom', meaningful enjambment link, and tentative verbs ('arguably', 'suggests').",
          ],
          modelAnswer:
            "Weakness 1: The student feature-spots the metaphor 'candles bloom' without unpacking the connotations of flowering growth. Weakness 2: Claiming enjambment 'makes the poem flow nicely' and calling it 'interesting' are generic, mark-losing statements divorced from meaning. Top-band rewrite: Arguably, by pairing the botanical metaphor 'candles bloom' with smooth enjambment across 'warm dark air / to ask', the poet suggests that technological silence nurtures unexpected community—blossoming organically across balcony walls once isolating screens go dark.",
          markScheme: [
            {
              point: "Diagnoses Flaw 1: feature-spotting / failing to unpack connotations of 'bloom'.",
              keywords: ["feature-spot", "connot", "unpack", "bloom", "metaphor"],
            },
            {
              point: "Diagnoses Flaw 2: generic banned comment on enjambment ('flow nicely') or vague filler ('interesting').",
              keywords: ["generic", "flow", "interesting", "vague", "meaning", "filler"],
            },
            {
              point: "Rewrites with conceptual link uniting botanical connotations of 'bloom' AND meaningful enjambment.",
              keywords: ["botan", "blossom", "organic", "communit", "enjamb", "across", "nurtur"],
            },
            {
              point: "Uses tentative academic phrasing ('arguably', 'suggests', 'implies') in the top-band rewrite.",
              keywords: ["arguably", "suggests", "implies", "hints", "conveys"],
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
      id: "unseen-poetry-analysis-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "decoding-imagery-ambiguity",
      question:
        "Read this fresh unseen stanza about an old seaside photograph:\n\n*Salt light has bleached the harbour wall to bone,*\n*yet your bright yellow coat resists the fade —*\n*a stubborn marigold pinned fast to stone.*\n\nWhich analytical claim captures the **richest layered ambiguity** of *\"pinned fast to stone\"*?",
      options: [
        "It shows the photograph was glued carelessly onto a heavy rock outside",
        "It celebrates joyful permanence while subtly hinting at museum-like stillness or mortality ('bone', 'stone')",
        "It proves the speaker prefers bright yellow flowers over coastal stone walls",
        "It uses rapid cheerful rhythm so readers forget any sense of ageing or loss",
      ],
      answerIndex: 1,
      hints: [
        "Look at BOTH sets of imagery: vibrant warmth ('bright yellow', 'stubborn marigold') AND stark mortality ('bleached... to bone', 'stone').",
        "Think about what 'pinned fast' evokes (a preserved specimen or a steadfast anchor).",
        "Embrace tension between fierce survival and frozen stillness!",
      ],
      explanation:
        "While *'stubborn marigold'* radiates defiant vitality, *'pinned fast to stone'* (echoing *'bleached... to bone'*) introduces haunting ambiguity: memory preserves warmth fiercely, yet freezes a living person permanently onto cold, headstone-like stillness.",
    },
    {
      id: "unseen-poetry-analysis-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "unseen-structure-form",
      question:
        "Read this public-domain stanza from Wilfred Owen's *Futility* (1918), where soldiers move a dying comrade into the morning sun:\n\n*Move him into the sun —*\n*Gently its touch awoke him once,*\n*At home, whispering of fields half-sown.*\n*Always it woke him, even in France,*\n*Until this morning and this snow.*\n\nHow do the **half-rhymes** (*sun / sown*, *once / France*) and the **volta** (*'Until'*) collaborate here?",
      options: [
        "Cheerful musical rhymes celebrate how quickly morning sunlight cures battlefield wounds",
        "Unsettled near-rhymes quietly foreshadow hope failing, shattering on the bleak volta 'Until this morning'",
        "Strict regular rhymes prove the speaker feels calm certainty about military triumph",
        "The shift on 'Until' introduces comic relief mocking cold French winter weather",
      ],
      answerIndex: 1,
      hints: [
        "Listen closely to the end-words: 'sun / sown' and 'once / France' — do they chime cleanly or miss slightly?",
        "Notice how gentle tenderness ('Gently its touch awoke him') hits a cold wall on line 5 ('Until this morning and this snow').",
        "Connect acoustic dissonance to grief that refuses soothing illusion.",
      ],
      explanation:
        "Even while the speaker desperately hopes the sun can wake his friend, Owen's haunting **half-rhymes** (*sun/sown*, *once/France*) introduce quiet acoustic wrongness — preparing the devastating volta *'Until this morning and this snow.'*",
    },
    {
      id: "unseen-poetry-analysis-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "writing-high-band-unseen",
      question:
        "Compare two Year 9 thesis statements on *Futility* (from the stanza above):\n\n**Thesis 1:** *In this poem, Wilfred Owen uses imperative verbs, personification, and half-rhyme to write a sad war poem.*\n**Thesis 2:** *Staging a tender plea to morning sunlight that collapses against winter snow, Owen uses quiet domestic hope to expose the cruel absurdity of war's waste.*\n\nWhat makes **Thesis 2** decisively top-band?",
      options: [
        "Thesis 2 names every technical device in alphabetical order right inside line one",
        "Thesis 2 avoids mentioning the poem's title so the examiner must guess the text",
        "Thesis 2 articulates a nuanced thematic tension and structural arc without technique-listing",
        "Thesis 2 uses shorter words and simpler claims than Thesis 1 to save exam minutes",
      ],
      answerIndex: 2,
      hints: [
        "Notice how Thesis 1 merely drops three term names + the flat adjective 'sad'.",
        "Look at how Thesis 2 names the exact emotional collision ('tender plea... collapses against winter snow') and big human judgement.",
        "Which thesis sets up coherent body paragraphs automatically?",
      ],
      explanation:
        "Thesis 2 leads with a sharp **conceptual argument** — identifying the ironic clash between tender life-giving hope and frozen mortality — rather than offering a mechanical shopping list of literary terms.",
    },
    {
      id: "unseen-poetry-analysis-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "decoding-imagery-ambiguity",
      question:
        "Read this unseen line:\n\n*A **warm velvet bell** rang softly through the dusk.*\n\nWhat literary term names blending two different senses together inside one image (here: touch *'warm velvet'* applied to sound *'bell'*)?",
      answer: {
        type: "text",
        accept: ["synaesthesia", "synesthesia"],
        display: "synaesthesia",
      },
      traps: [
        {
          spec: { type: "text", accept: ["onomatopoeia"] },
          feedback: "Onomatopoeia imitates a sound directly ('clanged', 'hissed'); crossing two different senses (touch + sound) has a Greek-derived term.",
        },
        {
          spec: { type: "text", accept: ["alliteration"] },
          feedback: "Alliteration repeats initial consonant sounds; fusing tactile touch with auditory sound is a sensory imagery term.",
        },
      ],
      hints: [
        "Derived from Greek 'syn-' (together) + 'aisthesis' (sensation/perception).",
        "Blending sight, touch, taste, or colour directly into sound (e.g. 'bright call' or 'warm velvet bell').",
        "Starts with 'syn-' (British or US spelling accepted).",
      ],
      solution: [
        "Fusing two distinct senses (*touch* + *sound* in *'warm velvet bell'*) is **synaesthesia** (US: *synesthesia*), creating richly layered sensory atmosphere.",
      ],
    },
    {
      id: "unseen-poetry-analysis-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "unseen-structure-form",
      question:
        "Read this unseen couplet about two distant islands:\n\n*To east, the neon skyline climbs in pride;*\n*to west, dark mangroves drink the quiet tide.*\n\nWhat rhetorical term names placing two sharply opposing ideas inside **grammatically mirrored halves** (*'To east... climbs'* vs *'to west... drink'*)?",
      answer: {
        type: "text",
        accept: ["antithesis"],
        display: "antithesis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["oxymoron"] },
          feedback: "An oxymoron puts two opposite single words immediately adjacent ('bright ache'); contrasting whole parallel clauses across mirrored halves is antithesis.",
        },
      ],
      hints: [
        "Greek for 'setting opposite' — starts with 'anti-'.",
        "Look at the balanced parallel mirror: 'To east, [human ambition] / to west, [natural calm]'.",
        "Ten-letter rhetorical noun.",
      ],
      solution: [
        "Balancing directly opposing concepts inside mirrored parallel clauses is **antithesis**, crystallising the clash between human hubris and natural endurance.",
      ],
    },
    {
      id: "unseen-poetry-analysis-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "first-read-protocol",
      marks: 4,
      question:
        "Read this complete fresh unseen exam poem:\n\n**The Piano Mover's Hands**\n*All morning he steered mahogany down three narrow flights,*\n*veins corded like hemp rope, breath misting the stair —*\n*a workman measured solely by dead weight.*\n\n*Yet once the lid stood open in the bright front room,*\n*he brushed one ivory key with a calloused thumb,*\n*and paused until the silver note dissolved.*\n\nWrite a focused **conceptual introduction** (2 sentences) AND **one body paragraph** examining how the poet challenges assumptions about labour and sensitivity. (4 marks)",
      hints: [
        "Intro: State the big conceptual shift (from heavy physical labour to delicate artistic reverence) — zero technique checklists!",
        "Para: Unpack opening physical imagery ('veins corded like hemp rope', 'measured solely by dead weight').",
        "Integrate the structural volta ('Yet once' across the stanza break) pivoting to 'brushed one ivory key' and 'calloused thumb'.",
        "Close with layered connotations of 'silver note dissolved' — beauty fleeting yet deeply felt.",
      ],
      modelAnswer:
        "In 'The Piano Mover's Hands', the poet dismantles shallow class assumptions by revealing quiet artistic reverence beneath heavy manual labour. Moving across a sharp stanza volta from exhausting physical strain to hushed musical wonder, the poem suggests that sensitivity belongs not to privilege, but to anyone who pauses to listen. Initially, society's reductive gaze is exposed through the taut simile 'veins corded like hemp rope' and the blunt phrase 'measured solely by dead weight', reducing the worker to sheer mechanical strength. Pivoting across the stanza break on 'Yet once', however, the delicate verb 'brushed' juxtaposed against his 'calloused thumb' marries toil with tenderness, while lingering 'until the silver note dissolved' implies a refined, almost spiritual appreciation of transient beauty.",
      markScheme: [
        {
          point: "Opens with a genuine conceptual thesis framing labour vs sensitivity (without listing techniques).",
          keywords: ["dismantl", "class", "assump", "labour", "manual", "sensitiv", "reveren"],
        },
        {
          point: "Analyses opening physical strain or societal reduction ('hemp rope', 'dead weight', 'measured solely').",
          keywords: ["hemp", "dead weight", "reductiv", "mechanic", "strain", "strength", "toil"],
        },
        {
          point: "Integrates the stanza-break volta ('Yet once') and contrast between 'brushed' and 'calloused thumb'.",
          keywords: ["volta", "stanza", "brushed", "calloused", "juxtapos", "tender", "delicat"],
        },
        {
          point: "Zooms into 'silver note dissolved' with tentative phrasing to explore fleeting beauty or depth of feeling.",
          keywords: ["silver", "dissolved", "fleeting", "transient", "implies", "suggests", "beauty"],
        },
      ],
    },
    {
      id: "unseen-poetry-analysis-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "decoding-imagery-ambiguity",
      marks: 4,
      question:
        "Read this fresh unseen poem:\n\n**Salt-Marsh Tide**\n*At noon the mudflats gleam like beaten pewter,*\n*every creek-bed cracked in patient maps of thirst.*\n*Then silver water slips between the reeds —*\n*quiet thief, quiet healer, erasing every seam.*\n\nAnalyse how the poet uses **dual metaphor ('quiet thief, quiet healer')** and **sensory imagery** to present nature's power as deeply ambiguous. (4 marks)",
      hints: [
        "Analyse the opening contrast between metallic harshness ('beaten pewter') and parched vulnerability ('maps of thirst').",
        "Unpack the sibilant arrival ('silver water slips') and sudden dash pause.",
        "Examine BOTH halves of the juxtaposed metaphor: 'quiet thief' (stealthy loss/erasure) versus 'quiet healer' (soothing restoration).",
        "Conclude tentatively on why the poet refuses to label nature wholly cruel or wholly kind.",
      ],
      modelAnswer:
        "Initially, the poet portrays the low-tide landscape as scarred and parched: comparing mudflats to 'beaten pewter' carries connotations of bruised metallic toughness, while 'maps of thirst' personifies cracked ground as desperately longing for relief. As the tide returns, hushed sibilance in 'silver water slips' creates stealthy, effortless motion before the dash introduces a striking ambiguous pairing: 'quiet thief, quiet healer'. Calling the tide a 'thief' suggests stealthy erasure that steals familiar landmarks ('erasing every seam'), yet simultaneously naming it a 'healer' frames that same submerging tide as soothing restoration. Arguably, placing these opposing roles side by side implies nature operates beyond human morality, taking and renewing in a single silent breath.",
      markScheme: [
        {
          point: "Unpacks opening imagery ('beaten pewter' bruising/metal or 'maps of thirst' parched longing).",
          keywords: ["pewter", "bruis", "parch", "thirst", "scarred", "metal", "longing"],
        },
        {
          point: "Analyses sibilance ('silver water slips') or the dash introducing stealthy, quiet transition.",
          keywords: ["sibilan", "stealth", "dash", "hush", "effortless", "slip"],
        },
        {
          point: "Explores BOTH contrasting layers of 'quiet thief' (loss/erasure) and 'quiet healer' (restoration/soothing).",
          keywords: ["thief", "healer", "eras", "restor", "sooth", "oppos", "steal"],
        },
        {
          point: "Uses tentative evaluative voice to explain why nature resists simple good/bad labels.",
          keywords: ["arguably", "implies", "suggests", "moral", "dual", "renew", "ambigu"],
        },
      ],
    },
    {
      id: "unseen-poetry-analysis-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "unseen-structure-form",
      marks: 4,
      question:
        "Read this fresh unseen poem:\n\n**The Clockmaker's Shop Closes**\n*Sixty brass pendulums swung in strict accord,*\n*each shelf a neat republic keeping time;*\n*no minute strayed uncounted past the board,*\n*each quarter-hour chiming sharp in rhyme.*\n\n*Today the shutters drop.*\n*One loose spring*\n*uncoils —*\n*silent.*\n\nAnalyse how the dramatic **structural collapse** between Stanza 1 and Stanza 2 enacts the poem's theme. (4 marks)",
      hints: [
        "Analyse Stanza 1's tight, rhythmic ABAB quatrain ('accord/board', 'time/rhyme') mirroring clockwork precision.",
        "Zoom into the political metaphor 'neat republic keeping time' (orderly, self-governed routine).",
        "Examine Stanza 2's visual disintegration: broken rhythm, shrinking line lengths, cross-line enjambment ('One loose spring / uncoils —'), and zero rhyme.",
        "Zoom into the lone closing one-word line 'silent.' surrounded by white space.",
      ],
      modelAnswer:
        "Stanza 1 uses disciplined form to embody clockwork precision: four regular lines locked in crisp ABAB full rhyme ('accord/board', 'time/rhyme') mirror the 'strict accord' of sixty pendulums, while the metaphor 'neat republic' casts the shop as a proud, self-governed realm of order. Across the stanza break, however, the poem suffers an abrupt structural breakdown. Rhyme vanishes and lines fracture down from four words ('Today the shutters drop.') into jagged enjambment ('One loose spring / uncoils —'), physically imitating taut tension unwinding on the page. Ending on the isolated single-word line 'silent.' drops the entire rhythmic world into stark white space, suggesting how swiftly decades of human craft dissolve when routine stops.",
      markScheme: [
        {
          point: "Links Stanza 1's regular quatrain / full ABAB rhyme directly to clockwork discipline and precision.",
          keywords: ["quatrain", "abab", "rhyme", "precision", "disciplin", "clockwork", "regular"],
        },
        {
          point: "Analyses 'neat republic' or 'strict accord' evoking proud, self-governed order.",
          keywords: ["republic", "order", "govern", "realm", "routine", "metaphor"],
        },
        {
          point: "Explains Stanza 2's fracturing line lengths, vanished rhyme, or 'One loose spring / uncoils —' enacting unwinding.",
          keywords: ["fractur", "unwind", "enjamb", "shrink", "break", "vanish", "collaps"],
        },
        {
          point: "Analyses the isolated closing single word 'silent.' and white space conveying abrupt emptiness/ending.",
          keywords: ["silent", "isolat", "white space", "empti", "dissolv", "lone", "abrupt"],
        },
      ],
    },
    {
      id: "unseen-poetry-analysis-ch-q09",
      kind: "written",
      difficulty: "challenge",
      guideRef: "writing-high-band-unseen",
      marks: 4,
      question:
        "Suppose you are sitting the **Year 9 End-of-Year Unseen Poetry Test** (40 minutes) and are given *The Clockmaker's Shop Closes* (from Question 8) with the prompt: *How does the poet present time and endings?*\n\nWrite a **3-paragraph essay plan** (Opening → Turning Point → Closing) PLUS a **2-sentence closing judgement** that links the final word back to the title without repeating a technique list. (4 marks)",
      hints: [
        "Plan Para 1: Conceptual focus on orderly mastery of time in Stanza 1 + 1–2 anchor micro-quotes.",
        "Plan Para 2: Conceptual focus on the structural rupture at Stanza 2 ('Today the shutters drop') + uncoiling tension.",
        "Plan Para 3: Conceptual focus on the stark final isolation ('silent.') and ambiguous stillness (grief vs peaceful release).",
        "Closing judgement: Step back to the poet's wider message linking 'Closes' in the title to 'silent.'",
      ],
      modelAnswer:
        "Para 1 (Opening — Controlled Mastery): Examine how the poet frames craft as proud command over time using 'strict accord', 'neat republic', and rigid ABAB rhythm. Para 2 (Volta — Sudden Unravelling): Track the temporal pivot 'Today' and abrupt structural fracture ('shutters drop', 'One loose spring / uncoils —') as decades of discipline collapse. Para 3 (Closing — Stark Ambiguity): Explore the isolated final line 'silent.' surrounded by white space, weighing melancholic extinction against arguably peaceful release from relentless ticking. Closing Judgement: Ultimately, 'The Clockmaker's Shop Closes' reminds us that human systems can measure time, yet never halt its passing. By letting the final word 'silent.' fall alone into blank margin, the poet enacts the quiet dignity—and fragility—of every ending.",
      markScheme: [
        {
          point: "Para 1 plans conceptual analysis of Stanza 1's ordered mastery with embedded micro-quote(s).",
          keywords: ["para 1", "master", "order", "republic", "accord", "opening"],
        },
        {
          point: "Para 2 plans the turning point/structural break at Stanza 2 ('Today', 'shutters drop', or 'uncoils').",
          keywords: ["para 2", "volta", "today", "uncoil", "fractur", "unravel", "turning"],
        },
        {
          point: "Para 3 plans the closing word 'silent.' including layered ambiguity (loss vs peaceful rest).",
          keywords: ["para 3", "silent", "ambigu", "white space", "peace", "release", "extinct"],
        },
        {
          point: "Closing judgement steps back to a wider human theme linking title and ending without a technique list.",
          keywords: ["ultimately", "fragil", "dignity", "measure", "passing", "human", "judgement"],
        },
      ],
    },
  ],
};
