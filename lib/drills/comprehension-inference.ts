import type { Drill, Rng } from "./types.ts";

// ---------------------------------------------------------------------------
// Procedural skill drills for Reading Comprehension, Inference & Synthesis.
// Every drill uses `rng` combinatorially so each tier produces 80+ distinct,
// authentic Year 9 English prompts across 200 seeds.
// ---------------------------------------------------------------------------

const NAMES = [
  "Maya",
  "Priya",
  "Aiden",
  "Devon",
  "Nadia",
  "Kabir",
  "Mr Lim",
  "Dr Nair",
  "Ms Tan",
  "Mrs Patel",
];

const PLACES = [
  "the municipal hall",
  "the coastal ferry terminal",
  "the heritage library",
  "the community market",
  "the hilltop observatory",
  "the science wing",
];

const TIMES = [
  "at 06:15",
  "before dawn",
  "at midday",
  "after dusk",
  "ten minutes early",
  "on Friday afternoon",
];

// ---- Drill 1: Retrieval vs Inference -------------------------------------

interface SceneTemplate {
  build: (name: string, place: string, time: string) => {
    extract: string;
    explicitClaim: string;
    inferenceClaim: string;
    clue: string;
    whyInference: string;
  };
}

const T1_SCENES: SceneTemplate[] = [
  {
    build: (name, place, time) => ({
      extract: `Arriving ${time} at ${place}, ${name} folded the brochure in half, slid it back into a coat pocket without speaking, and stared at the exit.`,
      explicitClaim: `${name} put the brochure away without speaking.`,
      inferenceClaim: `${name} felt quietly disappointed by what awaited inside.`,
      clue: "folded the brochure silently and stared at the exit",
      whyInference: "disappointment is never stated directly — it is deduced from silent body language",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `When the manager praised the new timetable ${time} inside ${place}, ${name} kept both eyes fixed on a cracked floor tile and clicked a pen four times.`,
      explicitClaim: `${name} clicked a pen four times during the manager’s remarks.`,
      inferenceClaim: `${name} privately disagreed with the manager’s praise.`,
      clue: "avoiding eye contact and clicking a pen repeatedly",
      whyInference: "disagreement is unstated — we read it from tense, restless gestures",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `${name} unlocked ${place} ${time}, wiped every brass plaque clean, and replaced the flowers even though no visitors had entered for a fortnight.`,
      explicitClaim: `No visitors had entered ${place} for two weeks.`,
      inferenceClaim: `${name} takes quiet pride in caring for the space despite public neglect.`,
      clue: "cleaning every plaque and bringing fresh flowers despite zero visitors",
      whyInference: "pride and devotion are implied by faithful upkeep without an audience",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `Leaving ${place} ${time}, ${name} paused twice on the front steps, checking the locked padlock before tucking the key into an inner zip pocket.`,
      explicitClaim: `${name} checked the padlock twice on the front steps.`,
      inferenceClaim: `${name} feels anxious about the security of the building.`,
      clue: "pausing twice to double-check the lock and hiding the key securely",
      whyInference: "anxiety is deduced from cautious, repetitive checking rather than stated",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `Inside ${place} ${time}, ${name} smiled briefly at the crowd’s applause, laid the trophy beside the back curtain, and walked straight out to help pack the folding chairs.`,
      explicitClaim: `${name} helped pack the folding chairs after the applause.`,
      inferenceClaim: `${name} values humble teamwork more than basking in personal spotlight.`,
      clue: "leaving the trophy by the curtain and quietly packing chairs",
      whyInference: "humility is inferred from moving away from praise toward practical help",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `During the inspection of ${place} ${time}, ${name} underlined the word ‘temporary’ three times on the noticeboard until the pencil tip snapped.`,
      explicitClaim: `${name} underlined the word ‘temporary’ three times.`,
      inferenceClaim: `${name} doubts the arrangement will genuinely remain short-term.`,
      clue: "underlining ‘temporary’ so forcefully that the pencil snapped",
      whyInference: "frustration and scepticism are implied through physical force",
    }),
  },
];

