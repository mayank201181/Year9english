import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Two journalists can stand on the exact same pavement watching the exact same event — yet one headline makes you furious while the other makes you applaud. Reading between the lines turns you from a passive consumer into a sharp-eyed detective.",
  didYouKnow: [
    "In 1974, psychologists Elizabeth Loftus and John Palmer showed participants the exact same car-crash film — changing a single verb from ‘contacted’ to ‘smashed’ made viewers estimate speeds nearly 25% higher and even misremember broken glass that never existed.",
    "The word **sardonic** traces back to ancient Greek *Sardonios* — linked to a bitter Sardinian herb said to twist a eater’s face into a grim, mocking grin.",
    "Broadsheet editors routinely test **three to five competing headlines** on the same article within minutes of publishing to see which emotionally loaded verb attracts the most clicks.",
    "George Orwell’s famous 1946 essay *Politics and the English Language* warned that vague passive phrases and euphemisms are deliberately crafted to disguise harsh realities as polite routine.",
    "In cross-text synthesis exams, the single fastest mark-booster is planning **3 shared theme rows** before writing: students who plan by theme write shorter, sharper essays and score higher than students twice as wordy.",
  ],
  activities: [
    {
      title: "The Loaded-Word Swap Lab",
      emoji: "🧪",
      materials: [
        "One short news paragraph (50–80 words)",
        "Two coloured highlighters (green for neutral, red for loaded)",
        "A notebook or tablet",
      ],
      steps: [
        "Pick a short paragraph from a newspaper opinion piece or travel review.",
        "Highlight every verb and adjective that carries strong emotional heat (such as *slashed, boasted, chaotic, gleaming, rammed*).",
        "Rewrite the paragraph twice: Version 1 replacing every loaded word with the driest neutral synonym; Version 2 flipping the bias to the exact opposite side.",
        "Read all three versions aloud — notice how the *facts* stay identical while the reader’s emotional verdict flips completely.",
      ],
      maths:
        "This isolates **connotation and loaded diction** from raw factual content — the exact Synonym Swap Test that exposes bias in seconds during timed Year 9 reading papers.",
    },
    {
      title: "The 30-Word Synthesis Squeeze",
      emoji: "🗜️",
      materials: [
        "Two short opinion paragraphs on opposite sides of any school or city issue",
        "A 3-minute timer",
      ],
      steps: [
        "Read Text A and Text B once, underlining just 3 key words in each (no full sentences!).",
        "Close or cover both passages so you cannot copy phrases verbatim.",
        "Write a **single sentence of 30 words or fewer** that captures both writers’ main stance using *Whereas*, *Although*, or *Conversely*.",
        "Uncover the passages and check: did you capture both perspectives accurately without lifting any 4-word string?",
      ],
      maths:
        "Forcing yourself to cover the text trains genuine **paraphrasing and conceptual synthesis** — replacing surface copying with crisp abstract nouns and integrated comparative connectives.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Fact → Opinion → Loaded Bias Spectrum",
      svg:
        '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrum showing how one event shifts from objective fact to reasoned opinion to loaded bias">' +
        '<rect x="0" y="0" width="560" height="220" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Same Event, Three Different Lenses</text>' +
        '<rect x="20" y="46" width="164" height="148" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="102" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">1. Objective Fact</text>' +
        '<text x="102" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">“The council raised</text>' +
        '<text x="102" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">peak parking fees</text>' +
        '<text x="102" y="120" text-anchor="middle" font-size="10" fill="var(--ink)">by $1.50 per hour.”</text>' +
        '<text x="102" y="150" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Verifiable &#x2022; Neutral verb</text>' +
        '<text x="102" y="166" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">No emotional steer</text>' +
        '<rect x="198" y="46" width="164" height="148" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="280" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">2. Reasoned View</text>' +
        '<text x="280" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">“Higher parking fees</text>' +
        '<text x="280" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">may ease traffic but</text>' +
        '<text x="280" y="120" text-anchor="middle" font-size="10" fill="var(--ink)">burden shift workers.”</text>' +
        '<text x="280" y="150" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Measured &#x2022; Weighs sides</text>' +
        '<text x="280" y="166" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Tentative (‘may’)</text>' +
        '<rect x="376" y="46" width="164" height="148" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>' +
        '<text x="458" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--bad)">3. Loaded Bias</text>' +
        '<text x="458" y="92" text-anchor="middle" font-size="10" fill="var(--ink)">“Greedy bureaucrats</text>' +
        '<text x="458" y="106" text-anchor="middle" font-size="10" fill="var(--ink)">ambush families with</text>' +
        '<text x="458" y="120" text-anchor="middle" font-size="10" fill="var(--ink)">a cruel cash-grab.”</text>' +
        '<text x="458" y="150" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Slanted adjectives</text>' +
        '<text x="458" y="166" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Omits traffic purpose</text>' +
        '</svg>',
      caption: "Distinguishing verifiable fact, reasoned opinion, and loaded bias keeps your tone evaluation sharp.",
    },
    {
      title: "The 3-Step ICE Inference Ladder",
      svg:
        '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-step ICE Inference Ladder from Imply to Clue to Explain">' +
        '<rect x="0" y="0" width="560" height="210" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">ICE Inference Blueprint (Zero Speculation)</text>' +
        '<rect x="24" y="46" width="154" height="136" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
        '<text x="101" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">I — Imply</text>' +
        '<text x="101" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">Make a focused claim</text>' +
        '<text x="101" y="110" text-anchor="middle" font-size="10" fill="var(--ink)">about unstated mood,</text>' +
        '<text x="101" y="126" text-anchor="middle" font-size="10" fill="var(--ink)">motive, or tension.</text>' +
        '<text x="101" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">implies / suggests</text>' +
        '<rect x="203" y="46" width="154" height="136" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="280" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">C — Clue</text>' +
        '<text x="280" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">Weave a crisp 1–4</text>' +
        '<text x="280" y="110" text-anchor="middle" font-size="10" fill="var(--ink)">word quotation right</text>' +
        '<text x="280" y="126" text-anchor="middle" font-size="10" fill="var(--ink)">into your sentence.</text>' +
        '<text x="280" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">“cracked compass”</text>' +
        '<rect x="382" y="46" width="154" height="136" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="459" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">E — Explain</text>' +
        '<text x="459" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">Unpack connotations,</text>' +
        '<text x="459" y="110" text-anchor="middle" font-size="10" fill="var(--ink)">silence, or irony —</text>' +
        '<text x="459" y="126" text-anchor="middle" font-size="10" fill="var(--ink)">stay tethered to text.</text>' +
        '<text x="459" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">subtext, not plot</text>' +
        '<line x1="178" y1="114" x2="200" y2="114" stroke="var(--ink)" stroke-width="2"/>' +
        '<polygon points="200,114 193,110 193,118" fill="var(--ink)"/>' +
        '<line x1="357" y1="114" x2="379" y2="114" stroke="var(--ink)" stroke-width="2"/>' +
        '<polygon points="379,114 372,110 372,118" fill="var(--ink)"/>' +
        '</svg>',
      caption: "Every top-band inference unites a tentative claim, an embedded micro-quotation, and precise subtext explanation.",
    },
  ],
  history: {
    title: "Nellie Bly & Reading Between the Official Lines (1887)",
    story:
      "In 1887, twenty-three-year-old journalist Nellie Bly noticed a glaring mismatch between official city brochures praising New York’s Blackwell’s Island asylum as ‘humane and orderly’ and whispered rumours from former patients. Refusing to accept sanitised press releases at face value, she went undercover inside the institution for ten days. Her resulting non-fiction series *Ten Days in a Mad-House* juxtaposed crisp, factual eyewitness observations against the hospital’s euphemistic official claims — exposing freezing baths, spoiled food, and abuse without slipping into melodrama. Public outrage forced an immediate grand-jury inquiry and nearly a million dollars in reform funding, proving that careful reading between official lines can change real lives.",
  },
};
