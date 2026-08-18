# Curiosity radar — 2026-08-19

Daypart: **Curiosity** (odd calendar date, 00:00 Europe/Bucharest).
Repo: anghel4d/broadside-observer `main` (**1082** cards; Frontier 2026-08-18 merge `160f173` / PR #50). Next rank **1083+**. Never reuse 1–1082.

Intent: lovely or surprising work that may not look immediately on-mission — maths, physics, biology, art, odd algorithms — chosen because M. Anghel would enjoy them, with a short "why you might love this" bridge back to Broadside / Anoptic / ano when there is one.

- keep_rate: **0.15 HARD CAP** (stricter than Frontier)
- recency: flexible (gems of any recent-or-classic date if not already in the library)
- topic_clusters: curiosity, agents, language, engine
- source_bias: arxiv, openreview, acl-anthology, papers-with-code
- extra_arxiv_categories: math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG
- notes: Lower keep rate; prioritize delight + intellectual sparkle. Cap 15%. Zero keepers allowed after a real sweep.

Do **not** run Frontier / Archive / Craft as the primary lens. Do **not** remint Curiosity 2026-08-15 (1023–1029) or Curiosity 2026-08-17 (1051–1057: FEEC, discrete conformal, PGA, cubical TT, Idris 2 QTT, reverse derivative, profunctor optics). Do not remint Craft 1030–1037 / 1058–1065, Archive 1038–1049 / 1066–1076, Frontier 1050 / 1077–1082.

Slice this cycle: **surprising equivalences + odd geometry that is not DEC/PGA/conformal/tiling + type/category that is not cubical/QTT/optics/RDC/string-diagrams/DiLL + classical mechanics gems + biology-as-computation + combinatorial designs.**

## Sweep (real pool)

Sources actually polled:

- **arXiv RSS** `https://rss.arxiv.org/rss/{cat}` — weekday, 32 unique cats all **200**. Raw items **779** (`raw/rss_pool.json`).
- **arXiv Atom API** `http://export.arxiv.org/api/query` — 32 cats × 80, all **200**, **0×429**. Raw **2560** (`raw/api_cat_raw.json`). Cats: math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG, math.DG, math.AT, math.MG, cs.LO, cs.FL, nlin.CG, cs.GR, cs.DM, cs.SC, cs.PL, math.SG, math.GT, math.HO, math.KT, nlin.AO, nlin.PS, nlin.SI, physics.bio-ph, physics.optics, q-bio.QM/MN/TO/PE, cs.CL, math.RA, math.AG.
- **Targeted arXiv searches** (120 queries: Baker–Norine / Riemann–Roch on graphs, magnitude, variational integrators, Viazovska / E8 / Leech, cluster algebras, 2LTT / ornaments / cohesive HoTT, scallop / Purcell / falling cat, chip-firing / sandpile / rotor-router, cap set, associahedron, Lambek / pregroup, deficiency-zero, phyllotaxis, Poncelet, McKay, little disks, port-Hamiltonian, Chaplygin / rattleback / tippe top, Study quadric, rigid origami, …): **120/120 OK**. Targeted n_new **2492** (`raw/targeted_raw.json`).
- **Injected non-arxiv classics** (abs/DOI read): Marsden–West 2001 Acta Numerica; Purcell 1977 Am. J. Phys. Five arxiv keepers were already in the targeted pool; abs-read to confirm DOIs/years.
- **OpenReview / Papers with Code / ACL Anthology** — not used as a harvest (historically 403 from this box; ACL not a firehose for this daypart). arXiv API + abs reads carried the cycle.
- Corpus dedupe against GitHub `main`: `radar/seen.json` (252 arxiv / 532 titles, updated 2026-08-18) + `seeds/INDEX.md` + `seeds/cards/*.md` (1–1082 complete). No local clone; GitHub main is source of truth.

**Fetch unique:** RSS 779 + API 2560 + targeted n_new 2492, id-merged **5128** in `raw/pool.json`; **5132** after injecting the two non-arxiv keepers (and math/ prefix aliases).

Already in seen/INDEX/prev-Curiosity: **38**. CL-only (cs.CL without linguistically lovely keywords): **80**. Dirt-title regex (orca/whale, neutrino, black-hole, speculative-decoding, survey tail, manuals, LLM-agent sludge, Semantic Lenia / analog CRN, quantum Turing): **61**. Banned-idea titles (DEC/PGA/cubical/QTT/optics/RDC/string-diagrams/DiLL/tangent/FEEC/conformal/tiling/Hopf/Petri/kirigami/Hashlife): **26**. Leftover after seen/CL/dirt/idea: **4927**.

Keyword cream (too loose): **1265**.

**Strict curiosity cheap filter** (would Anghel enjoy *and* crème not cute-not-cream; title-level technique + targeted abs-read; drop sandpile/rotor-router/McKay/Leech-CFT/Lambek-increment/port-Hamiltonian-learning sludge): **52**.

Keepers: **7** (keep rate **7/52 = 0.135**, hard cap **0.15**). No padding.

Dirt ban honoured: no CA combinatorics cute-not-cream, no quantum Turing patterns, no whale/orca bioacoustics, no neutrino, no black-hole lockstep, no LLM-agent sludge, no speculative-decoding clones, no survey tail, no manuals, no Semantic Lenia / analog CRNs. Last Curiosity 1023–1029 and 1051–1057 not reminted. Last-cycle rejects (CDC/DiLL/tangent-cat/cellular-sheaf/discrete-Morse/Maxwell-Cremona/circle-pack increments, tropical coeffect, tape diagrams, extension types, Forman-Ricci, GA inverse, swallowtail, SDG in Lean, kirigami, Pinkall–Polthier, Interacting Hopf, open Petri, Hashlife) not reminted.

## Keepers

| # | Year | Title | Why you might love this | URL |
|---|-----:|-------|-------------------------|-----|
| 1083 | 2007 | Riemann-Roch and Abel-Jacobi theory on a finite graph | Graphs as Riemann surfaces; chip-firing = linear systems; Jac = spanning trees | https://arxiv.org/abs/math/0608360 |
| 1084 | 2013 | The magnitude of metric spaces | Euler char of Lawvere metric spaces; effective number of points; recovers volume/surface | https://arxiv.org/abs/1012.5857 |
| 1085 | 2017 | The sphere packing problem in dimension 8 | Modular form whose Fourier transform is itself; double zeros on E8; Cohn–Elkies sharp | https://arxiv.org/abs/1603.04246 |
| 1086 | 2002 | Cluster algebras I: Foundations | Binomial exchange + Laurent phenomenon; triangulations of polygons | https://arxiv.org/abs/math/0104151 |
| 1087 | 2023 | Two-level type theory and applications | Inner HoTT + outer UIP; semisimplicial types as outer ℕ; conservativity | https://arxiv.org/abs/1705.03307 |
| 1088 | 2001 | Discrete mechanics and variational integrators | Discrete Lagrangian → symplectic-momentum timestep; Noether discrete | https://doi.org/10.1017/S096249290100006X |
| 1089 | 1977 | Life at low Reynolds number | Scallop theorem; Purcell swimmer; geometry of locomotion at Re≪1 | https://doi.org/10.1119/1.10903 |

## Mix

4 maths-foundations / 1 languages / 1 physics / 1 biology. No agents this cycle (wrong daypart). Missing classics in a *new* slice: Baker–Norine, magnitude, Viazovska E8, cluster algebras, 2LTT, variational integrators, Purcell — not Archive pantheon redo, not last Curiosity's DEC/PGA/conformal/cubical/QTT/optics/RDC/tiling/string-diagram slice.

Cite-id audit: Baker–Norine Adv. Math. `10.1016/j.aim.2007.04.012` (year 2007; arxiv math/0608360); magnitude Doc. Math. `10.4171/dm/415` (year 2013; arxiv 1012.5857); Viazovska Ann. of Math. `10.4007/annals.2017.185.3.7`; cluster I JAMS `10.1090/S0894-0347-01-00385-X`; 2LTT MSCS `10.1017/S0960129523000130` (journal 2023, arxiv 2017); Marsden–West Acta Numerica `10.1017/S096249290100006X` (**no arxiv**); Purcell Am. J. Phys. `10.1119/1.10903` (**no arxiv**). Cohn–Elkies `math/0110009`; dim-24 sibling `1603.06518` cited not minted; cubical `1611.02108` already 1054.
