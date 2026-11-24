import type { ExamPaper } from "../types.ts";

const SVG_PROTOCOL =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-minute unseen poetry reading protocol from title clues to deeper theme">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="30" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">The 5-Minute Unseen Poetry Reading Protocol</text>' +
  '<g font-family="system-ui, -apple-system, sans-serif" text-anchor="middle">' +
  '<rect x="18" y="54" width="96" height="106" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="66" y="76" font-size="11" font-weight="700" fill="var(--brand)">1. TITLE</text>' +
  '<text x="66" y="100" font-size="10.5" fill="var(--ink)">Predict mood</text>' +
  '<text x="66" y="116" font-size="10.5" fill="var(--ink)">&amp; double</text>' +
  '<text x="66" y="132" font-size="10.5" fill="var(--ink)">meanings</text>' +
  '<rect x="125" y="54" width="96" height="106" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="173" y="76" font-size="11" font-weight="700" fill="var(--brand)">2. LITERAL</text>' +
  '<text x="173" y="100" font-size="10.5" fill="var(--ink)">Who? Where?</text>' +
  '<text x="173" y="116" font-size="10.5" fill="var(--ink)">What happens</text>' +
  '<text x="173" y="132" font-size="10.5" fill="var(--ink)">on the surface?</text>' +
  '<rect x="232" y="54" width="96" height="106" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="280" y="76" font-size="11" font-weight="700" fill="var(--brand)">3. VOICE</text>' +
  '<text x="280" y="100" font-size="10.5" fill="var(--ink)">Pinpoint tone</text>' +
  '<text x="280" y="116" font-size="10.5" fill="var(--ink)">&amp; attitude</text>' +
  '<text x="280" y="132" font-size="10.5" fill="var(--ink)">to subject</text>' +
  '<rect x="339" y="54" width="96" height="106" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
  '<text x="387" y="76" font-size="11" font-weight="700" fill="var(--bad)">4. SHIFT</text>' +
  '<text x="387" y="100" font-size="10.5" fill="var(--ink)">Spot the turn</text>' +
  '<text x="387" y="116" font-size="10.5" fill="var(--ink)">in emotion</text>' +
  '<text x="387" y="132" font-size="10.5" fill="var(--ink)">or time</text>' +
  '<rect x="446" y="54" width="96" height="106" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="494" y="76" font-size="11" font-weight="700" fill="var(--good)">5. THEME</text>' +
  '<text x="494" y="100" font-size="10.5" fill="var(--ink)">Big human</text>' +
  '<text x="494" y="116" font-size="10.5" fill="var(--ink)">idea behind</text>' +
  '<text x="494" y="132" font-size="10.5" fill="var(--ink)">the poem</text>' +
  '<rect x="40" y="182" width="480" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>' +
  '<text x="280" y="209" font-size="11.5" font-weight="600" fill="var(--ink)">Rule: Understand meaning FIRST (Pass 1) — annotate methods SECOND (Pass 2).</text>' +
  '</g>' +
  '</svg>';

const SVG_STANZA_ARC =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stanza progression showing shift from tidy opening rhyme to fractured final stanza">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Tracking Form &amp; Emotional Arc Across Stanzas</text>' +
  '<rect x="24" y="48" width="150" height="148" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="99" y="70" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--good)">Stanza 1 (Memory)</text>' +
  '<line x1="42" y1="90" x2="156" y2="90" stroke="var(--ink)" stroke-width="2"/>' +
  '<line x1="42" y1="108" x2="156" y2="108" stroke="var(--ink)" stroke-width="2"/>' +
  '<line x1="42" y1="126" x2="156" y2="126" stroke="var(--ink)" stroke-width="2"/>' +
  '<line x1="42" y1="144" x2="156" y2="144" stroke="var(--ink)" stroke-width="2"/>' +
  '<text x="99" y="176" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">Regular lines &amp; rhyme</text>' +
  '<rect x="205" y="48" width="150" height="148" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="280" y="70" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--brand)">Stanza 2 (Peak)</text>' +
  '<line x1="223" y1="90" x2="337" y2="90" stroke="var(--ink)" stroke-width="2"/>' +
  '<line x1="223" y1="108" x2="337" y2="108" stroke="var(--ink)" stroke-width="2"/>' +
  '<line x1="223" y1="126" x2="337" y2="126" stroke="var(--ink)" stroke-width="2"/>' +
  '<line x1="223" y1="144" x2="337" y2="144" stroke="var(--ink)" stroke-width="2"/>' +
  '<text x="280" y="176" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">Warm harmony sustained</text>' +
  '<rect x="386" y="48" width="150" height="148" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
  '<text x="461" y="70" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--bad)">Stanza 3 (Present)</text>' +
  '<line x1="404" y1="90" x2="514" y2="90" stroke="var(--bad)" stroke-width="2"/>' +
  '<line x1="404" y1="108" x2="462" y2="108" stroke="var(--bad)" stroke-width="2"/>' +
  '<line x1="404" y1="126" x2="520" y2="126" stroke="var(--bad)" stroke-width="2"/>' +
  '<line x1="404" y1="144" x2="444" y2="144" stroke="var(--bad)" stroke-width="2"/>' +
  '<text x="461" y="176" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">Unrhymed, jagged lengths</text>' +
  '<text x="280" y="226" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="600" fill="var(--ink)">Compare how line length, punctuation and rhyme change between stanzas.</text>' +
  '</svg>';

