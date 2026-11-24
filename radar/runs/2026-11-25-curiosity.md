# Radar run — Curiosity — 2026-11-25

- Fired 2026-11-24 23:50 Europe/Bucharest (16:50 America/Toronto) for the 2026-11-25 00:00 slot; odd date / 00:00 → Curiosity, per `radar/dayparts.yaml` (… 11-23 curiosity, 11-23 craft, 11-24 archive 2697-2699, 11-24 frontier 2700-2708). Starting main `88018af` (2708 cards, max rank 2708; re-checked with `git fetch`, no movement). Branch `radar/curiosity-2026-11-25`.
- Window: arXiv API submissions dated 18–24 Nov 2026 (`submittedDate` range), the slice after the 11-23 run (8–18 Nov), in 30 categories: math.CT, math.CO, math.DS, math.MG, math.GT, physics.class-ph, physics.bio-ph, physics.hist-ph, physics.pop-ph, cs.CG, cs.FL, cs.DM, cs.GR, cs.PL, cs.LO, cs.DS, nlin.CD/AO/PS/SI/CG, cond-mat.soft, and q-bio.PE/NC/QM/MN/GN/BM/CB/OT/TO/SC. Status: ok (all pages fetched; `http://export.arxiv.org` returned HTTP 500 for every query, `https://export.arxiv.org` worked). Raw responses kept in scratch (`/workspace/broadside-observer-scratch`), not committed, as in recent runs. Abstracts from the API; keepers' PDFs read (abstract, introduction, and for 2611.31187 the technical overview and AI acknowledgments). No web sources beyond arXiv.
- Cursor: submitted-date based; before = 2026-11-18 (end of previous slice), after = 2026-11-24 (submission date). The pool is smaller than the previous run because the window is six days of submissions rather than ten.

## Funnel
- Polled 846 unique arXiv ids (cross-lists across categories merged) → 688 after dedupe against seen.json, cards, summaries and run logs (158 already seen) → full title scan of all 688 plus abstract keyword pass → strict shortlist 34 (abstracts read) → keepers 5 (5/34 = 0.147, under the 0.15 cap).

## Keepers
- 2709 A Deterministic Linear Time Algorithm for Minimum Spanning Tree — Khanna, Putterman, Song (2611.31187): deterministic O(m) MST in the comparison model, first improvement since Chazelle 2000; authors state the main ideas were AI-generated and then human-verified. Score 9.
- 2710 The Z[τ]-foam: Goodman-Strauss's Dodecafoam as arithmetic in the icosahedral module — Pérez Ibarra, Flores Rodríguez (2611.28955): a geometric substitution turned into exact integer arithmetic; bubble counts grow as β^k with β = (1+√29)/2 and no cut-and-project window exists. Score 7.
- 2711 Three almost symmetric metatiles generate the Spectre tiling — Tatham (2611.28888): D23 metatile system for the Spectre monotile; one metatile disappears in the conversion. Score 7.
- 2712 Is every knot a three-way deadlock? — Ozawa (2611.29175): segment number three for T(2,q), q = 3,5,7,9 and both trefoil sums; conjecture that every non-trivial knot has segment number three. Score 7.
- 2713 From two heptagrams to a 449-vertex 5-chromatic unit-distance graph — Heule, Przybocki (2611.28518): new smallest known 5-chromatic unit-distance graph (509 → 449 vertices). Score 7.

## Near misses (recorded in seen.json `curiosity_2026_11_25_near_keepers`)
- There are hard braids (2611.27472); quantum Sudoku 4×4 (2611.29420); strong AJ conjecture false for hyperbolic prime knots (2611.26905, AI-assisted, Lean); unknotting number strictly subadditive for the trefoil (2611.29233); hyperbolic 7-manifold fibering over the circle (2611.30871); Gerards–Schrijver conjecture false (2611.28580); new Erdős–Szekeres upper bound (2611.29344); six penny second moment (2611.29844); maximal sections of the cube (2611.30144); cap-set growth constant lower bound (2611.30110); eight limit cycles in 3D competitive Lotka–Volterra (2611.29524); rotational chaos in the driven pendulum (2611.29608); saddle buckling of Gonium (2611.27563); individuality in cellular automata (2611.29287); diverging continuous Newton methods (2611.29088); curves with curvature a function of tangent distance (2611.29065); Thue–Morse route to chaos in the open quantum baker map (2611.28242); thinnest lattice covering in dimension six (2611.28562); high-order tangencies and universal dynamics (2611.29561); proper positive-only learning independent of ZFC (2611.29737); near-optimal centerpoints (2611.24780); Neary PCP(5) verification (2611.29559); Lacrymaria-like active filaments (2611.27577); camphor particle three-chamber transitions (2611.27478); simple routes to Turing-like patterns (2611.26814); chemotaxis as Nash equilibrium (2611.24705); V-variable fractal dimension (2611.26028); trajectory visibility in polygons (2611.29872); Turing morphogenesis review (2611.30543).

## Notable rejects
- Bulk of math.CO (extremal, spectral, colouring, Ramsey, matroid, partition congruences), math.GT/AG/RT/NT technical algebra, cs.DS approximation and online algorithms, cs.LO/PL verification, q-bio data and ML papers, cond-mat.soft and active-matter simulation: technical or incremental, no sparkle for this slot.
- 2611.31187 is also a Frontier-grade AI-theory result; kept here for the sheer age of the problem.

## Suggestions (human-gated, not applied)
- 2611.31187 (deterministic linear MST, AI-generated core per its acknowledgments) and 2611.26905 (strong AJ, AI-assisted with Lean) belong on the AI-math-results thread; consider a Frontier follow-up or `see` edge once such a lineage exists. 2611.28518 cites an OpenAI proof that χ(R²) ≥ 6 that this repo has not catalogued; worth a Frontier or Archive look.
- Cards 2709 and 2664/2687-type results could share a lineage for "open problems closed with AI help"; none created.
- Carry-over: register the extra Curiosity categories actually polled (math.MG, math.GT, cond-mat.soft, physics.bio-ph, cs.FL, cs.DM, cs.GR, nlin, physics.hist-ph) in `radar/dayparts.yaml`.
- Carry-over: `radar/state.md` says not to add cheap-filter rejects to seen.json, while recent runs add the strict shortlist (keepers + near keepers); worth stating that convention explicitly.
- Operational note: `http://export.arxiv.org/api/query` returned HTTP 500 on 24 Nov; `https://` works. Worth recording in `radar/sources.yaml` notes.

## Validation
- Cards 2709–2713 each have `## One-sentence takeaway`, `## Why it's lovely`, `## Key ideas`, `## Caveats` and `## Links`; `seeds/app` `pack-cards` packed 2713 cards (all 5 new cards parsed).
