/** Dokumentation baseret på Presentation 1.pdf, WashWorld_UX-opgave.pdf
 *  og undervisningsmateriale (ux-research, ui-design, usability-testmetoder, UX_web).
 */

export const project = {
  name: 'WashWorld',
  group: 'Gruppe 5',
  members: ['Dayan Vafai', 'Persian Moradi', 'Ali Mahfudh', 'Frederik Madsen'],
  course: 'Web Udvikling – UX.1 Eksamen · 1. semester',
  exam: {
    groupPresentation: '5 min',
    individualExam: '10 min pr. gruppemedlem',
    voting: '5 min',
    note: 'Individuel karakter (første delkarakter – lægges sammen med 2. sem.)',
  },
  delivery: [
    'Digital prototype: Link til Figma',
    'Procesbeskrivelse: Rapport (pdf) eller FigJam (max 10 normalsider)',
  ],
  problem:
    'Hvordan kan vi forbedre den digitale brugeroplevelse for WashWorlds kunder og gøre det nemmere at planlægge deres bilvask?',
  problemShort: 'Kunder har svært ved at planlægge deres bilvask',
  coreInsight:
    'Uforudsigelig ventetid og kø er brugernes største smertepunkt.',
  solution:
    'En brugervenlig app, der samler vigtig information og gør planlægning nemmere.',
  figma:
    'https://www.figma.com/design/NjMeN1OGKB7mETLAcYuZXw/UX-Eksamen---Gruppe-5',
  doubleDiamond: {
    discover:
      'Undersøg en bred vifte af behov, problemer og muligheder (læs brief, lav research, besøg en vaskehal).',
    define:
      'Hvilke indsigter kan I udlede af jeres research? Hvad bliver kerneopgaven for den nye app?',
    develop:
      'Udarbejd et koncept: brainstorm, user journeys, sketching, flowcharts, wireframes etc.',
    deliver:
      'Udarbejd en prototype i Figma, der egner sig til test, og som kan fungere som udgangspunkt for en kodet version.',
  },
  slides: [
    {
      id: 1,
      title: 'Intro',
      phase: 'Intro',
      focus: 'Projekt, gruppe og eksamensramme',
    },
    {
      id: 2,
      title: 'Discover',
      phase: 'Discover',
      focus: 'Research: brainstorm, inspiration, Google Forms, Trustpilot, interviews',
    },
    {
      id: 3,
      title: 'Define',
      phase: 'Define',
      focus: 'User Stories, Personas, Empathy Map, Pains & Gains',
    },
    {
      id: 4,
      title: 'Develop',
      phase: 'Develop',
      focus: 'User flow, Journey Map, UX-principper, CRAP, wireframes',
    },
    {
      id: 5,
      title: 'Deliver',
      phase: 'Deliver',
      focus: 'Figma, high-fidelity, prototype, brugertest, videreudvikling',
    },
  ],
  research: {
    googleForms: {
      respondents: 41,
      age: '25–34 år',
      findings: [
        'Ønsker god vaskekvalitet',
        'Klager over kø og ventetid',
        'Bred information fra brugerne',
      ],
    },
    trustpilot: [
      'Usikkerhed på driftsstatus',
      'Svært at planlægge deres vask',
    ],
    interviews: [
      'Dybere forståelse for brugernes behov',
      'Ønske om en simpel og letforståelig app',
    ],
    inspiration: ['SATS', 'Circle K'],
    observations: true,
  },
  personas: [
    {
      name: 'Kasper',
      label: 'Den travle abonnent',
      needs: ['Effektivitet', 'Undgå spildtid'],
    },
    {
      name: 'Mona',
      label: 'Impulsvaskeren',
      needs: ['Tryghed', 'Gennemskuelighed', 'Skånsom vask'],
    },
  ],
  pains: [
    'Kø i peak-tiden',
    'Risiko for at køre forgæves til lukket hal eller driftsstop',
    'Manglende overblik over ventetid',
  ],
  gains: [
    'Nem betaling med kort eller abonnement',
    'Nummerpladescanning',
  ],
  appFeatures: [
    'Hjem med relevante vaskehaller',
    'Kort med søgning og filtrering',
    'Status over ledige, optagede og defekte vaskehaller',
    'Favoritter til tilbagevendende kunder',
    'Profil, medlemskab, historik og support',
    'Lokationsdetaljer med information om den enkelte vaskehal',
  ],
  userTest: {
    participants: 3,
    scenarios: 5,
    worked: [
      'Kunne generelt finde vaskehaller',
      'Kunne undersøge drift',
      'Kunne finde ledige lokationer',
    ],
    issues: [
      'Udfordringer med at finde anmeldelsesfunktionen',
      'Usikkerhed om favoritfunktionen',
    ],
    nextSteps: [
      'Tydeligere anmeldelsesmuligheder',
      'Notifikationer efter bilvask',
    ],
  },
} as const