const T2_SCENES: SceneTemplate[] = [
  {
    build: (name, place, time) => ({
      extract: `At ${place} ${time}, the brochure promised ‘unhurried calm’. ${name} stood shoulder-to-shoulder beneath three loudspeaker announcements and checked the return bus timetable within five minutes.`,
      explicitClaim: `${name} checked the return bus timetable within five minutes.`,
      inferenceClaim: `${name} feels overwhelmed by crowds and already wishes to leave.`,
      clue: "checking the return bus after only five minutes amid loudspeakers",
      whyInference: "the wish to escape is implied by immediately looking up the return bus",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `Although the debate at ${place} lasted two hours ${time}, ${name} did not raise a voice once; instead, ${name} closed the folder gently and waited until the shouting stopped.`,
      explicitClaim: `${name} did not raise a voice during the two-hour debate.`,
      inferenceClaim: `${name} commands calm authority without needing to shout.`,
      clue: "closing the folder gently and letting silence disarm the shouting",
      whyInference: "calm authority is deduced from composed restraint rather than stated",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `Every volunteer at ${place} celebrated when the banner went up ${time}, yet ${name} stayed beside the damp cardboard boxes tracing an old faded photograph with one thumb.`,
      explicitClaim: `Volunteers celebrated when the banner went up at ${place}.`,
      inferenceClaim: `${name} feels bittersweet attachment to how the place used to be.`,
      clue: "standing apart from the celebration while tracing a faded photograph",
      whyInference: "nostalgic reluctance is read from physical separation and the old photo",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `When asked ${time} at ${place} whether the roof leak was fixed, ${name} cleared a throat loudly and urged the committee to admire the newly repainted lobby instead.`,
      explicitClaim: `${name} invited the committee to look at the repainted lobby.`,
      inferenceClaim: `${name} is deflecting because the roof leak remains unresolved.`,
      clue: "clearing a throat and abruptly changing the subject to paintwork",
      whyInference: "evasion is inferred from dodging a direct yes-or-no question",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `By the time the storm cleared over ${place} ${time}, ${name} had handed out every spare raincoat from the van and stood shivering in a soaked cotton shirt.`,
      explicitClaim: `${name} wore a soaked cotton shirt after the storm cleared.`,
      inferenceClaim: `${name} puts other people’s comfort ahead of personal safety or warmth.`,
      clue: "giving away every spare coat while standing shivering in cotton",
      whyInference: "selflessness is deduced from the contrast between giving coats away and shivering",
    }),
  },
];

const T3_SCENES: SceneTemplate[] = [
  {
    build: (name, place, time) => ({
      extract: `In the official bulletin issued from ${place} ${time}, the director praised ${name} for ‘spirited independence’ and wished ${name} luck ‘exploring ventures beyond this institution’.`,
      explicitClaim: `The official bulletin referred to ${name}’s ‘spirited independence’.`,
      inferenceClaim: `${name} likely clashed with leadership and is leaving on strained terms.`,
      clue: "polite euphemisms like ‘spirited independence’ and ‘beyond this institution’",
      whyInference: "underlying tension is deduced by decoding guarded corporate euphemisms",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `The annual report unveiled at ${place} ${time} dedicated fourteen glossy pages to architectural awards and one unnumbered footnote to the cleaners who kept ${name}’s ward open through two floods.`,
      explicitClaim: `The annual report devoted fourteen pages to architectural awards.`,
      inferenceClaim: `The institution values public prestige far more than essential frontline staff.`,
      clue: "contrasting fourteen glossy pages against a single unnumbered footnote",
      whyInference: "skewed institutional priorities are implied by the stark imbalance in space",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `Addressing reporters at ${place} ${time}, ${name} spoke for thirty-five minutes citing twelve tourism forecasts, yet the words ‘rent’, ‘eviction’, and ‘residents’ never appeared once.`,
      explicitClaim: `${name} cited twelve tourism forecasts during a thirty-five-minute speech.`,
      inferenceClaim: `${name} deliberately avoided uncomfortable housing impacts of the project.`,
      clue: "omitting ‘rent’, ‘eviction’, and ‘residents’ across thirty-five minutes",
      whyInference: "deliberate evasion is inferred from what is conspicuously left unsaid",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `Even after the merger took effect at ${place} ${time}, ${name} continued arriving twenty minutes early, sharpening pencils never used and keeping the old department badge inside an inner pocket.`,
      explicitClaim: `${name} kept the old department badge inside an inner pocket.`,
      inferenceClaim: `${name} feels sidelined yet remains quietly loyal to a vanished team.`,
      clue: "unused sharpened pencils plus hiding the old badge close inside a pocket",
      whyInference: "redundancy and guarded loyalty are implied beneath routine actions",
    }),
  },
  {
    build: (name, place, time) => ({
      extract: `Local elders at ${place} warned ${time} that the northern road floods after heavy rain; ${name} consulted a headquarters spreadsheet instead and scheduled deliveries for noon, losing two vans by one o’clock.`,
      explicitClaim: `Two delivery vans were lost by one o’clock on the northern road.`,
      inferenceClaim: `${name}’s overconfidence in desk data caused a preventable blunder by ignoring local expertise.`,
      clue: "dismissing local elders for a headquarters spreadsheet right before disaster",
      whyInference: "hubris and poor judgement are implied by the causal contrast",
    }),
  },
];

