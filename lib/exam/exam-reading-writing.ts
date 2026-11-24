import type { ExamPaper } from "../types.ts";

const SVG_RHETORIC_TRIANGLE =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aristotelian rhetorical triangle showing Ethos, Pathos, and Logos around Audience and Purpose">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">The Aristotelian Rhetorical Triangle</text>' +
  '<polygon points="280,58 130,206 430,206" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<circle cx="280" cy="154" r="42" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="280" y="150" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="var(--ink)">Audience</text>' +
  '<text x="280" y="166" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="var(--brand)">&amp; Purpose</text>' +
  '<rect x="200" y="38" width="160" height="36" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="280" y="61" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--brand)">ETHOS</text>' +
  '<rect x="24" y="186" width="176" height="44" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
  '<text x="112" y="213" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--bad)">PATHOS</text>' +
  '<rect x="360" y="186" width="176" height="44" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="448" y="213" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--good)">LOGOS</text>' +
  '</svg>';

const SVG_DISCURSIVE_MAP =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced discursive essay architecture from neutral framing to reasoned synthesis">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Balanced Discursive Essay Architecture</text>' +
  '<g font-family="system-ui, -apple-system, sans-serif" text-anchor="middle">' +
  '<rect x="20" y="48" width="118" height="132" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="79" y="70" font-size="11" font-weight="700" fill="var(--brand)">1. FRAME</text>' +
  '<text x="79" y="96" font-size="10.5" fill="var(--ink)">Introduce the</text>' +
  '<text x="79" y="112" font-size="10.5" fill="var(--ink)">debate neutrally</text>' +
  '<text x="79" y="128" font-size="10.5" fill="var(--ink)">&amp; explain why</text>' +
  '<text x="79" y="144" font-size="10.5" fill="var(--ink)">it matters now.</text>' +
  '<rect x="154" y="48" width="118" height="132" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="213" y="70" font-size="11" font-weight="700" fill="var(--good)">2. VIEWPOINT A</text>' +
  '<text x="213" y="96" font-size="10.5" fill="var(--ink)">Present strongest</text>' +
  '<text x="213" y="112" font-size="10.5" fill="var(--ink)">reasons + data</text>' +
  '<text x="213" y="128" font-size="10.5" fill="var(--ink)">for one side</text>' +
  '<text x="213" y="144" font-size="10.5" fill="var(--ink)">without bias.</text>' +
  '<rect x="288" y="48" width="118" height="132" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
  '<text x="347" y="70" font-size="11" font-weight="700" fill="var(--bad)">3. COUNTER</text>' +
  '<text x="347" y="96" font-size="10.5" fill="var(--ink)">Steel-man the</text>' +
  '<text x="347" y="112" font-size="10.5" fill="var(--ink)">opposing view</text>' +
  '<text x="347" y="128" font-size="10.5" fill="var(--ink)">using markers:</text>' +
  '<text x="347" y="144" font-size="10.5" font-weight="600" fill="var(--bad)">Conversely...</text>' +
  '<rect x="422" y="48" width="118" height="132" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="481" y="70" font-size="11" font-weight="700" fill="var(--brand)">4. CLOSING</text>' +
  '<text x="481" y="106" font-size="10.5" fill="var(--ink)">Draw together</text>' +
  '<text x="481" y="122" font-size="10.5" fill="var(--ink)">your final</text>' +
  '<text x="481" y="138" font-size="10.5" fill="var(--ink)">judgement.</text>' +
  '<rect x="28" y="198" width="504" height="32" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>' +
  '<text x="280" y="218" font-size="11" fill="var(--ink-2)">Key markers: Admittedly · Nevertheless · Conversely · On balance · Crucially</text>' +
  '</g>' +
  '</svg>';

