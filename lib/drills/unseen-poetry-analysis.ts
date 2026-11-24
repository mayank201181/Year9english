import type { Drill, DrillItem, Rng } from "./types.ts";

const SETTINGS = [
  "the harbour wall",
  "the attic window",
  "the winter orchard",
  "the quiet railway platform",
  "the empty schoolyard",
  "the coastal lighthouse",
  "the monsoon courtyard",
  "the shuttered library",
] as const;

const OBJECTS = [
  "a spare brass key",
  "a cracked pocket watch",
  "a folded winter coat",
  "a chipped blue bowl",
  "a tilted bicycle bell",
  "a damp cotton umbrella",
  "a faded wooden oar",
  "an empty iron lantern",
] as const;

const SEASONS = ["autumn", "winter", "April", "November", "dusk", "monsoon"] as const;

// ---------------------------------------------------------------------------
// Drill 1: 5-Minute Protocol & Tone/Volta Spotter (level 1)
// ---------------------------------------------------------------------------
function genProtocolVolta(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);
  const season = rng.pick(SEASONS);

  const pool1 = ["volta", "speaker", "title", "elegiac"] as const;
  const pool2 = ["volta", "speaker", "elegiac", "wistful", "sardonic"] as const;
  const pool3 = ["volta", "speaker", "elegiac", "wistful", "sardonic", "ambivalent"] as const;
  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "volta": {
      const pivot = rng.pick(["Yet", "Still", "But", "Until"]);
      const first = rng.pick([
        `For twenty ${season}s ${obj} gathered dust beside ${place},`,
        `Grey shadows settled cold across ${place} around ${obj},`,
        `We swore no memory survived the silent stones of ${place},`,
      ]);
      const second = rng.pick([
        `${pivot.toLowerCase()} tonight a warm lamp answers through the mist.`,
        `${pivot.toLowerCase()} pale green shoots keep lifting up the brick.`,
        `${pivot.toLowerCase()} still the quiet doorway holds our echoed laugh.`,
      ]);
      return {
        prompt: `Read this unseen couplet:\n*${first}*\n*${second}*\n\nWhat five-letter Italian literary term names the emotional turning point signalled by *"${pivot.toLowerCase()}"*?`,
        answer: { type: "text", accept: ["volta", "the volta", "a volta"], display: "volta" },
        hint: "Italian for 'turn' — marks the pivotal tonal or logical shift.",
        traps: [
          { spec: { type: "text", accept: ["caesura"] }, feedback: "Caesura is a punctuation break inside a line; the emotional turning point of a poem is a volta." },
        ],
        solution: [
          `The shift launched by *"${pivot.toLowerCase()}"* pivots mood from stillness to warmth or resilience.`,
          "This turning point is called the **volta**.",
        ],
      };
    }
    case "speaker": {
      const role = rng.pick([
        "an elderly clockmaker",
        "a lighthouse keeper",
        "a homesick commuter",
        "a retired shipbuilder",
        "a child leaving primary school",
      ]);
      return {
        prompt: `An unseen exam poem is written in the first person ("I") from the perspective of ${role} standing by ${place} holding ${obj}.\n\nIn top-band essays, what term should you use for this crafted voice inside the poem (rather than assuming it is the poet)?`,
        answer: { type: "text", accept: ["speaker", "the speaker", "persona", "the persona", "poetic voice"], display: "speaker" },
        hint: "Say 'the ___ confesses', while 'the poet crafts...' (7-letter word starting with 's' or 'p').",
        traps: [
          { spec: { type: "text", accept: ["poet", "author"] }, feedback: "The poet is the writer crafting techniques; distinguish the poet from the crafted voice *inside* the poem." },
        ],
        solution: [
          "Refer to the first-person voice inside an unseen poem as the **speaker** (or *persona*).",
        ],
      };
    }
    case "title": {
      const titles = [
        `Before the ${season.charAt(0).toUpperCase() + season.slice(1)} Tide`,
        `Leaving ${place.replace(/^the /, "The ")}`,
        `Notes Found Inside ${obj.replace(/^an? /, "A ")}`,
      ];
      const t = rng.pick(titles);
      return {
        prompt: `You turn over the Year 9 unseen poetry exam paper and see *"${t}"* printed above line 1.\n\nIn the 5-Minute Protocol (**T–L–S–V–T**), what does the very first **T** remind you to interrogate before reading line 1?`,
        answer: { type: "text", accept: ["title", "the title", "title clues"], display: "Title" },
        hint: "The very first clue sitting directly above the opening stanza.",
        traps: [
          { spec: { type: "text", accept: ["theme", "tone"] }, feedback: "Tone and Theme come later in T-L-S-V-T; the first T examines the heading above line 1." },
        ],
        solution: [
          "Minute 1 begins with **Title** clues, which frame expectation and often echo or clash ironically with the closing line.",
        ],
      };
    }
    case "elegiac": {
      const line = rng.pick([
        `I touch ${obj} beside ${place}, mourning gently what ${season} carried past reach.`,
        `Soft dusk gathers over ${place}, where we honour quiet footprints left behind in ${season}.`,
        `By ${place}, ${obj} remains as a tender, sorrowful tribute to voices gone silent.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${line}*\n\nWhat seven-letter exam-grade tone adjective (derived from *elegy*, a poem of mourning) describes a mournful, tender, reflective tone?`,
        answer: { type: "text", accept: ["elegiac"], display: "elegiac" },
        hint: "Built directly from the word 'elegy' — far sharper than just writing 'sad'.",
        traps: [
          { spec: { type: "text", accept: ["sardonic"] }, feedback: "Sardonic means grimly mocking; tender mourning derived from 'elegy' is elegiac." },
        ],
        solution: [
          "A tender, mournful tone honouring loss is **elegiac**.",
        ],
      };
    }
    case "wistful": {
      const line = rng.pick([
        `Looking back at ${place}, I hold ${obj} and long quietly for those bright, vanished afternoons of ${season}.`,
        `How lightly we once laughed by ${place}, never guessing how soon ${obj} would be all that stayed.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${line}*\n\nWhat seven-letter tone adjective (starting with *w*) describes gentle, bittersweet longing for something fondly remembered yet out of reach?`,
        answer: { type: "text", accept: ["wistful"], display: "wistful" },
        hint: "Seven letters starting with 'wist-' — far more nuanced than 'sad'.",
        traps: [
          { spec: { type: "text", accept: ["defiant"] }, feedback: "Defiant shows fierce resistance; gentle, yearning nostalgia is wistful." },
        ],
        solution: [
          "Gentle, bittersweet longing for something cherished and distant is a **wistful** tone.",
        ],
      };
    }
    case "sardonic": {
      const line = rng.pick([
        `"How generous of the council," I smile grimly beside ${place}, "to leave us ${obj} while demolishing the street."`,
        `Standing in ${season} rain at ${place}, the speaker dryly thanks the marble statue for keeping dry beneath its roof.`,
      ]);
      return {
        prompt: `Read this unseen poetic moment:\n*${line}*\n\nWhat eight-letter tone adjective (starting with *s*) describes grimly mocking, bitter, cynical irony?`,
        answer: { type: "text", accept: ["sardonic"], display: "sardonic" },
        hint: "Starts with 'sard-' — stronger and darker than light teasing.",
        traps: [
          { spec: { type: "text", accept: ["reverent"] }, feedback: "Reverent shows deep respectful awe; bitter, mocking irony is sardonic." },
        ],
        solution: [
          "Bitter, grimly mocking irony is a **sardonic** tone.",
        ],
      };
    }
    default: {
      const line = rng.pick([
        `Leaving ${place} with ${obj}, I feel half eager for open roads, half reluctant to shut the gate.`,
        `In ${season}, the speaker both welcomes the bright freedom beyond ${place} and aches for the familiar room behind.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${line}*\n\nWhat ten-letter tone adjective (meaning having strongly mixed, conflicting emotions at once) best upgrades "happy and sad"?`,
        answer: { type: "text", accept: ["ambivalent"], display: "ambivalent" },
        hint: "Prefix 'ambi-' (both ways) + '-valent' (strength/feeling).",
        traps: [
          { spec: { type: "text", accept: ["resigned"] }, feedback: "Resigned accepts defeat passively; feeling two opposing pulls equally at once is ambivalent." },
        ],
        solution: [
          "Simultaneously pulled between opposing feelings (*half eager / half reluctant*) creates an **ambivalent** tone.",
        ],
      };
    }
  }
}

// ---------------------------------------------------------------------------
// Drill 2: Imagery, Connotation & Sound Decoder (level 1)
// ---------------------------------------------------------------------------
function genImagerySound(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);
  const season = rng.pick(SEASONS);

  const pool1 = ["connotation", "denotation", "sibilance", "personification"] as const;
  const pool2 = ["vehicle", "tenor", "plosives", "sibilance", "oxymoron"] as const;
  const pool3 = ["vehicle", "plosives", "assonance", "oxymoron", "synaesthesia", "semantic-field"] as const;
  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "connotation": {
      const word = rng.pick(["museum", "rusted", "amber", "iron", "frost", "harbour"]);
      return {
        prompt: `In an unseen poem set at ${place}, you zoom into the single word *"${word}"* and unpack its hidden emotional, sensory, and symbolic associations beyond its dictionary meaning.\n\nWhat literary term names these implied associations?`,
        answer: { type: "text", accept: ["connotation", "connotations"], display: "connotation" },
        hint: "Paired with 'denotation' — eleven-letter noun starting with 'conn-'.",
        traps: [
          { spec: { type: "text", accept: ["denotation", "denotations"] }, feedback: "Denotation is the plain dictionary meaning; implied emotional associations are connotations." },
        ],
        solution: [
          `Unpacking the implied emotional and cultural resonance of *"${word}"* analyses its **connotations**.`,
        ],
      };
    }
    case "denotation": {
      const word = rng.pick(["lantern", "granite", "threshold", "anchor", "hearth"]);
      return {
        prompt: `Before exploring figurative resonance at ${place}, you check the plain, literal dictionary definition of the word *"${word}"*.\n\nWhat literary term names a word's plain literal meaning?`,
        answer: { type: "text", accept: ["denotation", "denotations"], display: "denotation" },
        hint: "Starts with 'd' — just like 'dictionary' meaning.",
        traps: [
          { spec: { type: "text", accept: ["connotation", "connotations"] }, feedback: "Connotation covers implied emotional associations; the plain literal definition is denotation." },
        ],
        solution: [
          "A word's plain, literal dictionary meaning is its **denotation**.",
        ],
      };
    }
    case "sibilance": {
      const line = rng.pick([
        `Soft silver shadows slip silently past ${place} in ${season}.`,
        `Slow sea-spray settles smoothly across ${obj} beside ${place}.`,
        `Stillness sighs softly where the sweet grass sleeps by ${place}.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${line}*\n\nName the specific sound device repeating /s/ sounds across the line.`,
        answer: { type: "text", accept: ["sibilance", "sibilant"], display: "sibilance" },
        hint: "Nine-letter specific sound term for repeated /s/ and /sh/ sounds.",
        traps: [
          { spec: { type: "text", accept: ["plosives", "plosive"] }, feedback: "Plosives are hard percussive bursts (/p, b, t, d, k, g/); repeated /s/ sounds are sibilance." },
        ],
        solution: [
          "Repeating hushed `/s/` sounds is **sibilance** — always link it to the poem's real mood (soothing here, sinister only when context warrants it).",
        ],
      };
    }
    case "plosives": {
      const line = rng.pick([
        `Black breakers batter buckled beams beside ${place}.`,
        `Brittle bricks crack beneath blunt boots across ${place}.`,
        `Bold drops drum darkly on the battered tin above ${place}.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${line}*\n\nWhat phonetic term names harsh, percussive consonant bursts (/b/, /d/, /k/, /t/) that mimic physical strikes?`,
        answer: { type: "text", accept: ["plosive", "plosives", "plosive sounds", "plosive alliteration"], display: "plosives" },
        hint: "Related to 'explosive' bursts of stopped air (/p, b, t, d, k, g/).",
        traps: [
          { spec: { type: "text", accept: ["sibilance", "sibilant"] }, feedback: "Sibilance repeats soft/hissing /s/ sounds; hard percussive bursts are plosives." },
        ],
        solution: [
          "Harsh percussive `/b/`, `/d/`, `/k/`, `/t/` bursts are **plosives**, aurally enacting physical force.",
        ],
      };
    }
    case "personification": {
      const line = rng.pick([
        `Salt wind shoulders through the shuttered doorway of ${place} and claims ${obj}.`,
        `Winter kneels patiently beside ${place}, refusing to release ${obj}.`,
        `The old stone wall around ${place} remembers every hurried footstep from ${season}.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${line}*\n\nName the figurative technique granting human actions, posture, or memory to nature or an inanimate object.`,
        answer: { type: "text", accept: ["personification"], display: "personification" },
        hint: "Built on the word 'person' — attributing human agency to non-human things.",
        traps: [
          { spec: { type: "text", accept: ["simile"] }, feedback: "Similes compare with 'like' or 'as'; directly giving human agency to wind, winter, or stone is personification." },
        ],
        solution: [
          "Granting human intention, posture, or memory to inanimate elements is **personification**.",
        ],
      };
    }
    case "vehicle": {
      const met = rng.pick([
        { tenor: "the empty kitchen table", vehicle: "a dry harbour" },
        { tenor: "the silent bedroom", vehicle: "a hushed museum" },
        { tenor: "the evening mist", vehicle: "a woollen bandage" },
        { tenor: "the winter street", vehicle: "a bleached spine" },
      ]);
      return {
        prompt: `In an unseen poem at ${place}, a metaphor calls ${met.tenor} *"${met.vehicle}"*.\n\nIn metaphor analysis, ${met.tenor} is the **Tenor**. What is the technical term for the borrowed image (*"${met.vehicle}"*) whose literal qualities we unpack?`,
        answer: { type: "text", accept: ["vehicle", "the vehicle"], display: "vehicle" },
        hint: "Seven-letter term meaning 'carrier' — paired with Tenor.",
        traps: [
          { spec: { type: "text", accept: ["tenor"] }, feedback: "The Tenor is the real subject; the borrowed figurative image carrying new associations is the Vehicle." },
        ],
        solution: [
          `The borrowed image (*"${met.vehicle}"*) is the **Vehicle**; listing 3 literal qualities of the Vehicle unlocks unfamiliar metaphors.`,
        ],
      };
    }
    case "tenor": {
      const met = rng.pick([
        { tenor: "the abandoned pier", vehicle: "a rusted skeleton" },
        { tenor: "the belated apology", vehicle: "late frost" },
        { tenor: "grief", vehicle: "an uninvited tenant" },
      ]);
      return {
        prompt: `In an unseen poem set near ${place}, a metaphor compares ${met.tenor} to *"${met.vehicle}"*.\n\n*"${met.vehicle}"* is the **Vehicle**. What five-letter technical term names the real underlying subject (${met.tenor})?`,
        answer: { type: "text", accept: ["tenor", "the tenor"], display: "tenor" },
        hint: "Five-letter partner term paired with 'Vehicle'.",
        traps: [
          { spec: { type: "text", accept: ["vehicle"] }, feedback: "The Vehicle is the figurative image; the underlying literal subject being illuminated is the Tenor." },
        ],
        solution: [
          `The underlying real subject (*${met.tenor}*) is the **Tenor**, illuminated by the qualities of the Vehicle.`,
        ],
      };
    }
    case "oxymoron": {
      const pair = rng.pick(["bright ache", "velvet crust", "iron grace", "frozen fire", "bitter sweetness", "loud silence"]);
      return {
        prompt: `Beside ${place} in ${season}, the speaker describes ${obj} with the compressed, contradictory phrase *"${pair}"*.\n\nWhat eight-letter literary term names placing two directly opposing words immediately side by side?`,
        answer: { type: "text", accept: ["oxymoron", "an oxymoron"], display: "oxymoron" },
        hint: "Greek for 'sharp-dull' — two contradictory words placed directly adjacent.",
        traps: [
          { spec: { type: "text", accept: ["simile"] }, feedback: "Similes compare with 'like' or 'as'; fusing two opposite words side by side is an oxymoron." },
        ],
        solution: [
          `Welding two direct opposites (*"${pair}"*) side by side creates an **oxymoron**, packing bittersweet ambiguity into two words.`,
        ],
      };
    }
    case "assonance": {
      const line = rng.pick([
        `Slow low boats groan home past ${place}.`,
        `Cold gold stones hold old echoes beside ${place}.`,
        `Pale rain fades late across the grey lane near ${place}.`,
      ]);
      return {
        prompt: `Read this unseen line aloud:\n*${line}*\n\nName the sound device repeating matching **internal vowel sounds** across neighbouring words.`,
        answer: { type: "text", accept: ["assonance"], display: "assonance" },
        hint: "Nine-letter term starting with 'ass-' for echoed internal vowels.",
        traps: [
          { spec: { type: "text", accept: ["alliteration"] }, feedback: "Alliteration repeats initial consonants; echoing internal *vowel* sounds is assonance." },
        ],
        solution: [
          "Echoing identical internal vowel sounds is **assonance**, shaping musical pace and emotional resonance.",
        ],
      };
    }
    case "synaesthesia": {
      const img = rng.pick([
        "a warm velvet chime",
        "the bright silver call",
        "a bitter blue wind",
        "the sweet amber hum",
      ]);
      return {
        prompt: `Near ${place} during ${season}, the poet writes of *"${img}"* drifting past ${obj}.\n\nWhat literary term names blending two different senses (such as touch or colour applied to sound) inside one image?`,
        answer: { type: "text", accept: ["synaesthesia", "synesthesia"], display: "synaesthesia" },
        hint: "Greek 'syn-' (together) + 'aisthesis' (sensation) — crossing two senses in one phrase.",
        traps: [
          { spec: { type: "text", accept: ["onomatopoeia"] }, feedback: "Onomatopoeia imitates a sound word ('buzz', 'clang'); fusing two distinct senses is synaesthesia." },
        ],
        solution: [
          `Crossing two sensory domains (*"${img}"*) creates **synaesthesia**, deepening atmospheric immersion.`,
        ],
      };
    }
    default: {
      const cluster = rng.pick([
        { words: "padlock, bars, bolted, caged", domain: "confinement" },
        { words: "marching, uniform, truce, garrison", domain: "warfare" },
        { words: "candle, hearth, shawl, kettle", domain: "domestic warmth" },
        { words: "peeling, rusted, splintered, bleached", domain: "decay" },
      ]);
      return {
        prompt: `Across a stanza set at ${place}, the poet deliberately weaves the cluster *${cluster.words}* (all evoking ${cluster.domain}).\n\nWhat two-word term names a group of words united by one thematic domain?`,
        answer: { type: "text", accept: ["semantic field", "lexical field", "a semantic field", "a lexical field"], display: "semantic field" },
        hint: "Two words: '___ field' describing thematically linked vocabulary.",
        traps: [
          { spec: { type: "text", accept: ["alliteration"] }, feedback: "Alliteration repeats initial sounds; grouping vocabulary around a shared concept is a semantic field." },
        ],
        solution: [
          `Weaving vocabulary from one domain (*${cluster.domain}*) creates a **semantic field** (or *lexical field*).`,
        ],
      };
    }
  }
}

// ---------------------------------------------------------------------------
// Drill 3: Poetic Structure & Form Lab (level 2)
// ---------------------------------------------------------------------------
function genStructureForm(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);
  const season = rng.pick(SEASONS);

  const pool1 = ["enjambment", "caesura", "end-stopped", "quatrain", "couplet"] as const;
  const pool2 = ["enjambment", "caesura", "half-rhyme", "refrain", "free-verse"] as const;
  const pool3 = ["half-rhyme", "monostich", "antithesis", "altered-refrain", "enjambment", "caesura"] as const;
  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "enjambment": {
      const lines = rng.pick([
        `The rising tide slips past ${place}\nand lifts ${obj} across the stone\nbefore the sleepy shutters open.`,
        `She climbed the quiet step beside ${place}\nand let the ${season} wind unfold\nher hurried coat like open wings.`,
        `Rain spills along the narrow eaves of ${place}\nuntil the dark lane mirrors every lamp.`,
      ]);
      return {
        prompt: `Read these unseen lines:\n*${lines}*\n\nName the structural technique of running a sentence across line breaks with zero terminal punctuation.`,
        answer: { type: "text", accept: ["enjambment", "enjambement"], display: "enjambment" },
        hint: "French for 'striding over' — starts with 'enj-'.",
        traps: [
          { spec: { type: "text", accept: ["caesura"] }, feedback: "Caesura pauses *inside* a line; spilling over the end of a line without punctuation is enjambment." },
        ],
        solution: [
          "Running grammar unchecked past line breaks is **enjambment**, physically enacting overflow or unbroken movement.",
        ],
      };
    }
    case "caesura": {
      const line = rng.pick([
        `She locked ${obj} away — then stood in ${place} alone.`,
        `Boots halted. Lanterns died. Nothing moved in ${place}.`,
        `I smiled across the table; then the glass fell silent.`,
      ]);
      return {
        prompt: `Read this unseen poetic line:\n*${line}*\n\nWhat seven-letter structural term names a deliberate punctuation pause **inside** the middle of a poetic line?`,
        answer: { type: "text", accept: ["caesura", "medial caesura", "a caesura"], display: "caesura" },
        hint: "Latin for 'cutting' — a mid-line break (dash, full stop, or semicolon).",
        traps: [
          { spec: { type: "text", accept: ["enjambment", "enjambement"] }, feedback: "Enjambment flows past a line ending without punctuation; a strong pause *mid-line* is a caesura." },
        ],
        solution: [
          "A deliberate punctuation break mid-line is a **caesura**, here visually fracturing calm motion or heightening shock.",
        ],
      };
    }
    case "end-stopped": {
      const lines = rng.pick([
        `She locked the shutter by ${place}.\nShe set ${obj} upon the shelf.\nShe turned the lamp down in the dark.`,
        `The frost closed tight around ${place}.\nNo footstep crossed the ${season} lane.\nThe clock ticked once and held its breath.`,
      ]);
      return {
        prompt: `Read these tightly controlled lines:\n*${lines}*\n\nWhat term describes lines closed cleanly by terminal punctuation at the right-hand edge (the opposite of enjambment)?`,
        answer: { type: "text", accept: ["end-stopped", "end stopped", "end-stopped lines", "end-stopped line", "end stopped lines"], display: "end-stopped lines" },
        hint: "Two hyphenated words: each line stops cleanly at its right-hand end.",
        traps: [
          { spec: { type: "text", accept: ["enjambment", "enjambement"] }, feedback: "Enjambment has no end punctuation; lines closed neatly with full stops at every edge are end-stopped." },
        ],
        solution: [
          "Lines closed neatly by punctuation at their right edge are **end-stopped lines**, conveying control, finality, or containment.",
        ],
      };
    }
    case "quatrain": {
      return {
        prompt: `An unseen poem about ${place} in ${season} is organised into three neat **four-line stanzas**, each sealing ${obj} inside tidy walls.\n\nWhat single poetic term names a four-line stanza?`,
        answer: { type: "text", accept: ["quatrain", "a quatrain"], display: "quatrain" },
        hint: "From French 'quatre' (four) — eight-letter stanza noun.",
        traps: [
          { spec: { type: "text", accept: ["couplet", "tercet"] }, feedback: "A couplet has 2 lines and a tercet has 3; a 4-line stanza is a quatrain." },
        ],
        solution: [
          "A four-line stanza is a **quatrain**.",
        ],
      };
    }
    case "couplet": {
      return {
        prompt: `After twelve unrhymed lines describing ${place} in ${season}, the poem closes with a tight **two-line rhyming pair** about ${obj} that snaps the ending shut.\n\nWhat poetic term names a pair of two lines?`,
        answer: { type: "text", accept: ["couplet", "a couplet", "rhyming couplet"], display: "couplet" },
        hint: "Seven-letter stanza term derived from 'couple' (two).",
        traps: [
          { spec: { type: "text", accept: ["quatrain"] }, feedback: "A quatrain has four lines; a pair of two lines is a couplet." },
        ],
        solution: [
          "A pair of two lines (especially rhyming to lock an ending shut) is a **couplet** (or *rhyming couplet*).",
        ],
      };
    }
    case "half-rhyme": {
      const pair = rng.pick([
        { a: "home", b: "harm" },
        { a: "warm", b: "worn" },
        { a: "stone", b: "stain" },
        { a: "ground", b: "groaned" },
        { a: "light", b: "late" },
      ]);
      return {
        prompt: `In an unsettling unseen stanza set at ${place} in ${season}, lines 2 and 4 end on *"${pair.a}"* and *"${pair.b}"* — echoing consonants while deliberately missing a tidy vowel chime.\n\nName this jarring rhyme device.`,
        answer: { type: "text", accept: ["half-rhyme", "half rhyme", "slant rhyme", "near rhyme", "pararhyme"], display: "half-rhyme" },
        hint: "Also called 'slant rhyme' or 'near rhyme' — refuses harmonious closure.",
        traps: [
          { spec: { type: "text", accept: ["full rhyme", "perfect rhyme"] }, feedback: "Full rhyme chimes identically on the vowel; missing the exact chime creates half-rhyme (slant rhyme)." },
        ],
        solution: [
          `Pairing *"${pair.a}"* with *"${pair.b}"* is **half-rhyme** (slant rhyme), creating subtle acoustic discord.`,
        ],
      };
    }
    case "refrain": {
      const chorus = rng.pick([
        `Leave the lamp lit beside ${place}.`,
        `Hold fast to ${obj} before ${season} turns.`,
        `Listen once more to the quiet rain on ${place}.`,
      ]);
      return {
        prompt: `At the end of every stanza, the poet repeats the haunting line:\n*"${chorus}"*\n\nWhat seven-letter poetic term names a line or phrase repeated at regular intervals across a poem?`,
        answer: { type: "text", accept: ["refrain", "a refrain"], display: "refrain" },
        hint: "Like a song's chorus — seven-letter noun starting with 'ref-'.",
        traps: [
          { spec: { type: "text", accept: ["volta"] }, feedback: "A volta is a turning point; a repeated line echoing across stanzas is a refrain." },
        ],
        solution: [
          "A line echoed across intervals of a poem is a **refrain**.",
        ],
      };
    }
    case "free-verse": {
      return {
        prompt: `An unseen exam poem set at ${place} has **no fixed rhyme scheme** and **no regular metrical beat**, shaping emotion through line breaks, white space, and natural cadence around ${obj}.\n\nWhat two-word poetic form is this?`,
        answer: { type: "text", accept: ["free verse"], display: "free verse" },
        hint: "Two words: '___ verse' (not blank verse, which keeps strict iambic pentameter!).",
        traps: [
          { spec: { type: "text", accept: ["blank verse"] }, feedback: "Blank verse keeps strict iambic pentameter; poetry without rhyme OR fixed metre is free verse." },
        ],
        solution: [
          "Poetry without fixed rhyme or regular metre is **free verse** — still rich in structural choices like white space, enjambment, and caesura.",
        ],
      };
    }
    case "monostich": {
      const lone = rng.pick([
        `Only ${obj} stays beside ${place} tonight.`,
        `Silent.`,
        `Nobody answers from ${place} this ${season}.`,
      ]);
      return {
        prompt: `After three dense quatrains, an unseen poem closes with one isolated single-line stanza surrounded by blank margin:\n*"${lone}"*\n\nWhat term names an isolated one-line stanza?`,
        answer: {
          type: "text",
          accept: ["monostich", "single-line stanza", "single line stanza", "one-line stanza", "one line stanza"],
          display: "monostich",
        },
        hint: "Greek 'mono-' (one) + '-stich' (line) — or simply 'single-line stanza'.",
        traps: [
          { spec: { type: "text", accept: ["couplet"] }, feedback: "A couplet has two lines; a lone single-line stanza is a monostich (or single-line stanza)." },
        ],
        solution: [
          "An isolated single-line stanza is a **monostich** (or *single-line stanza*), using white space visually to amplify solitude or finality.",
        ],
      };
    }
    case "antithesis": {
      const pair = rng.pick([
        `To east, bright neon towers climb in pride; / to west, dark tides erase ${place}.`,
        `By day, hard orders govern ${place}; / by night, soft memory guards ${obj}.`,
        `In summer, loud voices filled ${place}; / in ${season}, lone footsteps echo past the door.`,
      ]);
      return {
        prompt: `Read this unseen poetic pair:\n*${pair}*\n\nWhat ten-letter rhetorical device places directly opposing ideas inside balanced, grammatically mirrored halves?`,
        answer: { type: "text", accept: ["antithesis"], display: "antithesis" },
        hint: "Starts with 'anti-' (setting opposites cleanly against each other in mirrored clauses).",
        traps: [
          { spec: { type: "text", accept: ["oxymoron"] }, feedback: "An oxymoron puts two opposite words directly touching ('bright ache'); mirrored opposing clauses form antithesis." },
        ],
        solution: [
          "Placing sharply opposing ideas inside mirrored parallel clauses is **antithesis**.",
        ],
      };
    }
    default: {
      return {
        prompt: `Stanza 1 ends with *"We watched the ${season} tide beside ${place}."* The closing stanza echoes it with one piercing shift: *"I watch the ${season} tide beside ${place} alone."*\n\nWhat two-word structural device repeats a recurring line with one decisive change to crystallise loss?`,
        answer: { type: "text", accept: ["altered refrain", "an altered refrain", "refrain"], display: "altered refrain" },
        hint: "Two words: a changed ___ (from 'refrain').",
        traps: [
          { spec: { type: "text", accept: ["enjambment"] }, feedback: "Enjambment deals with unpunctuated line breaks; echoing a recurring line with one meaningful change is an altered refrain." },
        ],
        solution: [
          "Echoing a recurring line while shifting pronoun and tense (*We watched → I watch... alone*) is an **altered refrain**.",
        ],
      };
    }
  }
}

