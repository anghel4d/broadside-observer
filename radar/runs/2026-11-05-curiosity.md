# Radar run — Curiosity — 2026-11-05

- Fired 2026-11-05 00:20 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `618de0f` (2516 cards, max rank 2516). Branch `radar/curiosity-2026-11-05`.
- Window: arXiv "new" listing of Wed 4 Nov 2026 (new submissions and cross-lists, replacements excluded) in math.CO, math.CT, math.DS, physics.class-ph, q-bio, math.MG, math.GT, math.DG, nlin.PS, cs.FL, math.HO, cond-mat.soft, physics.bio-ph, math.AT. cs.CG returned "Rate exceeded" twice and was not polled (partial poll). Quanta Magazine RSS since 2 Nov: one new item (AI introspection essay), rejected as Frontier-lane journalism. The Tue 3 Nov listing fell between Curiosity runs and was not polled.

## Funnel
- 171 candidates (170 unique arXiv + 1 Quanta) → 170 not in seen/cards/summaries → strict shortlist 25 → abstracts read for all 25, introductions and model sections read for 3 → keepers 3 (3/25 = 0.12, under the 0.15 cap).

## Keepers
- 2517 The Lovász Local Lemma Is Sharp for the Hat Guessing Number — Delépine, Rosenfeld (2611.04577): clique-join composition of uneven hat games reaches \((e-\varepsilon)\Delta\), so the trivial LLL bound \(e\Delta\) is tight; refutes the \(2\Delta\) conjecture.
- 2518 Trail systems self-organize through individual route optimization — Wallace, Berdahl (2611.04346): least-cost planners on a wearable cost grid grow near-optimal desire-path networks; junction angles track a critical angle from the cost ratio; multiple attractors.
- 2519 How symmetry and complexity shape 3D programmable self-assembly — Agrawal, Bohlin, Louis (2611.05301): 10⁹ random polycube rule sets; shape probability falls exponentially with assembly complexity; symmetry helps only when local rules can reuse it. See 2260.

## Near misses (recorded in seen.json `curiosity_2026_11_05_near_keepers`)
- Automatic partition identities via automata in the quantum plane (2611.04020), Hubbard trees as finite automata (2611.04190), Lehmer's number not an orientable stretch factor in genus six (2611.01350), kissing numbers in dims 32–39 (2611.03682), associahedra 12-colourable (2611.05323), card guessing after riffle shuffles (2611.04339), curriculum unlearning (2611.04565), co-decompositions and FO model checking (2611.04658), hidden symmetries of Kepler (2611.04791).

## Suggestions (human-gated, not applied)
- Carry-over: register math.MG, math.GT, math.DG, cond-mat.soft and physics.bio-ph as Curiosity categories in `radar/dayparts.yaml` (two of three keepers came from q-bio and cond-mat.soft/physics.bio-ph).
- Carry-over: add Quanta Magazine as a registered Curiosity source in `radar/sources.yaml`.
- Consider polling the skipped weekday listing (here Tue 3 Nov) so each Curiosity run covers both days since the previous one; retry cs.CG next run.
- 2611.04020 (automatic partition identities) would suit a Craft or Archive slot on automata-backed proof certificates.

## Validation
- Cards 2517–2519 have every required section including `## Links`.
- `seeds/app` `tsx scripts/pack-cards.ts` packed 2519 cards cleanly.
