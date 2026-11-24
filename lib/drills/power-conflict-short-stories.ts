import type { Drill, DrillItem, Rng } from "./types.ts";

const NAMES_A = ["Mira", "Tariq", "Nadia", "Devon", "Saira", "Samir", "Elena", "Juno", "Priya", "Owen", "Farah", "Toma"] as const;
const AUTHORITIES = ["the warden", "Inspector Halim", "the magistrate", "the overseer", "the prefect", "the councilman", "the clerk", "the sergeant"] as const;
const SETTINGS = ["the courtyard", "the border post", "the archive hall", "the hearing room", "the harbour quay", "the ministry corridor", "the factory hall", "the square"] as const;
const OBJECTS = ["a brass key", "a rusted whistle", "a folded pamphlet", "an iron padlock", "a cracked pocket watch", "a silver compass", "a wax-sealed ledger", "a tin lantern"] as const;

// ---------------------------------------------------------------------------
// Drill 1: Short-Story Architecture Spotter (level 1)
// ---------------------------------------------------------------------------
function genArchitecture(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const hero = rng.pick(NAMES_A);
  const auth = rng.pick(AUTHORITIES);
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);

  const pool1 = ["in-media-res", "exposition", "climax", "denouement"] as const;
  const pool2 = ["in-media-res", "inciting-incident", "chekhov", "cyclical", "epiphany"] as const;
  const pool3 = ["chekhov", "cyclical", "epiphany", "dramatic-irony", "narrative-economy"] as const;

  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "in-media-res": {
      const cmd = rng.pick([
        `"Hand over ${obj} right now,"`,
        `"Step away from the gate,"`,
        `"Do not move another inch,"`,
        `"Empty your coat onto the table,"`,
      ]);
      return {
        prompt: `A short story opens on line one with:\n*${cmd} ${auth} ordered as ${hero} backed against the wall of ${place}.*\n\nName the Latin structural technique of starting straight inside the conflict without slow background setup.`,
        answer: { type: "text", accept: ["in media res", "in medias res"], display: "in media res" },
        hint: "A three-word Latin phrase meaning 'in the middle of things'.",
        traps: [
          { spec: { type: "text", accept: ["flashback"] }, feedback: "A flashback jumps backward from a narrative present; opening straight into action on line one is in media res." },
          { spec: { type: "text", accept: ["exposition"] }, feedback: "Exposition gives slow background setup; this line deliberately skips exposition." },
        ],
        solution: [
          "Opening directly mid-command without backstory drops the reader straight into high-stakes tension.",
          "This technique is **in media res** (also spelled *in medias res*).",
        ],
      };
    }
    case "exposition": {
      const years = rng.pick(["three", "five", "seven", "ten"]);
      return {
        prompt: `Paragraph one reads:\n*For ${years} years, ${place} had been ruled by strict curfews, and ${hero} worked quietly under ${auth} while keeping ${obj} hidden beneath the floorboards.*\n\nOn Freytag's Pyramid, which **opening stage** establishes setting, status quo, and background context?`,
        answer: { type: "text", accept: ["exposition", "the exposition"], display: "exposition" },
        hint: "Stage 1 of Freytag's Pyramid — before the inciting incident disrupts the balance.",
        traps: [
          { spec: { type: "text", accept: ["denouement", "resolution"] }, feedback: "Denouement is the final stage after the climax; this paragraph sets up initial background at the start." },
        ],
        solution: [
          "Establishing setting, duration (*for " + years + " years*), and initial power hierarchy is the **exposition**.",
        ],
      };
    }
    case "inciting-incident": {
      const event = rng.pick([
        `${auth} notices ${obj} sticking out of ${hero}'s satchel`,
        `a torn curfew notice appears pinned across ${place}`,
        `${hero} refuses an unlawful order from ${auth} in front of ${place}`,
        `${obj} vanishes overnight from ${auth}'s locked desk`,
      ]);
      return {
        prompt: `After a quiet opening paragraph establishing routine at ${place}, ${event}, shattering the fragile balance and launching the central conflict.\n\nName this specific stage of Freytag's Pyramid.`,
        answer: { type: "text", accept: ["inciting incident", "the inciting incident"], display: "inciting incident" },
        hint: "Two words: the trigger event that 'incites' (sparks) the main conflict into motion.",
        traps: [
          { spec: { type: "text", accept: ["climax"] }, feedback: "The climax is the late highest peak; the early trigger that disrupts initial balance is the inciting incident." },
        ],
        solution: [
          "The disruptive trigger that breaks initial equilibrium and starts rising action is the **inciting incident**.",
        ],
      };
    }
    case "climax": {
      const peak = rng.pick([
        `${hero} finally confronts ${auth} before the whole crowd and reveals ${obj}`,
        `${hero} chooses whether to destroy ${obj} or surrender to ${auth} at the locked exit of ${place}`,
        `the concealed alarm rings across ${place} just as ${hero} reaches the iron barrier`,
      ]);
      return {
        prompt: `Near the end of the story, tension hits its irreversible peak as ${peak}.\n\nWhich stage of Freytag's Pyramid names this highest turning point?`,
        answer: { type: "text", accept: ["climax", "the climax"], display: "climax" },
        hint: "Six-letter word for the apex of Freytag's Pyramid.",
        traps: [
          { spec: { type: "text", accept: ["rising action"] }, feedback: "Rising action leads upward toward the peak; name the irreversible peak itself." },
        ],
        solution: [
          "The irreversible peak of highest tension on Freytag's Pyramid is the **climax**.",
        ],
      };
    }
    case "denouement": {
      const aftermath = rng.pick([
        `After the confrontation, ${place} falls quiet as ${hero} walks alone past the silent gate, clutching ${obj}.`,
        `Once ${auth} departs ${place}, only a single crumpled pass remains fluttering beside the steps.`,
        `In the brief final lines after the arrest, ${hero}'s neighbours quietly hang lanterns in every window overlooking ${place}.`,
      ]);
      return {
        prompt: `Read this brief aftermath right after the climax:\n*${aftermath}*\n\nWhat French-derived term (or its English equivalent) names this **final stage** of Freytag's Pyramid?`,
        answer: { type: "text", accept: ["denouement", "dénouement", "resolution"], display: "denouement" },
        hint: "Stage 5 of Freytag's Pyramid — meaning 'untying the knot'.",
        traps: [
          { spec: { type: "text", accept: ["exposition"] }, feedback: "Exposition sits at the opening of the story, not the aftermath following the climax." },
        ],
        solution: [
          "The final stage following the climax is the **denouement** (or *resolution*).",
        ],
      };
    }
    case "chekhov": {
      const payoff = rng.pick([
        `unlocks the sealed archive to expose ${auth}'s fraud`,
        `signals the workers across ${place} to lay down their tools`,
        `becomes the decisive evidence that overturns ${auth}'s verdict`,
      ]);
      return {
        prompt: `In paragraph one, the narrator briefly mentions ${obj} resting beside the door of ${place}. At the climax, ${hero} uses that exact object and ${payoff}.\n\nName the two-word structural principle of planting an early object that must pay off later.`,
        answer: { type: "text", accept: ["chekhov's gun", "chekhovs gun", "chekov's gun", "chekovs gun"], display: "Chekhov's Gun" },
        hint: "Named after a Russian playwright: if a weapon hangs on the wall early on, it must fire later.",
        traps: [
          { spec: { type: "text", accept: ["pathetic fallacy"] }, feedback: "Pathetic fallacy links weather to mood; look for the structural rule named after a Russian writer." },
        ],
        solution: [
          "Planting a specific early detail (*" + obj + "*) so it triggers a decisive payoff at the climax exemplifies **Chekhov's Gun**.",
        ],
      };
    }
    case "cyclical": {
      const ritual = rng.pick([
        `polishing ${obj} outside ${place} while ${auth} watches from above`,
        `unlocking the iron railings of ${place} before dawn with cold hands`,
        `stamping grey ration slips beneath the ticking clock of ${place}`,
      ]);
      return {
        prompt: `A short story opens with ${hero} ${ritual}. On the final page, after ${hero} leaves, a brand-new newcomer begins ${ritual}.\n\nWhat two-word structural pattern does this mirrored ending create?`,
        answer: { type: "text", accept: ["cyclical structure", "circular structure", "cyclical ending", "circular ending", "cyclical"], display: "cyclical structure" },
        hint: "Think of a loop or circle returning to the opening motif.",
        traps: [
          { spec: { type: "text", accept: ["linear structure", "linear"] }, feedback: "Linear structure progresses forward without looping back; mirroring the opening creates a circular pattern." },
        ],
        solution: [
          "Echoing the exact opening ritual at the end builds a **cyclical structure**, implying systemic entrapment or repeating power.",
        ],
      };
    }
    case "epiphany": {
      const truth = rng.pick([
        `${obj} they risked everything to protect was actually an empty decoy all along`,
        `${auth}'s feared authority rested entirely on forged orders nobody had ever dared question`,
        `the anonymous informer inside ${place} had been their own trusted mentor`,
      ]);
      return {
        prompt: `In the closing lines at ${place}, ${hero} experiences a sudden, devastating moment of insight upon realising that ${truth}.\n\nWhat single literary noun names this sudden flash of life-altering realisation?`,
        answer: { type: "text", accept: ["epiphany", "an epiphany"], display: "epiphany" },
        hint: "Eight-letter word starting with 'e' for a sudden flash of moral or personal understanding.",
        traps: [
          { spec: { type: "text", accept: ["exposition"] }, feedback: "Exposition gives opening background; a sudden closing flash of realisation is an epiphany." },
        ],
        solution: [
          "A sudden flash of painful insight that reframes the entire narrative is an **epiphany**.",
        ],
      };
    }
    case "dramatic-irony": {
      return {
        prompt: `At ${place}, ${auth} proudly boasts that nobody could ever smuggle messages past the gate — while the reader already knows ${hero} slipped ${obj} into the outgoing courier cart five minutes earlier.\n\nWhat two-word literary device operates when the reader knows crucial truth that a confident character misses?`,
        answer: { type: "text", accept: ["dramatic irony"], display: "dramatic irony" },
        hint: "Two words: a form of irony shared between writer and reader at an unaware character's expense.",
        traps: [
          { spec: { type: "text", accept: ["verbal irony", "sarcasm"] }, feedback: "Verbal irony is saying the opposite of what you mean; when the reader knows a key fact the character does not, it is dramatic irony." },
        ],
        solution: [
          "When the audience knows hidden truth that punctures a character's boastful ignorance, the writer uses **dramatic irony**.",
        ],
      };
    }
    default: {
      return {
        prompt: `Rather than spending three pages explaining the city's laws, a writer uses just one sentence about ${obj} shaking inside ${hero}'s pocket as ${auth} strides across ${place} to establish fear, hierarchy, and theme at once.\n\nWhat two-word short-story craft discipline does this demonstrate?`,
        answer: { type: "text", accept: ["narrative economy", "economy of detail"], display: "narrative economy" },
        hint: "Two words: squeezing maximum meaning from every single detail with zero wasted prose.",
        traps: [
          { spec: { type: "text", accept: ["pathetic fallacy"] }, feedback: "Pathetic fallacy links weather to emotion; zero-waste storytelling craft is narrative economy." },
        ],
        solution: [
          "Making a single concrete image perform setting, characterisation, and thematic work simultaneously is **narrative economy**.",
        ],
      };
    }
  }
}

