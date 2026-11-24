"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: Aristotelian Rhetoric & Speech Builder
// ===========================================================================

type MotionKey = "cars" | "grades" | "phones";
type DeviceKey = "anaphora" | "tricolon" | "antithesis" | "hypophora";

interface MotionPack {
  title: string;
  hook: string;
  ethos: string;
  pathos: string;
  logos: string;
  devices: Record<DeviceKey, string>;
  callback: string;
}

const MOTIONS: Record<MotionKey, MotionPack> = {
  cars: {
    title: "Car-Free City Centres",
    hook: "At 08:10 every morning, a single idling line of half-empty cars stretches past three primary school gates.",
    ethos:
      "Over the past term, our geography group measured pavement air quality beside our campus gates and spoke honestly with local van drivers about delivery access.",
    pathos:
      "Watch an eight-year-old clutching an inhaler at the pedestrian crossing, waiting for exhaust haze to clear before the green light blinks.",
    logos:
      "When Ghent redesigned its downtown core with timed loading windows and electric shuttles, nitrogen dioxide fell by 20% while footfall in local shops actually climbed.",
    devices: {
      anaphora:
        "We deserve streets built for breath. We deserve streets built for conversation. We deserve streets built for living, not idling.",
      tricolon:
        "Reclaiming downtown tarmac delivers cleaner air, safer crossings, and livelier neighbourhood squares.",
      antithesis:
        "A great city measures success by people welcomed, not exhaust pipes parked.",
      hypophora:
        "Does prioritising walkers punish essential tradespeople? On the contrary — removing solo commuter traffic lets delivery vans and ambulances move twice as fast.",
    },
    callback:
      "Picture that same 08:10 crossing one year from now: no idling bumpers, no haze — just clear air and unhurried footsteps outside the school gate.",
  },
  grades: {
    title: "Grades vs Genuine Curiosity",
    hook: "Last Friday, a classmate folded a 91% essay straight into her bag without reading a single line of her teacher’s feedback — because the number had already ended the conversation.",
    ethos:
      "I care deeply about strong exam standards too; structured marks help schools spot who needs support early.",
    pathos:
      "Yet watch what happens when a fourteen-year-old stops asking ‘Why did this poem haunt me?’ and only asks ‘Will this line be on Friday’s test?’",
    logos:
      "Classroom studies by Ruth Butler showed pupils given diagnostic comments alone improved significantly more on follow-up tasks than pupils handed grades alongside comments.",
    devices: {
      anaphora:
        "Curiosity asks bold questions. Curiosity survives red ink. Curiosity outlives every grade boundary.",
      tricolon:
        "Diagnostic feedback rewards deeper revision, braver drafting, and genuine intellectual growth.",
      antithesis:
        "Grades measure where a mind stood yesterday; feedback builds where a mind can travel tomorrow.",
      hypophora:
        "Should schools abolish all assessment overnight? Of course not — simply pause the score until students engage with the comments first.",
    },
    callback:
      "Hand that same essay back without the red number at the top, and watch what changes: the paper stays open on the desk, and real thinking finally begins.",
  },
  phones: {
    title: "Smartphones Locked Until 16",
    hook: "Hold up your hand if you checked a glowing screen within five minutes of waking up this morning — before speaking a single word to your family.",
    ethos:
      "As a teenager who genuinely enjoys group chats and photography, I am not arguing from anti-technology nostalgia.",
    pathos:
      "At 11:45 p.m., thousands of fourteen-year-olds lie awake in dark bedrooms, thumb scrolling through strangers’ highlight reels while tomorrow’s energy quietly drains away.",
    logos:
      "Across twelve trial secondary schools adopting lockable pouches, teachers reported calmer corridors while pupils averaged over thirty extra minutes of restorative sleep.",
    devices: {
      anaphora:
        "Lock the feed and return our sleep. Lock the feed and return our focus. Lock the feed and return our unhurried afternoons.",
      tricolon:
        "Protecting early adolescence from infinite scroll restores calmer minds, deeper friendships, and honest rest.",
      antithesis:
        "Technology should serve young attention, never harvest it.",
      hypophora:
        "What about urgent messages from parents? Simple keypad phones and school receptions already solve emergencies without handing twelve-year-olds an addictive casino in their pocket.",
    },
    callback:
      "Imagine waking tomorrow morning to five quiet minutes without a glowing screen — hearing your own thoughts first before the algorithm speaks.",
  },
};

