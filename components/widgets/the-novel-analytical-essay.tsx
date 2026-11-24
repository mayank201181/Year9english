"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type LensId = "first-unreliable" | "first-reflective" | "third-fid" | "third-omniscient";
type SceneId = "ledger" | "gate" | "trophy";

interface LensVersion {
  label: string;
  shortLabel: string;
  pronouns: string;
  distancePct: number;
  distanceLabel: string;
  sympathyNote: string;
  ironyRisk: string;
  ironyTone: "brand" | "good" | "bad" | "ink";
  segments: Array<{ text: string; clue?: string }>;
  craftNote: string;
  essayStarter: string;
}

const SCENES: Record<SceneId, { title: string; premise: string; versions: Record<LensId, LensVersion> }> = {
  ledger: {
    title: "The Missing Ledger",
    premise: "An apprentice opens a locked office book after hours while a senior clerk approaches.",
    versions: {
      "first-unreliable": {
        label: "1st-Person Unreliable",
        shortLabel: "1st Unreliable",
        pronouns: "I / my",
        distancePct: 14,
        distanceLabel: "Very close (biased)",
        sympathyNote: "Distrust — defensive excuses",
        ironyRisk: "High",
        ironyTone: "bad",
        segments: [
          { text: "I " , clue: "1st-person pronoun" },
          { text: "only borrowed ", clue: "Minimising excuse" },
          { text: "the brass ledger to tidy the columns — though of course " },
          { text: "anyone jealous of my promotion ", clue: "Deflects blame" },
          { text: "would make a hysterical fuss over a broken seal." },
        ],
        craftNote:
          "Minimising phrasing (‘only borrowed’) plus blaming unnamed ‘jealous’ rivals exposes self-deception, inviting readers to look past the speaker’s alibi.",
        essayStarter:
          "Through defensive qualifiers such as “only borrowed,” the writer constructs an unreliable narrator whose excuses heighten dramatic irony.",
      },
      "first-reflective": {
        label: "1st-Person Reflective",
        shortLabel: "1st Reflective",
        pronouns: "I / my (hindsight)",
        distancePct: 36,
        distanceLabel: "Close + hindsight",
        sympathyNote: "Warm empathy + moral candour",
        ironyRisk: "Moderate",
        ironyTone: "brand",
        segments: [
          { text: "Looking back now, I ", clue: "Retrospective framing" },
          { text: "can see how foolishly I lifted the brass ledger. At seventeen, " },
          { text: "pride blinded me ", clue: "Older self-critique" },
          { text: "to the footsteps already climbing the stone stairwell outside." },
        ],
        craftNote:
          "Dual-time narration pairs youthful rashness with an older, wiser conscience (‘Looking back now’), letting readers feel regret alongside suspense.",
        essayStarter:
          "Using retrospective first-person narration, the writer layers mature regret over youthful hubris, encouraging compassionate judgement.",
      },
      "third-fid": {
        label: "3rd Limited + Free Indirect",
        shortLabel: "3rd + FID",
        pronouns: "He / his + inner idiom",
        distancePct: 58,
        distanceLabel: "Blended dual-voice",
        sympathyNote: "Intimate yet subtly ironic",
        ironyRisk: "High",
        ironyTone: "brand",
        segments: [
          { text: "Daniel stared at the torn wax seal. " },
          { text: "Really, why on earth ", clue: "Free indirect idiom" },
          { text: "had the senior clerk left such a tempting lock unbolted? ", clue: "Unspoken rationalisation" },
          { text: "He smoothed his cuff and reached calmly for the clasp." },
        ],
        craftNote:
          "Third-person grammar remains (‘Daniel’, ‘He’), yet the exasperated rhetorical question erupts without ‘he thought’, fusing intimacy with subtle irony.",
        essayStarter:
          "Via free indirect discourse, the writer allows Daniel’s self-justifying question to infiltrate third-person prose, exposing covert entitlement.",
      },
      "third-omniscient": {
        label: "3rd-Person Omniscient",
        shortLabel: "3rd Omniscient",
        pronouns: "He / she (multi-mind)",
        distancePct: 90,
        distanceLabel: "Panoramic / wide",
        sympathyNote: "Balanced critical overview",
        ironyRisk: "Maximum",
        ironyTone: "good",
        segments: [
          { text: "Inside the study, Daniel smiled, " },
          { text: "convinced he was alone. ", clue: "Mind 1 access" },
          { text: "Two floors below, however, ", clue: "Spatial pan" },
          { text: "the head clerk already gripped the master key and climbed silently upward.", clue: "Mind 2 / dramatic irony" },
        ],
        craftNote:
          "Moving freely across rooms and minds grants readers superior knowledge over Daniel, generating sharp structural dramatic irony.",
        essayStarter:
          "By shifting omnisciently from Daniel’s complacency to the clerk’s silent ascent, the writer traps the reader in tense dramatic irony.",
      },
    },
  },
  gate: {
    title: "The Storm at the Gate",
    premise: "Two siblings argue over whether to wait out a rising gale or cross the floodbridge.",
    versions: {
      "first-unreliable": {
        label: "1st-Person Unreliable",
        shortLabel: "1st Unreliable",
        pronouns: "I / my",
        distancePct: 14,
        distanceLabel: "Very close (biased)",
        sympathyNote: "Sceptical — bravado masks fear",
        ironyRisk: "High",
        ironyTone: "bad",
        segments: [
          { text: "I wasn’t trembling — ", clue: "Unsolicited denial" },
          { text: "it was merely the sleet stinging my collar. " },
          { text: "Mara always exaggerates ", clue: "Dismisses witness" },
          { text: "about flooded bridges just to make herself feel sensible." },
        ],
        craftNote:
          "An unprompted denial (‘I wasn’t trembling’) immediately signals hidden terror, while attacking Mara’s caution exposes bruised pride.",
        essayStarter:
          "The narrator’s abrupt denial (“I wasn’t trembling”) undercuts his bravado, revealing defensive unreliability beneath the boast.",
      },
      "first-reflective": {
        label: "1st-Person Reflective",
        shortLabel: "1st Reflective",
        pronouns: "I / my (hindsight)",
        distancePct: 36,
        distanceLabel: "Close + hindsight",
        sympathyNote: "Deep empathy & foreboding",
        ironyRisk: "Moderate",
        ironyTone: "brand",
        segments: [
          { text: "If I had known ", clue: "Hindsight clue" },
          { text: "how swiftly the river would claim the lower timbers, " },
          { text: "I would never have laughed ", clue: "Regretful tone" },
          { text: "when Mara begged me to stay behind the iron gate." },
        ],
        craftNote:
          "Conditional hindsight (‘If I had known’) blends confession with dark foreshadowing, turning a simple argument into a tragic pivot.",
        essayStarter:
          "Framing the memory with conditional hindsight (“If I had known”) saturates the scene with tragic foreshadowing and remorse.",
      },
      "third-fid": {
        label: "3rd Limited + Free Indirect",
        shortLabel: "3rd + FID",
        pronouns: "She / her + inner idiom",
        distancePct: 58,
        distanceLabel: "Blended dual-voice",
        sympathyNote: "Aligned closely with Mara",
        ironyRisk: "Moderate",
        ironyTone: "brand",
        segments: [
          { text: "Mara gripped the wet iron gate. " },
          { text: "Could Jonah not hear ", clue: "Free indirect question" },
          { text: "the planks groaning beneath the black tide, or was stubbornness louder than drowning? ", clue: "Inner terror" },
          { text: "She stepped into his path without another word." },
        ],
        craftNote:
          "Letting Mara’s breathless rhetorical question merge directly into third-person narration makes the reader share her urgent dread.",
        essayStarter:
          "Through free indirect discourse, Mara’s urgent inner question immerses the reader in rising claustrophobia before her decisive physical stand.",
      },
      "third-omniscient": {
        label: "3rd-Person Omniscient",
        shortLabel: "3rd Omniscient",
        pronouns: "They / he / she",
        distancePct: 90,
        distanceLabel: "Panoramic / wide",
        sympathyNote: "Compassionate dual view",
        ironyRisk: "High",
        ironyTone: "good",
        segments: [
          { text: "Jonah marched ahead, " },
          { text: "terrified of looking cowardly before his sister. ", clue: "Hidden motive 1" },
          { text: "Behind him, Mara held her tongue, ", clue: "Hidden motive 2" },
          { text: "unaware that Jonah’s knees were already shaking inside his boots." },
        ],
        craftNote:
          "Entering both minds exposes poignant mutual misunderstanding: pride and silence divide two people who actually share the same fear.",
        essayStarter:
          "Omniscient access to both siblings’ unspoken fears transforms an outward quarrel into a poignant critique of pride.",
      },
    },
  },
  trophy: {
    title: "The Trophy Cabinet",
    premise: "After a school speech prize is announced, the runner-up pauses alone in the hallway.",
    versions: {
      "first-unreliable": {
        label: "1st-Person Unreliable",
        shortLabel: "1st Unreliable",
        pronouns: "I / my",
        distancePct: 14,
        distanceLabel: "Very close (biased)",
        sympathyNote: "Ironic distance from bitter pride",
        ironyRisk: "High",
        ironyTone: "bad",
        segments: [
          { text: "Naturally, I congratulated Priya warmly — " },
          { text: "some of us possess class, ", clue: "Snobbish aside" },
          { text: "even when the judges clearly favoured noisy theatrics over genuine intellect." },
        ],
        craftNote:
          "Claiming ‘class’ in the same breath as insulting Priya’s victory (‘noisy theatrics’) exposes bitter envy masquerading as graciousness.",
        essayStarter:
          "Juxtaposing polished self-praise (“possess class”) with sour dismissal (“noisy theatrics”) exposes unreliable bitterness.",
      },
      "first-reflective": {
        label: "1st-Person Reflective",
        shortLabel: "1st Reflective",
        pronouns: "I / my (hindsight)",
        distancePct: 36,
        distanceLabel: "Close + hindsight",
        sympathyNote: "Respect for honest growth",
        ironyRisk: "Low",
        ironyTone: "good",
        segments: [
          { text: "At the time, I stared at the glass cabinet " },
          { text: "as if my whole worth sat locked inside silver plate. ", clue: "Mature insight" },
          { text: "Years later, I realise ", clue: "Hindsight pivot" },
          { text: "Priya’s quiet kindness mattered far more than any engraving." },
        ],
        craftNote:
          "Contrasting past obsession with mature reflection charts a clear dynamic arc from status-chasing to genuine humility.",
        essayStarter:
          "The retrospective hinge (“Years later, I realise”) charts a dynamic shift from fragile status-anxiety to moral clarity.",
      },
      "third-fid": {
        label: "3rd Limited + Free Indirect",
        shortLabel: "3rd + FID",
        pronouns: "He / his + inner idiom",
        distancePct: 58,
        distanceLabel: "Blended dual-voice",
        sympathyNote: "Sharp mix of pity & irony",
        ironyRisk: "High",
        ironyTone: "brand",
        segments: [
          { text: "Dev lingered before the velvet shelf. " },
          { text: "Three months of late rehearsals, ", clue: "Fragmented inner tally" },
          { text: "and for what — a polite certificate tucked into a plastic folder? ", clue: "Bitter free indirect tone" },
          { text: "He forced a bright smile as footsteps neared." },
        ],
        craftNote:
          "Pairing an unattributed inner lament (‘and for what’) with a ‘forced’ outward smile sharpens the gap between private sting and public poise.",
        essayStarter:
          "Free indirect discourse exposes Dev’s quiet resentment before the narrator cuts back to his ‘forced’ smile, dramatising social performance.",
      },
      "third-omniscient": {
        label: "3rd-Person Omniscient",
        shortLabel: "3rd Omniscient",
        pronouns: "He / she (panoramic)",
        distancePct: 90,
        distanceLabel: "Panoramic / wide",
        sympathyNote: "Broader thematic perspective",
        ironyRisk: "Moderate",
        ironyTone: "good",
        segments: [
          { text: "In the corridor, Dev envied the gleaming cup, " },
          { text: "never guessing ", clue: "Narrator intervention" },
          { text: "that behind the hall curtain Priya was quietly wishing she could trade the silver trophy for a single unpressured evening at home." },
        ],
        craftNote:
          "Zooming past Dev to Priya’s private exhaustion reveals the hollow cost of competition across both winners and runners-up.",
        essayStarter:
          "Omniscient irony (‘never guessing’) undercuts Dev’s envy by exposing how prestige burdens winner and loser alike.",
      },
    },
  },
};