// ---------------------------------------------------------------------------
// Drill 2: Pacing & Syntax Spotter (level 1)
// ---------------------------------------------------------------------------
function genPacingSyntax(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const hero = rng.pick(NAMES_A);
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);

  const pool1 = ["parataxis", "minor-sentence", "hypotaxis", "dash"] as const;
  const pool2 = ["parataxis", "hypotaxis", "asyndeton", "polysyndeton", "minor-sentence"] as const;
  const pool3 = ["parataxis", "hypotaxis", "asyndeton", "polysyndeton", "anaphora", "withholding"] as const;

  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "parataxis": {
      const triad = rng.pick([
        `The lamp died. The latch clicked. ${hero} stopped breathing.`,
        `The whistle blew. Shutters banged shut. ${place.replace(/^the /, "The ")} emptied.`,
        `Boots halted outside. The handle turned. Nobody spoke.`,
        `The bell cut out. Shadows lengthened. ${hero} gripped ${obj}.`,
      ]);
      return {
        prompt: `Read this unseen micro-extract:\n*${triad}*\n\nName the Greek syntax term for placing short, stark independent clauses side by side without subordinating conjunctions.`,
        answer: { type: "text", accept: ["parataxis", "paratactic", "paratactic syntax"], display: "parataxis" },
        hint: "Starts with 'para-' (side by side); the opposite of hypotaxis.",
        traps: [
          { spec: { type: "text", accept: ["hypotaxis", "hypotactic"] }, feedback: "Hypotaxis layers nested subordinate clauses; stark equal clauses side by side are parataxis." },
        ],
        solution: [
          "Three independent clauses sit side by side with equal blunt weight and no subordinators.",
          "This stark, high-tension pacing technique is **parataxis**.",
        ],
      };
    }
    case "minor-sentence": {
      const frags = rng.pick([
        `Heavy footsteps. Closer now. Right outside ${place}.`,
        `Cold air. Metallic footsteps. Complete silence.`,
        `One knock. Two. Then nothing.`,
        `No exit. No lantern. Only shadows.`,
      ]);
      return {
        prompt: `Read this unseen suspense beat:\n*${hero} pressed flat against the doorway. ${frags}*\n\nWhat grammatical term describes deliberate, verbless chunks like those closing fragments?`,
        answer: { type: "text", accept: ["minor sentence", "minor sentences", "sentence fragment", "sentence fragments", "fragment", "fragments"], display: "minor sentence" },
        hint: "Incomplete grammatical chunks lacking a main finite verb (two words: '___ sentence' or 'sentence ___').",
        traps: [
          { spec: { type: "text", accept: ["complex sentence", "compound sentence"] }, feedback: "Complex and compound sentences contain multiple full clauses; these verbless chunks are deliberately incomplete." },
        ],
        solution: [
          "Deliberately verbless or incomplete clauses are **minor sentences** (or *sentence fragments*), mimicking panic or fractured focus.",
        ],
      };
    }
    case "hypotaxis": {
      const sub = rng.pick([
        `Although rain battered the shutters of ${place} and although ${hero} knew the patrol passed every ten minutes, she waited until the corridor went dark before touching ${obj}.`,
        `Because the floorboards creaked beneath every heel and while the watchman's lantern swung past the archway of ${place}, ${hero} stayed frozen behind the pillar.`,
        `Even though the iron gate stood only twenty paces beyond ${place}, ${hero} hesitated because every lamp along the wall remained bright until midnight.`,
      ]);
      return {
        prompt: `Read this slow, layered sentence:\n*${sub}*\n\nWhat Greek syntax term describes nesting subordinate clauses (*although, because, while*) inside one long sentence to stretch tension?`,
        answer: { type: "text", accept: ["hypotaxis", "hypotactic", "hypotactic syntax"], display: "hypotaxis" },
        hint: "Opposite of parataxis — begins with 'hypo-' (placed underneath / subordinated).",
        traps: [
          { spec: { type: "text", accept: ["parataxis", "paratactic"] }, feedback: "Parataxis puts short equal clauses side by side; nested subordinate clauses use hypotaxis." },
        ],
        solution: [
          "Layering subordinate clauses (*although / because / while*) before delivering the main action is **hypotaxis**, stretching suspense into slow motion.",
        ],
      };
    }
    case "dash": {
      const cut = rng.pick([
        `${hero} eased ${obj} out of the drawer — and froze as a boot scraped outside ${place}.`,
        `${hero} reached the unlatched exit of ${place} — then recoiled at the sudden glare of a torch.`,
        `${hero} whispered the final name on the list — and heard the heavy lock snap shut behind them.`,
      ]);
      return {
        prompt: `Read this unseen sentence:\n*${cut}*\n\nWhich specific punctuation mark visually fractures the smooth opening syntax at the exact instant danger intervenes?`,
        answer: { type: "text", accept: ["dash", "em-dash", "em dash", "a dash", "an em-dash", "an em dash"], display: "dash" },
        hint: "Look right in the middle of the sentence where smooth action snaps into sudden shock.",
        traps: [
          { spec: { type: "text", accept: ["ellipsis", "colon", "semicolon"] }, feedback: "Look at the single long horizontal bar breaking the sentence right before the shock." },
        ],
        solution: [
          "The **dash** (or *em-dash*) acts like a prose caesura, breaking the sentence rhythm at the exact instant fear strikes.",
        ],
      };
    }
    case "asyndeton": {
      const list = rng.pick([
        `Whistles, boots, torches, shouted orders closed around ${place}.`,
        `Keys, padlocks, cold stone, barred windows surrounded ${hero}.`,
        `Sirens, slammed doors, sharp elbows, frantic whispers filled ${place}.`,
        `Badges, clipboards, iron railings, blank stares blocked ${hero}'s path.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${list}*\n\nWhat rhetorical term describes omitting conjunctions (*and*) between items in a list to accelerate sensory overload?`,
        answer: { type: "text", accept: ["asyndeton", "asyndetic", "asyndetic listing", "asyndetic list"], display: "asyndeton" },
        hint: "Greek negative prefix 'a-' (without) + '-syndeton' (joining words).",
        traps: [
          { spec: { type: "text", accept: ["polysyndeton", "polysyndetic"] }, feedback: "Polysyndeton repeats 'and' between items; stripping conjunctions away is asyndeton." },
        ],
        solution: [
          "Omitting *'and'* from the list is **asyndeton** (asyndetic listing), making threats strike rapidly without breathing space.",
        ],
      };
    }
    case "polysyndeton": {
      const list = rng.pick([
        `${hero} walked past locked shops and grey railings and wet cobbles and silent guards beyond ${place}.`,
        `All night they heard boots and whistles and rattling gates and cold wind across ${place}.`,
        `The queue dragged through mud and drizzle and fog and endless checkpoints beside ${place}.`,
      ]);
      return {
        prompt: `Read this unseen line:\n*${list}*\n\nWhat rhetorical term describes repeating the conjunction *and* between every item to stretch rhythm and convey relentless weight?`,
        answer: { type: "text", accept: ["polysyndeton", "polysyndetic", "polysyndetic listing", "polysyndetic list"], display: "polysyndeton" },
        hint: "Greek prefix 'poly-' (many) + '-syndeton' (joining words).",
        traps: [
          { spec: { type: "text", accept: ["asyndeton", "asyndetic"] }, feedback: "Asyndeton leaves conjunctions out; repeating 'and' many times is polysyndeton." },
        ],
        solution: [
          "Repeating *'and'* between every element is **polysyndeton** (polysyndetic listing), stretching out exhaustion or inescapable pressure.",
        ],
      };
    }
    case "anaphora": {
      const rep = rng.pick([
        `${hero} checked the bolt. ${hero} checked the curtain. ${hero} checked the street beyond ${place}.`,
        `Do not speak in ${place}. Do not pause by the railings. Do not lift your eyes.`,
        `They took ${obj}. They took the ledger. They took every name on the board.`,
      ]);
      return {
        prompt: `Read this unseen extract:\n*${rep}*\n\nName the rhetorical device of repeating the exact same opening phrase at the start of successive sentences to hammer home urgency or control.`,
        answer: { type: "text", accept: ["anaphora"], display: "anaphora" },
        hint: "An eight-letter Greek term starting with 'ana-' for repeated sentence openings.",
        traps: [
          { spec: { type: "text", accept: ["alliteration"] }, feedback: "Alliteration repeats initial sounds; repeating a whole opening phrase across consecutive clauses is anaphora." },
        ],
        solution: [
          "Repeating the same opening words across consecutive sentences is **anaphora**, creating obsessive, relentless rhythm.",
        ],
      };
    }
    default: {
      const wait = rng.pick([
        `For two full pages at ${place}, the narrator describes the scrape of the lock and the shadow under the door without naming who stands outside.`,
        `Though ${hero} grips ${obj} tightly across ${place}, the writer delays revealing what is hidden inside it until the final paragraph.`,
        `Every character in ${place} glances nervously at the sealed envelope, yet the narrator refuses to reveal its contents until the climax.`,
      ]);
      return {
        prompt: `${wait}\n\nWhat suspense technique deliberately holds back crucial information so tension builds in the gap before the reveal?`,
        answer: { type: "text", accept: ["withholding", "withholding information", "delayed reveal", "delayed revelation"], display: "withholding" },
        hint: "Literally keeping key facts back from the reader until the decisive moment.",
        traps: [
          { spec: { type: "text", accept: ["exposition"] }, feedback: "Exposition gives information upfront; deliberately keeping facts back to raise tension is withholding." },
        ],
        solution: [
          "Deliberately delaying key facts so dread grows in the reader's imagination is **withholding** (or *delayed reveal*).",
        ],
      };
    }
  }
}

