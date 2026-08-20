# Curiosity radar — 2026-08-21

Daypart: **Curiosity** (odd calendar date, 00:00 Europe/Bucharest). Today is Friday 21 Aug 2026 (odd → Curiosity).
Repo: anghel4d/broadside-observer `main` (**1120** unique cards; Frontier 2026-08-20 merge `7ba0df49` / PR #60). Next rank **1121+**. Never reuse 1–1120. Duplicate INDEX rank 942 exists; ranks 1–1120 otherwise complete.

Intent: lovely or surprising work that may not look immediately on-mission — maths, physics, biology, art, odd algorithms — chosen because M. Anghel would enjoy them, with a short "why you might love this" bridge back to Broadside / Anoptic / ano when there is one.

- keep_rate: **0.15 HARD CAP** (stricter than Frontier). Last curiosity kept 7 of 52 (0.135).
- recency: flexible (delight beats recency)
- topic_clusters: curiosity, agents, language, engine
- source_bias: arxiv, openreview, acl-anthology, papers-with-code
- extra_arxiv_categories: math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG (also math.DG, math.AT, cs.LO, nlin.CG, math.QA, cs.CC as useful)

Do **not** run Frontier / Archive / Craft as the primary lens.

Do **not** remint: Craft 1030–1037, Archive 1038–1049, Frontier 1050, Curiosity 1051–1057, Craft 1058–1065, Archive 1066–1076, Frontier 1077–1082, Curiosity 1083–1089, Craft 1090–1096, Archive 1097–1106, RC 1107–1115, Frontier 1116–1120.

Already kept last Curiosity (2026-08-19) — do not remint: 1083 Baker–Norine, 1084 Leinster magnitude, 1085 Viazovska E8, 1086 cluster algebras I, 1087 2LTT, 1088 Marsden–West, 1089 Purcell. Also 1023–1029 and 1051–1057.

Slice this cycle: **Japanese/CL + combinatorial correspondences (not cluster/cap-set) + directed/modal/observational TT + dimer/arctic/Yang–Baxter + morphogenesis beyond Turing/Purcell + Poncelet/inversive leftovers + game semantics/polynomial functors/species + falling-cat geometry.** Arctic = random dimer *limit shapes*, not aperiodic monotiles.

## Sweep (real pool)

Sources actually polled:

- **arXiv RSS** `https://rss.arxiv.org/rss/{cat}` — weekday, **34** unique cats all **200**. Raw items **500** / **433** unique (`raw/rss_*.xml`, `raw/rss_stats.json`).
- **arXiv Atom API** `http://export.arxiv.org/api/query` — 34 cats × 80, all **200**, **0×429** on the cat sweep. Raw **2720**. Cats: math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG, math.DG, math.AT, math.MG, cs.LO, cs.FL, nlin.CG, cs.GR, cs.DM, cs.SC, cs.PL, math.SG, math.GT, math.HO, math.KT, nlin.AO, nlin.PS, nlin.SI, physics.bio-ph, physics.optics, q-bio.QM/MN/TO/PE, cs.CL, math.RA, math.AG, math.QA, cs.CC.
- **Targeted arXiv searches:** 110 curl queries to `export.arxiv.org` from this box hit **HTTP 429** (0-byte files in `raw/tgt/`). Recovered via **WebFetch** (different egress) of OR-batches + `id_list`: arctic/aztec/plabic/positroid/square-ice **468** totalResults; honeycomb/polynomial-functors/Khovanov/synthetic-∞/ACG **1064** totalResults; plus two `id_list` batches (14+14) of keepers and siblings. Injected abs-reads for all seven keepers.
- **ACL Anthology:** de Groote P01-1033 fetched (`https://aclanthology.org/P01-1033/`, DOI `10.3115/1073012.1073045`). **No arxiv.**
- **OpenReview** `ICLR.cc/2027/Conference` notes API → **404**. Papers with Code not used as a firehose.
- Corpus dedupe against GitHub `main`: `radar/seen.json` (298 arxiv / 618 titles, updated 2026-08-20) + `seeds/INDEX.md` + `seeds/cards/*.md` (1120 unique). No local clone; GitHub main is source of truth.

**Fetch unique:** RSS+API id-merged **2635** in `raw/pool.json`. Targeted WebFetch + ACL injects sit on top (classics; mostly absent from the recent firehose). Recency is flexible this daypart.

Already in seen/INDEX/prev-Curiosity: **32** of the recent pool. CL-only: **31**. Dirt-title regex: **6**. Banned-idea titles: **6**. Leftover after seen/CL/dirt/idea: **2560**.

Keyword cream (too loose — dimer-as-chemistry, puzzle-as-games, Khovanov increments): **72**.

**Strict curiosity cheap filter** (would Anghel enjoy *and* crème not cute-not-cream; title-level technique + targeted abs-read; drop CRN/phyllotaxis-increment/CCG-supertagging/Khovanov-tail/plabic-package sludge): **52**.

Keepers: **7** (keep rate **7/52 = 0.135**, hard cap **0.15**). No padding.

Dirt ban honoured: no generic LLM benches, no survey sludge, no AI-for-X with no idea, no orca/whale, no neutrino, no quantum Turing patterns. Last two Curiosity runs (1023–1029, 1051–1057, 1083–1089) not reminted. Last-cycle notable rejects (pregroup, cap set, cohesive HoTT, rigid origami, deficiency-zero CRN, Chaplygin, etc.) not reminted.

## Keepers

| # | Year | Title | Why you might love this | URL |
|---|-----:|-------|-------------------------|-----|
| 1121 | 1998 | Random Domino Tilings and the Arctic Circle Theorem | Random dimer limit shape is a *perfect circle*; shuffling = TASEP | https://arxiv.org/abs/math/9801068 |
| 1122 | 1999 | The honeycomb model of GL(n) tensor products I: Proof of the saturation conjecture | LR coefficients as planar honeycombs; saturation ⇒ Horn | https://arxiv.org/abs/math/9807160 |
| 1123 | 2006 | Total positivity, Grassmannians, and networks | Plabic graphs *are* the totally nonnegative Grassmannian | https://arxiv.org/abs/math/0609764 |
| 1124 | 2000 | A categorification of the Jones polynomial | Jones coefficients become homology; cube of Frobenius maps | https://arxiv.org/abs/math/9908171 |
| 1125 | 2017 | A type theory for synthetic ∞-categories | Directed interval; Segal/Rezk types; not cubical 1054 | https://arxiv.org/abs/1705.07442 |
| 1126 | 2013 | Polynomial functors and polynomial monads | ΣΠΔ diagrams as a framed bicategory; free monad stays polynomial | https://arxiv.org/abs/0906.4931 |
| 1127 | 2001 | Towards Abstract Categorial Grammars | Two linear-λ homomorphisms: syntax and Montague from one proof | https://aclanthology.org/P01-1033/ |

## Mix

5 maths-foundations / 2 languages. No agents this cycle (wrong daypart). Missing classics in a *new* slice: arctic dimers (not the hat monotile), honeycombs/saturation (not cluster algebras I), plabic/positroids (cited by 1086, never minted), Khovanov founding, Riehl–Shulman directed TT (not cubical/2LTT), polynomial functors (not optics/RDC), de Groote ACG (Japanese/CL). Not Archive pantheon redo.

Cite-id audit: arctic AIHP D `10.4171/aihpd/233` (discovery 1998; journal 2026; arxiv math/9801068); honeycombs I JAMS `10.1090/S0894-0347-99-00299-4`; Postnikov preprint math/0609764 (**no journal DOI**); Khovanov Duke Math. J. `10.1215/S0012-7094-00-10131-7`; Riehl–Shulman Higher Structures `10.21136/HS.2017.06`; Gambino–Kock MPCPS `10.1017/S0305004112000394` (journal 2013, arxiv 2009); de Groote ACL `10.3115/1073012.1073045` (**no arxiv**). Honeycombs II `math/0107011` cited not minted; Kuperberg ASM `math/9712207` cited not minted; MTT `2011.15021` cited from 1125; Moot 1405.6678 cited from 1127.
