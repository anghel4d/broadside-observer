# Radar run — Curiosity — 2026-11-11

- Fired 2026-11-11 00:18 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `17cedfd` (2549 cards, max rank 2549). Branch `radar/curiosity-2026-11-11`.
- Window: arXiv API, submittedDate 2026-11-06 18:00 to 2026-11-10 23:59 UTC (everything announced since the previous Curiosity window, i.e. the Mon 9 and Tue 10 Nov listings), cross-lists included, in math.CO, math.CT, math.DS, physics.class-ph, q-bio.{PE,NC,QM,CB,MN}, cs.CG, math.MG, math.GT, math.DG, nlin.PS, nlin.AO, cs.FL, math.HO, cond-mat.soft, physics.bio-ph, math.AT, math.NT, math.PR, physics.pop-ph, physics.hist-ph.

## Funnel
- 409 unique arXiv candidates → 409 not in seen/cards/summaries → strict shortlist 28 → abstracts read for all 28, full text read for 4 → keepers 4 (4/28 = 0.14, under the 0.15 cap).

## Keepers
- 2550 Pinching an elastic potato chip — Kataoka, Sano (2611.10546): inextensibility makes a saddle shell's mid-surface obey a wave equation along its asymptotic lines, so the pinch "lights" the surface into lit/penumbra/shadow regions that predict lift, sink and rigidity.
- 2551 Two barriers for minimal-time firing squads — Giam (2611.11080): lines agree with the half-line until the right-end echo returns; late-periodicity and non-regularity barriers for any state count, certified-SAT exclusion of four states, and hard constraints on a five-state solution (open since 1987). See 1850.
- 2552 Cube tilings, partition counters, and the Calkin–Wilf and Kepler trees — Grytczuk, Kisielewicz, Przesławski (2611.12239): the piece counter of a cube tiling sums to \(3^d\) on every cube translate and, for the binary lattice, is a row of Stern's sequence that realizes the Calkin–Wilf and Kepler trees; the cyclic profile determines the lattice up to reflections.
- 2553 No regular icosahedron has a rational point on every face — Levit (2611.11577): Galois swap \(\sqrt5\mapsto-\sqrt5\) to \(SO(3,\mathbb{C})\), then 48 exact \(\mathbb{Z}[\varphi]\) certificates checked by the Lean kernel; argument by Codex, formalization by Claude. See 2531, 2532.

## Near misses (recorded in seen.json `curiosity_2026_11_11_near_keepers`)
- Positive sectional curvature on all smooth 13-spheres (2611.10535): potentially major, but too deep to assess from the abstract; worth an expert-reviewed card if it holds up.
- 43-vertex 4-chromatic unit-distance graph of girth 5 (2611.10735), Collatz-type maps with tunable drift (2611.10311), rule-table coordinates for all 262,144 life-like CAs (2611.10969), volumetric plain weaves (2611.12091), sets of reach R are CAT(1/R²) (2611.12468), fractal floating bodies / Zindler curves (2611.11309), computer-assisted 5/6 pinwheel bound for real periods (2611.10624), Bulgarian solitaire with labelled cells (2611.10437).

## Notable rejects
- Gamarnik's human-friendly exposition of the random k-SAT threshold resolution (2611.10139): already covered by card 2090; better as a future addition to that card than a new one.
- Cohomology of finite simple groups is unbounded (2611.11677): disproves Guralnick's conjecture, but the abstract gives no hook for this lane.
- Beating Rytter's bound for CFL reachability (2611.12315): strong PL-theory result; belongs to a Craft or Frontier slot rather than Curiosity.

## Suggestions (human-gated, not applied)
- Add 2611.10139 (Gamarnik's exposition) as a Link on card 2090.
- Route 2611.12315 (all-pairs CFL reachability below \(n^3/\log^2 n\)) and 2611.11645 (Stemma, a shared environment for people and agents doing maths) to the next Craft/Frontier runs.
- Carry-over: register math.MG, math.GT, math.DG, cond-mat.soft, physics.bio-ph and cs.FL as Curiosity categories in `radar/dayparts.yaml`; three of this run's four keepers came from them.

## Validation
- Cards 2550–2553 have every required section including `## Links`; arXiv, OEIS, MathOverflow and GitHub links return HTTP 200 (the Calkin–Wilf DOI returns 403 to scripts from the publisher, but the DOI is as printed in the paper).
- `seeds/app` `tsx scripts/pack-cards.ts` packed 2553 cards cleanly.
