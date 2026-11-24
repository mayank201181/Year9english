"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: Tension Arc & Syntax Pacing Lab
// ===========================================================================
type SyntaxMode = "hypotaxis" | "contrast" | "parataxis";
type FocalZoom = "wide" | "mid" | "closeup";

interface StageData {
  name: string;
  x: number;
  baseY: number;
  baseTension: number;
  role: string;
}

const STAGES: readonly StageData[] = [
  { name: "Exposition (In Media Res)", x: 46, baseY: 112, baseTension: 4, role: "Establishes stakes and hierarchy immediately." },
  { name: "Inciting Incident", x: 124, baseY: 98, baseTension: 6, role: "Shatters uneasy calm with an irreversible trigger." },
  { name: "Rising Action", x: 244, baseY: 68, baseTension: 8, role: "Narrows exits and piles up psychological pressure." },
  { name: "Climax Peak", x: 356, baseY: 32, baseTension: 10, role: "Delivers the decisive confrontation or power shift." },
  { name: "Brief Denouement", x: 424, baseY: 96, baseTension: 5, role: "Leaves an ironic, cyclical, or ambiguous aftershock." },
];

const EXTRACTS: Record<SyntaxMode, Record<FocalZoom, { text: string; avgWords: number; analysis: string }>> = {
  hypotaxis: {
    wide: {
      text: "Although grey rain drifted lazily across the courtyard railings while evening bells echoed over distant slate roofs, the residents kept every shutter latched tightly behind dimmed lamps.",
      avgWords: 28,
      analysis:
        "Long hypotactic syntax paired with a wide establishing shot slows time into suffocating, eerie calm — ideal for building quiet dread before danger strikes.",
    },
    mid: {
      text: "Because the inspector lingered beside the stairwell banister while turning the brass latch slowly between his gloved fingers, Mira held her breath inside the shadowy doorway.",
      avgWords: 26,
      analysis:
        "Nested subordinate clauses ('Because... while...') delay the main action at mid-range, stretching five seconds of waiting into slow-motion suspense.",
    },
    closeup: {
      text: "While a single bead of rain slid across the scratched tin box tucked beneath her coat sleeve, Mira felt every slow pulse beating inside her clenched throat.",
      avgWords: 27,
      analysis:
        "Pairing flowing hypotaxis with a tight sensory close-up traps the reader inside obsessive hyper-awareness, proving slow syntax can intensify claustrophobia.",
    },
  },
  contrast: {
    wide: {
      text: "Across the harbour, bright ferries glided calmly past quiet stone steps while gulls wheeled through pale mist. Then the patrol horn sounded. Every shutter slammed.",
      avgWords: 12,
      analysis:
        "Syntactic contrast works like a trapdoor: the leisurely 18-word wide shot lulls the reader before abrupt 4- and 3-word sentences shatter normality.",
    },
    mid: {
      text: "For ten endless minutes the warden sorted beige folders into tidy stacks across the oak counter without glancing up. Then he stopped. 'Empty your pockets.'",
      avgWords: 11,
      analysis:
        "Moving from a calm 18-word institutional routine into a three-word halt and bare imperative jolts the reader at the exact instant polite boredom turns coercive.",
    },
    closeup: {
      text: "Rain drummed softly on the window glass while the pendulum clock ticked steady and patient above the locked drawer. One floorboard creaked. Closer now. Right outside.",
      avgWords: 9,
      analysis:
        "Combining rhythmic drop-off with a narrowing close-up creates textbook thriller pacing: calm regularity fractures into panic-stricken minor sentences.",
    },
  },
  parataxis: {
    wide: {
      text: "Sirens cut out. Streetlamps died along the avenue. Gates slammed. Shadows scattered across the empty square. Nobody looked back.",
      avgWords: 4,
      analysis:
        "Pure parataxis across a wide shot creates stark, journalistic shock — snapping rapidly from threat to threat without comforting conjunctions.",
    },
    mid: {
      text: "The latch clicked. Boots crossed the threshold. Torchlight swept the desk. Mira did not blink. She gripped the folded pamphlet.",
      avgWords: 4,
      analysis:
        "Clipped independent clauses strip away reflection, mimicking instant adrenaline and physical confrontation at arm's length.",
    },
    closeup: {
      text: "Footsteps. One tread. Two. Brass key scraping iron. Breath snagged. Cold palm on the wooden bolt. Wait.",
      avgWords: 2,
      analysis:
        "Maximum compression: verbless minor sentences and a claustrophobic close-up replicate a racing heartbeat and tunnel vision at peak climax.",
    },
  },
};

