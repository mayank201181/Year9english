import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "the-novel-analytical-essay-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "narrative-voice-perspective",
      question:
        "Read this original extract: *“Tessa checked the train board twice. Honestly, how could a flagship express run forty minutes late on the morning of her interview? She bit her lip.”*\n\nName the three-word narrative technique used in the second sentence where Tessa's private voice blends into third-person narration without speech tags.",
      answer: {
        type: "text",
        accept: ["free indirect discourse", "free indirect speech", "free indirect style"],
        display: "Free indirect discourse",
      },
      traps: [
        {
          spec: { type: "text", accept: ["first person", "first-person", "first-person narration", "first person narration"] },
          feedback: "Check the pronouns: 'Tessa', 'her', 'She' are all third-person — only the inner tone belongs to Tessa.",
        },
        {
          spec: { type: "text", accept: ["dramatic irony"] },
          feedback: "Dramatic irony is when the reader knows a secret a character misses; here we hear Tessa's unspoken thoughts inside third-person prose.",
        },
      ],
      hints: [
        "Notice the pronouns stay third-person ('Tessa', 'her'), yet the indignant question has no 'she thought' tag.",
      ],
      solution: [
        "The extract remains in third-person grammar (*“Tessa”*, *“her”*, *“She”*).",
        "The rhetorical question *“Honestly, how could...”* captures Tessa's anxious inner voice directly without a reporting verb.",
        "This fusion of third-person narration and a character's inner idiom is **free indirect discourse**.",
      ],
    },
    {
      id: "the-novel-analytical-essay-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "narrative-voice-perspective",
      question:
        "Read this original line: *“Of course I never broke the curfew — well, except when urgent duty called me down to the boathouse after midnight.”* What does this self-contradiction most clearly establish?",
      options: [
        "An unreliable narrator rationalising rule-breaking through excuses",
        "An omniscient narrator surveying an entire village's curfew habits",
        "A static character refusing to learn any new maritime vocabulary",
        "A microcosm comparing a wooden boathouse to a national parliament",
      ],
      answerIndex: 0,
      hints: [
        "Compare the opening boast ('never broke the curfew') with the dashed admission ('well, except...').",
      ],
      explanation:
        "Contradicting *“never broke the curfew”* immediately with a defensive exception (*“well, except when urgent duty called”*) exposes an **unreliable narrator** trying to protect their own image.",
    },
    {
      id: "the-novel-analytical-essay-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "characterisation-foils",
      question:
        "What one-word literary term names a contrasting character whose choices and traits throw another character's personality into sharper relief?",
      answer: {
        type: "text",
        accept: ["foil", "character foil", "a foil"],
        display: "Foil",
      },
      traps: [
        {
          spec: { type: "text", accept: ["protagonist"] },
          feedback: "The protagonist is the central character; we want the short term for the contrasting partner paired against them.",
        },
        {
          spec: { type: "text", accept: ["motif"] },
          feedback: "A motif is a recurring image or symbol, not a contrasting character.",
        },
      ],
      hints: [
        "Think of the four-letter term also used for metal backing that makes a gemstone shine more brightly.",
      ],
      solution: [
        "A **foil** contrasts with another character under shared pressure so both characters' values stand out clearly.",
      ],
    },
    {
      id: "the-novel-analytical-essay-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "characterisation-foils",
      question:
        "When a character says *“I'm completely fine”* while snapping a wooden pencil in half beneath the desk, what single literary term describes the unspoken anger hiding beneath the polite words?",
      answer: {
        type: "text",
        accept: ["subtext", "dialogue subtext"],
        display: "Subtext",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pathetic fallacy"] },
          feedback: "Pathetic fallacy attributes human emotion to weather or nature, not hidden meaning beneath dialogue.",
        },
      ],
      hints: [
        "Think of the Latin prefix 'sub-' (underneath) joined to 'text'.",
        "It refers to what sits beneath spoken lines.",
      ],
      solution: [
        "The violent physical gesture contradicts the polite spoken words.",
        "The hidden emotional truth beneath spoken dialogue is called **subtext**.",
      ],
    },
    {
      id: "the-novel-analytical-essay-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "setting-motif-structure",
      question:
        "Read this original line: *“The sullen wind spat sleet across the empty courtyard as the gates clanged shut.”* Name the two-word literary device giving human anger to the weather.",
      answer: {
        type: "text",
        accept: ["pathetic fallacy"],
        display: "Pathetic fallacy",
      },
      traps: [
        {
          spec: { type: "text", accept: ["simile"] },
          feedback: "There is no 'like' or 'as' comparison here — look at the specific term for weather mirroring human emotion.",
        },
      ],
      hints: [
        "The wind is described as 'sullen' and spitting sleet — human mood projected onto weather.",
      ],
      solution: [
        "Attributing human mood (*“sullen”*, *“spat”*) to weather to heighten atmosphere is **pathetic fallacy**.",
      ],
    },
    {
      id: "the-novel-analytical-essay-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "setting-motif-structure",
      question:
        "A novel opens in Chapter 1 with a girl locking an iron birdcage on a foggy roof and closes on the final page with her swinging the same cage door wide open in clear dawn light. What structural technique is used?",
      options: [
        "In medias res beginning mid-conversation without exposition",
        "An altered cyclical structure using a returning motif to measure growth",
        "Omniscient prolepsis leaping twenty years ahead into the future",
        "Dialogue subtext exposing a bitter argument between siblings",
      ],
      answerIndex: 1,
      hints: [
        "Notice the ending returns to the opening object (the birdcage), yet changes the action from locking to opening.",
        "What do we call an ending that echoes the beginning?",
      ],
      explanation:
        "Bookending the novel with the same birdcage motif while transforming *locked* into *wide open* creates an **altered cyclical structure**, making the character's liberation structurally unmistakable.",
    },
    {
      id: "the-novel-analytical-essay-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "setting-motif-structure",
      question:
        "What three-word Latin phrase describes a novel opening that plunges the reader straight into the middle of ongoing action or crisis?",
      answer: {
        type: "text",
        accept: ["in medias res", "in media res"],
        display: "In medias res",
      },
      traps: [
        {
          spec: { type: "text", accept: ["analepsis", "flashback"] },
          feedback: "Analepsis/flashback jumps back in time; this Latin phrase means 'into the middle of things'.",
        },
      ],
      hints: [
        "It literally translates from Latin as 'into the middle of things'.",
        "It starts with the preposition 'in'.",
      ],
      solution: [
        "Opening directly amid crisis without prior exposition is ***in medias res***.",
      ],
    },
    {
      id: "the-novel-analytical-essay-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "analytical-essay-craft",
      question:
        "Which analytical sentence demonstrates the strongest **embedded quotation** and **single-word zoom** on the line *“His polite smile froze over the contract”*?",
      options: [
        "The quote “His polite smile froze over the contract” shows he is upset and makes readers read on.",
        "This metaphor puts a clear frosty picture in the reader's head about signing a difficult paper.",
        "The writer exposes sudden hostility as his smile “froze,” the verb implying icy, immovable calculation.",
        "In line 3, the writer writes “His polite smile froze” to prove that the contract is definitely unfair.",
      ],
      answerIndex: 2,
      hints: [
        "Look for a short quotation woven smoothly into the sentence, a named word class, and connotations explored without clunky 'This quote shows' phrasing.",
        "Avoid generic phrases like 'makes readers read on' or blunt claims like 'proves'.",
      ],
      explanation:
        "Embedding *“froze”* directly into the sentence, identifying it as a **verb**, and unpacking its connotations (*icy, immovable calculation*) exemplifies top-band single-word zoom.",
    },
    {
      id: "the-novel-analytical-essay-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "setting-motif-structure",
      question:
        "What single literary term names a small, bounded fictional setting (like one farm, island or boarding school) used by a writer to mirror wider society in miniature?",
      answer: {
        type: "text",
        accept: ["microcosm", "a microcosm"],
        display: "Microcosm",
      },
      traps: [
        {
          spec: { type: "text", accept: ["motif"] },
          feedback: "A motif is a recurring symbol or phrase; this word comes from Greek roots meaning 'small world'.",
        },
      ],
      hints: [
        "Break down the Greek roots: 'micro' (small) + 'cosmos' (world).",
        "It is one word of nine letters.",
      ],
      solution: [
        "A compact fictional world modelling wider social or political structures is a **microcosm**.",
      ],
    },
    {
      id: "the-novel-analytical-essay-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "analytical-essay-craft",
      question:
        "Which opening best acts as a **conceptual thesis** for the prompt *How does the writer present loyalty in the novel?*",
      options: [
        "In this essay I will write three paragraphs about loyalty using quotes from the novel.",
        "Loyalty is a major theme because several characters stay friends until the final chapter.",
        "Firstly, two characters make a promise in Chapter 1, and later one character breaks it.",
        "Rather than idealising blind devotion, the writer frames loyalty as a moral test between obedience and conscience.",
      ],
      answerIndex: 3,
      hints: [
        "Reject plan-announcing openings ('In this essay I will...') and plot summaries.",
        "Look for a nuanced, debatable argument about the writer's deeper message.",
      ],
      explanation:
        "Arguing that the writer frames loyalty as *“a moral test between obedience and conscience”* presents an original, debatable **conceptual thesis** that can organise an entire analytical essay.",
    },
  ],
  papers: [
    {
      id: "the-novel-analytical-essay-p1",
      title: "Practice Paper 1 — Narrative Voice, Characterisation & Subtext",
      questions: [
        {
          id: "the-novel-analytical-essay-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "narrative-voice-perspective",
          question:
            "Read this original extract: *“Mei pressed her ear to the parlour door, convinced the visitors were whispering her name. Inside, however, the solicitors were merely arguing over a missing railway timetable.”*\n\nWhat exact narrative perspective (three words) allows the narrator to reveal BOTH Mei's mistaken belief AND the solicitors' actual conversation?",
          answer: {
            type: "text",
            accept: [
              "third-person omniscient",
              "third person omniscient",
              "3rd person omniscient",
              "3rd-person omniscient",
              "omniscient narrator",
              "omniscient",
            ],
            display: "Third-person omniscient",
          },
          traps: [
            {
              spec: { type: "text", accept: ["third-person limited", "third person limited", "3rd person limited"] },
              feedback: "Third-person limited stays locked to one character's knowledge; here the narrator knows what happens behind the closed door too.",
            },
          ],
          hints: [
            "Check the pronouns (third-person) and ask whether the narrator is restricted to one mind or all-knowing.",
          ],
          solution: [
            "The extract uses third-person pronouns (*“Mei”*, *“her”*, *“the solicitors”*).",
            "Because the narrator reveals facts hidden behind the locked door that Mei cannot see, it is **third-person omniscient** narration.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "narrative-voice-perspective",
          question:
            "In a scene where a character believes people are plotting against her while the reader knows they are only discussing a timetable, what two-word literary device describes the gap between the reader's knowledge and the character's?",
          answer: {
            type: "text",
            accept: ["dramatic irony"],
            display: "Dramatic irony",
          },
          traps: [
            {
              spec: { type: "text", accept: ["foreshadowing"] },
              feedback: "Foreshadowing hints at future events; this device is about what the reader knows *right now* that the character does not.",
            },
          ],
          hints: [
            "Think of the term often used in Shakespeare and novels when the audience holds crucial knowledge a character lacks.",
          ],
          solution: [
            "When the reader knows the truth while a character remains mistaken, the writer creates **dramatic irony**.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "narrative-voice-perspective",
          question:
            "What single literary noun describes the specific character vantage point through whose perceptions and emotional limits a third-person scene is filtered?",
          answer: {
            type: "text",
            accept: ["focalisation", "focalization", "focaliser", "focalizer"],
            display: "Focalisation",
          },
          traps: [
            {
              spec: { type: "text", accept: ["alliteration", "metaphor"] },
              feedback: "We need the narratology term derived from 'focus' that distinguishes whose eyes we see through from who speaks.",
            },
          ],
          hints: [
            "It shares its root with the word 'focus'.",
            "Critics distinguish narration (who speaks) from this term (who sees).",
          ],
          solution: [
            "**Focalisation** names the character perspective through which events are filtered, distinct from the speaking voice.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "narrative-voice-perspective",
          question:
            "Read this original extract: *“I did not steal the silver compass — I rescued it from a desk that no one appreciated. Any sensible person would thank me.”*\n\nWhat two-word literary term describes a narrator whose excuses and self-deception make readers distrust their version of events?",
          answer: {
            type: "text",
            accept: ["unreliable narrator", "an unreliable narrator"],
            display: "Unreliable narrator",
          },
          traps: [
            {
              spec: { type: "text", accept: ["omniscient narrator"] },
              feedback: "An omniscient narrator is all-knowing in third person; here a biased 'I' twists the truth.",
            },
          ],
          hints: [
            "Look at how the speaker rebrands theft as 'rescuing' to defend their ego.",
            "The first word starts with 'un-'.",
          ],
          solution: [
            "Reframing theft as *“rescued”* signals defensive distortion — the hallmark of an **unreliable narrator**.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "characterisation-foils",
          question:
            "A protagonist begins a novel obeying every unfair command in silence, but by the climax speaks out publicly against the council despite personal danger. Is this character **dynamic** or **static**?",
          answer: {
            type: "text",
            accept: ["dynamic", "dynamic character", "a dynamic character"],
            display: "Dynamic",
          },
          traps: [
            {
              spec: { type: "text", accept: ["static", "static character"] },
              feedback: "Static means unchanging; here the character shifts deeply from silent obedience to public defiance.",
            },
          ],
          hints: [
            "Compare the character's internal courage at the start versus the climax.",
            "Choose between the two arc terms: dynamic or static.",
          ],
          solution: [
            "Because the character undergoes a decisive internal transformation from fear to moral courage, they are a **dynamic** character.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "characterisation-foils",
          question:
            "Read this original line of dialogue: *“‘Perhaps if you had checked the latch before leaving—’ ‘I checked it twice, Tariq. Drop it.’”*\n\nName the punctuation mark (`—`) used at the end of the first speech to signal an abrupt verbal interruption.",
          answer: {
            type: "text",
            accept: ["em-dash", "em dash", "dash", "a dash", "an em dash", "an em-dash"],
            display: "Dash (em-dash)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ellipsis", "ellipses"] },
              feedback: "An ellipsis (...) trails off slowly in hesitation; this single sharp bar cuts the speaker off mid-clause.",
            },
          ],
          hints: [
            "Look right after the word 'leaving'.",
            "It is a long horizontal punctuation mark showing someone has been cut short.",
          ],
          solution: [
            "The **dash** (specifically an **em-dash**) cuts the speaker off abruptly, revealing defensiveness and dominance in the second speaker.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "characterisation-foils",
          question:
            "Read this original line: *“‘I suppose... well, if everyone else is going... maybe I shouldn't hold you up,’ Clara whispered.”*\n\nName the three-dot punctuation mark (`...`) used here to signal hesitation and unspoken vulnerability.",
          answer: {
            type: "text",
            accept: ["ellipsis", "an ellipsis", "ellipses"],
            display: "Ellipsis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dash", "em-dash", "em dash"] },
              feedback: "A dash marks a sharp cut-off; three trailing dots have their own specific name.",
            },
          ],
          hints: [
            "Think of the grammatical name for three consecutive dots (`...`).",
            "It begins with 'el-'.",
          ],
          solution: [
            "The **ellipsis** (`...`) fragments Clara's syntax, letting hesitation and quiet self-doubt surface between her words.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "narrative-voice-perspective",
          question:
            "Read this original extract: *“Jonas kept his eyes on the lantern ahead. He could not know what awaited beyond the ridge, only that his own boots were freezing through.”*\n\nWhat three-word narrative perspective uses 'he/she' pronouns while restricting the reader strictly to one character's private awareness?",
          answer: {
            type: "text",
            accept: ["third-person limited", "third person limited", "3rd person limited", "3rd-person limited"],
            display: "Third-person limited",
          },
          traps: [
            {
              spec: { type: "text", accept: ["third-person omniscient", "third person omniscient", "omniscient"] },
              feedback: "Look at the clue 'He could not know what awaited' — our knowledge is strictly capped at Jonas's perspective, not all-knowing.",
            },
          ],
          hints: [
            "Identify the pronoun group (third-person) first.",
            "Now add the word describing restricted access to just one character's mind.",
          ],
          solution: [
            "Using *“Jonas”* / *“He”* while restricting awareness to Jonas alone defines **third-person limited** narration.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "characterisation-foils",
          question:
            "In the **example novel** *Animal Farm*, Benjamin never changes his sceptical outlook from the first chapter to the last, quietly watching ideals decay while other animals are swept up in slogans. Is Benjamin a **dynamic** or **static** character?",
          answer: {
            type: "text",
            accept: ["static", "static character", "a static character"],
            display: "Static",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dynamic", "dynamic character"] },
              feedback: "Dynamic characters transform inwardly; here the prompt explicitly notes Benjamin 'never changes his sceptical outlook'.",
            },
          ],
          hints: [
            "Ask whether Benjamin's core beliefs transform or stay fixed throughout.",
            "Choose between dynamic and static.",
          ],
          solution: [
            "Because Benjamin's cynical outlook remains fixed from start to finish, he is a **static** character acting as an unchanging witness.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          question:
            "Read this original line: *“The prefect's boots hammered down the empty corridor.”*\n\nWhat **word class** (part of speech) is the bolded word in *“boots **hammered** down”* — a key label to include during single-word zoom?",
          answer: {
            type: "text",
            accept: ["verb", "dynamic verb", "action verb", "a verb"],
            display: "Verb",
          },
          traps: [
            {
              spec: { type: "text", accept: ["noun", "adjective", "adverb"] },
              feedback: "Check what 'hammered' is doing in the clause: it expresses the forceful physical action performed by the boots.",
            },
          ],
          hints: [
            "Ask what job 'hammered' performs after the subject 'boots'.",
            "It names the forceful action taking place.",
          ],
          solution: [
            "*“Hammered”* is a **verb** (specifically a dynamic verb) carrying harsh, metallic connotations of threat and rigid enforcement.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          question:
            "What term describes placing two sharply contrasting words, images or character behaviours right beside one another to highlight their clash (such as polite dialogue paired with white-knuckled rage)?",
          answer: {
            type: "text",
            accept: ["juxtaposition", "juxtaposing"],
            display: "Juxtaposition",
          },
          traps: [
            {
              spec: { type: "text", accept: ["alliteration", "personification"] },
              feedback: "We want the structural/imagery term meaning 'placing contrasting things side by side'.",
            },
          ],
          hints: [
            "It begins with the letter 'j' and literally stems from Latin meaning 'placed side by side'.",
            "It has thirteen letters.",
          ],
          solution: [
            "**Juxtaposition** places contrasting elements side by side so their tension or hypocrisy stands out vividly.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "narrative-voice-perspective",
          marks: 3,
          question:
            "Read this original extract:\n\n*“I had only stepped inside the headmistress's study to return a borrowed ruler — though of course Miss Vance made a ridiculous fuss simply because the examination envelope happened to lie open beside my hand.”*\n\nExplain how the writer constructs an unreliable narrator in this extract and what effect this creates for the reader. [3 marks]",
          hints: [
            "Spot the minimising adverb or excuse the narrator uses to sound innocent.",
            "Notice how the narrator deflects blame onto Miss Vance while accidentally revealing suspicious evidence.",
            "Name the effect created when the reader spots the gap between the speaker's claim and reality.",
          ],
          markScheme: [
            {
              point: "Identifies defensive minimising language ('only stepped', 'happened to lie open') used to downplay wrongdoing.",
              keywords: ["only", "minimis", "excuse", "downplay", "happened to", "innocent"],
            },
            {
              point: "Notes the narrator deflecting blame onto Miss Vance ('ridiculous fuss') despite suspicious physical evidence (the open examination envelope).",
              keywords: ["ridiculous fuss", "deflect", "blame", "envelope", "suspicious", "contradict"],
            },
            {
              point: "Explains the reader effect: creates dramatic irony, scepticism or distrust toward the narrator's self-serving version.",
              keywords: ["dramatic irony", "distrust", "sceptic", "skeptic", "doubt", "self-serving", "bias"],
            },
          ],
          modelAnswer:
            "The writer signals unreliability through minimising excuses such as 'only stepped' and 'happened to lie open,' which attempt to downplay obvious wrongdoing. By dismissing Miss Vance's reaction as a 'ridiculous fuss' to deflect blame away from the open examination envelope, the speaker contradicts their own innocence. Arguably, this gap generates sharp dramatic irony, prompting the reader to distrust the narrator's self-serving bias.",
          commonError:
            "Simply stating 'the narrator is lying' without quoting the defensive phrasing or explaining how dramatic irony positions the reader.",
        },
        {
          id: "the-novel-analytical-essay-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "narrative-voice-perspective",
          marks: 3,
          question:
            "Read this original extract:\n\n*“Helena paused outside the hall. Truly, what did these town councillors expect — that she would bow and apologise for telling the plain truth? She lifted her chin and pushed the oak doors wide.”*\n\nIdentify the narrative technique used in the second sentence and explain how it shapes reader sympathy. [3 marks]",
          hints: [
            "Check the pronouns ('Helena', 'she') alongside the unquoted rhetorical question ('Truly, what did...').",
            "Name the technique that fuses third-person grammar with a character's inner voice.",
            "Explain how hearing her defiance directly builds empathy or admiration before her decisive physical action.",
          ],
          markScheme: [
            {
              point: "Accurately names free indirect discourse (or free indirect speech/style).",
              keywords: ["free indirect"],
            },
            {
              point: "Quotes or identifies the unquoted rhetorical question / defiant inner tone ('Truly', 'bow and apologise') inside third-person prose.",
              keywords: ["truly", "rhetorical question", "bow", "apologise", "inner voice", "speech tag"],
            },
            {
              point: "Explains how immediate access to her principled indignation builds reader empathy, alignment or admiration alongside 'lifted her chin'.",
              keywords: ["empathy", "align", "admir", "courage", "defian", "dignity", "chin"],
            },
          ],
          modelAnswer:
            "The writer employs free indirect discourse in the second sentence, weaving Helena's indignant rhetorical question ('Truly, what did these town councillors expect') directly into third-person prose without speech tags. Letting her refusal to 'bow and apologise' erupt straight onto the page gives readers intimate access to her principled defiance, aligning our empathy and admiration with her courage as she lifts her chin and enters.",
          commonError:
            "Mistaking free indirect discourse for first-person narration because the voice sounds personal — always verify the pronouns ('she'/'her').",
        },
        {
          id: "the-novel-analytical-essay-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "characterisation-foils",
          marks: 4,
          question:
            "Read this original exchange:\n\n*“‘Sit down, Ravi,’ Mr Mercer said softly, folding his spectacles with unhurried precision. ‘I merely want to hear why the laboratory ledger is missing three pages.’\n‘I wasn't even on duty—’\n‘Sit down, Ravi.’”*\n\nUsing WHAT–HOW–WHY, analyse how the writer uses dialogue, punctuation and gesture to construct a power imbalance. [4 marks]",
          hints: [
            "Start with a clear WHAT claim about quiet, intimidating authority.",
            "Analyse Mr Mercer's calm micro-action ('folding his spectacles') and soft tone paired with repeated commands.",
            "Zoom into the em-dash interruption cutting Ravi off mid-defence.",
            "Explain WHY this makes Mr Mercer's control feel more unsettling than shouting.",
          ],
          markScheme: [
            {
              point: "Makes a clear conceptual claim about Mr Mercer exercising coercive or intimidating control over Ravi.",
              keywords: ["authority", "control", "dominan", "intimidat", "coercive", "powerless"],
            },
            {
              point: "Analyses Mr Mercer's calm demeanour or micro-action ('said softly', 'folding his spectacles', 'unhurried precision') as calculated menace.",
              keywords: ["softly", "spectacles", "unhurried", "calculat", "calm", "menac"],
            },
            {
              point: "Analyses the em-dash interruption cutting Ravi's protest short and/or the repeated imperative 'Sit down, Ravi.'",
              keywords: ["dash", "interrupt", "imperative", "repetit", "sit down", "cuts"],
            },
            {
              point: "Explains the reader effect: quiet, polite restraint makes his dominance feel colder and strips Ravi of a voice.",
              keywords: ["unsettling", "cold", "silenc", "strip", "trapped", "helpless", "vulnerability"],
            },
          ],
          modelAnswer:
            "The writer constructs Mr Mercer's authority as chillingly coercive rather than loud. Speaking 'softly' while 'folding his spectacles with unhurried precision' implies calculated menace, as if he enjoys prolonging Ravi's dread. When Ravi tries to defend himself, the abrupt em-dash cuts him off mid-clause, and Mr Mercer's repeated imperative 'Sit down, Ravi' asserts absolute dominance. Arguably, this quiet, controlled restraint strips Ravi of a voice and unsettles the reader far more than open shouting.",
          commonError:
            "Describing Mr Mercer as 'mean' without zooming into the contrast between his calm gesture ('softly', 'unhurried') and his sharp em-dash interruption.",
        },
        {
          id: "the-novel-analytical-essay-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "characterisation-foils",
          marks: 4,
          question:
            "Read this original extract featuring two brothers facing a ruined harvest:\n\n*“Owen kicked the splintered fence post. ‘We pack tonight and take the coach south. Only fools stay to starve.’\nBeside him, Callum knelt in the wet furrows, gently lifting a single unbroken stalk of barley. ‘Our grandfather drained this marsh by hand, Owen. You don't walk away from soil that knows your name.’”*\n\nAnalyse how the writer uses character foils and contrasting language to dramatise a thematic conflict. [4 marks]",
          hints: [
            "Identify the big thematic clash between the two brothers (e.g. pragmatism/escape vs heritage/rooted loyalty).",
            "Contrast Owen's aggressive action ('kicked') and dismissive phrasing ('Only fools') with Callum's tender gesture ('knelt', 'gently lifting').",
            "Zoom into Callum's personification of the land ('soil that knows your name').",
            "Explain how pairing them as foils forces the reader to weigh survival against belonging.",
          ],
          markScheme: [
            {
              point: "Frames Owen and Callum as contrasting character foils embodying opposing values (pragmatic escape/survival vs rooted loyalty/heritage).",
              keywords: ["escape", "survival", "pragmat", "heritage", "loyalty", "belonging", "rooted"],
            },
            {
              point: "Analyses Owen's violent verb ('kicked') and/or blunt dismissal ('Only fools', 'pack tonight') showing bitterness or urgency.",
              keywords: ["kicked", "only fools", "aggressive", "bitter", "impulsive", "dismiss", "urgent"],
            },
            {
              point: "Analyses Callum's gentle physical care ('knelt', 'gently lifting', 'single unbroken stalk') showing reverence or quiet hope.",
              keywords: ["knelt", "gently", "unbroken", "reveren", "hope", "tender", "resilien"],
            },
            {
              point: "Zooms into the personification ('soil that knows your name') or explains how the contrast invites readers to feel torn between both perspectives.",
              keywords: ["personif", "knows your name", "intimate", "ancestr", "torn", "sympath", "tension"],
            },
          ],
          modelAnswer:
            "The writer pairs Owen and Callum as opposing foils to dramatise a conflict between pragmatic survival and ancestral loyalty. Owen's aggressive verb 'kicked' and blunt dismissal that 'Only fools stay to starve' convey bitter urgency to escape ruin. Conversely, Callum 'knelt' and 'gently lifting' one 'unbroken stalk' conveys almost sacred reverence and fragile resilience. Arguably, his personification of 'soil that knows your name' turns the land into a living witness, leaving the reader torn between practical self-preservation and deep-rooted belonging.",
          commonError:
            "Describing what Owen and Callum say separately without comparing their contrasting verbs ('kicked' vs 'knelt') and linking to a shared thematic tension.",
        },
      ],
    },
    {
      id: "the-novel-analytical-essay-p2",
      title: "Practice Paper 2 — Setting, Structure & Analytical Essay Craft",
      questions: [
        {
          id: "the-novel-analytical-essay-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "setting-motif-structure",
          question:
            "In a novel about political betrayal, a cracked pocket watch appears in Chapters 1, 6 and 15, each time marking a character running out of moral courage. What single literary term describes a symbolic object that **recurs** across the whole text?",
          answer: {
            type: "text",
            accept: ["motif", "a motif", "recurring motif"],
            display: "Motif",
          },
          traps: [
            {
              spec: { type: "text", accept: ["simile", "alliteration"] },
              feedback: "Those are sentence-level figures; we need the five-letter term for a recurring symbolic thread across a whole novel.",
            },
          ],
          hints: [
            "It is a five-letter word borrowed from French/music meaning a recurring thematic pattern.",
          ],
          solution: [
            "An image or symbolic object that returns repeatedly across a novel is a **motif**.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "setting-motif-structure",
          question:
            "What single Greek-derived structural term means a **flashback** that interrupts the present timeline to reveal a formative past event?",
          answer: {
            type: "text",
            accept: ["analepsis"],
            display: "Analepsis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["prolepsis"] },
              feedback: "Prolepsis is a flash-forward into the future; we want its backward-looking twin.",
            },
          ],
          hints: [
            "It ends in '-lepsis' and starts with 'ana-' (back/again).",
          ],
          solution: [
            "**Analepsis** is the precise literary term for a flashback into earlier events.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "setting-motif-structure",
          question:
            "What single Greek-derived structural term means a **flash-forward** leaping ahead to preview a future consequence before returning to the present narrative?",
          answer: {
            type: "text",
            accept: ["prolepsis"],
            display: "Prolepsis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["analepsis"] },
              feedback: "Analepsis looks backward; think of the prefix 'pro-' (forward).",
            },
          ],
          hints: [
            "Swap the prefix of 'analepsis' for the prefix meaning 'forward'.",
            "It starts with 'pro-'.",
          ],
          solution: [
            "**Prolepsis** leaps forward in time to hint at a coming outcome or catastrophe.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "setting-motif-structure",
          question:
            "In Chapter 1 of a novel, a ship's captain laughs off a faint hairline crack in the rudder beam as *“nothing a coat of tar won't cure.”* What one-word structural device plants this early clue of later disaster?",
          answer: {
            type: "text",
            accept: ["foreshadowing", "foreshadow"],
            display: "Foreshadowing",
          },
          traps: [
            {
              spec: { type: "text", accept: ["flashback", "analepsis"] },
              feedback: "This clue points ahead to future danger rather than looking back to the past.",
            },
          ],
          hints: [
            "Think of casting a 'shadow' ahead of a future event.",
          ],
          solution: [
            "Planting an early warning sign of later disaster is **foreshadowing**.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "setting-motif-structure",
          question:
            "A novel opens in a cramped, windowless basement and ends in the exact same basement after every escape attempt fails. What two-word term describes this looping structural pattern?",
          answer: {
            type: "text",
            accept: ["cyclical structure", "circular structure", "cyclical ending", "cyclical narrative"],
            display: "Cyclical structure",
          },
          traps: [
            {
              spec: { type: "text", accept: ["linear structure", "chronological structure"] },
              feedback: "Linear structure moves straight from A to B; returning to the opening place forms a closed circle.",
            },
          ],
          hints: [
            "Think of a 'cycle' or circle bringing the ending right back to the beginning.",
            "Two words: 'c______ structure'.",
          ],
          solution: [
            "Echoing the opening setting or image at the close creates a **cyclical structure**, here reinforcing entrapment.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          question:
            "What two-word term names the debatable, big-idea opening argument at the heart of a top-band Year 9 analytical essay (replacing *“In this essay I will write about...”*)?",
          answer: {
            type: "text",
            accept: ["conceptual thesis", "thesis statement", "a conceptual thesis", "a thesis statement", "thesis"],
            display: "Conceptual thesis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["plot summary", "topic sentence"] },
              feedback: "A topic sentence opens a body paragraph; we want the overarching argument guiding the whole essay.",
            },
          ],
          hints: [
            "The second word is a six-letter academic word meaning 'central argument'.",
            "The first word starts with 'con-' (meaning driven by big ideas).",
          ],
          solution: [
            "A **conceptual thesis** (or thesis statement) anchors every paragraph to one sharp argument about the writer's message.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          question:
            "What three-word analytical paragraph framework (hyphenated, spaced, or as its three-letter acronym) structures essays around **claim**, **method + embedded evidence**, and **writer's purpose / reader effect**?",
          answer: {
            type: "text",
            accept: ["what-how-why", "what how why", "whw", "w-h-w"],
            display: "WHAT–HOW–WHY",
          },
          traps: [
            {
              spec: { type: "text", accept: ["pee", "peel"] },
              feedback: "PEE/PEEL is the older basic chain; Year 9 essays upgrade to the three-question framework asking WHAT, HOW and WHY.",
            },
          ],
          hints: [
            "It consists of three short question words starting with W, H, and W.",
            "The first word asks what the writer conveys; the last asks why.",
          ],
          solution: [
            "**WHAT–HOW–WHY** (WHW) links conceptual claim, embedded craft/zoom and writer's purpose seamlessly.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          question:
            "Read this original sentence: *“The council's gilded decree hung above the starving square.”*\n\nWhat **word class** is *“gilded”* when zooming in on its connotations of superficial gold-plated wealth covering decay?",
          answer: {
            type: "text",
            accept: ["adjective", "an adjective", "past participle adjective"],
            display: "Adjective",
          },
          traps: [
            {
              spec: { type: "text", accept: ["noun", "adverb"] },
              feedback: "Check what 'gilded' modifies: it sits directly before the noun 'decree' to describe its appearance and status.",
            },
          ],
          hints: [
            "Look at its position directly before the noun 'decree'.",
            "Which word class describes or modifies a noun?",
          ],
          solution: [
            "*“Gilded”* acts as an **adjective** modifying *“decree”*, suggesting thin gold veneer disguising hollow justice.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          question:
            "What hyphenated term criticises the weak exam habit of listing literary devices (*“There is a simile, a metaphor and alliteration”*) without explaining how they create meaning?",
          answer: {
            type: "text",
            accept: ["feature-spotting", "feature spotting", "technique-spotting", "technique spotting"],
            display: "Feature-spotting",
          },
          traps: [
            {
              spec: { type: "text", accept: ["single-word zoom", "single word zoom"] },
              feedback: "Single-word zoom is a high-band skill that unpacks connotations deeply; here we want the label for empty device-listing.",
            },
          ],
          hints: [
            "Think of 'spotting' literary 'features' like ticking items off a birdwatching list.",
            "Two words joined by a hyphen: 'f______-s_______'.",
          ],
          solution: [
            "**Feature-spotting** labels techniques without analysing effect, capping an essay below the top bands.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          question:
            "What one-word noun names the emotional associations and secondary cultural meanings a word carries beyond its literal dictionary definition (for example, *“chained”* suggesting captivity and loss of dignity)?",
          answer: {
            type: "text",
            accept: ["connotations", "connotation"],
            display: "Connotations",
          },
          traps: [
            {
              spec: { type: "text", accept: ["denotation", "denotations"] },
              feedback: "Denotation is the literal dictionary definition; we want the term for deeper emotional and cultural associations.",
            },
          ],
          hints: [
            "It contrasts with 'denotation' (literal meaning) and starts with 'con-'.",
            "Single-word zoom always unpacks at least two of these.",
          ],
          solution: [
            "**Connotations** are the layered emotional and symbolic associations unlocked during single-word zoom.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "setting-motif-structure",
          question:
            "Read this original prose snippet: *“The hall bustled with musicians, chatter and clinking glassware. Across the threshold, one shadow detached itself from the wall. The music stopped.”*\n\nDoes the structural camera shift move from **narrow to wide** or from **wide to narrow**?",
          answer: {
            type: "text",
            accept: ["wide to narrow", "wide-to-narrow", "from wide to narrow"],
            display: "Wide to narrow",
          },
          traps: [
            {
              spec: { type: "text", accept: ["narrow to wide", "narrow-to-wide", "from narrow to wide"] },
              feedback: "Look at the opening ('hall bustled with musicians, chatter and clinking glassware') compared with the closing focus ('one shadow').",
            },
          ],
          hints: [
            "Compare the broad bustling crowd in sentence 1 with 'one shadow' in sentence 2.",
            "Decide whether the lens is zooming in or zooming out.",
          ],
          solution: [
            "The writer zooms **wide to narrow** — from a crowded festive hall down to a single menacing shadow — compressing space to spike suspense.",
          ],
        },
        {
          id: "the-novel-analytical-essay-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "setting-motif-structure",
          marks: 3,
          question:
            "Read this original extract:\n\n*“The quarry walls towered around the dormitories like grey teeth, trapping the winter mist until noon. Beyond the wire fence, the coast road glimmered out of reach.”*\n\nExplain how the writer uses setting and imagery to create a sense of entrapment. [3 marks]",
          hints: [
            "Zoom into the predatory simile 'like grey teeth' and the active verb 'towered' or 'trapping'.",
            "Look at how the winter mist and 'wire fence' reinforce claustrophobia.",
            "Examine the contrast with 'glimmered out of reach' on the coast road.",
          ],
          markScheme: [
            {
              point: "Analyses the simile 'like grey teeth' and/or imposing verb 'towered' / 'trapping' to suggest predatory confinement.",
              keywords: ["teeth", "simile", "predator", "towered", "trapping", "swallow", "menac"],
            },
            {
              point: "Analyses physical/atmospheric barriers ('winter mist', 'wire fence') creating suffocation, bleakness or prison imagery.",
              keywords: ["wire fence", "mist", "prison", "claustrophob", "bleak", "cage", "barrier"],
            },
            {
              point: "Analyses the contrast of the 'coast road' that 'glimmered out of reach' to heighten longing for unattainable freedom.",
              keywords: ["coast road", "glimmered", "out of reach", "contrast", "freedom", "unattainable", "hope"],
            },
          ],
          modelAnswer:
            "The writer transforms the landscape into a hostile predator through the simile 'like grey teeth,' while the verbs 'towered' and 'trapping' make the quarry walls feel actively menacing. Claustrophobic prison imagery intensifies with the 'wire fence' and lingering 'winter mist,' sealing the dormitories off from warmth. By contrasting this enclosure with a distant 'coast road' that 'glimmered out of reach,' the writer sharpens painful longing for an unattainable freedom.",
          commonError:
            "Saying 'the setting seems scary' without zooming into 'grey teeth' or noticing the cruel contrast of the glimmering road beyond the fence.",
        },
        {
          id: "the-novel-analytical-essay-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "setting-motif-structure",
          marks: 4,
          question:
            "Read this original extract:\n\n*“For twelve hours the convoy rolled across the flat plain, engines droning, canvas flapping in steady rhythm, soldiers half-asleep against their packs. Then the lead truck swerved.\nSilence. A single flare bloomed crimson over the ridge.\nNobody moved.”*\n\nAnalyse how the writer uses **structure and pacing** across this extract to build sudden tension. [4 marks]",
          hints: [
            "Look at the length and monotonous rhythm of the opening sentence ('For twelve hours...').",
            "Spot the exact pivot word ('Then') and the sharp drop into a one-word minor sentence ('Silence.').",
            "Notice how the focus snaps upward to 'A single flare' before ending on the two-word isolated paragraph 'Nobody moved.'",
          ],
          markScheme: [
            {
              point: "Analyses the long, multi-clause opening sentence ('For twelve hours...', listing) lulling the reader into monotonous calm or fatigue.",
              keywords: ["long", "multi-clause", "monoton", "lull", "steady", "droning", "rhythm", "calm"],
            },
            {
              point: "Identifies the structural turning point ('Then the lead truck swerved') that violently disrupts predictability.",
              keywords: ["then", "swerved", "pivot", "turning point", "shift", "disrupt", "abrupt"],
            },
            {
              point: "Analyses the one-word minor sentence 'Silence.' and/or narrow focus on 'A single flare' freezing pace and signalling danger.",
              keywords: ["silence", "minor sentence", "one-word", "flare", "crimson", "freeze", "danger"],
            },
            {
              point: "Explains the impact of the isolated two-word closing paragraph ('Nobody moved.') leaving readers suspended in dread.",
              keywords: ["nobody moved", "isolated", "paragraph", "suspense", "dread", "paralys", "cliffhanger"],
            },
          ],
          modelAnswer:
            "The writer opens with a sprawling, multi-clause sentence mimicking the monotonous, lulling rhythm of a twelve-hour journey while the soldiers drift 'half-asleep.' That predictability snaps violently at the pivot 'Then the lead truck swerved,' jolting both convoy and reader awake. Next, the abrupt one-word minor sentence 'Silence.' halts the tempo completely as focus narrows onto a threatening 'crimson' flare. Closing on the visually isolated two-word paragraph 'Nobody moved.' traps the reader in paralysed suspense and dread.",
          commonError:
            "Writing only about adjectives like 'crimson' instead of tracking the structural rhythm shift from a long hypnotic opening sentence to clipped minor clauses and isolated paragraphing.",
        },
        {
          id: "the-novel-analytical-essay-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "analytical-essay-craft",
          marks: 4,
          question:
            "Read this original line from a novel about social inequality:\n\n*“The gilded ironwork of the estate gates gleamed against the mud-spattered lane, holding back the village like a gleaming row of spears.”*\n\nWrite one fluent **WHAT–HOW–WHY + Single-Word Zoom** analytical paragraph exploring how the writer presents class division here. [4 marks]",
          hints: [
            "Open with a conceptual WHAT claim about wealth defending itself violently against poverty.",
            "Embed 2 short contrasting quotations (not the whole sentence!) and name a method (juxtaposition or simile).",
            "Zoom into ONE specific word with its word class and connotations (e.g. adjective 'gilded', simile noun 'spears', or verb 'holding back').",
            "Finish with tentative phrasing ('arguably', 'implies') explaining WHY the writer critiques social inequality.",
          ],
          markScheme: [
            {
              point: "Opens with a clear conceptual claim linking the estate gates to class hierarchy, exclusion or defended wealth.",
              keywords: ["hierarchy", "exclus", "wealth", "inequality", "privilege", "barrier", "divide"],
            },
            {
              point: "Embeds concise quotation(s) and identifies a craft method (juxtaposition of 'gilded'/'mud-spattered' or simile 'row of spears').",
              keywords: ["juxtapos", "simile", "contrast", "gilded", "mud-spattered", "spears"],
            },
            {
              point: "Performs single-word zoom naming a word class (adjective/noun/verb) and unpacking layered connotations.",
              keywords: ["adjective", "noun", "verb", "connotat", "weapon", "warfare", "superficial", "hostil"],
            },
            {
              point: "Uses tentative phrasing ('arguably', 'implies', 'suggests') to link back to the writer's critique or reader judgement.",
              keywords: ["arguably", "implies", "suggests", "perhaps", "critiqu", "expose", "condemn"],
            },
          ],
          modelAnswer:
            "The writer exposes class privilege as an actively hostile barrier rather than harmless ornament. By juxtaposing the 'gilded ironwork' against the 'mud-spattered lane,' the prose immediately sharpens the material divide between estate and village. Furthermore, the threatening simile 'row of spears' turns architecture into weaponry: arguably, the noun 'spears' carries connotations of warfare and violence, while the adjective 'gilded' implies showy wealth coating cold exclusion, inviting the reader to critique how elites fortify inequality.",
          commonError:
            "Copying the full 22-word sentence as a bolted-on quote and forgetting to name a word class or use tentative analytical phrasing.",
        },
        {
          id: "the-novel-analytical-essay-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "analytical-essay-craft",
          marks: 5,
          question:
            "Upgrade this weak Year 9 draft response into a top-band analytical paragraph:\n\n**Original extract line:** *“Every Monday the clerk stamped the refugees' permits with a heavy brass seal that left a bruise-dark ring across their names.”*\n\n**Weak draft:** *“In this quote the writer uses a metaphor. ‘bruise-dark ring across their names’. This shows the clerk is cruel and makes the reader feel sorry for the refugees and want to read on.”*\n\nRewrite this as a polished **WHAT–HOW–WHY + Zoom** paragraph covering: (1) conceptual claim about dehumanising bureaucracy, (2) embedded micro-quotations, (3) single-word zoom with word class on *“bruise-dark”* or *“stamped”*, (4) symbolism of marking *“across their names”*, and (5) tentative writer's critique. [5 marks]",
          hints: [
            "Open with a sharp claim about institutional bureaucracy stripping people of identity.",
            "Embed short fragments ('Every Monday', 'heavy brass seal', 'bruise-dark ring') seamlessly without 'In this quote'.",
            "Zoom into the compound adjective 'bruise-dark' (connotations of physical violence/trauma) or verb 'stamped' (crushing force).",
            "Explain the symbolism of blotting out 'their names' — erasing individual humanity.",
            "Close with tentative phrasing linking routine ('Every Monday') to systemic critique.",
          ],
          markScheme: [
            {
              point: "Makes a conceptual claim framing bureaucracy/authority as routine, cold or dehumanising.",
              keywords: ["bureaucrac", "dehumanis", "institutional", "systemic", "routine", "impersonal", "oppress"],
            },
            {
              point: "Fluently embeds short quotations from the extract without clunky 'In this quote' phrasing.",
              keywords: ["every monday", "brass seal", "bruise-dark", "across their names", "stamped"],
            },
            {
              point: "Performs single-word zoom with word class on 'bruise-dark' (compound adjective → violence/injury) or 'stamped' (verb → crushing/dominance).",
              keywords: ["adjective", "verb", "violence", "injury", "wound", "trauma", "crushing", "force"],
            },
            {
              point: "Analyses the symbolic erasure of identity in stamping 'across their names'.",
              keywords: ["identity", "eras", "individual", "humanity", "obliterat", "stain", "deface"],
            },
            {
              point: "Uses tentative phrasing ('arguably', 'implies', 'suggests') to articulate the writer's broader critique of normalised cruelty.",
              keywords: ["arguably", "implies", "suggests", "perhaps", "critiqu", "normalis", "indifferen"],
            },
          ],
          modelAnswer:
            "The writer critiques impersonal bureaucracy as a routine machinery of quiet violence. Opening with the habitual marker 'Every Monday' normalises the clerk's indifference as he 'stamped' permits with a 'heavy brass seal,' the forceful verb 'stamped' implying crushing authority. Arguably, the compound adjective 'bruise-dark' carries painful connotations of physical injury and lasting trauma, transforming ink into a wound. By landing that stain 'across their names,' the writer symbolically suggests that rigid institutions deface individual identity and dehumanise the vulnerable beneath everyday paperwork.",
          commonError:
            "Keeping generic phrases like 'makes the reader feel sorry' or 'want to read on', or failing to name a word class during single-word zoom.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "the-novel-analytical-essay-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "narrative-voice-perspective",
      question:
        "Read this original extract: *“No one could accuse Mr Finch of cruelty; he merely insisted that apprentices earn every crumb of gratitude. Why, only last Tuesday he had dismissed young Walter for the boy's own moral improvement, so Walter might learn resilience out in the November frost.”*\n\nWhich combination of craft choices makes this narrator's voice bitingly ironic?",
      options: [
        "Free indirect discourse pairing pious self-praise with callous cruelty toward Walter",
        "First-person diary confession openly admitting regret for dismissing young Walter",
        "Pathetic fallacy proving November frost made Walter genuinely grateful and stronger",
        "Omniscient dialogue using em-dashes to show Walter winning a sharp legal debate",
      ],
      answerIndex: 0,
      hints: [
        "Check the pronouns ('Mr Finch', 'he') alongside the defensive exclamation ('Why, only last Tuesday...').",
        "Contrast the charitable phrasing ('moral improvement', 'resilience') with the brutal action (throwing a boy into November frost).",
        "Notice how letting Mr Finch's own justifications bleed into third-person narration condemns him without the narrator ever calling him wicked.",
      ],
      explanation:
        "Through **free indirect discourse**, the writer lets Mr Finch's smug self-justifications (*“merely insisted”*, *“moral improvement”*) seep directly into third-person prose right beside the brutal reality of firing a child into *“November frost,”* exposing sheer hypocrisy through devastating verbal and dramatic irony.",
    },
    {
      id: "the-novel-analytical-essay-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "narrative-voice-perspective",
      question:
        "Read this original extract: *“The ledger was shut. Obviously, no clerk of sound judgement would bother auditing the Mayor's charity accounts before an election; there were far more urgent ledgers waiting in the basement.”*\n\nWhat exact three-word narrative technique allows the character's anxious rationalisation (*“Obviously, no clerk of sound judgement...”*) to infiltrate third-person narration without a speech tag?",
      answer: {
        type: "text",
        accept: ["free indirect discourse", "free indirect speech", "free indirect style"],
        display: "Free indirect discourse",
      },
      hints: [
        "Notice there are zero first-person pronouns ('I', 'my'), yet the adverb 'Obviously' sounds unmistakably like a nervous character talking themselves out of speaking up.",
        "There is no reporting clause such as 'he told himself'.",
        "Recall the three-word narratology term starting with 'free'.",
      ],
      solution: [
        "Third-person framing stays intact while the character's self-justifying voice (*“Obviously...”*) takes over the syntax.",
        "This subtle infiltration of inner rationalisation without tags is **free indirect discourse**.",
      ],
    },
    {
      id: "the-novel-analytical-essay-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "setting-motif-structure",
      question:
        "In a novel tracking a coastal town's moral decay, the writer introduces a **lighthouse beam** in Chapter 1 as *“sweeping steady silver across the harbour,”* in Chapter 8 as *“guttering behind salt-crusted glass,”* and in Chapter 16 as *“a dark tower staring blind over the rocks.”* What is the sharpest conceptual way to analyse this progression?",
      options: [
        "Explain that the town council forgot to budget for lighthouse maintenance over winter",
        "Trace the evolving motif as an objective measure of crumbling civic integrity",
        "Treat each quotation as three separate similes with no connection to earlier chapters",
        "Argue that the lighthouse acts as an unreliable first-person narrator throughout",
      ],
      answerIndex: 1,
      hints: [
        "Notice the same symbolic object returns at beginning, middle and end in three worsening states.",
        "Ask what a lighthouse traditionally symbolises (moral guidance, truth, safety).",
        "Connect the physical decline of the motif directly to the novel's overarching theme.",
      ],
      explanation:
        "Tracking how the recurring **lighthouse motif** degrades from *“steady silver”* to *“guttering”* to *“staring blind”* demonstrates whole-text structural mastery: the writer uses the evolving symbol to chart the collapse of moral guidance across the town.",
    },
    {
      id: "the-novel-analytical-essay-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "setting-motif-structure",
      question:
        "A novel set in a single sealed Arctic research station explores how hunger, rumour and hierarchy turn six scientists against one another, reflecting how nations fracture under resource scarcity. What single literary term best defines the station's role in the novel?",
      answer: {
        type: "text",
        accept: ["microcosm", "a microcosm"],
        display: "Microcosm",
      },
      hints: [
        "Look at the scale relationship: six scientists in one sealed station mirror entire nations in wider society.",
        "Think of the Greek term meaning 'small world'.",
        "It is a nine-letter noun.",
      ],
      solution: [
        "Because the isolated research station condenses global political tensions into six characters, it functions as a **microcosm**.",
      ],
    },
    {
      id: "the-novel-analytical-essay-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "analytical-essay-craft",
      question:
        "Read this original line: *“The committee buried the safety report beneath three shelves of bylaws.”*\n\nIf you zoom into *“buried”* during single-word analysis, what exact **word class** must you name alongside its connotations of concealment and death?",
      answer: {
        type: "text",
        accept: ["verb", "dynamic verb", "action verb", "a verb"],
        display: "Verb",
      },
      hints: [
        "Identify the subject ('The committee') and the object ('the safety report').",
        "What part of speech connects subject to object by performing the deliberate action of hiding?",
        "Name the four-letter grammatical class.",
      ],
      solution: [
        "*“Buried”* is a **verb** (dynamic verb); its funerary connotations imply that the committee actively killed off inconvenient truth.",
      ],
    },
    {
      id: "the-novel-analytical-essay-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "narrative-voice-perspective",
      marks: 4,
      question:
        "Read this original extract narrated by a ten-year-old living under martial law:\n\n*“The soldiers gave our street new striped barriers painted bright as barber-poles, and Uncle Karim stopped playing his violin so he wouldn't disturb their nap. Mother says we are very lucky because our shutters now stay bolted even at lunchtime.”*\n\nAnalyse how the writer uses a **naive first-person narrator** to expose oppression through dramatic irony. [4 marks]",
      hints: [
        "Look at the childlike simile ('bright as barber-poles') softening military checkpoints.",
        "Read between the lines of Uncle Karim stopping his violin — why has music really died?",
        "Unpack the chilling irony of Mother calling bolted shutters 'very lucky'.",
        "Explain how the gap between innocent voice and grim reality heightens the reader's outrage or grief.",
      ],
      markScheme: [
        {
          point: "Analyses the innocent simile ('bright as barber-poles') softening military barriers and showing the child's naive filter.",
          keywords: ["barber-poles", "simile", "innocent", "child", "cheerful", "soften", "playful"],
        },
        {
          point: "Decodes the hidden fear behind Uncle Karim silencing his violin ('wouldn't disturb their nap' masks intimidation/censorship).",
          keywords: ["violin", "silence", "music", "fear", "intimidat", "censor", "culture"],
        },
        {
          point: "Analyses Mother's protective lie ('very lucky', 'bolted even at lunchtime') revealing imprisonment and terror disguised as safety.",
          keywords: ["lucky", "bolted", "imprison", "trapped", "protect", "terror", "shield"],
        },
        {
          point: "Links the gap between childlike optimism and brutal state control to heightened reader pathos, horror or moral outrage.",
          keywords: ["gap", "pathos", "horror", "outrage", "tragic", "disturbing", "sympathy"],
        },
      ],
      modelAnswer:
        "The writer filters military control through an innocent child's eyes to make oppression feel doubly disturbing. Comparing street barricades to 'barber-poles' with a playful simile softens instruments of surveillance into toys, while the child's belief that Uncle Karim silenced his violin merely to avoid waking soldiers masks cultural intimidation and fear. Similarly, Mother's gentle lie that they are 'very lucky' to keep shutters 'bolted even at lunchtime' shows a parent shielding her child from the reality of domestic imprisonment. Arguably, this painful gap between cheerful innocence and grim terror sharpens reader pathos and moral outrage far more than a blunt political lecture.",
      commonError:
        "Taking the child's statements at face value or forgetting to analyse how Mother's phrase 'very lucky' works as protective euphemism.",
    },
    {
      id: "the-novel-analytical-essay-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "setting-motif-structure",
      marks: 4,
      question:
        "A novel opens in Chapter 1 with an apprentice carefully sharpening a silver chisel beside a blazing forge, humming as sparks rise into the rafters. It ends in the final chapter with the same apprentice staring at the same silver chisel — now dulled and lying cold in grey ash beside a dead hearth.\n\nAnalyse how the writer uses **altered cyclical structure**, **motif** and **sensory contrast** to convey disillusionment. [4 marks]",
      hints: [
        "Explain how returning to the opening workshop and chisel creates an altered cyclical mirror measuring loss.",
        "Contrast the warm, active sensory details of Chapter 1 ('blazing forge', 'humming', 'sparks rise') with the closing stillness ('dulled', 'cold', 'grey ash', 'dead hearth').",
        "Zoom into the evolving chisel motif: what did 'sharpening' symbolise at first versus 'dulled' at the end?",
        "Conclude with the overall emotional effect on the reader's judgement of ambition or youth.",
      ],
      markScheme: [
        {
          point: "Explains how echoing the opening workshop and chisel measures internal transformation or loss across the whole arc.",
          keywords: ["echo", "bookend", "measure", "loss", "arc", "mirror", "transform"],
        },
        {
          point: "Analyses the opening warmth/vitality ('blazing forge', 'humming', 'sparks rise') as youthful optimism, purpose or creative energy.",
          keywords: ["blazing", "humming", "sparks", "optimis", "energy", "vitality", "hope", "warmth"],
        },
        {
          point: "Zooms into the evolving chisel motif ('sharpening' vs 'dulled') to symbolise blunted ideals, ambition or agency.",
          keywords: ["dulled", "sharpening", "blunt", "ideals", "ambition", "craft", "erod"],
        },
        {
          point: "Analyses the final decay/death imagery ('cold', 'grey ash', 'dead hearth') leaving the reader with bleak elegiac grief or critique.",
          keywords: ["grey ash", "dead hearth", "cold", "death", "bleak", "grief", "extinguish", "exhaust"],
        },
      ],
      modelAnswer:
        "By bookending the novel inside the same workshop, the writer creates a stark mirror measuring the apprentice's emotional loss across his arc. Initially, sensory vitality — the 'blazing forge,' cheerful 'humming' and rising 'sparks' — embodies youthful optimism and creative purpose. Returning to the chisel now 'dulled' transforms the recurring object into a symbol of blunted ideals and eroded agency, as though experience has worn down his sharp ambition. Finally, extinguishing the warmth into 'cold,' 'grey ash' and a 'dead hearth' evokes funereal exhaustion, leaving the reader with bleak grief over how harsh reality consumes hope.",
      commonError:
        "Listing the words 'cold' and 'ash' without directly contrasting them against the Chapter 1 mirror ('blazing', 'sparks') to show structural evolution.",
    },
    {
      id: "the-novel-analytical-essay-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "analytical-essay-craft",
      marks: 4,
      question:
        "Design a sharp, transferable **two-sentence conceptual thesis** AND **two progressive topic sentences** for the Year 9 exam prompt:\n\n*“How does the writer present the tension between individual conscience and group loyalty in the novel?”*\n\nDo not mention any specific plot events — focus purely on craft, conceptual nuance, progression and tentative analytical register. [4 marks]",
      hints: [
        "Build a conceptual thesis with a 'while / yet' hinge contrasting comfortable belonging against costly moral independence.",
        "Make Topic Sentence 1 explore how the writer initially builds pressure to conform (e.g. via microcosm setting, voice or foils).",
        "Make Topic Sentence 2 use a cohesive pivot ('However', 'Ultimately') to track a structural shift when conscience breaks away from the crowd.",
        "Keep academic register disciplined: zero 'In this essay I will...' and active reference to the writer's craft.",
      ],
      markScheme: [
        {
          point: "Thesis makes a nuanced, debatable argument weighing group belonging/conformity against moral independence (not 'In this essay I will').",
          keywords: ["conform", "belong", "independen", "moral", "cost", "corrod", "courage"],
        },
        {
          point: "Thesis signals awareness of literary craft or development across the novel (e.g. narrative voice, structure, foils, motifs).",
          keywords: ["voice", "focalis", "foil", "motif", "structur", "setting", "microcosm", "shift"],
        },
        {
          point: "Includes an opening topic sentence framing early social pressure, solidarity or temptation to obey.",
          keywords: ["initially", "early", "opening", "pressure", "obedien", "solidarity", "comfort"],
        },
        {
          point: "Includes a cohesive second topic sentence with a pivot connective ('however', 'conversely', 'ultimately') showing escalation or turning point.",
          keywords: ["however", "conversely", "ultimately", "nevertheless", "yet", "turning point", "climax", "fractur"],
        },
      ],
      modelAnswer:
        "Conceptual thesis: Throughout the novel, the writer frames group loyalty as a seductive comfort that slowly demands moral silence: while belonging initially shields characters from isolation, structural turning points and contrasting foils expose the steep personal cost of conformity. Through shifts in narrative focalisation and evolving motifs, the novel ultimately argues that true integrity requires the lonely courage to dissent.\n\nTopic sentence 1: Early in the narrative, the writer uses the enclosed microcosm setting to show how group solidarity exerts quiet pressure toward unquestioning obedience.\n\nTopic sentence 2: However, at the novel's structural turning point, fracturing dialogue and sharp character foils reveal how individual conscience can no longer survive beneath collective silence.",
      commonError:
        "Starting with 'In this essay I am going to write about conscience and loyalty' or writing two disconnected topic sentences with no sense of progression.",
    },
  ],
};
