"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type StageKey = "act1" | "act2ball" | "gulling" | "watch" | "church" | "finale";

interface MessinaStage {
  key: StageKey;
  label: string;
  shortLabel: string;
  actRef: string;
  deceptionType: "None yet" | "Benevolent" | "Malicious" | "Mixed";
  ironyScore: number;
  tragicRisk: string;
  riskTone: "good" | "brand" | "bad";
  activeNodes: string[];
  links: Array<{ from: string; to: string; label: string; tone: "good" | "bad" | "brand"; dashed?: boolean }>;
  audienceKnows: string;
  stageBlindSpot: string;
  essayHook: string;
}

const NODES: Record<string, { x: number; y: number; name: string; role: string }> = {
  pedro: { x: 280, y: 46, name: "Don Pedro", role: "Prince" },
  leonato: { x: 95, y: 112, name: "Leonato", role: "Governor" },
  john: { x: 465, y: 112, name: "Don John", role: "Malcontent" },
  hero: { x: 95, y: 196, name: "Hero", role: "Heiress" },
  claudio: { x: 220, y: 196, name: "Claudio", role: "Suitor" },
  beatrice: { x: 342, y: 196, name: "Beatrice", role: "Witty Foil" },
  benedick: { x: 465, y: 196, name: "Benedick", role: "Bachelor" },
  dogberry: { x: 280, y: 120, name: "Dogberry", role: "Watch" },
};

