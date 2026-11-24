import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "merchant-of-venice-m1",
    title: "MCQ Paper 1 — Venice vs Belmont, Context & the Caskets",
    questions: [
      {
        id: "merchant-of-venice-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "venice-belmont-context",
        question:
          "Who is the title character — the actual *'Merchant of Venice'* — whose ships (*argosies*) carry cargo across the seas?",
        options: [
          "Shylock",
          "Antonio",
          "Bassanio",
          "Gratiano",
        ],
        answerIndex: 1,
        hints: ["He opens the play saying 'In sooth, I know not why I am so sad.'"],
        explanation:
          "**Antonio** is the maritime shipping merchant of the title. **Shylock** is the Jewish moneylender — a common trap that Portia deliberately plays on when she asks *'Which is the merchant here, and which the Jew?'*",
      },
      {
        id: "merchant-of-venice-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "venice-belmont-context",
        question:
          "How does Shakespeare establish a sharp structural contrast between **Venice** and **Belmont** across the play?",
        options: [
          "Venice is ruled by Portia's father; Belmont is a naval fortress",
          "Venice uses only rhyming verse; Belmont is written wholly in prose",
          "Venice is a rural village of farmers; Belmont is a crowded trading port",
          "Venice embodies commerce and strict law; Belmont evokes romance and music",
        ],
        answerIndex: 3,
        hints: [
          "Compare the Rialto exchange and courtroom with Portia's moonlit country estate.",
        ],
        explanation:
          "Shakespeare sets mercantile, legalistic **Venice** (ducats, contracts, usury, religious tension) against fairy-tale **Belmont** (romance, music, moonlight, caskets) — while subtly revealing that money connects both worlds.",
      },
      {
        id: "merchant-of-venice-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "venice-belmont-context",
        question:
          "In Act 1, Scene 1, Bassanio introduces Portia to Antonio: *'In Belmont is a lady richly left, / And she is fair, and, fairer than that word, / Of wondrous virtues.'* What does placing *'richly left'* first imply?",
        options: [
          "Financial rescue and romance are intertwined in Bassanio's motives",
          "Portia recently lost her father's estate to Venetian creditors",
          "Bassanio dislikes wealthy heiresses and prefers a modest dowry",
          "Antonio ordered Bassanio to marry solely for maritime shipping rights",
        ],
        answerIndex: 0,
        hints: [
          "Notice the exact order of Bassanio's three praises: wealth → beauty → virtue.",
          "Remember that Bassanio is deeply in debt and asking Antonio for another loan.",
        ],
        explanation:
          "Mentioning Portia's inheritance (*'richly left'*) before her beauty or goodness exposes that even romantic Belmont is shaped by financial ambition — blurring the contrast with commercial Venice.",
      },
      {
        id: "merchant-of-venice-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "venice-belmont-context",
        question:
          "In Act 1, Scene 2, Portia laments: *'so is the will of a living daughter curbed by the will of a dead father.'* Which combination of devices sharpens her frustration?",
        options: [
          "Comic malapropism and maritime metaphor",
          "Dramatic irony and rhyming couplets",
          "Pun on 'will', antithesis and controlling verb 'curbed'",
          "Hyperbolic simile and military alliteration",
        ],
        answerIndex: 2,
        hints: [
          "Notice how 'will' means personal desire first, then legal testament second.",
          "Look at the direct contrast between 'living daughter' and 'dead father'.",
        ],
        explanation:
          "Shakespeare packs a crisp **pun** on *'will'*, balanced **antithesis** (*'living daughter'* vs *'dead father'*), and the equestrian verb *'curbed'* (reining in a horse) to convey patriarchal control over female autonomy.",
      },
      {
        id: "merchant-of-venice-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "venice-belmont-context",
        question:
          "Why did **usury** (lending money at interest) sit at the centre of Venetian religious and economic tension?",
        options: [
          "Christians condemned interest yet barred Jews from most other trades",
          "Venetian law forced Christian merchants to charge 50% interest",
          "Shylock refused to lend money to anyone living outside Belmont",
          "Antonio secretly ran Venice's largest interest-charging bank on the Rialto",
        ],
        answerIndex: 0,
        hints: [
          "Recall how Renaissance Christian teaching viewed charging interest vs how Venetian trade relied on credit.",
          "Remember what professions Venetian Jews confined to the Ghetto were permitted to practise.",
        ],
        explanation:
          "Christian doctrine branded usury sinful, yet Venice's booming trade needed credit; by restricting Jews to the Ghetto and moneylending, Venetian society relied on Jewish financiers while condemning them for it.",
      },
      {
        id: "merchant-of-venice-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "venice-belmont-context",
        question:
          "What mood does Shakespeare create in the play's very first line, spoken by Antonio: *'In sooth, I know not why I am so sad'*?",
        options: [
          "Boisterous festival cheer ahead of Bassanio's wedding banquet",
          "Furious public outrage over a stolen cargo ship",
          "Quiet, unexplained melancholy hinting at isolation and looming danger",
          "Playful comic banter mimicking a lighthearted romantic subplot",
        ],
        answerIndex: 2,
        hints: [
          "Notice that a comedy opens with mysterious sadness rather than laughter.",
        ],
        explanation:
          "Opening with Antonio's unexplained melancholy immediately sets a brooding, uneasy tone — foreshadowing both his risky bond with Shylock and his lonely cyclical ending in Act 5.",
      },
      {
        id: "merchant-of-venice-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "portia-trial-mercy-justice",
        question:
          "In the Three Caskets test, the Prince of Morocco chooses **Gold** (*'Who chooseth me shall gain what many men desire'*). What does he discover inside?",
        options: [
          "A silver mirror reflecting his royal crown",
          "A scroll awarding him half of Venice's fleet",
          "A miniature portrait of Portia in mourning dress",
          "A skull with the warning 'All that glisters is not gold'",
        ],
        answerIndex: 3,
        hints: [
          "Gold represents glittering outward attraction hiding inner decay.",
          "Recall the famous proverb coined on Morocco's scroll.",
        ],
        explanation:
          "Inside the gleaming gold casket sits a **carrion Death (skull)** carrying a scroll beginning *'All that glisters is not gold'* — dramatically embodying the play's **appearance vs reality** motif.",
      },
      {
        id: "merchant-of-venice-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "portia-trial-mercy-justice",
        question:
          "Why does the Prince of Arragon fail when he picks the **Silver** casket (*'Who chooseth me shall get as much as he deserves'*)?",
        options: [
          "Because he accidentally drops the key before unlocking the lid",
          "Because arrogant self-regard blinds him, earning a blinking idiot's portrait",
          "Because Portia secretly swaps the silver scroll for a blank sheet",
          "Because he admits he values Venetian ducats higher than Portia's hand",
        ],
        answerIndex: 1,
        hints: [
          "Look at the inscription's emphasis on 'as much as he deserves'.",
          "Think about the flaw of assuming you naturally merit the highest prize.",
        ],
        explanation:
          "Arragon pompously assumes *'I will assume desert'* (I deserve the best), revealing conceited pride — so the silver casket mocks his vanity with the portrait of a blinking idiot.",
      },
      {
        id: "merchant-of-venice-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "portia-trial-mercy-justice",
        question:
          "Before picking the **Lead** casket in Act 3, Scene 2, Bassanio reflects: *'So may the outward shows be least themselves: / The world is still deceived with ornament.'* Why does this speech earn him Portia's portrait?",
        options: [
          "He obeys a secret letter Nerissa slipped into his pocket",
          "He calculates that lead weighs more than silver or gold",
          "He rejects glittering surface illusion and risks all on inner worth",
          "He threatens to leave Belmont unless Portia unlocks all three chests",
        ],
        answerIndex: 2,
        hints: [
          "Read the Lead inscription: 'Who chooseth me must give and hazard all he hath.'",
          "Connect 'deceived with ornament' to the play's core appearance-vs-reality theme.",
        ],
        explanation:
          "Bassanio sees past flashy *'ornament'* and accepts the humble Lead casket's demand to *'give and hazard all he hath'* — proving he can look beneath surface show (though ironically funded by Antonio's loan!).",
      },
      {
        id: "merchant-of-venice-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "venice-belmont-context",
        question:
          "In Act 1, Scene 3, what exact sum and penalty make up Shylock's 'merry bond' with Antonio?",
        options: [
          "3,000 ducats for three months; forfeit of an equal pound of flesh",
          "1,000 ducats for one year; forfeit of all four Venetian cargo ships",
          "6,000 ducats for six months; forfeit of Antonio's Belmont estate",
          "9,000 ducats for three weeks; forfeit of Bassanio's wedding ring",
        ],
        answerIndex: 0,
        hints: [
          "Remember Shylock's eerie opening repetition: 'Three thousand ducats — well.'",
          "Recall the notorious penalty demanded if Antonio defaults.",
        ],
        explanation:
          "Shylock lends **3,000 ducats for three months** with zero interest, setting the chilling penalty of **'an equal pound of your fair flesh'** disguised as a *'merry sport'*.",
      },
      {
        id: "merchant-of-venice-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "venice-belmont-context",
        question:
          "In Act 1, Scene 3, Antonio dismisses Shylock's biblical story of Jacob and Laban's sheep by telling Bassanio: *'The devil can cite Scripture for his purpose.'* What does this line reveal about Antonio?",
        options: [
          "Antonio secretly admires Shylock's deep knowledge of theology",
          "Antonio wants to convert to Judaism before signing the contract",
          "Antonio doubts whether Bassanio can repay the loan in Belmont",
          "Antonio dehumanises Shylock with demonic religious prejudice even while borrowing",
        ],
        answerIndex: 3,
        hints: [
          "Notice the word 'devil' applied directly to the man whose money Antonio desperately needs.",
          "Think about how this religious slur feeds the play's cycle of hostility.",
        ],
        explanation:
          "Equating Shylock with *'the devil'* demonstrates how deeply ingrained Venetian antisemitism is: even while asking Shylock for 3,000 ducats, Antonio demonises his faith and character.",
      },
      {
        id: "merchant-of-venice-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "venice-belmont-context",
        question:
          "What dramatic role does Shylock's comic servant **Launcelot Gobbo** play in Act 2 when he debates between *'conscience'* and *'the fiend'* before leaving Shylock for Bassanio?",
        options: [
          "He steals the legal bond scroll and delivers it straight to the Duke",
          "He supplies comic relief while echoing Christian prejudice against Shylock",
          "He persuades Shylock to forgive Antonio's debt without a courtroom trial",
          "He disguises himself as Portia's law clerk alongside Nerissa in Venice",
        ],
        answerIndex: 1,
        hints: [
          "Think about Launcelot's clownish malapropisms and calling his Jewish master 'a kind of devil'.",
          "He mirrors how casually Venetian society repeats religious stereotypes even in comedy.",
        ],
        explanation:
          "Launcelot Gobbo delivers clownish comic relief and malapropisms, yet his joking description of Shylock as *'the very devil incarnation'* also reveals how casually antisemitic tropes permeate everyday Venice.",
      },
      {
        id: "merchant-of-venice-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "venice-belmont-context",
        question:
          "Why does Bassanio compare winning Portia in Act 1, Scene 1 to Jason's quest for the *'golden fleece'*?",
        options: [
          "The mythological allusion glamorises his quest while hinting it chases golden treasure",
          "He plans to sail Antonio's wool ships from Venice to Greece before wooing",
          "Portia's late father hid a literal sheepskin inside the lead casket",
          "He warns Antonio that Belmont's suitors are violent pirates from Colchis",
        ],
        answerIndex: 0,
        hints: [
          "Think of BOTH connotations of 'golden fleece': heroic classical quest AND gleaming gold wealth.",
          "Notice how this backs up his earlier phrase 'a lady richly left'.",
        ],
        explanation:
          "Calling Portia's hair a *'golden fleece'* elevates Bassanio's wooing with epic mythology while subtly betraying his pursuit of financial treasure (*golden*) — linking Belmont directly to commercial appetite.",
      },
      {
        id: "merchant-of-venice-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "In Act 2, Scene 3, Jessica whispers *'Our house is hell'* before eloping with Lorenzo. Why is Jessica's escape morally complex for audiences?",
        options: [
          "She leaves behind a note ordering Antonio's ships to be sunk",
          "She returns home before sunrise and betrays Lorenzo to the Duke",
          "She gains romantic freedom yet steals her father's ducats and Leah's ring",
          "She refuses to convert or leave Venice until Shylock blesses the match",
        ],
        answerIndex: 2,
        hints: [
          "Consider both why Jessica feels trapped AND what she takes with her when she climbs out the window.",
          "Remember how Shylock reacts in Act 3, Scene 1 when he learns she traded Leah's ring for a monkey.",
        ],
        explanation:
          "Shakespeare avoids simple hero-versus-villain framing: Jessica escapes a strict, joyless household for love, yet her theft of Shylock's wealth and casual bartering of her dead mother's turquoise ring fuel Shylock's shattering grief and rage.",
      },
      {
        id: "merchant-of-venice-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "venice-belmont-context",
        question:
          "In Act 1, Scene 2, when Portia mocks the Prince of Morocco's *'complexion of a devil'* privately to Nerissa, what does this uncomfortable line suggest to modern critics?",
        options: [
          "Portia genuinely believes Morocco is Shylock's secret business partner",
          "Shakespeare intended Morocco to win the lead casket in early drafts",
          "Belmont's residents hold zero biases compared with Venice's merchants",
          "Even charming, witty Belmont shares Venetian society's racial and outsider prejudices",
        ],
        answerIndex: 3,
        hints: [
          "Look at whether Belmont is truly a completely pure utopia free from Elizabethan prejudice.",
          "Connect Portia's reaction to Morocco with how Venetian Christians treat Shylock.",
        ],
        explanation:
          "Portia's dismissive comment about Morocco's dark complexion (*'Let all of his complexion choose me so'*) shows that Belmont is NOT an untainted paradise — xenophobia and outsider bias shadow both worlds.",
      },
    ],
  },
  {
    id: "merchant-of-venice-m2",
    title: "MCQ Paper 2 — Shylock: Villain, Victim or Tragic Outsider?",
    questions: [
      {
        id: "merchant-of-venice-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 1, Scene 3, Shylock speaks an **aside** to the audience: *'I hate him for he is a Christian, / But more for that in low simplicity / He lends out money gratis and brings down / The rate of usance here with us in Venice.'* What does this aside reveal?",
        options: [
          "Shylock respects Antonio's generosity and hopes to imitate it",
          "Shylock is pretending to dislike Antonio solely to test Bassanio",
          "Shylock mixes religious hostility with bitter financial resentment",
          "Shylock plans to retire from moneylending after one final contract",
        ],
        answerIndex: 2,
        hints: [
          "Notice the comparative phrase 'But more for that...' pointing directly to interest rates ('usance').",
          "Remember that an aside gives the audience unvarnished private motives.",
        ],
        explanation:
          "Shylock's candid aside exposes mixed motives — religious resentment (*'for he is a Christian'*) fused with sharp economic anger (*'brings down the rate of usance'*) — immediately creating dramatic irony before he smiles and offers the 'merry bond'.",
      },
      {
        id: "merchant-of-venice-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 1, Scene 3, Shylock confronts Antonio: *'You call me misbeliever, cut-throat dog, / And spet upon my Jewish gaberdine.'* What rhetorical purpose does this catalogue of insults serve?",
        options: [
          "It exposes Christian hypocrisy as Antonio begs funds from the man he abuses",
          "It proves Shylock invented false stories to embarrass Bassanio publicly",
          "It persuades Antonio to apologise warmly and abolish Venetian usury laws",
          "It provides lighthearted comic relief before the Prince of Morocco arrives",
        ],
        answerIndex: 0,
        hints: [
          "Look at the shocking contrast between how Antonio treats Shylock daily and what Antonio wants today.",
          "Notice Antonio's proud, unrepentant reply ('I am as like to call thee so again').",
        ],
        explanation:
          "Listing dehumanising slurs (*'cut-throat dog'*) and physical humiliation (*'spet upon my Jewish gaberdine'*) strips away Antonio's polite Christian veneer and shows the systemic abuse fueling Shylock's bitterness.",
      },
      {
        id: "merchant-of-venice-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "shylock-villain-or-victim",
        question:
          "Which literary form does Shakespeare choose for Shylock's famous Act 3, Scene 1 speech (*'Hath not a Jew eyes? ... If you prick us, do we not bleed?'*)?",
        options: [
          "Rhyming heroic couplets",
          "A fourteen-line Shakespearean sonnet",
          "Formal chanted song lyrics",
          "Urgent, driving prose",
        ],
        answerIndex: 3,
        hints: [
          "Remember the common exam trap: students often guess blank verse, yet this explosive street argument uses everyday speech rhythm!",
        ],
        explanation:
          "Shakespeare delivers *'Hath not a Jew eyes?'* in urgent, hammered **prose** rather than polite blank verse — giving Shylock's logical escalation raw, passionate immediacy on the Venetian street.",
      },
      {
        id: "merchant-of-venice-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 3, Scene 1, Shylock asks: *'If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?'* How does the **parallel syntax** work on the audience?",
        options: [
          "It slows the rhythm down to lull Salarino and Solanio into sleep",
          "It builds undeniable agreement on shared humanity, then springs lethal revenge",
          "It mocks Portia's courtroom speech before the trial has even started",
          "It proves Shylock prefers peaceful Christian forgiveness over Venetian law",
        ],
        answerIndex: 1,
        hints: [
          "Track the four repeated 'If you... do/shall we not...?' structures.",
          "Notice the sharp moral pivot between the first three physical truths and the fourth chilling question.",
        ],
        explanation:
          "The escalating **parallel syntax** and **rhetorical questions** compel listeners to agree that Jews share universal human flesh and feeling — then ambush us by folding murderous *'revenge'* into the very same human logic.",
      },
      {
        id: "merchant-of-venice-m2-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shylock-villain-or-victim",
        question:
          "At the climax of his Act 3, Scene 1 speech, Shylock warns: *'The villainy you teach me I will execute, and it shall go hard but I will better the instruction.'* What disturbing argument is Shakespeare making through the metaphor of teaching (*'teach'*, *'instruction'*)?",
        options: [
          "Venetian schools taught Jewish merchants how to write legal contracts",
          "Shylock was born naturally cruel regardless of how Venice treated him",
          "Prejudice and cruelty are learned behaviours mirrored back by their victims",
          "Salarino and Solanio secretly coached Shylock to sue Antonio in court",
        ],
        answerIndex: 2,
        hints: [
          "Look closely at the semantic field of education: 'teach' and 'instruction'.",
          "Who does Shylock accuse of being his cruel 'teachers'?",
        ],
        explanation:
          "Using an educational metaphor (*'teach'*, *'instruction'*), Shylock holds a mirror to Christian Venice: his cruelty did not emerge from nowhere — he learned hatred from his oppressors and vows to outdo them.",
      },
      {
        id: "merchant-of-venice-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 2, Scene 8, Solanio mocks Shylock running through Venice shouting *'My daughter! O my ducats! O my daughter!'* Why must careful Year 9 students be cautious about taking this scene at face value?",
        options: [
          "We hear it only through hostile Christian mockery, never from Shylock directly",
          "Solanio actually heard Tubal shouting that phrase outside Belmont",
          "Shylock never owned any ducats before Antonio signed the bond",
          "Jessica had already returned Shylock's jewellery box before Act 2 ended",
        ],
        answerIndex: 0,
        hints: [
          "Notice *who* is reporting Shylock's outburst — does the audience actually watch Shylock say those lines?",
          "Compare Solanio's comic caricature with Shylock's genuine grief over Leah's ring in Act 3, Scene 1.",
        ],
        explanation:
          "Crucially, Shakespeare filters *'My daughter! O my ducats!'* through antisemitic Christian gossip (Solanio mocking him for laughs) — then complicates that stereotype in Act 3, Scene 1 when Shylock mourns Leah's ring.",
      },
      {
        id: "merchant-of-venice-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 3, Scene 1, Tubal reports Jessica traded a turquoise ring for a monkey, and Shylock cries: *'It was my turquoise; I had it of Leah when I was a bachelor: I would not have given it for a wilderness of monkeys.'* What effect does this moment create?",
        options: [
          "It confirms Shylock values rare gemstones solely for their resale price",
          "It evokes sudden pathos by revealing Shylock's tender love for his late wife",
          "It shows Tubal is secretly plotting with Lorenzo to ruin Shylock",
          "It provides slapstick comedy that erases audience tension before the trial",
        ],
        answerIndex: 1,
        hints: [
          "Think about *who* Leah was and why no number of monkeys or ducats could replace that ring.",
          "Ask what this reveals beneath Shylock's hard exterior.",
        ],
        explanation:
          "Mentioning his late wife **Leah** with nostalgic affection (*'when I was a bachelor'*) shatters the stereotype of a greedy usurer who loves only gold, creating piercing **pathos**.",
      },
      {
        id: "merchant-of-venice-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 3, Scene 3, when Antonio pleads to speak with him, Shylock repeats: *'I'll have my bond! Speak not against my bond! ... Thou call'dst me dog before thou hadst a cause, / But since I am a dog, beware my fangs.'* What does this animal imagery convey?",
        options: [
          "Shylock fondly remembers guarding Antonio's warehouse with watchdogs",
          "Shylock accepts Venetian peace and agrees to cancel Antonio's interest",
          "Shylock apologises for earlier harsh words and begs for the Duke's pardon",
          "Shylock weaponises Antonio's own dehumanising slur into lethal threat",
        ],
        answerIndex: 3,
        hints: [
          "Recall how Antonio insulted Shylock back in Act 1, Scene 3 ('cut-throat dog').",
          "Look at the chilling twist in 'since I am a dog, beware my fangs.'",
        ],
        explanation:
          "Shylock seizes the very dehumanising insult Antonio threw at him (*'dog'*) and turns it into a terrifying warning (*'beware my fangs'*), dramatising how dehumanisation breeds monstrous retaliation.",
      },
      {
        id: "merchant-of-venice-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 4, Scene 1, which chilling physical stage action makes Shylock appear unmistakably threatening right before Portia's entrance?",
        options: [
          "He silently whets his knife on the sole of his shoe while holding scales",
          "He smashes the Duke's marble bench with a heavy iron hammer",
          "He locks all the courtroom doors and threatens to poison Bassanio",
          "He tears up Antonio's original signed parchment before the judges",
        ],
        answerIndex: 0,
        hints: [
          "Recall Gratiano's horrified question: 'Why dost thou whet thy knife so earnestly?'",
          "Think about how live theatrical props shape audience dread.",
        ],
        explanation:
          "Sharpening his knife silently on the sole of his shoe (*'To cut the forfeiture from that bankrupt there'*) is chilling **stagecraft** that turns legal contract language into visceral physical menace.",
      },
      {
        id: "merchant-of-venice-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "Why does Shylock refuse Bassanio's offer of **6,000 ducats** (double the loan) in Act 4, Scene 1?",
        options: [
          "He knows Bassanio's money actually belongs to the Prince of Morocco",
          "He hopes the Duke will award him Antonio's three returning cargo ships",
          "His thirst for personal vengeance now completely outweighs financial profit",
          "He believes Venetian law forbids accepting repayment after noon",
        ],
        answerIndex: 2,
        hints: [
          "Think about Shylock's reply: 'If every ducat in six thousand ducats / Were in six parts and every part a ducat, / I would not draw them; I would have my bond.'",
          "Notice what now drives Shylock far more fiercely than greed.",
        ],
        explanation:
          "Rejecting even 36,000 ducats proves Shylock is no longer acting from simple greed: after years of abuse and losing Jessica, he is consumed by absolute **vengeance**.",
      },
      {
        id: "merchant-of-venice-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shylock-villain-or-victim",
        question:
          "How did an **Elizabethan audience (c. 1596)** likely respond to Antonio's demand that Shylock *'presently become a Christian'* compared with a **modern audience**?",
        options: [
          "Elizabethans protested forced baptism; modern audiences applaud it warmly",
          "Many Elizabethans saw spiritual salvation; modern audiences see cruel identity erasure",
          "Neither Elizabethan nor modern audiences noticed Shylock's conversion at all",
          "Both eras treated forced conversion purely as a harmless wedding joke",
        ],
        answerIndex: 1,
        hints: [
          "Remember Renaissance Christian belief that baptism rescued a soul from damnation.",
          "Contrast that with post-Holocaust modern understanding of religious freedom and antisemitism.",
        ],
        explanation:
          "Many 1596 Christian spectators viewed baptism as a spiritual mercy saving Shylock's soul, whereas modern post-Holocaust audiences experience forced conversion as a devastating act of religious intolerance and identity destruction.",
      },
      {
        id: "merchant-of-venice-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 4, Scene 1, Shylock protests the confiscation of his livelihood: *'You take my house when you do take the prop / That doth sustain my house; you take my life / When you do take the means whereby I live.'* What device intensifies his plea?",
        options: [
          "Playful comic punning and light prose banter",
          "Pathetic fallacy describing a storm over the Venetian canal",
          "Cheerful rhyming couplets celebrating Belmont's generosity",
          "Parallel architectural metaphor equating financial ruin to taking his life",
        ],
        answerIndex: 3,
        hints: [
          "Notice the repeating structure ('You take my... when you do take...') and the image of a supporting 'prop' holding up a house.",
          "Ask how this challenges the court's claim that sparing his breath counts as 'mercy'.",
        ],
        explanation:
          "Using crisp **parallelism** and an architectural **metaphor** (*'the prop / That doth sustain my house'*), Shylock exposes the hollowness of the Duke's 'mercy': stripping a man's livelihood destroys his existence just as surely as execution.",
      },
      {
        id: "merchant-of-venice-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shylock-villain-or-victim",
        question:
          "Why does Shylock's final exit in Act 4, Scene 1 (*'I am content… I pray you give me leave to go from hence; / I am not well'*) haunt the rest of the play?",
        options: [
          "He reveals he secretly planted a bomb beneath Belmont's garden",
          "He vows loudly in blank verse to return with an army in Act 5",
          "His sudden broken brevity contrasts starkly with his earlier fierce eloquence",
          "The Duke immediately apologises and cancels the Alien Statute",
        ],
        answerIndex: 2,
        hints: [
          "Compare his blazing rhetorical questions in Act 3.1 with three exhausted monosyllables: 'I am not well.'",
          "Think about how an actor physically leaves the stage at this moment.",
        ],
        explanation:
          "After four acts of thunderous rhetoric, Shylock is reduced to fragile monosyllables (*'I am not well'*). That stark **contrast** creates haunting **pathos** that lingers silently over Act 5's moonlight.",
      },
      {
        id: "merchant-of-venice-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "shylock-villain-or-victim",
        question:
          "In Act 4, Scene 1, how does **Gratiano** function during Shylock's downfall?",
        options: [
          "His vicious taunts expose ugly Christian triumphalism and shift sympathy to Shylock",
          "He begs Portia to return all of Shylock's property and cancel his conversion",
          "He silently leaves the courtroom out of respect for Shylock's dignity",
          "He argues eloquently alongside the Duke about international shipping law",
        ],
        answerIndex: 0,
        hints: [
          "Recall Gratiano sneering 'A second Daniel, a Daniel, Jew!' and joking about a 'halter gratis' (a hangman's noose).",
          "Ask how watching a bully gloat over a defeated man affects the audience.",
        ],
        explanation:
          "Gratiano's jeering mockery (*'O upright judge! Mark, Jew!'* and wishing him a hangman's noose) exposes the raw cruelty beneath Venice's 'Christian triumph', nudging audience sympathy back toward broken Shylock.",
      },
      {
        id: "merchant-of-venice-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "shylock-villain-or-victim",
        question:
          "Which thesis statement best captures a top-band Year 9 judgement on whether Shylock is a villain or a victim?",
        options: [
          "Shylock is completely evil because he demands a pound of Antonio's flesh in court.",
          "Shakespeare frames Shylock as both victim of Venetian prejudice and terrifying avenger, showing hatred breeds hatred.",
          "Shylock is completely innocent because Antonio spat on his coat once in Act 1.",
          "Shakespeare included Shylock purely as a comic character like Dogberry to make crowds laugh.",
        ],
        answerIndex: 1,
        hints: [
          "Top-band Year 9 theses avoid one-sided labels and link Shakespeare's craft to cause and effect.",
          "Look for nuanced balance holding both cruelty and victimhood together.",
        ],
        explanation:
          "A top-band conceptual thesis resists binary labels, arguing that Shakespeare portrays Shylock simultaneously as a persecuted outsider and a frightening avenger — exposing how systemic prejudice generates retaliatory cruelty.",
      },
    ],
  },
  {
    id: "merchant-of-venice-m3",
    title: "MCQ Paper 3 — Trial Scene Rhetoric, Competing Bonds & Essay Craft",
    questions: [
      {
        id: "merchant-of-venice-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "portia-trial-mercy-justice",
        question:
          "Under what male disguise does Portia enter the Venetian court in Act 4, Scene 1 to defend Antonio?",
        options: [
          "Doctor Bellario from Padua",
          "Signior Lorenzo from Belmont",
          "Master Tubal from the Rialto",
          "Balthasar, a young Roman doctor of law",
        ],
        answerIndex: 3,
        hints: [
          "Bellario is Portia's cousin who sends the legal letter of recommendation; Portia adopts a different male name.",
        ],
        explanation:
          "Portia disguises herself as **Balthasar** (accompanied by Nerissa as his clerk), claiming legal authority barred to Elizabethan women and outwitting the entire Venetian senate.",
      },
      {
        id: "merchant-of-venice-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "portia-trial-mercy-justice",
        question:
          "In the trial scene (Act 4, Scene 1), why is the Venetian court unable simply to tear up Shylock's horrifying bond by arbitrary decree?",
        options: [
          "Because the Duke owes Shylock 6,000 ducats personally",
          "Because breaking legal contracts would ruin Venice's global trade reputation",
          "Because Antonio begs the Duke to execute him before sunset",
          "Because Bellario ordered the Duke to leave the courtroom",
        ],
        answerIndex: 1,
        hints: [
          "Think of Antonio's own words earlier in Act 3, Scene 3: 'the commodity that strangers have with us in Venice.'",
          "Venice's wealth depends on foreign merchants trusting its impartial courts.",
        ],
        explanation:
          "Venice is an international commercial empire whose survival rests on impartial contract law; overriding a signed bond to favour a Christian citizen would destroy foreign merchants' faith in Venetian justice.",
      },
      {
        id: "merchant-of-venice-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "portia-trial-mercy-justice",
        question:
          "In Act 4, Scene 1, Portia declares: *'The quality of mercy is not strained; / It droppeth as the gentle rain from heaven / Upon the place beneath.'* What does the simile *'as the gentle rain from heaven'* suggest?",
        options: [
          "Mercy is unpredictable and floods Venetian trade ships unpredictably",
          "Mercy must be legally enforced by the Duke's armed guards",
          "Mercy is natural, freely given, life-giving and divinely blessed",
          "Mercy applies exclusively to noblemen who own estates in Belmont",
        ],
        answerIndex: 2,
        hints: [
          "Unpack the connotations of 'gentle', 'rain', and 'heaven'.",
          "Contrast effortless rain with 'strained' (forced or squeezed).",
        ],
        explanation:
          "The **natural simile** *'gentle rain from heaven'* depicts mercy as effortless, nourishing and God-like — directly opposing the dry, rigid, forced (*'strained'*) letter of Shylock's contract.",
      },
      {
        id: "merchant-of-venice-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "portia-trial-mercy-justice",
        question:
          "What exact legal technicality creates the sudden courtroom **peripeteia** (reversal) when Portia cries *'Tarry a little; there is something else'*?",
        options: [
          "The bond grants one exact pound of flesh but permits 'no jot of blood'",
          "Shylock forgot to sign his own surname at the bottom of the parchment",
          "Antonio's ships actually docked in Venice three days before the deadline",
          "Bassanio proves Shylock forged Antonio's seal in Act 1, Scene 3",
        ],
        answerIndex: 0,
        hints: [
          "Portia turns Shylock's own obsession with exact wording right back against him.",
          "Think about what physically happens if you cut flesh from a living chest.",
        ],
        explanation:
          "Portia traps Shylock with his own hyper-literalism: *'This bond doth give thee here no jot of blood; / The words expressly are \"a pound of flesh.\"'* — plus cutting even a hair more or less than one exact pound forfeits his life and goods.",
      },
      {
        id: "merchant-of-venice-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "portia-trial-mercy-justice",
        question:
          "When Portia first enters the courtroom in Act 4, Scene 1, she asks: *'Which is the merchant here, and which the Jew?'* Why is this seemingly practical question deeply thematic?",
        options: [
          "Portia genuinely forgot her spectacles back in Belmont",
          "It momentarily erases visible religious stereotypes, questioning moral differences",
          "Antonio and Shylock are dressed in identical twin scarlet robes",
          "Portia intends to accuse Bassanio of secretly signing the bond",
        ],
        answerIndex: 1,
        hints: [
          "Think about what it means if an impartial judge cannot instantly tell 'good Christian merchant' from 'villainous Jew' at a glance.",
          "Connect this moment to appearance vs reality and shared humanity.",
        ],
        explanation:
          "Although historically Venetian Jews wore distinctive dress (like Shylock's *gaberdine*), Portia's question symbolically places Antonio and Shylock on equal footing — prompting the audience to ask whether Christian Venice is truly morally superior.",
      },
      {
        id: "merchant-of-venice-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "portia-trial-mercy-justice",
        question:
          "What sharp **moral irony** undercuts Portia's Mercy Speech by the end of Act 4, Scene 1?",
        options: [
          "Portia accidentally forgets the second half of her blank-verse speech",
          "Shylock immediately forgives Antonio and offers to fund Jessica's wedding",
          "The Duke refuses to let Portia speak because he recognises her voice",
          "After praising unforced mercy, the court enforces rigid penalties and forced baptism",
        ],
        answerIndex: 3,
        hints: [
          "Compare 'The quality of mercy is not strained' (never forced) with what Antonio demands of Shylock minutes later.",
          "Look at the gap between preaching mercy and practising it.",
        ],
        explanation:
          "Having preached that mercy *'is not strained'* (never forced), Portia deploys the harsh Alien Statute to strip Shylock bare and lets Antonio impose forced Christian conversion — exposing glaring hypocrisy.",
      },
      {
        id: "merchant-of-venice-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "In Act 4, Scene 1, Bassanio cries he would sacrifice his wife to save Antonio, and disguised Portia murmurs in an **aside**: *'Your wife would give you little thanks for that, / If she were by, to hear you make the offer.'* What two effects does this line achieve?",
        options: [
          "Dramatic irony and comic relief that foreshadow the Act 5 ring test",
          "Tragic pathos proving Portia intends to divorce Bassanio immediately",
          "Legal proof that Bassanio must pay Shylock's debt out of his own pocket",
          "Bitter proof that Antonio secretly dislikes Portia's interference",
        ],
        answerIndex: 0,
        hints: [
          "Only the audience and Nerissa know the 'lawyer' IS Bassanio's wife!",
          "Notice how this clash between friendship and marriage resurfaces in Act 5, Scene 1.",
        ],
        explanation:
          "Portia's wry **aside** sparks instant **dramatic irony** and brief **comic relief** during the trial, while setting up her Act 5 ring test to rebalance Bassanio's friendship and marital loyalties.",
      },
      {
        id: "merchant-of-venice-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "Why does Portia stage the **ring trick** in Act 5, Scene 1 (demanding Bassanio's wedding ring while disguised as Balthasar, then teasing him back in Belmont)?",
        options: [
          "To sell the golden ring on the Rialto to repay Antonio's lost ships",
          "To prove Nerissa loves Gratiano more than Portia loves Bassanio",
          "To test Bassanio's marital loyalty and assert her equal authority in marriage",
          "To hide the fact that she illegally bribed the Duke of Venice",
        ],
        answerIndex: 2,
        hints: [
          "Remember Bassanio gave Portia's ring away only after Antonio urged him to value the lawyer's service above his wife's command.",
          "Ask what lesson Portia teaches Bassanio — and Antonio — in Act 5.",
        ],
        explanation:
          "Portia's ring trick echoes Shylock's bond in a witty comic key: she exposes how easily Bassanio let Antonio's friendship override his wedding vow, asserting her intelligence and equal partnership before forgiving him.",
      },
      {
        id: "merchant-of-venice-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "How does **Antonio** end the play in Act 5, Scene 1, creating a poignant **cyclical structure**?",
        options: [
          "He marries Nerissa's sister and moves permanently into Shylock's Venice house",
          "He refuses to forgive Bassanio and sails back to Venice in anger",
          "He reveals he had secretly hidden three spare ships from Shylock all along",
          "His ships return safely, yet he remains quietly unpaired amid three married couples",
        ],
        answerIndex: 3,
        hints: [
          "Count the couples walking off into Belmont's dawn: Portia & Bassanio, Nerissa & Gratiano, Jessica & Lorenzo — who is left odd man out?",
          "Link that final image straight back to Act 1, Scene 1's opening line.",
        ],
        explanation:
          "Even though Portia hands Antonio news that three of his *argosies* safely reached port, he finishes the play alone among three paired couples — echoing his unexplained sadness from the play's very first line.",
      },
      {
        id: "merchant-of-venice-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "In Act 5, Scene 1, Lorenzo speaks the lyrical line: *'How sweet the moonlight sleeps upon this bank!'* What language device creates this serene contrast after Act 4's courtroom battle?",
        options: [
          "Harsh military hyperbole",
          "Gentle personification and soft sibilance",
          "Comic malapropism and prose stichomythia",
          "Bitter commercial metaphor",
        ],
        answerIndex: 1,
        hints: [
          "Look at what human action the moonlight is performing ('sleeps').",
          "Listen to the soft repeated 's' sounds in 'sweet' and 'sleeps'.",
        ],
        explanation:
          "The soft **personification** (*'moonlight sleeps'*) and gentle **sibilance** (*sweet / sleeps*) restore Belmont's dreamy harmony — creating striking structural juxtaposition straight after Shylock's broken exit.",
      },
      {
        id: "merchant-of-venice-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "In a Year 9 extract essay on Act 4, Scene 1, which sentence demonstrates the strongest **stagecraft + language** integration?",
        options: [
          "As Shylock silently whets his knife, his repeated possessive 'my bond' turns legal contract into visceral physical menace on stage.",
          "Shylock is very scary in Act 4 Scene 1 because he brings a sharp knife and refuses to take Bassanio's money.",
          "The reader gets very tense when Portia walks into court wearing a lawyer's outfit and wins the case.",
          "Shakespeare uses repetition and metaphors in the courtroom scene to make the play more exciting and dramatic.",
        ],
        answerIndex: 0,
        hints: [
          "Look for concrete physical action on stage paired with an embedded short quote and exact audience effect.",
          "Avoid vague claims ('makes it exciting') and calling the audience 'the reader'.",
        ],
        explanation:
          "Combining physical **stagecraft** (whetting the knife) with tight embedded quotation (*'my bond'*) and precise theatrical effect (visceral physical menace) hits top-band Year 9 English drama criteria.",
      },
      {
        id: "merchant-of-venice-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "What recurring **symbol / stage prop** visually unifies Shylock's grief in Act 3 and Portia's loyalty test in Act 5?",
        options: [
          "A silver weighing scale",
          "A lead casket scroll",
          "A ring representing love and fidelity",
          "A sealed shipping manifest",
        ],
        answerIndex: 2,
        hints: [
          "Think of Leah's turquoise keepsake AND the golden pledge Portia gives Bassanio in Act 3, Scene 2.",
          "Both objects test whether people treat promises as priceless love or disposable currency.",
        ],
        explanation:
          "**Rings** recur powerfully across both plots: Leah's turquoise ring proves Shylock treasures love above gold, while Portia's wedding ring tests Bassanio's fidelity against male friendship in Act 5.",
      },
      {
        id: "merchant-of-venice-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "portia-trial-mercy-justice",
        question:
          "In Act 4, Scene 1, why does Shakespeare have Shylock call disguised Portia *'A Daniel come to judgment!'* right before she destroys his case?",
        options: [
          "Because Shylock mistakes Portia for his nephew Daniel from Frankfurt",
          "To heighten dramatic irony via biblical allusion right before peripeteia strikes",
          "Because Venetian courts awarded the title 'Daniel' to every Padua graduate",
          "To prove Shylock has already secretly recognised Portia beneath her disguise",
        ],
        answerIndex: 1,
        hints: [
          "In the Book of Daniel, young Daniel saved innocent Susanna by cross-examining corrupt accusers — then Gratiano mocks Shylock with his own exact words minutes later!",
          "Think about how building Shylock's triumph makes the sudden reversal even sharper.",
        ],
        explanation:
          "Shylock's **biblical allusion** to wise young Daniel praising Portia creates razor-sharp **dramatic irony** right before **peripeteia** strikes — and Gratiano cruelly throws *'A second Daniel!'* straight back in Shylock's face moments later.",
      },
      {
        id: "merchant-of-venice-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "In Act 5, Scene 1, Antonio tells Portia: *'I dare be bound again, / My soul upon the forfeit, that your lord / Will never more break faith advisedly.'* Why is the word *'bound'* structurally significant?",
        options: [
          "It shows Antonio is physically tied up by Gratiano as a Belmont joke",
          "It confirms Antonio signed a brand-new 3,000-ducat loan with Tubal",
          "It warns Bassanio never to sail on Antonio's ships to Tripoli again",
          "It echoes the play's bond motif, showing Antonio still pledging himself for Bassanio",
        ],
        answerIndex: 3,
        hints: [
          "Compare Act 1 ('my flesh' as forfeit for Bassanio's debt) with Act 5 ('my soul' as forfeit for Bassanio's marriage vow).",
          "Ask whether Antonio's selfless devotion has really changed.",
        ],
        explanation:
          "Echoing his Act 1 flesh bond, Antonio now pledges his *'soul upon the forfeit'* to rescue Bassanio's marriage — neatly tying the play's financial, friendship and marital **bonds** together.",
      },
      {
        id: "merchant-of-venice-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bonds-loyalty-essay-craft",
        question:
          "Why is *The Merchant of Venice* frequently described by critics as a **'problem comedy'** rather than a straightforward romantic comedy?",
        options: [
          "Shylock's tragic humiliation and systemic prejudice resist tidy comic resolution",
          "Shakespeare left Act 5 unfinished and another writer added the ring scene",
          "None of the romantic couples actually manage to get married by Act 5",
          "Every character dies onstage during the Act 4 Venetian courtroom trial",
        ],
        answerIndex: 0,
        hints: [
          "Think about what lingers uncomfortably in the audience's mind even as Belmont celebrates with music and reunited couples.",
          "Look at the clash between traditional comic ending and troubling moral questions.",
        ],
        explanation:
          "Although Act 5 delivers three united couples and restored wealth (classic comic resolution), Shylock's forced conversion, Christian hypocrisy, and Antonio's quiet solitude refuse neat moral closure — earning the play the label **'problem comedy'**.",
      },
    ],
  },
];