// ---------------------------------------------------------------------------
// Drill 4: Timed Exam Essay Craft & Self-Audit (level 3)
// ---------------------------------------------------------------------------
function genExamCraft(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);
  const season = rng.pick(SEASONS);

  const pool1 = ["feature-spotting", "conceptual-thesis", "body-count", "stanza-count"] as const;
  const pool2 = ["feature-spotting", "conceptual-thesis", "single-word-zoom", "stanza-count", "ambiguity"] as const;
  const pool3 = ["feature-spotting", "conceptual-thesis", "ambiguity", "single-word-zoom", "stanza-count"] as const;
  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "feature-spotting": {
      const bad = rng.pick([
        `"The poet uses a metaphor about ${obj}, enjambment in line 3, and alliteration to make the poem stand out and flow."`,
        `"In stanza two at ${place}, there is caesura, sibilance, and a simile, which makes the reader want to read on."`,
        `"The poet uses plosives and a quatrain about ${season} very effectively to paint a picture in our minds."`,
      ]);
      return {
        prompt: `A Year 9 student writes:\n${bad}\n\nWhat exam trap — naming devices without unpacking their specific connotations, tone, or meaning — is holding this response back?`,
        answer: {
          type: "text",
          accept: ["feature-spotting", "feature spotting", "technique-spotting", "technique spotting"],
          display: "feature-spotting",
        },
        hint: "Two hyphenated words: merely spotting literary features without explaining why they matter.",
        traps: [
          { spec: { type: "text", accept: ["single-word zoom", "word zoom"] }, feedback: "Single-word zoom is a strength; naming terms without explaining meaning is feature-spotting." },
        ],
        solution: [
          "Listing devices paired with generic filler (*'flow'*, *'stand out'*, *'read on'*) is **feature-spotting** (or *technique-spotting*).",
        ],
      };
    }
    case "conceptual-thesis": {
      const good = rng.pick([
        `"Through ${obj} left at ${place}, the poet portrays memory as a stubborn domestic ritual resisting ${season}'s erasure."`,
        `"Tracing a shift from guarded solitude at ${place} to fragile solidarity, the poet suggests crisis strips away urban anonymity."`,
        `"Framing ${obj} as both treasure and burden, the poet explores how leaving childhood home feels liberating yet quietly painful."`,
      ]);
      return {
        prompt: `A top-band Year 9 unseen essay opens with:\n${good}\n\nWhat two-word term describes this concise opening argument stating the poem's big human idea and arc (instead of listing techniques)?`,
        answer: { type: "text", accept: ["conceptual thesis", "thesis statement", "a conceptual thesis"], display: "conceptual thesis" },
        hint: "Two words: '___ thesis' (driven by an overarching concept).",
        traps: [
          { spec: { type: "text", accept: ["plot summary", "feature-spotting"] }, feedback: "Plot summary retells events; an insightful opening argument framing the poem's big idea is a conceptual thesis." },
        ],
        solution: [
          "Opening with a big-idea claim and tonal arc rather than a technique list creates a **conceptual thesis**.",
        ],
      };
    }
    case "body-count": {
      const mins = rng.pick([35, 40, 45]);
      return {
        prompt: `You have ${mins} minutes to write an unseen poetry essay on a poem set at ${place} during ${season}.\n\nFollowing our top-band blueprint (**Opening → Volta → Ending**), how many **integrated body paragraphs** should you plan between your conceptual intro and closing judgement?`,
        answer: { type: "number", value: 3, display: "3" },
        hint: "One paragraph for each structural beat: Opening, Volta, and Ending.",
        traps: [
          { spec: { type: "number", value: 1 }, feedback: "One body paragraph cannot trace Opening → Volta → Ending cleanly — plan 3 focused paragraphs!" },
        ],
        solution: [
          "Plan **3** deeply unpacked, integrated body paragraphs (Opening → Volta → Ending) so language and structure stay balanced across the whole poem.",
        ],
      };
    }
    case "stanza-count": {
      const form = rng.pick([
        { name: "couplet", lines: 2 },
        { name: "tercet", lines: 3 },
        { name: "quatrain", lines: 4 },
        { name: "sestet", lines: 6 },
        { name: "octave", lines: 8 },
      ]);
      return {
        prompt: `While annotating structure on an unseen poem about ${obj} at ${place}, you notice the poet shifts into a **${form.name}**.\n\nExactly how many lines make up one **${form.name}**?`,
        answer: { type: "number", value: form.lines, display: String(form.lines) },
        hint: `Recall standard stanza sizes: couplet (2), tercet (3), quatrain (4), sestet (6), octave (8).`,
        traps: [
          { spec: { type: "number", value: form.lines + 1 }, feedback: `Close — double-check the exact line count of a ${form.name}!` },
        ],
        solution: [
          `A **${form.name}** contains exactly **${form.lines}** lines.`,
        ],
      };
    }
    case "single-word-zoom": {
      const word = rng.pick(["stitched", "perches", "uncoils", "shoulders", "bleaches", "swallowed"]);
      return {
        prompt: `In a WHAT–HOW–WHY paragraph on an unseen poem about ${place}, you embed the one-word quotation *"${word}"* and unpack its exact tactile and emotional connotations.\n\nWhat analytical move is this called?`,
        answer: {
          type: "text",
          accept: ["single-word zoom", "single word zoom", "word-level zoom", "word level zoom", "word zoom", "micro-zoom", "micro zoom"],
          display: "single-word zoom",
        },
        hint: "Pinpointing one loaded word and unpacking its connotations (ends in 'zoom').",
        traps: [
          { spec: { type: "text", accept: ["plot summary"] }, feedback: "Plot summary narrates events; unpacking one charged word is single-word zoom." },
        ],
        solution: [
          `Focusing tightly on *"${word}"* to unpack connotations is **single-word zoom** (or *word-level zoom*).`,
        ],
      };
    }
    default: {
      const img = rng.pick([
        { phrase: "late snow", a: "hushed peace", b: "chilly numbness" },
        { phrase: "hushed museum", a: "loving reverence", b: "lifeless stillness" },
        { phrase: "burning porch light", a: "steadfast welcome", b: "exhausting ache" },
        { phrase: "quiet thief, quiet healer", a: "stealthy erasure", b: "soothing renewal" },
      ]);
      return {
        prompt: `When analysing *"${img.phrase}"* in an unseen poem at ${place}, you write: *"Arguably, this evokes ${img.a}, yet simultaneously hints at ${img.b}."*\n\nWhat literary quality (exploring two valid, layered meanings inside one image) are you demonstrating?`,
        answer: {
          type: "text",
          accept: ["ambiguity", "productive ambiguity", "layered ambiguity", "layered meaning", "double meaning"],
          display: "ambiguity",
        },
        hint: "Nine-letter noun (or 'productive ___') describing deliberate openness to two contrasting layers of meaning.",
        traps: [
          { spec: { type: "text", accept: ["denotation"] }, feedback: "Denotation gives one literal dictionary meaning; embracing two plausible layers is ambiguity." },
        ],
        solution: [
          `Weighing *${img.a}* alongside *${img.b}* with tentative verbs celebrates **ambiguity** (or *productive ambiguity*), a hallmark of top-band unseen essays.`,
        ],
      };
    }
  }
}

export const drills: Drill[] = [
  {
    id: "unseen-poetry-analysis.protocol-volta-spotter",
    topicId: "unseen-poetry-analysis",
    title: "5-Minute Protocol, Tone & Volta Spotter",
    level: 1,
    guideRef: "first-read-protocol",
    generate: genProtocolVolta,
  },
  {
    id: "unseen-poetry-analysis.imagery-sound-decoder",
    topicId: "unseen-poetry-analysis",
    title: "Imagery, Connotation & Sound Decoder",
    level: 1,
    guideRef: "decoding-imagery-ambiguity",
    generate: genImagerySound,
  },
  {
    id: "unseen-poetry-analysis.structure-form-lab",
    topicId: "unseen-poetry-analysis",
    title: "Poetic Form, Enjambment & Caesura Lab",
    level: 2,
    guideRef: "unseen-structure-form",
    generate: genStructureForm,
  },
  {
    id: "unseen-poetry-analysis.exam-essay-craft",
    topicId: "unseen-poetry-analysis",
    title: "Timed Exam Essay Craft & Self-Audit",
    level: 3,
    guideRef: "writing-high-band-unseen",
    generate: genExamCraft,
  },
];
