import type { Drill, DrillItem, Rng } from "./types.ts";

interface CharInfo {
  name: string;
  subj: string;
  Subj: string;
  obj: string;
  poss: string;
}

const CHARS_A: readonly CharInfo[] = [
  { name: "Clara", subj: "she", Subj: "She", obj: "her", poss: "her" },
  { name: "Priya", subj: "she", Subj: "She", obj: "her", poss: "her" },
  { name: "Evelyn", subj: "she", Subj: "She", obj: "her", poss: "her" },
  { name: "Nadia", subj: "she", Subj: "She", obj: "her", poss: "her" },
  { name: "Helena", subj: "she", Subj: "She", obj: "her", poss: "her" },
  { name: "Tessa", subj: "she", Subj: "She", obj: "her", poss: "her" },
  { name: "Jonas", subj: "he", Subj: "He", obj: "him", poss: "his" },
  { name: "Tariq", subj: "he", Subj: "He", obj: "him", poss: "his" },
  { name: "Sam", subj: "he", Subj: "He", obj: "him", poss: "his" },
  { name: "Callum", subj: "he", Subj: "He", obj: "him", poss: "his" },
  { name: "Ravi", subj: "he", Subj: "He", obj: "him", poss: "his" },
  { name: "Owen", subj: "he", Subj: "He", obj: "him", poss: "his" },
];

const NAMES_B = ["Daniel", "Mara", "Arthur", "Beatrice", "Mei", "Omar", "Leo", "Hannah", "Dev", "Walter", "Karim", "Anya"] as const;

const PLACES = [
  "in the corridor",
  "on the harbour pier",
  "in the dining hall",
  "in the assembly room",
  "in the study",
  "in the courtyard",
  "on the train platform",
  "at the boathouse",
] as const;

const PROPS = [
  "the brass key",
  "the sealed ledger",
  "the cracked compass",
  "the silver locket",
  "the folded telegram",
  "the trophy cup",
  "the iron latch",
  "the glass lantern",
] as const;

