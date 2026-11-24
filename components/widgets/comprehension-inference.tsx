"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: Tone & Bias Spectrum Explorer
// ===========================================================================

type TopicKey = "rail" | "roofs" | "phones";

interface ToneSample {
  label: string;
  heat: string;
  toneColor: "brand" | "good" | "bad" | "ink";
  x: number; // SVG compass X (90..470)
  y: number; // SVG compass Y (55..195)
  parts: Array<{ text: string; clue?: boolean }>;
  clueLabel: string;
  examSentence: string;
}

const TONE_DATA: Record<TopicKey, { title: string; samples: ToneSample[] }> = {
  rail: {
    title: "New High-Speed Rail Line",
    samples: [
      {
        label: "Sardonic",
        heat: "Cool & Biting",
        toneColor: "bad",
        x: 135,
        y: 162,
        parts: [
          { text: "In a " },
          { text: "‘visionary triumph’", clue: true },
          { text: ", planners spent six billion dollars trimming " },
          { text: "a breathtaking nine minutes", clue: true },
          { text: " off a journey already served by three express trains." },
        ],
        clueLabel: "Scare quotes & dry irony",
        examSentence:
          "The writer adopts a sardonic tone, pairing ironic quotation marks (‘visionary triumph’) with deflating hyperbole (‘breathtaking nine minutes’) to mock extravagant spending.",
      },
      {
        label: "Sceptical",
        heat: "Measured Doubt",
        toneColor: "brand",
        x: 195,
        y: 152,
        parts: [
          { text: "Ministers " },
          { text: "claim", clue: true },
          { text: " the line will pay for itself by 2034, " },
          { text: "yet", clue: true },
          { text: " independent auditors question whether commuter numbers can double inside five years." },
        ],
        clueLabel: "Hedging verb & ‘yet’ pivot",
        examSentence:
          "The writer takes a sceptical stance: framing official promises with ‘claim’ and pivoting via ‘yet’ exposes weak financial assumptions.",
      },
      {
        label: "Objective",
        heat: "Impartial",
        toneColor: "ink",
        x: 280,
        y: 135,
        parts: [
          { text: "The 120-kilometre rail link " },
          { text: "is projected", clue: true },
          { text: " to cut regional travel times by 28%, " },
          { text: "while", clue: true },
          { text: " transport economists note high upfront construction costs." },
        ],
        clueLabel: "Neutral verbs & both sides",
        examSentence:
          "Neutral reporting phrasing (‘is projected’, ‘note’) and balanced inclusion of benefits alongside costs create an objective, measured register.",
      },
      {
        label: "Nostalgic",
        heat: "Warm & Wistful",
        toneColor: "brand",
        x: 355,
        y: 162,
        parts: [
          { text: "I still miss ", clue: true },
          { text: "the unhurried rhythm of the old coastal carriages, where timber window frames rattled gently past orchards " },
          { text: "before concrete viaducts split the valley", clue: true },
          { text: "." },
        ],
        clueLabel: "Sensory memory vs present",
        examSentence:
          "Affectionate sensory recall (‘timber window frames rattled gently’) contrasted with harsh modern ‘concrete viaducts’ builds a wistfully nostalgic tone.",
      },
      {
        label: "Urgent",
        heat: "High Alarm",
        toneColor: "bad",
        x: 165,
        y: 78,
        parts: [
          { text: "Gridlocked highways choke regional towns every morning; " },
          { text: "unless we build clean rail this decade", clue: true },
          { text: ", emissions will surge past recovery. " },
          { text: "Approve the track now.", clue: true },
        ],
        clueLabel: "Deadline + short imperative",
        examSentence:
          "A strict time warning (‘this decade’) culminating in the blunt imperative ‘Approve the track now.’ creates unmistakable urgency demanding swift action.",
      },
      {
        label: "Reverent",
        heat: "Awestruck",
        toneColor: "good",
        x: 415,
        y: 78,
        parts: [
          { text: "Gliding " },
          { text: "silently like a silver ribbon", clue: true },
          { text: " across the misty gorge, the bridge stands as " },
          { text: "a cathedral of human ingenuity", clue: true },
          { text: "." },
        ],
        clueLabel: "Elevated sacred imagery",
        examSentence:
          "Elevated diction (‘silver ribbon’, ‘cathedral of human ingenuity’) evokes quiet awe, framing modern engineering in a reverent tone.",
      },
    ],
  },
  roofs: {
    title: "City Rooftop Gardens",
    samples: [
      {
        label: "Sardonic",
        heat: "Cool & Biting",
        toneColor: "bad",
        x: 135,
        y: 162,
        parts: [
          { text: "After felling forty mature rain trees below, the mall unveiled its " },
          { text: "‘eco-oasis’", clue: true },
          { text: ": six potted ferns beside an air-conditioned champagne bar." },
        ],
        clueLabel: "Scare quotes + anticlimax",
        examSentence:
          "Using scare quotes around ‘eco-oasis’ before deflating it after the colon to ‘six potted ferns’ delivers sharp sardonic mockery of greenwashing.",
      },
      {
        label: "Sceptical",
        heat: "Measured Doubt",
        toneColor: "brand",
        x: 195,
        y: 152,
        parts: [
          { text: "Promoters " },
          { text: "insist", clue: true },
          { text: " rooftop beds can feed entire districts, " },
          { text: "yet", clue: true },
          { text: " structural weight limits restrict most towers to shallow herbs." },
        ],
        clueLabel: "Questioning verb + counter-fact",
        examSentence:
          "The verb ‘insist’ paired with practical engineering limits after ‘yet’ establishes a sceptical, evidence-checking perspective.",
      },
      {
        label: "Objective",
        heat: "Impartial",
        toneColor: "ink",
        x: 280,
        y: 135,
        parts: [
          { text: "Surveyed green roofs " },
          { text: "lowered", clue: true },
          { text: " indoor top-floor temperatures by 2.5°C, " },
          { text: "although", clue: true },
          { text: " waterproofing upkeep increased annual building fees." },
        ],
        clueLabel: "Measured data + caveat",
        examSentence:
          "Specific figures paired calmly with maintenance costs after ‘although’ keep the register balanced and objective.",
      },
      {
        label: "Nostalgic",
        heat: "Warm & Wistful",
        toneColor: "brand",
        x: 355,
        y: 162,
        parts: [
          { text: "The scent of crushed curry leaves on the tenth-floor terrace " },
          { text: "carried me straight back", clue: true },
          { text: " to Grandmother’s courtyard " },
          { text: "before the high-rises arrived", clue: true },
          { text: "." },
        ],
        clueLabel: "Scent memory of the past",
        examSentence:
          "Warm olfactory imagery (‘crushed curry leaves’) anchored to ‘Grandmother’s courtyard’ creates an affectionate, nostalgic voice.",
      },
      {
        label: "Urgent",
        heat: "High Alarm",
        toneColor: "bad",
        x: 165,
        y: 78,
        parts: [
          { text: "Bare concrete roofs trap lethal evening heat across dense estates. " },
          { text: "Cool our skylines this year", clue: true },
          { text: " — " },
          { text: "every delayed summer costs lives.", clue: true },
        ],
        clueLabel: "Crisis stakes + imperative",
        examSentence:
          "Stark phrasing (‘lethal evening heat’, ‘costs lives’) combined with the urgent command ‘Cool our skylines this year’ demands immediate intervention.",
      },
      {
        label: "Reverent",
        heat: "Awestruck",
        toneColor: "good",
        x: 415,
        y: 78,
        parts: [
          { text: "High above the traffic’s roar, sunbirds hover in " },
          { text: "hushed golden light", clue: true },
          { text: " — a fragile " },
          { text: "sanctuary suspended between steel and sky", clue: true },
          { text: "." },
        ],
        clueLabel: "Sacred sanctuary diction",
        examSentence:
          "Calling the rooftop a ‘sanctuary’ bathed in ‘hushed golden light’ imbues an urban garden with deep, reverent wonder.",
      },
    ],
  },
  phones: {
    title: "School Phone Pouches",
    samples: [
      {
        label: "Sardonic",
        heat: "Cool & Biting",
        toneColor: "bad",
        x: 135,
        y: 162,
        parts: [
          { text: "Naturally, the school solved teen screen addiction by launching " },
          { text: "a compulsory new phone app", clue: true },
          { text: " to log how long pupils stay offline." },
        ],
        clueLabel: "‘Naturally’ + absurd irony",
        examSentence:
          "Opening with ‘Naturally’ and highlighting the contradiction of an app to monitor offline time creates crisp, sardonic irony.",
      },
      {
        label: "Sceptical",
        heat: "Measured Doubt",
        toneColor: "brand",
        x: 195,
        y: 152,
        parts: [
          { text: "Lockable pouches " },
          { text: "supposedly", clue: true },
          { text: " erase distraction overnight, " },
          { text: "yet", clue: true },
          { text: " few studies examine whether pupils simply binge twice as hard at home." },
        ],
        clueLabel: "‘Supposedly’ + probing gap",
        examSentence:
          "The sceptical adverb ‘supposedly’ followed by an unanswered research gap after ‘yet’ casts measured doubt on sweeping claims.",
      },
      {
        label: "Objective",
        heat: "Impartial",
        toneColor: "ink",
        x: 280,
        y: 135,
        parts: [
          { text: "Across twelve trial schools, staff " },
          { text: "reported", clue: true },
          { text: " calmer corridors, " },
          { text: "while", clue: true },
          { text: " parents raised practical questions about unlocking queues during emergencies." },
        ],
        clueLabel: "Neutral verb + dual view",
        examSentence:
          "Reporting both staff observations and parent logistics with calm, neutral verbs maintains an objective, balanced tone.",
      },
      {
        label: "Nostalgic",
        heat: "Warm & Wistful",
        toneColor: "brand",
        x: 355,
        y: 162,
        parts: [
          { text: "Hearing laughter echo across the quad at break " },
          { text: "recalled quieter years", clue: true },
          { text: ", when folded paper notes and chalk games " },
          { text: "needed no charger at all", clue: true },
          { text: "." },
        ],
        clueLabel: "Fond contrast with past",
        examSentence:
          "Recalling ‘folded paper notes and chalk games’ beside modern screens evokes a gentle, nostalgic longing for simpler breaktimes.",
      },
      {
        label: "Urgent",
        heat: "High Alarm",
        toneColor: "bad",
        x: 165,
        y: 78,
        parts: [
          { text: "Attention spans are fracturing in real time inside every classroom. " },
          { text: "Reclaim the school day now", clue: true },
          { text: " before another cohort forgets " },
          { text: "how deep focus feels.", clue: true },
        ],
        clueLabel: "Immediate imperative + stakes",
        examSentence:
          "Present-tense crisis imagery (‘fracturing in real time’) paired with the direct imperative ‘Reclaim the school day now’ creates pressing urgency.",
      },
      {
        label: "Reverent",
        heat: "Awestruck",
        toneColor: "good",
        x: 415,
        y: 78,
        parts: [
          { text: "In the " },
          { text: "unbroken stillness", clue: true },
          { text: " of a screen-free library, thirty teenagers bend over open pages — " },
          { text: "guarding a rare and precious quiet", clue: true },
          { text: "." },
        ],
        clueLabel: "Elevated admiration",
        examSentence:
          "Diction such as ‘unbroken stillness’ and ‘rare and precious quiet’ frames focused reading with deep, reverent admiration.",
      },
    ],
  },
};