// ---- Drill 2: Nuanced Tone & Bias Detector -------------------------------

interface ToneItem {
  tone: string;
  accept: string[];
  trapFeedback: string;
  build: (subject: string, detail: string) => { text: string; clue: string };
}

const TONE_SUBJECTS = [
  "the rail operator",
  "the city council",
  "the hotel developer",
  "the tech start-up",
  "the airline board",
  "the stadium committee",
];

const TONE_DETAILS = [
  "after six months of delays",
  "following a two-million-dollar review",
  "ahead of next winter",
  "despite resident petitions",
  "before the morning rush",
  "across three neighbouring districts",
];

const REVERENT_PLACES = [
  "vaulted cedar hall",
  "ancient limestone temple",
  "moss-draped forest canopy",
  "centuries-old reading room",
  "quiet stone cloister",
  "mist-wrapped mountain shrine",
];

const NOSTALGIC_MEMORIES = [
  "warm roasted chestnuts outside the old cinema",
  "bicycle bells ringing down Sungei Lane at dusk",
  "chalk dust drifting across sunlit wooden desks",
  "brass ferry whistles echoing over calm harbour water",
  "paper bags of salted plums beside the corner bookshop",
  "rain drumming on tin awnings above grandfather’s workshop",
];

const URGENT_CRISES = [
  "coastal mangroves",
  "urban drinking-water reserves",
  "disappearing night-sky sanctuaries",
  "fragile coral nurseries",
  "low-lying neighbourhood seawalls",
  "shrinking pollinator meadows",
];

const TONE_TEMPLATES: ToneItem[] = [
  {
    tone: "sardonic",
    accept: ["sardonic", "ironic", "mocking", "sarcastic"],
    trapFeedback: "Spot the biting irony and scare quotes mocking a trivial outcome — that is a sardonic tone.",
    build: (subj, det) => ({
      text: `In a ‘bold triumph’ ${det}, ${subj} solved chronic overcrowding by unveiling a freshly painted line telling visitors to stand closer together.`,
      clue: "scare quotes (‘bold triumph’) paired with an absurdly trivial solution",
    }),
  },
  {
    tone: "sardonic",
    accept: ["sardonic", "ironic", "mocking", "sarcastic"],
    trapFeedback: "Notice the dry mockery contrasting grand language against useless action — that is sardonic.",
    build: (subj, det) => ({
      text: `Naturally, ${det}, ${subj} tackled the leaking roof by publishing a glossy ‘resilience brochure’ printed on waterproof paper.`,
      clue: "‘Naturally’ plus the mocking punchline of waterproof paper for an unfixed leak",
    }),
  },
  {
    tone: "reverent",
    accept: ["reverent", "awestruck", "reverential"],
    trapFeedback: "Look at the hushed, respectful imagery of quiet wonder — that creates a reverent tone.",
    build: (place, time) => ({
      text: `Beneath the ${place} ${time}, even hurried visitors fall silent and lower their voices, stepping gently as though entering sacred ground.`,
      clue: "hushed restraint (‘fall silent’, ‘lower their voices’, ‘sacred ground’)",
    }),
  },
  {
    tone: "sceptical",
    accept: ["sceptical", "skeptical", "doubtful", "questioning"],
    trapFeedback: "Notice how the writer questions weak proof after ‘yet’ rather than mocking wildly — that is sceptical.",
    build: (subj, det) => ({
      text: `Spokespeople for ${subj} claim their plan will double efficiency ${det}, yet they have published zero independent data and tested only twelve volunteers.`,
      clue: "‘claim’ contrasted with ‘yet… zero independent data’ exposing flimsy proof",
    }),
  },
  {
    tone: "urgent",
    accept: ["urgent", "alarmed", "pressing"],
    trapFeedback: "Notice the countdown deadline and call to act immediately — that signals an urgent tone.",
    build: (crisis, det) => ({
      text: `Unless we protect ${crisis} ${det}, irreversible damage will outrun every rescue budget. Waiting another year is no longer caution; it is surrender.`,
      clue: "strict deadline (‘Unless…’), high stakes (‘irreversible’), and ‘surrender’",
    }),
  },
  {
    tone: "nostalgic",
    accept: ["nostalgic", "wistful"],
    trapFeedback: "Warm sensory memories anchored to a vanished past create a nostalgic tone.",
    build: (memory, place) => ({
      text: `I can still recall ${memory}, long before the avenue beside ${place} was sealed inside mirrored concrete and humming escalators.`,
      clue: "fond sensory recall (‘I can still recall’) contrasted with a cold modern change",
    }),
  },
  {
    tone: "objective",
    accept: ["objective", "detached", "neutral", "impartial"],
    trapFeedback: "Neutral reporting verbs and balanced caveats without emotive adjectives mark an objective tone.",
    build: (subj, det) => ({
      text: `Auditors reviewing ${subj} ${det} recorded a 14% rise in operating costs; however, the report noted that fuel inflation accounted for roughly half of the increase.`,
      clue: "neutral verbs (‘recorded’, ‘noted’) and a balanced caveat (‘however’)",
    }),
  },
];

