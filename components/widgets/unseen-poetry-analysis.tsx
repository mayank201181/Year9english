"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

// ===========================================================================
// Widget 1: 5-Minute Unseen Poem Annotator
// ===========================================================================
type PoemId = "spare-key" | "demolition";

interface PoemLine {
  text: string;
  stanzaBreakBefore?: boolean;
  /** Which minutes (1..5) highlight this line. */
  highlightOn: readonly number[];
  tagByMin?: Record<number, string>;
}

interface UnseenPoem {
  title: string;
  lines: readonly PoemLine[];
  /** SVG polyline coordinates showing emotional/tension arc across lines. */
  arcPoints: string;
  voltaDot: { x: number; y: number; label: string };
  minuteNotes: Record<
    number,
    {
      passLabel: string;
      focus: string;
      toneReadout: string;
      insight: string;
      examLine: string;
    }
  >;
}

const POEMS: Record<PoemId, UnseenPoem> = {
  "spare-key": {
    title: "The Spare Key",
    lines: [
      {
        text: "For twenty years it slept on the hall hook,",
        highlightOn: [2, 3, 5],
        tagByMin: { 2: "20-year wait", 3: "Wistful stillness", 5: "Personification ('slept')" },
      },
      {
        text: "brass dulled to the colour of cold tea,",
        highlightOn: [2, 3, 5],
        tagByMin: { 2: "Aged domestic object", 3: "Quiet neglect", 5: "Sensory fade ('cold tea')" },
      },
      {
        text: "waiting for your boots to scrape the porch.",
        highlightOn: [2, 3],
        tagByMin: { 2: "Someone absent", 3: "Addressed to 'your'" },
      },
      {
        text: "Tonight I slipped it into the kitchen drawer —",
        highlightOn: [4, 5],
        tagByMin: { 4: "VOLTA 1 ('Tonight') + Dash", 5: "Soft verb ('slipped')" },
      },
      {
        text: "and still left the porch light burning.",
        highlightOn: [1, 4, 5],
        tagByMin: { 1: "Echoes title's hope", 4: "VOLTA 2 ('and still')", 5: "Ambiguous ('burning')" },
      },
    ],
    arcPoints: "48,92 138,84 232,68 328,36 416,52",
    voltaDot: { x: 328, y: 36, label: "Volta: 'Tonight ... — and still'" },
    minuteNotes: {
      1: {
        passLabel: "Pass 1: Pen Down",
        focus: "Title Frame",
        toneReadout: "Ordinary → Charged",
        insight:
          "Start with the title: a 'Spare Key' implies welcome, trust, and expectation of someone returning. Draw an arrow straight to the last line ('porch light burning') to test whether that hope survives.",
        examLine: "Title focus: An ordinary household object frames the entire poem around quiet expectation.",
      },
      2: {
        passLabel: "Pass 1: Pen Down",
        focus: "Literal Story",
        toneReadout: "Domestic Waiting",
        insight:
          "Read to punctuation (only two sentences in the whole poem!). Literally: after keeping a spare key hanging ready for twenty years for someone absent, the speaker finally puts it in a drawer tonight.",
        examLine: "Literal check: Nail the physical action first before hunting any metaphors.",
      },
      3: {
        passLabel: "Pass 1: Pen Down",
        focus: "Speaker & Tone",
        toneReadout: "Wistful → Tender",
        insight:
          "Notice the intimate second-person pronoun 'your boots' — the speaker addresses an absent loved one directly. Avoid flat words like 'sad'; describe the tone as wistful, tender, and quietly aching.",
        examLine: "Tone upgrade: Replace 'sad' with 'wistful, elegiac devotion'.",
      },
      4: {
        passLabel: "Pass 2: Pen Up",
        focus: "Volta & Structure",
        toneReadout: "Double Pivot",
        insight:
          "Two razor-sharp structural turns happen in lines 4–5: 'Tonight' breaks twenty years of habit, yet the abrupt dash ('—') pivots into 'and still', proving the heart refuses to close what the hand put away.",
        examLine: "Structure + meaning: The dash catches the speaker between rational acceptance and lingering hope.",
      },
      5: {
        passLabel: "Pass 2: Pen Up",
        focus: "Theme & 3 Quotes",
        toneReadout: "Unresolved Grief",
        insight:
          "Anchor 3 micro-quotes ('cold tea', 'slipped', 'burning') onto one conceptual thesis: memory is not a tidy chapter to shut, but an involuntary ritual of welcome resisting absence.",
        examLine:
          "Ready Thesis: In 'The Spare Key', the poet portrays grief as a stubborn domestic ritual caught between letting go and keeping watch.",
      },
    },
  },
  demolition: {
    title: "Before the Demolition",
    lines: [
      {
        text: "Wallpaper peels in curled brown waves,",
        highlightOn: [2, 3],
        tagByMin: { 2: "Decaying house", 3: "Elegiac decay" },
      },
      {
        text: "exposing pencilled height-marks by the door —",
        highlightOn: [2, 3, 5],
        tagByMin: { 2: "Childhood record", 3: "Tender intimacy", 5: "Fragile trace ('pencilled')" },
      },
      {
        text: "six dated rungs where Maya grew.",
        highlightOn: [2, 3, 5],
        tagByMin: { 2: "Six years of growth", 3: "Affectionate focus", 5: "Ladder metaphor ('rungs')" },
      },
      {
        text: "Outside, the yellow crane swings wide,",
        stanzaBreakBefore: true,
        highlightOn: [1, 4],
        tagByMin: { 1: "Links to 'Demolition'", 4: "VOLTA 1 ('Outside')" },
      },
      {
        text: "its iron jaw impatient for the brick,",
        highlightOn: [4, 5],
        tagByMin: { 4: "Threatening intrusion", 5: "Predatory ('iron jaw')" },
      },
      {
        text: "yet still the doorway guards her tiny climb.",
        highlightOn: [1, 4, 5],
        tagByMin: { 1: "Freezes 'Before'", 4: "VOLTA 2 ('yet still')", 5: "Personification ('guards')" },
      },
    ],
    arcPoints: "48,88 122,74 196,68 274,34 348,26 416,44",
    voltaDot: { x: 274, y: 34, label: "Stanza Pivot: 'Outside' → 'yet still'" },
    minuteNotes: {
      1: {
        passLabel: "Pass 1: Pen Down",
        focus: "Title Frame",
        toneReadout: "Threshold Urgency",
        insight:
          "The preposition 'Before' is crucial: the poet freezes time on the exact brink of destruction, suspending fragile family memories just moments before the building falls.",
        examLine: "Title focus: 'Before' builds unbearable suspense while preserving the room permanently in verse.",
      },
      2: {
        passLabel: "Pass 1: Pen Down",
        focus: "Literal Story",
        toneReadout: "Home vs Machine",
        insight:
          "Literally: someone inspects pencilled childhood height-marks inside a peeling house while a demolition crane swings outside ready to tear the walls down.",
        examLine: "Literal check: Stanza 1 = interior childhood marks; Stanza 2 = exterior crane poised to strike.",
      },
      3: {
        passLabel: "Pass 1: Pen Down",
        focus: "Speaker & Tone",
        toneReadout: "Elegiac → Defiant",
        insight:
          "The tone moves from affectionate, elegiac tenderness over 'six dated rungs' into tense alarm at industrial violence, finishing on quietly protective defiance.",
        examLine: "Tone upgrade: Track the shift from tender reminiscence to tense, protective defiance.",
      },
      4: {
        passLabel: "Pass 2: Pen Up",
        focus: "Volta & Structure",
        toneReadout: "2 Tercets + Double Turn",
        insight:
          "Notice the two balanced three-line tercets: the stanza break physically separates intimate interior memory from 'Outside' mechanical violence, before 'yet still' reclaims the final line for memory.",
        examLine: "Structure + meaning: The white space between stanzas acts like the last thin wall holding the crane back.",
      },
      5: {
        passLabel: "Pass 2: Pen Up",
        focus: "Theme & 3 Quotes",
        toneReadout: "Memory vs Erasure",
        insight:
          "Pair 3 micro-quotes ('pencilled', 'iron jaw', 'guards her tiny climb') around one conceptual thesis: while industrial power flattens brick effortlessly, domestic love leaves indelible meaning.",
        examLine:
          "Ready Thesis: In 'Before the Demolition', the poet pits fragile domestic traces against predatory machinery, suspending memory just beyond erasure.",
      },
    },
  },
};

