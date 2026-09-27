# Web3 Carnival — asset pack

Everything scraped from the live site. All real, no placeholders.

## Folders
- `logos/`    — logo.svg (their mark), herotext.svg, threeway "powered by" mark
- `events/`   — 14 past event photos, named by event
- `speakers/` — 69 speaker headshots, named `firstname-lastname`
- `icons/`    — 8 audience-segment icons, plus the empowering-women illustration
                and the supporters world map
- `partners/` — 70 sponsor / VC / media / community logos, prefixed by category
                (`vc-`, `sponsor-`, `media-`, `community-`, `payment-`, `ticketing-`)

## Data files
- `speakers.csv` — 69 rows: Name, Role, Company, Country, Twitter, LinkedIn, Photo File
- `events.csv`   — 14 rows: Event Name, Date, City, Photo File, Link
- `tracks.csv`   — 7 conference tracks with their descriptions
- `audience.csv` — 8 audience segments, mapped to their icon files
- `stats.csv`    — the 6 headline numbers

The `Photo File` / `Icon File` columns match filenames in the folders, so you can
map data to images directly.

## tokens.css
Design tokens. Colors extracted from their own SVGs — #020b25 from the logo,
#602ea6 and #c977d6 from the track icons. Drop this in and build off the vars.

## Featured speakers (use these for the hero speaker row)
Recognisable employers, best credibility signal:
- Kanishka Agiwal — AWS
- Vinit Sinha — Mastercard
- Kunal Kumar — Coinbase
- Prashant Kumar — Accenture Song
- Parth Chaturvedi — ex-J.P. Morgan / CoinSwitch
- Evan Luthra — 2x Forbes 30 under 30
- Hariharan Ramakrishnan — Ford
- Astha Yadav — OCBC Bank
