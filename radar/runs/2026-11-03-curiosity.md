# Radar run — Curiosity — 2026-11-03

- Fired 2026-11-03 00:20 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `8824527` (2496 cards, max rank 2496). Branch `radar/curiosity-2026-11-03`.
- Window: arXiv "new" listing of Mon 2 Nov 2026 (new submissions and cross-lists, replacements excluded) in math.CO, math.CT, math.DS, physics.class-ph, q-bio, cs.CG, math.MG, math.GT, math.DG, nlin.PS, cs.FL, math.HO, cond-mat.soft, physics.bio-ph, math.AT; Quanta Magazine RSS since 30 Oct (one new item, a cold-fusion essay, rejected).

## Funnel
- 169 candidates (168 unique arXiv + 1 Quanta) → 168 not in seen/cards/summaries → strict shortlist 22 → abstracts read for all 22, first four pages read for 3 → keepers 3 (3/22 ≈ 0.136, under the 0.15 cap).

## Keepers
- 2497 Microswimmers lose by swimming selfishly — Alonso (2610.41965): differentiable Stokes solver shows a 1/ℓ influence vs 1/ℓ² incentive asymmetry that makes paired swimming a social dilemma; relatedness recovers the gain.
- 2498 Four runners that are barely lonely — Yi, Gill, Bu (2610.40694): complete four-runner loneliness spectrum below 1/4; 3/14 is the only gap; effective bound 512 plus an exact search of 800,816,099 quadruples. See 2367.
- 2499 The lattice of antichains of intervals — Boldi, Vigna (2610.41385): minimal-interval query semantics is anti-isomorphic to the Dyck-path Stanley lattice; Takács asymptotic confirmed; sweep dimension for posets.

## Near misses (recorded in seen.json `curiosity_2026_11_03_near_keepers`)
- Alspach–Liversidge anti-concentration (2610.40712, the Graham's-rearrangement follow-up the last run suggested), Hedetniemi for Shannon OR-capacity fails (2610.41977), Alon–Krivelevich counterexample (2610.42094), chirality inversion in living rotors (2610.41016), Table Problem for convex domains (2610.41010), F₂⁹ tile without subspace complement (2610.42005), k-out sampling two choices suffice (2610.42067), type classifiers (2610.41941), composing double categories (2610.41551).

## Suggestions (human-gated, not applied)
- Carry-over: register math.MG, math.GT, math.DG, cond-mat.soft and physics.bio-ph as Curiosity categories in `radar/dayparts.yaml`; this run's keepers came from cond-mat.soft and math.CO via those wider polls.
- Carry-over: add Quanta Magazine as a registered Curiosity source in `radar/sources.yaml`.
- Alspach–Liversidge (2610.40712) is a strong pick if a later Curiosity pool is thin.

## Validation
- Cards 2497–2499 have every required section including `## Links`.
- `seeds/app` `tsx scripts/pack-cards.ts` packed 2499 cards cleanly.
