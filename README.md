# Lønnssystem Demo – sikker GitHub-versjon

Denne utgaven har hele appen samlet i én `index.html`. Det gjør at `app.js`,
`styles.css` og `index.html` ikke kan blandes under opplasting.

## Last opp slik

1. Pakk ut ZIP-filen.
2. Åpne GitHub-repositoryet.
3. Slett de gamle filene i repositoryet.
4. Last opp alt innholdet fra den utpakkede mappen:
   - index.html
   - manifest.webmanifest
   - service-worker.js
   - .nojekyll
   - icons-mappen
5. Commit endringene.
6. Vent omtrent ett minutt på GitHub Pages.

Kontroller at `index.html` starter med:

<!doctype html>

Den skal ikke starte med:

'use strict';

Hvis den gamle siden fortsatt vises, åpne GitHub Pages-adressen med `?v=2`
på slutten én gang, eller slett nettstedsdata for siden i Safari/Chrome.
