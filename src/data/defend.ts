export interface DefendCase {
  id: string
  decision: string
  context: string
  userNeed: string
  research: string
  principle: string
  modelAnswer: string
}

export const defendCases: DefendCase[] = [
  {
    id: 'd1',
    decision: 'Hvorfor har I valgt at vise driftsstatus på lokationssiden?',
    context: 'Lokationsdetaljer viser om hallen er ledig, optaget eller defekt.',
    userNeed:
      'Brugeren skal kunne planlægge før afgang og undgå at køre forgæves.',
    research:
      'Trustpilot og research pegede på usikkerhed om driftsstatus. Forms viste frustration over kø/ventetid. Kerneindsigt: uforudsigelig ventetid er største smertepunkt.',
    principle: 'Visibility of System Status (Nielsen #1) + Error Prevention',
    modelAnswer:
      'Vi viser driftsstatus, fordi research viste, at kunder er usikre på, om en hal er i drift – og fordi ventetid er det største smertepunkt. Det understøtter Visibility of System Status: brugeren får klar feedback før de kører. Samtidig er det error prevention, fordi vi forhindrer “fejlkørsler” til lukkede eller defekte haller.',
  },
  {
    id: 'd2',
    decision: 'Hvorfor har I en bundnavigation med få hovedpunkter?',
    context: 'Appen har en simpel bottom nav (hjem, kort, favoritter, profil).',
    userNeed: 'Hurtig adgang til kerneopgaver uden kognitiv overload.',
    research:
      'Interviews pegede på ønske om en simpel app. Kasper har brug for effektivitet.',
    principle: "Hick's Law + Jakob's Law + Aesthetic and Minimalist Design",
    modelAnswer:
      "Få faner følger Hick's Law – færre valg, hurtigere beslutning. Bundnavigation er et genkendeligt mønster (Jakob's Law), og det minimale fokus understøtter et æstetisk, minimalistisk design, hvor kerneopgaven er planlægning af bilvask.",
  },
  {
    id: 'd3',
    decision: 'Hvorfor har I favoritter?',
    context: 'Brugere kan gemme vaskehaller som favoritter.',
    userNeed: 'Tilbagevendende kunder skal hurtigt finde deres faste haller.',
    research:
      'Kasper er den travle abonnent. Brugertest viste dog, at favoritfunktionen kan være uklar – derfor videreudvikling.',
    principle: 'Flexibility and Efficiency of Use (Nielsen #7)',
    modelAnswer:
      'Favoritter er en genvej til ekspert-/gentagne brugere – Flexibility and Efficiency of Use. Kasper slipper for at søge hver gang. Brugertesten viste, at funktionen skal gøres tydeligere, så vi videreudvikler visuelt hierarki og forklaring.',
  },
  {
    id: 'd4',
    decision: 'Hvorfor prioriterede I kort med søgning og filtrering?',
    context: 'Kortvisning hjælper med at finde relevante vaskehaller.',
    userNeed: 'Overblik over nærliggende haller og mulighed for at filtrere efter behov.',
    research:
      'Problemstillingen er planlægning. Inspiration fra apps som SATS/Circle K. Brugere vil undgå at køre forgæves.',
    principle: "Jakob's Law + Hick's Law (begrænsede filtre)",
    modelAnswer:
      "Kort er et genkendeligt mønster (Jakob's Law) til at finde lokationer. Filtrene er bevidst begrænsede efter Hick's Law, så beslutningen ikke bliver tung. Det understøtter direkte behovet for at planlægge bilvask.",
  },
  {
    id: 'd5',
    decision: 'Hvorfor vil I tilføje notifikationer efter bilvask?',
    context: 'Videreudvikling: push om anmeldelse og driftsopdateringer.',
    userNeed: 'Nem feedback efter vask + opdateringer om favoritter/ventetid.',
    research:
      'Brugertest: anmeldelsesfunktionen var svær at finde. Research: behov for status og planlægning.',
    principle: 'Visibility of System Status + Recognition rather than Recall',
    modelAnswer:
      'Testen viste, at anmeldelse var svær at finde. En notifikation efter vask gør handlingen synlig i rette øjeblik – Visibility of System Status – og minder brugeren om konteksten (fx Brøndby), så de ikke skal huske det selv.',
  },
  {
    id: 'd6',
    decision: 'Hvorfor brugte I personas i stedet for kun “brugeren” generelt?',
    context: 'Kasper og Mona styrer designvalg.',
    userNeed: 'Forskellige behov: effektivitet vs. tryghed/gennemskuelighed.',
    research: 'Forms, interviews og Trustpilot gav grundlag – personas baseret på research, ikke antagelser.',
    principle: 'Human-centered design / research-baserede personas',
    modelAnswer:
      'Personas giver teamet et fælles billede og empati. Kasper og Mona er baseret på research og hjælper os med at prioritere: status og hastighed til Kasper, klarhed og tryghed til Mona – i stedet for at designe til en abstrakt “bruger”.',
  },
]