// ---------------------------------------------------------------------------
// Drill 3: Dialogue Power & Subtext Decoder (level 2)
// ---------------------------------------------------------------------------
function genDialoguePower(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const hero = rng.pick(NAMES_A);
  const auth = rng.pick(AUTHORITIES);
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);

  const pool1 = ["imperative", "interruption", "ellipsis", "subtext"] as const;
  const pool2 = ["imperative", "interruption", "ellipsis", "euphemism", "subtext"] as const;
  const pool3 = ["euphemism", "strategic-silence", "form-of-address", "imperative", "subtext"] as const;

  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "imperative": {
      const cmds = rng.pick([
        `"Sit down. Place ${obj} on the desk. Wait."`,
        `"Stop right there. Show your papers. Step back."`,
        `"Close the shutters. Lower your voice. Sign here."`,
        `"Stand straight. Empty the satchel. Leave immediately."`,
      ]);
      return {
        prompt: `In ${place}, ${auth} says to ${hero}:\n*${cmds}*\n\nWhat grammatical term names direct command verbs like these that assert immediate dominance?`,
        answer: { type: "text", accept: ["imperative", "imperatives", "imperative verb", "imperative verbs", "imperative mood"], display: "imperative" },
        hint: "The grammatical mood used for direct orders (starts with 'imp-').",
        traps: [
          { spec: { type: "text", accept: ["interrogative", "interrogatives"] }, feedback: "Interrogatives ask questions; direct orders use imperatives." },
          { spec: { type: "text", accept: ["declarative", "declaratives"] }, feedback: "Declaratives state facts; these are bare commands." },
        ],
        solution: [
          "Direct command verbs are **imperatives**, stripping away polite hedging to assert unchallenged control.",
        ],
      };
    }
    case "interruption": {
      const cut = rng.pick([
        `"I only came to ask about ${obj}—"\n"Enough, ${hero}. Leave ${place} at once."`,
        `"My sister wasn't even near ${place}—"\n"I decide who was present, ${hero}."`,
        `"Perhaps we could check the ledger again—"\n"The matter is closed."`,
      ]);
      return {
        prompt: `Read this exchange with ${auth}:\n*${cut}*\n\nWhich punctuation mark (` + "`—`" + `) visually signals that ${hero} is abruptly cut off mid-sentence?`,
        answer: { type: "text", accept: ["dash", "em-dash", "em dash", "a dash", "an em-dash", "an em dash"], display: "em-dash" },
        hint: "A long horizontal bar at the end of an interrupted line of speech.",
        traps: [
          { spec: { type: "text", accept: ["ellipsis", "ellipses"] }, feedback: "An ellipsis (...) shows hesitant trailing off; being sharply cut off by another speaker uses an em-dash." },
        ],
        solution: [
          "An **em-dash** (or *dash*) marks an abrupt external interruption, visually showing one speaker silencing another.",
        ],
      };
    }
    case "ellipsis": {
      const trail = rng.pick([
        `"I thought... perhaps... ${obj} still belonged to us..."`,
        `"Maybe we could... if it isn't inconvenient... appeal..."`,
        `"Sir, I only meant that... at ${place}... nobody saw..."`,
      ]);
      return {
        prompt: `Read ${hero}'s faltering reply to ${auth}:\n*${trail}*\n\nName the three-dot punctuation device signalling nervous hesitation and subordinate self-censorship.`,
        answer: { type: "text", accept: ["ellipsis", "ellipses", "an ellipsis"], display: "ellipsis" },
        hint: "Eight-letter word starting with 'ell-' for three trailing dots.",
        traps: [
          { spec: { type: "text", accept: ["dash", "em-dash", "em dash"] }, feedback: "A dash marks a sharp cut-off; three dots showing faltering speech are an ellipsis." },
        ],
        solution: [
          "Three trailing dots (`...`) form an **ellipsis**, conveying fear, hesitation, or intimidation in dialogue.",
        ],
      };
    }
    case "euphemism": {
      const euph = rng.pick([
        `"Your brother's loud opinions require a brief period of quiet reflection," ${auth} smiled, locking the outer gate of ${place}.`,
        `"We had to arrange an administrative relocation for anyone still hiding ${obj}," ${auth} murmured calmly.`,
        `"Let us avoid any unfortunate adjustments to your family's ration allowance," ${auth} sighed softly.`,
      ]);
      return {
        prompt: `Read ${auth}'s menacingly polite remark:\n*${euph}*\n\nWhat literary term describes disguising harsh punishment or intimidation beneath mild, polite bureaucratic wording?`,
        answer: { type: "text", accept: ["euphemism", "a euphemism"], display: "euphemism" },
        hint: "Starts with 'eu-' (pleasant speech) used to mask unpleasant or coercive reality.",
        traps: [
          { spec: { type: "text", accept: ["hyperbole"] }, feedback: "Hyperbole wildly exaggerates; softening harsh threats into polite wording is a euphemism." },
        ],
        solution: [
          "Masking coercion or punishment under mild institutional language is a **euphemism**.",
        ],
      };
    }
    case "strategic-silence": {
      const beat = rng.pick([
        `${auth} shouted twice and slapped the ledger across the table at ${place}, yet ${hero} simply folded their hands, met the gaze steadily, and said not a single word.`,
        `"Answer me!" ${auth} barked, red-faced beside ${obj}. Across ${place}, ${hero} stayed completely motionless and refused to speak until ${auth} finally looked away.`,
      ]);
      return {
        prompt: `Read this turning point:\n*${beat}*\n\nWhat two-word concept describes refusing to speak not out of fear, but to deny an interrogator control and flip the psychological balance?`,
        answer: { type: "text", accept: ["strategic silence", "defiant silence", "weaponised silence", "weaponized silence"], display: "strategic silence" },
        hint: "Two words: purposeful ___ (not weakness, but a deliberate tactic of saying nothing).",
        traps: [
          { spec: { type: "text", accept: ["submission", "compliance"] }, feedback: "Here saying nothing unsettles the shouting official rather than surrendering — look for a two-word phrase ending in 'silence'." },
        ],
        solution: [
          "Calmly withholding speech to destabilise a shouting authority figure is **strategic silence** (or *defiant silence*).",
        ],
      };
    }
    case "form-of-address": {
      const shift = rng.pick([
        `All story long, ${hero} calls ${auth} "Your Honour"; at the climax in ${place}, holding proof inside ${obj}, ${hero} drops the title and uses only a bare surname.`,
        `${auth} repeatedly calls ${hero} "child" to belittle them in ${place}, until ${hero} interrupts calmly: "Use my proper name."`,
      ]);
      return {
        prompt: `${shift}\n\nWhich dialogue power lens from our guide focuses on titles, honorifics (*Sir, Your Honour*), or diminishing labels (*child, boy*) to reveal social hierarchy?`,
        answer: { type: "text", accept: ["form of address", "forms of address", "address", "address terms"], display: "form of address" },
        hint: "Three words: '___ of ___' (how speakers name or title one another).",
        traps: [
          { spec: { type: "text", accept: ["imperative", "imperatives"] }, feedback: "Imperatives are command verbs; titles and labels like 'Sir' or 'child' relate to forms of address." },
        ],
        solution: [
          "Analysing honorifics (*Your Honour*), bare surnames, or diminishing labels (*child*) examines **form of address** (forms of address).",
        ],
      };
    }
    default: {
      const line = rng.pick([
        `"How lovely that your family lives right beside ${place}," ${auth} murmured, stirring tea calmly. "Winter can be very harsh without a heating permit."`,
        `"Of course, Sir," ${hero} replied smoothly at ${place}, while beneath the counter their knuckles whitened around ${obj}.`,
        `"Do keep smiling, ${hero}," ${auth} whispered gently as the iron bolt slid across the door of ${place}. "We only want what is sensible."`,
      ]);
      return {
        prompt: `Read this loaded exchange:\n*${line}*\n\nWhat single literary word names the unspoken threat, hidden defiance, or real power struggle operating beneath polite surface words?`,
        answer: { type: "text", accept: ["subtext"], display: "subtext" },
        hint: "Prefix 'sub-' (beneath) + 'text'.",
        traps: [
          { spec: { type: "text", accept: ["context"] }, feedback: "Context is historical background outside the story; unspoken meaning *beneath* dialogue is subtext." },
        ],
        solution: [
          "The hidden coercion or concealed resistance operating beneath surface speech is **subtext**.",
        ],
      };
    }
  }
}