function ToneBiasSpectrumExplorer() {
  const [topic, setTopic] = useState<TopicKey>("rail");
  const [toneIdx, setToneIdx] = useState(0);
  const [showClues, setShowClues] = useState<"on" | "off">("on");

  const sample = TONE_DATA[topic].samples[toneIdx];

  return (
    <WidgetFrame
      title="Tone & Bias Spectrum Explorer"
      tryThis={[
        "Slide across all 6 tones on the **same topic** and notice how the facts barely change while the writer’s attitude transforms.",
        "Toggle **Highlight Clues** off and test whether you can spot the exact loaded verbs, scare quotes, or imperatives yourself.",
      ]}
      caption={
        <span>
          <strong>Exam-ready phrasing:</strong> {sample.examSentence}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<TopicKey>
            label="Choose non-fiction topic"
            value={topic}
            onChange={setTopic}
            options={[
              { value: "rail", label: "High-Speed Rail" },
              { value: "roofs", label: "Rooftop Gardens" },
              { value: "phones", label: "Phone Pouches" },
            ]}
          />
          <Segmented<"on" | "off">
            label="Highlight bias clues"
            value={showClues}
            onChange={setShowClues}
            options={[
              { value: "on", label: "Highlight Clues" },
              { value: "off", label: "Blind Test" },
            ]}
          />
        </div>

        <Slider
          label="Dial the Writer’s Tone"
          value={toneIdx}
          min={0}
          max={5}
          step={1}
          onChange={setToneIdx}
          format={(v) => TONE_DATA[topic].samples[v].label}
        />

        {/* Live Sentence Card */}
        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
            Live Extract — {TONE_DATA[topic].title}
          </div>
          <p className="text-base leading-relaxed text-ink">
            &ldquo;
            {sample.parts.map((p, idx) =>
              p.clue && showClues === "on" ? (
                <mark
                  key={idx}
                  className="rounded bg-brand-soft px-1 py-0.5 font-extrabold text-brand"
                >
                  {p.text}
                </mark>
              ) : (
                <span key={idx}>{p.text}</span>
              ),
            )}
            &rdquo;
          </p>
        </div>

        {/* Live SVG Compass */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 220"
            className="h-auto w-full"
            role="img"
            aria-label={`Tone compass showing ${sample.label} positioned on the stance and emotional heat grid`}
          >
            <rect x="0" y="0" width="560" height="220" rx="10" fill="var(--surface)" />
            <line x1="70" y1="120" x2="490" y2="120" stroke="var(--line)" strokeWidth="2" />
            <line x1="280" y1="30" x2="280" y2="200" stroke="var(--line)" strokeWidth="2" />
            <text x="280" y="20" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--brand)">
              HIGH EMOTIONAL HEAT
            </text>
            <text x="280" y="213" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="var(--ink-2)">
              COOL / MEASURED DISTANCE
            </text>
            <text x="36" y="124" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--bad)">
              CRITICAL
            </text>
            <text x="524" y="124" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--good)">
              APPROVING
            </text>
            {TONE_DATA[topic].samples.map((s, i) => {
              const active = i === toneIdx;
              return (
                <g key={s.label}>
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={active ? 11 : 6}
                    fill={active ? "var(--brand)" : "var(--surface-2)"}
                    stroke={active ? "var(--ink)" : "var(--ink-2)"}
                    strokeWidth={active ? 2.5 : 1.2}
                  />
                  <text
                    x={s.x}
                    y={s.y - (active ? 16 : 11)}
                    textAnchor="middle"
                    fontSize={active ? "11.5" : "9.5"}
                    fontWeight={active ? "800" : "600"}
                    fill={active ? "var(--brand)" : "var(--ink-2)"}
                  >
                    {s.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Exact Tone" value={sample.label} tone={sample.toneColor} />
          <Readout label="Emotional Heat" value={sample.heat} tone="ink" />
          <Readout label="Key Signal" value={sample.clueLabel} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Cross-Text Synthesis Comparator
// ===========================================================================

type DossierKey = "cycling" | "tourism" | "libraries";
type DraftMode = "weak" | "strong";

interface Dossier {
  title: string;
  textA: { label: string; quote: string };
  textB: { label: string; quote: string };
  axis: string;
  relationship: string;
  connective: string;
  weakDraft: string;
  weakWhy: string;
  strongDraft: string;
  strongWhy: string;
}

const DOSSIERS: Record<DossierKey, Dossier> = {
  cycling: {
    title: "Urban Cycling Across Eras",
    textA: {
      label: "Text A (1898 Diary)",
      quote:
        "The bicycle grants ordinary clerks an intoxicating liberty; with two brass lamps and a map, the countryside belongs to anyone who can pedal.",
    },
    textB: {
      label: "Text B (2025 Council Report)",
      quote:
        "Commuter cycling cuts congestion and lowers household travel expenses, yet patchy bike-lane markings continue to deter nervous riders.",
    },
    axis: "Freedom vs Urban Infrastructure",
    relationship: "Nuanced Contrast",
    connective: "Whereas / Although",
    weakDraft:
      "Text A says the bicycle grants ordinary clerks an intoxicating liberty and the countryside belongs to anyone who can pedal. Text B says commuter cycling cuts congestion and patchy bike-lane markings deter nervous riders.",
    weakWhy:
      "Lifts long chunks verbatim and traps Text A and Text B in two separate blocks with zero comparative connective.",
    strongDraft:
      "Although both accounts celebrate cycling as empowering and accessible, Text A romanticises it as personal escape into open countryside, whereas Text B treats it pragmatically as an affordable transport solution still constrained by uneven road safety.",
    strongWhy:
      "Opens with a shared premise (‘Although both…’), groups by conceptual axis, paraphrases cleanly in own words, and weaves both texts inside one fluent sentence.",
  },
  tourism: {
    title: "Crowded Historic Landmarks",
    textA: {
      label: "Text A (1889 Travel Letter)",
      quote:
        "Five dozen tourists chattered across the cloister like starlings; I fled into an olive grove where at least the cicadas did not mispronounce Latin.",
    },
    textB: {
      label: "Text B (2024 Cultural Essay)",
      quote:
        "Yes, the piazza pulses with selfie sticks, yet watching strangers from twelve nations marvel together under one dome feels like heritage kept alive.",
    },
    axis: "Elitist Solitude vs Living Community",
    relationship: "Sharp Contrast",
    connective: "Conversely / Yet",
    weakDraft:
      "In Text A there are five dozen tourists who chatter like starlings so the writer runs into an olive grove. In Text B there are selfie sticks in the piazza and people from twelve nations look at a dome.",
    weakWhy:
      "Retells surface literal objects (‘olive grove’, ‘selfie sticks’) without comparing the writers’ opposing attitudes or tones.",
    strongDraft:
      "While both writers encounter bustling tourist crowds, Text A reacts with sardonic snobbery — dismissing visitors as noisy pests (‘starlings’) and retreating to private solitude — whereas Text B embraces an inclusive, hopeful perspective that values global shared wonder over quiet exclusivity.",
    strongWhy:
      "Pairs exact nuanced tones (sardonic snobbery vs inclusive hope) along one clear axis and limits quotation to a single impactful word.",
  },
  libraries: {
    title: "Changing Role of Public Libraries",
    textA: {
      label: "Text A (1956 Memoir)",
      quote:
        "Beneath green brass lamps, factory apprentices and professors shared the same long oak tables in egalitarian silence.",
    },
    textB: {
      label: "Text B (2025 Council Review)",
      quote:
        "Branch libraries serve as vital digital lifelines hosting coding workshops and job terminals, though older patrons mourn the loss of silent rooms.",
    },
    axis: "Civic Equality & Changing Atmosphere",
    relationship: "Shared Core + Shift",
    connective: "Both… However",
    weakDraft:
      "Text A talks about brass lamps and oak tables where people read silently in 1956. Text B says libraries today have coding workshops and computers, so they are totally different now.",
    weakWhy:
      "Misses the vital similarity (both portray libraries as democratic spaces welcoming everyone) and ignores the internal regret noted at the end of Text B.",
    strongDraft:
      "Both writers celebrate libraries as democratic civic spaces open across social boundaries; however, whereas Text A looks back nostalgically at hushed, scholarly refuge, Text B portrays a bustling digital community hub — openly acknowledging the trade-off that modernisation has cost older readers their silence.",
    strongWhy:
      "Captures the shared democratic foundation FIRST, then contrasts past refuge against modern outreach while spotting Text B’s subtle internal tension.",
  },
};

function CrossTextSynthesisComparator() {
  const [dossierKey, setDossierKey] = useState<DossierKey>("cycling");
  const [mode, setMode] = useState<DraftMode>("strong");

  const d = DOSSIERS[dossierKey];
  const isStrong = mode === "strong";

  return (
    <WidgetFrame
      title="Cross-Text Synthesis Comparator"
      tryThis={[
        "Compare **Weak Block Copy ❌** against **Integrated Synthesis ✅** on the same paired extracts.",
        "Spot how the strong synthesis merges **both texts inside a single conceptual axis** using your own words.",
      ]}
      caption={
        <span>
          <strong>Examiner verdict:</strong> {isStrong ? d.strongWhy : d.weakWhy}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<DossierKey>
            label="Select paired texts"
            value={dossierKey}
            onChange={setDossierKey}
            options={[
              { value: "cycling", label: "Urban Cycling" },
              { value: "tourism", label: "Crowded Sites" },
              { value: "libraries", label: "Public Libraries" },
            ]}
          />
          <Segmented<DraftMode>
            label="Select response quality"
            value={mode}
            onChange={setMode}
            options={[
              { value: "weak", label: "Weak Block Copy ❌" },
              { value: "strong", label: "Integrated Synthesis ✅" },
            ]}
          />
        </div>

        {/* Paired Mini-Extracts */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">
              {d.textA.label}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink">&ldquo;{d.textA.quote}&rdquo;</p>
          </div>
          <div className="min-w-0 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-info">
              {d.textB.label}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink">&ldquo;{d.textB.quote}&rdquo;</p>
          </div>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 560 110"
            className="h-auto w-full"
            role="img"
            aria-label={
              isStrong
                ? "Integrated synthesis architecture merging Text A and Text B through one shared theme axis"
                : "Weak disconnected summary blocks keeping Text A and Text B separate"
            }
          >
            <rect x="0" y="0" width="560" height="110" rx="8" fill="var(--surface)" />
            {isStrong ? (
              <g>
                <rect x="18" y="24" width="128" height="62" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.5" />
                <text x="82" y="50" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brand)">Text A Core</text>
                <text x="82" y="68" textAnchor="middle" fontSize="9.5" fill="var(--ink)">Own words</text>
                <rect x="186" y="16" width="188" height="78" rx="10" fill="var(--good-soft)" stroke="var(--good)" strokeWidth="2" />
                <text x="280" y="38" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--good)">SHARED THEME AXIS</text>
                <text x="280" y="57" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink)">{d.axis}</text>
                <text x="280" y="76" textAnchor="middle" fontSize="9.5" fill="var(--good)">Connective: {d.connective}</text>
                <rect x="414" y="24" width="128" height="62" rx="8" fill="var(--info-soft)" stroke="var(--info)" strokeWidth="1.5" />
                <text x="478" y="50" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--info)">Text B Core</text>
                <text x="478" y="68" textAnchor="middle" fontSize="9.5" fill="var(--ink)">Own words</text>
                <line x1="146" y1="55" x2="184" y2="55" stroke="var(--good)" strokeWidth="2.5" />
                <line x1="376" y1="55" x2="414" y2="55" stroke="var(--good)" strokeWidth="2.5" />
              </g>
            ) : (
              <g>
                <rect x="24" y="22" width="210" height="66" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" strokeWidth="1.5" />
                <text x="129" y="48" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--bad)">Block 1: Text A Only</text>
                <text x="129" y="68" textAnchor="middle" fontSize="9.5" fill="var(--ink)">Copied chunks &#x2022; No comparison</text>
                <text x="280" y="59" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--bad)">GAP</text>
                <rect x="326" y="22" width="210" height="66" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" strokeWidth="1.5" />
                <text x="431" y="48" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--bad)">Block 2: Text B Only</text>
                <text x="431" y="68" textAnchor="middle" fontSize="9.5" fill="var(--ink)">Separate summary &#x2022; No bridge</text>
              </g>
            )}
          </svg>
        </div>

        {/* Live Draft Box */}
        <div
          className={`rounded-xl border p-4 ${
            isStrong ? "border-good bg-good-soft/40" : "border-bad bg-bad-soft/40"
          }`}
        >
          <div className={`text-xs font-extrabold uppercase tracking-wide ${isStrong ? "text-good" : "text-bad"}`}>
            {isStrong ? "Top-Band Year 9 Integrated Synthesis" : "Low-Band Disconnected Block Summary"}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-ink">
            {isStrong ? d.strongDraft : d.weakDraft}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Readout label="Shared Axis" value={d.axis} tone="ink" />
          <Readout label="Relationship" value={d.relationship} tone="brand" />
          <Readout
            label="Own-Words Synthesis"
            value={isStrong ? "Integrated ✓" : "Copied Blocks ✗"}
            tone={isStrong ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tone-bias-spectrum-explorer",
    title: "Tone & Bias Spectrum Explorer",
    blurb: "Dial one non-fiction event across six nuanced Year 9 tones and test your bias-clue radar.",
    Component: ToneBiasSpectrumExplorer,
  },
  {
    id: "cross-text-synthesis-comparator",
    title: "Cross-Text Synthesis Comparator",
    blurb: "Toggle weak copied blocks against integrated thematic synthesis across paired historical and modern extracts.",
    Component: CrossTextSynthesisComparator,
  },
];
