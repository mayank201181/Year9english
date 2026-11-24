import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "much-ado-about-nothing-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "messina-honour-context",
      question:
        "In which Sicilian city, governed by Leonato, is *Much Ado About Nothing* set?",
      answer: { type: "text", accept: ["Messina", "messina"], display: "Messina" },
      traps: [
        { spec: { type: "text", accept: ["Venice", "Verona", "Padua", "Florence"] }, feedback: "That is a different Italian city in Shakespeare — Hero's father Leonato governs **Messina** in Sicily." },
      ],
      hints: ["It is a coastal city in Sicily ruled by Governor Leonato."],
      solution: ["*Much Ado About Nothing* is set in **Messina**, Sicily, right after Don Pedro's military victory."],
    },
    {
      id: "much-ado-about-nothing-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "messina-honour-context",
      question:
        "Who is Don Pedro's bitter, illegitimate half-brother who calls himself a *'plain-dealing villain'* in Act 1, Scene 3?",
        options: [
        "Borachio",
        "Don John",
        "Claudio",
        "Antonio",
      ],
      answerIndex: 1,
      hints: ["He has just been defeated in a rebellion against his brother Don Pedro."],
      explanation: "**Don John** (the Bastard) is Don Pedro's melancholic half-brother and the play's chief malcontent, who employs Borachio and Conrade to sabotage Claudio's wedding.",
    },
    {
      id: "much-ado-about-nothing-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "beatrice-benedick-wit",
      question:
        "In Act 1, Scene 1, Leonato uses a famous two-word oxymoron to describe Beatrice and Benedick's constant banter: *'There is a kind of ______ ______ betwixt Signior Benedick and her.'* Type those two words.",
      answer: { type: "text", accept: ["merry war", "a merry war"], display: "merry war" },
      traps: [
        { spec: { type: "text", accept: ["skirmish of wit", "word war", "love war"] }, feedback: "Leonato mentions a 'skirmish of wit' in the second half of the sentence, but his opening oxymoron combines an adjective meaning cheerful with a noun for armed conflict." },
      ],
      hints: [
        "The first word means cheerful or joyful; the second word means armed conflict.",
      ],
      solution: ["Leonato calls their banter a **'merry war'** — an oxymoron blending joyful playfulness with verbal combat."],
    },
    {
      id: "much-ado-about-nothing-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "beatrice-benedick-wit",
      question:
        "Why does Shakespeare switch Beatrice from prose into rhyming verse (*'Contempt, farewell! and maiden pride, adieu!'*) at the end of Act 3, Scene 1?",
      options: [
        "To show she has noticed Hero and Ursula hiding behind the hedge",
        "To show she is mocking Benedick's terrible attempts at poetry",
        "To signal that her witty armour has dropped into sincere vulnerability",
        "To imitate Dogberry's clumsy legal speeches before the wedding",
      ],
      answerIndex: 2,
      hints: [
        "Compare her usual quick-fire prose banter with the musical rhythm of her orchard soliloquy.",
        "Ask what dropping comic wit reveals about her genuine emotions.",
      ],
      explanation: "Shifting Beatrice from conversational prose into structured blank and rhymed verse dramatises the exact moment her emotional guard lowers and genuine love takes hold.",
    },
    {
      id: "much-ado-about-nothing-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "deception-noting-hero",
      question:
        "In Elizabethan pronunciation, the word *'Nothing'* in the play's title punned on which six-letter verb meaning 'observing, eavesdropping or paying attention'?",
      answer: { type: "text", accept: ["noting", "Noting"], display: "noting" },
      traps: [
        { spec: { type: "text", accept: ["spying", "gossip", "watching", "hearing"] }, feedback: "Right idea, but the title pun depends on a specific six-letter homophone of 'nothing'." },
      ],
      hints: ["Change just one consonant sound in 'nothing' to find a word linked to observation and musical notes."],
      solution: ["In Elizabethan English, *'nothing'* and **'noting'** sounded almost identical — linking eavesdropping and gossip directly to the play's title."],
    },
    {
      id: "much-ado-about-nothing-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "deception-noting-hero",
      question:
        "Which waiting-gentlewoman unwittingly takes Hero's place at the bedroom window with Borachio, fooling Claudio and Don Pedro?",
      answer: { type: "text", accept: ["Margaret", "margaret"], display: "Margaret" },
      traps: [
        { spec: { type: "text", accept: ["Ursula", "Beatrice", "Hero"] }, feedback: "Ursula helps Hero gull Beatrice in Act 3, Scene 1; Borachio stages the window deception with Hero's other gentlewoman." },
      ],
      hints: [
        "Hero has two waiting-gentlewomen: Ursula and this woman.",
        "Her name begins with M.",
      ],
      solution: ["**Margaret** wears Hero's garments at the chamber window with Borachio, unaware that Claudio and Don Pedro are watching in the dark."],
    },
    {
      id: "much-ado-about-nothing-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "deception-noting-hero",
      question:
        "In Act 4, Scene 1, immediately after Benedick promises to do anything for Beatrice, what stark two-word imperative does she speak?",
      options: [
        "Save Hero",
        "Leave Messina",
        "Fight Pedro",
        "Kill Claudio",
      ],
      answerIndex: 3,
      hints: [
        "It instantly shatters the romantic mood after their love confession.",
        "She demands lethal vengeance against the bridegroom who shamed Hero.",
      ],
      explanation: "Beatrice's blunt command **'Kill Claudio'** pivots Act 4, Scene 1 from tender prose romance to moral crisis, testing whether Benedick will put truth and Hero's honour above male loyalty.",
    },
    {
      id: "much-ado-about-nothing-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "dogberry-analytical-essays",
      question:
        "What is the exact literary term for Dogberry's comic blunder of replacing a word with a similar-sounding wrong word, as in *'comparisons are odorous'*?",
      answer: { type: "text", accept: ["malapropism", "malapropisms"], display: "malapropism" },
      traps: [
        { spec: { type: "text", accept: ["oxymoron", "pun", "irony", "metaphor"] }, feedback: "Unlike a deliberate pun, Dogberry's blunder is accidental misuse of a similar-sounding word — a **malapropism**." },
      ],
      hints: [
        "The word starts with 'mal-' (meaning 'badly').",
        "It names the comic habit of mangling fancy words like 'redemption' for 'damnation'.",
      ],
      solution: ["A **malapropism** is the comic misuse of a word by substituting a similar-sounding word with an absurd or opposite meaning."],
    },
    {
      id: "much-ado-about-nothing-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "dogberry-analytical-essays",
      question:
        "Why does Friar Francis advise Leonato to announce that Hero has died of grief in Act 4, Scene 1?",
      options: [
        "To awaken Claudio's remorse and restore Hero's reputation once truth emerges",
        "To trick Don John into returning to Messina to steal Leonato's wealth",
        "To punish Leonato by taking Hero away to a distant Italian convent forever",
        "To stop Dogberry from presenting Borachio's confession in public court",
      ],
      answerIndex: 0,
      hints: [
        "Recall the Friar's hope that news of Hero's death will 'change slander to remorse'.",
        "Think about how this benevolent deception buys time for the truth to come out.",
      ],
      explanation: "Friar Francis believes that believing Hero dead will shock Claudio out of anger into guilt and grief, buying time for her innocence to be proved.",
    },
    {
      id: "much-ado-about-nothing-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "messina-honour-context",
      marks: 3,
      question:
        "Briefly explain how Shakespeare uses Claudio's line *'Can the world buy such a jewel?'* (Act 1, Scene 1) to reveal his early attitude towards marriage.",
      hints: [
        "Name the language method in 'jewel' and look closely at the verb right before it.",
        "Link that commercial wording to Elizabethan marriage norms or Claudio's later actions.",
      ],
      modelAnswer:
        "Shakespeare uses the metaphor of a 'jewel' alongside the transactional verb 'buy' to introduce a semantic field of commerce, suggesting Claudio prizes Hero as an ornate possession rather than an equal partner. In Elizabethan patriarchal society, aristocratic marriage functioned as a financial contract, and this objectifying diction subtly foreshadows how swiftly he discards her when he believes her reputation is damaged.",
      markScheme: [
        {
          point: "Identifies metaphor / semantic field of commerce or trade in 'buy' and 'jewel'",
          keywords: ["metaphor", "commerce", "commercial", "trade", "transactional", "financial"],
        },
        {
          point: "Explains that Claudio treats Hero like a prized object or possession",
          keywords: ["possession", "object", "property", "commodity", "objectify", "owned"],
        },
        {
          point: "Links to Elizabethan patriarchal marriage contracts or foreshadowing of Act 4 rejection",
          keywords: ["patriarch", "contract", "foreshadow", "discard", "shallow", "reputation"],
        },
      ],
    },
  ],

  papers: [
    {
      id: "much-ado-about-nothing-p1",
      title: "Practice Paper 1 — Messina Society, Wit & Eavesdropping",
      questions: [
        {
          id: "much-ado-about-nothing-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "messina-honour-context",
          question:
            "Who is Leonato's daughter, the dutiful heiress courted by Claudio?",
          answer: { type: "text", accept: ["Hero", "hero"], display: "Hero" },
          traps: [
            { spec: { type: "text", accept: ["Beatrice", "Margaret", "Ursula"] }, feedback: "Beatrice is Leonato's niece, while Margaret and Ursula are waiting-gentlewomen; Leonato's daughter is **Hero**." },
          ],
          hints: ["Her name is a four-letter word borrowed from classical myth."],
          solution: ["**Hero** is Leonato's only child and heir, paired as a quiet foil against her witty cousin Beatrice."],
        },
        {
          id: "much-ado-about-nothing-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "messina-honour-context",
          question:
            "Which high-ranking Prince of Aragon offers to wear a mask and woo Hero on Claudio's behalf at the ball in Act 2, Scene 1?",
          answer: { type: "text", accept: ["Don Pedro", "Pedro"], display: "Don Pedro" },
          traps: [
            { spec: { type: "text", accept: ["Don John", "Benedick", "Leonato"] }, feedback: "Don John is the villainous half-brother; it is Prince **Don Pedro** who woos Hero in Claudio's name." },
          ],
          hints: ["He is the victorious commander and half-brother to Don John."],
          solution: ["**Don Pedro**, Prince of Aragon, acts as Claudio's patron and wooer-by-proxy at the masquerade."],
        },
        {
          id: "much-ado-about-nothing-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "messina-honour-context",
          question:
            "In Act 1, Scene 3, Don John calls himself a *'plain-dealing villain'*. What exact language device pairs two directly contradictory ideas side by side in this phrase?",
          answer: { type: "text", accept: ["oxymoron", "an oxymoron"], display: "oxymoron" },
          traps: [
            { spec: { type: "text", accept: ["simile", "alliteration", "hyperbole", "personification"] }, feedback: "Look at how 'plain-dealing' (honest) directly clashes with 'villain' (wicked) right next to it — that is an **oxymoron**." },
          ],
          hints: [
            "'Plain-dealing' means honest and straightforward, while 'villain' means wicked.",
            "It is the same device Leonato uses in 'merry war'.",
          ],
          solution: ["**Oxymoron**: placing *'plain-dealing'* directly beside *'villain'* highlights Don John's perverse pride in his open malice."],
        },
        {
          id: "much-ado-about-nothing-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "messina-honour-context",
          question:
            "What Renaissance drama term describes Don John's character archetype — a brooding, cynical outsider hostile to courtly happiness?",
          answer: { type: "text", accept: ["malcontent", "a malcontent"], display: "malcontent" },
          traps: [
            { spec: { type: "text", accept: ["foil", "clown", "fool", "protagonist"] }, feedback: "While Don John contrasts with Don Pedro, the specific Elizabethan stage archetype for a bitter, envious outsider is a **malcontent**." },
          ],
          hints: [
            "The word literally comes from French/Latin roots meaning 'badly satisfied' or 'discontented'.",
            "It begins with 'mal-'.",
          ],
          solution: ["A **malcontent** is a bitter Renaissance stage villain who resents courtly harmony and plots mischief from the margins."],
        },
        {
          id: "much-ado-about-nothing-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "beatrice-benedick-wit",
          question:
            "What literary term describes rapid-fire alternating single-line dialogue between two sparring characters, as in Beatrice and Benedick's quick verbal clashes?",
          answer: { type: "text", accept: ["stichomythia", "repartee"], display: "stichomythia" },
          traps: [
            { spec: { type: "text", accept: ["soliloquy", "monologue", "aside"] }, feedback: "A soliloquy or monologue involves one speaker; rapid alternating verbal exchanges between two speakers are **stichomythia** (or repartee)." },
          ],
          hints: [
            "Think of the dramatic technique derived from Greek drama where two characters trade fast, alternating lines like swords clashing.",
            "Starts with 'stich-' (or the French-derived word for witty back-and-forth banter).",
          ],
          solution: ["**Stichomythia** (and **repartee**) gives Beatrice and Benedick's verbal duels the brisk tempo of fencing blades."],
        },
        {
          id: "much-ado-about-nothing-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "beatrice-benedick-wit",
          question:
            "How many syllables make up one regular line of Shakespeare's blank verse (iambic pentameter)? Give a number.",
          answer: { type: "number", value: 10, display: "10" },
          traps: [
            { spec: { type: "number", value: 5 }, feedback: "There are 5 iambic *feet* (beats) per line, and each foot has 2 syllables — so 5 × 2 = **10** syllables." },
            { spec: { type: "number", value: 12 }, feedback: "Twelve syllables would be an alexandrine; standard iambic pentameter has 5 pairs = **10** syllables." },
          ],
          hints: ["'Penta-' means five pairs (feet) of unstressed + stressed syllables."],
          solution: ["Iambic pentameter has 5 iambic feet × 2 syllables per foot = **10** syllables per regular line."],
        },
        {
          id: "much-ado-about-nothing-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "beatrice-benedick-wit",
          question:
            "In Act 2, Scene 1, Benedick exclaims about Beatrice: *'She speaks poniards, and every word stabs.'* What weapon is a *'poniard'*?",
          answer: { type: "text", accept: ["dagger", "a dagger", "short dagger", "knife", "daggers"], display: "dagger" },
          traps: [
            { spec: { type: "text", accept: ["arrow", "spear", "cannon", "shield"] }, feedback: "Look at the verb 'stabs' right beside it — a poniard is a short thrusting **dagger**." },
          ],
          hints: [
            "Look at the violent verb 'stabs' in the same sentence for a strong clue.",
            "It is a small, sharp hand weapon carried by Renaissance soldiers.",
          ],
          solution: ["A *poniard* is a short **dagger**, extending Shakespeare's martial imagery of verbal warfare."],
        },
        {
          id: "much-ado-about-nothing-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "beatrice-benedick-wit",
          question:
            "Which literary form — **prose** or **verse** — does Benedick use in his Act 2, Scene 3 soliloquy after being gulled in the orchard (*'The world must be peopled'*)?",
          answer: { type: "text", accept: ["prose"], display: "prose" },
          traps: [
            { spec: { type: "text", accept: ["verse", "blank verse", "rhyming couplets"] }, feedback: "Beatrice switches into verse in Act 3, Scene 1, whereas Benedick's self-mocking orchard soliloquy in Act 2, Scene 3 stays in comic **prose**." },
          ],
          hints: [
            "Compare the tone of Benedick's comic rationalisation with Beatrice's lyrical rhymed speech in Act 3, Scene 1.",
            "Remember which form carries rapid, naturalistic comedy in this play.",
          ],
          solution: ["Benedick speaks in **prose**, keeping his sudden about-turn funny and self-deprecating, in contrast to Beatrice's poignant verse shift in Act 3, Scene 1."],
        },
        {
          id: "much-ado-about-nothing-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "deception-noting-hero",
          question:
            "Who is Don John's henchman who accepts 1,000 ducats to stage the nocturnal bedroom-window deception with Margaret?",
          answer: { type: "text", accept: ["Borachio", "borachio"], display: "Borachio" },
          traps: [
            { spec: { type: "text", accept: ["Conrade", "Balthasar", "Verges"] }, feedback: "Conrade is Borachio's fellow follower who listens to his drunken boast; it is **Borachio** who invents and performs the window trick." },
          ],
          hints: [
            "His name comes from the Spanish word for 'drunkard', fitting his drunken confession in Act 3, Scene 3.",
            "It begins with B.",
          ],
          solution: ["**Borachio** devises and carries out the window illusion with Margaret, then boasts about it within earshot of the Watch."],
        },
        {
          id: "much-ado-about-nothing-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "beatrice-benedick-wit",
          question:
            "In Act 3, Scene 1, which two female characters stage a loud conversation in the orchard specifically for Beatrice to overhear?",
          answer: {
            type: "text",
            accept: ["Hero and Ursula", "Ursula and Hero", "Hero & Ursula", "Ursula & Hero"],
            display: "Hero and Ursula",
          },
          traps: [
            { spec: { type: "text", accept: ["Hero and Margaret", "Margaret and Hero"] }, feedback: "Margaret sends Beatrice into the orchard to fetch her, but the two women who actually stage the gulling conversation are **Hero and Ursula**." },
          ],
          hints: [
            "One is Beatrice's cousin; the other is the waiting-gentlewoman whose name begins with U.",
            "Write both names joined by 'and'.",
          ],
          solution: ["**Hero and Ursula** deliberately praise Benedick and criticise Beatrice's 'pride and scorn' while Beatrice hides in the honeysuckle bower."],
        },
        {
          id: "much-ado-about-nothing-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "deception-noting-hero",
          question:
            "What dramatic technique describes a solo speech delivered by a character alone on stage directly sharing inner thoughts with the audience (such as Benedick in Act 2.3 and Beatrice in Act 3.1)?",
          answer: { type: "text", accept: ["soliloquy", "a soliloquy"], display: "soliloquy" },
          traps: [
            { spec: { type: "text", accept: ["aside", "monologue", "dialogue"] }, feedback: "An aside is spoken briefly while others remain on stage, and a monologue is addressed to other characters; speaking inner thoughts alone on stage is a **soliloquy**." },
          ],
          hints: [
            "Think of the Latin roots *solus* ('alone') + *loqui* ('to speak').",
            "It lets the audience watch private transformation unmasked.",
          ],
          solution: ["A **soliloquy** exposes a character's private emotions directly to the audience without social disguise."],
        },
        {
          id: "much-ado-about-nothing-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "messina-honour-context",
          marks: 4,
          question:
            "How does Shakespeare use the contrast between Hero and Beatrice in Acts 1–2 to highlight Elizabethan expectations of women? Support your answer with specific dramatic details.",
          hints: [
            "Use the precise literary term for contrasting paired characters.",
            "Contrast Hero's quiet obedience to Leonato with Beatrice's outspoken resistance to marriage.",
            "Link both women's behaviour to Elizabethan patriarchal rules on female silence and dowry.",
          ],
          modelAnswer:
            "Shakespeare structures Hero and Beatrice as dramatic foils to expose Elizabethan patriarchal expectations. Hero models the ideal obedient daughter, speaking sparsely and submitting quietly to Leonato's choice of husband. By contrast, orphaned Beatrice defies expected female silence through rapid wit and declares she will not be 'overmastered with a piece of valiant dust'. Placing Beatrice's independent voice beside Hero's compliance encourages the audience to question a double standard that treats noblewomen like passive dynastic property.",
          markScheme: [
            {
              point: "Names and applies the concept of dramatic/character foils",
              keywords: ["foil", "foils", "juxtapos", "contrast"],
            },
            {
              point: "Explains Hero's quiet, obedient compliance with Leonato's patriarchal authority",
              keywords: ["obedien", "silent", "silence", "compliant", "submissive", "passive", "dutiful"],
            },
            {
              point: "Analyses Beatrice's outspoken wit or resistance to male control (e.g. 'valiant dust' / 'overmastered')",
              keywords: ["independen", "wit", "outspoken", "overmastered", "valiant dust", "defies", "rejects"],
            },
            {
              point: "Links the pairing to Shakespeare questioning Elizabethan patriarchal norms / audience response",
              keywords: ["patriarch", "double standard", "property", "audience", "question", "critique"],
            },
          ],
        },
        {
          id: "much-ado-about-nothing-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "beatrice-benedick-wit",
          marks: 4,
          question:
            "Analyse how Shakespeare uses language in Benedick's complaint about Beatrice: *'She speaks poniards, and every word stabs'* (Act 2, Scene 1).",
          hints: [
            "Identify both the figurative weapon imagery and the exaggerated comic tone.",
            "Zoom into a specific word ('poniards' or 'stabs') to unpack its violent connotations.",
            "Explain the comic effect on the audience given Benedick's status as a battle-tested soldier.",
          ],
          modelAnswer:
            "Shakespeare uses a martial metaphor and comic hyperbole to portray Benedick as both intimidated and fascinated by Beatrice's intelligence. Comparing her speech to 'poniards' (short daggers) and using the visceral verb 'stabs' draws on a semantic field of warfare, suggesting her wit wounds his masculine pride with surgical sharpness. For the audience, the exaggeration creates warm comedy because a fearless warrior fresh from real combat sounds hilariously defenceless against one outspoken woman, hinting at his concealed attraction.",
          markScheme: [
            {
              point: "Names martial metaphor / semantic field of warfare or hyperbole",
              keywords: ["metaphor", "hyperbole", "martial", "warfare", "semantic field", "imagery"],
            },
            {
              point: "Zooms into 'poniards' (daggers) or the violent verb 'stabs' and its sharp/painful connotations",
              keywords: ["dagger", "violent", "weapon", "wound", "sharp", "pierc", "pain"],
            },
            {
              point: "Explains comic irony of a brave soldier feeling defeated by words",
              keywords: ["soldier", "warrior", "battle", "combat", "comic", "humour", "funny", "laugh"],
            },
            {
              point: "Explores audience insight into Benedick's wounded pride or hidden attraction",
              keywords: ["audience", "pride", "attraction", "fascinat", "obsess", "intimidat"],
            },
          ],
        },
        {
          id: "much-ado-about-nothing-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "beatrice-benedick-wit",
          marks: 4,
          question:
            "Compare how Shakespeare presents Benedick's reaction to being gulled (Act 2, Scene 3) with Beatrice's reaction (Act 3, Scene 1), focusing on literary form and tone.",
          hints: [
            "Contrast prose in Act 2, Scene 3 with blank verse and rhyming couplets in Act 3, Scene 1.",
            "Contrast Benedick's comic rationalisation ('The world must be peopled') with Beatrice's emotional humility ('Contempt, farewell!').",
            "Explain why Shakespeare gives the two symmetrical scenes different emotional weights.",
          ],
          modelAnswer:
            "Although Shakespeare builds a symmetrical orchard structure for both gullings, he differentiates their literary form and emotional depth. Benedick delivers his soliloquy in conversational prose, saving face through theatrical comedy and rationalising marriage with 'The world must be peopled', inviting the audience to laugh at his vanity. By contrast, Beatrice abandons her witty prose shield for lyrical blank verse and rhyming couplets ('Contempt, farewell!'), revealing genuine humility and vulnerability as she chooses to tame her 'wild heart'. This formal contrast makes Beatrice's transformation feel more poignant and sincere.",
          markScheme: [
            {
              point: "Identifies Benedick's use of prose and comic/self-mocking tone in Act 2.3",
              keywords: ["prose", "comic", "vanity", "peopled", "rationalis", "self-mock", "humour"],
            },
            {
              point: "Identifies Beatrice's switch to blank verse / rhyming couplets in Act 3.1",
              keywords: ["verse", "rhym", "couplet", "lyrical", "iambic"],
            },
            {
              point: "Analyses Beatrice's deeper vulnerability, humility, or agency ('Contempt, farewell!' / 'wild heart')",
              keywords: ["vulnerab", "humil", "sincer", "farewell", "wild heart", "agency", "poignant"],
            },
            {
              point: "Comments on the structural parallel / contrast and its effect on the audience",
              keywords: ["parallel", "symmetr", "structur", "audience", "contrast", "depth"],
            },
          ],
        },
        {
          id: "much-ado-about-nothing-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "deception-noting-hero",
          marks: 3,
          question:
            "Explain the double meaning of the title *Much Ado About Nothing* and show how Shakespeare contrasts two different kinds of deception in the play.",
          hints: [
            "Mention the Elizabethan homophone linking 'nothing' to observation/eavesdropping.",
            "Give one concrete example of helpful/benevolent trickery and one example of destructive/malicious trickery.",
          ],
          modelAnswer:
            "In Elizabethan pronunciation, 'nothing' sounded almost identical to 'noting', meaning observing, eavesdropping and gossiping; thus the title captures both a plot driven by spying and a crisis built on empty illusion. Shakespeare contrasts benevolent deception — such as Don Pedro's orchard gulling to unite Beatrice and Benedick, or Friar Francis faking Hero's death — with malicious deception, where Don John and Borachio stage Margaret at Hero's window to destroy an innocent bride's honour.",
          markScheme: [
            {
              point: "Explains the Elizabethan pun between 'nothing' (empty fuss) and 'noting' (eavesdropping/observing/gossip)",
              keywords: ["noting", "eavesdrop", "homophone", "observ", "gossip", "pun"],
            },
            {
              point: "Gives an accurate example of benevolent deception (gulling or Friar Francis's fake-death plan)",
              keywords: ["benevolent", "gull", "orchard", "friar", "fake death", "unite", "heal"],
            },
            {
              point: "Gives an accurate example of malicious deception (Don John / Borachio / Margaret window plot)",
              keywords: ["malicious", "borachio", "window", "margaret", "don john", "slander", "ruin"],
            },
          ],
        },
      ],
    },
    {
      id: "much-ado-about-nothing-p2",
      title: "Practice Paper 2 — The Church Scene, Dogberry & Extract Craft",
      questions: [
        {
          id: "much-ado-about-nothing-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "deception-noting-hero",
          question:
            "In Act 4, Scene 1, Claudio tells Leonato: *'Give not this ______ ______ to your friend.'* Type the two-word metaphor he uses to describe Hero.",
          answer: { type: "text", accept: ["rotten orange", "a rotten orange"], display: "rotten orange" },
          traps: [
            { spec: { type: "text", accept: ["tainted fruit", "spoiled apple", "broken jewel"] }, feedback: "Close idea, but Shakespeare's exact two-word fruit metaphor is **'rotten orange'**." },
          ],
          hints: ["It pairs an adjective for decay with a bright citrus fruit."],
          solution: ["Claudio calls Hero a **'rotten orange'** — bright on the outside yet supposedly decayed within."],
        },
        {
          id: "much-ado-about-nothing-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "deception-noting-hero",
          question:
            "Which wise religious figure defends Hero in Act 4, Scene 1 after observing her innocent blushes, and proposes faking her death?",
          answer: { type: "text", accept: ["Friar Francis", "the Friar", "Friar"], display: "Friar Francis" },
          traps: [
            { spec: { type: "text", accept: ["Leonato", "Antonio", "Benedick"] }, feedback: "Benedick stays to comfort Hero, but the priest who notices her 'thousand blushing apparitions' and plans the fake death is **Friar Francis**." },
          ],
          hints: ["He was about to conduct the wedding ceremony in church."],
          solution: ["**Friar Francis** observes Hero empathetically and invents the benevolent deception of announcing her death."],
        },
        {
          id: "much-ado-about-nothing-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "deception-noting-hero",
          question:
            "In Act 4, Scene 1, Beatrice speaks the stark two-word command *'Kill Claudio.'* What grammatical sentence type is a direct command like this?",
          answer: { type: "text", accept: ["imperative", "imperative sentence", "an imperative"], display: "imperative" },
          traps: [
            { spec: { type: "text", accept: ["interrogative", "exclamative", "declarative", "metaphor"] }, feedback: "Questions are interrogatives and statements are declaratives; a direct command beginning with a base verb ('Kill') is an **imperative**." },
          ],
          hints: [
            "It names the grammatical mood used for orders and commands.",
            "Starts with 'imp-'.",
          ],
          solution: ["An **imperative**: Beatrice's stark two-word command cuts instantly through romantic prose and tests Benedick's courage."],
        },
        {
          id: "much-ado-about-nothing-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "dogberry-analytical-essays",
          question:
            "In Act 3, Scene 3, Dogberry instructs the Watch: *'You shall comprehend all vagrom men.'* What standard English verb (meaning 'arrest') did Dogberry actually mean instead of *'comprehend'*?",
          answer: { type: "text", accept: ["apprehend", "to apprehend"], display: "apprehend" },
          traps: [
            { spec: { type: "text", accept: ["understand", "arrest", "catch"] }, feedback: "'Comprehend' already means understand; the similar-sounding formal verb meaning 'arrest' that Dogberry mangled is **apprehend**." },
          ],
          hints: [
            "Keep the '-prehend' ending and change the prefix to mean 'seize or arrest'.",
            "Starts with 'app-'.",
          ],
          solution: ["Dogberry meant **apprehend** (arrest), not *comprehend* (understand) — a classic malapropism."],
        },
        {
          id: "much-ado-about-nothing-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "dogberry-analytical-essays",
          question:
            "In Act 4, Scene 2, Dogberry condemns Borachio to *'everlasting redemption'*. What theological word (meaning eternal punishment) did Dogberry actually intend instead of *'redemption'*?",
          answer: { type: "text", accept: ["damnation", "condemnation"], display: "damnation" },
          traps: [
            { spec: { type: "text", accept: ["salvation", "heaven", "forgiveness"] }, feedback: "Salvation is what 'redemption' accidentally means! Dogberry meant its harsh opposite: **damnation**." },
          ],
          hints: [
            "Look for the opposite of salvation that ends in '-nation'.",
            "Notice the verb 'condemned' right before it.",
          ],
          solution: ["Dogberry meant **damnation**, accidentally threatening Borachio with eternal salvation (*redemption*) instead."],
        },
        {
          id: "much-ado-about-nothing-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "dogberry-analytical-essays",
          question:
            "What dramatic technique operates throughout Act 3, Scene 5 and Act 4, Scene 1 because the audience already knows Borachio has been arrested while Leonato and Claudio do not?",
          answer: { type: "text", accept: ["dramatic irony"], display: "dramatic irony" },
          traps: [
            { spec: { type: "text", accept: ["verbal irony", "pathetic fallacy", "foreshadowing"] }, feedback: "When the audience holds vital knowledge that characters on stage lack, the exact dramatic device is **dramatic irony**." },
          ],
          hints: [
            "Two words: the first links to theatre/stagecraft, the second is a form of contrast between knowledge and ignorance.",
            "It creates frustration in Act 3.5 and outrage in Act 4.1.",
          ],
          solution: ["**Dramatic irony** occurs when spectators know a crucial truth (Hero's innocence and Borachio's capture) hidden from characters on stage."],
        },
        {
          id: "much-ado-about-nothing-p2-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "dogberry-analytical-essays",
          question:
            "Who is Dogberry's elderly, dutiful deputy (the Headborough) whom Dogberry patronisingly calls *'a good old man, sir; he will be talking'* in Act 3, Scene 5?",
          answer: { type: "text", accept: ["Verges", "verges"], display: "Verges" },
          traps: [
            { spec: { type: "text", accept: ["Conrade", "Balthasar", "Sexton", "Borachio"] }, feedback: "The Sexton takes notes during Act 4, Scene 2; Dogberry's loyal elderly sidekick is **Verges**." },
          ],
          hints: ["His six-letter name begins with V."],
          solution: ["**Verges** is Dogberry's bumbling deputy whose interruptions frustrate Leonato even further in Act 3, Scene 5."],
        },
        {
          id: "much-ado-about-nothing-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "dogberry-analytical-essays",
          question:
            "In Year 9 essays on Shakespeare drama, you should never write *'this makes the reader feel shocked'*. What single noun should replace *'reader'* to reflect theatrical performance?",
          answer: { type: "text", accept: ["audience", "the audience", "spectators"], display: "audience" },
          traps: [
            { spec: { type: "text", accept: ["viewer", "crowd", "listener"] }, feedback: "In literary analysis of plays, the exact standard term is **audience** (e.g. 'an Elizabethan audience' or 'a modern audience')." },
          ],
          hints: [
            "Think of the people watching a live play at the Globe Theatre.",
            "Starts with 'aud-'.",
          ],
          solution: ["Always write **audience** — plays are crafted to be seen and heard live on stage, not read silently like novels."],
        },
        {
          id: "much-ado-about-nothing-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "deception-noting-hero",
          question:
            "In Act 5, Scene 1, as part of Claudio's penance to restore Hero's honour, Leonato requires him to marry a masked stranger sight unseen. What single-word family relationship to Leonato does he invent for this supposed bride?",
          answer: {
            type: "text",
            accept: ["niece", "his niece", "Leonato's niece"],
            display: "niece",
          },
          traps: [
            { spec: { type: "text", accept: ["Hero", "Beatrice", "Margaret", "daughter"] }, feedback: "The veiled bride turns out to be Hero, of course — but Claudio believes he is agreeing to marry Leonato's **niece** (Antonio's fictional daughter)." },
          ],
          hints: [
            "Leonato claims this young woman is his brother Antonio's child and looks just like Hero.",
            "Give the five-letter family noun starting with N.",
          ],
          solution: ["Claudio agrees to write an epitaph, mourn at Hero's tomb, and marry Leonato's masked **niece** sight unseen — testing whether he can finally trust beyond outward appearances."],
        },
        {
          id: "much-ado-about-nothing-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "dogberry-analytical-essays",
          question:
            "In the WHAT–HOW–WHY analytical framework, which single word names the step where you embed a short quotation, identify Shakespeare's device, and zoom into a key word?",
          answer: { type: "text", accept: ["HOW", "how"], display: "HOW" },
          traps: [
            { spec: { type: "text", accept: ["WHAT", "WHY"] }, feedback: "WHAT is your main conceptual claim and WHY explores audience effect/context; embedding quotes and zooming into methods is **HOW**." },
          ],
          hints: [
            "Choose between the three uppercase words in the framework name.",
            "It explains the craft and mechanics of Shakespeare's language.",
          ],
          solution: ["**HOW** focuses on evidence, literary/dramatic method, and single-word zoom."],
        },
        {
          id: "much-ado-about-nothing-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "dogberry-analytical-essays",
          question:
            "What two-word theatrical term describes placing a humorous scene like Dogberry's interrogation (Act 4, Scene 2) straight after a harrowing crisis (Act 4, Scene 1) to ease audience tension?",
          answer: { type: "text", accept: ["comic relief"], display: "comic relief" },
          traps: [
            { spec: { type: "text", accept: ["dramatic irony", "slapstick", "satire"] }, feedback: "While Dogberry also provides satire, the specific structural term for easing emotional intensity right after a dark scene is **comic relief**." },
          ],
          hints: [
            "Two words: the first relates to comedy, the second means easing tension.",
            "Shakespeare also uses it with the Porter in *Macbeth* and the Gravediggers in *Hamlet*.",
          ],
          solution: ["**Comic relief** releases the tension of the Church Scene while reassuring the audience that Hero's innocence will soon be proven."],
        },
        {
          id: "much-ado-about-nothing-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "deception-noting-hero",
          marks: 4,
          question:
            "Read this short extract from Act 4, Scene 1:\n\n> **Claudio:** *Give not this rotten orange to your friend; / She's but the sign and semblance of her honour.*\n\nUsing WHAT–HOW–WHY, analyse how Shakespeare presents Claudio's cruelty and shallow judgement here.",
          hints: [
            "Unpack the fruit metaphor and notice who Claudio speaks to (Leonato, not Hero).",
            "Explain the irony in Claudio attacking 'sign and semblance' (outward show).",
            "Link the audience's outrage to dramatic irony from Act 3, Scene 3.",
          ],
          modelAnswer:
            "Shakespeare exposes Claudio's vindictive, status-obsessed cruelty by showing him publicly dehumanise Hero at the altar. Through the imperative 'Give not', Claudio addresses Leonato as though Hero is damaged property passed between men, while the metaphor 'rotten orange' pairs an attractive skin with hidden decay to paint her as corrupted. Bitter dramatic irony intensifies the moment: Claudio condemns 'sign and semblance' (deceptive outward appearance) even though he himself was completely duped by Margaret's costume at the window. Because spectators already know Borachio is in custody, Shakespeare turns the audience decisively against Claudio.",
          markScheme: [
            {
              point: "Analyses the metaphor 'rotten orange' (attractive outside vs inward decay / dehumanisation)",
              keywords: ["metaphor", "decay", "dehumanis", "spoiled", "corrupt", "outside", "property"],
            },
            {
              point: "Notes the imperative 'Give not' or Claudio addressing Leonato over Hero's head as an object",
              keywords: ["imperative", "leonato", "object", "hand", "transaction", "possess", "silence"],
            },
            {
              point: "Explains the irony of 'sign and semblance' when Claudio himself fell for a staged visual illusion",
              keywords: ["irony", "ironic", "appearance", "illusion", "window", "margaret", "duped", "fooled"],
            },
            {
              point: "Explains audience reaction (outrage/sympathy for Hero) driven by knowledge of Borachio's arrest",
              keywords: ["audience", "dramatic irony", "innocen", "outrage", "borachio", "sympathy", "condemn"],
            },
          ],
        },
        {
          id: "much-ado-about-nothing-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "deception-noting-hero",
          marks: 4,
          question:
            "Read this short extract from Act 4, Scene 1:\n\n> **Beatrice:** *Kill Claudio.*\n> **Benedick:** *Ha! not for the wide world.*\n> **Beatrice:** *O God, that I were a man! I would eat his heart in the market-place.*\n\nHow does Shakespeare use language and dramatic contrast here to present Beatrice's anger and frustration?",
          hints: [
            "Comment on the abrupt two-word imperative immediately after their prose love confession.",
            "Zoom into the exclamation 'O God, that I were a man!' and link it to Elizabethan gender limits.",
            "Analyse the visceral hyperbole of 'eat his heart in the market-place'.",
          ],
          modelAnswer:
            "Shakespeare shatters the tender mood of Beatrice and Benedick's confession with a sudden tonal shock. The stark two-word imperative 'Kill Claudio' strips away all witty banter, proving Beatrice's fierce devotion to Hero outweighs romance. Her anguished exclamation 'O God, that I were a man!' highlights her bitter powerlessness within Elizabethan patriarchy, where women are barred from fighting duels to defend honour. Finally, the savage, visceral hyperbole 'eat his heart in the market-place' demands public retribution mirroring Claudio's public altar humiliation, leaving the audience stunned by her moral fury.",
          markScheme: [
            {
              point: "Analyses the stark imperative and sudden tonal shift after romantic confession",
              keywords: ["imperative", "tonal", "shift", "shock", "abrupt", "confession", "contrast"],
            },
            {
              point: "Links 'O God, that I were a man!' to Elizabethan gender restrictions (women unable to duel)",
              keywords: ["patriarch", "gender", "duel", "powerless", "female", "elizabethan", "women"],
            },
            {
              point: "Analyses the visceral hyperbole / metaphor of 'eat his heart in the market-place' (public vengeance)",
              keywords: ["hyperbole", "visceral", "public", "vengeance", "revenge", "retribution", "savage"],
            },
            {
              point: "Explains the dramatic impact on the audience or the loyalty test placed on Benedick",
              keywords: ["audience", "loyalty", "test", "hero", "devotion", "moral", "stunned"],
            },
          ],
        },
        {
          id: "much-ado-about-nothing-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "dogberry-analytical-essays",
          marks: 4,
          question:
            "Explain how Shakespeare uses Dogberry in Acts 3 and 4 for **both** comic effect and serious structural purpose in the play.",
          hints: [
            "Name Dogberry's signature word-blunder technique with a real example from the play.",
            "Explain how Act 3, Scene 5 builds dramatic irony right before the Church Scene.",
            "Explain how Act 4, Scene 2 provides comic relief and social satire of the nobles.",
          ],
          modelAnswer:
            "Shakespeare makes Dogberry far more than simple clowning by weaving his blunders into the play's core structure. Comically, his pompous malapropisms — such as 'comparisons are odorous' and threatening Borachio with 'everlasting redemption' — provide essential comic relief immediately after the harrowing Church Scene. Structurally, however, Dogberry generates painful dramatic irony in Act 3, Scene 5 when impatient Leonato brushes him off moments before the wedding despite Borachio already being arrested. Ultimately, Shakespeare uses social satire: bumbling working-class watchmen unmask the conspiracy that completely blinds Messina's proud aristocrats.",
          markScheme: [
            {
              point: "Identifies malapropisms with an accurate textual example ('odorous', 'redemption', 'comprehend', 'ass')",
              keywords: ["malapropism", "odorous", "redemption", "comprehend", "vagrom"],
            },
            {
              point: "Explains comic relief following the near-tragic Church Scene (Act 4.2)",
              keywords: ["comic relief", "tension", "church", "release", "after"],
            },
            {
              point: "Explains dramatic irony in Act 3, Scene 5 when Leonato dismisses Dogberry before the wedding",
              keywords: ["dramatic irony", "leonato", "impatient", "dismiss", "3.5", "scene 5", "arrest"],
            },
            {
              point: "Explains social satire — humble watchmen outsmarting proud/clever nobles",
              keywords: ["satire", "noble", "aristocrat", "pride", "class", "unmask", "truth"],
            },
          ],
        },
        {
          id: "much-ado-about-nothing-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "messina-honour-context",
          marks: 3,
          question:
            "In Act 4, Scene 1, Leonato cries over Hero: *'Death is the fairest cover for her shame.'* Explain what this line reveals about patriarchal honour and how an Elizabethan audience might react compared with a modern audience.",
          hints: [
            "Notice Leonato immediately believes Don Pedro and Claudio rather than his own daughter.",
            "Zoom into 'fairest cover' — treating death as preferable to social disgrace.",
            "Contrast Elizabethan honour norms with a modern audience's likely horror.",
          ],
          modelAnswer:
            "Shakespeare shows how deeply patriarchal honour distorts parental love in Messina: Leonato instantly believes high-ranking male guests over his own weeping daughter. The oxymoronic pairing of 'Death' with the aesthetic superlative 'fairest cover' reveals that a father views his child's survival as less important than concealing family disgrace. While an Elizabethan audience would recognise the severe social ruin attached to unchastity, a modern audience reacts with acute horror at Leonato's cruel betrayal of Hero.",
          markScheme: [
            {
              point: "Notes Leonato trusts male peers / aristocratic rank over his own daughter",
              keywords: ["trust", "male", "father", "daughter", "parental", "betray"],
            },
            {
              point: "Zooms into 'fairest cover' / 'Death' showing reputation valued above Hero's life",
              keywords: ["reputation", "disgrace", "life", "conceal", "superlative", "oxymoron", "iron"],
            },
            {
              point: "Contrasts Elizabethan awareness of female chastity codes with a modern audience's shock or outrage",
              keywords: ["elizabethan", "modern", "horror", "shock", "outrage", "chastity"],
            },
          ],
        },
      ],
    },
  ],

  challenge: [
    {
      id: "much-ado-about-nothing-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "beatrice-benedick-wit",
      question:
        "In Beatrice's Act 3, Scene 1 soliloquy (*'Contempt, farewell! and maiden pride, adieu!'*), she speaks directly to abstract qualities as though they were people leaving the room. What exact literary device is addressing an absent person or abstract quality directly?",
      answer: { type: "text", accept: ["apostrophe", "an apostrophe"], display: "apostrophe" },
      traps: [
        { spec: { type: "text", accept: ["personification", "metaphor", "allusion"] }, feedback: "While 'Contempt' is subtly personified, the specific rhetorical term for directly *addressing* an abstract concept ('farewell!', 'adieu!') is **apostrophe**." },
      ],
      hints: [
        "It shares its exact spelling with a common punctuation mark, though here it is a classical rhetorical figure.",
        "Beatrice addresses 'Contempt' and 'maiden pride' directly as if bidding goodbye to guests.",
      ],
      solution: ["**Apostrophe** is directly addressing an absent person or abstract concept (*'Contempt, farewell!'*), dramatising Beatrice actively dismissing her old emotional armour."],
    },
    {
      id: "much-ado-about-nothing-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "deception-noting-hero",
      question:
        "In Act 5, Scene 4, Hero removes her veil and declares: *'One Hero died defiled, but I do live.'* What grammatical/rhetorical device contrasts two opposing ideas in balanced halves of the same line (*'died defiled'* vs *'do live'*)?",
      answer: { type: "text", accept: ["antithesis", "juxtaposition"], display: "antithesis" },
      traps: [
        { spec: { type: "text", accept: ["oxymoron", "malapropism", "simile"] }, feedback: "An oxymoron puts two opposite words right next to each other; balancing two contrasting clauses across a line ('died defiled' vs 'do live') is **antithesis**." },
      ],
      hints: [
        "Notice the balanced opposition across the comma: death/defilement on the left, life/purity on the right.",
        "The classical rhetorical term starts with 'anti-'.",
      ],
      solution: ["**Antithesis** sets *'died defiled'* symmetrically against *'do live'*, dramatising Hero's ritual symbolic rebirth."],
    },
    {
      id: "much-ado-about-nothing-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "messina-honour-context",
      question:
        "What academic adjective describes the strong social bonding among male soldiers (Don Pedro, Claudio and Benedick) that leads them to trust fellow men above women until Benedick breaks ranks in Act 4?",
      answer: { type: "text", accept: ["homosocial", "patriarchal"], display: "homosocial" },
      traps: [
        { spec: { type: "text", accept: ["soliloquy", "romantic", "chivalric"] }, feedback: "Chivalric refers to knightly courtesy; the precise sociology/literature term for same-sex social solidarity among men is **homosocial** (or patriarchal)." },
      ],
      hints: [
        "It combines 'homo-' (same) with 'social' (non-romantic social bonding between peers of the same sex).",
        "Literary critics use this exact term when analysing male camaraderie in Shakespeare's Messina.",
      ],
      solution: ["**Homosocial** bonding explains why Claudio and Don Pedro immediately trust Don John's word and Leonato believes the Prince over Hero."],
    },
    {
      id: "much-ado-about-nothing-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "beatrice-benedick-wit",
      question:
        "In Act 5, Scene 4, as Beatrice and Benedick begin trading sharp banter again at their own wedding, Benedick playfully silences her with a kiss: *'Peace! I will stop your mouth.'* Which earlier character's silence across the play makes this closing line especially open to feminist debate?",
      answer: { type: "text", accept: ["Hero", "hero"], display: "Hero" },
      traps: [
        { spec: { type: "text", accept: ["Margaret", "Ursula", "Leonato"] }, feedback: "Think of the quiet cousin whose silence in church nearly cost her everything — **Hero**." },
      ],
      hints: [
        "Compare Beatrice's outspoken voice across Acts 1–4 with her quiet cousin's role in Messina.",
        "Critics debate whether Benedick's kiss is affectionate equality or a playful attempt to silence Beatrice like her cousin.",
      ],
      solution: ["Comparing the line to **Hero**'s silence invites sharp evaluation: some productions play Benedick's kiss as warm comic equality, while feminist critics notice the tension of silencing Beatrice's famous voice."],
    },
    {
      id: "much-ado-about-nothing-ch-q05",
      kind: "written",
      difficulty: "challenge",
      guideRef: "deception-noting-hero",
      marks: 6,
      question:
        "**Extended Challenge:** *'Don Pedro's well-meaning meddling is almost as dangerous to Messina as Don John's malice.'* To what extent do you agree? Explore both brothers' uses of deception across the play.",
      hints: [
        "Build a balanced conceptual argument evaluating BOTH Don Pedro and Don John rather than agreeing blindly.",
        "Examine Don Pedro's proxy wooing (Act 2.1), orchard gulling (Act 2.3), and public backing of Claudio in church (Act 4.1).",
        "Contrast Don Pedro's benign intentions and high rank with Don John's conscious spite as a 'plain-dealing villain'.",
      ],
      modelAnswer:
        "Arguably, Don Pedro's benevolent manipulation exposes how easily unchecked princely power mirrors villainy, even though his motives remain fundamentally different from Don John's. On one hand, Don Pedro uses proxy wooing at the masked ball and staged eavesdropping in the orchard to orchestrate others' lives like a playwright; his casual authority encourages Claudio's passivity and makes him terrifyingly credulous when he joins Claudio in publicly humiliating Hero at the altar without hearing her defence. On the other hand, Shakespeare clearly distinguishes intent: Don John proudly defines himself as a 'plain-dealing villain' driven by bitter envy, paying Borachio to destroy an innocent woman's reputation for sheer spite. Ultimately, Shakespeare suggests Messina's true danger lies not only in open malice, but in an aristocratic honour culture where even virtuous rulers trust theatrical 'noting' over compassionate listening.",
      markScheme: [
        {
          point: "Presents a nuanced thesis weighing both sides rather than a one-sided claim",
          keywords: ["arguably", "however", "although", "both", "even though", "different"],
        },
        {
          point: "Examines Don Pedro's benevolent meddling (masked-ball proxy wooing or orchard gulling)",
          keywords: ["masked", "woo", "proxy", "gull", "orchard", "orchestrat", "control"],
        },
        {
          point: "Critiques Don Pedro's complicity in shaming Hero publicly at the altar (Act 4.1)",
          keywords: ["church", "altar", "shame", "humiliat", "hero", "credul", "defence"],
        },
        {
          point: "Contrasts Don John's deliberate malice / 'plain-dealing villain' archetype / Borachio plot",
          keywords: ["plain-dealing", "villain", "malcontent", "borachio", "envy", "spite", "malice"],
        },
        {
          point: "Connects deception to the wider theme of 'noting' / appearances vs reality",
          keywords: ["noting", "appearance", "illusion", "eavesdrop", "seeming"],
        },
        {
          point: "Reaches an evaluative conclusion about Shakespeare's critique of aristocratic power or honour",
          keywords: ["aristocrat", "honour", "power", "culture", "patriarch", "shakespeare suggests", "ultimately"],
        },
      ],
    },
    {
      id: "much-ado-about-nothing-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "beatrice-benedick-wit",
      marks: 5,
      question:
        "**Close Form Challenge:** Why does Shakespeare keep Beatrice and Benedick's first mutual declaration of love in **Act 4, Scene 1** in plain **prose**, even though Beatrice switched into rhyming **verse** when she first fell in love in Act 3, Scene 1?",
      hints: [
        "Look at what happened in the first half of Act 4, Scene 1: what form did Claudio use to attack Hero?",
        "Compare the theatricality of Claudio's verse rhetoric with the unadorned simplicity of prose.",
        "Consider how quiet prose sets up the shock of 'Kill Claudio' moments later.",
      ],
      modelAnswer:
        "Shakespeare's refusal to switch into romantic verse in Act 4, Scene 1 is a deliberate structural contrast against both Claudio's preceding performance and Beatrice's earlier private lyrical soliloquy in Act 3.1. Moments earlier in church, Claudio weaponised grand, theatrical blank verse ('Out on thee, seeming!') to humiliate Hero publicly, contaminating poetic rhetoric with cruelty and artificiality. Whereas Beatrice's solitary rhyming verse suited private emotional discovery in the orchard, keeping their mutual confession ('I love you with so much of my heart that none is left to protest') in simple, conversational prose amid a real crisis makes their affection sound grounded, unadorned and genuinely egalitarian. Furthermore, this quiet intimacy lowers the emotional volume on stage so that Beatrice's abrupt imperative 'Kill Claudio' lands like a thunderclap for the audience.",
      markScheme: [
        {
          point: "Contrasts their prose with Claudio's theatrical blank verse earlier in Act 4, Scene 1",
          keywords: ["claudio", "blank verse", "theatrical", "rhetoric", "seeming", "earlier"],
        },
        {
          point: "Explains that prose here conveys unadorned honesty, intimacy, or grounded equality",
          keywords: ["honest", "sincer", "ground", "intima", "unadorned", "equal", "genuine"],
        },
        {
          point: "Links back to Beatrice's solitary rhymed verse in Act 3.1 (private lyricism vs real crisis)",
          keywords: ["3.1", "soliloquy", "private", "crisis", "real", "lyrical", "differ"],
        },
        {
          point: "Explains how the quiet prose sets up the shocking tonal pivot of 'Kill Claudio'",
          keywords: ["kill claudio", "imperative", "pivot", "shock", "contrast", "thunderclap", "abrupt"],
        },
        {
          point: "Considers theatrical delivery and impact on the live audience",
          keywords: ["stage", "audience", "volume", "silence", "pause", "dramatic"],
        },
      ],
    },
    {
      id: "much-ado-about-nothing-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "dogberry-analytical-essays",
      marks: 5,
      question:
        "**Structural Irony Challenge:** How does Dogberry's obsessive cry *'O that he were here to write me down an ass!'* (Act 4, Scene 2) secretly connect the comic subplot to the serious main plot about Hero's reputation?",
      hints: [
        "Think about what Dogberry cares most about — status, public record, and how others speak of him.",
        "Compare his obsession with having his dignity recorded to Claudio's and Leonato's obsession with honour.",
        "Comment on how Shakespeare uses comic parody to satirise aristocratic values.",
      ],
      modelAnswer:
        "Beneath its slapstick absurdity, Dogberry's demand to be written down an 'ass' acts as a comic parody of Messina's aristocratic honour obsession. Just as Leonato and Claudio care desperately about public reputation, official appearances and what society says about them, Dogberry boasts of his 'two gowns' and frets over the Sexton's written record. The comic irony is sharp: in desperately defending his dignity, Dogberry begs to immortalise his own foolishness. Structurally, Shakespeare uses this mirror-image satire to expose how fragile and laughable status-obsession really is — whether worn by a constable or a prince.",
      markScheme: [
        {
          point: "Identifies the moment as comic parody or mirror-image satire of the aristocratic main plot",
          keywords: ["parody", "satire", "mirror", "echo", "parallel", "subplot"],
        },
        {
          point: "Connects Dogberry's obsession with status / official records ('two gowns') to Claudio's and Leonato's obsession with honour",
          keywords: ["reputation", "status", "honour", "record", "leonato", "claudio", "dignity"],
        },
        {
          point: "Analyses the self-defeating comic irony of begging to be recorded as an 'ass'",
          keywords: ["irony", "ironic", "foolish", "absurd", "self-defeating", "immortal"],
        },
        {
          point: "Explains how Shakespeare critiques fragile appearance-driven pride across social classes",
          keywords: ["pride", "class", "appearance", "fragile", "noble", "prince", "critique"],
        },
        {
          point: "Uses precise analytical framing attributing craft directly to Shakespeare",
          keywords: ["shakespeare", "structur", "expose", "reveal", "audience"],
        },
      ],
    },
    {
      id: "much-ado-about-nothing-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "messina-honour-context",
      marks: 6,
      question:
        "**Evaluative Essay Challenge:** *'Hero's silent forgiveness of Claudio in Act 5, Scene 4 makes the ending of Much Ado About Nothing deeply unsettling for modern audiences.'* Evaluate this view with close reference to the text and stagecraft.",
      hints: [
        "Explore why Hero's line 'One Hero died defiled, but I do live' troubles modern spectators.",
        "Consider the counter-argument: Elizabethan comic genre conventions, Claudio's public penance, and Benedick & Beatrice's lively partnership.",
        "Mention how a modern director or actor playing Hero might stage the unveiling to show hesitation or joy.",
      ],
      modelAnswer:
        "For many modern audiences, Hero's swift reconciliation with Claudio casts a dark shadow over the comic resolution. Despite being completely innocent, Hero enters masked and submits to a ritual cleansing — 'One Hero died defiled, but I do live' — implying patriarchal honour demands a symbolic death before a slandered woman regains worth. Moreover, Claudio's swift joke about marrying an 'Ethiope' before the veil lifts makes his remorse look painfully thin. Yet an Elizabethan audience expected Shakespearean comedy to close with restored social harmony and double weddings, and Claudio has publicly performed Leonato's penance by mourning at Hero's tomb and agreeing to marry sight unseen. Crucially, stagecraft decides the final balance: while a traditional staging emphasises celebratory dance, a modern actor can pause coldly before taking Claudio's hand, letting Beatrice and Benedick's equal, witty union remain the play's true romantic triumph.",
      markScheme: [
        {
          point: "Analyses why modern audiences find Hero's forgiveness unsettling (innocent bride needing symbolic rebirth)",
          keywords: ["modern", "unsettling", "shadow", "innocent", "rebirth", "patriarch"],
        },
        {
          point: "Embeds and unpacks 'One Hero died defiled, but I do live' (or Claudio's flippant remarks in 5.4)",
          keywords: ["defiled", "veil", "mask", "symbolic", "remorse", "thin"],
        },
        {
          point: "Evaluates the counter-view: Elizabethan comedy conventions (harmony, weddings) and Claudio's penance",
          keywords: ["elizabethan", "comedy", "convention", "penance", "tomb", "sight unseen", "harmony"],
        },
        {
          point: "Considers live stagecraft / actor performance choices (pause, body language, reluctance vs joy)",
          keywords: ["stage", "actor", "director", "pause", "perform", "production", "staging"],
        },
        {
          point: "Contrasts Hero & Claudio's strained match with Beatrice & Benedick's witty, equal partnership",
          keywords: ["beatrice", "benedick", "equal", "witty", "contrast", "triumph"],
        },
        {
          point: "Sustains balanced evaluative judgement throughout",
          keywords: ["yet", "however", "crucially", "moreover", "balance", "despite"],
        },
      ],
    },
  ],
};
