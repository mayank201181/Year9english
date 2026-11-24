import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "unseen-poetry-analysis",
  title: "Unseen Poetry Analysis (End-of-Year Exam)",
  strand: "Reading & Exam Craft",
  icon: "🔎",
  summary:
    "Conquer the Year 9 End-of-Year unseen poetry exam with a calm 5-minute protocol, sharp metaphor decoding, meaningful structure analysis, and top-band timed essays.",
  intro:
    "Turning over an exam paper to face a poem you have never seen before can make anyone freeze — unless you have a repeatable method. Examiners do **not** expect you to guess one secret \"hidden answer\"; they reward readers who calmly establish the poem's literal situation, track how the speaker's emotions shift across stanzas, unpack rich connotations, and write a focused argument without falling into feature-spotting. Master these four core skills and *any* unseen poem becomes manageable in five minutes.",
  guide: [
    // =========================================================================
    // SECTION 1: first-read-protocol
    // =========================================================================
    {
      id: "first-read-protocol",
      heading: "The 5-Minute Unseen Poetry Protocol",
      discovery: {
        problem:
          "Read this fresh unseen short poem twice before jumping to any techniques:\n\n**The Spare Key**\n*For twenty years it slept on the hall hook,*\n*brass dulled to the colour of cold tea,*\n*waiting for your boots to scrape the porch.*\n*Tonight I slipped it into the kitchen drawer —*\n*and still left the porch light burning.*\n\nAsk yourself: **What is literally happening here, where does the poem's emotional turning point (volta) happen, and what two conflicting emotions does the speaker feel?**",
        idea:
          "Literally, the speaker finally puts away a spare house key kept ready for twenty years for someone who is no longer coming home — **yet** leaves the porch light on anyway. The **volta** arrives on *\"Tonight\"* (action: letting go) and pivots *again* on the final dash *\"— and still\"* (lingering hope/grief). You understood the entire human heart of the poem in thirty seconds without naming a single literary device yet!",
      },
      body: `The number-one mistake students make in the Year 9 End-of-Year unseen poetry test is **panic-hunting techniques on the very first read**. If you underline *alliteration* in line 2 before you know who is speaking or what is happening, your essay collapses into disconnected spotting. Instead, follow a calm **Two-Pass, 5-Minute Protocol**:

### Pass 1 (Minutes 1–2): Read for Story, Speaker & Shift — Pen Down!

Read the poem silently **at punctuation speed** (pause at full stops and dashes, NOT automatically at line ends). Answer four grounding questions:

| Minute | Checkpoint | Questions to Ask Yourself |
|---|---|---|
| **Min 1** | **Title Clues** | Does the title name an object, time, place, or relationship? Does it create expectation that the ending confirms or undercuts? |
| **Min 2a** | **Literal Situation** | What is *actually* happening on the surface? (A walk in winter? Packing a room? Remembering a grandparent?) Never leap to symbolism before nailing the literal story. |
| **Min 2b** | **Speaker & Tone** | Who is speaking — and who is addressed? Name a **nuanced tone** (*wistful, defiant, rueful, tender, bitter, awestruck*) — never just *"sad"* or *"happy"*. |
| **Min 3** | **The Volta (Turning Point)** | Where does the mood, tense, perspective, or speaker's attitude shift? Circle pivot words like **Yet, But, Until, Now, Still, Tonight, However**. |

### Pass 2 (Minutes 4–5): Read for Deeper Theme & Craft — Pen Up!

Now that you know the poem's emotional arc, pick up your pen:

1. **Name the Deeper Theme / Big Idea:** Ask *What universal human experience is this small moment exploring?* (e.g. grief resisting closure; growing up and outgrowing home; nature outlasting human pride).
2. **Choose 3–5 Rich Anchor Quotations:** Pick **one near the opening**, **one around the volta**, and **one at the closing line**. Quality beats quantity every time.
3. **Separate Speaker from Poet:** Remember that the **"I"** in a poem is the **speaker** (or persona), not automatically the poet's diary. Say *"the speaker confesses"* and *"the poet crafts..."* to sound immediately mature and exam-ready.

> **Golden Exam Rule:** Never begin writing until you can complete this sentence in your head: *"On the surface this poem is about [literal situation], yet on a deeper level the poet explores [big idea] as the tone shifts from [opening mood] to [closing mood]."*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-minute unseen poetry protocol showing five sequential stages from title clues to literal story, speaker and tone, volta shift, and deeper theme">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The 5-Minute Unseen Poetry Protocol (Two Calm Passes)</text>
  <rect x="20" y="42" width="318" height="22" rx="6" fill="var(--brand-soft)" opacity="0.55"/>
  <text x="179" y="57" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">PASS 1: PEN DOWN — UNDERSTAND THE HUMAN STORY</text>
  <rect x="348" y="42" width="192" height="22" rx="6" fill="var(--good)" opacity="0.16"/>
  <text x="444" y="57" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">PASS 2: PEN UP — PLAN CRAFT</text>
  <rect x="20" y="76" width="96" height="114" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="68" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">1. Title</text>
  <text x="68" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink)">First frame</text>
  <text x="68" y="131" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Object / place</text>
  <text x="68" y="146" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">or irony?</text>
  <text x="68" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-2)">Min 1</text>
  <rect x="126" y="76" width="96" height="114" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="174" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">2. Literal</text>
  <text x="174" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink)">Surface story</text>
  <text x="174" y="131" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Who, where,</text>
  <text x="174" y="146" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">what happens?</text>
  <text x="174" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-2)">Min 2</text>
  <rect x="232" y="76" width="106" height="114" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="285" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">3. Speaker</text>
  <text x="285" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink)">Voice &amp; Tone</text>
  <text x="285" y="131" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Wistful, wry,</text>
  <text x="285" y="146" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">defiant, tender?</text>
  <text x="285" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-2)">Min 3</text>
  <rect x="348" y="76" width="92" height="114" rx="8" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="394" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">4. Volta</text>
  <text x="394" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink)">Turning point</text>
  <text x="394" y="131" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">But / Yet /</text>
  <text x="394" y="146" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Now / Still</text>
  <text x="394" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="var(--bad)">Min 4</text>
  <rect x="448" y="76" width="92" height="114" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="494" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">5. Theme</text>
  <text x="494" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink)">Big message</text>
  <text x="494" y="131" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">3–5 anchor</text>
  <text x="494" y="146" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">micro-quotes</text>
  <text x="494" y="176" text-anchor="middle" font-size="9" font-weight="700" fill="var(--good)">Min 5</text>
  <rect x="20" y="204" width="520" height="32" rx="7" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="280" y="224" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Rule: Read to the PUNCTUATION, never stop robotically at the end of every line.</text>
</svg>`,
      diagramCaption:
        "Two disciplined passes stop exam panic and guarantee you understand the whole poem before analysing single words.",
      workedExamples: [
        {
          title: "Running the 5-Minute Protocol on a Fresh Unseen Poem",
          problem:
            "Apply the 5-minute protocol to this unseen stanza pair:\n\n**Before the Demolition**\n*Wallpaper peels in curled brown waves,*\n*exposing pencilled height-marks by the door —*\n*six dated rungs where Maya grew.*\n\n*Outside, the yellow crane swings wide,*\n*its iron jaw impatient for the brick,*\n*yet still the doorway guards her tiny climb.*",
          steps: [
            "**Title Clue:** *'Before the Demolition'* immediately creates temporal urgency — a threshold moment right before erasure.",
            "**Literal Situation:** Someone stands inside a family home moments before a demolition crane tears it down, noticing pencilled childhood height-marks left on a doorway.",
            "**Speaker & Nuanced Tone:** Observant, tender, and **elegiac** (mournful yet reverent) in stanza 1, shifting to **tense and defiant** against mechanical destruction in stanza 2.",
            "**Volta (Turning Point):** Notice TWO pivots — *'Outside'* shifts focus from intimate interior memory to violent industrial machinery (*'iron jaw'*), while *'yet still'* in the closing line pivots back to emotional endurance.",
            "**Deeper Theme:** The fragility of physical homes versus the stubborn persistence of family memory against impersonal modern change.",
          ],
          answer:
            "Literal story: viewing childhood height-marks inside a house minutes before demolition. Tone shifts from tender nostalgia to threatened urgency, pivoting on 'yet still' to affirm how domestic memory resists mechanical erasure.",
          yourTurn: {
            question:
              "What Italian literary term names the emotional, tonal, or logical turning point in a poem (often signalled by words like 'Yet', 'But', 'Now', or 'Still')?",
            answer: {
              type: "text",
              accept: ["volta", "the volta", "a volta"],
              display: "volta",
            },
            solution:
              "A **volta** (Italian for *'turn'*) is the pivotal shift in tone, perspective, or argument inside a poem.",
          },
        },
        {
          title: "Upgrading Vague Tone Words to Nuanced Tone Words",
          problem:
            "Read these lines from a fresh unseen poem about an elderly clockmaker:\n\n*My fingers shake now on the tiny springs,*\n*yet every midnight chimes out sharp and true —*\n*a steady pulse I lent to brass and glass.*\n\nA student writes: *\"The speaker feels sad but also happy.\"* Replace *'sad'* and *'happy'* with **two precise, exam-grade tone adjectives** and justify each briefly.",
          steps: [
            "**Diagnose line 1 (*'My fingers shake now'*):** Rather than generic *'sad'*, the speaker acknowledges physical ageing with **wistful** or **candid / reflective** acceptance.",
            "**Diagnose lines 2–3 (*'yet every midnight chimes out sharp and true... a steady pulse I lent'*):** After the volta *'yet'*, the tone shifts to **quietly proud**, **resolute**, or **affectionate** — celebrating craft outliving the body.",
            "**Synthesise:** Naming the shift from *wistful vulnerability* to *quiet pride* instantly shows examiner-level sensitivity to nuance.",
          ],
          answer:
            "Upgrade 'sad' to 'wistful' (or 'reflective') on ageing hands, and 'happy' to 'quietly proud' (or 'resolute') after the volta 'yet', celebrating enduring craft.",
        },
      ],
      keyPoints: [
        "Always read an unseen poem **twice**: Pass 1 pen-down for human meaning; Pass 2 pen-up for anchor quotations and craft.",
        "Read to **punctuation marks** (full stops, semicolons, dashes) so enjambed sentences make immediate literal sense.",
        "Nail the **literal situation** first — symbolism always grows out of what physically happens in the poem.",
        "Hunt the **volta** (turning point) by scanning for shift words (*Yet, But, Now, Still, Until, Suddenly*) and changes in tense or setting.",
        "Always distinguish the **speaker/persona** from the **poet**, and replace flat words (*sad/happy*) with nuanced tone vocabulary (*wistful, sardonic, reverent, defiant, elegiac*).",
      ],
      whyItWorks:
        "Poems compress a human conflict into 10–30 lines. When you map Title → Literal Story → Tone → Volta → Theme first, your brain builds a mental coat-rack — every metaphor and structural choice you spot afterwards hangs cleanly onto a clear argument instead of floating as random feature-spotting.",
      strategies: [
        "Write a **6-word headline** beside each stanza summarising its mood (e.g. *S1: Quiet waiting; S2: Machine threatens; S3: Memory endures*).",
        "Box the **title** and draw an arrow from the title to the **very last line** — poets almost always make them speak to each other.",
        "Keep a pocket bank of 8 versatile tone adjectives: **wistful, elegiac, reverent, uneasy, defiant, sardonic, tender, resigned**.",
      ],
      thinkDeeper:
        "Why do poets frequently choose an **ordinary physical object** — a spare key, a scratched doorframe, a ticking clock — rather than writing directly about abstract nouns like 'grief' or 'time'?",
    },

    // =========================================================================
    // SECTION 2: decoding-imagery-ambiguity
    // =========================================================================
    {
      id: "decoding-imagery-ambiguity",
      heading: "Decoding Imagery, Connotations & Ambiguity",
      discovery: {
        problem:
          "Encounter this unfamiliar metaphor in an unseen exam poem about an older sibling leaving for university:\n\n*Your empty bedroom is a **museum of folded sleeves**.*\n\nYou have never studied this poem before. Before reading on, test this two-step question: **What literal qualities does a 'museum' have, and what layered, even contradictory feelings does that reveal about the sibling's departure?**",
        idea:
          "Literally, a **museum** is (1) hushed and reverent — preserving precious treasures nobody dares touch, yet (2) frozen in the past, lifeless, and slightly glassed-off. Applying those qualities to the bedroom reveals **layered ambiguity**: the speaker simultaneously treasures their sibling's memory *and* mourns how the lively room has turned cold and static!",
      },
      body: `Unseen poems deliberately throw metaphors at you that you cannot memorise beforehand. Fortunately, **every metaphor in English can be cracked with the exact same logical formula**:

### The Tenor–Vehicle Decoding Formula

Every metaphor compares a **Tenor** (the real subject, e.g. *an empty bedroom* or *winter wind*) to a **Vehicle** (the borrowed image, e.g. *a museum* or *a pickpocket*). Never paraphrase the image — unpack the **literal qualities** of the Vehicle:

1. **List 3 literal qualities of the Vehicle (X):** What does **X** look, sound, feel, or *do* in real life?
2. **Transfer those qualities onto the Tenor (Y):** What hidden emotion, attitude, or power dynamic does that reveal about **Y**?
3. **Check for Ambiguity (Layer 2):** Does the image carry a **second, contrasting connotation**? Top-band students love productive ambiguity!

| Unfamiliar Image | Vehicle Literal Qualities | Layer 1 Meaning | Layer 2 Ambiguity (Top-Band!) |
|---|---|---|---|
| *\"The city wore a **collar of smog**\"* | Collar = tight around the neck; restraint/leash; also formal work attire. | Suffocating pollution trapping residents like captives. | *Arguably* hints that urban workers voluntarily wear a corporate \"collar\" of obedience. |
| *\"Her forgiveness fell like **late snow**\"* | Snow = pure, soft, silent; *yet* cold, numb, and burying what lies underneath. | Gentle, quieting peace softening past conflict. | *Alternatively*, implies chilly emotional distance that covers hurt rather than healing it. |
| *\"The harbour **swallowed** the last ferry\"* | Swallowed = predatory hunger, vanishing completely into darkness. | The sea feels vast, menacing, and all-consuming. | *Yet* 'swallowed' can also suggest the harbour absorbing travellers back into silent mystery. |

### Mastering Connotation & Tentative Academic Phrasing

Words carry two layers: **denotation** (plain dictionary meaning) and **connotation** (emotional, cultural, and sensory associations). Compare *house* vs *home*, or *slid* vs *crept*:

- **Avoid rigid certainty:** Never write *"This proves 100% that the poet hates winter."*
- **Use tentative analytical verbs:** **suggests, implies, conveys, hints at, evokes, subtly intimates, could alternatively signify**.
- **Link sound devices to imagery (never in isolation!):**
  - **Sibilance (/s/, /sh/):** Can evoke soothing whispers *or* venomous sinister hiss — always check the surrounding context!
  - **Plosives (/p/, /b/, /t/, /d/, /k/, /g/):** Create abrupt, percussive force, hammering anger, or harsh mechanical impact.
  - **Fricatives (/f/, /v/, /th/):** Mimic breathy wind, exhaustion, or soft friction.

> **Examiner Secret:** Offering **two plausible, text-rooted interpretations** connected by *"Alternatively..."* or *"Simultaneously, the word may imply..."* is one of the fastest ways to jump into the very top mark band on an unseen poem.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metaphor decoding web showing Tenor plus Vehicle qualities branching into Layer 1 core connotation and Layer 2 nuanced ambiguity">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">The Metaphor &amp; Ambiguity Decoder (Zero Memorisation Needed)</text>
  <rect x="20" y="92" width="132" height="68" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="2"/>
  <text x="86" y="114" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">UNSEEN IMAGE</text>
  <text x="86" y="133" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">&quot;forgiveness fell</text>
  <text x="86" y="147" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">like late snow&quot;</text>
  <line x1="152" y1="126" x2="188" y2="126" stroke="var(--ink-2)" stroke-width="2"/>
  <rect x="188" y="76" width="144" height="100" rx="10" fill="var(--brand-soft)" opacity="0.4" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="260" y="98" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Vehicle Qualities</text>
  <text x="260" y="118" text-anchor="middle" font-size="10" fill="var(--ink)">• Soft, white, silent</text>
  <text x="260" y="135" text-anchor="middle" font-size="10" fill="var(--ink)">• Cold, numbing</text>
  <text x="260" y="152" text-anchor="middle" font-size="10" fill="var(--ink)">• Arrives &quot;late&quot;</text>
  <text x="260" y="168" text-anchor="middle" font-size="10" fill="var(--ink-2)">• Buries what lies below</text>
  <line x1="332" y1="104" x2="368" y2="82" stroke="var(--good)" stroke-width="2"/>
  <line x1="332" y1="148" x2="368" y2="170" stroke="var(--bad)" stroke-width="2"/>
  <rect x="368" y="44" width="172" height="72" rx="9" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="454" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Layer 1: Core Reading</text>
  <text x="454" y="82" text-anchor="middle" font-size="9.5" fill="var(--ink)">Suggests gentle, hushed</text>
  <text x="454" y="97" text-anchor="middle" font-size="9.5" fill="var(--ink)">peace quieting old anger.</text>
  <rect x="368" y="134" width="172" height="78" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="454" y="154" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Layer 2: Ambiguity</text>
  <text x="454" y="172" text-anchor="middle" font-size="9.5" fill="var(--ink)">Alternatively implies cold,</text>
  <text x="454" y="187" text-anchor="middle" font-size="9.5" fill="var(--ink)">belated truce that merely</text>
  <text x="454" y="202" text-anchor="middle" font-size="9.5" fill="var(--ink)">buries unhealed hurt.</text>
  <text x="280" y="236" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">Tentative phrasing (&quot;suggests... yet alternatively implies&quot;) unlocks top-band marks.</text>
</svg>`,
      diagramCaption:
        "Unpacking literal vehicle qualities reveals both a clear primary meaning and a nuanced, ambiguous second layer.",
      workedExamples: [
        {
          title: "Cracking an Unfamiliar Personification with Layered Meaning",
          problem:
            "Read these unseen lines about an abandoned seaside pier:\n\n*Salt wind picks the padlock's teeth,*\n*then shoulders through the rusted boards*\n*to claim the ticket booth again.*\n\nHow does the poet use **imagery and connotation** to portray nature's relationship with human structures?",
          steps: [
            "**Spot the metaphors/personification:** The wind *'picks the padlock's teeth'*, *'shoulders through'*, and *'claim[s]'* the booth.",
            "**Unpack Vehicle Qualities:** *'Picks... teeth'* evokes a cunning burglar picking a lock (and predatory jaws); *'shoulders through'* conveys broad-chested, unstoppable physical force; *'claim'* suggests rightful ownership or conquest.",
            "**Explore Layer 1 + Layer 2 Ambiguity:** On one level, nature appears as a relentless intruder dismantling fragile human defences (*'rusted boards'*). *Yet arguably*, the closing adverb *'again'* hints that the coast always belonged to the sea — turning burglary into rightful reclamation.",
          ],
          answer:
            "By personifying the wind as a lock-picking intruder that 'shoulders through' and 'claim[s]' the pier, the poet contrasts human fragility ('rusted') against nature's relentless power — while 'again' ambiguously implies the sea is merely reclaiming what was always its own.",
          yourTurn: {
            question:
              "What literary term describes the emotional, cultural, and sensory associations attached to a word beyond its plain dictionary definition (denotation)?",
            answer: {
              type: "text",
              accept: ["connotation", "connotations"],
              display: "connotation",
            },
            solution:
              "**Connotation** (or *connotations*) refers to the implied emotional and symbolic associations carried by a word beyond its literal denotation.",
          },
        },
        {
          title: "Linking Sound Devices to Specific Meaning (Zero Feature-Spotting)",
          problem:
            "Read this unseen couplet about a monsoon storm striking a tin roof:\n\n*Broad drops batter the buckled tin,*\n*black drums pounding the darkness in.*\n\nExplain how **sound patterns** reinforce the imagery — without saying *'it makes the poem flow'* or *'it makes it stand out'*.",
          steps: [
            "**Identify the exact sound pattern:** Heavy voiced **plosives** (`/b/` and `/d/`) repeat across *'Broad drops batter... buckled... black drums pounding... darkness'*.",
            "**Connect sound to physical imagery:** The percussive `/b/` and `/d/` bursts aurally replicate relentless rain hammering hollow metal, reinforcing the metaphor *'black drums'*.",
            "**Link to emotional effect:** Rather than gentle rain, the aggressive acoustic assault traps the speaker beneath overwhelming natural power.",
          ],
          answer:
            "Repeated voiced plosives (/b/ and /d/ in 'Broad drops batter... black drums') aurally mimic relentless percussion on hollow tin, reinforcing the metaphor of warlike 'drums' and trapping the speaker beneath nature's acoustic force.",
        },
      ],
      keyPoints: [
        "Decode any unfamiliar metaphor via **Vehicle Qualities**: list 3 literal traits of the image (`X`), then transfer them onto the subject (`Y`).",
        "Always move beyond **denotation** (dictionary fact) into **connotation** (emotional resonance and implied attitude).",
        "Embrace **productive ambiguity**: use *'arguably'*, *'simultaneously'*, or *'alternatively implies'* to explore a rich second layer of meaning.",
        "Never analyse sound devices (*sibilance, plosives, alliteration*) as standalone tricks — prove how the physical sound reinforces the poem's specific mood or image.",
        "Watch for **semantic fields** (clusters of linked words such as warfare, decay, light, or domesticity) that build an atmosphere across a whole stanza.",
      ],
      whyItWorks:
        "Good poets compress opposing feelings — love and loss, awe and fear — inside a single image like *'museum of folded sleeves'* or *'late snow'*. Asking for literal qualities gives you a reliable, step-by-step discovery method even when a poem feels strange at first glance.",
      strategies: [
        "Draw a quick 3-spoke mini-web around **one word** in the margin (e.g. *'iron jaw'* → biting / metallic / unyielding) before drafting your sentence.",
        "Test whether a word holds **two opposing vibes** (warmth vs coldness; tenderness vs entrapment) — naming that tension earns top-band analysis.",
        "Ban the empty verb *'shows'* three times per essay and swap in sharper analytical verbs: **evokes, conveys, unsettles, elevates, exposes, intimates**.",
      ],
      thinkDeeper:
        "Why can the exact same sound device — **sibilance** (`/s/` sounds) — feel gentle and lullaby-like in one unseen poem, yet menacing and treacherous in another?",
    },

    // =========================================================================
    // SECTION 3: unseen-structure-form
    // =========================================================================
    {
      id: "unseen-structure-form",
      heading: "Analysing Structure, Stanzas & Ending Shifts",
      discovery: {
        problem:
          "Compare two ways of laying out the exact same eighteen words:\n\n**Layout A (End-stopped):**\n*She packed his winter coat.*\n*She folded every scarf.*\n*She shut the brass clasp tight.*\n\n**Layout B (Enjambed + Caesura):**\n*She packed his winter coat and folded*\n*every scarf until the brass clasp*\n*clicked — then stood, unable to lift the case.*\n\nAsk yourself: **How do the line breaks (enjambment) and mid-line dash (caesura) in Layout B transform the speaker's emotional state compared with Layout A?**",
        idea:
          "Layout A's neat, **end-stopped** lines sound crisp, controlled, and emotionally sealed off. In Layout B, **enjambment** pushes the speaker hurriedly from line to line as if rushing to stay busy — until the sudden mid-line **caesura** (*'clicked — then stood'*) halts that momentum dead, exposing overwhelming grief the moment the task ends!",
      },
      body: `Students often lose easy marks on unseen poetry because they either ignore structure altogether or write generic nonsense like *"the poet uses enjambment to make the poem flow."* In top-band analysis, **form and structure are physical choreography**: stanza shapes, line breaks, punctuation, and rhyme literally enact what the speaker feels.

### The High-Band Structure Toolkit (Form Linked Directly to Meaning)

| Structural Feature | What to Look For | Meaningful Effects (Always Tie to Context!) |
|---|---|---|
| **Stanza Progression** | Regular equal stanzas (quatrains/tercets) vs fractured, uneven, or shrinking stanzas. | Neat regular stanzas can mirror rigid control, routine, or repressed grief — *or* ironise chaotic emotions bottled inside tidy walls. Shrinking/broken stanzas mirror breakdown or fading memory. |
| **Enjambment** (run-on line) | A sentence spills over the line break without punctuation. | Mimics rushing thoughts, breathless urgency, spilling emotion, falling motion, or resistance to boundaries. |
| **Caesura** (mid-line pause) | Full stop, dash, colon, or semicolon inside a line (*\"clicked — then stood\"*). | Creates sudden shock, hesitation, emotional fracture, or a stark visual wall separating two worlds. |
| **End-Stopped Lines** | Punctuation closes the line neatly (**. , ; ! ?**). | Conveys finality, calm composure, blunt certainty, or trapped compartmentalisation. |
| **Rhyme & Half-Rhyme (Slant Rhyme)** | Full chime (*light/night*) vs jarring near-miss (*home/harm*, *warm/worn*), or unrhymed **free verse**. | Full rhyme can sound reassuring, musical, or ominously inescapable; **half-rhyme** creates subtle discord/unease; a sudden **rhyming couplet** at the end snaps a moral judgement shut. |
| **Refrain & Cyclical Ending** | A repeated line or closing echo of stanza 1 — often with **one crucial word changed**. | Reveals whether the speaker is trapped in obsession, comforted by ritual, or quietly transformed by the final shift. |

### Tracking the 3-Beat Structural Arc

In an unseen exam, you can ALWAYS comment perceptively on structure — even in an irregular free-verse poem with no rhyme scheme — by tracking **three beats**:

1. **Opening Frame (Stanza 1):** What mood, perspective, or visual focus establishes the poem's baseline?
2. **Structural Pivot / Volta (Middle):** Where does the stanza shape, tense, pronoun (*I → we*, *you → they*), or punctuation fracture?
3. **Closing Shift (Final Line / Stanza):** Does the poem close on an isolated **monostich** (single-line stanza), a surprising **half-rhyme**, a **cyclical echo**, or an **unresolved question**?

> **Never write:** *"The poet uses a caesura to make the reader pause."* (Every punctuation mark makes you pause!)
> **Write instead:** *"The abrupt mid-line caesura after 'clicked —' arrests the rushing enjambment at the exact instant the physical task finishes, forcing the speaker to confront the silence she has been outrunning."*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structural anatomy of an unseen poem comparing enjambment momentum, caesura rupture, rhyme shift, and closing echo">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Structural Anatomy: How Form Enacts Feeling</text>
  <rect x="24" y="42" width="246" height="90" rx="9" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="38" y="63" font-size="11.5" font-weight="800" fill="var(--brand)">Enjambment (Spilling Momentum)</text>
  <text x="38" y="83" font-size="10.5" font-style="italic" fill="var(--ink)">&quot;the river climbs the stone step</text>
  <text x="38" y="99" font-size="10.5" font-style="italic" fill="var(--ink)">and slips beneath the sill...&quot;</text>
  <path d="M 218 79 C 248 79, 248 96, 212 96" fill="none" stroke="var(--brand)" stroke-width="2"/>
  <text x="38" y="121" font-size="9.5" fill="var(--ink-2)">Enacts overflowing water / unstoppable feeling</text>
  <rect x="290" y="42" width="246" height="90" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="304" y="63" font-size="11.5" font-weight="800" fill="var(--bad)">Caesura (Mid-Line Rupture)</text>
  <text x="304" y="88" font-size="10.5" font-style="italic" fill="var(--ink)">&quot;the clasp clicked  —  then she froze.&quot;</text>
  <line x1="413" y1="74" x2="413" y2="100" stroke="var(--bad)" stroke-width="2.5" stroke-dasharray="3,2"/>
  <text x="304" y="121" font-size="9.5" fill="var(--ink-2)">Visually splits busy action from sudden grief</text>
  <rect x="24" y="146" width="246" height="88" rx="9" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="38" y="167" font-size="11.5" font-weight="800" fill="var(--good)">Half-Rhyme / Rhyme Shift</text>
  <text x="38" y="187" font-size="10.5" fill="var(--ink)">home / harm  ·  warm / worn</text>
  <text x="38" y="206" font-size="9.5" fill="var(--ink-2)">Refuses tidy chime → mirrors unease,</text>
  <text x="38" y="220" font-size="9.5" fill="var(--ink-2)">unresolved loss, or jarring discord.</text>
  <rect x="290" y="146" width="246" height="88" rx="9" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="304" y="167" font-size="11.5" font-weight="800" fill="var(--ink)">Altered Refrain / Final Isolation</text>
  <text x="304" y="187" font-size="10" fill="var(--ink)">S1: &quot;We walked the shore.&quot;</text>
  <text x="304" y="203" font-size="10" font-weight="700" fill="var(--brand)">End: &quot;I walk the shore.&quot;</text>
  <text x="304" y="221" font-size="9.5" fill="var(--ink-2)">One changed pronoun exposes loss cleanly.</text>
</svg>`,
      diagramCaption:
        "Every structural observation must answer: HOW does this line break, pause, rhyme, or repetition physically enact the speaker's experience?",
      workedExamples: [
        {
          title: "Analysing an Altered Refrain & Shrinking Stanza",
          problem:
            "Read these unseen opening and closing stanzas from a poem titled *The Orchard Wall*:\n\n**Stanza 1 (4 lines):**\n*We climbed the warm brick wall at four,*\n*our pockets weighed with fallen plums,*\n*and swore the summer had no door,*\n*and laughed until the evening came.*\n\n**Stanza 3 (2 lines):**\n*I touch the cold brick wall alone —*\n*the plums lie bruised on empty stone.*\n\nHow do **stanza length, rhyme, and altered repetition** convey the passage of time?",
          steps: [
            "**Track stanza shrinkage:** The poem contracts from a generous four-line **quatrain** (filled with childhood abundance) down to a stark closing **couplet**, visually mimicking how companionship and youth have been pared down to solitude.",
            "**Spot the altered echo:** *'We climbed the warm brick wall'* turns into *'I touch the cold brick wall alone'* — four tiny substitutions (*We → I*, *climbed → touch*, *warm → cold*, adding *alone*) dramatise loss without melodrama.",
            "**Analyse the rhyme shift:** Notice stanza 1's slight slant-rhyme on *plums / came* gives way to the stark, heavy **rhyming couplet** *alone / stone*, sealing the speaker's isolation with cold, stony finality.",
          ],
          answer:
            "Contracting from a full quatrain to an isolated couplet mirrors youth narrowing into solitude; altering 'We climbed the warm brick wall' to 'I touch the cold brick wall alone' enacts loss through sensory and pronoun shifts, sealed by the bleak final chime of 'alone / stone'.",
          yourTurn: {
            question:
              "What literary term names the continuation of a sentence across a poetic line break without terminal punctuation?",
            answer: {
              type: "text",
              accept: ["enjambment", "enjambement"],
              display: "enjambment",
            },
            solution:
              "**Enjambment** runs a sentence past the line break onto the next line without punctuation, enacting momentum, spilling feeling, or resistance to containment.",
          },
        },
        {
          title: "Explaining Half-Rhyme in a Conflict Poem",
          problem:
            "Read this unseen quatrain:\n\n*They marched beneath the iron gate,*\n*their shadows lengthening on the ground,*\n*each boot-step steady, sharp, and straight —*\n*yet not a single song was found.*\n\nWait: check lines 1 & 3 (*gate / straight* = full rhyme) and now compare this alternative ending pair: *ground / groaned*.\nWhy might a poet deliberately replace a neat rhyme (*ground / found*) with a **half-rhyme** (*ground / groaned*) in a poem about warfare?",
          steps: [
            "**Hear the acoustic clash:** *Ground* and *groaned* share consonant framing (`/g-r-n-d/`) while missing the exact vowel chime.",
            "**Link discord to theme:** Refusing a comforting musical chime mirrors the broken, unsettled reality of war — stripping away patriotic neatness and leaving the reader acoustically uneasy.",
          ],
          answer:
            "Replacing a tidy rhyme with the dissonant half-rhyme 'ground / groaned' refuses musical comfort, acoustically enacting the jarring pain and unresolved horror of conflict.",
        },
      ],
      keyPoints: [
        "Form and structure are **meaning in motion**: never write generic lines like *'enjambment makes it flow'* or *'caesura makes you pause'*.",
        "Compare the **opening stanza** directly with the **closing stanza** — shifts in length, pronouns (*We → I*), or tense expose the poem's whole arc.",
        "**Enjambment** enacts spilling urgency, falling motion, or unconstrained emotion; **caesura** enacts shock, fracture, or a sudden boundary.",
        "**Half-rhyme (slant rhyme)** withholds satisfying harmony to convey discord, unease, or unresolved grief; a final **rhyming couplet** snaps a verdict shut.",
        "Even in unrhymed **free verse**, analyse stanza breaks, white space, line length variation, and isolated short lines.",
      ],
      whyItWorks:
        "Poetry is the only written form that controls **blank white space** on the page. Every line break, mid-line pause, and stanza gap slows or speeds your breath — so treating layout as choreography turns invisible technical terms into concrete human meaning.",
      strategies: [
        "Always check **line 1 vs the final line** and ask: *What changed — tense, pronoun, temperature, light, or stanza length?*",
        "Circle every **caesura** (`—`, `.`, `;`, `?` mid-line) and write one verb beside it describing what the break *does* (*snaps, divides, hesitates, confronts*).",
        "Weave structure **inside** your language paragraphs rather than quarantining one dull paragraph called *'The structure of the poem'*.",
      ],
      thinkDeeper:
        "Why might a poet write a poem about chaotic grief or violent anger inside **strict, perfectly neat four-line stanzas** instead of messy free verse?",
    },

    // =========================================================================
    // SECTION 4: writing-high-band-unseen
    // =========================================================================
    {
      id: "writing-high-band-unseen",
      heading: "Writing a Top-Band Timed Unseen Poetry Essay",
      discovery: {
        problem:
          "Compare two introductions for the End-of-Year exam question *\"How does the poet present memory in 'The Spare Key'?\"*:\n\n**Intro A:** *In this essay I am going to write about the poem 'The Spare Key'. The poet uses many different language and structural techniques like metaphors, enjambment, and caesura to present memory to the reader.*\n\n**Intro B:** *In 'The Spare Key', the poet portrays memory not as a neat chapter that can be closed, but as a stubborn, half-conscious ritual resisting grief. Tracing the speaker's shift from twenty years of quiet waiting to an unresolved gesture of letting go, the poet exposes how domestic objects outlast human absence.*\n\nAsk yourself: **Why does Intro B immediately place the essay in the top band before a single quotation even appears?**",
        idea:
          "**Intro A** is a generic shopping list (*'metaphors, enjambment, and caesura'*) that could fit any poem ever written. **Intro B** delivers a sharp **conceptual thesis** — naming *how* memory behaves (*a stubborn ritual resisting grief*) and outlining the poem's **emotional arc** from start to unresolved finish.",
      },
      body: `In Tanglin's Year 9 End-of-Year unseen poetry assessment, you typically have **35 to 45 minutes** from opening the paper to putting your pen down. That timing is generous *if* you follow a disciplined blueprint that integrates language and structure along the poem's arc.

### The 40-Minute Unseen Exam Blueprint

| Time | Phase | Exact Goal |
|---|---|---|
| **0–5 mins** | **5-Minute Protocol** | Two calm reads → Title, Literal Story, Tone, Volta, Big Theme + 3–5 micro-quotes. |
| **5–9 mins** | **Conceptual Intro (2–3 sentences)** | Answer the prompt directly with a **big-idea thesis** capturing the poem's shift. Zero technique lists! |
| **9–34 mins** | **3 Integrated Body Paragraphs (~8 mins each)** | Follow the poem chronologically (**Opening → Volta/Development → Ending**). Weave **language + structure** together inside each WHAT–HOW–WHY paragraph. |
| **34–38 mins** | **Sharp Closing Judgement (2–3 sentences)** | Step back to the poet's final resonant message (link closing line back to the title). Do not merely repeat points! |
| **38–40 mins** | **2-Minute Polish** | Check spelling of poet/title, embedded quotation marks, and upgrade any weak verb (*'shows'* → *'conveys / unsettles'*). |

### Integrating Language + Structure (Killing Feature-Spotting Forever)

Weak essays isolate techniques (*Paragraph 1: Metaphors; Paragraph 2: Alliteration; Paragraph 3: Structure*). Top-band essays **follow the poem's emotional journey** and combine methods inside the exact same sentence:

- **Paragraph 1 (Opening Mood & Framing):** Analyse the title + opening stanza's imagery *and* how the opening rhythm or stanza shape establishes baseline control or calm.
- **Paragraph 2 (Escalation & Volta):** Analyse the emotional turning point — zoom into a pivotal word *and* show how enjambment, caesura, or pronoun shift enacts that turn.
- **Paragraph 3 (Closing Image & Ambiguity):** Analyse the final lines, exploring **two layered interpretations** (*arguably... yet simultaneously...*) and linking back to the title.

### The Top-Band Self-Audit Checklist

Before handing in your unseen essay, check that your paragraphs hit four examiner gold standards:
1. **Conceptual Topic Sentences:** Every paragraph starts with an *idea* (*"At the volta, tender reminiscence fractures into urgent resistance..."*), never a technique (*"The poet uses a metaphor..."*).
2. **Razor-Short Embedded Quotes:** 1–5 words woven grammatically into your prose, never copied two-line blocks.
3. **Word-Level Zoom + Ambiguity:** Unpack specific connotations of individual words with tentative phrasing (*suggests, implies, arguably*).
4. **Effect Tied to Human Experience:** Explain what the reader *feels or understands* about life, memory, conflict, or identity — never *"makes the reader want to read on"*.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Forty-minute timed unseen poetry essay plan from five-minute protocol to conceptual thesis, three arc-driven integrated paragraphs, and closing judgement">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">40-Minute Top-Band Unseen Essay Blueprint</text>
  <rect x="20" y="42" width="76" height="44" rx="7" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="58" y="61" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--brand)">0–5 min</text>
  <text x="58" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink)">Protocol</text>
  <rect x="104" y="42" width="76" height="44" rx="7" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="142" y="61" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">5–9 min</text>
  <text x="142" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Thesis Intro</text>
  <rect x="188" y="42" width="234" height="44" rx="7" fill="var(--good)" opacity="0.16" stroke="var(--good)" stroke-width="1.5"/>
  <text x="305" y="61" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--good)">9–34 min · 3 Integrated Paragraphs</text>
  <text x="305" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink)">Opening → Volta → Ending (Lang + Struct)</text>
  <rect x="430" y="42" width="110" height="44" rx="7" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="485" y="61" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--bad)">34–40 min</text>
  <text x="485" y="76" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Verdict + Polish</text>
  <rect x="20" y="102" width="166" height="126" rx="9" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="103" y="124" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">Para 1: Opening</text>
  <text x="103" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Conceptual topic claim</text>
  <text x="103" y="162" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Title + Stanza 1 image</text>
  <text x="103" y="180" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Opening stanza shape</text>
  <text x="103" y="198" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">• Single-word zoom</text>
  <rect x="197" y="102" width="166" height="126" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="280" y="124" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Para 2: The Volta</text>
  <text x="280" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Track tonal shift</text>
  <text x="280" y="162" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Pivot word / tension</text>
  <text x="280" y="180" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Caesura / enjambment</text>
  <text x="280" y="198" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">• Sound + connotation</text>
  <rect x="374" y="102" width="166" height="126" rx="9" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="457" y="124" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Para 3: Closing Shift</text>
  <text x="457" y="144" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Final line &amp; echo</text>
  <text x="457" y="162" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Link back to title</text>
  <text x="457" y="180" text-anchor="middle" font-size="9.5" fill="var(--ink)">• Layer 2 ambiguity</text>
  <text x="457" y="198" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">• Broader human insight</text>
</svg>`,
      diagramCaption:
        "Organising body paragraphs along the poem's chronological arc integrates language and structure effortlessly.",
      workedExamples: [
        {
          title: "Writing One Integrated Top-Band Paragraph on an Unseen Ending",
          problem:
            "Revisit the closing two lines of *The Spare Key*:\n\n*Tonight I slipped it into the kitchen drawer —*\n*and still left the porch light burning.*\n\nWrite a cohesive **WHAT–HOW–WHY** paragraph integrating both **structure** and **imagery**.",
          steps: [
            "**WHAT (conceptual topic sentence):** By the final two lines, the poet dramatises the painful contradiction between rational acceptance and stubborn emotional hope.",
            "**HOW (integrate structure + embedded language):** The temporal volta *'Tonight'* initially signals quiet closure through the soft, unobtrusive verb *'slipped'*, as if the speaker is trying to hide the key without disturbing its memory. Yet the abrupt **dash** at line's end fractures that resolve, launching the poignant qualifier *'and still'* into a lingering closing image of the *'porch light burning'*.",
            "**WHY (layered connotation + tentative voice):** Literally a beacon of welcome, *'burning'* evokes enduring warmth and love; *yet arguably*, it also carries connotations of slow, aching exhaustion — implying that grief refuses tidy endings even when the mind decides to move on.",
          ],
          answer:
            "By pivoting from the quiet closure of 'Tonight I slipped' across a halting dash into 'and still left the porch light burning', the poet integrates structural hesitation with the ambiguous verb 'burning' — evoking both steadfast welcome and quiet, lingering ache.",
          yourTurn: {
            question:
              "What exam flaw occurs when a student lists devices ('the poet uses a metaphor and enjambment') without explaining how those choices create specific meaning or emotion?",
            answer: {
              type: "text",
              accept: ["feature-spotting", "feature spotting", "technique spotting", "technique-spotting"],
              display: "feature-spotting",
            },
            solution:
              "**Feature-spotting** (or *technique-spotting*) names literary terms without connecting them to precise connotations, tone, or thematic meaning.",
          },
        },
        {
          title: "Transforming a Weak Conclusion into a Sharp Final Judgement",
          problem:
            "A student closes an unseen essay with: *\"To conclude, the poet used metaphors, plosives, and stanza changes very effectively to show nature's power and make the poem interesting.\"*\n\nRewrite this as a **sharp, conceptual 2-sentence closing judgement** for the poem *Before the Demolition*.",
          steps: [
            "**Cut the technique shopping list and empty praise:** Delete *'used metaphors, plosives, and stanza changes very effectively'* and *'make the poem interesting'*.",
            "**Link ending back to title and universal theme:** Connect *Before the Demolition* to the closing survival of *'her tiny climb'*.",
            "**Model upgrade:** *\"Ultimately, 'Before the Demolition' argues that while iron machinery can erase walls in minutes, human devotion leaves marks that outlive mortar. By holding the poem permanently 'before' the final strike, the poet suspends childhood memory just out of destruction's reach.\"*",
          ],
          answer:
            "Ultimately, 'Before the Demolition' suggests that although industrial power flattens brick effortlessly, intimate family memory resists erasure. By freezing the poem permanently 'before' the collapse, the poet preserves childhood wonder on the very brink of loss.",
        },
      ],
      keyPoints: [
        "Budget **40 minutes** smartly: 5 mins protocol → 4 mins conceptual thesis intro → 25 mins for 3 integrated arc-driven paragraphs → 6 mins sharp closing verdict + polish.",
        "Open with a **conceptual thesis** (big idea + emotional arc), NEVER a dull checklist of techniques (*'uses similes, rhyme, and caesura'*).",
        "Structure your 3 body paragraphs along the poem's journey (**Opening → Volta → Ending**), blending **language + structure** inside every paragraph.",
        "Keep quotations razor-short (**1–5 words embedded**) and unpack **single-word connotations** plus **tentative second layers** (*arguably, alternatively*).",
        "Finish with a **reflective judgement** linking the closing line back to the title and the poet's wider message about human experience.",
      ],
      whyItWorks:
        "Examiners mark dozens of scripts in a single evening. An essay that opens with an insightful conceptual thesis, tracks the poem cleanly from line 1 to the final line, and explores layered connotations immediately stands out from mechanical technique-spotting essays.",
      strategies: [
        "Keep a quick **Paragraph Anchor Plan** in the margin: `P1: Title + S1` · `P2: Volta + Tension` · `P3: Ending + Ambiguity`.",
        "Check your first sentence of every paragraph — if it names a **literary term** instead of an **idea**, rewrite it so the concept leads.",
        "Always reserve the final 2 minutes to verify you quoted accurately and actually addressed the **final line** of the poem.",
      ],
      thinkDeeper:
        "Why is writing **three deeply unpacked paragraphs** covering the opening, volta, and closing image nearly always stronger than writing six hurried paragraphs that briefly mention six separate devices?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "5-Minute Unseen Protocol",
        back: "Pass 1 (pen down): Title → Literal Story → Speaker & Tone → Volta. Pass 2 (pen up): Deeper Theme + 3–5 embedded anchor quotations.",
      },
      {
        front: "Speaker (Persona) vs Poet",
        back: "The 'I' inside a poem is a crafted voice (speaker/persona), not automatically the poet's own autobiography.",
      },
      {
        front: "Volta",
        back: "Italian for 'turn' — the pivotal moment where a poem's tone, perspective, tense, or emotional stance shifts (often signalled by Yet, But, Now, Still).",
      },
      {
        front: "Tenor & Vehicle",
        back: "In a metaphor, the Tenor is the real subject (e.g. an empty room) and the Vehicle is the image compared to it (e.g. a museum). Unpack literal qualities of the Vehicle.",
      },
      {
        front: "Denotation vs Connotation",
        back: "Denotation is the plain dictionary meaning of a word; connotation is its rich web of emotional, sensory, and cultural associations.",
      },
      {
        front: "Productive ambiguity",
        back: "Deliberate double meaning in a poetic image (e.g. 'late snow' suggesting both peaceful purity and chilly numbness) explored with tentative phrasing.",
      },
      {
        front: "Enjambment",
        back: "Running a sentence across a poetic line break with no terminal punctuation — enacting momentum, spilling feeling, or resistance to boundaries.",
      },
      {
        front: "Caesura",
        back: "A deliberate pause inside a poetic line (dash, full stop, semicolon, colon) that enacts shock, hesitation, or emotional fracture.",
      },
      {
        front: "End-stopped line",
        back: "A poetic line closed neatly by punctuation (`.`, `;`, `!`, `?`), creating composure, blunt certainty, or tight containment.",
      },
      {
        front: "Half-rhyme (Slant rhyme)",
        back: "An imperfect chime sharing consonants or vowels without matching cleanly (home/harm, ground/groaned) — creating unease, discord, or unresolved tension.",
      },
      {
        front: "Altered refrain",
        back: "Repeating an earlier line or image with one crucial word changed (e.g. 'We walked' → 'I walk') to crystallise loss or transformation.",
      },
      {
        front: "Sibilance vs Plosives",
        back: "Sibilance repeats soft/hissing /s, sh/ sounds (soothing or sinister depending on context); plosives repeat sharp /p, b, t, d, k, g/ bursts (force, anger, impact).",
      },
      {
        front: "Feature-spotting",
        back: "The exam trap of listing literary terms ('the poet uses enjambment and a metaphor') without explaining their specific emotional or thematic effect.",
      },
      {
        front: "Conceptual thesis",
        back: "A concise 2–3 sentence opening argument stating WHAT big human idea the poem explores and HOW its tone shifts from start to finish.",
      },
    ],
    mustKnow: [
      "Execute the 5-minute two-pass unseen poetry protocol without panicking or spotting devices prematurely.",
      "Read an unseen poem to punctuation rather than pausing robotically at every line break.",
      "Identify the literal situation first, then name nuanced tone shifts using precise adjectives (wistful, elegiac, defiant, sardonic, reverent).",
      "Locate the volta (turning point) through shift markers (Yet, But, Now, Still), tense changes, or pronoun shifts.",
      "Crack any unfamiliar metaphor by listing literal qualities of the Vehicle and transferring them onto the Tenor.",
      "Explore layered ambiguity using tentative academic phrasing (arguably, implies, alternatively suggests).",
      "Analyse enjambment, caesura, stanza shifts, half-rhyme, and refrains by linking form directly to the speaker's experience.",
      "Never write generic statements like 'enjambment makes it flow' or 'caesura makes the reader pause'.",
      "Write a concise conceptual thesis introduction instead of a technique shopping list.",
      "Structure a timed 35–45 minute essay into 3 integrated language+structure paragraphs following the poem's arc (Opening → Volta → Ending).",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'The poet uses enjambment to make the poem flow smoothly.'",
        right: "Write Instead ✅: 'The enjambment across \"folded / every scarf\" propels the speaker hurriedly onward, mirroring her restless attempt to outrun grief through busy domestic routine.'",
      },
      {
        wrong: "Never Write ❌: 'The poet uses a caesura to make the reader pause and think.'",
        right: "Write Instead ✅: 'The stark mid-line dash after \"clicked —\" ruptures the rushing momentum at the exact instant the suitcase closes, visually confronting the speaker with sudden silence.'",
      },
      {
        wrong: "Never Write ❌: 'In this essay I will analyse metaphors, alliteration, rhyme, and structure.'",
        right: "Write Instead ✅: 'Throughout the poem, the poet presents memory as an unyielding domestic ritual, shifting from quiet preservation to a poignant refusal to close the door on absence.'",
      },
      {
        wrong: "Never Write ❌: 'The speaker feels sad at the start and happy at the end.'",
        right: "Write Instead ✅: 'The tone shifts from wistful, subdued longing in the opening quatrain to quiet, resolute defiance after the volta \"yet still\".'",
      },
      {
        wrong: "Never Write ❌: 'The poet uses sibilance to create a snake-like evil tone.' (when the poem is about gentle rain!)",
        right: "Write Instead ✅: 'Soft sibilance in \"silk of summer showers\" evokes hushed, soothing calm, aurally cushioning the speaker's quiet nostalgia.'",
      },
      {
        wrong: "Never Write ❌: 'The poem means only one thing, which proves the poet was depressed.'",
        right: "Write Instead ✅: 'Arguably, the ambiguous closing image of \"late snow\" conveys quiet peace, yet simultaneously hints at emotional numbness that buries rather than heals grief.'",
      },
      {
        wrong: "Never Write ❌: 'This metaphor paints a vivid picture in the reader's mind so they relate to it.'",
        right: "Write Instead ✅: 'Calling the empty room a \"museum\" evokes hushed reverence alongside lifeless preservation, suggesting the speaker treasures the past while feeling trapped inside it.'",
      },
    ],
    examMistakes: [
      "Starting to highlight devices on line 1 before understanding the poem's literal story and ending.",
      "Stopping at the end of every poetic line instead of reading to the actual punctuation, causing basic misunderstandings.",
      "Calling the speaker 'the poet' when a poem clearly uses a fictional persona (e.g. a soldier, a child, or an elderly craftsperson).",
      "Writing a disconnected 'Structure paragraph' stuffed with vague filler instead of integrating structure with language.",
      "Ignoring the **title** and the **very last line** — the two places poets pack their densest meaning.",
      "Assuming sibilance always means 'sinister snake' without checking the poem's actual mood and context.",
      "Writing huge copied quotations (3–4 lines long) instead of embedding sharp 1–5 word micro-quotations.",
      "Running out of time after stanza 1 and leaving the poem's volta and closing resolution unanalysed.",
    ],
    mnemonics: [
      {
        topic: "The 5-Minute Unseen Protocol",
        device: "T – L – S – V – T",
        explanation:
          "**T**itle clues → **L**iteral story → **S**peaker & nuanced tone → **V**olta (turning point) → **T**heme & 3–5 anchor micro-quotes.",
      },
      {
        topic: "Cracking Unfamiliar Metaphors",
        device: "V → Q → T → A",
        explanation:
          "Spot the **V**ehicle → list 3 literal **Q**ualities → transfer onto the **T**enor → probe **A**mbiguity (Layer 2 with *arguably / alternatively*).",
      },
      {
        topic: "Timed Essay Arc",
        device: "THESIS → OPEN → TURN → CLOSE → VERDICT",
        explanation:
          "Conceptual intro → Para 1 (Opening + Title) → Para 2 (Volta + Shift) → Para 3 (Ending + Ambiguity) → Reflective closing judgement.",
      },
    ],
    realWorld: [
      {
        title: "Songwriting Bridges & Musical Key Changes",
        emoji: "🎵",
        detail:
          "A pop or rock song's bridge — where chords and mood lift or drop right before the final chorus — works identically to a poem's **volta**.",
      },
      {
        title: "Film Trailers & Visual Metaphors",
        emoji: "🎥",
        detail:
          "A director lingering on an untouched spare key or a ticking hallway clock communicates grief through concrete imagery rather than clunky dialogue — exact poetic compression.",
      },
      {
        title: "Advertising & Brand Connotation",
        emoji: "💡",
        detail:
          "Copywriters obsess over **denotation vs connotation** — choosing words like *crafted* instead of *made*, or *home* instead of *property*, to steer emotion subconsciously.",
      },
      {
        title: "Speechwriting Cadence & Pause",
        emoji: "🎙️",
        detail:
          "Great public speakers use abrupt mid-sentence pauses (**caesura**) and altered refrains to hold an audience's breath and hammer home a final message.",
      },
      {
        title: "Critical Thinking Under Pressure",
        emoji: "🧭",
        detail:
          "Decoding an unfamiliar text calmly in five minutes — establishing literal facts first, noticing shifts, and weighing multiple angles — is the exact analytical habit used by lawyers, doctors, and journalists.",
      },
    ],
    videos: [
      {
        title: "How to Analyse an Unseen Poem Step-by-Step (5-Minute Method)",
        channel: "Mr Salles Teaches English (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=unseen+poetry+analysis+step+by+step+method+english",
      },
      {
        title: "Analysing Enjambment, Caesura & Volta Without Feature-Spotting",
        channel: "Mr Bruff (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=enjambment+caesura+volta+poetry+structure+analysis",
      },
      {
        title: "Unpacking Metaphors, Connotations & Ambiguity for Top Bands",
        channel: "Mr Everything English (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=unpacking+metaphors+connotations+unseen+poetry+top+band",
      },
      {
        title: "Writing a Timed Unseen Poetry Essay: Conceptual Thesis & Arc",
        channel: "First Rate Tutors (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=timed+unseen+poetry+essay+conceptual+thesis+structure",
      },
    ],
    formulas: [
      {
        name: "5-Minute Protocol (TLSVT)",
        formula: "Title → Literal Story → Speaker & Tone → Volta → Theme & Anchor Quotes",
        note: "Always run Pass 1 pen-down before hunting language features.",
      },
      {
        name: "Volta",
        formula: "Emotional, tonal, temporal, or logical turning point inside a poem.",
        note: "Scan for Yet, But, Still, Now, Until, or stanza/tense shifts.",
      },
      {
        name: "Tenor & Vehicle",
        formula: "Metaphor = Tenor (real subject) described via Vehicle (borrowed image).",
        note: "Unpack 3 literal qualities of the Vehicle to unlock unfamiliar imagery.",
      },
      {
        name: "Connotation",
        formula: "Emotional, sensory, and cultural associations beyond literal denotation.",
        note: "Pair single-word connotation zoom with tentative verbs.",
      },
      {
        name: "Productive ambiguity",
        formula: "Layer 1 meaning + 'yet arguably / alternatively implies' Layer 2 meaning.",
        note: "Embracing tension inside one image lifts essays into the top band.",
      },
      {
        name: "Enjambment",
        formula: "Sentence spilling across a line break with zero terminal punctuation.",
        note: "Link to rushing emotion, overflow, or broken control — never 'makes it flow'.",
      },
      {
        name: "Caesura",
        formula: "Deliberate mid-line punctuation break (— . ; : ?).",
        note: "Link to shock, hesitation, or stark separation — never 'makes you pause'.",
      },
      {
        name: "End-stopped line",
        formula: "Line closed cleanly by punctuation at its right edge.",
        note: "Signals certainty, composure, finality, or rigid emotional containment.",
      },
      {
        name: "Half-rhyme (Slant rhyme)",
        formula: "Near-matching sounds (home/harm, ground/groaned) refusing full chime.",
        note: "Creates acoustic unease, discord, or unresolved grief.",
      },
      {
        name: "Altered refrain",
        formula: "Repeated line returning later with one crucial word changed.",
        note: "Exposes transformation or loss cleanly (e.g. 'We walked' → 'I walk').",
      },
      {
        name: "Speaker (Persona)",
        formula: "The dramatic voice speaking inside the poem (distinct from the poet).",
        note: "Say 'the speaker feels...' while 'the poet crafts...'.",
      },
      {
        name: "Conceptual thesis",
        formula: "Big human idea + emotional arc across the poem (no technique shopping list).",
        note: "Sets up 3 integrated language+structure paragraphs cleanly.",
      },
    ],
  },
};
