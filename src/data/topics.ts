export type TopicCategory =
  | 'designprincipper'
  | 'ux-metoder'
  | 'supplerende'

export interface Topic {
  id: string
  title: string
  category: TopicCategory
  priority: 1 | 2 | 3
  short: string
  what: string
  why: string
  washworld: string
  oral: string
  tips?: string[]
  demo?: 'hicks' | 'status' | 'crap' | 'jakob'
}

export const categoryLabels: Record<TopicCategory, string> = {
  designprincipper: 'Designprincipper',
  'ux-metoder': 'UX-metoder',
  supplerende: 'Supplerende',
}

export const topics: Topic[] = [
  {
    id: 'hicks-law',
    title: "Hick's Law",
    category: 'designprincipper',
    priority: 1,
    short: 'Flere valg = længere beslutningstid',
    what: "Hick's Law (Hick's lov) siger, at tiden det tager at træffe en beslutning stiger i takt med antallet af muligheder. Jo flere valg, jo længere tid bruger brugeren på at beslutte sig.",
    why: 'Hvis brugeren møder for mange valg på én gang, bliver de usikre og langsommere. Ved at begrænse og gruppere valg hjælper vi dem med at handle hurtigt – især når de er pressede på tid.',
    washworld:
      'I WashWorld begrænser vi valg i navigationen (få hovedfaner) og i filtrene på kortet, så Kasper hurtigt kan finde en ledig vaskehal uden at scrolle gennem unødvendige muligheder.',
    oral: "Hick's Law handler om, at flere valg øger beslutningstiden. Vi brugte det ved at holde navigationen simpel og filtrene overskuelige, så brugerne hurtigt kan planlægge en bilvask.",
    tips: [
      'Nævn sammenhængen: flere valg → længere tid',
      'Giv ét konkret eksempel fra navigation eller filtre',
      'Kobl det til Kaspers behov for effektivitet',
    ],
    demo: 'hicks',
  },
  {
    id: 'jakobs-law',
    title: "Jakob's Law",
    category: 'designprincipper',
    priority: 1,
    short: 'Brugere forventer genkendelige mønstre',
    what: "Jakob's Law siger, at brugerne bruger det meste af deres tid på andre produkter. De forventer derfor, at jeres app fungerer som dem, de allerede kender.",
    why: 'Genkendelige mønstre reducerer indlæringstid. Brugeren skal ikke gætte – de genkender mønstre fra apps som kort, hjerte-favorit og bundnavigation.',
    washworld:
      'Vi bruger bundnavigation, kortvisning og et genkendeligt favoritikon – mønstre brugere kender fra fx SATS og andre apps. Det gør WashWorld nemmere at forstå med det samme.',
    oral: "Jakob's Law betyder, at vi designer efter velkendte mønstre. Derfor har vi bundnavigation, kort og favoritter, som brugerne allerede forstår fra andre apps.",
    tips: [
      'Forklar “brugere kender andre apps”',
      'Nævn bundnav, kort og favoritikon',
      'Kobl til inspiration fra SATS/Circle K',
    ],
    demo: 'jakob',
  },
  {
    id: 'visibility-status',
    title: 'Visibility of System Status',
    category: 'designprincipper',
    priority: 1,
    short: 'Brugeren skal altid vide, hvad der sker',
    what: 'Nielsens heuristik #1: Interfacet skal informere brugerne om, hvilke processer der er i gang, gennem passende feedback inden for rimelig tid.',
    why: 'Uden status bliver brugeren usikker. I vores research så vi netop usikkerhed om driftsstatus og ventetid – det skaber frustration og risiko for at køre forgæves.',
    washworld:
      'Vi viser status for vaskehaller: ledig, optaget eller defekt – plus kapacitet/ventetid på lokationssiden. Det giver Mona tryghed og Kasper mulighed for at undgå spildtid.',
    oral: 'Visibility of system status betyder, at systemet altid skal fortælle brugeren, hvad der sker. Vi viser driftsstatus og ledighed, fordi research viste usikkerhed om, om hallen var åben.',
    tips: [
      'Nævn Nielsen heuristik #1',
      'Kobl til Trustpilot-indsigt om driftsstatus',
      'Eksempel: ledig / optaget / defekt',
    ],
    demo: 'status',
  },
  {
    id: 'crap-contrast',
    title: 'CRAP – Contrast',
    category: 'designprincipper',
    priority: 1,
    short: 'Vigtige elementer skal skille sig ud',
    what: 'Contrast (kontrast) betyder, at vigtige elementer skal skille sig visuelt ud – via farve, størrelse eller vægt – så hierarkiet er tydeligt.',
    why: 'Uden kontrast mister brugeren overblik. Primære handlinger og status skal kunne ses hurtigt.',
    washworld:
      'WashWorld-grøn bruges til primære knapper og vigtig status. Ledig/optaget/defekt adskilles tydeligt i farve, så man hurtigt ser, hvad der er vigtigt.',
    oral: 'Contrast i CRAP handler om at gøre det vigtigste synligt. Vi bruger stærk farvekontrast på status og primære CTA’er, så brugeren hurtigt finder det relevante.',
    demo: 'crap',
  },
  {
    id: 'crap-repetition',
    title: 'CRAP – Repetition',
    category: 'designprincipper',
    priority: 1,
    short: 'Gentag mønstre for genkendelighed',
    what: 'Repetition (gentagelse) betyder, at man genbruger de samme visuelle og interaktive mønstre – farver, ikoner, knapstile – så designet føles sammenhængende.',
    why: 'Gentagelse skaber konsistens og gør appen lettere at lære. Brugeren genkender mønstre fra skærm til skærm.',
    washworld:
      'Samme kortlayout til lokationer, samme statusfarver og samme knapstil går igen på hjem, kort og lokationsdetaljer.',
    oral: 'Repetition betyder, at vi genbruger de samme mønstre. I WashWorld ser status og knapper ens ud på tværs af skærme, så brugeren ikke skal lære noget nyt hver gang.',
  },
  {
    id: 'crap-alignment',
    title: 'CRAP – Alignment',
    category: 'designprincipper',
    priority: 1,
    short: 'Justering skaber orden og overblik',
    what: 'Alignment (justering) handler om at placere elementer efter et fælles grid, så layoutet føles ordnet – ikke tilfældigt.',
    why: 'God justering gør indhold lettere at scanne. Brugeren finder information hurtigere.',
    washworld:
      'Lokationskort, lister og detaljesider følger et konsekvent grid, så tekst, ikoner og status står på linje.',
    oral: 'Alignment betyder, at elementer er justeret efter et system. Vi bruger et grid, så lister og lokationskort er nemme at scanne.',
  },
  {
    id: 'crap-proximity',
    title: 'CRAP – Proximity',
    category: 'designprincipper',
    priority: 1,
    short: 'Ting der hører sammen, står sammen',
    what: 'Proximity (gruppering) betyder, at elementer der hører sammen, placeres tæt – og adskilles fra det, der ikke hører til.',
    why: 'Gruppering hjælper brugeren med at forstå struktur uden at læse alt. Det reducerer kognitiv belastning.',
    washworld:
      'På lokationssiden står navn, adresse og driftsstatus tæt sammen, mens favorit og support er adskilt som sekundære handlinger.',
    oral: 'Proximity betyder, at relateret information står sammen. Vi grupperer status og lokationsinfo, så brugeren ser det vigtigste som én enhed.',
  },
  {
    id: 'double-diamond',
    title: 'Double Diamond',
    category: 'ux-metoder',
    priority: 2,
    short: 'Discover → Define → Develop → Deliver',
    what: 'Double Diamond er en designproces med fire faser: Discover (udforske bredt), Define (skærpe problemet), Develop (udvikle løsninger) og Deliver (levere og teste). Den veksler mellem divergens og konvergens.',
    why: 'Den sikrer, at vi løser det rigtige problem på den rigtige måde – først forstå, så definere, så designe, så teste. Det kræves også i WashWorld-opgaven.',
    washworld:
      'Discover: Forms, Trustpilot, interviews. Define: Personas, pains, kerneindsigt om ventetid. Develop: flows, CRAP, wireframes. Deliver: Figma-prototype og brugertest.',
    oral: 'Vi brugte Double Diamond for at strukturere processen. Først research i Discover, så definerede vi problemet, udviklede konceptet og leverede en testbar Figma-prototype.',
    tips: [
      'Nævn alle fire faser',
      'Giv ét eksempel pr. fase fra projektet',
      'Sig “divergerende/konvergerende” hvis du kan',
    ],
  },
  {
    id: 'journey-vs-flow',
    title: 'User Journey Map vs. User Flow',
    category: 'ux-metoder',
    priority: 2,
    short: 'Oplevelse over tid vs. digital vej til mål',
    what: 'Et User Journey Map viser brugerens oplevelse over tid – følelser, touchpoints og pain points. Et User Flow viser den konkrete vej gennem den digitale løsning: handlinger, valg og systemrespons.',
    why: 'Journey Map hjælper med at forstå hele oplevelsen og finde pain points. User Flow hjælper med at designe den konkrete app-logik uden unødvendige trin.',
    washworld:
      'Journey Map: fra “jeg skal vaske bil” til ankomst – inkl. frustration over kø. User Flow: Hjem/kort → vælg lokation → se status → favorit/kør.',
    oral: 'Journey Map viser oplevelsen over tid og følelser. User Flow viser den digitale vej til målet. Vi brugte journey til at finde pain points og flow til at designe appens skridt.',
  },
  {
    id: 'personas',
    title: 'Personas',
    category: 'ux-metoder',
    priority: 2,
    short: 'Fiktive brugere baseret på research',
    what: 'Personas er fiktive karakterer, der repræsenterer forskellige brugertyper. De skal baseres på research – ikke antagelser.',
    why: 'De giver teamet en fælles forståelse af målgruppen, skaber empati og hjælper med at styre design efter konkrete behov.',
    washworld:
      'Kasper: den travle abonnent (effektivitet, undgå spildtid). Mona: impulsvaskeren (tryghed, gennemskuelighed, skånsom vask).',
    oral: 'Vi lavede to personas ud fra research: Kasper, der vil undgå spildtid, og Mona, der har brug for tryghed og klar information om status.',
  },
  {
    id: 'empathy-map',
    title: 'Empathy Map',
    category: 'ux-metoder',
    priority: 2,
    short: 'Hvad brugeren siger, tænker, gør og føler',
    what: 'En Empathy Map samler indsigter om, hvad brugeren siger, tænker, gør og føler – for at skabe empati og synliggøre behov.',
    why: 'Den hjælper dig med at gå fra rå data til menneskelig forståelse, før I designer.',
    washworld:
      'Vores empathy map viste frustration over uforudset ventetid og usikkerhed om status og vilkår – direkte fra research.',
    oral: 'Empathy Map hjalp os med at samle, hvad brugerne føler og tænker. Den viste frustration over ventetid og usikkerhed om driftsstatus.',
  },
  {
    id: 'pains-gains',
    title: 'Pains & Gains',
    category: 'ux-metoder',
    priority: 2,
    short: 'Smertepunkter og ønskede gevinster',
    what: 'Pains er brugerens problemer og frustrasjoner. Gains er de gevinster og fordele, de ønsker.',
    why: 'Det gør det tydeligt, hvad løsningen skal fjerne (pains) og hvad den skal levere (gains).',
    washworld:
      'Pains: kø i peak, køre forgæves, manglende overblik. Gains: nem betaling/abonnement og nummerpladescanning.',
    oral: 'Pains & Gains satte fokus på, at kø og driftsusikkerhed er de største smerter – mens nem betaling er en ønsket gevinst.',
  },
  {
    id: 'user-stories',
    title: 'User Stories',
    category: 'ux-metoder',
    priority: 2,
    short: 'Som … vil jeg … så jeg kan …',
    what: 'En User Story beskriver brugerens mål: “Som [persona] vil jeg [handling], så jeg kan [fordel].” Den beskriver hvad – ikke præcis UI.',
    why: 'User Stories gør behov konkrete, prioriterbare og testbare. De bygger bro fra research til design.',
    washworld:
      'Behov for at se ventetid og status før afgang, nem administration af abonnement og hurtig fejlrapportering – omsat til stories for Kasper og Mona.',
    oral: 'User Stories omsatte research til konkrete behov, fx at se status før man kører, så man undgår at køre forgæves.',
  },
  {
    id: 'kval-kvant',
    title: 'Kvalitativ vs. kvantitativ research',
    category: 'ux-metoder',
    priority: 2,
    short: 'Hvorfor vs. hvor mange',
    what: 'Kvantitativ research samler data fra en stor gruppe og viser tendenser (hvor mange/hvad). Kvalitativ research går i dybden med få personer og viser adfærd og holdninger (hvorfor/hvordan).',
    why: 'I kombination får I både overblik og dybde – tendenser og forklaringer.',
    washworld:
      'Kvantitativt: Google Forms med 41 respondenter (kø, ventetid, alder 25–34). Kvalitativt: interviews og Trustpilot-indsigter om driftsusikkerhed.',
    oral: 'Vi kombinerede kvantitativt spørgeskema med 41 svar og kvalitative interviews for både tendenser og dybere behov.',
  },
  {
    id: 'primaer-sekundaer',
    title: 'Primær vs. sekundær research',
    category: 'ux-metoder',
    priority: 2,
    short: 'Data I selv samler vs. eksisterende data',
    what: 'Primær data er data, I selv indsamler. Sekundær data er data, der allerede er indsamlet.',
    why: 'Sekundær research er hurtig start. Primær research giver specifik indsigt til jeres problem.',
    washworld:
      'Primær: Google Forms, interviews, observationer. Sekundær: Trustpilot og inspiration fra SATS & Circle K.',
    oral: 'Vi brugte både primær research – spørgeskema og interviews – og sekundær som Trustpilot og konkurrentinspiration.',
  },
  {
    id: 'taenke-hoejt',
    title: 'Tænke-højt-test',
    category: 'ux-metoder',
    priority: 2,
    short: 'Observer adfærd, mens brugeren løser opgaver',
    what: 'I en tænke-højt-test observerer I brugeren, mens de løser konkrete opgaver og siger, hvad de tænker. Fokus er adfærd – ikke holdninger.',
    why: 'Det er den mest anerkendte metode til at finde usability-problemer. I måler effectiveness, efficiency og satisfaction i kontekst.',
    washworld:
      'Tre testpersoner gennemførte fem scenarier. De kunne finde vaskehaller og drift, men havde udfordringer med anmeldelse og favoritter.',
    oral: 'Vi lavede tænke-højt-test med tre personer og fem scenarier. Det viste, at kerneflows virkede, men anmeldelse og favoritter skulle tydeliggøres.',
    tips: [
      'Sig: realistiske tasks, ingen ledetråde',
      'Undersøg adfærd – ikke “hvad synes du?”',
      'Kun dokumenterede resultater: 3 personer',
    ],
  },
  {
    id: 'wireframes',
    title: 'Wireframes & fidelity',
    category: 'ux-metoder',
    priority: 2,
    short: 'Low-fi til struktur, high-fi til detaljer',
    what: 'Wireframes er skitser af skærme uden færdig styling. Low-fidelity er grove skitser til struktur. High-fidelity er detaljerede designs tæt på det endelige UI.',
    why: 'Low-fi er hurtigt at ændre. High-fi egner sig til test og som grundlag for kode.',
    washworld:
      'Vi gik fra wireframes i Develop til high-fidelity prototype i Figma i Deliver – klar til brugertest.',
    oral: 'Vi startede med wireframes for at få strukturen på plads, og gik derefter til high-fidelity i Figma til test.',
  },
  {
    id: 'prototype-videre',
    title: 'Prototype & videreudvikling',
    category: 'ux-metoder',
    priority: 2,
    short: 'Test, lær, forbedr',
    what: 'En prototype er en testbar version af designet. Videreudvikling er de forbedringer, I laver ud fra testresultater.',
    why: 'Design er iterativt. Test afslører problemer, I ikke så selv – “You ≠ user”.',
    washworld:
      'Efter brugertest: tydeligere anmeldelsesmuligheder og notifikationer efter bilvask (fx “Hvordan gik din vask?”).',
    oral: 'Prototypen gjorde det muligt at teste. Videreudviklingen fokuserer på anmeldelser og notifikationer, fordi testen viste, at de var svære at finde.',
  },
  {
    id: 'fitts-law',
    title: "Fitts's Law",
    category: 'supplerende',
    priority: 3,
    short: 'Store, tætte mål er hurtigere at ramme',
    what: "Fitts's Law: tiden det tager at ramme et mål afhænger af afstanden til målet og målets størrelse.",
    why: 'Vigtige knapper bør være store nok og placeret, hvor de er nemme at nå – især på mobil.',
    washworld:
      'Primære handlinger som “se lokation” og statusvalg er store touch-targets i bunden/på kortet, så de er nemme at ramme undervejs.',
    oral: "Fitts's Law siger, at store og nære mål er hurtigere at ramme. Derfor er vores vigtigste knapper store og lette at nå på mobil.",
  },
  {
    id: 'error-prevention',
    title: 'Error Prevention',
    category: 'supplerende',
    priority: 3,
    short: 'Forhindre fejl frem for kun at rette dem',
    what: 'Nielsen #5: Et godt interface hjælper brugeren med ikke at lave fejl. At forhindre fejl er bedre end gode fejlbeskeder.',
    why: 'Fejl skaber frustration. Forebyggelse sparer tid og øger tillid.',
    washworld:
      'Ved at vise, om en hal er defekt eller lukket før afgang, forhindrer vi “fejlkørsler” – brugeren vælger ikke en ubrugelig lokation.',
    oral: 'Error prevention handler om at forhindre fejl. Statusvisning gør, at man ikke kører til en lukket eller defekt vaskehal.',
  },
  {
    id: 'flexibility-efficiency',
    title: 'Flexibility and Efficiency of Use',
    category: 'supplerende',
    priority: 3,
    short: 'Shortcuts til erfarne brugere',
    what: 'Nielsen #7: Systemet bør tilbyde genveje til ekspertbrugere, uden at det forvirrer nybegyndere.',
    why: 'Tilbagevendende brugere skal kunne handle hurtigere end første gangs-brugere.',
    washworld:
      'Favoritter er en genvej for Stammegæster som Kasper – hurtig adgang til kendte haller uden at søge igen.',
    oral: 'Flexibility and efficiency betyder genveje til erfarne brugere. Favoritter lader Kasper komme hurtigere til sine faste vaskehaller.',
  },
  {
    id: 'aesthetic-minimalist',
    title: 'Aesthetic and Minimalist Design',
    category: 'supplerende',
    priority: 3,
    short: 'Kun det nødvendige – less is more',
    what: 'Nielsen #8: Interfacets indhold bør reduceres til det nødvendige. Alle elementer konkurrerer om opmærksomhed. Undervisningen kobler også til KISS og “less is more”.',
    why: 'Unødvendigt indhold distraherer fra opgaven – at planlægge en bilvask.',
    washworld:
      'Appen fokuserer på lokation, status og handling. Sekundært indhold er skjult i profil/support, så hovedskærmene forbliver enkle.',
    oral: 'Aesthetic and minimalist design betyder, at vi kun viser det nødvendige. Derfor er hjem og kort fokuseret på at finde en ledig vaskehal.',
  },
]