interface BiasScenario {
  device: string;
  accept: string[];
  build: (subj: string, topic: string) => { text: string; clue: string };
}

const BIAS_TOPICS = [
  "the park curfew",
  "the congestion charge",
  "the recycling levy",
  "the tram extension",
  "the smartphone ban",
  "the library remodel",
];

const BIAS_TEMPLATES: BiasScenario[] = [
  {
    device: "loaded diction",
    accept: ["loaded diction", "loaded language", "emotive language", "emotive diction"],
    build: (subj, topic) => ({
      text: `Headline: “BUREAUCRATS AT ${subj.toUpperCase()} SLAP FAMILIES WITH PUNISHING SCHEME OVER ${topic.toUpperCase()}.”`,
      clue: "emotionally slanted words (‘bureaucrats’, ‘slap’, ‘punishing scheme’) replacing neutral terms",
    }),
  },
  {
    device: "selective omission",
    accept: ["selective omission", "omission", "omission bias"],
    build: (subj, topic) => ({
      text: `An article attacking ${subj} over ${topic} quotes four angry critics but leaves out the independent safety study and the 74% resident approval survey.`,
      clue: "deliberately excluding counter-evidence and rival voices to skew judgement",
    }),
  },
  {
    device: "scare quotes",
    accept: ["scare quotes", "ironic quotation marks", "quotation marks", "inverted commas"],
    build: (subj, topic) => ({
      text: `After months of ‘transparent dialogue’ on ${topic}, ${subj} announced its ‘community-first’ verdict inside a closed meeting.`,
      clue: "wrapping official slogans in quotation marks to signal sarcastic disbelief",
    }),
  },
  {
    device: "euphemism",
    accept: ["euphemism", "corporate euphemism", "doublespeak"],
    build: (subj, topic) => ({
      text: `In its press statement on ${topic}, ${subj} described slashing half its maintenance staff as a ‘strategic workforce optimisation’.`,
      clue: "sanitised corporate phrasing (‘strategic workforce optimisation’) disguising harsh layoffs",
    }),
  },
];

// ---- Drill 3: Non-Fiction Language & Structure Craft ---------------------

interface CraftScenario {
  device: string;
  accept: string[];
  tier: 1 | 2 | 3;
  build: (name: string, issue: string, num: number) => { text: string; clue: string };
}

const CRAFT_ISSUES = [
  "ocean plastic",
  "teenage sleep deprivation",
  "vanishing heritage stalls",
  "urban heatwaves",
  "youth reading habits",
  "commuter traffic noise",
];

