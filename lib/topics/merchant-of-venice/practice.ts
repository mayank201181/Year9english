import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "merchant-of-venice-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "venice-belmont-context",
      question:
        "Who is the title character — the maritime merchant of Venice who signs Shylock's bond to help his friend Bassanio?",
      answer: { type: "text", accept: ["Antonio", "antonio"], display: "Antonio" },
      traps: [
        { spec: { type: "text", accept: ["Shylock", "Bassanio", "Lorenzo"] }, feedback: "Watch out for the classic trap! Shylock is the moneylender; the maritime merchant of Venice is **Antonio**." },
      ],
      hints: ["He opens Act 1, Scene 1 saying 'In sooth, I know not why I am so sad.'"],
      solution: ["**Antonio** is the shipping merchant who risks a pound of flesh to fund Bassanio's trip to Belmont."],
    },
    {
      id: "merchant-of-venice-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "venice-belmont-context",
      question:
        "Name the romantic country estate where Portia lives, contrasted throughout the play with mercantile Venice.",
      answer: { type: "text", accept: ["Belmont", "belmont"], display: "Belmont" },
      traps: [
        { spec: { type: "text", accept: ["Messina", "Padua", "Verona", "Venice"] }, feedback: "Padua is Doctor Bellario's university city; Portia's fairy-tale estate is **Belmont**." },
      ],
      hints: ["It begins with B and literally means 'beautiful mountain'."],
      solution: ["**Belmont** represents music, moonlight, inheritance and courtship, contrasting sharply with commercial Venice."],
    },
    {
      id: "merchant-of-venice-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "portia-trial-mercy-justice",
      question:
        "Which of the three caskets contains Portia's portrait and carries the inscription *'Who chooseth me must give and hazard all he hath'*?",
      options: [
        "Gold",
        "Silver",
        "Lead",
        "Bronze",
      ],
      answerIndex: 2,
      hints: ["Bassanio rejects glittering outward ornament to choose the humblest metal."],
      explanation: "The dull **Lead** casket holds Portia's portrait, rewarding Bassanio for looking beyond deceptive outward show (*'All that glisters is not gold'*).",
    },
    {
      id: "merchant-of-venice-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "venice-belmont-context",
      question:
        "What historical term names the practice of lending money at interest, which Venetian Christians condemned as sinful while restricting Jews to that trade?",
      answer: { type: "text", accept: ["usury", "usance"], display: "usury" },
      traps: [
        { spec: { type: "text", accept: ["charity", "gratis", "tax", "bond"] }, feedback: "Antonio lends 'gratis' (free of interest); charging interest on a loan is **usury** (or *usance*)." },
      ],
      hints: [
        "A five-letter noun beginning with U.",
        "Shylock resents Antonio for lending money interest-free and undercutting Venetian moneylenders.",
      ],
      solution: ["**Usury** (interest-bearing moneylending) sat at the heart of Venetian economic and religious hypocrisy."],
    },
    {
      id: "merchant-of-venice-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "shylock-villain-or-victim",
      question:
        "In Act 3, Scene 1, Shylock asks: *'If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?'* What literary form does Shakespeare use for this speech?",
      options: [
        "Driving, urgent prose",
        "Rhyming ballad quatrains",
        "Formal ceremonial blank verse",
        "A fourteen-line sonnet",
      ],
      answerIndex: 0,
      hints: [
        "Recall the common exam mistake: many students assume famous speeches are always in verse, yet this fierce street confrontation breaks into everyday rhythm.",
        "Choose between prose and poetic metre.",
      ],
      explanation: "Shakespeare writes *'Hath not a Jew eyes?'* in urgent, rhythmic **prose**, making Shylock's logical progression from shared humanity to revenge sound raw, immediate and unstoppable.",
    },
    {
      id: "merchant-of-venice-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "portia-trial-mercy-justice",
      question:
        "Under what male alias does Portia disguise herself as a young Roman doctor of law in Act 4, Scene 1?",
      answer: { type: "text", accept: ["Balthasar", "Balthazar"], display: "Balthasar" },
      traps: [
        { spec: { type: "text", accept: ["Bellario", "Lorenzo", "Gratiano", "Tubal"] }, feedback: "Doctor Bellario is Portia's legal cousin in Padua who sends the recommendation letter; Portia's courtroom disguise name is **Balthasar**." },
      ],
      hints: [
        "Starts with B and echoes one of the traditional Biblical Magi.",
        "Nerissa serves beside her as his law clerk.",
      ],
      solution: ["Portia enters the Venetian courtroom disguised as **Balthasar**, winning intellectual agency denied to Elizabethan women."],
    },
    {
      id: "merchant-of-venice-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "portia-trial-mercy-justice",
      question:
        "In Act 4, Scene 1, what exact technical wording in the bond does Portia exploit to stop Shylock from cutting Antonio?",
      options: [
        "The contract expired three days before the trial opened",
        "The bond grants flesh only and permits 'no jot of blood'",
        "Antonio never signed his full surname beside the wax seal",
        "Venetian law bans cutting any nobleman inside the Duke's hall",
      ],
      answerIndex: 1,
      hints: [
        "Portia beats Shylock at his own game of strict literalism.",
        "Think about what inevitably spills when cutting a pound of flesh from a living man.",
      ],
      explanation: "Portia halts Shylock with *'Tarry a little… This bond doth give thee here no jot of blood'*, flipping literal contract enforcement directly back onto Shylock.",
    },
    {
      id: "merchant-of-venice-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "shylock-villain-or-victim",
      question:
        "What is the name of Shylock's late wife, whose turquoise ring Jessica trades for a monkey — prompting Shylock's poignant cry in Act 3, Scene 1?",
      answer: { type: "text", accept: ["Leah", "leah"], display: "Leah" },
      traps: [
        { spec: { type: "text", accept: ["Jessica", "Portia", "Nerissa"] }, feedback: "Jessica is Shylock's daughter who took the ring; his late wife who gave it to him when he was a bachelor was **Leah**." },
      ],
      hints: [
        "A four-letter biblical name starting with L.",
        "Shylock says: 'I had it of ____ when I was a bachelor.'",
      ],
      solution: ["**Leah**'s turquoise ring humanises Shylock, proving sentimental devotion outweighs financial wealth."],
    },
    {
      id: "merchant-of-venice-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "bonds-loyalty-essay-craft",
      question:
        "Which stage prop symbolically links Portia's loyalty test in Act 5, Scene 1 to the play's wider motif of competing **bonds**?",
      options: [
        "The Duke's parchment warrant",
        "Shylock's brass weighing scales",
        "Morocco's silver casket key",
        "Portia's golden wedding ring",
      ],
      answerIndex: 3,
      hints: [
        "Bassanio gives this pledge away to the disguised lawyer after Antonio persuades him.",
        "Think of the pledge Portia gives Bassanio in Act 3, Scene 2.",
      ],
      explanation: "**Portia's wedding ring** physically stages the collision between Bassanio's friendship bond with Antonio and his marriage bond with Portia, allowing Portia to claim equal respect in Act 5.",
    },
    {
      id: "merchant-of-venice-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "venice-belmont-context",
      marks: 3,
      question:
        "Briefly explain how Shakespeare's phrasing in Portia's Act 1, Scene 2 lament — *'so is the will of a living daughter curbed by the will of a dead father'* — reveals her position in Belmont.",
      hints: [
        "Identify the double meaning on the repeated word 'will'.",
        "Comment on the contrast between 'living' and 'dead', or the controlling connotations of 'curbed'.",
      ],
      modelAnswer:
        "Shakespeare uses a clever pun on 'will' — shifting from personal desire to a legal testament — to show how Elizabethan patriarchy restricts female autonomy even for a wealthy heiress. The sharp antithesis between 'living daughter' and 'dead father' alongside the restraining verb 'curbed' (evoking a horse reined in by a bit) creates immediate audience sympathy for Portia's trapped intelligence.",
      markScheme: [
        {
          point: "Explains the pun / double meaning on 'will' (personal desire vs legal document)",
          keywords: ["pun", "double meaning", "desire", "testament", "legal", "wordplay"],
        },
        {
          point: "Analyses antithesis ('living' vs 'dead') or the restraining verb 'curbed'",
          keywords: ["antithesis", "contrast", "horse", "rein", "restrain", "control", "trap"],
        },
        {
          point: "Links to patriarchal limitation of female freedom / audience sympathy for Portia",
          keywords: ["patriarch", "autonomy", "freedom", "sympathy", "audience", "heiress"],
        },
      ],
    },
  ],

  papers: [
    {
      id: "merchant-of-venice-p1",
      title: "Practice Paper 1 — Venice vs Belmont, Caskets & Shylock",
      questions: [
        {
          id: "merchant-of-venice-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "venice-belmont-context",
          question:
            "How many Venetian ducats does Bassanio ask Antonio to borrow from Shylock for three months?",
          answer: { type: "number", value: 3000, display: "3,000" },
          traps: [
            { spec: { type: "number", value: 6000 }, feedback: "6,000 ducats is the double repayment Bassanio offers in Act 4, Scene 1; the original loan in Act 1, Scene 3 is **3,000** ducats." },
            { spec: { type: "number", value: 1000 }, feedback: "The original loan Shylock ponders ('Three thousand ducats — well') is **3,000** ducats." },
          ],
          hints: ["Recall Shylock's slow opening line in Act 1, Scene 3: '______ thousand ducats — well.'"],
          solution: ["The original bond is for **3,000** ducats over three months."],
        },
        {
          id: "merchant-of-venice-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "venice-belmont-context",
          question:
            "What term does Shakespeare use for Antonio's large, richly laden merchant ships sailing to Tripoli, the Indies and Mexico?",
          answer: { type: "text", accept: ["argosies", "argosy"], display: "argosies" },
          traps: [
            { spec: { type: "text", accept: ["galleons", "boats", "gondolas"] }, feedback: "Shakespeare's specific Renaissance word for Antonio's grand trading vessels is **argosies** (singular: *argosy*)." },
          ],
          hints: ["An eight-letter plural noun starting with 'argo-' (echoing Jason's ship *Argo*)."],
          solution: ["**Argosies** are rich merchant vessels — named after Ragusa/Argo and tied to Venice's maritime wealth."],
        },
        {
          id: "merchant-of-venice-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "portia-trial-mercy-justice",
          question:
            "Which suitor picks the **Gold** casket and discovers a skull carrying the warning *'All that glisters is not gold'*?",
          answer: { type: "text", accept: ["Prince of Morocco", "Morocco"], display: "Prince of Morocco" },
          traps: [
            { spec: { type: "text", accept: ["Arragon", "Prince of Arragon", "Bassanio"] }, feedback: "The Prince of Arragon picks Silver and Bassanio picks Lead; the suitor dazzled by Gold is the **Prince of Morocco**." },
          ],
          hints: ["He is a North African prince whose name starts with M."],
          solution: ["The **Prince of Morocco** chooses Gold because it promises 'what many men desire', falling for outward gleam."],
        },
        {
          id: "merchant-of-venice-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "portia-trial-mercy-justice",
          question:
            "Which suitor picks the **Silver** casket (*'as much as he deserves'*) and finds the portrait of a blinking idiot?",
          answer: { type: "text", accept: ["Prince of Arragon", "Arragon", "Aragon", "Prince of Aragon"], display: "Prince of Arragon" },
          traps: [
            { spec: { type: "text", accept: ["Morocco", "Prince of Morocco", "Bassanio"] }, feedback: "Morocco picks Gold and Bassanio picks Lead; the arrogant Spanish prince who picks Silver is the **Prince of Arragon**." },
          ],
          hints: ["He is a proud Spanish prince whose name starts with A."],
          solution: ["The **Prince of Arragon** arrogantly assumes he merits Portia and is mocked by the fool's head inside Silver."],
        },
        {
          id: "merchant-of-venice-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "venice-belmont-context",
          question:
            "Name Shylock's daughter who calls her home *'hell'* and elopes with Christian Lorenzo in Act 2.",
          answer: { type: "text", accept: ["Jessica", "jessica"], display: "Jessica" },
          traps: [
            { spec: { type: "text", accept: ["Nerissa", "Portia", "Leah"] }, feedback: "Nerissa is Portia's confidante and Leah is Shylock's late wife; Shylock's daughter is **Jessica**." },
          ],
          hints: [
            "Starts with J.",
            "She disguises herself as a boy torchbearer to escape Shylock's house.",
          ],
          solution: ["**Jessica** flees Shylock's house with Lorenzo, taking ducats and Leah's turquoise ring."],
        },
        {
          id: "merchant-of-venice-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "venice-belmont-context",
          question:
            "Name the walled Venetian district established in 1516 where Jewish residents were legally required to live and locked inside at night.",
          answer: { type: "text", accept: ["Ghetto", "the Ghetto", "Venetian Ghetto", "Ghetto Nuovo"], display: "Ghetto" },
          traps: [
            { spec: { type: "text", accept: ["Rialto", "Belmont", "Padua"] }, feedback: "The Rialto was Venice's busy commercial exchange; the segregated residential island for Venetian Jews was the **Ghetto**." },
          ],
          hints: [
            "A six-letter Italian word (originally meaning foundry) that entered modern English directly from Venice.",
            "Starts with 'Gh-'.",
          ],
          solution: ["The Venetian **Ghetto** (1516) shaped Shylock's status as a legally marginalised outsider."],
        },
        {
          id: "merchant-of-venice-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          question:
            "In Act 1, Scene 3, Shylock speaks privately to the audience (*'I hate him for he is a Christian...'*) while Antonio and Bassanio stand onstage unable to hear him. What exact dramatic device is this?",
          answer: { type: "text", accept: ["aside", "an aside"], display: "aside" },
          traps: [
            { spec: { type: "text", accept: ["soliloquy", "monologue", "dialogue"] }, feedback: "A soliloquy happens when the speaker is *alone* onstage; speaking privately to the audience while other characters remain onstage is an **aside**." },
          ],
          hints: [
            "Five letters, starting with A.",
            "Unlike a soliloquy, other characters are still standing nearby on stage.",
          ],
          solution: ["An **aside** unveils Shylock's bitter hidden motives directly to spectators, creating instant dramatic irony."],
        },
        {
          id: "merchant-of-venice-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          question:
            "In Act 1, Scene 3, Shylock confronts Antonio: *'You call me misbeliever, cut-throat ______, / And spet upon my Jewish gaberdine.'* Type the single dehumanising animal noun Antonio calls him.",
          answer: { type: "text", accept: ["dog", "cur"], display: "dog" },
          traps: [
            { spec: { type: "text", accept: ["wolf", "devil", "rat", "serpent"] }, feedback: "Gratiano later calls him a wolf and Antonio calls him 'the devil', but right beside 'cut-throat' in Act 1, Scene 3 is **dog**." },
          ],
          hints: [
            "Three-letter domestic animal noun that Shylock echoes in Act 3.3 ('since I am a ____, beware my fangs').",
            "Starts with D.",
          ],
          solution: ["Antonio calls Shylock a *'cut-throat **dog**'*, an animal slur Shylock later turns into a chilling threat (*'beware my fangs'*)."],
        },
        {
          id: "merchant-of-venice-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          question:
            "Name Shylock's fellow Jewish merchant who brings him alternating news of Jessica's wild spending in Genoa and Antonio's lost ships in Act 3, Scene 1.",
          answer: { type: "text", accept: ["Tubal", "tubal"], display: "Tubal" },
          traps: [
            { spec: { type: "text", accept: ["Solanio", "Salarino", "Launcelot", "Gratiano"] }, feedback: "Salarino and Solanio mock Shylock; his fellow Jewish acquaintance who delivers the news of Leah's ring and Antonio's shipwreck is **Tubal**." },
          ],
          hints: [
            "A five-letter name starting with T.",
            "His alternating bad and good news swings Shylock wildly between agony and vengeance.",
          ],
          solution: ["**Tubal** reports both Jessica's trading of Leah's ring and Antonio's shipwreck, driving Shylock's emotional pendulum."],
        },
        {
          id: "merchant-of-venice-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          question:
            "In Act 3, Scene 1, Shylock asks *'Hath not a Jew eyes? ... If you prick us, do we not bleed?'* What two-word literary device names questions posed for persuasive force with no spoken answer expected?",
          answer: { type: "text", accept: ["rhetorical questions", "rhetorical question"], display: "rhetorical questions" },
          traps: [
            { spec: { type: "text", accept: ["oxymoron", "malapropism", "dramatic irony", "aside"] }, feedback: "Asking pressing questions whose obvious answer ('Yes!') forces audience agreement is the device of **rhetorical questions**." },
          ],
          hints: [
            "Two words: the first relates to persuasive speechcraft, the second means queries.",
            "Starts with 'rhet-'.",
          ],
          solution: ["**Rhetorical questions** force listeners to agree silently with Shylock's shared humanity before he springs the chilling turn to revenge."],
        },
        {
          id: "merchant-of-venice-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "venice-belmont-context",
          question:
            "What Latin word (used by Shylock in Act 1, Scene 3: *'He lends out money ______'*) means 'free of charge / without charging interest'?",
          answer: { type: "text", accept: ["gratis"], display: "gratis" },
          traps: [
            { spec: { type: "text", accept: ["usance", "usury", "forfeit"] }, feedback: "Usance/usury means charging interest; Antonio lowers Venice's interest rates by lending **gratis** (free)." },
          ],
          hints: [
            "Six letters, starting with 'grat-' (related to 'gratitude' and 'free').",
            "Gratiano later bitterly echoes this exact word in Act 4, Scene 1 ('a halter ____').",
          ],
          solution: ["**Gratis** means interest-free — Antonio's charitable lending undercuts Shylock's moneylending livelihood on the Rialto."],
        },
        {
          id: "merchant-of-venice-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "venice-belmont-context",
          marks: 4,
          question:
            "How does Shakespeare contrast **Venice** and **Belmont** in Act 1 — yet hint that money quietly connects both worlds? Refer to specific textual details.",
          hints: [
            "Outline the structural dichotomy between Venetian commerce/usury and Belmont's romance/caskets.",
            "Zoom into Bassanio's description of Portia ('a lady richly left' / 'golden fleece') and his 3,000-ducat loan.",
            "Explain what Shakespeare implies about love and material wealth.",
          ],
          modelAnswer:
            "Shakespeare establishes a sharp structural dichotomy between mercantile Venice — governed by argosies, ducats, usury and religious hostility — and Belmont, a romantic estate associated with inheritance, music and the three caskets test. Yet Shakespeare immediately blurs that tidy boundary through Bassanio's language. When Bassanio introduces Portia to Antonio as 'a lady richly left' and compares her hair to a 'golden fleece', putting inherited fortune ahead of beauty reveals commercial ambition inside courtship. Because Bassanio must borrow 3,000 Venetian ducats just to compete in Belmont, Shakespeare implies that fairy-tale romance cannot escape economic realities.",
          markScheme: [
            {
              point: "Contrasts commercial/legalistic Venice with romantic/fairy-tale Belmont (structural dichotomy)",
              keywords: ["dichotomy", "contrast", "mercantile", "commercial", "romantic", "music", "casket"],
            },
            {
              point: "Embeds and analyses Bassanio's commercial phrasing ('richly left' or 'golden fleece')",
              keywords: ["richly left", "golden fleece", "fortune", "inheritance", "wealth", "first"],
            },
            {
              point: "Links the two worlds via Bassanio's 3,000-ducat loan needed to woo Portia",
              keywords: ["3,000", "3000", "borrow", "loan", "ducat", "fund"],
            },
            {
              point: "Explains Shakespeare's thematic point that money/economics underlie even romantic ideals",
              keywords: ["blur", "entangle", "economic", "material", "escape", "reality", "ambition"],
            },
          ],
        },
        {
          id: "merchant-of-venice-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          marks: 4,
          question:
            "Read this extract from Act 3, Scene 1:\n\n> **Shylock:** *If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge? … The villainy you teach me I will execute, and it shall go hard but I will better the instruction.*\n\nAnalyse how Shakespeare uses language and structure here to shift audience sympathy.",
          hints: [
            "Note the urgent prose form, parallel syntax and escalating rhetorical questions.",
            "Identify the exact structural turning point between shared bodily humanity and murderous revenge.",
            "Zoom into the teaching metaphor ('teach' / 'instruction') to explain Christian hypocrisy.",
          ],
          modelAnswer:
            "Writing in urgent, rhythmic prose rather than restrained blank verse, Shakespeare compels the audience to confront Shylock's shared humanity before ambushing us with terrifying vengeance. Escalating parallel syntax and rhetorical questions ('bleed', 'laugh', 'die') stack undeniable bodily truths that dismantle Venetian antisemitism and win powerful pathos. However, the conjunction 'And' pivots seamlessly into retaliation, presenting murder as a natural human reflex. Zooming into the educational metaphor ('teach', 'instruction'), Shakespeare exposes Christian hypocrisy: Shylock insists cruelty is learned from Venetian oppressors, trapping audiences between pity for a persecuted outsider and dread of an unstoppable avenger.",
          markScheme: [
            {
              point: "Identifies driving prose form, parallel syntax, and rhetorical questions",
              keywords: ["prose", "parallel", "rhetorical question", "anaphora", "escalat"],
            },
            {
              point: "Explains how physical human examples ('bleed', 'laugh', 'die') dismantle prejudice and build pathos",
              keywords: ["humanity", "pathos", "equal", "sympathy", "prejudice", "antisemit", "bodily"],
            },
            {
              point: "Identifies the dark structural pivot from shared suffering to chilling vengeance",
              keywords: ["pivot", "turn", "shift", "vengeance", "murder", "ambush", "dread"],
            },
            {
              point: "Zooms into the educational/teaching metaphor exposing learned cruelty and Christian hypocrisy",
              keywords: ["metaphor", "educat", "learned", "hypocrisy", "christian", "oppress", "mirror"],
            },
          ],
        },
        {
          id: "merchant-of-venice-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          marks: 4,
          question:
            "Explain how Shakespeare complicates the stereotype of Shylock as a greedy miser in Act 1, Scene 3 and Act 3, Scene 1.",
          hints: [
            "Cite Antonio's dehumanising insults ('cut-throat dog', spitting on his Jewish gaberdine) in Act 1, Scene 3.",
            "Analyse Shylock's reaction to losing Leah's turquoise ring ('wilderness of monkeys') in Act 3, Scene 1.",
            "Contrast Salanio's hostile caricature ('My daughter! O my ducats!') with Shylock's own tender voice.",
          ],
          modelAnswer:
            "Shakespeare actively disrupts the simplistic caricature of Shylock as a soulless moneylender by revealing both systemic abuse and intimate human grief. In Act 1, Scene 3, Shylock exposes daily dehumanisation on the Rialto, reminding Antonio of animal slurs ('cut-throat dog') and spitting on his 'Jewish gaberdine' — abuse Antonio proudly promises to repeat. Later, although Solanio mocks Shylock for equating daughter with ducats, Act 3, Scene 1 refutes that gossip when Shylock mourns his dead wife Leah's turquoise ring, crying he would not trade it for a 'wilderness of monkeys'. Through nostalgic memory and hyperbole, Shakespeare proves sentimental love outweighs gold, generating sharp pathos.",
          markScheme: [
            {
              point: "Cites Venetian dehumanisation / Antonio's insults ('cut-throat dog' / spitting on gaberdine)",
              keywords: ["dog", "gaberdine", "spit", "spet", "dehumanis", "abuse", "rialto"],
            },
            {
              point: "Contrasts Christian gossip ('My daughter! O my ducats!') with Shylock's real onstage voice",
              keywords: ["solanio", "gossip", "mock", "caricature", "ducats", "stereotype"],
            },
            {
              point: "Analyses Leah's turquoise ring and the hyperbole 'wilderness of monkeys'",
              keywords: ["leah", "turquoise", "ring", "monkey", "hyperbole", "bachelor"],
            },
            {
              point: "Explains audience pathos — showing sentimental love and grief outweigh money",
              keywords: ["pathos", "sentimental", "grief", "love", "humanis", "tender"],
            },
          ],
        },
        {
          id: "merchant-of-venice-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "portia-trial-mercy-justice",
          marks: 3,
          question:
            "Explain how the Three Caskets test (Gold, Silver and Lead) develops Shakespeare's central theme of **appearance versus reality**.",
          hints: [
            "Link Gold (Morocco) and Silver (Arragon) to deceptive surface gleam and conceit.",
            "Link Lead (Bassanio) to rejecting 'ornament' and risking all ('give and hazard all he hath').",
            "Connect the casket lesson to at least one wider moment in Venice or Belmont.",
          ],
          modelAnswer:
            "Through the Three Caskets, Shakespeare stages appearance versus reality as a moral test of character. The Prince of Morocco is dazzled by gleaming Gold only to uncover a skull warning 'All that glisters is not gold', while Arragon's conceited vanity in picking Silver earns a blinking idiot's portrait. By contrast, Bassanio recognises that 'the world is still deceived with ornament' and accepts dull Lead's demand to 'give and hazard all he hath', echoing the wider play where Christian respectability hides prejudice and Portia's male robes conceal sharp female intellect.",
          markScheme: [
            {
              point: "Explains Gold (Morocco / skull / 'All that glisters') and/or Silver (Arragon / vanity / idiot)",
              keywords: ["morocco", "skull", "glisters", "arragon", "vanity", "idiot"],
            },
            {
              point: "Explains Bassanio choosing Lead by rejecting 'ornament' / willing to 'give and hazard all'",
              keywords: ["bassanio", "ornament", "hazard", "dull", "inner", "worth"],
            },
            {
              point: "Connects the motif to wider play hypocrisy, disguise, or moral contrast",
              keywords: ["hypocrisy", "disguise", "portia", "venice", "prejudice", "wider"],
            },
          ],
        },
      ],
    },
    {
      id: "merchant-of-venice-p2",
      title: "Practice Paper 2 — Trial Scene Rhetoric, Bonds & Drama Essays",
      questions: [
        {
          id: "merchant-of-venice-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "portia-trial-mercy-justice",
          question:
            "Complete Portia's famous Act 4, Scene 1 simile: *'The quality of mercy is not strained; / It droppeth as the gentle ______ from heaven.'*",
          answer: { type: "text", accept: ["rain"], display: "rain" },
          traps: [
            { spec: { type: "text", accept: ["dew", "snow", "light", "wind"] }, feedback: "Close natural imagery, but Shakespeare's exact nourishing weather noun is **rain**." },
          ],
          hints: ["Four-letter weather noun that falls softly onto parched earth."],
          solution: ["*'As the gentle **rain** from heaven'* portrays mercy as natural, life-giving and effortless."],
        },
        {
          id: "merchant-of-venice-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "portia-trial-mercy-justice",
          question:
            "In Portia's line *'The quality of mercy is not strained'*, what does the Elizabethan verb *'strained'* mean here (give one plain synonym)?",
          answer: { type: "text", accept: ["forced", "compelled", "constrained", "coerced"], display: "forced" },
          traps: [
            { spec: { type: "text", accept: ["broken", "tired", "weak", "stretched"] }, feedback: "In Elizabethan English, 'not strained' means not **forced** (or compelled) — setting up huge irony when Shylock is later forced to convert." },
          ],
          hints: ["Opposite of freely given (six letters, starts with F)."],
          solution: ["*'Not strained'* means not **forced** (or compelled) — mercy must be offered freely, not extorted."],
        },
        {
          id: "merchant-of-venice-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "portia-trial-mercy-justice",
          question:
            "What classical Aristotelian term names the sudden, dramatic reversal of fortune in Act 4, Scene 1 when Portia cries *'Tarry a little… no jot of blood'* and turns Shylock from victor into defendant?",
          answer: { type: "text", accept: ["peripeteia", "reversal"], display: "peripeteia" },
          traps: [
            { spec: { type: "text", accept: ["hamartia", "catharsis", "anagnorisis", "hubris"] }, feedback: "Hamartia is a tragic flaw and catharsis is emotional release; a sudden reversal of fortune in drama is **peripeteia**." },
          ],
          hints: [
            "A ten-letter Greek drama term starting with 'peri-'.",
            "It names the exact pivot where the hunter becomes the hunted.",
          ],
          solution: ["**Peripeteia** (sudden reversal of fortune) hits at maximum suspense right as Shylock lifts his knife."],
        },
        {
          id: "merchant-of-venice-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "portia-trial-mercy-justice",
          question:
            "In Act 4, Scene 1, which biblical judge does Shylock joyfully invoke to praise disguised Portia (*'A ______ come to judgment!'*) moments before she springs her legal trap?",
          answer: { type: "text", accept: ["Daniel", "daniel"], display: "Daniel" },
          traps: [
            { spec: { type: "text", accept: ["Solomon", "Moses", "Jacob", "David"] }, feedback: "Shylock mentioned Jacob in Act 1, Scene 3, but in the courtroom he hails the young judge as **Daniel** (who rescued Susanna by clever cross-examination)." },
          ],
          hints: [
            "Six-letter Old Testament name starting with D.",
            "Gratiano later mocks Shylock with 'A second ______, a ______, Jew!'",
          ],
          solution: ["**Daniel**: Shylock's biblical allusion sharpens dramatic irony just before Gratiano turns the exact phrase against him."],
        },
        {
          id: "merchant-of-venice-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "portia-trial-mercy-justice",
          question:
            "Which Venetian legal statute does Portia invoke AFTER halting Shylock's knife, confiscating his property because he is a non-citizen who plotted against a Venetian citizen's life?",
          answer: { type: "text", accept: ["Alien Statute", "the Alien Statute", "alien law", "law against aliens"], display: "Alien Statute" },
          traps: [
            { spec: { type: "text", accept: ["Usury Law", "Mercy Law", "Ghetto Statute"] }, feedback: "Portia specifically cites Venice's harsh law targeting any 'alien' (foreigner/non-citizen) — the **Alien Statute**." },
          ],
          hints: [
            "Two words: the first is Shakespeare's legal word for a foreigner/outsider (starting with A); the second means a written law.",
            "It legally classifies Venetian-born Shylock as an outsider.",
          ],
          solution: ["The **Alien Statute** exposes institutional prejudice: even lifelong Venetian resident Shylock is legally treated as an 'alien' with fewer rights."],
        },
        {
          id: "merchant-of-venice-p2-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "portia-trial-mercy-justice",
          question:
            "Who disguises herself as Balthasar's law clerk in Act 4, Scene 1 and later stages a parallel ring trick on her husband Gratiano?",
          answer: { type: "text", accept: ["Nerissa", "nerissa"], display: "Nerissa" },
          traps: [
            { spec: { type: "text", accept: ["Jessica", "Portia", "Leah"] }, feedback: "Jessica elopes with Lorenzo; Portia's witty waiting-woman and fellow disguised clerk is **Nerissa**." },
          ],
          hints: ["Portia's sharp-witted confidante whose name starts with N."],
          solution: ["**Nerissa** assists Portia in Venice and mirrors her ring test with Gratiano in Act 5."],
        },
        {
          id: "merchant-of-venice-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          question:
            "Which loud, aggressively antisemitic Venetian friend of Bassanio taunts defeated Shylock in Act 4, Scene 1 (*'A second Daniel, a Daniel, Jew!'*)?",
          answer: { type: "text", accept: ["Gratiano", "gratiano"], display: "Gratiano" },
          traps: [
            { spec: { type: "text", accept: ["Lorenzo", "Salarino", "Solanio", "Bassanio"] }, feedback: "It is Nerissa's boisterous husband **Gratiano** who jeers relentlessly at Shylock in the courtroom." },
          ],
          hints: [
            "He marries Nerissa and warns Shylock he deserves 'a halter gratis'.",
            "Starts with G.",
          ],
          solution: ["**Gratiano**'s ugly gloating exposes Venetian prejudice and pushes modern audience sympathy toward broken Shylock."],
        },
        {
          id: "merchant-of-venice-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "bonds-loyalty-essay-craft",
          question:
            "In Act 4, Scene 1, Antonio imposes two harsh conditions on Shylock as 'mercy': leaving his estate to Lorenzo and Jessica upon death, and forcing Shylock to convert to which religion?",
          answer: { type: "text", accept: ["Christianity", "Christian"], display: "Christianity" },
          traps: [
            { spec: { type: "text", accept: ["Judaism", "Islam", "Venetian law"] }, feedback: "Shylock is Jewish; Antonio forces him to 'presently become a Christian' — converting to **Christianity**." },
          ],
          hints: [
            "Antonio demands that Shylock 'presently become a ______.'",
            "This condition shocks modern audiences most deeply.",
          ],
          solution: ["Forced conversion to **Christianity** strips Shylock of faith and cultural identity right after Portia praised unforced mercy."],
        },
        {
          id: "merchant-of-venice-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "bonds-loyalty-essay-craft",
          question:
            "What structural term describes Shakespeare echoing Antonio's mysterious opening sadness (Act 1, Scene 1) with his solitary closing position among three paired couples (Act 5, Scene 1)?",
          answer: { type: "text", accept: ["cyclical structure", "cyclical", "circular structure", "circular"], display: "cyclical structure" },
          traps: [
            { spec: { type: "text", accept: ["in media res", "flashback", "soliloquy"] }, feedback: "Looping the ending back to mirror the play's opening mood is **cyclical structure** (or circular structure)." },
          ],
          hints: [
            "Two words: the first comes from 'cycle' (returning to the start).",
            "Links Act 1.1 directly to Act 5.1.",
          ],
          solution: ["**Cyclical structure** leaves Antonio quietly isolated just as he began, adding bittersweet depth to Act 5's comedy."],
        },
        {
          id: "merchant-of-venice-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "bonds-loyalty-essay-craft",
          question:
            "Who speaks the serene moonlit line *'How sweet the moonlight sleeps upon this bank!'* to Jessica in Act 5, Scene 1 in Belmont?",
          answer: { type: "text", accept: ["Lorenzo", "lorenzo"], display: "Lorenzo" },
          traps: [
            { spec: { type: "text", accept: ["Bassanio", "Gratiano", "Antonio", "Portia"] }, feedback: "Jessica's Christian husband waiting at Belmont for Portia's return is **Lorenzo**." },
          ],
          hints: [
            "He eloped with Shylock's daughter in Act 2.",
            "Starts with L.",
          ],
          solution: ["**Lorenzo** opens Act 5 with lyrical personification (*'moonlight sleeps'*), contrasting Belmont's calm with Venice's trial."],
        },
        {
          id: "merchant-of-venice-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "bonds-loyalty-essay-craft",
          question:
            "What two-word literary label do critics use for Shakespeare plays like *The Merchant of Venice* whose dark moral tensions resist a neat, purely cheerful comic ending?",
          answer: { type: "text", accept: ["problem play", "problem comedy", "dark comedy", "tragicomedy"], display: "problem comedy" },
          traps: [
            { spec: { type: "text", accept: ["history play", "farce", "pastoral"] }, feedback: "Plays combining comic weddings with haunting, unresolved ethical dilemmas are termed **problem comedies** (or problem plays)." },
          ],
          hints: [
            "Two words: '______ comedy' or '______ play'.",
            "Reflects the unresolved ethical discomfort left by Shylock's defeat.",
          ],
          solution: ["Critics call it a **problem comedy** (or problem play) because prejudice and Shylock's humiliation linger beneath Act 5's celebration."],
        },
        {
          id: "merchant-of-venice-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "portia-trial-mercy-justice",
          marks: 4,
          question:
            "Read this short extract from Act 4, Scene 1:\n\n> **Portia:** *The quality of mercy is not strained; / It droppeth as the gentle rain from heaven / Upon the place beneath. It is twice blest: / It blesseth him that gives and him that takes.*\n\nUsing WHAT–HOW–WHY, analyse how Shakespeare crafts Portia's persuasive appeal — and explain why it becomes deeply ironic later in the same scene.",
          hints: [
            "Unpack the natural simile ('gentle rain from heaven') and the meaning of 'not strained'.",
            "Identify the balanced antithesis ('gives' and 'takes') and formal blank verse.",
            "Link 'not strained' (unforced) directly to the court's forced conversion of Shylock minutes later.",
          ],
          modelAnswer:
            "Shakespeare elevates Portia's courtroom authority by framing mercy as a divine, natural grace superior to rigid legalism. Spoken in dignified blank verse, the simile 'as the gentle rain from heaven' links compassion to effortless, life-giving nature, opposing the forced harshness of 'strained' justice, while balanced antithesis in 'him that gives and him that takes' suggests mutual spiritual enrichment. Yet Shakespeare plants devastating moral irony here: minutes after preaching that true mercy is never forced, Portia deploys the Alien Statute and allows Antonio to strip Shylock's livelihood and impose forced Christian conversion — prompting modern audiences to question Christian hypocrisy.",
          markScheme: [
            {
              point: "Analyses the natural simile 'as the gentle rain from heaven' (organic, effortless, divine)",
              keywords: ["simile", "rain", "natural", "divine", "effortless", "life-giving", "heaven"],
            },
            {
              point: "Notes 'not strained' (unforced) and balanced antithesis ('gives' / 'takes') or blank verse",
              keywords: ["antithesis", "unforced", "forced", "blank verse", "balance", "mutual"],
            },
            {
              point: "Explains the glaring moral irony / hypocrisy later in Act 4, Scene 1 (Alien Statute & forced conversion)",
              keywords: ["irony", "ironic", "hypocrisy", "alien", "conversion", "christian", "strip"],
            },
            {
              point: "Considers audience reaction (modern discomfort vs lofty Christian rhetoric)",
              keywords: ["audience", "modern", "question", "discomfort", "hollow", "undercut"],
            },
          ],
        },
        {
          id: "merchant-of-venice-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "portia-trial-mercy-justice",
          marks: 4,
          question:
            "How does Shakespeare build courtroom suspense and dramatic reversal (**peripeteia**) in Act 4, Scene 1 using both **language** and **stagecraft**?",
          hints: [
            "Mention Shylock's chilling physical props/actions (knife, shoe, scales) and Antonio preparing his chest.",
            "Note how Portia first appears to side with Shylock ('A Daniel come to judgment!') before interrupting with 'Tarry a little'.",
            "Explain how turning literal contract wording ('no jot of blood') creates theatrical shock.",
          ],
          modelAnswer:
            "Shakespeare engineers agonising courtroom suspense before delivering an electric peripeteia. Through menacing stagecraft — Shylock silently whetting his knife on his shoe beside weighing scales while Antonio bares his chest — physical props turn abstract contract law into imminent bloodshed. Portia heightens tension by initially validating Shylock's claim, prompting his triumphant biblical allusion 'A Daniel come to judgment!' Just at the brink of violence, her calm imperative 'Tarry a little' halts the action and springs the hyper-literal loophole 'no jot of blood'. Turning Shylock's own legal rigidity against him stuns spectators and completely inverts courtroom power.",
          markScheme: [
            {
              point: "Analyses live stagecraft / props (whetting knife, scales, baring Antonio's chest)",
              keywords: ["knife", "whet", "scales", "chest", "prop", "physical", "bloodshed"],
            },
            {
              point: "Notes Portia building suspense by seemingly conceding the law ('A Daniel come to judgment!')",
              keywords: ["daniel", "conced", "side", "triumph", "brink", "delay"],
            },
            {
              point: "Analyses the exact turning point ('Tarry a little' / 'no jot of blood' literalism)",
              keywords: ["tarry", "jot of blood", "loophole", "literal", "imperative", "halt"],
            },
            {
              point: "Explains theatrical effect of the power inversion on the audience",
              keywords: ["invert", "power", "shock", "audience", "stun", "trap", "flip"],
            },
          ],
        },
        {
          id: "merchant-of-venice-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "bonds-loyalty-essay-craft",
          marks: 4,
          question:
            "Why is Portia's **ring trick** in Act 5, Scene 1 structurally important rather than merely lighthearted comic filler?",
          hints: [
            "Connect the ring directly to the play's wider motif of 'bonds' and promises.",
            "Recall Bassanio's Act 4 courtroom comment (offering his wife to save Antonio) and Portia's wry aside.",
            "Explain how the ring trick lets Portia assert female equality in marriage and resolve tension with Antonio.",
          ],
          modelAnswer:
            "Far from being trivial filler, Portia's ring trick replays the play's central motif of binding promises in a witty comic register. Earlier in Act 4, Scene 1, disguised Portia heard Bassanio swear he would sacrifice his wife to save Antonio, prompting her ironic aside, and then watched him surrender her wedding ring at Antonio's urging — exposing a clash between male homosocial loyalty and marriage vows. By confronting Bassanio in Belmont with sharp dramatic irony before revealing she was Balthasar, Portia asserts her intellectual equality and forces Antonio to stand surety for Bassanio's marital faithfulness, rebalancing power inside her marriage.",
          markScheme: [
            {
              point: "Links the ring to the wider motif of bonds / promises echoing Shylock's contract",
              keywords: ["motif", "promise", "echo", "vow", "contract", "comic register"],
            },
            {
              point: "Connects back to Act 4, Scene 1's clash between male friendship (Antonio) and marriage (Portia's aside)",
              keywords: ["aside", "friendship", "antonio", "clash", "homosocial", "surrender"],
            },
            {
              point: "Explains how Portia asserts female intelligence, wit, or equal authority inside marriage",
              keywords: ["equal", "authority", "agency", "power", "intellect", "rebalance"],
            },
            {
              point: "Notes dramatic irony or Antonio once again acting as 'surety' for Bassanio's fidelity",
              keywords: ["dramatic irony", "balthasar", "surety", "forfeit", "fidelity", "reveal"],
            },
          ],
        },
        {
          id: "merchant-of-venice-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "shylock-villain-or-victim",
          marks: 3,
          question:
            "Explain how **Elizabethan (1596)** and **modern (post-Holocaust)** audiences are likely to respond differently to Shylock's defeat and forced Christian conversion at the end of Act 4, Scene 1.",
          hints: [
            "Consider Elizabethan Christian theology (viewing baptism as saving a soul) and contemporary antisemitism (e.g. the 1594 Lopez trial).",
            "Contrast this with modern post-Holocaust awareness of religious persecution and identity erasure.",
            "Refer to Shylock's haunting final line ('I am not well').",
          ],
          modelAnswer:
            "Audience reactions to Act 4, Scene 1 have shifted dramatically across history. Many Elizabethan spectators in 1596 — living in a society shaped by religious intolerance after the 1594 Lopez trial — may have viewed defeating the moneylender as comic justice and even interpreted forced baptism as spiritually rescuing Shylock's soul. By contrast, modern post-Holocaust audiences witness Gratiano's ugly taunts and Antonio's demand that Shylock abandon his Jewish identity with acute distress, hearing Shylock's fragile exit line 'I am not well' as a devastating tragic collapse.",
          markScheme: [
            {
              point: "Explains Elizabethan historical context (antisemitism / Lopez trial / Christian view of baptism as salvation)",
              keywords: ["1596", "lopez", "baptism", "salvation", "soul", "comic justice"],
            },
            {
              point: "Contrasts modern post-Holocaust response (intolerance, cruelty, identity erasure, tragedy)",
              keywords: ["holocaust", "intolerance", "identity", "tragic", "distress", "persecut"],
            },
            {
              point: "Supports with close textual/stage evidence (Gratiano's taunts or Shylock's broken exit 'I am not well')",
              keywords: ["not well", "gratiano", "exit", "broken", "fragile", "taunt"],
            },
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "merchant-of-venice-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "portia-trial-mercy-justice",
      question:
        "When disguised Portia enters the Venetian courtroom in Act 4, Scene 1, she poses a famous nine-word opening question that symbolically levels religious divisions: *'Which is the ______ here, and which the ______?'* Type the two missing nouns separated by `and`.",
      answer: {
        type: "text",
        accept: ["merchant and Jew", "merchant and the Jew", "merchant & Jew"],
        display: "merchant and Jew",
      },
      traps: [
        { spec: { type: "text", accept: ["Christian and Jew", "Antonio and Shylock"] }, feedback: "Portia contrasts Antonio's occupation ('merchant') with Shylock's faith ('Jew') — blurring both labels." },
      ],
      hints: [
        "The first noun is the exact occupational word from the play's title.",
        "The second noun names Shylock's religious identity.",
      ],
      solution: ["*'Which is the **merchant** here, and which the **Jew**?'* momentarily places Antonio and Shylock as equals before the law, challenging audience bias."],
    },
    {
      id: "merchant-of-venice-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "shylock-villain-or-victim",
      question:
        "In Act 4, Scene 1, Shylock confronts Venetian Christian hypocrisy by pointing out that the Christians themselves own ______ (*'You have among you many a purchased ______, / Which, like your asses and your dogs and mules, / You use in abject and in slavish parts'*). Type the singular or plural noun.",
      answer: { type: "text", accept: ["slave", "slaves"], display: "slaves" },
      traps: [
        { spec: { type: "text", accept: ["servants", "horses", "ships", "ducats"] }, feedback: "Look at the adjective 'slavish' right in the quote — Shylock exposes Venetian Christians who own purchased **slaves**." },
      ],
      hints: [
        "Look closely at the root of the adjective 'slavish' inside the extract.",
        "Shylock argues: you bought human beings legally just as I bought my pound of flesh!",
      ],
      solution: ["Shylock's searing comparison to Venice's **slaves** exposes glaring Christian moral hypocrisy: the senators condemn his literal ownership of flesh while profiting from owning human beings themselves."],
    },
    {
      id: "merchant-of-venice-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "venice-belmont-context",
      question:
        "In 1594 — just two years before Shakespeare wrote *The Merchant of Venice* — Queen Elizabeth I's Portuguese Jewish-born physician was publicly executed in London amid a wave of antisemitic hysteria. Give his surname.",
      answer: { type: "text", accept: ["Lopez", "Roderigo Lopez", "Rodrigo Lopez"], display: "Lopez" },
      traps: [
        { spec: { type: "text", accept: ["Marlowe", "Barabas", "Bellario"] }, feedback: "Christopher Marlowe wrote *The Jew of Malta* (with villain Barabas); Queen Elizabeth's physician executed in 1594 was Roderigo **Lopez**." },
      ],
      hints: [
        "Five-letter Portuguese surname beginning with L.",
        "His 1594 trial sparked intense public interest in plays featuring Jewish characters, including revivals of Marlowe's *The Jew of Malta*.",
      ],
      solution: ["Dr Roderigo **Lopez**'s 1594 treason trial heightened Elizabethan antisemitism — making Shakespeare's decision to give Shylock human eloquence (*'Hath not a Jew eyes?'*) all the more remarkable."],
    },
    {
      id: "merchant-of-venice-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "bonds-loyalty-essay-craft",
      question:
        "In Act 5, Scene 1, Lorenzo and Jessica playfully list famous tragic lovers from classical myth (*Troilus and Cressida, Thisbe, Dido, Medea*) under Belmont's moonlight. What literary technique is weaving classical mythical references into a speech to create uneasy **foreshadowing** or ironic undertone?",
      answer: { type: "text", accept: ["allusion", "classical allusion", "mythological allusion", "allusions"], display: "classical allusion" },
      traps: [
        { spec: { type: "text", accept: ["oxymoron", "malapropism", "personification", "simile"] }, feedback: "Referring directly to well-known figures from classical myth or literature is **allusion** (or classical allusion)." },
      ],
      hints: [
        "Starts with A; names indirect references to myth, history or other literature.",
        "Notice every mythical couple they name ended in betrayal or tragedy!",
      ],
      solution: ["**Classical allusion**: every mythical romance Lorenzo and Jessica name ended in betrayal or tragedy — subtly casting an uneasy shadow over their stolen Belmont bliss."],
    },
    {
      id: "merchant-of-venice-ch-q05",
      kind: "written",
      difficulty: "challenge",
      guideRef: "shylock-villain-or-victim",
      marks: 6,
      question:
        "**Extended Evaluative Essay:** *'Shakespeare presents Shylock as a victim made monstrous by Venetian society rather than a simple pantomime villain.'* To what extent do you agree? Analyse evidence from at least two different acts.",
      hints: [
        "Craft a balanced thesis acknowledging BOTH Shylock's genuine cruelty AND Venice's institutional prejudice.",
        "Use Act 1.3 (aside vs 'spet upon my Jewish gaberdine'), Act 3.1 ('Hath not a Jew eyes?' + Leah's ring), and Act 4.1 (knife-whetting vs forced conversion).",
        "Compare Elizabethan (1596) and modern post-Holocaust audience reactions to sharpen your evaluation.",
      ],
      modelAnswer:
        "Arguably, Shakespeare refuses to simplify Shylock into either an innocent martyr or a one-dimensional cartoon villain, instead dramatising how systemic hatred corrupts its victims into terrifying avengers. In Act 1, Scene 3, Shylock's candid aside ('I hate him for he is a Christian... brings down the rate of usance') and lethal 'pound of flesh' trap reveal calculating malice; by Act 4, Scene 1, whetting his knife onstage and refusing 6,000 ducats creates undeniable menace. Yet Shakespeare repeatedly traces that ferocity back to Venetian cruelty: Antonio publicly calls him 'cut-throat dog' and spits on his 'Jewish gaberdine', while Act 3, Scene 1 humanises him through driving prose rhetorical questions ('do we not bleed?') and aching devotion to his dead wife Leah's turquoise ring. When he warns 'The villainy you teach me I will execute', the teaching metaphor implicates Christian Venice directly. Whereas Elizabethan spectators shaped by 1596 prejudice may have cheered Shylock's defeat, modern post-Holocaust audiences witness Gratiano's taunts and forced baptism with horror — recognizing a tragic outsider destroyed by the very hypocrisy he exposed.",
      markScheme: [
        {
          point: "Presents a nuanced thesis holding both Shylock's cruelty and his victimisation in tension",
          keywords: ["arguably", "both", "neither", "corrupt", "tension", "complex"],
        },
        {
          point: "Evaluates evidence of Shylock's villainy/bloodlust (Act 1.3 aside, pound of flesh, whetting knife, refusing 6,000 ducats)",
          keywords: ["aside", "usance", "knife", "6,000", "6000", "menace", "malice"],
        },
        {
          point: "Analyses systemic Venetian prejudice (Antonio calling him 'dog', spitting on 'gaberdine', Gratiano's taunts)",
          keywords: ["gaberdine", "dog", "spit", "gratiano", "prejudice", "antisemit"],
        },
        {
          point: "Close-reads Act 3, Scene 1 ('do we not bleed?', teaching metaphor, or Leah's turquoise ring)",
          keywords: ["bleed", "teach", "leah", "turquoise", "prose", "rhetorical"],
        },
        {
          point: "Contrasts Elizabethan (1596) and modern (post-Holocaust) audience responses to forced conversion",
          keywords: ["elizabethan", "1596", "holocaust", "baptism", "conversion", "modern"],
        },
        {
          point: "Sustains evaluative judgement attributing deliberate ambiguity directly to Shakespeare's craft",
          keywords: ["hypocrisy", "tragic outsider", "ambigu", "implicat", "craft", "expose"],
        },
      ],
    },
    {
      id: "merchant-of-venice-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "portia-trial-mercy-justice",
      marks: 5,
      question:
        "**Close Structural Challenge:** In Act 4, Scene 1, Portia knows the *'no jot of blood'* loophole from the moment she reads Bellario's letter — yet she delays using it until Antonio actually opens his shirt to Shylock's knife. Why does Shakespeare structure Portia's courtroom strategy this way?",
      hints: [
        "Consider theatrical suspense and maximum dramatic contrast (peripeteia).",
        "Consider moral testing: Portia gives Shylock three chances to choose mercy voluntarily ('not strained').",
        "Consider the unsettling shadow on Portia herself: does delaying make her look morally principled or ruthlessly calculating?",
      ],
      modelAnswer:
        "Shakespeare deliberately delays Portia's legal trap to serve three distinct dramatic purposes. First, theatrical suspense peaks as Antonio bares his chest and Shylock lifts his blade, ensuring the sudden peripeteia of 'Tarry a little' delivers maximum audience shock. Second, morally, offering Shylock triple repayment and pleading 'The quality of mercy is not strained' tests whether he will abandon vengeance freely; only when he insists on literal justice does Portia turn his own rigid standard against him. Third, crucially, delaying until Shylock publicly raises his knife triggers the Alien Statute against 'seeking the life' of a Venetian citizen — exposing an unsettlingly calculating streak beneath Portia's serene mercy rhetoric.",
      markScheme: [
        {
          point: "Explains theatrical suspense and heightened impact of peripeteia ('Tarry a little')",
          keywords: ["suspense", "peripeteia", "shock", "tarry", "climax", "chest"],
        },
        {
          point: "Explains the moral test — giving Shylock repeated chances to show voluntary mercy or accept ducats",
          keywords: ["test", "mercy", "chance", "voluntar", "freely", "repayment", "ducats"],
        },
        {
          point: "Notes how Shylock's refusal makes him lock himself into strict literalism",
          keywords: ["literal", "rigid", "trap", "own", "standard", "insist"],
        },
        {
          point: "Evaluates the Alien Statute implication (waiting until Shylock threatens Antonio's life legally triggers confiscation)",
          keywords: ["alien", "statute", "threaten", "citizen", "confiscat", "trigger"],
        },
        {
          point: "Comments on the ambiguous shadow cast on Portia (principled strategist vs ruthlessly calculating)",
          keywords: ["calculat", "ruthless", "ambigu", "unsettling", "rhetoric", "shadow"],
        },
      ],
    },
    {
      id: "merchant-of-venice-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "bonds-loyalty-essay-craft",
      marks: 5,
      question:
        "**Thematic Synthesis Challenge:** Compare how Shakespeare uses **rings** as stage props in Act 3, Scene 1 (Leah's turquoise ring) and Act 5, Scene 1 (Portia's golden wedding ring) to explore loyalty, value and emotional bonds.",
      hints: [
        "Explain what Leah's turquoise ring symbolises to Shylock vs how casually Jessica trades it away.",
        "Explain what Portia's ring symbolises to Bassanio vs why he parts with it at Antonio's request.",
        "Compare the contrasting outcomes: irreversible grief in Venice vs playful forgiveness and equal marriage in Belmont.",
      ],
      modelAnswer:
        "Shakespeare uses rings as powerful parallel stage props to test whether characters honour emotional vows above convenience or commerce. In Act 3, Scene 1, Shylock's agonised outcry over Leah's turquoise ring ('I would not have given it for a wilderness of monkeys') reveals sacred sentimental loyalty that no gold can buy — thrown into tragic relief by Jessica bartering away her family bond casually. In Act 5, Scene 1, Portia's golden wedding ring echoes that test in a comic key: when Bassanio gives it to disguised Balthasar after Antonio urges him, marital loyalty clashes directly with male friendship. Structurally, contrasting Shylock's irreversible loss with Portia's witty reconciliation highlights Venice's double standard — Belmont's Christians get second chances to mend broken vows, whereas Shylock receives none.",
      markScheme: [
        {
          point: "Identifies rings as parallel symbolic props testing emotional value vs material convenience",
          keywords: ["parallel", "symbol", "vow", "prop", "material", "commerce"],
        },
        {
          point: "Analyses Leah's turquoise ring ('wilderness of monkeys') showing Shylock's sentimental loyalty and Jessica's betrayal",
          keywords: ["monkey", "sentimental", "jessica", "barter", "betray", "irrevoc", "irrevers"],
        },
        {
          point: "Analyses Portia's wedding ring exposing the tension between Bassanio's marriage vow and Antonio's friendship",
          keywords: ["antonio", "friendship", "balthasar", "clash", "marital", "tension"],
        },
        {
          point: "Contrasts tragic outcome for Shylock with comic forgiveness/reconciliation in Belmont",
          keywords: ["tragic", "comic", "forgiv", "reconcil", "second chance", "contrast"],
        },
        {
          point: "Reaches an evaluative conclusion linking the parallel to Venetian double standards or mercy",
          keywords: ["double standard", "mercy", "christian", "none", "unequal", "structur"],
        },
      ],
    },
    {
      id: "merchant-of-venice-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "bonds-loyalty-essay-craft",
      marks: 6,
      question:
        "**Whole-Play Structure Challenge:** *'Act 5, Scene 1 tries to restore comic harmony in moonlit Belmont, yet Shakespeare refuses to let the audience completely forget Venice's darkness.'* Evaluate this statement using close reference to language, character and stagecraft.",
      hints: [
        "Examine the surface comic harmony: 'How sweet the moonlight sleeps', music, playful ring resolution, and Antonio's returning ships.",
        "Examine the dark undertones: Lorenzo and Jessica's tragic mythical allusions, Shylock's complete absence (reduced to a legal deed), and Antonio's quiet cyclical isolation.",
        "Explain how a director's final staging choice can tilt the ending toward festive relief or lingering discomfort.",
      ],
      modelAnswer:
        "On the surface, Act 5, Scene 1 appears to rescue The Merchant of Venice for romantic comedy. Featuring Lorenzo's gentle personification 'How sweet the moonlight sleeps upon this bank!', Shakespeare bathes Belmont in music, resolves Portia's witty ring trick in laughter, and hands Antonio miraculous news that three of his argosies have reached harbour safely. Yet beneath that festive polish, dark echoes of Venice refuse to vanish. Every classical allusion Lorenzo and Jessica invoke under the moonlight — Troilus, Dido, Medea — tells a story of romantic betrayal; meanwhile, Shylock is physically erased from the stage, surfacing only as a cold legal deed handing his wealth to his daughter. Most poignantly, cyclical structure leaves Antonio standing unpaired amid three reunited couples, echoing his Act 1 unexplained melancholy. In live stagecraft, a director can let Jessica freeze silently holding her father's deed as the others exit, reminding modern audiences why this play endures as an unsettling problem comedy.",
      markScheme: [
        {
          point: "Analyses surface comic harmony (moonlight personification, music, ring trick resolution, returning argosies)",
          keywords: ["personification", "sleeps", "music", "argosies", "ships", "ring", "festive"],
        },
        {
          point: "Analyses uneasy classical allusions in Lorenzo and Jessica's opening dialogue (Troilus, Dido, Medea / betrayal)",
          keywords: ["allusion", "troilus", "dido", "medea", "myth", "betrayal"],
        },
        {
          point: "Notes Shylock's haunting absence — reduced to a legal deed transferring his estate",
          keywords: ["absent", "absence", "erased", "deed", "estate", "shylock"],
        },
        {
          point: "Identifies Antonio's cyclical isolation echoing Act 1, Scene 1's opening sadness",
          keywords: ["cyclical", "alone", "unpaired", "isolat", "melancholy", "act 1"],
        },
        {
          point: "Considers live stagecraft / directorial staging choices at the final curtain",
          keywords: ["director", "stage", "perform", "silent", "freeze", "exit", "curtain"],
        },
        {
          point: "Frames balanced evaluative judgement referencing genre ('problem comedy')",
          keywords: ["problem comedy", "problem play", "unsettling", "surface", "beneath", "yet"],
        },
      ],
    },
  ],
};
