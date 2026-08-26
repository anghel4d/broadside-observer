# Curiosity radar — 2026-08-27

Daypart: **Curiosity** (odd calendar date, 00:00 Europe/Bucharest). Today is Thursday 27 Aug 2026 (odd → Curiosity).
Repo: anghel4d/broadside-observer `main` (**1368** unique cards; Frontier 2026-08-26 merge `2141866` / PR #79). Next rank **1369+**. Never reuse 1–1368.

Intent: lovely cross-domain maths / physics / biology / geometry / type theory / category / unusual foundations that M. Anghel would enjoy, with a one-line **why it's lovely** on every keeper. Not this-week agent benches, not Anoptic workbench, not historical-systems Archive.

- keep_rate: **0.15 HARD CAP**. Last Curiosity 2026-08-25 kept 6 of 42.
- recency: flexible (lovely recent-enough gems not already in catalog)
- topic_clusters: curiosity, maths, physics, biology, geometry, type-theory, category, unusual-computing
- source_bias: arxiv math.AG/NT/AT/CT/DG/GT/KT/LO/QA/CO/DS/SG/MG, cs.LO/PL/CG/SC/FL, physics.comp-ph, q-bio.QM/MN/NC

Do **not** run Frontier / Craft / Archive as the primary lens. Do not pad with LLM-serving or GI methods.

Do **not** remint: 1–1368 entire catalog, especially Curiosity 1051–1057 / 1023–1029 / 1234–1239; FMM 1163–1196; Alpoge 1197–1231; SSS 1244–1343; Fox 1344–1357; Archive 1358–1365; Frontier 1366–1368.

## Sweep (real pool)

Sources actually polled:

- **arXiv RSS** — 27 Curiosity cats, all 200, raw items **421**.
- **arXiv Atom API** — 7 cats × 80 before 429, then HTML pastweek `show=250` for 22 cats (all 200). API entries **560** on first burst.
- **Targeted arXiv searches:** 40 queries; **31×200 / 9×429** early in the burst (`raw/tgt/`). Hits include STT / synthetic AG / TCD / Penrose cocycle / DDG-HoTT / polygraphs / directed TT / cobordism / interaction combinators / differential logic / circle packing / cluster leftovers.
- Absolute abs pages recovered for keeper shortlist via `arxiv.org/abs/{id}` when id_list 429'd.
- Corpus dedupe against GitHub `main`: `radar/seen.json` (455 arxiv / 1034 titles, updated 2026-08-26) + `seeds/INDEX.md` (1368 unique). No local clone.

**Fetch unique (id-merged with abstracts):** **1310**. Fresh after corpus dedupe: **~1290**.

Dirt-title / LLM-bench / MOND / hat-code tourism: dropped. Banned-idea remints (FEEC/PGA/cubical/hat/DEC/amplituhedron/Kontsevich/…): dropped.

Keyword cream (loose delight markers): **159**.

**Strict curiosity cheap filter** (would Anghel enjoy *and* crème; drop circle-packing rigidity increments, differential-category sequels of 1056, cubical sequels of 1054, amplituhedron leftovers of 1238, TQFT dualizability tourism): **34**.

Keepers: **5** (keep rate **5/34 = 0.147**, hard cap **0.15**). No padding.

## Keepers

| # | Year | Title | Why it's lovely | URL |
|---|-----:|-------|-----------------|-----|
| 1369 | 2025 | Discrete differential geometry in homotopy type theory | Curvature and vector-field index become equal as a theorem in HoTT — Gauss–Bonnet/Poincaré–Hopf without leaving types | https://arxiv.org/abs/2504.20363 |
| 1370 | 2026 | Matching Rules as Cocycle Conditions: Discrete Potentials on Penrose and Canonical Projection Tilings | Penrose matching rules = cocycle conditions = Ammann height functions; aperiodicity rewritten as discrete cohomology | https://arxiv.org/abs/2603.13553 |
| 1371 | 2026 | Multiple cluster algebra structures for TCD maps I: theoretical framework | One diagram language (TCD maps) unifies Q-nets, pentagram map, and two cluster structures — discrete geometry as mutation | https://arxiv.org/abs/2601.08944 |
| 1372 | 2025 | Differential Geometry of Synthetic Schemes | Étale/smooth/unramified become tangent-space injectivity/iso/surjectivity inside synthetic algebraic geometry | https://arxiv.org/abs/2504.08495 |
| 1373 | 2026 | The ∞-category of ∞-categories in simplicial type theory | The missing Cat_∞ lives in simplicial type theory — straightening/unstraightening, synthetically | https://arxiv.org/abs/2602.02218 |

## Mix

5 maths-foundations. No agents this cycle (wrong daypart). Slice is new relative to 08-25 (Kontsevich/h-principle/factorization/simplicial-univalence/amplituhedron/quasi-cats) and to 08-23/21/19/17 keepers.

## Notable rejects

- **Rzk** `2607.12207` — synthetic ∞-cat proof assistant; tool leftover of 1373, not idea crème this week.
- **UC, Categorically** `2608.04521` — string-diagram UC crypto; delightful diagrammatics but wrong grin vs maths foundations.
- **DDG via TCD** `2305.02212` / **TCD dimers** `2108.12692` — cited under 1371, not reminted.
- **Polygraphs presheaf** `1711.00744` / **Shuffle polygraphic** `2012.15718` — rewriting foundations; archive-adjacent, below keep line.
- **Bobenko–Suris DDG** `math/0504358` — founding consistency-as-integrability; too Archive-flavoured for this Curiosity slice.
- Circle-packing rigidity/existence flood; differential-category sequels of reverse-derivative 1056; cubical sequels of 1054; hat-based QECC `2607.15326`.

## Blockers / search failures

- arXiv API **429** after ~7 category queries; recovered via HTML pastweek + targeted queries after cooldown (31/40 targeted OK).
- id_list burst for keeper shortlist **429**; abs HTML fetch succeeded for all five keepers.
- OpenAlex / DBLP not required this cycle (arXiv-covered gems).
