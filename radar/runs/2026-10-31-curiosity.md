# Radar run — Curiosity — 2026-10-31

- Fired 2026-10-31 00:00 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `2c9cb4e` (2469 cards, max rank 2469). Branch `radar/curiosity-2026-10-31`.
- Window: arXiv `/list/<cat>/pastweek` listings for Tue 27, Wed 28 and Fri 30 Oct 2026 (new submissions + cross-lists). The 2026-10-29 Curiosity slot did not run, so this run covers both gaps since the 2026-10-27 run.
- Categories covered (42, no failures): the same list as the 2026-10-27 run.

## Funnel
- Raw entries 2878 → 2326 unique ids → 2154 unseen → all titles read, 40 abstracts read (strict shortlist 40) → first five pages read for 6 → keepers 6 (6/40 = 0.15, at the cap).

## Keepers
- 2470 A simple construction of smooth counterexamples to the Loewner and Carathéodory conjectures — Ando, Umehara (2610.34036): a trigonometric seed whose trace-free Hessian is visibly nonzero gives flat smooth functions with Hessian-eigenline index 1 + k/2 and a strictly convex closed smooth surface with exactly one umbilic; a short, self-contained version of Alpöge's announced counterexamples.
- 2471 Four-Coloring Planar Graphs in Linear Time — Inoue, Kawarabayashi, Miyashita, Mohar, Thomassen, Thorup (2610.39753): O(n) 4-coloring of planar graphs (optimal), improving their FOCS'26 O(n log n); a new data structure finds and applies the O(log n) Kempe changes in O(n/log n) amortized time each.
- 2472 An upper bound of 61 for the Ramsey number R(3,3,3,3) — Tatarevic (2610.36648): a ticket double-count plus a parity contradiction (61 · 15 is odd), with 56,374 + 346 SAT refutations by two solvers and Lean-formalized reductions; previous bound 62.
- 2473 Optimality of the BCC lattice among 3D lattice quantizers — Bourne, Cagnetti, Roper (2610.39705): BCC is a local minimizer of the p-th Voronoi moment for all p ≥ 1 and global near p = 2 (Graf–Luschgy conjecture), with a bifurcation theorem singling out p = 2.
- 2474 Every route counts, but some count more: a max-plus view of the C. elegans brain — Reyner-Fuentes, Rudolph, Peláez-Moreno, Valverde-Albacete (2610.37587): the multilayer connectome analyzed in max-plus algebra collapses to a few dominant feedback loops that recover known circuits.
- 2475 No friction required: Self-locking in entangled assemblies of curved filaments — Greenvall, van den Berg, Meinhart, Staudenmayer, Crosby, Grason (2610.36330): helical filament bundles lock by elastic pre-stress alone, or unravel through a soliton-like front; some geometries cannot lock at any friction.

## Near misses (recorded in seen.json `curiosity_2026_10_31_near_keepers`)
- Untrained 172,433-neuron fly brain-and-nerve-cord connectome reaches 95% of odour sources vs 18% for a degree-preserving rewiring (2610.33881; close to card 2268); Borsuk number in four dimensions is at most seven, via 23,494 boxes of exact interval arithmetic (2610.39078; close to card 2012); Gordon, unknotting surfaces in S⁴ undecidable for genus ≥18 TOP / ≥19 PL (2610.36331); auditable dating of the Babylonian Astronomical Diaries, 626 BCE–AD 75 (2610.34297); maximum matching in n^(2+o(1)) (2610.40591); Laczkovich's Lipschitz mapping problem solved (2610.38834); Petty conjecture in dimension 5 (2610.39967); He–Liu–Yau homotopy 9-spheres (2610.33474; follows card 2415); Balko's Harary–Hill exposition (2610.34444; card 2020 already covers the result); Murty–Simon conjecture, first bound found by an AI (2610.39032); Andreadakis conjecture disproved (2610.36302); Maxwell's equations universal for sparse linear algebra (2610.38913); five-species Hofbauer–Kon–Saito counterexample (2610.38374); FO3 / calculus of relations undecidable with one binary relation (2610.35770); JT gravity from random flat disks (2610.40645); dodecahedral Pythagoras tree (2610.33975); 120-cell stellation dissection (2610.38369); DLA shape exclusion (2610.37625); Fuglede over F₂⁸ (2610.36417); view-obstruction D6 = 107/312, D7 = 73/180 (2610.37711); Nambu fluid notes (2610.36275); 5-VAS reachability PSPACE-complete (2610.40012); HORS tree equivalence undecidable (2610.39678); frieze patterns (2610.35968); optical vortex catastrophes (2610.37615); mutation-acyclicity in rank 4 (2610.36179); plus eight weaker shortlist items.

## Suggestions (human-gated, not applied)
- The 2026-10-29 Curiosity slot did not fire; this run widened its window to cover it. Worth checking the routine's run history.
- Card 2020 (Harary–Hill) could gain a `see`/note pointing to Balko's exposition (2610.34444). That is an existing-card fix, so it is suggested only.
- Cross-daypart picks: the max-plus connectome (2474) and the fly connectome simulation (2610.33881) for a Craft or Frontier look at semiring array primitives; the Babylonian Diaries dating pipeline (2610.34297) for a Frontier run on provenance-first agent pipelines.
- Carry-over: add math.DG, math.AP, math.SG, math.GT, math.MG and cond-mat.soft to Curiosity's categories in `radar/dayparts.yaml` (four of today's six keepers came from them); add an "ai-assisted-proof" topic slug to `radar/topics.yaml` (used on 2470).

## Validation
- All six cards have every required section including `## Links`; `see` stems resolve to existing cards.
- `seeds/app` `tsx scripts/pack-cards.ts` packed 2475 cards cleanly.
