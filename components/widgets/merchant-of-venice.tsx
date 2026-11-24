"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type WorldView = "venice" | "belmont" | "clash";
type CasketKey = "gold" | "silver" | "lead";

interface CasketInfo {
  key: CasketKey;
  metal: string;
  suitor: string;
  inscription: string;
  inside: string;
  verdict: string;
  themeNote: string;
  tone: "bad" | "brand" | "good";
  fill: string;
}

const CASKETS: Record<CasketKey, CasketInfo> = {
  gold: {
    key: "gold",
    metal: "Gold Casket",
    suitor: "Prince of Morocco",
    inscription: "“Who chooseth me shall gain what many men desire.”",
    inside: "A Skull (Carrion Death) & Scroll",
    verdict: "Fails — “All that glisters is not gold.”",
    themeNote: "Morocco equates Portia’s worth with dazzling gold (‘Never so rich a gem / Was set in worse than gold’), falling straight for surface appearance.",
    tone: "bad",
    fill: "var(--bad)",
  },
  silver: {
    key: "silver",
    metal: "Silver Casket",
    suitor: "Prince of Arragon",
    inscription: "“Who chooseth me shall get as much as he deserves.”",
    inside: "Portrait of a Blinking Idiot",
    verdict: "Fails — Conceited vanity exposed.",
    themeNote: "Arragon pompously declares ‘I will assume desert’, proving arrogant entitlement blinds suitors just as badly as greed.",
    tone: "brand",
    fill: "var(--brand)",
  },
  lead: {
    key: "lead",
    metal: "Lead Casket",
    suitor: "Bassanio",
    inscription: "“Who chooseth me must give and hazard all he hath.”",
    inside: "Fair Portia’s Portrait",
    verdict: "Wins — Rejects deceptive “ornament”.",
    themeNote: "Bassanio reflects ‘The world is still deceived with ornament’ and risks everything — yet ironically relies on 3,000 borrowed Venetian ducats to get here!",
    tone: "good",
    fill: "var(--good)",
  },
};

const WORLD_COPY: Record<WorldView, { value: string; currency: string; mood: string; summary: string }> = {
  venice: {
    value: "Strict Contract Law",
    currency: "3,000 Ducats & Credit",
    mood: "Antisemitism & Trade",
    summary:
      "Mercantile Venice runs on argosies, Rialto credit and strict statute law. Jews are confined to the Ghetto and moneylending (usury), then publicly despised by Christian merchants like Antonio.",
  },
  belmont: {
    value: "Love, Music & Testing",
    currency: "Inheritance & Rings",
    mood: "Moonlit Romance",
    summary:
      "Belmont appears to be an enchanted escape of music, moonlight and moral riddles — yet Portia’s dead father still curbs her freedom (‘curbed by the will of a dead father’).",
  },
  clash: {
    value: "Money Fuels Romance",
    currency: "Flesh Bond ↔ Wedding Ring",
    mood: "Moral Irony",
    summary:
      "Shakespeare blurs the two worlds deliberately: Bassanio calls Portia ‘a lady richly left’ before praising her beauty, borrows Venetian cash to woo her, and Portia must disguise herself to enter Venice’s court.",
  },
};