const DEVICE_LABELS: Record<DeviceKey, string> = {
  anaphora: "Anaphora",
  tricolon: "Tricolon",
  antithesis: "Antithesis",
  hypophora: "Hypophora",
};

function RhetoricSpeechBuilder() {
  const [motion, setMotion] = useState<MotionKey>("cars");
  const [ethos, setEthos] = useState(4);
  const [pathos, setPathos] = useState(4);
  const [logos, setLogos] = useState(4);
  const [device, setDevice] = useState<DeviceKey>("antithesis");
  const [callbackOn, setCallbackOn] = useState<"on" | "off">("on");

  const pack = MOTIONS[motion];

  // Calculate SVG radar triangle vertices around centre (170, 128)
  const cx = 170;
  const cy = 128;
  const maxR = 84;
  const pointAt = (deg: number, val: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    const r = (Math.max(0.5, val) / 5) * maxR;
    return `${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`;
  };
  const outerPts = [0, 120, 240].map((d) => pointAt(d, 5)).join(" ");
  const midPts = [0, 120, 240].map((d) => pointAt(d, 2.5)).join(" ");
  const livePts = [pointAt(0, ethos), pointAt(120, logos), pointAt(240, pathos)].join(" ");

  // Balance diagnosis
  const minVal = Math.min(ethos, pathos, logos);
  const maxVal = Math.max(ethos, pathos, logos);
  let diagnosis = "Finalist Balance";
  let diagTone: "good" | "bad" | "brand" = "good";
  let advice =
    "All three Aristotelian pillars pull together — credible Ethos, restrained Pathos, and verifiable Logos create lasting persuasion.";

  if (ethos === 0 && pathos === 0 && logos === 0) {
    diagnosis = "Empty Shell";
    diagTone = "bad";
    advice = "Turn up at least one Aristotelian pillar — a hook alone cannot carry a 3-minute speech.";
  } else if (pathos >= 4 && logos <= 1) {
    diagnosis = "Melodrama Risk";
    diagTone = "bad";
    advice = "Heavy Pathos without Logos proof risks sounding theatrical; raise Logos to anchor emotion in evidence.";
  } else if (logos >= 4 && pathos <= 1) {
    diagnosis = "Cold Spreadsheet";
    diagTone = "brand";
    advice = "Strong Logos data, yet low Pathos makes listeners tune out — add one concrete human scene so they care.";
  } else if (ethos <= 1 && maxVal >= 3) {
    diagnosis = "Weak Trust (Ethos)";
    diagTone = "bad";
    advice = "Low Ethos leaves judges sceptical of your motives — add fair concession or lived credibility.";
  } else if (minVal <= 2 || maxVal - minVal >= 3) {
    diagnosis = "Tilted Balance";
    diagTone = "brand";
    advice = "Good foundation, though lifting your lowest pillar will sharpen your speech across both heart and mind.";
  }

  // Assemble live speech segments
  const lines: Array<{ tag: string; text: string; accent: string }> = [
    { tag: "0:00 Hook", text: pack.hook, accent: "text-brand" },
  ];
  if (ethos >= 2) lines.push({ tag: "Ethos", text: pack.ethos, accent: "text-brand" });
  if (pathos >= 2) lines.push({ tag: "Pathos", text: pack.pathos, accent: "text-good" });
  if (logos >= 2) lines.push({ tag: "Logos", text: pack.logos, accent: "text-info" });
  lines.push({ tag: DEVICE_LABELS[device], text: pack.devices[device], accent: "text-brand" });
  if (callbackOn === "on") {
    lines.push({ tag: "2:45 Call-Back", text: pack.callback, accent: "text-good" });
  }

  const estWords = lines.reduce((sum, l) => sum + l.text.split(/\s+/).length, 0);
  const estSecs = Math.round((estWords / 135) * 60) + (callbackOn === "on" ? 6 : 3);

  return (
    <WidgetFrame
      title="Aristotelian Rhetoric & Speech Builder"
      tryThis={[
        "Drag **Pathos to 5** and **Logos to 0** — see what happens to the triangle and judge feedback, then rebalance all three.",
        "Switch between **Anaphora, Tricolon, Antithesis, and Hypophora** and toggle the **Cyclical Call-Back** to hear how the ending locks onto the opening.",
      ]}
      caption={
        <span>
          <strong>Stage Coach Feedback:</strong> {advice}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<MotionKey>
            label="Choose competition motion"
            value={motion}
            onChange={setMotion}
            options={[
              { value: "cars", label: "Car-Free Centres" },
              { value: "grades", label: "Grades vs Curiosity" },
              { value: "phones", label: "Phones Until 16" },
            ]}
          />
          <Segmented<"on" | "off">
            label="Toggle cyclical call-back"
            value={callbackOn}
            onChange={setCallbackOn}
            options={[
              { value: "on", label: "Call-Back On" },
              { value: "off", label: "Call-Back Off" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Controls */}
          <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface-2 p-3.5">
            <Slider label="Ethos (Credibility & Fairness)" value={ethos} min={0} max={5} onChange={setEthos} format={(v) => `${v}/5`} />
            <Slider label="Pathos (Restrained Empathy)" value={pathos} min={0} max={5} onChange={setPathos} format={(v) => `${v}/5`} />
            <Slider label="Logos (Evidence & Logic)" value={logos} min={0} max={5} onChange={setLogos} format={(v) => `${v}/5`} />
            <div className="pt-1">
              <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
                Peak Rhetorical Device
              </div>
              <Segmented<DeviceKey>
                label="Select rhetorical device"
                value={device}
                onChange={setDevice}
                options={[
                  { value: "anaphora", label: "Anaphora" },
                  { value: "tricolon", label: "Tricolon" },
                  { value: "antithesis", label: "Antithesis" },
                  { value: "hypophora", label: "Hypophora" },
                ]}
              />
            </div>
          </div>

          {/* Dynamic Radar Triangle SVG */}
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-line bg-surface p-2">
            <svg
              viewBox="0 0 340 240"
              className="h-auto w-full max-w-[320px]"
              role="img"
              aria-label={`Aristotelian balance triangle showing Ethos ${ethos}, Pathos ${pathos}, and Logos ${logos} out of 5`}
            >
              <rect x="0" y="0" width="340" height="240" rx="10" fill="var(--surface)" />
              <polygon points={outerPts} fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.5" />
              <polygon points={midPts} fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="4 3" />
              <line x1={cx} y1={cy} x2={cx} y2={cy - maxR} stroke="var(--line)" strokeWidth="1" />
              <line x1={cx} y1={cy} x2={cx + maxR * Math.cos((30 * Math.PI) / 180)} y2={cy + maxR * Math.sin((30 * Math.PI) / 180)} stroke="var(--line)" strokeWidth="1" />
              <line x1={cx} y1={cy} x2={cx - maxR * Math.cos((30 * Math.PI) / 180)} y2={cy + maxR * Math.sin((30 * Math.PI) / 180)} stroke="var(--line)" strokeWidth="1" />
              <polygon points={livePts} fill="var(--brand-soft)" opacity="0.82" stroke="var(--brand)" strokeWidth="2.5" />
              <text x={cx} y="28" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--brand)">
                ETHOS ({ethos}/5)
              </text>
              <text x="64" y="216" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--good)">
                PATHOS ({pathos}/5)
              </text>
              <text x="276" y="216" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="var(--info)">
                LOGOS ({logos}/5)
              </text>
            </svg>
          </div>
        </div>

        {/* Live Assembled Excerpt */}
        <div className="space-y-2 rounded-xl border border-line bg-surface-2 p-4">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Live Speech Blueprint — {pack.title}
          </div>
          {lines.map((l) => (
            <p key={l.tag} className="text-sm leading-relaxed text-ink">
              <span className={`mr-2 inline-block rounded bg-surface px-1.5 py-0.5 text-xs font-extrabold ${l.accent}`}>
                {l.tag}
              </span>
              {l.text}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Triangle Balance" value={diagnosis} tone={diagTone} />
          <Readout label="Excerpt Pace (~135 wpm)" value={`${estWords} wds · ~${estSecs}s`} tone="ink" />
          <Readout label="Peak Device" value={DEVICE_LABELS[device]} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Comma-Splice & SPaG Punctuation Repair Workshop
// ===========================================================================

type CaseKey = "however" | "bare" | "colon" | "apostrophe" | "passive";
type ToolKey = "semicolon" | "colon" | "fanboys" | "fullstop" | "apostrophe" | "active";

interface RepairOutcome {
  status: "best" | "valid" | "broken";
  repaired: string;
  explanation: string;
}

interface SpagCase {
  label: string;
  broken: string;
  leftTag: string;
  rightTag: string;
  diagnosis: string;
  outcomes: Record<ToolKey, RepairOutcome>;
}

const SPAG_CASES: Record<CaseKey, SpagCase> = {
  however: {
    label: "‘However’ Splice",
    broken: "Solar panels demand high upfront cost, however, they cut electricity bills within five years.",
    leftTag: "Independent Clause 1",
    rightTag: "Conjunctive Adverb + Independent Clause 2",
    diagnosis: "Comma splice before conjunctive adverb ‘however’",
    outcomes: {
      semicolon: {
        status: "best",
        repaired: "Solar panels demand high upfront cost; however, they cut electricity bills within five years.",
        explanation:
          "Best match! A semicolon before ‘however,’ joins both complete clauses tightly while preserving formal discursive flow.",
      },
      fullstop: {
        status: "valid",
        repaired: "Solar panels demand high upfront cost. However, they cut electricity bills within five years.",
        explanation:
          "Grammatically valid! Splitting into two crisp sentences fixes the comma splice cleanly (semicolon links them even more closely).",
      },
      fanboys: {
        status: "valid",
        repaired: "Solar panels demand high upfront cost, yet they cut electricity bills within five years.",
        explanation:
          "Grammatically valid! Replacing ‘however’ with the FANBOYS conjunction ‘yet’ fixes the splice smoothly.",
      },
      colon: {
        status: "broken",
        repaired: "Solar panels demand high upfront cost: however, they cut electricity bills within five years.",
        explanation:
          "Still broken — a colon introduces a reveal or explanation, not a contrasting pivot with ‘however’.",
      },
      apostrophe: {
        status: "broken",
        repaired: "Solar panels demand high upfront cost, however, they cut electricity bills within five years.",
        explanation:
          "Wrong tool — there is no apostrophe error here; the bug is the weak comma right before ‘however’.",
      },
      active: {
        status: "broken",
        repaired: "Solar panels demand high upfront cost, however, they cut electricity bills within five years.",
        explanation:
          "Wrong tool — both clauses are already active voice; fix the comma splice with a semicolon, full stop, or ‘, yet’.",
      },
    },
  },
  bare: {
    label: "Bare Comma Splice",
    broken: "The debate ran overtime, the judges requested one final rebuttal.",
    leftTag: "Independent Clause 1",
    rightTag: "Independent Clause 2",
    diagnosis: "Two complete sentences glued by only a comma",
    outcomes: {
      semicolon: {
        status: "best",
        repaired: "The debate ran overtime; the judges requested one final rebuttal.",
        explanation:
          "Best match! Both clauses stand alone and connect tightly in time and cause — ideal for a semicolon.",
      },
      fanboys: {
        status: "best",
        repaired: "The debate ran overtime, so the judges requested one final rebuttal.",
        explanation:
          "Best match! Adding the FANBOYS conjunction ‘so’ after the comma explicitly clarifies cause and effect.",
      },
      fullstop: {
        status: "valid",
        repaired: "The debate ran overtime. The judges requested one final rebuttal.",
        explanation:
          "Grammatically valid! A full stop cleanly separates two complete clauses for brisk pace.",
      },
      colon: {
        status: "broken",
        repaired: "The debate ran overtime: the judges requested one final rebuttal.",
        explanation:
          "Weak match — the second clause reports the next event rather than explaining or defining ‘overtime’.",
      },
      apostrophe: {
        status: "broken",
        repaired: "The debate ran overtime, the judges requested one final rebuttal.",
        explanation:
          "Wrong tool — ‘judges’ is a simple plural subject, not possessive, so adding an apostrophe would introduce a new error.",
      },
      active: {
        status: "broken",
        repaired: "The debate ran overtime, the judges requested one final rebuttal.",
        explanation:
          "Wrong tool — both clauses are already active; repair the boundary with a semicolon, full stop, or ‘, so’.",
      },
    },
  },
  colon: {
    label: "Dramatic Reveal",
    broken: "Every compelling speaker masters one rare skill, knowing exactly when to pause.",
    leftTag: "Complete Setup Clause",
    rightTag: "Reveal Phrase (Fragment)",
    diagnosis: "Needs a colon (or dash) to reveal ‘one rare skill’",
    outcomes: {
      colon: {
        status: "best",
        repaired: "Every compelling speaker masters one rare skill: knowing exactly when to pause.",
        explanation:
          "Best match! The left side is a complete sentence creating anticipation, and the colon points directly into the reveal.",
      },
      semicolon: {
        status: "broken",
        repaired: "Every compelling speaker masters one rare skill; knowing exactly when to pause.",
        explanation:
          "Still broken! ‘knowing exactly when to pause’ is NOT an independent clause, so a semicolon cannot precede it.",
      },
      fullstop: {
        status: "broken",
        repaired: "Every compelling speaker masters one rare skill. Knowing exactly when to pause.",
        explanation:
          "Creates a fragment! ‘Knowing exactly when to pause.’ lacks a main finite verb unless linked with a colon.",
      },
      fanboys: {
        status: "broken",
        repaired: "Every compelling speaker masters one rare skill, and knowing exactly when to pause.",
        explanation:
          "Still broken — ‘and’ implies a second separate skill rather than revealing what ‘one rare skill’ is.",
      },
      apostrophe: {
        status: "broken",
        repaired: "Every compelling speaker masters one rare skill, knowing exactly when to pause.",
        explanation: "Wrong tool — zero apostrophes are missing here; use a colon to deliver the reveal.",
      },
      active: {
        status: "broken",
        repaired: "Every compelling speaker masters one rare skill, knowing exactly when to pause.",
        explanation: "Wrong tool — ‘masters’ is already active voice; upgrade the weak comma to a colon.",
      },
    },
  },
  apostrophe: {
    label: "Apostrophe Double-Trap",
    broken: "The council revised it’s timetable after reading the student’s (plural) petitions.",
    leftTag: "Possessive ‘its’ (No ’)",
    rightTag: "Plural Possessive ‘students’",
    diagnosis: "Confused it’s/its AND singular vs plural possessive",
    outcomes: {
      apostrophe: {
        status: "best",
        repaired: "The council revised its timetable after reading the students’ petitions.",
        explanation:
          "Best match! Possessive ‘its’ takes NO apostrophe (‘it is timetable’ fails), and plural ‘students’’ places the apostrophe AFTER the s.",
      },
      semicolon: {
        status: "broken",
        repaired: "The council revised it’s timetable; after reading the student’s petitions.",
        explanation:
          "Makes it worse! Putting a semicolon before a phrase fragment breaks the grammar and leaves both apostrophe errors untouched.",
      },
      colon: {
        status: "broken",
        repaired: "The council revised it’s timetable: after reading the student’s petitions.",
        explanation: "Wrong tool — neither apostrophe bug is fixed, and a colon splits a normal time clause.",
      },
      fanboys: {
        status: "broken",
        repaired: "The council revised it’s timetable, and after reading the student’s petitions.",
        explanation: "Wrong tool — the sentence structure was already fine; only the two apostrophes were wrong.",
      },
      fullstop: {
        status: "broken",
        repaired: "The council revised it’s timetable. After reading the student’s petitions.",
        explanation: "Creates a fragment and misses both apostrophe mistakes!",
      },
      active: {
        status: "broken",
        repaired: "The council revised it’s timetable after reading the student’s petitions.",
        explanation: "Wrong tool — ‘The council revised’ is already crisp active voice; apply the Apostrophe Fix.",
      },
    },
  },
  passive: {
    label: "Evasive Passive Voice",
    broken: "Three evening bus routes were cancelled without consultation by planners.",
    leftTag: "Passive Receiver Subject",
    rightTag: "Buried Agent (‘by planners’)",
    diagnosis: "Clunky passive hides accountability until the very end",
    outcomes: {
      active: {
        status: "best",
        repaired: "Planners cancelled three evening bus routes without consultation.",
        explanation:
          "Best match! Putting ‘Planners’ right in the subject slot tightens the sentence by three words and makes accountability unmistakable.",
      },
      semicolon: {
        status: "broken",
        repaired: "Three evening bus routes were cancelled; without consultation by planners.",
        explanation: "Creates a fragment after the semicolon and leaves the passive voice untouched.",
      },
      colon: {
        status: "broken",
        repaired: "Three evening bus routes were cancelled: without consultation by planners.",
        explanation: "Wrong tool — punctuation cannot turn a passive clause into a direct active verb.",
      },
      fanboys: {
        status: "broken",
        repaired: "Three evening bus routes were cancelled, and without consultation by planners.",
        explanation: "Wrong tool — adding a conjunction breaks syntax without naming the actor up front.",
      },
      fullstop: {
        status: "broken",
        repaired: "Three evening bus routes were cancelled. Without consultation by planners.",
        explanation: "Splits the sentence into an awkward fragment while keeping the evasive passive.",
      },
      apostrophe: {
        status: "broken",
        repaired: "Three evening bus routes were cancelled without consultation by planners.",
        explanation: "Wrong tool — ‘routes’ and ‘planners’ are simple plurals needing zero apostrophes.",
      },
    },
  },
};

function PunctuationRepairWorkshop() {
  const [caseKey, setCaseKey] = useState<CaseKey>("however");
  const [tool, setTool] = useState<ToolKey>("semicolon");

  const sc = SPAG_CASES[caseKey];
  const out = sc.outcomes[tool];

  const boxStyle =
    out.status === "best"
      ? "border-good bg-good-soft/45"
      : out.status === "valid"
        ? "border-info bg-info-soft/45"
        : "border-bad bg-bad-soft/45";
  const badgeColor =
    out.status === "best" ? "text-good" : out.status === "valid" ? "text-info" : "text-bad";
  const badgeText =
    out.status === "best"
      ? "Best Stylistic Match ✅"
      : out.status === "valid"
        ? "Grammatically Valid ✓"
        : "Still Broken / Wrong Tool ❌";

  return (
    <WidgetFrame
      title="Comma-Splice & SPaG Repair Workshop"
      tryThis={[
        "Pick each broken Year 9 sentence and test different **Repair Tools** — notice why a **semicolon** fixes `however` splices while failing before a fragment reveal.",
        "Switch to **Evasive Passive Voice** and **Apostrophe Double-Trap** to compare punctuation fixes against syntax rewrites.",
      ]}
      caption={
        <span>
          <strong>Grammar Coach:</strong> {out.explanation}
        </span>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
            1. Pick a Broken Sentence
          </div>
          <Segmented<CaseKey>
            label="Pick a broken SPaG sentence"
            value={caseKey}
            onChange={setCaseKey}
            options={[
              { value: "however", label: "‘However’ Splice" },
              { value: "bare", label: "Bare Splice" },
              { value: "colon", label: "Colon Reveal" },
              { value: "apostrophe", label: "Apostrophes" },
              { value: "passive", label: "Passive Voice" },
            ]}
          />
        </div>

        {/* Original Broken Card */}
        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-bad">
              Original Draft (Broken)
            </span>
            <span className="chip">{sc.diagnosis}</span>
          </div>
          <p className="mt-2 text-base font-semibold text-ink">&ldquo;{sc.broken}&rdquo;</p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-ink-2">
            <span className="rounded bg-surface px-2 py-0.5 font-bold">Left: {sc.leftTag}</span>
            <span className="rounded bg-surface px-2 py-0.5 font-bold">Right: {sc.rightTag}</span>
          </div>
        </div>

        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
            2. Apply a Repair Tool
          </div>
          <Segmented<ToolKey>
            label="Apply a SPaG repair tool"
            value={tool}
            onChange={setTool}
            options={[
              { value: "semicolon", label: "Semicolon ;" },
              { value: "colon", label: "Colon :" },
              { value: "fanboys", label: ", + FANBOYS" },
              { value: "fullstop", label: "Full Stop ." },
              { value: "apostrophe", label: "Apostrophe Fix" },
              { value: "active", label: "Active Rewrite" },
            ]}
          />
        </div>

        {/* Repaired Output Box */}
        <div className={`rounded-xl border p-4 ${boxStyle}`}>
          <div className={`text-xs font-extrabold uppercase tracking-wide ${badgeColor}`}>
            {badgeText}
          </div>
          <p className="mt-1.5 text-base font-bold leading-relaxed text-ink">
            &ldquo;{out.repaired}&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Clause Left" value={sc.leftTag} tone="ink" />
          <Readout label="Clause Right" value={sc.rightTag} tone="ink" />
          <Readout
            label="Verdict"
            value={out.status === "best" ? "Top Band ✓" : out.status === "valid" ? "Valid ✓" : "Fix Needed ✗"}
            tone={out.status === "best" ? "good" : out.status === "valid" ? "brand" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "rhetoric-speech-builder",
    title: "Aristotelian Rhetoric & Speech Builder",
    blurb: "Tune Ethos, Pathos, and Logos sliders, pick a peak rhetorical device, and assemble a Tanglin competition speech live.",
    Component: RhetoricSpeechBuilder,
  },
  {
    id: "punctuation-repair-workshop",
    title: "Comma-Splice & SPaG Repair Workshop",
    blurb: "Test semicolons, colons, FANBOYS, apostrophe fixes, and active rewrites on classic Year 9 grammar traps.",
    Component: PunctuationRepairWorkshop,
  },
];
