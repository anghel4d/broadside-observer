# Curiosity radar — 2026-08-15

Daypart: **Curiosity** (odd calendar date, 00:00 Europe/Bucharest).
Repo: anghel4d/broadside-observer `main` (**1022** cards; last frontier 1013–1022 merged as 3dcc97d / PR #26). Next rank **1023+**. Never reuse 1–1022.

Intent: lovely or surprising work that may not look immediately on-mission — maths, physics, biology, art, odd algorithms — chosen because M. Anghel would enjoy them, with a short "why you might love this" bridge back to Broadside / Anoptic / ano when there is one.

- keep_rate: **0.15 HARD CAP** (stricter than Frontier)
- recency: flexible (gems of any recent-or-classic date if not already in the library)
- topic_clusters: curiosity, agents, language, engine
- source_bias: arxiv, openreview, acl-anthology, papers-with-code
- extra_arxiv_categories: math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG
- notes: Lower keep rate; prioritize delight + intellectual sparkle. Cap 15%. Zero keepers allowed after a real sweep.

Do **not** run Frontier (what's new) or Archive (historical PLT/graphics pantheon) as the primary lens. A beautiful old paper is OK if lovely and missing. Do **not** redo last night's Archive keepers (1001–1012) or the pantheon.

## Sweep (real pool)

Sources actually polled:

- **arXiv RSS** (Atom API timed out; RSS used instead: `https://rss.arxiv.org/rss/{cat}`) — cats: math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG, plus math.MG, cs.PL, cs.FL, nlin.PS, cs.LO, cs.GR, nlin.AO, math.AT, cs.SC, cs.DM, q-bio.TO/QM/MN, nlin.CG, cs.CL, math.HO, physics.bio-ph.
  - **344** unique RSS entries on disk (`raw/rss_pool.json`).
- **Targeted classics / misses not in RSS** (abs-read, then keep or skip): Hat einstein `2303.10798`, Discrete Exterior Calculus `math/0508341`, string-diagram critical pairs `2603.09433`.
- **Fetch unique:** 344 + 3 = **347**.
- **OpenReview / Papers with Code / ACL Anthology** — not used as a harvest (PwC/OpenReview historically 403 or non-JSON from this box; ACL not a firehose for this daypart). arXiv RSS + abs reads carried the cycle.
- Corpus dedupe against GitHub `main`: `radar/seen.json` + `seeds/INDEX.md` + `seeds/cards/*.md` (1–1022). Local clone is stale (~999); GitHub main is source of truth.

RSS already in seen: **4**. CL-only (cs.CL without other cats): **139**. Dirt-title regex (CA combinatorics cute-not-cream, quantum Turing patterns, whale/orca, neutrino ORCA, black-hole lockstep, 2026 agent-memory sludge, speculative-decoding clones, survey tail, manuals): **26**. Leftover after seen/CL/dirt: **200**.

Strict curiosity cheap filter (CT/PL/LO/CG/GR/FL/AT/CO-words/DS/PS/class-ph/MG visual maths + keyword cream; domination/Ramsey already dropped): **79 RSS + 3 targeted = 82**.

Keepers: **7** (keep rate **7/82 = 0.085**, hard cap **0.15**). No padding.

Dirt ban honoured: no CA combinatorics cute-not-cream, no quantum Turing patterns, no whale/orca bioacoustics, no neutrino ORCA, no black-hole lockstep, no 2026 agent-memory sludge, no speculative-decoding clones, no survey tail, no manuals. Previous Curiosity (2026-08-13) CA/Turing-pattern keepers not reminted.

## Keepers

| # | Year | Title | Why you might love this | URL |
|---|-----:|-------|-------------------------|-----|
| 1023 | 2023 | An aperiodic monotile | Hilbert 18th closes with a 13-sided einstein; H/T/P/F substitution is a production system WFC/MarkovJunior approximate | https://arxiv.org/abs/2303.10798 |
| 1024 | 2025 | Sturmian lattices and Aperiodic tile sets | Combinatorics-on-words → Ammann-bar grids → infinitely many aperiodic tile sets; aperiodicity = quadratic vs line | https://arxiv.org/abs/2506.19362 |
| 1025 | 2026 | On the sphere spectrum from the viewpoint of linear logic | Γ-sets: smash = ⊗, substitution = ⅋, sphere spectrum as common unit; Lydakis assembly = mixor | https://arxiv.org/abs/2608.13012 |
| 1026 | 2026 | Complete Diagrammatic Axiomatisations of Relative Entropy | Complete quantitative string-diagram axioms for KL/Rényi; chain rule as implication | https://arxiv.org/abs/2603.04530 |
| 1027 | 2026 | A Critical Pair Enumeration Algorithm for String Diagram Rewriting | Automates Bonchi confluence via two-fold hypergraph gluing; Haskell PoC | https://arxiv.org/abs/2603.09433 |
| 1028 | 2005 | Discrete Exterior Calculus | Missing classic: circumcentric dual DEC for Anoptic meshes / radiance as forms | https://arxiv.org/abs/math/0508341 |
| 1029 | 2026 | A Rig of Transformations | ADTs as commutative rig; isos compile to layouts; partial isos for padding — ano/ECS/SoA | https://arxiv.org/abs/2608.12409 |

## Mix

4 maths-foundations / 2 languages / 1 graphics. No agents this cycle (Frontier already took the 48h agent firehose). Two missing classics (hat, DEC) + five recent sparkle papers; not Archive pantheon redo.

Cite-id audit after abs/search: Spivak–Srinivasan is `2407.01849` (not 2403.05711); Connes–Consani is `2004.08879` (not 1906.10668); Fritz et al. Markov categories is `2010.07416` (library card 944; not 2012.08393); Choudhury–Karwowski–Sabry is `2110.05404` (not 2109.03981). Cards 1025 / 1026 / 1029 patched.
