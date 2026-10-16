# Radar run — Curiosity — 2026-10-17

- Fired 2026-10-17 00:21 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `b85634b` (2320 cards, max rank 2320). Branch `radar/curiosity-2026-10-17`.
- Feeds: arXiv `/list/<cat>/new` + `/list/<cat>/recent?show=2000` across the same 50 curiosity categories as 2026-10-15 (maths incl. math.CT/CO/DS/HO/MG/GT/NT/PR, cs theory/CG/FL/LO/GR/PL/NE/SD/DS/DM/CC, physics.class-ph/flu-dyn/bio-ph/soc-ph/hist-ph/pop-ph, cond-mat.soft/stat-mech, nlin, q-bio). **100/100 listing pages 200**, no 429s this time. Missing abstracts on `/list` pages back-filled from arXiv abs pages.
- Window: every id not in the 2026-10-15 curiosity harvest and ≥ 2610.14000 (i.e. the Thu 15 + Fri 16 Oct announcements); deduped against seen.json (ids, titles, near-keepers), card text, INDEX and summaries.

## Funnel
- Raw 4585 → unique 3271 → fresh 3195 → in window 832 (all titles read) → strict shortlist 49 (abstracts read; 7 full PDFs read) → keepers 6 (6/49 ≈ 0.122, under the 0.15 cap).

## Keepers
- 2321 2610.20297 Simple, Faster (min, +) Matrix Multiplication and APSP — Saha–Ye, Õ(N^2.9964) deterministic; completes the BGSV phased approach with the Alman–Vassilevska Williams thin-product theorem. The AV26 breakthrough (2610.06783), held on 2026-10-07 as too good to trust, now has two independent follow-ups (this + Karingula–Lovett ECCC TR26-247), so it is cited here.
- 2322 2610.20079 Undirected Network Coding and Faster External-Memory Integer Sorting — Li–Li conjecture counterexample turned into the first sort that beats the Aggarwal–Vitter comparison I/O bound (ε = 1.8e-11); Lean-verified. Cites the two earlier Li–Li refutations (2610.09367, 2610.10108; the latter held on 2026-10-13).
- 2323 2610.21511 Imaginary quadratic fields of class number at most 2000 — Kimura; explicit, Lean-checked version of OpenAI's Siegel-zero exclusion (card 1863) → 16,453,493 fields unconditionally. Kerr's simpler proof (2610.21099) and Banks's exposition (2610.15483) folded in as cites.
- 2324 2610.20569 Droplets obstruct Onsager-type solutions of the Ising model in a magnetic field — free energy is differentially transcendental at almost every field, every d ≥ 2.
- 2325 2610.19585 A short open space curve of unit width — Zalgaller's 1994 L3 is not unit width; new curve of length 3.9051241622…, interval arithmetic + Lean.
- 2326 2610.19193 A Bounded-Defect Construction for the Mondrian Art Problem — defect 280 for an infinite Pell family (n = 315, 106785, …); radar re-verified the first four members in exact arithmetic (tiling, non-congruence, defect 280).

## Near misses (recorded in seen.json `curiosity_2026_10_17_near_keepers`)
- Big results cut for balance: Subset Sum in almost-linear time (2610.20742), 6D Tarski Θ(log³ n) (2610.21785), classical homotopy category is cartesian closed (2610.20428), 86 unknowns for H10 over Q (2610.20691, builds on OpenAI card 1864), measurable = ordinary chromatic number of R³ (2610.18907, uses an OpenAI theorem), Gauss circle exponent 209/670 (2610.21730), Thorp shuffle d^{5/3} (2610.18884), Kerr's simpler Siegel-zero proof (2610.21099; folded into 2323).
- Lovely but cut: perfect 1-factorizations of K_92 (2610.20408), undertile crystallization (2610.20663), shaking tangles (2610.19480), 4,577 improved spherical codes (2610.19988), min-autocorrelation 0.41038 Lean-certified (2610.18888), Isaac's Condition (TU) false (2610.21899), Schwarz P/D exact areas (2610.22013), all-temperature 2D superfluidity (2610.20717), two-level poset game PSPACE-complete (2610.19558), Kuramoto 11/16 → 0.6929 (2610.21271), exotic R⁴ from two thickened circles (2610.19263), denser-than-crystal ellipse packings (2610.20953), undecidable problem in dynamics (2610.22123), Schrödinger's unpublished hidden-variable model (2610.20752), Mpemba rule of thumb (2610.19870).
- Better as Craft cards: time-reversible pairwise timestepping MTR for N-body (2610.22007; C code), VoroDuce GPU Voronoi simplification (2610.21811), continued-fraction ladder networks for acoustic impedance (2610.20371), tree edit distance near-linear (2610.22250), Restless Guards for polyominoes (2610.21793).
- Better as Frontier/agents: LMs share a readout bottleneck in working memory (2610.21176), mechanical verification for agentic autoformalization (2610.20573).

## Validation
- All six cards carry One-sentence takeaway, Why it's lovely, Key ideas, Caveats and `## Links` (`grep -L '^## Links'` empty); `see` stems exist; prefixes 2321–2326 new and dense.
- `seeds/app` `tsx scripts/pack-cards.ts` run locally: packed 2326 cards · 38 lineage docs with no errors.