const CRAFT_TEMPLATES: CraftScenario[] = [
  {
    device: "anecdote",
    accept: ["anecdote", "personal anecdote"],
    tier: 1,
    build: (name, issue, num) => ({
      text: `An article on ${issue} opens: “Last Thursday at 05:${10 + (num % 40)}, fourteen-year-old ${name} stood waiting on a dark kerb, too exhausted to finish breakfast.”`,
      clue: "opening with a brief true-life human story to build immediate empathy",
    }),
  },
  {
    device: "direct address",
    accept: ["direct address", "second person", "second-person address"],
    tier: 1,
    build: (_name, issue, num) => ({
      text: `A column on ${issue} warns: “Before you blame distant ministers, check the ${num} disposable items sitting inside your own school bag today.”`,
      clue: "second-person pronouns (‘you’, ‘your’) pulling the reader straight into accountability",
    }),
  },
  {
    device: "rhetorical question",
    accept: ["rhetorical question", "rhetorical questions"],
    tier: 1,
    build: (_name, issue, num) => ({
      text: `A speech on ${issue} asks: “How many more of these ${num}-page warnings must gather dust before we change how we live?”`,
      clue: "a question posed to challenge complacency rather than receive a literal answer",
    }),
  },
  {
    device: "imperative",
    accept: ["imperative", "imperative verb", "command"],
    tier: 1,
    build: (_name, issue, num) => ({
      text: `A campaign leaflet on ${issue} ends: “Put down the phone for ${num} minutes tonight and notice what is happening outside your window.”`,
      clue: "a direct command verb (‘Put down’, ‘notice’) urging immediate reader action",
    }),
  },
  {
    device: "statistic",
    accept: ["statistic", "statistics", "data", "fact and statistic"],
    tier: 1,
    build: (_name, issue, num) => ({
      text: `Paragraph 2 of a report on ${issue} states: “According to the national audit, ${30 + (num % 55)}% of households underestimated their weekly impact.”`,
      clue: "a numerical percentage from a survey used to give logical weight and scale",
    }),
  },
  {
    device: "inclusive pronouns",
    accept: ["inclusive pronouns", "inclusive pronoun", "first-person plural"],
    tier: 2,
    build: (_name, issue, num) => ({
      text: `A speech on ${issue} declares: “We share these ${num} kilometres of coastline; our habits today shape the world our younger siblings inherit.”`,
      clue: "plural pronouns (‘We’, ‘our’) uniting speaker and listeners in shared ownership",
    }),
  },
  {
    device: "juxtaposition",
    accept: ["juxtaposition", "contrast"],
    tier: 2,
    build: (_name, issue, num) => ({
      text: `A feature on ${issue} writes: “Inside the showroom, crystal fountains chilled bottled water; ${num} metres outside the gate, families queued at a dry standpipe.”`,
      clue: "placing stark opposites side by side to spotlight inequality or contradiction",
    }),
  },
  {
    device: "cyclical structure",
    accept: ["cyclical structure", "cyclical ending", "circular structure", "circular ending"],
    tier: 2,
    build: (name, issue, num) => ({
      text: `An essay on ${issue} opens with ${name} staring at a cracked clock at 06:${10 + (num % 45)}, analyses national causes for four paragraphs, and closes on the exact same cracked clock ticking again.`,
      clue: "returning in the final line to the exact opening image to frame the piece",
    }),
  },
  {
    device: "hypophora",
    accept: ["hypophora"],
    tier: 3,
    build: (_name, issue, num) => ({
      text: `A broadsheet column on ${issue} writes: “Who pays for ${num} years of delay? Not the consultants who wrote the slides — the families living beside the flood wall.”`,
      clue: "asking a sharp question and immediately supplying the answer yourself",
    }),
  },
  {
    device: "concession",
    accept: ["concession", "counter-argument", "counter argument"],
    tier: 3,
    build: (_name, issue, num) => ({
      text: `An essay on ${issue} writes: “Granted, upgrading the system will cost $${num} million upfront. Yet ignoring the problem will cost triple that within a decade.”`,
      clue: "acknowledging a rival objection (‘Granted…’) before pivoting into rebuttal (‘Yet…’)",
    }),
  },
];

// ---- Drill 4: Cross-Text Synthesis Classifier ----------------------------

interface SynthesisTopic {
  topic: string;
  proA: string;
  proB: string;
  conB: string;
  qualB: string;
}

