import type { ExamPaper } from "../types.ts";

const SVG_COMPARE_WEAVE =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Integrated comparative poetry essay structure versus separate block summaries">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Comparative Poetry Structure: Weave vs Separate Blocks</text>' +
  '<rect x="20" y="44" width="242" height="186" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
  '<text x="141" y="66" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--bad)">Weak: Separate Blocks</text>' +
  '<rect x="38" y="80" width="206" height="44" rx="6" fill="var(--surface)" stroke="var(--line)"/>' +
  '<text x="141" y="106" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="var(--ink)">Paragraph 1: Everything on Poem A</text>' +
  '<rect x="38" y="136" width="206" height="44" rx="6" fill="var(--surface)" stroke="var(--line)"/>' +
  '<text x="141" y="162" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="var(--ink)">Paragraph 2: Everything on Poem B</text>' +
  '<text x="141" y="206" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">Feels like two separate mini-essays</text>' +
  '<rect x="290" y="44" width="250" height="186" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="415" y="66" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--good)">Strong: Conceptual Weave</text>' +
  '<rect x="306" y="78" width="218" height="30" rx="6" fill="var(--brand-soft)" stroke="var(--brand)"/>' +
  '<text x="415" y="97" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="var(--ink)">Shared Big Idea (e.g. Fragile Authority)</text>' +
  '<rect x="306" y="116" width="218" height="30" rx="6" fill="var(--surface)" stroke="var(--line)"/>' +
  '<text x="415" y="135" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">Poem A: Quote + Method + Effect</text>' +
  '<text x="415" y="161" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="var(--good)">whereas / similarly / conversely</text>' +
  '<rect x="306" y="170" width="218" height="30" rx="6" fill="var(--surface)" stroke="var(--line)"/>' +
  '<text x="415" y="189" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">Poem B: Quote + Method + Contrast</text>' +
  '<text x="415" y="218" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">Sustained dialogue across both poems</text>' +
  '</svg>';

const SVG_FREYTAG_SHORT =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of traditional exposition arc and compressed in media res short story arc">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Narrative Compression: Classic Arc vs Short-Story Hook</text>' +
  '<line x1="46" y1="196" x2="526" y2="196" stroke="var(--line)" stroke-width="1.5"/>' +
  '<line x1="46" y1="50" x2="46" y2="196" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="22" y="126" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink-2)" transform="rotate(-90 22 126)">Tension</text>' +
  '<polyline points="60,184 165,180 285,126 365,68 445,134 510,174" fill="none" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="6 5"/>' +
  '<polyline points="60,118 190,104 335,62 435,96 510,124" fill="none" stroke="var(--brand)" stroke-width="3"/>' +
  '<circle cx="60" cy="118" r="5" fill="var(--brand)"/>' +
  '<circle cx="335" cy="62" r="6" fill="var(--bad)"/>' +
  '<circle cx="510" cy="124" r="5" fill="var(--brand)"/>' +
  '<g font-family="system-ui, -apple-system, sans-serif" font-size="10.5">' +
  '<text x="122" y="96" text-anchor="middle" font-weight="700" fill="var(--brand)">In Media Res Start</text>' +
  '<text x="122" y="170" text-anchor="middle" fill="var(--ink-2)">Slow Exposition (Dashed)</text>' +
  '<text x="335" y="48" text-anchor="middle" font-weight="700" fill="var(--bad)">Climax / Turning Point</text>' +
  '<text x="476" y="112" text-anchor="middle" font-weight="600" fill="var(--brand)">Open / Sharp Ending</text>' +
  '<text x="110" y="218" text-anchor="middle" fill="var(--ink-2)">Opening</text>' +
  '<text x="285" y="218" text-anchor="middle" fill="var(--ink-2)">Rising Conflict</text>' +
  '<text x="465" y="218" text-anchor="middle" fill="var(--ink-2)">Resolution / Denouement</text>' +
  '</g>' +
  '</svg>';

