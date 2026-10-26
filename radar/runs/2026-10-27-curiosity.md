# Radar run — Curiosity — 2026-10-27

- Fired 2026-10-27 00:05 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `3aed4c9` (2432 cards, max rank 2432). Branch `radar/curiosity-2026-10-27`.
- Window: arXiv `/list/<cat>/new` listings of Mon 26 Oct 2026 (new submissions + cross-lists; replacements excluded). The last Curiosity run covered Fri 23 Oct; there were no weekend listings.
- Categories covered (42, no failures, no 429s): the same list as the 2026-10-25 run.

## Funnel
- Raw entries 431 → 354 unique new/cross-list ids → 354 unseen → all titles read, about 38 abstracts read (strict shortlist ≈ 38) → first five pages read for 5 → keepers 5 (5/38 ≈ 0.13, under the 0.15 cap).

## Keepers
- 2433 The elastic figure-eight knot is not planar — Miura (2610.32320): a sharp planar lower bound (teardrop–heart) plus a lower-energy 3D competitor shows the elastic knot of every non-torus twist knot is non-planar, disproving the Gilsbach–Reiter–von der Mosel conjecture; the "catapult" shape (≈246.43 vs 252.32) is the new candidate.
- 2434 The space of equators has infinite Hofer's diameter — Polterovich, Shelukhin (2610.31940): a bi-Lipschitz F₂ → Ham(S²) from Floer theory on Sym⁴(S²) settles the 1991 folklore question (McDuff–Salamon Problem 32) and the sphere case of Problem 22; the authors say ChatGPT 6 Astra found the key Strip Lemma and wrote the proofs.
- 2435 A frame-indifferent rank-one convex function in three dimensions which is not quasiconvex — Conti, Dolzmann, Dondl (2610.31886): the first frame-indifferent answer to Morrey's question, a quartic in the strain failing at Id via Šverák's third-order mechanism; Lean 4 formalization by Claude Opus 5.5.
- 2436 Off-diagonal Ramsey numbers of 3-graphs — Gishboliner, Hajebi, Li (2610.32644): R(H, n) is polynomial iff H embeds in the iterated blowup B_t, proving the Conlon–Fox–Gunby–He–Mubayi–Suk–Verstraëte–Yu conjecture (no AI used).
- 2437 Combinatorial Minimum Cost Flow in Almost-Linear Time on Dense Graphs — Haeupler, Jiang, Saranurak (2610.32556): n^(2+o(1)) exact min-cost flow without interior-point methods via a flow-cost-preserving DAG projection; first combinatorial improvement since Goldberg–Tarjan 1987.

## Near misses (recorded in seen.json `curiosity_2026_10_27_near_keepers`)
- Propeller conjecture simplification (Heilman; card 1953 already covers it); Tokareva bent-function counterexample found by LLM agents; Mal'tsev condition for groups is not categorical; LZ77 vs LZ-End log separation; chaos made visible with active particles (Lorenz); uniqueness of veering triangulations (Schleimer–Segerman); Pu inequality / Viterbo with quaternion symmetry; Tverberg partitions beyond prime powers; Dziobek five-body finiteness; sharp Frobenius bound; smallest grammar problem; hook-indexed state calculus for React; Foulon conjecture for Anosov flows; spectrum of the basilica group; chromatic number of the sphere; Erdős distinct subset sums; Zhang stack-sortable; hot spots; banded chaos and time semicrystals; affine higher Bruhat orders; oriented-matroid presheaves; Calabi–Yau/Sullivan minimal surfaces; minimal surfaces in R⁴ with three ends; QuantumBilliards.jl; beyond 3SUM; compressed BMM via bicliques; turbulence in space-time; real Jacobian.
- Shortlisted and rejected: Riemann Ξ via a genus-two curve (2610.32694; not credible on a skim); bisnomials (2610.31865; survey).

## Suggestions (human-gated, not applied)
- Add math.DG, math.AP and math.SG to Curiosity's categories in `radar/dayparts.yaml` (they are already polled ad hoc; three of today's five keepers came from them). math.GT, math.MG and cond-mat.stat-mech carry over from the last run.
- Add an "ai-assisted-proof" topic slug to `radar/topics.yaml`; it is used on cards 2434 and 2435 this run as a free-form tag.
- Cross-daypart picks: RADIANT, feed-forward global illumination (2610.32075), for the next Craft run; PaperFormalizer (2610.31810) for the next Frontier run.

## Validation
- All five cards have every required section including `## Links`; `see` stems resolve to existing cards; `seeds/app` `tsx scripts/pack-cards.ts` packed 2437 cards cleanly.
