# HR- og lønnssystem Demo v1.3.0

## Personvernendring

De 130 fiktive ansattprofilene er fjernet helt fra appkoden. GitHub-repositoryet inneholder nå bare programkode, stillingskoder, tjenester og lønnsarter.

Ansattdata opprettes manuelt eller importeres fra en lokal Excel-fil. Excel-filen leses i nettleseren og sendes ikke til GitHub eller appen.

## Excel-import

Appen leser disse arkene:

- `Ansatte` – obligatorisk
- `Stillingskoder` – valgfritt
- `Variabel lønn` – valgfritt

Ansatte med samme ansattnummer blir oppdatert. Nye ansattnumre blir opprettet.

Under `Oppsett → Data, Excel og backup` kan du:

- importere ansatte fra Excel
- laste ned en tom Excel-mal
- importere og eksportere JSON-backup
- fjerne tidligere HR-demoprofiler som fortsatt ligger lokalt fra eldre versjoner

## Viktig ved oppdatering

Å bytte GitHub-filene sletter ikke data som allerede ligger i nettleserens IndexedDB. Hvis de gamle 130 profilene fortsatt vises, åpner du `Oppsett` og trykker `Fjern tidligere HR-demoprofiler lokalt`.

## Publisering

1. Ta JSON-backup hvis du har lokale data du vil beholde.
2. Erstatt de gamle filene i GitHub med innholdet i ZIP-filen.
3. Åpne GitHub Pages-adressen én gang med `?v=130` på slutten.
4. Importer Excel-filen gjennom appen. Ikke last Excel-filen opp til GitHub.

Excel-importen bruker SheetJS Community Edition 0.20.3 fra den offisielle SheetJS-CDN-en. Selve regnearket behandles lokalt i nettleseren.
