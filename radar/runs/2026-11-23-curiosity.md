# Radar run — Curiosity — 2026-11-23

- Fired 2026-11-22 23:52 Europe/Bucharest (16:52 America/Toronto) for the 2026-11-23 00:00 slot; odd date / 00:00 → Curiosity, per `radar/dayparts.yaml` (… 11-21 curiosity, 11-21 craft, 11-22 archive, 11-22 frontier). Starting main `e128d1d` (2686 cards, max rank 2686). Branch `radar/curiosity-2026-11-23`.
- Window: no new arXiv announcement was due before this run (the last two Curiosity runs covered the 17–20 Nov listings), and recency is flexible for Curiosity, so this run took a fresh slice: arXiv API submissions dated 8–18 Nov 2026 (`submittedDate` range) in 30 categories: math.CT, math.CO, math.DS, math.MG, math.GT, physics.class-ph, physics.bio-ph, physics.hist-ph, physics.pop-ph, cs.CG, cs.FL, cs.DM, cs.GR, cs.PL, cs.LO, cs.DS, nlin.CD/AO/PS, cond-mat.soft, and q-bio.PE/NC/QM/MN/GN/BM/CB/OT/TO/SC. Status: ok (all pages fetched, no truncation). Abstracts from the API; keepers' abs pages and PDFs read (intro, AI-use statements). No web sources beyond arXiv.
- Cursor: submitted-date based; before = none (flexible slice), after = 2026-11-18 (submission date). The next Curiosity run can use the listing-day window again.

## Funnel
- Polled 1699 unique arXiv ids (cross-lists across categories merged) → 1536 after dedupe against seen.json, cards, summaries and run logs (163 already seen) → title hand-scan plus abstract keyword pass (conjecture / open problem / counterexample / long-standing etc.) over all 1536, and a full title scan of the physics/nlin/CG/FL/CT/q-bio-adjacent subset → strict shortlist 36 (abstracts read) → keepers 5 (5/36 = 0.139, under the 0.15 cap).

## Keepers
- 2687 Additive cubes are avoidable over {0,1,2,3}, {0,1,4} and {0,2,5} — Jamet, Rosenfeld (2611.17999): an additive-cube-free infinite word over four integers, via length-3 morphisms found by a short exhaustive search; open since 1994. Score 8.
- 2688 Chaos without Local Spectral Instability in a Kicked Oscillator — Citro, Petrillo, Sornette (2611.15525): chaos although every local Jacobian is spectrally contracting; exact joint spectral radius. Score 7.
- 2689 Directed Wada cascade in systems with discrete scale invariance — Haerter, Viana, Sanjuán, Caldas (2611.15848): a ladder of scaled attractors whose basin boundaries nest in one direction only. Score 7.
- 2690 Longest Unbordered Factors in Linear Time — Mieno (2611.12146): O(n) worst case, closing an O(n log n) gap; AI-assisted. Score 7.
- 2691 Tangent lengths and invariants of Poncelet polygons between two circles — Tran (2611.20477): new conserved quantities along the Poncelet family, billiards in ellipses, two Cieślak–Mozgawa conjectures. Score 7.

## Near misses (recorded in seen.json `curiosity_2026_11_23_near_keepers`)
- No complete set of MUBs in C^6 without Fourier vanishing (2611.19809); isolated complex Hadamard matrix with nonzero defect, size 13 (2611.20136); one-sided chord trim of Wetzel's sector (2611.16204); covering the triangular lattice with non-overlapping unit disks (2611.13535); twin-star hypothesis in dimension five (2611.19473); triangular Abrikosov constant for rotating BECs (2611.17543); Wolfe's min-norm-point method generalizes simplex (2611.12680); union-of-uniform-balls counterexample (2611.14181); LLMs as nonlinear dynamical systems, three clocks (2611.21983); MemGP working memory (2611.22054); optimal mixing of random-to-random shuffle (2611.19829); maximal-tile hyperbolic tilings (2611.11369); firefly chimeras (2611.16214); tendex lines of lunar tides (2611.16083); elliptic scroll-ring axis switching (2611.11538); boxes in infinite words (2611.21772); MIPS plus chemotaxis (2611.18783); higher categorical bistellar moves (2611.17244); basin adjacency graphs (2611.15626); lifting a mass in Schwarzschild (2611.11879); counting 6-cliques in O(n^5.97) (2611.24750); minimally repetitive rich words (2611.13676); set reconciliation with O(d) redundancy (2611.11409); m-sequence degree discrepancy (2611.15635).

## Notable rejects
- Bulk of math.CO (Ramsey, extremal, colouring, matroid, partition-positivity), math.GT/CT technical algebra, cs.PL/LO verification and tooling, q-bio data and clinical papers, cond-mat.soft: technical or incremental, no sparkle for this slot. 2611.19809 and 2611.24750 reference OpenAI/Anthropic AI-derived results and fit Frontier better.

## Suggestions (human-gated, not applied)
- Route 2611.21983 (LLMs as nonlinear dynamical systems) and 2611.22054 (MemGP) to a Frontier run; 2611.19809 / 2611.24750 to Frontier or Archive for the AI-math thread.
- Card 2687 and card 2664 (Shallit additive-square-free word) could share a lineage or `see` edge if a combinatorics-on-words lineage is created; neither cites the other.
- Carry-over: register the extra Curiosity categories actually polled (math.MG, math.GT, cond-mat.soft, physics.bio-ph, cs.FL, cs.DM, cs.GR, nlin, physics.hist-ph) in `radar/dayparts.yaml`.
- Carry-over: `radar/state.md` says not to add cheap-filter rejects to seen.json, while recent runs add the strict shortlist (keepers + near keepers); worth stating that convention explicitly.

## Validation
- Cards 2687–2691 each have `## One-sentence takeaway`, `## Why it's lovely`, `## Key ideas`, `## Caveats` and `## Links`; `seeds/app` `pack-cards` packed 2691 cards (all 5 new cards parsed).
