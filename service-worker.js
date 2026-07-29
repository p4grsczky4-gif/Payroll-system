# Lønnssystem Demo v1.0.3

## Nytt i denne versjonen

### Nye lønnsarter
- 3200 – Lønnslån utbetaling
- 6200 – Lønnslån avdrag
- 6210 – Inkassotrekk
- 6220 – Påleggstrekk
- 6230 – Fagforeningstrekk
- 6290 – Annet fast trekk

### Lån og trekk per ansatt
Åpne `Ansatte` og trykk `Lån og trekk` på den aktuelle ansatte.

En trekkavtale kan inneholde:
- lønnsart og lønnskode
- referanse eller saksnummer
- totalt skyldig beløp
- månedlig trekk eller engangstrekk
- beløp per måned
- startdato
- sluttdato
- aktiv eller pauset status
- kommentar

Appen beregner automatisk:
- tidligere trukket beløp
- restsaldo
- neste trekk i aktuell lønnskjøring
- siste termin, som begrenses til gjenværende restsaldo

Trekket blir automatisk tatt med når lønnskjøringen beregnes.

### Rapporter
- Detaljert lønnsjournal viser lønnskode og referanse
- Trekkrapport viser hver trekkart på egen linje
- Ny rapport: `Trekkavtaler`
- CSV-eksport støtter trekkavtaler og detaljerte trekk

## Oppdatering på GitHub Pages
1. Pakk ut ZIP-filen.
2. Slett eller erstatt de gamle filene i GitHub-repositoryet.
3. Last opp alle filene og hele `icons`-mappen.
4. Commit endringene.
5. Vent på at GitHub Pages er publisert.
6. Åpne appen én gang med `?v=103` på slutten av adressen.

Eksisterende ansatte og registreringer beholdes fordi dataene ligger lokalt i nettleseren.
Ta likevel gjerne en JSON-backup under `Oppsett` før oppdateringen.