const SYNTHESIS_TOPICS: SynthesisTopic[] = [
  {
    topic: "urban cycling lanes",
    proA: "Protected cycle tracks ease road congestion and lower daily commuter costs.",
    proB: "Dedicated bike routes speed up urban journeys while cutting household fuel spending.",
    conB: "Narrowing main roads for cycle tracks slows delivery vans and hurts corner shops.",
    qualB: "Although cycle tracks cut emissions cleanly, patchy winter lighting still deters nervous riders.",
  },
  {
    topic: "digital textbooks",
    proA: "Electronic editions lighten heavy school bags and update scientific maps instantly.",
    proB: "Tablet textbooks spare pupils' shoulders while keeping facts current year-round.",
    conB: "Glaring screens fatigue young eyes and invite constant social-media distractions.",
    qualB: "While digital textbooks save paper and weight, deep comprehension often drops without print margins.",
  },
  {
    topic: "free museum entry",
    proA: "Removing ticket barriers lets students from every income bracket experience great art.",
    proB: "No-fee galleries turn national heritage into a democratic space open to all.",
    conB: "Without admission revenue, museums struggle to fund climate vaults and specialist restorers.",
    qualB: "Granted, free access widens attendance dramatically, yet special exhibitions still require ticket funding.",
  },
  {
    topic: "night sleeper trains",
    proA: "Overnight rail journeys combine calm scenic rest with far lower carbon emissions.",
    proB: "Sleeper carriages turn travel into a restful, low-carbon alternative to short flights.",
    conB: "Inflated fares and rattling berths leave travellers exhausted and out of pocket.",
    qualB: "Although sleeper trains slash flight emissions, high ticket prices still price out many families.",
  },
  {
    topic: "rooftop urban farms",
    proA: "Growing vegetables on city roofs cools overheated offices and cuts transport miles.",
    proB: "High-rise gardens insulate concrete blocks while delivering crisp greens metres from diners.",
    conB: "Reinforcing old roofs for damp soil is costly and yields only tiny harvests.",
    qualB: "While rooftop farms visibly cool urban blocks, they cannot replace open fields for staple grains.",
  },
  {
    topic: "school uniform policies",
    proA: "Shared uniforms calm morning routines and soften visible wealth gaps between classmates.",
    proB: "Standardised dress codes simplify family mornings and encourage corridor equality.",
    conB: "Rigid uniform checks spark needless daily friction and suppress older teens' individuality.",
    qualB: "Although uniforms reduce peer clothing pressure, overly fussy rules over shoes breed resentment.",
  },
  {
    topic: "vertical indoor farms",
    proA: "Stacked indoor trays recycle 90% of water and shield crops from erratic monsoon storms.",
    proB: "Warehouse farms conserve water dramatically while guaranteeing steady harvests in any weather.",
    conB: "Running industrial grow-lights round the clock demands huge electricity and raises prices.",
    qualB: "While indoor farming slashes water waste, steep lighting bills still limit it to leafy herbs.",
  },
  {
    topic: "smartphone-free concerts",
    proA: "Locking phones away restores electric shared focus between musicians and listeners.",
    proB: "Screen-free halls let crowds immerse themselves fully in live sound without glare.",
    conB: "Long pouch-unlocking queues after concerts frustrate parents trying to reach home safely.",
    qualB: "Although screen-free gigs feel far more intimate, venues must speed up exit queues for emergencies.",
  },
  {
    topic: "public library hubs",
    proA: "Modern branch libraries act as vital civic lifelines offering free tech and workshops.",
    proB: "Community libraries bridge digital divides by providing open terminals and free classes.",
    conB: "Turning reading rooms into bustling activity centres destroys the silence serious readers need.",
    qualB: "Granted, coding clubs draw new teenagers inside, yet quiet study zones still deserve protection.",
  },
  {
    topic: "community repair cafés",
    proA: "Volunteer repair sessions keep broken appliances out of landfill and teach practical skills.",
    proB: "Neighbourhood fix-it mornings cut electronic waste while passing craftsmanship to young people.",
    conB: "Glued modern gadgets resist disassembly, leaving volunteers unable to rescue many devices.",
    qualB: "Although repair cafés save hundreds of toasters, strict manufacturer parts locks limit bigger fixes.",
  },
];

const CONTEXT_FRAMES = [
  "a Year 9 broadsheet comparison",
  "a local council briefing",
  "an editorial dossier",
  "a comparative reading paper",
  "a school debate pack",
  "a civic podcast transcript",
];