const SVG_SPAG_TOOLKIT =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Year 9 SPaG precision guide for semicolons, contractions, and plural possessives">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Year 9 SPaG Precision: Semicolons &amp; Apostrophes</text>' +
  '<rect x="20" y="46" width="252" height="84" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="34" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--brand)">1. Conjunctive Adverb (; however,)</text>' +
  '<text x="34" y="90" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">Clause 1; however, Clause 2.</text>' +
  '<text x="34" y="112" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">Semicolon BEFORE however, comma AFTER.</text>' +
  '<rect x="288" y="46" width="252" height="84" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="302" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--brand)">2. Contraction vs Possessive</text>' +
  '<text x="302" y="90" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink)">it&apos;s = it is / it has</text>' +
  '<text x="302" y="112" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">its = belonging to it (no apostrophe)</text>' +
  '<rect x="20" y="144" width="520" height="86" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="34" y="168" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--good)">3. Plural Possessive Apostrophe Check (Who owns the object?)</text>' +
  '<text x="34" y="192" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="var(--ink)">One teacher&apos;s desk (singular)   vs   Several teachers&apos; desks (plural ending in -s)</text>' +
  '<text x="34" y="214" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink-2)">Place the apostrophe on the OWNER noun — never on the thing being owned!</text>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-reading-writing",
  title: "Year 9 Combined Reading, Rhetoric & SPaG Mock Paper",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-reading-writing-q01",
      topicId: "comprehension-inference",
      guideRef: "retrieval-vs-inference",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "Read this short non-fiction extract about rooftop gardens in Singapore:\n\n'On Saturday mornings, forty-two residents climb onto the multi-storey car park deck above Block 18. Elderly retirees trade pandan cuttings with secondary students who arrive holding notebooks instead of spades, and nobody checks a watch until the sun clears the neighbouring tower.'\n\nWhich statement is a valid **inference** rather than an explicit retrieved fact?",
      options: [
        "Forty-two residents visit the car park rooftop garden on Saturday mornings.",
        "The rooftop garden builds unhurried cross-generational trust across neighbours.",
        "Secondary students bring notebooks onto the garden deck above Block 18.",
        "Elderly retirees bring pandan cuttings to share on the multi-storey roof.",
      ],
      answerIndex: 1,
      hints: [
        "Check which three statements are copied almost word-for-word straight out of the extract (explicit retrieval).",
        "Look at what 'trade pandan cuttings' and 'nobody checks a watch' imply about community warmth without stating it outright.",
      ],
      strategy: "Separate surface stated facts (retrieval) from implied meaning (inference).",
      explanation:
        "The number of residents, the notebooks, and the pandan cuttings are all stated directly (explicit retrieval). Concluding that the garden fosters relaxed cross-generational community trust reads between the lines of 'trade' and 'nobody checks a watch' (inference).",
    },
    {
      id: "exam-reading-writing-q02",
      topicId: "comprehension-inference",
      guideRef: "attitude-tone-bias",
      kind: "short",
      difficulty: "warmup",
      question:
        "Read this opinion-column extract:\n\n'Yet another soulless glass tower promises \"elevated living\" while bulldozing the last shaded hawker terrace on the avenue.'\n\nName the two-word term for emotionally charged vocabulary (such as *soulless*, *bulldozing*, and *last shaded*) chosen deliberately by a writer to steer a reader's bias.",
      answer: {
        type: "text",
        accept: [
          "loaded language",
          "emotive language",
          "loaded diction",
          "emotive diction",
          "biased language",
          "emotive words",
        ],
        display: "loaded language",
      },
      traps: [
        {
          spec: { type: "text", accept: ["anecdote", "statistic"] },
          feedback: "Anecdotes and statistics are types of evidence; this term specifically describes emotionally slanted word choices.",
        },
        {
          spec: { type: "text", accept: ["neutral register", "objective tone"] },
          feedback: "Words like 'soulless' and 'bulldozing' are the exact opposite of neutral — they push the reader toward disapproval.",
        },
      ],
      hints: [
        "Notice how replacing 'demolishing an older building' with 'bulldozing the last shaded terrace' injects strong feeling and bias.",
        "Acceptable two-word answers begin with either 'loaded...' or 'emotive...'.",
      ],
      strategy: "Test bias by swapping a writer's charged adjectives/verbs for neutral ones.",
      solution: [
        "Deliberately choosing emotionally slanted words ('soulless', 'bulldozing') to shape reader judgement is **loaded language** (also widely called **emotive language**).",
        "Spotting quotation marks around 'elevated living' also reveals subtle irony mocking corporate marketing.",
      ],
    },
    {
      id: "exam-reading-writing-q03",
      topicId: "comprehension-inference",
      guideRef: "attitude-tone-bias",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read this extract from a technology review column:\n\n'Once again, humanity may breathe a sigh of relief: this year's flagship smartphone boasts a bezel one whole millimetre slimmer and a brand-new charger incompatible with every drawer in your house.'\n\nWhich nuanced tone label best describes the columnist's attitude?",
      options: [
        "Reverent and genuinely awestruck by engineering breakthroughs.",
        "Anxious and warning readers about immediate physical safety hazards.",
        "Sardonic and dryly mocking wasteful tech marketing hype.",
        "Melancholic and grieving the loss of old rotary telephones.",
      ],
      answerIndex: 2,
      hints: [
        "Look at the clash between grand opening praise ('humanity may breathe a sigh of relief') and the trivial payoff ('one whole millimetre slimmer').",
        "Is the columnist genuinely amazed, or delivering sharp, dry mockery?",
      ],
      strategy: "Spot verbal irony to pinpoint precise tone words (sardonic, ironic, sceptical).",
      explanation:
        "Exaggerating a tiny one-millimetre redesign as a triumph for 'humanity' before jabbing at the incompatible charger is classic dry, cynical mockery—best captured by the precise tone word **sardonic**.",
    },
    {
      id: "exam-reading-writing-q04",
      topicId: "comprehension-inference",
      guideRef: "nonfiction-language-structure",
      kind: "short",
      difficulty: "core",
      question:
        "A magazine feature on urban cycling opens with a four-sentence true story about a twelve-year-old boy repairing his grandmother's bicycle chain beside a wet bus stop, before zooming out to city-wide transport figures. Name this short real-life story used to hook non-fiction readers.",
      answer: {
        type: "text",
        accept: ["anecdote", "an anecdote", "personal anecdote"],
        display: "anecdote",
      },
      traps: [
        {
          spec: { type: "text", accept: ["allegory", "fable"] },
          feedback: "An allegory or fable is a symbolic fictional tale; a brief real-life human story used in articles or speeches has an eight-letter name.",
        },
        {
          spec: { type: "text", accept: ["statistic", "hyperbole"] },
          feedback: "Statistics are numerical data; this technique opens with a relatable human story to build immediate empathy.",
        },
      ],
      hints: [
        "Journalists and public speakers use this brief human-interest story at the opening to build pathos before presenting statistics.",
        "The eight-letter noun begins with 'anec-'.",
      ],
      strategy: "Recognise how non-fiction writers pair human stories with wider data.",
      solution: [
        "A brief real-life story used to engage an audience and illustrate a broader issue is an **anecdote**.",
        "Opening with an anecdote creates emotional connection before pivoting to statistical evidence.",
      ],
    },
    {
      id: "exam-reading-writing-q05",
      topicId: "comprehension-inference",
      guideRef: "nonfiction-language-structure",
      kind: "mcq",
      difficulty: "core",
      question:
        "A three-minute speech on marine pollution begins with the vivid detail of a single cracked blue bottle cap resting on a dawn beach, moves through global packaging statistics, and finishes by holding up that exact blue bottle cap again. What is the structural effect of this **cyclical ending**?",
      options: [
        "It frames the speech neatly and turns one ordinary item into a lasting moral symbol.",
        "It shows the speaker ran out of fresh arguments and had to repeat the opening paragraph.",
        "It proves that marine pollution affects only blue bottle caps rather than other plastics.",
        "It shifts the tone from urgent civic persuasion into casual seaside travel writing.",
      ],
      answerIndex: 0,
      hints: [
        "Notice how returning to the opening image at the very end creates a memorable sense of closure ('call-back').",
        "After hearing global statistics in the middle, how has the audience's perception of that tiny bottle cap changed?",
      ],
      strategy: "Explain how cyclical structure deepens an opening image's symbolic weight.",
      explanation:
        "A cyclical ending (or call-back) creates polished structural unity while transforming the opening image: after three minutes of evidence, that single bottle cap is no longer mere litter—it lands as a vivid, unforgettable symbol of collective responsibility.",
    },
    {
      id: "exam-reading-writing-q06",
      topicId: "comprehension-inference",
      guideRef: "synthesis-summary",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read two brief non-fiction extracts on evening schoolwork:\n\n**Text A (Sleep Researcher):** 'Adolescents who study past 10 p.m. on bright tablets lose critical deep sleep, impairing concentration the next morning.'\n**Text B (Mathematics Coach):** 'Ten minutes of calm, handwritten spaced recall after dinner doubles long-term memory without draining energy.'\n\nWhich synthesis sentence integrates **both** perspectives accurately in concise original wording?",
      options: [
        "Both writers agree that schools should immediately abolish all evening study and homework.",
        "Text A praises late-night tablet use while Text B recommends two hours of evening cramming.",
        "Text A says adolescents lose deep sleep past 10 p.m. and Text B says ten minutes doubles memory.",
        "While Text A warns against late screen-heavy study, Text B advocates brief low-stress practice.",
      ],
      answerIndex: 3,
      hints: [
        "Reject any option that copies long phrases verbatim OR misrepresents either writer's position.",
        "Notice the smart nuance: Text A criticises *late, screen-heavy* work, whereas Text B favours *brief, calm, handwritten* recall.",
      ],
      strategy: "Synthesise key contrasts in fresh original words without distortion.",
      explanation:
        "Accurate cross-text synthesis translates both perspectives into original phrasing and preserves their nuance: Text A objects specifically to late-night screen fatigue, whereas Text B endorses short, low-stress handwritten recall rather than lengthy cramming.",
    },
    {
      id: "exam-reading-writing-q07",
      topicId: "discursive-writing-public-speaking",
      guideRef: "aristotelian-rhetoric",
      kind: "short",
      difficulty: "warmup",
      question:
        "Look at this closing slogan from a Year 9 civic speech: *'Clearer streets, cleaner air, calmer neighbourhoods.'* Name the rhetorical technique of grouping three parallel phrases or ideas together for punchy rhythm and memorability.",
      answer: {
        type: "text",
        accept: ["tricolon", "a tricolon", "rule of three", "the rule of three", "tripling", "power of three"],
        display: "tricolon",
      },
      traps: [
        {
          spec: { type: "text", accept: ["anaphora"] },
          feedback: "Anaphora repeats the exact same opening word(s) at the start of clauses; here the adjectives change ('Clearer', 'cleaner', 'calmer') in a rhythmic trio.",
        },
        {
          spec: { type: "text", accept: ["antithesis"] },
          feedback: "Antithesis contrasts opposing ideas; here three harmonious benefits build momentum together.",
        },
      ],
      hints: [
        "Count the parallel noun phrases: (1) clearer streets, (2) cleaner air, (3) calmer neighbourhoods.",
        "Both the classical Greek name ('tri-...') and the everyday three-word name ('rule of...') are accepted.",
      ],
      strategy: "Count parallel rhythmic units in persuasive prose and speeches.",
      solution: [
        "Arranging three parallel words or clauses for rhythmic impact and completeness is a **tricolon** (also called the **rule of three** or **tripling**).",
        "Three-part rhythm feels naturally resolved to listeners, making final lines stick in memory.",
      ],
    },
    {
      id: "exam-reading-writing-q08",
      topicId: "discursive-writing-public-speaking",
      guideRef: "aristotelian-rhetoric",
      kind: "mcq",
      difficulty: "core",
      diagram: SVG_RHETORIC_TRIANGLE,
      question:
        "Study the rhetorical triangle and read this extract from a student speech on emergency bike lanes:\n\n'As a volunteer first-aider for two years, I have knelt beside a shaken commuter at dusk waiting for sirens; city transport logs show protected lanes cut cycling collisions by 34 per cent.'\n\nWhich Aristotelian appeal is anchored by the **34 per cent** figure, and why does pairing it with the personal scene strengthen the speech?",
      options: [
        "It uses pathos alone, proving that statistics never need emotional context to persuade.",
        "It uses ethos alone, demonstrating that the speaker invented the city transport system.",
        "It anchors logos in hard evidence, balancing the human empathy of pathos and speaker ethos.",
        "It replaces all logical proof with exaggerated fear so listeners ignore actual collision rates.",
      ],
      answerIndex: 2,
      hints: [
        "Match each slice of the sentence to the three vertices in the diagram: 'volunteer first-aider' (credibility), 'knelt beside a shaken commuter' (empathy), '34 per cent' (evidence).",
        "Think about why combining all three corners persuades both the head and the heart.",
      ],
      strategy: "Map every clause of a persuasive sentence onto Ethos, Pathos, and Logos.",
      explanation:
        "The verified 34 per cent reduction supplies **logos** (measurable evidence), which reinforces the speaker's first-hand **ethos** ('volunteer first-aider') and vivid **pathos** ('shaken commuter at dusk')—preventing the speech from sounding either dryly robotic or purely melodramatic.",
    },
    {
      id: "exam-reading-writing-q09",
      topicId: "discursive-writing-public-speaking",
      guideRef: "aristotelian-rhetoric",
      kind: "short",
      difficulty: "core",
      question:
        "Read these two lines from a speech on youth curiosity:\n\n'We can measure every click and scroll. We can measure every timed score — yet we still struggle to measure wonder.'\n\nName the rhetorical device created by deliberately repeating the exact opening words (*'We can measure'*) at the start of successive sentences.",
      answer: {
        type: "text",
        accept: ["anaphora"],
        display: "anaphora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tricolon", "rule of three"] },
          feedback: "Notice there are only *two* repeated openings here, not three — name the specific eight-letter term for repeating opening words across successive clauses.",
        },
        {
          spec: { type: "text", accept: ["refrain"] },
          feedback: "Refrain describes a recurring full line at intervals across a poem or song; repeating the exact *opening* phrase of consecutive sentences has a classical Greek rhetorical name.",
        },
      ],
      hints: [
        "Look strictly at the opening three words of Sentence 1 and Sentence 2.",
        "This eight-letter Greek term begins with 'ana-' and describes deliberate opening-phrase repetition.",
      ],
      strategy: "Pinpoint *where* repetition occurs (clause openings vs stanza endings).",
      solution: [
        "Repeating the exact opening phrase ('We can measure') across consecutive sentences is **anaphora**.",
        "Here the insistent opening beat sets up an expected pattern that the 'yet' clause then dramatically undercuts.",
      ],
    },
    {
      id: "exam-reading-writing-q10",
      topicId: "discursive-writing-public-speaking",
      guideRef: "aristotelian-rhetoric",
      kind: "short",
      difficulty: "core",
      question:
        "Read this excerpt from a school debate speech:\n\n'Should schools lock phones away during lunch breaks? Trial data from four secondary campuses points to a decisive yes.'\n\nName the classical rhetorical technique where a speaker asks a direct question and immediately answers it themselves to steer the argument.",
      answer: {
        type: "text",
        accept: ["hypophora", "anthypophora"],
        display: "hypophora",
      },
      traps: [
        {
          spec: { type: "text", accept: ["rhetorical question", "rhetorical questions"] },
          feedback: "A rhetorical question leaves the answer unspoken because it is obvious; here the speaker explicitly answers their own question right away.",
        },
        {
          spec: { type: "text", accept: ["antithesis", "anaphora"] },
          feedback: "Look specifically at the Q&A move: posing a question and immediately supplying the reply.",
        },
      ],
      hints: [
        "Unlike a standard rhetorical question, the speaker does *not* leave the question hanging — they answer it in the very next sentence.",
        "The nine-letter Greek term starts with 'hypo-'.",
      ],
      strategy: "Check whether a speaker leaves a question unanswered or supplies an immediate reply.",
      solution: [
        "Posing a question and immediately answering it yourself to guide an audience's thinking is **hypophora**.",
        "It creates the illusion of an active dialogue while keeping the speaker firmly in control of the conclusion.",
      ],
    },
    {
      id: "exam-reading-writing-q11",
      topicId: "discursive-writing-public-speaking",
      guideRef: "public-speaking-competition",
      kind: "short",
      difficulty: "challenge",
      question:
        "In the opening fifteen seconds of a Public Speaking Competition speech, a finalist delivers a razor-sharp balanced sentence: *'Attention is easy to steal; trust is hard to earn.'* Name the rhetorical device that sets two directly opposing ideas against each other in parallel grammatical halves.",
      answer: {
        type: "text",
        accept: ["antithesis"],
        display: "antithesis",
      },
      traps: [
        {
          spec: { type: "text", accept: ["oxymoron"] },
          feedback: "An oxymoron compresses two contradictory words right next to each other (like 'bitter-sweet'); balancing opposing ideas across parallel clauses has a ten-letter name.",
        },
        {
          spec: { type: "text", accept: ["juxtaposition"] },
          feedback: "Juxtaposition is the broad placement of contrasting things side by side; specifically mirroring opposite ideas inside balanced parallel grammar is antithesis.",
        },
      ],
      hints: [
        "Notice the mirror-image grammar: [Noun + is + adjective + to + verb] on both sides of the semicolon, pairing easy/hard and steal/earn.",
        "The ten-letter word begins with 'anti-' (against) + 'thesis' (placing).",
      ],
      strategy: "Recognise balanced parallel opposites as high-impact speech hooks.",
      solution: [
        "Contrasting two opposing ideas inside balanced parallel clauses ('Attention is easy to steal; trust is hard to earn') is **antithesis**.",
        "Its rhythmic symmetry makes opening hooks sound authoritative, quotable, and memorable to judges.",
      ],
    },
    {
      id: "exam-reading-writing-q12",
      topicId: "discursive-writing-public-speaking",
      guideRef: "discursive-essay-structure",
      kind: "mcq",
      difficulty: "core",
      diagram: SVG_DISCURSIVE_MAP,
      question:
        "Study the discursive essay diagram. How does a balanced **discursive essay** on the topic *'Should historic city centres ban private cars?'* differ fundamentally from a one-sided persuasive tirade?",
      options: [
        "A discursive essay avoids using any formal discourse markers or factual evidence.",
        "A discursive essay explores competing viewpoints fairly before reaching a reasoned verdict.",
        "A discursive essay refuses to draw any conclusion at all in its closing paragraph.",
        "A discursive essay mocks opponents using aggressive slang and exclamation marks.",
      ],
      answerIndex: 1,
      hints: [
        "Look across all four stages of the diagram: Frame → Viewpoint A → Steel-Manned Counter → Measured Verdict.",
        "Notice the vital balance: a discursive writer *does* weigh evidence and offer a thoughtful verdict at the end, without caricature or ranting.",
      ],
      strategy: "Distinguish balanced discursive exploration from one-sided persuasion.",
      explanation:
        "A strong discursive essay treats complex issues with intellectual fairness—examining the strongest arguments on multiple sides ('steel-manning' counter-views) through measured discourse markers before arriving at a nuanced, evidence-backed final judgement.",
    },
    {
      id: "exam-reading-writing-q13",
      topicId: "discursive-writing-public-speaking",
      guideRef: "spag-syntax-precision",
      kind: "short",
      difficulty: "warmup",
      question:
        "Spot the Year 9 SPaG punctuation error in this sentence:\n\n*'The panel praised the students' mural, they still voted to postpone funding.'*\n\nWhat two-word grammatical term names the error of joining two complete independent clauses with only a comma?",
      answer: {
        type: "text",
        accept: ["comma splice", "a comma splice", "comma splicing"],
        display: "comma splice",
      },
      traps: [
        {
          spec: { type: "text", accept: ["fragment", "sentence fragment", "minor sentence"] },
          feedback: "A fragment is missing a main clause; here there are *two* complete sentences glued together incorrectly with just a comma.",
        },
        {
          spec: { type: "text", accept: ["run-on sentence", "run on sentence"] },
          feedback: "Close in family, yet give the exact two-word punctuation name for sticking two main clauses together with a weak comma.",
        },
      ],
      hints: [
        "Both 'The panel praised the students' mural' and 'they still voted to postpone funding' could stand alone with a full stop.",
        "The first word is the punctuation mark being misused, and the second word means 'glued/joined together'.",
      ],
      strategy: "Check whether both sides of a comma can stand alone as full sentences.",
      solution: [
        "Joining two complete independent clauses with only a comma is a **comma splice**.",
        "Fix it by replacing the comma with a full stop, a semicolon, or a comma plus a coordinating conjunction (', yet they still voted...').",
      ],
    },
    {
      id: "exam-reading-writing-q14",
      topicId: "discursive-writing-public-speaking",
      guideRef: "spag-syntax-precision",
      kind: "mcq",
      difficulty: "core",
      diagram: SVG_SPAG_TOOLKIT,
      question:
        "Use the SPaG toolkit to fix EVERY punctuation error in this draft sentence (referring to a debate held by multiple students and scored by multiple judges):\n\n*'Its clear the students debate went well, however, the judges notes' took an hour.'*\n\nWhich revision is 100% grammatically accurate?",
      options: [
        "It's clear the students' debate went well; however, the judges' notes took an hour.",
        "Its clear the student's debate went well; however, the judges notes' took an hour.",
        "It's clear the students' debate went well, however; the judges' notes took an hour.",
        "Its' clear the students debate went well; however, the judge's notes took an hour.",
      ],
      answerIndex: 0,
      hints: [
        "Check three targets one by one: (1) 'It is clear' needs an apostrophe; (2) 'however' joining two full clauses needs a semicolon BEFORE it and comma AFTER; (3) who owns the debate and notes?",
        "Remember: never put an apostrophe on 'notes' (the owned thing) — put it after 'judges' (the plural owners).",
      ],
      strategy: "Audit contractions, semicolons before conjunctive adverbs, and plural possessives step by step.",
      explanation:
        "'It's' contracts 'It is'; 'students'' and 'judges'' place the possessive apostrophe after the plural -s on the owner nouns (never on 'notes'); and '; however,' correctly uses a semicolon before the conjunctive adverb and a comma after it.",
    },
    {
      id: "exam-reading-writing-q15",
      topicId: "discursive-writing-public-speaking",
      guideRef: "spag-syntax-precision",
      kind: "short",
      difficulty: "warmup",
      question:
        "Rewrite this passive-voice sentence in the **active voice**, keeping the exact past tense and the exact nouns (4 words):\n\n*'The speech was written by Priya.'*",
      answer: {
        type: "text",
        accept: ["Priya wrote the speech.", "Priya wrote the speech"],
        display: "Priya wrote the speech.",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Priya writes the speech", "Priya writes the speech."] },
          feedback: "Watch the tense! 'was written' is past tense, so use the past-tense active verb ('wrote'), not present tense ('writes').",
        },
        {
          spec: { type: "text", accept: ["The speech wrote Priya", "The speech wrote Priya."] },
          feedback: "Put the person performing the action ('Priya') first as the grammatical subject.",
        },
        {
          spec: { type: "text", accept: ["Priya has written the speech", "Priya has written the speech."] },
          feedback: "Keep the simple past tense ('wrote') in 4 concise words matching 'was written'.",
        },
      ],
      hints: [
        "Identify who performs the action ('Priya') and move that name to the very start as the subject.",
        "Convert 'was written by' into a single crisp past-tense active verb.",
      ],
      strategy: "Move the doer of the action to the subject position for punchier prose.",
      solution: [
        "Make the doer ('Priya') the subject and change 'was written' to the simple past active verb 'wrote'.",
        "Active voice: **Priya wrote the speech.**",
      ],
    },
    {
      id: "exam-reading-writing-q16",
      topicId: "much-ado-about-nothing",
      guideRef: "beatrice-benedick-wit",
      kind: "mcq",
      difficulty: "core",
      question:
        "In Act 1 Scene 1 of *Much Ado About Nothing*, Beatrice declares: *'I had rather hear my dog bark at a crow than a man swear he loves me.'* How does Shakespeare combine comic hyperbole and sharp contrast here to craft Beatrice's dramatic voice?",
      options: [
        "It reveals that Beatrice genuinely hates dogs and avoids outdoor courtyards in Messina.",
        "It implies Beatrice secretly longs for Claudio to propose to her before the masked ball.",
        "It uses outrageous comparison to mock sentimental courtship and guard her independence.",
        "It warns the audience that Beatrice intends to sabotage Hero's marriage out of jealousy.",
      ],
      answerIndex: 2,
      hints: [
        "Compare the harsh everyday noise ('dog bark at a crow') with lofty romantic vows ('a man swear he loves me').",
        "Ask what kind of independent, sceptical personality deliberately deflates romantic clichés with humour.",
      ],
      strategy: "Link comic exaggeration (hyperbole) to character attitude and theme.",
      explanation:
        "By preferring harsh animal noise to romantic oaths, Beatrice deflates courtly flattery through razor-sharp comic hyperbole—immediately establishing her spirited scepticism, wit, and fierce determination not to surrender her independence lightly.",
    },
    {
      id: "exam-reading-writing-q17",
      topicId: "much-ado-about-nothing",
      guideRef: "messina-honour-context",
      kind: "short",
      difficulty: "core",
      question:
        "In *Much Ado About Nothing*, Leonato expects total obedience from his daughter Hero and initially sides with noble accusers over her own word. Name the single sociological term for a male-dominated social system in which fathers and husbands hold legal and moral authority.",
      answer: {
        type: "text",
        accept: ["patriarchy", "a patriarchy", "patriarchal society", "patriarchal system", "patriarchal"],
        display: "patriarchy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["monarchy"] },
          feedback: "Monarchy means rule by a king or queen; look for the term describing male-dominated family and social power.",
        },
        {
          spec: { type: "text", accept: ["hierarchy"] },
          feedback: "Hierarchy covers any ranked system (class, military, etc.); name the specific term for *male-led* authority (from Greek *pater*, father).",
        },
        {
          spec: { type: "text", accept: ["matriarchy"] },
          feedback: "Matriarchy means female-led authority — check the root for *father*-led power instead.",
        },
      ],
      hints: [
        "The word derives from the Greek root *pater* (father) + *-archy* (rule).",
        "Understanding this Elizabethan context explains why Hero's reputation mattered so heavily to Leonato's house.",
      ],
      strategy: "Use precise historical-context vocabulary in Shakespeare analysis.",
      solution: [
        "A male-dominated social structure in which fathers and husbands hold primary authority is a **patriarchy**.",
        "In Messina, patriarchal double standards allow men to boast of honour while leaving women's reputations dangerously fragile.",
      ],
    },
    {
      id: "exam-reading-writing-q18",
      topicId: "merchant-of-venice",
      guideRef: "portia-trial-mercy-justice",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read these persuasive lines from Portia's trial speech in Act 4 Scene 1 of *The Merchant of Venice*:\n\n'It [mercy] is enthroned in the hearts of kings,\nIt is an attribute to God himself;\nAnd earthly power doth then show likest God's\nWhen mercy seasons justice.'\n\nHow does Portia fuse rhetorical strategy with imagery here to pressure Shylock?",
      options: [
        "She threatens Shylock with immediate arrest before he has spoken a word in court.",
        "She invokes royal and divine authority to frame compassion as higher than rigid law.",
        "She relies purely on commercial accounting figures to prove Antonio's ships survived.",
        "She flatters Bassanio's wealth so the Venetian Duke will cancel Shylock's contract.",
      ],
      answerIndex: 1,
      hints: [
        "Look at the semantic field of status and faith: 'enthroned', 'kings', 'God himself', 'earthly power'.",
        "Notice how she elevates mercy above strict 'justice' using the metaphor 'seasons' (like flavour enriching food).",
      ],
      strategy: "Analyse persuasive rhetoric inside Shakespearean courtroom drama.",
      explanation:
        "Portia builds elevated moral authority (**ethos** and spiritual appeal) through imagery of royalty ('enthroned... kings') and divinity ('God himself'), persuading the courtroom that mercy refines and humanises strict legal justice rather than contradicting it.",
    },
    {
      id: "exam-reading-writing-q19",
      topicId: "merchant-of-venice",
      guideRef: "bonds-loyalty-essay-craft",
      kind: "short",
      difficulty: "challenge",
      question:
        "In *The Merchant of Venice*, Antonio's willingness to risk his own life out of loyalty to Bassanio is set deliberately against Shylock's cold insistence 'I will have my bond'. What single literary term describes a character contrasted directly with another to sharpen differences in motive and values?",
      answer: {
        type: "text",
        accept: ["foil", "a foil", "character foil", "foils", "character foils"],
        display: "foil",
      },
      traps: [
        {
          spec: { type: "text", accept: ["protagonist", "antagonist"] },
          feedback: "Protagonist and antagonist name main hero and opponent; look for the shorter four-letter term for *any* contrasting character who throws another's traits into relief.",
        },
        {
          spec: { type: "text", accept: ["archetype"] },
          feedback: "An archetype is a universal character type; this term comes from jewellers placing bright metal beneath a gem to make it stand out.",
        },
      ],
      hints: [
        "Originally, jewellers slipped a thin backing sheet behind a gemstone to make its colour shine more sharply.",
        "It is a four-letter word often paired with 'character ____'.",
      ],
      strategy: "Use precise literary terms for structural character pairings.",
      solution: [
        "A character deliberately contrasted against another to illuminate competing traits and themes is a **foil** (or **character foil**).",
        "Shakespeare repeatedly uses foils—such as Beatrice/Hero or Antonio/Shylock—to deepen thematic debate.",
      ],
    },
    {
      id: "exam-reading-writing-q20",
      topicId: "the-novel-analytical-essay",
      guideRef: "narrative-voice-perspective",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "Read this short unseen novel excerpt narrated in **third-person limited** perspective:\n\n'Half the dining table erupted in laughter just as Dev set his tray down. Heat climbed up his collar; he kept his eyes fixed on his soup, utterly certain someone had spotted the frayed cuff on his blazer.'\n\nWhat narrative effect does limiting focalisation strictly to Dev's viewpoint achieve here compared with an all-knowing omniscient narrator?",
      options: [
        "It proves objectively that every single student at the table was mocking Dev's sleeve.",
        "It prevents the reader from feeling any sympathy for Dev's nervous first afternoon.",
        "It informs the reader immediately about the private joke the other students told.",
        "It traps the reader inside Dev's self-conscious fear while leaving truth uncertain.",
      ],
      answerIndex: 3,
      hints: [
        "Notice we are told Dev is 'utterly certain'—yet do we *actually* know what the other students were laughing about?",
        "Think about how withholding the other characters' minds intensifies claustrophobic teenage self-consciousness.",
      ],
      strategy: "Analyse what a focalised narrator *withholds* as well as what they reveal.",
      explanation:
        "By restricting us strictly to Dev's sensory discomfort ('Heat climbed') and assumptions ('utterly certain') without revealing why the table actually laughed, third-person limited focalisation immerses us in his insecurity while subtly hinting his fear might be mistaken.",
    },
    {
      id: "exam-reading-writing-q21",
      topicId: "power-conflict-short-stories",
      guideRef: "tension-pacing-syntax",
      kind: "short",
      difficulty: "challenge",
      question:
        "Read this fast-paced chase sentence from an unseen conflict short story:\n\n*'She snatched the keys, vaulted the turnstile, sprinted down the alley, vanished into fog.'*\n\nNotice that the writer deliberately omits coordinating conjunctions such as 'and' between the rapid verbs to accelerate momentum. Name this classical syntactic device.",
      answer: {
        type: "text",
        accept: ["asyndeton", "asyndetic listing", "asyndetic list"],
        display: "asyndeton",
      },
      traps: [
        {
          spec: { type: "text", accept: ["polysyndeton"] },
          feedback: "Careful — *poly*syndeton repeats many conjunctions ('and... and... and...'); *omitting* conjunctions takes the prefix *a-* ('without').",
        },
        {
          spec: { type: "text", accept: ["enjambment"] },
          feedback: "Enjambment applies to poetry running past line breaks; this prose syntax device removes conjunctions between listed clauses.",
        },
      ],
      hints: [
        "Compare the opposite pair: 'poly-' (many conjunctions) versus 'a-' (without conjunctions).",
        "The nine-letter term starts with 'asyn-'.",
      ],
      strategy: "Link missing or repeated conjunctions directly to narrative speed.",
      solution: [
        "Deliberately omitting conjunctions ('and') between consecutive clauses or list items is **asyndeton** (or **asyndetic listing**).",
        "Removing 'and' strips away pauses, propelling the reader breathlessly through the escape.",
      ],
    },
    {
      id: "exam-reading-writing-q22",
      topicId: "comprehension-inference",
      guideRef: "synthesis-summary",
      kind: "written",
      difficulty: "core",
      marks: 4,
      question:
        "Read these two short non-fiction extracts about youth community volunteering:\n\n**Text A (Municipal Parks Report):** 'Over four weekends, 180 student volunteers cleared 420 kilograms of plastic from the riverfront canal, saving the town council an estimated twelve days of maintenance labour and visibly restoring shoreline walkways.'\n\n**Text B (Year 9 Student Diary):** 'Honestly, I joined the weekend reading club for service hours, yet listening to Mr Tan recall Singapore's 1960s bookshops over ginger tea taught me more patience and belonging than any textbook ever did.'\n\n**Synthesise** how the two writers present **different dimensions of value** in youth volunteering, using your own words and brief embedded evidence from BOTH texts. (4 marks)",
      hints: [
        "Identify the core contrast: Text A values measurable, civic/environmental outcomes (data & labour saved), whereas Text B values personal growth, empathy, and cross-generational connection.",
        "Embed one brief quote (2–4 words) from Text A and one brief quote from Text B.",
        "Use comparative connectives ('whereas', 'in contrast', 'similarly') and summarise mainly in your own words.",
      ],
      strategy: "Synthesise across texts by grouping themes (measurable impact vs inner growth).",
      modelAnswer:
        "Although both writers demonstrate that youth volunteering creates genuine worth, they emphasise sharply contrasting dimensions of its benefit. Text A adopts an institutional, results-driven perspective, quantifying tangible environmental and economic outcomes through statistics—such as removing '420 kilograms' of waste and 'saving' municipal labour—to frame young people as an efficient civic workforce. Conversely, Text B offers an intimate, reflective viewpoint: beginning with a candid admission of seeking 'service hours', the student discovers unexpected emotional transformation, citing 'patience and belonging' nurtured through personal conversation with an older resident. Together, the extracts show that volunteering delivers both measurable public improvement and lasting human empathy.",
      markScheme: [
        {
          point: "Summarises Text A's focus on measurable, civic, environmental, or practical/economic outcomes in own words.",
          keywords: ["measur", "civic", "environment", "economic", "practical", "tangible", "quantif", "statistic", "data", "efficient"],
        },
        {
          point: "Embeds concise supporting evidence from Text A (e.g. '420 kilograms', '180 student', 'twelve days', 'saving', 'restoring').",
          keywords: ["420", "180", "twelve", "saving", "restor", "walkway", "canal"],
        },
        {
          point: "Contrasts with Text B's focus on personal growth, reflection, empathy, or intergenerational friendship using a comparative connective.",
          keywords: ["whereas", "conversely", "contrast", "unlike", "personal", "empath", "intergenerat", "friendship", "emotional", "reflect", "transform"],
        },
        {
          point: "Embeds concise supporting evidence from Text B (e.g. 'service hours', 'patience', 'belonging', 'ginger tea', 'textbook').",
          keywords: ["belonging", "patience", "service", "ginger", "textbook", "bookshop"],
        },
      ],
      commonError: "Copying whole sentences from Text A and Text B without contrasting their underlying perspectives in your own words.",
    },
    {
      id: "exam-reading-writing-q23",
      topicId: "discursive-writing-public-speaking",
      guideRef: "discursive-essay-structure",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Write a **balanced discursive paragraph** (about 5–7 sentences) addressing the debate question:\n\n*'Should Year 9 students be permitted to use generative AI tools while planning analytical essays?'*\n\nTo earn full marks, you must:\n1. Present one clear, **steel-manned** argument in favour (not a weak caricature).\n2. Pivot smoothly using a formal **discourse marker** (such as *however*, *conversely*, *nevertheless*, or *admittedly*).\n3. Develop a reasoned **counter-argument** explaining a serious risk to independent thinking.\n4. Close with a **measured, nuanced judgement** in formal academic register. (4 marks)",
      hints: [
        "Open neutrally or with a fair case for AI planning (e.g. brainstorming structure, checking clarity, or helping hesitant writers overcome blank-page anxiety).",
        "Pivot cleanly with '; however,' or 'Conversely,' — make sure your punctuation avoids comma splices!",
        "End with a balanced conditional conclusion (e.g. guided early feedback vs uncritical outsourcing) rather than an extreme 'ban everything' rant.",
      ],
      strategy: "Use the Frame → Pro → Discourse Pivot → Counter → Nuanced Verdict sequence.",
      modelAnswer:
        "Proponents reasonably contend that allowing Year 9 students to consult AI during initial essay planning can democratise academic support, helping hesitant writers test thesis clarity or overcome blank-page anxiety outside classroom hours. Used thoughtfully as a questioning sounding board rather than a ghostwriter, such tools might encourage learners to refine vocabulary and examine alternative interpretations. Conversely, critics raise a compelling concern: outsourcing early brainstorming short-circuits the vital cognitive struggle through which young readers actually learn to interrogate texts and forge an authentic voice. If machines routinely supply topic sentences and word-level insights, students risk mistaking fluent automated polish for genuine comprehension. On balance, while tightly supervised feedback after drafting may hold modest value, Year 9 writers should first build independent analytical habits unaided before leaning on automated assistance.",
      markScheme: [
        {
          point: "Presents a credible, fair (steel-manned) argument supporting cautious AI use in planning (e.g. brainstorming, clarity, confidence, accessibility).",
          keywords: ["proponent", "advocat", "support", "brainstorm", "clarity", "confiden", "democratis", "sounding board", "blank-page", "benefit"],
        },
        {
          point: "Pivots clearly using a formal comparative/concessive discourse marker ('however', 'conversely', 'nevertheless', 'yet', 'admittedly', 'nonetheless').",
          keywords: ["conversely", "however", "nevertheless", "nonetheless", "admittedly", "however,", "yet"],
        },
        {
          point: "Develops a substantive counter-argument warning about cognitive dependence, loss of original voice, or superficial understanding.",
          keywords: ["critic", "risk", "outsourc", "dependen", "struggle", "authentic", "voice", "superficial", "cognitive", "independent", "plagiar"],
        },
        {
          point: "Closes with a balanced, nuanced concluding judgement in formal academic register ('on balance', 'ultimately', 'measured', 'supervised').",
          keywords: ["on balance", "ultimately", "conclud", "weigh", "supervis", "guid", "modest", "nuanc", "balanc"],
        },
      ],
      commonError: "Writing a one-sided persuasive rant with informal slang ('AI is totally cheating!') instead of weighing both perspectives formally.",
    },
    {
      id: "exam-reading-writing-q24",
      topicId: "power-conflict-poetry",
      guideRef: "imagery-sound-connotation",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "Read this short unseen poem titled *Typhoon Beacon*:\n\n'The concrete tower braces its white ribs\nagainst the fists of black, relentless foam;\nits sweeping beam slices the drowning dark\nto stitch lost trawlers safely back to home.'\n\nUsing WHAT–HOW–WHY, analyse how the poet contrasts **violent conflict imagery** with **imagery of care and protection**. (3 marks)",
      hints: [
        "Zoom into personified violence in lines 1–2: 'braces its white ribs', 'fists of black, relentless foam', and 'drowning dark'.",
        "Contrast that violent semantic field with the gentle domestic repair verb 'stitch' in line 4.",
        "Explain WHY the poet pairs martial conflict with mending: how does it redefine quiet endurance and rescue?",
      ],
      strategy: "Pair contrasting semantic fields (violence vs mending) inside WHAT–HOW–WHY.",
      modelAnswer:
        "The poet portrays rescue as quiet, steadfast defiance by setting aggressive storm imagery directly against a tender metaphor of repair. In the opening couplet, violent personification casts the typhoon as a merciless boxer throwing 'fists of black, relentless foam', while giving the lighthouse 'white ribs' makes the stone structure seem physically vulnerable as it 'braces' against impact. Yet in the closing line, the unexpected domestic verb 'stitch' transforms the harsh searchlight beam from a weapon that 'slices' darkness into a needle mending severed ties, implying that patient guidance quietly heals the chaos unleashed by nature.",
      markScheme: [
        {
          point: "Identifies the central thematic contrast between aggressive natural conflict and steadfast protection / mending.",
          keywords: ["contrast", "defian", "steadfast", "protect", "rescue", "repair", "mend", "heal", "vulnerab"],
        },
        {
          point: "Analyses violent storm/personification imagery ('fists', 'relentless', 'drowning dark', 'white ribs', 'braces').",
          keywords: ["personif", "boxer", "aggress", "violent", "merciless", "ribs", "fists", "impact", "chaotic", "chaos"],
        },
        {
          point: "Zooms into the contrasting domestic/protective verb 'stitch' (or shift from 'slices' to 'stitch') and its effect on meaning.",
          keywords: ["stitch", "needle", "domestic", "gentle", "tender", "slice", "guid", "sew", "transform"],
        },
      ],
      commonError: "Naming 'personification' without unpacking the striking contrast between violent 'fists' and gentle 'stitch'.",
    },
    {
      id: "exam-reading-writing-q25",
      topicId: "unseen-poetry-analysis",
      guideRef: "writing-high-band-unseen",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Read this complete unseen poem titled *The Red Pen*:\n\nAt first each crimson margin-mark felt sharp,\na barbed-wire fence around my crooked lines;\nI hid the page beneath my science file\nand swore to write only what felt safe.\n\nYet later, reading back, I saw those loops\nwere lanterns staked along a muddy bend—\nnot verdicts shouted at a closing gate,\nbut stepping-stones that taught my voice to cross.\n\nAnalyse how the poet uses **extended metaphor and a structural shift between Stanzas 1 and 2** to reshape the reader's view of criticism and revision. (4 marks)",
      hints: [
        "Compare the metaphors in Stanza 1 ('sharp', 'barbed-wire fence', 'hid') with Stanza 2 ('lanterns', 'stepping-stones').",
        "Spot the clear volta signalled by 'Yet later' at the start of Stanza 2.",
        "Explain how contrasting 'verdicts shouted at a closing gate' with 'taught my voice to cross' reframes feedback from punishment into growth.",
      ],
      strategy: "Track metaphorical transformation across the volta (Stanza 1 → Stanza 2).",
      modelAnswer:
        "Through a sharp structural volta between two balanced four-line stanzas, the poet reframes critical feedback from humiliating punishment into liberating guidance. In Stanza 1, hostile confinement imagery casts red ink as 'sharp' and a 'barbed-wire fence', exposing how shame traps young writers into timid conformity—writing 'only what felt safe' rather than taking creative risks. Crucially, the stanza break and discourse pivot 'Yet later' mark a reflective emotional turn: Stanza 2 transforms the exact same ink loops into warm, directional journey metaphors—'lanterns' lighting a 'muddy bend' and 'stepping-stones'. By contrasting finality ('verdicts' at a 'closing gate') against forward movement ('taught my voice to cross'), the poet urges readers to embrace revision not as failure, but as the bridge to artistic confidence.",
      markScheme: [
        {
          point: "Identifies the structural volta / shift between Stanza 1 and Stanza 2 ('Yet later') transforming shame into mature reflection.",
          keywords: ["volta", "shift", "turn", "yet later", "stanza", "reframe", "transform", "pivot"],
        },
        {
          point: "Analyses Stanza 1's defensive/hostile imagery ('barbed-wire fence', 'sharp', 'safe') showing fear, shame, or creative timidity.",
          keywords: ["barbed", "fence", "confine", "hostile", "shame", "fear", "timid", "punish", "trap", "conform"],
        },
        {
          point: "Analyses Stanza 2's journey/illumination metaphors ('lanterns', 'stepping-stones') portraying feedback as active guidance and growth.",
          keywords: ["lantern", "stepping-stone", "stepping stone", "journey", "guid", "illuminat", "light", "bridge", "growth"],
        },
        {
          point: "Evaluates the closing contrast ('verdicts... closing gate' vs 'taught my voice to cross') and the writer's broader message about revision.",
          keywords: ["verdict", "final", "gate", "contrast", "voice", "confiden", "revis", "failure", "liber"],
        },
      ],
      commonError: "Explaining what red pen marks are in school without tracking how the metaphor deliberately transforms across the stanza break.",
    },
  ],
};
