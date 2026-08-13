# Curiosity radar — 2026-08-13

Daypart: **curiosity** (odd calendar date, before noon Europe/Bucharest; manual Run now).
Keep-rate hard cap: **0.15**. Prefer 5–12 exceptional over filling the quota.

## Poll

- arXiv Atom (`export.arxiv.org`), ~3s between calls, TLS retry on q-bio:
  - `cat:math.CT` (40), `cat:math.CO` (40), `cat:cs.CG` (40), `cat:nlin.CG` (30)
  - `cat:math.DS` (30), `cat:physics.class-ph` (25), `cat:math.MG` (20), `cat:nlin.PS` (20), `cat:cs.FL` (20)
  - cellular automata / falling sand; reaction-diffusion / Turing / morphogenesis
  - array language / APL / BQN / combinatory logic; algebraic / typed effects
  - suffix arrays / word-representable / Lyndon; radiance / probe GI
  - category theory + programming; discrete geometry / DEC; Wang / aperiodic
  - q-bio.TO / q-bio.QM / morphogenesis (TLS retry)
- Hugging Face Daily Papers (40) — mostly LLM-agent firehose, almost all banned
- OpenReview light search (20) — no keepers

Fetch unique (all sources, id/title key): **548**.
Corpus/seen arXiv collisions: 9. LLM-agent / transformer / RAG / NeRF dumps banned: 25.
Cheap topic filter leftover: 434 (too wide vs 80–150 target).
**Strict curiosity cheap filter (working unique candidate pool): 98.**

## Filter

Score for delight + Anghel fit (array languages, combinatory logic, category theory, CA / falling sand, Turing morphogenesis, algebraic effects, odd algorithms). Skip generic nlin.CG traffic models, generic PDE reaction-diffusion, neural-CA language models, APL→C# translation, probe-GI already in the library.

- `candidate_count`: 98
- `keep_count`: 12
- `keep_rate`: 0.122 (cap 0.15)

## Keepers

| id | arxiv | title |
|----|-------|-------|
| 918 | 2507.12640 | Dual-Numbers Reverse AD for Functional Array Languages |
| 1172 | 2405.01675 | Clones, closed categories, and combinatory logic |
| 1173 | 2604.12194 | Simple Types for Polymorphic Functions |
| 1174 | 2411.14579 | Functional Array Programming in an Extended Pi-Calculus |
| 1175 | 2605.31157 | Counting number-conserving cellular automata with radius 1 |
| 1176 | 2606.08972 | Three-dimensional Fundamental Diagrams of Five-neighbor Particle Cellular Automata |
| 1177 | 2607.27402 | Continuous Game of Life: cell emergence and self-organization at the edge of growth |
| 1178 | 2607.26331 | Quantum Turing Patterns |
| 1179 | 2607.24619 | Control of morphology and topology in a lattice model of branching morphogenesis |
| 919 | 2606.09526 | When Types Intersect and Effects Get Handled |
| 1181 | 2605.25733 | Characterization of Word-Representable Near-Triangulations |
| 1182 | 2607.05324 | Necklaces and Lyndon words in colexicographic order |

Radiance / probe GI: inspected; Adaptive Dynamic GI and thin-client probes are not surprising relative to existing Radiance Cascades / DDGI cards — skipped.

## Publish

Seed batch `curiosity-2026-08-13`. Cards 918–919. INDEX new section. `radar/seen.json` append-only arxiv+titles for keepers. Did not touch `seeds/app`.