// ---------------------------------------------------------------------------
// Drill 4: Unseen Extract Close-Reading Lab (level 3)
// ---------------------------------------------------------------------------
function genExtractLab(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  const hero = rng.pick(NAMES_A);
  const auth = rng.pick(AUTHORITIES);
  const place = rng.pick(SETTINGS);
  const obj = rng.pick(OBJECTS);

  const pool1 = ["semantic-field", "juxtaposition", "count-drop", "single-word-zoom"] as const;
  const pool2 = ["focal-zoom", "juxtaposition", "semantic-field", "count-drop", "pathetic-fallacy"] as const;
  const pool3 = ["bathos", "focal-zoom", "substitution-test", "semantic-field", "juxtaposition"] as const;

  const kind = tier === 1 ? rng.pick(pool1) : tier === 2 ? rng.pick(pool2) : rng.pick(pool3);

  switch (kind) {
    case "semantic-field": {
      const cluster = rng.pick([
        { line: `Rusted bars, iron chains, cold locks, and grey tally marks lined ${place}.`, field: "imprisonment" },
        { line: `At ${place}, ${auth}'s voice cut like a blade through the bruised silence, leaving every guard braced for ambush.`, field: "violence / warfare" },
        { line: `Frost crept across ${place}, glazing the glass in ice while ${auth}'s stare remained frozen and winter-hard.`, field: "coldness" },
        { line: `Ledgers, ink stamps, numbered forms, and clipped quotas governed every breath inside ${place}.`, field: "bureaucracy" },
      ]);
      return {
        prompt: `Read this unseen extract:\n*${cluster.line}*\n\nWhat two-word analytical term names a deliberate group of words linked by a shared domain of meaning (here: ${cluster.field})?`,
        answer: { type: "text", accept: ["semantic field", "lexical field", "a semantic field", "a lexical field"], display: "semantic field" },
        hint: "Two words: '___ field' describing a thematic cluster of vocabulary.",
        traps: [
          { spec: { type: "text", accept: ["alliteration"] }, feedback: "Alliteration repeats initial sounds; grouping vocabulary around a shared theme is a semantic field." },
        ],
        solution: [
          "Clustering vocabulary from one thematic domain (*" + cluster.field + "*) creates a **semantic field** (or *lexical field*).",
        ],
      };
    }
    case "juxtaposition": {
      const pair = rng.pick([
        `Inside the banqueting hall, chandeliers glowed over silver trays, while just beyond the railings of ${place}, ${hero} shivered in torn boots.`,
        `${auth} spoke with silk-smooth courtesy while his guards snapped iron handcuffs shut beside ${place}.`,
        `Bright spring blossoms drifted onto the cracked concrete of ${place} as the curfew siren wailed across the roofs.`,
      ]);
      return {
        prompt: `Read this unseen extract:\n*${pair}*\n\nWhat literary device places two starkly opposing worlds, images, or tones directly side by side to sharpen conflict?`,
        answer: { type: "text", accept: ["juxtaposition", "contrast"], display: "juxtaposition" },
        hint: "A 13-letter word starting with 'juxta-' (Latin for 'placed side by side').",
        traps: [
          { spec: { type: "text", accept: ["oxymoron"] }, feedback: "An oxymoron joins two opposite words right next to each other ('deafening silence'); contrasting whole scenes or images side by side is juxtaposition." },
        ],
        solution: [
          "Placing sharply opposing scenes, images, or tones side by side is **juxtaposition**, intensifying moral contrast.",
        ],
      };
    }
    case "count-drop": {
      const endings = [
        { tail: "Run.", count: 1 },
        { tail: "Silence.", count: 1 },
        { tail: "Boots stopped.", count: 2 },
        { tail: "Too late.", count: 2 },
        { tail: "The lock clicked.", count: 3 },
      ] as const;
      const chosen = rng.pick(endings);
      const opener = rng.pick([
        `Across the drowsy courtyard of ${place}, evening bells drifted lazily over warm roofs while ${hero} folded ${obj} inside a woollen scarf.`,
        `For twenty calm minutes inside ${place}, nobody moved except the pendulum clock ticking patiently beside ${auth}'s stacked ledgers.`,
      ]);
      return {
        prompt: `Read this unseen pacing shift:\n*${opener} Then the door burst open. ${chosen.tail}*\n\nCount the **exact number of words** in the final, shortest sentence used to snap the pace.`,
        answer: { type: "number", value: chosen.count, display: String(chosen.count) },
        hint: "Look only at the very last punctuated sentence at the end of the extract.",
        traps: [
          { spec: { type: "number", value: 5 }, feedback: "'Then the door burst open.' has 5 words — check the final sentence directly after it!" },
        ],
        solution: [
          `The final sentence is *"${chosen.tail}"*, containing **${chosen.count}** word${chosen.count === 1 ? "" : "s"}.`,
          "Dropping from a long opening sentence straight down to a stark closing beat mirrors sudden shock.",
        ],
      };
    }
    case "single-word-zoom": {
      const verb = rng.pick(["snapped", "bolted", "barked", "clutched", "flinched"]);
      return {
        prompt: `In a WHAT–HOW–WHY paragraph on an extract where ${auth} *"${verb}"* inside ${place}, you isolate that **one loaded word** (*"${verb}"*) and unpack its exact connotations.\n\nWhat analytical technique is this called?`,
        answer: {
          type: "text",
          accept: ["single-word zoom", "single word zoom", "word-level zoom", "word level zoom", "word zoom", "micro-zoom", "micro zoom"],
          display: "single-word zoom",
        },
        hint: "Focusing tightly on one pivotal word from a quotation (ends in 'zoom').",
        traps: [
          { spec: { type: "text", accept: ["plot summary", "plot retelling"] }, feedback: "Plot summary narrates events; unpacking connotations of one specific word is single-word zoom." },
        ],
        solution: [
          "Isolating one charged word (*'" + verb + "'*) to unpack its connotations is **single-word zoom** (or *word-level zoom*).",
        ],
      };
    }
    case "focal-zoom": {
      const wide = rng.pick([
        `From the hilltop ridge, the whole valley around ${place} lay silver under moonlight`,
        `Across the wide harbour, ferry lights shimmered peacefully along the horizon`,
        `Above ${place}, white clouds drifted slowly across an open autumn sky`,
      ]);
      const close = rng.pick([
        `a single trembling bead of sweat on ${hero}'s wrist`,
        `the tiny hairline scratch across ${obj}`,
        `a lone shadow sliding underneath the locked door of ${place}`,
      ]);
      return {
        prompt: `Sentence 1 opens wide: *${wide}.* Sentence 2 cuts tightly inside onto *${close}.*\n\nWhat two-word structural camera technique narrows perspective from wide expanse to claustrophobic detail?`,
        answer: { type: "text", accept: ["focal zoom", "cinematic zoom", "narrowing focus", "zooming in"], display: "focal zoom" },
        hint: "Think of a film lens tightening from wide establishing shot to tight close-up (two words: '___ zoom').",
        traps: [
          { spec: { type: "text", accept: ["flashback"] }, feedback: "A flashback shifts time backward; tightening spatial focus like a camera lens is focal zoom." },
        ],
        solution: [
          "Cutting from an open establishing shot straight to a tiny sensory micro-detail is **focal zoom** (or *narrowing focus*), creating physical claustrophobia.",
        ],
      };
    }
    case "pathetic-fallacy": {
      const weather = rng.pick([
        `Black thunderheads coiled above ${place} and bitter sleet lashed the glass just as ${auth} pronounced the sentence on ${hero}.`,
        `A suffocating, motionless fog swallowed ${place} as ${hero} realised ${obj} had gone missing.`,
        `Harsh winter gales tore dead leaves across ${place} the moment ${auth} slammed the gate shut.`,
      ]);
      return {
        prompt: `Read this unseen extract:\n*${weather}*\n\nWhat two-word literary device reflects hostile mood or oppressive tension through matching weather and atmosphere?`,
        answer: { type: "text", accept: ["pathetic fallacy"], display: "pathetic fallacy" },
        hint: "Two words: attributing human mood or menace to weather and nature.",
        traps: [
          { spec: { type: "text", accept: ["metaphor", "simile"] }, feedback: "Specifically mirroring character mood or thematic tension in weather has a dedicated two-word term." },
        ],
        solution: [
          "Using menacing weather (*sleet, fog, gales*) to mirror emotional tension or oppressive power is **pathetic fallacy**.",
        ],
      };
    }
    case "bathos": {
      const line = rng.pick([
        `${auth}'s grand promise of mercy arrived on gold-edged vellum, sealed in scarlet wax, and smudged with grease from lunch.`,
        `Before the hushed assembly of ${place}, ${auth} delivered a thundering oath of justice — then fined ${hero} three pennies for a missing button.`,
        `The solemn charter of freedom was carved in marble, draped in velvet, and locked permanently inside a dusty broom cupboard.`,
      ]);
      return {
        prompt: `Read this unseen ironic line:\n*${line}*\n\nWhat rhetorical term names this abrupt ironic plunge from grand ceremonial seriousness down to trivial or hollow anticlimax?`,
        answer: { type: "text", accept: ["bathos", "anticlimax", "anti-climax"], display: "bathos" },
        hint: "Six-letter term rhyming with 'pathos' (or its English synonym meaning a deflated climax).",
        traps: [
          { spec: { type: "text", accept: ["pathos"] }, feedback: "Pathos evokes genuine pity; the sharp ironic plunge from grand ceremony to trivial emptiness is bathos." },
        ],
        solution: [
          "Building lofty ceremonial expectation only to puncture it with a petty, hollow detail is **bathos** (or *anticlimax*), exposing hypocrisy.",
        ],
      };
    }
    default: {
      const pair = rng.pick([
        { vivid: "barked", plain: "said" },
        { vivid: "snatched", plain: "took" },
        { vivid: "bolted", plain: "shut" },
        { vivid: "murmured", plain: "spoke" },
      ]);
      return {
        prompt: `To unpack why the writer chose *"${pair.vivid}"* instead of *"${pair.plain}"* in a confrontation at ${place}, you mentally swap the plain word back in and analyse whatever emotional force disappears.\n\nWhat is this quick diagnostic exam check called?`,
        answer: { type: "text", accept: ["substitution test", "the substitution test"], display: "the Substitution Test" },
        hint: "Two or three words: replacing a loaded word with a plain synonym is the ___ Test.",
        traps: [
          { spec: { type: "text", accept: ["feature spotting", "feature-spotting"] }, feedback: "Feature-spotting merely names devices without effect; swapping in a plain synonym to discover lost connotations is the Substitution Test." },
        ],
        solution: [
          `Swapping *"${pair.vivid}"* for *"${pair.plain}"* to discover the exact lost nuance is **the Substitution Test**.`,
        ],
      };
    }
  }
}

export const drills: Drill[] = [
  {
    id: "power-conflict-short-stories.story-architecture",
    topicId: "power-conflict-short-stories",
    title: "Short-Story Architecture Spotter",
    level: 1,
    guideRef: "short-story-architecture",
    generate: genArchitecture,
  },
  {
    id: "power-conflict-short-stories.pacing-syntax-spotter",
    topicId: "power-conflict-short-stories",
    title: "Pacing & Syntax Craft Spotter",
    level: 1,
    guideRef: "tension-pacing-syntax",
    generate: genPacingSyntax,
  },
  {
    id: "power-conflict-short-stories.dialogue-power-cues",
    topicId: "power-conflict-short-stories",
    title: "Dialogue Power & Subtext Decoder",
    level: 2,
    guideRef: "power-dynamics-subtext",
    generate: genDialoguePower,
  },
  {
    id: "power-conflict-short-stories.extract-craft-lab",
    topicId: "power-conflict-short-stories",
    title: "Unseen Extract Close-Reading Lab",
    level: 3,
    guideRef: "close-reading-prose",
    generate: genExtractLab,
  },
];
