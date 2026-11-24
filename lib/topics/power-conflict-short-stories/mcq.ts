import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Short-Story Architecture & Pacing Foundations
  // =========================================================================
  {
    id: "power-conflict-short-stories-m1",
    title: "MCQ Paper 1 — Story Architecture & Pacing Craft",
    questions: [
      {
        id: "power-conflict-short-stories-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "short-story-architecture",
        question:
          "Read this unseen opening:\n\n*\"Sign the ledger before the bell rings,\" the overseer said, sliding the damp pen across Elena's knuckles.*\n\nWhich structural opening technique does the writer use here?",
        options: [
          "In media res, plunging straight into a tense conflict without prior backstory",
          "Extended exposition, patiently describing the village history before any dialogue",
          "Flashforward narration, revealing the protagonist's fate ten years in advance",
          "Epistolary framing, opening through an official letter discovered in an archive",
        ],
        answerIndex: 0,
        hints: [
          "Notice that the very first words are a spoken command already mid-confrontation.",
          "Think of the Latin phrase meaning 'in the middle of things'.",
        ],
        explanation:
          "Starting directly inside an urgent demand (*'Sign the ledger'*) with zero introductory biography is **in media res**. Extended exposition would delay the action to explain setting and history first, whereas this line forces immediate inference about power.",
      },
      {
        id: "power-conflict-short-stories-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "short-story-architecture",
        question:
          "Why is Freytag's Pyramid usually **right-skewed** (with compressed exposition and a late climax) in power-and-conflict short stories?",
        options: [
          "Short stories forbid dialogue during the first half of the narrative",
          "Short stories must always resolve every subplot with neat poetic justice",
          "Limited word count forces writers to build sustained tension and strike late",
          "Readers prefer lengthy background biographies before any inciting incident appears",
        ],
        answerIndex: 2,
        hints: [
          "Consider how much page space a short story has compared with a 300-page novel.",
          "Where does suspense need to sit if the ending is meant to land with sharp impact?",
        ],
        explanation:
          "Because short fiction has tight word limits, writers compress exposition, stretch rising action to build claustrophobic stakes, and place the climax near the end so the aftermath lingers. Neat poetic justice is rarely guaranteed in conflict stories.",
      },
      {
        id: "power-conflict-short-stories-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "short-story-architecture",
        question:
          "In paragraph one of an unseen short story, a narrator casually notes a rusted iron whistle hanging beside the barracks door. At the climax, a rebel blows that exact whistle to trigger a strike.\n\nWhich craft principle best explains this structural payoff?",
        options: [
          "Stream of consciousness revealing scattered, unfiltered memories",
          "Chekhov's Gun, where a planted early detail later becomes decisive",
          "Pathetic fallacy aligning stormy weather with a character's inner rage",
          "Dramatic monologue delivered directly to an implied silent listener",
        ],
        answerIndex: 1,
        hints: [
          "Think of the Russian dramatist's famous rule about displaying a weapon in Act One.",
          "Short-story narrative economy ensures prominent early objects are not random decoration.",
        ],
        explanation:
          "**Chekhov's Gun** states that significant details planted early in a narrative must earn their place by paying off later. Pathetic fallacy concerns weather mirroring emotion, not recurring physical plot props.",
      },
      {
        id: "power-conflict-short-stories-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "short-story-architecture",
        question:
          "In the *example story* *The Sniper* by Liam O'Flaherty, a civil-war marksman tricks and shoots an enemy sniper, only to turn over the corpse at the end and recognise his own brother.\n\nHow does this **twist ending** reinforce the theme of conflict?",
        options: [
          "It celebrates tactical cleverness as the noblest quality in urban warfare",
          "It softens the violence by implying the wounded fighter will soon recover",
          "It shifts blame away from ideological division onto faulty military weapons",
          "It shatters triumph into horror, exposing civil war as self-destructive tragedy",
        ],
        answerIndex: 3,
        hints: [
          "Contrast the sniper's initial satisfaction at outsmarting a rival with the final revelation.",
          "What does discovering a sibling beneath an 'enemy' uniform say about civil war?",
        ],
        explanation:
          "The twist reverses victory into personal devastation, showing how political conflict strips away human kinship until people destroy their own families. It actively undercuts rather than celebrates tactical triumph.",
      },
      {
        id: "power-conflict-short-stories-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "short-story-architecture",
        question:
          "Read this summary of an unseen short story:\n\n*Opening: A new clerk receives a brass key and watches an older clerk dismissed without explanation. Ending: Ten years later, the same clerk hands his brass key to a nervous teenager and leaves the hall.*\n\nWhat thematic effect does this **cyclical structure** create?",
        options: [
          "It suggests institutional power grinds down individuals in an endless loop",
          "It implies the workplace has reformed into a fairer, more generous community",
          "It signals that the older clerk secretly sabotaged the younger clerk's career",
          "It proves the protagonist experienced a joyful epiphany about hard work",
        ],
        answerIndex: 0,
        hints: [
          "Look at what repeats unchanged from the opening scene to the closing scene.",
          "When an ending mirrors the opening in a power story, ask whether the system actually changed.",
        ],
        explanation:
          "A **cyclical structure** returning to the same ritual with a new replacement conveys entrapment and systemic continuity: individuals are disposable while the institution's machinery keeps turning.",
      },
      {
        id: "power-conflict-short-stories-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen extract:\n\n*The siren cut out. Lamps flickered. Shutters slammed along the whole lane. Nobody breathed.*\n\nWhich syntactic term best describes this sequence of short, stark independent clauses placed side by side?",
        options: [
          "Hypotaxis built from layered subordinate clauses",
          "Parataxis creating abrupt, breathless urgency",
          "Polysyndeton stretching rhythm with repeated 'and'",
          "Chiasmus reversing word order in mirrored halves",
        ],
        answerIndex: 1,
        hints: [
          "Count how many subordinating conjunctions ('because', 'although', 'while') appear here.",
          "Notice each independent event lands with a stark full stop.",
        ],
        explanation:
          "**Parataxis** places short, equal independent clauses side by side without subordinators, creating stark, jolting tempo. Hypotaxis would weave those actions into one long subordinate sentence.",
      },
      {
        id: "power-conflict-short-stories-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen extract:\n\n*Across the harbour, gulls wheeled lazily over bright ferries while shopkeepers unrolled striped awnings along the quay. Then the patrol boat cut its engine. Silence. A megaphone crackled.*\n\nWhy does the minor sentence *\"Silence.\"* feel especially jarring here?",
        options: [
          "Because readers rarely expect harbour settings to feature any seagulls",
          "Because minor sentences always indicate that the narrator is speaking cheerfully",
          "Because megaphones are grammatically impossible to describe in complex clauses",
          "Because it abruptly breaks the flowing, relaxed syntax of the opening sentence",
        ],
        answerIndex: 3,
        hints: [
          "Compare the length and mood of the very first sentence with the one-word fragment.",
          "Think about how contrast makes a sudden syntactic drop stand out.",
        ],
        explanation:
          "Pacing works through **contrast**: the leisurely, 18-word opening builds everyday normality, so the sudden full stop and one-word minor sentence *'Silence.'* snaps the reader into tense alertness.",
      },
      {
        id: "power-conflict-short-stories-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen sentence:\n\n*Boots, whistles, flashlights, iron gates, shouting voices closed around the square.*\n\nWhat is the name and primary effect of omitting conjunctions like *and* in this list?",
        options: [
          "Polysyndeton, slowing the scene to show calm diplomatic negotiation",
          "Oxymoron, pairing opposite adjectives to reveal hidden affection",
          "Asyndetic listing, accelerating sensory overload so the threat feels relentless",
          "Anaphora, repeating a comforting opening phrase to soothe the crowd",
        ],
        answerIndex: 2,
        hints: [
          "Check whether the list repeats 'and' or strips conjunctions out completely.",
          "Read the list aloud quickly — notice how the threats collide without pause.",
        ],
        explanation:
          "An **asyndetic list** removes conjunctions so images strike in rapid succession, mirroring the overwhelming speed of an armed crackdown. Polysyndeton would repeat *and* between every item.",
      },
      {
        id: "power-conflict-short-stories-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen sentence:\n\n*We marched past burned fences and broken carts and mud and wire and grey fields that never seemed to end.*\n\nHow does the **polysyndetic listing** (repeated *'and'*) shape the pacing and mood?",
        options: [
          "It speeds up the action like a thrilling chase through a crowded market",
          "It stretches the rhythm to convey weary, relentless exhaustion and scale",
          "It introduces humorous exaggeration to lighten the tone of the march",
          "It shows the narrator is confident that the journey will finish shortly",
        ],
        answerIndex: 1,
        hints: [
          "Read the sentence aloud and feel how each repeated 'and' adds another heavy beat.",
          "Contrast repeated 'and' with a crisp comma-only list.",
        ],
        explanation:
          "**Polysyndeton** drags out the sentence rhythm with every added *'and'*, mimicking the endless trudge of exhausted marchers confronted by relentless devastation.",
      },
      {
        id: "power-conflict-short-stories-m1-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen extract:\n\n*From the watchtower, the whole district looked no bigger than a chessboard. Down in Room 4, Jonah stared at the tiny scratch on his thumbnail while the lock turned.*\n\nWhat structural technique does the writer use between sentence one and sentence two?",
        options: [
          "A cinematic focal zoom narrowing from wide surveillance to claustrophobic close-up",
          "A comic anti-climax revealing that Jonah is only playing a friendly board game",
          "A chronological flashback jumping back to Jonah's childhood before the war",
          "A shift to direct second-person instruction lecturing the reader about rules",
        ],
        answerIndex: 0,
        hints: [
          "Imagine holding a film camera: where is the lens in sentence 1 versus sentence 2?",
          "Look at the scale shift from 'whole district' down to 'tiny scratch on his thumbnail'.",
        ],
        explanation:
          "Cutting from the detached, bird's-eye *'chessboard'* view (evoking impersonal state power) straight into a micro-close-up on Jonah's *'thumbnail'* creates a **claustrophobic focal zoom** that traps the reader inside his anxious confinement.",
      },
      {
        id: "power-conflict-short-stories-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "short-story-architecture",
        question:
          "In the *example story* *The Necklace* by Guy de Maupassant, Mathilde spends ten years of gruelling labour paying off a replacement diamond necklace, only to learn on the final line that the original was cheap paste.\n\nWhat type of structural ending is this?",
        options: [
          "A gentle comedy resolving every financial hardship through sudden luck",
          "A slow denouement tracing twenty further years of peaceful retirement",
          "A frame-narrative return to an unrelated traveller telling fireside stories",
          "An ironic epiphany that brutally re-evaluates the entire preceding decade",
        ],
        answerIndex: 3,
        hints: [
          "Think about what Mathilde suddenly realises on the very last line.",
          "Notice how the revelation flips ten years of sacrifice into bitter irony.",
        ],
        explanation:
          "The final line delivers a devastating **ironic epiphany** (and twist), exposing the cruelty of class pride and illusion without needing another page of aftermath.",
      },
      {
        id: "power-conflict-short-stories-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tension-pacing-syntax",
        question:
          "Why can a **long, winding hypotactic sentence** sometimes create *greater* suspense than rapid short sentences?",
        options: [
          "Because longer sentences always contain more exclamation marks for drama",
          "Because complex grammar forbids any mention of danger or conflict",
          "Because delaying the main clause traps the reader in slow-motion dread",
          "Because readers automatically skip subordinate clauses to reach the ending",
        ],
        answerIndex: 2,
        hints: [
          "Think about what happens when a writer piles up 'While... before... as...' clauses before revealing the threat.",
          "Suspense often relies on stretching time right before a reveal.",
        ],
        explanation:
          "By stacking subordinate clauses before delivering the main verb or revelation, **hypotaxis** stretches narrative time into agonising slow motion, mirroring creeping dread or obsessive focus.",
      },
      {
        id: "power-conflict-short-stories-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "short-story-architecture",
        question:
          "Which statement best defines **narrative economy** in short-story writing?",
        options: [
          "Making every single detail, object, and phrase serve character, plot, or theme",
          "Writing exclusively about banks, merchants, debts, and financial inequality",
          "Limiting every paragraph in a story to fewer than twenty simple words",
          "Removing all figurative imagery so the prose reads like a factual news report",
        ],
        answerIndex: 0,
        hints: [
          "In literary craft, 'economy' means zero wasted energy — not money!",
          "Ask how a writer achieves maximum impact within a few pages.",
        ],
        explanation:
          "**Narrative economy** means tightening prose so nothing is wasted: a single detail (like a cracked teacup or a brass stamp) establishes setting, power dynamics, and symbolic meaning all at once.",
      },
      {
        id: "power-conflict-short-stories-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen sentence:\n\n*Farah eased the latch upward, one silent millimetre at a time — and froze as a boot scraped the gravel outside.*\n\nWhat is the structural effect of the **dash** in the middle of the sentence?",
        options: [
          "It introduces a polite footnote explaining how metal latches are constructed",
          "It softens the sudden noise by turning the clause into a calm afterthought",
          "It visually fractures the smooth syntax at the exact instant fear strikes",
          "It indicates that Farah has forgotten what she was trying to unlock",
        ],
        answerIndex: 2,
        hints: [
          "Look at the mood immediately before the dash versus immediately after it.",
          "How does the punctuation mirror Farah's body stopping dead?",
        ],
        explanation:
          "The **dash** acts as a sharp visual and rhythmic caesura, breaking the slow, careful motion (*'eased... millimetre at a time'*) at the exact millisecond the threat intervenes (*'and froze'*).",
      },
      {
        id: "power-conflict-short-stories-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "short-story-architecture",
        question:
          "Why might a short-story writer deliberately choose an **ambiguous ending** (such as cutting off just as a detained character reaches for an unguarded door handle)?",
        options: [
          "Because the author ran out of time and forgot to plan a proper climax",
          "Because Year 9 short stories are not allowed to show characters escaping",
          "Because ambiguous endings erase all earlier tension and guarantee happy relief",
          "Because withholding tidy closure keeps the moral tension alive in the reader's mind",
        ],
        answerIndex: 3,
        hints: [
          "Ask how a reader reacts when a story refuses to hand them an easy victory or defeat.",
          "Think about how unresolved suspense makes the reader weigh the risk themselves.",
        ],
        explanation:
          "An **ambiguous ending** denies comforting certainty, forcing the reader to inhabit the character's ongoing peril and reflect on the real-world fragility of resistance long after the final line.",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Power Dynamics, Dialogue Subtext & Close Reading
  // =========================================================================
  {
    id: "power-conflict-short-stories-m2",
    title: "MCQ Paper 2 — Power Dynamics & Dialogue Subtext",
    questions: [
      {
        id: "power-conflict-short-stories-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen line of dialogue:\n\n*\"Sit. Place the envelope on the blotter. Do not speak until invited.\"*\n\nWhich grammatical feature most directly establishes the speaker's authority?",
        options: [
          "Tentative modal verbs suggesting gentle hesitation",
          "A chain of bare imperatives issuing unchallenged commands",
          "Polite tag questions inviting equal collaboration",
          "Exclamatory interjections expressing sudden panic",
        ],
        answerIndex: 1,
        hints: [
          "Look at the verb forms opening each sentence: 'Sit', 'Place', 'Do not speak'.",
          "What grammatical mood is used to issue orders?",
        ],
        explanation:
          "Three rapid **imperatives** (*'Sit'*, *'Place'*, *'Do not speak'*) eliminate all politeness hedges, treating the listener as an object to be positioned and silenced at will.",
      },
      {
        id: "power-conflict-short-stories-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen exchange:\n\n*\"The roof beam has cracked above Loom Six, Mr Hollis,\" Ravi said.*\n*\"How observant of you, boy,\" Mr Hollis murmured, dusting biscuit crumbs from his waistcoat. \"I do hope your cousin still needs work next week.\"*\n\nWhat makes Mr Hollis's reply an effective example of **menacing subtext**?",
        options: [
          "He shouts overt insults that immediately reveal his loss of temper",
          "He generously promises to promote Ravi's cousin for spotting the hazard",
          "He refuses to answer in complete sentences, showing nervous guilt",
          "He disguises an economic threat beneath calm politeness and casual grooming",
        ],
        answerIndex: 3,
        hints: [
          "Read beneath the surface of 'I do hope your cousin still needs work next week'.",
          "Notice how 'dusting biscuit crumbs' and 'murmured' contrast with the threat to livelihoods.",
        ],
        explanation:
          "Mr Hollis never explicitly says *'Keep quiet or I will sack your family'*, yet his veiled **subtext** delivers that exact warning while his calm grooming (*'dusting biscuit crumbs'*) and condescending label (*'boy'*) underline total, unruffled dominance.",
      },
      {
        id: "power-conflict-short-stories-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen dialogue:\n\n*\"I only thought perhaps we might check the figures once more—\"*\n*\"We are finished with the figures, Clara.\"*\n\nWhich two dialogue cues best signal the power imbalance between Clara and her interlocutor?",
        options: [
          "Clara's tentative modal hedges ('only', 'perhaps', 'might') versus a blunt interruption",
          "Clara's aggressive command verbs versus the other speaker's apologetic hesitation",
          "Clara's informal slang vocabulary versus the other speaker's poetic rhyming lines",
          "Clara's lengthy monologue versus the other speaker's complete refusal to speak",
        ],
        answerIndex: 0,
        hints: [
          "Examine the softening words Clara uses before her sentence is cut short by the dash.",
          "Notice who claims the right to end the conversation abruptly.",
        ],
        explanation:
          "Clara softens her request with three tentative hedges (*'only'*, *'perhaps'*, *'might'*), signalling subordinate caution, while the second speaker uses an **interruption (`—`)** and a closed declarative (*'We are finished'*) to shut her down.",
      },
      {
        id: "power-conflict-short-stories-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen moment:\n\n*\"Yes, Captain,\" Mateo said evenly, while beneath the tabletop his fingernails pressed four pale half-moons into his palm.*\n\nWhat does the contrast between Mateo's spoken words and physical action reveal?",
        options: [
          "Mateo genuinely admires the Captain and feels relaxed during the briefing",
          "Mateo has injured his hand earlier and is trying to hide a minor bruise",
          "Mateo performs outward obedience while concealing intense internal resistance",
          "Mateo is distracted by boredom and wishes to leave the meeting early",
        ],
        answerIndex: 2,
        hints: [
          "Compare the surface calmness ('Yes, Captain', 'evenly') with the hidden physical pain under the table.",
          "Think about why a character hides clenched hands out of an authority figure's sight.",
        ],
        explanation:
          "The gap between calm verbal compliance (*'evenly'*) and hidden physical tension (*'half-moons into his palm'*) dramatises **internal conflict** and suppressed defiance under coercive surveillance.",
      },
      {
        id: "power-conflict-short-stories-m2-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen excerpt:\n\n*\"Answer me!\" the deputy barked, slapping the file flat so dust jumped from the blotter. Across the desk, Saira merely folded her hands and watched the dust settle.*\n\nHow has the **power dynamic** shifted in this moment?",
        options: [
          "The deputy proves total mastery because loud volume always equals superior power",
          "The deputy's loss of temper exposes fragile control while Saira's stillness dominates",
          "Saira's silence proves she cannot remember any details about the missing file",
          "Both characters have reached a peaceful truce by stopping their argument",
        ],
        answerIndex: 1,
        hints: [
          "Ask yourself: does a genuinely secure authority figure need to bark and slap files?",
          "Look at Saira's calm verb 'merely folded her hands' and unhurried focus on settling dust.",
        ],
        explanation:
          "Shouting (*'barked'*) and slamming the file betray cracking composure, whereas Saira's **strategic silence** and unhurried stillness (*'watched the dust settle'*) rob him of the reaction he craves, flipping psychological control.",
      },
      {
        id: "power-conflict-short-stories-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "power-dynamics-subtext",
        question:
          "Throughout an unseen story, a servant always addresses the estate owner as *\"Your Lordship.\"* In the final scene, after uncovering the owner's fraud, the servant looks him in the eye and calls him by his bare surname: *\"Ashford.\"*\n\nWhat does this change in **form of address** signify?",
        options: [
          "A decisive power reversal dismantling the old social hierarchy",
          "An accidental slip showing the servant has grown forgetful with age",
          "A playful joke demonstrating that the two men have become close friends",
          "A formal legal requirement whenever estate ledgers are audited",
        ],
        answerIndex: 0,
        hints: [
          "Notice what disappears when 'Your Lordship' is replaced by a plain surname.",
          "Link the linguistic shift to the newly discovered leverage (the fraud).",
        ],
        explanation:
          "Dropping an honorific (*'Your Lordship'*) in favour of a bare surname (*'Ashford'*) verbally strips away inherited rank, crystallising the **power shift** created by the servant's moral and factual leverage.",
      },
      {
        id: "power-conflict-short-stories-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "close-reading-prose",
        question:
          "Read this unseen sentence:\n\n*The warden's ring clicked against the porcelain rim, a small metallic chime that seemed to measure out the seconds left in the room.*\n\nWhich analytical comment demonstrates strong **single-word zoom** rather than vague feature-spotting?",
        options: [
          "The writer uses good descriptive words here to help the reader imagine the room clearly",
          "The metaphor of the ring shows that the warden owns very expensive jewellery",
          "The verb 'measure' recasts casual tea-drinking as cold control over the prisoner's time",
          "This long sentence uses sensory imagery which makes the reader want to read on",
        ],
        answerIndex: 2,
        hints: [
          "Eliminate vague filler ('good descriptive words', 'makes the reader want to read on').",
          "Find the option that isolates ONE loaded word and ties its connotations directly to power.",
        ],
        explanation:
          "Zooming in on the verb *'measure'* reveals how even a casual movement asserts ownership over time itself, transforming a polite domestic object (*'porcelain'*) into an instrument of quiet intimidation.",
      },
      {
        id: "power-conflict-short-stories-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "close-reading-prose",
        question:
          "Why do examiners penalise essays that rely heavily on phrases like *\"First... then... next... after that...\"* when responding to an unseen prose extract?",
        options: [
          "Because chronological connectives are grammatically forbidden in formal English",
          "Because top-band essays should only ever analyse the final line of an extract",
          "Because those words take up too much ink during a timed examination",
          "Because they pull the writer into plot retelling instead of conceptual craft analysis",
        ],
        answerIndex: 3,
        hints: [
          "Think about the difference between summarising events and analysing how a writer creates meaning.",
          "What should open a WHAT–HOW–WHY body paragraph instead of a plot recap?",
        ],
        explanation:
          "Strings of *'First... then... next...'* trigger narrative summary (retelling the story) instead of **conceptual analysis**. Tracking structure uses craft-focused transitions like *'Initially, the writer establishes...'* and *'At the structural pivot...'*.",
      },
      {
        id: "power-conflict-short-stories-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "close-reading-prose",
        question:
          "Which of these quotations is **fluently embedded** inside a Year 9 analytical sentence?",
        options: [
          "A quote that shows fear is: \"Her breath snagged in her throat and the corridor narrowed.\"",
          "By describing how her breath \"snagged\", the writer captures sudden physical entrapment.",
          "The writer writes the quote \"Her breath snagged\" to show this point very clearly.",
          "\"Her breath snagged.\" This quotation is used by the author to prove she is scared.",
        ],
        answerIndex: 1,
        hints: [
          "Read each sentence aloud ignoring the quotation marks — which one flows as one seamless grammatical sentence?",
          "Avoid clunky announcements like 'A quote that shows...' or dropped standalone quotes.",
        ],
        explanation:
          "Fluently embedding a **micro-quotation** (*'snagged'*) integrates the writer's word smoothly into your own syntax without awkward signposting (*'A quote that shows...'*) or dropped standalone sentences.",
      },
      {
        id: "power-conflict-short-stories-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen extract:\n\n*\"Of course you are free to appeal,\" the magistrate smiled warmly, sliding the unsigned form into a drawer and turning the tiny key. \"We pride ourselves on open doors here.\"*\n\nWhich combination of methods exposes the **irony** of institutional power in this passage?",
        options: [
          "Rhyme and metre paired with joyful exclamation marks",
          "Flashback narration paired with nostalgic childhood imagery",
          "Simple dialogue tags paired with transparent honest promises",
          "Contradiction between the metaphor 'open doors' and the action 'turning the tiny key'",
        ],
        answerIndex: 3,
        hints: [
          "Compare what the magistrate claims verbally with what his hands literally do at the same instant.",
          "Look closely at the clash between 'open doors' and locking a drawer.",
        ],
        explanation:
          "The stark juxtaposition between the magistrate's warm rhetoric (*'free to appeal'*, *'open doors'*) and his quiet physical act (*'turning the tiny key'*) creates biting **situational and verbal irony**, exposing systemic hypocrisy.",
      },
      {
        id: "power-conflict-short-stories-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "close-reading-prose",
        question:
          "How does the **Substitution Test** help you analyse a writer's diction on an unseen short-story extract?",
        options: [
          "Swapping a loaded word for a plain synonym exposes the exact connotations lost",
          "Replacing every metaphor with simpler words makes your essay faster to write",
          "Changing the characters' names helps you avoid copying phrases from the prompt",
          "Swapping the opening and ending paragraphs proves the structure is cyclical",
        ],
        answerIndex: 0,
        hints: [
          "Try replacing 'barked' with 'said', or 'bolted' with 'closed' — notice what feeling vanishes.",
          "Whatever emotional or thematic shade disappears is exactly what you should write about!",
        ],
        explanation:
          "The **Substitution Test** compares the writer's chosen word against a neutral synonym (*murmured → said*; *clutched → held*). Identifying the exact mood, violence, or tenderness that vanishes gives you sharp single-word analysis.",
      },
      {
        id: "power-conflict-short-stories-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "power-dynamics-subtext",
        question:
          "In the *example story* *Lamb to the Slaughter* by Roald Dahl, Mary Maloney calmly feeds the investigating detectives the very leg of lamb she used as the murder weapon.\n\nWhat central power dynamic does this dark comic twist explore?",
        options: [
          "Police officers possess superior domestic knowledge that outwits every suspect",
          "Violent arguments are always resolved through generous family dinners",
          "A seemingly powerless housewife turns patriarchal stereotypes into a weapon of control",
          "Legal courts refuse to examine physical evidence found inside private kitchens",
        ],
        answerIndex: 2,
        hints: [
          "Think about why the detectives never suspect Mary even while eating the evidence.",
          "How does Mary use their assumptions about a 'docile wife' against them?",
        ],
        explanation:
          "Mary weaponises the detectives' patronising view of her as a harmless, grieving housewife, flipping the domestic power imbalance through **dramatic irony** as they literally consume the proof of her crime.",
      },
      {
        id: "power-conflict-short-stories-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "close-reading-prose",
        question:
          "Which analytical phrasing reflects the **tentative academic voice** rewarded in top-band Year 9 literature essays?",
        options: [
          "This definitely proves without any doubt that the author experienced tyranny",
          "Arguably, the sterile imagery implies that obedience erodes human empathy",
          "Every single reader will feel completely terrified when reading this simile",
          "I think this quote is really effective because it sounds super dramatic",
        ],
        answerIndex: 1,
        hints: [
          "Look for analytical verbs like 'arguably', 'implies', 'suggests', or 'hints'.",
          "Avoid dogmatic claims ('definitely proves', 'every single reader') and casual filler ('super dramatic').",
        ],
        explanation:
          "Top-band literary criticism treats meaning as layered and interpretive, using tentative phrasing (**arguably, implies, suggests**) rather than absolute claims (*'definitely proves'*) or informal opinion (*'super dramatic'*).",
      },
      {
        id: "power-conflict-short-stories-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen line:\n\n*\"Of course, Director,\" Yusuf murmured, bowing just low enough to hide the smile tugging at the corner of his mouth.*\n\nWhich term best describes Yusuf's behaviour toward authority here?",
        options: [
          "Strategic compliance concealing quiet, subversive triumph",
          "Complete psychological surrender to institutional intimidation",
          "Open verbal confrontation risking immediate dismissal",
          "Unintentional clumsiness causing him to lose balance",
        ],
        answerIndex: 0,
        hints: [
          "Look at BOTH parts of Yusuf's action: the obedient bow AND the hidden smile.",
          "Why does he perform deference outwardly while smiling out of view?",
        ],
        explanation:
          "Yusuf uses **strategic compliance** — performing expected respect (*'Of course, Director'*, bowing) as a physical shield to conceal his hidden triumph (*'smile tugging'*), proving he has quietly outmanoeuvred authority.",
      },
      {
        id: "power-conflict-short-stories-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "close-reading-prose",
        question:
          "Read this unseen closing paragraph:\n\n*When the inspectors finally drove away, the courtyard smelled of diesel and crushed lavender. Grandmother straightened one bent stem with her thumb, set the kettle on the stove, and began to hum.*\n\nHow does the writer's **closing imagery** shape the reader's final judgement of power?",
        options: [
          "It shows that the inspectors successfully crushed every trace of local culture",
          "It proves the grandmother was completely unaware that inspectors had visited",
          "It replaces earlier conflict with an unrelated recipe for herbal tea",
          "It juxtaposes harsh intrusion ('diesel') with quiet domestic resilience ('straightened... hum')",
        ],
        answerIndex: 3,
        hints: [
          "Contrast the sensory trace left by the inspectors ('diesel', 'crushed') with Grandmother's actions.",
          "What theme about ordinary endurance emerges in the final verb 'hum'?",
        ],
        explanation:
          "Juxtaposing industrial aggression (*'diesel and crushed lavender'*) against deliberate repair (*'straightened one bent stem'*) and calm continuity (*'began to hum'*) ends the extract on **quiet resilience**, suggesting state power cannot extinguish private dignity.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Unseen Extract Synthesis & Exam Craft
  // =========================================================================
  {
    id: "power-conflict-short-stories-m3",
    title: "MCQ Paper 3 — Unseen Extract Mastery & Exam Craft",
    questions: [
      {
        id: "power-conflict-short-stories-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "close-reading-prose",
        question:
          "Read this unseen extract:\n\n*The queue snaked past grey railings under a bleached sky. Every ten paces, a speaker repeated the same polite instruction in a voice smoothed of all warmth: 'Keep your papers visible. Keep moving.'*\n\nWhich **semantic field** dominates the opening atmosphere here?",
        options: [
          "Lush natural vitality celebrating freedom and open landscapes",
          "Warm domestic comfort evoking childhood security and hospitality",
          "Drained institutional control stripping colour and humanity from the scene",
          "Chaotic battlefield violence filled with explosions and sudden panic",
        ],
        answerIndex: 2,
        hints: [
          "Cluster the key words together: 'grey railings', 'bleached', 'repeated', 'smoothed of all warmth'.",
          "Notice the feeling of mechanical, colourless conformity rather than overt chaos.",
        ],
        explanation:
          "Words like *'grey railings'*, *'bleached'*, and *'smoothed of all warmth'* build a semantic field of **sterile institutional control**, portraying power as dehumanising, repetitive bureaucracy rather than chaotic violence.",
      },
      {
        id: "power-conflict-short-stories-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tension-pacing-syntax",
        question:
          "In the extract above, why does the verb *\"snaked\"* in *\"The queue snaked past grey railings\"* work more powerfully than a plain verb like *\"went\"*?",
        options: [
          "It subtly dehumanises the waiting crowd into a single winding, captive creature",
          "It informs the reader that dangerous reptiles are loose inside the building",
          "It speeds up the rhythm of the queue to show people are running excitedly",
          "It creates comic exaggeration suggesting everyone enjoys waiting outside",
        ],
        answerIndex: 0,
        hints: [
          "Apply the Substitution Test: compare 'went past railings' with 'snaked past railings'.",
          "What visual shape and loss of individuality does 'snaked' suggest?",
        ],
        explanation:
          "The zoomorphic verb *'snaked'* merges distinct human beings into one winding, herded line, reinforcing how state checkpoints strip away individual agency while also hinting at latent unease.",
      },
      {
        id: "power-conflict-short-stories-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen dialogue:\n\n*\"You look tired, Daniel,\" the supervisor said softly, resting both palms on the back of Daniel's chair. \"Perhaps a transfer to the night depot would help you reflect on your recent complaints.\"*\n\nHow do **physical positioning** and **euphemism** collaborate to intimidate Daniel?",
        options: [
          "Standing behind the chair offers friendly medical help for Daniel's fatigue",
          "The supervisor's soft voice proves he feels deep sympathy for Daniel's workload",
          "Transferring to the night depot is clearly framed as a generous promotion",
          "Looming over Daniel's chair traps his space while 'reflect' masks punishment",
        ],
        answerIndex: 3,
        hints: [
          "Picture where the supervisor's hands are: gripping the back of Daniel's chair from above.",
          "Decode the euphemism 'help you reflect on your recent complaints'.",
        ],
        explanation:
          "Gripping the chair back physically pins Daniel beneath the supervisor's height, while the polite euphemism *'help you reflect'* disguises retaliation (punitive night-shift exile) as paternal concern.",
      },
      {
        id: "power-conflict-short-stories-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "short-story-architecture",
        question:
          "Read this unseen extract:\n\n*At noon, the mayor unveiled his marble statue to thunderous applause. By dusk, the square was empty except for a stray dog sniffing the pedestal — and a thin red hairline crack already creeping up the stone ankle.*\n\nHow does this structural contrast foreshadow future conflict?",
        options: [
          "It proves the mayor deliberately hired sculptors to carve realistic veins",
          "It undercuts public triumph with quiet solitude and a symbolic flaw in authority",
          "It shifts the story's genre into an animal adventure about a heroic stray dog",
          "It shows the townspeople peacefully accepted the statue without any tension",
        ],
        answerIndex: 1,
        hints: [
          "Compare 'At noon... thunderous applause' with 'By dusk... empty... hairline crack'.",
          "What might a crack creeping up the statue's ankle symbolise about the mayor's regime?",
        ],
        explanation:
          "Contrasting noisy public flattery at noon with an empty square at dusk exposes how shallow forced loyalty is, while the *'hairline crack'* serves as a **symbolic foreshadowing** (Chekhov's detail) of the mayor's coming downfall.",
      },
      {
        id: "power-conflict-short-stories-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "close-reading-prose",
        question:
          "During the **4-minute annotation protocol** for a timed unseen prose extract, what should you do in **Minute 1** before underlining techniques?",
        options: [
          "Count every simile and alliterative pair before reading the ending",
          "Start writing your introductory paragraph immediately to save exam time",
          "Read the whole extract cleanly to trace the start-to-pivot-to-end arc",
          "Copy the longest descriptive sentence neatly onto your planning sheet",
        ],
        answerIndex: 2,
        hints: [
          "Why is it risky to start hunting devices in line 1 before seeing how line 35 ends?",
          "You need the big picture (power shift / mood arc) before zooming in.",
        ],
        explanation:
          "Reading the full extract once without pen in hand lets you grasp the **overall arc** (opening equilibrium → turning point → closing shift), ensuring every quotation you later select supports a coherent conceptual argument.",
      },
      {
        id: "power-conflict-short-stories-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen extract:\n\n*The floorboards did not creak; the hinge did not whine; the latch did not click. Only the clock on the mantelpiece ticked on, louder with every second she lingered beside the desk.*\n\nHow does the **parallel negative syntax** (*'did not...'*) build tension?",
        options: [
          "It proves the house is newly renovated with quiet, expensive modern furniture",
          "It reassures the reader that the character faces zero danger of being discovered",
          "It accelerates into frantic dialogue so the reader hears multiple shouting voices",
          "It stretches hyper-alert silence so even the ordinary clock feels deafening",
        ],
        answerIndex: 3,
        hints: [
          "Notice the triple negation ('did not creak... did not whine... did not click') followed by 'Only the clock'.",
          "Why is the narrator acutely aware of every sound that *didn't* happen?",
        ],
        explanation:
          "The triple **parallel negation** dramatises extreme stealth and nervous anticipation — every expected betrayal of sound is narrowly avoided, which amplifies the ordinary *'clock'* into a deafening countdown of exposure.",
      },
      {
        id: "power-conflict-short-stories-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "short-story-architecture",
        question:
          "In the *example story* *Harrison Bergeron* by Kurt Vonnegut, citizens with exceptional intelligence wear earpieces that blast painful noises every twenty seconds to scatter their thoughts.\n\nHow does this concrete detail exemplify **short-story narrative economy**?",
        options: [
          "It spends ten chapters explaining the electrical circuitry of radio transmitters",
          "It instantly dramatises state-enforced conformity through one visceral sensory prop",
          "It focuses solely on a family's humorous argument over loud television volume",
          "It proves short stories should avoid science-fiction settings when exploring power",
        ],
        answerIndex: 1,
        hints: [
          "Notice how one physical object conveys an entire political system without a textbook lecture.",
          "Think about 'show, don't tell' compressed into a single recurring device.",
        ],
        explanation:
          "Rather than lecturing on totalitarianism, one vivid concrete object (the mental handicap radio) immediately makes abstract state tyranny physically audible and agonising — textbook **narrative economy**.",
      },
      {
        id: "power-conflict-short-stories-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "close-reading-prose",
        question:
          "Read this unseen sentence:\n\n*His apology arrived wrapped in parchment ribbons, sealed in crimson wax, and completely emptied of regret.*\n\nWhich analytical interpretation best unpacks the **bathos / ironic anticlimax** at the end of this tricolon?",
        options: [
          "Two grand ceremonial images set up expectation before the blunt third clause exposes hollow hypocrisy",
          "Three equal sensory details prove the sender spent generous care writing a heartfelt confession",
          "The crimson wax metaphor shows the writer supports traditional letter-writing customs",
          "Repeating three clauses speeds up the pace to show the messenger ran frantically",
        ],
        answerIndex: 0,
        hints: [
          "Look at the first two items ('parchment ribbons', 'crimson wax') versus the abrupt third ('emptied of regret').",
          "How does the decorative buildup make the hollow ending sting sharper?",
        ],
        explanation:
          "The ornate **tricolon** builds pompous formality (*'parchment ribbons'*, *'crimson wax'*) only to puncture it on the final beat (*'completely emptied of regret'*), exposing how the powerful use ceremony to disguise insincerity.",
      },
      {
        id: "power-conflict-short-stories-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen exchange:\n\n*\"Did you see who painted the wall, Leo?\"*\n*\"I was indoors by six, Sergeant.\"*\n*\"I asked whether you saw who painted it.\"*\n*\"My window faces the river, Sergeant.\"*\n\nWhat conversational tactic is Leo using to resist interrogation?",
        options: [
          "Open shouting that risks immediate arrest for disrespecting an officer",
          "Emotional pleading designed to win the Sergeant's personal forgiveness",
          "Evasive, literal compliance that avoids both lying and betraying anyone",
          "Accidental misunderstanding because Leo cannot hear the Sergeant clearly",
        ],
        answerIndex: 2,
        hints: [
          "Check whether Leo ever actually answers 'yes' or 'no' to the Sergeant's direct question.",
          "Notice how polite ('Sergeant') yet unyielding his factual deflections are.",
        ],
        explanation:
          "Leo practises **guarded evasion**: by keeping polite formal address (*'Sergeant'*) while offering strictly factual, non-incriminating details, he denies the interrogator leverage without committing open defiance.",
      },
      {
        id: "power-conflict-short-stories-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen extract:\n\n*She counted the steps to the gate: twelve. She counted the guards by the lamp: two. She counted the matches left in her pocket: one.*\n\nHow do **anaphora** (*'She counted...'*) and the descending numbers (*12 → 2 → 1*) shape tension?",
        options: [
          "They show the protagonist is revising mental arithmetic to pass boring time",
          "They narrow odds down to a razor's edge, combining calm discipline with huge risk",
          "They prove the guards have noticed her and are already closing in rapidly",
          "They create a humorous nursery-rhyme rhythm that removes all seriousness",
        ],
        answerIndex: 1,
        hints: [
          "Track the numbers after each colon: twelve, two, one.",
          "What does counting methodically tell you about her composure AND how slender her chance is?",
        ],
        explanation:
          "The repeated opening (*'She counted'*) conveys taut self-control, while the colons spotlight a shrinking countdown (*12 → 2 → 1*) that leaves the entire plan hinging on a single fragile match.",
      },
      {
        id: "power-conflict-short-stories-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "close-reading-prose",
        question:
          "A student plans a 3-paragraph essay on an unseen 35-line extract about a tense family dispute over an inheritance.\n\nWhich **essay plan** shows the strongest conceptual and structural control?",
        options: [
          "Para 1: Similes anywhere in the extract; Para 2: Alliteration; Para 3: Short sentences",
          "Para 1: Retell lines 1–12; Para 2: Retell lines 13–24; Para 3: Retell lines 25–35",
          "Para 1: Biography of the author; Para 2: Dictionary definitions; Para 3: Personal opinion",
          "Para 1: Opening polite facade; Para 2: Escalating verbal fractures; Para 3: Closing power shift",
        ],
        answerIndex: 3,
        hints: [
          "Compare grouping by disconnected technique labels versus tracking how conflict evolves across the extract.",
          "Top-band responses integrate language and structure along the text's emotional arc.",
        ],
        explanation:
          "Organising paragraphs by **conceptual progression across the extract** (polite facade → verbal fractures → closing power shift) lets you weave language, syntax, and structure seamlessly while proving you grasped the extract as a dynamic whole.",
      },
      {
        id: "power-conflict-short-stories-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "short-story-architecture",
        question:
          "What is the **inciting incident** in a short story structured around Freytag's Pyramid?",
        options: [
          "The specific trigger event that shatters the opening balance and launches the main conflict",
          "The opening description of weather and architecture before any character speaks",
          "The calm closing paragraph after every argument has been completely resolved",
          "The background explanation of a protagonist's childhood before the story begins",
        ],
        answerIndex: 0,
        hints: [
          "Think about the word 'incite' — to provoke or spark something into motion.",
          "Which beat moves a story out of exposition into rising action?",
        ],
        explanation:
          "The **inciting incident** disrupts the initial equilibrium and forces the protagonist into a high-stakes choice or confrontation, propelling the narrative into rising action.",
      },
      {
        id: "power-conflict-short-stories-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "power-dynamics-subtext",
        question:
          "Read this unseen line:\n\n*\"We only built the wall to keep you safe,\" the councilman sighed, patting the boy's shoulder as the heavy lock dropped into place.*\n\nWhich analytical claim captures the **layered critique of power** here most perceptively?",
        options: [
          "The councilman feels genuinely exhausted from doing heavy physical construction work",
          "The boy gratefully welcomes the wall because he fears walking in open streets",
          "Paternal affection ('patted', 'safe') is weaponised to disguise imprisonment as care",
          "The heavy lock shows poor engineering that threatens the councilman's own safety",
        ],
        answerIndex: 2,
        hints: [
          "Compare the comforting vocabulary ('keep you safe', 'patting') with the unmistakable reality ('heavy lock dropped into place').",
          "How do oppressive regimes justify control using the language of protection?",
        ],
        explanation:
          "Combining protective rhetoric (*'keep you safe'*) and patronising warmth (*'patting'*) with the final metallic thud of the *'heavy lock'* exposes **paternalistic authoritarianism** — portraying control as care while enforcing captivity.",
      },
      {
        id: "power-conflict-short-stories-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "close-reading-prose",
        question:
          "Read this unseen sentence:\n\n*Outside the courtroom, rain lashed the iron railings, but inside, the judge's voice remained cool and dry as chalk.*\n\nWhat effect does the writer create through the **juxtaposition** of setting and voice?",
        options: [
          "It shows that courtroom windows are badly insulated against winter storms",
          "It contrasts turbulent emotional outrage outside with sterile, unfeeling authority inside",
          "It suggests the judge has a sore throat and needs a glass of water soon",
          "It introduces comedic relief by comparing a senior judge to classroom stationery",
        ],
        answerIndex: 1,
        hints: [
          "Contrast the violent, wet energy of 'rain lashed' with the arid simile 'cool and dry as chalk'.",
          "What does 'chalk' connote about human sympathy or flexibility?",
        ],
        explanation:
          "Juxtaposing fierce weather (*'rain lashed'*) against the arid simile *'dry as chalk'* dramatises the chasm between raw human turmoil and cold, brittle institutional detachment.",
      },
      {
        id: "power-conflict-short-stories-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "tension-pacing-syntax",
        question:
          "Read this unseen closing beat:\n\n*He reached the border post. Showed the forged pass. Held his breath while the ink smeared slightly under the officer's damp thumb. Waited.*\n\nWhy does placing the single-word sentence *\"Waited.\"* at the very end create acute suspense?",
        options: [
          "It signals that the officer immediately stamped the passport and waved him through",
          "It proves the protagonist forgot to bring the correct ink for his signature",
          "It shows the narrator is rushing carelessly and forgot to add a subject pronoun",
          "It freezes narrative time in mid-air, suspending both character and reader in dread",
        ],
        answerIndex: 3,
        hints: [
          "Notice the stripped-down subject ('He') disappearing across consecutive fragments until only a single verb remains.",
          "Does the extract tell us whether the officer spots the forgery?",
        ],
        explanation:
          "Dropping the subject pronoun across compressed fragments culminates in the lone verb *'Waited.'*, freezing time at the exact knife-edge of exposure so the reader shares the character's suspended terror.",
      },
    ],
  },
];
