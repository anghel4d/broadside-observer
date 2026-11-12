# Radar run — Curiosity — 2026-11-13

- Fired 2026-11-13 00:13 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `7234f8d` (2570 cards, max rank 2570). Branch `radar/curiosity-2026-11-13`.
- Window: arXiv `/new` listings (new + cross-lists, replacements excluded) for Wednesday 11 Nov 2026, the first listing after the previous Curiosity window (Mon 9 + Tue 10 Nov). At poll time `/new` still showed Wednesday's listing. Archives/categories: math (all), q-bio, nlin, physics.class-ph, physics.bio-ph, cond-mat.soft, cond-mat.stat-mech, cs.CG, cs.FL, cs.DM, physics.hist-ph, physics.pop-ph, physics.flu-dyn, physics.optics.
- Web: Quanta archive (latest ~10 articles, origins-of-life series), general web search for November 2026 maths/physics/biology results (Physics World, Science, Scientific American, ScienceDaily, MPI Biophysics).
- arXiv API (`export.arxiv.org/api/query`) returned HTTP 500 on every retry; listing pages were used instead. Status: ok (listing pages), API failed.

## Funnel
- Polled 571 (557 arXiv entries + 14 web items) → 570 unique after dedupe against seen.json, card titles/arXiv ids and summaries (1 arXiv already seen) → strict shortlist 30 (26 arXiv + 4 web) → keepers 4 (4/30 = 0.13, under the 0.15 cap).

## Keepers
- 2571 Unilluminable rooms — de Winter, Tokarsky (2611.13226): the 12-sided pinwheel is the unique smallest hole-free lattice room with an invisible point; two mutually invisible points need 24 sides (12 rooms), down to 16–22 with posts/partitions/pinched holes. Score 8.
- 2572 Nonreal-root closure connected exactly at pronic heights — Espigulé (2611.14517): connected iff \(h=q(q-1)\); infinitely many components at density-one heights; confirms Shmerkin–Solomyak at height 2 (tribonacci). Score 7.
- 2573 Real-space imaging of Thomson charge configurations — Pohl … Wales, Yang, Scheier (PRL 137, 183001; doi:10.1103/qby4-bm6q): gold-tagged charges on superfluid He droplets match Thomson minima for N=5–36; five-fold defects at large N. Score 7.
- 2574 OpenAI's Lean construction of 4D quantum Yang–Mills (github yang-mills-group/OpenAI-YM-20261028, released 10–11 Nov 2026): Wightman QFT as scaling limit of Wilson lattice gauge theory, validated by the Gross committee; no mass gap, no uniqueness. Score 8.

## Near misses (recorded in seen.json `curiosity_2026_11_13_near_keepers`)
- LLM-assisted ropelength bounds (2611.14234), attention as Kuramoto synchronisation of a receiver (2611.13146), 500k weighted-dice rolls (2611.13149), Frege's election method as a piecewise translation with Farey geometry (2611.13996), no 13-vertex triangulation of the 3-torus (2611.14367), Berry phase/Hannay angle as Taylor coefficients of minimal action (2611.13702), Thales's theorem in higher dimensions (2611.14277), ruptoblasts (Science, doi:10.1126/science.aen0894).

## Notable rejects
- "On the proof of Falconer distance conjecture" (2611.13789): graduate-level rewrite of OpenAI's proof; topic already covered by card 1930 — better as a Link on 1930.
- Erdős similarity problem "in the large" (2611.14056): neighbour of card 1941; better as a Link there than a new card.
- Supercritical Ten Martini (2611.13068), Erdős–Mahler counterexample (2611.13604), buckling-ratio counterexamples (2611.13018), Erdős–Straus exponent 3/4 (2611.14167): strong results but no bridge or picture for this lane.
- Hair-follicle patterning by chemotaxis (PNAS, via ScienceDaily): lovely, but the primary paper URL was not verified this run.

## Suggestions (human-gated, not applied)
- Add 2611.13789 as a Link on card 1930 and 2611.14056 as a Link on card 1941.
- Route 2611.13146 (attention as a radio head) to a Frontier run; it is an agents/architecture idea disguised as nlin.AO.
- Carry-over: register math.MG, math.GT, math.CV, cond-mat.soft, physics.bio-ph and cs.FL as Curiosity categories in `radar/dayparts.yaml`; register Quanta / Physics World as a Curiosity web source in `radar/sources.yaml` (two of four keepers this run came from outside arXiv).
- arXiv API was returning HTTP 500; listing-page parsing worked as a fallback.

## Validation
- Cards 2571–2574 all have `## One-sentence takeaway`, `## Why it's lovely`, `## Key ideas`, `## Caveats` and `## Links`. arXiv, GitHub, KITP, Innsbruck, Physics World and Scientific American links return HTTP 200. APS abstract/PDF/DOI return 403 to scripts (publisher block) but were confirmed through search results. The Tokarsky 1995 DOI in card 2571's cites was checked against Crossref.
