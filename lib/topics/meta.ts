// ---------------------------------------------------------------------------
// Topic registry for Tanglin Trust School Year 9 English.
// Source: Middle School Curriculum Overview p. 6.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Shakespeare & Drama",
  "Prose & Poetry",
  "Reading & Exam Craft",
  "Writing & Rhetoric",
];

export const TOPIC_META: TopicMeta[] = [
  // ========================= SHAKESPEARE & DRAMA ==========================
  {
    id: "much-ado-about-nothing",
    title: "Shakespeare: Much Ado About Nothing",
    strand: "Shakespeare & Drama",
    icon: "🎭",
    curriculum: "Year 9 Term 1A Shakespeare (Option 1) — Messina Context, Beatrice & Benedick's Wit, Deception & Honour, Comic Relief & Extract Essays",
    sections: [
      {
        id: "messina-honour-context",
        heading: "Plot, Messina Society & Elizabethan Honour",
        covers: "Setting after war in Messina, Leonato's patriarchal household, marriage as social contract, reputation and double standards for men vs women (Claudio, Hero, Don Pedro).",
      },
      {
        id: "beatrice-benedick-wit",
        heading: "Beatrice & Benedick: The 'Merry War' & Prose vs Verse",
        covers: "Repartee, puns, stichomythia, prose vs blank verse, soliloquies in the gulling scenes (Act 2 Sc 3 & Act 3 Sc 1), and how Shakespeare uses comedy to question gender expectations.",
      },
      {
        id: "deception-noting-hero",
        heading: "Deception, 'Noting' & the Church Scene",
        covers: "Double meaning of 'Nothing/Noting' (eavesdropping, gossip, observation); Don John's villainy; Claudio's cruel public shaming of Hero in Act 4 Sc 1; Beatrice's fierce 'Kill Claudio' turn.",
      },
      {
        id: "dogberry-analytical-essays",
        heading: "Dogberry, Comic Relief & Shakespeare Extract Essays",
        covers: "Dogberry's malapropisms and dramatic irony (the Watch unmask the plot while clever nobles are fooled); writing WHAT–HOW–WHY analytical essays on Shakespeare extracts.",
      },
    ],
  },
  {
    id: "merchant-of-venice",
    title: "Shakespeare: The Merchant of Venice",
    strand: "Shakespeare & Drama",
    icon: "⚖️",
    curriculum: "Year 9 Term 1A Shakespeare (Option 2) — Venice vs Belmont, Shylock (Villain vs Victim), Portia & the Trial Scene, Bonds & Extract Analysis",
    sections: [
      {
        id: "venice-belmont-context",
        heading: "Venice vs Belmont: Commerce, Law & Prejudice",
        covers: "Contrasting worlds: mercantile Venice (contracts, usury, antisemitism, Antonio's melancholy) vs fairy-tale Belmont (Portia, the three caskets, inheritance and appearance vs reality).",
      },
      {
        id: "shylock-villain-or-victim",
        heading: "Shylock: Villain, Victim or Tragic Outsider?",
        covers: "Close analysis of 'Hath not a Jew eyes?' (Act 3 Sc 1): rhetorical questions, parallel syntax, dehumanising insults vs Shylock's vengeful 'pound of flesh'; shifting Elizabethan vs modern audience responses.",
      },
      {
        id: "portia-trial-mercy-justice",
        heading: "Portia, the Caskets & the Trial Scene (Act 4 Sc 1)",
        covers: "Disguise and female agency; 'The quality of mercy is not strained' — natural imagery and persuasive rhetoric; the legal loophole ('no jot of blood') and tension between strict law and mercy.",
      },
      {
        id: "bonds-loyalty-essay-craft",
        heading: "Bonds, Loyalty & Analytical Writing on Drama",
        covers: "Financial, marital (rings) and friendship bonds across Antonio, Bassanio, Portia and Jessica; analysing stagecraft, blank verse and soliloquies in timed analytical essays.",
      },
    ],
  },

  // =========================== PROSE & POETRY =============================
  {
    id: "the-novel-analytical-essay",
    title: "The Novel & Analytical Essay Craft",
    strand: "Prose & Poetry",
    icon: "📖",
    curriculum: "Year 9 Term 1B Core Novel — Narrative Voice, Characterisation, Setting & Symbolism, Structural Shifts & Thesis-Driven Analytical Essays",
    sections: [
      {
        id: "narrative-voice-perspective",
        heading: "Narrative Voice, Focalisation & Unreliable Narrators",
        covers: "First-person vs third-person limited vs omniscient narrators; free indirect discourse; how biased or naive narrators create dramatic irony and shape reader sympathy.",
      },
      {
        id: "characterisation-foils",
        heading: "Character Arcs, Foils & Dialogue Subtext",
        covers: "Dynamic vs static characters; using character foils to sharpen thematic contrasts; analysing what characters withhold or imply through dialogue, pauses and body language.",
      },
      {
        id: "setting-motif-structure",
        heading: "Setting, Pathetic Fallacy, Motif & Structural Shifts",
        covers: "Microcosm settings, pathetic fallacy, recurring motifs and symbols; narrative structure (in media res, foreshadowing, flashback, cyclical endings, shifts in pace and focus).",
      },
      {
        id: "analytical-essay-craft",
        heading: "Building a Thesis-Driven Year 9 Analytical Essay",
        covers: "Crafting a conceptual thesis; embedding short quotations fluently; WHAT–HOW–WHY paragraphs with single-word zoom, tentative phrasing ('arguably', 'implies') and cohesive topic sentences.",
      },
    ],
  },
  {
    id: "power-conflict-poetry",
    title: "Power & Conflict Poetry & Comparison",
    strand: "Prose & Poetry",
    icon: "🕯️",
    curriculum: "Year 9 Term 2 Core Texts — Power & Conflict Poetry, Form/Metre/Volta, Imagery & Comparative Essay Writing",
    sections: [
      {
        id: "themes-of-power-conflict",
        heading: "Dimensions of Power & Conflict in Poetry",
        covers: "Transferable reading of power and conflict themes across any collection: political tyranny and hubris, the brutality and futility of warfare, nature's power over humanity, and internal/identity conflict (any named poems clearly labelled as illustrative example poems, not fixed set texts).",
      },
      {
        id: "poetic-form-metre-structure",
        heading: "Poetic Form, Metre, Volta, Caesura & Enjambment",
        covers: "Sonnet, dramatic monologue, ballad and free verse; iambic pentameter vs disrupted rhythm; volta (turning point), caesura (mid-line break) and enjambment (run-on line) linked to meaning.",
      },
      {
        id: "imagery-sound-connotation",
        heading: "Figurative Language, Sound Devices & Semantic Fields",
        covers: "Extended metaphor, personification, oxymoron, juxtaposition, semantic fields (warfare, decay, religion), sibilance, plosives, alliteration and half-rhyme analysed for precise reader effect.",
      },
      {
        id: "comparative-poetry-essay",
        heading: "Writing an Integrated Comparative Poetry Essay",
        covers: "Planning conceptual comparison points (not 'both use metaphors'); weaving both poems in every paragraph using comparative connectives (whereas, similarly, conversely) and comparing methods + context.",
      },
    ],
  },
  {
    id: "power-conflict-short-stories",
    title: "Power & Conflict Short Stories",
    strand: "Prose & Poetry",
    icon: "⚡",
    curriculum: "Year 9 Term 2 Core Texts — Short-Story Architecture, Tension & Pacing, Power Dynamics & Close Prose Analysis",
    sections: [
      {
        id: "short-story-architecture",
        heading: "Short-Story Architecture & Narrative Economy",
        covers: "In media res openings, Freytag's pyramid (exposition, inciting incident, rising action, climax, denouement), economy of detail, epiphanies, and twist or ambiguous endings.",
      },
      {
        id: "tension-pacing-syntax",
        heading: "Building Tension Through Pacing, Syntax & Contrast",
        covers: "Manipulating sentence length (parataxis, minor sentences vs complex accumulation), withholding information, shifting from wide establishing shots to claustrophobic close-ups.",
      },
      {
        id: "power-dynamics-subtext",
        heading: "Power Dynamics, Resistance & Dialogue Subtext",
        covers: "Analysing authority, control, silence and rebellion between characters in short fiction; reading interruptions, imperatives, tone shifts and unspoken power imbalances.",
      },
      {
        id: "close-reading-prose",
        heading: "Close Reading Unseen Short-Story Extracts",
        covers: "Annotating a prose extract under timed conditions; tracking how tension or sympathy evolves from start to middle to end; avoiding plot retelling.",
      },
    ],
  },

  // ======================== READING & EXAM CRAFT ==========================
  {
    id: "unseen-poetry-analysis",
    title: "Unseen Poetry Analysis (End-of-Year Exam)",
    strand: "Reading & Exam Craft",
    icon: "🔎",
    curriculum: "Year 9 Term 2 End of Year Test — Rapid Unseen Poetry Protocol, Decoding Imagery & Form, High-Band Unseen Essays",
    sections: [
      {
        id: "first-read-protocol",
        heading: "The 5-Minute Unseen Poetry Protocol",
        covers: "Two-pass reading without panic: Title clues → Literal story/situation → Speaker & tone → Emotional turning point (volta) → Deeper theme/message.",
      },
      {
        id: "decoding-imagery-ambiguity",
        heading: "Decoding Imagery, Connotations & Ambiguity",
        covers: "Unpacking unfamiliar metaphors by asking 'What literal qualities does X have, and what does that reveal about Y?'; embracing layered meanings with tentative verbs (suggests, hints, implies).",
      },
      {
        id: "unseen-structure-form",
        heading: "Analysing Structure, Stanzas & Ending Shifts",
        covers: "Tracking progression across stanzas (opening mood → turning point → closing image); analysing stanza length, refrain, rhyme shifts, caesura and enjambment without generic statements.",
      },
      {
        id: "writing-high-band-unseen",
        heading: "Writing a Top-Band Timed Unseen Poetry Essay",
        covers: "Structuring a 35–45 minute exam response: concise conceptual intro, 3 integrated language+structure paragraphs following the poem's arc, avoiding feature-spotting, and a sharp closing judgement.",
      },
    ],
  },
  {
    id: "comprehension-inference",
    title: "Reading Comprehension, Inference & Synthesis",
    strand: "Reading & Exam Craft",
    icon: "🧠",
    curriculum: "Year 9 Terms 1–3 Key Skills — Retrieval vs Inference, Writer's Attitude & Bias, Language/Structure Analysis & Cross-Text Synthesis",
    sections: [
      {
        id: "retrieval-vs-inference",
        heading: "Explicit Retrieval vs Deep Inference",
        covers: "Distinguishing stated facts from inferred feelings, motives and implications; supporting every inference with brief embedded evidence and reading between the lines accurately.",
      },
      {
        id: "attitude-tone-bias",
        heading: "Evaluating Writer's Attitude, Tone & Perspective",
        covers: "Pinpointing nuanced tone words (sardonic, reverent, sceptical, urgent, nostalgic rather than just 'happy/sad'); detecting bias, loaded diction, irony and register in non-fiction.",
      },
      {
        id: "nonfiction-language-structure",
        heading: "Analysing Non-Fiction Language & Structure",
        covers: "Examining headlines, openings, anecdotes, statistics, rhetorical questions, direct address, contrast and cyclical endings in articles, speeches and travel writing.",
      },
      {
        id: "synthesis-summary",
        heading: "Concise Summary & Cross-Text Synthesis",
        covers: "Synthesising similarities and differences across two texts in your own words without copying chunks; grouping ideas by theme and selecting precise supporting details.",
      },
    ],
  },

  // ========================== WRITING & RHETORIC ==========================
  {
    id: "discursive-writing-public-speaking",
    title: "Discursive Writing, Public Speaking & SPaG",
    strand: "Writing & Rhetoric",
    icon: "🎤",
    curriculum: "Year 9 Terms 1 & 3 — Discursive Essays & Articles, Aristotelian Rhetoric & Tanglin Public Speaking Competition, Year 9 SPaG Precision",
    sections: [
      {
        id: "discursive-essay-structure",
        heading: "Balanced Discursive Essays & Counter-Arguments",
        covers: "Distinguishing discursive (exploring multiple viewpoints before a reasoned conclusion) from one-sided persuasion; signposting discourse markers (conversely, nevertheless, admittedly), steel-manning and rebutting counter-claims.",
      },
      {
        id: "aristotelian-rhetoric",
        heading: "Ethos, Pathos, Logos & Rhetorical Craft",
        covers: "Using ethos (credibility), pathos (vivid anecdote/emotive precision) and logos (evidence/logic); anaphora, tricolon, antithesis, hypophora and inclusive pronouns without sounding melodramatic.",
      },
      {
        id: "public-speaking-competition",
        heading: "Speech Craft for the Public Speaking Competition",
        covers: "Hooking an audience in the first 15 seconds, structuring a memorable 3-minute speech with a cyclical call-back, pacing, strategic pauses, eye contact, vocal variation and handling Q&A.",
      },
      {
        id: "spag-syntax-precision",
        heading: "Year 9 SPaG: Punctuation, Syntax & Academic Register",
        covers: "Eliminating comma splices; mastering semicolons, colons, dashes and apostrophes (its vs it's, plural possessives); active vs passive voice; varying clause openings for fluency and control.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