export const drills: Drill[] = [
  {
    id: "the-novel-analytical-essay.voice-identifier",
    topicId: "the-novel-analytical-essay",
    title: "Narrative Voice & Perspective Spotter",
    level: 1,
    guideRef: "narrative-voice-perspective",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const a = rng.pick(CHARS_A);
      const b = rng.pick(NAMES_B);
      const place = rng.pick(PLACES);
      const prop = rng.pick(PROPS);
      const ask = rng.pick([
        "Identify the narrative perspective or technique used:",
        "Name the narrative lens shown in this extract:",
        "Which narrative perspective/technique is operating here?",
      ]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `${ask}\n*“I gripped ${prop} ${place}, certain that my pulse would give me away.”*`,
          answer: {
            type: "text",
            accept: ["first-person", "first person", "first-person narrator", "first person narrator", "1st person", "1st-person"],
            display: "First-person",
          },
          hint: "Check the pronouns: 'I' and 'my'.",
          traps: [
            { spec: { type: "text", accept: ["third-person", "third person", "3rd person"] }, feedback: "Look closely at 'I' and 'my' — the character speaks directly as the narrator." },
          ],
          solution: ["Pronouns *“I”* and *“my”* place the reader inside the speaker's direct **first-person** voice."],
        }),
        () => ({
          prompt: `${ask}\n*“${a.name} stood frozen ${place}. Across the wall, unseen by ${a.name}, ${b} quietly pocketed ${prop} and smiled.”*`,
          answer: {
            type: "text",
            accept: ["third-person omniscient", "third person omniscient", "3rd person omniscient", "3rd-person omniscient", "omniscient", "omniscient narrator"],
            display: "Third-person omniscient",
          },
          hint: "The narrator uses third-person names and sees hidden actions that the first character cannot.",
          traps: [
            { spec: { type: "text", accept: ["third-person limited", "third person limited"] }, feedback: "Third-person limited stays locked to one character; here the narrator sees 'unseen' actions elsewhere too." },
          ],
          solution: ["Third-person pronouns plus access beyond one character's awareness signal **third-person omniscient** narration."],
        }),
        () => ({
          prompt: `${ask}\n*“${a.name} lingered ${place}, clutching ${prop}. ${a.Subj} could not guess what ${b} planned, only that ${a.poss} own hands were shaking.”*`,
          answer: {
            type: "text",
            accept: ["third-person limited", "third person limited", "3rd person limited", "3rd-person limited"],
            display: "Third-person limited",
          },
          hint: "Third-person pronouns are used, yet our knowledge stays strictly inside one mind.",
          traps: [
            { spec: { type: "text", accept: ["third-person omniscient", "third person omniscient", "omniscient"] }, feedback: "Notice 'could not guess' — the narrator restricts access strictly to one focaliser." },
          ],
          solution: ["Third-person grammar restricted to one character's thoughts and limits defines **third-person limited** narration."],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `${ask}\n*“${a.name} stared at ${prop} ${place}. Really, how dare ${b} lecture ${a.obj} about loyalty after last winter? ${a.Subj} folded ${a.poss} hands neatly.”*`,
          answer: {
            type: "text",
            accept: ["free indirect discourse", "free indirect speech", "free indirect style"],
            display: "Free indirect discourse",
          },
          hint: "Third-person pronouns stay in place while the character's exasperated question enters without a speech tag.",
          traps: [
            { spec: { type: "text", accept: ["first person", "first-person"] }, feedback: "Look at the third-person pronouns — the grammar stays third-person while the voice turns internal." },
          ],
          solution: ["Blending *“Really, how dare...”* into third-person prose with no speech tag is **free indirect discourse**."],
        }),
        () => ({
          prompt: `${ask}\n*“I only hid ${prop} ${place} for safekeeping — though of course ${b} panicked like a child and called it theft.”*`,
          answer: {
            type: "text",
            accept: ["unreliable narrator", "unreliable", "unreliable narration"],
            display: "Unreliable narrator",
          },
          hint: "Notice the minimising excuse ('only hid... for safekeeping') paired with defensive insults.",
          traps: [
            { spec: { type: "text", accept: ["omniscient", "omniscient narrator"] }, feedback: "An omniscient voice is third-person all-knowing; here a biased 'I' twists events to look innocent." },
          ],
          solution: ["Defensive excuses (*“only hid... for safekeeping”*) and blaming witnesses mark an **unreliable narrator**."],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(3),
        () => ({
          prompt: `Name the two-word effect created when the reader knows ${b} already hid ${prop} ${place}, while ${a.name} cheerfully trusts ${b}'s promise:`,
          answer: {
            type: "text",
            accept: ["dramatic irony"],
            display: "Dramatic irony",
          },
          hint: "The reader holds a crucial truth that the trusting character misses.",
          traps: [
            { spec: { type: "text", accept: ["foreshadowing"] }, feedback: "Foreshadowing hints at future events; here the tension comes from what the reader already knows *now*." },
          ],
          solution: ["When the reader knows a secret a character misses, the writer generates **dramatic irony**."],
        }),
        () => ({
          prompt: `In a third-person scene set ${place}, the narrator speaks in 'he/she' while filtering every sensory detail strictly through ${a.name}'s panic over ${prop}. Name the single literary noun for 'whose eyes we see through':`,
          answer: {
            type: "text",
            accept: ["focalisation", "focalization"],
            display: "Focalisation",
          },
          hint: "Starts with 'focal-' — distinct from narration (who speaks).",
          traps: [
            { spec: { type: "text", accept: ["subtext"] }, feedback: "Subtext is hidden meaning beneath dialogue; this term comes from 'focus'." },
          ],
          solution: ["**Focalisation** names the character vantage point filtering the scene."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
  {
    id: "the-novel-analytical-essay.character-subtext",
    topicId: "the-novel-analytical-essay",
    title: "Characterisation, Foils & Subtext",
    level: 1,
    guideRef: "characterisation-foils",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const a = rng.pick(CHARS_A);
      const b = rng.pick(NAMES_B);
      const prop = rng.pick(PROPS);
      const place = rng.pick(PLACES);
      const promptVerb = rng.pick(["Name the literary term:", "Identify the characterisation term:", "Which literary concept is demonstrated?"]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `${promptVerb} Waiting ${place}, reckless ${a.name} smashes ${prop}, while cautious ${b} inspects every hinge first — pairing opposite traits to sharpen a theme.`,
          answer: { type: "text", accept: ["foil", "character foil", "foils", "character foils"], display: "Foil" },
          hint: "A short four-letter word for a contrasting partner who highlights another character's traits.",
          traps: [{ spec: { type: "text", accept: ["motif"] }, feedback: "A motif is a recurring image or object, not a contrasting character." }],
          solution: [`Contrasting ${a.name} and ${b} under the same pressure makes them **character foils**.`],
        }),
        () => ({
          prompt: `${promptVerb} ${a.name} begins the novel terrified to speak up ${place}, yet by the final chapter boldly confronts the council over ${prop}. Is ${a.name} **dynamic** or **static**?`,
          answer: { type: "text", accept: ["dynamic", "dynamic character"], display: "Dynamic" },
          hint: "Does the character undergo genuine internal growth or remain unchanged?",
          traps: [{ spec: { type: "text", accept: ["static", "static character"] }, feedback: "Static means unchanging; here the character evolves from fear to courage." }],
          solution: ["A character who transforms internally across turning points is **dynamic**."],
        }),
        () => ({
          prompt: `${promptVerb} From Chapter 1 to the epilogue ${place}, ${b} keeps the exact same cynical refusal to trust ${prop}, serving as an unchanging benchmark. Is ${b} **dynamic** or **static**?`,
          answer: { type: "text", accept: ["static", "static character"], display: "Static" },
          hint: "Look at the clue 'keeps the exact same cynical refusal' from start to finish.",
          traps: [{ spec: { type: "text", accept: ["dynamic", "dynamic character"] }, feedback: "Dynamic characters transform; here the character stays deliberately fixed." }],
          solution: ["An intentionally unchanging character acting as a moral or cynical yardstick is **static**."],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `${promptVerb} Standing ${place}, ${a.name} murmurs *“Of course I'm delighted for you”* while snapping ${prop} shut with white knuckles. What single word names the hidden hostility beneath polite speech?`,
          answer: { type: "text", accept: ["subtext", "dialogue subtext"], display: "Subtext" },
          hint: "Prefix 'sub-' (underneath) + 'text'.",
          traps: [{ spec: { type: "text", accept: ["pathetic fallacy"] }, feedback: "Pathetic fallacy links human emotion to weather, not hidden meaning beneath dialogue." }],
          solution: ["Unspoken resentment contradicting polite words is **subtext**."],
        }),
        () => ({
          prompt: `${promptVerb} *“‘I only meant to borrow ${prop}—’ ‘Put it down, ${a.name}.’”* Name the punctuation mark (` + "`—`" + `) that cuts ${a.name} off to assert dominance.`,
          answer: { type: "text", accept: ["dash", "em-dash", "em dash"], display: "Dash (em-dash)" },
          hint: "A horizontal bar showing an abrupt mid-clause interruption.",
          traps: [{ spec: { type: "text", accept: ["ellipsis"] }, feedback: "An ellipsis (...) shows hesitant trailing off, whereas this bar cuts speech short." }],
          solution: ["An **em-dash** marks a sharp interruption, enacting verbal dominance."],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(2),
        () => ({
          prompt: `${promptVerb} *“‘I thought... well, maybe ${place}... you wouldn't need ${prop},’ ${a.name} faltered.”* Name the punctuation mark (` + "`...`" + `) enacting ${a.name}'s hesitation.`,
          answer: { type: "text", accept: ["ellipsis", "ellipses"], display: "Ellipsis" },
          hint: "Grammatical name for three consecutive dots showing trailing hesitation.",
          traps: [{ spec: { type: "text", accept: ["dash", "em-dash", "em dash"] }, feedback: "A dash cuts speech abruptly; three dots show reluctant trailing off." }],
          solution: ["An **ellipsis** fractures syntax to convey hesitation or vulnerability."],
        }),
        () => ({
          prompt: `${promptVerb} Placing ${a.name}'s warm public smile ${place} directly beside ${a.poss} icy threat over ${prop} highlights hypocrisy by putting opposites side by side.`,
          answer: { type: "text", accept: ["juxtaposition", "juxtaposing"], display: "Juxtaposition" },
          hint: "Thirteen-letter term starting with 'j' meaning placing contrasting elements side by side.",
          traps: [{ spec: { type: "text", accept: ["alliteration"] }, feedback: "Alliteration repeats initial sounds; this term is about side-by-side contrast." }],
          solution: ["Placing starkly opposing behaviours beside each other is **juxtaposition**."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
  {
    id: "the-novel-analytical-essay.structure-setting",
    topicId: "the-novel-analytical-essay",
    title: "Setting, Motif & Structural Shifts",
    level: 2,
    guideRef: "setting-motif-structure",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const a = rng.pick(CHARS_A);
      const prop = rng.pick(PROPS);
      const place = rng.pick(PLACES);
      const lead = rng.pick(["Identify the setting or structural technique:", "Name the literary craft device shown:", "Which structural/setting term fits best?"]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `${lead}\n*“An angry storm hammered the skylights while ${a.name} stood ${place} slamming ${prop} down.”*`,
          answer: { type: "text", accept: ["pathetic fallacy"], display: "Pathetic fallacy" },
          hint: "Human emotion ('angry') projected onto weather to mirror inner rage.",
          traps: [{ spec: { type: "text", accept: ["simile"] }, feedback: "There is no 'like' or 'as' — look for the two-word term for emotional weather." }],
          solution: ["Projecting human anger onto the storm is **pathetic fallacy**."],
        }),
        () => ({
          prompt: `${lead}\nA novel drops readers straight into crisis on line 1: *“Alarms were already shrieking ${place} as ${a.name} seized ${prop}.”*`,
          answer: { type: "text", accept: ["in medias res", "in media res"], display: "In medias res" },
          hint: "Three-word Latin phrase meaning 'into the middle of things'.",
          traps: [{ spec: { type: "text", accept: ["analepsis", "flashback"] }, feedback: "A flashback steps backward in time; this Latin phrase means starting mid-action." }],
          solution: ["Opening directly inside ongoing crisis without exposition is ***in medias res***."],
        }),
        () => ({
          prompt: `${lead}\nIn Chapter 1, ${a.name} laughs off a hairline crack in ${prop} while standing ${place} — a quiet clue warning of disaster in Chapter 12.`,
          answer: { type: "text", accept: ["foreshadowing", "foreshadow"], display: "Foreshadowing" },
          hint: "Casting an early 'shadow' ahead of a future catastrophe.",
          traps: [{ spec: { type: "text", accept: ["flashback", "analepsis"] }, feedback: "This clue points ahead to later events rather than recalling the past." }],
          solution: ["Planting an early hint of future trouble is **foreshadowing**."],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `${lead}\nAcross a whole novel, ${prop} reappears in Chapters 1, 7 and 18 ${place}, shifting from hope to betrayal.`,
          answer: { type: "text", accept: ["motif", "recurring motif"], display: "Motif" },
          hint: "Five-letter word for a recurring symbolic image or object across a novel.",
          traps: [{ spec: { type: "text", accept: ["foil"] }, feedback: "A foil is a contrasting character; this term describes a recurring symbolic thread." }],
          solution: ["An object that recurs across the text with evolving symbolic weight is a **motif**."],
        }),
        () => ({
          prompt: `${lead}\nA sealed boarding school (or isolated island) mirroring wider political power struggles and class division in miniature.`,
          answer: { type: "text", accept: ["microcosm"], display: "Microcosm" },
          hint: "Greek roots meaning 'small world'.",
          traps: [{ spec: { type: "text", accept: ["motif"] }, feedback: "A motif is a recurring image; here the entire contained setting models wider society." }],
          solution: ["A compact, self-contained setting reflecting wider society is a **microcosm**."],
        }),
        () => ({
          prompt: `${lead}\nA novel opens with ${a.name} clutching ${prop} ${place}, and closes on the final page returning to ${a.name} releasing the exact same object in the exact same spot.`,
          answer: { type: "text", accept: ["cyclical structure", "circular structure", "cyclical ending", "cyclical"], display: "Cyclical structure" },
          hint: "The ending loops back to echo the opening scene.",
          traps: [{ spec: { type: "text", accept: ["linear structure"] }, feedback: "Linear structure runs straight ahead without looping back to the opening image." }],
          solution: ["Returning to the opening setting/action at the close creates a **cyclical structure**."],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(3),
        () => ({
          prompt: `${lead}\nDuring a tense showdown ${place}, the writer interrupts the present to replay ${a.name}'s childhood memory of ${prop} from ten years earlier. Give the precise Greek-derived one-word term:`,
          answer: { type: "text", accept: ["analepsis"], display: "Analepsis" },
          hint: "Formal literary term for a flashback, ending in '-lepsis'.",
          traps: [{ spec: { type: "text", accept: ["prolepsis"] }, feedback: "Prolepsis jumps forward into the future; this jumps backward." }],
          solution: ["**Analepsis** is the precise structural term for a flashback."],
        }),
        () => ({
          prompt: `${lead}\nMidway through a scene ${place}, the narrator jumps ten years ahead to reveal ${prop} lying forgotten in ruins before returning to the present. Give the precise Greek-derived one-word term:`,
          answer: { type: "text", accept: ["prolepsis"], display: "Prolepsis" },
          hint: "Starts with 'pro-' (forward) and ends in '-lepsis'.",
          traps: [{ spec: { type: "text", accept: ["analepsis"] }, feedback: "Analepsis looks backward; this leaps forward in time." }],
          solution: ["**Prolepsis** is the formal literary term for a flash-forward."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
  {
    id: "the-novel-analytical-essay.essay-craft",
    topicId: "the-novel-analytical-essay",
    title: "Analytical Essay & Single-Word Zoom",
    level: 3,
    guideRef: "analytical-essay-craft",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const a = rng.pick(CHARS_A);
      const prop = rng.pick(PROPS);
      const place = rng.pick(PLACES);
      const verbItem = rng.pick([
        { word: "shattered", line: `${a.name}'s voice shattered the quiet ${place}` },
        { word: "swallowed", line: `the fog swallowed ${prop} ${place}` },
        { word: "clutched", line: `${a.name} clutched ${prop} while waiting ${place}` },
        { word: "sliced", line: `the whistle sliced through the chatter ${place}` },
      ]);
      const adjItem = rng.pick([
        { word: "hollow", line: `${a.name} offered a hollow laugh beside ${prop}` },
        { word: "gilded", line: `the gilded frame towered ${place}` },
        { word: "tarnished", line: `${a.name} stared at the tarnished edge of ${prop}` },
        { word: "brittle", line: `a brittle silence settled ${place}` },
      ]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `During single-word zoom on *“${verbItem.line}”*, what **word class** should you name for **“${verbItem.word}”**?`,
          answer: { type: "text", accept: ["verb", "dynamic verb", "action verb"], display: "Verb" },
          hint: "Ask what job the word performs: it expresses the forceful action.",
          traps: [{ spec: { type: "text", accept: ["adjective", "noun", "adverb"] }, feedback: "Check its grammatical role: it denotes the action performed by the subject." }],
          solution: [`*“${verbItem.word}”* is a **verb** — naming its word class strengthens single-word zoom.`],
        }),
        () => ({
          prompt: `During single-word zoom on *“${adjItem.line}”*, what **word class** should you name for **“${adjItem.word}”**?`,
          answer: { type: "text", accept: ["adjective", "an adjective"], display: "Adjective" },
          hint: "It sits directly before a noun to qualify or describe it.",
          traps: [{ spec: { type: "text", accept: ["verb", "noun", "adverb"] }, feedback: "Look at the noun right after it — this word describes that noun." }],
          solution: [`*“${adjItem.word}”* is an **adjective** modifying the following noun.`],
        }),
        () => ({
          prompt: `What one-word noun names the layered emotional associations you unpack when zooming into *“${adjItem.word}”* in *“${adjItem.line}”*?`,
          answer: { type: "text", accept: ["connotations", "connotation"], display: "Connotations" },
          hint: "Starts with 'con-' — opposite of literal dictionary denotation.",
          traps: [{ spec: { type: "text", accept: ["denotation", "denotations"] }, feedback: "Denotation is the literal dictionary meaning; we want the emotional/cultural associations." }],
          solution: ["**Connotations** are the implied emotional and symbolic associations beyond literal meaning."],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `A student writes about *“${verbItem.line}”* by pulling out just *“${verbItem.word}”* to unpack its word class and connotations. Name this three-word analytical technique:`,
          answer: { type: "text", accept: ["single-word zoom", "single word zoom", "word-level zoom", "word zoom"], display: "Single-word zoom" },
          hint: "Focuses like a microscope on one potent word ('s_____-w___ z___').",
          traps: [{ spec: { type: "text", accept: ["feature-spotting", "feature spotting"] }, feedback: "Feature-spotting merely names devices; zooming deeply into one rich word is a top-band skill." }],
          solution: ["Isolating one potent word for word class and connotations is **single-word zoom**."],
        }),
        () => ({
          prompt: `Name the three-part paragraph framework (W–H–W) that connects conceptual claim, embedded evidence on *“${adjItem.word}”* and writer's intent:`,
          answer: { type: "text", accept: ["what-how-why", "what how why", "whw"], display: "WHAT–HOW–WHY" },
          hint: "Three short question words starting with W, H and W.",
          traps: [{ spec: { type: "text", accept: ["pee", "peel"] }, feedback: "Year 9 analytical craft upgrades PEE/PEEL to WHAT–HOW–WHY." }],
          solution: ["**WHAT–HOW–WHY** links claim, embedded craft/zoom and writer's broader purpose."],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(2),
        () => ({
          prompt: `A student writes: *“Standing ${place}, the writer uses a metaphor, a simile and alliteration on ${prop}.”* without explaining any meaning. Name this weak hyphenated habit:`,
          answer: { type: "text", accept: ["feature-spotting", "feature spotting", "technique-spotting", "technique spotting"], display: "Feature-spotting" },
          hint: "Labelling literary features without analysing reader impact ('f______-s_______').",
          traps: [{ spec: { type: "text", accept: ["single-word zoom", "single word zoom"] }, feedback: "Single-word zoom analyses meaning deeply; empty device-listing is the opposite trap." }],
          solution: ["Listing literary terms with zero explanation of effect is **feature-spotting**."],
        }),
        () => ({
          prompt: `An essay opens: *“Throughout the novel, the writer exposes authority ${place} as fragile rather than secure.”* Name this debatable opening argument (two words):`,
          answer: { type: "text", accept: ["conceptual thesis", "thesis statement", "thesis"], display: "Conceptual thesis" },
          hint: "Replaces 'In this essay I will write about...' with a big-idea claim ('c_________ t_____').",
          traps: [{ spec: { type: "text", accept: ["plot summary"] }, feedback: "Plot summary retells events; this makes an arguable claim about the writer's message." }],
          solution: ["A big-idea, debatable opening argument is a **conceptual thesis** (or thesis statement)."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
];
