export interface Flashcard {
  id: string
  front: string
  back: string
  example: string
  topicId: string
}

export const flashcards: Flashcard[] = [
  {
    id: 'fc-hicks',
    front: "Hvad er Hick's Law?",
    back: 'Tiden det tager at træffe en beslutning stiger i takt med antallet af muligheder.',
    example: 'Få faner i bundnavigationen og enkle filtre på kortet i WashWorld.',
    topicId: 'hicks-law',
  },
  {
    id: 'fc-jakob',
    front: "Hvad er Jakob's Law?",
    back: 'Brugere forventer, at jeres produkt fungerer som dem, de allerede kender.',
    example: 'Bundnavigation, kort og favoritikon – genkendelige mønstre.',
    topicId: 'jakobs-law',
  },
  {
    id: 'fc-visibility',
    front: 'Hvad er Visibility of System Status?',
    back: 'Systemet skal give feedback om, hvad der sker – inden for rimelig tid (Nielsen #1).',
    example: 'Ledig / optaget / defekt-status på vaskehaller.',
    topicId: 'visibility-status',
  },
  {
    id: 'fc-crap',
    front: 'Hvad står CRAP for?',
    back: 'Contrast, Repetition, Alignment, Proximity.',
    example: 'Kontrast på statusfarver, gentagne kortlayouts, grid-justering, grupperet lokationsinfo.',
    topicId: 'crap-contrast',
  },
  {
    id: 'fc-dd',
    front: 'Hvad er Double Diamond?',
    back: 'Designproces: Discover → Define → Develop → Deliver (divergens/konvergens).',
    example: 'Research → kerneindsigt om ventetid → flows/wireframes → Figma + brugertest.',
    topicId: 'double-diamond',
  },
  {
    id: 'fc-journey-flow',
    front: 'Forskel på User Journey Map og User Flow?',
    back: 'Journey Map = oplevelse over tid (følelser, pain points). User Flow = digital vej til et mål (handlinger/valg).',
    example: 'Journey: frustration over kø. Flow: Kort → lokation → se status.',
    topicId: 'journey-vs-flow',
  },
  {
    id: 'fc-personas',
    front: 'Hvad er personas – og hvem er jeres?',
    back: 'Fiktive brugere baseret på research. Kasper (travl abonnent) og Mona (impulsvasker).',
    example: 'Kasper: effektivitet. Mona: tryghed og gennemskuelighed.',
    topicId: 'personas',
  },
  {
    id: 'fc-kval',
    front: 'Kvalitativ vs. kvantitativ research?',
    back: 'Kvantitativ: mange svar, tendenser. Kvalitativ: få personer, dybde og adfærd.',
    example: '41 Forms-svar vs. interviews om driftsusikkerhed.',
    topicId: 'kval-kvant',
  },
  {
    id: 'fc-primaer',
    front: 'Primær vs. sekundær research?',
    back: 'Primær = data I selv samler. Sekundær = eksisterende data.',
    example: 'Primær: Forms/interviews. Sekundær: Trustpilot, SATS/Circle K.',
    topicId: 'primaer-sekundaer',
  },
  {
    id: 'fc-test',
    front: 'Hvad er en tænke-højt-test?',
    back: 'Brugeren løser konkrete opgaver og tænker højt. I observerer adfærd – ikke holdninger.',
    example: '3 testpersoner, 5 scenarier – anmeldelse og favoritter var uklare.',
    topicId: 'taenke-hoejt',
  },
  {
    id: 'fc-kerne',
    front: 'Hvad er jeres kerneindsigt?',
    back: 'Uforudsigelig ventetid og kø er brugernes største smertepunkt.',
    example: 'Derfor status, ledighed og planlægning i appen.',
    topicId: 'pains-gains',
  },
  {
    id: 'fc-problem',
    front: 'Hvad er jeres problemstilling?',
    back: 'Kunder har svært ved at planlægge deres bilvask.',
    example: 'Løsning: app der samler info og gør planlægning nemmere.',
    topicId: 'double-diamond',
  },
  {
    id: 'fc-user-story',
    front: 'Hvad er en User Story?',
    back: 'Som [persona] vil jeg [handling], så jeg kan [fordel].',
    example: 'Se ventetid/status før afgang, så man ikke kører forgæves.',
    topicId: 'user-stories',
  },
  {
    id: 'fc-fitts',
    front: "Hvad er Fitts's Law?",
    back: 'Tid til at ramme et mål afhænger af afstand og størrelse.',
    example: 'Store touch-targets på primære knapper i mobilappen.',
    topicId: 'fitts-law',
  },
  {
    id: 'fc-error',
    front: 'Hvad er Error Prevention?',
    back: 'Forhindre fejl frem for kun at vise fejlbeskeder (Nielsen #5).',
    example: 'Vis defekt/lukket status før brugeren kører afsted.',
    topicId: 'error-prevention',
  },
]
