# Radar run — Curiosity — 2026-10-25

- Fired 2026-10-25 00:20 Europe/Bucharest; odd date / 00:00 → Curiosity. Starting main `00a164f` (2412 cards, max rank 2412). Branch `radar/curiosity-2026-10-25`.
- Window: arXiv `/list/<cat>/new` listings of Fri 23 Oct 2026 (new submissions + cross-lists; replacements excluded). The last Curiosity run covered Wed 21 and Thu 22 Oct. Also checked Quanta Magazine RSS (5 items) and openai/math commits (nothing new since 12 Oct).
- Categories covered (42, no failures): math.CO, math.CT, math.DS, math.NT, math.LO, math.PR, math.MG, math.GT, math.HO, math.DG, math.AT, math.AP, math.NA, math.GM, math.GR, math.SG, math.RA, math.OC, physics.class-ph, physics.bio-ph, physics.hist-ph, physics.pop-ph, physics.flu-dyn, physics.optics, physics.comp-ph, physics.geo-ph, q-bio, nlin.AO, nlin.PS, nlin.CG, nlin.CD, cond-mat.soft, cond-mat.stat-mech, astro-ph.EP, cs.CG, cs.DM, cs.FL, cs.GR, cs.PL, cs.LO, cs.CC, cs.DS.

## Funnel
- Raw entries 869 (700 unique ids) → minus 171 replacements = 477 new/cross-list → minus 7 already seen = 470 unseen arXiv + 4 unseen Quanta items → all titles read, abstracts read for candidates → strict shortlist 30 → first five pages read for 7 → keepers 4 (4/30 ≈ 0.133, under the 0.15 cap).

## Keepers
- 2413 Non-Uniqueness of Weak Solutions to the Unforced 2D Euler Equations with Vorticity in L1 ∩ Lp, I — Coiculescu (2610.30655): an explicit radial multiscale stack of unstable vortex rings gives two renormalized weak solutions with no force; the unforced counterpart of Vishik's forced non-uniqueness.
- 2414 Permutation classes need not have proper growth rates — Pantone, Vatter (2610.30369): high-girth cubic grid classes (Haar graphs of 2-groups) exploit the 9-vs-<8 spectral gap between cubic graphs and forests; disproves the 2006 conjectures.
- 2415 Positive sectional curvature on exotic spheres in infinitely many dimensions — Galaz-García (2610.31528): an Eells–Kuiper invariant formula for Sperança star spheres gives exotic positively curved spheres in every n ≡ 3 (mod 4), n ≥ 11, n ≢ 255 (mod 256).
- 2416 Conway's thrackle conjecture: a new upper bound of 4/3 n — Simon (2610.31589): Pammer's 2014 ≤12-vertex computation plus a short discharging argument gives m ≤ ⌊4(n−1)/3⌋.

All four papers carry explicit AI-assistance disclosures (Claude Opus 5.5; ChatGPT 5.6/6 variants; GPT-6.1-Sol), which are recorded in each card's Caveats.

## Near misses (recorded in seen.json `curiosity_2026_10_25_near_keepers`)
- Bernoulli geodesic flow on any product of spheres (Burns, Gedeon, Ruan; strongest runner-up, held back because card 2391 already covers Bernoulli billiards this week); S(6) ≥ 537, sixth Schur number improved after 26 years (Chen, Zhu, Long); site/bond percolation thresholds of all 23 396 k-uniform tilings with k ≤ 10 (Elisov); OpenAI partial disproof of Littlewood's L^α-flat theorem (el Abdalaoui); reflection symmetry in 1+N coorbital problems; collinear motions in constant-curvature spaces; Y/X-wave KP soliton modulation; Reflections on Trusting Lean; no perfect randomized composition; a flat geodesic with a periodic asymptote; polytopal substitutions and conformal dimension; algebraic proof of 1-extension; Fuglede in F_2^8 and F_11^3; GW(r;3,3) determined; Landfall Geometry (Kirwan, Nanda); logics vs doctrines mirror symmetry; Pierrehumbert passive scalars; exponent 1/4 in three complexity bounds; probabilistic and game thresholds; reversible IL L4; entropy-production limits in pigeon flocks; compressible Euler implosions with far-field cutoff; ODIL singularity discovery.
- Shortlisted and rejected: "explicit elementary proof of no Landau–Siegel zeros" (2610.30476; extraordinary claim, not credible on a skim); note on Barnette's proof (2610.30490; card 2035 already covers it); detailed-balanced mass action global convergence (2610.30808; follow-up to an existing OpenAI-math card).

## Suggestions (human-gated, not applied)
- Add math.DG, math.AP, math.GT and cond-mat.stat-mech to Curiosity's extra arXiv categories in `radar/dayparts.yaml`; three of the four keepers and the percolation near miss came from them. math.MG is still worth adding (previous run's suggestion).
- Consider adding an "ai-assisted-proof" topic slug to `radar/topics.yaml` (or a lineage): human-led papers with AI-assistance disclosures are now common and distinct from the `ai-generated-math` openai/math family.
- All 42 category pages fetched without 429s this run; the earlier rate-limit issue on math.GT/nlin.* did not recur.

## Validation
- All four cards carry One-sentence takeaway, Why it's lovely, Key ideas, Caveats and `## Links`; `see` stems exist; prefixes 2413–2416 new and dense. Every link was checked for HTTP 200.
- `seeds/app` `tsx scripts/pack-cards.ts` run locally: packed 2416 cards · 38 lineage docs with no errors.
