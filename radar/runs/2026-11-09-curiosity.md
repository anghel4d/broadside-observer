# Radar run — Curiosity — 2026-11-09

- Fired 2026-11-09 00:16 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `58c5d29` (2529 cards, max rank 2529). Branch `radar/curiosity-2026-11-09`.
- Context: the scheduled runs between archive 2026-11-06 and this one (frontier 11-06, curiosity 11-07, craft 11-07, archive 11-08, frontier 11-08) left nothing on main; the most recent was marked failed with unknown cause. This run restarts from `origin/main`.
- Window: arXiv API, submittedDate 2026-11-03 18:00 to 2026-11-06 20:00 UTC (the Thu 5 and Fri 6 Nov listings plus the late tail of Wed 4 Nov), cross-lists included, in math.CO, math.CT, math.DS, physics.class-ph, q-bio.{PE,NC,QM,CB,MN}, cs.CG, math.MG, math.GT, math.DG, nlin.PS, nlin.AO, cs.FL, math.HO, cond-mat.soft, physics.bio-ph, math.AT, math.NT, math.PR, physics.pop-ph, physics.hist-ph. cs.CG polled without rate limiting this time. Quanta Magazine RSS since 5 Nov: one new item ("A Strange Quantum Theorem Has Killed Einstein's Reality", 6 Nov), rejected because it is journalism with no primary paper in the window.

## Funnel
- 433 candidates (432 unique arXiv + 1 Quanta) → 431 not in seen/cards/summaries → strict shortlist 25 → abstracts read for all 25, full text read for 3 → keepers 3 (3/25 = 0.12, under the 0.15 cap).

## Keepers
- 2530 Largest-Angle Bisection and Statistical Regularization of Triangle Shapes — Michaud (2611.06492): LAB is a two-generator piecewise projective system; every branch that switches children infinitely often converges to the right-isosceles shape (Hilbert-metric Lyapunov function), so a random branch does so almost surely. Mesh-refinement bridge.
- 2531 A diameter-one set in R^5 that cannot be covered by six diameter-one balls — Arman, Bondarenko, Prymak, Radchenko (2611.08198): the Veronese RP² gives \(g_5\ge7\) via twelve spherical ellipses → twelve pentagons (Euler) → area contradiction; a dodecahedron gives a six-piece Borsuk partition. The example was found with AI tools. See 2012.
- 2532 Using topology to reveal all mutually unbiased bases in dimension six — Cárdenes Wuttig, Tindall (2611.06917): connectedness of non-Tao order-six Hadamards plus 2,775 interval-certified phase balls classifies all MUB triples in \(\mathbb{C}^6\) and independently proves no four MUBs exist. Lean-formalised core; agent-assisted. See 2121.

## Near misses (recorded in seen.json `curiosity_2026_11_09_near_keepers`)
- Full Kolakoski shift is topologically transitive (2611.06878), medial model of fibre contacts from clasps to knits (2611.05688), Tusnády's problem resolved (2611.06998), unconditional coNP 3-sphere recognition via quasi-RH (2611.06705), uniqueness of hexagonal-lattice universal optimality (2611.06278), emergent shear+boost symmetry in constant-density flocks (2611.07771), odd capillarity (2611.06882), trained bacterial cell wall guiding behaviour (2611.07112), waterbomb origami closed form (2611.08050), small 5-chromatic unit-distance graphs with DRAT proofs (2611.06269), transformers generating 3-manifold triangulations (2611.07514), happy-edge conjecture counterexamples (2611.05300).

## Notable rejects
- Certified de Bruijn–Newman bound \(\Lambda<0.156821\) (2611.06245): striking claim, but the certificate design was hard to assess from the abstract and the claimed improvement is large; worth an expert look before carding.
- Polylogarithmic Gyárfás–Sumner (2611.06699) and the stable-matching count bounds (2611.06604, 2611.06494): strong results, but they are extremal combinatorics with no "lovely" hook for this lane.

## Suggestions (human-gated, not applied)
- Carry-over: register math.MG, math.GT, math.DG, cond-mat.soft and physics.bio-ph as Curiosity categories in `radar/dayparts.yaml`. Two of this run's three keepers came from math.MG and quant-ph cross-lists. Consider quant-ph (cross-list only) and math.NT/math.PR too.
- Carry-over: add Quanta Magazine as a registered Curiosity source in `radar/sources.yaml`.
- Poll by submittedDate through the arXiv API, as here, so each Curiosity run covers every listing since the previous run. After a gap of failed runs this avoids silently skipping days.
- 2611.07514 (transformer scaling laws on 3-manifold triangulations) and 2611.06269 (DRAT-certified colourings) would suit a Frontier slot on AI and SAT-assisted maths.
- 2611.06878 (Kolakoski) follows the 2610.02262 near-miss; if a third Kolakoski paper appears, mint one card for the thread.

## Validation
- Cards 2530–2532 have every required section including `## Links`; all URLs return HTTP 200.
- `seeds/app` `tsx scripts/pack-cards.ts` packed 2532 cards cleanly.
