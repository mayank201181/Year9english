import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1: Explicit Retrieval, Deep Inference & Tone Precision
  // =========================================================================
  {
    id: "comprehension-inference-m1",
    title: "MCQ Paper 1 — Retrieval, Inference & Tone Precision",
    questions: [
      {
        id: "comprehension-inference-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"The ferry leaves harbour at 06:15 sharp, yet by 06:10 the ticket kiosk was already shuttered and two deckhands were untying the bow rope."*\n\nWhich statement is an **explicit fact** stated directly in the passage?',
        options: [
          "The ferry is scheduled to depart at 06:15.",
          "The ferry crew wanted to leave late passengers behind.",
          "The ticket seller had overslept that morning.",
          "The crossing was expected to be unusually rough.",
        ],
        answerIndex: 0,
        hints: [
          "Check which option you can point to word-for-word on the page without guessing.",
        ],
        explanation:
          "The passage explicitly states that the ferry leaves at 06:15. Claiming the crew wanted to abandon passengers or that the seller overslept goes beyond what is stated directly.",
      },
      {
        id: "comprehension-inference-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"When the regional inspector asked whether the new lab computers worked reliably, Ms Lim smiled tightly and suggested they inspect the library’s history display instead."*\n\nWhat can a reader best **infer** from Ms Lim’s response?',
        options: [
          "She prefers teaching history rather than computing.",
          "She is deflecting because the computers are unreliable.",
          "She did not hear the inspector’s original question.",
          "She plans to move all computers into the library.",
        ],
        answerIndex: 1,
        hints: [
          "Look at both her body language ('smiled tightly') and her sudden change of subject.",
        ],
        explanation:
          "A forced smile combined with immediately redirecting the inspector away from the lab implies discomfort and deliberate avoidance, suggesting the computers are not working reliably.",
      },
      {
        id: "comprehension-inference-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"Every evening at seven, Grandfather polished the brass barometer on the hallway wall even though the glass needle had rusted in place a decade ago."*\n\nWhich inference is **best supported** by the textual clues?',
        options: [
          "Grandfather is unaware that the glass needle no longer moves.",
          "Grandfather intends to sell the barometer to an antique shop.",
          "The barometer holds deep sentimental or ritual comfort for him.",
          "The hallway is too humid to keep any household instruments.",
        ],
        answerIndex: 2,
        hints: [
          "Notice the phrase 'even though' — it highlights a contrast between practical usefulness and daily care.",
          "Ask why someone still polishes an object every evening long after it stops functioning.",
        ],
        explanation:
          "Polishing a broken instrument every single evening at the same hour suggests attachment, habit, and sentimental value rather than practical weather forecasting or plans to sell it.",
      },
      {
        id: "comprehension-inference-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"The brochure promised ‘panoramic ocean serenity’; our balcony faced a concrete air-conditioning unit whose rhythmic clatter drowned out the surf below."*\n\nWhy is *"The family demanded a full refund from the travel agent"* a **weak inference**?',
        options: [
          "It relies on formal vocabulary rather than simple words.",
          "It focuses too heavily on the balcony instead of the ocean.",
          "It ignores the sound made by the nearby waves.",
          "It invents an unmentioned event instead of reading subtext.",
        ],
        answerIndex: 3,
        hints: [
          "Check whether the extract gives any clue about what the family did afterwards.",
          "Distinguish between inferring *disappointment* and inventing a future plot action.",
        ],
        explanation:
          "While we can validly infer disappointment or irony from the clash between the brochure and reality, claiming they demanded a refund invents an unsupported action not hinted at in the text.",
      },
      {
        id: "comprehension-inference-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"Beneath the soaring limestone arches, nobody dares check a phone; even the guide speaks in hushed syllables as light spills across the silent pool."*\n\nWhich tone word best captures the writer’s attitude here?',
        options: [
          "Sceptical and questioning",
          "Reverent and awestruck",
          "Sardonic and mocking",
          "Impatient and urgent",
        ],
        answerIndex: 1,
        hints: [
          "Examine words such as 'soaring', 'nobody dares', 'hushed syllables', and 'silent pool'.",
        ],
        explanation:
          "Elevated architectural imagery ('soaring limestone arches') paired with quiet restraint ('hushed syllables') conveys deep respect and awe — the exact definition of a reverent tone.",
      },
      {
        id: "comprehension-inference-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"In a triumphant display of municipal efficiency, the town spent two million dollars repainting a bus lane that no bus has used since 2019."*\n\nWhich word most accurately describes the writer’s tone?',
        options: [
          "Sardonic",
          "Nostalgic",
          "Reverent",
          "Detached",
        ],
        answerIndex: 0,
        hints: [
          "Compare the grand opening phrase ('triumphant display of municipal efficiency') with the absurd ending.",
          "What tone uses biting irony to mock wasted effort?",
        ],
        explanation:
          "Calling an absurd waste of money a 'triumphant display of municipal efficiency' is biting irony — a classic sardonic tone rather than sincere praise or neutral detachment.",
      },
      {
        id: "comprehension-inference-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"The app’s founders claim their algorithm can ‘double teen concentration in ten days’, yet their entire trial lasted one afternoon and surveyed twenty-two relatives."*\n\nWhat is the writer’s primary attitude toward the founders’ claim?',
        options: [
          "Nostalgic for traditional study methods",
          "Reverent toward scientific innovation",
          "Urgent about banning smartphone apps",
          "Sceptical of the flimsy supporting evidence",
        ],
        answerIndex: 3,
        hints: [
          "Look at the pivot word 'yet' and the details exposed afterwards ('one afternoon', 'twenty-two relatives').",
          "Is the writer calling for a ban, or questioning whether the proof holds up?",
        ],
        explanation:
          "By highlighting the tiny, biased trial ('twenty-two relatives' over 'one afternoon') alongside the verb 'claim', the writer adopts a sceptical stance that exposes weak evidence.",
      },
      {
        id: "comprehension-inference-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"Every summer before the bypass opened, we bicycled down Sungei Lane with paper bags of warm peanuts, counting kingfishers on the telegraph wires."*\n\nWhich tone word best fits this passage?',
        options: [
          "Urgent",
          "Sardonic",
          "Nostalgic",
          "Objective",
        ],
        answerIndex: 2,
        hints: [
          "Notice the warm sensory memories ('warm peanuts', 'counting kingfishers') tied to a time 'before the bypass opened'.",
          "Which tone means wistful affection for the past?",
        ],
        explanation:
          "Fond sensory details anchored to a vanished era ('before the bypass opened') create a wistful, nostalgic tone looking back warmly on childhood summers.",
      },
      {
        id: "comprehension-inference-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'Compare two newspaper lines reporting the same protest:\n- Line 1: *"Residents gathered outside Town Hall to question the park sale."*\n- Line 2: *"A vocal mob descended on Town Hall to derail the park redevelopment."*\n\nWhich technique primarily creates bias in Line 2?',
        options: [
          "Loaded diction replacing neutral nouns and verbs",
          "Excessive reliance on official council statistics",
          "A nostalgic contrast with earlier town meetings",
          "Direct address pulling the reader into the crowd",
        ],
        answerIndex: 0,
        hints: [
          "Compare 'residents / gathered / question' against 'mob / descended / derail'.",
          "Notice how changing individual words alters sympathy without changing the basic event.",
        ],
        explanation:
          "Replacing neutral words ('residents', 'gathered', 'question') with aggressive, negatively charged equivalents ('mob', 'descended', 'derail') is loaded diction that biases the reader against the protesters.",
      },
      {
        id: "comprehension-inference-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the opening of a feature article:\n\n*"At 04:45 every morning, seventy-year-old Mei Ling unlocks her noodle stall before the first streetlamp flickers off. Across the city, however, nearly 40% of heritage hawker stalls now have no younger successor."*\n\nWhy does the writer move from Mei Ling to the 40% statistic?',
        options: [
          "To prove that Mei Ling works longer hours than younger cooks",
          "To contrast rural cooking traditions with modern supermarkets",
          "To build human empathy before proving the issue’s wider scale",
          "To confuse readers by mixing personal stories with maths",
        ],
        answerIndex: 2,
        hints: [
          "Track the structural zoom: one individual person first, then 'Across the city'.",
          "Think about how anecdote and statistic reinforce each other.",
        ],
        explanation:
          "Zooming in on Mei Ling creates warm personal attachment first, so when the writer zooms out to the 40% figure, the statistical decline feels emotionally real rather than abstract.",
      },
      {
        id: "comprehension-inference-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the closing lines of a speech on coastal wetlands:\n\n*"We have drained half the marshes in forty years. We have concreted the shoreline. If we wait for another committee report, there will be nothing left to protect. Act this term."*\n\nWhat is the primary effect of the final three-word imperative *"Act this term."*?',
        options: [
          "It introduces a humorous pun to relax a tense audience.",
          "It pauses the speech to acknowledge opposing developers.",
          "It shifts the register into nostalgic reflection on history.",
          "It creates abrupt urgency that demands immediate action.",
        ],
        answerIndex: 3,
        hints: [
          "Compare the rhythm of the longer conditional sentence before it with the sharp three-word command.",
          "Imperatives ('Act') issue a direct call to the audience.",
        ],
        explanation:
          "Ending with a clipped three-word imperative after longer warning sentences strips away delay and hits the listener with stark urgency.",
      },
      {
        id: "comprehension-inference-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesis-summary",
        question:
          'Read this short passage about rooftop farms:\n- Passage: *"Urban rooftop farms cool overheated buildings by up to 3°C, supply salad greens within kilometres of diners, and absorb heavy monsoon runoff before drains overflow."*\n\nWhich one-sentence summary best uses **own words** while capturing all three points?',
        options: [
          "Rooftop farms are lovely green spaces that make city roofs attractive.",
          "Growing crops on roofs lowers building heat, shortens food miles, and eases flood pressure.",
          "Urban rooftop farms cool buildings by 3°C, supply salad greens, and absorb monsoon runoff.",
          "Monsoon drains often overflow when cities build tall offices without salad farms.",
        ],
        answerIndex: 1,
        hints: [
          "Count all three distinct benefits in the original: temperature, local food supply, and flood absorption.",
          "Reject the option that copies the passage’s phrasing almost word for word.",
        ],
        explanation:
          "Paraphrasing all three effects accurately ('lowers building heat', 'shortens food miles', 'eases flood pressure') demonstrates full comprehension without lifting verbatim chunks.",
      },
      {
        id: "comprehension-inference-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesis-summary",
        question:
          'Read the paired viewpoints on museum admission fees:\n- **Text A:** *"Free entry ensures a teenager with empty pockets can stand beside a priceless canvas just like any millionaire."*\n- **Text B:** *"Modest ticket charges fund climate-controlled vaults and late-night conservation labs that free budgets cannot sustain."*\n\nWhich synthesis sentence integrates both texts most effectively?',
        options: [
          "Text A likes free museums and Text B thinks tickets are better for climate vaults.",
          "Both passages agree that teenagers visit museums less often at night than wealthy adults.",
          "Whereas Text A champions free access as social equality, Text B defends fees as vital for preservation.",
          "Text A talks about canvases while Text B ignores art completely to focus on electricity costs.",
        ],
        answerIndex: 2,
        hints: [
          "Look for an option that weaves both texts together around a clear conceptual contrast in precise academic vocabulary.",
          "Eliminate options that misread either passage or use overly vague wording.",
        ],
        explanation:
          "Using 'Whereas' to pair social equality from Text A directly against conservation funding in Text B produces a crisp, conceptual synthesis in the writer’s own words.",
      },
      {
        id: "comprehension-inference-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"Our local library once smelled of cedar shelves and rain-damp coats, a quiet sanctuary where teenagers lingered after dusk. Now, thanks to a ‘streamlined digital hub’ remodel, two humming vending machines guard six rows of bolted plastic stools."*\n\nHow does the writer’s tone shift across this extract?',
        options: [
          "From warm nostalgia to sardonic disapproval of the sterile redesign",
          "From urgent alarm to objective approval of modern technology",
          "From detached neutrality to reverent admiration of digital spaces",
          "From bitter mockery to fond relief that seats are easier to clean",
        ],
        answerIndex: 0,
        hints: [
          "Look at the sensory words before 'Now' ('cedar shelves', 'quiet sanctuary') versus after it ('humming vending machines', 'bolted plastic stools').",
          "Notice the scare quotes around 'streamlined digital hub' — they signal dry mockery.",
        ],
        explanation:
          "The opening evokes affectionate nostalgia ('cedar shelves', 'sanctuary'), then pivots at 'Now' into sardonic critique using scare quotes ('streamlined digital hub') and sterile, prison-like diction ('guard', 'bolted plastic stools').",
      },
      {
        id: "comprehension-inference-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"The director thanked the departing editor for ‘seventeen memorable years of lively debate’ and wished him well in ‘pursuing fresh horizons outside journalism’."*\n\nWhat subtle subtext can a perceptive reader infer from this formal farewell?',
        options: [
          "The editor won a major international prize for his debates.",
          "The director hopes the editor will return next autumn.",
          "The newspaper is shutting down its entire print division.",
          "The departure likely followed clashes rather than warm consensus.",
        ],
        answerIndex: 3,
        hints: [
          "Read the polite corporate euphemisms carefully: 'lively debate' and 'fresh horizons outside journalism'.",
          "Why would a newspaper director subtly steer a veteran editor *outside journalism*?",
        ],
        explanation:
          "In formal corporate prose, 'lively debate' often masks sharp conflict, and wishing a lifelong editor 'fresh horizons outside journalism' hints at a strained or forced exit dressed in polite language.",
      },
    ],
  },

  // =========================================================================
  // PAPER M2: Non-Fiction Language, Structure & Bias Detection
  // =========================================================================
  {
    id: "comprehension-inference-m2",
    title: "MCQ Paper 2 — Non-Fiction Craft, Structure & Bias",
    questions: [
      {
        id: "comprehension-inference-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from an environmental column:\n\n*"Look inside your own school locker before blaming distant factories for plastic waste."*\n\nWhich pair of language techniques is used in this single sentence?',
        options: [
          "Simile and historical statistic",
          "Imperative verb and direct address",
          "Anecdote and cyclical structure",
          "Expert quotation and passive voice",
        ],
        answerIndex: 1,
        hints: [
          "Notice the command word opening the sentence ('Look') and the pronoun pointing at the reader ('your').",
        ],
        explanation:
          "'Look' is an imperative verb commanding action, and 'your' is direct address pulling the reader into personal accountability.",
      },
      {
        id: "comprehension-inference-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from a travel article:\n\n*"In the luxury resort lobby, chilled jasmine water sparkled in crystal dispensers while air-conditioners purred like contented cats. Ten metres past the perimeter gate, residents queued beside a dry standpipe with battered blue jerrycans."*\n\nWhat structural device drives the impact of these two sentences?',
        options: [
          "Chronological flashback across two centuries",
          "A cyclical echo returning to the opening lobby",
          "A series of rhetorical questions challenging tourists",
          "Sharp juxtaposition contrasting abundance with scarcity",
        ],
        answerIndex: 3,
        hints: [
          "Look at what is placed side by side across a distance of just 'ten metres'.",
          "Compare 'crystal dispensers' with 'a dry standpipe'.",
        ],
        explanation:
          "Placing luxurious water abundance ('chilled jasmine water', 'crystal dispensers') immediately beside water shortage ('dry standpipe', 'battered blue jerrycans') creates stark juxtaposition that exposes inequality.",
      },
      {
        id: "comprehension-inference-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'An article opposing a new cycling lane quotes three angry shopkeepers and one delivery driver, but never mentions safety data, cyclists’ views, or footfall figures from other streets with bike lanes.\n\nWhich form of bias is most evident here?',
        options: [
          "Selective omission of counter-evidence and rival voices",
          "Overuse of reverent imagery praising local cyclists",
          "Excessive scientific jargon obscuring simple facts",
          "Nostalgic idealisation of nineteenth-century transport",
        ],
        answerIndex: 0,
        hints: [
          "Ask: *who* gets to speak in this article, and whose evidence is left out completely?",
          "Leaving out one side of the story is a classic bias strategy.",
        ],
        explanation:
          "Interviewing only opponents while omitting safety data and cyclist perspectives is selective omission, skewing the reader’s impression by hiding counter-evidence.",
      },
      {
        id: "comprehension-inference-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from a broadsheet essay:\n\n*"Granted, extending library hours costs money in lighting and evening staffing. Yet every dollar spent keeping quiet reading rooms open repays a neighbourhood tenfold in calmer streets and stronger exam results."*\n\nWhy does the writer begin with *"Granted, extending library hours costs money…"*?',
        options: [
          "To prove that the writer has changed sides midway through",
          "To fill extra space before reaching the main conclusion",
          "To concede a rival point so the rebuttal feels fair and reasoned",
          "To distract readers from the true cost of library lighting",
        ],
        answerIndex: 2,
        hints: [
          "Look at the two-step move: 'Granted…' followed immediately by 'Yet…'.",
          "How does acknowledging an obvious objection affect a writer’s credibility?",
        ],
        explanation:
          "Conceding the obvious financial objection before rebutting it with 'Yet' boosts the writer’s authority, showing they have weighed costs honestly rather than ignoring reality.",
      },
      {
        id: "comprehension-inference-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read this paragraph break from a disaster report:\n\n*"For three hours engineers checked valves, reviewed pressure charts, recalibrated gauges, and reassured reporters that the coastal levee had weathered far heavier gales over the previous forty winters.\n\nAt 02:14, the levee failed."*\n\nHow does the single-sentence paragraph *"At 02:14, the levee failed."* affect the reader?',
        options: [
          "It maintains the calm, unhurried rhythm of the first paragraph.",
          "It reassures the audience that engineers stayed alert all night.",
          "It adds decorative background detail about winter weather.",
          "It abruptly shatters misplaced confidence with stark finality.",
        ],
        answerIndex: 3,
        hints: [
          "Contrast the long, busy list of reassuring actions with the blunt five-word paragraph below it.",
          "Notice the exact timestamp ('At 02:14') stripping away all reassurance.",
        ],
        explanation:
          "Isolating a blunt, five-word sentence after a sprawling list of technical reassurances creates a dramatic structural jolt that underscores how abruptly confidence collapsed.",
      },
      {
        id: "comprehension-inference-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"The company insists its new packaging is ‘planet-friendly’, a comforting label printed in leafy green ink over three layers of non-recyclable foil."*\n\nHow do the quotation marks around *‘planet-friendly’* function here?',
        options: [
          "They show the writer enthusiastically endorses the company’s design.",
          "They signal ironic disbelief by distancing the writer from the claim.",
          "They indicate that the phrase is a technical scientific measurement.",
          "They remind the reader that green ink is expensive to manufacture.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the quoted label with what follows: 'three layers of non-recyclable foil'.",
          "When a writer wraps a slogan in inverted commas and exposes hypocrisy, what attitude is signalled?",
        ],
        explanation:
          "Scare quotes distance the writer from the corporate slogan 'planet-friendly', exposing the ironic gap between leafy green branding and non-recyclable foil.",
      },
      {
        id: "comprehension-inference-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the headline:\n\n**"SILENT STREETS, EMPTY TILLS: HOW NIGHTLY CLOSURES ARE DRAINING THE HIGH STREET"**\n\nWhich analytical comment avoids generic filler and explains the headline’s language precisely?',
        options: [
          "The metaphor 'draining' portrays closures as sapping vitality, while the paired images link quiet streets to financial loss.",
          "The headline uses capital letters and a colon, which grabs the reader’s attention and makes them want to read on.",
          "The headline mentions streets and tills so the reader knows the article will talk about local shops at night.",
          "The word 'how' creates a rhetorical question that forces shoppers to buy more goods immediately.",
        ],
        answerIndex: 0,
        hints: [
          "Eliminate vague filler like 'grabs the reader’s attention' or simple literal restatement.",
          "Look for precise analysis of both the metaphor ('draining') and the paired structure ('Silent streets, empty tills').",
        ],
        explanation:
          "Zooming into the verb metaphor 'draining' (suggesting lifeblood or vitality leaking away) and the parallel pairing of 'silent streets' with 'empty tills' delivers specific, high-band analysis.",
      },
      {
        id: "comprehension-inference-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"Although the observatory opens to tourists until midnight, Dr Nair arrives at 03:30 with a thermos of black tea, smiling only when the final shuttle bus disappears down the ridge."*\n\nWhat can a reader infer about Dr Nair’s relationship with her work environment?',
        options: [
          "She dislikes drinking coffee and prefers morning tea.",
          "She wants the observatory closed to the public permanently.",
          "She treasures solitude and finds crowds intrusive to her work.",
          "She has difficulty waking up before dawn for her shifts.",
        ],
        answerIndex: 2,
        hints: [
          "Look closely at when she finally smiles: 'only when the final shuttle bus disappears'.",
          "Combine her 03:30 arrival with her relief at the tourists leaving.",
        ],
        explanation:
          "Arriving hours before dawn and smiling 'only' once the last tourist shuttle leaves implies that she deeply values quiet solitude and feels constrained by daytime visitors.",
      },
      {
        id: "comprehension-inference-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'An investigative article about disappearing night skies begins with a boy in 1962 naming six constellations from his back garden, traces decades of urban floodlighting, and ends with his granddaughter staring up from the same garden at an orange glare with only two stars visible.\n\nWhat is the effect of this **cyclical structure**?',
        options: [
          "It proves that telescopes were more affordable in 1962.",
          "It measures generational loss by mirroring the same place transformed.",
          "It shows that the granddaughter has less interest in astronomy.",
          "It creates light-hearted comedy by repeating a family story.",
        ],
        answerIndex: 1,
        hints: [
          "Compare the opening scene and closing scene: same garden, different sky.",
          "How does returning to the exact location heighten the emotional impact of environmental change?",
        ],
        explanation:
          "Returning to the identical back garden two generations later turns light pollution from an abstract statistic into a poignant, measurable loss between grandfather and granddaughter.",
      },
      {
        id: "comprehension-inference-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'Read this science-news paragraph:\n\n*"Researchers tracked 1,400 secondary pupils over eighteen months. Students who kept phones outside bedrooms averaged thirty-seven extra minutes of sleep per night; however, researchers noted that household routines also influenced results."*\n\nWhich term best describes the register and tone of this passage?',
        options: [
          "Sardonic and colloquial",
          "Urgent and alarmist",
          "Nostalgic and lyrical",
          "Objective and measured",
        ],
        answerIndex: 3,
        hints: [
          "Look for neutral reporting verbs ('tracked', 'averaged', 'noted') and the balanced caveat after 'however'.",
          "Does the passage push loaded emotion or report findings impartially?",
        ],
        explanation:
          "Neutral verbs, concrete sample sizes, and openly noting a confounding variable ('household routines also influenced results') mark an objective, measured tone.",
      },
      {
        id: "comprehension-inference-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from a speech:\n\n*"Can we truly call ourselves a coastal nation if our children recognise forty brand logos before they can name a single mangrove species?"*\n\nWhat is the rhetorical purpose of this question?',
        options: [
          "To challenge complacency by exposing an embarrassing cultural contrast",
          "To gather survey statistics from parents sitting in the audience",
          "To test whether students have revised their biology flashcards",
          "To praise advertising agencies for creating memorable designs",
        ],
        answerIndex: 0,
        hints: [
          "Notice that the speaker does not expect listeners to shout out 'yes' or 'no'.",
          "Look at the contrast packed inside the question: 'forty brand logos' vs 'a single mangrove species'.",
        ],
        explanation:
          "This rhetorical question forces the audience to confront the uncomfortable contrast between commercial saturation and ecological ignorance, questioning national identity.",
      },
      {
        id: "comprehension-inference-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesis-summary",
        question:
          'Read two descriptions of mountain climbing:\n- **Text A:** *"Every gasp at 4,000 metres strips away petty worries until only breath, stone, and sky remain."*\n- **Text B:** *"High altitude dulls judgement rapidly; headaches, nausea, and sluggish reflexes turn minor slips into emergencies."*\n\nWhich axis best frames a cross-text synthesis comparing both passages?',
        options: [
          "Differences in climbing boots and alpine jacket prices",
          "Disagreements over the exact height of the world’s tallest peaks",
          "Spiritual clarity versus physical hazard at high altitude",
          "Historical debates about who first mapped mountain passes",
        ],
        answerIndex: 2,
        hints: [
          "Look at what Text A celebrates ('strips away petty worries') versus what Text B warns about ('dulls judgement', 'emergencies').",
          "Choose the abstract theme that connects BOTH passages cleanly.",
        ],
        explanation:
          "Both passages focus on the human effect of high altitude, diverging sharply between Text A’s mental/spiritual clarity and Text B’s clinical focus on physical danger.",
      },
      {
        id: "comprehension-inference-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"Naturally, rather than repairing the leaking roof before monsoon season, the committee commissioned a glossy sixty-page ‘resilience roadmap’ — printed, fittingly enough, on waterproof paper."*\n\nWhich pair of features creates the writer’s biting irony?',
        options: [
          "Reverent vocabulary paired with earnest statistics",
          "Conversational adverbs ('Naturally', 'fittingly') paired with an absurd punchline",
          "Nostalgic sensory details paired with a warm personal anecdote",
          "Objective reporting verbs paired with balanced counter-arguments",
        ],
        answerIndex: 1,
        hints: [
          "Notice the dry commentary markers 'Naturally' and 'fittingly enough'.",
          "Why is printing a leak-prevention report on 'waterproof paper' an ironic punchline?",
        ],
        explanation:
          "Dry conversational adverbs ('Naturally', 'fittingly enough') frame bureaucratic inaction as predictably absurd, culminating in the ironic detail of waterproof paper for a still-leaking roof.",
      },
      {
        id: "comprehension-inference-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from an opinion piece on AI-generated essays:\n\n*"First it drafts your opening hook. Next it polishes your transitions. Soon you no longer remember what it feels like to wrestle an untidy thought into clarity — and without that struggle, the muscle of judgement quietly withers."*\n\nHow does the progression of time markers (*First… Next… Soon…*) combine with the final metaphor?',
        options: [
          "It traces a gradual, deceptive slide into intellectual atrophy.",
          "It offers a cheerful three-step tutorial for faster essay writing.",
          "It contrasts ancient Greek education with twenty-first-century exams.",
          "It reassures readers that writing skills return effortlessly later.",
        ],
        answerIndex: 0,
        hints: [
          "Follow the pace from seemingly harmless help ('drafts your opening hook') to the final verb ('withers').",
          "What does comparing judgement to a 'muscle' suggest happens when it stops being exercised?",
        ],
        explanation:
          "The chronological sequence ('First… Next… Soon…') mirrors a creeping dependency, while the anatomical metaphor ('muscle of judgement quietly withers') warns that outsourcing struggle erodes critical thinking.",
      },
      {
        id: "comprehension-inference-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "synthesis-summary",
        question:
          'A question asks: *"Synthesise what both writers reveal about the **hidden pressures** on young athletes."* Text A describes strict 5 a.m. swim schedules, sparkling medal cabinets, and silent fear of disappointing parents. Text B describes sponsorship contracts, cheerful Instagram reels, and lonely recovery after knee injuries.\n\nWhich details should you **omit** to keep your synthesis tightly focused?',
        options: [
          "The fear of disappointing parents and lonely injury recovery",
          "The 5 a.m. training routines and sponsorship contract demands",
          "The gleaming medal cabinets and cheerful social-media highlights",
          "Both writers’ observations about unspoken emotional stress",
        ],
        answerIndex: 2,
        hints: [
          "Re-read the exact question focus: **hidden pressures**.",
          "Which details represent the glamorous *public surface* rather than hidden pressures (unless used briefly as contrast)?",
        ],
        explanation:
          "Glamorous trophies and polished social-media reels are the visible public facade, not the hidden pressures themselves; cutting decorative surface detail keeps a summary razor-focused on the prompt.",
      },
    ],
  },

  // =========================================================================
  // PAPER M3: Synthesis, Subtle Irony & Year 9 Exam Mastery
  // =========================================================================
  {
    id: "comprehension-inference-m3",
    title: "MCQ Paper 3 — Cross-Text Synthesis & Subtle Subtext",
    questions: [
      {
        id: "comprehension-inference-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "synthesis-summary",
        question:
          'Which connective best links two texts that present **directly opposing** conclusions on the same issue?',
        options: [
          "Furthermore",
          "Similarly",
          "Conversely",
          "Consequently",
        ],
        answerIndex: 2,
        hints: [
          "Eliminate connectives that signal addition, similarity, or cause-and-effect.",
        ],
        explanation:
          "'Conversely' signals an opposite or contrasting perspective, whereas 'similarly' shows agreement, 'furthermore' adds a point, and 'consequently' shows result.",
      },
      {
        id: "comprehension-inference-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"Everyone on the expedition cheered when the helicopter lifted off; only Nadia stayed by the supply crates, tracing the mud-caked edge of a folded survey map with her thumb."*\n\nWhich embedded quotation + inference earns the highest Year 9 mark?',
        options: [
          "Nadia’s lingering alone, 'tracing the mud-caked edge', implies reluctant attachment to a mission she is not ready to leave behind.",
          "The passage says 'Everyone on the expedition cheered when the helicopter lifted off', which shows the helicopter was loud.",
          "Nadia hates helicopters and is planning to hike back into the jungle alone because she dropped her phone.",
          "The word 'mud-caked' is an adjective that grabs the reader’s attention and makes the ending descriptive.",
        ],
        answerIndex: 0,
        hints: [
          "Apply the ICE check: brief embedded quote + tentative verb ('implies') + grounded emotional subtext.",
          "Reject wild plot invention, literal paraphrase, and generic filler.",
        ],
        explanation:
          "Embedding a short 4-word phrase ('tracing the mud-caked edge') and linking it to quiet reluctance directly explains Nadia’s contrasting solitude without inventing plot.",
      },
      {
        id: "comprehension-inference-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"Unless coastal towns restore seagrass meadows within this decade, storm surges will erase low-lying roads faster than insurers can price them. Waiting for cheaper technology is no longer caution; it is surrender."*\n\nWhich tone word best captures the writer’s voice?',
        options: [
          "Nostalgic",
          "Detached",
          "Reverent",
          "Urgent",
        ],
        answerIndex: 3,
        hints: [
          "Look at the time deadline ('within this decade'), the warning verb ('erase'), and the stark climax ('it is surrender').",
          "What attitude demands swift, immediate action?",
        ],
        explanation:
          "A tight countdown ('within this decade'), high-stakes consequences ('erase'), and redefining delay as 'surrender' create an unmistakably urgent tone.",
      },
      {
        id: "comprehension-inference-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from a travel memoir:\n\n*"Our guide did not point at the temple ruins first; he knelt beside a weathered stone drainage channel carved eight hundred years ago to carry monsoon rain away from the foundations."*\n\nWhy does the writer begin the description with the drainage channel rather than the grand temple?',
        options: [
          "To prove that ancient architects disliked decorating large temples",
          "To shift focus from tourist spectacle to quiet engineering genius",
          "To complain that heavy rain ruined the writer’s holiday photographs",
          "To imply that the guide forgot where the main entrance stood",
        ],
        answerIndex: 1,
        hints: [
          "Notice the opening contrast: 'did not point at the temple ruins first'.",
          "What quality is revealed by noticing a working 800-year-old drainage system instead of a postcard façade?",
        ],
        explanation:
          "Subverting expectations by spotlighting a functional 800-year-old drainage channel invites the reader to admire hidden practical ingenuity rather than superficial spectacle.",
      },
      {
        id: "comprehension-inference-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesis-summary",
        question:
          'Read two views on school uniforms:\n- **Text A:** *"A shared blazer softens visible wealth gaps in the corridor, though rigid rules on sock length provoke needless daily friction."*\n- **Text B:** *"Uniforms simplify busy mornings for working parents, yet forbidding minor personal choices can stifle older pupils’ sense of identity."*\n\nWhat do **both** writers have in common?',
        options: [
          "Both adopt a nuanced view weighing practical benefits against real drawbacks.",
          "Both argue passionately that uniforms should be abolished immediately.",
          "Both focus exclusively on the financial burden of buying blazers.",
          "Both dismiss student objections as immature and trivial complaints.",
        ],
        answerIndex: 0,
        hints: [
          "Look at the structural pivot inside BOTH sentences: 'though' in Text A and 'yet' in Text B.",
          "Do either of the writers take a purely one-sided stance?",
        ],
        explanation:
          "Both writers balance a clear advantage (reducing wealth display / easing mornings) against a thoughtful drawback ('though', 'yet'), demonstrating measured, nuanced perspectives.",
      },
      {
        id: "comprehension-inference-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "attitude-tone-bias",
        question:
          'A technology magazine publishes a glowing 900-word review of a new smartwatch, praising its *"unmatched elegance"* and *"effortless genius"*, without mentioning battery life, repair costs, or the fact that the manufacturer sponsored the magazine’s launch party.\n\nWhich **two** bias indicators should a critical reader flag?',
        options: [
          "Objective hedging and chronological structure",
          "Sceptical questioning and expert counter-evidence",
          "Hyperbolic praise and selective omission of drawbacks",
          "Nostalgic tone and inclusive first-person pronouns",
        ],
        answerIndex: 2,
        hints: [
          "Look at phrases like 'unmatched elegance' and 'effortless genius' — are they balanced?",
          "Look at what is missing: battery life, repair costs, and conflict of interest.",
        ],
        explanation:
          "Gushing superlatives ('unmatched', 'effortless genius') represent hyperbolic loaded diction, while hiding battery flaws, repair costs, and sponsorship is classic selective omission.",
      },
      {
        id: "comprehension-inference-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from an educational essay:\n\n*"We celebrate the violinist who practises scales for a thousand hours and the sprinter who logs dawn laps in rain. Why, then, do we treat slow, messy drafting in English as a sign of weakness?"*\n\nHow does the analogy with musicians and athletes strengthen the argument?',
        options: [
          "It shows that English lessons should include music and running.",
          "It exposes an unfair double standard about effort and mastery.",
          "It proves that sprinters write better essays than other pupils.",
          "It criticises violinists for spending too long on simple scales.",
        ],
        answerIndex: 1,
        hints: [
          "Compare how society treats visible practice in music/sport versus messy drafting in writing.",
          "Look at the rhetorical pivot: 'Why, then, do we treat…'",
        ],
        explanation:
          "By comparing writing to admired disciplines where repetition is respected, the analogy exposes the illogical double standard of expecting polished writing without messy practice.",
      },
      {
        id: "comprehension-inference-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "synthesis-summary",
        question:
          'Read the passage:\n\n*"Community repair cafés reduce landfill waste by fixing toasters, bikes, and lamps that manufacturers design to be discarded. Equally important, retired electricians and mechanics pass practical troubleshooting skills to teenagers who have rarely held a soldering iron, while neighbours share tea across workbenches rather than rushing past one another in supermarkets."*\n\nWhich summary captures **all three** distinct benefits concisely in own words?',
        options: [
          "Repair cafés fix old toasters and lamps while serving free tea to busy supermarket shoppers.",
          "Teenagers learn to use soldering irons because retired mechanics have plenty of spare time.",
          "Repair cafés are fun weekend clubs that teach electronics and sell secondhand bicycles.",
          "Repair cafés cut electronic waste, transfer hands-on skills across generations, and strengthen neighbourly bonds.",
        ],
        answerIndex: 3,
        hints: [
          "Identify the three strands: environmental (landfill), educational (skills to teenagers), and social (neighbours sharing tea).",
          "Check which option covers all three accurately without copying phrasing or inventing facts.",
        ],
        explanation:
          "Covering waste reduction, intergenerational skill-sharing, and social cohesion in tight, original phrasing captures every core idea without lifting chunks or inventing claims.",
      },
      {
        id: "comprehension-inference-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"The orchestra conductor did not raise his voice once during the chaotic rehearsal. Instead, he laid his baton gently across the music stand, folded his hands, and waited until the brass section noticed the silence."*\n\nWhat can we infer about the conductor’s leadership style?',
        options: [
          "He feels intimidated by the volume of the brass players.",
          "He has lost his voice after rehearsing too many concerts.",
          "He exercises calm, quiet authority rather than loud aggression.",
          "He is indifferent to whether the orchestra plays accurately.",
        ],
        answerIndex: 2,
        hints: [
          "Look at the deliberate actions: 'laid his baton gently', 'folded his hands', 'waited'.",
          "Does silence here suggest weakness, or controlled command?",
        ],
        explanation:
          "Refusing to shout and letting deliberate stillness compel attention implies poised, self-assured authority that commands respect without raising his voice.",
      },
      {
        id: "comprehension-inference-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "attitude-tone-bias",
        question:
          'Read the extract:\n\n*"Critics call the historic viaduct an ‘eyesore’. Perhaps it is — if one defines beauty solely as beige glass towers interchangeable from Dubai to Dublin."*\n\nWhat rhetorical strategy creates the writer’s sharp attitude here?',
        options: [
          "Sincere agreement followed by neutral architectural history",
          "Mock concession that pivots into a sardonic jab at bland modernism",
          "Urgent panic demanding the immediate demolition of glass towers",
          "Objective balance giving equal space to urban planners’ views",
        ],
        answerIndex: 1,
        hints: [
          "Look at the playful opening 'Perhaps it is —' followed immediately by the cutting condition 'if one defines beauty solely as…'.",
          "Notice the alliterative sting in 'beige glass towers interchangeable from Dubai to Dublin'.",
        ],
        explanation:
          "Pretending to agree ('Perhaps it is') before attaching a stinging condition mocks generic globalised architecture ('beige', 'interchangeable'), defending the viaduct with sardonic wit.",
      },
      {
        id: "comprehension-inference-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "nonfiction-language-structure",
        question:
          'Read this paired shift in an article on deep-sea mining:\n- Paragraph 1 describes the ocean floor as *"a pitch-black cathedral of slow-growing corals untouched for millennia"*.\n- Paragraph 4 describes mining proposals using words like *"extraction quotas, metallic nodules, and dredge corridors"*.\n\nWhy does the writer deliberately shift semantic fields between Paragraph 1 and Paragraph 4?',
        options: [
          "To prove that deep-sea scientists struggle to use simple English",
          "To show that the writer initially misunderstood what lay underwater",
          "To demonstrate that mining engineers admire coral reef biodiversity",
          "To pit sacred natural wonder against cold industrial reductionism",
        ],
        answerIndex: 3,
        hints: [
          "Compare the vocabulary of awe ('cathedral', 'millennia') with clinical commercial jargon ('extraction quotas', 'dredge corridors').",
          "How does that lexical clash steer the reader’s moral judgement?",
        ],
        explanation:
          "Shifting from reverent, sacred imagery ('cathedral') to sterile corporate jargon ('extraction quotas', 'nodules') highlights how industry strips a living ecosystem down to raw commodities.",
      },
      {
        id: "comprehension-inference-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "synthesis-summary",
        question:
          'Compare two short extracts on solo travel:\n- **Text A (1934 letter):** *"Travelling unaccompanied forces a woman to meet strangers on equal terms; every railway platform becomes a classroom in self-reliance."*\n- **Text B (2024 blog):** *"Solo travel sounds liberating on podcasts, yet eating dinner alone beneath couples’ glances can feel less like freedom and more like an endurance test."*\n\nWhich analytical synthesis statement is **most perceptive**?',
        options: [
          "Although both link solo travel with independence, Text A celebrates it as empowering education whereas Text B exposes its quiet social awkwardness.",
          "Text A was written on a train in 1934 and Text B listens to modern podcasts while dining in busy restaurants.",
          "Both writers strongly advise readers never to eat dinner alone when visiting foreign railway stations.",
          "Text A focuses on self-reliance because women in 1934 did not have smartphones or podcasts to listen to.",
        ],
        answerIndex: 0,
        hints: [
          "Look for an option that captures BOTH the subtle shared premise (independence/liberation) AND the sharp divergence in lived experience.",
          "Eliminate superficial literal summaries or historical guesswork.",
        ],
        explanation:
          "Identifying the shared concept of independence before contrasting empowering 'self-reliance' in Text A against self-conscious vulnerability ('endurance test') in Text B achieves top-band conceptual synthesis.",
      },
      {
        id: "comprehension-inference-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "retrieval-vs-inference",
        question:
          'Read the extract:\n\n*"The minister’s speech ran forty minutes and cited fourteen growth projections, yet in the entire transcript the words ‘flood’, ‘insurance’, and ‘relocation’ never once appeared."*\n\nWhat is the writer inviting the reader to infer?',
        options: [
          "The minister ran out of time before reaching the final pages.",
          "Flooding was no longer a problem in the minister’s region.",
          "The speech transcript contained several accidental printing errors.",
          "The minister deliberately evaded uncomfortable climate realities.",
        ],
        answerIndex: 3,
        hints: [
          "Contrast the precision of what WAS included ('forty minutes', 'fourteen growth projections') with what was conspicuously absent.",
          "In political commentary, pointing out missing keywords exposes evasion.",
        ],
        explanation:
          "Contrasting lengthy economic optimism with the total absence of vital risk words ('flood', 'insurance', 'relocation') invites the reader to infer calculated evasion of awkward realities.",
      },
      {
        id: "comprehension-inference-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "nonfiction-language-structure",
        question:
          'Read the extract from a speech on youth literacy:\n\n*"A book does not ping. A book does not autoplay a stranger’s outrage at midnight. A book asks only one unfashionable thing of you: your undivided mind."*\n\nHow do the negative parallel openings prepare the impact of the colon at the end?',
        options: [
          "They list technical flaws of printed books before praising phone apps.",
          "They strip away digital distractions to elevate quiet focus as rare and demanding.",
          "They create a sarcastic attack on libraries for refusing to use screens.",
          "They give objective technical instructions on switching off notifications.",
        ],
        answerIndex: 1,
        hints: [
          "Notice what the repeated 'A book does not…' sentences reject ('ping', 'autoplay… outrage').",
          "Then look at the pause before the colon and the reveal: 'your undivided mind'.",
        ],
        explanation:
          "By defining books first through the toxic digital habits they refuse ('ping', 'autoplay… outrage'), the parallel build-up makes the colon’s reveal ('your undivided mind') feel noble and urgent.",
      },
      {
        id: "comprehension-inference-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "synthesis-summary",
        question:
          'A Year 9 exam asks: *"Compare how the writers of Text A and Text B convey different attitudes toward modern skyscrapers."* A student plans four paragraphs: Paragraph 1 summarises Text A; Paragraph 2 summarises Text B; Paragraph 3 lists two techniques in Text A; Paragraph 4 lists two techniques in Text B.\n\nWhat is the biggest structural flaw in this plan?',
        options: [
          "It includes too many comparative connectives in the introduction.",
          "It focuses excessively on writer’s attitude rather than facts.",
          "It separates the texts into blocks instead of integrating them by theme.",
          "It fails to copy long quotations from both passages verbatim.",
        ],
        answerIndex: 2,
        hints: [
          "Look at how the student organised the four paragraphs: A, then B, then A, then B — never side by side.",
          "What is the golden rule of cross-text synthesis?",
        ],
        explanation:
          "Splitting Text A and Text B into isolated blocks forces the examiner to do the comparing for you. Top-band synthesis integrates both texts inside every paragraph around shared thematic axes.",
      },
    ],
  },
];