const STAGES: MessinaStage[] = [
  {
    key: "act1",
    label: "1. Arrival",
    shortLabel: "Act 1.1–1.3",
    actRef: "Act 1, Scenes 1–3",
    deceptionType: "None yet",
    ironyScore: 25,
    tragicRisk: "Low",
    riskTone: "good",
    activeNodes: ["pedro", "leonato", "hero", "claudio", "beatrice", "benedick", "john"],
    links: [
      { from: "claudio", to: "hero", label: "Courts 'jewel'", tone: "brand" },
      { from: "beatrice", to: "benedick", label: "Merry war", tone: "good", dashed: true },
      { from: "john", to: "pedro", label: "Resentment", tone: "bad", dashed: true },
    ],
    audienceKnows: "Don John openly declares himself a 'plain-dealing villain', while Beatrice and Benedick's constant teasing hints at buried attraction.",
    stageBlindSpot: "Messina's nobles assume Don John's rebellion is truly over and dismiss Beatrice and Benedick as hopeless enemies.",
    essayHook: "Link Claudio's early question ('Hath Leonato any son?') and commercial metaphor ('buy such a jewel') to his later Act 4 fragility.",
  },
  {
    key: "act2ball",
    label: "2. Masked Ball",
    shortLabel: "Act 2.1",
    actRef: "Act 2, Scene 1",
    deceptionType: "Mixed",
    ironyScore: 55,
    tragicRisk: "Medium",
    riskTone: "brand",
    activeNodes: ["pedro", "hero", "claudio", "john", "beatrice", "benedick"],
    links: [
      { from: "pedro", to: "hero", label: "Proxy wooing", tone: "good" },
      { from: "john", to: "claudio", label: "Jealous lie", tone: "bad", dashed: true },
      { from: "beatrice", to: "benedick", label: "Masked tease", tone: "brand", dashed: true },
    ],
    audienceKnows: "Don Pedro is genuinely wooing Hero for Claudio, and Beatrice knows she is teasing Benedick behind his mask.",
    stageBlindSpot: "Claudio instantly falls for Don John's whisper that Don Pedro wants Hero for himself — foreshadowing his later credulity.",
    essayHook: "Masks physically stage 'appearance vs reality': Claudio trusts a villain's whisper before ever asking Hero or Don Pedro.",
  },
  {
    key: "gulling",
    label: "3. Orchard Gulling",
    shortLabel: "Act 2.3 & 3.1",
    actRef: "Act 2, Sc 3 & Act 3, Sc 1",
    deceptionType: "Benevolent",
    ironyScore: 80,
    tragicRisk: "Low",
    riskTone: "good",
    activeNodes: ["pedro", "leonato", "claudio", "hero", "beatrice", "benedick"],
    links: [
      { from: "pedro", to: "benedick", label: "Prose trap", tone: "good", dashed: true },
      { from: "hero", to: "beatrice", label: "Verse trap", tone: "good", dashed: true },
      { from: "beatrice", to: "benedick", label: "Hidden love", tone: "brand" },
    ],
    audienceKnows: "Both eavesdropping chats are staged performances — yet they unlock genuine feelings hidden behind witty armour.",
    stageBlindSpot: "Neither Benedick (in prose) nor Beatrice (in rhymed verse) realises their friends know they are crouching in the bushes.",
    essayHook: "Contrast Benedick's comic prose rationalisation ('The world must be peopled') with Beatrice's lyrical rhyming verse ('Contempt, farewell!').",
  },
  {
    key: "watch",
    label: "4. Window & Watch",
    shortLabel: "Act 3.2–3.5",
    actRef: "Act 3, Scenes 2–5",
    deceptionType: "Malicious",
    ironyScore: 95,
    tragicRisk: "High",
    riskTone: "bad",
    activeNodes: ["john", "claudio", "pedro", "dogberry", "leonato", "hero"],
    links: [
      { from: "john", to: "claudio", label: "Window illusion", tone: "bad" },
      { from: "dogberry", to: "leonato", label: "Truth ignored!", tone: "brand", dashed: true },
      { from: "claudio", to: "hero", label: "Vows shaming", tone: "bad", dashed: true },
    ],
    audienceKnows: "Borachio confessed to wooing Margaret in Hero's dress and is ALREADY arrested by Dogberry's Watch!",
    stageBlindSpot: "Impatient Leonato brushes Dogberry away in Act 3, Scene 5 — walking straight into a catastrophe he could have stopped in two minutes.",
    essayHook: "Act 3, Scene 5 is peak dramatic irony: aristocratic impatience blinds Leonato while humble watchmen hold the truth.",
  },
  {
    key: "church",
    label: "5. Church Crisis",
    shortLabel: "Act 4.1–4.2",
    actRef: "Act 4, Scenes 1–2",
    deceptionType: "Mixed",
    ironyScore: 100,
    tragicRisk: "Critical",
    riskTone: "bad",
    activeNodes: ["claudio", "pedro", "hero", "leonato", "beatrice", "benedick", "dogberry"],
    links: [
      { from: "claudio", to: "hero", label: "'Rotten orange'", tone: "bad" },
      { from: "leonato", to: "hero", label: "Wishes death", tone: "bad", dashed: true },
      { from: "beatrice", to: "benedick", label: "'Kill Claudio'", tone: "brand" },
    ],
    audienceKnows: "Hero is 100% innocent and Dogberry's Watch are documenting Borachio's guilt right next door in Act 4, Scene 2.",
    stageBlindSpot: "Claudio condemns 'seeming' while fooled by Margaret's costume; Leonato believes princes over his own daughter.",
    essayHook: "Analyse how Shakespeare pivots from brutal blank verse to unadorned prose before Beatrice drops her stark two-word imperative: 'Kill Claudio.'",
  },
  {
    key: "finale",
    label: "6. Unveiling",
    shortLabel: "Act 5.1–5.4",
    actRef: "Act 5, Scenes 1–4",
    deceptionType: "Benevolent",
    ironyScore: 40,
    tragicRisk: "Resolved",
    riskTone: "good",
    activeNodes: ["leonato", "hero", "claudio", "beatrice", "benedick", "dogberry", "pedro"],
    links: [
      { from: "dogberry", to: "leonato", label: "Borachio confesses", tone: "good" },
      { from: "hero", to: "claudio", label: "Veiled rebirth", tone: "brand" },
      { from: "beatrice", to: "benedick", label: "Sonnets + kiss", tone: "good" },
    ],
    audienceKnows: "The veiled 'niece' is living Hero — and both Claudio and Hero carry Beatrice and Benedick's secret love sonnets.",
    stageBlindSpot: "Claudio agrees to marry sight unseen (testing blind trust); Beatrice and Benedick nearly banter themselves out of marriage until caught by their own handwriting.",
    essayHook: "Evaluate modern uneasiness over 'One Hero died defiled, but I do live' alongside the joyful equality of Beatrice and Benedick.",
  },
];