function FiveMinuteAnnotator() {
  const [poemId, setPoemId] = useState<PoemId>("spare-key");
  const [minute, setMinute] = useState(1);

  const poem = POEMS[poemId];
  const note = poem.minuteNotes[minute];

  const handlePoemSwitch = (next: PoemId) => {
    setPoemId(next);
    setMinute(1);
  };

  return (
    <WidgetFrame
      title="5-Minute Unseen Poem Annotator"
      tryThis={[
        "Step calmly from **Minute 1 → Minute 5** and watch which exact lines light up during **Pass 1 (Pen Down)** vs **Pass 2 (Pen Up)**.",
        "Jump straight to **Minute 4** to spot how the **volta** pivots both poems emotionally.",
        "Switch between **The Spare Key** and **Before the Demolition** to practise the protocol on two unseen structures.",
      ]}
      caption={
        <div className="space-y-1.5">
          <p>{note.insight}</p>
          <p className="font-bold text-brand">{note.examLine}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Segmented<PoemId>
            label="Choose Unseen Poem"
            value={poemId}
            onChange={handlePoemSwitch}
            options={[
              { value: "spare-key", label: "The Spare Key" },
              { value: "demolition", label: "Before the Demolition" },
            ]}
          />
          <span className="chip self-start sm:self-auto">{note.passLabel}</span>
        </div>

        <Stepper
          label="Protocol Minute (T–L–S–V–T)"
          value={minute}
          min={1}
          max={5}
          onChange={setMinute}
          format={(v) => `Min ${v} · ${poem.minuteNotes[v].focus}`}
        />

        <div className="rounded-xl border border-line bg-surface p-4">
          <div
            className={`inline-block rounded-lg px-2 py-0.5 text-base font-extrabold transition ${
              minute === 1 ? "bg-brand-soft text-brand ring-1 ring-brand" : "text-ink"
            }`}
          >
            {poem.title}
          </div>
          <div className="mt-3 space-y-1.5">
            {poem.lines.map((line, idx) => {
              const active = line.highlightOn.includes(minute);
              const tag = line.tagByMin?.[minute];
              return (
                <div key={`${poemId}-${idx}`} className={line.stanzaBreakBefore ? "pt-3" : ""}>
                  <div
                    className={`flex flex-wrap items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 transition ${
                      active ? "bg-brand-soft/65 text-ink ring-1 ring-brand/40" : "text-ink-2"
                    }`}
                  >
                    <span className={`font-serif text-sm sm:text-base ${active ? "font-semibold italic text-ink" : "italic"}`}>
                      {line.text}
                    </span>
                    {tag ? (
                      <span className="rounded-full bg-surface px-2 py-0.5 text-xs font-bold text-brand shadow-xs">
                        {tag}
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <svg
            viewBox="0 0 460 116"
            className="h-auto w-full"
            role="img"
            aria-label="Emotional intensity curve across lines of the unseen poem highlighting the volta"
          >
            <line x1="28" y1="98" x2="438" y2="98" stroke="var(--line)" strokeWidth="1.5" />
            <polyline
              points={poem.arcPoints}
              fill="none"
              stroke="var(--brand)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <circle
              cx={poem.voltaDot.x}
              cy={poem.voltaDot.y}
              r={minute >= 4 ? 8 : 5}
              fill="var(--bad)"
              opacity={minute >= 4 ? 0.28 : 0.15}
            />
            <circle cx={poem.voltaDot.x} cy={poem.voltaDot.y} r="4.5" fill="var(--bad)" />
            <text
              x={poem.voltaDot.x}
              y={Math.max(15, poem.voltaDot.y - 12)}
              textAnchor="middle"
              fontSize="10"
              fontWeight="800"
              fill={minute >= 4 ? "var(--bad)" : "var(--ink-2)"}
            >
              {poem.voltaDot.label}
            </text>
            <text x="48" y="112" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
              Opening
            </text>
            <text x="232" y="112" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
              Development
            </text>
            <text x="416" y="112" textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
              Closing Shift
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <Readout label="Reading Pass" value={minute <= 3 ? "Pass 1 (Meaning)" : "Pass 2 (Craft)"} tone="ink" />
          <Readout label="Active Checkpoint" value={note.focus} tone="brand" />
          <Readout label="Tone / Shift" value={note.toneReadout} tone={minute >= 4 ? "good" : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// Widget 2: Metaphor Connotation & Volta Decoder
// ===========================================================================
type MetaphorId = "museum" | "snow" | "harbour";

interface MetaphorCase {
  label: string;
  quote: string;
  tenor: string;
  vehicle: string;
  qualities: readonly [string, string, string];
  layer1: string;
  layer2: string;
  levels: Record<
    1 | 2 | 3 | 4,
    {
      band: string;
      move: string;
      tentative: string;
      sentence: string;
      verdict: string;
    }
  >;
}

const METAPHORS: Record<MetaphorId, MetaphorCase> = {
  museum: {
    label: "Museum of Sleeves",
    quote: "Your empty bedroom is a museum of folded sleeves.",
    tenor: "Empty bedroom",
    vehicle: "Museum",
    qualities: ["Hushed reverence", "Preserved behind glass", "Frozen / lifeless"],
    layer1: "Cherished love preserving every trace",
    layer2: "Chilling stillness trapping the past",
    levels: {
      1: {
        band: "Band 3–4",
        move: "Feature-Spotting",
        tentative: "None",
        sentence:
          "The poet uses a metaphor 'museum of folded sleeves' which paints a vivid picture of the bedroom and makes the reader want to read on.",
        verdict:
          "Marks lost: merely labels 'metaphor' and pastes generic filler ('vivid picture', 'want to read on') with zero word analysis.",
      },
      2: {
        band: "Band 5",
        move: "Literal Paraphrase",
        tentative: "Low",
        sentence:
          "Calling the bedroom a 'museum of folded sleeves' shows that the sibling has left home and their clothes are still folded neatly inside the room.",
        verdict:
          "Shows basic comprehension of the literal situation, yet never unpacks the emotional connotations of 'museum'.",
      },
      3: {
        band: "Band 7",
        move: "Single-Word Connotation",
        tentative: "Moderate",
        sentence:
          "Through the metaphor 'museum', the poet evokes hushed reverence and careful preservation, suggesting the speaker treasures every neat trace of the absent sibling.",
        verdict:
          "Strong leap! Unpacks literal Vehicle qualities ('hushed reverence', 'preservation') and uses the tentative verb 'suggesting'.",
      },
      4: {
        band: "Band 8–9",
        move: "Layered Ambiguity",
        tentative: "Rich",
        sentence:
          "Casting the bedroom as a 'museum' creates poignant ambiguity: while 'museum' conveys reverent devotion preserving precious memory, it simultaneously implies lifeless, glassed-off stillness — hinting that grief risks freezing a living bond permanently in the past.",
        verdict:
          "Top-band mastery! Balances warm reverence against cold stasis with tentative academic phrasing ('implies', 'hinting').",
      },
    },
  },
  snow: {
    label: "Late Snow",
    quote: "Her forgiveness fell like late snow across the yard.",
    tenor: "Belated forgiveness",
    vehicle: "Late snow",
    qualities: ["Soft, silent purity", "Cold and numbing", "Covers what lies beneath"],
    layer1: "Gentle truce quieting old conflict",
    layer2: "Chilly distance burying unhealed hurt",
    levels: {
      1: {
        band: "Band 3–4",
        move: "Feature-Spotting",
        tentative: "None",
        sentence:
          "The poet uses a simile 'like late snow' with alliteration on 'forgiveness fell' to make the line sound memorable and poetic.",
        verdict:
          "Marks lost: spots two terms ('simile', 'alliteration') without explaining what cold snow actually says about forgiveness.",
      },
      2: {
        band: "Band 5",
        move: "Literal Paraphrase",
        tentative: "Low",
        sentence:
          "The simile 'like late snow' tells us that she forgave the speaker after a long delay during wintertime.",
        verdict:
          "Accurate surface meaning, yet treats 'snow' as simple weather instead of probing its emotional temperature.",
      },
      3: {
        band: "Band 7",
        move: "Single-Word Connotation",
        tentative: "Moderate",
        sentence:
          "Comparing forgiveness to 'late snow' evokes hushed, pure silence, suggesting the apology arrives softly to quiet months of bitter argument.",
        verdict:
          "Clear connotation zoom linking soft silence directly to reconciliation, supported by 'suggesting'.",
      },
      4: {
        band: "Band 8–9",
        move: "Layered Ambiguity",
        tentative: "Rich",
        sentence:
          "Arguably, the simile 'like late snow' holds unsettling double resonance: it softens conflict with quiet purity, yet the adjective 'late' and cold connotations of snow imply a numb, belated truce that merely buries old wounds rather than warming them.",
        verdict:
          "Top-band evaluation! Zooms into BOTH 'late' and 'snow' to weigh peace against emotional frostiness.",
      },
    },
  },
  harbour: {
    label: "Dry Harbour",
    quote: "The kitchen table sits, a dry harbour / where no more small boats tie.",
    tenor: "Empty kitchen table",
    vehicle: "Dry harbour",
    qualities: ["Once bustling shelter", "Drained of tide/life", "Waiting for ships"],
    layer1: "Warm family refuge now emptied",
    layer2: "Unnatural drought after children depart",
    levels: {
      1: {
        band: "Band 3–4",
        move: "Feature-Spotting",
        tentative: "None",
        sentence:
          "The poet uses a metaphor 'a dry harbour' and enjambment to make the poem flow smoothly and help us picture a harbour.",
        verdict:
          "Marks lost: banned generic claim about enjambment ('flow smoothly') plus zero explanation of how a harbour relates to a kitchen.",
      },
      2: {
        band: "Band 5",
        move: "Literal Paraphrase",
        tentative: "Low",
        sentence:
          "Calling the table 'a dry harbour' shows that the family no longer eats together around the kitchen table like they used to.",
        verdict:
          "Grasps the basic human situation cleanly, yet leaves the nautical Vehicle and enjambment unanalysed.",
      },
      3: {
        band: "Band 7",
        move: "Single-Word Connotation",
        tentative: "Moderate",
        sentence:
          "Through the nautical metaphor 'dry harbour', the poet frames the kitchen table as a former shelter of bustling family warmth now drained of daily tide and movement.",
        verdict:
          "Strong Vehicle transfer: converts 'harbour' (shelter) and 'dry' (drained vitality) into sharp domestic meaning.",
      },
      4: {
        band: "Band 8–9",
        move: "Layered Ambiguity + Form",
        tentative: "Rich",
        sentence:
          "By enjambing 'a dry harbour / where no more small boats tie', the poet lets the sentence spill into empty space as if echoing departed voices; 'harbour' tenderly affirms the table's protective love, yet the stark modifier 'dry' implies an unnatural drought once growing children sail away.",
        verdict:
          "Band 9 integration: weaves meaningful enjambment directly into Vehicle connotations and bittersweet ambiguity!",
      },
    },
  },
};

function MetaphorVoltaDecoder() {
  const [metId, setMetId] = useState<MetaphorId>("museum");
  const [depth, setDepth] = useState<1 | 2 | 3 | 4>(4);

  const item = METAPHORS[metId];
  const stage = item.levels[depth];

  return (
    <WidgetFrame
      title="Metaphor Connotation &amp; Ambiguity Decoder"
      tryThis={[
        "Slide **Analytical Depth** from **Level 1 (Feature-Spotting)** up to **Level 4 (Layered Ambiguity)** to watch the exact same quotation climb from Band 3 to Band 9.",
        "Watch the **Connotation Web SVG** light up as Vehicle qualities unlock Layer 1 and Layer 2 meanings.",
        "Test **Dry Harbour** at Level 4 to see how enjambment integrates seamlessly with metaphor analysis.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wide text-brand">Examiner Verdict ({stage.band})</div>
          <p>{stage.verdict}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented<MetaphorId>
          label="Choose Unseen Metaphor"
          value={metId}
          onChange={setMetId}
          options={[
            { value: "museum", label: "Museum" },
            { value: "snow", label: "Late Snow" },
            { value: "harbour", label: "Dry Harbour" },
          ]}
        />

        <Slider
          label="Analytical Depth Level"
          value={depth}
          min={1}
          max={4}
          step={1}
          onChange={(v) => setDepth(v as 1 | 2 | 3 | 4)}
          format={(v) => `Level ${v}: ${item.levels[v as 1 | 2 | 3 | 4].move}`}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <svg
            viewBox="0 0 460 156"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive connotation web connecting Tenor, Vehicle qualities, Layer 1 meaning, and Layer 2 ambiguity"
          >
            {/* Tenor / Quote Box */}
            <rect x="8" y="48" width="104" height="60" rx="8" fill="var(--surface)" stroke="var(--brand)" strokeWidth="2" />
            <text x="60" y="68" textAnchor="middle" fontSize="9" fontWeight="800" fill="var(--brand)">
              TENOR → VEHICLE
            </text>
            <text x="60" y="84" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--ink)">
              {item.tenor}
            </text>
            <text x="60" y="99" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--brand)">
              {`“${item.vehicle}”`}
            </text>

            {/* Arrow to Qualities */}
            <line
              x1="112"
              y1="78"
              x2="142"
              y2="78"
              stroke={depth >= 3 ? "var(--brand)" : "var(--line)"}
              strokeWidth="2"
            />

            {/* Vehicle Qualities Box */}
            <rect
              x="142"
              y="32"
              width="124"
              height="92"
              rx="8"
              fill={depth >= 3 ? "var(--brand-soft)" : "var(--surface)"}
              opacity={depth >= 3 ? 0.85 : 0.45}
              stroke={depth >= 3 ? "var(--brand)" : "var(--line)"}
              strokeWidth="1.5"
            />
            <text x="204" y="51" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--ink)">
              Vehicle Qualities
            </text>
            <text x="204" y="70" textAnchor="middle" fontSize="9" fill="var(--ink)">
              {`• ${item.qualities[0]}`}
            </text>
            <text x="204" y="88" textAnchor="middle" fontSize="9" fill="var(--ink)">
              {`• ${item.qualities[1]}`}
            </text>
            <text x="204" y="106" textAnchor="middle" fontSize="9" fill="var(--ink)">
              {`• ${item.qualities[2]}`}
            </text>

            {/* Branch Lines */}
            <line
              x1="266"
              y1="60"
              x2="298"
              y2="42"
              stroke={depth >= 3 ? "var(--good)" : "var(--line)"}
              strokeWidth="2"
            />
            <line
              x1="266"
              y1="96"
              x2="298"
              y2="114"
              stroke={depth === 4 ? "var(--bad)" : "var(--line)"}
              strokeWidth="2"
            />

            {/* Layer 1 Box */}
            <rect
              x="298"
              y="14"
              width="154"
              height="56"
              rx="8"
              fill="var(--surface)"
              opacity={depth >= 3 ? 1 : 0.35}
              stroke={depth >= 3 ? "var(--good)" : "var(--line)"}
              strokeWidth="1.5"
            />
            <text x="375" y="33" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--good)">
              Layer 1: Core Reading
            </text>
            <text x="375" y="50" textAnchor="middle" fontSize="8.8" fill="var(--ink)">
              {item.layer1}
            </text>

            {/* Layer 2 Box */}
            <rect
              x="298"
              y="86"
              width="154"
              height="56"
              rx="8"
              fill="var(--surface)"
              opacity={depth === 4 ? 1 : 0.3}
              stroke={depth === 4 ? "var(--bad)" : "var(--line)"}
              strokeWidth="1.5"
            />
            <text x="375" y="105" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--bad)">
              Layer 2: Ambiguity
            </text>
            <text x="375" y="122" textAnchor="middle" fontSize="8.8" fill="var(--ink)">
              {item.layer2}
            </text>
          </svg>
        </div>

        <div className="rounded-xl border border-line bg-surface p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Unseen Quotation</div>
          <p className="mt-1 font-serif text-sm italic text-ink-2">{`“${item.quote}”`}</p>
          <div className="mt-3 text-xs font-bold uppercase tracking-wide text-brand">
            Live Analytical Response ({stage.move})
          </div>
          <p className="mt-1 text-sm leading-relaxed text-ink">{stage.sentence}</p>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <Readout
            label="Estimated Band"
            value={stage.band}
            tone={depth === 4 ? "good" : depth === 1 ? "bad" : "brand"}
          />
          <Readout label="Analytical Move" value={stage.move} tone="ink" />
          <Readout label="Tentative Voice" value={stage.tentative} tone={depth >= 3 ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "five-minute-annotator",
    title: "5-Minute Unseen Poem Annotator",
    blurb: "Step through Pass 1 and Pass 2 on two fresh unseen poems to spot titles, tone shifts, and voltas.",
    Component: FiveMinuteAnnotator,
  },
  {
    id: "metaphor-volta-decoder",
    title: "Metaphor Connotation & Ambiguity Decoder",
    blurb: "Slide from Band 3 feature-spotting up to Band 9 layered ambiguity using the Vehicle Qualities web.",
    Component: MetaphorVoltaDecoder,
  },
];
