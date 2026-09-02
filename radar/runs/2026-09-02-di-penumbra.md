# Radar run — DI + penumbra user mint — 2026-09-02

- Not a daypart radar. Locked 36 keepers from the 2026-09-02 direct-illumination and penumbra harvests.
- Starting main: `7a15dae` (archive radar 2026-09-02)
- Starting catalog: 1499 unique cards; max seed rank 1499
- Batch: `di-penumbra-2026-09-02`
- Next rank: 1500+
- Resulting catalog: 1535 unique cards; max rank 1535

## Gate

Mint the user-locked 36 in listed order. Skip a locked title only if it is already a live card; then take BACKUPS in order. Live INDEX + 1499 card files checked: **0 collisions**. Backups unused.

## Keepers

Direct (1500–1515): LTC 2016, Heitz–Hill–McGuire 2018, PCSS, Fortnite VSM, Tiled Shading, line/disk LTC, MSM, ESM, Olsson VSM-many-lights, spherical rectangles, Arvo tensors, Hašan MRC, Killzone 2 deferred, BF3 DX11, Landis bent normals, RTXDI guide.

Penumbra (1516–1535): wedges, Guennebaud SSM, Convolution SM, Assarsson GPU SSV, Laine SSV-RT, Soler–Sillion, Drettakis–Fiume, bitmask, VSSM, Hasenfratz survey, LVSM, Alias-Free SM, Ng wavelets, Smoothies, Penumbra Maps, Heckbert beams, Amanatides cones, Bunnell DAO, frustum-traced IZB, Guennebaud adaptive 2007.

## Dedupe

Checked `radar/seen.json` titles/urls, `seeds/INDEX.md`, and all 1499 `seeds/cards/*.md`. PCSS / ESM / Convolution SM / Alias-Free SM were **seen, no card** — minted. Fuzzy INDEX hits (SHEXP 1415, VSM 359) are different papers and were not skipped. Do not remint 1–1499.

## Search failures

Harvest-time DBLP/Crossref 429s are in the harvest logs. No additional lookup failure blocked a locked title. RTXDI guide uses the NVIDIA blog + SDK + GTC slides (HPG 2021 *Rearchitecting Spatiotemporal Resampling for Production* is cited as the academic sibling, not substituted as the title).