const SVG_UNSEEN_ESSAY =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blueprint for a top-band timed unseen poetry essay following the poem arc">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">High-Band Unseen Essay Arc (Follow the Poem&apos;s Journey)</text>' +
  '<rect x="24" y="46" width="512" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>' +
  '<text x="280" y="69" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">Concise Conceptual Intro: Big Idea + Overall Emotional Shift</text>' +
  '<g font-family="system-ui, -apple-system, sans-serif" text-anchor="middle">' +
  '<rect x="24" y="96" width="160" height="84" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="104" y="118" font-size="11.5" font-weight="700" fill="var(--brand)">Paragraph 1: Opening</text>' +
  '<text x="104" y="138" font-size="10.5" fill="var(--ink)">Initial mood &amp; imagery</text>' +
  '<text x="104" y="156" font-size="10.5" fill="var(--ink-2)">+ opening structure</text>' +
  '<rect x="200" y="96" width="160" height="84" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="118" font-size="11.5" font-weight="700" fill="var(--brand)">Paragraph 2: Turn</text>' +
  '<text x="280" y="138" font-size="10.5" fill="var(--ink)">Mid-poem tension/shift</text>' +
  '<text x="280" y="156" font-size="10.5" fill="var(--ink-2)">+ punctuation / pause</text>' +
  '<rect x="376" y="96" width="160" height="84" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="456" y="118" font-size="11.5" font-weight="700" fill="var(--brand)">Paragraph 3: Closing</text>' +
  '<text x="456" y="138" font-size="10.5" fill="var(--ink)">Final resonant image</text>' +
  '<text x="456" y="156" font-size="10.5" fill="var(--ink-2)">+ lingering ambiguity</text>' +
  '</g>' +
  '<rect x="24" y="194" width="512" height="36" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="280" y="217" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="var(--good)">Closing Judgement: Why the Poet Leaves the Reader Thinking</text>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-unseen-poetry",
  title: "Year 9 End-of-Year Unseen Poetry Mock Paper",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-unseen-poetry-q01",
      topicId: "unseen-poetry-analysis",
      guideRef: "first-read-protocol",
      kind: "mcq",
      difficulty: "warmup",
      diagram: SVG_PROTOCOL,
      question:
        "Study the 5-minute unseen poetry protocol. Why should you read an unfamiliar exam poem once purely for its literal story and emotional shift *before* underlining technical devices like metaphors or enjambment?",
      options: [
        "Because techniques only make analytical sense once you grasp the poem's real meaning.",
        "Because examiners deduct marks if you underline any words on the exam question paper.",
        "Because unseen poems never contain figurative language until the closing two lines.",
        "Because spotting literal facts lets you avoid mentioning the poet's methods altogether.",
      ],
      answerIndex: 0,
      hints: [
        "Look at the bottom rule bar in the diagram: Pass 1 versus Pass 2.",
        "Think about what happens when a student spots 'alliteration' without knowing whether the poem is joyful or grieving.",
      ],
      strategy: "Separate understanding meaning (Pass 1) from analysing craft (Pass 2).",
      explanation:
        "Grasping the literal situation, voice, and emotional shift first prevents misreading a sarcastic or mournful image at face value. Once you know what the poem is actually about, every technique you spot in Pass 2 links directly to meaning rather than empty feature-spotting.",
    },
    {
      id: "exam-unseen-poetry-q02",
      topicId: "unseen-poetry-analysis",
      guideRef: "first-read-protocol",
      kind: "short",
      difficulty: "warmup",
      question:
        "Read this short unseen poem titled *First Key*:\n\n'I turn the brass key in a stranger's lock;\ntall cardboard boxes breathe along the hall,\nand every echo measures how much space\nstill waits for photographs to climb the wall.'\n\nIn poetry analysis, you should not automatically assume the 'I' is the real-life poet. What single literary term names the invented voice narrating the poem?",
      answer: {
        type: "text",
        accept: ["speaker", "the speaker", "persona", "poetic voice", "narrative voice"],
        display: "speaker",
      },
      traps: [
        {
          spec: { type: "text", accept: ["poet", "author", "writer"] },
          feedback: "Careful! Poets often invent fictional voices — always distinguish the real-life poet from the poem's narrator or persona.",
        },
        {
          spec: { type: "text", accept: ["protagonist"] },
          feedback: "Protagonist is mainly used for stories and plays; in poetry analysis, use the specific term for the voice speaking the lines.",
        },
      ],
      hints: [
        "Rather than saying 'the poet moves house', say 'the ____ moves house'.",
        "Two widely accepted single-word terms are 'sp____' or 'per____'.",
      ],
      strategy: "Maintain critical distance between poet and poetic voice.",
      solution: [
        "The invented voice speaking inside a poem is called the **speaker** (or **persona**).",
        "Using 'the speaker' shows examiners you understand that poems are crafted artistic voices rather than literal diaries.",
      ],
    },
    {
      id: "exam-unseen-poetry-q03",
      topicId: "unseen-poetry-analysis",
      guideRef: "decoding-imagery-ambiguity",
      kind: "short",
      difficulty: "warmup",
      question:
        "Read these two lines from the unseen poem *Monsoon Over the Courtyard*:\n\n'The iron gutter clears its rusty throat\nand coughs a silver river down the steps.'\n\nName the figurative language device giving human actions ('clears its... throat', 'coughs') to the rainwater gutter.",
      answer: {
        type: "text",
        accept: ["personification", "anthropomorphism"],
        display: "personification",
      },
      traps: [
        {
          spec: { type: "text", accept: ["simile"] },
          feedback: "There is no 'like' or 'as' comparison here — the gutter is directly given a human throat and cough.",
        },
        {
          spec: { type: "text", accept: ["onomatopoeia"] },
          feedback: "'Coughs' carries sound quality, yet giving a metal pipe a 'throat' and human physical actions is a broader figurative device.",
        },
      ],
      hints: [
        "Notice the body part ('throat') and human action ('coughs') assigned to an inanimate metal pipe.",
        "The word starts with 'person-' because human qualities are given to a non-human thing.",
      ],
      strategy: "Check whether non-human objects are granted human limbs, speech, or actions.",
      solution: [
        "Attributing human traits or actions ('clears its throat', 'coughs') to an inanimate metal gutter is **personification**.",
        "It turns the sudden tropical downpour into a noisy, almost comically impatient living presence.",
      ],
    },
    {
      id: "exam-unseen-poetry-q04",
      topicId: "unseen-poetry-analysis",
      guideRef: "decoding-imagery-ambiguity",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read these two lines from the unseen poem *Grandfather's Watchmaker Bench*:\n\n'His spectacles were twin moons\norbiting tiny brass planets of gears.'\n\nApplying the method 'What literal qualities does X have, and what does that reveal about Y?', what does this cosmic metaphor suggest about the grandfather's watchmaking?",
      options: [
        "It implies the grandfather wishes he had become an astronaut instead of a craftsman.",
        "It suggests the watch shop is completely dark because the light bulbs have broken.",
        "It elevates delicate, miniature work into a vast, hushed universe of patient precision.",
        "It warns that mechanical watches are clumsy objects that quickly drift out of order.",
      ],
      answerIndex: 2,
      hints: [
        "List literal qualities of 'moons', 'orbiting', and 'planets': vast scale, quiet gravity, exact mathematical cycles.",
        "Now transfer those qualities onto an elderly craftsman leaning calmly over microscopic gears.",
      ],
      strategy: "Unpack unfamiliar metaphors via literal qualities → deeper insight.",
      explanation:
        "Comparing his spectacles to 'twin moons' and tiny gears to 'planets' invests ordinary benchwork with awe, stillness, and exact cosmic order—showing how deeply the speaker admires the grandfather's hushed concentration and mastery over time.",
    },
    {
      id: "exam-unseen-poetry-q05",
      topicId: "unseen-poetry-analysis",
      guideRef: "decoding-imagery-ambiguity",
      kind: "short",
      difficulty: "core",
      question:
        "Read this line from an unseen poem about packing up a childhood bedroom:\n\n'We taped twenty summers into bitter-sweet cartons.'\n\nName the figurative language device created by pairing two directly contradictory words right beside each other in 'bitter-sweet'.",
      answer: {
        type: "text",
        accept: ["oxymoron", "an oxymoron"],
        display: "oxymoron",
      },
      traps: [
        {
          spec: { type: "text", accept: ["juxtaposition"] },
          feedback: "Juxtaposition places contrasting scenes or ideas side by side broadly; fusing two directly opposite words together into one phrase has a tighter eight-letter term.",
        },
        {
          spec: { type: "text", accept: ["antithesis", "paradox"] },
          feedback: "Antithesis balances whole clauses and paradox is a self-contradictory statement; two adjacent opposite words ('bitter-sweet') form a different device.",
        },
      ],
      hints: [
        "Look at the two opposite tastes pressed directly together: 'bitter' + 'sweet'.",
        "Other classic examples of this eight-letter device include 'deafening silence' and 'cruel kindness'.",
      ],
      strategy: "Distinguish tight two-word contradictions from broader contrasts.",
      solution: [
        "Placing two directly opposite words immediately together ('bitter-sweet') creates an **oxymoron**.",
        "It captures the speaker's conflicted emotion—aching nostalgia mixed with fond gratitude for childhood memories.",
      ],
    },
    {
      id: "exam-unseen-poetry-q06",
      topicId: "unseen-poetry-analysis",
      guideRef: "first-read-protocol",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read this complete short unseen poem titled *Borrowed Shoes*:\n\n'They pinched at the heel where my brother's stride\nhad hollowed the leather to fit his hurry;\nyet I wore them down the gravel lane,\npractising the width of his shadow.'\n\nCombining the title clue with the closing image 'practising the width of his shadow', what deeper theme is the poet exploring?",
      options: [
        "The practical problem of buying affordable school shoes during rainy weather.",
        "The ache of admiring an older sibling while struggling to measure up to them.",
        "A humorous rivalry between two brothers racing bicycles down a country road.",
        "The speaker's anger at being forced to lend personal belongings to strangers.",
      ],
      answerIndex: 1,
      hints: [
        "Look beyond literal footwear: why do the shoes 'pinch' and why does the speaker practise 'the width of his shadow'?",
        "Think about the figurative phrase 'following in someone's footsteps' or 'living in someone's shadow'.",
      ],
      strategy: "Link title symbolism directly to the poem's closing image.",
      explanation:
        "Literally the poem describes tight hand-me-down shoes, yet 'pinched', 'fit his hurry', and 'practising the width of his shadow' reveal a younger sibling caught between admiration and quiet pressure to grow into an older brother's identity.",
    },
    {
      id: "exam-unseen-poetry-q07",
      topicId: "unseen-poetry-analysis",
      guideRef: "unseen-structure-form",
      kind: "short",
      difficulty: "core",
      question:
        "Read these two lines from the unseen poem *Harbour Fog*:\n\n'The foghorn moans once — then swallows the bay.\nAcross the wet pier, no lantern answers.'\n\nName the structural poetic technique created by the abrupt punctuation pause (the dash) right in the middle of the first line.",
      answer: {
        type: "text",
        accept: ["caesura", "medial caesura", "a caesura"],
        display: "caesura",
      },
      traps: [
        {
          spec: { type: "text", accept: ["enjambment"] },
          feedback: "Enjambment is a line flowing over its ending with *no* punctuation; this is a deliberate pause *inside* the middle of a line.",
        },
        {
          spec: { type: "text", accept: ["volta"] },
          feedback: "A volta is the poem's thematic turning point, whereas a mid-line punctuation break has a seven-letter Latin name.",
        },
      ],
      hints: [
        "Look at the dash sitting in the middle of line 1 right after 'once'.",
        "It forces the reader to pause abruptly mid-line, echoing the silence after a foghorn blast.",
      ],
      strategy: "Inspect internal punctuation inside poetic lines, not just line endings.",
      solution: [
        "A deliberate pause placed inside the middle of a poetic line via punctuation (dash, full stop, semicolon, or comma) is a **caesura**.",
        "Here the dash creates an eerie acoustic silence before the fog 'swallows the bay'.",
      ],
    },
    {
      id: "exam-unseen-poetry-q08",
      topicId: "power-conflict-poetry",
      guideRef: "imagery-sound-connotation",
      kind: "short",
      difficulty: "core",
      question:
        "Read these two lines from the unseen poem *Stormwall*:\n\n'Black breakers batter the bolted quay,\npounding pale concrete till iron pins pop.'\n\nName the specific phonetic sound device created by repeating harsh burst consonants such as /b/ and /p/ across these lines.",
      answer: {
        type: "text",
        accept: ["plosives", "plosive", "plosive alliteration", "plosive sounds", "bilabial plosives"],
        display: "plosives",
      },
      traps: [
        {
          spec: { type: "text", accept: ["alliteration"] },
          feedback: "Close — alliteration is the general umbrella, while the specific phonetic term for harsh percussive burst consonants (/b/, /p/, /t/, /d/) is plosives.",
        },
        {
          spec: { type: "text", accept: ["sibilance"] },
          feedback: "Sibilance repeats soft hissing 's' or 'sh' sounds; here 'Black breakers batter... pounding pale' relies on explosive /b/ and /p/ bursts.",
        },
        {
          spec: { type: "text", accept: ["assonance"] },
          feedback: "Assonance repeats internal vowel sounds, whereas /b/ and /p/ are hard percussive consonants.",
        },
      ],
      hints: [
        "Say 'Black breakers batter... pounding pale... pins pop' aloud and notice how air bursts off your lips.",
        "The term shares its root with 'explosive' and covers /b/, /p/, /t/, /d/, /k/, /g/.",
      ],
      strategy: "Match consonant sound quality (harsh bursts vs soft whispers) to meaning.",
      solution: [
        "Repeating abrupt, percussive consonant sounds like /b/ and /p/ creates **plosives** (or **plosive alliteration**).",
        "The hammering sound pattern acoustically imitates heavy waves slamming against concrete sea defences.",
      ],
    },
    {
      id: "exam-unseen-poetry-q09",
      topicId: "unseen-poetry-analysis",
      guideRef: "decoding-imagery-ambiguity",
      kind: "mcq",
      difficulty: "core",
      question:
        "When interpreting an ambiguous image in an unseen poem, why do examiners reward tentative analytical phrases like *arguably implies*, *hints at*, or *may suggest* over rigid claims like *this definitely proves*?",
      options: [
        "Because tentative phrasing makes an essay longer even when no quote is analysed.",
        "Because students are discouraged from forming any clear thesis about a poem.",
        "Because poets never intend any meaning at all when choosing imagery or sound.",
        "Because poetry invites layered meanings and tentative verbs show critical nuance.",
      ],
      answerIndex: 3,
      hints: [
        "Think about the difference between a maths equation (one fixed answer) and a poetic metaphor (multiple valid resonances).",
        "Does using 'arguably suggests' weaken your argument, or show mature awareness of layered interpretation?",
      ],
      strategy: "Adopt academic tentative register to unlock layered readings.",
      explanation:
        "Rich poetic images rarely reduce to a single mathematical proof. Tentative analytical verbs ('implies', 'suggests', 'arguably') demonstrate sophisticated literary judgement—opening space to explore multiple shades of connotation rather than forcing one rigid paraphrase.",
    },
    {
      id: "exam-unseen-poetry-q10",
      topicId: "power-conflict-poetry",
      guideRef: "poetic-form-metre-structure",
      kind: "short",
      difficulty: "warmup",
      question:
        "In an unseen elegy about a vanishing fishing village, Stanza 1, Stanza 2, and Stanza 3 each conclude with the exact same haunting line: *'Still the tide erases every name.'* What single poetic term describes a line or phrase repeated at regular intervals throughout a poem?",
      answer: {
        type: "text",
        accept: ["refrain", "a refrain", "chorus"],
        display: "refrain",
      },
      traps: [
        {
          spec: { type: "text", accept: ["anaphora"] },
          feedback: "Anaphora repeats opening words at the start of consecutive clauses; a whole recurring line placed at regular intervals (often closing each stanza) is a refrain.",
        },
        {
          spec: { type: "text", accept: ["rhyming couplet", "couplet"] },
          feedback: "A couplet is a pair of adjacent lines; here one identical line echoes at the close of every stanza.",
        },
      ],
      hints: [
        "Think of the recurring musical line in a ballad or song that comes back after every verse.",
        "The seven-letter word starts with 'ref-'.",
      ],
      strategy: "Notice recurring structural lines and ask how their meaning shifts each time.",
      solution: [
        "A line or short group of lines repeated at regular intervals across a poem is a **refrain**.",
        "Here the refrain structurally imitates the relentless, cyclical return of ocean tides erasing human traces.",
      ],
    },
    {
      id: "exam-unseen-poetry-q11",
      topicId: "unseen-poetry-analysis",
      guideRef: "unseen-structure-form",
      kind: "mcq",
      difficulty: "core",
      diagram: SVG_STANZA_ARC,
      question:
        "Study the stanza arc diagram based on an unseen 12-line poem (*The Empty Cricket Pitch*): Stanzas 1 and 2 use tidy, rhyming four-line stanzas recalling noisy summer matches, whereas Stanza 3 breaks into unrhymed, jagged lines describing winter weeds swallowing the chalk crease. What is the strongest analysis of this structural shift?",
      options: [
        "The collapsing rhyme and jagged line lengths enact how time fractures joyful unity.",
        "The poet grew tired of writing rhymes and rushed the closing stanza to finish early.",
        "The third stanza changes pattern purely to show the match moved indoors for tea.",
        "Regular rhyme in the opening proves the speaker disliked playing summer cricket.",
      ],
      answerIndex: 0,
      hints: [
        "Compare the visual neatness of Stanzas 1–2 with the broken line lengths of Stanza 3 in the diagram.",
        "Always link formal changes to the poem's emotional content (ordered youthful harmony versus lonely present decay).",
      ],
      strategy: "Treat form and stanza shape as active carriers of meaning.",
      explanation:
        "In top-band unseen analysis, structure mirrors emotion: tidy rhyming quatrains capture the rhythmic harmony and certainty of remembered summer games, while the unrhymed, uneven final stanza structurally embodies loss, disruption, and neglect.",
    },
    {
      id: "exam-unseen-poetry-q12",
      topicId: "unseen-poetry-analysis",
      guideRef: "unseen-structure-form",
      kind: "short",
      difficulty: "core",
      question:
        "What two-word poetic term names verse written with **no** fixed rhyme scheme and **no** regular metrical pattern, allowing the poet to vary line lengths freely to mirror natural speech or turbulent emotion?",
      answer: {
        type: "text",
        accept: ["free verse", "vers libre"],
        display: "free verse",
      },
      traps: [
        {
          spec: { type: "text", accept: ["blank verse"] },
          feedback: "Careful! Blank verse has no rhyme, *but* it keeps strict regular metre (iambic pentameter). Verse with neither rhyme nor fixed metre is different.",
        },
        {
          spec: { type: "text", accept: ["sonnet", "ballad"] },
          feedback: "Sonnets and ballads follow strict traditional rhyme and metre structures, the exact opposite of this open form.",
        },
      ],
      hints: [
        "Unlike blank verse, this form abandons *both* regular rhyme and regular syllable count.",
        "The first word literally signals freedom from strict traditional rules.",
      ],
      strategy: "Never confuse blank verse (regular metre, no rhyme) with unrhymed, unmetrical verse.",
      solution: [
        "Poetry written without a regular rhyme scheme or fixed metre is **free verse**.",
        "When analysing free verse, avoid saying 'it has no structure'—instead examine why specific lines suddenly shorten, stretch, or break.",
      ],
      commonError: "Writing 'free verse has no structure' instead of noticing deliberate line breaks, stanza shapes, and visual rhythm.",
    },
    {
      id: "exam-unseen-poetry-q13",
      topicId: "comprehension-inference",
      guideRef: "attitude-tone-bias",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read this complete unseen four-line poem titled *Museum Glass*:\n\n'Behind three inches of climate-controlled glass\nthe clay bowl waits with thumbprints still inside.\nA placard names its century and price,\nand skips the potter's hands that shaped its side.'\n\nWhich nuanced tone phrase best captures the speaker's attitude toward the museum placard?",
      options: [
        "Brightly celebratory and delighted by high auction valuations.",
        "Openly furious and demanding the museum shut down immediately.",
        "Playfully absurd and treating pottery as a lighthearted joke.",
        "Quietly critical of sterile display that erases human labour.",
      ],
      answerIndex: 3,
      hints: [
        "Contrast 'climate-controlled glass / century and price' with the intimate physical trace of 'thumbprints' and 'potter's hands'.",
        "Notice the calm, restrained verb 'skips' — is the speaker shouting in rage or offering a pointed, understated critique?",
      ],
      strategy: "Choose precise, nuanced tone words matching the speaker's restraint.",
      explanation:
        "By contrasting sterile museum labels ('climate-controlled glass', 'century and price') with warm human traces ('thumbprints', 'potter's hands') and using the understated verb 'skips', the speaker adopts a quietly critical, reflective tone rather than loud anger or comedy.",
    },
    {
      id: "exam-unseen-poetry-q14",
      topicId: "power-conflict-poetry",
      guideRef: "imagery-sound-connotation",
      kind: "short",
      difficulty: "core",
      question:
        "Examine the end-words of this unseen four-line stanza about sleepless anxiety:\n\n'Midnight settles cold on **stone**,\nshadow spreading like a **stain**;\nblankets never keep me **warm**,\nthoughts uncoiling like a **worm**.'\n\nNotice how *stone/stain* and *warm/worm* echo consonants without chiming cleanly in full rhyme. Name this deliberately imperfect rhyme technique.",
      answer: {
        type: "text",
        accept: ["half-rhyme", "half rhyme", "slant rhyme", "para-rhyme", "pararhyme", "near rhyme", "imperfect rhyme"],
        display: "half-rhyme",
      },
      traps: [
        {
          spec: { type: "text", accept: ["internal rhyme"] },
          feedback: "Internal rhyme occurs *within* a single line; here the mismatched echoes sit at the ends of lines.",
        },
        {
          spec: { type: "text", accept: ["rhyming couplet", "full rhyme"] },
          feedback: "Full rhymes share identical vowel and ending consonant sounds (like stone/bone); here the vowels clash deliberately.",
        },
      ],
      hints: [
        "Read *stone/stain* and *warm/worm* aloud — the consonants match, yet the vowel sounds jar slightly.",
        "Often used in war and anxiety poetry, it is called '____-rhyme' or 'slant rhyme' or 'para-rhyme'.",
      ],
      strategy: "Link acoustic dissonance (imperfect rhyme) to emotional unease.",
      solution: [
        "Pairing words whose consonants chime while their vowels deliberately clash (*stone/stain*, *warm/worm*) creates **half-rhyme** (also called **slant rhyme** or **para-rhyme**).",
        "Refusing a neat, comforting full rhyme keeps the reader acoustically unsettled, mirroring sleepless dread.",
      ],
    },
    {
      id: "exam-unseen-poetry-q15",
      topicId: "comprehension-inference",
      guideRef: "retrieval-vs-inference",
      kind: "short",
      difficulty: "warmup",
      question:
        "Read these three lines from an unseen station poem:\n\n'She checked the timetable a fourth time,\ntapped her railcard briskly on her palm,\nand watched the platform clock refuse to blink.'\n\nThe poem never explicitly uses the words 'impatient' or 'anxious', yet a sharp reader deduces those feelings from her repeated actions. Name the core reading skill of deducing unstated feelings or motives from textual clues.",
      answer: {
        type: "text",
        accept: ["inference", "inferring", "making an inference", "making inferences", "deduction"],
        display: "inference",
      },
      traps: [
        {
          spec: { type: "text", accept: ["retrieval", "explicit retrieval"] },
          feedback: "Retrieval lifts directly stated facts ('fourth time', 'railcard'); reading between the lines to uncover unstated emotions is a different skill.",
        },
        {
          spec: { type: "text", accept: ["summary", "summarising", "paraphrasing"] },
          feedback: "Summary condenses stated points, whereas uncovering hidden feelings implied by actions is inference.",
        },
      ],
      hints: [
        "Writers often 'show, don't tell' — readers use this skill to read between the lines.",
        "This nine-letter noun pairs directly with 'retrieval' in reading comprehension.",
      ],
      strategy: "Distinguish literal retrieval from reading between the lines.",
      solution: [
        "Working out unstated emotions, motives, or implications from concrete clues ('checked... a fourth time', 'tapped') is **inference**.",
        "Always anchor every inference to a brief embedded detail from the text.",
      ],
    },
    {
      id: "exam-unseen-poetry-q16",
      topicId: "comprehension-inference",
      guideRef: "attitude-tone-bias",
      kind: "mcq",
      difficulty: "core",
      question:
        "Compare two closing couplets from two short unseen poems describing cities at dawn:\n\n**Poem 1:** 'The towers wake in gold and glass, / applauding every train that passes.'\n**Poem 2:** 'The towers yawn in grey fatigue / and swallow commuters by the league.'\n\nHow do the two speakers' perspectives on urban life differ most clearly?",
      options: [
        "Both speakers depict skyscrapers as terrifying monsters hunting tired travellers.",
        "Poem 1 criticises noisy commuter trains while Poem 2 celebrates morning sunlight.",
        "Poem 1 casts the city as welcoming energy, while Poem 2 shows draining consumption.",
        "Poem 1 is written about a quiet village while Poem 2 describes an empty desert road.",
      ],
      answerIndex: 2,
      hints: [
        "Zoom into the contrasting personifying verbs: 'wake... applauding' versus 'yawn... swallow'.",
        "Check the colour imagery too: 'gold and glass' compared with 'grey fatigue'.",
      ],
      strategy: "Compare parallel verbs and colour connotations across paired extracts.",
      explanation:
        "Both couplets personify skyscrapers, yet Poem 1 uses luminous diction ('gold') and enthusiastic action ('applauding') to portray an exhilarating, welcoming metropolis, whereas Poem 2 pairs dreary 'grey fatigue' with the predatory verb 'swallow' to expose soul-draining urban routine.",
    },
    {
      id: "exam-unseen-poetry-q17",
      topicId: "power-conflict-poetry",
      guideRef: "poetic-form-metre-structure",
      kind: "short",
      difficulty: "core",
      question:
        "Read this short opening of an unseen poem:\n\n'Sit down, Ambassador — admire that cracked portrait.\nNo, do not glance at the door; I locked it myself\nso you might hear exactly why my brother never returned.'\n\nName the two-word poetic form in which a single fictional speaker addresses a silent listener, unintentionally revealing their own obsession, pride, or sinister motives.",
      answer: {
        type: "text",
        accept: ["dramatic monologue", "a dramatic monologue"],
        display: "dramatic monologue",
      },
      traps: [
        {
          spec: { type: "text", accept: ["soliloquy"] },
          feedback: "A soliloquy is spoken *alone* onstage in a play; here the speaker explicitly addresses a silent listener ('Sit down, Ambassador').",
        },
        {
          spec: { type: "text", accept: ["sonnet", "ballad"] },
          feedback: "Sonnets and ballads are defined by stanza/rhyme structures, whereas this two-word form centres on a revealing one-sided speech to a silent listener.",
        },
      ],
      hints: [
        "Notice the clues of a silent listener in the room: 'Sit down, Ambassador' and 'No, do not glance at the door'.",
        "The second word means 'single speech', paired with the adjective 'dramatic'.",
      ],
      strategy: "Spot direct address to a silent listener to diagnose poetic form.",
      solution: [
        "A poem spoken by one fictional character to a silent audience—often exposing the speaker's darker psychology through dramatic irony—is a **dramatic monologue**.",
        "Robert Browning's example poem *My Last Duchess* is a celebrated model of this transferable form.",
      ],
    },
    {
      id: "exam-unseen-poetry-q18",
      topicId: "unseen-poetry-analysis",
      guideRef: "writing-high-band-unseen",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "A student is writing an unseen poetry essay on the line: *'The harbour lantern chewed a small bright hole in the dark.'* Which sentence achieves **top-band integrated analysis** instead of empty feature-spotting?",
      options: [
        "The poet uses the verb 'chewed' which is personification and makes the reader picture a light.",
        "The hungry verb 'chewed' portrays light as stubbornly battling an overwhelming night sky.",
        "There is an adjective 'small' and a verb 'chewed' in line four to make the poem interesting.",
        "This quotation shows that there was a lantern near the harbour during a very dark evening.",
      ],
      answerIndex: 1,
      hints: [
        "Top-band analysis zooms into a specific word's connotations and explains *what emotional or thematic tension* it creates.",
        "Reject sentences that merely say 'makes the reader picture it', 'makes it interesting', or paraphrase the literal scene.",
      ],
      strategy: "Replace generic filler ('makes it interesting') with precise connotative meaning.",
      explanation:
        "Zooming into 'chewed' as a hungry, effortful verb reveals how tiny and precarious human light feels against vast darkness—turning a single word into genuine thematic insight rather than vague feature-spotting or literal paraphrase.",
    },
    {
      id: "exam-unseen-poetry-q19",
      topicId: "unseen-poetry-analysis",
      guideRef: "decoding-imagery-ambiguity",
      kind: "short",
      difficulty: "challenge",
      question:
        "Read this unseen stanza about losing childhood certainty:\n\n'At ten, the atlas felt stitched from bright silk—\nevery border neatly hemmed, oceans ironed flat;\nnow my compass needle shivers at the frayed seam\nwhere two rival inks have started to bleed.'\n\nWhen a poet sustains and develops a single figurative image (here, tailoring/fabric: *stitched, silk, hemmed, ironed, frayed seam*) across several lines, what two-word device is used?",
      answer: {
        type: "text",
        accept: ["extended metaphor", "an extended metaphor", "sustained metaphor", "conceit"],
        display: "extended metaphor",
      },
      traps: [
        {
          spec: { type: "text", accept: ["simile"] },
          feedback: "There is no 'like' or 'as' here; the atlas is directly imagined as stitched fabric across all four lines.",
        },
        {
          spec: { type: "text", accept: ["semantic field"] },
          feedback: "Close! Although the tailoring words form a semantic field, carrying one figurative comparison continuously across multiple lines has a more specific two-word metaphor label.",
        },
      ],
      hints: [
        "Notice how the poet does not drop the fabric image after line 1 — it continues through 'hemmed', 'ironed', and 'frayed seam'.",
        "Start with the word meaning 'stretched out' followed by 'metaphor'.",
      ],
      strategy: "Trace whether a metaphor stretches across a whole stanza or poem.",
      solution: [
        "A single metaphor developed continuously across multiple lines or an entire poem is an **extended metaphor**.",
        "Moving from 'neatly hemmed' silk to a 'frayed seam' subtly charts the speaker's passage from childish simplicity into messy adult awareness of global conflict.",
      ],
    },
    {
      id: "exam-unseen-poetry-q20",
      topicId: "power-conflict-poetry",
      guideRef: "themes-of-power-conflict",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "Read this complete unseen poem titled *The Salt Clock*:\n\n'Four hundred years ago they raised this fort\nto guard the strait from every rival sail.\nEach monsoon nibbles one more grain of lime;\nsalt climbs the arch like patient, pale white moss.\nBeneath the wall, two tourists tilt a phone,\ncropping the crumble cleanly out of frame,\nsmiling as though the afternoon will hold\nwhat cannon, stone, and mortar could not keep.'\n\nHow does the poet combine contrasting time-scales to comment on human pride?",
      options: [
        "By contrasting centuries of slow erosion with a fleeting selfie, exposing human illusion of control.",
        "By proving modern camera phones preserve ancient buildings better than thick limestone mortar.",
        "By mocking the original fortress builders for failing to predict how tourists would dress.",
        "By celebrating how coastal tourism rescues forgotten watchtowers from seasonal storms.",
      ],
      answerIndex: 0,
      hints: [
        "Compare 'Four hundred years / Each monsoon nibbles' in lines 1–4 with 'tilt a phone / cropping the crumble' in lines 5–8.",
        "What ironic parallel links the ancient builders and the modern tourists?",
      ],
      strategy: "Track conceptual parallels between the first half and second half of a poem.",
      explanation:
        "The poem links two eras through quiet irony: just as four-hundred-year-old fort builders imagined stone could defeat time, modern visitors literally 'crop the crumble out of frame', still clinging to the fragile illusion that moments or monuments can be frozen permanently.",
    },
    {
      id: "exam-unseen-poetry-q21",
      topicId: "comprehension-inference",
      guideRef: "synthesis-summary",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "Read these two short unseen poetry extracts about winter:\n\n**Poem A:** 'January sharpens knives along the eaves / and tests each latch with frost's relentless fist.'\n**Poem B:** 'Snow lays a woollen silence down the lane, / hushing the rush of engines into rest.'\n\nWhich summary sentence **synthesises** both poems most accurately in original words without copying chunks?",
      options: [
        "Poem A says January sharpens knives along the eaves while Poem B says snow lays woollen silence.",
        "Both poets reject winter entirely because freezing temperatures damage roofs and stall traffic.",
        "Poem B celebrates loud winter traffic whereas Poem A welcomes frost tapping gently at windows.",
        "While Poem A frames winter as a hostile test of endurance, Poem B presents it as restorative calm.",
      ],
      answerIndex: 3,
      hints: [
        "Good synthesis translates both texts into concise conceptual wording rather than copying lines verbatim.",
        "Check the core emotional contrast: combat/threat in Poem A versus hush/comfort in Poem B.",
      ],
      strategy: "Synthesise contrasting ideas in fresh, concise original phrasing.",
      explanation:
        "Strong synthesis avoids lifting whole phrases verbatim and captures the conceptual essence of both texts in original words: Poem A personifies winter as an aggressive adversary ('knives', 'relentless fist'), whereas Poem B portrays winter as comforting, peaceful stillness ('woollen silence', 'rest').",
    },
    {
      id: "exam-unseen-poetry-q22",
      topicId: "unseen-poetry-analysis",
      guideRef: "writing-high-band-unseen",
      kind: "written",
      difficulty: "core",
      marks: 4,
      diagram: SVG_UNSEEN_ESSAY,
      question:
        "Read this complete unseen poem titled *The Night Ferry*:\n\nWe left the quay in neon noise and rain,\nthe engines shuddering beneath our shoes;\nbehind the stern, the city's amber chain\ndissolved to sparks the black swell chose to lose.\n\nMid-channel, every deck-lamp dimmed. We stood\nwhere wind stripped speech down to a salty hush;\nno shore ahead, no shore behind—just wood\nand iron riding out the water's rush.\n\nThen silver grazed the east—a thin pale seam—\nand gulls swung out to guide our hull to land;\nwe stepped ashore still half inside a dream,\nthe taste of open dark still on each hand.\n\nFollowing the unseen essay blueprint, analyse how the poet presents the speaker's **shifting feelings across the crossing** through BOTH imagery and structure. (4 marks)",
      hints: [
        "Track the poem's three-stanza journey: chaotic departure (Stanza 1) → suspended mid-channel hush (Stanza 2) → dawn arrival yet lingering change (Stanza 3).",
        "Zoom into imagery: 'neon noise', 'amber chain dissolved', 'salty hush', and 'silver grazed the east — a thin pale seam'.",
        "Analyse structural craft: the abrupt mid-line full stop / caesura after 'dimmed.' in Stanza 2, or the regular ABAB quatrains mirroring the steady pulse of waves.",
      ],
      strategy: "Track beginning → middle shift → closing resonance, weaving language and structure.",
      modelAnswer:
        "Across its three balanced ABAB quatrains, the poet tracks an emotional arc from hectic urban tension into humbled stillness and quiet renewal. At the opening, harsh sensory contrast between 'neon noise', 'shuddering' engines, and the city's 'amber chain' dissolving evokes the restless grip of modern life loosening as the ferry pulls away. In Stanza 2, a sudden medial caesura after 'every deck-lamp dimmed.' halts the momentum, while repetition of 'no shore ahead, no shore behind' suspends the passengers in awe-struck vulnerability where human chatter yields to a 'salty hush'. Finally, the volta in Stanza 3 introduces delicate dawn imagery—'silver grazed the east—a thin pale seam'—yet the closing metaphor of carrying 'the taste of open dark' ashore implies that confronting vast nature leaves a lasting, humbling imprint even after safe arrival.",
      markScheme: [
        {
          point: "Tracks the overall emotional shift across the poem's arc (from restless departure to awe/stillness to transformed arrival).",
          keywords: ["arc", "shift", "journey", "departure", "stillness", "renewal", "transform", "humbled", "calm"],
        },
        {
          point: "Analyses opening imagery ('neon noise', 'shuddering', 'amber chain' dissolving) showing urban restlessness fading.",
          keywords: ["neon", "shudder", "amber", "urban", "city", "restless", "dissolv", "chain", "sensory"],
        },
        {
          point: "Analyses a structural device (e.g. caesura after 'dimmed.', ABAB steady rhythm/quatrains, Stanza 3 volta, or parallel repetition 'no shore').",
          keywords: ["caesura", "quatrain", "abab", "volta", "turn", "repetit", "parallel", "rhythm", "pause"],
        },
        {
          point: "Explores closing dawn imagery ('silver grazed', 'thin pale seam') or lingering resonance of 'open dark' on the speaker.",
          keywords: ["dawn", "silver", "seam", "imprint", "linger", "lasting", "dream", "dark", "awe"],
        },
      ],
      commonError: "Retelling the boat trip stanza by stanza without analysing the mid-line caesura or zooming into specific metaphors.",
    },
    {
      id: "exam-unseen-poetry-q23",
      topicId: "unseen-poetry-analysis",
      guideRef: "decoding-imagery-ambiguity",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "Read this complete unseen poem titled *Grandmother's Tin*:\n\nThe biscuit lid resists my thumb with rust,\nthen opens on a pocket-sized museum:\nfour pearl shirt-buttons, two torn cinema stubs,\na thimble dented where her needle pushed.\nNo diamond glints inside this dented vault,\nyet every scrap still hums with Tuesday rain,\nand when I shut the tin, a quiet click\nlocks half a century against the dark.\n\nAnalyse how the poet uses **metaphor and single-word connotations** to show that ordinary household scraps carry priceless personal value. (3 marks)",
      hints: [
        "Unpack the two key elevating metaphors: 'pocket-sized museum' and 'dented vault'.",
        "Zoom into specific evocative words like 'hums' (living warmth/sound), 'dented' (tangible human wear), or 'locks... against the dark' (protecting memory from time/loss).",
        "Use tentative analytical phrasing ('implies', 'suggests') to link the concrete objects to family memory.",
      ],
      strategy: "Unpack literal connotations of contrasting nouns (rust/tin vs museum/vault).",
      modelAnswer:
        "The poet elevates humble domestic clutter into sacred family heritage by contrasting worn material reality with imagery of priceless preservation. Calling the battered container a 'pocket-sized museum' and 'dented vault' juxtaposes humble scale with institutions built to guard treasure, implying that emotional history outweighs literal 'diamonds'. Furthermore, single-word zoom on the verb 'hums' brings sensory life to inert paper and buttons, suggesting memories vibrate quietly with familiar everyday warmth rather than lying dead in the past. Finally, the closing verb 'locks' against 'the dark' hints that preserving these modest tokens acts as tender defiance against forgetting and mortality.",
      markScheme: [
        {
          point: "Analyses the elevating metaphor 'pocket-sized museum' OR 'dented vault' contrasting humble objects with treasured preservation.",
          keywords: ["museum", "vault", "metaphor", "treasure", "preserv", "priceless", "juxtapos", "elevat", "heritage"],
        },
        {
          point: "Zooms into a specific word's connotations (e.g. 'hums' suggesting living warmth/memory, 'dented' suggesting lived labour, or 'rust').",
          keywords: ["hum", "vibrat", "warmth", "alive", "living", "dented", "worn", "sensory", "connotat"],
        },
        {
          point: "Evaluates the closing image ('locks... against the dark') as safeguarding memory against time, loss, or forgetting.",
          keywords: ["lock", "protect", "safeguard", "forget", "mortal", "loss", "time", "defian", "memory"],
        },
      ],
      commonError: "Listing what is inside the biscuit tin without unpacking why words like 'vault' or 'hums' elevate those objects.",
    },
    {
      id: "exam-unseen-poetry-q24",
      topicId: "unseen-poetry-analysis",
      guideRef: "unseen-structure-form",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Read this complete unseen poem titled *After the Exam Bell*:\n\nFor ninety minutes pens scratched out a race\nacross ruled margins while the wall-clock ticked\nits iron fractions over every desk\nand ink stained knuckle-bones and shoulders locked\nas sentences ran breathlessly past full\nstops racing the red hand toward the bell—\n\nSilence. Pens down. Outside, a breeze uncurls\nthe corridor's hot blinds; my cramped right hand\nopens its fingers slowly to the air,\nno longer clutching minutes like loose coins.\n\nExplain how the poet's **structural choices** (enjambment, stanza break, mid-line pause, and closing image) mirror the psychological shift from intense exam pressure to physical release. (4 marks)",
      hints: [
        "Notice how Stanza 1 is one breathless, unbroken run-on sentence spilling across six enjambed lines (even splitting 'full / stops' across a line break!).",
        "Examine the white space between stanzas and the abrupt short sentences/caesura at the start of Stanza 2 ('Silence. Pens down.').",
        "Trace how the calmer final lines and the simile 'no longer clutching minutes like loose coins' enact release.",
      ],
      strategy: "Tie every structural feature directly to psychological pacing.",
      modelAnswer:
        "The poet uses contrasting stanza architecture to make the reader physically experience both frantic time-pressure and sudden decompression. Throughout Stanza 1, relentless enjambment drives a single breathless six-line sentence forward—even splitting the phrase 'full / stops' across a line boundary—structurally enacting the panic of writing faster than the ticking clock. Immediately afterwards, the white space of the stanza break and the jarring dash cut straight into two stark, halted sentences—'Silence. Pens down.'—whose sharp caesura abruptly snaps the tension. As Stanza 2 unfolds, calmer phrasing and the tactile movement of cramped fingers opening 'slowly' replace mechanical urgency, culminating in the simile of 'no longer clutching minutes like loose coins', which captures deep psychological liberation from measuring worth purely by time.",
      markScheme: [
        {
          point: "Analyses relentless enjambment / single unbroken run-on sentence in Stanza 1 mirroring frantic, breathless pressure.",
          keywords: ["enjamb", "breathless", "run-on", "unbroken", "panic", "rush", "frantic", "relentless", "split"],
        },
        {
          point: "Analyses the stanza break / dash leading into the abrupt short fragments and caesura ('Silence. Pens down.') halting the rush.",
          keywords: ["caesura", "stanza break", "white space", "fragment", "abrupt", "halt", "snap", "sudden", "short"],
        },
        {
          point: "Explains how pacing and bodily imagery soften in Stanza 2 (breeze uncurling, cramped hand opening slowly).",
          keywords: ["slow", "decompr", "relax", "soften", "calm", "breeze", "unclench", "release", "pace"],
        },
        {
          point: "Unpacks the closing simile ('clutching minutes like loose coins') revealing liberation from anxiety over scarce time.",
          keywords: ["simile", "coin", "scarce", "money", "liberat", "relief", "freedom", "hoard", "anxiety"],
        },
      ],
      commonError: "Mentioning 'enjambment' and 'caesura' only by name without explaining how splitting 'full / stops' or pausing on 'Silence.' creates meaning.",
    },
    {
      id: "exam-unseen-poetry-q25",
      topicId: "power-conflict-poetry",
      guideRef: "comparative-poetry-essay",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Read these two complete short unseen poems exploring how speakers respond to time passing:\n\n**Poem A — *The Attic Ladder***\nPull down the wooden hatch and climb through dust:\ngold shafts of noon still trap my childhood skates,\na paper kite, a map of summers past—\nup here, no clock can hurry what still waits.\n\n**Poem B — *Salt on the Gate***\nEach autumn peels the blue paint from our gate\nand blunts the brass initials on the latch;\nI oil the hinge instead of fighting rust—\nwhat stays, stays lighter when we drop our grasp.\n\nCompare how the two poets present **contrasting attitudes toward memory and time passing**, weaving both poems together with comparative connectives and method analysis. (4 marks)",
      hints: [
        "Set up a clear conceptual contrast: Poem A clings warmly to preserved nostalgia, whereas Poem B embraces stoic, peaceful acceptance of change.",
        "Analyse a method in Poem A (e.g. warm light metaphor 'gold shafts', imperative invitation 'Pull down', or 'trap' suggesting a desire to freeze time).",
        "Pivot with 'whereas' or 'conversely' into Poem B's weathering imagery ('peels', 'blunts', 'rust') and calm final aphorism ('lighter when we drop our grasp').",
      ],
      strategy: "Contrast emotional stance AND concrete imagery in an integrated comparison.",
      modelAnswer:
        "While both poets reflect tenderly on how time reshapes family history, Poem A seeks comforting refuge in nostalgic preservation, whereas Poem B advocates calm, stoic acceptance of inevitable decay. In Poem A, the welcoming imperative 'Pull down' and warm luminous imagery of 'gold shafts of noon' turn the dusty attic into a sheltered sanctuary; tellingly, the verb 'trap' implies a longing to freeze childhood safely outside the reach of clocks. Conversely, Poem B confronts erosion directly through stark tactile verbs—autumn 'peels' paint and 'blunts' brass—yet refuses bitterness, choosing modest care ('oil the hinge') over futile resistance. Ultimately, whereas Poem A equates safety with holding tightly onto untouched relics, Poem B's closing metaphor that life feels 'lighter when we drop our grasp' presents letting go itself as liberating wisdom.",
      markScheme: [
        {
          point: "Establishes a conceptual contrast between nostalgic holding-on/preservation (Poem A) and stoic acceptance/letting go (Poem B).",
          keywords: ["nostalg", "preserv", "refuge", "sanctuary", "stoic", "accept", "letting go", "freeze", "clinging"],
        },
        {
          point: "Weaves both poems using explicit comparative connectives ('whereas', 'conversely', 'while', 'in contrast', 'unlike').",
          keywords: ["whereas", "conversely", "while", "contrast", "unlike", "both"],
        },
        {
          point: "Analyses a specific language/imagery method in Poem A (e.g. 'gold shafts', 'trap', imperative 'Pull down', 'no clock').",
          keywords: ["gold", "luminous", "warm", "trap", "imperative", "shelter", "clock", "relic"],
        },
        {
          point: "Analyses a specific language/imagery method in Poem B (e.g. 'peels'/'blunts' weathering verbs, 'oil the hinge', or 'lighter... drop our grasp').",
          keywords: ["peel", "blunt", "erosion", "weather", "rust", "hinge", "lighter", "grasp", "liberat", "wisdom"],
        },
      ],
      commonError: "Writing all about Poem A and then all about Poem B without weaving comparative connectives or unpacking individual verbs.",
    },
  ],
};
