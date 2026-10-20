# Radar run — Curiosity — 2026-10-21

- Fired 2026-10-21 00:15 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `6bbbafa` (2365 cards, max rank 2365). Branch `radar/curiosity-2026-10-21`.
- Window: arXiv listings of Mon 19 Oct and Tue 20 Oct 2026 (the last Curiosity run, 2026-10-19 00:20, came before Monday's listing). The arXiv export API timed out, so the `/list/<cat>/pastweek` pages were read instead.
- Categories (18): math.CO, math.CT, math.DS, math.GT, math.NT, math.LO, math.PR, math.HO, physics.class-ph, physics.bio-ph, physics.pop-ph, q-bio, nlin.AO, nlin.PS, cond-mat.soft, cs.CG, cs.DM, cs.FL. Deduped against seen.json (arxiv ids) and card text; 2610.25047 (Lovett) was already card 2345 via ECCC.

## Funnel
- Raw unique unseen entries 588 (all titles read) → strict shortlist 38 (abstracts read; first pages of the 5 keepers read) → keepers 5 (5/38 ≈ 0.13, under the 0.15 cap).

## Keepers
- 2366 Proof of the Erdős–Szemerédi sunflower conjecture — Bucić, He, Lee (2610.26686): k-sunflower-free families have size ≤ (2 − 1/(16k³))ⁿ for every k ≥ 3, via an interpolated local function extending Naslund–Sawin's slice-rank argument.
- 2367 Near optimal gap in the Lonely Runner Conjecture — Hu, Jing (2610.23790): ML(V) > (1 + c)/(2n), first constant-factor improvement over the union bound; candid AI statement (ChatGPT 6 helped, couldn't do it alone).
- 2368 The Heesch number in E^3 is unbounded — Bašić (2610.24281): explicit polycubes with bumps and nicks surrounded ≥ h times without tiling.
- 2369 Autonomous AI discovery on the Busy Beaver frontier — Google DeepMind (2610.22603): Gemini agent conjectures Collatz-like accelerations and proves them in Lean; 11 new BB(6) "Cryptids".
- 2370 The square achievement game on n × n boards — Reid (2610.22410): first player wins iff n ≥ 5; one plus-shape rule wins every n ≥ 6; Lean 4 formalization.

## Near misses (recorded in seen.json `curiosity_2026_10_21_near_keepers`)
- Optimal single-track Gray codes from necklaces (Lean-checked, primes ≤ 47); 8/9 of zeta zeros simple or on the critical line (Cobeli–Zaharescu); Arias de Reyna's human exposition of Claude's 2/3 theorem (better as a `cites` addition to card 1198, human-gated); maximum Hamiltonian cycles in tournaments (GPT-5.6-found proof); strong Erdős–Frankl–Füredi cover-free conjecture; flag-algebra crossing numbers of K_{n,n} (pre-OpenAI state, relates to card 2020); planar conflict-free colouring needs four colours; Fuglede in F_2^7; Puzznic PSPACE-complete; geometric triangulation counterexample; LLM evolution in a simulated market; fractal forcing of turbulence by settling particles.

## Validation
- All five cards carry One-sentence takeaway, Why it's lovely, Key ideas, Caveats and `## Links` (`grep -L '^## Links'` empty); `see` stems exist; prefixes 2366–2370 new and dense; cited arXiv ids and DOIs checked against arXiv/Crossref.
- `seeds/app` `tsx scripts/pack-cards.ts` run locally: packed 2370 cards · 38 lineage docs with no errors.
