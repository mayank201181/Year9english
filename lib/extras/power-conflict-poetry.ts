import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Why does a poem about an ancient broken statue or a freezing night watch hit harder in fourteen lines than a five-page history textbook? Because poets engineer rhythm, silence and sound to make your own breath enact the conflict.",
  didYouKnow: [
    "In 1817, Percy Bysshe Shelley and his friend Horace Smith held a friendly sonnet-writing race after hearing that a colossal statue of Ramesses II was arriving at the British Museum — producing the famous **example poem** *Ozymandias* in a single burst of invention.",
    "World War I poet Wilfred Owen pioneered **half-rhyme (pararhyme)** in English war poetry (pairing words like *escaped / scooped* and *knive us / nervous* in **example poems** such as *Exposure*): by letting consonants match while dropping the vowel pitch, the ear feels an uneasy sense of emptiness.",
    "The Italian word **volta** literally means *“a turn”* — originally describing a swift turn in dance or horsemanship before Renaissance sonneteers adopted it for the emotional pivot of a poem.",
    "Count your pulse: a relaxed human heartbeat beats in a soft-strong **iambic** rhythm (*lub-DUB, lub-DUB*), which is why steady **iambic pentameter** feels so natural — and why breaking it suddenly creates physical unease.",
    "In comparative exams, the highest-scoring essays almost never compare identical devices (*“both use metaphors”*); instead, they compare **contrasting methods serving related human questions** (for instance, a rigid sonnet mocking tyranny beside jagged free verse mourning grief).",
  ],
  activities: [
    {
      title: "The Rhythm Tap & Breath Lab",
      emoji: "🥁",
      materials: ["Two short poems (or any two stanzas from your class poetry collection)", "A pencil to tap the desk", "Two highlighters"],
      steps: [
        "Read Stanza 1 aloud at natural speed while tapping your pencil lightly on every **stressed syllable** — listen for whether the beat marches steadily or stumbles.",
        "Highlight every **mid-line punctuation mark** (`.`, `;`, `—`, `?`, `!`) in one colour (**caesura**) and every **unpunctuated line ending** in a second colour (**enjambment**).",
        "Mark a star beside the exact word where the speaker's mood or argument pivots (**volta**).",
        "Write two sentences connecting what your breath actually did (*stopping short*, *running out of air*, *slowing down*) directly to the poem's conflict.",
      ],
      maths:
        "Poetry is acoustic architecture: reading aloud turns invisible lineation marks (**caesura**, **enjambment**, **metre**) into physical sensations you can explain with pinpoint precision.",
    },
    {
      title: "The 3-Minute Comparative Venn Sprint",
      emoji: "🔗",
      materials: ["Two Power & Conflict poems from class or this guide", "One sheet of paper", "A 3-minute timer"],
      steps: [
        "Draw two overlapping circles labelled **Poem A** and **Poem B** — ban yourself from writing device names like 'metaphor' in the middle overlap!",
        "In the centre overlap, write **two big conceptual ideas** both poems wrestle with (e.g. *fragility of authority*, *psychological cost of fear*, *nature dwarfing humanity*).",
        "In the outer wings, note **one contrasting method + one micro-quote (1–4 words)** for each poem showing how each poet handles that idea differently.",
        "Turn your diagram into one sharp **Both... however, whereas...** comparative thesis sentence.",
      ],
      maths:
        "Banning bare device-matching from the Venn overlap forces conceptual comparison first — ensuring every paragraph weaves **ideas + contrasting craft** instead of drifting into a weak block essay.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Acoustic Wave: Regular Iambic Order vs Fractured Conflict Rhythm",
      caption: "Steady unstressed–stressed beats convey control or marching discipline; inserting caesura (||) and broken beats physically enacts shock.",
      svg:
        `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Waveform comparison between steady regular iambic pentameter beats and disrupted conflict rhythm with caesura breaks">` +
        `<rect x="8" y="8" width="544" height="214" rx="14" fill="#f8f9fd" stroke="#e0e3ef" stroke-width="1.5"/>` +
        `<text x="280" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#171a2f">Beat Map: Regular Iambic Control vs Fractured Conflict</text>` +
        `<text x="28" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1">Regular Iambic Pentameter (da-DUM × 5 — Controlled / Authoritative)</text>` +
        `<path d="M 32 98 L 62 98 L 82 72 L 112 98 L 132 72 L 162 98 L 182 72 L 212 98 L 232 72 L 262 98 L 282 72 L 312 98 L 526 98" fill="none" stroke="#0369a1" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<text x="82" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">The KING</text>` +
        `<text x="132" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">com-MANDS</text>` +
        `<text x="182" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">the TOW-</text>` +
        `<text x="232" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">ers RISE</text>` +
        `<text x="282" y="114" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">in STONE</text>` +
        `<rect x="336" y="72" width="186" height="24" rx="6" fill="#e0f2fe"/>` +
        `<text x="429" y="88" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#0369a1">10 syllables · steady pulse</text>` +
        `<line x1="24" y1="128" x2="536" y2="128" stroke="#e0e3ef" stroke-width="1.2"/>` +
        `<text x="28" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b0413e">Disrupted Rhythm + Heavy Caesura (|| — Shock / Panic / Trauma)</text>` +
        `<path d="M 32 192 L 56 164 L 84 192 L 106 164 L 136 192" fill="none" stroke="#b0413e" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<line x1="154" y1="158" x2="154" y2="198" stroke="#c2410c" stroke-width="2.5" stroke-dasharray="4 3"/>` +
        `<text x="154" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#c2410c">CAESURA ||</text>` +
        `<path d="M 176 192 L 200 160 L 222 192" fill="none" stroke="#b0413e" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<line x1="242" y1="158" x2="242" y2="198" stroke="#c2410c" stroke-width="2.5" stroke-dasharray="4 3"/>` +
        `<text x="242" y="210" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#c2410c">CAESURA ||</text>` +
        `<path d="M 264 192 L 292 162 L 318 176 L 348 162 L 380 192 L 420 174 L 468 174" fill="none" stroke="#15803d" stroke-width="2.6" stroke-linejoin="round"/>` +
        `<polygon points="476,174 464,168 464,180" fill="#15803d"/>` +
        `<text x="506" y="178" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="800" fill="#15803d">ENJAMB →</text>` +
        `<text x="82" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">He tried</text>` +
        `<text x="199" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">stopped</text>` +
        `<text x="356" y="208" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#171a2f">stared straight past...</text>` +
        `</svg>`,
    },
    {
      title: "The Comparative Connective Compass",
      caption: "Choose precise pivot words inside every woven paragraph to link shared concepts or sharpen contrasts between Poem A and Poem B.",
      svg:
        `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-column guide separating similarity comparative connectives from contrast comparative connectives with an integrated thesis template below">` +
        `<rect x="8" y="8" width="544" height="204" rx="14" fill="#f8f9fd" stroke="#e0e3ef" stroke-width="1.5"/>` +
        `<text x="280" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#171a2f">Comparative Connective Toolkit</text>` +
        `<rect x="26" y="48" width="244" height="104" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.4"/>` +
        `<text x="148" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d">SIMILARITY PIVOTS (=)</text>` +
        `<text x="148" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#171a2f">Similarly · Likewise · Equally</text>` +
        `<text x="148" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#171a2f">Echoing this · In the same way</text>` +
        `<text x="148" y="134" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#555b78">Links parallel themes or shared tension</text>` +
        `<rect x="290" y="48" width="244" height="104" rx="10" fill="#ffe4e6" stroke="#b0413e" stroke-width="1.4"/>` +
        `<text x="412" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#9f1239">CONTRAST PIVOTS (≠)</text>` +
        `<text x="412" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#171a2f">Whereas · Conversely · Unlike</text>` +
        `<text x="412" y="110" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#171a2f">By contrast · However · Yet</text>` +
        `<text x="412" y="134" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#555b78">Sharpens opposing tones, forms &amp; views</text>` +
        `<rect x="26" y="164" width="508" height="34" rx="8" fill="#171a2f"/>` +
        `<text x="280" y="185" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff">POWER HINGE: "Both poets expose [Big Idea]; however, whereas Poem A..., Poem B..."</text>` +
        `</svg>`,
    },
  ],
  history: {
    title: "From Heroic Ballads to Trench Notebooks: How Conflict Reshaped Poetic Form",
    story:
      "For centuries, poetry about war and empire followed grand, rhythmic musical moulds designed to be chanted aloud in honour of kings and battles — such as Victorian commemorative ballads (including the **example poem** *The Charge of the Light Brigade*, written in 1854 from newspaper dispatches in London).\n\nWhen industrial warfare arrived in the twentieth century, soldier-poets scribbling in muddy notebooks realised that tidy, triumphant marching beats could no longer tell the truth about gas clouds, frostbite and shell-shock. Poets like Wilfred Owen (in **example poems** such as *Dulce et Decorum Est* and *Exposure*) fractured traditional metre with jagged caesura, bitter Latin irony and dissonant half-rhyme — proving forever that when power and conflict change the world, poets break open poetic form itself to bear witness.",
  },
};
