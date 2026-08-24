# Curiosity radar — 2026-08-25

Daypart: **Curiosity** (odd calendar date, 00:00 Europe/Bucharest). Today is Tuesday 25 Aug 2026 (odd → Curiosity).
Repo: anghel4d/broadside-observer `main` (**1233** unique cards; Frontier 2026-08-24 merge `abade6d` / PR #73). Next rank **1234+**. Never reuse 1–1233.

Intent: lovely cross-domain maths / physics / biology / geometry / type theory / category / unusual computing that M. Anghel would enjoy, with a one-line **why it's lovely** on every keeper. Not this-week agent benches (XPerf/Nexus just landed), not Anoptic workbench, not historical-systems Archive, not a remint of the Alpoge ingest from this morning.

- keep_rate: **0.15 HARD CAP**. Last Curiosity 2026-08-23 kept 6 of 45.
- recency: any_recent_or_evergreen_delight
- topic_clusters: curiosity, maths, physics, biology, geometry, type-theory, category, unusual-computing
- source_bias: arxiv math.CT/AT/DG/QA, cs.LO/FL/CG/SC, q-bio, physics.comp-ph, plus leftovers in geometry/type-theory/category not already kept

Do **not** run Frontier / Craft / Archive as the primary lens. Do not pad with Alpoge leftovers.

Do **not** remint: Curiosity 1051–1057, 1083–1089, 1121–1127, 1145–1150; Alpoge 1197–1219 (s6, Hilbert tenth, Mordell, cubes, zeta 2/3 1198); AI-math 1220–1231; FMM 1163–1196; Frontier 1232–1233, 1142–1144; Archive 1155–1162; Craft 1151–1154.

Already-kept gems skipped: FEEC, discrete conformal, PGA, cubical TT, Idris QTT, reverse derivative, profunctor optics, ZX, Fritz Markov, Schramm SLE, Kitaev anyons, Willmore, Mikhalkin tropical, s6 complex structure, zeta 2/3, Hilbert tenth.

Slice this cycle: **Kontsevich graphs (deformation quantization) + h-principle cliff (Nash–Kuiper vs Weyl/Onsager) + factorization homology leftover of cobordism + simplicial univalence leftover of cubical + amplituhedron leftover of plabic/cluster + quasi-category dictionary leftover of synthetic-∞.** Different from 08-17 (FEEC/PGA/cubical/RDC/optics), 08-19 (RR-graphs/magnitude/E8/cluster/2LTT/variational/Purcell), 08-21 (arctic/honeycombs/plabic/Khovanov/synthetic-∞/polyfunctors/ACG), 08-23 (ZX/Markov/SLE/anyons/Willmore/tropical).

## Sweep (real pool)

Sources actually polled:

- **arXiv RSS** `https://rss.arxiv.org/rss/{cat}` — Tuesday, **40** cats all **200**, raw items **577** / **483** unique (`raw/rss_*.xml`, `raw/rss_stats.json`). Weekday mailing is live.
- **arXiv Atom API** `http://export.arxiv.org/api/query` — 40 cats × 80, **all 200**, **0×429**. Raw **3200** / **2866** unique in `raw/api/*.xml`.
- **Targeted arXiv searches:** 55 queries, **all 200**, **0×429** (`raw/tgt/`). Hits include h-principle **115**, isometric **323**, persistent homology **712**, deformation quantization **404**, factorization homology **76**, reversible computing **48**, interaction combinators **38**, little disks **29**, Berry phase **1881** (mostly increment), Hopf fibration **128**, twistor **82**, amplituhedron **117**, information geometry **314**, moonshine **18**, Keller–Segel/physarum/BZ **556**, DNA computing **10**, HIT/univalent **42**, SDG **14**, Goodwillie **41**, complete Segal/quasi-categories **39**, Day convolution **10**, recent math.CT **170**. Empty author-style queries (Edelsbrunner, Costello, Ayala+Francis, Stasheff) recovered via **WebFetch** id_list / all: phrases (different egress): Kontsevich `q-alg/9709040` live, Ayala–Francis `1206.5522` already in targeted pool, founding PH / Conservative Logic / Interaction Combinators Lafont / differential λ-calculus **not on arXiv** (honest miss).
- Corpus dedupe against GitHub `main`: `radar/seen.json` (420 arxiv / 865 titles, updated 2026-08-24) + `seeds/INDEX.md` (1233 unique). No local clone.

**Fetch unique:** RSS+API+targeted id-merged **4702** in `raw/pool.json`. Recovered Kontsevich sits on top (absent from the firehose). Recency is flexible this daypart.

Already in seen/INDEX: **38** of the recent pool. Dirt-title regex: **113**. Banned-idea titles (ZX/SLE/Willmore/tropical/FEEC/…): **13**.

Keyword cream (too loose — PH applications, Keller–Segel increments, Hopf-fibration tourism, Berry-phase spectroscopy): **971**.

**Strict curiosity cheap filter** (would Anghel enjoy *and* crème; drop PH applications, DILL sequels of 1056, CSS intros, Vicsek/KS increments, moonshine uniqueness, cobordism they already cited, HoTT book, cubical already 1054, agent/KV): **42**.

Keepers: **6** (keep rate **6/42 = 0.143**, hard cap **0.15**). No padding.

Dirt ban honoured: no generic LLM benches, no survey sludge, no AI-for-X with no idea, no orca/whale, no neutrino, no quantum Turing patterns. Last two Curiosity runs not reminted. Alpoge leftovers not used as padding. XPerf/Nexus 1232–1233 not reminted.

## Keepers

| # | Year | Title | Why it's lovely | URL |
|---|-----:|-------|-----------------|-----|
| 1234 | 2003 | Deformation quantization of Poisson manifolds, I | Star products are weighted graphs; Poisson → associative is a Feynman expansion | https://arxiv.org/abs/q-alg/9709040 |
| 1235 | 2012 | h-Principle and Rigidity for C^{1,α} Isometric Embeddings | Crumple a sphere isometrically until Hölder ~1/3; past 2/3 rigidity slams shut | https://arxiv.org/abs/0905.0370 |
| 1236 | 2015 | Factorization homology of topological manifolds | Integrate an E_n-algebra over any n-manifold; leftover of cobordism | https://arxiv.org/abs/1206.5522 |
| 1237 | 2021 | The Simplicial Model of Univalent Foundations (after Voevodsky) | Univalence is a theorem in simplicial sets; leftover of cubical 1054 | https://arxiv.org/abs/1211.2851 |
| 1238 | 2014 | The Amplituhedron | The S-matrix is the volume of a positive geometry; leftover of plabic/cluster | https://arxiv.org/abs/1312.2007 |
| 1239 | 2006 | Quasi-categories vs Segal spaces | Three models of (∞,1)-categories are Quillen equivalent; leftover of synthetic-∞ | https://arxiv.org/abs/math/0607820 |

## Mix

6 maths-foundations. No agents this cycle (wrong daypart). Missing classics in a *new* slice: Kontsevich graphs (not Tamarkin sequels), h-principle cliff leftover of Willmore, factorization homology leftover of cobordism they cited 23 Aug, simplicial univalence leftover of cubical, amplituhedron leftover of plabic/cluster, Joyal–Tierney dictionary leftover of synthetic-∞. Not Archive pantheon redo. Not Alpoge.

Cite-id audit: Kontsevich LMP `10.1023/B:MATH.0000027508.00421.bf`; Conti Abel Symp. vol. 7 (2012) 83–116 (no Crossref DOI on the Atom record); Ayala–Francis J. Topol. `10.1112/jtopol/jtv028`; Kapulkin–Lumsdaine JEMS `10.4171/JEMS/1050`; Amplituhedron JHEP `10.1007/JHEP10(2014)030`; Joyal–Tierney preprint math/0607820 (**no journal DOI**). Tamarkin `math/9803025` cited not minted; Eliashberg–Mishachev `math/0101196` cited not minted; Lurie cobordism `0905.0465` and Baez–Dolan `q-alg/9503002` cited not minted (again); HoTT book `1308.0729` cited not minted; cubical `1611.02108` already 1054; Rezk CSS `math/9811037` cited not minted; 1212.5605 cited not minted.

## Blockers

- Honest empty recent-firehose crème: this week's math.CT/AT/DG is increment. Keepers are evergreen.
- Founding persistent homology / Conservative Logic / Lafont Interaction Combinators / Ehrhard–Regnier differential λ-calculus are not on arXiv; not invented.
- Local arXiv 429 only on a follow-up id_list burst; keepers recovered via WebFetch. Do not invent papers.
