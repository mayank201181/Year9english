"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type FormId = "sonnet" | "monologue" | "ballad" | "free-verse";

interface AnnotatedLine {
  num: number;
  text: string;
  tag?: "volta" | "caesura" | "enjambment" | "refrain";
  note?: string;
}

interface FormSpecimen {
  label: string;
  metre: string;
  rhyme: string;
  rhythmFeel: string;
  beats: number[];
  title: string;
  lines: AnnotatedLine[];
  effectSummary: string;
  sentenceFrame: string;
}

const FORM_SPECIMENS: Record<FormId, FormSpecimen> = {
  sonnet: {
    label: "Subverted Sonnet",
    metre: "Iambic pentameter (10 syl, disrupted at close)",
    rhyme: "ABAB — disrupted at line 4",
    rhythmFeel: "Measured pride → sudden collapse",
    beats: [0.3, 0.85, 0.3, 0.85, 0.3, 0.85, 0.3, 0.85, 0.3, 0.85],
    title: "Excerpt: The Iron Arch (Original Sonnet Turn)",
    lines: [
      { num: 8, text: "The marble ruler swore his gate would stand.", note: "End-stopped pride (10 syllables)" },
      { num: 9, text: "Yet frost — quiet, patient — pried the plinth", tag: "volta", note: "VOLTA (‘Yet’) + CAESURA (‘— quiet, patient —’)" },
      { num: 10, text: "wide open till grey weeds reclaimed the square.", tag: "enjambment", note: "ENJAMBMENT from line 9 (‘plinth / wide open’)" },
      { num: 11, text: "No empire answers.", tag: "caesura", note: "Truncated short line: audible vacuum of ruin" },
    ],
    effectSummary:
      "Using a sonnet traditionally linked to lasting glory makes its broken metre and abrupt volta (‘Yet’) feel like imperial permanence cracking before our eyes.",
    sentenceFrame:
      "By pivoting sharply at the volta (“Yet”) and fracturing the sonnet’s steady rhythm, the poet structurally enacts political hubris collapsing beneath time.",
  },
  monologue: {
    label: "Dramatic Monologue",
    metre: "Conversational iambic pentameter",
    rhyme: "Controlling rhyming couplets",
    rhythmFeel: "Smooth arrogance masking cold menace",
    beats: [0.3, 0.8, 0.35, 0.85, 0.3, 0.8, 0.95, 0.25, 0.8, 0.9],
    title: "Excerpt: The Governor’s Map (Original Monologue)",
    lines: [
      { num: 1, text: "Admire how cleanly every border lies —", tag: "caesura", note: "Imperative (‘Admire’) addressing silent listener" },
      { num: 2, text: "We cleared three crooked streets of noisy trade", tag: "enjambment", note: "Euphemism (‘cleared’) spilling into next line" },
      { num: 3, text: "so straight stone boulevards might bear my name.", note: "Possessive ‘my name’ reveals petty narcissism" },
      { num: 4, text: "Yet still — why do you glance down at the dust?", tag: "volta", note: "VOLTA + CAESURA exposing subtle paranoia" },
    ],
    effectSummary:
      "One boastful persona controls every line before an implied silent guest; the poet plants euphemisms (‘cleared’) and a twitchy question so the speaker condemns himself.",
    sentenceFrame:
      "Through dramatic monologue, the poet separates speaker from writer, allowing the governor’s commanding imperatives and smooth couplets to expose cold arrogance.",
  },
  ballad: {
    label: "Conflict Ballad",
    metre: "Driving rhythmic pulse (marching cadence)",
    rhyme: "ABCB + echoing refrain",
    rhythmFeel: "Relentless marching inevitability",
    beats: [0.9, 0.3, 0.3, 0.9, 0.3, 0.3, 0.9, 0.3, 0.9, 0.3],
    title: "Excerpt: Night Column (Original Ballad Stanza)",
    lines: [
      { num: 1, text: "Forward through sleet where the iron rails bend,", note: "Strong marching beat drives the stanza ahead" },
      { num: 2, text: "Boots in the mud to the drumbeat’s call;", note: "Plosives (‘Boots’, ‘drumbeat’s’) mimic marching" },
      { num: 3, text: "Orders were sealed — no soldier may ask —", tag: "caesura", note: "CAESURA locks obedience inside clipped dashes" },
      { num: 4, text: "Still no reply from the watchtower wall.", tag: "refrain", note: "REFRAIN reinforces inescapable futility" },
    ],
    effectSummary:
      "Marching ballad beats carry readers briskly forward like disciplined soldiers obeying orders, while the bleak closing refrain turns momentum into entrapment.",
    sentenceFrame:
      "The insistent marching cadence of the ballad form propels the soldiers inexorably ahead, while the recurring refrain traps them inside sterile obedience.",
  },
  "free-verse": {
    label: "Free Verse",
    metre: "Irregular / unrhymed (no fixed beat)",
    rhyme: "None (deliberate dissonance)",
    rhythmFeel: "Breathless, jagged psychological fracture",
    beats: [0.85, 0.2, 0.9, 0.9, 0.15, 0.75, 0.3, 0.95, 0.2, 0.4],
    title: "Excerpt: Kitchen Kettle (Original Free Verse)",
    lines: [
      { num: 1, text: "The kettle screams — I drop flat", tag: "caesura", note: "CAESURA + ENJAMBMENT: sudden shock reflex" },
      { num: 2, text: "beneath the scrubbed pine table", tag: "enjambment", note: "Domestic image (‘pine table’) invaded by war" },
      { num: 3, text: "counting three dry heartbeats — one — two —", tag: "caesura", note: "Broken dashes enact racing breath" },
      { num: 4, text: "until the walls stop remembering smoke.", tag: "volta", note: "VOLTA: haunting quiet aftermath" },
    ],
    effectSummary:
      "Discarding rhyme and regular syllable counts lets ragged line breaks and sudden dashes physically enact post-conflict trauma invading an ordinary kitchen.",
    sentenceFrame:
      "Rejecting neat rhyming cages, the poet adopts fractured free verse and spilling enjambment so the form itself mimics involuntary wartime flashbacks.",
  },
};

