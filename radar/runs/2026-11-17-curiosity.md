# Radar run — Curiosity — 2026-11-17

- Fired 2026-11-16 23:47 Europe/Bucharest for the 2026-11-17 00:00 slot (scheduler runs up to 15 min early); odd date / 00:00 → Curiosity. Starting main `d947381` (2612 cards, max rank 2612). Branch `radar/curiosity-2026-11-17`.
- Window: arXiv `/new` listings (new + cross-lists, replacements excluded) for Monday 16 Nov 2026, the first listing after the previous Curiosity window (Fri 13 Nov). Tuesday's listing was not yet out at run time. Archives/categories: math (all), q-bio, nlin, physics.class-ph, physics.bio-ph, cond-mat.soft, cond-mat.stat-mech, cs.CG, cs.FL, cs.DM, physics.hist-ph, physics.pop-ph, physics.flu-dyn, physics.optics, astro-ph.EP, physics.ed-ph. Status: ok. No web sources this run.

## Funnel
- Polled 414 arXiv entries → 413 unique after dedupe against seen.json (1 already seen) and library grep → strict shortlist 33 → keepers 4 (4/33 = 0.12, under the 0.15 cap).

## Keepers
- 2613 Smale's mean value constant (1981) equals 4 — Goel (2611.17373): sup K(d) = 4, so Smale's 4 cannot be lowered to the conjectured 1; Lean 4 formalized. Score 8.
- 2614 The Ulam sequence grows subexponentially — Kravitz (2611.17584): u_n = e^{O(√n)}, first subexponential bound; abstract says the proofs are due to ChatGPT. Score 8.
- 2615 Certificates of Immortality for Gliders on the Hat and Spectre Tilings — Edmond (2611.17569): finite closure certificates prove the card-1843 gliders live forever. Score 8.
- 2616 The four-dimensional Borsuk number is five or six — Chalmers (2611.17375): six pieces always suffice in R^4 (was seven); Lean formalized. Score 7.

## Near misses (recorded in seen.json `curiosity_2026_11_17_near_keepers`)
- Petty's polar projection problem solved (2611.17926); Jamneshan–Tao conjecture via nilspace embedding (2611.17567); clamped-plate eigenvalue ratio counterexamples (2611.17606); harmonic-map counterexamples to Eells' conjecture by rigorous numerics (2611.17697); BCC maximizes first Neumann eigenvalue among 3D lattice Voronoi cells (2611.18368); sharp unforced axisymmetric Euler blow-up (2611.18151); TSP instances needing exponentially many SECs (2611.17386); busy beaver shape computations (2611.17742); Ulam floating body pentagonal rigidity (2611.18381); nowhere-zero flow reconfiguration conjecture (2610.40863); HOL in HOL (2611.17884).

## Notable rejects
- Fluids, optics, astro-ph.EP and q-bio tail: applied or incremental, nothing with sparkle beyond the near misses.

## Suggestions (human-gated, not applied)
- Add 2611.17569 as a Link on card 1843 (it closes that card's open question).
- Add 2611.17375 as a Link on card 2012 (Borsuk thread).
- Route 2611.17386 (TSP/SEC pathologies) and 2611.17742 (busy beaver shape computations) to a Craft run; 2611.17884 (HOL in HOL) to an Archive/language run.
- Add 2611.18151 as a Link on the Navier–Stokes/Euler blow-up cards.
- Carry-over: register extra Curiosity categories (math.MG, math.GT, cond-mat.soft, physics.bio-ph, cs.FL) in `radar/dayparts.yaml`.

## Validation
- Cards 2613–2616 each have `## One-sentence takeaway`, `## Why it's lovely`, `## Key ideas`, `## Caveats` and `## Links`.
