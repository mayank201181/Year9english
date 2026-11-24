import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "When Cambridge literature students were handed famous poems with the authors' names erased in 1929, half of them praised bad poems and trashed masterpieces — proving that close reading is a learnable skill, not magic.",
  didYouKnow: [
    "Reading an unseen poem **to the punctuation marks** instead of halting at every line ending eliminates over 60% of initial comprehension panic in timed Year 9 and GCSE exams.",
    "The Italian word **volta** literally means 'turn' (as in turning a corner on a winding street) — and in almost every short unseen poem, spotting that single turn unlocks the entire essay structure.",
    "Poets like Emily Dickinson frequently wrote **half-rhymes** (*pearl / alcohol*, *room / storm*) decades before modern verse normalised them, deliberately withholding sweet harmony to unsettle readers.",
    "The blank **white space** surrounding a short final stanza or isolated one-line *monostich* is a deliberate visual instrument: poets treat the printed page like a canvas, not merely storage for words.",
    "Cognitive researchers studying skilled literary readers found one standout habit: top readers pause to entertain **two contrasting interpretations** of a loaded image (*'arguably... yet simultaneously'*), whereas novices grab the very first literal paraphrase and rush on.",
  ],
  activities: [
    {
      title: "The 5-Minute Blind Poem Challenge",
      emoji: "⏱️",
      materials: ["A timer set for exactly 5 minutes", "Any short unseen poem (10–20 lines)", "Two coloured pens"],
      steps: [
        "**Minutes 0–2 (Pen DOWN):** Read the poem silently twice, stopping ONLY at full stops, semicolons, and dashes — never robotically at line ends.",
        "**Minute 3 (Colour 1):** Box the **Title**, draw a bracket around the **volta** (circle shift words like *Yet, But, Now, Still*), and jot a 5-word mood headline beside each stanza.",
        "**Minute 4 (Colour 2):** Underline **exactly 4 micro-quotations** (1–5 words each): one near the opening, one at the volta, one rich metaphor, and one in the closing line.",
        "**Minute 5:** Draft ONE 2-sentence **conceptual thesis** explaining the poem's big idea and tonal shift without naming a single literary device!",
      ],
      maths:
        "Training your brain to separate **Pass 1 (human meaning)** from **Pass 2 (craft selection)** eliminates feature-spotting under exam clock pressure and guarantees your paragraphs track the full arc.",
    },
    {
      title: "The Connotation Web Duel (Band 4 → Band 9)",
      emoji: "🕸️",
      materials: ["A blank sheet of paper", "One unfamiliar poetic metaphor (e.g., 'your forgiveness fell like late snow' or 'my bedroom is a museum of folded sleeves')"],
      steps: [
        "Write the **Vehicle** word (*snow*, *museum*, *harbour*, *collar*) inside a circle in the centre of your page.",
        "Draw **4 spokes** listing strictly *literal, everyday qualities* of that object (e.g., *museum* → hushed, treasured, behind glass, frozen in the past).",
        "Circle **one warm/positive spoke** and **one cold/unsettling spoke** — that collision is your **productive ambiguity**!",
        "Draft two sentences linking both spokes back to the poem's subject using tentative phrasing (*'Evokes... yet simultaneously implies...'*).",
      ],
      maths:
        "Every metaphor in any unseen poem obeys **Tenor + Vehicle transfer**. Unpacking literal qualities turns mysterious poetic lines into clear, repeatable top-band analysis.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Tone Vocabulary Upgrade Ladder (Banning 'Happy' & 'Sad')",
      caption:
        "Swap vague everyday mood labels for sharp, nuanced tone adjectives during Minute 3 of your unseen protocol.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tone upgrade chart replacing sad, angry, happy, and scared with precise exam-grade poetic tone adjectives">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Unseen Poetry Tone Upgrade Ladder</text>
  <rect x="20" y="42" width="120" height="36" rx="8" fill="var(--bad)" opacity="0.16" stroke="var(--bad)"/>
  <text x="80" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Instead of &quot;Sad&quot;</text>
  <rect x="154" y="42" width="386" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="347" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">wistful  ·  elegiac  ·  melancholic  ·  resigned  ·  mournful</text>
  <rect x="20" y="90" width="120" height="36" rx="8" fill="var(--bad)" opacity="0.16" stroke="var(--bad)"/>
  <text x="80" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Instead of &quot;Angry&quot;</text>
  <rect x="154" y="90" width="386" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="347" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">defiant  ·  sardonic  ·  bitter  ·  indignant  ·  accusatory</text>
  <rect x="20" y="138" width="120" height="36" rx="8" fill="var(--bad)" opacity="0.16" stroke="var(--bad)"/>
  <text x="80" y="160" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Instead of &quot;Happy&quot;</text>
  <rect x="154" y="138" width="386" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="347" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">tender  ·  reverent  ·  awestruck  ·  serene  ·  jubilant</text>
  <rect x="20" y="186" width="120" height="36" rx="8" fill="var(--bad)" opacity="0.16" stroke="var(--bad)"/>
  <text x="80" y="208" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">Instead of &quot;Mixed&quot;</text>
  <rect x="154" y="186" width="386" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="347" y="208" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">ambivalent  ·  bittersweet  ·  uneasy  ·  wry  ·  tentative</text>
  <text x="280" y="240" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Tip: Track a SHIFT between two tones across the volta (e.g. wistful → quietly defiant).</text>
</svg>`,
    },
    {
      title: "Integrating Language + Structure Inside One Paragraph",
      caption:
        "Never quarantine structure in a lonely final paragraph — weave line breaks, caesura, and rhyme right alongside single-word zoom.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison between weak separated technique paragraphs and strong integrated arc-driven language plus structure paragraphs">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Separated Feature-Spotting vs Integrated Arc Analysis</text>
  <rect x="20" y="44" width="246" height="186" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="143" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">Weak: Isolated Technique Silos</text>
  <rect x="38" y="80" width="210" height="34" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="143" y="101" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Para 1: Random Metaphors</text>
  <rect x="38" y="122" width="210" height="34" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="143" y="143" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Para 2: Random Sound Devices</text>
  <rect x="38" y="164" width="210" height="34" rx="6" fill="var(--surface)" stroke="var(--line)"/>
  <text x="143" y="185" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Para 3: &quot;The Structure&quot; (vague)</text>
  <text x="143" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">Misses emotional journey &amp; volta</text>
  <rect x="294" y="44" width="246" height="186" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="417" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">Top-Band: Integrated Arc</text>
  <rect x="312" y="80" width="210" height="34" rx="6" fill="var(--brand-soft)" opacity="0.5" stroke="var(--brand)"/>
  <text x="417" y="101" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Para 1: Opening (Imagery + Form)</text>
  <rect x="312" y="122" width="210" height="34" rx="6" fill="var(--brand-soft)" opacity="0.5" stroke="var(--brand)"/>
  <text x="417" y="143" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Para 2: Volta (Word Zoom + Break)</text>
  <rect x="312" y="164" width="210" height="34" rx="6" fill="var(--brand-soft)" opacity="0.5" stroke="var(--brand)"/>
  <text x="417" y="185" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Para 3: Ending (Ambiguity + Rhyme)</text>
  <text x="417" y="218" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--good)">Proves holistic mastery of craft</text>
</svg>`,
    },
  ],
  history: {
    title: "The 1929 Cambridge Blind-Poem Experiment That Invented Unseen Poetry Exams",
    story:
      "In the 1920s, Cambridge lecturer **I. A. Richards** grew suspicious that his brightest literature undergraduates were merely repeating memorised textbook opinions about famous poets rather than actually reading poems themselves. So he ran a bold experiment: he stripped away every poet's name, date, and biography from thirteen poems — mixing celebrated classics with sentimental magazine verse — and asked students to write honest close analyses. Published in *Practical Criticism* (1929), the results shocked British education: without famous labels to lean on, students missed basic literal meanings, misread irony, and praised clichés! That single classroom experiment gave birth to the modern **Unseen Poetry examination** — testing genuine independent close reading rather than memorised notes.",
  },
};