function PerspectiveSwitcher() {
  const [scene, setScene] = useState<SceneId>("ledger");
  const [lens, setLens] = useState<LensId>("third-fid");
  const [showClues, setShowClues] = useState(true);

  const activeScene = SCENES[scene];
  const current = activeScene.versions[lens];

  return (
    <WidgetFrame
      title="Narrative Perspective & Focalisation Switcher"
      tryThis={[
        "Switch between **1st Unreliable** and **3rd + FID** on the same scene: notice how bias survives even when ‘I’ becomes ‘he/she’.",
        "Jump to **3rd Omniscient** to see how widening the camera unlocks **dramatic irony**.",
      ]}
      caption={
        <span>
          <strong>Analytical takeaway:</strong> {current.craftNote}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented<SceneId>
            label="Choose scene"
            value={scene}
            onChange={setScene}
            options={[
              { value: "ledger", label: "The Ledger" },
              { value: "gate", label: "Storm Gate" },
              { value: "trophy", label: "Trophy Case" },
            ]}
          />
          <button
            type="button"
            onClick={() => setShowClues((v) => !v)}
            className="btn btn-secondary btn-sm self-start sm:self-auto"
          >
            {showClues ? "Hide Narrative Clues" : "Highlight Narrative Clues"}
          </button>
        </div>

        <p className="text-xs font-semibold text-ink-2">
          Scene premise: <span className="text-ink">{activeScene.premise}</span>
        </p>

        <Segmented<LensId>
          label="Choose narrative lens"
          value={lens}
          onChange={setLens}
          options={[
            { value: "first-unreliable", label: "1st Unreliable" },
            { value: "first-reflective", label: "1st Reflective" },
            { value: "third-fid", label: "3rd + FID" },
            { value: "third-omniscient", label: "3rd Omniscient" },
          ]}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-ink-2">
            <span>{current.label}</span>
            <span className="chip">{current.pronouns}</span>
          </div>
          <p className="text-base leading-relaxed text-ink">
            “
            {current.segments.map((seg, i) =>
              seg.clue && showClues ? (
                <span
                  key={i}
                  className="mx-0.5 inline-block rounded-md bg-brand-soft px-1.5 py-0.5 font-bold text-brand"
                  title={seg.clue}
                >
                  {seg.text}
                  <span className="ml-1 text-[0.7rem] font-extrabold uppercase tracking-tight opacity-85">
                    [{seg.clue}]
                  </span>
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
            ”
          </p>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3">
          <div className="mb-1 flex items-center justify-between text-xs font-bold text-ink-2">
            <span>Narrative Camera Distance</span>
            <span className="text-ink">{current.distanceLabel}</span>
          </div>
          <svg
            viewBox="0 0 400 36"
            className="h-auto w-full"
            role="img"
            aria-label={`Narrative distance gauge at ${current.distancePct} percent`}
          >
            <rect x="8" y="12" width="384" height="10" rx="5" className="fill-surface-2 stroke-line" strokeWidth="1" />
            <rect
              x="8"
              y="12"
              width={Math.max(24, (384 * current.distancePct) / 100)}
              height="10"
              rx="5"
              className="fill-brand"
            />
            <circle cx={8 + (384 * current.distancePct) / 100} cy="17" r="7" className="fill-surface stroke-brand" strokeWidth="2.5" />
          </svg>
          <div className="mt-1 flex justify-between text-[0.7rem] font-bold uppercase text-ink-2">
            <span>Inside 1 biased mind</span>
            <span>Panoramic / all-knowing</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Reader Alignment" value={current.sympathyNote} tone="ink" />
          <Readout label="Dramatic Irony" value={current.ironyRisk} tone={current.ironyTone} />
          <Readout label="Lens Type" value={current.shortLabel} tone="brand" />
        </div>

        <div className="rounded-xl border border-line bg-info-soft p-3 text-sm text-ink">
          <div className="text-xs font-extrabold uppercase tracking-wide text-info">Ready-to-Adapt Analytical Sentence</div>
          <p className="mt-1 leading-relaxed">{current.essayStarter}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

type BandLevel = "band1" | "band2" | "band3";
type VerbChoice = "arguably" | "implies" | "exposes";

interface ExtractSpec {
  id: string;
  label: string;
  quote: string;
  theme: string;
  band1: string;
  band2: string;
  whatClaim: string;
  howEmbed: string;
  zoomClause: Record<VerbChoice, string>;
  whyIntent: string;
  wholeTextLink: string;
}

const EXTRACTS: ExtractSpec[] = [
  {
    id: "bell",
    label: "Institutional Control",
    quote: "The brass bell tolled across the courtyard, herding the students through the narrow arch.",
    theme: "Conformity & Authority",
    band1:
      "In this essay I will write about authority. This is shown in the quote “The brass bell tolled across the courtyard, herding the students through the narrow arch.” This shows the school is strict and makes the reader feel sorry for them.",
    band2:
      "The writer uses a metaphor in “herding the students” and an adjective in “narrow arch.” This puts an image in the reader’s head of the students being forced to obey rules and makes the reader want to read on.",
    whatClaim: "The writer critiques rigid institutional control as a dehumanising system that erases individuality.",
    howEmbed: "By depicting the brass bell as “herding the students” toward a “narrow arch,” the prose turns school routine into quiet containment.",
    zoomClause: {
      arguably: "Arguably, the active verb “herding” carries animalistic connotations of livestock stripped of agency,",
      implies: "The loaded verb “herding” implies that authority treats young minds like compliant livestock,",
      exposes: "Zooming into the verb “herding” exposes how collective discipline quietly reduces people to livestock,",
    },
    whyIntent: "while the claustrophobic adjective “narrow” suggests only one unquestioned path is permitted.",
    wholeTextLink: "Across the wider novel, this recurring architectural imagery foreshadows the protagonist’s eventual struggle to reclaim an independent voice.",
  },
  {
    id: "smile",
    label: "Concealed Hostility",
    quote: "“Wonderful news,” Beatrice beamed, though her knuckles shone like peeled bone around the silver handle.",
    theme: "Hypocrisy & Subtext",
    band1:
      "Beatrice is being fake here. We know this from the quote “Wonderful news, Beatrice beamed, though her knuckles shone like peeled bone around the silver handle.” This proves she is angry inside.",
    band2:
      "The writer uses dialogue and a simile (“like peeled bone”) to show Beatrice is upset. This contrasts with her smiling and makes the scene tense for the reader.",
    whatClaim: "Through sharp juxtaposition, the writer exposes how polite social manners can camouflage predatory resentment.",
    howEmbed: "While Beatrice outwardly “beamed” with “Wonderful news,” her grip turns macabre as her knuckles shine “like peeled bone.”",
    zoomClause: {
      arguably: "Arguably, the skeletal noun phrase “peeled bone” carries visceral connotations of stripped vulnerability and concealed violence,",
      implies: "The unsettling simile “peeled bone” implies raw hostility lurking right beneath a polished domestic veneer,",
      exposes: "Isolating the stark phrase “peeled bone” exposes the lifeless, predatory menace hiding behind social courtesy,",
    },
    whyIntent: "forcing the reader to trust non-verbal subtext far more than spoken praise.",
    wholeTextLink: "Structurally, this mismatch between speech and gesture mirrors the novel’s wider critique of a society obsessed with surface respectability.",
  },
];

function EssayCraftBuilder() {
  const [extractIdx, setExtractIdx] = useState(0);
  const [band, setBand] = useState<BandLevel>("band3");
  const [verbChoice, setVerbChoice] = useState<VerbChoice>("arguably");
  const [includeZoom, setIncludeZoom] = useState(true);
  const [includeWholeText, setIncludeWholeText] = useState(true);

  const ex = EXTRACTS[extractIdx];

  const analysisPct =
    band === "band1" ? 20 : band === "band2" ? 45 : 52 + (includeZoom ? 16 : 0) + (includeWholeText ? 12 : 0);
  const quotePct = band === "band1" ? 55 : band === "band2" ? 30 : 12;
  const setupPct = 100 - analysisPct - quotePct;

  const verdict =
    band === "band1"
      ? "Plot-Heavy & Bolted-On"
      : band === "band2"
        ? "Feature-Spotting (Mid Band)"
        : includeZoom && includeWholeText
          ? "Top-Band Conceptual WHW + Zoom"
          : includeZoom || includeWholeText
            ? "Strong Analytical WHW"
            : "Clear Claim — Add Zoom/Whole-Text";

  return (
    <WidgetFrame
      title="WHAT–HOW–WHY Thesis & Quote-Embedding Builder"
      tryThis={[
        "Compare **Band 1 (Bolted-On)** against **Band 3 (WHW + Zoom)** to see the quote shrink from 16 words down to embedded 2–3 word fragments.",
        "Toggle **Single-Word Zoom** and **Whole-Novel Link** off and on to watch the analysis ratio climb past 70%.",
      ]}
      caption={
        <span>
          <strong>Examiner rule:</strong> Shrink copied quotes down to micro-fragments so at least <strong>70%</strong> of your paragraph explains <em>how</em> and <em>why</em> the writer’s craft works.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<string>
            label="Select extract"
            value={ex.id}
            onChange={(id) => setExtractIdx(EXTRACTS.findIndex((item) => item.id === id))}
            options={EXTRACTS.map((item) => ({ value: item.id, label: item.label }))}
          />
          <Segmented<BandLevel>
            label="Select draft quality"
            value={band}
            onChange={setBand}
            options={[
              { value: "band1", label: "Band 1: Bolted-On" },
              { value: "band2", label: "Band 2: Feature-Spot" },
              { value: "band3", label: "Band 3: WHW + Zoom" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Original Extract — Theme: {ex.theme}
          </div>
          <p className="mt-1 italic text-ink">“{ex.quote}”</p>
        </div>

        {band === "band3" ? (
          <div className="flex flex-wrap items-center gap-2">
            <Segmented<VerbChoice>
              label="Tentative phrasing"
              value={verbChoice}
              onChange={setVerbChoice}
              options={[
                { value: "arguably", label: "Arguably..." },
                { value: "implies", label: "Implies..." },
                { value: "exposes", label: "Exposes..." },
              ]}
            />
            <button
              type="button"
              onClick={() => setIncludeZoom((v) => !v)}
              className={`btn btn-sm ${includeZoom ? "btn-primary" : "btn-secondary"}`}
            >
              {includeZoom ? "✓ Single-Word Zoom" : "+ Add Word Zoom"}
            </button>
            <button
              type="button"
              onClick={() => setIncludeWholeText((v) => !v)}
              className={`btn btn-sm ${includeWholeText ? "btn-primary" : "btn-secondary"}`}
            >
              {includeWholeText ? "✓ Whole-Novel Link" : "+ Add Whole-Novel Link"}
            </button>
          </div>
        ) : null}

        <div className="rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-ink">
          {band === "band1" ? (
            <p>{ex.band1}</p>
          ) : band === "band2" ? (
            <p>{ex.band2}</p>
          ) : (
            <p className="space-y-1">
              <span className="rounded bg-brand-soft px-1 py-0.5 font-semibold text-ink">
                {ex.whatClaim}
              </span>{" "}
              <span className="rounded bg-warn-soft px-1 py-0.5 text-ink">
                {ex.howEmbed}
              </span>{" "}
              {includeZoom ? (
                <span className="rounded bg-good-soft px-1 py-0.5 font-semibold text-ink">
                  {ex.zoomClause[verbChoice]}
                </span>
              ) : null}{" "}
              <span className="rounded bg-info-soft px-1 py-0.5 text-ink">
                {ex.whyIntent}
              </span>{" "}
              {includeWholeText ? (
                <span className="rounded bg-info-soft px-1 py-0.5 font-semibold text-ink">
                  {ex.wholeTextLink}
                </span>
              ) : null}
            </p>
          )}
          {band === "band3" ? (
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded bg-brand-soft px-2 py-0.5 text-brand">WHAT Claim</span>
              <span className="rounded bg-warn-soft px-2 py-0.5 text-warn">HOW Embedded Quote</span>
              {includeZoom ? <span className="rounded bg-good-soft px-2 py-0.5 text-good">ZOOM Word Class</span> : null}
              <span className="rounded bg-info-soft px-2 py-0.5 text-info">WHY Intent &amp; Arc</span>
            </div>
          ) : null}
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-ink-2">
            <span>Paragraph Craft Balance</span>
            <span className="text-ink">{analysisPct}% Analysis · {quotePct}% Quote · {setupPct}% Setup</span>
          </div>
          <svg
            viewBox="0 0 400 22"
            className="h-auto w-full"
            role="img"
            aria-label={`Paragraph balance: ${setupPct} percent setup, ${quotePct} percent quotation, ${analysisPct} percent analysis`}
          >
            <rect x="0" y="2" width={(400 * setupPct) / 100} height="18" rx="4" className="fill-brand" />
            <rect x={(400 * setupPct) / 100} y="2" width={(400 * quotePct) / 100} height="18" className="fill-warn" />
            <rect
              x={(400 * (setupPct + quotePct)) / 100}
              y="2"
              width={(400 * analysisPct) / 100}
              height="18"
              rx="4"
              className="fill-good"
            />
          </svg>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Band Verdict" value={verdict} tone={band === "band3" && includeZoom ? "good" : band === "band1" ? "bad" : "brand"} />
          <Readout label="Analysis Share" value={`${analysisPct}%`} tone={analysisPct >= 70 ? "good" : "bad"} />
          <Readout label="Quote Footprint" value={`${quotePct}%`} tone={quotePct <= 15 ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "perspective-switcher",
    title: "Narrative Perspective & Focalisation Switcher",
    blurb: "See how switching between 1st-person unreliable, retrospective, free indirect discourse and omniscient narration transforms the exact same scene.",
    Component: PerspectiveSwitcher,
  },
  {
    id: "whw-essay-builder",
    title: "WHAT–HOW–WHY Thesis & Quote-Embedding Builder",
    blurb: "Upgrade bolted-on plot retelling into a colour-coded conceptual paragraph with embedded micro-quotes and single-word zoom.",
    Component: EssayCraftBuilder,
  },
];
