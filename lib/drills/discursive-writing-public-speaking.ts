import type { Drill, Rng } from "./types.ts";

// ---------------------------------------------------------------------------
// Procedural skill drills for Discursive Writing, Public Speaking & SPaG.
// Every drill combines parameters via `rng` so each tier produces 80+ distinct,
// authentic Year 9 English prompts across 200 seeds.
// ---------------------------------------------------------------------------

const DEBATE_ISSUES = [
  "car-free downtown streets",
  "school phone pouches",
  "four-day school weeks",
  "free museum entry",
  "urban rooftop farms",
  "youth sleep schedules",
  "AI study assistants",
  "coastal mangrove protection",
  "student-run newspapers",
  "community repair cafés",
];

const SPEAKERS = [
  "a marine biologist",
  "a Year 9 Eco-Council lead",
  "a paediatric sleep doctor",
  "a civil transport engineer",
  "a community librarian",
  "an urban forestry planner",
];

const PLACE_SETTINGS = [
  "the Tanglin auditorium",
  "the Year 9 assembly",
  "the municipal hall",
  "our school dining hall",
  "the science amphitheatre",
  "the community library",
];

// ---- Drill 1: Aristotelian Rhetoric & Micro-Devices ----------------------

interface RhetoricSpec {
  device: string;
  accept: string[];
  trapWrong?: string[];
  trapMsg?: string;
  build: (issue: string, speaker: string, num: number) => { quote: string; clue: string };
}

const RHETORIC_ITEMS: RhetoricSpec[] = [
  {
    device: "ethos",
    accept: ["ethos"],
    trapWrong: ["logos", "pathos"],
    trapMsg: "Look at how the speaker builds trust via years of lived expertise — credibility and authority define Ethos.",
    build: (issue, speaker, num) => ({
      quote: `As ${speaker} who has studied ${issue} firsthand for ${num} years, I have seen which promises hold up under scrutiny.`,
      clue: "establishing hands-on authority and trustworthy character",
    }),
  },
  {
    device: "pathos",
    accept: ["pathos"],
    trapWrong: ["ethos", "logos"],
    trapMsg: "Notice the quiet, specific human scene inviting immediate empathy — that emotional connection is Pathos.",
    build: (issue, _speaker, num) => ({
      quote: `Last Tuesday during our debate on ${issue}, a nine-year-old boy sat motionless for ${num} minutes staring at a faded photograph of the trees that used to shade his walk home.`,
      clue: "a restrained, concrete human detail evoking genuine empathy",
    }),
  },
  {
    device: "logos",
    accept: ["logos"],
    trapWrong: ["ethos", "pathos"],
    trapMsg: "Spot the measurable trial statistics and empirical cause-and-effect proof — reasoning from data defines Logos.",
    build: (issue, _speaker, num) => ({
      quote: `Across ${num} pilot districts evaluating ${issue}, independent audits recorded a ${24 + (num % 45)}% drop in waste alongside lower annual operating costs.`,
      clue: "empirical audit figures and cause-and-effect evidence",
    }),
  },
  {
    device: "anaphora",
    accept: ["anaphora"],
    trapWrong: ["antithesis", "hypophora"],
    trapMsg: "Focus on the exact opening phrase repeated at the start of consecutive clauses — that repetition is anaphora.",
    build: (issue, _speaker, num) => ({
      quote: `We owe our peers honest debate on ${issue}. We owe our peers space to test ${num} bold solutions. We owe our peers the courage to act.`,
      clue: "repeating 'We owe our peers' at the start of consecutive sentences",
    }),
  },
  {
    device: "tricolon",
    accept: ["tricolon", "rule of three", "triplet", "triad"],
    trapWrong: ["anaphora", "antithesis"],
    trapMsg: "Count the crisp three-part parallel series without repeated clause openings — a rhythmic list of three is a tricolon.",
    build: (issue, _speaker, num) => ({
      quote: `Rethinking ${issue} over the next ${num} months offers three lasting rewards: calmer mornings, sharper focus, and stronger neighbourhoods.`,
      clue: "three parallel adjective-noun phrases ('calmer mornings, sharper focus, and stronger neighbourhoods')",
    }),
  },
  {
    device: "antithesis",
    accept: ["antithesis"],
    trapWrong: ["anaphora", "tricolon"],
    trapMsg: "Look at the balanced mirror-image contrast pitting two opposite verbs/ideas directly against each other — that is antithesis.",
    build: (issue, _speaker, num) => ({
      quote: `When judging ${issue} across ${num} schools, measure progress by curiosity awakened, not worksheets memorised.`,
      clue: "mirror-image contrast pairing 'curiosity awakened' directly against 'worksheets memorised'",
    }),
  },
  {
    device: "hypophora",
    accept: ["hypophora"],
    trapWrong: ["antithesis", "anaphora"],
    trapMsg: "Notice that the speaker asks a pointed question and immediately supplies the answer themselves — that is hypophora.",
    build: (issue, _speaker, num) => ({
      quote: `Who pays the hidden price when we delay ${issue} for another ${num} years? Not the committees writing glossy reports — the students inheriting the consequences.`,
      clue: "asking a targeted question and immediately answering it with authority",
    }),
  },
];