function TensionSyntaxLab() {
  const [stageIdx, setStageIdx] = useState(2);
  const [syntax, setSyntax] = useState<SyntaxMode>("contrast");
  const [zoom, setZoom] = useState<FocalZoom>("closeup");

  const stage = STAGES[stageIdx];
  const sample = EXTRACTS[syntax][zoom];

  const syntaxBoost = syntax === "parataxis" ? 1 : syntax === "contrast" ? 0.5 : -0.5;
  const zoomBoost = zoom === "closeup" ? 1 : zoom === "mid" ? 0 : -1;
  const tensionScore = Math.max(1, Math.min(10, Math.round(stage.baseTension + syntaxBoost + zoomBoost)));

  const tempoLabel =
    sample.avgWords >= 20 ? "Slow / Stretched" : sample.avgWords >= 8 ? "Shifting / Jolting" : "Rapid / Staccato";

  const markerY = Math.max(22, Math.min(126, stage.baseY - (syntaxBoost + zoomBoost) * 8));

  return (
    <WidgetFrame
      title="Tension Arc &amp; Syntax Pacing Lab"
      tryThis={[
        "Move the **Freytag Stage** slider to **Climax Peak** and compare **Hypotaxis** vs **Parataxis**.",
        "Switch **Focal Distance** from **Wide Shot** to **Close-Up** to watch how narrowing the lens raises claustrophobia.",
        "Test **Contrasted Shift** to see why short sentences hit hardest right after a longer opening.",
      ]}
      caption={
        <div className="space-y-1">
          <p className="font-bold text-ink">
            {stage.name}: <span className="font-normal text-ink-2">{stage.role}</span>
          </p>
          <p>{sample.analysis}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <Slider
          label="Freytag Story Stage"
          value={stageIdx}
          min={0}
          max={4}
          step={1}
          onChange={setStageIdx}
          format={(v) => STAGES[v].name}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Syntax Architecture</div>
            <Segmented<SyntaxMode>
              label="Syntax Architecture"
              value={syntax}
              onChange={setSyntax}
              options={[
                { value: "hypotaxis", label: "Hypotaxis" },
                { value: "contrast", label: "Contrasted" },
                { value: "parataxis", label: "Parataxis" },
              ]}
            />
          </div>
          <div className="min-w-0 space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Focal Distance</div>
            <Segmented<FocalZoom>
              label="Focal Distance"
              value={zoom}
              onChange={setZoom}
              options={[
                { value: "wide", label: "Wide Shot" },
                { value: "mid", label: "Mid-Shot" },
                { value: "closeup", label: "Close-Up" },
              ]}
            />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <svg
            viewBox="0 0 460 155"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive Freytag tension arc showing active story stage and syntax pacing intensity"
          >
            <line x1="28" y1="132" x2="442" y2="132" stroke="var(--line)" strokeWidth="1.5" />
            <line x1="28" y1="20" x2="28" y2="132" stroke="var(--line)" strokeWidth="1.5" />
            <path
              d="M 46 112 L 124 98 L 244 68 L 356 32 L 424 96"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {STAGES.map((st, idx) => (
              <g key={st.name}>
                <circle
                  cx={st.x}
                  cy={st.baseY}
                  r={idx === stageIdx ? 4.5 : 3.5}
                  fill={idx === stageIdx ? "var(--brand)" : "var(--ink-2)"}
                  opacity={idx === stageIdx ? 0.5 : 0.4}
                />
                <text x={st.x} y={147} textAnchor="middle" fontSize="9" fill="var(--ink-2)">
                  {idx + 1}
                </text>
              </g>
            ))}
            <line
              x1={stage.x}
              y1={stage.baseY}
              x2={stage.x}
              y2={markerY}
              stroke="var(--bad)"
              strokeWidth="2"
              strokeDasharray="3,3"
            />
            <circle cx={stage.x} cy={markerY} r="8" fill="var(--bad)" opacity="0.22" />
            <circle cx={stage.x} cy={markerY} r="5" fill="var(--bad)" />
            <text x="36" y="20" fontSize="10" fontWeight="700" fill="var(--ink-2)">
              High Tension
            </text>
            <text x="440" y="20" textAnchor="end" fontSize="10" fontWeight="700" fill="var(--brand)">
              Adjusted Peak: {tensionScore}/10
            </text>
          </svg>
        </div>

        <div className="rounded-xl border border-line bg-surface p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-brand">Live Prose Extract</div>
          <p className="mt-1.5 font-serif text-base italic leading-relaxed text-ink">{sample.text}</p>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <Readout label="Avg Words / Sentence" value={`${sample.avgWords} words`} tone="ink" />
          <Readout label="Pacing Tempo" value={tempoLabel} tone="brand" />
          <Readout
            label="Tension Index"
            value={`${tensionScore} / 10`}
            tone={tensionScore >= 8 ? "bad" : tensionScore <= 4 ? "good" : "brand"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Dialogue Subtext & Power Balance Inspector
// ===========================================================================
type SceneId = "checkpoint" | "ledger" | "parlour";
type OverlayMode = "surface" | "subtext";

interface DialogueTurn {
  speaker: string;
  role: "authority" | "challenger";
  spoken: string;
  stageAction: string;
  cue: string;
  subtext: string;
  /** Positive favors authority (+3 max), negative favors challenger (-3 max). */
  balance: number;
  analyticNote: string;
}

interface PowerScene {
  title: string;
  authorityName: string;
  challengerName: string;
  turns: readonly DialogueTurn[];
}

const SCENES: Record<SceneId, PowerScene> = {
  checkpoint: {
    title: "Curfew Checkpoint",
    authorityName: "Inspector Halim",
    challengerName: "Amina",
    turns: [
      {
        speaker: "Inspector Halim",
        role: "authority",
        spoken: "Stop. Lay the parcel on the rail and keep your eyes down.",
        stageAction: "He does not lift his gaze from his iron clipboard.",
        cue: "Bare Imperatives + Refused Eye Contact",
        subtext: "Strips away courtesy to position Amina as an inspected object rather than an equal citizen.",
        balance: 3,
        analyticNote:
          "Three brisk imperatives ('Stop', 'Lay', 'keep') establish immediate institutional dominance, reinforced by Halim's dismissive refusal to look up.",
      },
      {
        speaker: "Amina",
        role: "challenger",
        spoken: "I only thought perhaps, since it is medicine for my grandmother—",
        stageAction: "Her fingers tighten quietly around the knotted twine.",
        cue: "Modal Hedges + Interrupted Speech (—)",
        subtext: "Outwardly deferential ('only', 'perhaps') to avoid escalation, yet physically unwilling to surrender the parcel.",
        balance: 2,
        analyticNote:
          "Tentative hedges signal caution under surveillance, while the em-dash shows Halim cutting off her justification mid-breath.",
      },
      {
        speaker: "Inspector Halim",
        role: "authority",
        spoken: "Rules are rules, child. Hand it here before I lose my patience!",
        stageAction: "His pen snaps loudly against the desk; two onlookers turn to stare.",
        cue: "Diminishing Address ('child') + Cracking Composure",
        subtext: "Raising his voice and snapping his pen betray irritation — smooth power does not need to shout.",
        balance: 0,
        analyticNote:
          "Calling Amina 'child' attempts to infantilise her, yet the exclamation mark and snapped pen expose fragile authority beginning to crack.",
      },
      {
        speaker: "Amina",
        role: "challenger",
        spoken: "My name is Amina, Inspector. And here is the District Doctor's crimson seal.",
        stageAction: "She meets his gaze calmly without raising her voice and sets the stamped permit squarely on his ledger.",
        cue: "Reclaimed Name + Calm Declarative Proof",
        subtext: "Reclaims dignity and flips procedural power back onto Halim in front of public witnesses.",
        balance: -2,
        analyticNote:
          "Amina reverses dominance without shouting: reclaiming her name dismantles 'child', while the official crimson seal turns the institution's own hierarchy against Halim.",
      },
    ],
  },
  ledger: {
    title: "Factory Wage Ledger",
    authorityName: "Mr Vance",
    challengerName: "Ravi",
    turns: [
      {
        speaker: "Mr Vance",
        role: "authority",
        spoken: "Do shut the door behind you, boy. Let us have a sensible chat about overtime.",
        stageAction: "He folds his spectacles neatly and pours himself a fresh cup of tea.",
        cue: "Polite Euphemism ('sensible') + Casual Grooming",
        subtext: "Masks economic coercion beneath cosy domestic hospitality so refusal looks 'unreasonable'.",
        balance: 3,
        analyticNote:
          "Pairing the condescending address 'boy' with calm tea-pouring and the loaded euphemism 'sensible' presents exploitation as polite reasonableness.",
      },
      {
        speaker: "Ravi",
        role: "challenger",
        spoken: "The roof beam above Loom Six split twice yesterday, Mr Vance...",
        stageAction: "Ravi keeps both boots planted firmly on the carpet instead of taking the low stool.",
        cue: "Ellipsis (...) + Subtle Spatial Refusal",
        subtext: "Speaks cautiously yet refuses to sit lower than Vance, quietly resisting physical subordination.",
        balance: 1,
        analyticNote:
          "Although the trailing ellipsis signals caution, Ravi's refusal to sit beneath Vance creates silent physical resistance against the office hierarchy.",
      },
      {
        speaker: "Mr Vance",
        role: "authority",
        spoken: "How thoughtful of you to worry. I do hope your sister enjoys keeping her post here next winter.",
        stageAction: "He smiles warmly while brushing an invisible speck from his cuff.",
        cue: "Veiled Threat / Coercive Subtext",
        subtext: "Directly threatens Ravi's family livelihood without speaking a single explicit word of dismissal.",
        balance: 2,
        analyticNote:
          "Vance weaponises icy irony ('How thoughtful') to disguise economic blackmail as paternal warmth, proving quiet subtext is often deadlier than shouting.",
      },
      {
        speaker: "Ravi",
        role: "challenger",
        spoken: "That is why fourteen weavers already signed the inspector's copy this morning, Vance.",
        stageAction: "Ravi steps back calmly, leaving the blue receipt flat beside the teacup.",
        cue: "Dropped Honorific ('Vance') + Collective Leverage",
        subtext: "Strips away 'Mr' to shatter social rank and replaces individual fear with collective solidarity.",
        balance: -3,
        analyticNote:
          "Dropping 'Mr' to a bare surname ('Vance') crystallises the power flip: collective documentation ('fourteen weavers') renders Vance's individual threat powerless.",
      },
    ],
  },
  parlour: {
    title: "Inheritance Parlour",
    authorityName: "Lady Vane",
    challengerName: "Theo",
    turns: [
      {
        speaker: "Lady Vane",
        role: "authority",
        spoken: "Your sister is far too fragile to manage an estate. Fortunately, our family prefers quiet arrangements.",
        stageAction: "She lifts a painted porcelain cup with two gloved fingers.",
        cue: "Euphemism ('quiet arrangements') + Aloof Poise",
        subtext: "Frames seizing her niece's inheritance as noble family protection.",
        balance: 3,
        analyticNote:
          "Delicate props ('porcelain', 'gloved fingers') project untouchable aristocratic status, disguising domestic control under the chilly euphemism 'quiet arrangements'.",
      },
      {
        speaker: "Theo",
        role: "challenger",
        spoken: "Quiet enough to lock her solicitor's letters inside your cedar bureau, Aunt?",
        stageAction: "Theo speaks softly, matching her exact polished tone.",
        cue: "Loaded Interrogative + Mirrored Register",
        subtext: "Refuses to lose temper; turns Lady Vane's own word ('Quiet') back into a sharp accusation.",
        balance: 0,
        analyticNote:
          "Echoing Lady Vane's adjective 'Quiet' in a calm, surgical question punctures her moral cover without giving her an excuse to dismiss Theo as rude.",
      },
      {
        speaker: "Lady Vane",
        role: "authority",
        spoken: "Do not invent melodrama, Theo. Sit down and drink your tea.",
        stageAction: "Her chin lifts slightly, though her thumb presses harder against the spoon.",
        cue: "Dismissive Imperatives + Micro-Tension",
        subtext: "Tries to shut down exposure through command verbs, yet tense fingers reveal alarm.",
        balance: 1,
        analyticNote:
          "Retreating to blunt imperatives ('Do not invent', 'Sit down') while tightening her thumb on the spoon signals that her calm veneer is under strain.",
      },
      {
        speaker: "Theo",
        role: "challenger",
        spoken: "I brought the key you mislaid, Aunt. The solicitor arrives at four.",
        stageAction: "Theo places the brass key beside her saucer. The porcelain gives a single sharp rattle.",
        cue: "Chekhov's Prop + Involuntary Micro-Reaction",
        subtext: "Physical proof and an immovable deadline strip Lady Vane of every remaining excuse.",
        balance: -3,
        analyticNote:
          "Setting the brass key directly inside her personal space triggers an involuntary 'sharp rattle' — showing domestic tyranny shattering the moment secrecy disappears.",
      },
    ],
  },
};

function DialoguePowerInspector() {
  const [sceneId, setSceneId] = useState<SceneId>("checkpoint");
  const [turnNum, setTurnNum] = useState(1);
  const [overlay, setOverlay] = useState<OverlayMode>("subtext");

  const scene = SCENES[sceneId];
  const currentTurn = scene.turns[turnNum - 1];
  const prevBalance = turnNum > 1 ? scene.turns[turnNum - 2].balance : currentTurn.balance;
  const delta = currentTurn.balance - prevBalance;

  // Map balance (-3..+3) to beam tilt angle (-18deg .. +18deg; left = Authority, right = Challenger)
  const tiltDeg = -currentTurn.balance * 5.5;

  const dominantLabel =
    currentTurn.balance > 0
      ? scene.authorityName
      : currentTurn.balance < 0
        ? scene.challengerName
        : "Contested / Even";

  const shiftLabel =
    turnNum === 1
      ? "Opening Baseline"
      : delta < 0
        ? `Tilts to ${scene.challengerName}`
        : delta > 0
          ? `Reclaimed by ${scene.authorityName}`
          : "Holding Steady";

  const handleSceneChange = (next: SceneId) => {
    setSceneId(next);
    setTurnNum(1);
  };

  return (
    <WidgetFrame
      title="Dialogue Subtext &amp; Power Balance Inspector"
      tryThis={[
        "Step through **Turns 1 → 4** and watch the **Power Beam** tilt as polite coercion cracks.",
        "Toggle between **Surface Only** and **Reveal Subtext** to spot imperatives, interruptions, and body language.",
        "Compare all three scenes to see how **calm control** repeatedly outperforms loud anger.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wide text-brand">Examiner WHAT–HOW–WHY Insight</div>
          <p>{currentTurn.analyticNote}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented<SceneId>
            label="Select Dialogue Scene"
            value={sceneId}
            onChange={handleSceneChange}
            options={[
              { value: "checkpoint", label: "Checkpoint" },
              { value: "ledger", label: "Factory Ledger" },
              { value: "parlour", label: "Parlour" },
            ]}
          />
          <Segmented<OverlayMode>
            label="Analysis Overlay"
            value={overlay}
            onChange={setOverlay}
            options={[
              { value: "surface", label: "Surface Only" },
              { value: "subtext", label: "Reveal Subtext" },
            ]}
          />
        </div>

        <Stepper
          label={`Dialogue Turn (${scene.title})`}
          value={turnNum}
          min={1}
          max={4}
          onChange={setTurnNum}
          format={(v) => `Turn ${v} / 4`}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <svg
            viewBox="0 0 460 128"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive power balance beam tilting between authority figure and challenger across dialogue turns"
          >
            <text x="64" y="20" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--bad)">
              {scene.authorityName}
            </text>
            <text x="396" y="20" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--good)">
              {scene.challengerName}
            </text>
            <polygon points="218,112 242,112 230,74" fill="var(--ink-2)" opacity="0.55" />
            <g transform={`rotate(${tiltDeg} 230 74)`}>
              <line x1="76" y1="74" x2="384" y2="74" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="76" cy="74" r="14" fill="var(--bad)" opacity={currentTurn.balance > 0 ? 0.95 : 0.35} />
              <text x="76" y="78" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--surface)">
                P
              </text>
              <circle cx="384" cy="74" r="14" fill="var(--good)" opacity={currentTurn.balance < 0 ? 0.95 : 0.35} />
              <text x="384" y="78" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--surface)">
                R
              </text>
            </g>
            <circle cx="230" cy="74" r="5" fill="var(--brand)" />
            <text x="230" y="124" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
              Lower pan holds greater psychological leverage
            </text>
          </svg>
        </div>

        <div className="space-y-2.5">
          {scene.turns.slice(0, turnNum).map((t, idx) => {
            const active = idx === turnNum - 1;
            const isAuth = t.role === "authority";
            return (
              <div
                key={`${sceneId}-${idx}`}
                className={`rounded-xl border p-3 transition ${
                  active
                    ? "border-brand bg-surface shadow-sm"
                    : "border-line bg-surface-2/60 opacity-80"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`text-xs font-extrabold uppercase tracking-wide ${isAuth ? "text-bad" : "text-good"}`}>
                    Turn {idx + 1} · {t.speaker}
                  </span>
                  {overlay === "subtext" ? (
                    <span className="chip">{t.cue}</span>
                  ) : null}
                </div>
                <p className="mt-1 font-serif text-base text-ink">{`“${t.spoken}”`}</p>
                <p className="mt-1 text-xs italic text-ink-2">{t.stageAction}</p>
                {overlay === "subtext" ? (
                  <p className="mt-2 rounded-lg bg-brand-soft/60 px-2.5 py-1.5 text-xs font-semibold text-ink">
                    Subtext: {t.subtext}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <Readout
            label="Dominant Voice"
            value={dominantLabel}
            tone={currentTurn.balance > 0 ? "bad" : currentTurn.balance < 0 ? "good" : "brand"}
          />
          <Readout label="Power Cue" value={currentTurn.cue.split(" + ")[0]} tone="ink" />
          <Readout label="Dynamic Shift" value={shiftLabel} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tension-syntax-lab",
    title: "Tension Arc & Syntax Pacing Lab",
    blurb: "Combine Freytag's stages, sentence syntax, and camera zoom to hear how pacing shapes suspense.",
    Component: TensionSyntaxLab,
  },
  {
    id: "dialogue-power-inspector",
    title: "Dialogue Subtext & Power Balance Inspector",
    blurb: "Step through high-stakes power duels and uncover how politeness, props, and silence flip control.",
    Component: DialoguePowerInspector,
  },
];
