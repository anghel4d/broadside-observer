# Radar run — Curiosity — 2026-11-21

- Fired 2026-11-20 23:58 Europe/Bucharest (16:58 America/Toronto) for the 2026-11-21 00:00 slot; odd date / 00:00 → Curiosity, matching the rotation in `radar/dayparts.yaml` and the run-log sequence (… 11-19 curiosity, 11-19 craft, 11-20 archive, 11-20 frontier). Starting main `87bc041` (2663 cards, max rank 2663; open PRs #128, #93, #47 add no cards). Branch `radar/curiosity-2026-11-21`.
- Window: arXiv `/recent` listings (new + cross-lists) for Thu 19 Nov and Fri 20 Nov 2026, the two announcements after the previous Curiosity window (Tue 17 + Wed 18 Nov). No further announcement is due before Sun 22 Nov 20:00 ET. Categories: math (all), q-bio, nlin, physics.class-ph, physics.bio-ph, cond-mat.soft, cond-mat.stat-mech, cs.CG, cs.FL, cs.DM, cs.GR, physics.hist-ph, physics.pop-ph, physics.flu-dyn, physics.optics, physics.ed-ph, astro-ph.EP. Status: ok; every listing was complete (no "showing first N of M" truncation on either day). Abstracts came from the arXiv API id_list. For each keeper I read the abs page and the PDF (introduction, AI and acknowledgment statements, references), and checked citation DOIs against Crossref. No web sources this run.
- Cursor: listing-day based; before = Wed 18 Nov 2026 listing, after = Fri 20 Nov 2026 listing.

## Funnel
- Polled 1156 arXiv listing entries (cross-list duplicates included) → 1082 unique ids → 1078 after dedupe against seen.json, cards, summaries and run logs (4 already seen: 2611.14056, 2611.24295, 2611.23375, 2611.25838) → title hand-scan of all 1078 → strict shortlist 56 (abstracts read) → keepers 7 (7/56 = 0.125, under the 0.15 cap).

## Keepers
- 2664 An additive-square-free word over an alphabet of size 6 — Shallit (2611.24441): an infinite word over six integers avoids every pair of adjacent equal-length, equal-sum blocks, solving a problem open for more than 50 years; written mostly by GPT 6.2 Astra, with a Lean check. Score 9.
- 2665 Proof of the polygonal Saint-Venant inequality conjectured by Pólya–Szegö — Bogosel, Bucur, Fragalà (2611.24573): the regular n-gon maximizes torsional rigidity among polygons with at most n sides; open since 1951 for n ≥ 5; purely analytic proof. Score 8.
- 2666 A disproof of the van Emde Boas–Kruyswijk conjecture on the Davenport constant — Gao, Geroldinger, Wang, Zeng (2611.24775): D(C_n^r) > r(n−1)+1 for n = 2k, k ≥ 3 odd, r ≥ 8n−7; a four-page explicit construction. Score 8.
- 2667 Sharp topological overlap in every dimension — Norin (2611.26229): c_d^top = c_d^aff = (d+1)!/(d+1)^{d+1}, confirming Bukh–Matoušek–Nivasch; proof found by GPT-6 Astra, Lean-formalized. Score 8.
- 2668 Convexity is overrated: Shortest paths on 4-polytopes are hard to compute — Pak (2611.25164): exact geodesic distance on convex 4-polytope boundaries is NP-hard and SqrtSum-hard, with 2^m equal shortest paths. Score 8.
- 2669 An improved Moore bound for girths seven and eleven — Garbe (2611.26037): excess ≥ (1−o(1))d/8 at girth 7, the first unbounded improvement since 1960; answers Bollobás (1978) and Bermond–Bollobás (1981). Score 7.
- 2670 Relative periodic orbits of a free spinning loop — Tufillaro (2611.23582): rotating waves, 2–5-lobe flappers and period-doubled orbits of the Aitken–Routh sliding loop; chain-of-masses artifacts separated from string physics. Score 7.

## Near misses (recorded in seen.json `curiosity_2026_11_21_near_keepers`)
- Almost all vertex-transitive graphs are Cayley, the McKay–Praeger conjecture (2611.23641); Euclidean Steiner tree APX-hard in O(log n) dimensions, a 30-year question (2611.24611); near-quadratic sample compression for all VC classes (2611.25011); disproof of the El-Zahar–Erdős conjecture (2611.24735); certified pandigital approximations of π, γ, δ, e (2611.25358); linear normal λ-terms with WKB/Airy asymptotics (2611.24442); Goemans unsplittable-flow counterexample anatomy (2611.23244); Condorcet's nontransitive dice, minimal realization (2611.23308); Hauer's 44 Tropen as Z/12 orbits (2611.24158); 1729 the only Carmichael number 2ⁿp³+1 (2611.24275); quasipolynomial pyjamas (2611.26622); optimal radius ratio of compact nonuniform packings (2611.26189); Romik's rationality conjectures for critical percolation (2611.26570); Stanley's Birkhoff-polytope Ehrhart conjecture (2611.25973); Corless's Bohemian-matrix conjecture (2611.25266); no binary [65,9,29] code (2611.24997); no Herman rings for rational maps with ≤3 critical values (2611.25996); 144-periodicity of x₁₅₃,₃ in the 3-primary stems (2611.26621); Schmutz systole conjecture for large genus (2611.24824); van Kármán vortex streets as energy maximizers (2611.26051); where hurricanes get their spin (2611.24476); nematic equilibria on a Möbius strip (2611.26552); camphor-ribbon chimera states (2611.26039); census of ~10 billion alternating tangles (2611.25042); plus 25 more listed in seen.json.

## Notable rejects
- Bulk of math.AP/AG/NT/PR/ST/OC/NA, optics, flu-dyn, astro-ph.EP and q-bio: technical or incremental, with no sparkle for this slot. 2611.26272 (Paper2Lean) and 2611.25174 (Verus-verified SDP solver) are agent/tooling work better suited to Frontier/Craft.

## Suggestions (human-gated, not applied)
- Route 2611.25174 (Claude-generated Verus proofs for a Rust SDP solver) and 2611.26272 (Paper2Lean) to a Craft or Frontier run; route 2611.24442 (λ-term asymptotics) to a language-flavoured Craft run.
- Card 2668 (Pak) could point at card 2359 (fast sweeping eikonal) through a lineage or topic link, since it explains why practical geodesics discretize; it is not in `see` because Pak does not cite it.
- Carry-over: register the extra Curiosity categories actually polled (math.MG, math.GT, cond-mat.soft, physics.bio-ph, cs.FL, cs.DM, cs.GR, nlin) in `radar/dayparts.yaml`.
- Carry-over: `radar/state.md` says not to add cheap-filter rejects to seen.json, while recent runs add the strict shortlist (keepers + near keepers); worth stating that convention explicitly.

## Validation
- Cards 2664–2670 each have `## One-sentence takeaway`, `## Why it's lovely`, `## Key ideas`, `## Caveats` and `## Links`; `seeds/app` `pack-cards` packed 2670 cards with all five sections for each new card.