// ---- Drill 2: SPaG Punctuation, Apostrophes & Voice ----------------------

const CLAUSE_PAIRS: Array<[string, string, string, string]> = [
  ["The debate ran overtime", "the chair allowed one closing rebuttal", "so", "therefore"],
  ["Protected cycle tracks ease traffic", "narrow kerb corners still deter nervous riders", "yet", "however"],
  ["Solar canopies demand upfront funding", "they cut school electricity bills within four years", "yet", "however"],
  ["Shorter speeches feel brisker", "deliberate pauses give complex arguments room to land", "and", "moreover"],
  ["Print textbooks feel heavier in backpacks", "many teenagers focus longer without screen alerts", "yet", "however"],
  ["Quiet study rooms protect exam focus", "coding workshops bring new young visitors through the doors", "yet", "however"],
  ["Rehearsing aloud exposes tongue-twisters", "every finalist should time a full run before Monday", "so", "therefore"],
  ["The council widened the main footpath", "evening footfall rose across twelve neighbourhood shops", "and", "consequently"],
  ["Reusable canteen plates required a new washer", "weekly plastic waste fell by nearly half", "yet", "however"],
  ["The microphone hummed loudly at first", "Maya paused calmly until the sound desk balanced the feed", "so", "consequently"],
];

const COLON_SENTENCES: Array<[string, string, string]> = [
  ["Great public speaking hinges on one rare habit", "knowing exactly when to pause", "colon"],
  ["The sleep audit exposed an urgent pattern", "half of Year 9 pupils kept unlocked phones beside their pillows", "colon"],
  ["Every top-band discursive essay rests on three pillars", "fairness, evidence, and synthesis", "colon"],
  ["Our transport survey uncovered one clear barrier", "evening buses stop running too early for shift workers", "colon"],
  ["Aristotle mapped persuasion onto three enduring forces", "ethos, pathos, and logos", "colon"],
  ["One slip undermines countless competition speeches", "racing through 700 words in three minutes", "colon"],
];

const SEMICOLON_SENTENCES: Array<[string, string, string]> = [
  ["Essays persuade the silent reader", "speeches must move a live room", "semicolon"],
  ["Logos convinces the analytical mind", "pathos awakens genuine human empathy", "semicolon"],
  ["Straw-manning weakens academic trust", "steel-manning elevates your authority", "semicolon"],
  ["Short sentences deliver sudden punch", "longer sentences let complex reasoning unfold", "semicolon"],
  ["Active verbs name the responsible actor", "passive verbs quietly shift the actor out of view", "semicolon"],
  ["Loud shouting tires an audience rapidly", "a quiet drop in volume draws every listener forward", "semicolon"],
];

