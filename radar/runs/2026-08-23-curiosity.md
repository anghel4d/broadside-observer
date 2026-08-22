# Curiosity radar — 2026-08-23

Daypart: **Curiosity** (odd calendar date, 00:00 Europe/Bucharest). Today is Sunday 23 Aug 2026 (odd → Curiosity).
Repo: anghel4d/broadside-observer `main` (**1144** unique cards; Frontier 2026-08-22 merge `42378be` / PR #65). Next rank **1145+**. Never reuse 1–1144.

Intent: lovely cross-domain maths / physics / biology / geometry / type theory / category / unusual computing that M. Anghel would enjoy, with a one-line **why it's lovely** on every keeper. Not this-week agent benches, not Anoptic workbench, not historical-systems Archive.

- keep_rate: **0.15 HARD CAP**. Last Curiosity 2026-08-21 kept 7 of 52 (0.135).
- recency: any_recent_or_evergreen_delight
- topic_clusters: curiosity, maths, physics, biology, geometry, type-theory, category, unusual-computing
- source_bias: arxiv (math.CT, math.AT, math.DG, math.QA, cs.LO, cs.FL, q-bio, physics.comp-ph, cs.CG, cs.SC) plus venue leftovers in geometry/type-theory/category not already kept

Do **not** run Frontier / Craft / Archive as the primary lens. Do not pad with agent/KV/serving papers (ReCache/CacheRoute/Outcome Monitors just landed as 1142–1144).

Do **not** remint: Archive 1038–1049, 1066–1076, 1097–1106, 1134–1141; Craft 1030–1037, 1058–1065, 1090–1096, 1128–1133; Frontier 1050, 1077–1082, 1116–1120, 1142–1144; Curiosity 1051–1057, 1083–1089, 1121–1127; RC 1107–1115.

Already kept last Curiosity (2026-08-21) — do not remint: 1121–1127. Also 1083–1089 and 1051–1057 (FEEC, discrete conformal maps, PGA, cubical TT, Idris 2 QTT, reverse derivative categories, profunctor optics).

Slice this cycle: **pictorial QM (ZX founding) + synthetic probability (Markov categories founding, 944 is the sequel) + random conformal geometry (SLE, not arctic dimers) + topology-as-computer (Kitaev anyons) + geometry leftover (Willmore) + tropical leftover of cluster (Mikhalkin enumerative).** Different from 08-17 (FEEC/PGA/cubical/RDC/optics), 08-19 (RR-graphs/magnitude/E8/cluster/2LTT/variational/Purcell), 08-21 (arctic/honeycombs/plabic/Khovanov/synthetic-∞/polyfunctors/ACG).

## Sweep (real pool)

Sources actually polled:

- **arXiv RSS** `https://rss.arxiv.org/rss/{cat}` — Sunday, **40** cats all **200**, **n=0** (`raw/rss_*.xml`, `raw/rss_stats.json`). Weekend mailing dead zone; empty feeds are valid (~900 bytes).
- **arXiv Atom API** `http://export.arxiv.org/api/query` — 40 cats × 80. This box: 36 cats **200** (2800 raw / **2529** unique in `raw/api/*.xml`); **429** on nlin.SI, math-ph, cond-mat.stat-mech. Recovered those three plus cobordism/TQFT via **WebFetch** (different egress). Recent firehose is increment sludge + one dirt hit (quantum Turing patterns 2608.20151, banned).
- **Targeted arXiv searches:** harvest.py's 80 queries 429-bound from this box (`raw/tgt/` empty at decision time). Recovered via WebFetch OR-batches + `id_list`: ZX **106** totalResults; Markov categories **17**; SLE/LERW/LQG **165**; Willmore/tropical/cospans/anyons **15**; cobordism hypothesis / extended TQFT / Baez–Dolan **23**; two `id_list` batches of keepers and siblings. All six keepers injected from live Atom entries (titles, abs, journal_ref, DOI).
- Corpus dedupe against GitHub `main`: `radar/seen.json` (336 arxiv / 705 titles, updated 2026-08-22) + `seeds/INDEX.md` (1144 unique). No local clone.

**Fetch unique:** RSS+API id-merged **2529** in `raw/api` (RSS empty). Targeted WebFetch classics sit on top (absent from the recent firehose). Recency is flexible this daypart.

Already in seen/INDEX: **25** of the recent API pool. Dirt-title regex: **43**. Keyword cream (too loose — homotopy increment, persistent-homology applications, tropical-for-neurons): **116**.

**Strict curiosity cheap filter** (would Anghel enjoy *and* crème; drop ZX-completeness theses, Markov sequels of 944, SLE surveys, applied-CT leftover of optics, AI-for-X tropical, agent/KV): **45**.

Keepers: **6** (keep rate **6/45 = 0.133**, hard cap **0.15**). No padding.

Dirt ban honoured: no generic LLM benches, no survey sludge, no AI-for-X with no idea, no orca/whale, no neutrino, no quantum Turing patterns. Last two Curiosity runs not reminted. Last-cycle notable rejects not reminted.

## Keepers

| # | Year | Title | Why it's lovely | URL |
|---|-----:|-------|-----------------|-----|
| 1145 | 2011 | Interacting Quantum Observables: Categorical Algebra and Diagrammatics | Complementarity of Z/X is a pair of spiders; Hilbert space becomes a rewrite system | https://arxiv.org/abs/0906.4725 |
| 1146 | 2020 | A synthetic approach to Markov kernels, conditional independence and theorems on sufficient statistics | Probability without measures; Bayes is a string diagram; copy-discard. Founding paper of 944 | https://arxiv.org/abs/1908.07021 |
| 1147 | 2000 | Scaling limits of loop-erased random walks and uniform spanning trees | Brownian driving function grows a random simple path; different from arctic dimers | https://arxiv.org/abs/math/9904022 |
| 1148 | 2003 | Fault-tolerant quantum computation by anyons | Topology is the error-correcting code; braiding is the gate | https://arxiv.org/abs/quant-ph/9707021 |
| 1149 | 2014 | Min-Max theory and the Willmore conjecture | Torus of revolution is the least-wrinkled torus; min-max of minimal surfaces | https://arxiv.org/abs/1202.6036 |
| 1150 | 2005 | Enumerative tropical algebraic geometry in R² | Holomorphic curve counts become lattice paths in a polygon; leftover of cluster 1086 | https://arxiv.org/abs/math/0312530 |

## Mix

6 maths-foundations. No agents this cycle (wrong daypart). Missing classics in a *new* slice: ZX founding (not completeness theses), Fritz Markov founding (944 is the sequel), SLE (not arctic dimers), Kitaev anyons (topology-as-computer), Willmore (geometry leftover of FEEC/conformal), Mikhalkin tropical enumerative (leftover of cluster 1086). Not Archive pantheon redo.

Cite-id audit: ZX NJP `10.1088/1367-2630/13/4/043016`; Fritz Adv. Math. `10.1016/j.aim.2020.107239`; Schramm Isr. J. Math. `10.1007/BF02803524`; Kitaev Ann. Phys. `10.1016/S0003-4916(02)00018-0`; Willmore Annals `10.4007/annals.2014.179.2.6`; Mikhalkin JAMS `10.1090/S0894-0347-05-00477-7`. Completeness ZX `1903.06035` cited not minted; Cho–Jacobs `1709.00322` cited not minted; Kitaev honeycomb `cond-mat/0506438` cited not minted; Baez–Dolan `q-alg/9503002` and Lurie `0905.0465` cited not minted; HHR Kervaire `0908.3724` cited not minted; Fong decorated cospans `1502.00872` cited not minted.

## Blockers

- Local arXiv Atom 429 on late cats and all targeted queries; recovered via WebFetch. Do not invent papers.
- RSS empty is honest (Sunday).
- Honest empty recent-firehose crème: this week's math.CT/AT/DG is increment.
