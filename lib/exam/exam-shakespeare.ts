import type { ExamPaper } from "../types.ts";

const SVG_IAMBIC_PROSE =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of iambic pentameter blank verse and unmetrical prose in Shakespeare">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="30" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Blank Verse (Iambic Pentameter) vs Prose</text>' +
  '<rect x="20" y="44" width="520" height="96" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="34" y="65" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--brand)">BLANK VERSE — 5 unstressed/stressed feet (10 syllables, unrhymed)</text>' +
  '<g font-family="system-ui, -apple-system, sans-serif" text-anchor="middle">' +
  '<rect x="34" y="76" width="94" height="32" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>' +
  '<text x="81" y="96" font-size="11" font-weight="600" fill="var(--ink)">da - DUM (1)</text>' +
  '<rect x="134" y="76" width="94" height="32" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>' +
  '<text x="181" y="96" font-size="11" font-weight="600" fill="var(--ink)">da - DUM (2)</text>' +
  '<rect x="234" y="76" width="94" height="32" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>' +
  '<text x="281" y="96" font-size="11" font-weight="600" fill="var(--ink)">da - DUM (3)</text>' +
  '<rect x="334" y="76" width="94" height="32" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>' +
  '<text x="381" y="96" font-size="11" font-weight="600" fill="var(--ink)">da - DUM (4)</text>' +
  '<rect x="434" y="76" width="94" height="32" rx="6" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1"/>' +
  '<text x="481" y="96" font-size="11" font-weight="600" fill="var(--ink)">da - DUM (5)</text>' +
  '</g>' +
  '<text x="34" y="128" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink-2)">Signals heightened emotion, noble ceremony, formal courtroom argument, or deep romantic feeling.</text>' +
  '<rect x="20" y="152" width="520" height="80" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="34" y="173" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="var(--ink)">PROSE — No fixed beat pattern; runs to the edge of the page</text>' +
  '<line x1="34" y1="190" x2="520" y2="190" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="6 4"/>' +
  '<text x="34" y="213" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink-2)">Unrhymed, natural speech rhythm without fixed 10-syllable metre or line breaks.</text>' +
  '</svg>';

const SVG_MUCH_ADO_ARC =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dramatic tension arc across the five acts of Much Ado About Nothing">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Dramatic Tension Arc: Much Ado About Nothing</text>' +
  '<line x1="48" y1="205" x2="524" y2="205" stroke="var(--line)" stroke-width="1.5"/>' +
  '<line x1="48" y1="50" x2="48" y2="205" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="22" y="132" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="var(--ink-2)" transform="rotate(-90 22 132)">Emotional Tension</text>' +
  '<path d="M 65 182 C 135 168, 175 138, 235 128 C 295 118, 330 62, 365 62 C 405 62, 430 120, 465 148 C 485 164, 502 174, 515 178" fill="none" stroke="var(--brand)" stroke-width="3"/>' +
  '<circle cx="75" cy="180" r="5" fill="var(--brand)"/>' +
  '<circle cx="195" cy="136" r="5" fill="var(--brand)"/>' +
  '<circle cx="365" cy="62" r="6" fill="var(--bad)"/>' +
  '<circle cx="445" cy="132" r="5" fill="var(--good)"/>' +
  '<circle cx="512" cy="176" r="5" fill="var(--good)"/>' +
  '<g font-family="system-ui, -apple-system, sans-serif" font-size="10.5" fill="var(--ink)">' +
  '<text x="75" y="222" text-anchor="middle" font-weight="700">Act 1</text>' +
  '<text x="75" y="166" text-anchor="middle" fill="var(--ink-2)">Merry War</text>' +
  '<text x="195" y="222" text-anchor="middle" font-weight="700">Acts 2–3</text>' +
  '<text x="195" y="122" text-anchor="middle" fill="var(--ink-2)">Gulling &amp; Plot</text>' +
  '<text x="365" y="222" text-anchor="middle" font-weight="700" fill="var(--bad)">Act 4 Sc 1</text>' +
  '<text x="365" y="48" text-anchor="middle" font-weight="700" fill="var(--bad)">Church Shaming &amp; Kill Claudio</text>' +
  '<text x="445" y="222" text-anchor="middle" font-weight="700">Act 4 Sc 2</text>' +
  '<text x="445" y="114" text-anchor="middle" fill="var(--good)">Watch Unmask Plot</text>' +
  '<text x="512" y="222" text-anchor="middle" font-weight="700">Act 5</text>' +
  '<text x="512" y="160" text-anchor="middle" fill="var(--good)">Double Wedding</text>' +
  '</g>' +
  '</svg>';