const ITS_SENTENCES: Array<{ sent: string; needsApostrophe: boolean; reason: string }> = [
  { sent: "The committee published ___ final transport audit on Friday.", needsApostrophe: false, reason: "'published it is final audit' fails → possessive `its` (no apostrophe)" },
  { sent: "___ tempting to speak faster when nerves hit onstage.", needsApostrophe: true, reason: "contracts 'It is tempting' → requires apostrophe (`It's`)" },
  { sent: "An essay loses ___ credibility when it mocks opponents unfairly.", needsApostrophe: false, reason: "'loses it is credibility' fails → possessive `its` (no apostrophe)" },
  { sent: "___ been three terms since the library extended evening hours.", needsApostrophe: true, reason: "contracts 'It has been' → requires apostrophe (`It's`)" },
  { sent: "Every coastal mangrove protects ___ shoreline from storm surges.", needsApostrophe: false, reason: "'protects it is shoreline' fails → possessive `its` (no apostrophe)" },
  { sent: "___ crucial to steel-man the opposing case before rebutting it.", needsApostrophe: true, reason: "contracts 'It is crucial' → requires apostrophe (`It's`)" },
  { sent: "The school revised ___ mobile-phone policy after parent surveys.", needsApostrophe: false, reason: "'revised it is policy' fails → possessive `its` (no apostrophe)" },
  { sent: "___ clear from the trial data that shorter queues boost uptake.", needsApostrophe: true, reason: "contracts 'It is clear' → requires apostrophe (`It's`)" },
];

const POSSESSIVE_NOUNS: Array<{ singular: string; plural: string; item: string }> = [
  { singular: "student", plural: "students", item: "feedback on the timetable" },
  { singular: "judge", plural: "judges", item: "notes on vocal pacing" },
  { singular: "teacher", plural: "teachers", item: "proposals for library hours" },
  { singular: "cyclist", plural: "cyclists", item: "concerns about night lighting" },
  { singular: "finalist", plural: "finalists", item: "cue cards backstage" },
  { singular: "resident", plural: "residents", item: "petitions for shaded crossings" },
];

const VOICE_PAIRS: Array<{ active: string; passive: string; actor: string }> = [
  { active: "The council approved the shaded cycle corridor before monsoon season.", passive: "The shaded cycle corridor was approved before monsoon season.", actor: "The council" },
  { active: "Year 9 students organised the campus repair café in two weeks.", passive: "The campus repair café was organised in two weeks.", actor: "Year 9 students" },
  { active: "The planning board cancelled three evening bus routes without notice.", passive: "Three evening bus routes were cancelled without notice.", actor: "The planning board" },
  { active: "Acoustic engineers fitted sound panels across the hall ceiling.", passive: "Sound panels were fitted across the hall ceiling.", actor: "Acoustic engineers" },
  { active: "The judging panel praised Maya’s cyclical call-back and calm timing.", passive: "Maya’s cyclical call-back and calm timing were praised by the panel.", actor: "The judging panel" },
  { active: "Independent auditors flagged two calculation errors in the transport budget.", passive: "Two calculation errors were flagged in the transport budget.", actor: "Independent auditors" },
  { active: "Student editors published an investigative special on canteen waste.", passive: "An investigative special on canteen waste was published by student editors.", actor: "Student editors" },
  { active: "Volunteer mentors coached forty younger speakers ahead of finals week.", passive: "Forty younger speakers were coached ahead of finals week.", actor: "Volunteer mentors" },
];

// ---- Drill 3: Discursive Moves & Signposting -----------------------------

interface DiscursiveScenario {
  move: string;
  accept: string[];
  build: (issue: string, place: string) => { excerpt: string; clue: string };
}