export const drills: Drill[] = [
  {
    id: "comprehension-inference.retrieval-or-inference",
    topicId: "comprehension-inference",
    title: "Explicit Retrieval vs Deep Inference",
    level: 1,
    guideRef: "retrieval-vs-inference",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pool = tier === 1 ? T1_SCENES : tier === 2 ? T2_SCENES : T3_SCENES;
      const tpl = rng.pick(pool);
      const name = rng.pick(NAMES);
      const place = rng.pick(PLACES);
      const time = rng.pick(TIMES);
      const scene = tpl.build(name, place, time);
      const askInference = rng.bool(0.55);
      const claim = askInference ? scene.inferenceClaim : scene.explicitClaim;

      if (askInference) {
        return {
          prompt: `Read the extract:\n\n*"${scene.extract}"*\n\nStatement: **"${claim}"**\n\nIs this statement **explicit** (stated directly) or an **inference** (deduced from clues)?`,
          answer: {
            type: "text",
            accept: ["inference", "inferred", "implicit"],
            display: "inference",
          },
          traps: [
            {
              spec: { type: "text", accept: ["explicit", "retrieval", "fact"] },
              feedback: "Check the exact wording — the feeling/judgement is never stated directly, only implied by the clues.",
            },
          ],
          hint: "Ask whether you can point word-for-word to the claim on the page, or whether you must read between the lines.",
          solution: [
            `The text gives the clue: ${scene.clue}.`,
            `Because ${scene.whyInference}, this statement is an **inference**.`,
          ],
        };
      }

      return {
        prompt: `Read the extract:\n\n*"${scene.extract}"*\n\nStatement: **"${claim}"**\n\nIs this statement **explicit** (stated directly) or an **inference** (deduced from clues)?`,
        answer: {
          type: "text",
          accept: ["explicit", "retrieval", "stated", "fact"],
          display: "explicit",
        },
        traps: [
          {
            spec: { type: "text", accept: ["inference", "inferred", "implicit"] },
            feedback: "Look again — this detail is stated directly on the page without needing to deduce hidden feelings.",
          },
        ],
        hint: "Scan the sentence literally: is that exact action or fact written directly on the page?",
        solution: [
          "The claim directly restates a literal fact stated on the page without guessing unstated motives.",
          "Therefore, it is **explicit** retrieval.",
        ],
      };
    },
  },

  {
    id: "comprehension-inference.tone-bias-detector",
    topicId: "comprehension-inference",
    title: "Nuanced Tone & Bias Detector",
    level: 1,
    guideRef: "attitude-tone-bias",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 3) {
        const b = rng.pick(BIAS_TEMPLATES);
        const subj = rng.pick(TONE_SUBJECTS);
        const topic = rng.pick(BIAS_TOPICS);
        const built = b.build(subj, topic);
        return {
          prompt: `Identify the bias technique in this non-fiction extract:\n\n${built.text}\n\nChoose: \`loaded diction\`, \`selective omission\`, \`scare quotes\`, or \`euphemism\`.`,
          answer: {
            type: "text",
            accept: b.accept,
            display: b.device,
          },
          hint: "Check whether the bias comes from emotionally charged words, hidden counter-evidence, sarcastic quotation marks, or sanitised corporate phrasing.",
          solution: [
            `Clue: ${built.clue}.`,
            `Bias device: **${b.device}**.`,
          ],
        };
      }

      const t = rng.pick(TONE_TEMPLATES);
      const a =
        t.tone === "reverent"
          ? rng.pick(REVERENT_PLACES)
          : t.tone === "nostalgic"
            ? rng.pick(NOSTALGIC_MEMORIES)
            : t.tone === "urgent"
              ? rng.pick(URGENT_CRISES)
              : rng.pick(TONE_SUBJECTS);
      const b =
        t.tone === "reverent"
          ? rng.pick(TIMES)
          : t.tone === "nostalgic"
            ? rng.pick(PLACES)
            : rng.pick(TONE_DETAILS);
      const built = t.build(a, b);
      const promptTail =
        tier === 1
          ? "Type `sardonic`, `reverent`, `sceptical`, `urgent`, `nostalgic`, or `objective`."
          : "Type the exact Year 9 tone word from the Tone Compass.";

      return {
        prompt: `Read this non-fiction extract:\n\n*"${built.text}"*\n\nWhich single nuanced tone word best fits the writer’s attitude? (${promptTail})`,
        answer: {
          type: "text",
          accept: t.accept,
          display: t.tone,
        },
        traps: [
          {
            spec: { type: "text", accept: ["positive", "negative", "happy", "sad", "angry", "good", "bad"] },
            feedback: `Too vague for Year 9! ${t.trapFeedback}`,
          },
        ],
        hint: "Avoid vague labels like 'positive' or 'negative' — match the exact clues (irony, awe, doubt, countdown, memory, or neutral balance).",
        solution: [
          `Key textual clue: ${built.clue}.`,
          `Precise tone: **${t.tone}**.`,
        ],
      };
    },
  },

  {
    id: "comprehension-inference.nonfiction-craft",
    topicId: "comprehension-inference",
    title: "Non-Fiction Language & Structure Spotter",
    level: 2,
    guideRef: "nonfiction-language-structure",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pool = CRAFT_TEMPLATES.filter((c) => c.tier <= tier);
      const item = rng.pick(pool);
      const name = rng.pick(NAMES);
      const issue = rng.pick(CRAFT_ISSUES);
      const num = rng.int(4, 38);
      const built = item.build(name, issue, num);
      const choices =
        tier === 1
          ? " (`anecdote`, `direct address`, `rhetorical question`, `imperative`, or `statistic`)"
          : tier === 2
            ? " (name the exact language or structural technique)"
            : " (name the exact non-fiction language or structural move)";

      return {
        prompt: `${built.text}\n\nName the key non-fiction technique demonstrated here${choices}.`,
        answer: {
          type: "text",
          accept: item.accept,
          display: item.device,
        },
        hint: "Look at how the writer hooks, addresses, contrasts, or structures the passage — not just the topic.",
        solution: [
          `Signal on the page: ${built.clue}.`,
          `Technique: **${item.device}**.`,
        ],
      };
    },
  },

  {
    id: "comprehension-inference.synthesis-connector",
    topicId: "comprehension-inference",
    title: "Cross-Text Synthesis Relationship",
    level: 3,
    guideRef: "synthesis-summary",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const st = rng.pick(SYNTHESIS_TOPICS);
      const frame = rng.pick(CONTEXT_FRAMES);
      const modes: Array<"agreement" | "contrast" | "qualification"> =
        tier === 1 ? ["agreement", "contrast"] : ["agreement", "contrast", "qualification"];
      const mode = rng.pick(modes);
      const textB = mode === "agreement" ? st.proB : mode === "contrast" ? st.conB : st.qualB;

      if (tier === 3) {
        const askConnective = rng.bool(0.45);
        if (askConnective && mode !== "qualification") {
          const isAgree = mode === "agreement";
          return {
            prompt: `From ${frame} on **${st.topic}**:\n- **Text A:** *"${st.proA}"*\n- **Text B:** *"${textB}"*\n\nWhich formal synthesis connective fits best between these two viewpoints: \`similarly\` or \`whereas\`?`,
            answer: {
              type: "text",
              accept: isAgree ? ["similarly", "likewise", "equally"] : ["whereas", "conversely", "while", "whilst"],
              display: isAgree ? "similarly" : "whereas",
            },
            traps: [
              {
                spec: { type: "text", accept: isAgree ? ["whereas", "conversely"] : ["similarly", "likewise"] },
                feedback: isAgree
                  ? "Check both texts again — they reinforce the same positive view, so you need a similarity connective."
                  : "Look closely — Text A defends the idea while Text B critiques its drawbacks, so you need a contrast connective.",
              },
            ],
            hint: "Decide first whether Text A and Text B align on the same side or push in opposite directions.",
            solution: [
              isAgree
                ? "Both writers endorse the same core advantages in different words, so **similarly** links them smoothly."
                : "Text A highlights benefits while Text B stresses serious drawbacks, so **whereas** captures the sharp divergence.",
            ],
          };
        }
      }

      const optionsText =
        tier === 1
          ? "`agreement` or `contrast`"
          : "`agreement`, `contrast`, or `qualification`";

      return {
        prompt: `From ${frame} on **${st.topic}**:\n- **Text A:** *"${st.proA}"*\n- **Text B:** *"${textB}"*\n\nWhat synthesis relationship links Text B to Text A? (Type ${optionsText}.)`,
        answer: {
          type: "text",
          accept:
            mode === "agreement"
              ? ["agreement", "agree", "similarity", "similar"]
              : mode === "contrast"
                ? ["contrast", "disagreement", "difference", "opposing"]
                : ["qualification", "qualified", "nuance"],
          display: mode,
        },
        traps:
          mode === "qualification"
            ? [
                {
                  spec: { type: "text", accept: ["agreement", "contrast"] },
                  feedback: "Look at the opening concession ('Although / While / Granted'): Text B accepts part of Text A before setting a key limit — that is qualification!",
                },
              ]
            : undefined,
        hint: "Check if Text B reinforces Text A, directly opposes Text A, or concedes a benefit before adding an important limit.",
        solution: [
          mode === "agreement"
            ? "Both texts advance the same positive assessment in different vocabulary → **agreement**."
            : mode === "contrast"
              ? "Text A highlights advantages while Text B focuses strictly on drawbacks → **contrast**."
              : "Text B concedes Text A’s core benefit (‘Although / While / Granted’) before imposing a crucial caveat → **qualification**.",
        ],
      };
    },
  },
];