const SVG_WHW_NOVEL =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WHAT-HOW-WHY analytical paragraph blueprint for prose analysis">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">WHAT – HOW – WHY Analytical Paragraph Blueprint</text>' +
  '<rect x="22" y="48" width="156" height="178" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="100" y="72" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="var(--brand)">1. WHAT</text>' +
  '<text x="100" y="96" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">Conceptual claim</text>' +
  '<text x="100" y="116" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">about power, fear,</text>' +
  '<text x="100" y="136" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">or character arc.</text>' +
  '<text x="100" y="176" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="var(--ink-2)">Avoid retelling plot</text>' +
  '<text x="100" y="194" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="var(--ink-2)">chronologically.</text>' +
  '<rect x="202" y="48" width="156" height="178" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="280" y="72" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="var(--brand)">2. HOW</text>' +
  '<text x="280" y="96" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">Embed short quotes</text>' +
  '<text x="280" y="116" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">+ name precise</text>' +
  '<text x="280" y="136" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">word / syntax choice.</text>' +
  '<text x="280" y="176" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="var(--ink-2)">Zoom into a single</text>' +
  '<text x="280" y="194" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="var(--ink-2)">verb or image.</text>' +
  '<rect x="382" y="48" width="156" height="178" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="460" y="72" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="var(--good)">3. WHY</text>' +
  '<text x="460" y="96" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">Evaluate reader</text>' +
  '<text x="460" y="116" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">impact &amp; writer&apos;s</text>' +
  '<text x="460" y="136" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">wider social critique.</text>' +
  '<text x="460" y="176" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="var(--ink-2)">Use tentative verbs:</text>' +
  '<text x="460" y="194" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="var(--ink-2)">implies / arguably.</text>' +
  '<polygon points="184,132 196,137 184,142" fill="var(--brand)"/>' +
  '<polygon points="364,132 376,137 364,142" fill="var(--brand)"/>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-power-conflict",
  title: "Year 9 Power & Conflict Prose & Poetry Mock Paper",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-power-conflict-q01",
      topicId: "the-novel-analytical-essay",
      guideRef: "narrative-voice-perspective",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "Read this short unseen prose extract from a fictional novel about a land dispute:\n\n'I only shifted the boundary stones three paces into Karim's orchard before dawn. Any sensible neighbour would agree he barely pruned those plum trees anyway, and my sheep needed shade more than he needed jam.'\n\nWhat makes this first-person narrator **unreliable**, and how does that shape the reader's judgement?",
      options: [
        "He speaks in third person throughout, preventing readers from seeing his motives.",
        "He rationalises a selfish theft in secret, creating ironic distance from his excuses.",
        "He openly admits his guilt to the court and pays Karim double for the orchard.",
        "He describes the sheep in poetic detail so readers forget the dispute over land.",
      ],
      answerIndex: 1,
      hints: [
        "Notice the detail 'before dawn' alongside his claim that 'any sensible neighbour would agree'.",
        "Ask yourself whether the reader takes his self-justification at face value or spots the hypocrisy.",
      ],
      strategy: "Check gaps between what a narrator claims and what their actions reveal.",
      explanation:
        "Moving boundary stones 'before dawn' exposes furtive theft even as the narrator casually minimises it ('only', 'any sensible neighbour'). That clash between sneaky behaviour and smug self-excuse creates dramatic irony, encouraging the reader to distrust him.",
    },
    {
      id: "exam-power-conflict-q02",
      topicId: "the-novel-analytical-essay",
      guideRef: "narrative-voice-perspective",
      kind: "short",
      difficulty: "warmup",
      question:
        "Read this novel extract:\n\n'Mara stared at the chained iron gate. Why did the council always wait until November rains to redraw the district lines? Nobody in the harbour flats would dare sign a petition now.'\n\nName the three-word narrative technique where a third-person narrator blends seamlessly into a character's inner voice and questions without quotation marks or 'she thought'.",
      answer: {
        type: "text",
        accept: [
          "free indirect discourse",
          "free indirect speech",
          "free indirect style",
          "free indirect thought",
        ],
        display: "free indirect discourse",
      },
      traps: [
        {
          spec: { type: "text", accept: ["first person", "first-person", "first person narration"] },
          feedback: "Notice the narration starts in third person ('Mara stared'), not 'I stared' — it slips into her thoughts while staying third-person.",
        },
        {
          spec: { type: "text", accept: ["direct speech", "dialogue"] },
          feedback: "Direct speech uses quotation marks and spoken tags; here Mara's thoughts blend directly into the narration without speech marks.",
        },
      ],
      hints: [
        "The pronoun remains third-person ('Mara'), yet the bitter question sounds exactly like Mara's own mind speaking.",
        "The three-word term begins with 'free indirect...'.",
      ],
      strategy: "Spot unquoted character thoughts embedded inside third-person prose.",
      solution: [
        "When third-person narration absorbs a character's private idiom and questions without speech marks or reporting verbs, it is **free indirect discourse** (also called **free indirect speech** or **style**).",
        "It draws the reader intimately into Mara's frustration while still letting the narrator maintain subtle distance.",
      ],
    },
    {
      id: "exam-power-conflict-q03",
      topicId: "the-novel-analytical-essay",
      guideRef: "characterisation-foils",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read this unseen novel extract set during a school assembly protest:\n\n'Tariq straightened his gilt prefect badge twice, reciting section four of the handbook in a tight, rapid voice. Beside him, Mei unpinned her identical badge, laid it quietly on the lectern, and looked straight at the headmaster.'\n\nHow does Mei function as a **character foil** to Tariq in this scene?",
      options: [
        "She proves that Tariq is secretly the headmaster's closest family relative.",
        "She provides comic relief so readers stop taking the assembly rules seriously.",
        "She copies Tariq's exact anxieties to show all prefects behave identically.",
        "Her calm, silent defiance sharpens Tariq's anxious obedience to authority.",
      ],
      answerIndex: 3,
      hints: [
        "Compare Tariq's nervous body language ('straightened... twice', 'tight, rapid') with Mei's deliberate stillness.",
        "Remember what a foil does: contrasting two characters highlights each one's defining values.",
      ],
      strategy: "Compare paired characters' physical gestures and responses to power.",
      explanation:
        "A character foil contrasts deliberately with another figure to throw traits into sharp relief. Mei's quiet, composed gesture of unpinning her badge exposes how nervously Tariq clings to institutional approval and rulebooks when authority is challenged.",
    },
    {
      id: "exam-power-conflict-q04",
      topicId: "the-novel-analytical-essay",
      guideRef: "setting-motif-structure",
      kind: "short",
      difficulty: "core",
      question:
        "In a novel extract depicting a collapsing peace treaty, the writer describes the skyline: 'A bruised, low sky pressed over the courthouse, and sharp sleet spat against the glass.' Name the two-word literary technique of reflecting human tension or mood through weather and nature.",
      answer: {
        type: "text",
        accept: ["pathetic fallacy"],
        display: "pathetic fallacy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["personification"] },
          feedback: "Close — 'bruised' and 'spat' do use personification, but the specific two-word term for using *weather or nature* to mirror human mood is pathetic fallacy.",
        },
        {
          spec: { type: "text", accept: ["foreshadowing"] },
          feedback: "While dark weather can hint at trouble ahead, look for the specific literary term for attributing human mood to weather and nature.",
        },
      ],
      hints: [
        "Notice how the sky is 'bruised' and the sleet 'spat', echoing the hostility inside the courthouse.",
        "John Ruskin coined this two-word phrase specifically for weather and natural scenery mirroring emotion.",
      ],
      strategy: "Distinguish general personification from mood-mirroring weather.",
      solution: [
        "Using weather or natural surroundings ('bruised sky', 'spat') to mirror human emotion and atmospheric dread is **pathetic fallacy**.",
        "Unlike general personification, pathetic fallacy specifically links natural elements or climate to character mood or thematic tension.",
      ],
    },
    {
      id: "exam-power-conflict-q05",
      topicId: "the-novel-analytical-essay",
      guideRef: "setting-motif-structure",
      kind: "short",
      difficulty: "core",
      question:
        "In a novel about divided siblings, Chapter 1 shows an older brother dropping a cracked pocket watch into a canal, Chapter 9 shows him hearing ticking in an empty station, and the final chapter shows his sister rescuing the rusted watch from the reeds. What single literary word describes a recurring image or object woven through a whole text to develop a theme?",
      answer: {
        type: "text",
        accept: ["motif", "a motif", "recurring motif", "leitmotif"],
        display: "motif",
      },
      traps: [
        {
          spec: { type: "text", accept: ["metaphor", "extended metaphor"] },
          feedback: "A metaphor equates two unlike things; here a tangible object recurs across chapters to reinforce the theme of lost time.",
        },
        {
          spec: { type: "text", accept: ["climax", "flashback"] },
          feedback: "Those are plot events rather than a recurring thematic object woven from opening to ending.",
        },
      ],
      hints: [
        "Focus on the idea of deliberate *repetition across the whole narrative* to carry symbolic weight.",
        "This five-letter French-origin word is frequently paired with 'recurring'.",
      ],
      strategy: "Track repeated objects across openings, middles, and endings.",
      solution: [
        "A recurring concrete image, sound, or object repeated across a text to reinforce a central theme is a **motif**.",
        "Here, the watch motif also links to a cyclical ending, showing how unresolved conflict lingers over time.",
      ],
    },
    {
      id: "exam-power-conflict-q06",
      topicId: "the-novel-analytical-essay",
      guideRef: "analytical-essay-craft",
      kind: "mcq",
      difficulty: "core",
      question:
        "A Year 9 student is analysing a novel extract in which a factory supervisor says: 'Keep your eyes on the loom, girl — curiosity does not spin thread.' Which analytical sentence embeds the quotation most fluently and applies top-band single-word zoom?",
      options: [
        "By snapping that 'curiosity does not spin thread', the writer implies authority treats questioning as a threat to profit.",
        "This quote shows the supervisor is very mean to the girl because he tells her not to be curious while working.",
        "The author uses speech marks in the quote 'Keep your eyes on the loom, girl' which makes the reader feel quite sad.",
        "In the middle of the paragraph there is a sentence with a dash and an imperative verb that proves the boss is bad.",
      ],
      answerIndex: 0,
      hints: [
        "Look for a sentence that weaves a concise quoted phrase seamlessly into its own grammar—no 'This quote shows'.",
        "Check which sentence uses tentative analytical phrasing ('implies') and links word choice to a thematic idea about power.",
      ],
      strategy: "Upgrade clunky quote-dropping into embedded WHAT–HOW–WHY prose.",
      explanation:
        "Fluently embedding a concise phrase ('curiosity does not spin thread') inside the analytical sentence avoids awkward 'This quote shows' framing, uses tentative phrasing ('implies'), and interprets the deeper power dynamic—showing how the supervisor reduces workers to pure economic output.",
    },
    {
      id: "exam-power-conflict-q07",
      topicId: "the-novel-analytical-essay",
      guideRef: "setting-motif-structure",
      kind: "short",
      difficulty: "challenge",
      question:
        "In an example dystopian novel (such as William Golding's *Lord of the Flies* or any story set on a cut-off island or locked train), a writer uses one small, enclosed community to mirror the power struggles, hierarchy, and prejudice of wider human society. Name the single literary term for a miniature world representing a larger one.",
      answer: {
        type: "text",
        accept: ["microcosm", "a microcosm"],
        display: "microcosm",
      },
      traps: [
        {
          spec: { type: "text", accept: ["allegory", "an allegory"] },
          feedback: "An allegory is a whole narrative where characters stand for abstract ideas; look for the specific word meaning 'little world' (Greek *mikros* + *kosmos*).",
        },
        {
          spec: { type: "text", accept: ["dystopia", "utopia"] },
          feedback: "Dystopia names a bleak imagined society, whereas this term means any small setting acting as a miniature mirror of wider society.",
        },
      ],
      hints: [
        "Break the word into two Greek roots: 'small' (micro-) and 'world/universe' (-cosm).",
        "Writers often turn a single boarding school, ship, or island into this miniature reflection of society.",
      ],
      strategy: "Use precise critical vocabulary for symbolic settings.",
      solution: [
        "A compact, self-contained setting designed to mirror the structure and conflicts of wider society is a **microcosm**.",
        "Analysing setting as a microcosm immediately elevates essays from literal description to conceptual commentary.",
      ],
    },
    {
      id: "exam-power-conflict-q08",
      topicId: "power-conflict-poetry",
      guideRef: "poetic-form-metre-structure",
      kind: "short",
      difficulty: "warmup",
      question:
        "Read these two lines from an unseen poem about wartime borders:\n\n'The general drew the border in clean ink\nwhile frost crept softly through the trench's seams.'\n\nNotice how the first line flows directly into the second line with no punctuation pause at the end. Name this poetic structural technique.",
      answer: {
        type: "text",
        accept: ["enjambment", "run-on line", "run on line", "run-on lines", "run on lines"],
        display: "enjambment",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura", "medial caesura"] },
          feedback: "A caesura is a punctuation pause *inside* the middle of a line; here there is no pause at the line ending so the syntax spills over.",
        },
        {
          spec: { type: "text", accept: ["volta"] },
          feedback: "A volta is a conceptual or emotional turning point, whereas this term names a sentence running smoothly past a line break.",
        },
      ],
      hints: [
        "Look at the end of line 1 ('ink') — there is no comma, dash, or full stop before 'while'.",
        "The term comes from the French word *enjamber* ('to stride over').",
      ],
      strategy: "Check punctuation at line endings to diagnose poetic pace.",
      solution: [
        "When a clause runs straight over a line break without end-punctuation, the technique is **enjambment** (or a **run-on line**).",
        "Here it quietly links the clean detachment of the general's map directly to the creeping physical cold endured by soldiers.",
      ],
    },
    {
      id: "exam-power-conflict-q09",
      topicId: "power-conflict-poetry",
      guideRef: "poetic-form-metre-structure",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read the final five lines of an illustrative example poem (*Ozymandias* by Percy Bysshe Shelley):\n\n'\"My name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\"\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.'\n\nWhat is the sharpest analytical effect of the full stop directly after 'Nothing beside remains.' (a **medial caesura**)?",
      options: [
        "It speeds up the rhythm so the tyrant's boast feels unstoppable and triumphant.",
        "It signals that the desert traveller has forgotten the rest of the inscription.",
        "It brings the boast to an abrupt, blunt halt, exposing how completely power vanishes.",
        "It introduces a warm romantic shift celebrating the beauty of ancient sculpture.",
      ],
      answerIndex: 2,
      hints: [
        "Read the booming exclamation 'and despair!' aloud, then pause hard on the short sentence 'Nothing beside remains.'",
        "Contrast the tyrant's grand pride with the stark finality of that mid-line full stop.",
      ],
      strategy: "Connect punctuation breaks (caesura) directly to thematic irony.",
      explanation:
        "The blunt mid-line full stop after 'Nothing beside remains.' halts the poem dead in its tracks right after the ruler's grand boast, enacting structurally how time erases tyrannical ego before the enjambed final lines stretch outward into empty desert.",
    },
    {
      id: "exam-power-conflict-q10",
      topicId: "power-conflict-poetry",
      guideRef: "poetic-form-metre-structure",
      kind: "short",
      difficulty: "core",
      question:
        "In a sonnet or narrative poem, a poet often builds one mood through the first half before pivoting abruptly to a contrasting emotion, revelation, or counter-argument. Write the five-letter Italian term for this structural turning point.",
      answer: {
        type: "text",
        accept: ["volta", "the volta"],
        display: "volta",
      },
      traps: [
        {
          spec: { type: "text", accept: ["caesura"] },
          feedback: "A caesura is a punctuation pause inside a line; this Italian term literally means 'turn' and marks a shift in argument or mood.",
        },
        {
          spec: { type: "text", accept: ["stanza", "tercet", "octave", "sestet"] },
          feedback: "Those name groups of lines, whereas this term specifically names the emotional or conceptual turning point.",
        },
      ],
      hints: [
        "In a Petrarchan sonnet it usually arrives at line 9; in a Shakespearean sonnet often at the closing couplet or line 9.",
        "The Italian word literally translates as 'turn' and begins with 'v'.",
      ],
      strategy: "Locate turning points to track how a poem's argument evolves.",
      solution: [
        "The structural turning point in a poem's tone, argument, or perspective is called the **volta**.",
        "Spotting the volta helps you explain how a poem shifts from opening illusion to closing truth.",
      ],
    },
    {
      id: "exam-power-conflict-q11",
      topicId: "power-conflict-poetry",
      guideRef: "imagery-sound-connotation",
      kind: "short",
      difficulty: "core",
      question:
        "Read these two lines from an unseen poem about coastal erosion:\n\n'Silent, silver surges slice the stone\nand hiss across the seawall's sunken spine.'\n\nName the specific sound device created by repeating the soft 's' sounds throughout these lines.",
      answer: {
        type: "text",
        accept: ["sibilance", "sibilant sounds", "sibilant alliteration"],
        display: "sibilance",
      },
      traps: [
        {
          spec: { type: "text", accept: ["plosives", "plosive"] },
          feedback: "Plosives are harsh burst sounds like b, p, t, d; here the poet repeats hissing 's' sounds.",
        },
        {
          spec: { type: "text", accept: ["assonance"] },
          feedback: "Assonance repeats internal vowel sounds; look for the specific consonant term for repeated 's', 'sh', or 'z' sounds.",
        },
        {
          spec: { type: "text", accept: ["alliteration"] },
          feedback: "Alliteration is the broad umbrella — name the specific nine-letter sound device for repeated 's' / hissing consonants.",
        },
      ],
      hints: [
        "Listen to the acoustic whisper of 'Silent, silver surges slice... hiss... seawall's sunken spine'.",
        "The technical name for repeated 's'/'sh' hissing sounds starts with 'sib-'.",
      ],
      strategy: "Link sound patterns to sensory atmosphere (here, rushing water).",
      solution: [
        "The deliberate repetition of 's', 'sh', or 'z' sounds is **sibilance**.",
        "Here the sibilance acoustically mimics the relentless hiss of waves wearing down human stone defences.",
      ],
    },
    {
      id: "exam-power-conflict-q12",
      topicId: "power-conflict-poetry",
      guideRef: "imagery-sound-connotation",
      kind: "mcq",
      difficulty: "core",
      question:
        "Across three stanzas of an unseen poem about a fallen empire, the speaker weaves together the words *ash*, *rust*, *moth-eaten*, *hollow*, and *splintered*. What is the strongest analytical explanation for grouping this **semantic field** of decay?",
      options: [
        "It shows the poet ran out of rhymes and had to pick darker synonyms instead.",
        "It layers sensory ruin across the poem, reinforcing that empires inevitably crumble.",
        "It implies the speaker hopes to repair the palace gates before winter begins.",
        "It proves the poem was written during a specific historical battle in Europe.",
      ],
      answerIndex: 1,
      hints: [
        "Think about the cumulative impression created when five separate images all belong to the domain of rot and breakage.",
        "Remember that semantic fields build a sustained mood and thematic argument rather than pointing to a single isolated moment.",
      ],
      strategy: "Analyse linked word families (semantic fields) for cumulative effect.",
      explanation:
        "Sustaining a semantic field of decay (*ash, rust, moth-eaten, hollow, splintered*) saturates the poem's texture with deterioration, showing that imperial grandeur is quietly hollowed out from within by time rather than remaining monumental.",
    },
    {
      id: "exam-power-conflict-q13",
      topicId: "power-conflict-poetry",
      guideRef: "imagery-sound-connotation",
      kind: "short",
      difficulty: "core",
      question:
        "In an unseen protest poem about inequality, the speaker places two sharply opposing scenes directly beside one another: 'crystal banquets beneath gilt chandeliers' next to 'tin bowls scraped bright by thin spoons'. Name the literary technique of placing contrasting images side by side to sharpen their difference.",
      answer: {
        type: "text",
        accept: ["juxtaposition", "juxtaposing", "contrast"],
        display: "juxtaposition",
      },
      traps: [
        {
          spec: { type: "text", accept: ["oxymoron"] },
          feedback: "An oxymoron fuses two directly contradictory words right next to each other (like 'deafening silence'); placing two contrasting scenes side by side is broader.",
        },
        {
          spec: { type: "text", accept: ["simile", "metaphor"] },
          feedback: "The poem is not equating banquets to tin bowls; it is setting wealth and hunger side by side to expose injustice.",
        },
      ],
      hints: [
        "Notice how placing luxury immediately beside poverty makes the unfairness impossible to ignore.",
        "This thirteen-letter term comes from Latin *juxta* ('beside') + 'position'.",
      ],
      strategy: "Use precise structural contrast vocabulary.",
      solution: [
        "Placing two contrasting images, ideas, or scenes side by side to highlight their difference is **juxtaposition**.",
        "Here the juxtaposition exposes the grotesque gulf between ruling-class excess and ordinary hunger.",
      ],
    },
    {
      id: "exam-power-conflict-q14",
      topicId: "power-conflict-poetry",
      guideRef: "themes-of-power-conflict",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "Read this unseen stanza about nature reclaiming an abandoned fortress:\n\n'Ivy pries apart the mortar\nwith patient, emerald knuckles;\nthe watchtower bows its granite head\nto rain that never bargains.'\n\nWhich thematic interpretation is most persuasively supported by the verbs *pries*, *bows*, and *never bargains*?",
      options: [
        "Human fortresses easily defeat seasonal weather whenever their walls are thick.",
        "The speaker regrets that soldiers forgot to trim the ivy around the watchtower.",
        "Nature waits politely for human rulers to sign treaties before changing landscapes.",
        "Slow, indifferent natural forces quietly humble human arrogance and military might.",
      ],
      answerIndex: 3,
      hints: [
        "Look at who is active and commanding ('pries', 'never bargains') versus who submits ('bows its granite head').",
        "Connect 'never bargains' to the theme of human power versus nature's indifference to politics.",
      ],
      strategy: "Trace power relationships through active versus submissive verbs.",
      explanation:
        "Personifying ivy with 'patient... knuckles' that 'pries' stone apart while the granite tower 'bows' to rain that 'never bargains' reverses military hierarchy: slow, unbribable natural time effortlessly dismantles human fortifications.",
    },
    {
      id: "exam-power-conflict-q15",
      topicId: "power-conflict-poetry",
      guideRef: "comparative-poetry-essay",
      kind: "mcq",
      difficulty: "challenge",
      diagram: SVG_COMPARE_WEAVE,
      question:
        "Using the comparative essay diagram, suppose you are comparing two unseen poems about power: Poem A portrays a ruler's cracked marble statue, while Poem B portrays a storm breaking a harbour seawall. Which opening comparative topic sentence is genuinely **conceptual** rather than surface feature-spotting?",
      options: [
        "Both poets expose the illusion of permanence, yet Poem A mocks human vanity while Poem B evokes nature's raw indifference.",
        "Both Poem A and Poem B use metaphors, adjectives, and stanzas to show different things about power and conflict.",
        "Poem A has fourteen lines about a statue in a desert, whereas Poem B has sixteen lines about waves hitting a wall.",
        "In this essay I will first summarise every line of Poem A and then write two paragraphs explaining Poem B separately.",
      ],
      answerIndex: 0,
      hints: [
        "A conceptual point leads with a *shared big idea* and a nuanced *difference in angle*, not just counting lines or listing 'metaphors'.",
        "Check which sentence sets up a rich weave across BOTH poems straight away.",
      ],
      strategy: "Lead comparative paragraphs with ideas, then prove them through methods.",
      explanation:
        "Leading with a shared conceptual thread ('the illusion of permanence') and distinguishing each poet's thematic angle (mocking vanity versus depicting raw natural indifference) creates an analytical comparison, whereas counting lines or saying 'both use metaphors' stays trapped at surface feature-spotting.",
    },
    {
      id: "exam-power-conflict-q16",
      topicId: "power-conflict-short-stories",
      guideRef: "short-story-architecture",
      kind: "mcq",
      difficulty: "warmup",
      diagram: SVG_FREYTAG_SHORT,
      question:
        "Study the narrative arc diagram and read this short-story opening:\n\n'\"Drop the ledger,\" the inspector ordered, his palm already flat across the oak desk. Outside, the ferry horn sounded twice — my last boat off the island.'\n\nWhy does the writer begin *in media res* instead of spending three paragraphs explaining the narrator's childhood and job?",
      options: [
        "Because short stories are not allowed to include any dialogue in their opening lines.",
        "To plunge the reader straight into high-stakes conflict and urgent unanswered questions.",
        "To show that the inspector and the narrator have been relaxed friends for many years.",
        "Because the writer wants the ending to arrive before any tension builds in the plot.",
      ],
      answerIndex: 1,
      hints: [
        "Look at the steep starting height of the solid line in the diagram compared with the slow dashed exposition.",
        "Notice how two rapid details—an abrupt command and a departing ferry—immediately generate suspense.",
      ],
      strategy: "Explain narrative economy in short-story openings.",
      explanation:
        "Short stories operate under tight narrative economy. Opening *in media res* drops the reader directly into confrontation ('Drop the ledger') and ticking-clock peril ('my last boat'), forcing immediate curiosity about what is inside the ledger and whether the narrator will escape.",
    },
    {
      id: "exam-power-conflict-q17",
      topicId: "power-conflict-short-stories",
      guideRef: "short-story-architecture",
      kind: "short",
      difficulty: "warmup",
      question:
        "On page one of a conflict short story, a lighthouse keeper casually notices a hairline crack across the brass storm latch long before the cyclone hits in the climax. Name the structural technique of planting subtle early clues to hint at danger or events yet to come.",
      answer: {
        type: "text",
        accept: ["foreshadowing", "foreshadow"],
        display: "foreshadowing",
      },
      traps: [
        {
          spec: { type: "text", accept: ["flashback", "analepsis"] },
          feedback: "A flashback looks *backwards* into the past; this technique plants clues pointing *forwards* toward future crisis.",
        },
        {
          spec: { type: "text", accept: ["epiphany"] },
          feedback: "An epiphany is a character's sudden realisation, whereas planting early warning clues for the reader is foreshadowing.",
        },
      ],
      hints: [
        "Think of a shadow cast *ahead* of an approaching event before it arrives.",
        "Writers drop quiet early details so the later climax feels both surprising and inevitable.",
      ],
      strategy: "Distinguish forward-looking structural clues from backward-looking memories.",
      solution: [
        "Planting subtle hints early in a story to signal later conflict or disaster is **foreshadowing**.",
        "Here the 'hairline crack' quietly primes the reader for the storm shutter failing under pressure.",
      ],
    },
    {
      id: "exam-power-conflict-q18",
      topicId: "power-conflict-short-stories",
      guideRef: "tension-pacing-syntax",
      kind: "short",
      difficulty: "core",
      question:
        "Read this tense short-story extract:\n\n'The iron bolt slid shut. Silence. A boot scraped wet gravel outside the cellar grating. Nobody breathed.'\n\nLook closely at the one-word sentence 'Silence.' — it contains no main verb. What two-word grammatical term names a deliberately incomplete sentence without a main verb used for dramatic impact?",
      answer: {
        type: "text",
        accept: ["minor sentence", "sentence fragment", "verbless sentence", "fragment"],
        display: "minor sentence",
      },
      traps: [
        {
          spec: { type: "text", accept: ["simple sentence"] },
          feedback: "A simple sentence contains a subject and a finite main verb (like 'Nobody breathed.'); 'Silence.' has no verb at all.",
        },
        {
          spec: { type: "text", accept: ["complex sentence", "compound sentence"] },
          feedback: "Compound and complex sentences join multiple clauses; 'Silence.' is a single verbless word standing alone.",
        },
      ],
      hints: [
        "Check whether 'Silence.' has a subject and a verb — it is just a single isolated noun.",
        "In English analysis, a deliberately verbless sentence used for punchy tension is called a 'minor...' or 'sentence...'.",
      ],
      strategy: "Classify sentence structures precisely by checking for a finite verb.",
      solution: [
        "A deliberately incomplete, verbless sentence such as 'Silence.' is a **minor sentence** (or **sentence fragment**).",
        "By stripping away even a verb, the writer freezes time and forces the reader to hold their breath alongside the hidden characters.",
      ],
    },
    {
      id: "exam-power-conflict-q19",
      topicId: "power-conflict-short-stories",
      guideRef: "power-dynamics-subtext",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read this brief dialogue from a short story set in a grain warehouse:\n\n'\"Sign the docket, boy.\"\n\"The sacks are short by ten kilos, sir.\"\n\"I did not ask you to weigh them. Sign.\"\nKiran laid the pen neatly beside the inkwell and folded his hands.'\n\nHow does the writer convey the shifting power dynamic through both dialogue and physical subtext?",
      options: [
        "Kiran uses loud threats to intimidate the overseer into paying higher wages.",
        "The overseer shows genuine gratitude for Kiran's careful check of the scales.",
        "The overseer relies on blunt imperatives, while Kiran's composed silence defies him.",
        "Kiran puts down the pen because he cannot read the numbers printed on the docket.",
      ],
      answerIndex: 2,
      hints: [
        "Notice who uses patronising labels ('boy') and clipped commands ('Sign'), and what Kiran does *without speaking* at the end.",
        "Think about why folding his hands neatly is more powerful than shouting back.",
      ],
      strategy: "Read unspoken physical gestures (subtext) alongside spoken imperatives.",
      explanation:
        "The overseer tries to assert dominance through condescension ('boy') and stark imperatives ('Sign'), yet Kiran refuses to escalate verbally—instead, laying the pen down 'neatly' and folding his hands communicates calm, unshakeable moral resistance.",
    },
    {
      id: "exam-power-conflict-q20",
      topicId: "power-conflict-short-stories",
      guideRef: "short-story-architecture",
      kind: "short",
      difficulty: "core",
      question:
        "Near the end of a wartime short story, a border guard confiscates a smuggler's locked tin expecting coded maps, only to find a child's asthma inhaler and a folded school photograph—instantly shattering his certainty about who his 'enemies' are. Name the single literary term for a character's sudden moment of profound realisation.",
      answer: {
        type: "text",
        accept: ["epiphany", "an epiphany", "anagnorisis"],
        display: "epiphany",
      },
      traps: [
        {
          spec: { type: "text", accept: ["cliffhanger", "twist"] },
          feedback: "A cliffhanger or plot twist is about surprising events for the reader; this term specifically names the *character's* sudden inner awakening.",
        },
        {
          spec: { type: "text", accept: ["climax", "denouement"] },
          feedback: "Those are broad structural stages of a plot, not the specific word for a character's sudden flash of truth.",
        },
      ],
      hints: [
        "Short stories often pivot on an inner flash of insight rather than a huge battle.",
        "The eight-letter Greek-origin word starts with 'epi-'.",
      ],
      strategy: "Identify psychological turning points in short fiction.",
      solution: [
        "A character's sudden, transformative flash of insight is an **epiphany**.",
        "In compact short stories, an epiphany often serves as the emotional climax, shifting how both character and reader judge conflict.",
      ],
    },
    {
      id: "exam-power-conflict-q21",
      topicId: "power-conflict-short-stories",
      guideRef: "close-reading-prose",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "In a close-reading extract about a flood evacuation, Paragraph 1 opens with a panoramic sweep across the swollen river, darkened bridge, and siren-lit rooftops, whereas Paragraph 2 narrows tightly onto one child's white knuckles gripping a rusted padlock. Why does the writer zoom from wide establishing shot to tight close-up?",
      options: [
        "To distract the reader from the flood so the storm seems less dangerous overall.",
        "To prove the narrator is hovering inside a helicopter above the town centre.",
        "To replace emotional storytelling with objective geographical measurements.",
        "To shift from overwhelming scale to claustrophobic, personal human vulnerability.",
      ],
      answerIndex: 3,
      hints: [
        "Think like a film director: what changes emotionally when a camera cuts from an entire flooded town straight to one trembling hand?",
        "Notice how the contrast between vast danger and tiny physical detail intensifies empathy.",
      ],
      strategy: "Analyse shifts in narrative camera-distance (wide shot to close-up).",
      explanation:
        "Moving from a panoramic overview of catastrophe down to a single child's gripped knuckles anchors vast public crisis in raw, intimate human vulnerability, making the reader feel both the immense scale of the threat and the fragile individual trapped inside it.",
    },
    {
      id: "exam-power-conflict-q22",
      topicId: "the-novel-analytical-essay",
      guideRef: "analytical-essay-craft",
      kind: "written",
      difficulty: "core",
      marks: 4,
      diagram: SVG_WHW_NOVEL,
      question:
        "Read this unseen novel extract set in a divided coastal town:\n\n'Magistrate Voss tapped the new iron railing with his cane, satisfied by the cold ring of steel. From the hillside terraces above, the harbour roofs looked neat as ledgers—grey, obedient, silent. Behind him, his young clerk Nadia paused beside a gap where wild jasmine had already threaded green shoots around the bolts. She did not report it.'\n\nUsing the WHAT–HOW–WHY blueprint, analyse how the writer presents institutional authority alongside quiet resistance in this extract. (4 marks)",
      hints: [
        "WHAT: Establish the sharp contrast between Voss's desire for rigid control and Nadia's silent dissent.",
        "HOW: Zoom in on Voss's simile ('neat as ledgers') and metallic diction ('cold ring of steel'), plus the natural image of 'wild jasmine' threading through the bolts.",
        "WHY: Consider the structural punch of the final four-word sentence ('She did not report it.') and what it implies about the limits of authoritarian control.",
      ],
      strategy: "Pair single-word zoom with structural analysis of the closing sentence.",
      modelAnswer:
        "The writer contrasts Magistrate Voss's rigid, dehumanising view of authority with fragile yet persistent signs of quiet resistance. First, metallic imagery in 'cold ring of steel' and the simile reducing people's homes to 'neat as ledgers' imply that Voss views ordinary citizens not as living communities, but as obedient numbers to be audited and contained from his elevated hillside perch. Conversely, Nadia acts as a subtle foil: noticing 'wild jasmine' already weaving through iron bolts introduces organic imagery suggesting that natural life and human resilience inevitably infiltrate artificial barriers. Finally, the abrupt, restrained four-word closing sentence—'She did not report it.'—withholds melodrama yet delivers a decisive shift, inviting the reader to admire how silent non-compliance can quietly subvert oppressive power from within.",
      markScheme: [
        {
          point: "Makes a clear conceptual claim contrasting Voss's controlling authority with Nadia's quiet subversion/resistance.",
          keywords: ["authority", "control", "subvert", "subvers", "resistan", "dissent", "foil", "contrast"],
        },
        {
          point: "Analyses metallic diction ('cold', 'steel') OR the simile ('neat as ledgers') showing dehumanising, clinical power.",
          keywords: ["simile", "ledger", "dehumanis", "audit", "number", "metallic", "steel", "clinical", "obedient"],
        },
        {
          point: "Unpacks the symbolic / organic imagery of 'wild jasmine' growing around iron bolts as resilience undermining rigid barriers.",
          keywords: ["jasmine", "organic", "nature", "natural", "symbol", "resilien", "infiltrat", "barrier", "growth"],
        },
        {
          point: "Evaluates the structural impact of the stark short final sentence ('She did not report it.') and its effect on the reader.",
          keywords: ["short sentence", "final sentence", "closing", "abrupt", "retrain", "restrain", "silent", "non-compliance", "reader"],
        },
      ],
      commonError: "Describing what Voss and Nadia do without zooming into the connotations of 'ledgers', 'jasmine', or the clipped final sentence.",
    },
    {
      id: "exam-power-conflict-q23",
      topicId: "power-conflict-poetry",
      guideRef: "comparative-poetry-essay",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Read these two short unseen poetry extracts about contrasting forms of power:\n\n**Extract A — *The General's Plinth***\nHe cast his boots in bronze ten metres tall,\ncommanding squares to kneel beneath his frown;\nyet winter rain found hairline cracks in bronze,\nand salt-streaks wept like rust across his crown.\n\n**Extract B — *The Lined Coat***\nThey banned our tongue from signposts and the square,\nso Grandmother stitched ballads in my hem—\nno soldier hears the metre thread my stride,\nyet every step I walk remembers them.\n\nCompare how the two poets present **different kinds of power** (loud political domination versus quiet cultural endurance), weaving both extracts together and analysing specific poetic methods. (4 marks)",
      hints: [
        "Lead with a conceptual comparison: both poems explore how power survives or fails over time, yet Extract A focuses on brittle outward authority while Extract B celebrates hidden cultural endurance.",
        "Analyse a method in Extract A (e.g. 'cast... in bronze', personification 'wept like rust', or ironic undermining of 'crown').",
        "Use a comparative connective ('whereas', 'conversely', 'in contrast') to pivot into Extract B's extended sewing/textile metaphor ('stitched', 'hem', 'thread') and rhythmic defiance.",
      ],
      strategy: "Weave both texts inside a conceptual comparison using comparative connectives.",
      modelAnswer:
        "Both poets challenge the myth that loud political dominance is permanent, yet Extract A exposes the inevitable decay of monumental arrogance whereas Extract B celebrates how silenced culture endures quietly beneath authority's gaze. In Extract A, hyperbole and hard metallic imagery ('bronze ten metres tall') convey the tyrant's obsessive performance of supremacy, while the ironic simile 'wept like rust' turns his proud 'crown' into a decaying, humiliated mask worn down by nature. Conversely, Extract B uses an intimate extended metaphor of tailoring—'stitched ballads in my hem' and 'metre thread my stride'—to depict language and heritage as portable, woven directly into everyday bodily movement where soldiers cannot police it. Ultimately, while Extract A relies on external erosion to mock brittle authority, Extract B empowers ordinary memory itself as an invisible, unbreakable form of resistance.",
      markScheme: [
        {
          point: "Establishes a conceptual comparison contrasting brittle public/political power in Extract A with quiet cultural/personal endurance in Extract B.",
          keywords: ["endur", "fragil", "brittle", "arroganc", "dominan", "cultural", "invisible", "heritage", "monument"],
        },
        {
          point: "Uses explicit comparative connectives ('whereas', 'conversely', 'in contrast', 'while', 'similarly') to weave both extracts.",
          keywords: ["whereas", "conversely", "contrast", "while", "similarly", "unlike", "both"],
        },
        {
          point: "Analyses a specific poetic method in Extract A (e.g. bronze/metallic imagery, hyperbole, 'wept like rust' simile/personification).",
          keywords: ["bronze", "simile", "rust", "wept", "hyperbole", "decay", "ironic", "erod", "erosion"],
        },
        {
          point: "Analyses a specific poetic method in Extract B (e.g. extended sewing/stitching metaphor, 'thread', 'metre', bodily rhythm/defiance).",
          keywords: ["extended metaphor", "metaphor", "stitch", "sew", "tailor", "thread", "woven", "portable", "resistan", "defian"],
        },
      ],
      commonError: "Writing two disconnected mini-summaries without comparative connectives or analysis of the poets' language methods.",
    },
    {
      id: "exam-power-conflict-q24",
      topicId: "power-conflict-short-stories",
      guideRef: "tension-pacing-syntax",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "Read this short-story extract depicting a messenger hiding beneath a wooden pier:\n\n'Above her head, the patrol boots marched past the mooring posts, paused beside the coiled rope, shifted weight onto a groaning plank, and swung an amber beam across the black water that nearly brushed her knees. She stopped breathing. Dust drifted through the slit. Wait.'\n\nExplain how the writer manipulates **sentence length, syntax, and sensory detail** to build claustrophobic tension. (3 marks)",
      hints: [
        "Compare the opening long, multi-clause sentence with the abrupt clipped sentences that follow.",
        "Notice the sensory verbs and colours ('groaning plank', 'amber beam', 'black water') tightening the space around her.",
        "Look closely at the one-word closing imperative/minor sentence 'Wait.' — what effect does it have on pacing?",
      ],
      strategy: "Track how changing sentence lengths physically alter reading speed.",
      modelAnswer:
        "The writer mirrors the messenger's rising panic by shifting sharply from an accumulating, breathless opening sentence into stark, stalled fragments. First, the opening multi-clause sentence piles up sequential patrol verbs—'marched', 'paused', 'shifted', 'swung'—prolonging suspense as the threat closes in inch by inch. Next, visual and auditory contrast between the piercing 'amber beam', 'black water', and 'groaning plank' creates a claustrophobic trap where even wood threatens to betray her. Finally, truncating the rhythm to three clipped sentences culminating in the single-word command 'Wait.' halts narrative momentum completely, forcing the reader to freeze alongside her in tense stillness.",
      markScheme: [
        {
          point: "Analyses the opening long / multi-clause / accumulating sentence and listed verbs prolonging suspense.",
          keywords: ["multi-clause", "accumulat", "long sentence", "list", "prolong", "breathless", "build", "pace"],
        },
        {
          point: "Analyses sharp contrast with the abrupt short sentences or one-word minor sentence ('Wait.') freezing momentum.",
          keywords: ["short sentence", "fragment", "minor", "abrupt", "clipped", "halt", "freez", "stillness", "truncat"],
        },
        {
          point: "Explores claustrophobic sensory imagery ('groaning plank', 'amber beam', 'black water', 'dust') intensifying threat or reader empathy.",
          keywords: ["sensory", "auditory", "visual", "claustrophob", "trap", "betray", "contrast", "reader", "panic"],
        },
      ],
      commonError: "Saying 'short sentences make it faster' here—notice the final clipped sentences actually *freeze* and slow time down into agonising stillness.",
    },
    {
      id: "exam-power-conflict-q25",
      topicId: "power-conflict-short-stories",
      guideRef: "power-dynamics-subtext",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Read this short-story extract in which a mining company surveyor meets village elder Auntie Lin beside a dry valley:\n\n'\"Sign the water permit today, please, and we'll resurface the road—\" the surveyor said, tapping his wristwatch.\n\"Last monsoon our wells dropped three—\"\n\"Every district faces dry spells, madam. Look at the projections on page two.\" He slid the glossy folder across the table.\nAuntie Lin did not touch the folder. She stood up slowly, walked to the porch rail, and pointed a single weathered finger toward the cracked clay riverbed.'\n\nAnalyse how the writer uses **interruption, props, and unspoken subtext** to expose the power imbalance and Auntie Lin's quiet refusal to be intimidated. (4 marks)",
      hints: [
        "Look at the dashes (—) showing how the surveyor cuts Auntie Lin off mid-sentence and dismisses lived reality with corporate jargon ('projections').",
        "Compare the physical props: his 'wristwatch' and 'glossy folder' versus her 'weathered finger' and the 'cracked clay riverbed'.",
        "Explain how her refusal to speak or touch the folder shifts authority back toward her at the close.",
      ],
      strategy: "Decode conversational dominance (interruptions) alongside symbolic gesture.",
      modelAnswer:
        "The writer exposes corporate arrogance through conversational dominance before reversing the balance of moral authority through silent gesture. Initially, the surveyor performs impatient superiority by tapping his wristwatch and cutting Auntie Lin off mid-sentence—signalled by the abrupt em-dash—replacing her lived knowledge of failing wells with detached corporate language ('projections'). Furthermore, the stark juxtaposition between his 'glossy folder' and the 'cracked clay riverbed' highlights the chasm between polished paperwork and harsh environmental truth. When Auntie Lin refuses even to touch his documents, her slow, unhurried movement directly counteracts his rushed control; pointing wordlessly with a 'weathered finger' anchors her authority in lived endurance, leaving the surveyor's sales pitch hollow without her needing to raise her voice.",
      markScheme: [
        {
          point: "Analyses the interruption / em-dash cutting Auntie Lin off to show conversational dominance or dismissiveness.",
          keywords: ["interrupt", "em-dash", "dash", "cut", "dominan", "dismiss", "impatient", "arroganc", "superior"],
        },
        {
          point: "Analyses the surveyor's props or jargon ('wristwatch', 'glossy folder', 'projections') conveying rushed, detached corporate power.",
          keywords: ["wristwatch", "glossy", "jargon", "corporate", "detached", "paperwork", "polished", "rush"],
        },
        {
          point: "Unpacks the juxtaposition between polished paperwork and the tangible 'cracked clay riverbed' / 'weathered finger'.",
          keywords: ["juxtapos", "contrast", "chasm", "reality", "environmental", "tangible", "endur", "truth"],
        },
        {
          point: "Evaluates how Auntie Lin's calm silence and physical subtext reclaim moral authority without shouting.",
          keywords: ["subtext", "silenc", "silent", "wordless", "unhurried", "reclaim", "revers", "moral", "refus"],
        },
      ],
      commonError: "Summarising the disagreement over the permit without commenting on the em-dash interruption or the contrast between props.",
    },
  ],
};
