import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "discursive-writing-public-speaking",
  title: "Discursive Writing, Public Speaking & SPaG",
  strand: "Writing & Rhetoric",
  icon: "🎤",
  summary: "Weigh competing viewpoints with steel-man precision, wield Aristotelian rhetoric, command the Tanglin Public Speaking stage, and polish Year 9 SPaG.",
  intro:
    "Great Year 9 writers and speakers do not shout louder than their opponents — they **out-think** them. Whether you are composing a balanced discursive essay, delivering a three-minute speech in the **Tanglin Year 9 Public Speaking Competition**, or sharpening your sentences with semicolons, colons, dashes, and active verbs, mastery comes from marrying **rigorous structure**, **Aristotelian persuasion**, and **flawless technical control**.",
  guide: [
    // =========================================================================
    // SECTION 1: discursive-essay-structure
    // =========================================================================
    {
      id: "discursive-essay-structure",
      heading: "Balanced Discursive Essays & Counter-Arguments",
      discovery: {
        problem:
          'Compare two Year 9 responses to the essay prompt: *"Should cities ban private cars from downtown centres?"*\n\n- **Opening A:** *"Private cars are disgusting pollution machines and anyone who disagrees does not care about the planet!"*\n- **Opening B:** *"Car-free city centres promise cleaner air and safer streets, yet for elderly residents and small tradespeople, restricting vehicles raises urgent questions about accessibility. Weighing public health against mobility reveals why a blanket ban requires careful qualification."*\n\n**Before reading on:** Why does Opening B score far higher as a **discursive** essay than Opening A — even if both writers eventually support greener transport?',
        idea:
          "A **discursive essay** explores competing viewpoints fairly before arriving at a nuanced, reasoned conclusion — unlike one-sided rant-style persuasion. Opening B frames the real tension (*public health vs accessibility*), treats the opposing side seriously, and signals an objective, analytical voice that earns the reader’s trust.",
      },
      body:
        "Many students accidentally turn a discursive essay into an angry persuasive rant. In Year 9 English, **discursive writing** demands intellectual maturity: you examine multiple sides of a complex issue calmly, test the strongest arguments on each side, and reach a **reasoned synthesis** in your conclusion.\n\n" +
        "### Discursive vs One-Sided Persuasion\n" +
        "| Feature | One-Sided Persuasion | High-Band Discursive Essay |\n" +
        "|---|---|---|\n" +
        "| **Goal** | Win the reader over to one fixed position immediately | Explore competing angles thoroughly before reaching a weighed verdict |\n" +
        "| **Register** | Passionate, emotive, often first-person | Measured, academic, tentative (*arguably, nevertheless, on balance*) |\n" +
        "| **Opposing View** | Briefly dismissed or ignored | **Steel-manned** (presented at its strongest) before careful evaluation |\n\n" +
        "### Steel-Manning vs Straw-Manning\n" +
        "- **Straw-manning ❌** twists your opponent’s view into a silly caricature so it is easy to knock down (*\"Critics of school uniforms just want teenagers to wear pyjamas to maths.\"*). Examiners spot this instantly as weak reasoning.\n" +
        "- **Steel-manning ✅** states the rival argument in its **strongest, fairest form** before answering it (*\"Admittedly, critics rightly observe that rigid uniform codes can stifle older adolescents’ self-expression and add expense for families with multiple children.\"*).\n\n" +
        "### The CAR Rebuttal Formula\n" +
        "1. **Concede (Steel-man):** Acknowledge the strongest kernel of truth in the counter-view (*Admittedly… Granted… Proponents persuasively contend that…*).\n" +
        "2. **Analyse / Pivot:** Signal the turn cleanly (*Nevertheless… However… Conversely… Yet this perspective overlooks…*).\n" +
        "3. **Rebut / Qualify:** Show why another principle, piece of evidence, or compromise carries greater weight.\n\n" +
        "> **Avoid Fence-Sitting Conclusions!** Being balanced does *not* mean ending with *\"In conclusion, there are pros and cons on both sides.\"* Your conclusion should **synthesise** the debate into a sharp, qualified judgement (e.g. supporting car-free cores paired with electric shuttles and disability exemptions).",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Discursive Essay Balance and Steel-Man Rebuttal Architecture from Framing to Side A, Steel-Man Counter plus Rebuttal, to Reasoned Conclusion">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="24" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Discursive Essay Architecture (Steel-Man &amp; Synthesis)</text>' +
        '<rect x="20" y="46" width="118" height="122" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
        '<text x="79" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">1. Frame</text>' +
        '<text x="79" y="88" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Hook the real</text>' +
        '<text x="79" y="102" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">tension without</text>' +
        '<text x="79" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">shouting a</text>' +
        '<text x="79" y="130" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">one-sided rant.</text>' +
        '<rect x="154" y="46" width="118" height="122" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.5"/>' +
        '<text x="213" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="var(--info)">2. Viewpoint A</text>' +
        '<text x="213" y="88" text-anchor="middle" font-size="9.5" fill="var(--ink)">Develop core</text>' +
        '<text x="213" y="102" text-anchor="middle" font-size="9.5" fill="var(--ink)">arguments +</text>' +
        '<text x="213" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink)">evidence cleanly.</text>' +
        '<text x="213" y="144" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--info)">Furthermore / Indeed</text>' +
        '<rect x="288" y="46" width="124" height="122" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>' +
        '<text x="350" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">3. CAR Counter</text>' +
        '<text x="350" y="88" text-anchor="middle" font-size="9.5" fill="var(--ink)">C: Steel-man rival</text>' +
        '<text x="350" y="104" text-anchor="middle" font-size="9.5" fill="var(--ink)">A: Pivot fairly</text>' +
        '<text x="350" y="120" text-anchor="middle" font-size="9.5" fill="var(--ink)">R: Rebut / weigh</text>' +
        '<text x="350" y="144" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--brand)">Admittedly &#x2192; Yet</text>' +
        '<rect x="428" y="46" width="112" height="122" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="484" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">4. Verdict</text>' +
        '<text x="484" y="88" text-anchor="middle" font-size="9.5" fill="var(--ink)">Reasoned</text>' +
        '<text x="484" y="102" text-anchor="middle" font-size="9.5" fill="var(--ink)">synthesis —</text>' +
        '<text x="484" y="116" text-anchor="middle" font-size="9.5" fill="var(--ink)">never empty</text>' +
        '<text x="484" y="130" text-anchor="middle" font-size="9.5" fill="var(--ink)">fence-sitting.</text>' +
        '<line x1="138" y1="107" x2="152" y2="107" stroke="var(--ink)" stroke-width="2"/>' +
        '<line x1="272" y1="107" x2="286" y2="107" stroke="var(--ink)" stroke-width="2"/>' +
        '<line x1="412" y1="107" x2="426" y2="107" stroke="var(--ink)" stroke-width="2"/>' +
        '<rect x="58" y="186" width="444" height="44" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="280" y="205" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">Signposting Discourse Markers</text>' +
        '<text x="280" y="221" text-anchor="middle" font-size="10" fill="var(--ink-2)">Concession: Admittedly / Granted &#x2022; Pivot: Nevertheless / Conversely &#x2022; Verdict: On balance</text>' +
        '</svg>',
      diagramCaption: "Balanced discursive essays treat opposing views at their strongest (steel-manning) before synthesising a qualified verdict.",
      workedExamples: [
        {
          title: "Turning a straw-man dismissal into a CAR steel-man rebuttal",
          problem:
            'Motion: *"Should schools replace traditional summer holidays with shorter, evenly spaced breaks?"*\n\nWeak sentence: *"People who want long summer holidays are just lazy students who hate studying."* Upgrade this into a mature **CAR** (Concede–Analyse–Rebut) counter-argument.',
          steps: [
            "Identify why the weak sentence fails: it attacks people’s character ('lazy') instead of engaging their real argument (straw-man fallacy).",
            "Concede (Steel-man): state the strongest case for long summers — deep family travel, extended rest from exam burnout, or summer jobs/camps.",
            "Analyse / Pivot: use a crisp discourse marker ('Nevertheless', 'However') to weigh that benefit against learning loss.",
            "Rebut / Qualify: highlight evidence of 'summer slide' and fatigue during 14-week terms, proposing balanced multi-week breaks.",
          ],
          answer:
            "Admittedly, defenders of traditional summer breaks make a compelling case that extended time away from timetables allows deep recovery from exam fatigue and enables meaningful family travel or work experience. Nevertheless, research consistently highlights sharp ‘summer learning loss’ over long gaps, while stretching autumn terms to exhaustion undermines daily focus; distributing shorter, regular two-week breaks across the year arguably preserves rest without sacrificing academic momentum.",
          yourTurn: {
            question:
              'A student writes: *"Anyone who doubts AI tutors just fears technology and wants schools to go back to stone tablets."* What two-word fallacy describes distorting an opponent’s argument into an absurd caricature to knock it down easily?',
            answer: {
              type: "text",
              accept: ["straw man", "straw-man", "strawman", "straw man fallacy"],
              display: "straw man",
            },
            solution:
              "**Straw man** (or straw-man fallacy) — misrepresenting a rival viewpoint in an absurdly weak form instead of addressing its strongest version (steel-manning).",
          },
        },
        {
          title: "Upgrading a fence-sitting conclusion into a nuanced synthesis",
          problem:
            'Replace this flat conclusion on AI study tools: *"In conclusion, AI has both good points and bad points, so everyone must decide for themselves."* Write a sharp, nuanced discursive verdict.',
          steps: [
            "Spot the flaw: saying 'good points and bad points' refuses to synthesise the evidence already discussed.",
            "Name the core tension cleanly: instant personalised feedback versus erosion of independent thinking.",
            "Offer a qualified policy verdict using formal phrasing ('On balance… provided that…').",
          ],
          answer:
            "On balance, banning AI study tools outright is as short-sighted as embracing them uncritically: they can democratise personalised explanations, provided schools protect handwritten, unassisted drafting so students still build independent judgement.",
        },
      ],
      keyPoints: [
        "Discursive essays weigh **competing perspectives fairly** before arriving at a nuanced, evidence-backed verdict.",
        "Always **steel-man** your opponent’s strongest argument rather than mocking a weak **straw man**.",
        "Use the **CAR** pattern — **C**oncede → **A**nalyse/Pivot → **R**ebut — inside counter-argument paragraphs.",
        "Guide your reader with formal **discourse markers** (*admittedly, conversely, nevertheless, furthermore, on balance*).",
        "Never finish with an empty fence-sitting cliché (*'there are pros and cons'*); synthesise a **qualified judgement**.",
      ],
      whyItWorks:
        "Readers instinctively resist writers who sound blind to opposing evidence. When you articulate the rival case more clearly than your opponent could — and *still* demonstrate why your synthesis holds — your argument becomes extraordinarily persuasive and intellectually credible.",
      strategies: [
        "**The Steel-Man Test** (could someone on the other side read your counter-paragraph and nod, 'Yes, that represents my best point'?)",
        "**CAR Paragraph Frame** (Concede → Analyse/Pivot → Rebut)",
        "**Qualified Verdict Conclusions** (*On balance… provided that…*)",
      ],
      thinkDeeper:
        "When is it stronger to end a discursive essay by proposing a *third compromise* rather than siding purely with Yes or No?",
    },

    // =========================================================================
    // SECTION 2: aristotelian-rhetoric
    // =========================================================================
    {
      id: "aristotelian-rhetoric",
      heading: "Ethos, Pathos, Logos & Rhetorical Craft",
      discovery: {
        problem:
          'Read three versions of a plea to save a school woodland trail:\n1. *"As a member of the school Eco-Council who has surveyed this trail weekly with our biology department for two years, I have watched twelve native bird species return."*\n2. *"Last Tuesday, I watched a five-year-old from Infant School crouch motionless beside a fallen log, whispering in awe as a blue-winged pitta hopped past her shoe."*\n3. *"Preserving the 0.4-hectare strip absorbs an estimated 18,000 litres of monsoon runoff every storm while costing less than 2% of the proposed car-park budget."*\n\n**Before reading on:** Why would a speech using **all three** appeals overpower a speech relying on only one?',
        idea:
          "Appeal 1 builds **Ethos** (trustworthy expertise and character); Appeal 2 awakens **Pathos** (vivid, restrained human empathy); Appeal 3 anchors **Logos** (concrete facts, logic, and numbers). Without Logos, Pathos sounds manipulative; without Pathos, Logos feels cold; without Ethos, audiences doubt both.",
      },
      body:
        "Over 2,300 years ago, Aristotle mapped the three pillars of lasting persuasion in *Rhetoric*: **Ethos**, **Pathos**, and **Logos**. In Year 9 speeches and articles, the goal is **calibrated balance** — combining credibility, controlled emotion, and clear logic without tipping into melodrama.\n\n" +
        "### The Three Aristotelian Appeals\n" +
        "- **Ethos (Credibility & Character):** Earns the audience’s trust through calm authority, lived experience, fair concession to opponents, and shared moral values (*\"As someone who once supported…\"*).\n" +
        "- **Pathos (Emotion & Empathy):** Moves the heart through **specific, understated human scenes** — never cheesy exaggeration (*\"Think of the poor weeping planet!\"* feels melodramatic; one quiet concrete detail hits ten times harder).\n" +
        "- **Logos (Reason & Evidence):** Convinces the mind through verifiable statistics, cause-and-effect chains, clear analogies, and airtight counter-rebuttals.\n\n" +
        "### Four High-Impact Rhetorical Micro-Devices\n" +
        "| Device | Definition | Crisp Year 9 Example | Reader / Listener Effect |\n" +
        "|---|---|---|---|\n" +
        "| **Anaphora** | Repeating the same opening words across consecutive clauses | *We deserve quiet rooms. We deserve honest feedback. We deserve time to think.* | Builds musical momentum, unity, and rising insistence |\n" +
        "| **Tricolon** | Grouping three parallel phrases or clauses in rhythmic threes | *Clearer focus, calmer corridors, deeper friendships.* | Feels complete, punchy, and effortless to remember |\n" +
        "| **Antithesis** | Placing contrasting ideas in balanced, mirror-image grammar | *Measure progress by curiosity sparked, not worksheets ticked.* | Sharpens moral choice into a quotable soundbite |\n" +
        "| **Hypophora** | Asking a pointed question and immediately answering it yourself | *Who gains from silence? Only those afraid of scrutiny.* | Keeps total control of the room while pre-empting doubts |\n\n" +
        "> **Avoid Rhetorical Overkill!** Cramming six metaphors, three rhetorical questions, and shouting capital letters into one paragraph destroys Ethos. Place **one razor-sharp antithesis or tricolon** at a key turning point so it rings in the room.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aristotelian Rhetorical Triangle linking Ethos, Pathos and Logos with key rhetorical devices">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The Aristotelian Rhetorical Triangle &amp; Craft</text>' +
        '<polygon points="185,54 315,204 55,204" fill="var(--brand-soft)" opacity="0.5" stroke="var(--brand)" stroke-width="2"/>' +
        '<rect x="115" y="34" width="140" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>' +
        '<text x="185" y="53" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--brand)">ETHOS</text>' +
        '<text x="185" y="69" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Trust &#x2022; Fairness &#x2022; Authority</text>' +
        '<rect x="16" y="188" width="136" height="46" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.8"/>' +
        '<text x="84" y="207" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--good)">PATHOS</text>' +
        '<text x="84" y="223" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Anecdote &#x2022; Empathy</text>' +
        '<rect x="218" y="188" width="136" height="46" rx="8" fill="var(--surface)" stroke="var(--info)" stroke-width="1.8"/>' +
        '<text x="286" y="207" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--info)">LOGOS</text>' +
        '<text x="286" y="223" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Data &#x2022; Logic &#x2022; Proof</text>' +
        '<text x="185" y="152" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">CALIBRATED</text>' +
        '<text x="185" y="167" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">PERSUASION</text>' +
        '<rect x="372" y="42" width="170" height="186" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>' +
        '<text x="457" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">4 Power Devices</text>' +
        '<text x="384" y="88" font-size="10.5" font-weight="800" fill="var(--brand)">Anaphora</text>' +
        '<text x="384" y="102" font-size="9.5" fill="var(--ink-2)">Repeated clause openings</text>' +
        '<text x="384" y="124" font-size="10.5" font-weight="800" fill="var(--brand)">Tricolon</text>' +
        '<text x="384" y="138" font-size="9.5" fill="var(--ink-2)">Memorable parallel threes</text>' +
        '<text x="384" y="160" font-size="10.5" font-weight="800" fill="var(--brand)">Antithesis</text>' +
        '<text x="384" y="174" font-size="9.5" fill="var(--ink-2)">Balanced mirror contrast</text>' +
        '<text x="384" y="196" font-size="10.5" font-weight="800" fill="var(--brand)">Hypophora</text>' +
        '<text x="384" y="210" font-size="9.5" fill="var(--ink-2)">Ask + immediately answer</text>' +
        '</svg>',
      diagramCaption: "Balanced speeches weave Ethos, Pathos, and Logos together, sharpening key moments with anaphora, tricolon, antithesis, and hypophora.",
      workedExamples: [
        {
          title: "Crafting an antithesis and hypophora without melodrama",
          problem:
            'A Year 9 student is speaking on youth digital wellbeing. Upgrade this plain line — *"Phones stop us talking to each other, so who really benefits? Big tech companies do."* — using crisp **hypophora** and **antithesis**.',
          steps: [
            "Tighten the question-and-answer rhythm (hypophora) so the answer lands cleanly without clunky filler.",
            "Build a mirror-image contrast (antithesis) pitting passive scrolling against genuine human connection.",
            "Keep diction restrained and sharp — zero melodramatic exclamation marks.",
          ],
          answer:
            "Who profits when a dinner table falls silent? Not the friends sitting across from us — only the algorithms monetising our distraction. Technology should serve our attention, not harvest it.",
          yourTurn: {
            question:
              'Read this speech line: *"We did not inherit this coastline to concrete it; we borrowed it to protect it."* Which rhetorical device places two contrasting ideas in balanced mirror-image phrasing? (One word.)',
            answer: {
              type: "text",
              accept: ["antithesis", "parallel contrast"],
              display: "antithesis",
            },
            solution:
              "**Antithesis** — balancing opposing verbs ('inherit / concrete' vs 'borrowed / protect') in matching grammatical structure.",
          },
        },
        {
          title: "Spotting melodrama vs controlled Pathos",
          problem:
            'Why is *"Imagine a single empty chair at Friday’s lunch table after a teammate burns out"* stronger **Pathos** than *"Millions of tragic souls are weeping in agony every single day!"*?',
          steps: [
            "Evaluate specificity: 'a single empty chair at Friday’s lunch table' creates an instant mental photograph familiar to every Year 9 listener.",
            "Evaluate credibility (Ethos): exaggerated words like 'tragic souls weeping in agony' sound theatrical and insincere, making audiences switch off.",
            "Conclude with the golden rule of Pathos: **specific restraint beats loud melodrama**.",
          ],
          answer:
            "The empty chair at Friday lunch triggers quiet, relatable empathy without telling the audience how to feel, preserving the speaker’s Ethos; by contrast, hyperbolic phrasing ('weeping in agony') sounds forced and melodramatic.",
        },
      ],
      keyPoints: [
        "**Ethos** builds trust and authority; **Pathos** creates restrained human empathy; **Logos** provides evidence and logical structure.",
        "Specific, understated stories produce far stronger **Pathos** than melodramatic exaggeration.",
        "**Anaphora** (repeated openings) builds driving cadence; **tricolon** (parallel threes) creates satisfying rhythmic punch.",
        "**Antithesis** turns a complex argument into a memorable, quotable contrast.",
        "**Hypophora** (asking and answering your own question) lets you control objections smoothly.",
      ],
      whyItWorks:
        "Human decisions are neither purely robotic nor purely emotional. Aristotle discovered that persuasion sticks only when the head (Logos), the heart (Pathos), and trust in the speaker (Ethos) pull in the same direction — reinforced by rhythmic syntax that the ear remembers.",
      strategies: [
        "**The E-P-L Audit** (highlight your draft in 3 colours: Ethos, Pathos, Logos — spot whichever pillar is missing)",
        "**One Showstopper Per Minute** (reserve anaphora or antithesis for your peak moment so it stands out)",
        "**Specificity Over Volume** (replace vague adjectives with one concrete image)",
      ],
      thinkDeeper:
        "Can an appeal to **Ethos** actually come from admitting a mistake or acknowledging an opponent’s strongest point? Explain why.",
    },

    // =========================================================================
    // SECTION 3: public-speaking-competition
    // =========================================================================
    {
      id: "public-speaking-competition",
      heading: "Speech Craft for the Public Speaking Competition",
      discovery: {
        problem:
          'You step up to the lectern for the **Tanglin Year 9 Public Speaking Competition** with a strict **3-minute** time limit. Two contestants open as follows:\n- **Speaker 1:** *"Hello everyone, my name is Alex and today I am going to talk to you about why failure is actually quite useful in life."*\n- **Speaker 2:** *(Steps forward, pauses for two calm seconds, makes eye contact across the hall.)* *"Three weeks ago, I handed in the worst maths test of my life — and framed the front page on my bedroom wall."*\n\n**Before reading on:** Why does Speaker 2 command the entire room inside 15 seconds while Speaker 1 loses half the audience before sentence two?',
        idea:
          "Speaker 1 wastes the golden first 15 seconds announcing obvious housekeeping (*'Hello, my name is… today I am going to talk about…'*). Speaker 2 uses a **calm opening pause** to claim presence, then launches immediately into a **surprising concrete hook** that triggers curiosity — and sets up a framed maths test to echo in a **cyclical call-back** at minute 2:50!",
      },
      body:
        "A winning speech is **written for the ear, not the eye**. Dense 45-word essay sentences that read fine on paper suffocate a live speaker. For the **Tanglin Year 9 Public Speaking Competition**, aim for roughly **380–430 words** for a **3-minute speech** (~130–140 words per minute — leaving generous space for strategic pauses!).\n\n" +
        "### The 3-Minute Speech Blueprint\n" +
        "| Time | Stage | What You Do on Stage |\n" +
        "|---|---|---|\n" +
        "| **0:00–0:20** | **The 15-Second Hook** | Step up, breathe, make eye contact, and launch with a vivid scene, bold statistic, or puzzling question — *skip* 'Today I will talk about…' |\n" +
        "| **0:20–1:15** | **Pillar 1 (Core Case)** | Establish your central thesis with one sharp **Logos** anchor + one relatable **Pathos** story |\n" +
        "| **1:15–2:00** | **Counter & Pivot** | Steel-man the obvious objection (*'You might wonder…'*) and pivot cleanly using hypophora or antithesis |\n" +
        "| **2:00–2:40** | **Climax & Call** | Slow your pace slightly; deploy one rhythmic **anaphora** or **tricolon** to lift emotional energy |\n" +
        "| **2:40–3:00** | **Cyclical Call-Back** | Return to your opening object/image from second 10 with fresh meaning, pause one full beat, and hold eye contact |\n\n" +
        "### Delivery Mechanics That Separate Finalists\n" +
        "- **Strategic Pauses:** Silence is your loudest microphone. Pause **1.5–2 seconds** *before* your opening word, *after* a rhetorical question, and *right before* your punchline.\n" +
        "- **Vocal Variation (Pace, Pitch, Volume):** Do not shout everything! Dropping your voice slightly *quieter* and slower at a serious moment pulls the entire hall forward.\n" +
        "- **Eye Contact Triangulation:** Divide the room into **Left – Centre – Right** zones and complete one full thought to a real person in each zone (never sweep like a sprinkler or bury your face in cue cards).\n" +
        "- **Cue Cards, Not Scripts:** Write 5–6 bold bullet anchors per palm-sized card so you speak *with* the audience instead of reading *at* them.\n\n" +
        "### Handling Competition Q&A With Poise (PREP / Bridge & Pivot)\n" +
        "When a judge asks a tough follow-up question:\n" +
        "1. **Pause & Validate:** Take a calm breath (*\"That’s an important challenge…\"*) — never interrupt or look flustered.\n" +
        "2. **Point → Reason → Example → Point (PREP):** Give a direct 30-second answer anchored to one crisp example.\n" +
        "3. **Bridge calmly if stumped:** Never invent fake statistics! Acknowledge the limit honestly (*\"I don’t have the exact national percentage to hand, though what our school data shows is…\"*) — honesty protects your **Ethos**.",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3-Minute Public Speaking Timeline showing Hook, Core Case, Counter Pivot, Climax and Cyclical Call-back with vocal pace curve">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="22" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">3-Minute Speech Architecture &amp; Vocal Energy Curve</text>' +
        '<line x1="36" y1="158" x2="524" y2="158" stroke="var(--line)" stroke-width="2"/>' +
        '<path d="M 46 132 C 80 86, 118 86, 146 112 C 184 142, 224 102, 272 118 C 318 134, 362 56, 412 64 C 452 70, 476 112, 512 96" fill="none" stroke="var(--brand)" stroke-width="3"/>' +
        '<circle cx="62" cy="108" r="6" fill="var(--brand)"/>' +
        '<circle cx="176" cy="122" r="6" fill="var(--info)"/>' +
        '<circle cx="282" cy="120" r="6" fill="var(--ink)"/>' +
        '<circle cx="404" cy="63" r="7" fill="var(--bad)"/>' +
        '<circle cx="508" cy="96" r="6" fill="var(--good)"/>' +
        '<text x="62" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">0:00–0:20</text>' +
        '<text x="62" y="191" text-anchor="middle" font-size="9.5" fill="var(--ink)">Hook + Pause</text>' +
        '<text x="176" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="var(--info)">0:20–1:15</text>' +
        '<text x="176" y="191" text-anchor="middle" font-size="9.5" fill="var(--ink)">Core Pillar</text>' +
        '<text x="282" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="var(--ink)">1:15–2:00</text>' +
        '<text x="282" y="191" text-anchor="middle" font-size="9.5" fill="var(--ink)">Counter Pivot</text>' +
        '<text x="404" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">2:00–2:40</text>' +
        '<text x="404" y="191" text-anchor="middle" font-size="9.5" fill="var(--ink)">Rhetorical Peak</text>' +
        '<text x="508" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">2:40–3:00</text>' +
        '<text x="508" y="191" text-anchor="middle" font-size="9.5" fill="var(--ink)">Call-Back</text>' +
        '<rect x="348" y="34" width="112" height="22" rx="6" fill="var(--bad-soft)" stroke="var(--bad)"/>' +
        '<text x="404" y="48" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">Slow &#x2022; Quiet &#x2022; Clear</text>' +
        '<path d="M 508 202 C 508 238, 62 238, 62 202" fill="none" stroke="var(--good)" stroke-width="1.8" stroke-dasharray="5 4"/>' +
        '<polygon points="62,202 57,210 67,210" fill="var(--good)"/>' +
        '<rect x="192" y="216" width="176" height="22" rx="6" fill="var(--good-soft)" stroke="var(--good)"/>' +
        '<text x="280" y="231" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--good)">Cyclical Call-Back Echo (~400 wds)</text>' +
        '</svg>',
      diagramCaption: "Great 3-minute speeches vary pace and vocal intensity, peak purposefully around 2:20, and echo the opening hook at the close.",
      workedExamples: [
        {
          title: "Designing a cyclical call-back that transforms the opening image",
          problem:
            'Opening hook (0:05): *"In my kitchen drawer sits a cracked brass compass my grandfather used on sea voyages — its needle has been stuck pointing north-east for twenty years."* Write a **closing cyclical call-back** (2:45–3:00) for a speech arguing that school should reward curiosity over safe conformity.',
          steps: [
            "Recall the exact opening object: the cracked brass compass stuck pointing in one safe direction.",
            "Twist its meaning using what the speech has now proved: exams that only reward memorisation turn students into stuck needles.",
            "End on a crisp, slow-delivered antithesis or imperative that leaves the compass resonating in the hall.",
          ],
          answer:
            "A compass stuck on one bearing never loses its way — because it never goes anywhere new. Let us stop building classrooms that lock young needles in place; let us hand every student the courage to spin the dial, test the storm, and chart their own true north.",
          yourTurn: {
            question:
              'A student writes a 720-word script for a strict **3-minute** public speaking competition. Speaking at a poised competition pace of roughly **135 words per minute** (leaving room for pauses), approximately how many words should they trim to hit **405 words**? (Type a number.)',
            answer: { type: "number", value: 315, display: "315" },
            solution:
              "720 − 405 = **315** words. Cutting roughly 315 words prevents frantic rushing and creates breathing room for strategic pauses and eye contact.",
          },
        },
        {
          title: "Handling a challenging Q&A question with PREP",
          problem:
            'You just delivered a speech arguing that smartphones should be locked in school pouches. A judge asks: *"What if a parent urgently needs to contact their child during a medical emergency?"* Model a calm 3-sentence **PREP** answer.',
          steps: [
            "Pause and validate the judge’s concern calmly (protecting Ethos).",
            "Point: state clearly that emergency communication stays fast without classroom phones.",
            "Reason + Example: explain how the school office already handles verified urgent calls directly to classrooms — and avoids panic or misinformation.",
            "Point: close smoothly by reaffirming safety plus focus.",
          ],
          answer:
            "That is a vital safety question, and students must always remain reachable in genuine emergencies. In fact, routing urgent messages through the school reception is faster and calmer: office staff can locate a pupil in seconds and ensure an adult supports them immediately, rather than a teenager receiving shocking news alone in a corridor. Pouches therefore protect both classroom focus and structured student welfare.",
        },
      ],
      keyPoints: [
        "Aim for **~380–430 words** for a 3-minute speech so you speak at ~135 wpm with poised pauses rather than sprinting.",
        "Open inside the **first 15 seconds** with a concrete hook — never *'Hello, today I am going to talk about…'*.",
        "Use a **cyclical call-back** at 2:45 to revisit your opening image with transformed meaning.",
        "Control the room through **strategic pauses**, **vocal contrast** (quieter can be more powerful than louder), and **triangulated eye contact**.",
        "Handle Q&A using **PREP** (Point–Reason–Example–Point) and never invent fake facts when pressed.",
      ],
      whyItWorks:
        "Listeners cannot scroll back up a speech the way readers re-read an essay. Signposting, shorter rhythmic clauses, deliberate pauses, and a cyclical call-back act as acoustic landmarks — helping an audience follow every turn effortlessly and remember your message hours later.",
      strategies: [
        "**The 15-Second Hook Rule** (cut all throat-clearing intros)",
        "**Mark Your Pauses** (draw `/` for a 1-beat breath and `//` for a 2-second dramatic pause on your cue cards)",
        "**PREP for Q&A** (Point → Reason → Example → Point)",
      ],
      thinkDeeper:
        "Why does lowering your volume and slowing down at a speech’s emotional climax often command a hall far more powerfully than shouting?",
    },

    // =========================================================================
    // SECTION 4: spag-syntax-precision
    // =========================================================================
    {
      id: "spag-syntax-precision",
      heading: "Year 9 SPaG: Punctuation, Syntax & Academic Register",
      discovery: {
        problem:
          'Spot the hidden error in this Year 9 essay sentence:\n\n*"Social media connects distant families, however, it also fuels midnight comparison among teenagers."*\n\n**Before reading on:** Why is the comma before *however* a classic Year 9 SPaG trap — and what are **two different ways** to repair the sentence accurately?',
        idea:
          "That sentence commits a **comma splice**! *'however'* is a conjunctive adverb — NOT a coordinating conjunction like *but* or *yet* — so a comma cannot glue two full independent clauses together. Repair 1 (Semicolon): *\"Social media connects distant families; however, it also fuels…\"* Repair 2 (Full stop or coordinating conjunction): *\"Social media connects distant families, yet it also fuels…\"*",
      },
      body:
        "Brilliant arguments lose marks rapidly when undermined by **comma splices**, misplaced **apostrophes**, clumsy **passive voice**, or flat, repetitive sentence openings. Mastering Year 9 punctuation is not merely about following rules — every mark controls **rhythm, emphasis, and precision**.\n\n" +
        "### Eliminating the Comma Splice\n" +
        "A **comma splice** occurs when two complete independent clauses (each able to stand alone as a full sentence) are joined by nothing stronger than a comma:\n" +
        "- ❌ *The debate ran overtime, the judges requested one final rebuttal.*\n" +
        "- ✅ **Full stop:** *The debate ran overtime. The judges requested one final rebuttal.*\n" +
        "- ✅ **Semicolon:** *The debate ran overtime; the judges requested one final rebuttal.* (Shows tight conceptual link!)\n" +
        "- ✅ **Comma + FANBOYS** (*for, and, nor, but, or, yet, so*): *The debate ran overtime, so the judges requested one final rebuttal.*\n\n" +
        "### Precision Punctuation Toolkit\n" +
        "| Mark | Exact Grammatical Job | Crisp Model Example |\n" +
        "|---|---|---|\n" +
        "| **Semicolon (`;`)** | Joins two **closely linked independent clauses** without a conjunction (or separates complex list items containing commas) | *Speeches persuade the ear; essays persuade the eye.* |\n" +
        "| **Colon (`:`)** | Introduces an **explanation, dramatic reveal, quotation, or list** — the clause *before* a colon should normally be a complete sentence! | *Great rhetoric demands one rare skill: knowing when to pause.* |\n" +
        "| **Dashes (`—`)** | **Single dash** creates a sudden dramatic pivot/punchline; **paired dashes** frame emphatic parenthetical detail | *She checked her cue cards — empty — and smiled anyway.* |\n\n" +
        "### Apostrophe Traps That Trip Up Year 9 Writers\n" +
        "- **`its` vs `it's`:** **`it's`** ALWAYS means *it is* or *it has* (*It’s crucial*). **`its`** shows possession with **no apostrophe** (*The policy lost its credibility* — just like *his, hers, ours*!).\n" +
        "- **Singular vs Plural Possessives:** One student’s voice → **`the student's voice`**; many students’ voices → **`the students' voices`**; irregular plurals not ending in *-s* take **`'s`** → **`the children's rights`**, **`people's trust`**.\n" +
        "- **Never** use an apostrophe simply to make a plural (*❌ essay's, 1990's* → ✅ *essays, 1990s*).\n\n" +
        "### Active vs Passive Voice & Clause Variety\n" +
        "- **Active voice** puts the doer first and feels crisp and accountable: *\"The council cancelled the night bus.\"* (Use active voice as your default!)\n" +
        "- **Passive voice** puts the receiver first: *\"The night bus was cancelled (by the council).\"* Use passive voice deliberately ONLY when the action matters more than the actor (e.g. scientific method) — or **analyse** it in reading papers when politicians use it to dodge blame!\n" +
        "- **Vary clause openings** to elevate academic fluency: open occasionally with a subordinate clause (*Although tariffs protect local firms,…*), a participle phrase (*Weighing both budgets,…*), or a crisp prepositional phrase (*Beneath the glossy slogans,…*).",
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Punctuation Power Scale contrasting a comma splice with four valid clause repairs using full stop, semicolon, colon, and comma plus FANBOYS">' +
        '<rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
        '<text x="280" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Fixing Two Independent Clauses: The Punctuation Power Scale</text>' +
        '<rect x="24" y="38" width="512" height="44" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>' +
        '<text x="42" y="57" font-size="11" font-weight="800" fill="var(--bad)">&#x2717; COMMA SPLICE (Broken!)</text>' +
        '<text x="42" y="73" font-size="10.5" fill="var(--ink)">Clause 1 (complete sentence)  ,  Clause 2 (complete sentence)  &#x2192;  Comma is too weak!</text>' +
        '<rect x="24" y="96" width="120" height="134" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="84" y="122" text-anchor="middle" font-size="22" font-weight="800" fill="var(--good)">.</text>' +
        '<text x="84" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Full Stop</text>' +
        '<text x="84" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Clean separation</text>' +
        '<text x="84" y="178" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">for punchy</text>' +
        '<text x="84" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">short impact.</text>' +
        '<rect x="155" y="96" width="120" height="134" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>' +
        '<text x="215" y="122" text-anchor="middle" font-size="22" font-weight="800" fill="var(--brand)">;</text>' +
        '<text x="215" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Semicolon</text>' +
        '<text x="215" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink)">Links closely</text>' +
        '<text x="215" y="178" text-anchor="middle" font-size="9.5" fill="var(--ink)">related clauses</text>' +
        '<text x="215" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink)">or balanced contrast.</text>' +
        '<rect x="286" y="96" width="120" height="134" rx="8" fill="var(--surface-2)" stroke="var(--info)" stroke-width="1.5"/>' +
        '<text x="346" y="122" text-anchor="middle" font-size="22" font-weight="800" fill="var(--info)">:</text>' +
        '<text x="346" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Colon</text>' +
        '<text x="346" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Clause 2 explains,</text>' +
        '<text x="346" y="178" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">proves, or reveals</text>' +
        '<text x="346" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">Clause 1.</text>' +
        '<rect x="417" y="96" width="119" height="134" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
        '<text x="476" y="122" text-anchor="middle" font-size="16" font-weight="800" fill="var(--good)">, + FANBOYS</text>' +
        '<text x="476" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Conjunction</text>' +
        '<text x="476" y="164" text-anchor="middle" font-size="9.5" fill="var(--ink)">for, and, nor,</text>' +
        '<text x="476" y="178" text-anchor="middle" font-size="9.5" fill="var(--ink)">but, or, yet, so</text>' +
        '<text x="476" y="192" text-anchor="middle" font-size="9.5" fill="var(--ink)">(NOT ‘however’!)</text>' +
        '</svg>',
      diagramCaption: "A bare comma can never glue two full sentences together — upgrade to a full stop, semicolon, colon, or comma + FANBOYS.",
      workedExamples: [
        {
          title: "Choosing between a semicolon, colon, and dash",
          problem:
            'Decide which punctuation mark (`;`, `:`, or `—`) fits best in each slot and explain why:\n1. *"One mistake ruins most Year 9 speeches ___ speaking twice as fast as you think."*\n2. *"Short sentences strike sharply ___ longer sentences let an argument breathe."*',
          steps: [
            "Inspect Slot 1: the second half directly reveals and explains 'One mistake'. Introducing an explanation or reveal after a complete clause is the exact job of a **colon (`:`)** (or an emphatic dash).",
            "Inspect Slot 2: both halves are complete, mirror-image independent clauses in balanced antithesis. Joining two closely linked independent clauses is the exact job of a **semicolon (`;`)**.",
          ],
          answer:
            "Slot 1 takes a **colon (`:`)** to introduce the specific reveal (*speaking twice as fast as you think*); Slot 2 takes a **semicolon (`;`)** to balance two tightly linked contrasting independent clauses.",
          yourTurn: {
            question:
              'Look at this sentence: *"The council published its final transport report on Monday."* Is the word *its* here showing **possession** or a **contraction**? (Type `possession` or `contraction`.)',
            answer: {
              type: "text",
              accept: ["possession", "possessive"],
              display: "possession",
            },
            solution:
              "**Possession** (no apostrophe). Test by substituting *it is*: 'The council published *it is* final report' fails, confirming possessive *its*.",
          },
        },
        {
          title: "Converting weak passive prose into sharp active voice",
          problem:
            'Rewrite this evasive passive sentence into crisp active voice: *"Mistakes were made during the timetable rollout, and several clubs were cancelled without notice by the committee."*',
          steps: [
            "Spot the hidden or buried actors: who made mistakes and cancelled clubs? 'The committee'.",
            "Move the actor into the subject position at the start of the clause.",
            "Replace clunky 'were made / were cancelled' with direct active verbs ('mishandled', 'cancelled').",
          ],
          answer:
            "The committee mishandled the timetable rollout and cancelled several clubs without notice.",
        },
      ],
      keyPoints: [
        "Never join two full sentences with only a comma (a **comma splice**) — especially before *however* or *therefore*.",
        "Use a **semicolon (`;`)** between two tightly linked independent clauses, and a **colon (`:`)** after a complete clause to introduce a reveal, explanation, or list.",
        "Use **`it's`** strictly for *it is / it has*, and **`its`** (no apostrophe) for possession.",
        "Place plural possessive apostrophes **after the -s** (*the students' essays*), except irregular plurals (*children's, people's*).",
        "Default to **active voice** for punch and accountability; deploy passive voice only for deliberate scientific objectivity or emphasis.",
      ],
      whyItWorks:
        "Punctuation is road signage for thought. A semicolon tells the reader's brain 'hold these two complete ideas in parallel balance'; a colon says 'drumroll — here comes the proof'; a crisp active verb strips away fog so your argument hits at full force.",
      strategies: [
        "**The Full-Stop Test** (if you could legally put a full stop on both sides, a bare comma is a comma splice!)",
        "**The 'It Is' Substitution Test** (if *it is* or *it has* sounds wrong, ban the apostrophe in *its*)",
        "**The 'By Zombies' Passive Test** (if you can add *'by zombies'* after the verb — *'the vote was delayed [by zombies]'* — the clause is passive!)",
      ],
      thinkDeeper:
        "Why do politicians and corporate apologies so frequently choose the **passive voice** (*'Errors were made in the billing process'*) instead of the active voice?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Discursive Essay",
        back: "An essay that explores competing perspectives fairly and analytically before reaching a nuanced, reasoned conclusion — distinct from one-sided persuasion.",
      },
      {
        front: "Steel-Manning",
        back: "Presenting an opponent’s counter-argument in its strongest, fairest form before evaluating or rebutting it — boosting your Ethos.",
      },
      {
        front: "Straw-Man Fallacy",
        back: "Distorting an opponent’s viewpoint into a weak or absurd caricature so it is easy to mock — a flaw that weakens academic credibility.",
      },
      {
        front: "Ethos",
        back: "Aristotelian appeal to speaker credibility, fairness, expertise, and trustworthy character.",
      },
      {
        front: "Pathos",
        back: "Aristotelian appeal to audience empathy and emotion — most powerful through concrete, understated human stories rather than melodrama.",
      },
      {
        front: "Logos",
        back: "Aristotelian appeal to reason, evidence, statistics, clear cause-and-effect, and structured logic.",
      },
      {
        front: "Anaphora",
        back: "Deliberate repetition of the same word or phrase at the start of consecutive clauses to build cadence and momentum.",
      },
      {
        front: "Tricolon",
        back: "A parallel series of three words, phrases, or clauses ('rule of three') creating rhythmic completeness and memorability.",
      },
      {
        front: "Antithesis",
        back: "Placing sharply contrasting ideas inside balanced, mirror-image grammatical structure ('serve our attention, not harvest it').",
      },
      {
        front: "Hypophora",
        back: "Asking a pointed question and immediately supplying the answer yourself to steer audience logic decisively.",
      },
      {
        front: "Cyclical Call-Back (Speech)",
        back: "Returning in the final 20 seconds of a speech to the concrete image or story from the opening hook, now transformed in meaning.",
      },
      {
        front: "Comma Splice",
        back: "The grammatical error of joining two independent clauses with only a comma (e.g. before 'however'); fix with a full stop, semicolon, or comma + FANBOYS.",
      },
      {
        front: "Semicolon vs Colon",
        back: "A semicolon links two closely related independent clauses; a colon follows a complete clause to introduce an explanation, dramatic reveal, or list.",
      },
      {
        front: "its vs it's",
        back: "it's = 'it is' or 'it has' (contraction); its = belonging to it (possessive, NO apostrophe).",
      },
    ],
    mustKnow: [
      "Can you explain the difference between a balanced discursive essay and a one-sided persuasive piece?",
      "Can you write a CAR counter-argument paragraph (Concede/steel-man → Analyse/pivot → Rebut) without straw-manning?",
      "Can you balance Ethos, Pathos, and Logos in a single argument without slipping into melodrama?",
      "Can you spot and craft anaphora, tricolon, antithesis, and hypophora cleanly?",
      "Can you structure a ~400-word, 3-minute speech for the Tanglin Public Speaking Competition with a 15-second hook and cyclical call-back?",
      "Can you use strategic pauses, vocal contrast, and Left–Centre–Right eye contact instead of reading a dense script?",
      "Can you answer tough Q&A questions calmly using PREP without inventing fake facts?",
      "Can you spot and repair every comma splice — especially traps involving 'however' and 'therefore'?",
      "Can you use semicolons, colons, dashes, plural possessives (students' vs children's), its/it's, and active voice with total accuracy?",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'In conclusion, there are pros and cons on both sides, so everyone can choose.'",
        right: "Write Instead ✅: Deliver a nuanced, qualified synthesis verdict ('On balance, X outweighs Y, provided safeguards protect…').",
      },
      {
        wrong: "Never Write ❌: 'Hello, my name is Maya and today I am going to talk to you about climate change.'",
        right: "Write Instead ✅: Pause calmly, meet the room’s eyes, and launch straight into a vivid 15-second story, paradox, or statistic hook.",
      },
      {
        wrong: "Never Write ❌: 'The scheme cuts congestion, however, it raises bus fares.' (Comma splice before 'however'!)",
        right: "Write Instead ✅: 'The scheme cuts congestion; however, it raises bus fares.' (Semicolon or full stop before 'however'.)",
      },
      {
        wrong: "Never Write ❌: 'The school updated it’s uniform policy after listening to the student’s opinions (plural).'",
        right: "Write Instead ✅: 'The school updated its uniform policy after listening to the students’ opinions.'",
      },
      {
        wrong: "Never Write ❌: 'Critics of homework are just lazy teenagers who want to play video games all night.' (Straw man)",
        right: "Write Instead ✅: Steel-man the best counter-point ('Admittedly, heavy nightly homework can erode sleep and family time…') before answering it.",
      },
      {
        wrong: "Never Write ❌: Writing 750 words for a 3-minute speech and racing through at 250 words per minute.",
        right: "Write Instead ✅: Trim to ~380–430 spoken words so every rhetorical pivot and dramatic pause has space to land.",
      },
    ],
    examMistakes: [
      "Turning a **discursive** essay prompt into an angry one-sided rant that ignores counter-arguments.",
      "Putting a **comma before `however` or `therefore`** between two complete sentences — creating a comma splice.",
      "Using a **colon** after an incomplete verb phrase like *'The three reasons are: …'* instead of after a complete clause.",
      "Writing **melodramatic Pathos** packed with exclamation marks and clichés, which undermines Ethos.",
      "Confusing **anaphora** (repeated *start* of consecutive clauses) with **antithesis** (balanced *contrast* of opposite ideas).",
      "Forgetting to weave in a **cyclical call-back** or rushing the final 20 seconds of a speech instead of pausing with poise.",
      "Overusing clunky **passive voice** (*'It is believed by many that action should be taken'*) instead of crisp active subjects.",
    ],
    mnemonics: [
      {
        topic: "Counter-Argument Paragraphs",
        device: "CAR",
        explanation: "**C**oncede (steel-man the rival view) → **A**nalyse/Pivot (*nevertheless, yet*) → **R**ebut or qualify with sharper weight.",
      },
      {
        topic: "Handling Live Q&A Questions",
        device: "PREP",
        explanation: "**P**oint (direct answer) → **R**eason (why) → **E**xample (one crisp concrete case) → **P**oint (calm wrap-up).",
      },
      {
        topic: "Coordinating Conjunctions Allowed After a Comma",
        device: "FANBOYS",
        explanation: "**F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o — only these seven can follow a comma between two full clauses (NOT *however* or *therefore*!).",
      },
    ],
    realWorld: [
      {
        title: "Tanglin Year 9 Public Speaking Competition",
        detail: "Mastering the 15-second hook, ~400-word spoken pace, cyclical call-back, strategic pauses, and calm Q&A prepares you directly to shine on stage.",
        emoji: "🏆",
      },
      {
        title: "Model United Nations & Debating",
        detail: "Steel-manning an opponent’s resolution before delivering a measured rebuttal earns far higher points from chairs than mocking a straw man.",
        emoji: "🌍",
      },
      {
        title: "Broadsheet Opinion Columns & TED Talks",
        detail: "The most shared talks in the world almost always pair a personal human moment (Pathos) with crisp data (Logos) and a final call-back to the opening minute.",
        emoji: "💡",
      },
      {
        title: "Clear Professional & Academic Writing",
        detail: "Eliminating comma splices, sloppy apostrophes, and evasive passive voice signals authority immediately in IGCSE, IB, university essays, and workplace briefs.",
        emoji: "✍️",
      },
    ],
    videos: [
      {
        title: "Discursive Essay Writing — Balanced Arguments & Counter-Arguments",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=discursive+essay+writing+balanced+argument+counter+argument+english",
      },
      {
        title: "Aristotle's Ethos, Pathos, Logos & Rhetorical Devices Explained",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=ethos+pathos+logos+anaphora+tricolon+antithesis+rhetoric+explained",
      },
      {
        title: "Public Speaking Tips — Hooks, Pauses, Vocal Variety & Q&A",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=public+speaking+hooks+strategic+pauses+eye+contact+school+competition",
      },
      {
        title: "How to Fix Comma Splices, Semicolons, Colons & Apostrophes",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=fix+comma+splice+semicolon+colon+dash+apostrophes+gcse+english+spag",
      },
    ],
    formulas: [
      {
        name: "CAR Rebuttal",
        formula: "Concede (Steel-Man) → Analyse / Pivot (Nevertheless) → Rebut",
        note: "Never mock a straw man; beat the opponent's strongest version.",
      },
      {
        name: "Ethos / Pathos / Logos",
        formula: "Credibility (Ethos) + Restrained Empathy (Pathos) + Proof (Logos)",
        note: "Calibrate all three so persuasion hits heart, head, and trust.",
      },
      {
        name: "Anaphora",
        formula: "Repeated opening words across consecutive clauses",
        note: "Builds rhythmic momentum and unity.",
      },
      {
        name: "Tricolon",
        formula: "Three parallel words, phrases, or clauses",
        note: "Satisfies the ear with crisp rhythm and completeness.",
      },
      {
        name: "Antithesis",
        formula: "Contrasting ideas in mirror-image parallel syntax",
        note: "Turns a complex choice into a quotable contrast.",
      },
      {
        name: "Hypophora",
        formula: "Targeted Question + Immediate Authoritative Answer",
        note: "Guides audience logic and pre-empts objections cleanly.",
      },
      {
        name: "3-Minute Speech Pace",
        formula: "~380–430 words ≈ 130–140 words/min + strategic pauses",
        note: "Leaves space for 2-second pauses, breathing, and eye contact.",
      },
      {
        name: "Comma Splice Fix",
        formula: "Clause 1 + ( . | ; | , FANBOYS ) + Clause 2",
        note: "Use a semicolon before 'however' or 'therefore' between full clauses.",
      },
      {
        name: "Semicolon vs Colon",
        formula: "Clause 1 ; Related Clause 2   |   Complete Clause : Explanation / Reveal",
        note: "Never place a bare colon right after 'are' or 'including'.",
      },
      {
        name: "Active vs Passive Voice",
        formula: "Active: Actor → Verb → Receiver  |  Passive: Receiver → be + past participle",
        note: "Test passive clauses by adding 'by zombies' after the verb.",
      },
    ],
  },
};