function VeniceBelmontCasketExplorer() {
  const [world, setWorld] = useState<WorldView>("clash");
  const [casket, setCasket] = useState<CasketKey>("lead");

  const w = WORLD_COPY[world];
  const c = CASKETS[casket];

  return (
    <WidgetFrame
      title="Venice vs Belmont & Three Caskets Simulator"
      tryThis={[
        "Switch between Venice, Belmont, and ‘Worlds Collide’ to spot how commercial language (‘richly left’, ‘golden fleece’) crosses into Belmont.",
        "Open all three caskets (Gold, Silver, Lead) to compare Morocco, Arragon and Bassanio’s flaws under the appearance-vs-reality theme.",
      ]}
      caption={
        <span>
          <strong>Theme Connection:</strong> {w.summary} <strong>Casket Lesson ({c.metal}):</strong> {c.themeNote}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="World comparison mode"
            value={world}
            onChange={setWorld}
            options={[
              { value: "venice", label: "Venice" },
              { value: "belmont", label: "Belmont" },
              { value: "clash", label: "Worlds Collide" },
            ]}
          />
          <Segmented
            label="Choose a casket"
            value={casket}
            onChange={setCasket}
            options={[
              { value: "gold", label: "Gold" },
              { value: "silver", label: "Silver" },
              { value: "lead", label: "Lead" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Governing Value" value={w.value} tone="brand" />
          <Readout label="Primary Currency" value={w.currency} tone="ink" />
          <Readout label="Casket Verdict" value={c.suitor} tone={c.tone} />
        </div>

        <svg
          viewBox="0 0 560 220"
          className="w-full h-auto rounded-xl border border-line bg-surface"
          role="img"
          aria-label={`Venice versus Belmont contrast and open ${c.metal} diagram`}
        >
          <rect
            x={16}
            y={16}
            width={248}
            height={88}
            rx={10}
            fill={world === "venice" || world === "clash" ? "var(--surface-2)" : "var(--surface)"}
            stroke={world === "venice" || world === "clash" ? "var(--bad)" : "var(--line)"}
            strokeWidth={world === "venice" || world === "clash" ? 2 : 1}
            opacity={world === "belmont" ? 0.45 : 1}
          />
          <text x={140} y={36} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--bad)">
            VENICE — Commerce &amp; Law
          </text>
          <text x={28} y={56} fontSize={10.5} fill="var(--ink)">• Rialto exchange, argosies &amp; usury</text>
          <text x={28} y={74} fontSize={10.5} fill="var(--ink)">• Antonio’s sadness &amp; Shylock’s bond</text>
          <text x={28} y={92} fontSize={10.5} fill="var(--ink)">• Ghetto exclusion &amp; Alien Statute</text>

          <rect
            x={296}
            y={16}
            width={248}
            height={88}
            rx={10}
            fill={world === "belmont" || world === "clash" ? "var(--brand-soft)" : "var(--surface)"}
            stroke={world === "belmont" || world === "clash" ? "var(--good)" : "var(--line)"}
            strokeWidth={world === "belmont" || world === "clash" ? 2 : 1}
            opacity={world === "venice" ? 0.45 : 1}
          />
          <text x={420} y={36} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--good)">
            BELMONT — Romance &amp; Riddles
          </text>
          <text x={308} y={56} fontSize={10.5} fill="var(--ink)">• Moonlight, music &amp; noble courtship</text>
          <text x={308} y={74} fontSize={10.5} fill="var(--ink)">• Portia curbed by her father’s will</text>
          <text x={308} y={92} fontSize={10.5} fill="var(--ink)">• Three Caskets &amp; Act 5 ring loyalty test</text>

          <line
            x1={264}
            y1={60}
            x2={296}
            y2={60}
            stroke={world === "clash" ? "var(--brand)" : "var(--line)"}
            strokeWidth={world === "clash" ? 3 : 1.5}
            strokeDasharray={world === "clash" ? undefined : "4 3"}
          />

          <rect x={16} y={118} width={528} height={88} rx={10} fill="var(--surface-2)" stroke={c.fill} strokeWidth={2} />
          <rect x={30} y={132} width={116} height={60} rx={8} fill="var(--surface)" stroke={c.fill} strokeWidth={2} />
          <text x={88} y={156} textAnchor="middle" fontSize={12} fontWeight={800} fill={c.fill}>
            {c.metal.toUpperCase()}
          </text>
          <text x={88} y={176} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink-2)">
            {c.suitor}
          </text>

          <text x={164} y={144} fontSize={11} fontWeight={800} fill="var(--ink)">
            Inscription: {c.inscription}
          </text>
          <text x={164} y={166} fontSize={11} fontWeight={700} fill={c.fill}>
            Revealed Inside: {c.inside}
          </text>
          <text x={164} y={188} fontSize={10.5} fill="var(--ink-2)">
            Outcome: {c.verdict}
          </text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

interface TrialStage {
  label: string;
  short: string;
  shylockPower: number; // 0-100
  mercyLevel: number; // 0-100
  sympathyEliz: number; // 0-100 sympathy for Shylock
  sympathyModern: number; // 0-100 sympathy for Shylock
  quote: string;
  speaker: string;
  rhetoric: string;
  elizNote: string;
  modernNote: string;
}

const TRIAL_STAGES: TrialStage[] = [
  {
    label: "1. Bond Claim",
    short: "Strict Law",
    shylockPower: 82,
    mercyLevel: 15,
    sympathyEliz: 12,
    sympathyModern: 42,
    quote: "“I stand here for law.” … [Silently whets his knife on the sole of his shoe]",
    speaker: "Shylock",
    rhetoric: "Stagecraft menace & legalistic refusal of 6,000 ducats",
    elizNote: "1596 spectators see a frightening, stubborn antagonist rejecting Christian offers of settlement while sharpening his knife onstage.",
    modernNote: "Modern spectators feel chills at the knife-whetting yet still recall Antonio spitting on his gaberdine and the Duke’s pre-trial bias (‘inhuman wretch’).",
  },
  {
    label: "2. Mercy Speech",
    short: "Mercy Plea",
    shylockPower: 75,
    mercyLevel: 92,
    sympathyEliz: 10,
    sympathyModern: 30,
    quote: "“The quality of mercy is not strained; / It droppeth as the gentle rain from heaven / Upon the place beneath.”",
    speaker: "Portia (as Balthasar)",
    rhetoric: "Blank verse, natural simile (‘gentle rain’), balanced antithesis (‘gives’ / ‘takes’)",
    elizNote: "Elizabethans cheer Portia’s Christian eloquence linking earthly rulers’ mercy directly to God and the Lord’s Prayer.",
    modernNote: "Modern spectators admire Portia’s soaring rhetoric — while closely watching whether the Christians will honour ‘not strained’ (unforced) mercy themselves.",
  },
  {
    label: "3. Law Conceded",
    short: "Peak Suspense",
    shylockPower: 96,
    mercyLevel: 12,
    sympathyEliz: 5,
    sympathyModern: 22,
    quote: "“A Daniel come to judgment! yea, a Daniel!” … “A sentence! Come, prepare!”",
    speaker: "Shylock",
    rhetoric: "Biblical allusion & dramatic irony at peak courtroom suspense",
    elizNote: "Heart-pounding suspense as Antonio opens his shirt; Shylock’s jubilation seals his own trap.",
    modernNote: "Modern audiences recognise Portia delaying her trap to force Shylock into rejecting mercy three times before springing peripeteia.",
  },
  {
    label: "4. No Jot of Blood",
    short: "Peripeteia!",
    shylockPower: 28,
    mercyLevel: 40,
    sympathyEliz: 15,
    sympathyModern: 48,
    quote: "“Tarry a little; there is something else. / This bond doth give thee here no jot of blood.”",
    speaker: "Portia (as Balthasar)",
    rhetoric: "Calm imperative (‘Tarry’), ten crisp monosyllables, sudden peripeteia",
    elizNote: "Electrifying theatrical cheer! Portia beats the literalist contract using his own exact wording.",
    modernNote: "Dazzling legal theatre — yet critics notice Portia wins via hyper-literal quibbling, flipping from spirit of mercy to strict letter of law.",
  },
  {
    label: "5. Alien Statute",
    short: "Confiscation",
    shylockPower: 8,
    mercyLevel: 18,
    sympathyEliz: 22,
    sympathyModern: 78,
    quote: "“You take my house when you do take the prop / That doth sustain my house; you take my life / When you do take the means whereby I live.”",
    speaker: "Shylock",
    rhetoric: "Parallelism & architectural metaphor exposing systemic exclusion",
    elizNote: "Many 1596 viewers saw legal retribution for plotting a Venetian citizen’s death, though Shylock’s protest still rings powerfully.",
    modernNote: "Labeling lifelong Venetian resident Shylock an ‘alien’ exposes institutional racism built into Venetian law itself; Gratiano’s taunts feel repugnant.",
  },
  {
    label: "6. Conversion & Exit",
    short: "Aftermath",
    shylockPower: 0,
    mercyLevel: 10,
    sympathyEliz: 30,
    sympathyModern: 92,
    quote: "“I am content… I pray you give me leave to go from hence; / I am not well.”",
    speaker: "Shylock",
    rhetoric: "Broken monosyllables, poignant pathos & stark moral irony",
    elizNote: "Many Elizabethans interpreted forced baptism as spiritually saving Shylock’s soul — enabling Act 5’s return to comedy.",
    modernNote: "Post-Holocaust audiences experience forced conversion as devastating identity erasure, turning Portia’s earlier ‘not strained’ speech deeply ironic.",
  },
];

function TrialRhetoricInspector() {
  const [stageIdx, setStageIdx] = useState(3);
  const [era, setEra] = useState<"modern" | "elizabethan">("modern");

  const st = TRIAL_STAGES[stageIdx];
  const sympathy = era === "modern" ? st.sympathyModern : st.sympathyEliz;
  // Tilt of balance beam in degrees: positive tilts right (Court wins), negative tilts left (Shylock dominates)
  const tiltDeg = ((50 - st.shylockPower) / 50) * 16;

  return (
    <WidgetFrame
      title="Act 4 Scene 1 Trial Scene: Law, Mercy & Power Inspector"
      tryThis={[
        "Step from Stage 3 (Law Conceded) to Stage 4 (‘No Jot of Blood’) — watch the courtroom scales flip violently in sudden peripeteia!",
        "Toggle between ‘Elizabethan (1596)’ and ‘Modern Audience’ at Stage 6 (Conversion & Exit) to see why sympathy shifts from 30% to 92%.",
      ]}
      caption={
        <span>
          <strong>{era === "modern" ? "Modern Post-Holocaust Lens" : "Elizabethan (1596) Lens"}:</strong>{" "}
          {era === "modern" ? st.modernNote : st.elizNote}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0">
            <Stepper
              label="Trial beat (1–6)"
              value={stageIdx + 1}
              min={1}
              max={TRIAL_STAGES.length}
              onChange={(v) => setStageIdx(v - 1)}
              format={(v) => TRIAL_STAGES[v - 1].short}
            />
          </div>
          <div className="min-w-0 flex sm:justify-end">
            <Segmented
              label="Audience era"
              value={era}
              onChange={setEra}
              options={[
                { value: "elizabethan", label: "Elizabethan (1596)" },
                { value: "modern", label: "Modern Audience" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {TRIAL_STAGES.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setStageIdx(i)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                i === stageIdx
                  ? "bg-brand text-brand-ink shadow-sm"
                  : "border border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Shylock Power" value={`${st.shylockPower}%`} tone={st.shylockPower > 50 ? "bad" : "good"} />
          <Readout label="Mercy Practised" value={`${st.mercyLevel}%`} tone={st.mercyLevel >= 50 ? "good" : "bad"} />
          <Readout label="Shylock Sympathy" value={`${sympathy}%`} tone={sympathy >= 60 ? "brand" : "ink"} />
        </div>

        <blockquote className="rounded-xl border-l-4 border-brand bg-surface-2 px-4 py-3 text-sm leading-relaxed text-ink">
          <span className="font-extrabold text-brand">{st.speaker}:</span> <span className="italic">{st.quote}</span>
          <div className="mt-1 text-xs font-semibold text-ink-2">Method: {st.rhetoric}</div>
        </blockquote>

        <svg
          viewBox="0 0 560 185"
          className="w-full h-auto rounded-xl border border-line bg-surface"
          role="img"
          aria-label={`Courtroom balance scales at stage ${st.label}`}
        >
          <text x={280} y={22} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--ink)">
            Courtroom Power Scales — {st.label}
          </text>

          {/* Pillar & base */}
          <rect x={274} y={48} width={12} height={104} rx={4} fill="var(--ink-2)" />
          <rect x={228} y={148} width={104} height={14} rx={6} fill="var(--ink-2)" />
          <circle cx={280} cy={52} r={8} fill="var(--brand)" />

          {/* Tilting beam */}
          <g transform={`rotate(${tiltDeg} 280 52)`}>
            <line x1={120} y1={52} x2={440} y2={52} stroke="var(--brand)" strokeWidth={5} strokeLinecap="round" />
            <line x1={120} y1={52} x2={120} y2={106} stroke="var(--line)" strokeWidth={2} />
            <line x1={440} y1={52} x2={440} y2={106} stroke="var(--line)" strokeWidth={2} />

            <rect x={54} y={102} width={132} height={42} rx={8} fill="var(--surface-2)" stroke="var(--bad)" strokeWidth={2} />
            <text x={120} y={120} textAnchor="middle" fontSize={11} fontWeight={800} fill="var(--bad)">
              SHYLOCK (Bond)
            </text>
            <text x={120} y={136} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink)">
              Power: {st.shylockPower}%
            </text>

            <rect x={374} y={102} width={132} height={42} rx={8} fill="var(--brand-soft)" stroke="var(--good)" strokeWidth={2} />
            <text x={440} y={120} textAnchor="middle" fontSize={11} fontWeight={800} fill="var(--good)">
              PORTIA &amp; COURT
            </text>
            <text x={440} y={136} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink)">
              Power: {100 - st.shylockPower}%
            </text>
          </g>

          <text x={280} y={176} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ink-2)">
            Heavier pan sinks lower — watch Stage 4 flip control completely from Shylock to Portia!
          </text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "venice-belmont-caskets",
    title: "Venice vs Belmont & Three Caskets Explorer",
    blurb: "Compare both worlds and unlock Gold, Silver, and Lead to test appearance versus reality.",
    Component: VeniceBelmontCasketExplorer,
  },
  {
    id: "trial-scene-bond-inspector",
    title: "Act 4 Scene 1 Trial Rhetoric & Power Scales",
    blurb: "Step through courtroom peripeteia and compare Elizabethan (1596) vs modern audience sympathy.",
    Component: TrialRhetoricInspector,
  },
];
