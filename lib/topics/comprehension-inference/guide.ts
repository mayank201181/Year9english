import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "comprehension-inference",
  title: "Reading Comprehension, Inference & Synthesis",
  strand: "Reading & Exam Craft",
  icon: "🧠",
  summary: "Read between the lines with surgical precision: separate facts from inferences, decode tone and bias, analyse non-fiction craft, and synthesise paired texts.",
  intro:
    "Strong Year 9 readers do not merely hunt for words that match a question — they interrogate **how** a writer shapes belief, feeling, and judgement. Across articles, speeches, travel writing, and opinion columns, the best exam answers combine **explicit accuracy**, **evidence-backed inference**, **nuanced tone vocabulary**, and **concise cross-text synthesis** in your own words.",
  guide: [
    // =========================================================================
    // SECTION 1: retrieval-vs-inference
    // =========================================================================
    {
      id: "retrieval-vs-inference",
      heading: "Explicit Retrieval vs Deep Inference",
      discovery: {
        problem:
          'Read this two-sentence journal entry carefully:\n\n*"The brochure promised an unspoiled mountain village; we arrived to a row of neon souvenir stalls and a queue of idling coaches. My father folded the map neatly, slid it back into his pocket without a word, and stared out at the car park."*\n\n**Before reading on:** Which detail is *explicitly stated* (fact on the page), and what can you *infer* about how the father feels — even though the word "disappointed" never appears?',
        idea:
          "**Explicit facts** sit directly on the page: there are neon souvenir stalls, idling coaches, and the father folds the map silently. **Inference** reads the unspoken meaning underneath: his silence, the controlled folding of the map, and staring blankly at the car park imply quiet deflation — his high expectations of a peaceful retreat have been punctured, yet he restrains an angry outburst.",
      },
      body:
        "Every comprehension paper tests two distinct gears of reading: **explicit retrieval** (locating facts stated directly in the text) and **inference** (deducing unstated emotions, motives, relationships, or consequences from textual clues).\n\n" +
        "### The Two Gears of Reading\n" +
        "| Reading Gear | What It Asks You To Do | Signal Verbs in Questions | Common Trap |\n" +
        "|---|---|---|---\n" +
        "| **Explicit Retrieval** | Locate stated facts, figures, or reasons directly on the page | *List, identify, state, according to paragraph 2…* | Guessing from outside knowledge instead of checking the exact line |\n" +
        "| **Deep Inference** | Deduce implied feelings, attitudes, motives, or subtext from clues | *What does this suggest / imply / reveal about…? Why might…?*\n | Merely paraphrasing the literal action without explaining the deeper implication |\n\n" +
        "### How to Build a Watertight Inference (ICE)\n" +
        "A high-band inference is never a wild guess — it is a logical deduction anchored to **micro-quotations** (1–4 key words woven smoothly into your own sentence):\n" +
        "1. **Imply (Claim):** State the precise unstated feeling, motive, or tension using tentative analytical verbs (*implies, suggests, hints, betrays, reveals*).\n" +
        "2. **Clue (Embedded Evidence):** Embed the exact word, gesture, or contrast that triggers your reading — not a three-line block quote.\n" +
        "3. **Explain (Subtext):** Unpack *why* that specific detail points to your inference (consider connotations, silence, hesitation, or contrast with expectations).\n\n" +
        "> **Year 9 Upgrade:** Never confuse *inference* with *invention*. If you infer that the father in the journal entry is " +
        "\"going to demand a refund and storm off\", you have invented a plot event with zero textual evidence. If you infer that his wordless folding of the map **suggests restrained disappointment**, every word of your claim is grounded in the text.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Inference Iceberg showing explicit facts above the waterline and inferred emotions, motives and subtext below">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<rect x="16" y="102" width="528" height="132" rx="8" fill="var(--brand-soft)" opacity="0.55"/>' +
        '<line x1="16" y1="102" x2="544" y2="102" stroke="var(--brand)" stroke-width="2" stroke-dasharray="6 4"/>' +
        '<polygon points="155,24 225,102 85,102" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>' +
        '<polygon points="85,102 225,102 260,220 50,220" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>' +
        '<text x="155" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">EXPLICIT</text>' +
        '<text x="155" y="86" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Facts on the page</text>' +
        '<text x="155" y="138" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">INFERENCE</text>' +
        '<text x="155" y="156" text-anchor="middle" font-size="10.5" fill="var(--ink)">Feelings &amp; motives</text>' +
        '<text x="155" y="174" text-anchor="middle" font-size="10.5" fill="var(--ink)">Unspoken tension</text>' +
        '<text x="155" y="192" text-anchor="middle" font-size="10.5" fill="var(--ink)">Writer&#39;s hidden judgement</text>' +
        '<rect x="290" y="20" width="242" height="70" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="304" y="40" font-size="11.5" font-weight="800" fill="var(--ink)">1. Retrieval (Above the Line)</text>' +
        '<text x="304" y="58" font-size="10.5" fill="var(--ink-2)">Stated directly: dates, actions, facts.</text>' +
        '<text x="304" y="74" font-size="10.5" fill="var(--ink-2)">Check: can I point to the exact line?</text>' +
        '<rect x="290" y="116" width="242" height="106" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="304" y="136" font-size="11.5" font-weight="800" fill="var(--brand)">2. Inference (Below the Line)</text>' +
        '<text x="304" y="154" font-size="10.5" fill="var(--ink)">Deduce what is implied, not stated.</text>' +
        '<text x="304" y="172" font-size="10.5" fill="var(--ink-2)">Formula: Clue + Connotation = Insight</text>' +
        '<text x="304" y="190" font-size="10.5" fill="var(--good)" font-weight="700">&#x2713; Embed 1–4 word micro-quotes</text>' +
        '<text x="304" y="208" font-size="10.5" fill="var(--bad)" font-weight="700">&#x2717; Never invent unsupported plot</text>' +
        '</svg>',
      diagramCaption: "Explicit facts sit on the surface; deep inference links textual clues beneath the waterline without drifting into speculation.",
      workedExamples: [
        {
          title: "Separating literal action from inferred emotion",
          problem:
            'Extract: *"When the head of expedition praised the team’s ‘effortless harmony’, Priya glanced at the cracked compass on the table and adjusted her cuff without meeting anyone’s eye."* What can a reader infer about Priya’s true view of the expedition?',
          steps: [
            "Spot the explicit surface actions: the leader praises 'effortless harmony'; Priya looks at a cracked compass, fiddles with her cuff, and avoids eye contact.",
            "Examine the symbolic clue: a 'cracked compass' suggests lost direction or underlying damage, clashing sharply with 'effortless harmony'.",
            "Read the body language: adjusting her cuff and avoiding eye contact imply discomfort and suppressed disagreement — she does not believe the team is truly harmonious, yet chooses not to contradict the leader publicly.",
            "Embed micro-quotations cleanly into an analytical sentence using tentative verbs ('implies', 'suggests').",
          ],
          answer:
            "Priya’s glance at the 'cracked compass' and refusal to meet 'anyone’s eye' imply quiet scepticism: she privately doubts the leader’s claim of 'effortless harmony', recognising hidden fractures in the team that she feels reluctant to voice aloud.",
          yourTurn: {
            question:
              'Read the extract: *"Three times during the council meeting, Mr Tan underlined the word ‘temporary’ on the new car-park plan until the nib snapped."* Is the statement "Mr Tan doubts the car park will truly remain temporary" an **explicit** fact or an **inference**? (Type `explicit` or `inference`.)',
            answer: {
              type: "text",
              accept: ["inference", "inferred", "implicit"],
              display: "inference",
            },
            solution:
              "It is an **inference**. The text explicitly states that he underlined 'temporary' three times until the nib snapped, from which we deduce his frustration and scepticism that the plan is genuinely temporary.",
          },
        },
        {
          title: "Avoiding over-speculation in inference questions",
          problem:
            'Extract: *"By November, the conservatory heaters hissed all afternoon, yet frost still feathered the inside of the glass."* Why is "the gardener forgot to pay the heating bill" a weak inference, and what is a stronger one?',
          steps: [
            "Check the explicit clue: the heaters 'hissed all afternoon', proving the heating IS turned on and running.",
            "Spot why the bill theory fails: it contradicts the evidence and invents a character (a gardener) who is not even mentioned.",
            "Combine the two real clues ('hissed all afternoon' + 'yet frost still feathered the inside'): the heating is working hard but failing against extreme cold or poor insulation.",
            "Formulate a disciplined inference grounded strictly in the text.",
          ],
          answer:
            "The claim about an unpaid bill contradicts the clue that the heaters 'hissed all afternoon'. A grounded inference is that the winter cold is unusually harsh — or the conservatory is poorly insulated — because even continuous heating cannot stop frost forming indoors.",
        },
      ],
      keyPoints: [
        "**Explicit retrieval** checks stated facts; **inference** uncovers implied emotions, motives, and subtext.",
        "Always check whether a question asks *what* happened (retrieval) or *what this suggests/implies* (inference).",
        "Anchor every inference to **1–4 word embedded micro-quotations**, not unwieldy multi-sentence copies.",
        "Use tentative analytical verbs (*implies, suggests, hints, betrays*) rather than absolute claims (*proves 100%*).",
        "Stay on the leash of the text: deduce what clues justify, never invent extra backstory.",
      ],
      whyItWorks:
        "Writers in non-fiction and literary prose deliberately rely on **subtext** — showing a snapped pen nib or a folded map rather than announcing 'he was angry'. Examiners award higher bands when you prove you can reconstruct that unstated meaning using the writer's exact verbal clues.",
      strategies: [
        "The **ICE check** (Imply → Clue → Explain)",
        "The **Contradiction Test** (reject any inference that clashes with an explicit detail)",
        "**Body-language & contrast radar** (watch for silences, gestures, and gaps between words and actions)",
      ],
      thinkDeeper:
        "Why can two readers sometimes make slightly different inferences from the same line — and what separates two *valid* competing inferences from a *wrong* one?",
    },

    // =========================================================================
    // SECTION 2: attitude-tone-bias
    // =========================================================================
    {
      id: "attitude-tone-bias",
      heading: "Evaluating Writer's Attitude, Tone & Perspective",
      discovery: {
        problem:
          'Compare two headlines about the exact same city policy:\n- **Headline A:** *"Council Slaps Commuters with Punishing New Congestion Tax"*\n- **Headline B:** *"City Introduces Clean-Air Levy to Protect Children’s Lungs"*\n\n**Before reading on:** Both headlines report a new road charge. Identify **two loaded words** in each headline and explain how each writer wants the reader to judge the policy.',
        idea:
          "Headline A uses **'Slaps'** (aggressive, unfair blow) and **'Punishing'** (cruel penalty) to create an **indignant, hostile** tone against the council. Headline B chooses **'Clean-Air Levy'** (positive purpose, softer than 'tax') and **'Protect Children’s Lungs'** (moral urgency) to craft an **approving, urgent** tone. Same event — completely different perspective and bias.",
      },
      body:
        "In Year 9 English, labelling a writer’s tone as \"positive\", \"negative\", \"happy\", or \"sad\" caps your marks. Top-band readers pinpoint **exact attitude adjectives** and explain **how** word choice (diction), irony, register, and selection of detail reveal the writer’s stance — including any **bias**.\n\n" +
        "### Your Year 9 Nuanced Tone Toolkit\n" +
        "| Tone Word | Precise Meaning | Verbal Clues on the Page |\n" +
        "|---|---|---|\n" +
        "| **Sardonic** | Grimly mocking, cynical, darkly amused | Dry understatement, sneering inverted commas (*‘progress’*), biting irony |\n" +
        "| **Reverent** | Deeply respectful, awestruck, admiring | Elevated vocabulary (*cathedral, hushed, sacred*), gentle cadence, sensory awe |\n" +
        "| **Sceptical** | Doubtful, questioning, unconvinced | Probing questions, hedging (*supposedly, claims*), highlighting gaps in proof |\n" +
        "| **Urgent** | Pressing, alarmed, demanding swift action | Short imperatives, countdown statistics, present-tense crisis imagery |\n" +
        "| **Nostalgic** | Wistfully fond of the past, bittersweet | Warm sensory memories, soft contrasts between *then* and *now* |\n" +
        "| **Detached / Objective** | Impartial, balanced, matter-of-fact | Neutral verbs (*reported, noted*), both sides represented, minimal emotion |\n\n" +
        "### Detecting Bias & Perspective\n" +
        "Bias is a writer’s **unbalanced slant** toward one viewpoint. Look for four telltale fingerprints:\n" +
        "- **Loaded diction:** Choosing emotionally charged synonyms (*scheme* vs *plan*; *mob* vs *crowd*; *clings to* vs *upholds*).\n" +
        "- **Selective omission:** Presenting only statistics or witnesses from one side while ignoring counter-evidence.\n" +
        "- **Scare quotes & irony:** Wrapping an opponent’s term in quotation marks (e.g. *the company’s ‘eco-friendly’ concrete*) to signal disbelief.\n" +
        "- **Register shift:** Switching suddenly from formal academic prose to colloquial mockery (*\"naturally, the committee decided to form another committee\"*) to deflate a target.\n\n" +
        "> **Watch for Tone Shifts!** Sophisticated articles rarely stay on one note from start to finish. A travel writer might open in a **nostalgic** register, turn **sardonic** when describing tourist traps, and close with an **urgent** plea for conservation.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nuanced Tone and Bias Compass mapping critical, reflective, objective, and passionate writer attitudes">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Nuanced Tone &amp; Attitude Compass</text>' +
        '<line x1="80" y1="132" x2="480" y2="132" stroke="var(--line)" stroke-width="2"/>' +
        '<line x1="280" y1="44" x2="280" y2="224" stroke="var(--line)" stroke-width="2"/>' +
        '<text x="280" y="40" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">HIGH EMOTIONAL HEAT</text>' +
        '<text x="280" y="238" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink-2)">COOL / MEASURED DISTANCE</text>' +
        '<text x="44" y="136" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">CRITICAL</text>' +
        '<text x="516" y="136" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">APPROVING</text>' +
        '<rect x="96" y="56" width="154" height="58" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>' +
        '<text x="173" y="76" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--bad)">Indignant / Urgent</text>' +
        '<text x="173" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">Imperatives, alarm, loaded</text>' +
        '<text x="173" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">verbs demanding change</text>' +
        '<rect x="310" y="56" width="154" height="58" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="387" y="76" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">Reverent / Passionate</text>' +
        '<text x="387" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">Elevated diction, awe,</text>' +
        '<text x="387" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">celebratory imagery</text>' +
        '<rect x="96" y="150" width="154" height="60" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="173" y="170" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">Sardonic / Sceptical</text>' +
        '<text x="173" y="188" text-anchor="middle" font-size="10" fill="var(--ink)">Dry irony, scare quotes,</text>' +
        '<text x="173" y="200" text-anchor="middle" font-size="10" fill="var(--ink)">probing doubt</text>' +
        '<rect x="310" y="150" width="154" height="60" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="387" y="170" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Nostalgic / Objective</text>' +
        '<text x="387" y="188" text-anchor="middle" font-size="10" fill="var(--ink-2)">Wistful memory OR calm,</text>' +
        '<text x="387" y="200" text-anchor="middle" font-size="10" fill="var(--ink-2)">balanced impartiality</text>' +
        '<circle cx="280" cy="132" r="7" fill="var(--brand)"/>' +
        '</svg>',
      diagramCaption: "Map a writer’s attitude along two axes: stance (critical vs approving) and heat (passionate vs cool/measured).",
      workedExamples: [
        {
          title: "Distinguishing sardonic irony from sincere praise",
          problem:
            'Extract: *"After six months of ‘urgent consultation’, the rail operator unveiled its bold solution to overcrowded platforms: a freshly painted yellow line instructing commuters to stand closer together."* Identify the writer’s tone and explain two methods that create it.',
          steps: [
            "Spot the ironic gap between grand claims ('urgent consultation', 'bold solution') and a trivial outcome (a painted yellow line).",
            "Notice the scare quotes around 'urgent consultation', signalling disbelief that the consultation was genuinely urgent.",
            "Analyse the anticlimactic reveal after the colon: building expectation before puncturing it creates dry mockery.",
            "Choose the sharpest tone word: not merely 'angry', but **sardonic** (or wryly mocking / sceptical).",
          ],
          answer:
            "The writer adopts a **sardonic** tone. Putting 'urgent consultation' in ironic quotation marks undermines the operator’s sincerity, while the colon sets up a mocking anticlimax — reducing a 'bold solution' to a mere 'freshly painted yellow line' to expose corporate inadequacy.",
          yourTurn: {
            question:
              'Read this extract: *"Beneath the vaulted cedar ceiling, even hurried tourists lower their voices to a whisper, as though stepping onto borrowed ground."* Which single tone word best describes the writer’s attitude here: `sardonic`, `reverent`, `sceptical`, or `urgent`?',
            answer: {
              type: "text",
              accept: ["reverent", "awe", "reverential"],
              display: "reverent",
            },
            solution:
              "**Reverent**. Diction like 'vaulted cedar ceiling', 'whisper', and 'borrowed ground' conveys deep, quiet respect and awe.",
          },
        },
        {
          title: "Tracking a mid-paragraph tone shift",
          problem:
            'Extract: *"I still remember the warm hiss of steamed buns on Kampong Street and the clink of ceramic cups at dawn. Today, however, a glass shopping atrium seals that corner in refrigerated silence."* How does the writer’s tone shift?',
          steps: [
            "Examine sentence 1: 'warm hiss', 'clink of ceramic cups', and 'I still remember' create an affectionate, **nostalgic** sensory warmth.",
            "Spot the structural pivot: 'Today, however' introduces a sharp temporal contrast.",
            "Examine sentence 2: 'glass', 'seals', and 'refrigerated silence' evoke sterility and coldness, shifting the tone to **regretful / quietly critical**.",
            "Frame your answer around the contrast between past vitality and present sterility.",
          ],
          answer:
            "The tone shifts from **nostalgic** warmth — evoked through intimate sensory details like 'warm hiss' and 'clink' — to **regretful disapproval** after 'Today, however', where 'seals' and 'refrigerated silence' make the modern redevelopment feel clinical and lifeless.",
        },
      ],
      keyPoints: [
        "Replace vague labels (*positive/negative*) with precise tone words (*sardonic, reverent, sceptical, urgent, nostalgic, detached*).",
        "**Perspective** is *where* the writer stands (insider, critic, eyewitness); **tone** is the *voice* they adopt; **bias** is an *unbalanced slant*.",
        "Spot bias through **loaded diction**, **selective omission**, **scare quotes**, and **one-sided evidence**.",
        "Always check for **tone shifts** triggered by pivots like *yet, however, today, admittedly*.",
        "Irony means the literal words say the opposite of the implied attitude — never read ironic praise at face value!",
      ],
      whyItWorks:
        "No non-fiction text is a neutral mirror of reality. Every noun, verb, and adjective carries **connotations** that nudge the reader’s sympathy. Naming the precise tone and unpacking the lexical choices proves you understand the writer’s deliberate persuasion rather than falling for it.",
      strategies: [
        "**The Synonym Swap Test** (replace a writer’s word with a neutral synonym — e.g. *'slaps'* → *'introduces'* — to expose bias instantly)",
        "**TAP-B Scan** (Tone, Audience, Purpose, Bias)",
        "**Pivot Hunting** (circle *yet, however, supposedly, meanwhile* to spot tone shifts)",
      ],
      thinkDeeper:
        "Can a writer be strongly opinionated without being unfairly biased? What makes a rigorous argument different from manipulative propaganda?",
    },

    // =========================================================================
    // SECTION 3: nonfiction-language-structure
    // =========================================================================
    {
      id: "nonfiction-language-structure",
      heading: "Analysing Non-Fiction Language & Structure",
      discovery: {
        problem:
          'Imagine an opinion article about youth sleep deprivation. It opens with a 4-line story about Maya, a 14-year-old staring at her ceiling at 1:17 a.m., then moves to a national survey showing 68% of teenagers sleep under seven hours, then quotes a neuroscientist, and finally returns in the last sentence to Maya’s alarm ringing at 6:00 a.m.\n\n**Before reading on:** Why did the writer begin with Maya instead of starting straight away with "68% of teenagers", and what is the effect of returning to Maya’s alarm at the end?',
        idea:
          "Opening with a **human anecdote** builds immediate empathy so the later **statistic (68%)** feels personal rather than abstract. Returning to Maya’s 6:00 a.m. alarm creates a **cyclical structure**, trapping the reader in her exhaustion and reinforcing that the problem remains unresolved until action is taken.",
      },
      body:
        "Non-fiction writers — journalists, speechwriters, and travel writers — engineer both **micro-level language** (individual words and rhetorical patterns) and **macro-level structure** (how ideas are sequenced from headline to final line).\n\n" +
        "### High-Value Non-Fiction Language Methods\n" +
        "- **Headline & Subheading:** Hooks curiosity using puns, alliteration, shock statistics, or bold framing before paragraph one even begins.\n" +
        "- **Personal Anecdote:** A brief true-life story that humanises an abstract issue and creates emotional closeness.\n" +
        "- **Statistics & Expert Testimony:** Builds authority and logical weight — especially potent right after an emotional anecdote.\n" +
        "- **Direct Address (*you, your*) & Inclusive Pronouns (*we, our*):** Pulls the reader off the sidelines and makes them share responsibility.\n" +
        "- **Rhetorical Questions & Imperatives:** Challenges complacency (*\"How many more warnings do we need?\"*) or urges immediate action (*\"Look up from your screen.\"*).\n" +
        "- **Sensory Imagery & Extended Metaphor:** Common in travel writing and broadsheet features — turns a place or argument into something vivid and memorable.\n\n" +
        "### High-Value Structural Moves\n" +
        "| Structural Feature | What Happens Across the Text | Analytical Effect to Explain |\n" +
        "|---|---|---|\n" +
        "| **Zoom In → Zoom Out** | Opens on one individual/moment, then widens to society or history | Hooks empathy first, then proves the issue is widespread |\n" +
        "| **Contrast / Juxtaposition** | Places opposing images, eras, or viewpoints side by side | Sharpens inequality, hypocrisy, or dramatic change |\n" +
        "| **Counter-Argument & Turn** | Acknowledges the rival view (*\"Critics argue…\"*) before dismantling it | Makes the writer appear fair-minded while strengthening their thesis |\n" +
        "| **Pace & Paragraph Length** | Long detailed paragraph followed by a single-line paragraph | Creates a sudden jolt, spotlighting a crucial truth |\n" +
        "| **Cyclical Ending** | Echoes an opening image, phrase, or scenario in the final line | Gives polished closure OR suggests a stubbornly repeating cycle |\n\n" +
        "> **Avoid Empty Effects!** Never write *\"this makes the reader want to read on\"* or *\"this grabs the reader’s attention\"*. Instead, specify the exact cognitive or emotional shift: *\"the sudden single-sentence paragraph halts the brisk list of profits, forcing the reader to confront the human cost.\"*",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Non-Fiction Structural Arc from Headline and Anecdote through Evidence and Counterpoint to Cyclical Ending">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Non-Fiction Structural Architecture</text>' +
        '<rect x="24" y="48" width="114" height="96" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="81" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">1. Hook</text>' +
        '<text x="81" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Headline &amp; vivid</text>' +
        '<text x="81" y="102" text-anchor="middle" font-size="10" fill="var(--ink)">anecdote (zoom in)</text>' +
        '<text x="81" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Creates empathy</text>' +
        '<rect x="156" y="48" width="114" height="96" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="213" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">2. Scale Up</text>' +
        '<text x="213" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Statistics &amp; expert</text>' +
        '<text x="213" y="102" text-anchor="middle" font-size="10" fill="var(--ink)">data (zoom out)</text>' +
        '<text x="213" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Builds authority</text>' +
        '<rect x="288" y="48" width="114" height="96" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="345" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">3. Pivot</text>' +
        '<text x="345" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Counter-view &amp;</text>' +
        '<text x="345" y="102" text-anchor="middle" font-size="10" fill="var(--ink)">sharp contrast</text>' +
        '<text x="345" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Shows balance</text>' +
        '<rect x="420" y="48" width="116" height="96" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="478" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">4. Closing</text>' +
        '<text x="478" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Cyclical call-back</text>' +
        '<text x="478" y="102" text-anchor="middle" font-size="10" fill="var(--ink)">&amp; call to action</text>' +
        '<text x="478" y="124" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Leaves lasting jolt</text>' +
        '<line x1="138" y1="96" x2="154" y2="96" stroke="var(--ink)" stroke-width="2"/>' +
        '<polygon points="154,96 148,92 148,100" fill="var(--ink)"/>' +
        '<line x1="270" y1="96" x2="286" y2="96" stroke="var(--ink)" stroke-width="2"/>' +
        '<polygon points="286,96 280,92 280,100" fill="var(--ink)"/>' +
        '<line x1="402" y1="96" x2="418" y2="96" stroke="var(--ink)" stroke-width="2"/>' +
        '<polygon points="418,96 412,92 412,100" fill="var(--ink)"/>' +
        '<path d="M 478 148 C 478 214, 81 214, 81 148" fill="none" stroke="var(--brand)" stroke-width="2" stroke-dasharray="5 4"/>' +
        '<polygon points="81,148 76,156 86,156" fill="var(--brand)"/>' +
        '<rect x="184" y="182" width="192" height="28" rx="6" fill="var(--surface)" stroke="var(--brand)"/>' +
        '<text x="280" y="200" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Cyclical Echo links End &#x2192; Opening</text>' +
        '</svg>',
      diagramCaption: "Strong non-fiction balances micro-language with macro-structure, shifting smoothly between human story, data, contrast, and cyclical closure.",
      workedExamples: [
        {
          title: "Analysing language + structure together in travel writing",
          problem:
            'Extract: *"For three hours the night train rattled across salt flats as pale as bone, every carriage humming with snoring passengers, steaming flasks, and shuffling cards. Then the brakes shrieked. Silence."* Analyse how the writer uses language and structure to create atmosphere.',
          steps: [
            "Look at sentence 1’s length and rhythm: a long, flowing sentence packed with sensory triplets ('snoring passengers, steaming flasks, and shuffling cards') mirrors the steady, lulling motion of the train.",
            "Zoom into a vivid simile: 'pale as bone' introduces an eerie, skeletal chill to the landscape outside.",
            "Analyse the structural jolt: two abrupt sentences ('Then the brakes shrieked. Silence.') shatter the rhythm.",
            "Explain the reader effect: the sudden minor sentence 'Silence.' strips away warmth and forces the reader to share the passengers’ abrupt alarm.",
          ],
          answer:
            "The writer builds lulling comfort through an expansive opening sentence listing warm cabin details ('steaming flasks', 'shuffling cards'), though the eerie simile 'pale as bone' hints at external bleakness. Structurally, this rhythm is violently ruptured by the harsh verb 'shrieked' and the stark one-word minor sentence 'Silence.', jolting the reader from cosy motion into uneasy suspense.",
          yourTurn: {
            question:
              'An article about ocean plastic opens with a diver freeing a single sea turtle from a fishing net, then presents global tonnage statistics in paragraph 2, and ends in paragraph 6 by returning to the same diver watching the turtle swim away. What structural technique links the ending back to the opening? (2 words)',
            answer: {
              type: "text",
              accept: ["cyclical structure", "cyclical ending", "circular structure", "circular ending", "cyclical callback", "cyclical call-back"],
              display: "cyclical structure",
            },
            solution:
              "**Cyclical structure** (or cyclical ending / circular structure) — echoing the opening image at the close to frame the argument memorably.",
          },
        },
        {
          title: "Explaining why a writer combines direct address with statistics",
          problem:
            'Extract: *"Every minute, one million plastic bottles are bought worldwide — and three of them are probably sitting in your kitchen bin right now."* Why is this combination more persuasive than the statistic alone?',
          steps: [
            "Identify both methods: the global statistic ('one million plastic bottles') and the dash pivoting into direct address ('your kitchen bin right now').",
            "Explain the weakness of a huge statistic alone: 'one million' feels distant and abstract, easy for readers to ignore.",
            "Explain what the dash + 'your' does: it shrinks a global crisis straight into the reader’s home, removing emotional distance.",
          ],
          answer:
            "While the vast figure 'one million' establishes scale, huge numbers can feel impersonal. The dash pivots sharply into direct address ('your kitchen bin'), dragging a distant global statistic into the reader’s everyday life so they feel personally implicated.",
        },
      ],
      keyPoints: [
        "**Language** examines words, imagery, rhetorical questions, direct address, anecdotes, and data; **structure** examines sequence, shifts, pacing, and endings.",
        "Always link a technique to its **specific effect on this topic and reader**, never generic filler like *'makes the reader read on'*.",
        "Watch how **anecdote + statistic** work as a double act: empathy first, proof second.",
        "Notice shifts in **sentence or paragraph length** — a sudden short line creates emphasis, shock, or finality.",
        "In travel writing, examine how **sensory detail** and **contrast** reveal the writer’s attitude to a place.",
      ],
      whyItWorks:
        "Structure controls *when* the reader feels something; language controls *how* vividly they feel it. Analysing both together — especially at turning points like dashes, paragraph breaks, or cyclical endings — lifts an answer from feature-spotting into perceptive Year 9 literary criticism.",
      strategies: [
        "**WHAT–HOW–WHY** (What effect/idea? How does the writer craft it via language/structure? Why does it shape the reader’s response?)",
        "**Track the Arc** (Opening → Middle shift → Closing line)",
        "**Ban Generic Fillers** (replace *'engages the reader'* with precise verbs: *unsettles, implicates, reassures, indicts, immerses*)",
      ],
      thinkDeeper:
        "Why do skilled journalists often place a brief counter-argument in the middle of a persuasive column rather than ignoring opposing views altogether?",
    },

    // =========================================================================
    // SECTION 4: synthesis-summary
    // =========================================================================
    {
      id: "synthesis-summary",
      heading: "Concise Summary & Cross-Text Synthesis",
      discovery: {
        problem:
          'Read two short views on city cycling:\n- **Text A (1898 diary):** *"The bicycle grants ordinary clerks an intoxicating liberty; with two brass lamps and a map, the countryside belongs to anyone who can pedal."*\n- **Text B (2025 council report):** *"Commuter cycling cuts congestion and lowers household travel expenses, yet patchy bike-lane markings continue to deter nervous riders."*\n\n**Before reading on:** Write **one single sentence** in your own words comparing how Text A and Text B view cycling — without copying whole phrases.',
        idea:
          "Example synthesis: *While both writers celebrate cycling as an empowering, accessible form of travel, Text A frames it romantically as personal freedom into nature, whereas Text B treats it pragmatically as an urban transport solution still hindered by safety flaws.* Notice how both texts are woven together inside **one conceptual point** rather than dumped in two separate blocks.",
      },
      body:
        "Summary and cross-text synthesis reward **precision, concision, and conceptual grouping**. Whether you are summarising one non-fiction article or synthesising similarities and differences across two texts from different eras, examiners penalise copying chunks verbatim or writing two disconnected mini-summaries.\n\n" +
        "### The SIFT Method for Summary & Synthesis\n" +
        "1. **Spot the focus:** Underline the exact angle in the question (e.g. *differences in the writers’ experiences of crowds*, NOT everything in the passages).\n" +
        "2. **Isolate 3–4 crisp points per text:** Strip away anecdotes, rhetorical flourishes, and repetition — keep only core ideas and brief supporting details.\n" +
        "3. **Filter into shared themes (axes):** Pair Text A and Text B along common themes — such as *purpose, emotional reaction, practical obstacles, or tone* — instead of writing \"Text A says X. Text B says Y.\"\n" +
        "4. **Translate into your own words:** Paraphrase ideas briskly using precise abstract nouns (*freedom, anxiety, cost, infrastructure*) and comparative connectives.\n\n" +
        "### Upgrading Your Comparative Connectives\n" +
        "| Relationship | Weak Year 7 Phrasing | High-Band Year 9 Synthesis Phrasing |\n" +
        "|---|---|---|\n" +
        "| **Similarity** | *Also, both texts talk about…* | *Both writers converge on… / Similarly, each account highlights…* |\n" +
        "| **Direct Contrast** | *Text A says X. Text B says Y.* | *Whereas Text A frames… as…, Text B depicts it as… / Conversely,…* |\n" +
        "| **Nuanced Overlap** | *They are a bit the same and different.* | *Although both recognise…, they diverge sharply over…* |\n\n" +
        "> **Own-Words Rule:** Lifting a 10-word string from the passage proves you can copy, not that you understand. Keep quotations in synthesis **ultra-short** (1–3 words) or paraphrase completely when a pure summary asks for *your own words*.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-Text Synthesis Bridge diagram showing Text A and Text B filtering into shared themes and an integrated own-words comparison">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Cross-Text Synthesis Bridge (SIFT)</text>' +
        '<rect x="24" y="46" width="142" height="104" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="95" y="66" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Text A</text>' +
        '<text x="95" y="86" text-anchor="middle" font-size="10" fill="var(--ink-2)">Key fact / feeling 1</text>' +
        '<text x="95" y="104" text-anchor="middle" font-size="10" fill="var(--ink-2)">Key fact / feeling 2</text>' +
        '<text x="95" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Short proof (1–3 wds)</text>' +
        '<rect x="394" y="46" width="142" height="104" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="465" y="66" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Text B</text>' +
        '<text x="465" y="86" text-anchor="middle" font-size="10" fill="var(--ink-2)">Key fact / feeling 1</text>' +
        '<text x="465" y="104" text-anchor="middle" font-size="10" fill="var(--ink-2)">Key fact / feeling 2</text>' +
        '<text x="465" y="122" text-anchor="middle" font-size="10" fill="var(--ink-2)">Short proof (1–3 wds)</text>' +
        '<rect x="196" y="46" width="168" height="104" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
        '<text x="280" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">Shared Theme Axis</text>' +
        '<text x="280" y="88" text-anchor="middle" font-size="10" fill="var(--ink)">Group by concept:</text>' +
        '<text x="280" y="104" text-anchor="middle" font-size="10" fill="var(--ink)">e.g. Freedom, Safety,</text>' +
        '<text x="280" y="120" text-anchor="middle" font-size="10" fill="var(--ink)">Cost, Attitude</text>' +
        '<text x="280" y="138" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">whereas / similarly</text>' +
        '<line x1="166" y1="98" x2="194" y2="98" stroke="var(--brand)" stroke-width="2"/>' +
        '<polygon points="194,98 187,94 187,102" fill="var(--brand)"/>' +
        '<line x1="394" y1="98" x2="366" y2="98" stroke="var(--brand)" stroke-width="2"/>' +
        '<polygon points="366,98 373,94 373,102" fill="var(--brand)"/>' +
        '<line x1="280" y1="150" x2="280" y2="174" stroke="var(--good)" stroke-width="2"/>' +
        '<polygon points="280,174 275,167 285,167" fill="var(--good)"/>' +
        '<rect x="66" y="176" width="428" height="54" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="280" y="196" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">Integrated Own-Words Synthesis</text>' +
        '<text x="280" y="216" text-anchor="middle" font-size="10.5" fill="var(--ink)">Weave both texts per point &#x2022; Paraphrase cleanly &#x2022; Cut anecdotes &amp; filler</text>' +
        '</svg>',
      diagramCaption: "Synthesis is not two separate summaries glued together — filter both texts through shared thematic axes in your own words.",
      workedExamples: [
        {
          title: "Cutting fluff to write a crisp own-words summary",
          problem:
            'Passage: *"When our school swapped disposable plastic trays for washable steel plates in September, canteen waste fell by 42% within six weeks, students queued slightly faster because stacking was simpler, and although the kitchen had to install a second dishwasher, the catering manager expects the school to save S$4,000 a year."* Summarise the **three main effects** of the switch in one concise sentence using your own words.',
          steps: [
            "Filter out minor scene-setting ('in September', 'catering manager') and isolate the distinct effects.",
            "Effect 1: 'canteen waste fell by 42%' → major cut in rubbish / waste.",
            "Effect 2: 'queued slightly faster' → smoother, quicker service.",
            "Effect 3: 'install a second dishwasher... save S$4,000 a year' → long-term financial savings despite an initial equipment outlay.",
            "Compress all three into one fluent sentence in your own words.",
          ],
          answer:
            "Replacing single-use trays with reusable steel plates sharply reduced canteen waste, sped up queues, and is projected to lower annual costs despite the initial expense of extra washing equipment.",
          yourTurn: {
            question:
              'Look at these two paired claims about digital textbooks:\n- **Text A:** *"Tablets lighten students’ backpacks and update outdated maps overnight."*\n- **Text B:** *"Screens strain young eyes and tempt learners into constant notifications."*\nDoes the relationship between Text A and Text B represent **agreement**, **contrast**, or **chronology**? (Type one word.)',
            answer: {
              type: "text",
              accept: ["contrast", "contrasting", "difference", "disagreement"],
              display: "contrast",
            },
            solution:
              "**Contrast**. Text A highlights practical advantages (lighter bags, instant updates), whereas Text B focuses on physical strain and distraction.",
          },
        },
        {
          title: "Integrating two texts on a single thematic axis",
          problem:
            'Compare how both writers experience night markets:\n- **Text A:** *"At dusk the alley blooms with sizzling woks, laughter, and strings of amber bulbs; every stall feels like a neighbour’s kitchen."*\n- **Text B:** *"By eight o’clock the lane jams shoulder-to-shoulder beneath harsh floodlights, turning a simple supper into an exhausting obstacle course."*',
          steps: [
            "Choose two crisp shared axes: (1) lighting & sensory atmosphere, and (2) sense of community vs crowding.",
            "Pair the details directly using 'whereas' / 'in contrast': Text A’s 'amber bulbs' and 'neighbour’s kitchen' suggest warmth and intimacy; Text B’s 'harsh floodlights' and 'obstacle course' present the market as stressful and overwhelming.",
            "Write an integrated comparison rather than two separate paragraphs.",
          ],
          answer:
            "Both writers focus on the intense sensory energy of night markets after dark, yet their reactions diverge sharply: whereas Text A portrays a welcoming, communal haven lit by gentle 'amber bulbs', Text B depicts a claustrophobic ordeal under 'harsh floodlights' that turns eating into an 'obstacle course'.",
        },
      ],
      keyPoints: [
        "Always check the **exact focus** of a summary or synthesis question and discard irrelevant details.",
        "Paraphrase into **your own words** — lifting long stretches from the text loses summary marks.",
        "Group cross-text points by **shared theme** (*purpose, emotion, obstacle, attitude*), weaving both texts in every paragraph.",
        "Use crisp comparative connectives (*whereas, conversely, similarly, although both…*) to show exact relationships.",
        "Keep summaries tight and objective: leave out personal opinions and minor decorative examples.",
      ],
      whyItWorks:
        "Synthesis is the ultimate test of comprehension because you cannot merge two perspectives cleanly into one sentence unless you have truly understood both. Grouping by theme automatically eliminates repetitive 'Text A says… then Text B says…' summaries.",
      strategies: [
        "**SIFT Protocol** (Spot focus → Isolate core ideas → Filter into shared themes → Translate into own words)",
        "**The Two-Column Axis Plan** (jot 3 theme rows before writing a single word)",
        "**The 3-Word Quote Limit** (in synthesis, keep any embedded quote to 1–3 words so your own voice leads)",
      ],
      thinkDeeper:
        "If two texts appear to completely disagree on the surface, why is it often impressive to open a synthesis paragraph by identifying a subtle *shared premise* before exploring their divergence?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Explicit Retrieval",
        back: "Locating information stated directly on the page — facts, figures, or stated reasons — without guessing beyond the text.",
      },
      {
        front: "Inference",
        back: "Deducing unstated emotions, motives, attitudes, or implications by reading verbal, behavioural, or structural clues beneath the surface.",
      },
      {
        front: "Subtext",
        back: "The unspoken meaning lying beneath a speaker’s or writer’s literal words — often revealed through pauses, irony, or contradictions.",
      },
      {
        front: "Sardonic (Tone)",
        back: "Grimly mocking, cynical, or darkly amused — often signalled by dry understatement, bitter irony, or sceptical scare quotes.",
      },
      {
        front: "Reverent (Tone)",
        back: "Deeply respectful, awestruck, and admiring — often marked by elevated diction, hushed sensory detail, and calm rhythm.",
      },
      {
        front: "Sceptical (Tone)",
        back: "Doubtful and questioning — unconvinced by claims without firm evidence, using probing questions or hedging words like 'supposedly'.",
      },
      {
        front: "Urgent (Tone)",
        back: "Alarmed and pressing, demanding swift action through imperatives, tight rhythm, or crisis-focused statistics.",
      },
      {
        front: "Nostalgic (Tone)",
        back: "Wistfully affectionate toward the past, often contrasting warm sensory memories of 'then' with a colder or busier 'now'.",
      },
      {
        front: "Loaded Diction",
        back: "Emotionally slanted word choices (e.g. 'scheme' vs 'plan', 'slaps' vs 'introduces') that steer a reader’s judgement subtly.",
      },
      {
        front: "Selective Omission (Bias)",
        back: "Deliberately leaving out counter-arguments, rival data, or alternative witnesses to skew a reader’s perception.",
      },
      {
        front: "Anecdote",
        back: "A brief true-life story used in non-fiction to humanise an abstract topic and build immediate reader empathy.",
      },
      {
        front: "Cyclical Structure",
        back: "Ending a text by echoing its opening image, scenario, or phrase — creating polished unity or highlighting an unresolved cycle.",
      },
      {
        front: "Direct Address",
        back: "Speaking straight to the reader with second-person pronouns ('you', 'your') to break distance and create personal responsibility.",
      },
      {
        front: "Cross-Text Synthesis",
        back: "Combining and comparing ideas from two texts by shared theme in your own words, rather than summarising each text separately.",
      },
    ],
    mustKnow: [
      "Can you distinguish an explicit fact on the page from an inference — and reject speculative guesses?",
      "Can you build a 3-part ICE inference (Imply → embedded 1–4 word Clue → Explain connotation)?",
      "Can you name at least six nuanced tones (sardonic, reverent, sceptical, urgent, nostalgic, detached) accurately?",
      "Can you expose bias using the Synonym Swap Test on loaded diction and spot selective omission or scare quotes?",
      "Can you explain how a non-fiction writer combines anecdote, statistics, direct address, and rhetorical questions?",
      "Can you track structural shifts — zoom in/out, pace changes, counter-arguments, and cyclical endings — with specific effects?",
      "Can you summarise a passage concisely in your own words without copying chunks verbatim?",
      "Can you compare two texts inside integrated thematic paragraphs using connectives like 'whereas', 'conversely', and 'similarly'?",
      "Can you spot a mid-text tone shift signalled by pivots such as 'however', 'yet', or 'today'?",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'The tone is negative / positive / happy.'",
        right: "Write Instead ✅: Name the exact attitude — e.g. 'sardonic', 'sceptical', 'urgent', 'reverent', or 'nostalgic' — and tie it to specific word choices.",
      },
      {
        wrong: "Never Write ❌: 'This makes the reader want to read on / grabs attention.'",
        right: "Write Instead ✅: Pinpoint the exact cognitive or emotional shift — e.g. 'shocks the reader into confronting the hidden cost' or 'humanises the statistic'.",
      },
      {
        wrong: "Never Write ❌: Copying two full sentences from the passage to answer an own-words summary.",
        right: "Write Instead ✅: Paraphrase core ideas crisply in your own vocabulary, cutting anecdotes and decorative examples.",
      },
      {
        wrong: "Never Write ❌: Writing a full paragraph about Text A, then a separate disconnected paragraph about Text B.",
        right: "Write Instead ✅: Group points by shared theme and weave both texts together inside every paragraph using 'whereas', 'similarly', or 'conversely'.",
      },
      {
        wrong: "Never Write ❌: Treating ironic praise ('their brilliant latest delay') as genuine approval.",
        right: "Write Instead ✅: Test the literal words against the context — if the claim clashes with harsh reality, analyse the irony and sardonic mockery.",
      },
      {
        wrong: "Never Write ❌: Inventing plot events outside the passage ('he is going to quit his job tomorrow') and calling it inference.",
        right: "Write Instead ✅: Keep every inference tethered to an exact textual clue using tentative verbs ('implies', 'suggests', 'hints').",
      },
    ],
    examMistakes: [
      "Answering an **inference** question by simply repeating the literal event on the page without explaining what it implies.",
      "Copying long three-line quotations instead of embedding sharp 1–4 word micro-quotations.",
      "Missing a **tone shift** because you only read the opening paragraph and assumed the whole article stayed angry or nostalgic.",
      "Ignoring the exact scope of a summary question (e.g. summarising the whole article instead of only *the reasons visitors stay away*).",
      "Listing non-fiction techniques ('the writer uses a statistic and a rhetorical question') without explaining *how* they work together on the reader.",
      "Treating opinionated bias as objective fact instead of interrogating the writer’s loaded verbs and omitted counter-evidence.",
      "Comparing two texts only on surface facts while overlooking differences in **attitude, register, or perspective**.",
    ],
    mnemonics: [
      {
        topic: "Building a High-Band Inference",
        device: "ICE",
        explanation: "**I**mply (make a tentative claim) → **C**lue (embed a 1–4 word quotation) → **E**xplain (unpack the connotation or subtext).",
      },
      {
        topic: "Auditing Any Non-Fiction Text",
        device: "TAP-B",
        explanation: "**T**one (exact attitude), **A**udience (who is addressed?), **P**urpose (inform, persuade, critique, entertain?), **B**ias (loaded diction or omission?).",
      },
      {
        topic: "Concise Summary & Cross-Text Synthesis",
        device: "SIFT",
        explanation: "**S**pot the question focus → **I**solate core ideas → **F**ilter into shared theme axes → **T**ranslate cleanly into your own words.",
      },
    ],
    realWorld: [
      {
        title: "Spotting Media Spin Across News Outlets",
        detail: "Comparing two newspapers covering the same economic or climate story exposes immediately how headlines, passive verbs, and omitted statistics steer public opinion.",
        emoji: "📰",
      },
      {
        title: "Evaluating Product Reviews & Sponsored Posts",
        detail: "Detecting loaded adjectives, vague claims, and selective omission helps you tell genuine independent testing apart from disguised marketing.",
        emoji: "🔍",
      },
      {
        title: "Synthesising Research for Humanities & Science Reports",
        detail: "University essays and workplace briefings rely on merging multiple sources by theme in your own words without plagiarising chunks.",
        emoji: "📑",
      },
      {
        title: "Reading Subtext in Speeches & Interviews",
        detail: "Politicians and leaders often reveal far more through what they dodge, qualify, or put in careful phrasing than through their literal slogans.",
        emoji: "🎙️",
      },
    ],
    videos: [
      {
        title: "Inference vs Explicit Information — Reading Comprehension Skills",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=explicit+information+vs+inference+english+comprehension+gcse+ks3",
      },
      {
        title: "Writer's Tone, Attitude and Bias in Non-Fiction",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=writers+tone+attitude+and+bias+non+fiction+english+analysis",
      },
      {
        title: "How to Analyse Non-Fiction Language and Structure",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=analysing+non+fiction+language+and+structure+articles+speeches",
      },
      {
        title: "How to Write a Cross-Text Synthesis and Summary",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=synthesis+and+summary+comparing+two+non+fiction+texts+english",
      },
    ],
    formulas: [
      {
        name: "Explicit Retrieval",
        formula: "Directly stated fact on the page (no deduction required)",
        note: "Always verify against the exact line in the passage.",
      },
      {
        name: "Inference (ICE)",
        formula: "Textual Clue + Connotation / Context → Unstated Implication",
        note: "Use tentative verbs: implies, suggests, hints, reveals.",
      },
      {
        name: "Sardonic Tone",
        formula: "Biting, cynical mockery often disguised as dry irony or understatement",
        note: "Stronger and sharper than simply writing 'negative'.",
      },
      {
        name: "Reverent Tone",
        formula: "Hushed admiration and deep respect expressed through elevated imagery",
        note: "Often appears in travel writing about nature or heritage.",
      },
      {
        name: "Sceptical Tone",
        formula: "Questioning doubt that challenges weak proof or exaggerated claims",
        note: "Look for hedging ('supposedly', 'claims') and probing questions.",
      },
      {
        name: "Loaded Diction",
        formula: "Emotionally charged word chosen over a neutral synonym to trigger bias",
        note: "Test with the Synonym Swap (e.g. 'slaps' vs 'introduces').",
      },
      {
        name: "Selective Omission",
        formula: "Leaving out counter-evidence or rival perspectives to slant an argument",
        note: "Ask: 'Whose voice is missing from this article?'",
      },
      {
        name: "Cyclical Structure",
        formula: "Closing image or phrase intentionally echoes the opening",
        note: "Creates closure or stresses a trapped, repeating pattern.",
      },
      {
        name: "Juxtaposition",
        formula: "Placing two contrasting images, facts, or viewpoints side by side",
        note: "Magnifies differences in wealth, tone, era, or hypocrisy.",
      },
      {
        name: "Cross-Text Synthesis",
        formula: "Text A + Text B merged under one shared theme in your own words",
        note: "Use comparative connectives: whereas, conversely, similarly.",
      },
    ],
  },
};
