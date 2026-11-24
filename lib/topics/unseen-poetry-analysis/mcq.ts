import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: 5-Minute Protocol & Decoding Imagery/Ambiguity
  // =========================================================================
  {
    id: "unseen-poetry-analysis-m1",
    title: "MCQ Paper 1 — The 5-Minute Protocol & Decoding Imagery",
    questions: [
      {
        id: "unseen-poetry-analysis-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "first-read-protocol",
        question:
          "Why does the **5-Minute Unseen Poetry Protocol** advise reading the poem silently to **punctuation marks** rather than stopping at the end of every printed line?",
        options: [
          "Because line breaks never carry any literary meaning in modern poetry",
          "Because sentences often span multiple lines and make sense only when read whole",
          "Because examiners deduct marks if you notice rhyming words on your first read",
          "Because punctuation marks always appear only at the very end of each stanza",
        ],
        answerIndex: 1,
        hints: [
          "Think about what happens when a single sentence continues across two or three enjambed lines.",
          "First-pass reading aims to nail the literal human situation before analysing craft.",
        ],
        explanation:
          "Poets frequently use **enjambment**, splitting sentences across lines. Pausing robotically at every line break scrambles grammar and causes needless panic; reading to full stops, dashes, and semicolons reveals the literal story immediately.",
      },
      {
        id: "unseen-poetry-analysis-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "first-read-protocol",
        question:
          "Read this fresh unseen stanza:\n\n**The Attic Suitcase**\n*Leather straps cracked pale as winter twigs,*\n*stickers fading from stations long renamed —*\n*yet inside, folded neat, the cedar scent of August.*\n\nWhere does the poem's **volta** (emotional turning point) occur?",
        options: [
          "On the pivot word 'yet', shifting from weathered decay to warm preserved memory",
          "On the word 'Leather', shifting from natural imagery to industrial factory craft",
          "On the title 'The Attic Suitcase', revealing that the speaker dislikes travelling",
          "On the word 'fading', shifting from joyful excitement into sudden physical fear",
        ],
        answerIndex: 0,
        hints: [
          "Scan for a classic conjunction signalling a sharp contrast in mood.",
          "Compare the worn exterior ('cracked', 'fading') with what awaits inside.",
        ],
        explanation:
          "The conjunction *'yet'* launches the **volta**, pivoting from worn exterior decay (*'cracked'*, *'fading'*) to intimate, warm sensory preservation (*'cedar scent of August'*).",
      },
      {
        id: "unseen-poetry-analysis-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "first-read-protocol",
        question:
          "Read these unseen lines spoken by an ageing lighthouse keeper:\n\n*My knees now dread the spiral iron stair,*\n*my lantern hand no longer steady-true;*\n*still, ships steer safely by the light I tend.*\n\nWhich pair of adjectives most accurately captures the **tonal shift** across this stanza?",
        options: [
          "From furious bitterness into careless mockery of passing sailors",
          "From cheerful boastfulness into panicked despair over broken glass",
          "From detached boredom into comic sarcasm about staircase height",
          "From candid vulnerability into quiet pride and resolute purpose",
        ],
        answerIndex: 3,
        hints: [
          "Notice the honest admission of physical frailty in lines 1–2 ('dread', 'no longer steady-true').",
          "Track the shift after the semicolon and 'still' in line 3 ('ships steer safely').",
        ],
        explanation:
          "Moving from honest frailty (*'dread'*, *'no longer steady-true'*) past the pivot *'still'* to *'steer safely by the light I tend'* charts a nuanced shift from **candid vulnerability** to **quiet pride and resolute purpose**.",
      },
      {
        id: "unseen-poetry-analysis-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "first-read-protocol",
        question:
          "Why do top-band exam essays distinguish between **the speaker** and **the poet** when analysing a first-person (*\"I\"*) unseen poem?",
        options: [
          "Because poets are legally prohibited from ever writing about personal memories",
          "Because the word 'speaker' refers exclusively to poems read aloud on stage",
          "Because 'I' is a crafted voice or persona rather than automatically the poet's diary",
          "Because using 'poet' inside an examination essay counts as informal phrasing",
        ],
        answerIndex: 2,
        hints: [
          "Consider a poem written from the perspective of a lighthouse keeper, a child, or an ancient king.",
          "Who experiences the emotions inside the poem, and who designs the literary techniques?",
        ],
        explanation:
          "The **speaker** (or persona) is the crafted voice inside the poem, while the **poet** is the writer making conscious craft choices. Separating them prevents biographical assumptions and sounds immediately scholarly.",
      },
      {
        id: "unseen-poetry-analysis-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this unseen line about a winter dawn:\n\n*Frost stitched the broken fence-wire white.*\n\nApplying the **Vehicle Qualities** method to the metaphor *'stitched'*, which interpretation is most perceptive?",
        options: [
          "It explains literally how winter gardeners repair metal wire using cotton thread",
          "It recasts cold frost as delicate domestic mending, softening decay into fragile repair",
          "It creates violent battlefield chaos by comparing ice crystals to sharp weapons",
          "It uses bright rhythm to show the speaker wishes the fence stayed permanently broken",
        ],
        answerIndex: 1,
        hints: [
          "List three literal qualities of stitching: careful, delicate, needlework, joining torn edges back together.",
          "Transfer those qualities onto 'frost' covering 'broken fence-wire'.",
        ],
        explanation:
          "Literally, **stitching** mends torn fabric with patient care (and a sharp needle). Transferring those qualities onto frost suggests winter gently repairs *'broken'* neglect — though with chilly, temporary fragility.",
      },
      {
        id: "unseen-poetry-analysis-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this unseen image from a poem about leaving home:\n\n*The kitchen table sits, a dry harbour / where no more small boats tie their mornings.*\n\nIn metaphor analysis, what are the **Tenor** and the **Vehicle** here?",
        options: [
          "Tenor: small boats; Vehicle: the morning sunlight entering through curtains",
          "Tenor: wooden furniture; Vehicle: the speaker's spoken dialogue with sailors",
          "Tenor: coastal tides; Vehicle: a busy family breakfast served at dawn",
          "Tenor: the empty kitchen table; Vehicle: a dry harbour abandoned by boats",
        ],
        answerIndex: 3,
        hints: [
          "Remember: Tenor = the real literal subject; Vehicle = the borrowed figurative image.",
          "Is the poem literally about a seaside dock, or about a quiet family kitchen?",
        ],
        explanation:
          "The **Tenor** (literal subject) is the empty family kitchen table, while the **Vehicle** (figurative lens) is *'a dry harbour'*, suggesting a once-bustling domestic refuge now drained of warmth and movement.",
      },
      {
        id: "unseen-poetry-analysis-m1-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this unseen couplet about two estranged friends meeting years later:\n\n*Between our cups, old silence grew a velvet crust,*\n*soft to the brush, too thick to break.*\n\nHow does the poet create **productive ambiguity** through the phrase *\"velvet crust\"*?",
        options: [
          "It fuses comforting politeness ('velvet') with hardened, impenetrable distance ('crust')",
          "It demonstrates that both characters dislike the upholstery inside the coffee shop",
          "It proves the friends immediately forgave each other and forgot past arguments",
          "It creates comic absurdity by describing bakery pastry placed on velvet tablecloths",
        ],
        answerIndex: 0,
        hints: [
          "Unpack the conflicting connotations of 'velvet' (plush, smooth, gentle) versus 'crust' (stale, hard, sealed over).",
          "Look at line 2: 'soft to the brush, too thick to break'.",
        ],
        explanation:
          "The oxymoronic metaphor *'velvet crust'* layers **contradictory connotations**: smooth surface courtesy (*'velvet'*, *'soft'*) concealing hardened, stale estrangement (*'crust'*, *'too thick to break'*).",
      },
      {
        id: "unseen-poetry-analysis-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read these unseen lines about a calm summer orchard:\n\n*Soft shadows slip across the silver grass,*\n*sweet stillness settling where the swallows pass.*\n\nHow should a Year 9 student analyse the **sibilance** (`/s/` sounds) here?",
        options: [
          "The repeated 's' sounds create a treacherous snake-like hiss of hidden malice",
          "The repeated 's' sounds mimic loud metallic clashes breaking peaceful quiet",
          "The hushed sibilance aurally evokes whispered calm, cradling the drowsy evening mood",
          "The repeated 's' sounds make the lines faster to read aloud in an exam room",
        ],
        answerIndex: 2,
        hints: [
          "Always match sound devices to the poem's actual context and mood — never paste a memorised 'evil snake' label!",
          "Look at the surrounding words: 'Soft', 'sweet stillness settling'.",
        ],
        explanation:
          "Sound devices are **context-dependent**. Paired with *'Soft'* and *'sweet stillness settling'*, gentle sibilance creates a soothing, hushed auditory cushion rather than sinister menace.",
      },
      {
        id: "unseen-poetry-analysis-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this public-domain stanza from Emily Dickinson (*'Hope' is the thing with feathers*):\n\n*\"Hope\" is the thing with feathers —*\n*That perches in the soul —*\n*And sings the tune without the words —*\n*And never stops — at all —*\n\nWhich connotation of the verb *\"perches\"* best unpacks how Dickinson imagines hope?",
        options: [
          "Light, poised endurance — delicate like a bird, yet stubbornly refusing to depart",
          "Heavy mechanical weight anchoring the human chest permanently to stone",
          "Violent predatory swooping designed to frighten listeners during winter storms",
          "Careless clumsiness showing the bird struggles to keep balance in quiet air",
        ],
        answerIndex: 0,
        hints: [
          "Picture a small bird perched lightly on a branch — delicate, alert, poised, not heavy or violent.",
          "Pair 'perches' with 'never stops — at all —' in line 4.",
        ],
        explanation:
          "The verb *'perches'* gives hope fragile, living lightness — poised delicately inside the *'soul'* yet resiliently refusing to abandon the speaker even in hardship.",
      },
      {
        id: "unseen-poetry-analysis-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read these unseen lines about a storm hitting a fishing quay:\n\n*Black breakers crack against the concrete pier,*\n*each blunt blow bruising timber to the core.*\n\nWhat sound pattern reinforces the violence of the sea here?",
        options: [
          "Gentle nasal hums mimicking a peaceful lullaby across calm harbour water",
          "Soft breathy fricatives whispering through dry reeds on a warm afternoon",
          "Playful internal rhyme lightening the danger into comic coastal farce",
          "Harsh plosives (/b/, /k/, /t/) replicating heavy, percussive impact on the quay",
        ],
        answerIndex: 3,
        hints: [
          "Say the first two words and final line aloud: 'Black breakers crack... concrete... blunt blow bruising'.",
          "Notice the sharp bursts of air on /b/ and /k/ consonants.",
        ],
        explanation:
          "Dense **plosives** (`/b/` and `/k/` in *'Black breakers crack... concrete... blunt blow bruising'*) produce abrupt, percussive acoustic strikes that enact waves hammering wood and stone.",
      },
      {
        id: "unseen-poetry-analysis-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "first-read-protocol",
        question:
          "During the **5-Minute Unseen Protocol**, why should you draw a quick line connecting the **title** to the **very final line**?",
        options: [
          "Because every unseen exam poem must repeat its title verbatim as line one",
          "Because poets often frame an expectation in the title that the ending deepens or flips",
          "Because examiners only read your comments about titles and ignore middle stanzas",
          "Because titles usually contain the single literary term the question wants you to name",
        ],
        answerIndex: 1,
        hints: [
          "Think back to 'Before the Demolition' or 'The Spare Key' in Section 1.",
          "How does the final line make you look back at the title with fresh insight?",
        ],
        explanation:
          "Titles act as the poem's doorway; comparing the title directly against the final line quickly exposes irony, emotional transformation, or poignant unresolved resonance.",
      },
      {
        id: "unseen-poetry-analysis-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Which sentence demonstrates **top-band tentative phrasing** when exploring two connotations of a poetic word?",
        options: [
          "The word 'shadow' definitely proves the poet was sad and hated walking outside.",
          "The poet uses 'shadow' to put a nice dark picture into the reader's imagination.",
          "Arguably, 'shadow' evokes quiet shelter, yet simultaneously hints at lingering dread.",
          "Everyone reading 'shadow' will instantly think about ghosts and feel terrified.",
        ],
        answerIndex: 2,
        hints: [
          "Look for analytical hedges ('Arguably', 'evokes', 'simultaneously hints') connecting two plausible layers.",
          "Reject rigid certainty ('definitely proves', 'Everyone') and generic filler ('nice dark picture').",
        ],
        explanation:
          "Using tentative academic verbs (*'Arguably'*, *'evokes'*, *'simultaneously hints'*) embraces **productive ambiguity**, showing sophisticated openness to layered poetic meaning.",
      },
      {
        id: "unseen-poetry-analysis-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "first-read-protocol",
        question:
          "Read this fresh unseen short poem:\n\n**Museum Ticket**\n*Glass keeps the bronze sword bright,*\n*no rust upon the hilt, no nick upon the blade.*\n*Outside, rain stains the paving grey,*\n*and children splash right through the puddles.*\n\nWhat conceptual contrast lies at the heart of this poem?",
        options: [
          "Sterile, lifeless preservation behind glass versus messy, vibrant living energy outside",
          "Accurate historical metalwork techniques versus careless maintenance of city pavements",
          "Ancient bravery celebrated joyfully versus modern children disrespecting history",
          "Dry indoor museum architecture versus dangerous flash-flooding across town streets",
        ],
        answerIndex: 0,
        hints: [
          "Compare the spotless, sealed interior ('Glass keeps... no rust... no nick') with the wet, lively exterior ('rain stains... children splash').",
          "Notice the volta word 'Outside' pivoting between deathly perfection and joyful life.",
        ],
        explanation:
          "Pivoting on *'Outside'*, the poem contrasts sterile, glassed-off perfection (*'no rust... no nick'*) with unpolished, vibrant life (*'rain stains... children splash'*), questioning whether spotless preservation drains real vitality.",
      },
      {
        id: "unseen-poetry-analysis-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this unseen line about an old city clock:\n\n*Its patient iron fingers parcel out our hurried noon.*\n\nWhich **semantic contrast** sharpens the poet's theme about time here?",
        options: [
          "Warm culinary vocabulary contrasted with icy arctic wildlife",
          "Playful musical slang contrasted with solemn legal courtroom rules",
          "Bright floral gardening imagery contrasted with metallic shipbuilding",
          "Steady, unyielding permanence ('patient iron') contrasted with anxious human rush ('hurried')",
        ],
        answerIndex: 3,
        hints: [
          "Place 'patient iron' directly beside 'hurried noon' and note the difference in tempo and strength.",
          "Notice how 'parcel out' suggests the clock rations time to rushing humans.",
        ],
        explanation:
          "Contrasting durable stillness (*'patient iron'*) against human fretfulness (*'hurried noon'*) — while *'parcel out'* casts time as a strict rationer — dramatises how effortlessly time outlasts human haste.",
      },
      {
        id: "unseen-poetry-analysis-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this unseen couplet about grief:\n\n*We swept the hearth, we aired the room, we hung bright linen clean;*\n*still winter knelt beside the chair where her warm shawl had been.*\n\nHow does **personification** in line 2 undercut the frantic busyness of line 1?",
        options: [
          "It shows that airing rooms in January allows icy gusts to ruin clean curtains",
          "It proves the family forgot to close the back door while sweeping the chimney",
          "By making 'winter' kneel like a stubborn mourner, grief refuses to be tidied away",
          "It introduces humorous exaggeration comparing cold weather to a clumsy visitor",
        ],
        answerIndex: 2,
        hints: [
          "Look at the active domestic verbs in line 1 ('swept', 'aired', 'hung') versus 'still winter knelt' in line 2.",
          "What connotations does 'knelt' carry (prayer, vigil, refusal to leave)?",
        ],
        explanation:
          "After the frantic triple cleaning of line 1, personifying *'winter'* as kneeling beside the empty chair evokes a silent, reverent vigil — showing emotional absence remains physically rooted despite domestic tidiness.",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: Structure, Form, Stanzas & Ending Shifts
  // =========================================================================
  {
    id: "unseen-poetry-analysis-m2",
    title: "MCQ Paper 2 — Structure, Stanzas, Rhyme & Shifts",
    questions: [
      {
        id: "unseen-poetry-analysis-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "unseen-structure-form",
        question:
          "Read these unseen lines about a river rising after heavy rain:\n\n*The swollen current climbs the step*\n*and slips beneath the wooden door*\n*before the sleepers hear its tread.*\n\nWhich analytical comment links **enjambment** meaningfully to the poem's subject instead of feature-spotting?",
        options: [
          "Spilling across line breaks without punctuation enacts floodwater overflowing boundaries",
          "The poet uses enjambment across every line simply to make the stanza flow nicely",
          "Omitting commas proves the writer rushed and forgot standard sentence punctuation",
          "Enjambment forces readers to halt sharply after 'step' so the water freezes still",
        ],
        answerIndex: 0,
        hints: [
          "Avoid vague claims like 'makes the stanza flow nicely'.",
          "Look at what the river is physically doing ('climbs... and slips beneath') and match it to the unpunctuated line breaks.",
        ],
        explanation:
          "Running the sentence unchecked past *'step'* and *'door'* visually and rhythmically enacts floodwater breaching physical thresholds — form literally mirrors meaning.",
      },
      {
        id: "unseen-poetry-analysis-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "Read this unseen line from a poem about receiving bad news by telephone:\n\n*I laughed at what you said — then heard the click.*\n\nHow does the **mid-line caesura** (`—`) function emotionally here?",
        options: [
          "It smoothly connects two joyful moments so the telephone call continues happily",
          "It merely tells the reader to take a quiet breath halfway through the line",
          "It snaps the line physically in half at the exact instant warmth turns to isolation",
          "It establishes a light comic pause preparing the listener for a clever punchline",
        ],
        answerIndex: 2,
        hints: [
          "Compare the words before the dash ('I laughed') with what immediately follows ('then heard the click').",
          "Reject generic filler ('take a quiet breath').",
        ],
        explanation:
          "The sharp **caesura** (`—`) visually severs connection at the precise syllable the phone line cuts out, enacting the abrupt plunge from shared laughter into sudden silence.",
      },
      {
        id: "unseen-poetry-analysis-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "Read these unseen end-words from a stanza about returning to a ruined childhood street:\n\n*...stone / ...stain*\n*...home / ...harm*\n\nWhat poetic sound/rhyme device is operating here, and what effect does it create?",
        options: [
          "Full heroic couplets creating musical cheerfulness and tidy comfort",
          "Half-rhyme (slant rhyme) creating jarring discord that refuses comforting closure",
          "Strict blank verse eliminating every shared consonant sound across all lines",
          "Playful limerick rhythm speeding up the verse into light-hearted humour",
        ],
        answerIndex: 1,
        hints: [
          "Say 'stone / stain' and 'home / harm' aloud: the consonants echo, while the vowels miss each other.",
          "How does a near-miss chime feel emotionally in a poem about ruin?",
        ],
        explanation:
          "**Half-rhyme** (or *slant rhyme*) pairs near-matching chimes (*stone/stain*, *home/harm*), withholding harmonious closure so the verse itself sounds subtly broken and unsettled.",
      },
      {
        id: "unseen-poetry-analysis-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "An unseen poem opens with three neat four-line stanzas describing an orderly family dinner, then ends with a **single isolated one-line stanza (monostich)**:\n\n*Only one plate dries beside the sink tonight.*\n\nWhat structural effect does isolating that final line create?",
        options: [
          "It suggests the poet ran out of rhyming words and stopped writing abruptly",
          "It creates bustling energy showing more guests are about to arrive for dessert",
          "It proves the poem is a strict Shakespearean sonnet written in fourteen lines",
          "The surrounding white space visually mirrors emptiness, magnifying solitary loss",
        ],
        answerIndex: 3,
        hints: [
          "Picture the printed page: three full blocks of text followed by one lone line surrounded by empty margin.",
          "Connect the visual layout directly to the words 'Only one plate'.",
        ],
        explanation:
          "Breaking out of regular quatrains into an isolated single line wraps *'Only one plate'* in stark white space, visually enacting absence and solitude on the page.",
      },
      {
        id: "unseen-poetry-analysis-m2-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unseen-structure-form",
        question:
          "In an unseen poem about suppressing fierce anger inside a strict boarding school, the poet writes **four perfectly regular, tightly rhymed quatrains** with rigid end-stopped lines.\n\nWhat is the most perceptive structural argument for this tight form?",
        options: [
          "The neat stanzas prove the speaker genuinely enjoys every rule of the school",
          "Tight rhyme schemes can never express anger, so the poem must be celebratory",
          "The rigid form acts like a cage, enacting outward discipline bottling inward rage",
          "Regular four-line stanzas always indicate that the poem was written for young children",
        ],
        answerIndex: 2,
        hints: [
          "Think about irony between *form* (neat, boxed-in, obedient) and *content* (suppressed anger).",
          "What can rigid walls on the page symbolise when a speaker is forced to stay controlled?",
        ],
        explanation:
          "Top-band readers look for **ironic tension between form and feeling**: boxing explosive emotion inside rigid, end-stopped quatrains visually mimics institutional restraint and bottled-up anger.",
      },
      {
        id: "unseen-poetry-analysis-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "In Stanza 1 of an unseen poem, the refrain reads: *\"We counted lanterns down the bay.\"* In the final stanza, it returns as: *\"I count the lanterns down the bay.\"*\n\nHow does this **altered refrain** convey emotional change?",
        options: [
          "Shifting 'We counted' to 'I count' exposes enduring ritual shadowed by new solitude",
          "Repeating 'lanterns' proves nothing important has changed between stanza one and the end",
          "Switching from past tense to present tense reveals the speaker forgot the bay's name",
          "Shortening the verb phrase merely corrects an earlier grammatical error in stanza one",
        ],
        answerIndex: 0,
        hints: [
          "Spot BOTH tiny grammatical changes: 'We' → 'I' (pronoun) and 'counted' → 'count' (tense).",
          "What human story emerges when a shared past memory turns into a solitary present habit?",
        ],
        explanation:
          "Two surgical shifts in the **altered refrain** — plural *'We'* shrinking to lone *'I'*, and past *'counted'* becoming ongoing *'count'* — capture persistent devotion shadowed by painful absence.",
      },
      {
        id: "unseen-poetry-analysis-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "Read this unseen closing couplet after twelve unrhymed free-verse lines about urban greed:\n\n*Steel towers climb to scrape the rented sky,*\n*while roots crack pavement quietly below.*\n\nNow imagine the poet revises the last two lines into a tight **rhyming couplet** (*sky / high* or *grow / below*). What structural effect does a sudden closing rhyming couplet typically achieve?",
        options: [
          "It dissolves the poem's argument into vague confusion with zero clear judgement",
          "It snaps the poem shut with epigrammatic finality, delivering a crisp closing verdict",
          "It erases all previous imagery so readers forget the first twelve lines completely",
          "It signals that the poem will continue for at least ten more rhymed stanzas",
        ],
        answerIndex: 1,
        hints: [
          "Think of how Shakespeare closes scenes or sonnets with a final rhyming pair.",
          "How does a sudden click of rhyme sound after unrhymed lines?",
        ],
        explanation:
          "Landing a sudden **rhyming couplet** after free verse creates an unmistakable acoustic lock — snapping the poem shut on a sharp, memorable moral verdict.",
      },
      {
        id: "unseen-poetry-analysis-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "Read these unseen lines about soldiers waiting before dawn:\n\n*Boots wait. Breath plumes. Watches tick.*\n*No bugle calls across the frosted wire.*\n\nHow do the **triple end-stopped / caesura-split clauses** in line 1 establish atmosphere?",
        options: [
          "They create joyful dancing rhythm celebrating the coming sunrise",
          "They sweep smoothly forward to mimic cavalry charging down a hill",
          "They introduce playful dialogue between three joking companions",
          "They chop rhythm into clipped, frozen beats, mirroring taut anxious waiting",
        ],
        answerIndex: 3,
        hints: [
          "Count the three full stops inside a single six-word line.",
          "Hear how each tiny two-word beat ticks like a watch in freezing stillness.",
        ],
        explanation:
          "Packing two internal **caesuras** and three terse two-word clauses (*'Boots wait. Breath plumes. Watches tick.'*) into one line fractures time into tense, mechanical ticks of pre-dawn dread.",
      },
      {
        id: "unseen-poetry-analysis-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "An unseen poem has **no regular rhyme scheme** and **no fixed metre**, yet its line lengths visibly narrow from 14 syllables down to 3 syllables as a swimmer dives deeper underwater.\n\nWhat poetic form is this, and how does the narrowing shape work?",
        options: [
          "Petrarchan sonnet using strict octave rhyme to celebrate swimming medals",
          "Traditional ballad stanza designed for chanting rhythmic folk songs aloud",
          "Free verse whose shrinking line lengths visually enact tightening pressure and breath",
          "Heroic blank verse maintaining exactly ten iambic syllables on every printed line",
        ],
        answerIndex: 2,
        hints: [
          "Unrhymed poetry without fixed metre is called ___ verse.",
          "Link shrinking line lengths directly to holding one's breath underwater.",
        ],
        explanation:
          "Unrhymed, non-metrical poetry is **free verse** — which does *not* mean 'no structure'! Here, shrinking line lengths visually and rhythmically mimic breath running out under deepening water pressure.",
      },
      {
        id: "unseen-poetry-analysis-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unseen-structure-form",
        question:
          "Read this public-domain opening from Robert Frost's *Stopping by Woods on a Snowy Evening* (1923):\n\n*Whose woods these are I think I know.*\n*His house is in the village though;*\n*He will not see me stopping here*\n*To watch his woods fill up with snow.*\n\nHow do the **end-stopped first two lines** versus the **enjambed final two lines** shape the speaker's state of mind?",
        options: [
          "Lines 1–2 show rushed panic, while lines 3–4 stop abruptly in angry defiance",
          "Lines 1–2 sound cautious and practical, then lines 3–4 gently linger into quiet wonder",
          "Lines 1–2 celebrate noisy village parties, while lines 3–4 mock winter weather",
          "Lines 1–2 break all rhyme patterns, while lines 3–4 abandon the rural setting",
        ],
        answerIndex: 1,
        hints: [
          "Notice the neat punctuation closing lines 1 and 2 (checking who owns the property).",
          "Feel how line 3 glides softly across the break into 'To watch his woods fill up with snow.'",
        ],
        explanation:
          "Crisp **end-stopped** lines 1–2 capture practical awareness of property and village rules, before **enjambment** across lines 3–4 softens the cadence, letting the speaker drift into hushed hypnotic wonder.",
      },
      {
        id: "unseen-poetry-analysis-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "Why does ending an unseen poem on an **unanswered rhetorical question** (such as *\"Who keeps the map once every road turns green?\"*) create a powerful closing shift?",
        options: [
          "It hands moral reflection directly to the reader, refusing tidy, artificial certainty",
          "It proves the poet forgot how the poem's narrative situation ended",
          "It breaks grammatical rules because poems must always finish with a full stop",
          "It lightens the tone into a casual quiz game with a simple factual answer",
        ],
        answerIndex: 0,
        hints: [
          "Ask what happens in your own mind when a poet leaves a resonant question hanging in empty white space.",
          "Does a closing question close the theme down, or open it outward?",
        ],
        explanation:
          "Closing on an **unanswered question** refuses neat closure, pulling the reader directly into the poem's unresolved dilemma so its theme echoes well past the final line.",
      },
      {
        id: "unseen-poetry-analysis-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "An unseen poem opens with: *\"Morning breaks bronze across the harbour crane\"* and closes twenty lines later with: *\"Evening folds slate around the silent crane.\"*\n\nWhich structural pattern frames the poem, and what mood shift does it trace?",
        options: [
          "In media res dialogue moving from sudden anger into comic reconciliation",
          "Fragmented list poetry jumping between unrelated industrial workplaces",
          "Heroic ballad stanzas celebrating mechanical inventions across three centuries",
          "Cyclical time framing tracing a shift from bright labour into subdued, quiet closure",
        ],
        answerIndex: 3,
        hints: [
          "Compare the time of day ('Morning' → 'Evening'), colour ('bronze' → 'slate'), and echoed anchor word ('crane').",
          "Notice how mirroring opening and closing lines charts one complete cycle of a day.",
        ],
        explanation:
          "Echoing the opening motif (*'harbour crane'* → *'silent crane'*) across a **cyclical dawn-to-dusk frame** subtly charts the shift from gleaming active warmth (*'bronze'*) into muted, exhausted dusk (*'slate'*, *'silent'*).",
      },
      {
        id: "unseen-poetry-analysis-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "unseen-structure-form",
        question:
          "What is the best structural strategy when an unseen poem has **no rhyme scheme and looks completely irregular**?",
        options: [
          "State bluntly that the poem has zero structure and focus purely on adjectives",
          "Analyse stanza progression, volta shifts, line-length contrast, caesura, and enjambment",
          "Invent a traditional sonnet label so your essay still includes technical terms",
          "Skip structural commentary entirely and retell each stanza in plain prose",
        ],
        answerIndex: 1,
        hints: [
          "Remember: free verse is still purposefully arranged on the page!",
          "Which structural features exist in EVERY poem regardless of rhyme?",
        ],
        explanation:
          "Even without rhyme or fixed metre, **every poem** has deliberate architecture: track stanza progression, the volta, line-length variation, white space, caesuras, enjambment, and opening-to-closing echoes.",
      },
      {
        id: "unseen-poetry-analysis-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unseen-structure-form",
        question:
          "Read these unseen lines from a poem about an immigrant family unpacking boxes:\n\n*From newsprint rise two cracked blue bowls,*\n*a brass tea-tin, my mother's comb —*\n*small islands rescued from the tide.*\n\nHow does the **asyndetic list culminating in a dash (`—`)** structure the speaker's revelation?",
        options: [
          "It rushes carelessly past unwanted clutter before throwing everything into storage",
          "It creates noisy comic chaos by naming dozens of mismatched kitchen utensils",
          "It gathers humble everyday items before the dash transforms them into sacred refuge ('small islands')",
          "It breaks grammatical rhythm to suggest the speaker dislikes unpacking wooden crates",
        ],
        answerIndex: 2,
        hints: [
          "Look at the three ordinary objects before the dash versus the sweeping metaphor right after the dash.",
          "How does the dash act as a hinge from literal objects to symbolic meaning?",
        ],
        explanation:
          "Listing intimate domestic fragments (*'cracked blue bowls'*, *'brass tea-tin'*, *'mother's comb'*) builds quiet tenderness before the **dash** pivots into the metaphor *'small islands rescued from the tide'*, elevating humble objects into lifelines of identity.",
      },
      {
        id: "unseen-poetry-analysis-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unseen-structure-form",
        question:
          "Read this unseen stanza break:\n\n*...she climbed the last high rung and let*\n\n*the autumn wind unfold her coat like wings.*\n\nWhy is placing a **stanza break right across an enjambed phrase** (*'let // the autumn wind'*) structurally striking?",
        options: [
          "The empty gap enacts a breathless leap into open air before the wind catches her",
          "It represents a printing mistake where the publisher accidentally split one sentence",
          "It slows the stanza down into heavy boredom so the reader loses track of the verb",
          "It forces rigid end-stopped containment proving the speaker cannot leave the ladder",
        ],
        answerIndex: 0,
        hints: [
          "Look at the verb dangling right on the cliff edge of stanza 1: 'let' — followed by blank white space!",
          "Match that physical leap across white space to 'unfold her coat like wings'.",
        ],
        explanation:
          "**Cross-stanza enjambment** leaves the verb *'let'* suspended on the edge of blank white space, literally enacting a breathless step into open air before stanza 2 catches the speaker on *'wings'*.",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Top-Band Timed Unseen Essays & Exam Mastery
  // =========================================================================
  {
    id: "unseen-poetry-analysis-m3",
    title: "MCQ Paper 3 — Top-Band Timed Essays & Exam Craft",
    questions: [
      {
        id: "unseen-poetry-analysis-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "writing-high-band-unseen",
        question:
          "Which **essay introduction** sets up a top-band Year 9 unseen poetry response rather than a weak technique list?",
        options: [
          "In this essay I will look at how the poet uses metaphors, similes, and enjambment well.",
          "This poem is very interesting because it talks about a bridge and uses rhyme and structure.",
          "The poet wrote three stanzas with lots of good adjectives to paint a vivid picture for us.",
          "Portraying the rusted footbridge as a stubborn witness to change, the poet shifts from nostalgic awe to quiet acceptance.",
        ],
        answerIndex: 3,
        hints: [
          "A top-band introduction leads with a conceptual thesis (big idea + tonal arc), never a shopping list of devices.",
          "Eliminate vague praise ('interesting', 'good adjectives', 'paint a vivid picture').",
        ],
        explanation:
          "A **conceptual thesis** immediately answers *how* the poem presents its theme and *how* the tone shifts across the arc — setting up analytical depth instead of hollow technique-listing.",
      },
      {
        id: "unseen-poetry-analysis-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "You have **40 minutes** for your Year 9 End-of-Year unseen poetry essay. Which **time allocation** gives you the strongest control from start to finish?",
        options: [
          "Start writing at minute 1, write 7 hurried paragraphs on stanza 1, skip the ending",
          "5 mins protocol → 4 mins thesis intro → 25 mins for 3 arc-driven paragraphs → 6 mins verdict & polish",
          "20 mins highlighting every noun and verb → 15 mins intro → 5 mins on one quotation",
          "2 mins skimming the title → 38 mins retelling every line of the poem in plain prose",
        ],
        answerIndex: 1,
        hints: [
          "Check the 40-Minute Blueprint in Section 4.",
          "Notice how investing 5 calm minutes upfront protects you from running out of time before the closing stanza.",
        ],
        explanation:
          "Allocating **5 mins protocol → 4 mins conceptual intro → 25 mins for 3 integrated paragraphs (Opening → Volta → Ending) → 6 mins closing judgement & polish** guarantees whole-poem coverage without panic.",
      },
      {
        id: "unseen-poetry-analysis-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "Which **3-paragraph body structure** best integrates language and structure on an unseen poem?",
        options: [
          "Para 1: Every metaphor in the poem; Para 2: Every sound device; Para 3: Rhyme scheme",
          "Para 1: What happens in stanza 1; Para 2: Retell stanza 2; Para 3: Retell stanza 3",
          "Para 1: Opening framing & mood; Para 2: Volta & tonal shift; Para 3: Closing image & ambiguity",
          "Para 1: Poet's imagined childhood; Para 2: Dictionary definitions; Para 3: Personal rating",
        ],
        answerIndex: 2,
        hints: [
          "Compare grouping by disconnected technique labels versus following the poem's emotional journey.",
          "When you track Opening → Volta → Ending, language and structure reinforce each other naturally.",
        ],
        explanation:
          "Structuring paragraphs along the **poem's emotional arc** (Opening → Volta → Ending) naturally weaves imagery, word-zoom, enjambment, and caesura together while proving holistic grasp of the poem.",
      },
      {
        id: "unseen-poetry-analysis-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "Which **topic sentence** opens a body paragraph with a sharp conceptual claim instead of feature-spotting?",
        options: [
          "At the volta, hushed nostalgia fractures into quiet defiance against mechanical erasure.",
          "Next, the poet uses a metaphor and a dash in line six of the second stanza.",
          "Another good language technique found in this poem is personification of the wind.",
          "In stanza two, the crane swings outside the house while wallpaper peels off the wall.",
        ],
        answerIndex: 0,
        hints: [
          "Ask: which opening sentence leads with an *idea about meaning/emotion* rather than a device name or plot summary?",
          "Look for structural signposting ('At the volta') paired with conceptual tone words.",
        ],
        explanation:
          "Leading with *'At the volta, hushed nostalgia fractures into quiet defiance...'* sets a conceptual claim about meaning and tonal shift; quotations and methods then follow smoothly to prove it.",
      },
      {
        id: "unseen-poetry-analysis-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "Read this student sentence about an unseen line (*\"The orchard wears its white ash lightly\"*):\n\n*\"The poet uses a metaphor 'wears its white ash lightly' which creates a vivid image in the reader's head and makes them want to read on.\"*\n\nWhat is the **main weakness** keeping this sentence out of the top mark band?",
        options: [
          "The student embedded too short a quotation instead of copying the entire stanza",
          "The student failed to mention the poet's date of birth and home town",
          "The student should have claimed the orchard is literally wearing a jacket",
          "It feature-spots without unpacking the specific connotations of 'wears', 'ash', or 'lightly'",
        ],
        answerIndex: 3,
        hints: [
          "Notice the generic banned filler: 'creates a vivid image in the reader's head and makes them want to read on'.",
          "What concrete associations of 'ash' (fire, grief, winter pale) vs 'lightly' (resilience, grace) went completely unexamined?",
        ],
        explanation:
          "Saying an image *'creates a vivid image'* is empty filler. Top-band analysis zooms into the contrast between burnt devastation (*'ash'*) and graceful endurance (*'wears... lightly'*).",
      },
      {
        id: "unseen-poetry-analysis-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "writing-high-band-unseen",
        question:
          "Read this fresh unseen closing stanza about an old bicycle left in a garden shed:\n\n*Spiders mend the spokes with silver thread;*\n*still, propped beside the bolted garden gate,*\n*its tilted bell remembers downhill wind.*\n\nWhich analytical sentence **integrates language and structure** most effectively?",
        options: [
          "The poet uses alliteration in 'spiders' and 'spokes' and puts a semicolon in line one.",
          "After the semicolon, 'still' pivots from webbed decay into personified longing ('remembers').",
          "This stanza is about an old rusty bicycle with spiders on it propped near a locked gate.",
          "The word 'bell' makes the reader hear loud ringing noises and picture a shiny new bike.",
        ],
        answerIndex: 1,
        hints: [
          "Find the sentence that links a structural marker (the semicolon + pivot word 'still') directly with imagery and single-word connotation.",
          "Eliminate feature-spotting, plot summary, and literal misreadings.",
        ],
        explanation:
          "Linking the structural pause (*semicolon* + volta *'still'*) straight into the shift from delicate decay (*'mend the spokes'*) to personified nostalgia (*'remembers downhill wind'*) models top-band integrated analysis.",
      },
      {
        id: "unseen-poetry-analysis-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "first-read-protocol",
        question:
          "Read this fresh unseen stanza:\n\n**First Train Out**\n*Platform lamps smear amber through the mist;*\n*my suitcase groans with folded winter coats,*\n*yet lighter than the doorway left behind.*\n\nWhat paradox in line 3 reveals the speaker's deeper emotional conflict?",
        options: [
          "The speaker forgot to pack any warm clothes despite cold winter weather",
          "The train station platform has dim amber lighting that slows boarding",
          "Though physically heavy ('groans'), the suitcase feels lighter than the emotional weight of leaving home",
          "The doorway was built from heavier timber than ordinary railway carriages",
        ],
        answerIndex: 2,
        hints: [
          "Compare the heavy verb 'groans' in line 2 with the comparative 'yet lighter than the doorway left behind' in line 3.",
          "Is 'weight' here literal kilograms or emotional attachment?",
        ],
        explanation:
          "Contrasting physical heaviness (*'groans'*) against emotional heaviness (*'lighter than the doorway left behind'*) reveals the speaker's bittersweet ache: leaving home weighs far more on the heart than luggage.",
      },
      {
        id: "unseen-poetry-analysis-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "Which **closing judgement** ends an unseen poetry essay with maximum impact?",
        options: [
          "Ultimately, by suspending the final image between departure and warmth, the poet suggests memory refuses tidy closure.",
          "In conclusion, I have shown that the poet uses metaphors, caesura, rhyme, and stanzas very effectively indeed.",
          "To sum up, this was a really sad poem about a key that made me feel lots of strong emotions.",
          "Finally, the poem has five lines and ends with a full stop which brings the writing to a clear finish.",
        ],
        answerIndex: 0,
        hints: [
          "Strong conclusions step back to evaluate the poet's overarching human insight without repeating a list of techniques.",
          "Avoid vague personal ratings ('really sad', 'very effectively indeed').",
        ],
        explanation:
          "A top-band conclusion zooms out to a crisp thematic judgement (*'memory refuses tidy closure'*) anchored in the poem's final structural tension, avoiding recycled technique lists.",
      },
      {
        id: "unseen-poetry-analysis-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this public-domain stanza from Christina Rossetti's *Remember* (1862):\n\n*Yet if you should forget me for a while*\n*And afterwards remember, do not grieve:*\n*For if the darkness and corruption leave*\n*A vestige of the thoughts that once I had,*\n*Better by far you should forget and smile*\n*Than that you should remember and be sad.*\n\nHow does the **volta** (*'Yet'*) reshape the speaker's presentation of love?",
        options: [
          "It turns gentle affection into bitter resentment over being forgotten quickly",
          "It switches into detached scientific commentary about memory loss",
          "It proves the speaker carelessly doubts whether the listener ever cared",
          "It elevates selfless love above ego, choosing the beloved's peace over painful remembrance",
        ],
        answerIndex: 3,
        hints: [
          "Read the closing antithesis: 'Better by far you should forget and smile / Than that you should remember and be sad.'",
          "Notice the speaker relinquishes the earlier plea ('Remember me') out of pure tenderness.",
        ],
        explanation:
          "Launching the sonnet's **volta** on *'Yet'*, Rossetti pivots from longing to be remembered into poignant **selfless tenderness**, using balanced antithesis (*'forget and smile'* vs *'remember and be sad'*) to prioritise the beloved's happiness.",
      },
      {
        id: "unseen-poetry-analysis-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "Why is embedding **1–5 word micro-quotations** superior to copying three full lines of an unseen poem into your essay?",
        options: [
          "Because exam booklets penalise students for using quotation marks more than twice",
          "Because short poems never contain full sentences worth analysing closely",
          "Because tight quotations force precise word-level zoom and keep your prose fluent",
          "Because copying fewer words hides the fact that you skipped reading the ending",
        ],
        answerIndex: 2,
        hints: [
          "Compare writing three lines of copied verse versus embedding 'iron jaw' and unpacking 'iron' and 'jaw'.",
          "Examiners award marks for *your* analysis, not for copying the exam paper back to them!",
        ],
        explanation:
          "Razor-short **embedded micro-quotations** maintain fluent academic syntax and force you to zoom sharply into exact connotations rather than wasting timed minutes transcribing whole stanzas.",
      },
      {
        id: "unseen-poetry-analysis-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "unseen-structure-form",
        question:
          "Read this fresh unseen stanza about a coastal foghorn:\n\n*All night its slow brass warning sweeps the dark,*\n*low syllable of salt and iron grace —*\n*a lonely voice keeping the unseen safe.*\n\nHow do **assonance** (*'slow... low'*) and the **closing line's rhythm** reinforce the foghorn's character?",
        options: [
          "Rapid clipped vowels panic the listener like a sudden alarm bell ringing",
          "Long drawn-out /oʊ/ vowels mimic the foghorn's deep, steady hum watching over ships",
          "Cheerful bouncing rhymes turn the dark ocean into a bright holiday beach scene",
          "Repeated harsh consonants suggest the lighthouse keeper wants ships to sink",
        ],
        answerIndex: 1,
        hints: [
          "Read 'All night its slow brass warning... low syllable' aloud and listen to the long vowel sounds.",
          "Connect that acoustic duration to the oxymoronic tenderness of 'iron grace' and 'keeping the unseen safe'.",
        ],
        explanation:
          "Long, resonant vowel sounds (**assonance** in *'slow'* and *'low'*) stretch auditory duration to imitate the foghorn's deep, reassuring drone, reinforcing its quietly heroic vigil (*'iron grace'*).",
      },
      {
        id: "unseen-poetry-analysis-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "When doing your **final 2-minute polish** on a timed unseen poetry essay, which quick edit adds the highest analytical lift?",
        options: [
          "Adding three exclamation marks at the end to sound enthusiastic about poetry",
          "Deleting all tentative words like 'arguably' so every claim sounds rigid and absolute",
          "Counting total syllables in every stanza and writing the sum in the margin",
          "Replacing flat verbs like 'shows' with precise analytical verbs like 'evokes' or 'unsettles'",
        ],
        answerIndex: 3,
        hints: [
          "Check Section 4's 2-minute polish guidance.",
          "Think about the easiest lexical upgrade that elevates academic precision instantly.",
        ],
        explanation:
          "Swapping repetitive, vague verbs (*'shows'*, *'uses'*) for precise analytical verbs (**evokes, conveys, unsettles, intimates, fractures**) sharpens clarity and academic tone in seconds.",
      },
      {
        id: "unseen-poetry-analysis-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "first-read-protocol",
        question:
          "Read this fresh unseen short poem:\n\n**Borrowed Umbrella**\n*You pressed its crooked handle in my palm*\n*when monsoon clouds unlatched above the bus stop.*\n*I never gave it back —*\n*now every downpour smells faintly of your coat.*\n\nWhat makes the title **'Borrowed Umbrella'** quietly poignant once you reach line 4?",
        options: [
          "'Borrowed' hints at temporary kindness that turned into a permanent, treasured link to absence",
          "'Borrowed' proves the speaker deliberately stole expensive gear during a heavy storm",
          "'Borrowed' warns readers never to lend umbrellas to forgetful acquaintances",
          "'Borrowed' establishes scientific accuracy about how cotton absorbs tropical rainfall",
        ],
        answerIndex: 0,
        hints: [
          "Connect 'Borrowed' (meant to be returned) with 'I never gave it back —' and 'smells faintly of your coat'.",
          "Notice how an everyday forgotten object becomes an anchor of memory and affection.",
        ],
        explanation:
          "Linking the title (*'Borrowed'*) to the dash-framed confession (*'I never gave it back —'*) and sensory recall (*'smells faintly of your coat'*) transforms a minor everyday loan into an aching, cherished relic of closeness.",
      },
      {
        id: "unseen-poetry-analysis-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "writing-high-band-unseen",
        question:
          "What should you do if an unseen exam poem contains **one strange line or unfamiliar word** that you genuinely do not understand?",
        options: [
          "Panic and spend fifteen minutes staring only at that single baffling word",
          "Stay anchored in the parts you clearly grasp and explore a tentative reading from context",
          "Leave your essay blank because top-band answers require explaining every single word",
          "Invent a completely unrelated plot summary and ignore the actual printed poem",
        ],
        answerIndex: 1,
        hints: [
          "Remember: examiners never demand you translate every word like a dictionary!",
          "You choose which 3–5 rich quotations to analyse — and tentative phrasing handles ambiguity cleanly.",
        ],
        explanation:
          "Even professional critics encounter knotty lines! Anchor your essay on the **3–5 richest lines you clearly grasp**, and use surrounding context plus tentative verbs (*'may hint at'*, *'arguably suggests'*) for tricky images.",
      },
      {
        id: "unseen-poetry-analysis-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "decoding-imagery-ambiguity",
        question:
          "Read this public-domain closing stanza from Thomas Hardy's *Neutral Tones* (1867):\n\n*Since then, keen lessons that love deceives,*\n*And wrings with wrong, have shaped to me*\n*Your face, and the God-curst sun, and a tree,*\n*And a pond edged with grayish leaves.*\n\nHow do the **cyclical closing images** (*sun, tree, pond, grayish leaves*) and **polysyndeton** (*'and... and... and'*) convey bitter memory?",
        options: [
          "They show the speaker recovered happily by taking peaceful autumn walks alone",
          "They speed up the ending joyfully as springtime returns colour to the pond",
          "Piling bleak landscape echoes with repeated 'and' shows trauma trapping every memory in colourless winter",
          "They shift focus away from heartbreak into an objective botanical field guide",
        ],
        answerIndex: 2,
        hints: [
          "Notice the repeated conjunction 'and' piling bleak images together ('Your face, and the God-curst sun, and a tree, / And a pond').",
          "Why does 'grayish leaves' drain the closing line of colour and vitality?",
        ],
        explanation:
          "Hardy's heavy **polysyndeton** (*'and... and... and'*) drags out the speaker's inescapable obsession, fusing the lover's *'face'* permanently to a drained, *'grayish'* winter landscape — bitter emotional stasis.",
      },
    ],
  },
];
