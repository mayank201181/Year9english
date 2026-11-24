import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER M1: Discursive Essays, Counter-Arguments & Aristotelian Rhetoric
  // =========================================================================
  {
    id: "discursive-writing-public-speaking-m1",
    title: "MCQ Paper 1 — Discursive Structure & Aristotelian Rhetoric",
    questions: [
      {
        id: "discursive-writing-public-speaking-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "discursive-essay-structure",
        question:
          "How does a **discursive essay** differ most fundamentally from a one-sided persuasive rant?",
        options: [
          "It weighs competing perspectives fairly before reaching a reasoned verdict.",
          "It uses dramatic exclamation marks to push one side from sentence one.",
          "It avoids reaching any conclusion at all so nobody feels offended.",
          "It relies entirely on personal anecdotes rather than logical reasoning.",
        ],
        answerIndex: 0,
        hints: [
          "Think about the balance between exploring multiple angles and forming a qualified conclusion.",
        ],
        explanation:
          "Discursive writing explores rival viewpoints calmly and analytically before synthesising a reasoned conclusion — unlike one-sided persuasion or empty fence-sitting.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "discursive-essay-structure",
        question:
          'A Year 9 essay on banning smartphones in schools states: *"People who oppose phone bans just want pupils watching dance videos during science labs."* Which logical flaw has the writer committed?',
        options: [
          "Steel-manning the rival position",
          "Delivering a qualified synthesis",
          "Mocking a weak straw-man caricature",
          "Using an Aristotelian Logos appeal",
        ],
        answerIndex: 2,
        hints: [
          "Ask whether critics of phone bans genuinely want students watching videos in science, or whether the writer twisted their view into something silly.",
        ],
        explanation:
          "Distorting opponents’ real concerns (such as emergency contact or teaching self-regulation) into a foolish caricature is the straw-man fallacy, which damages credibility.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-essay-structure",
        question:
          'Which opening best **steel-mans** a counter-argument against four-day school weeks before pivoting into rebuttal?',
        options: [
          "Supporters of five-day weeks are clearly stuck in the Victorian era and refuse to adapt to modern schools.",
          "Admittedly, five-day weeks give families steady childcare; nevertheless, shorter weeks can reduce pupil burnout.",
          "Some people disagree with four-day weeks, which is why there are good pros and cons on both sides of the issue.",
          "Everyone agrees that Fridays feel exhausting, so defending a traditional five-day week makes zero logical sense.",
        ],
        answerIndex: 1,
        hints: [
          "Apply the CAR pattern: Concede the opponent’s *strongest* real-world point, then pivot cleanly.",
          "Eliminate dismissive mockery and empty fence-sitting.",
        ],
        explanation:
          "Conceding a genuine practical strength ('steady childcare') via 'Admittedly' before pivoting with 'nevertheless' exemplifies mature steel-manning.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-essay-structure",
        question:
          'Why do examiners penalise discursive conclusions such as *"In conclusion, there are good arguments on both sides, so it depends on your opinion"*?',
        options: [
          "It uses overly sophisticated academic discourse markers.",
          "It takes a clear stance supported by earlier counter-arguments.",
          "It introduces too many new statistical citations at the end.",
          "It dodges evaluation with empty fence-sitting instead of synthesis.",
        ],
        answerIndex: 3,
        hints: [
          "Remember: being balanced during the essay does NOT mean refusing to form a reasoned judgement at the end.",
          "Look for what a top-band discursive conclusion must accomplish.",
        ],
        explanation:
          "Stating 'there are good arguments on both sides' refuses to weigh the evidence. High-band discursive conclusions synthesise the debate into a nuanced, qualified verdict.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "aristotelian-rhetoric",
        question:
          'Read this opening of a speech on urban flood defences:\n\n*"As a civil engineer who has inspected thirty coastal seawalls across Southeast Asia over fifteen years, I have seen firsthand which barriers hold when tides surge."*\n\nWhich Aristotelian appeal is primarily established here?',
        options: [
          "Pathos through tragic emotional imagery",
          "Logos through algebraic statistics",
          "Ethos through relevant lived authority",
          "Antithesis through balanced contrast",
        ],
        answerIndex: 2,
        hints: [
          "Notice how the speaker earns the audience’s trust by establishing fifteen years of relevant hands-on experience.",
        ],
        explanation:
          "Establishing direct expertise and reliable character ('civil engineer… fifteen years') builds Ethos so listeners trust the arguments that follow.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "aristotelian-rhetoric",
        question:
          'Read this line from a student speech:\n\n*"Schools should measure success by curiosity awakened, not test scores memorised."*\n\nWhich rhetorical device sharpens this memorable contrast?',
        options: [
          "Antithesis",
          "Anaphora",
          "Hypophora",
          "Anecdote",
        ],
        answerIndex: 0,
        hints: [
          "Look at the mirror-image grammatical structure placing two opposite ideas side by side.",
          "What classical device balances opposing ideas inside parallel syntax?",
        ],
        explanation:
          "Balancing 'curiosity awakened' directly against 'test scores memorised' in parallel grammatical form is classic antithesis.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "aristotelian-rhetoric",
        question:
          'Read this speech excerpt:\n\n*"We owe young people honest air. We owe young people shaded streets. We owe young people a future that does not feel borrowed on credit."*\n\nWhich two devices work together here?',
        options: [
          "Hypophora and passive voice",
          "Euphemism and statistical proof",
          "Straw man and chronological narration",
          "Anaphora and tricolon",
        ],
        answerIndex: 3,
        hints: [
          "Notice the exact opening phrase repeated three times ('We owe young people…').",
          "Combine the name for repeated clause openings with the name for a three-part series.",
        ],
        explanation:
          "Repeating 'We owe young people' at the start of each clause is anaphora, while structuring the cadence in three escalating sentences creates a powerful tricolon.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "aristotelian-rhetoric",
        question:
          'Read this line from an opinion column:\n\n*"Who pays the hidden price when local bus routes vanish? Not commuters with company cars — shift nurses and elderly shoppers left stranded at dusk."*\n\nWhat is the precise rhetorical device used across these two sentences?',
        options: [
          "Tricolon",
          "Hypophora",
          "Anaphora",
          "Simile",
        ],
        answerIndex: 1,
        hints: [
          "Notice that the writer poses a targeted question and immediately supplies the sharp answer.",
          "Think of the device starting with 'h' that lets a speaker control the answer.",
        ],
        explanation:
          "Posing a pointed question and answering it immediately is hypophora, allowing the writer to steer the audience’s reasoning without leaving room for doubt.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "aristotelian-rhetoric",
        question:
          'Compare two Pathos attempts in a speech on exam stress:\n- Attempt 1: *"At 11:40 p.m., my fourteen-year-old brother stared at a blank revision card, too exhausted to remember his own date of birth."*\n- Attempt 2: *"Countless tragic teenagers are crying endless rivers of sorrow in terrible academic prisons!"*\n\nWhy is Attempt 1 far stronger Year 9 rhetoric?',
        options: [
          "Specific, understated detail evokes real empathy while preserving credibility.",
          "Longer adjectives and exclamation marks weaken statistical evidence.",
          "Mentioning a specific time of night converts Pathos into pure Logos.",
          "Brothers are always more persuasive than mentioning larger student groups.",
        ],
        answerIndex: 0,
        hints: [
          "Think about how melodrama ('endless rivers of sorrow', 'academic prisons!') affects an audience’s trust (Ethos).",
          "Compare believable human detail against theatrical exaggeration.",
        ],
        explanation:
          "Concrete, restrained storytelling lets listeners feel genuine empathy on their own without eroding Ethos, whereas melodramatic clichés sound artificial and manipulative.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-essay-structure",
        question:
          'Which sequence of discourse markers best maps a single **CAR counter-argument paragraph**?',
        options: [
          "Firstly → Secondly → Thirdly",
          "For example → Similarly → In addition",
          "Admittedly → Nevertheless → Consequently",
          "Initially → Meanwhile → Eventually",
        ],
        answerIndex: 2,
        hints: [
          "Recall CAR: Concede the rival point → Pivot/Analyse → Rebut/Weigh outcome.",
          "Match each stage to the marker that signals concession, contrast, and logical conclusion.",
        ],
        explanation:
          "'Admittedly' concedes the steel-manned counter-view, 'Nevertheless' signals the rebuttal pivot, and 'Consequently' lands the reasoned deduction.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "aristotelian-rhetoric",
        question:
          'Read this excerpt from a science-policy article:\n\n*"Adding fifteen minutes of morning daylight walk cut late arrivals by 31% across six trial schools while improving first-period quiz scores by an average of nine points."*\n\nWhich Aristotelian appeal dominates this sentence?',
        options: [
          "Pathos driven by poignant personal stories",
          "Logos anchored in measurable empirical evidence",
          "Ethos built through apologetic modesty",
          "Anaphora built through rhythmic repetition",
        ],
        answerIndex: 1,
        hints: [
          "Spot the specific trial figures ('31%', 'six trial schools', 'nine points') and cause-and-effect link.",
          "Which pillar convinces the mind through verifiable data and logic?",
        ],
        explanation:
          "Concrete percentages, sample sizes ('six trial schools'), and clear cause-and-effect outcomes represent a textbook Logos appeal.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "discursive-essay-structure",
        question:
          'Which discursive thesis statement on **grades vs narrative feedback** shows the highest Year 9 conceptual maturity?',
        options: [
          "Grades are horrible and must be destroyed immediately by every school.",
          "Some teachers like letter grades while some parents prefer written comments.",
          "Narrative feedback is very nice and grades are sometimes stressful for pupils.",
          "While numerical grades offer quick clarity, pairing them with diagnostic feedback better sustains curiosity.",
        ],
        answerIndex: 3,
        hints: [
          "Look for a thesis that acknowledges the tension cleanly and points toward a nuanced, analytical line of inquiry.",
          "Eliminate one-sided shouting and flat, vague observations.",
        ],
        explanation:
          "Using 'While…' to honour the legitimate clarity of grades before arguing for diagnostic feedback establishes an intelligent, balanced discursive thesis.",
      },
      {
        id: "discursive-writing-public-speaking-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "aristotelian-rhetoric",
        question:
          'How can **conceding an opponent’s strongest point** actually strengthen a speaker’s **Ethos**?',
        options: [
          "It confuses the audience so they forget the speaker’s main argument.",
          "It replaces the need to supply any Logos statistics or real examples.",
          "It demonstrates intellectual honesty and fair-minded mastery of the topic.",
          "It fills up thirty extra seconds when a speech falls below time.",
        ],
        answerIndex: 2,
        hints: [
          "Think about how you judge two debaters: one pretends no flaws exist, while the other openly faces the hardest counter-point and answers it.",
          "Which quality defines Aristotelian Ethos?",
        ],
        explanation:
          "Facing the hardest objection openly proves the speaker is fair, well-informed, and unafraid of scrutiny — dramatically elevating their credibility (Ethos).",
      },
      {
        id: "discursive-writing-public-speaking-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "aristotelian-rhetoric",
        question:
          'Read this persuasive climax:\n\n*"A library is not a silent warehouse for obsolete paper; it is a noisy workshop for curiosity, a refuge for quiet focus, and an engine of equal opportunity."*\n\nWhich pair of rhetorical devices combines inside this single sentence?',
        options: [
          "Antithesis opening into a rising tricolon",
          "Hypophora closing with a statistical caveat",
          "Passive evasion paired with sardonic irony",
          "Chronological flashback paired with direct address",
        ],
        answerIndex: 0,
        hints: [
          "Look at the semicolon splitting 'not a silent warehouse' against 'it is…' — a crisp contrast.",
          "Now count the three parallel noun phrases defining what a library IS.",
        ],
        explanation:
          "Contrasting 'not a silent warehouse' against 'it is…' creates sharp antithesis, which immediately unfolds into a rhythmic three-part tricolon ('workshop… refuge… engine').",
      },
      {
        id: "discursive-writing-public-speaking-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "discursive-essay-structure",
        question:
          'A discursive essay asks: *"Should zoos still exist in the twenty-first century?"* Which paragraph plan demonstrates genuine **thematic synthesis** rather than a mechanical ping-pong list?',
        options: [
          "Paragraph 1: three random facts about lions; Paragraph 2: three facts about elephants; Paragraph 3: zoos are fine.",
          "Paragraph 1: five reasons zoos are brilliant; Paragraph 2: five reasons zoos are awful; Paragraph 3: both sides have points.",
          "Paragraph 1: personal holiday story at a safari park; Paragraph 2: dictionary definition of a zoo; Paragraph 3: call to ban tickets.",
          "Organise paragraphs by shared principles — conservation ethics, animal welfare, and public education — weighing both sides within each.",
        ],
        answerIndex: 3,
        hints: [
          "Compare dumping all 'for' points in one block and all 'against' points in another versus debating core themes directly.",
          "Which architecture produces deeper comparative evaluation?",
        ],
        explanation:
          "Structuring paragraphs around conceptual principles (conservation, welfare, education) and weighing rival arguments inside each creates sophisticated, cohesive discursive analysis.",
      },
    ],
  },

  // =========================================================================
  // PAPER M2: Tanglin Year 9 Public Speaking Competition & Delivery Craft
  // =========================================================================
  {
    id: "discursive-writing-public-speaking-m2",
    title: "MCQ Paper 2 — Speech Craft, Delivery & Q&A Mastery",
    questions: [
      {
        id: "discursive-writing-public-speaking-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "public-speaking-competition",
        question:
          "Which opening line is **most effective** in the first 15 seconds of the Tanglin Year 9 Public Speaking Competition?",
        options: [
          "Good afternoon judges, my name is Priya and today I will talk about sleep.",
          "At 1:17 a.m. last Tuesday, half the teenagers in this room were still wide awake.",
          "According to the Oxford English Dictionary, sleep is defined as resting your eyes.",
          "I hope you enjoy my three-minute speech, which has three main points to cover.",
        ],
        answerIndex: 1,
        hints: [
          "Skip throat-clearing introductions and dictionary clichés — look for an immediate, vivid hook aimed directly at the room.",
        ],
        explanation:
          "Opening immediately with a sharp timestamp ('1:17 a.m.') tied directly to 'the teenagers in this room' hooks curiosity and relevance inside five seconds.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "public-speaking-competition",
        question:
          "For a poised **3-minute** competition speech that includes deliberate pauses and vocal contrast, what is the ideal target word count?",
        options: [
          "Roughly 150–190 words",
          "Roughly 650–750 words",
          "Roughly 900–1,000 words",
          "Roughly 380–430 words",
        ],
        answerIndex: 3,
        hints: [
          "A natural, expressive speaking pace with room for dramatic pauses is roughly 130–140 words per minute.",
        ],
        explanation:
          "At ~130–140 words per minute, a 3-minute speech sits cleanly at 380–430 words — avoiding both awkward empty silence and breathless rushing.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "A finalist opens her speech by holding up a single tangled earphone wire to illustrate modern distraction, explores digital calm for two minutes, and finishes at 2:50 by slipping the neatly coiled wire into her pocket.\n\nWhat structural technique elevates this closing?",
        options: [
          "A cyclical call-back transforming the opening image",
          "A straw-man rebuttal dismantling audience questions",
          "A comma-splice transition joining two unrelated scenes",
          "A formal bibliography listing all cited research studies",
        ],
        answerIndex: 0,
        hints: [
          "Notice how the exact opening object returns at the very end, now changed ('tangled' → 'neatly coiled').",
          "Recall the signature closing move of winning competition speeches.",
        ],
        explanation:
          "Revisiting the opening image with transformed meaning ('tangled' to 'neatly coiled') delivers a memorable cyclical call-back that gives the speech artistic closure.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "Why is pausing silently for **two full seconds** *before* delivering your very first sentence a powerful stage habit?",
        options: [
          "It lets you silently read through the entire first paragraph on your card.",
          "It uses up precious competition time so you have less to memorise.",
          "It projects calm authority, settles the room, and earns quiet focus.",
          "It signals to the judges that you are nervous and need encouragement.",
        ],
        answerIndex: 2,
        hints: [
          "Think about how rushed speakers look when they start talking while still walking to the microphone.",
          "What does calm stillness communicate before a single word is spoken?",
        ],
        explanation:
          "Planting your feet, breathing, making eye contact, and holding two seconds of silence commands attention immediately and radiates poised Ethos.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "Which eye-contact technique feels most genuine and engaging to a hall of judges and peers?",
        options: [
          "Completing one clear thought while looking warmly at a real listener in Left, Centre, then Right zones.",
          "Sweeping your gaze rapidly back and forth across the back wall without stopping on any face.",
          "Staring continuously at your best friend in the front row so you never feel distracted.",
          "Keeping your eyes fixed calmly on your cue cards so you never mispronounce a syllable.",
        ],
        answerIndex: 0,
        hints: [
          "Compare mechanical 'sprinkler' scanning or staring at one spot against real human connection across the room.",
          "Remember Left–Centre–Right triangulation.",
        ],
        explanation:
          "Triangulating Left, Centre, and Right — holding gentle contact for one full phrase per zone — makes every section of the hall feel directly addressed.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "How should you format **cue cards** for a Year 9 public speaking final?",
        options: [
          "Print your entire 420-word speech in tiny 8-point font across one sheet.",
          "Write out every transition word in full cursive sentences so nothing is missed.",
          "Avoid numbering the cards so you can rearrange your points randomly on stage.",
          "Use bold 3–5 word bullet prompts, marked pause slashes, and clear card numbers.",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happens if you glance down at a dense wall of tiny text mid-speech.",
          "Good cue cards act as quick visual anchors, not a script to read aloud.",
        ],
        explanation:
          "Numbered palm-sized cards with bold keyword anchors and pause marks (`/` or `//`) keep your eyes on the audience and prevent getting lost in dense prose.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "During a serious emotional turning point at 2:15 in your speech, which **vocal adjustment** usually commands the hall most powerfully?",
        options: [
          "Shouting at maximum volume while speeding up to show enthusiasm",
          "Slowing your pace slightly and dropping to a quieter, crisp tone",
          "Keeping the exact same pitch and speed from start to finish",
          "Adding nervous laughter right before delivering the serious point",
        ],
        answerIndex: 1,
        hints: [
          "Think about what happens physically in a noisy room when a confident speaker drops their voice and slows down.",
          "Contrast draws listeners in far better than relentless shouting.",
        ],
        explanation:
          "Deliberately slowing down and lowering volume creates magnetic vocal contrast, making listeners lean forward to catch every syllable.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "In the **Q&A** round after your speech, a judge asks for a national statistic you genuinely do not know. What is the strongest response?",
        options: [
          "Invent a plausible percentage like 'roughly 62%' so you sound confident.",
          "Say 'I have no idea, next question please' and look down at your shoes.",
          "Acknowledge honestly you lack that exact figure, then bridge calmly to evidence you do know.",
          "Change the subject completely and repeat your opening anecdote word for word.",
        ],
        answerIndex: 2,
        hints: [
          "Ask which action protects your **Ethos** (honesty and credibility) while still giving the judge real value.",
          "Never fabricate data in front of sharp judges!",
        ],
        explanation:
          "Admitting the gap candidly ('I don’t have the exact national percentage to hand…') and bridging cleanly to relevant evidence you know preserves Ethos and composure.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "What do the four letters of the **PREP** framework for crisp competition Q&A answers stand for?",
        options: [
          "Pause, Repeat, Exaggerate, Persuade",
          "Plan, Rehearse, Enunciate, Project",
          "Problem, Rhetoric, Emotion, Punchline",
          "Point, Reason, Example, Point",
        ],
        answerIndex: 3,
        hints: [
          "Think about how to structure a focused 30-second spoken answer so it never rambles off track.",
          "It opens and closes on the same direct takeaway, supported by why and a concrete case.",
        ],
        explanation:
          "PREP — Point, Reason, Example, Point — guarantees a focused, persuasive 25–35 second Q&A response that lands cleanly without trailing off.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "Why does a speech written *for the ear* use shorter average sentences and clear **signposting** (*'First… Yet consider the flip side…'*) compared with a written academic essay?",
        options: [
          "Live listeners cannot re-read a tangled clause, so acoustic landmarks keep them tracking every turn.",
          "Public speaking judges dislike formal vocabulary and prefer very simple primary-school words.",
          "Short sentences automatically prevent speakers from running out of breath during Q&A sessions.",
          "Signposting replaces the need to include any evidence or counter-arguments in the speech.",
        ],
        answerIndex: 0,
        hints: [
          "Think about the physical difference between reading text on paper versus hearing words vanish into air in real time.",
          "How do you make a live audience follow your structure effortlessly?",
        ],
        explanation:
          "Because spoken words vanish instantly, listeners rely on crisp syntax and audible signposts to track shifts between core pillars, counter-points, and conclusion.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "Which gesture and posture habit reinforces stage confidence most effectively?",
        options: [
          "Pacing constantly left and right while clicking a pen behind your back",
          "Gripping both edges of the lectern tightly with locked shoulders",
          "Standing balanced with open, purposeful gestures timed to key ideas",
          "Keeping both hands buried deep inside trouser pockets throughout",
        ],
        answerIndex: 2,
        hints: [
          "Compare restless nervous habits (pacing, pen-clicking, rigid gripping) against calm, open physical presence.",
          "Notice the word 'purposeful' — gestures should match meaning, not fidget.",
        ],
        explanation:
          "A grounded stance paired with open, deliberate hand gestures timed to contrasts or tricolons projects relaxed command rather than nervous energy.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "public-speaking-competition",
        question:
          "After delivering your final word at 2:58, what should you do in the **last two seconds** before stepping away?",
        options: [
          "Blurtedly mutter 'Yeah, so… that’s it, thanks' while walking off mid-syllable.",
          "Hold calm eye contact for one full beat so the final image resonates, then nod politely.",
          "Immediately ask the timekeeper aloud whether you stayed under three minutes.",
          "Shuffle your cue cards noisily into the microphone while exhaling with relief.",
        ],
        answerIndex: 1,
        hints: [
          "Think about how muttering 'so yeah, thanks' punctures a brilliant closing line.",
          "Let the silence after your final word do the work.",
        ],
        explanation:
          "Holding a poised beat of silence and eye contact lets your closing call-back echo across the room before applause breaks.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "public-speaking-competition",
        question:
          "Midway through your speech, you blank for a second on your next line. What recovery move preserves your **Ethos** best?",
        options: [
          "Pause calmly as if for effect, glance smoothly at your bold bullet anchor, and continue without apologising.",
          "Say 'Oh sorry, I completely forgot my script!' and laugh nervously into the microphone.",
          "Stop speaking for ten seconds while flipping back through earlier cue cards in panic.",
          "Skip straight to 'Thank you for listening' even though ninety seconds remain.",
        ],
        answerIndex: 0,
        hints: [
          "Remember: the audience does NOT have a copy of your script — they cannot tell a brief silent pause from a dramatic pause!",
          "Which action keeps the illusion of total poise intact?",
        ],
        explanation:
          "Because the audience never sees your script, a calm one-second pause while checking a bold bullet looks intentional and poised — whereas apologising breaks the spell immediately.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "public-speaking-competition",
        question:
          "Compare two ways of delivering a rhetorical question in a 3-minute speech:\n- Delivery 1: Ask the question and rush straight into the next sentence with zero gap.\n- Delivery 2: Ask the question with slightly raised clarity, then hold **1.5 seconds of silence** while meeting eyes across the hall.\n\nWhy does Delivery 2 multiply the rhetorical impact?",
        options: [
          "It lets listeners whisper answers aloud to their neighbours.",
          "It gives the speaker extra seconds to rewrite the ending mentally.",
          "It turns an emotional appeal into an objective statistical proof.",
          "The silence forces each listener’s own brain to answer the question.",
        ],
        answerIndex: 3,
        hints: [
          "Think about what happens inside an audience member’s head during the beat *after* a pointed question.",
          "If you race straight on, does the listener ever actually reflect?",
        ],
        explanation:
          "A deliberate 1.5-second pause turns a rhetorical question from mere decoration into active persuasion: listeners mentally supply the answer themselves.",
      },
      {
        id: "discursive-writing-public-speaking-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "public-speaking-competition",
        question:
          "During Q&A, a judge frames a slightly hostile question: *'Isn’t your whole proposal completely unrealistic for busy state schools?'* Which opening move shows peak debating maturity?",
        options: [
          "Snap back defensively: 'No, you clearly misunderstood my second pillar!'",
          "Stay warm and calm: 'That’s a crucial practicality test — let’s look at how a low-cost pilot works…'",
          "Agree completely: 'Yes, you’re right, my proposal probably wouldn’t work in real life.'",
          "Ignore the question about cost and recite your closing call-back a second time.",
        ],
        answerIndex: 1,
        hints: [
          "Avoid both aggressive defensiveness and collapsing under pressure.",
          "Validate the legitimacy of the practical test, then pivot straight into concrete proof.",
        ],
        explanation:
          "Calmly reframing a sharp challenge as a 'crucial practicality test' disarms hostility, displays mature Ethos, and pivots directly into a concrete PREP rebuttal.",
      },
    ],
  },

  // =========================================================================
  // PAPER M3: Year 9 SPaG — Punctuation, Syntax & Academic Register
  // =========================================================================
  {
    id: "discursive-writing-public-speaking-m3",
    title: "MCQ Paper 3 — SPaG Precision, Punctuation & Syntax",
    questions: [
      {
        id: "discursive-writing-public-speaking-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence contains a **comma splice**?",
        options: [
          "Although the hall was crowded, every listener fell quiet.",
          "The speaker paused briefly, met the judges’ eyes, and smiled.",
          "The debate ran overtime, the chair allowed one final question.",
          "Because the evidence was clear, the committee revised its plan.",
        ],
        answerIndex: 2,
        hints: [
          "Apply the Full-Stop Test: look for a bare comma sitting between two complete sentences.",
        ],
        explanation:
          "'The debate ran overtime' and 'the chair allowed one final question' are both full independent clauses — joining them with only a comma creates a comma splice.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence fixes the classic **`however`** comma splice accurately?",
        options: [
          "Solar panels demand high upfront investment; however, they slash energy bills within five years.",
          "Solar panels demand high upfront investment, however, they slash energy bills within five years.",
          "Solar panels demand high upfront investment, however; they slash energy bills within five years.",
          "Solar panels demand high upfront investment: however they slash energy bills within five years.",
        ],
        answerIndex: 0,
        hints: [
          "Remember: 'however' is NOT a FANBOYS conjunction — it needs a semicolon (or full stop) BEFORE it and a comma AFTER it.",
        ],
        explanation:
          "Between two independent clauses, place a semicolon before 'however' and a comma after it: `…investment; however, they…`.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence uses **`its`** and **`it's`** with 100% accuracy?",
        options: [
          "Its clear that the charity lost it's funding last autumn.",
          "It's clear that the charity lost it's funding last autumn.",
          "Its clear that the charity lost its funding last autumn.",
          "It's clear that the charity lost its funding last autumn.",
        ],
        answerIndex: 3,
        hints: [
          "Test each slot with 'it is': only the slot where 'it is' makes sense takes an apostrophe.",
        ],
        explanation:
          "'It's' contracts 'It is' ('It is clear…'), while 'its' (no apostrophe) shows possession ('its funding').",
      },
      {
        id: "discursive-writing-public-speaking-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence uses a **colon (`:`)** with strict grammatical accuracy?",
        options: [
          "Strong speeches rely on: calm pacing, clear signposting, and vivid stories.",
          "Strong speeches rely on three essentials: calm pacing, clear signposting, and vivid stories.",
          "Strong speeches rely on calm pacing: and clear signposting plus vivid stories.",
          "Although strong speeches rely on: calm pacing, clear signposting matters too.",
        ],
        answerIndex: 1,
        hints: [
          "Check the words BEFORE the colon — they should form a complete, standalone clause.",
          "Never break a verb or preposition ('rely on:') straight into a list with a colon.",
        ],
        explanation:
          "A colon should follow a complete independent clause ('Strong speeches rely on three essentials') to introduce the list or explanation cleanly.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence uses a **semicolon (`;`)** accurately?",
        options: [
          "Because the rain intensified; the outdoor rehearsal moved indoors.",
          "She packed three essentials; cue cards, water, and a stopwatch.",
          "Essays persuade the silent reader; speeches must move a live room.",
          "Although the panel asked tough questions; Kabir stayed composed.",
        ],
        answerIndex: 2,
        hints: [
          "Check BOTH sides of the semicolon: each side must be able to stand alone as a full sentence (unless separating complex list items).",
          "Eliminate sentences starting with 'Because' or 'Although' right before a semicolon.",
        ],
        explanation:
          "Both 'Essays persuade the silent reader' and 'speeches must move a live room' are tightly linked independent clauses — the ideal match for a semicolon.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "A report refers to the opinions of **all the Year 9 students** (plural) and the play area belonging to **the children** (irregular plural). Which phrase punctuates both possessives accurately?",
        options: [
          "the student's opinions and the childrens' play area",
          "the students' opinions and the children's play area",
          "the students's opinions and the childrens's play area",
          "the students opinions and the childrens play area",
        ],
        answerIndex: 1,
        hints: [
          "Regular plural ending in -s ('students'): place the apostrophe AFTER the s (`students'`).",
          "Irregular plural NOT ending in -s ('children'): add `'s` (`children's`).",
        ],
        explanation:
          "Regular plural possessives take `s'` (`students'`), whereas irregular plurals like `children` do not end in -s and therefore take `'s` (`children's`).",
      },
      {
        id: "discursive-writing-public-speaking-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence is written in the **active voice**?",
        options: [
          "The student council drafted the new sustainability charter.",
          "The new sustainability charter was drafted by the student council.",
          "Several recycling bins were relocated near the canteen gates.",
          "A formal apology was issued after the delayed timetable change.",
        ],
        answerIndex: 0,
        hints: [
          "Try the 'by zombies' test after each verb — passive clauses accept 'by zombies' smoothly.",
          "In active voice, the doer of the action sits right in the subject slot.",
        ],
        explanation:
          "'The student council drafted…' puts the actor first performing the verb directly (active voice); the other three options all use passive `be + past participle` constructions.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "Read this pair of sentences:\n- Version 1: *\"Three classrooms were left unlocked overnight, and equipment was misplaced.\"*\n- Version 2: *\"Security staff left three classrooms unlocked overnight and misplaced equipment.\"*\n\nWhy might an official apology deliberately prefer **Version 1 (passive voice)**?",
        options: [
          "Passive voice makes the sentence shorter and punchier for headlines.",
          "Passive voice guarantees the reader knows exactly who holds responsibility.",
          "Passive voice automatically converts an informal tone into vivid Pathos.",
          "Passive voice hides the responsible agent to soften accountability and blame.",
        ],
        answerIndex: 3,
        hints: [
          "Ask: in Version 1, WHO left the classrooms unlocked? Notice the missing subject!",
          "Think about why politicians and institutions sometimes omit the doer.",
        ],
        explanation:
          "Agentless passive voice ('were left… was misplaced') removes the person or group responsible, cushioning institutional blame.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          'Which sentence uses **paired dashes (`— … —`)** effectively to highlight emphatic parenthetical detail?',
        options: [
          "The winning speech — lasted three minutes — and moved the judges.",
          "The winning speech — written on the bus that morning — stunned every judge.",
          "The winning speech stunned — every judge in the packed hall.",
          "The winning speech — although brief, stunned every judge in the hall.",
        ],
        answerIndex: 1,
        hints: [
          "Remove everything between the two dashes: the remaining outer words must still read as a complete, grammatical sentence!",
          "Check also that paired dashes are symmetric (dash opens, dash closes — not dash + comma).",
        ],
        explanation:
          "Removing '— written on the bus that morning —' leaves the intact clause 'The winning speech stunned every judge', while the dashes spotlight the surprising twist.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence uses a **FANBOYS** coordinating conjunction with a comma accurately to join two independent clauses?",
        options: [
          "The park stayed open late, therefore families walked home together.",
          "The park stayed open late, however few visitors brought torches.",
          "The park stayed open late, yet fewer litter problems occurred.",
          "The park stayed open late, moreover streetlamps lit every trail.",
        ],
        answerIndex: 2,
        hints: [
          "Check FANBOYS: For, And, Nor, But, Or, Yet, So.",
          "Words like 'therefore', 'however', and 'moreover' are conjunctive adverbs — they cause comma splices after a bare comma!",
        ],
        explanation:
          "'Yet' is one of the seven FANBOYS coordinating conjunctions, so `, yet` validly joins two independent clauses; 'therefore', 'however', and 'moreover' require a semicolon or full stop.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence opens with a **fronted participle phrase** to vary Year 9 academic syntax cleanly (without creating a dangling modifier)?",
        options: [
          "Weighing both budgets carefully, the council opted for electric buses.",
          "Weighing both budgets carefully, electric buses were opted for quickly.",
          "Weighing both budgets carefully; the council opted for electric buses.",
          "Weighing both budgets carefully the council, opted for electric buses.",
        ],
        answerIndex: 0,
        hints: [
          "Check who is doing the 'Weighing': the noun immediately after the comma must be the person/group actually weighing the budgets!",
          "Also check punctuation: a fronted phrase takes a comma, never a semicolon.",
        ],
        explanation:
          "'the council' sits right after the comma as the logical agent doing the weighing, cleanly punctuated with a single comma.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence is completely **free of unnecessary plural apostrophes**?",
        options: [
          "Several Year 9 essay's from the 1990's examined digital camera's.",
          "Several Year 9 essays from the 1990's examined digital cameras.",
          "Several Year 9 essays from the 1990s examined digital cameras.",
          "Several Year 9 essay's from the 1990s examined digital cameras.",
        ],
        answerIndex: 2,
        hints: [
          "Simple plurals — including decades like '1990s' — NEVER take an apostrophe!",
          "Check every single plural word: essays, 1990s, cameras.",
        ],
        explanation:
          "None of 'essays', '1990s', or 'cameras' show possession or contraction, so zero apostrophes belong in the sentence.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "spag-syntax-precision",
        question:
          "When is using **semicolons inside a list** the *only* clear grammatical choice?",
        options: [
          "Whenever a list contains three or more short single-word nouns.",
          "Whenever the writer wants the list to look more formal than a comma list.",
          "Whenever a list opens immediately after the verb 'including'.",
          "Whenever individual items in the list already contain internal commas.",
        ],
        answerIndex: 3,
        hints: [
          "Picture this list: 'delegates from Kyoto, Japan; Bergen, Norway; and Valdivia, Chile'.",
          "Why would commas alone turn that sentence into six separate places instead of three?",
        ],
        explanation:
          "When list items contain internal commas (e.g. 'Kyoto, Japan; Bergen, Norway; and Valdivia, Chile'), semicolons act as 'super-commas' to prevent ambiguity.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "spag-syntax-precision",
        question:
          'Compare the punctuation effect in these two grammatically valid sentences:\n- Sentence 1: *"The survey exposed one uncomfortable truth; half of pupils sleep beside unlocked phones."*\n- Sentence 2: *"The survey exposed one uncomfortable truth: half of pupils sleep beside unlocked phones."*\n\nWhy is the **colon** in Sentence 2 stylistically sharper than the semicolon?',
        options: [
          "The second clause is a fragment that cannot legally follow a semicolon.",
          "The second clause directly defines and reveals 'one uncomfortable truth', which is a colon’s exact signal.",
          "Semicolons are prohibited whenever a sentence mentions survey percentages or numbers.",
          "Colons always force the reader to pause twice as long as a full stop.",
        ],
        answerIndex: 1,
        hints: [
          "Notice the setup phrase 'one uncomfortable truth' — it creates anticipation for a reveal.",
          "Which punctuation mark acts as an arrow pointing straight into an explanation or reveal?",
        ],
        explanation:
          "While both clauses are independent, the second clause explicitly reveals what 'one uncomfortable truth' IS — making the colon far more purposeful than a semicolon.",
      },
      {
        id: "discursive-writing-public-speaking-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "spag-syntax-precision",
        question:
          "Which sentence maintains **formal academic discursive register** without slipping into slang, clichés, or grammatical errors?",
        options: [
          "Loads of experts reckon homework is kinda pointless, however, parents totally freak out without it.",
          "At the end of the day, homework is a massive pain, it's benefits are basically zero for kids.",
          "Although excessive nightly homework can erode adolescent sleep, targeted practice consolidates long-term mastery.",
          "Being as homework stresses out Year 9's, schools ought to bin it pronto for everybody's sake.",
        ],
        answerIndex: 2,
        hints: [
          "Check both register (formal academic vocabulary vs slang like 'reckon', 'kinda', 'bin it') and punctuation accuracy.",
          "Notice the subordinate opening 'Although…' balancing two nuanced ideas cleanly.",
        ],
        explanation:
          "Precise academic verbs ('erode', 'consolidates'), balanced syntax ('Although…'), and flawless SPaG maintain authoritative Year 9 discursive register.",
      },
    ],
  },
];