const TAG_STYLE: Record<NonNullable<AnnotatedLine["tag"]>, string> = {
  volta: "bg-warn-soft text-warn",
  caesura: "bg-brand-soft text-brand",
  enjambment: "bg-good-soft text-good",
  refrain: "bg-info-soft text-info",
};

function PoeticFormExplorer() {
  const [form, setForm] = useState<FormId>("sonnet");
  const [showOverlay, setShowOverlay] = useState(true);

  const spec = FORM_SPECIMENS[form];

  return (
    <WidgetFrame
      title="Poetic Form, Volta & Metre Explorer"
      tryThis={[
        "Switch between **Sonnet** and **Free Verse**: watch how the syllable-stress wave changes from steady control to jagged fracture.",
        "Toggle **Structural Annotations** on and off to test whether you can spot each **volta**, **caesura** and **enjambment** yourself first!",
      ]}
      caption={
        <span>
          <strong>Form-to-meaning insight:</strong> {spec.effectSummary}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented<FormId>
            label="Select poetic form"
            value={form}
            onChange={setForm}
            options={[
              { value: "sonnet", label: "Sonnet" },
              { value: "monologue", label: "Monologue" },
              { value: "ballad", label: "Ballad" },
              { value: "free-verse", label: "Free Verse" },
            ]}
          />
          <button
            type="button"
            onClick={() => setShowOverlay((v) => !v)}
            className="btn btn-secondary btn-sm self-start sm:self-auto"
          >
            {showOverlay ? "Hide Structural Overlay" : "Show Structural Overlay"}
          </button>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">
            <span>{spec.title}</span>
            <span className="chip">{spec.label}</span>
          </div>
          <div className="space-y-2.5">
            {spec.lines.map((line) => (
              <div key={line.num} className="min-w-0 rounded-lg bg-surface p-2.5 border border-line">
                <div className="flex items-start gap-2.5">
                  <span className="w-6 shrink-0 text-right font-mono text-xs font-bold text-ink-2">
                    L{line.num}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-base leading-snug text-ink">{line.text}</p>
                    {showOverlay && line.note ? (
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        {line.tag ? (
                          <span className={`rounded px-1.5 py-0.5 text-[0.7rem] font-extrabold uppercase ${TAG_STYLE[line.tag]}`}>
                            {line.tag}
                          </span>
                        ) : null}
                        <span className="text-xs font-semibold text-ink-2">{line.note}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-1 flex items-center justify-between text-xs font-bold text-ink-2">
            <span>Acoustic Stress Profile (Unstressed vs Stressed Syllables)</span>
            <span className="text-ink">{spec.rhythmFeel}</span>
          </div>
          <svg
            viewBox="0 0 400 76"
            className="h-auto w-full"
            role="img"
            aria-label={`Syllable stress pattern for ${spec.label}`}
          >
            <line x1="16" y1="62" x2="384" y2="62" className="stroke-line" strokeWidth="1" />
            {spec.beats.map((amp, idx) => {
              const x = 24 + idx * 38;
              const h = Math.round(amp * 46);
              const isHigh = amp >= 0.7;
              return (
                <g key={idx}>
                  <rect
                    x={x}
                    y={62 - h}
                    width={22}
                    height={h}
                    rx={4}
                    className={isHigh ? "fill-brand" : "fill-surface-2 stroke-line"}
                    strokeWidth={isHigh ? 0 : 1}
                  />
                  <text x={x + 11} y={73} textAnchor="middle" fontSize="9" className="fill-ink-2 font-bold">
                    {isHigh ? "/" : "u"}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Metre" value={spec.metre} tone="ink" />
          <Readout label="Rhyme Control" value={spec.rhyme} tone="brand" />
          <Readout label="Poetic Form" value={spec.label} tone="good" />
        </div>

        <div className="rounded-xl border border-line bg-info-soft p-3 text-sm text-ink">
          <div className="text-xs font-extrabold uppercase tracking-wide text-info">Essay Sentence Frame</div>
          <p className="mt-1 leading-relaxed">{spec.sentenceFrame}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

type MiniPoemId = "arch" | "watch" | "seawall" | "passport";
type AxisId = "theme" | "form" | "sound";

interface MiniPoem {
  id: MiniPoemId;
  title: string;
  dimension: string;
  excerpt: string;
  tone: string;
  formNote: string;
  soundNote: string;
  microQuote: string;
  analysisA: Record<AxisId, string>;
  analysisB: Record<AxisId, string>;
}

const MINI_POEMS: Record<MiniPoemId, MiniPoem> = {
  arch: {
    id: "arch",
    title: "The Bronze Arch",
    dimension: "Political Tyranny & Hubris",
    excerpt: "“His gilded statue glared across the square; / Yet ivy split the plinth while emperors slept.”",
    tone: "Ironic & satirical",
    formNote: "Subverted sonnet turn (‘Yet’)",
    soundNote: "Sharp plosives (‘split’, ‘plinth’) vs quiet sibilance (‘slept’)",
    microQuote: "“ivy split the plinth”",
    analysisA: {
      theme: "In ‘The Bronze Arch,’ the poet punctures political hubris as humble “ivy split the plinth” beneath a glaring monument, exposing tyranny as temporary.",
      form: "In ‘The Bronze Arch,’ a sharp volta (“Yet”) divides royal vanity from silent collapse, letting structure physically enact imperial downfall.",
      sound: "In ‘The Bronze Arch,’ crisp plosives in “split the plinth” crack the monument’s boast before hushed sibilance (“slept”) seals rulers inside complacent oblivion.",
    },
    analysisB: {
      theme: "‘The Bronze Arch’ satirises grandiose political arrogance from ironic distance, allowing slow natural decay (“ivy split the plinth”) to humble empires effortlessly.",
      form: "‘The Bronze Arch’ relies on a disciplined sonnet-style volta (“Yet”) to stage an abrupt, ironic deflation of tyrannical permanence.",
      sound: "‘The Bronze Arch’ pairs cracking plosives (“split the plinth”) with quiet sibilance (“slept”) to mock oblivious rulers overtaken by time.",
    },
  },
  watch: {
    id: "watch",
    title: "Winter Watch",
    dimension: "Warfare & Futility",
    excerpt: "“Frost knifed our stiffened palms beneath the flare — / Still nothing moved along the blackened wire.”",
    tone: "Bleak & disillusioned",
    formNote: "Caesura dash + recurring bleak refrain (‘Still nothing’)",
    soundNote: "Violent verb (‘knifed’) + heavy fricatives (‘Frost’, ‘flare’)",
    microQuote: "“Frost knifed our stiffened palms”",
    analysisA: {
      theme: "In ‘Winter Watch,’ the poet strips warfare of glory as “Frost knifed our stiffened palms,” presenting freezing nature and stalemate as the true enemies.",
      form: "In ‘Winter Watch,’ a mid-line caesura dash suspends tension before the bleak anti-climax “Still nothing moved,” trapping soldiers inside fruitless waiting.",
      sound: "In ‘Winter Watch,’ scraping fricatives (“Frost”, “stiffened”, “flare”) mimic biting winter wind scouring helpless, exhausted troops.",
    },
    analysisB: {
      theme: "‘Winter Watch’ immerses the reader intimately in collective physical endurance (“our stiffened palms”), indicting war’s numbing waste rather than distant tyranny.",
      form: "‘Winter Watch’ stalls forward movement behind a stark caesura and static refrain (“Still nothing moved”), enacting paralysing futility.",
      sound: "‘Winter Watch’ deploys harsh fricatives (“Frost”, “flare”) and stabbing diction (“knifed”) to convey relentless bodily suffering.",
    },
  },
  seawall: {
    id: "seawall",
    title: "The Seawall",
    dimension: "Nature’s Dominance",
    excerpt: "“The concrete pier braced square against the gale — crack — / black surf vaulted straight over the harbour steps.”",
    tone: "Awestruck & humbling (sublime)",
    formNote: "Jagged caesura (‘— crack —’) + spilling enjambment",
    soundNote: "Plosive onomatopoeia (‘crack’) + hard ‘b/k’ impacts",
    microQuote: "“black surf vaulted straight”",
    analysisA: {
      theme: "In ‘The Seawall,’ nature’s sublime power dwarfs human engineering as “black surf vaulted straight” over rigid concrete defences effortlessly.",
      form: "In ‘The Seawall,’ violent caesura (“— crack —”) snaps the line visually before spilling enjambment mimics uncontrollable water flooding inland.",
      sound: "In ‘The Seawall,’ explosive plosives (“concrete”, “crack”, “black”) hammer acoustically against the wall until human structures buckle.",
    },
    analysisB: {
      theme: "‘The Seawall’ dramatises awe-inspiring natural speed (“black surf vaulted straight”) overpowering physical defences in a single terrifying instant.",
      form: "‘The Seawall’ shatters lineation with an abrupt mid-line dash (“— crack —”) and tumbling enjambment to mirror surging floodwaters.",
      sound: "‘The Seawall’ unleashes percussive plosives and onomatopoeia (“crack”) to make nature’s assault physically audible.",
    },
  },
  passport: {
    id: "passport",
    title: "Two Passports",
    dimension: "Internal & Identity Conflict",
    excerpt: "“The clerk stamped VOID across my father’s town; / Now half my tongue stays folded in my coat.”",
    tone: "Quietly indignant & elegiac",
    formNote: "Sharp semicolon juxtaposition (public stamp vs private speech)",
    soundNote: "Blunt plosive (‘stamped VOID’) vs soft domestic metaphor (‘folded’)",
    microQuote: "“half my tongue stays folded”",
    analysisA: {
      theme: "In ‘Two Passports,’ cold institutional authority wounds personal heritage as a bureaucrat “stamped VOID” over home, fracturing the speaker’s identity.",
      form: "In ‘Two Passports,’ a crisp semicolon juxtaposes brisk state erasure in line 1 against lingering private silence in line 2.",
      sound: "In ‘Two Passports,’ the brutal plosive “stamped VOID” clashes violently with the tender domestic verb “folded,” highlighting silenced culture.",
    },
    analysisB: {
      theme: "‘Two Passports’ shifts conflict inward into everyday cultural displacement, where “half my tongue stays folded” embodies quiet assimilation and grief.",
      form: "‘Two Passports’ pivots across a tight semicolon and temporal marker (“Now”) to prove that a single bureaucratic moment echoes across a lifetime.",
      sound: "‘Two Passports’ contrasts sharp percussive bureaucracy (“stamped VOID”) against hushed internal restraint (“stays folded”) to elicit poignant sympathy.",
    },
  },
};

const POEM_LIST: MiniPoemId[] = ["arch", "watch", "seawall", "passport"];

function ComparativeMatrixBuilder() {
  const [poemAId, setPoemAId] = useState<MiniPoemId>("arch");
  const [poemBId, setPoemBId] = useState<MiniPoemId>("watch");
  const [axis, setAxis] = useState<AxisId>("theme");
  const [useContrast, setUseContrast] = useState(true);

  const poemA = MINI_POEMS[poemAId];
  const safeBId: MiniPoemId = poemBId === poemAId ? POEM_LIST.find((id) => id !== poemAId) ?? "watch" : poemBId;
  const poemB = MINI_POEMS[safeBId];

  const connective = useContrast ? "Conversely," : "Similarly, yet with a sharper shift in focus,";

  const sharedClaim =
    axis === "theme"
      ? `Both ‘${poemA.title}’ and ‘${poemB.title}’ reveal how forces larger than the individual expose human vulnerability, ${useContrast ? "yet they locate that struggle in contrasting arenas of power." : "echoing a shared critique of fragile human control."}`
      : axis === "form"
        ? `Both poets weaponise structural turning points and punctuation so poetic architecture physically enacts conflict, ${useContrast ? "though each shapes reader rhythm toward a distinct emotional end." : "reinforcing thematic tension directly through lineation."}`
        : `Both poets layer carefully chosen acoustic textures underneath visual imagery so the reader hears the conflict aloud, ${useContrast ? "yet their contrasting soundscapes evoke sharply different moods." : "aligning phonology directly with power and vulnerability."}`;

  const synthesis = useContrast
    ? `Ultimately, contrasting ‘${poemA.title}’ (${poemA.tone.toLowerCase()}) beside ‘${poemB.title}’ (${poemB.tone.toLowerCase()}) demonstrates how Power & Conflict poetry stretches from external spectacle to lived human cost.`
    : `Together, both extracts prove that whether through ${poemA.microQuote} or ${poemB.microQuote}, poets expose how swiftly authority and vulnerability collide.`;

  return (
    <WidgetFrame
      title="Comparative Poetry Matrix Builder"
      tryThis={[
        "Pair **The Bronze Arch** with **Two Passports** to see how a political-hubris poem compares conceptually with an identity-conflict poem.",
        "Switch the comparison lens from **Theme** to **Form** or **Sound** to see how to weave methods through meaning (never ‘both use metaphors’!).",
      ]}
      caption={
        <span>
          <strong>Integrated comparison rule:</strong> Every single paragraph stays anchored to <strong>C–A–P–B–S</strong> (Claim → Poem A → Pivot → Poem B → Synthesis) so neither poem ever sits isolated in a block.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">Poem A</div>
            <Segmented<MiniPoemId>
              label="Choose Poem A"
              value={poemAId}
              onChange={(next) => {
                setPoemAId(next);
                if (next === safeBId) {
                  setPoemBId(POEM_LIST.find((id) => id !== next) ?? "watch");
                }
              }}
              options={POEM_LIST.map((id) => ({ value: id, label: MINI_POEMS[id].title.replace("The ", "") }))}
            />
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-extrabold uppercase tracking-wide text-info">Poem B</div>
            <Segmented<MiniPoemId>
              label="Choose Poem B"
              value={safeBId}
              onChange={(next) => {
                if (next !== poemAId) setPoemBId(next);
              }}
              options={POEM_LIST.filter((id) => id !== poemAId).map((id) => ({
                value: id,
                label: MINI_POEMS[id].title.replace("The ", ""),
              }))}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<AxisId>
            label="Comparison lens"
            value={axis}
            onChange={setAxis}
            options={[
              { value: "theme", label: "Lens: Theme & Attitude" },
              { value: "form", label: "Lens: Form & Lineation" },
              { value: "sound", label: "Lens: Sound & Imagery" },
            ]}
          />
          <button
            type="button"
            onClick={() => setUseContrast((v) => !v)}
            className="btn btn-secondary btn-sm"
          >
            Pivot: {useContrast ? "Contrast (Conversely)" : "Nuanced Similarity"}
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="font-extrabold text-brand">{poemA.title}</span>
              <span className="chip">{poemA.tone}</span>
            </div>
            <p className="mt-1.5 font-serif italic text-ink">{poemA.excerpt}</p>
            <div className="mt-2 space-y-0.5 text-xs text-ink-2">
              <div><strong>Dimension:</strong> {poemA.dimension}</div>
              <div><strong>Form:</strong> {poemA.formNote}</div>
              <div><strong>Sound:</strong> {poemA.soundNote}</div>
            </div>
          </div>
          <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="font-extrabold text-info">{poemB.title}</span>
              <span className="chip">{poemB.tone}</span>
            </div>
            <p className="mt-1.5 font-serif italic text-ink">{poemB.excerpt}</p>
            <div className="mt-2 space-y-0.5 text-xs text-ink-2">
              <div><strong>Dimension:</strong> {poemB.dimension}</div>
              <div><strong>Form:</strong> {poemB.formNote}</div>
              <div><strong>Sound:</strong> {poemB.soundNote}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-ink">
          <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Live Woven Comparative Paragraph (C–A–P–B–S)
          </div>
          <p>
            <span className="rounded bg-surface-2 px-1 py-0.5 font-bold text-ink">{sharedClaim}</span>{" "}
            <span className="rounded bg-brand-soft px-1 py-0.5 text-ink">{poemA.analysisA[axis]}</span>{" "}
            <span className="rounded bg-warn-soft px-1.5 py-0.5 font-extrabold text-warn">{connective}</span>{" "}
            <span className="rounded bg-info-soft px-1 py-0.5 text-ink">{poemB.analysisB[axis]}</span>{" "}
            <span className="rounded bg-good-soft px-1 py-0.5 font-semibold text-ink">{synthesis}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded bg-surface-2 px-2 py-0.5 text-ink">C: Shared Claim</span>
            <span className="rounded bg-brand-soft px-2 py-0.5 text-brand">A: {poemA.title}</span>
            <span className="rounded bg-warn-soft px-2 py-0.5 text-warn">P: Connective Pivot</span>
            <span className="rounded bg-info-soft px-2 py-0.5 text-info">B: {poemB.title}</span>
            <span className="rounded bg-good-soft px-2 py-0.5 text-good">S: Synthesis</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Structure Style" value="Woven Integrated" tone="good" />
          <Readout label="Pivot Mode" value={useContrast ? "Contrast" : "Nuanced Parallel"} tone="brand" />
          <Readout label="Poems Compared" value="2 per paragraph" tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "poetic-form-metre-explorer",
    title: "Poetic Form, Volta & Metre Explorer",
    blurb: "Inspect sonnets, dramatic monologues, ballads and free verse with live scansion beat maps and toggleable volta/caesura/enjambment overlays.",
    Component: PoeticFormExplorer,
  },
  {
    id: "comparative-matrix-builder",
    title: "Comparative Poetry Matrix Builder",
    blurb: "Pair any two unseen Power & Conflict extracts across Theme, Form or Sound to build a colour-coded C–A–P–B–S woven comparative paragraph.",
    Component: ComparativeMatrixBuilder,
  },
];