function MessinaNotingExplorer() {
  const [stageIdx, setStageIdx] = useState(3);
  const [lens, setLens] = useState<"irony" | "essay">("irony");

  const stage = STAGES[stageIdx];
  const activeSet = new Set(stage.activeNodes);

  return (
    <WidgetFrame
      title="Messina Deception & ‘Noting’ Network Explorer"
      tryThis={[
        "Step from Stage 3 (Orchard Gulling) to Stage 4 (Window & Watch) and Stage 5 (Church Crisis) — watch Dramatic Irony climb to 100%.",
        "Switch between the Dramatic Irony lens and the Essay Craft lens to see how each act’s deception translates directly into a top-band Year 9 paragraph.",
      ]}
      caption={
        <span>
          <strong>{stage.actRef}:</strong>{" "}
          {lens === "irony" ? (
            <>
              <strong>Audience knows:</strong> {stage.audienceKnows}{" "}
              <strong>Characters miss:</strong> {stage.stageBlindSpot}
            </>
          ) : (
            <>
              <strong>Year 9 Essay Angle:</strong> {stage.essayHook}
            </>
          )}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0">
            <Stepper
              label="Plot stage (1–6)"
              value={stageIdx + 1}
              min={1}
              max={STAGES.length}
              onChange={(v) => setStageIdx(v - 1)}
              format={(v) => STAGES[v - 1].shortLabel}
            />
          </div>
          <div className="min-w-0 flex sm:justify-end">
            <Segmented
              label="Analysis lens"
              value={lens}
              onChange={setLens}
              options={[
                { value: "irony", label: "Dramatic Irony Lens" },
                { value: "essay", label: "Essay Craft Lens" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {STAGES.map((s, idx) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setStageIdx(idx)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                idx === stageIdx
                  ? "bg-brand text-brand-ink shadow-sm"
                  : "border border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Deception" value={stage.deceptionType} tone={stage.deceptionType === "Malicious" ? "bad" : stage.deceptionType === "Benevolent" ? "good" : "brand"} />
          <Readout label="Dramatic Irony" value={`${stage.ironyScore}%`} tone={stage.ironyScore >= 80 ? "bad" : "brand"} />
          <Readout label="Tragic Risk" value={stage.tragicRisk} tone={stage.riskTone} />
        </div>

        <svg
          viewBox="0 0 560 245"
          className="w-full h-auto rounded-xl border border-line bg-surface"
          role="img"
          aria-label={`Messina character deception network for ${stage.actRef}`}
        >
          {stage.links.map((lk, idx) => {
            const a = NODES[lk.from];
            const b = NODES[lk.to];
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2 - 8;
            const stroke =
              lk.tone === "bad" ? "var(--bad)" : lk.tone === "good" ? "var(--good)" : "var(--brand)";
            return (
              <g key={`${lk.from}-${lk.to}-${idx}`}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={stroke}
                  strokeWidth={2.5}
                  strokeDasharray={lk.dashed ? "5 4" : undefined}
                />
                <rect x={mx - 48} y={my - 10} width={96} height={18} rx={6} fill="var(--surface)" stroke={stroke} strokeWidth={1} />
                <text x={mx} y={my + 2} textAnchor="middle" fontSize={9.5} fontWeight={800} fill={stroke}>
                  {lk.label}
                </text>
              </g>
            );
          })}

          {Object.entries(NODES).map(([id, n]) => {
            const active = activeSet.has(id);
            const isVillain = id === "john";
            const fill = !active
              ? "var(--surface-2)"
              : isVillain
                ? "var(--surface-2)"
                : id === "dogberry"
                  ? "var(--brand-soft)"
                  : "var(--surface)";
            const stroke = !active ? "var(--line)" : isVillain ? "var(--bad)" : "var(--brand)";
            return (
              <g key={id} opacity={active ? 1 : 0.35}>
                <rect x={n.x - 44} y={n.y - 20} width={88} height={40} rx={9} fill={fill} stroke={stroke} strokeWidth={active ? 2 : 1} />
                <text x={n.x} y={n.y - 2} textAnchor="middle" fontSize={11} fontWeight={800} fill={isVillain && active ? "var(--bad)" : "var(--ink)"}>
                  {n.name}
                </text>
                <text x={n.x} y={n.y + 12} textAnchor="middle" fontSize={9.5} fill="var(--ink-2)">
                  {n.role}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </WidgetFrame>
  );
}

interface SpeechSample {
  id: string;
  label: string;
  speaker: string;
  act: string;
  form: "Prose" | "Blank Verse" | "Rhymed Verse";
  device: string;
  quote: string;
  syllables: Array<{ text: string; stressed: boolean }>;
  what: string;
  how: string;
  why: string;
}

const SPEECHES: SpeechSample[] = [
  {
    id: "disdain",
    label: "1.1 Merry War",
    speaker: "Benedick & Beatrice",
    act: "Act 1, Scene 1",
    form: "Prose",
    device: "Repartee & Personification",
    quote: "“What, my dear Lady Disdain! Are you yet living?” — “Is it possible disdain should die while she hath such meet food to feed it as Signior Benedick?”",
    syllables: [
      { text: "Fast", stressed: true },
      { text: "un-", stressed: false },
      { text: "met-", stressed: false },
      { text: "red", stressed: false },
      { text: "wit", stressed: true },
      { text: "in", stressed: false },
      { text: "prose", stressed: true },
    ],
    what: "Shakespeare establishes Beatrice as Benedick’s sharp intellectual equal from their very first exchange.",
    how: "Beatrice catches Benedick’s label ‘Disdain’, personifies it as a hungry creature, and redirects his insult straight back onto him in brisk prose repartee.",
    why: "Audiences immediately relish their chemistry while noticing how Beatrice subverts Elizabethan ideals of female silence.",
  },
  {
    id: "poniards",
    label: "2.1 Poniards",
    speaker: "Benedick",
    act: "Act 2, Scene 1",
    form: "Prose",
    device: "Martial Metaphor & Hyperbole",
    quote: "“She speaks poniards, and every word stabs.”",
    syllables: [
      { text: "Prose", stressed: true },
      { text: "punch:", stressed: true },
      { text: "short,", stressed: true },
      { text: "rapid,", stressed: false },
      { text: "comic", stressed: true },
    ],
    what: "Shakespeare reveals Benedick is simultaneously intimidated and obsessed by Beatrice’s verbal power.",
    how: "The martial metaphor ‘poniards’ (short daggers) and violent verb ‘stabs’ import battlefield combat into Messina’s drawing room through comic hyperbole.",
    why: "Watching a fearless soldier act terrified of one witty woman delights the audience and hints at his concealed fascination.",
  },
  {
    id: "beatrice-verse",
    label: "3.1 Gulling Verse",
    speaker: "Beatrice",
    act: "Act 3, Scene 1",
    form: "Rhymed Verse",
    device: "Apostrophe & Rhyming Shift",
    quote: "“What fire is in mine ears? Can this be true? / Stand I condemned for pride and scorn so much? / Contempt, farewell! and maiden pride, adieu!”",
    syllables: [
      { text: "Con-", stressed: false },
      { text: "TEMPT,", stressed: true },
      { text: "fare-", stressed: false },
      { text: "WELL!", stressed: true },
      { text: "and", stressed: false },
      { text: "MAID-", stressed: true },
      { text: "en", stressed: false },
      { text: "PRIDE,", stressed: true },
      { text: "a-", stressed: false },
      { text: "DIEU!", stressed: true },
    ],
    what: "Shakespeare dramatises the exact moment Beatrice drops her defensive wit to embrace emotional vulnerability.",
    how: "Shifting from rapid prose into regular 10-syllable iambic pentameter with end-rhyme (‘true’ / ‘adieu’) and apostrophe (‘Contempt, farewell!’) lends her soliloquy lyrical poise.",
    why: "Unlike Benedick’s broad prose comedy in Act 2.3, Beatrice’s poetic form signals deep, sincere self-reflection to the audience.",
  },
  {
    id: "claudio-church",
    label: "4.1 Rotten Orange",
    speaker: "Claudio",
    act: "Act 4, Scene 1",
    form: "Blank Verse",
    device: "Dehumanising Metaphor & Irony",
    quote: "“Give not this rotten orange to your friend; / She’s but the sign and semblance of her honour.”",
    syllables: [
      { text: "Give", stressed: false },
      { text: "NOT", stressed: true },
      { text: "this", stressed: false },
      { text: "ROT-", stressed: true },
      { text: "ten", stressed: false },
      { text: "OR-", stressed: true },
      { text: "ange", stressed: false },
      { text: "TO", stressed: true },
      { text: "your", stressed: false },
      { text: "FRIEND", stressed: true },
    ],
    what: "Shakespeare exposes Claudio’s cruel, status-driven readiness to degrade Hero publicly before the congregation.",
    how: "Delivered in formal blank verse, the metaphor ‘rotten orange’ dehumanises Hero as spoiled fruit, while sibilance in ‘sign and semblance’ spits venom.",
    why: "Because dramatic irony confirms Hero’s innocence and Borachio’s arrest, Claudio’s attack on false ‘semblance’ turns spectators fiercely against him.",
  },
  {
    id: "kill-claudio",
    label: "4.1 Kill Claudio",
    speaker: "Beatrice",
    act: "Act 4, Scene 1",
    form: "Prose",
    device: "Stark Imperative & Hyperbole",
    quote: "“Kill Claudio.” … “O God, that I were a man! I would eat his heart in the market-place.”",
    syllables: [
      { text: "KILL", stressed: true },
      { text: "CLAU-", stressed: true },
      { text: "DI-", stressed: false },
      { text: "O.", stressed: false },
      { text: "[silence]", stressed: false },
    ],
    what: "Shakespeare shatters intimate romance to expose Beatrice’s blazing loyalty and women’s legal powerlessness.",
    how: "Keeping the scene in bare prose makes the two-word imperative ‘Kill Claudio’ hit like a thunderclap, followed by visceral hyperbole (‘eat his heart in the market-place’).",
    why: "Audiences feel the bitter injustice of Elizabethan patriarchy: the bravest voice in the church cannot fight a duel simply because she is female.",
  },
  {
    id: "dogberry",
    label: "4.2 Dogberry",
    speaker: "Dogberry",
    act: "Act 4, Scene 2",
    form: "Prose",
    device: "Malapropism & Comic Relief",
    quote: "“O villain! Thou wilt be condemned into everlasting redemption for this!”",
    syllables: [
      { text: "Pomp-", stressed: true },
      { text: "ous", stressed: false },
      { text: "prose", stressed: true },
      { text: "mangling", stressed: true },
      { text: "big", stressed: false },
      { text: "words", stressed: true },
    ],
    what: "Shakespeare uses Dogberry’s linguistic blunders to provide post-crisis comic relief and satirise aristocratic pride.",
    how: "The malapropism ‘everlasting redemption’ (confusing salvation with damnation) creates an absurd oxymoron beside ‘condemned’.",
    why: "Placed straight after Act 4.1’s trauma, the comedy reassures spectators that humble watchmen have already rescued Hero where clever nobles failed.",
  },
];

function ProseVerseWitLab() {
  const [idx, setIdx] = useState(2);
  const [tab, setTab] = useState<"rhythm" | "whw">("rhythm");

  const sample = SPEECHES[idx];
  const isMetrical = sample.form !== "Prose";

  return (
    <WidgetFrame
      title="Prose vs Blank Verse & WHAT–HOW–WHY Analyser"
      tryThis={[
        "Compare ‘3.1 Gulling Verse’ (10 regular da-DUM beats) with ‘4.1 Kill Claudio’ (stark, unmetrical prose) — notice how form shifts signal emotion!",
        "Flip from ‘Beat & Form’ to ‘WHAT–HOW–WHY’ to inspect how a single embedded quote builds a complete Year 9 exam paragraph.",
      ]}
      caption={
        <span>
          <strong>Form Rule:</strong>{" "}
          {isMetrical
            ? `${sample.speaker} uses ${sample.form.toLowerCase()} (10-syllable iambic pentameter) in ${sample.act} — Shakespeare raises the speech into poetic metre for heightened emotion, vulnerability or public ceremony.`
            : `${sample.speaker} speaks in prose in ${sample.act} — free of fixed metre, letting Shakespeare deliver razor-sharp wit, unadorned honesty, or comic malapropisms.`}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {SPEECHES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIdx(i)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                i === idx
                  ? "bg-brand text-brand-ink shadow-sm"
                  : "border border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Form" value={sample.form} tone={isMetrical ? "brand" : "good"} />
          <Readout label="Speaker" value={sample.speaker} tone="ink" />
          <Readout label="Key Method" value={sample.device} tone="brand" />
        </div>

        <blockquote className="rounded-xl border-l-4 border-brand bg-surface-2 px-4 py-3 text-sm italic leading-relaxed text-ink">
          {sample.quote}
        </blockquote>

        <div className="flex">
          <Segmented
            label="Inspector tab"
            value={tab}
            onChange={setTab}
            options={[
              { value: "rhythm", label: "Beat & Form Visualiser" },
              { value: "whw", label: "WHAT–HOW–WHY Builder" },
            ]}
          />
        </div>

        {tab === "rhythm" ? (
          <svg
            viewBox="0 0 560 118"
            className="w-full h-auto rounded-xl border border-line bg-surface"
            role="img"
            aria-label={`Rhythm and metre profile for ${sample.label}`}
          >
            <text x="16" y="22" fontSize={11} fontWeight={800} fill="var(--ink-2)">
              {isMetrical
                ? "IAMBIC PENTAMETER PULSE (5 unstressed–STRESSED feet = 10 syllables)"
                : "UNMETRED PROSE PROFILE (Natural conversational cadence)"}
            </text>
            {sample.syllables.map((syl, sIdx) => {
              const count = sample.syllables.length;
              const slotW = 528 / count;
              const x = 16 + sIdx * slotW + 3;
              const w = Math.max(28, slotW - 6);
              const barH = syl.stressed ? 46 : 24;
              const y = 86 - barH;
              return (
                <g key={`${syl.text}-${sIdx}`}>
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={barH}
                    rx={6}
                    fill={syl.stressed ? "var(--brand)" : "var(--brand-soft)"}
                    stroke="var(--brand)"
                    strokeWidth={1}
                  />
                  <text
                    x={x + w / 2}
                    y={y + barH / 2 + 4}
                    textAnchor="middle"
                    fontSize={10}
                    fontWeight={800}
                    fill={syl.stressed ? "#ffffff" : "var(--brand)"}
                  >
                    {syl.text}
                  </text>
                  <text x={x + w / 2} y={104} textAnchor="middle" fontSize={9} fontWeight={700} fill="var(--ink-2)">
                    {isMetrical ? (syl.stressed ? "DUM" : "da") : syl.stressed ? "stress" : "flow"}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            <div className="min-w-0 rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">WHAT (Claim)</div>
              <p className="mt-1 text-xs leading-relaxed text-ink">{sample.what}</p>
            </div>
            <div className="min-w-0 rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-extrabold uppercase tracking-wide text-good">HOW (Quote &amp; Craft)</div>
              <p className="mt-1 text-xs leading-relaxed text-ink">{sample.how}</p>
            </div>
            <div className="min-w-0 rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-extrabold uppercase tracking-wide text-brand">WHY (Audience &amp; Context)</div>
              <p className="mt-1 text-xs leading-relaxed text-ink">{sample.why}</p>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "messina-noting-map",
    title: "Messina Deception & ‘Noting’ Network",
    blurb: "Track benevolent vs malicious deception and watch dramatic irony spike across Acts 1–5.",
    Component: MessinaNotingExplorer,
  },
  {
    id: "prose-verse-wit-lab",
    title: "Prose vs Blank Verse & Wit Analyser",
    blurb: "Inspect metre, rhetorical craft, and ready-made WHAT–HOW–WHY models across 6 pivotal speeches.",
    Component: ProseVerseWitLab,
  },
];
