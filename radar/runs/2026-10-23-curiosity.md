# Radar run — Curiosity — 2026-10-23

- Fired 2026-10-23 00:13 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `a87d205` (2388 cards, max rank 2388). Branch `radar/curiosity-2026-10-23`.
- Window: arXiv listings of Wed 21 Oct and Thu 22 Oct 2026 (the last Curiosity run covered Mon 19 and Tue 20). The arXiv export API timed out, so `/list/<cat>/pastweek` pages and abs-page meta tags were read instead.
- Categories covered (17): math.CO, math.CT, math.DS, math.NT, math.LO, math.PR, math.MG, physics.class-ph, physics.bio-ph, physics.hist-ph, q-bio, nlin.AO, cond-mat.soft, cs.CG, cs.DM, cs.FL, cs.GR. math.GT, math.HO, physics.pop-ph, nlin.PS and nlin.CG failed with repeated timeouts / HTTP 429 after retries and are not covered this run.

## Funnel
- Raw unique entries 416 → unseen 415 (one already in the library) → all titles read → strict shortlist 37 (abstracts read; first four pages of the 5 keepers read) → keepers 5 (5/37 ≈ 0.135, under the 0.15 cap).

## Keepers
- 2389 Littlewood's mutually touching cylinders: the maximum is seven — Matić, Radoičić, Spomer (2610.26940): no 8 lines in R³ are pairwise equidistant; pair/triple sign patterns plus a ~2·10⁶-node pruned search settle Littlewood's 1968 question at 7.
- 2390 A sporadic simplicial arrangement of 51 lines — Silva (2610.28874): icosahedral 21-line arrangement plus a 30-line orbit with slope √φ; Melchior equality; refutes the 37-line bound and the supersolvability conjecture.
- 2391 Strictly convex ergodic billiards — Fan, Hasselblatt (2610.28247): very asymmetric lemon tables are Bernoulli; first strictly convex ergodic billiard, proving Chen–Mohr–Zhang–Zhang (2013).
- 2392 Coherent differentiation with a monoid of degrees — Ehrhard, Walch (2610.29874): the degree index becomes any commutative partial monoid, giving derivatives, Taylor expansion and finite differences from one construction.
- 2393 ARRIVAL in cube-root subexponential time — Ghorbani, Lopes, Mnich (2610.28241): 2^{O(n^{1/3} log^{2/3} n)} via block pivot guessing and ℓ₁-centerpoint fixed-point search.

## Near misses (recorded in seen.json `curiosity_2026_10_23_near_keepers`)
- A cut-and-project set not bi-Lipschitz equivalent to a lattice (Haynes, answers Burago–Kleiner; strongest runner-up); small covers and the Four Color Theorem; partitionability is NP-complete (Woodroofe); perturbing the Conway sequence (Cloitre); walking a dog in parallel (discrete Fréchet distance); intrinsic curvature and entanglement of elastic rods; acoustically levitated chiral stars; 5D Runge–Lenz vector from the 8D oscillator; finiteness of five-body central configurations; optimal axis-parallel packing of eight squares; counterexample to Gale's conjecture in R³; 93-move crystal-exchange puzzle; cellular sheaf Bochner–Weitzenböck; Gibbs and Einstein in 1902; strict models in HoTT; Janson–Sós conjecture; Kohayakawa–Prömel–Rödl conjecture; temporal exploration via WL colorings; tournament dichromatic number.

## Suggestions (human-gated, not applied)
- Consider adding math.MG to the Curiosity extra arXiv categories in `radar/dayparts.yaml`; the top keeper came from it.
- math.GT, nlin.PS and nlin.CG keep failing on 429s from this box; a slower or staggered fetch for those may be needed.

## Validation
- All five cards carry One-sentence takeaway, Why it's lovely, Key ideas, Caveats and `## Links` (`grep -L '^## Links'` empty); `see` stems exist; prefixes 2389–2393 new and dense. Cites are limited to each paper's own arXiv record.
- `seeds/app` `tsx scripts/pack-cards.ts` run locally: packed 2393 cards · 38 lineage docs with no errors.
