import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "the-novel-analytical-essay",
  title: "The Novel & Analytical Essay Craft",
  strand: "Prose & Poetry",
  icon: "📖",
  summary:
    "Decode narrative voice, character arcs, setting, symbolism and structure in any novel — then turn sharp observations into conceptual WHAT–HOW–WHY essays.",
  intro:
    "In Year 9 English, studying a novel is never about retelling the plot. Whatever core novel your class reads this term, top-band readers treat a novel as a **deliberately engineered construct**: every narrator, foil, setting, recurring motif and structural shift is a choice made by the writer to shape how we think and feel. In this guide, any named novels (such as *Animal Farm*, *Great Expectations*, *Lord of the Flies* or *Jane Eyre*) are used purely as **illustrative example novels** — the transferable craft skills you master here work on *any* Year 9 novel or unseen prose extract.",
  guide: [
    {
      id: "narrative-voice-perspective",
      heading: "Narrative Voice, Focalisation & Unreliable Narrators",
      discovery: {
        problem:
          "Read these two versions of the exact same moment:\n\n**Version A:** *“I only borrowed the ledger to check his sums; anyone in my shoes would have done the same, though of course the clerk glared as if I were a thief.”*\n\n**Version B:** *“Daniel slipped the ledger beneath his coat and met the clerk's eyes without blinking. Across the room, the clerk's hand hovered over the alarm bell.”*\n\nBefore reading on: which version pulls you closer to Daniel's self-justification, and which version lets you see the danger Daniel misses? Why?",
        idea:
          "**Version A** uses a **first-person narrator** (*“I”*) who filters events through defensive excuses (*“only borrowed”*, *“anyone in my shoes”*), hinting at an **unreliable narrator** whose bias we have to read through. **Version B** shifts to a **third-person omniscient** lens that moves smoothly from Daniel's cool exterior to the clerk's hidden threat, building **dramatic irony** because the reader knows more than Daniel does.",
      },
      body:
        "The single most important question to ask on page one of any novel is: **Who is telling this story, and through whose eyes are we watching?** Literary critics separate **narration** (the voice speaking) from **focalisation** (the character whose thoughts, perceptions and limits frame the scene).\n\n" +
        "### The Four Core Narrative Lenses\n" +
        "| Lens | Pronoun & Access | Signature Effect on the Reader |\n" +
        "|---|---|---|\n" +
        "| **First-person narrator** | *I / we*; locked inside one mind | Creates intimacy and immediacy, yet traps the reader inside one person's blind spots, fears or vanity. |\n" +
        "| **Third-person limited** | *He / she / they*; shadows one focaliser | Blends an external camera with one character's private emotions, building sympathy while keeping slight critical distance. |\n" +
        "| **Third-person omniscient** | *He / she / they*; all-knowing narrator | Sweeps across multiple minds, times and places; often carries an authoritative, moral or ironic narrative commentary. |\n" +
        "| **Free indirect discourse** | Third-person pronouns fused with a character's inner voice | Removes speech tags (*she thought*) so the character's frantic rhythm or snobbery bleeds straight into the narrator's prose. |\n\n" +
        "### Spotting an Unreliable Narrator\n" +
        "A narrator becomes **unreliable** when their account clashes with clues planted elsewhere in the text. Writers create unreliability in two main ways:\n" +
        "- **Naive unreliability:** A young or sheltered narrator misunderstands adult cruelty, hypocrisy or danger (for instance, in the **example novel** *Great Expectations*, young Pip misreads the true source of his fortune; in the **example novel** *Animal Farm*, the trusting animals initially accept the pigs' altered commandments without question).\n" +
        "- **Biased or self-serving unreliability:** A narrator exaggerates, minimises guilt (*“I merely nudged him”*), or omits inconvenient details to protect their ego. Whenever the reader spots the gap between what the narrator *claims* and what the evidence *shows*, **dramatic irony** sparks to life.\n\n" +
        "> **Transferable Rule:** Never stop at naming the perspective (*“The writer uses first person”*). Always explain **what the lens reveals** AND **what it strategically hides**.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrum of narrative lenses from first-person unreliable through third-person limited and free indirect discourse to third-person omniscient">` +
        `<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8f9fd" stroke="#e0e3ef" stroke-width="1.5"/>` +
        `<text x="280" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#171a2f">The Narrative Distance &amp; Focalisation Spectrum</text>` +
        `<line x1="42" y1="62" x2="518" y2="62" stroke="#b0413e" stroke-width="3" stroke-linecap="round"/>` +
        `<polygon points="42,62 54,56 54,68" fill="#b0413e"/>` +
        `<polygon points="518,62 506,56 506,68" fill="#b0413e"/>` +
        `<text x="44" y="52" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#b0413e">CLOSE / SUBJECTIVE</text>` +
        `<text x="516" y="52" text-anchor="end" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1">WIDE / PANORAMIC</text>` +
        `<rect x="24" y="84" width="120" height="138" rx="10" fill="#ffe4e6" stroke="#b0413e" stroke-width="1.4"/>` +
        `<text x="84" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#9f1239">1st Person</text>` +
        `<text x="84" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#171a2f">("I / we")</text>` +
        `<text x="84" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">High intimacy</text>` +
        `<text x="84" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Blind spots &amp; bias</text>` +
        `<text x="84" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Risk of unreliable</text>` +
        `<text x="84" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">self-defence</text>` +
        `<rect x="155" y="84" width="120" height="138" rx="10" fill="#fef3c7" stroke="#a16207" stroke-width="1.4"/>` +
        `<text x="215" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#a16207">Free Indirect</text>` +
        `<text x="215" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#171a2f">(3rd + inner voice)</text>` +
        `<text x="215" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">No "she thought"</text>` +
        `<text x="215" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Character's tone</text>` +
        `<text x="215" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">blends seamlessly</text>` +
        `<text x="215" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">with subtle irony</text>` +
        `<rect x="286" y="84" width="120" height="138" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.4"/>` +
        `<text x="346" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#15803d">3rd Limited</text>` +
        `<text x="346" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#171a2f">(1 focaliser)</text>` +
        `<text x="346" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Shadows one mind</text>` +
        `<text x="346" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Builds empathy</text>` +
        `<text x="346" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Withholds other</text>` +
        `<text x="346" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">characters' motives</text>` +
        `<rect x="417" y="84" width="120" height="138" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4"/>` +
        `<text x="477" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#0369a1">3rd Omniscient</text>` +
        `<text x="477" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#171a2f">(all-knowing)</text>` +
        `<text x="477" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Multi-mind access</text>` +
        `<text x="477" y="160" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Dramatic irony &amp;</text>` +
        `<text x="477" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">social overview</text>` +
        `<text x="477" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Moral commentary</text>` +
        `</svg>`,
      diagramCaption:
        "Moving left to right widens narrative distance: close lenses heighten emotional bias, while wider lenses expose contrast and dramatic irony.",
      whyItWorks:
        "Readers instinctively trust the voice telling the story — until a writer creates friction between the narrator's voice and the facts of the scene. Analysing focalisation shows examiners you understand that narrative voice is an active tool of persuasion, not a neutral window.",
      keyPoints: [
        "**Narration** is who speaks; **focalisation** is whose perspective filters the scene.",
        "**Free indirect discourse** merges third-person grammar with a character's private thoughts and emotional register without speech tags.",
        "**Unreliable narrators** (naive or self-serving) create **dramatic irony** when readers spot contradictions the speaker misses or hides.",
        "Always link narrative perspective to **what it conceals** as well as **what it spotlights**.",
      ],
      strategies: [
        "**The Pronoun & Filter Check:** Circle pronouns (*I / she / they*) AND underline opinionated adjectives — opinionated adjectives in third-person prose often signal free indirect discourse.",
        "**The Reliability Audit:** Ask whether another character's reaction in the same extract quietly contradicts the narrator's claim.",
        "**The Camera-Swap Test:** Briefly imagine the extract rewritten from another character's viewpoint to see exactly what bias the chosen lens creates.",
      ],
      thinkDeeper:
        "Why might a writer choose a **child narrator** to tell a story about war, injustice or adult corruption, rather than an all-knowing adult narrator?",
      workedExamples: [
        {
          title: "Unpacking Free Indirect Discourse",
          problem:
            "Identify the narrative technique in this original extract and explain its effect:\n\n*“Clara stared at the seating plan. Really, how dare they tuck her beside the draughty radiators while newcomers claimed the window tables? She smoothed her collar and smiled brightly at the host.”*",
          steps: [
            "**Spot the grammatical perspective:** The extract uses third-person pronouns (*“Clara”*, *“her”*, *“She”*), so it is not first-person narration.",
            "**Spot the sudden shift in voice:** The second sentence (*“Really, how dare they tuck her beside the draughty radiators...?”*) uses a colloquial exclamatory tone and rhetorical question that clearly belong to Clara's indignant mind, yet there is no speech tag (*she thought*).",
            "**Name the technique:** This blending of third-person narration with a character's internal voice is **free indirect discourse**.",
            "**Analyse the contrast & effect:** Pairing her furious private question with her polite exterior (*“smiled brightly”*) exposes her social vanity and hypocrisy with subtle comedic irony.",
          ],
          answer:
            "The writer uses **free indirect discourse** to let Clara's indignant inner voice erupt inside third-person narration, juxtaposing her private resentment with her polished outward smile to expose hypocrisy.",
          yourTurn: {
            question:
              "What narrative technique merges third-person narration with a character's unspoken thoughts and tone without speech tags like 'he thought'?",
            answer: {
              type: "text",
              accept: ["free indirect discourse", "free indirect speech", "free indirect style"],
              display: "Free indirect discourse",
            },
            solution:
              "This is **free indirect discourse** (also called free indirect style): third-person pronouns stay in place while the character's vocabulary, questions and emotions take over the sentence.",
          },
        },
        {
          title: "Diagnosing an Unreliable Narrator",
          problem:
            "Read this original extract and explain how the writer hints that the narrator is unreliable:\n\n*“Everyone agreed my speech had been a triumph — well, everyone with sense. A few jealous rivals left before the final applause, muttering excuses about the late train.”*",
          steps: [
            "**Notice the sweeping claim:** The narrator insists *“Everyone agreed”* it was a *“triumph”*, projecting total confidence.",
            "**Catch the immediate self-correction:** The dashed qualification *“— well, everyone with sense”* undermines the opening claim and exposes defensiveness.",
            "**Read the hidden evidence:** People walking out early (*“left before the final applause”*) suggests boredom or disapproval, which the narrator hastily dismisses as *“jealous rivals”*.",
            "**Link to reader effect:** The gap between the narrator's boast and the audience's exit generates **dramatic irony**, prompting the reader to distrust his self-flattering account.",
          ],
          answer:
            "The narrator's defensive dash (*“— well, everyone with sense”*) and dismissal of early walk-outs as *“jealous rivals”* contradict his claim of a *“triumph”*, exposing an **unreliable narrator** through dramatic irony.",
        },
      ],
    },
    {
      id: "characterisation-foils",
      heading: "Character Arcs, Foils & Dialogue Subtext",
      discovery: {
        problem:
          "Look at this short dialogue between two siblings after a storm damages their family boat:\n\n*“It's just a split plank,” Jonah said, tapping the hull twice with his knuckles. “We patch it at dawn.”*\n*“And what if the keel's cracked too?” Mara asked, her fingers still knotted in the wet rope. “You didn't even look underneath.”*\n\nWithout the narrator stating their personalities, what contrasting traits do Jonah and Mara represent — and what tiny physical action reveals Mara's unspoken anxiety?",
        idea:
          "Jonah's brisk minimisation (*“just a split plank”*) and decisive future verb (*“We patch”*) paint him as impulsive or optimistically headstrong, while Mara's conditional question (*“what if...”*) casts her as cautious and realistic — making them **character foils**. Even more telling is the physical **subtext**: her fingers *“knotted in the wet rope”* show tension she never explicitly names.",
      },
      body:
        "Weak Year 9 essays treat characters as if they were real people (*“I think Marcus is really mean”*). Top-band analytical essays treat characters as **deliberate constructs** — vehicles writers build to test big ideas like ambition, loyalty, guilt or conformity.\n\n" +
        "### 1. Dynamic vs Static Character Arcs\n" +
        "- A **dynamic character** undergoes a meaningful internal shift across the novel — gaining insight, losing innocence, hardening under power, or discovering moral courage. Track *turning points*: how does the character speak in Chapter 1 compared with the climax?\n" +
        "- A **static character** stays essentially unchanged. Never assume a static character is poorly written! Writers frequently keep an authority figure or loyal companion static to act as a **moral benchmark** or to illustrate stubborn institutional resistance to change.\n\n" +
        "### 2. Character Foils: Meaning Through Contrast\n" +
        "A **foil** is a character whose traits, choices or dialogue deliberately contrast with another character's to sharpen both profiles. For example, in the **example novel** *Lord of the Flies*, Ralph's commitment to order and rescue is thrown into stark relief by Jack's appetite for dominance and ritual hunting; in the **example novel** *Animal Farm*, Boxer's earnest devotion contrasts sharply with Benjamin's cynical detachment. Whenever two characters face the **same dilemma** and react differently, examine how the contrast dramatises the novel's central theme.\n\n" +
        "### 3. Reading Dialogue Subtext & Non-Verbal Cues\n" +
        "In skilled fiction, characters rarely announce their deepest feelings directly. The true power struggle lives in the **subtext** — what sits *beneath* the spoken words:\n" +
        "- **Evasion & topic-changing:** Refusing to answer a direct question signals guilt, fear or withheld power.\n" +
        "- **Interruptions, dashes (`—`) and ellipses (`...`):** A sudden dash can show dominance (cutting someone off) or panic; an ellipsis often signals hesitation, grief or something unsayable.\n" +
        "- **Micro-actions & body language:** Clenched knuckles, avoiding eye contact, folding a letter twice — writers use physical gestures to contradict polite words.",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Characterisation diagram showing character foil contrast on the left and the iceberg of dialogue subtext on the right">` +
        `<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8f9fd" stroke="#e0e3ef" stroke-width="1.5"/>` +
        `<text x="145" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#171a2f">Character Foils (Contrast)</text>` +
        `<rect x="24" y="50" width="110" height="78" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4"/>` +
        `<text x="79" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0369a1">Protagonist</text>` +
        `<text x="79" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Dynamic arc:</text>` +
        `<text x="79" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">tested by crisis</text>` +
        `<rect x="156" y="50" width="110" height="78" rx="10" fill="#ffe4e6" stroke="#b0413e" stroke-width="1.4"/>` +
        `<text x="211" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9f1239">Foil Character</text>` +
        `<text x="211" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Opposite values</text>` +
        `<text x="211" y="105" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">or choices</text>` +
        `<line x1="134" y1="89" x2="156" y2="89" stroke="#171a2f" stroke-width="2" stroke-dasharray="3 2"/>` +
        `<rect x="44" y="148" width="202" height="72" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.4"/>` +
        `<text x="145" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d">Thematic Friction</text>` +
        `<text x="145" y="188" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Same dilemma, different</text>` +
        `<text x="145" y="203" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">response = sharper theme</text>` +
        `<line x1="79" y1="128" x2="115" y2="148" stroke="#555b78" stroke-width="1.5"/>` +
        `<line x1="211" y1="128" x2="175" y2="148" stroke="#555b78" stroke-width="1.5"/>` +
        `<line x1="286" y1="24" x2="286" y2="226" stroke="#e0e3ef" stroke-width="1.5"/>` +
        `<text x="420" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#171a2f">The Subtext Iceberg</text>` +
        `<polygon points="420,48 468,104 372,104" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>` +
        `<text x="420" y="84" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#0369a1">Spoken Words</text>` +
        `<text x="420" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#171a2f">(polite surface)</text>` +
        `<line x1="308" y1="108" x2="532" y2="108" stroke="#0369a1" stroke-width="2" stroke-dasharray="6 4"/>` +
        `<polygon points="366,112 474,112 510,222 330,222" fill="#fef3c7" stroke="#a16207" stroke-width="1.5"/>` +
        `<text x="420" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#a16207">Hidden Subtext</text>` +
        `<text x="420" y="158" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">• Pauses, dashes &amp; ellipses</text>` +
        `<text x="420" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">• Dodged questions &amp; silences</text>` +
        `<text x="420" y="194" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">• Body language &amp; gaze</text>` +
        `<text x="420" y="212" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">• Power imbalance in tone</text>` +
        `</svg>`,
      diagramCaption:
        "Strong character analysis looks sideways (comparing foils) and downwards (reading the unspoken subtext beneath dialogue).",
      whyItWorks:
        "Characters only become analytically interesting when we ask *what function they serve for the writer*. Linking a character's arc, foil or unspoken gesture directly to the novel's themes lifts an essay out of character-gossip and straight into conceptual analysis.",
      keyPoints: [
        "Treat characters as **writer's constructs** created to embody or challenge ideas — not real people with independent lives.",
        "**Dynamic characters** evolve across turning points; **static characters** often act as moral anchors or foils.",
        "A **foil** sharpens another character's traits through deliberate contrast under shared pressure.",
        "**Subtext** lives in pauses, interruptions, evaded questions and micro-gestures that contradict spoken words.",
      ],
      strategies: [
        "**Start-vs-End Comparison:** Note one quotation for a character near the opening and one near the climax to prove whether their arc is dynamic or static.",
        "**Spot the Mismatch:** Whenever dialogue sounds calm, check the character's hands, eyes or punctuation for hidden panic or hostility.",
        "**Ask the Construct Question:** Replace *“She feels angry”* with *“The writer constructs her clipped imperatives to expose how powerlessness breeds resentment.”*",
      ],
      thinkDeeper:
        "When a quiet character says nothing at all during a heated argument in a novel, how can silence itself become the loudest piece of characterisation on the page?",
      workedExamples: [
        {
          title: "Analysing Dialogue Subtext",
          problem:
            "Read this original extract and explain how the writer uses dialogue and gesture to reveal a power imbalance:\n\n*“Of course you may leave early, Priya,” Mr Halden said, without looking up from his ledger. “Just leave the master keys on the blotter before you go.” Priya's hand paused on the brass handle. “I only meant for half an hour—” “On the blotter, please.”*",
          steps: [
            "**Examine the surface politeness:** Mr Halden uses courteous markers (*“Of course”*, *“please”*), which superficially sound generous.",
            "**Read the non-verbal refusal:** Saying this *“without looking up from his ledger”* reduces Priya beneath his paperwork, signalling quiet dominance.",
            "**Analyse the interruption & repetition:** The em-dash cuts off Priya's explanation mid-clause (*“half an hour—”*), and his clipped repetition of *“On the blotter, please”* turns a request into an unyielding command.",
            "**Zoom into the symbolic prop:** Demanding *“the master keys”* strips Priya of trust and access, proving that the true subtext is dismissal masked as manners.",
          ],
          answer:
            "Through Mr Halden's refusal to make eye contact, his sharp em-dash interruption and his chillingly polite command to surrender *“the master keys”*, the writer uses subtext to expose coercive authority disguised as courtesy.",
          yourTurn: {
            question:
              "What literary term describes a character whose contrasting traits and choices highlight the qualities of another character?",
            answer: {
              type: "text",
              accept: ["foil", "character foil", "a foil"],
              display: "Foil",
            },
            solution:
              "A **foil** (or character foil) is paired against another character so their contrasting attitudes, values or choices stand out more vividly.",
          },
        },
        {
          title: "Tracking a Dynamic Character Arc",
          problem:
            "In Chapter 1 of a novel, Leo *“kept his eyes fixed on the scuffed floorboards whenever the prefects passed.”* In Chapter 12, he *“stepped square into the doorway and held the prefect's gaze until the other boy blinked first.”* How would you analyse this contrast without retelling the plot?",
          steps: [
            "**Identify the arc type:** Leo is a **dynamic character** whose internal shift from deference to defiance is tracked physically.",
            "**Pair parallel physical motifs (gaze & posture):** Chapter 1's downward gaze (*“fixed on the scuffed floorboards”*) implies submission and invisibility; Chapter 12's verb phrase (*“stepped square”*, *“held the prefect's gaze”*) shows deliberate self-assertion.",
            "**Zoom into one telling detail:** The word *“square”* carries connotations of solidity, fairness and physical readiness, signalling that Leo now claims equal status.",
            "**Connect to the writer's broader message:** By echoing the same visual cue (eye contact), the writer makes Leo's growth tangible and invites the reader to admire moral courage under institutional pressure.",
          ],
          answer:
            "By mirroring Leo's shifting eye contact from *“fixed on the scuffed floorboards”* to holding the prefect's gaze *“square”* in the doorway, the writer charts a dynamic arc from intimidation to principled self-possession.",
        },
      ],
    },
    {
      id: "setting-motif-structure",
      heading: "Setting, Pathetic Fallacy, Motif & Structural Shifts",
      discovery: {
        problem:
          "Imagine a novel that opens on page 1 with a locked iron gate swinging shut in thick autumn fog, and ends on the final page with the same iron gate left half-open in thin spring rain.\n\nWhy didn't the writer simply describe a brand-new location on the last page? What work is that returning gate doing structurally AND symbolically?",
        idea:
          "Returning to the opening image creates a **cyclical structure** (or bookending), while changing the gate from *locked* to *half-open* turns the gate into a **recurring motif / symbol** measuring change. The weather shift (*thick autumn fog* → *thin spring rain*) uses **pathetic fallacy** to suggest that clarity and freedom are partial, not completely tidy.",
      },
      body:
        "Examiners love essays that look beyond individual metaphors to examine **whole-text craft**: how the writer builds a world (setting), weaves recurring threads (motifs and symbols), and choreographs the reader's journey from opening to ending (structure).\n\n" +
        "### 1. Setting as Microcosm & Pathetic Fallacy\n" +
        "- **Microcosm:** A compact, bounded setting — an isolated island (as in the **example novel** *Lord of the Flies*), a single farm (as in the **example novel** *Animal Farm*), or a locked boarding house — that functions as a miniature model of wider society, letting the writer test politics, class or human nature under laboratory pressure.\n" +
        "- **Pathetic fallacy:** Attributing human emotions or moods to weather and nature (*“sullen clouds”*, *“a nervous wind rattled the panes”*) so the external landscape mirrors — or ironically contrasts with — inner turmoil.\n\n" +
        "### 2. Symbol vs Motif\n" +
        "- A **symbol** is a concrete object, place or colour standing for an abstract idea (e.g. a rusted compass symbolising lost moral direction).\n" +
        "- A **motif** is a symbol, image, phrase or sound that **recurs across the whole novel**, evolving in meaning as the plot develops (e.g. recurring imagery of locked doors, bells, or mirrors).\n\n" +
        "### 3. Structural Devices That Shape Tension\n" +
        "| Structural Technique | What It Does | Analytical Effect to Explore |\n" +
        "|---|---|---|\n" +
        "| ***In medias res*** | Drops the reader straight into the middle of action or crisis | Creates immediate disorientation and urgency before backstory is explained. |\n" +
        "| **Foreshadowing** | Plants subtle early clues about later disaster or betrayal | Builds dread and gives the ending a sense of tragic inevitability. |\n" +
        "| **Analepsis (flashback)** | Interrupts the present timeline to revisit the past | Reveals hidden trauma or motive, reshaping how we judge a character now. |\n" +
        "| **Cyclical structure** | Echoes the opening image, setting or phrase at the close | Can signal entrapment (nothing changed) OR measure quiet transformation. |\n" +
        "| **Shifts in focus & pace** | Zooms from wide crowd to tight close-up, or speeds up with short clauses | Controls claustrophobia, suspense and emotional release like a film editor. |",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Narrative structure arc showing in medias res opening, foreshadowing clue, flashback dip, pace shift climax, and cyclical echo at the ending">` +
        `<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8f9fd" stroke="#e0e3ef" stroke-width="1.5"/>` +
        `<text x="280" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#171a2f">Narrative Architecture &amp; Structural Shifts</text>` +
        `<path d="M 46 184 C 95 148, 125 148, 165 130 C 195 118, 215 162, 248 148 C 295 128, 338 72, 386 72 C 432 72, 464 148, 514 176" fill="none" stroke="#b0413e" stroke-width="3.2" stroke-linecap="round"/>` +
        `<path d="M 514 184 C 420 226, 140 226, 46 194" fill="none" stroke="#0369a1" stroke-width="1.8" stroke-dasharray="5 4"/>` +
        `<polygon points="46,194 56,190 54,200" fill="#0369a1"/>` +
        `<text x="280" y="232" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1">Cyclical Echo / Recurring Motif linking Ending back to Opening</text>` +
        `<circle cx="46" cy="184" r="6" fill="#b0413e"/>` +
        `<rect x="18" y="106" width="102" height="44" rx="8" fill="#ffe4e6" stroke="#b0413e" stroke-width="1.2"/>` +
        `<text x="69" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9f1239">In Medias Res</text>` +
        `<text x="69" y="139" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#171a2f">Instant crisis</text>` +
        `<circle cx="158" cy="133" r="6" fill="#a16207"/>` +
        `<rect x="128" y="54" width="104" height="44" rx="8" fill="#fef3c7" stroke="#a16207" stroke-width="1.2"/>` +
        `<text x="180" y="72" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#a16207">Foreshadowing</text>` +
        `<text x="180" y="87" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#171a2f">Early dread clue</text>` +
        `<circle cx="248" cy="148" r="6" fill="#15803d"/>` +
        `<rect x="206" y="162" width="112" height="44" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.2"/>` +
        `<text x="262" y="180" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d">Analepsis</text>` +
        `<text x="262" y="195" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#171a2f">Flashback motive</text>` +
        `<circle cx="386" cy="72" r="6" fill="#b0413e"/>` +
        `<rect x="330" y="88" width="114" height="44" rx="8" fill="#ffe4e6" stroke="#b0413e" stroke-width="1.2"/>` +
        `<text x="387" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9f1239">Pace &amp; Focus Shift</text>` +
        `<text x="387" y="121" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#171a2f">Tight close-up climax</text>` +
        `<circle cx="514" cy="176" r="6" fill="#0369a1"/>` +
        `<rect x="448" y="106" width="96" height="44" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.2"/>` +
        `<text x="496" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0369a1">Resolution</text>` +
        `<text x="496" y="139" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#171a2f">Altered echo</text>` +
        `</svg>`,
      diagramCaption:
        "Structure is the architecture of attention: notice where the writer starts, interrupts, accelerates, zooms in, and circles back.",
      whyItWorks:
        "Many students only analyse isolated words and forget that *position* creates meaning. A clue planted in Chapter 1, an abrupt jump in time, or a recurring motif reshaped at the close reveals the writer's grand design across the whole novel.",
      keyPoints: [
        "A **microcosm** uses a small, enclosed setting to explore wider social or political conflicts in miniature.",
        "**Pathetic fallacy** projects human mood onto weather or landscape to heighten atmosphere or foreshadow turmoil.",
        "A **symbol** carries deeper meaning once; a **motif** recurs and evolves across the text.",
        "Structural analysis tracks **openings, focus shifts, pace changes, flashbacks, foreshadowing and cyclical endings**.",
      ],
      strategies: [
        "**Zoom-Lens Tracking:** Check whether an extract starts wide (setting/crowd) and zooms tight (one trembling hand), or reverses direction.",
        "**Spot the Turning Point:** Draw a horizontal line across any extract where the mood, pace or time-frame visibly pivots — then analyse *why* the shift sits there.",
        "**Pair Motif with Change:** If an object reappears twice in a novel, explain what changed between its first and final appearance.",
      ],
      thinkDeeper:
        "When a novelist uses bright, cheerful sunshine on the morning of a tragedy instead of a thunderstorm, why can **ironic contrast** in weather feel even more unsettling than traditional pathetic fallacy?",
      workedExamples: [
        {
          title: "Analysing Setting & Pathetic Fallacy",
          problem:
            "Analyse how the writer uses setting and atmosphere in this original extract:\n\n*“The harbour fog crept between the warehouses like a patient debt-collector, swallowing the lantern light until only the iron railings gleamed wet and black.”*",
          steps: [
            "**Spot the pathetic fallacy / personification:** Describing fog as creeping *“like a patient debt-collector”* blends simile and personification to give the landscape predatory, inescapable menace.",
            "**Zoom into verb & adjective choices:** The verb *“swallowing”* suggests total consumption, extinguishing the fragile comfort of *“lantern light”*, while *“patient”* implies doom that cannot be outrun.",
            "**Read the symbolic detail:** The only visible feature left — *“iron railings”* gleaming *“wet and black”* — carries connotations of imprisonment and cold entrapment.",
            "**Synthesise the wider effect:** The setting acts not as neutral scenery but as an oppressive force mirroring the protagonist's shrinking options.",
          ],
          answer:
            "By comparing the creeping fog to a *“patient debt-collector”* *“swallowing”* the light, the writer uses personification and pathetic fallacy to turn the harbour into an inescapable trap, reinforced by the prison-like connotations of *“iron railings”*.",
          yourTurn: {
            question:
              "What is the term for a small, self-contained setting in a novel (such as an isolated island or single school) that reflects wider society in miniature?",
            answer: {
              type: "text",
              accept: ["microcosm", "a microcosm"],
              display: "Microcosm",
            },
            solution:
              "A **microcosm** (literally 'small world') represents the tensions, hierarchies or flaws of wider society inside one contained setting.",
          },
        },
        {
          title: "Analysing a Structural Focus Shift",
          problem:
            "An extract begins with three long, flowing sentences describing a bustling railway concourse, then cuts abruptly to a four-word paragraph: *“The platform was empty.”* What structural choices create impact here?",
          steps: [
            "**Track the focus shift:** The writer shifts from a wide, crowded panoramic view (the concourse) to a stark, isolated focus (the empty platform).",
            "**Track the pace and paragraphing:** Long, multi-clause sentences mimic the rush and noise of travellers, whereas the isolated four-word paragraph enforces an immediate visual and rhythmic halt.",
            "**Link form to emotion:** The sudden emptiness on the page mirrors the character's shock of abandonment or missed escape, forcing the reader to pause alongside them.",
          ],
          answer:
            "The writer pivots from sprawling crowd description to a stark four-word paragraph (*“The platform was empty.”*), using contrasting sentence length and visual isolation to jolt the reader from frantic momentum into sudden abandonment.",
        },
      ],
    },
    {
      id: "analytical-essay-craft",
      heading: "Building a Thesis-Driven Year 9 Analytical Essay",
      discovery: {
        problem:
          "Compare two Year 9 essay introductions answering: *How does the writer present authority in the novel?*\n\n**Intro 1:** *“In this essay I am going to write about authority. There are many quotes about authority in the novel. Firstly, the leader shouts at people.”*\n\n**Intro 2:** *“Throughout the novel, the writer exposes authority not as natural wisdom but as a fragile performance sustained through fear and language. While those in power initially command deference, structural shifts and recurring motifs gradually reveal the insecurity beneath their control.”*\n\nWhat makes Intro 2 immediately sound like a top-band essay — even before a single quotation appears?",
        idea:
          "Intro 1 announces a topic (*“I am going to write about...”*) and drifts straight into plot summary. Intro 2 states a **conceptual thesis**: a clear, debatable **argument** about *what the writer is saying* about authority (*“a fragile performance”*) and *how* the novel develops that idea across its arc.",
      },
      body:
        "A brilliant analytical essay is an **argument**, not a treasure hunt of literary terms. Every paragraph should pull together toward one central **conceptual thesis** — your sharp answer to *what big idea the writer is exploring and why*.\n\n" +
        "### 1. The WHAT–HOW–WHY + Zoom Blueprint\n" +
        "Move beyond clunky PEE/PEEL chains by building fluent **WHAT–HOW–WHY** paragraphs:\n" +
        "1. **WHAT (Conceptual Topic Sentence):** Make an arguable claim linking the writer's craft to a big idea or shift in the novel (*“Early in the chapter, the writer presents fear as a contagious force that corrodes solidarity...”*).\n" +
        "2. **HOW (Embedded Micro-Quotations + Methods):** Weave short, 1–5 word quotations seamlessly into your own grammar — NEVER drop a freestanding sentence quote onto the page — and identify the precise linguistic or structural method.\n" +
        "3. **ZOOM (Single-Word & Connotation Drill):** Pull out one potent verb, adjective, noun or punctuation mark from your quotation and unpack 2–3 layered connotations.\n" +
        "4. **WHY (Writer's Intent & Reader Impact):** Explain *why* the writer made this choice — how it shapes sympathy, builds tension, echoes an earlier motif, or critiques society.\n\n" +
        "### 2. Embedding Quotations Fluently\n" +
        "- **Bolted-on ❌:** *He is nervous. This is shown in the quote “his knuckles whitened on the rail.”*\n" +
        "- **Embedded ✅:** *The character's quiet dread surfaces as “his knuckles whitened on the rail,” the harsh verb “whitened” draining warmth from the gesture to imply bloodless panic.*\n\n" +
        "### 3. Academic Register & Tentative Phrasing\n" +
        "Strong literary critics avoid robotic certainty (*“This proves that...”*) because literature invites layered interpretation. Use **tentative analytical phrasing** (*arguably*, *implies*, *suggests*, *perhaps*, *hints at*, *could be read as*) alongside precise **analytical verbs** (*exposes*, *subverts*, *reinforces*, *undermines*, *juxtaposes*, *foreshadows*).",
      diagram:
        `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WHAT HOW WHY plus Single-Word Zoom analytical essay paragraph blueprint">` +
        `<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8f9fd" stroke="#e0e3ef" stroke-width="1.5"/>` +
        `<text x="280" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#171a2f">The WHAT–HOW–WHY + Zoom Paragraph Engine</text>` +
        `<rect x="26" y="48" width="508" height="36" rx="9" fill="#171a2f"/>` +
        `<text x="280" y="70" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11.5" font-weight="800" fill="#ffffff">CONCEPTUAL THESIS: Writer's Big Idea + How It Evolves Across the Novel</text>` +
        `<rect x="26" y="102" width="118" height="122" rx="10" fill="#ffe4e6" stroke="#b0413e" stroke-width="1.5"/>` +
        `<text x="85" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#9f1239">1. WHAT</text>` +
        `<text x="85" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Conceptual</text>` +
        `<text x="85" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">topic sentence</text>` +
        `<text x="85" y="177" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">Debatable claim</text>` +
        `<text x="85" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">tied to thesis</text>` +
        `<polygon points="148,163 156,158 156,168" fill="#555b78"/>` +
        `<rect x="158" y="102" width="118" height="122" rx="10" fill="#fef3c7" stroke="#a16207" stroke-width="1.5"/>` +
        `<text x="217" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#a16207">2. HOW</text>` +
        `<text x="217" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Embedded micro-</text>` +
        `<text x="217" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">quotes + method</text>` +
        `<text x="217" y="177" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">Seamless syntax</text>` +
        `<text x="217" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">Voice / structure</text>` +
        `<polygon points="280,163 288,158 288,168" fill="#555b78"/>` +
        `<rect x="290" y="102" width="118" height="122" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>` +
        `<text x="349" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#15803d">3. ZOOM</text>` +
        `<text x="349" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Single-word</text>` +
        `<text x="349" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">connotations</text>` +
        `<text x="349" y="177" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">"Arguably..."</text>` +
        `<text x="349" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">2+ layered ideas</text>` +
        `<polygon points="412,163 420,158 420,168" fill="#555b78"/>` +
        `<rect x="422" y="102" width="112" height="122" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>` +
        `<text x="478" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0369a1">4. WHY</text>` +
        `<text x="478" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">Writer's purpose</text>` +
        `<text x="478" y="159" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9.5" fill="#171a2f">&amp; reader impact</text>` +
        `<text x="478" y="177" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">Whole-text echo</text>` +
        `<text x="478" y="191" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#555b78">or critique</text>` +
        `</svg>`,
      diagramCaption:
        "Every body paragraph anchors to the thesis, embeds brief evidence, zooms into one telling word, and explains the writer's broader purpose.",
      whyItWorks:
        "Replacing long block quotes with embedded 2–4 word fragments leaves 75% of your paragraph free for analysis — which is where almost all Year 9 and GCSE Literature marks actually live.",
      keyPoints: [
        "Open with a **conceptual thesis** — an arguable claim about the writer's message, never *“In this essay I will...”*.",
        "**Embed micro-quotations** (1–5 words) smoothly inside your own sentence grammar.",
        "Use **single-word zoom** to unpack layered connotations and word class (*verb*, *adjective*, *abstract noun*).",
        "Use **tentative phrasing** (*arguably*, *implies*, *perhaps*) to explore nuanced interpretations with academic authority.",
      ],
      strategies: [
        "**The Read-Aloud Quote Test:** Read your sentence aloud ignoring the quotation marks — if the grammar still flows naturally, your quote is properly embedded.",
        "**Ban the Dead Phrases:** Cross out *“This shows”*, *“makes the reader want to read on”*, and *“puts an image in the reader's head”* — replace them with precise verbs (*exposes*, *unsettles*, *reinforces*).",
        "**The 70/30 Rule:** Aim for at least 70% of every paragraph to be **HOW + ZOOM + WHY**, and no more than 30% context and quotation.",
      ],
      thinkDeeper:
        "Why does writing *“Arguably, the verb ‘clutched’ implies both desperation and possessiveness”* earn higher marks than *“The quote proves he is desperate”*?",
      workedExamples: [
        {
          title: "Upgrading a Weak Paragraph to Top-Band WHAT–HOW–WHY",
          problem:
            "Upgrade this basic sentence about an original extract (*“The brass bell tolled across the courtyard, herding the students through the narrow arch”*):\n\n**Weak draft:** *“The writer uses a metaphor. ‘herding the students through the narrow arch’. This shows they have no freedom and makes the reader feel sad.”*",
          steps: [
            "**Write a conceptual WHAT claim:** Frame the writer's critique of institutional control rather than just naming a device.",
            "**Embed the micro-quotation smoothly (HOW):** Fold *“herding the students”* and *“narrow arch”* directly into your own sentence.",
            "**Apply single-word ZOOM:** Isolate the participle *“herding”* — unpack its animalistic, dehumanising connotations of livestock stripped of individuality.",
            "**Explain WHY with tentative phrasing:** Connect the *“narrow arch”* to claustrophobic conformity, suggesting the writer criticises rigid institutions that crush independent thought.",
          ],
          answer:
            "The writer critiques institutional conformity by depicting the school bell as *“herding the students through the narrow arch.”* Arguably, the animalistic verb *“herding”* strips the pupils of individuality, equating them with compliant livestock, while the claustrophobic phrase *“narrow arch”* implies that the institution funnels every mind along one rigid, unquestioned path.",
          yourTurn: {
            question:
              "What analytical technique involves pulling out one specific word from an embedded quotation and exploring its layered connotations and word class?",
            answer: {
              type: "text",
              accept: ["single-word zoom", "single word zoom", "word-level zoom", "word level zoom", "word zoom", "zooming in"],
              display: "Single-word zoom",
            },
            solution:
              "**Single-word zoom** focuses sharply on one potent verb, noun or adjective inside your quotation to unlock rich connotations.",
          },
        },
        {
          title: "Crafting a Conceptual Thesis Statement",
          problem:
            "Turn this vague essay question — *How does the writer present secrets in the novel?* — into a transferable 2-sentence conceptual thesis blueprint.",
          steps: [
            "**Refuse a one-word answer:** Don't just say *“secrets are bad.”* Ask what *tension* secrets create (e.g. short-term protection vs long-term isolation).",
            "**Build a 'while / yet' hinge:** Start with an initial nuance (*“While characters initially guard secrets as a shield...”*) then pivot to the deeper consequence (*“...the writer ultimately reveals how concealment corrodes trust”*).",
            "**Signal craft awareness:** Briefly gesture to *how* the novel proves this (e.g. through unreliable narration, recurring motifs or structural reveals) without listing a shopping list of devices.",
          ],
          answer:
            "Throughout the novel, the writer presents secrecy as a double-edged defence: while characters initially withhold the truth to protect their status or loved ones, concealment gradually fractures trust and isolates them. Through shifts in narrative focalisation and mounting dramatic irony, the novel suggests that unspoken truths exert greater power than open confrontation.",
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the difference between **narration** and **focalisation**?",
        back: "**Narration** is the voice telling the story; **focalisation** is the character's consciousness or vantage point through which events are filtered.",
      },
      {
        front: "Define **free indirect discourse**.",
        back: "A third-person narrative style where a character's unspoken thoughts, idioms and emotional tone blend directly into the narrator's prose without speech tags like *she thought*.",
      },
      {
        front: "What creates an **unreliable narrator**?",
        back: "A noticeable gap between what the narrator claims and the clues planted elsewhere in the text — caused by either naivety or self-serving bias.",
      },
      {
        front: "How does **dramatic irony** operate in a novel?",
        back: "When the reader knows a crucial truth, danger or contradiction that a character (or naive narrator) fails to see, generating tension or sharp critique.",
      },
      {
        front: "Distinguish a **dynamic** character from a **static** character.",
        back: "A **dynamic** character undergoes a significant internal change across the novel; a **static** character remains essentially unchanged, often serving as a moral anchor or foil.",
      },
      {
        front: "What is a **character foil**?",
        back: "A character whose contrasting values, personality or choices highlight and sharpen the traits of another character under shared pressure.",
      },
      {
        front: "What is **dialogue subtext**?",
        back: "The unspoken motive, emotion or power struggle hiding beneath characters' spoken words — revealed through pauses, evasions, interruptions and body language.",
      },
      {
        front: "Define **microcosm** in prose fiction.",
        back: "A small, self-contained setting (such as an isolated island or single institution) that mirrors the hierarchies and conflicts of wider society in miniature.",
      },
      {
        front: "What is **pathetic fallacy**?",
        back: "Giving human emotions or moods to weather and nature (e.g. *“a brooding sky”*) to reflect or ironically contrast with human turmoil.",
      },
      {
        front: "How does a **motif** differ from a single **symbol**?",
        back: "A **symbol** represents an abstract idea; a **motif** is a symbol, image or phrase that **recurs** across the whole novel, often shifting in meaning as the arc unfolds.",
      },
      {
        front: "Define ***in medias res*** and **analepsis**.",
        back: "***In medias res*** opens straight in the middle of action or crisis; **analepsis** (flashback) interrupts the present narrative to reveal a formative past event.",
      },
      {
        front: "What is a **cyclical structure**?",
        back: "When a novel's ending echoes its opening setting, image or phrasing — highlighting either inescapable entrapment or measurable transformation.",
      },
      {
        front: "What makes a thesis **conceptual** rather than descriptive?",
        back: "A conceptual thesis makes a debatable argument about the **writer's big idea or message** (e.g. *how power corrupts*), instead of announcing a topic or summarising plot.",
      },
      {
        front: "Why should analytical essays use **tentative phrasing** (*arguably*, *implies*, *perhaps*)?",
        back: "Literature admits multiple nuanced readings; tentative phrasing signals sophisticated critical judgement rather than blunt, simplistic certainty.",
      },
    ],
    mustKnow: [
      "Distinguish first-person, third-person limited, third-person omniscient and free indirect discourse — and explain what each lens reveals and hides.",
      "Spot textual clues of an unreliable narrator (defensive qualifiers, omissions, contradictions) and link them to dramatic irony.",
      "Analyse characters as deliberate writer's constructs using dynamic vs static arcs and character foils.",
      "Decode dialogue subtext through dashes, ellipses, evaded questions and contrasting body language.",
      "Explain how setting operates as a microcosm and how pathetic fallacy builds mood or ironic contrast.",
      "Track structural shifts — *in medias res*, foreshadowing, analepsis, pace/focus changes and cyclical endings — across an extract or whole novel.",
      "Write a debatable, conceptual thesis statement with zero plot-retelling or *“In this essay I will...”* openings.",
      "Embed 1–5 word micro-quotations grammatically inside analytical sentences.",
      "Execute fluent WHAT–HOW–WHY paragraphs with single-word zoom and tentative analytical verbs.",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: “In this essay I am going to write about how the author presents power.”",
        right: "Write Instead ✅: “Throughout the novel, the writer exposes institutional power as a fragile performance maintained through fear and control of language.”",
      },
      {
        wrong: "Never Write ❌: “The writer uses a metaphor: ‘his voice was a locked door.’ This shows he is secretive.”",
        right: "Write Instead ✅: “By metaphorically reducing the character's voice to a ‘locked door,’ the writer implies deliberate emotional fortification, the adjective ‘locked’ hinting at concealed guilt.”",
      },
      {
        wrong: "Never Write ❌: “The character is really selfish and I dislike how he treats his sister.”",
        right: "Write Instead ✅: “The writer constructs the character's self-absorption to critique how unchecked privilege blinds individuals to familial duty.”",
      },
      {
        wrong: "Never Write ❌: “The writer uses short sentences to make the reader want to read on.”",
        right: "Write Instead ✅: “The abrupt shift to clipped, four-word clauses accelerates the pace, mirroring the narrator's fractured breathing and trapping the reader in rising claustrophobia.”",
      },
      {
        wrong: "Never Write ❌: “Because it is third person, the narrator must be completely objective and unbiased.”",
        right: "Write Instead ✅: “Although framed in third-person limited narration, the writer weaves free indirect discourse into the prose, filtering the scene through the protagonist's paranoid bias.”",
      },
      {
        wrong: "Never Write ❌: “The weather is stormy, which is pathetic fallacy because it is raining.”",
        right: "Write Instead ✅: “Through pathetic fallacy, the ‘relentless, lashing rain’ externalises the character's unravelling composure and foreshadows the impending confrontation.”",
      },
      {
        wrong: "Never Write ❌: “This quote proves 100% that the narrator is lying.”",
        right: "Write Instead ✅: “Arguably, the narrator's hasty insistence that ‘no one minded’ undermines his credibility, inviting a sceptical reader to suspect quiet resentment.”",
      },
    ],
    examMistakes: [
      "Retelling the plot chronologically instead of organising paragraphs around **conceptual arguments**.",
      "Dropping long, unembedded multi-line quotations that swallow half the paragraph and leave no room for close analysis.",
      "Feature-spotting — listing devices (*metaphor*, *alliteration*, *short sentence*) without explaining *how* they shape meaning or reader response.",
      "Using generic, hollow effect phrases (*“makes it vivid”*, *“creates an image in the reader's mind”*, *“makes the reader want to read on”*).",
      "Ignoring **structure** and **narrative perspective**, focusing solely on isolated adjectives.",
      "Forgetting to name **word classes** (*verb*, *abstract noun*, *imperative*) during single-word zoom.",
      "Writing a conclusion that merely repeats the introduction word-for-word instead of offering a sharp final judgement on the writer's message.",
    ],
    mnemonics: [
      {
        topic: "Analytical Paragraph Engine",
        device: "W-H-Z-W (What – How – Zoom – Why)",
        explanation:
          "**W**hat arguable claim? → **H**ow does an embedded micro-quote + method show it? → **Z**oom into one rich word's connotations → **W**hy did the writer craft it for the reader?",
      },
      {
        topic: "Narrative Voice Audit",
        device: "P-A-B-H (Pronoun – Access – Bias – Hidden)",
        explanation:
          "Check the **P**ronoun (*I/he*), whose mind we **A**ccess (focaliser), what **B**ias colours the tone, and what the lens keeps **H**idden.",
      },
      {
        topic: "Structural Analysis Checklist",
        device: "O-S-P-E (Opening – Shifts – Pace – Ending)",
        explanation:
          "Scan the **O**pening hook (*in medias res?*), **S**hifts in focus/time, **P**ace changes via sentence length, and **E**nding echo or unresolved tension.",
      },
    ],
    realWorld: [
      {
        title: "Film Cinematography & Focalisation",
        detail:
          "An over-the-shoulder camera shot mimics third-person limited focalisation, while a wide drone shot pulling back over a city works just like an omniscient narrator.",
        emoji: "🎬",
      },
      {
        title: "Courtroom Cross-Examination & Unreliability",
        detail:
          "Lawyers detect unreliable witnesses using the exact same skills as literary critics: catching defensive qualifiers, timeline omissions and contradictions with physical evidence.",
        emoji: "⚖️",
      },
      {
        title: "Screenwriting Subtext",
        detail:
          "Acclaimed television scripts rarely have characters say 'I feel betrayed.' Instead, they argue about a forgotten key or pause before answering — pure dialogue subtext.",
        emoji: "🎭",
      },
      {
        title: "Journalism & Framing",
        detail:
          "News headlines select a single verb (*‘clashed’* vs *‘protested’*) to steer reader sympathy — identical to how novelists choose loaded verbs to shape judgement.",
        emoji: "📰",
      },
    ],
    videos: [
      {
        title: "Narrative Perspective, Focalisation & Free Indirect Discourse Explained",
        channel: "YouTube Search — KS3 / Year 9 English",
        url: "https://www.youtube.com/results?search_query=narrative+perspective+free+indirect+discourse+english+literature+explained",
      },
      {
        title: "How to Write a Conceptual Thesis & WHAT-HOW-WHY Paragraph",
        channel: "YouTube Search — Analytical Essay Craft",
        url: "https://www.youtube.com/results?search_query=how+to+write+WHAT+HOW+WHY+analytical+essay+conceptual+thesis+english",
      },
      {
        title: "Embedding Short Quotations & Single-Word Zoom Technique",
        channel: "YouTube Search — Close Reading Prose",
        url: "https://www.youtube.com/results?search_query=how+to+embed+quotations+single+word+analysis+english+literature",
      },
      {
        title: "Analysing Structure in Fiction: Shifts, Motifs & Cyclical Endings",
        channel: "YouTube Search — Fiction Structure",
        url: "https://www.youtube.com/results?search_query=how+to+analyse+structure+in+fiction+cyclical+foreshadowing+shifts",
      },
    ],
    formulas: [
      {
        name: "Conceptual Thesis Blueprint",
        formula: "Throughout the novel, [Writer] explores [Big Theme] as [Nuanced Idea]: while [Initial State/Tension], [Structural/Craft Shift] ultimately reveals [Deeper Message].",
        note: "Replaces 'In this essay I will write about...' with an arguable spine.",
      },
      {
        name: "WHAT–HOW–WHY + Zoom Blueprint",
        formula: "[WHAT: Conceptual claim] → [HOW: Embedded 1–5 word quote + named method] → [ZOOM: Word class + 2 connotations] → [WHY: Tentative reader impact & whole-novel link].",
        note: "Keep quotations short so 70%+ of the paragraph is analysis.",
      },
      {
        name: "Single-Word Zoom Formula",
        formula: "Arguably, the [word class] “[word]” carries connotations of [connotation 1] and [connotation 2], implying that [deeper effect].",
        note: "Always name the word class (verb, adjective, abstract noun, adverb).",
      },
      {
        name: "Quotation Embedding Test",
        formula: "Own grammar + “micro-quote” + continuation = one seamless sentence if quotation marks disappear.",
        note: "Eliminates clunky 'This is shown in the quote...' padding.",
      },
      {
        name: "Structural Shift Formula",
        formula: "At this turning point, [Writer] pivots from [Opening Focus/Pace] to [New Focus/Pace], compelling the reader to [Emotional/Intellectual Shift].",
        note: "Works on any extract opening, midpoint pivot or cyclical ending.",
      },
      {
        name: "Focalisation",
        formula: "The specific character perspective through whose senses, limits and emotions events are filtered.",
        note: "Distinct from narration (who speaks).",
      },
      {
        name: "Free Indirect Discourse",
        formula: "Third-person grammar (he/she/they) + character's private idiom, questions or bias without speech tags.",
        note: "Blends intimacy with subtle ironic distance.",
      },
      {
        name: "Microcosm",
        formula: "A small, self-contained fictional setting that models the power structures and flaws of wider society.",
        note: "Common in allegories, dystopias and island/boarding-school novels.",
      },
      {
        name: "Character Foil",
        formula: "A contrasting secondary character whose choices sharpen the protagonist's traits and the novel's central conflict.",
        note: "Analyse foils side-by-side when they face the same dilemma.",
      },
    ],
  },
};
