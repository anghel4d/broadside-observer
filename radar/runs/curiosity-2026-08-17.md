# Curiosity radar — 2026-08-17

Daypart: **Curiosity** (odd calendar date, 00:00 Europe/Bucharest).
Repo: anghel4d/broadside-observer `main` (**1050** cards; Frontier 1050 DeepSeek Harness merged as 61ccf0e / PR #33). Next rank **1051+**. Never reuse 1–1050.

Intent: lovely or surprising work that may not look immediately on-mission — maths, physics, biology, art, odd algorithms — chosen because M. Anghel would enjoy them, with a short "why you might love this" bridge back to Broadside / Anoptic / ano when there is one.

- keep_rate: **0.15 HARD CAP** (stricter than Frontier)
- recency: flexible (gems of any recent-or-classic date if not already in the library)
- topic_clusters: curiosity, agents, language, engine
- source_bias: arxiv, openreview, acl-anthology, papers-with-code
- extra_arxiv_categories: math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG
- notes: Lower keep rate; prioritize delight + intellectual sparkle. Cap 15%. Zero keepers allowed after a real sweep.

Do **not** run Frontier / Archive / Craft as the primary lens. A beautiful old paper is OK if lovely and missing. Do **not** remint last Curiosity 2026-08-15 (1023–1029: hat, Sturmian, sphere-spectrum linear logic, diagrammatic relative entropy, string-diagram critical pairs, DEC, Rig of Transformations).

Slice this cycle: **discrete geometry that is not DEC/tiling + type/category techniques that are not string diagrams / sphere-spectrum linear logic.**

## Sweep (real pool)

Sources actually polled:

- **arXiv Atom API** `http://export.arxiv.org/api/query` — weekend RSS was empty (`skipDays` Sat/Sun). Cats polled (80 each, 20 OK / 10×429): math.CT, math.CO, math.DS, physics.class-ph, q-bio, cs.CG, plus math.MG, cs.PL, cs.FL, nlin.PS, cs.LO, cs.GR, nlin.AO, math.AT, cs.SC, cs.DM, q-bio.TO/QM/MN, cs.CL. 429 on nlin.CG, math.HO, physics.bio-ph, physics.optics, math.DG, math.GT, math.KT, math.SG, nlin.SI, math.RA.
  - **1600** raw / **1507** unique on disk (`raw/api_cat_raw.json`).
- **Targeted arXiv searches** (50 queries: FEEC, discrete conformal, PGA, cubical TT, QTT, reverse derivative, cellular sheaves, interaction combinators, indexed containers, combinatorial species, automatic sequences, catastrophe optics, conical meshes, discrete Morse, DiLL, SDG, tangent categories, profunctor optics, discrete Ricci, dual quaternions, Maxwell–Cremona, persistent homology, circle packing, proof nets, …): **20 OK / 30 FAIL 429**. Unique targeted **141** (`raw/targeted_raw.json`).
- **WebFetch abs-reads** for the four cream queries that 429'd: FEEC `0906.4325`, discrete conformal `1005.2698`, PGA `1901.05873`, cubical TT `1611.02108`. Idris 2, reverse derivative, and profunctor optics abs-read in full from arXiv/ar5iv.
- **OpenReview / Papers with Code / ACL Anthology** — not used as a harvest (historically 403 / non-JSON from this box; ACL not a firehose for this daypart). arXiv API + abs reads carried the cycle.
- Corpus dedupe against GitHub `main`: `radar/seen.json` (190 arxiv / 423 titles, updated 2026-08-16) + `seeds/INDEX.md` + `seeds/cards/*.md` (1–1050 complete). Local clone is stale (~999); GitHub main is source of truth.

**Fetch unique:** 1600 cat + 141 targeted + 4 webfetch = **1652** unique after id merge.

Already in seen/INDEX/prev-Curiosity: **21**. CL-only (cs.CL without other cream cats): **53**. Dirt-title regex (CA combinatorics cute-not-cream, Turing patterns, whale/orca, neutrino ORCA, black-hole, 2026 agent-memory, speculative-decoding, survey tail, manuals, Lenia/morphogenesis/CRN): **50**. Leftover after seen/CL/dirt: **1528**.

Keyword cream (too loose): **146** (`raw/strict_cheap.json`).

**Strict curiosity cheap filter** (would Anghel enjoy *and* crème not cute-not-cream; title-level technique + targeted abs-read; drop PH increments, dual-quaternion robotics clones, circle-packing increments, automatic-sequence increments, social-science false positives, survey-adjacent CT): **55**.

Keepers: **7** (keep rate **7/55 = 0.127**, hard cap **0.15**). No padding.

Dirt ban honoured: no CA combinatorics cute-not-cream, no quantum Turing patterns, no whale/orca bioacoustics, no neutrino ORCA, no black-hole lockstep, no 2026 agent-memory sludge, no speculative-decoding clones, no survey tail, no manuals, no Semantic Lenia / morphogenesis-as-gimmick / analog CRNs. Last Curiosity 1023–1029 not reminted. Last-cycle rejects (fluid cohomology, Internal Algebraic Type Theory, RevCRN, Semantic Lenia, blue noise Gibbs, cell polarization, terminal coalgebras, quasicrystalline Gibbs, five distance theorem, Banach isometric, Spectre, Spivak 2407.01849) not reminted.

## Keepers

| # | Year | Title | Why you might love this | URL |
|---|-----:|-------|-------------------------|-----|
| 1051 | 2010 | Finite element exterior calculus | DEC's analysis twin: subcomplex + bounded cochain projection; Koszul families recover Whitney / RT / Nédélec | https://arxiv.org/abs/0906.4325 |
| 1052 | 2015 | Discrete conformal maps and ideal hyperbolic polyhedra | Vertex scale factors + length-cross-ratios; circumcircle-preserving piecewise projective maps; flattening = ideal polyhedron | https://arxiv.org/abs/1005.2698 |
| 1053 | 2019 | Projective geometric algebra | Planes as 1-vectors, sandwich isometries, dual quaternions as even subalgebra, native dual-number AD | https://arxiv.org/abs/1901.05873 |
| 1054 | 2018 | Cubical Type Theory | Dimension names + Kan composition; univalence is a theorem via Glue; function extensionality computes | https://arxiv.org/abs/1611.02108 |
| 1055 | 2021 | Idris 2: Quantitative Type Theory in Practice | QTT 0/1/ω on binders in a compiler; erasure in the type; linear session types as a library | https://arxiv.org/abs/2104.00480 |
| 1056 | 2020 | Reverse derivative categories | Reverse AD = forward derivative + dagger on linear maps; cheap-gradient principle as an axiom | https://arxiv.org/abs/1910.07065 |
| 1057 | 2017 | Profunctor Optics: Modular Data Accessors | Lenses/prisms/traversals as ∀p. P a b → P s t; composition is function composition; Anoptic-named accessors | https://arxiv.org/abs/1703.10857 |

## Mix

3 maths-foundations / 2 graphics / 2 languages. No agents this cycle (wrong daypart; Frontier already took the agent firehose including 1050 DeepSeek Harness). Missing classics (FEEC, discrete conformal, PGA, cubical TT, Idris 2 QTT, reverse derivative, profunctor optics) — not Archive pantheon redo, not last Curiosity's tiling/string-diagram/DEC/rig slice.

Cite-id audit after abs/search: FEEC BAMS DOI `10.1090/S0273-0979-10-01278-4`; discrete conformal Geom. Topol. `10.2140/gt.2015.19.2155`; cubical TT LIPIcs `10.4230/LIPIcs.TYPES.2015.5` (year 2018); Idris 2 LIPIcs `10.4230/LIPIcs.ECOOP.2021.9`; reverse derivative CSL `10.4230/LIPIcs.CSL.2020.18`; profunctor optics `10.22152/programming-journal.org/2017/1/7`. Atkey QTT LICS 2018 has **no arxiv** (doi `10.1145/3209108.3209189`); dual-numbers reverse AD library card is `2507.12640`; parametric lenses `2404.00408`; categorical foundations of gradient-based learning `2103.01931`; DEC `math/0508341`.
