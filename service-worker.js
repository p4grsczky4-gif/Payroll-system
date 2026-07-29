# HR- og lønnssystem Demo v1.4.0

## Leder i stedet for lønnskonsulent-fane

Den tidligere kontrollfanen heter nå `Leder`.

Arbeidsflyten er:

1. Ansatt eller leder registrerer variabel lønn.
2. Registreringen sendes til leder.
3. Leder godkjenner, returnerer eller avviser.
4. Godkjente poster tas med i lønnskjøringen.

Lønnskonsulent er fortsatt en egen rolle, men har ikke lederens godkjenningsfane.

## Redigering etter retur eller avvisning

Returnerte og avviste poster får knappen:

`Rediger og send inn`

Der kan brukeren endre:

- lønnsart
- dato
- antall eller timer
- sats
- beløp
- kommentar og dokumentasjon

Når posten lagres, sendes den automatisk tilbake til leder med status `Sendt inn`.

## Rollebasert tilgang

### Ansatt
- ser bare egen oversikt
- registrerer variabel lønn på seg selv
- ser bare egne registreringer
- ser bare egne lønnsslipper

### Leder
- velger hvilket lederområde som skal vises
- ser bare ansatte som er knyttet til valgt leder
- registrerer variabel lønn på egne ansatte
- godkjenner, returnerer og avviser poster
- ser avgrensede ressurs- og tjenesterapporter

### Lønnskonsulent
- ser ansattregister
- gjennomfører lønnskjøring
- ser lønnsslipper, rapporter og økonomi
- har ikke lederens godkjenningsfane

### Systemadministrator
- har tilgang til alle funksjoner og oppsett

Rollevalget er fortsatt en demosimulering og er ikke en sikker innlogging.

## Ressursnummer og rapporter

Ansattregisteret har fått eget felt for `Ressursnummer`.

Dersom ressursnummer mangler ved import, brukes ansattnummer automatisk.

### Ny rapport: Ressurssammendrag
Rapporten grupperer på ressursnummer og viser:

- ressursnummer
- ansatt
- tjeneste
- tjenestested
- antall lønnslinjer
- sum tillegg og lønn
- sum trekk
- sum beløp

### Detaljert lønnsjournal
Den detaljerte lønnsjournalen er sortert på ressursnummer og legger automatisk
inn en egen rad med:

`Delsammendrag ressurs [nummer]`

Det er kolonnen `Beløp` som summeres.

### CSV
CSV-eksporten inneholder også:

- ressursnummer
- detaljerte lønnslinjer
- automatiske DELSAMMENDRAG-rader
- sum beløp per ressursnummer

## Excel-import

Importmalen i appen inneholder nå kolonnen `Ressursnummer`.

Den tidligere Excel-filen med 130 fiktive profiler kan fortsatt brukes.
Hvis kolonnen ikke finnes, settes ressursnummer lik ansattnummer automatisk.

## Oppdatering på GitHub Pages

1. Ta JSON-backup under `Oppsett`.
2. Pakk ut ZIP-filen.
3. Erstatt de gamle filene i GitHub-repositoryet.
4. Last opp alle filene og hele `icons`-mappen.
5. Commit endringene.
6. Åpne appen én gang med `?v=140` på slutten av adressen.

Eksisterende ansatte og lokale data beholdes.
