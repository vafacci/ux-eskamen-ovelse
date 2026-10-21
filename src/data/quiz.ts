export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  example: string
  topicId: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Hvilket UX-princip understøtter brugen af genkendelige navigationsmønstre?',
    options: ["Hick's Law", "Jakob's Law", "Fitts's Law"],
    correctIndex: 1,
    explanation:
      "Jakob's Law siger, at brugere forventer, at produkter fungerer som dem, de allerede kender.",
    example: 'Bundnavigation og favoritikon i WashWorld.',
    topicId: 'jakobs-law',
  },
  {
    id: 'q2',
    question: "Hvad siger Hick's Law?",
    options: [
      'Store knapper er hurtigere at ramme',
      'Flere valg øger beslutningstiden',
      'Smukke ting opleves som lettere at bruge',
    ],
    correctIndex: 1,
    explanation: 'Beslutningstid stiger med antallet af muligheder.',
    example: 'Få filtre og en simpel navigation.',
    topicId: 'hicks-law',
  },
  {
    id: 'q3',
    question: 'Hvilken Nielsen-heuristik handler om feedback om, hvad der sker i systemet?',
    options: [
      'Error Prevention',
      'Visibility of System Status',
      'Aesthetic and Minimalist Design',
    ],
    correctIndex: 1,
    explanation: 'Heuristik #1: systemet skal informere brugeren via passende feedback.',
    example: 'Ledig / optaget / defekt på vaskehaller.',
    topicId: 'visibility-status',
  },
  {
    id: 'q4',
    question: 'Hvad står “P” for i CRAP?',
    options: ['Priority', 'Proximity', 'Pattern'],
    correctIndex: 1,
    explanation: 'Proximity = gruppering: ting der hører sammen, står sammen.',
    example: 'Navn, adresse og status grupperet på lokationssiden.',
    topicId: 'crap-proximity',
  },
  {
    id: 'q5',
    question: 'Hvilken fase i Double Diamond handler om at skærpe problemet ud fra research?',
    options: ['Discover', 'Define', 'Deliver'],
    correctIndex: 1,
    explanation: 'Define konvergerer: I udleder indsigter og formulerer kerneopgaven.',
    example: 'Kerneindsigt: uforudsigelig ventetid og kø.',
    topicId: 'double-diamond',
  },
  {
    id: 'q6',
    question: 'Hvad viser et User Flow primært?',
    options: [
      'Brugerens følelser over tid',
      'Den digitale vej med handlinger og valg',
      'Backstage-processer i servicen',
    ],
    correctIndex: 1,
    explanation: 'User Flow viser hvad brugeren gør, hvilke valg der findes, og systemrespons.',
    example: 'Kort → vælg lokation → se status.',
    topicId: 'journey-vs-flow',
  },
  {
    id: 'q7',
    question: 'Hvilken research er kvantitativ i jeres projekt?',
    options: [
      'Google Forms med 41 respondenter',
      'Brugerinterviews',
      'Empathy Map',
    ],
    correctIndex: 0,
    explanation: 'Spørgeskema med mange respondenter giver tendenser – kvantitativt.',
    example: 'Klager over kø og ventetid blandt 25–34-årige.',
    topicId: 'kval-kvant',
  },
  {
    id: 'q8',
    question: 'Trustpilot-research er et eksempel på…',
    options: ['Primær research', 'Sekundær research', 'A/B-test'],
    correctIndex: 1,
    explanation: 'Sekundær data er allerede indsamlet – her kundeanmeldelser.',
    example: 'Usikkerhed på driftsstatus og svært at planlægge vask.',
    topicId: 'primaer-sekundaer',
  },
  {
    id: 'q9',
    question: 'Hvad er korrekt om jeres brugertest?',
    options: [
      '5 testpersoner, 3 scenarier',
      '3 testpersoner, 5 scenarier',
      '10 testpersoner uden scenarier',
    ],
    correctIndex: 1,
    explanation: 'Dokumenteret: tre testpersoner gennemførte fem scenarier.',
    example: 'Udfordringer med anmeldelse og favoritter.',
    topicId: 'taenke-hoejt',
  },
  {
    id: 'q10',
    question:
      'En bruger skal hurtigt se, om en vaskehal er i drift. Hvilket princip er mest centralt?',
    options: ["Hick's Law", 'Visibility of System Status', 'Repetition'],
    correctIndex: 1,
    explanation: 'Statusfeedback gør systemet synligt og forudsigeligt.',
    example: 'Driftsstatus på lokationssiden.',
    topicId: 'visibility-status',
  },
  {
    id: 'q11',
    question: 'Hvem er Kasper i jeres personas?',
    options: [
      'Impulsvaskeren der vil have tryghed',
      'Den travle abonnent der vil undgå spildtid',
      'En medarbejder i vaskehallen',
    ],
    correctIndex: 1,
    explanation: 'Kasper = den travle abonnent. Behov: effektivitet og undgå spildtid.',
    example: 'Favoritter og hurtig status understøtter ham.',
    topicId: 'personas',
  },
  {
    id: 'q12',
    question: 'Hvad bør I undgå i en tænke-højt-test?',
    options: [
      'Konkrete, realistiske opgaver',
      'At spørge “hvad synes du om det?”',
      'At lade testpersonen tænke højt',
    ],
    correctIndex: 1,
    explanation: 'I undersøger adfærd, ikke holdninger. Undgå menings-spørgsmål og hjælp.',
    example: 'Giv en task: “Find en ledig vaskehal nær dig.”',
    topicId: 'taenke-hoejt',
  },

  // --- Nye spørgsmål: metoder + jeres WashWorld-opgave ---
  {
    id: 'q13',
    question: 'Hvad er den korrekte struktur for en User Story?',
    options: [
      'Som [persona] vil jeg [handling], så jeg kan [fordel]',
      'Brugeren skal [feature], fordi [teknologi]',
      'Vi designer [UI], så det ser [pænt] ud',
    ],
    correctIndex: 0,
    explanation:
      'User Stories beskriver brugerens mål – hvad og hvorfor – ikke den præcise UI-løsning.',
    example:
      'Som Kasper vil jeg se status før afgang, så jeg ikke kører forgæves.',
    topicId: 'user-stories',
  },
  {
    id: 'q14',
    question: 'Hvilket behov omsatte I til User Stories i Define?',
    options: [
      'Se ventetid/status før afgang, administrere abonnement og rapportere fejl hurtigt',
      'Kun gamification og partnerprogrammer',
      'Kun farvevalg i designguiden',
    ],
    correctIndex: 0,
    explanation:
      'Ifølge jeres Define-slide: status/ventetid før afgang, nem abonnement-administration og hurtig fejlrapportering.',
    example: 'Det kobler direkte til kerneindsigten om uforudsigelig ventetid.',
    topicId: 'user-stories',
  },
  {
    id: 'q15',
    question: 'Hvad er formålet med en Empathy Map?',
    options: [
      'At tegne den præcise knap-layout i Figma',
      'At samle hvad brugeren siger, tænker, gør og føler',
      'At måle load-tid i prototypen',
    ],
    correctIndex: 1,
    explanation:
      'Empathy Map skaber empati og synliggør behov ud fra research – før I designer.',
    example:
      'Jeres map viste frustration over uforudset ventetid og usikkerhed om status/vilkår.',
    topicId: 'empathy-map',
  },
  {
    id: 'q16',
    question: 'Hvad viste jeres Empathy Map især?',
    options: [
      'At brugerne elsker lange køer',
      'Frustration over uforudset ventetid og usikkerhed om status/vilkår',
      'At ingen vil have en app',
    ],
    correctIndex: 1,
    explanation:
      'Define-sliden: empathy map pegede på ventetidsfrustration og usikkerhed om driftsstatus.',
    example: 'Det understøttede kerneindsigten og status-features i appen.',
    topicId: 'empathy-map',
  },
  {
    id: 'q17',
    question: 'Hvad viser et User Journey Map især?',
    options: [
      'Kun database-skemaet bag appen',
      'Brugerens oplevelse over tid – touchpoints, følelser og pain points',
      'Kun pixel-afstande mellem knapper',
    ],
    correctIndex: 1,
    explanation:
      'Journey Map handler om hele oplevelsen over tid – ikke kun den digitale klik-sti.',
    example: 'Fra “jeg skal vaske bil” til ankomst – inkl. frustration over kø.',
    topicId: 'journey-vs-flow',
  },
  {
    id: 'q18',
    question: 'Hvad er den vigtigste forskel på Journey Map og User Flow?',
    options: [
      'Journey = oplevelse/følelser over tid; Flow = digital vej med handlinger og valg',
      'De er det samme og bruges synonymt',
      'Flow er kun til print; Journey er kun til kode',
    ],
    correctIndex: 0,
    explanation:
      'I brugte journey til pain points og flow til appens konkrete skridt i Develop.',
    example: 'Flow: hjem/kort → lokation → se status → favorit/kør.',
    topicId: 'journey-vs-flow',
  },
  {
    id: 'q19',
    question: 'Hvem er Mona i jeres personas?',
    options: [
      'Den travle abonnent der vil undgå spildtid',
      'Impulsvaskeren med behov for tryghed, gennemskuelighed og skånsom vask',
      'WashWorlds CEO',
    ],
    correctIndex: 1,
    explanation:
      'Mona = impulsvaskeren. Behov: tryghed, gennemskuelighed og skånsom vask.',
    example: 'Klar driftsstatus og gennemskuelig info understøtter hende.',
    topicId: 'personas',
  },
  {
    id: 'q20',
    question: 'Hvad er personas baseret på?',
    options: [
      'Kun teamets antagelser uden data',
      'Research (fx Forms, interviews, Trustpilot)',
      'Kun konkurrenternes logoer',
    ],
    correctIndex: 1,
    explanation:
      'Personas skal være research-baserede – ikke opfundne “idealbrugere”.',
    example: 'Kasper og Mona er bygget på jeres Discover-indsigter.',
    topicId: 'personas',
  },
  {
    id: 'q21',
    question: 'Hvilke pains fandt I i Define?',
    options: [
      'Kø i peak, risiko for at køre forgæves, manglende overblik over ventetid',
      'For få farver i designguiden',
      'At Figma er for dyrt',
    ],
    correctIndex: 0,
    explanation:
      'Pains & Gains på Define-sliden: kø, fejlkørsler til lukket/defekt hal, manglende ventetidsoverblik.',
    example: 'Derfor prioriterede I status og planlægning i appen.',
    topicId: 'pains-gains',
  },
  {
    id: 'q22',
    question: 'Hvilke gains fremhævede I?',
    options: [
      'Længere køer og flere valg i navigationen',
      'Nem betaling (kort/abonnement) og nummerpladescanning',
      'Kun papirbreve fra vaskehallen',
    ],
    correctIndex: 1,
    explanation:
      'Gains i jeres materiale: nem betaling med kort eller abonnement + nummerpladescanning.',
    example: 'Matcher også WashWorlds koncept (license plate recognition).',
    topicId: 'pains-gains',
  },
  {
    id: 'q23',
    question: 'Hvad er jeres kerneindsigt?',
    options: [
      'Brugere vil primært have flere reklamer',
      'Uforudsigelig ventetid og kø er det største smertepunkt',
      'Ingen bruger Trustpilot',
    ],
    correctIndex: 1,
    explanation:
      'Define: “Uforudsigelig ventetid og kø er brugernes største smertepunkt.”',
    example: 'Det styrede prioritering af status, ledighed og planlægning.',
    topicId: 'pains-gains',
  },
  {
    id: 'q24',
    question: 'Hvad er jeres problemstilling?',
    options: [
      'Kunder har svært ved at planlægge deres bilvask',
      'WashWorld mangler en designguide',
      'Der er for få vaskehaller i Norge',
    ],
    correctIndex: 0,
    explanation:
      'Discover/Define: “Kunder har svært ved at planlægge deres bilvask.”',
    example:
      'Løsning: en app der samler vigtig information og gør planlægning nemmere.',
    topicId: 'double-diamond',
  },
  {
    id: 'q25',
    question: 'Hvad hører til Discover-fasen i WashWorld-opgaven?',
    options: [
      'Kun high-fidelity i Figma',
      'Bred research: brief, Forms, Trustpilot, interviews, observation',
      'Kun at kode appen færdig',
    ],
    correctIndex: 1,
    explanation:
      'Opgaven: Discover = undersøg behov/problemer/muligheder (brief, research, besøg vaskehal).',
    example: 'I havde brainstorm, SATS/Circle K, 41 Forms-svar, Trustpilot og interviews.',
    topicId: 'double-diamond',
  },
  {
    id: 'q26',
    question: 'Hvad skal Develop-fasen indeholde ifølge eksamensopgaven?',
    options: [
      'Kun votering til eksamen',
      'Koncept: brainstorm, user journeys, sketching, flowcharts, wireframes',
      'Kun App Store-marketing',
    ],
    correctIndex: 1,
    explanation:
      'WashWorld_UX-opgave: Develop = udarbejd koncept med journeys, flows, wireframes m.m.',
    example: 'Jeres Develop-slide: userflow, journey map, UX/CRAP, wireframes.',
    topicId: 'double-diamond',
  },
  {
    id: 'q27',
    question: 'Hvad er målet med Deliver-fasen i opgaven?',
    options: [
      'En Figma-prototype egnet til test og senere kode',
      'Kun en PowerPoint uden prototype',
      'Kun at læse client brief igen',
    ],
    correctIndex: 0,
    explanation:
      'Deliver: prototype i Figma til test – og som udgangspunkt for en kodet version.',
    example: 'I: high-fidelity, brugertest og videreudvikling.',
    topicId: 'double-diamond',
  },
  {
    id: 'q28',
    question: 'Hvorfor struktureres WashWorld-casen efter Double Diamond?',
    options: [
      'For at løse det rigtige problem på den rigtige måde',
      'Fordi det er et krav at bruge Photoshop',
      'For at undgå al research',
    ],
    correctIndex: 0,
    explanation:
      'Opgaven siger eksplicit, at Double Diamond skal sikre, at I løser det rigtige problem rigtigt.',
    example: 'Discover → Define → Develop → Deliver med divergens/konvergens.',
    topicId: 'double-diamond',
  },
  {
    id: 'q29',
    question: 'Hvad fandt I på Trustpilot?',
    options: [
      'Kun ros for korte køer',
      'Usikkerhed på driftsstatus og svært at planlægge vask',
      'At appen allerede var færdig',
    ],
    correctIndex: 1,
    explanation:
      'Discover-slide: Trustpilot → usikkerhed på driftsstatus + svært at planlægge.',
    example: 'Understøtter Visibility of System Status i designet.',
    topicId: 'primaer-sekundaer',
  },
  {
    id: 'q30',
    question: 'Hvilken aldersgruppe fyldte især i jeres Google Forms?',
    options: ['55–70 år', '25–34 år', 'Under 18 år'],
    correctIndex: 1,
    explanation: 'Forms: 41 respondenter, typisk 25–34 år.',
    example: 'De ønskede god vaskekvalitet og klagede over kø/ventetid.',
    topicId: 'kval-kvant',
  },
  {
    id: 'q31',
    question: 'Hvilke apps inspirerede I jer af i Discover?',
    options: ['SATS og Circle K', 'Kun Excel og Word', 'Kun Instagram Reels'],
    correctIndex: 0,
    explanation:
      'Inspiration fra SATS & Circle K – genkendelige mønstre til lokation/kort/medlemskab.',
    example: 'Understøtter Jakob’s Law i Develop.',
    topicId: 'jakobs-law',
  },
  {
    id: 'q32',
    question: 'Hvad er forskellen på low-fi og high-fi wireframes/prototyper?',
    options: [
      'Low-fi = struktur/skitse; high-fi = detaljeret UI tæt på det endelige',
      'Low-fi er altid kodet; high-fi er kun papir',
      'Der er ingen forskel',
    ],
    correctIndex: 0,
    explanation:
      'Low-fi er hurtigt at ændre struktur. High-fi egner sig til brugertest og videre kode.',
    example: 'I gik fra wireframes i Develop til high-fidelity i Figma i Deliver.',
    topicId: 'wireframes',
  },
  {
    id: 'q33',
    question: 'Hvad viste brugertesten fungerede godt?',
    options: [
      'At finde vaskehaller, undersøge drift og finde ledige lokationer',
      'At alle forstod anmeldelse og favoritter med det samme',
      'At ingen kunne åbne appen',
    ],
    correctIndex: 0,
    explanation:
      'Kerneflows virkede: finde haller, drift og ledige lokationer.',
    example: 'Problemer sad især på anmeldelse og favoritter.',
    topicId: 'taenke-hoejt',
  },
  {
    id: 'q34',
    question: 'Hvad vil I videreudvikle efter brugertesten?',
    options: [
      'Tydeligere anmeldelse og notifikationer efter bilvask',
      'Fjerne al statusinformation',
      'Gøre navigationen mere kompleks',
    ],
    correctIndex: 0,
    explanation:
      'Testen viste uklar anmeldelse/favoritter → tydeligere anmeldelse + notifikationer (fx “Hvordan gik din vask?”).',
    example: 'Iteration: test → lær → forbedr.',
    topicId: 'prototype-videre',
  },
  {
    id: 'q35',
    question: 'Hvad står “C” for i CRAP?',
    options: ['Contrast', 'Content', 'Conversion'],
    correctIndex: 0,
    explanation:
      'Contrast: vigtige elementer skal skille sig visuelt ud (farve, størrelse, vægt).',
    example: 'WashWorld-grøn på primære knapper og tydelige statusfarver.',
    topicId: 'crap-contrast',
  },
  {
    id: 'q36',
    question: 'Hvad betyder Repetition i CRAP?',
    options: [
      'At genbruge samme visuelle/interaktive mønstre for konsistens',
      'At gentage den samme fejlbesked',
      'At bruge så mange forskellige knapstile som muligt',
    ],
    correctIndex: 0,
    explanation: 'Gentagelse skaber genkendelighed på tværs af skærme.',
    example: 'Samme kortlayout, statusfarver og knapstil på hjem, kort og detaljer.',
    topicId: 'crap-repetition',
  },
  {
    id: 'q37',
    question: 'Hvad handler Alignment om i CRAP?',
    options: [
      'At placere elementer efter et fælles grid, så layoutet er ordnet',
      'At alle knapper skal være usynlige',
      'At teksten altid skal være centreret uden system',
    ],
    correctIndex: 0,
    explanation: 'Justering gør indhold lettere at scanne.',
    example: 'Lokationskort og lister følger et konsekvent grid.',
    topicId: 'crap-alignment',
  },
  {
    id: 'q38',
    question: "Hvad siger Fitts's Law?",
    options: [
      'Tid til at ramme et mål afhænger af afstand og målets størrelse',
      'Flere valg øger altid tilfredsheden',
      'Brugere glemmer alle andre apps',
    ],
    correctIndex: 0,
    explanation: 'Store, nære touch-targets er hurtigere at ramme – især på mobil.',
    example: 'Primære handlinger som store knapper på kort/lokation.',
    topicId: 'fitts-law',
  },
  {
    id: 'q39',
    question: 'Hvad er Error Prevention (Nielsen #5)?',
    options: [
      'At forhindre fejl frem for kun at vise fejlbeskeder bagefter',
      'At skjule alle fejl for brugeren uden at rette dem',
      'At tilføje flere valgmuligheder i checkout',
    ],
    correctIndex: 0,
    explanation: 'Bedre at undgå fejl end kun at forklare dem bagefter.',
    example: 'Vis defekt/lukket status før afgang, så man ikke kører forgæves.',
    topicId: 'error-prevention',
  },
  {
    id: 'q40',
    question: 'Hvilket princip understøtter favoritter bedst?',
    options: [
      'Flexibility and Efficiency of Use (genveje til erfarne brugere)',
      'Kun Contrast uden anden mening',
      'At fjerne al genbrug af mønstre',
    ],
    correctIndex: 0,
    explanation:
      'Nielsen #7: genveje til eksperter uden at forvirre nybegyndere.',
    example: 'Kasper slipper for at søge de samme haller hver gang.',
    topicId: 'flexibility-efficiency',
  },
  {
    id: 'q41',
    question: 'Hvad betyder Aesthetic and Minimalist Design?',
    options: [
      'Vis kun det nødvendige – unødvendigt indhold konkurrerer om opmærksomhed',
      'Fyld skærmen med så mange features som muligt',
      'Brug altid lilla gradienter',
    ],
    correctIndex: 0,
    explanation: 'Nielsen #8 / less is more: fokusér på kerneopgaven.',
    example: 'Hjem og kort fokuserer på lokation, status og handling.',
    topicId: 'aesthetic-minimalist',
  },
  {
    id: 'q42',
    question: 'Hvad ønskede kunder ifølge WashWorlds interne survey (client brief) bl.a.?',
    options: [
      'At planlægge vask, finde nærmeste lokation og se ventetid/driftsstatus',
      'Kun at spille spil i appen',
      'At fjerne al information om haller',
    ],
    correctIndex: 0,
    explanation:
      'Client brief: plan the wash – nearest location, wait times, operational status m.m.',
    example: 'Matcher jeres features: kort, status og planlægning.',
    topicId: 'visibility-status',
  },
  {
    id: 'q43',
    question: 'Hvad skal I aflevere til UX-eksamen ifølge opgaven?',
    options: [
      'Figma-prototype-link + procesbeskrivelse (max ca. 10 normalsider)',
      'Kun en mundtlig idé uden materiale',
      'Kun en papirplakat',
    ],
    correctIndex: 0,
    explanation:
      'Aflævering: digital prototype (Figma) + procesbeskrivelse (rapport/FigJam, max 10 normalsider).',
    example: 'Mundtligt: 5 min gruppe + 10 min pr. medlem.',
    topicId: 'prototype-videre',
  },
  {
    id: 'q44',
    question: 'Hvad er jeres løsning i Deliver?',
    options: [
      'En brugervenlig app, der samler vigtig information og gør planlægning nemmere',
      'En app kun til medarbejdere i hallen',
      'At fjerne alle vaskehaller fra kortet',
    ],
    correctIndex: 0,
    explanation:
      'Deliver-slide: løsningen er en app der samler info og letter planlægning.',
    example: 'Hjem, kort, status, favoritter, profil og lokationsdetaljer.',
    topicId: 'prototype-videre',
  },
  {
    id: 'q45',
    question: 'Hvad er kvalitativ research godt til?',
    options: [
      'At forstå hvorfor/hvordan via dybde hos færre personer',
      'Kun at tælle eksakte procenter for hele Danmark',
      'At erstatte al brugertest',
    ],
    correctIndex: 0,
    explanation:
      'Kvalitativt = dybde og adfærd/holdninger. Kvantitativt = tendenser blandt mange.',
    example: 'Interviews gav ønske om en simpel, letforståelig app.',
    topicId: 'kval-kvant',
  },
  {
    id: 'q46',
    question: 'Hvad er et eksempel på primær research i jeres projekt?',
    options: [
      'Google Forms og egne interviews',
      'Kun Trustpilot uden egen indsamling',
      'Kun at læse Wikipedia',
    ],
    correctIndex: 0,
    explanation: 'Primær = data I selv indsamler.',
    example: 'Forms, interviews og observationer vs. sekundær Trustpilot/SATS.',
    topicId: 'primaer-sekundaer',
  },
]
