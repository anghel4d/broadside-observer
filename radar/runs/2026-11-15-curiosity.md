# Radar run — Curiosity — 2026-11-15

- Fired 2026-11-14 23:49 Europe/Bucharest for the 2026-11-15 00:00 slot (scheduler runs up to 15 min early); odd date / 00:00 → Curiosity. Starting main `068bafa` (2591 cards, max rank 2591). Branch `radar/curiosity-2026-11-15`.
- Window: arXiv `/new` listings (new + cross-lists, replacements excluded) for Friday 13 Nov 2026, the first listing after the previous Curiosity window (Wed 11 Nov). arXiv `pastweek` shows no separate Thursday 12 Nov listing, so Friday is the only new day. Archives/categories: math (all), q-bio, nlin, physics.class-ph, physics.bio-ph, cond-mat.soft, cond-mat.stat-mech, cs.CG, cs.FL, cs.DM, physics.hist-ph, physics.pop-ph, physics.flu-dyn, physics.optics, astro-ph.EP, physics.ed-ph.
- Web: Quanta archive (latest ~10 articles: origins-of-life series, Barabási interview, quantum reality, AI introspection, cold fusion). Status: ok.

## Funnel
- Polled 1010 (1000 arXiv entries + 10 web items) → 1007 unique after dedupe against seen.json, card titles/arXiv ids and summaries (3 arXiv already seen) → strict shortlist 33 (all arXiv) → keepers 4 (4/33 = 0.12, under the 0.15 cap).

## Keepers
- 2592 A Diophantine definition of ℤ in ℚ — Burungale (2611.16130): human proof that ℤ is Diophantine in ℚ (degree ≤ 4), independent of OpenAI's 2-converse; Mazur's conjecture fails. Score 8.
- 2593 The minimum size of the 3-dimensional torus — Lee, Lim, Nevo (2611.15358): minimal triangulation of T³ has 15 vertices; settles the 1984 Kühnel–Lassmann–Lutz conjecture (closes last run's near miss 2611.14367). Score 7.
- 2594 An O(L³) SHT on L² samples — Khalid (2611.16441): exact minimum-sample spherical harmonic transform, no linear solves, code released. Score 8.
- 2595 Slicing a Doughnut at Random — Finch (2611.15546): Crofton-measure essay on random plane sections of a torus. Score 7.

## Near misses (recorded in seen.json `curiosity_2026_11_15_near_keepers`)
- Sun's 28-unknown version (2611.14605) and Kozachinskiy–Pasten–Vidaux's conditional entry point (2611.17124), folded into card 2592's cites and Links; Kerr uniqueness without analyticity (2611.16853); completely decomposable Jacobian of dimension 1777 beating Ekedahl–Serre 1993 (2611.16963); odd zeta irrationality count (2611.16156); Pólya–Szegő buckling in dims 2–47 (2611.15243); Erdős Problem 521 (2611.16157); Hilbert 17 for symmetric functions undecidable (2611.16690); Kalah PSPACE-complete (2611.17252); Tetris-map GFF for 3D Ising (2611.16943); optimal polyomino fences (2611.16883); great-circle arrangements (2611.15244).

## Notable rejects
- Falconer via descent and chaining (2611.14867) and Erdős similarity exceptional parameters (2611.15734): neighbours of cards 1930/1941, better as Links there.
- "Proof of the Quasi Riemann Hypothesis using Q[i]" (2611.16665): not credible enough to card.
- Quanta origins-of-life series: magazine essays, no primary paper picked this run.

## Suggestions (human-gated, not applied)
- Add 2611.16130, 2611.14605 and 2611.17124 as Links on card 1864 (OpenAI H10 over ℚ).
- Add 2611.14867 as a Link on card 1930 and 2611.15734 on card 1941.
- Route 2611.17252 (Kalah PSPACE-complete) to a Craft or game-ai run.
- Carry-over: register extra Curiosity categories (math.MG, math.GT, cond-mat.soft, physics.bio-ph, cs.FL) in `radar/dayparts.yaml`.

## Validation
- Cards 2592–2595 each have `## One-sentence takeaway`, `## Why it's lovely`, `## Key ideas`, `## Caveats` and `## Links`; `seeds/app` pack-cards packs 2595 cards locally.