const SVG_VENICE_BELMONT =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Contrasting dramatic worlds of Venice and Belmont in The Merchant of Venice">' +
  '<rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="var(--ink)">Contrasting Worlds: Venice vs Belmont</text>' +
  '<rect x="20" y="44" width="246" height="186" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>' +
  '<text x="143" y="68" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="var(--bad)">VENICE (Mercantile City)</text>' +
  '<g font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="var(--ink)">' +
  '<text x="36" y="96">• Trade, ships, credit &amp; interest loans</text>' +
  '<text x="36" y="122">• Written contracts &amp; strict law</text>' +
  '<text x="36" y="148">• Religious prejudice &amp; exclusion</text>' +
  '<text x="36" y="174">• Antonio&apos;s sadness &amp; Shylock&apos;s bond</text>' +
  '<text x="36" y="200" fill="var(--ink-2)">Key tone: anxious, legal, transactional</text>' +
  '</g>' +
  '<rect x="294" y="44" width="246" height="186" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="417" y="68" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="var(--good)">BELMONT (Estate &amp; Romance)</text>' +
  '<g font-family="system-ui, -apple-system, sans-serif" font-size="11.5" fill="var(--ink)">' +
  '<text x="310" y="96">• Fairy-tale riddle of three caskets</text>' +
  '<text x="310" y="122">• Love, music, moonlight &amp; rings</text>' +
  '<text x="310" y="148">• Female wit &amp; disguised agency</text>' +
  '<text x="310" y="174">• Appearance vs reality tested</text>' +
  '<text x="310" y="200" fill="var(--ink-2)">Key tone: lyrical, festive, yet wealthy</text>' +
  '</g>' +
  '<line x1="270" y1="136" x2="290" y2="136" stroke="var(--brand)" stroke-width="2.5"/>' +
  '<polygon points="274,131 266,136 274,141" fill="var(--brand)"/>' +
  '<polygon points="286,131 294,136 286,141" fill="var(--brand)"/>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-shakespeare",
  title: "Year 9 Shakespeare & Drama Mock Paper",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-shakespeare-q01",
      topicId: "much-ado-about-nothing",
      guideRef: "messina-honour-context",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "In Act 1 of *Much Ado About Nothing*, Claudio first checks with Benedick and Don Pedro whether Hero is 'worthy' and asks if Leonato has any sons before agreeing to let Don Pedro woo her on his behalf. What does this reveal about marriage in Messina's aristocratic society?",
      options: [
        "Marriage is decided purely by private romance with no family involvement at all.",
        "Marriage operates as a social contract tied to wealth, inheritance, and reputation.",
        "Young noblewomen in Messina routinely negotiate their own dowries independently.",
        "Soldiers returning from war are forbidden by law from marrying into noble families.",
      ],
      answerIndex: 1,
      hints: [
        "Notice why Claudio specifically asks whether Leonato has any sons.",
        "If Hero is Leonato's sole heir, what does marrying her bring besides affection?",
      ],
      strategy: "Link character dialogue to Elizabethan social context.",
      explanation:
        "Claudio's inquiry about Hero's inheritance and his reliance on Don Pedro's approval show that aristocratic marriage in Messina functions as a public social contract anchored in status, property, and honour. Suggesting marriage is purely private ignores how eagerly Claudio checks Hero's family wealth and social standing.",
    },
    {
      id: "exam-shakespeare-q02",
      topicId: "much-ado-about-nothing",
      guideRef: "beatrice-benedick-wit",
      kind: "short",
      difficulty: "warmup",
      question:
        "Shakespeare often ends an important scene, riddle, or declaration with two consecutive lines whose final words rhyme—such as *'All that glisters is not gold; / Often have you heard that told.'* Name this two-word poetic device.",
      answer: {
        type: "text",
        accept: ["rhyming couplet", "rhyming couplets", "heroic couplet", "couplet"],
        display: "rhyming couplet",
      },
      traps: [
        {
          spec: { type: "text", accept: ["blank verse"] },
          feedback: "Blank verse is unrhymed iambic pentameter; here the two consecutive lines chime deliberately at the end ('gold / told').",
        },
        {
          spec: { type: "text", accept: ["free verse"] },
          feedback: "Free verse avoids regular rhyme and metre, whereas these two linked lines rhyme neatly together.",
        },
      ],
      hints: [
        "Focus on the pair of lines ('two' = couple) whose end-words chime ('gold / told').",
        "The two-word term begins with 'rhyming...'.",
      ],
      strategy: "Recognise how consecutive rhymed pairs create punchy dramatic closure.",
      solution: [
        "Two successive lines of verse that rhyme at the end ('gold / told') form a **rhyming couplet**.",
        "Shakespeare uses rhyming couplets to give proverbs, riddles, and scene exits a decisive, memorable snap.",
      ],
      commonError: "Confusing rhyming couplets with unrhymed blank verse.",
    },
    {
      id: "exam-shakespeare-q03",
      topicId: "much-ado-about-nothing",
      guideRef: "beatrice-benedick-wit",
      kind: "mcq",
      difficulty: "core",
      diagram: SVG_IAMBIC_PROSE,
      question:
        "Study the prose-versus-verse comparison and read this exchange from Act 1 Scene 1 of *Much Ado About Nothing*:\n\n**BEATRICE:** I wonder that you will still be talking, Signior Benedick: nobody marks you.\n**BENEDICK:** What, my dear Lady Disdain! are you yet living?\n\nWhy does Shakespeare write Beatrice and Benedick's early 'merry war' in rapid prose rather than formal courtly verse?",
      options: [
        "To create nimble, grounded wit that exposes their sharp equality and guarded pride.",
        "To imply that neither character belongs to Leonato's educated noble household.",
        "To show that both speakers have already secretly planned their wedding vows.",
        "To signal that the scene is intended as a tragic warning about wartime grief.",
      ],
      answerIndex: 0,
      hints: [
        "Compare the pace of quick conversational prose with slow, formal romantic speeches.",
        "Notice how Beatrice interrupts first and Benedick snaps back with a nickname — neither dominates the other.",
      ],
      strategy: "Connect form (prose vs verse) to character relationship.",
      explanation:
        "Shakespeare uses brisk prose for Beatrice and Benedick's sparring so their repartee feels fast, razor-sharp, and unscripted, highlighting their intellectual equality and defensive pride. Prose here does not signify low social status—both are witty aristocrats deliberately resisting sentimental courtly clichés.",
    },
    {
      id: "exam-shakespeare-q04",
      topicId: "much-ado-about-nothing",
      guideRef: "deception-noting-hero",
      kind: "short",
      difficulty: "warmup",
      question:
        "In Elizabethan English, the title word *Nothing* in *Much Ado About Nothing* sounded nearly identical to another word meaning watching, eavesdropping, observing, and spreading gossip. Write that single word.",
      answer: {
        type: "text",
        accept: ["noting", "to note", "note"],
        display: "noting",
      },
      traps: [
        {
          spec: { type: "text", accept: ["knowing", "know"] },
          feedback: "Close in theme, but the Elizabethan pun specifically links 'nothing' to observing or taking notice of someone.",
        },
        {
          spec: { type: "text", accept: ["nodding", "nought"] },
          feedback: "Think of the verb meaning 'to observe closely' or 'to pay attention to' — it shares the root 'note'.",
        },
      ],
      hints: [
        "Pronounce 'nothing' with a long 'o' sound and a soft 't' rather than 'th'.",
        "It comes from the verb meaning to observe, watch, or take notice.",
      ],
      strategy: "Use Elizabethan wordplay to unlock central themes.",
      solution: [
        "Elizabethan speakers pronounced 'nothing' and **noting** almost identically.",
        "The pun highlights how almost every plot twist in the play grows from characters overhearing, watching, or misinterpreting each other.",
      ],
    },
    {
      id: "exam-shakespeare-q05",
      topicId: "much-ado-about-nothing",
      guideRef: "dogberry-analytical-essays",
      kind: "short",
      difficulty: "core",
      question:
        "In Act 3 Scene 5 of *Much Ado About Nothing*, Constable Dogberry solemnly tells Leonato: 'Our watch, sir, have indeed comprehended two auspicious persons' (meaning *apprehended* two *suspicious* persons). Name the comic language device where a speaker mistakenly uses a similar-sounding wrong word.",
      answer: {
        type: "text",
        accept: ["malapropism", "malapropisms"],
        display: "malapropism",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pun", "puns", "wordplay"] },
          feedback: "A pun is deliberate, clever wordplay; Dogberry's muddles are unintentional blunders that make him sound pompous.",
        },
        {
          spec: { type: "text", accept: ["oxymoron", "irony"] },
          feedback: "Look specifically at the comic substitution of one word for a similar-sounding incorrect word.",
        },
      ],
      hints: [
        "Dogberry tries to sound grand and official, accidentally swapping words that sound alike.",
        "The term begins with 'mal-' (meaning 'badly' or 'wrongly') and refers to inappropriate word choice.",
      ],
      strategy: "Identify comic characterisation devices accurately.",
      solution: [
        "Dogberry confuses 'comprehended' with 'apprehended' and 'auspicious' with 'suspicious'.",
        "Unintentionally replacing a word with a similar-sounding nonsensical one for comic effect is a **malapropism**.",
      ],
      commonError: "Calling Dogberry's blunders puns — puns require conscious wit, whereas malapropisms reveal comic self-importance.",
    },
    {
      id: "exam-shakespeare-q06",
      topicId: "much-ado-about-nothing",
      guideRef: "deception-noting-hero",
      kind: "mcq",
      difficulty: "core",
      question:
        "In Act 2 Scene 3 of *Much Ado About Nothing*, Benedick hides in the orchard while Don Pedro, Leonato, and Claudio loudly invent stories of Beatrice's desperate love for him. How does the audience's secret knowledge shape our reaction to Benedick's private orchard speech straight afterwards?",
      options: [
        "It makes the audience fear that Benedick will immediately challenge Don Pedro to a duel.",
        "It encourages the audience to believe Beatrice secretly wrote the entire trick herself.",
        "It turns Benedick's sudden solemn defence of marriage into warm, affectionate comedy.",
        "It convinces the audience that Claudio and Leonato genuinely despise Benedick's wit.",
      ],
      answerIndex: 2,
      hints: [
        "Ask yourself what the audience knows that Benedick does not know during his speech.",
        "Notice how seriously Benedick justifies changing his mind ('the world must be peopled') right after swearing he would never marry.",
      ],
      strategy: "Explain how audience knowledge shifts dramatic tone.",
      explanation:
        "Because the audience witnessed Don Pedro and his friends staging the trap, Benedick's earnest insistence that 'this can be no trick' and his sudden vow to marry become warmly comical rather than mere hypocrisy. The deception is affectionate rather than cruel, letting the audience laugh with relief as his pride softens.",
    },
    {
      id: "exam-shakespeare-q07",
      topicId: "much-ado-about-nothing",
      guideRef: "beatrice-benedick-wit",
      kind: "short",
      difficulty: "core",
      question:
        "Alone in the orchard after overhearing his friends, Benedick speaks his private thoughts aloud to the audience ('When I said I would die a bachelor, I did not think I should live till I were married'). Name the dramatic convention for a speech spoken by a character alone onstage to reveal inner thoughts.",
      answer: {
        type: "text",
        accept: ["soliloquy", "a soliloquy"],
        display: "soliloquy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["aside", "an aside"] },
          feedback: "An aside is a brief comment spoken while other characters remain onstage; here Benedick is completely alone.",
        },
        {
          spec: { type: "text", accept: ["monologue", "dramatic monologue"] },
          feedback: "A monologue can be addressed to other characters onstage; Shakespeare's specific term for speaking inner thoughts aloud while alone is different.",
        },
      ],
      hints: [
        "Notice the crucial staging detail: Benedick is completely alone onstage.",
        "The word comes from the Latin roots 'solus' (alone) and 'loqui' (to speak).",
      ],
      strategy: "Distinguish staging conventions by who is onstage.",
      solution: [
        "When a character is alone onstage and voices private reflections directly to the audience, the speech is a **soliloquy**.",
        "By contrast, an aside occurs while other characters are present onstage.",
      ],
    },
    {
      id: "exam-shakespeare-q08",
      topicId: "much-ado-about-nothing",
      guideRef: "deception-noting-hero",
      kind: "mcq",
      difficulty: "core",
      question:
        "During the wedding scene (Act 4 Scene 1) of *Much Ado About Nothing*, Claudio publicly rejects Hero with the line: 'There, Leonato, take her back again: / Give not this rotten orange to your friend.' What does the metaphor 'rotten orange' most powerfully expose?",
      options: [
        "Claudio's playful attempt to lighten the mood before the ceremony continues.",
        "Hero's secret plan to fake her own death so she can escape from Messina.",
        "Leonato's determination to defend his daughter's word against noble gossip.",
        "Claudio's possessive mindset that reduces a woman's worth to outward purity.",
      ],
      answerIndex: 3,
      hints: [
        "Think about the literal qualities of a bruised or rotten fruit passed between two buyers.",
        "Notice Claudio hands Hero back to her father like damaged merchandise rather than speaking to her as an equal.",
      ],
      strategy: "Unpack literal connotations of a metaphor and link to theme.",
      explanation:
        "Calling Hero a 'rotten orange' and commanding Leonato to 'take her back' dehumanises her into spoiled property traded between men. It reveals how readily Claudio values unblemished outward reputation over trust or compassion, whereas Leonato initially accepts the accusation rather than defending her.",
    },
    {
      id: "exam-shakespeare-q09",
      topicId: "much-ado-about-nothing",
      guideRef: "deception-noting-hero",
      kind: "short",
      difficulty: "core",
      question:
        "In Act 4 Scene 1, immediately after Benedick promises 'Come, bid me do anything for thee,' Beatrice replies with just two words: 'Kill Claudio.' What grammatical sentence type (mood) is 'Kill Claudio', used to issue a direct command?",
      answer: {
        type: "text",
        accept: ["imperative", "imperative sentence", "imperative mood", "command", "imperative verb"],
        display: "imperative",
      },
      traps: [
        {
          spec: { type: "text", accept: ["interrogative", "question"] },
          feedback: "An interrogative asks a question; Beatrice is issuing a blunt, stark demand.",
        },
        {
          spec: { type: "text", accept: ["declarative", "statement"] },
          feedback: "A declarative states a fact; 'Kill Claudio' begins with a base verb issuing a direct order.",
        },
        {
          spec: { type: "text", accept: ["exclamative", "exclamation"] },
          feedback: "Look at the verb form at the start of the clause — it directly commands Benedick to act.",
        },
      ],
      hints: [
        "Notice how the sentence starts directly with a bare action verb ('Kill') aimed at 'you' (Benedick).",
        "Grammarians divide sentence moods into declarative, interrogative, exclamative, and this command form.",
      ],
      strategy: "Link grammatical mood to shifts in dramatic tension.",
      solution: [
        "A sentence beginning with a bare verb that gives a direct order is an **imperative**.",
        "Shakespeare uses the stark two-word imperative 'Kill Claudio' to snap the scene from tender comedy into deadly moral urgency.",
      ],
    },
    {
      id: "exam-shakespeare-q10",
      topicId: "much-ado-about-nothing",
      guideRef: "dogberry-analytical-essays",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "In *Much Ado About Nothing*, the bumbling constable Dogberry and his ordinary Watch uncover Don John's conspiracy, whereas high-status nobles like Don Pedro and Claudio fall completely for the trick. What structural irony does Shakespeare achieve through this contrast?",
      options: [
        "He mocks aristocratic arrogance by showing humble common sense outsmarting noble pride.",
        "He proves that Dogberry is secretly the sharpest legal scholar living in Messina.",
        "He suggests that Don John's plan was too harmless to threaten Hero's reputation.",
        "He demonstrates that comedy plays should avoid introducing serious moral stakes.",
      ],
      answerIndex: 0,
      hints: [
        "Compare the social status of the men who are fooled with the status of the men who catch the culprits.",
        "Remember that Dogberry is still genuinely muddled — so Shakespeare is poking fun at both pompous authority and blind noble vanity.",
      ],
      strategy: "Evaluate how subplots comment ironically on the main plot.",
      explanation:
        "By letting the clumsy, low-status Watch expose a plot that utterly fools the Prince and his celebrated soldier, Shakespeare satirises aristocratic overconfidence and reliance on superficial appearances. Dogberry is not portrayed as a secret scholar; rather, the nobles' pride blinds them so completely that even blundering honesty sees more clearly.",
    },
    {
      id: "exam-shakespeare-q11",
      topicId: "much-ado-about-nothing",
      guideRef: "deception-noting-hero",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      diagram: SVG_MUCH_ADO_ARC,
      question:
        "Read this extract from the climax of *Much Ado About Nothing* (Act 4 Scene 1), just after Hero has been publicly shamed at the altar:\n\n**BEATRICE:** Is he not approved in the height a villain, that hath slandered, scorned, dishonoured my kinswoman? O that I were a man! What, bear her in hand until they come to take hands; and then, with public accusation, uncovered slander, unmitigated rancour, — O God, that I were a man! I would eat his heart in the market-place. ... I cannot be a man with wishing, therefore I will die a woman with grieving.\n\nAnalyse how Shakespeare uses language, repetition, and Elizabethan gender expectations to heighten emotional conflict at this turning point in the play. (4 marks)",
      hints: [
        "Track the repeated exclamation 'O that I were a man' — why does Beatrice feel powerless?",
        "Zoom in on the violent imagery ('eat his heart in the market-place') and the tricolon of nouns describing Claudio's cruelty.",
        "Connect her frustration to Messina's patriarchal honour code, where only men could fight duels to defend family honour.",
      ],
      strategy: "Combine WHAT–HOW–WHY single-word zoom with contextual insight.",
      modelAnswer:
        "Shakespeare places Beatrice's fury at the emotional peak of the play to expose how patriarchal restrictions silence women when their honour is attacked. Her repeated cry of 'O that I were a man' uses anaphora and exclamatory rhythm to emphasise her rage and frustration at being legally and socially barred from fighting a duel herself. Furthermore, her tricolon of condemnation—'public accusation, uncovered slander, unmitigated rancour'—builds relentless momentum, stressing how Claudio weaponised public spectacle to destroy Hero. Finally, her visceral hyperbole to 'eat his heart in the market-place' clashes sharply with her bleak concluding antithesis between 'wishing' and 'grieving', highlighting that without male agency she must rely on Benedick to seek justice.",
      markScheme: [
        {
          point: "Identifies Beatrice's frustration with patriarchal / gender powerlessness (unable to duel or defend Hero directly).",
          keywords: ["patriarch", "powerless", "gender", "duel", "barred", "agency", "silenc", "male"],
        },
        {
          point: "Analyses the repetition / exclamation ('O that I were a man') to show mounting anger or desperation.",
          keywords: ["repetit", "anaphora", "exclam", "rage", "fury", "anger", "desperat", "frustrat"],
        },
        {
          point: "Zooms into violent hyperbole ('eat his heart') OR the tricolon / listing of Claudio's public cruelty.",
          keywords: ["hyperbole", "visceral", "violent", "tricolon", "list", "spectacle", "market", "public"],
        },
        {
          point: "Explains the structural contrast / antithesis at the end ('wishing' vs 'grieving') or the sudden tonal shift from comedy to tragic tension.",
          keywords: ["antithesis", "contrast", "griev", "turn", "tragic", "shift", "peak", "climax"],
        },
      ],
      commonError: "Retelling what happened to Hero at the wedding instead of zooming into Shakespeare's specific words and structures.",
    },
    {
      id: "exam-shakespeare-q12",
      topicId: "much-ado-about-nothing",
      guideRef: "dogberry-analytical-essays",
      kind: "written",
      difficulty: "core",
      marks: 3,
      question:
        "Read Beatrice's solo speech in Act 3 Scene 1 of *Much Ado About Nothing*, immediately after she overhears Hero and Ursula claiming Benedick loves her:\n\n**BEATRICE:** What fire is in mine ears? Can this be true?\nStand I condemned for pride and scorn so much?\nContempt, farewell! and maiden pride, adieu!\nNo glory lives behind the back of such.\n\nUsing WHAT–HOW–WHY, explain how Shakespeare's sudden switch from prose into rhymed verse marks an emotional turning point for Beatrice. (3 marks)",
      hints: [
        "Remember how Beatrice normally speaks throughout Acts 1 and 2 — prose or verse?",
        "Notice the ABAB rhyme scheme ('true/adieu', 'much/such') and her rhetorical questions at the start.",
        "Explain WHY Shakespeare changes her form here: what does bidding 'farewell' to 'Contempt' reveal about her guarded armour?",
      ],
      strategy: "Link dramatic form shifts directly to character development.",
      modelAnswer:
        "Shakespeare uses Beatrice's abrupt shift from her usual sharp prose into structured, rhyming iambic verse to signal that her defensive emotional armour has finally cracked. First, her opening rhetorical questions ('Can this be true?') and burning metaphor ('fire') capture vulnerable shock as she confronts how others perceive her wit. Second, personifying and dismissing 'Contempt' and 'maiden pride' with parallel farewells shows a deliberate choice to let go of mockery. By elevating her speech into musical ABAB rhyme, Shakespeare alerts the audience that Beatrice's feelings are sincere and transformative, moving her closer to romantic vulnerability.",
      markScheme: [
        {
          point: "Identifies the structural shift from prose to rhymed verse / iambic pentameter as a sign of deep emotional change or vulnerability.",
          keywords: ["shift", "switch", "prose", "rhyme", "verse", "vulnerab", "armour", "crack"],
        },
        {
          point: "Analyses a specific language method from the extract (e.g. rhetorical questions, 'fire' metaphor, or personification of 'Contempt'/'pride').",
          keywords: ["rhetorical", "metaphor", "fire", "personif", "parallel", "farewell", "question"],
        },
        {
          point: "Explains the wider dramatic effect on the audience (showing sincerity, softening her cynicism, or mirroring Benedick's transformation).",
          keywords: ["audience", "sincer", "soften", "transform", "romantic", "honest", "genuine"],
        },
      ],
      commonError: "Stating 'Shakespeare uses rhyme to make it sound nice' without linking the form shift to Beatrice's inner change.",
    },
    {
      id: "exam-shakespeare-q13",
      topicId: "merchant-of-venice",
      guideRef: "venice-belmont-context",
      kind: "mcq",
      difficulty: "warmup",
      question:
        "In *The Merchant of Venice*, Portia's suitors must choose between gold, silver, and lead caskets. The winning lead casket reads: 'Who chooseth me must give and hazard all he hath.' Why do the Princes of Morocco and Arragon fail this test?",
      options: [
        "They secretly work for Shylock and hope to ruin Portia's father's estate.",
        "They refuse to swear the oath required before opening any of the caskets.",
        "They judge by glittering outward appearances and pride rather than risk.",
        "They misread the Italian inscriptions because they cannot speak Venetian.",
      ],
      answerIndex: 2,
      hints: [
        "Think about what Morocco chooses (gold) and what Arragon chooses (silver).",
        "Recall the famous warning inside the gold casket: 'All that glisters is not gold.'",
      ],
      strategy: "Connect plot devices (the casket test) to core themes.",
      explanation:
        "Morocco equates Portia with glittering gold and Arragon claims silver because he assumes he 'deserves' it; both are blinded by vanity and outward display. Only Bassanio looks past dull lead and embraces genuine risk ('give and hazard'), illustrating the play's theme of appearance versus reality.",
    },
    {
      id: "exam-shakespeare-q14",
      topicId: "merchant-of-venice",
      guideRef: "venice-belmont-context",
      kind: "short",
      difficulty: "warmup",
      question:
        "In *The Merchant of Venice*, Antonio prides himself on lending money free of charge while denouncing Shylock's profession of lending money at interest. Name the historical term for lending money at interest.",
      answer: {
        type: "text",
        accept: ["usury", "moneylending", "money lending", "money-lending"],
        display: "usury",
      },
      traps: [
        {
          spec: { type: "text", accept: ["forfeit", "bond", "penalty"] },
          feedback: "A bond or forfeit is the legal contract or penalty; this term specifically names the practice of charging interest on loans.",
        },
        {
          spec: { type: "text", accept: ["dowry", "tribute"] },
          feedback: "A dowry relates to marriage inheritance; look for the financial term associated with charging interest in Renaissance Venice.",
        },
      ],
      hints: [
        "Elizabethan Christians viewed charging interest on loans as sinful, yet Venetian trade depended on credit.",
        "The five-letter word begins with 'u' and is linked to Shylock's 'usances'.",
      ],
      strategy: "Recall precise historical vocabulary for Renaissance Venice.",
      solution: [
        "Lending money at interest in Renaissance Europe was known as **usury**.",
        "Because Jewish citizens in Venice were barred from most guilds and land ownership, usury was one of the few livelihoods permitted to Shylock.",
      ],
    },
    {
      id: "exam-shakespeare-q15",
      topicId: "merchant-of-venice",
      guideRef: "shylock-villain-or-victim",
      kind: "short",
      difficulty: "core",
      question:
        "In Act 1 Scene 3 of *The Merchant of Venice*, while Antonio and Bassanio remain onstage, Shylock turns briefly to speak directly to the audience: 'How like a fawning publican he looks! / I hate him for he is a Christian.' Name this stage convention for a remark heard by the audience but not by other characters onstage.",
      answer: {
        type: "text",
        accept: ["aside", "an aside", "dramatic aside"],
        display: "aside",
      },
      traps: [
        {
          spec: { type: "text", accept: ["soliloquy", "a soliloquy"] },
          feedback: "A soliloquy is spoken when a character is completely alone onstage; here Antonio and Bassanio are still present.",
        },
        {
          spec: { type: "text", accept: ["prologue", "epilogue"] },
          feedback: "Prologues and epilogues frame the start or end of a play, not private mid-scene remarks.",
        },
      ],
      hints: [
        "Unlike a soliloquy, other characters are standing right there on stage — they simply cannot hear it.",
        "The single-word term literally means stepping slightly to one side to confide in the audience.",
      ],
      strategy: "Differentiate aside from soliloquy using stage presence.",
      solution: [
        "A private speech delivered to the audience while other characters remain onstage unheard is an **aside**.",
        "Shylock's aside immediately establishes the tense gulf between his polite outward bargaining and his simmering resentment.",
      ],
    },
    {
      id: "exam-shakespeare-q16",
      topicId: "merchant-of-venice",
      guideRef: "shylock-villain-or-victim",
      kind: "mcq",
      difficulty: "core",
      question:
        "Read this progression from Shylock's speech in Act 3 Scene 1 of *The Merchant of Venice*:\n\n'Hath not a Jew eyes? ... If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?'\n\nHow does Shakespeare's deliberate shift at the final question complicate the audience's sympathy?",
      options: [
        "It shows Shylock abandoning his legal claim so he can reconcile peacefully with Antonio.",
        "It moves from undeniable shared humanity into ruthless vengeance learned from his tormentors.",
        "It proves that Shylock never truly experienced prejudice or mistreatment in Venice.",
        "It turns the entire speech into lighthearted banter meant to amuse Solanio and Salarino.",
      ],
      answerIndex: 1,
      hints: [
        "Look at the first three 'If you...' questions versus the fourth one.",
        "Ask yourself: does Shylock plead for mercy at the end, or argue that Christians taught him the logic of revenge?",
      ],
      strategy: "Track tonal pivots inside a character's argument.",
      explanation:
        "Shakespeare first earns deep moral sympathy by forcing listeners to acknowledge Shylock's common physical humanity ('bleed', 'laugh', 'die'), then sharply pivots to 'shall we not revenge?'—casting Shylock simultaneously as a victim of cruelty and an ominous avenger mirroring Christian hypocrisy.",
    },
    {
      id: "exam-shakespeare-q17",
      topicId: "merchant-of-venice",
      guideRef: "shylock-villain-or-victim",
      kind: "short",
      difficulty: "core",
      question:
        "In 'If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die?', Shylock fires a series of questions whose answers are obvious, needing no reply, to corner his listeners morally. Name this persuasive technique.",
      answer: {
        type: "text",
        accept: ["rhetorical question", "rhetorical questions", "erotema"],
        display: "rhetorical questions",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hypophora"] },
          feedback: "In hypophora, the speaker explicitly answers their own question; here Shylock leaves the obvious 'yes' hanging in the air.",
        },
        {
          spec: { type: "text", accept: ["imperative", "imperatives"] },
          feedback: "Imperatives issue commands, whereas these clauses are framed with question marks to compel silent agreement.",
        },
      ],
      hints: [
        "Notice each sentence ends with a question mark, yet Shylock does not pause for Solanio or Salarino to reply.",
        "This two-word term names a question asked purely for persuasive effect rather than information.",
      ],
      strategy: "Match persuasive syntax to its exact analytical label.",
      solution: [
        "Questions asked for persuasive force when the answer is self-evident are **rhetorical questions**.",
        "Stacking them in parallel syntax traps Shylock's listeners—and the theatre audience—into conceding his equal humanity.",
      ],
    },
    {
      id: "exam-shakespeare-q18",
      topicId: "merchant-of-venice",
      guideRef: "venice-belmont-context",
      kind: "mcq",
      difficulty: "core",
      diagram: SVG_VENICE_BELMONT,
      question:
        "Study the diagram contrasting Venice and Belmont in *The Merchant of Venice*. Why does Shakespeare alternate scenes rapidly between these two settings rather than keeping the entire drama inside Venice?",
      options: [
        "To let minor comic servants dominate the plot whenever Portia leaves the stage.",
        "To prove that Belmont exists outside economic wealth and never requires money.",
        "To prevent Antonio and Bassanio from ever speaking to one another in Act 1.",
        "To sharpen the thematic clash between rigid commerce and lyrical ideals of love.",
      ],
      answerIndex: 3,
      hints: [
        "Look at the two columns in the diagram: strict written bonds on the left versus caskets, music, and mercy on the right.",
        "Check whether Belmont is genuinely free of money—remember Bassanio borrows 3,000 ducats just to woo Portia there!",
      ],
      strategy: "Analyse structural juxtaposition of contrasting dramatic settings.",
      explanation:
        "Alternating between Venice and Belmont structurally juxtaposes harsh commercial contracts and religious tension against fairy-tale romance and mercy—while subtly showing that the two worlds remain entangled, since Belmont's luxury still relies on Venetian money.",
    },
    {
      id: "exam-shakespeare-q19",
      topicId: "merchant-of-venice",
      guideRef: "portia-trial-mercy-justice",
      kind: "short",
      difficulty: "core",
      question:
        "In Act 4 Scene 1 of *The Merchant of Venice*, Portia appeals to Shylock: 'The quality of mercy is not strained; / It droppeth as the gentle rain from heaven / Upon the place beneath.' Name the figurative language device used in 'as the gentle rain from heaven'.",
      answer: {
        type: "text",
        accept: ["simile", "a simile"],
        display: "simile",
      },
      traps: [
        {
          spec: { type: "text", accept: ["metaphor", "extended metaphor"] },
          feedback: "Watch the connecting word 'as' — an explicit comparison using 'like' or 'as' is a simile rather than a direct metaphor.",
        },
        {
          spec: { type: "text", accept: ["personification"] },
          feedback: "Mercy is compared directly to falling rain using 'as', rather than being given human limbs or speech.",
        },
      ],
      hints: [
        "Spot the explicit comparison word linking mercy to 'the gentle rain from heaven'.",
        "Comparisons built with 'like' or 'as' take this six-letter name.",
      ],
      strategy: "Distinguish explicit comparisons from direct metaphors.",
      solution: [
        "Because Portia compares mercy to 'gentle rain' using the word **as**, the device is a **simile**.",
        "The natural image implies that mercy should fall freely, effortlessly, and universally—never forced by law.",
      ],
    },
    {
      id: "exam-shakespeare-q20",
      topicId: "merchant-of-venice",
      guideRef: "portia-trial-mercy-justice",
      kind: "mcq",
      difficulty: "core",
      question:
        "At the climax of the trial scene (Act 4 Scene 1), Portia declares that Shylock's bond grants 'a pound of flesh' yet 'no jot of blood', turning his own demand for strict legality against him. What uneasy tension does the court's subsequent punishment of Shylock expose?",
      options: [
        "The court praises Christian mercy yet strips Shylock of wealth and forces conversion.",
        "The Duke immediately cancels Antonio's trade debts and rewards Shylock with gold.",
        "Portia breaks Venetian law completely by tearing up the signed bond in public.",
        "Bassanio refuses to accept the verdict because he wanted Shylock to win the case.",
      ],
      answerIndex: 0,
      hints: [
        "Recall what happens to Shylock's property and religious identity straight after Portia traps him on the loophole.",
        "Compare Portia's poetic speech about 'gentle rain' with how generously—or harshly—the court actually treats the defeated outsider.",
      ],
      strategy: "Evaluate dramatic contradictions between words and outcomes.",
      explanation:
        "Although Portia eloquently celebrates mercy as freely given and 'twice blest', once the legal trap springs shut, Shylock loses his livelihood, half his estate goes to Antonio in trust, and Antonio demands his forced conversion—leaving modern audiences questioning whether Venetian 'mercy' is truly merciful.",
    },
    {
      id: "exam-shakespeare-q21",
      topicId: "merchant-of-venice",
      guideRef: "bonds-loyalty-essay-craft",
      kind: "short",
      difficulty: "core",
      question:
        "In Acts 3 to 5 of *The Merchant of Venice*, the rings Portia and Nerissa place on Bassanio's and Gratiano's fingers represent marital loyalty, trust, and binding vows. What literary term describes a concrete object used to stand for an abstract idea?",
      answer: {
        type: "text",
        accept: ["symbol", "a symbol", "symbolism", "stage symbol", "motif"],
        display: "symbol",
      },
      traps: [
        {
          spec: { type: "text", accept: ["foreshadowing"] },
          feedback: "Foreshadowing hints at future plot events; here a physical stage prop stands for an abstract theme like loyalty.",
        },
        {
          spec: { type: "text", accept: ["pathetic fallacy"] },
          feedback: "Pathetic fallacy projects emotion onto weather or nature, not onto a crafted prop like a wedding ring.",
        },
      ],
      hints: [
        "Think about how a tangible object onstage carries a deeper thematic meaning beyond its metal value.",
        "When the rings return in Act 5, they test whether Bassanio values friendship or marriage more deeply.",
      ],
      strategy: "Identify physical stage props carrying abstract thematic weight.",
      solution: [
        "A physical object representing an abstract quality such as fidelity or commitment is a **symbol** (or **symbolism**).",
        "By staging the ring crisis in Act 5, Shakespeare echoes Venice's financial bonds in a lighter, marital key.",
      ],
    },
    {
      id: "exam-shakespeare-q22",
      topicId: "merchant-of-venice",
      guideRef: "shylock-villain-or-victim",
      kind: "short",
      difficulty: "challenge",
      question:
        "During the trial scene (Act 4 Scene 1), the audience knows that the brilliant 'young doctor of Rome', Balthazar, is actually Portia in disguise, while Bassanio praises Balthazar without recognising his own wife. Name the two-word dramatic technique created by this gap in knowledge.",
      answer: {
        type: "text",
        accept: ["dramatic irony"],
        display: "dramatic irony",
      },
      traps: [
        {
          spec: { type: "text", accept: ["verbal irony", "sarcasm"] },
          feedback: "Verbal irony is saying the opposite of what one means; here the effect comes from the audience knowing a truth hidden from characters onstage.",
        },
        {
          spec: { type: "text", accept: ["situational irony"] },
          feedback: "Be precise for theatre: when the audience knows a secret that characters onstage do not, it is specifically dramatic irony.",
        },
      ],
      hints: [
        "Focus on the difference between what the audience knows and what Bassanio knows.",
        "This two-word phrase appears in both comedies and tragedies whenever disguises or secrets are onstage.",
      ],
      strategy: "Recognise how disguise creates layered audience awareness.",
      solution: [
        "When the audience possesses vital knowledge hidden from characters onstage, Shakespeare creates **dramatic irony**.",
        "It adds sharp dark humour when Bassanio vows he would even sacrifice his wife to save Antonio—right in front of Portia herself.",
      ],
    },
    {
      id: "exam-shakespeare-q23",
      topicId: "merchant-of-venice",
      guideRef: "bonds-loyalty-essay-craft",
      kind: "mcq",
      difficulty: "challenge",
      question:
        "You are writing a Year 9 extract essay on how Shakespeare presents bonds and loyalty in *The Merchant of Venice*. Which opening thesis statement is the strongest conceptual argument rather than plot retelling or vague feature-spotting?",
      options: [
        "In this play, Antonio borrows three thousand ducats from Shylock so Bassanio can travel to Belmont.",
        "Shakespeare uses lots of metaphors, similes, and blank verse throughout the entire fourth act.",
        "Shakespeare exposes how Venetian bonds blur affection and money, testing whether loyalty outlives self-interest.",
        "The Merchant of Venice is a very famous Shakespearean play that has many interesting characters in it.",
      ],
      answerIndex: 2,
      hints: [
        "A top-band thesis argues a clear *idea* about the writer's purpose, not just what happens in the plot.",
        "Eliminate any option that only summarises events, makes empty praise, or lists techniques without linking them to meaning.",
      ],
      strategy: "Distinguish conceptual thesis statements from plot summary.",
      explanation:
        "A strong thesis makes an arguable conceptual claim about Shakespeare's thematic purpose—here, showing how financial and personal bonds overlap and test loyalty. Simply stating that Antonio borrows ducats is plot retelling, while listing 'metaphors and similes' without an argument is feature-spotting.",
    },
    {
      id: "exam-shakespeare-q24",
      topicId: "merchant-of-venice",
      guideRef: "shylock-villain-or-victim",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Read this extract from Act 1 Scene 3 of *The Merchant of Venice*, where Shylock confronts Antonio over past abuse before agreeing to the loan:\n\n**SHYLOCK:** Fair sir, you spet on me on Wednesday last;\nYou spurned me such a day; another time\nYou called me dog; and for these courtesies\nI'll lend you thus much moneys?\n\nAnalyse how Shakespeare presents Shylock's resentment and dignity here, and explain why Elizabethan and modern audiences might judge his character differently. (4 marks)",
      hints: [
        "Examine the bitter verbal irony in calling spitting and insults 'Fair sir' and 'courtesies'.",
        "Zoom in on the dehumanising noun 'dog' and the rhythmic listing of repeated humiliations ('Wednesday last', 'such a day', 'another time').",
        "Contrast an Elizabethan audience steeped in anti-Semitic stereotypes with a modern post-Holocaust audience alert to prejudice.",
      ],
      strategy: "Weave close word-level analysis with shifting audience context.",
      modelAnswer:
        "Shakespeare crafts Shylock as a dignified yet deeply embittered outsider whose anger grows out of systematic humiliation. First, his biting sarcasm in addressing Antonio as 'Fair sir' and mocking abuse as 'courtesies' uses verbal irony to expose Christian hypocrisy, inverting polite Venetian manners. Second, recalling the dehumanising slur 'dog' alongside a measured calendar of insults ('Wednesday last', 'another time') suggests that Antonio's prejudice is habitual rather than an isolated slip, lending Shylock sharp moral authority. While many Elizabethan theatregoers conditioned by anti-Semitic stereotypes might still have viewed Shylock primarily as a comic or threatening villain, modern audiences are far more likely to sympathise with him as a mistreated victim whose later thirst for vengeance stems from society's cruelty.",
      markScheme: [
        {
          point: "Analyses Shylock's biting sarcasm / verbal irony ('Fair sir', 'courtesies') exposing Antonio's hypocrisy.",
          keywords: ["irony", "sarcas", "hypocri", "mock", "bitter", "invert", "polite"],
        },
        {
          point: "Zooms into dehumanising language ('dog') or the cumulative list of repeated mistreatment.",
          keywords: ["dehumanis", "animal", "slur", "habitual", "repeat", "humiliat", "list", "prejudic"],
        },
        {
          point: "Considers Elizabethan audience reactions (anti-Semitic stereotypes / viewing him as a villain or comic antagonist).",
          keywords: ["elizabethan", "stereotyp", "anti-semit", "antisemit", "villain"],
        },
        {
          point: "Contrasts with modern audience reactions (greater sympathy for a victim of discrimination / moral complexity).",
          keywords: ["modern", "sympath", "victim", "discriminat", "complex", "tragic"],
        },
      ],
      commonError: "Writing only about Shylock's later pound of flesh without analysing the specific irony and diction in this Act 1 extract.",
    },
    {
      id: "exam-shakespeare-q25",
      topicId: "merchant-of-venice",
      guideRef: "portia-trial-mercy-justice",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      question:
        "Read this extract from Portia's courtroom appeal in Act 4 Scene 1 of *The Merchant of Venice*:\n\n**PORTIA:** The quality of mercy is not strained;\nIt droppeth as the gentle rain from heaven\nUpon the place beneath: it is twice blest;\nIt blesseth him that gives and him that takes.\n\nAnalyse how Shakespeare uses imagery, balance, and persuasive register to elevate mercy above strict legal revenge—and briefly evaluate one irony in how the trial concludes. (4 marks)",
      hints: [
        "Unpack the natural simile 'gentle rain from heaven' — what connotations do 'gentle' and 'heaven' carry?",
        "Notice the balanced parallel phrasing in 'him that gives and him that takes' and the religious weight of 'blest'.",
        "Remember the final part of the prompt: evaluate how merciful Portia and the Venetian court actually turn out to be once Shylock loses.",
      ],
      strategy: "Combine close poetic analysis with critical evaluation of dramatic outcome.",
      modelAnswer:
        "Shakespeare elevates mercy into a divine, life-giving force that transcends rigid courtroom contracts. The natural simile comparing mercy to 'gentle rain' portrays forgiveness as organic, nourishing, and freely bestowed—in stark contrast to Shylock's 'strained' and mechanical insistence on the written letter of the law. In addition, the religious diction of 'heaven' and 'twice blest' infuses Portia's persuasive register with spiritual authority, while the balanced antithesis of 'gives' and 'takes' frames compassion as mutually enriching rather than a sign of weakness. Yet the trial's ending introduces a troubling contradiction: once Portia springs her legal loophole, the Christian court shows little genuine compassion, stripping Shylock of his livelihood and forcing his conversion, which undermines the very ideal Portia praised.",
      markScheme: [
        {
          point: "Analyses the natural simile ('gentle rain') showing mercy as organic, nourishing, and unforced compared to rigid law.",
          keywords: ["simile", "natural", "nourish", "organic", "freely", "unforced", "rigid", "rain"],
        },
        {
          point: "Explores religious diction ('heaven', 'twice blest') elevating mercy with spiritual or moral authority.",
          keywords: ["religio", "divine", "spiritual", "sacred", "moral", "blest", "heaven"],
        },
        {
          point: "Comments on parallel balance / antithesis ('gives' and 'takes') presenting mercy as mutually beneficial.",
          keywords: ["parallel", "balanc", "antithesis", "mutual", "both", "weakness", "enrich"],
        },
        {
          point: "Evaluates the irony or hypocrisy in the trial's outcome (harsh punishment, loss of livelihood, or forced conversion of Shylock).",
          keywords: ["contradict", "irony", "hypocri", "undermine", "loophole", "convers", "harsh", "punish", "livelihood"],
        },
      ],
      commonError: "Praising Portia's speech uncritically and forgetting the final evaluative point about how Shylock is treated afterwards.",
    },
  ],
};
