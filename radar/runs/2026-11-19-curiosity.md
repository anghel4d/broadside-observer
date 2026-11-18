# Radar run — Curiosity — 2026-11-19

- Fired 2026-11-18 23:54 Europe/Bucharest (16:54 America/Toronto) for the 2026-11-19 00:00 slot; odd date / 00:00 → Curiosity, matching the rotation in `radar/dayparts.yaml` and the run log sequence (… 11-17 curiosity, 11-17 craft, 11-18 archive, 11-18 frontier). Starting main `4944c43` (2635 cards, max rank 2635; open PRs add no cards). Branch `radar/curiosity-2026-11-19`.
- Window: arXiv `/recent` listings (new + cross-lists) for Tue 17 Nov and Wed 18 Nov 2026, the two announcements after the previous Curiosity window (Mon 16 Nov). Categories: math (all), q-bio, nlin, physics.class-ph, physics.bio-ph, cond-mat.soft, cond-mat.stat-mech, cs.CG, cs.FL, cs.DM, cs.GR, physics.hist-ph, physics.pop-ph, physics.flu-dyn, physics.optics, physics.ed-ph, astro-ph.EP. Status: ok. Abstracts via the arXiv API id_list; keeper PDFs read (intro, acknowledgments, references); citation DOIs checked against Crossref. No web sources this run.
- Cursor: listing-day based; before = Mon 16 Nov 2026 listing, after = Wed 18 Nov 2026 listing.

## Funnel
- Polled 1573 arXiv entries (1062 Tue + 511 Wed) → 1568 unique after dedupe against seen.json, cards and summaries (5 already seen) → title hand-scan of all 1568 → strict shortlist 44 (abstracts read) → keepers 6 (6/44 = 0.136, under the 0.15 cap).

## Keepers
- 2636 A proof of the Reinhardt conjecture — Xue (2611.21470): the smoothed octagon packs worst among centrally symmetric convex disks; 472 pp, computer-verified case elimination, AI-assisted per acknowledgments. Score 9.
- 2637 A Proof of Stein's Equidissection Conjecture — Krachun (2611.20240): no balanced polygon has an odd equal-area triangulation; Monsky's theorem in full generality. Score 8.
- 2638 A Universal 8-Vertex Origami Torus Triangulation — Doyle, Lander, Schwartz, Trettel (2611.21909): one 8-vertex (16-triangle) pattern folds every flat torus; 7 is impossible. Score 8.
- 2639 Why do continual physical learners need sleep? — Elmeligy, Pashine, Schwarz (2611.22070): conserved capacity + polarization budget in spring networks; offline repair beats online repair. Score 8.
- 2640 Thouless's bandwidth conjecture: a proof by elliptic periods — Zhao (2611.19723): q·bandwidth of the Hofstadter butterfly → 32G/π uniformly. Score 8.
- 2641 Up or down at every integer — Vasilyev (2611.20344): Collatz as a subgraph of the up-down graph; log₃2 threshold; removing 1/8 of the integers makes convergence provable. Score 7.

## Near misses (recorded in seen.json `curiosity_2026_11_19_near_keepers`)
- Deepest pairs of points not as deep as conjectured, 3/14 (2611.19600); Golomb rulers with real marks = integer optima up to n=10 (2611.22656); iterated Steiner symmetrization converges in shape (2611.21167); spiking-neuron λ-calculus β-reduction (2611.23182); hidden symmetries and echolocation (2611.20007); Grad's-conjecture counterexamples of any knot type (2611.21574); knitting the Ising transition (2611.19317); guest-star candidates from Chinese lunar-occultation records (2611.22800); max sets for 16 SET cards is 26 (2611.18722); large caps in F₃⁹/F₃¹¹ (2611.19543); Erdős' last equation ×2 (2611.20783, 2611.20799); associahedra are 8-colourable (2611.19659); round spheres minimize tangent-point energies (2611.22920); Cassini's oval vs Kepler's ellipse (2611.21336); Klarner's sequences have density 0 (2611.22034); colour through time in Western painting (2611.23139); recursive cell-division metamaterials (2611.19957); Odd Shift not sofic d≥3 (2611.21008); non-invertible QCA (2611.22928); exposition of OpenAI's no-separable-quotient space (2611.21328); Frege's Grundgesetze logic is nonclassical (2611.19892); plus 16 more listed in seen.json.

## Notable rejects
- Bulk of math.AP/AG/NA/OC/PR/ST, optics, flu-dyn, astro-ph.EP and q-bio: technical or incremental, no sparkle for this slot.

## Suggestions (human-gated, not applied)
- Route 2611.23182 (spiking λ-calculus) and 2611.22656 (exact-certificate Golomb search) to a Craft/language run; 2611.19892 (Frege nonclassical) and 2611.21336 (Cassini oval; pairs with card 1845) to an Archive run.
- Add 2611.21328 as a Link on any card covering OpenAI's separable-quotient result if one is minted.
- Carry-over: register extra Curiosity categories actually polled (math.MG, math.GT, cond-mat.soft, physics.bio-ph, cs.FL, cs.DM, cs.GR) in `radar/dayparts.yaml`.
- `radar/state.md` says not to add cheap-filter rejects to seen.json, while recent runs add the strict shortlist (keepers + near keepers); worth stating that convention explicitly.

## Validation
- Cards 2636–2641 each have `## One-sentence takeaway`, `## Why it's lovely`, `## Key ideas`, `## Caveats` and `## Links`.
