# HR- og lønnssystem Demo v1.2.0

## Nytt: stillingskoder og standardlønn

Under `Oppsett` finnes nå en egen tabell for:

- stillingskode
- stillingsnavn
- tjeneste
- standard årslønn
- lønnsform
- ukentlig arbeidstid
- antall tilknyttede ansatte

Årslønnen kan endres direkte i tabellen. Når du trykker
`Lagre alle satser`, oppdateres alle ansatte som bruker standardlønn
fra den aktuelle stillingskoden.

## Lærlinger

Demoen har disse lærlingkodene:

- 9501 – Lærling, BUA-fag
- 9502 – Lærling, helsefag
- 9503 – Lærling, administrasjonsfag

Alle tre har samme standard demo-årslønn på kr 330 000.

De eksisterende HR-demoprofilene kobles automatisk til riktig
stillingskode når den nye versjonen åpnes.

## Ansattregister

På den ansatte kan du:

1. velge stillingskode
2. bruke standardlønn fra stillingskoden
3. se årslønnen fylles inn automatisk
4. fjerne avhukingen og registrere en individuell årslønn

En individuell årslønn blir ikke endret når lønnstabellen oppdateres.

## Nye demo-stillingskoder

- 9501 – Lærling, BUA-fag
- 9502 – Lærling, helsefag
- 9503 – Lærling, administrasjonsfag
- 9601 – HR-konsulent, vikar
- 9701 – Tilkallingsvikar
- 9801 – HR-rådgiver

Du kan opprette flere stillingskoder og redigere eksisterende koder.

## Oppdatering på GitHub Pages

1. Ta gjerne backup under `Oppsett`.
2. Pakk ut ZIP-filen.
3. Erstatt de gamle filene i GitHub-repositoryet.
4. Last opp alle filene og hele `icons`-mappen.
5. Commit endringene.
6. Åpne appen én gang med `?v=120` på slutten av adressen.

Eksisterende lokale data beholdes.

Etter endring av standardlønn må en åpen lønnskjøring beregnes på nytt
for at nye lønnsslipper og rapporter skal bruke den nye satsen.