const DISCURSIVE_MOVES: DiscursiveScenario[] = [
  {
    move: "straw man",
    accept: ["straw man", "straw-man", "strawman", "straw man fallacy"],
    build: (issue, place) => ({
      excerpt: `In a draft essay on ${issue} at ${place}: “People who question this proposal simply hate progress and want everyone living in caves.”`,
      clue: "twisting the rival view into an absurd caricature instead of facing its real point",
    }),
  },
  {
    move: "steel-manning",
    accept: ["steel-manning", "steel manning", "steel man", "steel-man", "concession"],
    build: (issue, place) => ({
      excerpt: `In a draft essay on ${issue} at ${place}: “Admittedly, critics raise a serious practical point: transition costs and accessibility barriers genuinely affect busy families.”`,
      clue: "presenting the opposing side’s strongest, fairest case candidly (‘Admittedly…’)",
    }),
  },
  {
    move: "rebuttal",
    accept: ["rebuttal", "counter-rebuttal", "pivot"],
    build: (issue, place) => ({
      excerpt: `Mid-paragraph on ${issue} at ${place}: “Nevertheless, pilot evidence proves that phased implementation resolves those upfront costs within eighteen months while delivering lasting gains.”`,
      clue: "pivoting with ‘Nevertheless’ to answer and outweigh the conceded objection with proof",
    }),
  },
  {
    move: "synthesis",
    accept: ["synthesis", "qualified verdict", "reasoned conclusion"],
    build: (issue, place) => ({
      excerpt: `Final paragraph on ${issue} at ${place}: “On balance, neither an outright ban nor total inaction serves our community well; a phased trial with clear accessibility safeguards captures the benefits while containing risk.”`,
      clue: "weighing both sides (‘On balance…’) to forge a sharp, qualified verdict",
    }),
  },
  {
    move: "fence-sitting",
    accept: ["fence-sitting", "fence sitting", "non-conclusion"],
    build: (issue, place) => ({
      excerpt: `Final paragraph on ${issue} at ${place}: “In conclusion, ${issue} has both pros and cons on either side, so everyone will just have to make up their own mind.”`,
      clue: "refusing to evaluate or reach a reasoned judgement with an empty ‘pros and cons’ cliché",
    }),
  },
];

// ---- Drill 4: Speech Craft & Tanglin Public Speaking Competition ---------

interface StageScenario {
  technique: string;
  accept: string[];
  build: (issue: string, place: string, num: number) => { scenario: string; clue: string };
}

const STAGE_SCENARIOS: StageScenario[] = [
  {
    technique: "cyclical call-back",
    accept: ["cyclical call-back", "cyclical callback", "cyclical ending", "cyclical structure", "call-back", "callback"],
    build: (issue, place, num) => ({
      scenario: `Speaking on ${issue} in ${place}, a finalist opens at 0:08 with a cracked ${num}-year-old stopwatch and closes at 2:52 by setting that exact stopwatch aside to symbolise unhurried curiosity.`,
      clue: "revisiting the exact opening object at the finish with transformed meaning",
    }),
  },
  {
    technique: "strategic pause",
    accept: ["strategic pause", "pause", "dramatic pause", "silence"],
    build: (issue, place, num) => ({
      scenario: `After asking a sharp question about ${issue} to ${num * 10} listeners in ${place}, the speaker holds two full seconds of composed silence while meeting eyes across the hall.`,
      clue: "deliberate silence letting the question echo inside every listener’s mind",
    }),
  },
  {
    technique: "vocal contrast",
    accept: ["vocal contrast", "vocal variation", "volume drop", "pacing contrast"],
    build: (issue, place, num) => ({
      scenario: `At minute 2:1${num % 9} of a speech on ${issue} in ${place}, instead of shouting louder at the emotional climax, the finalist slows down and drops to a crisp, quieter voice so the hall leans forward.`,
      clue: "deliberately shifting volume and pace downward to draw listeners in",
    }),
  },
  {
    technique: "eye contact triangulation",
    accept: ["eye contact triangulation", "triangulation", "eye contact"],
    build: (issue, place, num) => ({
      scenario: `During ${num} key transitions of a speech on ${issue} in ${place}, the speaker completes one full thought looking warmly at a real listener on the left, the next to centre, and the third to the right.`,
      clue: "sharing full phrases across Left, Centre, and Right zones instead of sweeping mechanically",
    }),
  },
  {
    technique: "anecdotal hook",
    accept: ["anecdotal hook", "hook", "anecdote", "15-second hook"],
    build: (issue, place, num) => ({
      scenario: `Skipping “Hello, today I will talk about ${issue}” in ${place}, the speaker opens immediately: “At 06:${10 + (num % 45)} last Monday, I watched my younger brother drop his heavy backpack and sigh.”`,
      clue: "launching inside the first 15 seconds with a vivid concrete story instead of throat-clearing",
    }),
  },
  {
    technique: "PREP",
    accept: ["prep", "point reason example point"],
    build: (issue, place, num) => ({
      scenario: `Facing a sharp Q&A question on ${issue} after speaking in ${place}, the finalist answers in ${24 + (num % 12)} seconds using Point → Reason → one concrete Example → closing Point.`,
      clue: "Point–Reason–Example–Point keeps live Q&A answers focused and memorable",
    }),
  },
];

