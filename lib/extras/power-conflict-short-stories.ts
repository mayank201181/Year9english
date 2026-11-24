import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can a writer stage a full coup, a moral collapse, or a chilling betrayal in fewer words than a weekend essay? Because in a short story, every comma, silence, and silver key is loaded like a spring.",
  didYouKnow: [
    "Edgar Allan Poe argued in 1842 that a true short story should be readable in a **single sitting** so nothing interrupts the 'unity of effect' — a rule thriller screenwriters still follow for TV cold opens.",
    "Anton Chekhov's famous advice — *'If you say in the first chapter that there is a rifle hanging on the wall, in the second or third chapter it absolutely must go off'* — came from personal letters coaching young authors on cutting wasted detail.",
    "Guy de Maupassant wrote over **300 short stories** in just one decade for Parisian daily newspapers, inventing the razor-sharp ironic twist ending because readers bought the next issue if the final line stunned them.",
    "Linguists studying courtroom cross-examinations find the exact same dialogue power tools you analyse in short fiction: **closed interrogatives**, **strategic interruptions**, and **bare commands**.",
    "Film editors often measure tension using **average shot length (ASL)** — shrinking from 10-second establishing shots to 1-second close-ups in climaxes, mirroring the exact prose shift from hypotaxis to parataxis.",
  ],
  activities: [
    {
      title: "The 30-Word Syntax Stress Test",
      emoji: "⏱️",
      materials: ["A pencil or notes app", "Any 2–3 sentence suspense paragraph you write yourself", "A highlighter"],
      steps: [
        "Write one calm, slow 25-word opening sentence describing an ordinary courtyard, hallway, or classroom where a character holds a hidden note.",
        "Immediately follow it with three paratactic sentences or minor fragments totalling **fewer than 10 words** as an authority figure enters.",
        "Read the two halves aloud to a partner and count words per sentence (`25 → 4 → 2 → 1`).",
        "Highlight the exact word or punctuation mark where your voice naturally dropped or accelerated — then write one WHAT–HOW–WHY sentence explaining that shift.",
      ],
      maths:
        "You have just engineered **syntactic contrast**. Short fragments only hit like a heartbeat when set directly against longer, measured hypotaxis — proving pacing is shaped by rhythm, not just dramatic plot events.",
    },
    {
      title: "Subtext Table-Read: Polite Coercion",
      emoji: "🎭",
      materials: ["Two partners (Speaker A and Speaker B)", "One everyday prop (a cup, pen, or book)"],
      steps: [
        "Write a four-line dialogue where Speaker A holds institutional power over Speaker B, but **neither speaker is allowed to shout or state a direct threat**.",
        "Give Speaker A one polite euphemism, one interruption (`—`), and one calm domestic action with the prop (e.g., straightening the book slowly).",
        "Give Speaker B one tentative hedge (`perhaps / only`) followed by one subtle physical rebellion (e.g., refusing to sit down or meeting A's eyes in silence).",
        "Perform the scene once aloud, then annotate each turn with **P↑** (seizing power) or **P↓** (yielding power) to see where the power balance flips.",
      ],
      maths:
        "This exercise exposes the **dialogue iceberg**: surface politeness hides coercive subtext, while body language and strategic silence shift psychological dominance without raising volume.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Four Short-Story Ending Shapes & Their Thematic Messages",
      caption:
        "Compare the opening equilibrium with the final line to diagnose which structural ending shapes the writer's message about power.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four short-story ending patterns: twist reversal, epiphany insight, cyclical trap, and ambiguous cutoff">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Four Short-Story Ending Architectures</text>
  <rect x="22" y="42" width="248" height="90" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="36" y="64" font-size="12" font-weight="800" fill="var(--brand)">1. Twist / Ironic Reversal</text>
  <text x="36" y="84" font-size="10" fill="var(--ink)">Upends everything you assumed earlier.</text>
  <text x="36" y="102" font-size="10" fill="var(--ink-2)">Effect: Exposes hubris, blind hatred, or</text>
  <text x="36" y="117" font-size="10" fill="var(--ink-2)">cruel illusion in a single final beat.</text>
  <rect x="290" y="42" width="248" height="90" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="304" y="64" font-size="12" font-weight="800" fill="var(--good)">2. Epiphany (Sudden Insight)</text>
  <text x="304" y="84" font-size="10" fill="var(--ink)">Protagonist grasps a painful moral truth.</text>
  <text x="304" y="102" font-size="10" fill="var(--ink-2)">Effect: Shifts conflict inward so the</text>
  <text x="304" y="117" font-size="10" fill="var(--ink-2)">character sees their world differently.</text>
  <rect x="22" y="146" width="248" height="90" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="36" y="168" font-size="12" font-weight="800" fill="var(--bad)">3. Cyclical Echo</text>
  <text x="36" y="188" font-size="10" fill="var(--ink)">Closing image mirrors the opening scene.</text>
  <text x="36" y="206" font-size="10" fill="var(--ink-2)">Effect: Implies systemic entrapment or</text>
  <text x="36" y="221" font-size="10" fill="var(--ink-2)">power repeating with new victims.</text>
  <rect x="290" y="146" width="248" height="90" rx="10" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="304" y="168" font-size="12" font-weight="800" fill="var(--ink)">4. Ambiguous Cutoff</text>
  <text x="304" y="188" font-size="10" fill="var(--ink)">Stops right on a knife-edge choice.</text>
  <text x="304" y="206" font-size="10" fill="var(--ink-2)">Effect: Refuses easy comfort so the moral</text>
  <text x="304" y="221" font-size="10" fill="var(--ink-2)">tension lingers in the reader&apos;s mind.</text>
</svg>`,
    },
    {
      title: "Power Flip Tracker Across a Dialogue Scene",
      caption:
        "Top-band responses track how dominance tilts across turns rather than treating one character as permanently powerful.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Power balance graph showing authority opening high through imperatives and interruptions, dipping during shouting, and flipping during quiet defiant proof">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Tracking a Power Flip Across Dialogue Turns</text>
  <line x1="56" y1="126" x2="520" y2="126" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="5,5"/>
  <text x="48" y="64" text-anchor="end" font-size="10" font-weight="700" fill="var(--bad)">Official</text>
  <text x="48" y="130" text-anchor="end" font-size="10" fill="var(--ink-2)">Equal</text>
  <text x="48" y="196" text-anchor="end" font-size="10" font-weight="700" fill="var(--good)">Rebel</text>
  <polyline points="85,68 205,78 330,118 475,186" fill="none" stroke="var(--brand)" stroke-width="3.5" stroke-linejoin="round"/>
  <circle cx="85" cy="68" r="6" fill="var(--bad)"/>
  <circle cx="205" cy="78" r="6" fill="var(--bad)"/>
  <circle cx="330" cy="118" r="6" fill="var(--brand)"/>
  <circle cx="475" cy="186" r="7" fill="var(--good)"/>
  <text x="108" y="54" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">1. Bare imperatives</text>
  <text x="225" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">2. Polite euphemism</text>
  <text x="342" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">3. Shouting = cracks</text>
  <text x="456" y="212" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">4. Calm silence &amp; proof</text>
  <rect x="60" y="222" width="450" height="20" rx="5" fill="var(--surface-2)"/>
  <text x="285" y="236" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)">Watch for the pivot where loud anger exposes weakness and calm control flips dominance.</text>
</svg>`,
    },
  ],
  history: {
    title: "How 19th-Century Newspaper Columns Invented Modern Short-Story Economy",
    story:
      "In the late 1800s, explosive growth in weekly magazines and Parisian newspapers (*feuilletons*) gave writers like Anton Chekhov and Guy de Maupassant a strict mechanical constraint: **fit an entire human drama into two printed columns**. Chekhov began his career churning out razor-tight sketches to pay for medical school, cutting every superfluous adjective until a single trembling teacup or winter coat spoke volumes. That ruthless space limit forged the exact toolkit you study in Year 9 today — *in media res* openings, Chekhov's Gun motifs, charged dialogue subtext, and punchy ironic endings.",
  },
};
