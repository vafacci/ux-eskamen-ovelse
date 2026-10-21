export interface OralQuestion {
  id: string
  question: string
  difficulty: 1 | 2 | 3
  modelAnswer: string
  keyTerms: string[]
  projectExample: string
  slideHint?: string
}

export const oralQuestions: OralQuestion[] = [
  {
    id: 'o1',
    question: 'Hvorfor brugte I Double Diamond?',
    difficulty: 1,
    modelAnswer:
      'Vi brugte Double Diamond for at sikre, at vi løste det rigtige problem. Først udforskede vi bredt i Discover, skærpede problemet i Define, udviklede konceptet i Develop og leverede en testbar prototype i Deliver.',
    keyTerms: ['Discover', 'Define', 'Develop', 'Deliver', 'divergens/konvergens'],
    projectExample:
      'Discover med Forms/Trustpilot/interviews → Define med personas og kerneindsigt om ventetid → Develop med flows/CRAP/wireframes → Deliver med Figma og brugertest.',
    slideHint: 'Slide 2–5 følger de fire faser',
  },
  {
    id: 'o2',
    question: 'Hvad er forskellen på User Journey Map og User Flow?',
    difficulty: 2,
    modelAnswer:
      'Et Journey Map viser brugerens oplevelse over tid – touchpoints, følelser og pain points. Et User Flow viser den konkrete digitale vej: handlinger, valg og systemrespons frem til et mål.',
    keyTerms: ['oplevelse over tid', 'pain points', 'handlinger', 'valg', 'systemrespons'],
    projectExample:
      'Journey: frustration over kø før ankomst. Flow: åbn app → kort/filtre → lokation → se status.',
    slideHint: 'Develop-sliden nævner begge',
  },
  {
    id: 'o3',
    question: "Hvordan har I anvendt Hick's Law?",
    difficulty: 2,
    modelAnswer:
      "Hick's Law siger, at flere valg øger beslutningstiden. Vi holdt navigationen simpel og filtrene overskuelige, så brugeren hurtigt kan beslutte, hvilken vaskehal der passer – især vigtigt for travle brugere som Kasper.",
    keyTerms: ["Hick's Law", 'beslutningstid', 'færre valg', 'navigation', 'filtre'],
    projectExample: 'Få hovedfaner og fokuserede filtre på kortet.',
    slideHint: 'Develop – UX-principperne',
  },
  {
    id: 'o4',
    question: 'Hvilke problemer identificerede I gennem brugertesten?',
    difficulty: 1,
    modelAnswer:
      'Tre testpersoner gennemførte fem scenarier. De kunne generelt finde vaskehaller, undersøge drift og finde ledige lokationer. Men nogle havde svært ved at finde anmeldelsesfunktionen og forstå favoritfunktionen.',
    keyTerms: ['3 testpersoner', '5 scenarier', 'anmeldelse', 'favoritter', 'tænke-højt'],
    projectExample: 'Kerneflows virkede; anmeldelse og favoritter skal tydeliggøres.',
    slideHint: 'Deliver – Brugertest',
  },
  {
    id: 'o5',
    question: 'Hvad ville I videreudvikle, og hvorfor?',
    difficulty: 2,
    modelAnswer:
      'Ud fra testen vil vi gøre anmeldelsesmuligheder tydeligere og tilføje notifikationer efter bilvask – fx “Hvordan gik din vask?” – så feedback bliver en naturlig del af flowet.',
    keyTerms: ['videreudvikling', 'anmeldelse', 'notifikationer', 'iteration'],
    projectExample: 'Push efter vask + klar anmeldelses-UI.',
    slideHint: 'Deliver – Videreudvikling',
  },
  {
    id: 'o6',
    question: 'Hvordan understøtter jeres design brugernes behov?',
    difficulty: 2,
    modelAnswer:
      'Research viste, at ventetid og driftsusikkerhed er de største smerter. Appen samler status, kort, favoritter og lokationsdetaljer, så brugerne kan planlægge før de kører – i stedet for at køre forgæves.',
    keyTerms: ['kerneindsigt', 'planlægning', 'status', 'persona-behov'],
    projectExample: 'Kasper får effektivitet via status/favoritter; Mona får tryghed via klar driftsinfo.',
    slideHint: 'Define + Deliver',
  },
  {
    id: 'o7',
    question: 'Fortæl om jeres research – hvad fandt I?',
    difficulty: 1,
    modelAnswer:
      'Vi kombinerede kvantitativt Forms med 41 svar, Trustpilot, interviews og inspiration fra SATS og Circle K. Brugerne klagede over kø og ventetid, var usikre på driftsstatus og ønskede en simpel app.',
    keyTerms: ['41 respondenter', 'Trustpilot', 'interviews', 'primær/sekundær'],
    projectExample: 'Problem: svært at planlægge bilvask.',
    slideHint: 'Discover-sliden',
  },
  {
    id: 'o8',
    question: 'Hvem er jeres personas, og hvorfor er de relevante?',
    difficulty: 1,
    modelAnswer:
      'Kasper er den travle abonnent med behov for effektivitet. Mona er impulsvaskeren med behov for tryghed og gennemskuelighed. De hjælper os med at designe til konkrete behov baseret på research.',
    keyTerms: ['Kasper', 'Mona', 'behov', 'research-baseret'],
    projectExample: 'Status og favoritter til Kasper; klar information til Mona.',
    slideHint: 'Define-sliden',
  },
  {
    id: 'o9',
    question: "Hvordan har I brugt Jakob's Law?",
    difficulty: 2,
    modelAnswer:
      "Jakob's Law betyder, at brugere forventer velkendte mønstre. Derfor brugte vi bundnavigation, kort og et genkendeligt favoritikon – inspireret af apps som SATS – så appen er let at forstå med det samme.",
    keyTerms: ["Jakob's Law", 'genkendelige mønstre', 'bundnavigation'],
    projectExample: 'Kort + favorit + bottom nav.',
    slideHint: 'Develop – UX-principper',
  },
  {
    id: 'o10',
    question: 'Hvordan har I anvendt CRAP-principperne?',
    difficulty: 3,
    modelAnswer:
      'Contrast gør status og CTA’er synlige. Repetition genbruger kort- og knapmønstre. Alignment følger et grid. Proximity grupperer lokationsinfo og status, så det vigtigste læses som én enhed.',
    keyTerms: ['Contrast', 'Repetition', 'Alignment', 'Proximity'],
    projectExample: 'Statusfarver, ens kortlayouts, grupperet lokationsdetalje.',
    slideHint: 'Develop – CRAP',
  },
  {
    id: 'o11',
    question: 'Hvad er Visibility of System Status i jeres app?',
    difficulty: 2,
    modelAnswer:
      'Det er Nielsens første heuristik: systemet skal fortælle, hvad der sker. Vi viser om en vaskehal er ledig, optaget eller defekt, fordi Trustpilot og research viste usikkerhed om driftsstatus.',
    keyTerms: ['Nielsen #1', 'feedback', 'driftsstatus', 'ledig/optaget/defekt'],
    projectExample: 'Status på hjem, kort og lokationsside.',
    slideHint: 'Kobles til research + Develop',
  },
  {
    id: 'o12',
    question: 'Hvad er jeres kerneindsigt, og hvordan påvirkede den designet?',
    difficulty: 2,
    modelAnswer:
      'Kerneindsigten er, at uforudsigelig ventetid og kø er det største smertepunkt. Derfor prioriterede vi status, overblik og planlægning før afgang i hele appen.',
    keyTerms: ['kerneindsigt', 'ventetid', 'kø', 'prioritering'],
    projectExample: 'Features centreret om ledighed og driftsinfo.',
    slideHint: 'Define-sliden',
  },
]

/** 10-minutters simulation: blandet sværhedsgrad */
export const examSimulationIds = [
  'o7',
  'o8',
  'o1',
  'o3',
  'o2',
  'o11',
  'o4',
  'o6',
  'o5',
  'o10',
]