export const drills: Drill[] = [
  {
    id: "discursive-writing-public-speaking.rhetorical-device-id",
    topicId: "discursive-writing-public-speaking",
    title: "Aristotelian Appeals & Rhetorical Devices",
    level: 1,
    guideRef: "aristotelian-rhetoric",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pool =
        tier === 1
          ? RHETORIC_ITEMS.slice(0, 5) // ethos, pathos, logos, anaphora, tricolon
          : RHETORIC_ITEMS; // all 7 including antithesis & hypophora
      const item = rng.pick(pool);
      const issue = rng.pick(DEBATE_ISSUES);
      const speaker = rng.pick(SPEAKERS);
      const num = rng.int(4, 18);
      const built = item.build(issue, speaker, num);

      const guideCue =
        tier === 1
          ? "Type `ethos`, `pathos`, `logos`, `anaphora`, or `tricolon`."
          : tier === 2
            ? "Type `ethos`, `pathos`, `logos`, `anaphora`, `tricolon`, `antithesis`, or `hypophora`."
            : "Name the exact Aristotelian appeal or classical rhetorical device.";

      return {
        prompt: `Read this speech excerpt:\n\n*"${built.quote}"*\n\nWhich appeal or rhetorical device is primarily demonstrated here? (${guideCue})`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.device,
        },
        traps:
          item.trapWrong && item.trapMsg
            ? [{ spec: { type: "text", accept: item.trapWrong }, feedback: item.trapMsg }]
            : undefined,
        hint: "Check whether the line builds trust (Ethos), human empathy (Pathos), numerical logic (Logos), repeated openings, a trio, balanced opposites, or a self-answered question.",
        solution: [
          `Clue: ${built.clue}.`,
          `Technique: **${item.device}**.`,
        ],
      };
    },
  },

  {
    id: "discursive-writing-public-speaking.spag-punctuation-fixer",
    topicId: "discursive-writing-public-speaking",
    title: "SPaG Comma-Splice, Apostrophe & Voice Lab",
    level: 1,
    guideRef: "spag-syntax-precision",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const [c1, c2, fanboys, adv] = rng.pick(CLAUSE_PAIRS);
        const mode = rng.int(0, 3);
        // 0: bare comma splice, 1: ", however," comma splice, 2: valid "; adv,", 3: valid ", FANBOYS"
        const isSplice = mode === 0 || mode === 1;
        const sent =
          mode === 0
            ? `${c1}, ${c2}.`
            : mode === 1
              ? `${c1}, ${adv}, ${c2}.`
              : mode === 2
                ? `${c1}; ${adv}, ${c2}.`
                : `${c1}, ${fanboys} ${c2}.`;
        return {
          prompt: `Inspect the clause boundary carefully:\n\n*"${sent}"*\n\nDoes this sentence contain a **comma splice**, or is it **correct**? (Type \`comma splice\` or \`correct\`.)`,
          answer: {
            type: "text",
            accept: isSplice ? ["comma splice", "comma-splice", "splice"] : ["correct", "valid", "grammatical"],
            display: isSplice ? "comma splice" : "correct",
          },
          traps: [
            {
              spec: { type: "text", accept: isSplice ? ["correct", "valid"] : ["comma splice", "comma-splice"] },
              feedback: isSplice
                ? `Two full independent clauses cannot be glued with only a comma${mode === 1 ? ` (and ‘${adv}’ is NOT a FANBOYS conjunction!)` : ""}.`
                : mode === 2
                  ? `A semicolon before ‘${adv},’ joins two complete clauses cleanly — this sentence is grammatically correct!`
                  : `‘${fanboys}’ IS a FANBOYS coordinating conjunction, so ‘, ${fanboys}’ joins two independent clauses accurately!`,
            },
          ],
          hint: "Run the Full-Stop Test on both halves — remember words like ‘however’ and ‘therefore’ are NOT FANBOYS conjunctions.",
          solution: [
            isSplice
              ? `Both halves can stand as complete sentences, and a bare comma${mode === 1 ? ` before ‘${adv}’` : ""} cannot join them → **comma splice**.`
              : mode === 2
                ? `The semicolon before ‘${adv},’ separates both complete clauses accurately → **correct**.`
                : `Comma + FANBOYS (‘${fanboys}’) links two independent clauses cleanly → **correct**.`,
          ],
        };
      }

      if (tier === 2) {
        const branch = rng.int(0, 2);
        if (branch === 0) {
          // Semicolon vs Colon
          const useColon = rng.bool(0.5);
          const [left, right, ans] = rng.pick(useColon ? COLON_SENTENCES : SEMICOLON_SENTENCES);
          return {
            prompt: `Choose the sharper punctuation mark for the blank (\`semicolon\` or \`colon\`):\n\n*"${left} ___ ${right}."*`,
            answer: {
              type: "text",
              accept: useColon ? ["colon", ":"] : ["semicolon", ";"],
              display: ans,
            },
            traps: [
              {
                spec: { type: "text", accept: useColon ? ["semicolon", ";"] : ["colon", ":"] },
                feedback: useColon
                  ? "Look at the setup on the left — the right side explicitly reveals/defines it, which is a colon’s exact job."
                  : "Both sides are balanced, closely linked independent clauses rather than a setup-and-reveal — use a semicolon!",
              },
            ],
            hint: "Ask: does the second half reveal/define a promise on the left (colon), or balance two linked independent clauses (semicolon)?",
            solution: [
              useColon
                ? "The second part directly reveals or defines the setup clause → **colon** (`:`)."
                : "Both halves are closely connected parallel independent clauses → **semicolon** (`;`).",
            ],
          };
        }

        if (branch === 1) {
          // its vs it's -> yes / no apostrophe
          const item = rng.pick(ITS_SENTENCES);
          const place = rng.pick(PLACE_SETTINGS);
          return {
            prompt: `Editing a Year 9 speech for ${place}:\n\n*"${item.sent}"*\n\nShould the blank (\`its\` / \`it's\`) include an apostrophe? (Type \`yes\` or \`no\`.)`,
            answer: {
              type: "text",
              accept: item.needsApostrophe ? ["yes", "with apostrophe"] : ["no", "no apostrophe"],
              display: item.needsApostrophe ? "yes" : "no",
            },
            traps: [
              {
                spec: { type: "text", accept: item.needsApostrophe ? ["no"] : ["yes"] },
                feedback: `Test with ‘it is / it has’: ${item.reason}.`,
              },
            ],
            hint: "Substitute ‘it is’ or ‘it has’ into the blank — use an apostrophe ONLY if that expansion makes grammatical sense.",
            solution: [
              `Substitution test: ${item.reason} → **${item.needsApostrophe ? "yes" : "no"}**.`,
            ],
          };
        }

        // Singular vs Plural regular possessive -> before / after the s
        const noun = rng.pick(POSSESSIVE_NOUNS);
        const isPlural = rng.bool(0.5);
        const countWord = isPlural ? `several ${noun.plural}` : `one ${noun.singular}`;
        const ans = isPlural ? "after" : "before";
        return {
          prompt: `Possessive check for **${countWord}**:\n\n*"The headteacher read the ___ (${countWord}) ${noun.item}."*\n\nDoes the possessive apostrophe go **before** or **after** the final letter \`s\`? (Type \`before\` or \`after\`.)`,
          answer: {
            type: "text",
            accept: isPlural ? ["after", "after s", "after the s"] : ["before", "before s", "before the s"],
            display: ans,
          },
          traps: [
            {
              spec: { type: "text", accept: isPlural ? ["before"] : ["after"] },
              feedback: isPlural
                ? `Because ‘${noun.plural}’ is already plural ending in -s, the apostrophe goes AFTER the s (${noun.plural}').`
                : `Because only ONE ${noun.singular} owns it, add 's — the apostrophe goes BEFORE the s (${noun.singular}'s).`,
            },
          ],
          hint: "Check whether the owner is singular (one) or a regular plural already ending in `-s`.",
          solution: [
            isPlural
              ? `Plural owner ending in -s (‘${noun.plural}’) places the apostrophe **after** the \`s\` (\`${noun.plural}'\`).`
              : `Singular owner (‘${noun.singular}’) adds \`'s\`, placing the apostrophe **before** the \`s\` (\`${noun.singular}'s\`).`,
          ],
        };
      }

      // Tier 3: Active vs Passive voice + tricky comma-splice/conjunctive adverb repair
      const testVoice = rng.bool(0.6);
      if (testVoice) {
        const pair = rng.pick(VOICE_PAIRS);
        const place = rng.pick(PLACE_SETTINGS);
        const isPassive = rng.bool(0.5);
        const sent = isPassive ? pair.passive : pair.active;
        return {
          prompt: `Editing a Year 9 report prepared for ${place}:\n\n*"${sent}"*\n\nIs this sentence written in the **active** or **passive** voice? (Type \`active\` or \`passive\`.)`,
          answer: {
            type: "text",
            accept: isPassive ? ["passive", "passive voice"] : ["active", "active voice"],
            display: isPassive ? "passive" : "active",
          },
          traps: [
            {
              spec: { type: "text", accept: isPassive ? ["active", "active voice"] : ["passive", "passive voice"] },
              feedback: isPassive
                ? "Run the ‘by zombies’ test after the verb — the subject is receiving the action (`was/were + past participle`), making it passive."
                : `Look at the subject: ‘${pair.actor}’ directly performs the verb, making this crisp active voice.`,
            },
          ],
          hint: "Check whether the subject performs the verb (active) or receives the action via `was/were + past participle` (passive).",
          solution: [
            isPassive
              ? "The receiver sits in the subject slot with `was/were + past participle` → **passive** voice."
              : `The actor (‘${pair.actor}’) performs the verb directly → **active** voice.`,
          ],
        };
      }

      const [c1, c2, , adv] = rng.pick(CLAUSE_PAIRS);
      return {
        prompt: `Repair this comma-splice sentence:\n\n*"${c1} ___ ${adv}, ${c2}."*\n\nWhich single punctuation mark (NOT a full stop) cleanly joins both independent clauses before \`${adv},\`? (Type the punctuation name.)`,
        answer: {
          type: "text",
          accept: ["semicolon", ";"],
          display: "semicolon",
        },
        traps: [
          {
            spec: { type: "text", accept: ["comma", ","] },
            feedback: `A comma before ‘${adv},’ between two full sentences creates a comma splice — upgrade it to a semicolon!`,
          },
        ],
        hint: `Remember: ‘${adv}’ is a conjunctive adverb between two full sentences, not a FANBOYS conjunction.`,
        solution: [
          `Between two independent clauses, place a **semicolon** (\`;\`) before \`${adv},\`.`,
        ],
      };
    },
  },

  {
    id: "discursive-writing-public-speaking.discursive-signposting",
    topicId: "discursive-writing-public-speaking",
    title: "Discursive Moves & Steel-Manning",
    level: 2,
    guideRef: "discursive-essay-structure",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pool = tier === 1 ? DISCURSIVE_MOVES.slice(0, 4) : DISCURSIVE_MOVES;
      const item = rng.pick(pool);
      const issue = rng.pick(DEBATE_ISSUES);
      const place = rng.pick(PLACE_SETTINGS);
      const built = item.build(issue, place);
      const listHint =
        tier === 1
          ? "`straw man`, `steel-manning`, `rebuttal`, or `synthesis`"
          : tier === 2
            ? "`straw man`, `steel-manning`, `rebuttal`, `synthesis`, or `fence-sitting`"
            : "the exact discursive move or flaw";

      return {
        prompt: `${built.excerpt}\n\nIdentify the discursive writing move (or flaw) shown here. (Type ${listHint}.)`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.move,
        },
        hint: "Check whether the writer is caricaturing an opponent, honestly presenting their best case, pivoting to answer it, synthesising a verdict, or dodging a verdict.",
        solution: [
          `Clue: ${built.clue}.`,
          `Discursive move: **${item.move}**.`,
        ],
      };
    },
  },

  {
    id: "discursive-writing-public-speaking.speech-architecture",
    topicId: "discursive-writing-public-speaking",
    title: "Public Speaking Timing & Stage Craft",
    level: 3,
    guideRef: "public-speaking-competition",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      // Mix quantitative 3-minute pacing calculations with stage craft recognition
      if (tier === 1 && rng.bool(0.45)) {
        const wpm = rng.pick([130, 135, 140, 145]);
        const mins = rng.pick([2, 3, 4]);
        const target = wpm * mins;
        const draft = target + rng.int(45, 240);
        const trim = draft - target;
        const place = rng.pick(PLACE_SETTINGS);
        return {
          prompt: `Preparing a **${mins}-minute** speech for ${place} at a poised pace of **${wpm} words per minute** (target: ${target} words), your first draft is **${draft} words** long. How many words should you trim so your pauses have room to land?`,
          answer: { type: "number", value: trim, display: String(trim) },
          hint: "Subtract the ideal target word count from your current draft word count.",
          solution: [
            `Target length = ${mins} × ${wpm} = ${target} words.`,
            `Words to trim = ${draft} − ${target} = **${trim}**.`,
          ],
        };
      }

      const item = rng.pick(STAGE_SCENARIOS);
      const issue = rng.pick(DEBATE_ISSUES);
      const place = rng.pick(PLACE_SETTINGS);
      const num = rng.int(3, 18);
      const built = item.build(issue, place, num);

      const tail =
        tier === 1
          ? "Type `cyclical call-back`, `strategic pause`, `vocal contrast`, `eye contact triangulation`, `anecdotal hook`, or `PREP`."
          : "Name the exact public speaking technique or Q&A framework.";

      return {
        prompt: `${built.scenario}\n\nWhich public speaking craft technique is demonstrated here? (${tail})`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.technique,
        },
        hint: "Focus on *how* the speaker structures the opening/ending, uses silence/voice/eyes, or frames their Q&A response.",
        solution: [
          `Key signal: ${built.clue}.`,
          `Technique: **${item.technique}**.`,
        ],
      };
    },
  },
];
