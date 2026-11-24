import type { Drill, DrillItem, Rng } from "./types.ts";

const RULERS = ["the emperor", "the general", "the governor", "the monarch", "the commander", "the conqueror"] as const;
const MONUMENTS = ["marble arch", "bronze pillar", "granite gate", "iron plinth", "gilded tower", "stone fortress"] as const;
const NATURAL_FORCES = ["winter ivy", "salt tide", "desert wind", "mountain sleet", "black surf", "coastal gale"] as const;
const SETTINGS = ["the ridge", "the square", "the harbour", "the trench", "the bridge", "the avenue"] as const;

export const drills: Drill[] = [
  {
    id: "power-conflict-poetry.theme-tone",
    topicId: "power-conflict-poetry",
    title: "Power, Conflict & Tone Concept Spotter",
    level: 1,
    guideRef: "themes-of-power-conflict",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const ruler = rng.pick(RULERS);
      const monument = rng.pick(MONUMENTS);
      const nature = rng.pick(NATURAL_FORCES);
      const setting = rng.pick(SETTINGS);
      const lead = rng.pick(["Identify the literary term:", "Name the poetic concept shown:", "Which key Power & Conflict term fits?"]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `${lead} ${ruler[0].toUpperCase() + ruler.slice(1)} boasts his ${monument} will stand forever, right before ${nature} cracks it to rubble. Name the six-letter Greek term for this excessive pride:`,
          answer: { type: "text", accept: ["hubris"], display: "Hubris" },
          hint: "Six letters, starting with 'hu-' — blinding arrogance inviting collapse.",
          traps: [{ spec: { type: "text", accept: ["pathos"] }, feedback: "Pathos evokes pity/sympathy; we need the term for dangerous excessive pride." }],
          solution: ["Blinding arrogance in a ruler that invites ironic downfall is **hubris**."],
        }),
        () => ({
          prompt: `${lead} Inside a dramatic monologue at ${setting}, the boastful voice praises war while the poet secretly condemns it. What one-word term names the fictional voice inside the poem?`,
          answer: { type: "text", accept: ["speaker", "persona", "the speaker", "the persona"], display: "Speaker (or Persona)" },
          hint: "Distinct from the poet — seven letters derived from 'speak'.",
          traps: [{ spec: { type: "text", accept: ["poet", "author"] }, feedback: "The poet is the real-world writer; name the fictional voice *inside* the poem." }],
          solution: ["Always separate the **speaker** (or **persona**) from the **poet** crafting ironic distance."],
        }),
        () => ({
          prompt: `${lead} A conflict poem mourns fallen soldiers along ${setting} in a slow, solemn, dignified voice honouring their quiet sacrifice. Name the seven-letter tone adjective derived from 'elegy':`,
          answer: { type: "text", accept: ["elegiac"], display: "Elegiac" },
          hint: "Starts with 'eleg-' — far more precise than 'sad'.",
          traps: [{ spec: { type: "text", accept: ["sardonic"] }, feedback: "Sardonic means bitterly mocking; here the tone is mournful and reverent." }],
          solution: ["An **elegiac** tone expresses solemn, dignified mourning and remembrance."],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `${lead} Watching ${nature} tower above a tiny wooden boat near ${setting}, the speaker feels awe mixed with terror at human insignificance. Name this Romantic concept (one word or 'the ...'):`,
          answer: { type: "text", accept: ["sublime", "the sublime"], display: "The sublime" },
          hint: "Seven letters starting with 'sub-' — awe edged with terror before vast nature.",
          traps: [{ spec: { type: "text", accept: ["hubris"] }, feedback: "Hubris is human arrogance; this term names nature's terrifying grandeur." }],
          solution: ["**The sublime** blends awe and terror, exposing human fragility beside nature."],
        }),
        () => ({
          prompt: `${lead} A poet bitterly mocks shiny recruitment posters beside the ruined ${monument} at ${setting}. Name the eight-letter tone adjective meaning grimly, bitterly mocking:`,
          answer: { type: "text", accept: ["sardonic", "satirical"], display: "Sardonic (or Satirical)" },
          hint: "Starts with 'sard-' (or 'satir-') — biting, cynical mockery.",
          traps: [{ spec: { type: "text", accept: ["elegiac"] }, feedback: "Elegiac is gentle mourning; here the poet delivers sharp, bitter mockery." }],
          solution: ["A **sardonic** (or satirical) tone uses bitter irony to tear down false slogans."],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(2),
        () => ({
          prompt: `${lead} A poem contrasts ${ruler}'s gleaming ${monument} with soldiers freezing near ${setting} while nothing is gained — exposing war's utter pointlessness. Name this eight-letter thematic noun:`,
          answer: { type: "text", accept: ["futility"], display: "Futility" },
          hint: "Derived from 'futile' — total pointlessness or wasted effort.",
          traps: [{ spec: { type: "text", accept: ["hubris"] }, feedback: "Hubris is arrogance; here we want the noun meaning war's tragic pointlessness." }],
          solution: ["**Futility** names the tragic pointlessness of wasted sacrifice in conflict poetry."],
        }),
        () => ({
          prompt: `${lead} A poem shows ${nature} quietly erasing ${ruler}'s carved decree on a ${monument}, proving no empire lasts forever. Name this twelve-letter noun meaning 'not lasting forever':`,
          answer: { type: "text", accept: ["impermanence", "transience"], display: "Impermanence" },
          hint: "Add prefix 'im-' to 'permanence'.",
          traps: [{ spec: { type: "text", accept: ["permanence"] }, feedback: "Check the prefix — the poem shows human power does *not* last forever." }],
          solution: ["**Impermanence** (or transience) highlights how fleeting political power is beside time and nature."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
  {
    id: "power-conflict-poetry.form-lineation",
    topicId: "power-conflict-poetry",
    title: "Form, Metre, Volta & Lineation",
    level: 1,
    guideRef: "poetic-form-metre-structure",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const setting = rng.pick(SETTINGS);
      const nature = rng.pick(NATURAL_FORCES);
      const monument = rng.pick(MONUMENTS);
      const ask = rng.pick(["Identify the poetic form or structural device:", "Name the structural feature shown:", "Which poetic form/lineation term applies?"]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `${ask}\n*“The watchman froze — listen — boots struck gravel / outside ${setting} beneath the mist.”*\nName the mid-line punctuation pause (` + "`— listen —`" + `):`,
          answer: { type: "text", accept: ["caesura", "a caesura"], display: "Caesura" },
          hint: "Seven-letter term for a strong pause *inside* a poetic line.",
          traps: [{ spec: { type: "text", accept: ["enjambment"] }, feedback: "Enjambment runs past the end of a line; this pause cuts right through the middle." }],
          solution: ["A deliberate punctuation break mid-line is a **caesura**."],
        }),
        () => ({
          prompt: `${ask}\n*“The ${nature} vaulted straight across / the cracked ${monument} without a sound.”*\nName the run-on line break after *“across”* with no punctuation:`,
          answer: { type: "text", accept: ["enjambment", "enjambement"], display: "Enjambment" },
          hint: "French-derived term starting with 'en-' for a clause spilling over a line end.",
          traps: [{ spec: { type: "text", accept: ["caesura"] }, feedback: "Caesura stops *inside* a line; here grammar surges *over* the line break." }],
          solution: ["Running a clause over a line break without punctuation is **enjambment**."],
        }),
        () => ({
          prompt: `${ask}\nIn a 14-line poem about a ${monument} at ${setting}, line 9 pivots sharply with *“Yet rust now claims the iron gate.”* Name this five-letter turning point:`,
          answer: { type: "text", accept: ["volta", "the volta", "a volta"], display: "Volta" },
          hint: "Five-letter Italian word meaning 'turn'.",
          traps: [{ spec: { type: "text", accept: ["refrain"] }, feedback: "A refrain repeats the same line unchanged; a turn in tone or argument has a five-letter Italian name." }],
          solution: ["A decisive shift in tone or argument within a poem is a **volta**."],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `${ask}\nA 14-line poem whose rhyme scheme breaks down as the ${monument} crumbles near ${setting}. Name the 14-line poetic form:`,
          answer: { type: "text", accept: ["sonnet", "a sonnet"], display: "Sonnet" },
          hint: "Classic 14-line form often subverted in Power & Conflict poems.",
          traps: [{ spec: { type: "text", accept: ["ballad"] }, feedback: "A ballad uses narrative quatrains without a fixed 14-line ceiling." }],
          solution: ["A traditional 14-line poetic form is a **sonnet**."],
        }),
        () => ({
          prompt: `${ask}\nOne arrogant speaker addresses a silent visitor beside the ${monument} at ${setting}, unwittingly exposing cruelty. Name this two-word poetic form:`,
          answer: { type: "text", accept: ["dramatic monologue", "a dramatic monologue"], display: "Dramatic monologue" },
          hint: "Two words: theatrical ('dramatic') + single-voice speech ('monologue').",
          traps: [{ spec: { type: "text", accept: ["free verse"] }, feedback: "Free verse refers to lack of metre/rhyme; here one persona addresses a silent listener." }],
          solution: ["A single fictional speaker addressing an implied silent listener defines a **dramatic monologue**."],
        }),
        () => ({
          prompt: `${ask}\nEvery stanza describing ${nature} over ${setting} closes with the exact repeated line *“Still no reply returns.”* Name this repeated structural line:`,
          answer: { type: "text", accept: ["refrain", "a refrain"], display: "Refrain" },
          hint: "Seven-letter word starting with 're-' for a recurring line across stanzas.",
          traps: [{ spec: { type: "text", accept: ["volta"] }, feedback: "A volta marks a turning point; a repeated chorus-like line is a different term." }],
          solution: ["A repeated line anchoring stanza boundaries is a **refrain**."],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(3),
        () => ({
          prompt: `${ask}\nA conflict poem about ${setting} written in **unrhymed iambic pentameter** (steady 10-syllable lines without rhyme). Name this two-word form:`,
          answer: { type: "text", accept: ["blank verse"], display: "Blank verse" },
          hint: "Rhyme is left 'blank', while 10-syllable iambic pentameter remains.",
          traps: [{ spec: { type: "text", accept: ["free verse"] }, feedback: "Free verse has *no* regular metre; unrhymed iambic pentameter keeps steady 10-syllable beats." }],
          solution: ["Unrhymed iambic pentameter is **blank verse**."],
        }),
        () => ({
          prompt: `${ask}\nA poem about trauma after ${setting} rejects both fixed metre and regular rhyme scheme so jagged lines mirror fractured memory. Name this two-word form:`,
          answer: { type: "text", accept: ["free verse"], display: "Free verse" },
          hint: "Free from both regular rhyme and fixed metrical count.",
          traps: [{ spec: { type: "text", accept: ["blank verse"] }, feedback: "Blank verse keeps strict iambic pentameter; here there is no fixed metre at all." }],
          solution: ["Poetry without regular rhyme or fixed metre is **free verse**."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
  {
    id: "power-conflict-poetry.sound-imagery",
    topicId: "power-conflict-poetry",
    title: "Imagery, Sound Devices & Semantic Fields",
    level: 2,
    guideRef: "imagery-sound-connotation",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const setting = rng.pick(SETTINGS);
      const lead = rng.pick(["Name the poetic sound or imagery device:", "Identify the craft technique used here:", "Which imagery or sound device dominates?"]);
      const plosiveLine = rng.pick([
        `Black boots battered the broken brick near ${setting}.`,
        `Bitter bullets burst back across ${setting}.`,
        `Brutal batons beat the dark timber along ${setting}.`,
      ]);
      const sibLine = rng.pick([
        `Silent smoke slipped slowly past ${setting}.`,
        `Soft searchlights slid secretly across ${setting}.`,
        `Still shadows stalked silently beside ${setting}.`,
      ]);
      const oxyPhrase = rng.pick(["cruel mercy", "violent silence", "deafening hush", "brittle peace", "colossal wreck"]);
      const halfPair = rng.pick([
        { a: "cold", b: "killed" },
        { a: "flash", b: "flesh" },
        { a: "hill", b: "hall" },
        { a: "mist", b: "mast" },
        { a: "wire", b: "war" },
      ]);
      const semGroup = rng.pick([
        { words: "‘altar’, ‘hymn’, ‘martyr’, ‘sacrifice’", domain: "religion" },
        { words: "‘barrage’, ‘trench’, ‘shrapnel’, ‘bayonet’", domain: "warfare" },
        { words: "‘rusted’, ‘crumbled’, ‘ash’, ‘rot’", domain: "decay" },
        { words: "‘filed’, ‘stamped’, ‘numbered’, ‘archived’", domain: "bureaucracy" },
      ]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `${lead}\n*“${plosiveLine}”* (Focus on the repeated hard ` + "`b, t, k, d`" + ` bursts.)`,
          answer: { type: "text", accept: ["plosives", "plosive", "plosive sounds", "plosive consonants", "plosive alliteration"], display: "Plosives" },
          hint: "Hard stop consonants bursting with explosive force (`p, b, t, d, k, g`).",
          traps: [{ spec: { type: "text", accept: ["sibilance"] }, feedback: "Sibilance repeats hissing 's/sh' sounds, not explosive b/t/k/d stops." }],
          solution: ["Repeated hard `b/t/k/d` stops are **plosives**, mimicking violent physical impact."],
        }),
        () => ({
          prompt: `${lead}\n*“${sibLine}”* (Focus on the repeated hissing ` + "`s`" + ` sounds.)`,
          answer: { type: "text", accept: ["sibilance", "sibilant"], display: "Sibilance" },
          hint: "Nine-letter term starting with 'sib-' for repeated 's/sh/z' sounds.",
          traps: [{ spec: { type: "text", accept: ["plosives", "plosive"] }, feedback: "Plosives are hard stops (p/b/t/d/k/g); hissing 's' sounds have their own name." }],
          solution: ["Repeated `s` sounds create **sibilance**, lending eerie stealth or menace."],
        }),
        () => ({
          prompt: `${lead}\nA poet compresses a bitter contradiction into the two-word phrase *“${oxyPhrase}”* beside ${setting}.`,
          answer: { type: "text", accept: ["oxymoron", "an oxymoron"], display: "Oxymoron" },
          hint: "Two directly opposite words locked side by side ('oxy-').",
          traps: [{ spec: { type: "text", accept: ["simile"] }, feedback: "There is no 'like' or 'as' here — look at the direct clash between two adjoining words." }],
          solution: [`Locking opposite terms together in *“${oxyPhrase}”* forms an **oxymoron**.`],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `${lead}\nAcross a poem set at ${setting}, the poet repeatedly weaves in ${semGroup.words} (words from ${semGroup.domain}). Name this two-word linguistic term:`,
          answer: { type: "text", accept: ["semantic field", "a semantic field", "lexical field", "a lexical field"], display: "Semantic field" },
          hint: "Two words: a conceptual family of related vocabulary ('s_______ f____').",
          traps: [{ spec: { type: "text", accept: ["extended metaphor"] }, feedback: "An extended metaphor sustains one comparison; a family of related vocabulary is a semantic field." }],
          solution: [`Grouping ${semGroup.words} establishes a **semantic field** of ${semGroup.domain}.`],
        }),
        () => ({
          prompt: `${lead}\nTwo lines describing ${setting} end with the near-matching words **“${halfPair.a}”** and **“${halfPair.b}”** (same consonant frame, shifted vowel).`,
          answer: { type: "text", accept: ["half-rhyme", "half rhyme", "pararhyme", "slant rhyme", "near rhyme"], display: "Half-rhyme (pararhyme)" },
          hint: "Deliberately imperfect rhyme withholding soothing musical closure ('h___-r____').",
          traps: [{ spec: { type: "text", accept: ["full rhyme"] }, feedback: "Notice the vowel changes between the two words — it is intentionally dissonant, not a full rhyme." }],
          solution: [`Pairing *“${halfPair.a}”* and *“${halfPair.b}”* uses **half-rhyme (pararhyme)** to evoke bleak dissonance.`],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(2),
        () => ({
          prompt: `${lead}\n*“Low, slow moans rolled over the cold stone road near ${setting}.”* Name the device repeating the long internal ` + "`o`" + ` vowel sound:`,
          answer: { type: "text", accept: ["assonance"], display: "Assonance" },
          hint: "Nine-letter term for repeated internal *vowel* sounds.",
          traps: [{ spec: { type: "text", accept: ["sibilance", "alliteration"] }, feedback: "Those repeat consonants; this term specifically names repeated internal vowels." }],
          solution: ["Repeated internal long `o` vowels create **assonance**, stretching out mournful grief."],
        }),
        () => ({
          prompt: `${lead}\n*“Fierce frost flayed their frozen fingers along ${setting}.”* Name the consonant family (` + "`f, v, th`" + `) evoking scraping wind friction:`,
          answer: { type: "text", accept: ["fricatives", "fricative", "fricative sounds", "fricative consonants"], display: "Fricatives" },
          hint: "Shares its root with 'friction' — starts with 'fric-'.",
          traps: [{ spec: { type: "text", accept: ["plosives", "plosive"] }, feedback: "Plosives block air before popping; 'f/v/th' force air through tight friction." }],
          solution: ["Repeated `f` consonants are **fricatives**, echoing biting winter wind."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
  {
    id: "power-conflict-poetry.comparative-craft",
    topicId: "power-conflict-poetry",
    title: "Comparative Essay Connectives & Structure",
    level: 3,
    guideRef: "comparative-poetry-essay",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const theme = rng.pick(["political tyranny", "war's human cost", "nature's dominance", "fractured identity", "haunting guilt", "hollow propaganda"]);
      const methodA = rng.pick(["rigid sonnet symmetry", "ironic dramatic monologue", "heavy plosives", "anaphora", "clipped caesura"]);
      const methodB = rng.pick(["fractured free verse", "bleak half-rhyme", "cascading enjambment", "sinister sibilance", "an altered cyclical ending"]);
      const simWord = rng.pick(["Similarly", "Likewise", "Equally", "Echoing this"]);
      const conWord = rng.pick(["Conversely", "Whereas", "By contrast", "Unlike Poet A"]);

      const poolT1: Array<() => DrillItem> = [
        () => ({
          prompt: `In a comparative paragraph on ${theme}, does **“${conWord}”** signal **similarity** or **contrast** when pivoting from ${methodA} to ${methodB}?`,
          answer: { type: "text", accept: ["contrast", "difference"], display: "Contrast" },
          hint: "Ask whether the phrase aligns both poets together or sets them against each other.",
          traps: [{ spec: { type: "text", accept: ["similarity", "similar"] }, feedback: `“${conWord}” introduces a sharp divergence, not a shared similarity.` }],
          solution: [`*“${conWord}”* signals **contrast** between the two poets' methods or tones.`],
        }),
        () => ({
          prompt: `In a comparative paragraph on ${theme}, does **“${simWord}”** signal **similarity** or **contrast** when linking ${methodA} and ${methodB}?`,
          answer: { type: "text", accept: ["similarity", "similar"], display: "Similarity" },
          hint: "Ask whether the marker builds a parallel bridge or a sharp opposition.",
          traps: [{ spec: { type: "text", accept: ["contrast", "difference"] }, feedback: `“${simWord}” highlights a parallel shared idea across both poems.` }],
          solution: [`*“${simWord}”* signals **similarity**, aligning both poets around a shared conceptual thread.`],
        }),
      ];

      const poolT2: Array<() => DrillItem> = [
        ...poolT1,
        () => ({
          prompt: `A student writes two full paragraphs on Poem A (${methodA}) about ${theme}, then two disconnected paragraphs on Poem B (${methodB}). Name this weak two-word essay layout:`,
          answer: { type: "text", accept: ["block essay", "a block essay", "block structure", "blocked essay"], display: "Block essay" },
          hint: "Stacking one giant 'block' of Poem A on top of Poem B ('b____ e____').",
          traps: [{ spec: { type: "text", accept: ["integrated essay", "woven essay"] }, feedback: "Integrated/woven essays combine both poems in *every* paragraph — the opposite of this weak layout." }],
          solution: ["Separating Poem A and Poem B into separate halves creates a weak **block essay**."],
        }),
        () => ({
          prompt: `Give ONE crisp one-word **contrast connective** to complete this woven thesis on ${theme}: *“Both poets expose power's cost; ______, Poet A uses ${methodA} while Poet B relies on ${methodB}.”*`,
          answer: { type: "text", accept: ["however", "conversely", "whereas", "yet", "nevertheless"], display: "However (or Conversely / Whereas)" },
          hint: "Fits cleanly after a semicolon to pivot into contrast (e.g. 'h______' or 'c_________').",
          traps: [{ spec: { type: "text", accept: ["similarly", "likewise", "also"] }, feedback: "That connective signals similarity, whereas this sentence hinges on contrast." }],
          solution: ["Contrast pivots such as **however**, **conversely** or **whereas** turn a thesis into an active comparison."],
        }),
      ];

      const poolT3: Array<() => DrillItem> = [
        ...poolT2.slice(2),
        () => ({
          prompt: `A student writes *“Both poems are about ${theme} and both use ${methodA}.”* without analysing meaning or tone. Name this weak hyphenated exam habit:`,
          answer: { type: "text", accept: ["feature-spotting", "feature spotting", "technique-spotting", "technique spotting"], display: "Feature-spotting" },
          hint: "Ticking off literary terms without analysing effect ('f______-s_______').",
          traps: [{ spec: { type: "text", accept: ["block essay"] }, feedback: "Block essay is about paragraph layout; empty device-listing has its own hyphenated label." }],
          solution: ["Listing shared devices without analysing meaning or tone is **feature-spotting**."],
        }),
        () => ({
          prompt: `In the **C–A–P–B–S** woven comparative paragraph on ${theme} (${methodA} vs ${methodB}), what does the final letter **S** stand for (one word: pulling both insights together into an evaluative verdict)?`,
          answer: { type: "text", accept: ["synthesis", "synthesise", "synthesize"], display: "Synthesis" },
          hint: "Nine-letter academic noun starting with 'syn-' meaning weaving both sides into one concluding judgement.",
          traps: [{ spec: { type: "text", accept: ["summary", "simile"] }, feedback: "Never end with bare plot summary — end by weaving both poems' insights together into a sharp judgement." }],
          solution: ["In **C–A–P–B–S**, **S** stands for **synthesis** — judging why the similarity or divergence between both poems matters."],
        }),
      ];

      const bank = tier === 1 ? poolT1 : tier === 2 ? poolT2 : poolT3;
      return rng.pick(bank)();
    },
  },
];
