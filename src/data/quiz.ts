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
]
