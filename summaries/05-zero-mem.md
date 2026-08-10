---
title: "Zero-Mem: Zero-Token Memory Operations for LLM Agents"
authors:
  - Yilin Xiao
  - Zhehan Zhu
  - Yujing Zhang
  - Jin Chen
  - Zijin Hong
  - Luyao Zhuang
  - Qinggang Zhang
  - Shengyuan Chen
  - Xiaocao Ouyang
  - Lingfei Ren
  - Xiao Huang
arxiv: "2607.29377"
source: "https://arxiv.org/abs/2607.29377"
source_file: "../sources/05-zero-mem.txt"
published: "2026-07-31"
version_reviewed: "v1 (2026-07-31)"
reviewed: "2026-08-10"
topics:
  - agents
  - evidence-retrieval
  - long-term-memory
  - provenance
  - retrieval-augmented-generation
---

# Zero-Mem

**Paper:** [Abstract](https://arxiv.org/abs/2607.29377) · [Official PDF](https://arxiv.org/pdf/2607.29377) · [Local plain-text source](../sources/05-zero-mem.txt)

## One-sentence takeaway

An agent-memory pipeline can preserve raw interaction traces and recover useful evidence without any LLM-generated intermediate memories: Zero-Mem combines an entity-context graph, a temporal hierarchy, lexical and dense retrieval, bounded evidence expansion, and deterministic calibration, invoking an LLM only for the final answer and outperforming the compared generative-memory systems on two static question-answering benchmarks.

## Problem and operating regime

Many agent-memory systems ask an LLM to summarize conversations, extract durable facts, rewrite old records, construct semantic notes, or plan retrieval. These transformations can reduce the amount of history presented later, but they create recurring inference cost and place generated abstractions between the final answer and the original evidence. A summary may omit a qualifier, merge two subjects, or blur the order in which facts changed.

Zero-Mem asks whether all such generative memory operations are necessary. It defines **zero-token memory operations** precisely: memory construction, organization, routing, retrieval, evidence completion, and deterministic calibration make no LLM calls and consume no LLM input or output tokens. Encoder inference and ordinary computation still occur, and the final question-answering reader is still an LLM. The name therefore means zero *generative-model tokens inside the memory subsystem*, not zero computation or zero tokens end to end.

The original interaction trace remains authoritative. Every index entry and derived retrieval unit points back to source text, session identifiers, timestamps, boundaries, and available metadata. Generated summaries never replace the observed record.

## Two complementary views of the trace

Zero-Mem builds two non-generative views over the same source units.

### Relational entity-context graph

A conventional named-entity recognizer such as spaCy extracts entities from trace units. Context nodes connect to observed entities through co-occurrence edges, and adjacent context units receive continuity edges. These are observed associations rather than LLM-generated semantic triples.

BM25 supplies exact lexical access for names, dates, values, titles, and phrases. BGE-M3 embeddings supply dense similarity when wording differs. At query time, detected query entities are aligned with graph entities, relevance propagates through co-occurrence sentences, and personalized PageRank produces a query-conditioned ranking of context nodes. Exact lexical and phrase matches refine the result.

### Temporal hierarchy

The same history is organized at several granularities: individual turns, short windows, episodes, and local spans surrounding a selected turn. Retrieval moves coarse to fine, from an episode to a window to a source turn, restoring nearby context when the selected statement depends on its conversational neighborhood.

This view preserves ordering, session boundaries, and local state that a graph alone can flatten. The graph is intended to connect distributed relational evidence; the hierarchy is intended to retain the immediate and temporal context in which that evidence appeared.

## Query routing, evidence closure, and calibration

For each question, deterministic processing creates a lightweight profile containing a subject, keywords, expected answer type, temporal cues, and any applicable interaction boundary. It classifies the query as primarily relational or local. Both retrieval views still run, but the classification reverses their fusion weights: the primary view receives weight 0.6 and the secondary view 0.4 in the experiments.

The two rankings are normalized and fused. **Evidence closure** then adds bounded support: graph neighbors can supply a missing relational bridge, while temporal neighbors can restore surrounding turns. Duplicate material is merged by source or unit identity.

Before final answering, deterministic filters reject evidence that violates subject, temporal, provenance, or boundary constraints and rank what remains for compatibility with the query. After the reader answers, a second deterministic stage performs checks that are possible without semantic generation. It may normalize formatting, shorten extractively, prune unsupported list items, or replace a scalar answer only when the retrieved evidence contains a unique type-compatible candidate. When no deterministic correction is justified, the reader's answer is retained.

The intended chain is therefore:

1. preserve the original trace;
2. build graph, hierarchy, lexical, and dense access structures;
3. characterize the query with deterministic signals;
4. retrieve and fuse both evidence views;
5. add narrowly bounded relational and local context;
6. filter the evidence without rewriting it;
7. invoke one final reader LLM; and
8. apply only defensible deterministic output checks.

## Evaluation

The paper evaluates static evidence recovery and question answering, not an agent acting in a live environment.

**LoCoMo** contains long, multi-session conversations and questions categorized as single-hop, multi-hop, temporal, and open-domain. **HotpotQA** is used in a curated memory-evaluation form containing gold supporting documents plus distractor passages. Adding distractors creates nominal context sizes of 56K, 224K, and 448K tokens.

All methods use the same final reader and equivalent retrieved-context budgets. Experiments are repeated with GPT-4o-mini and Qwen2.5-14B-Instruct. The main retrieval comparison caps every system at five primary retrieved items.

On LoCoMo with GPT-4o-mini, Zero-Mem reaches 59.15 average F1 and 52.96 BLEU-1. The strongest overall comparison, GAM, reaches 53.75 and 47.51. With Qwen2.5-14B, Zero-Mem reaches 57.57 F1 and 51.41 BLEU-1, versus GAM at 52.70 and 46.55. Zero-Mem leads the aggregate metrics with both readers, although GAM is slightly ahead on GPT-4o-mini multi-hop F1.

On the HotpotQA variant, Zero-Mem has the highest F1 in all six reader-by-context settings. With GPT-4o-mini it scores 72.07, 66.43, and 65.04 at 56K, 224K, and 448K respectively. With Qwen2.5-14B it scores 68.58, 65.47, and 61.02. The paper reports an average advantage of 5.52 F1 points over the strongest baseline across these settings.

## Efficiency and ablations

The efficiency comparison isolates memory work outside the shared final reader. On LoCoMo with GPT-4o-mini and four concurrent threads, Zero-Mem reports no LLM calls or LLM tokens for memory processing and 334.77 seconds total, or 0.22 seconds per query. LightMem, the fastest compared generative-memory baseline, reports 0.51 seconds per query and 877,086 memory-operation tokens. The paper therefore reports a 57.6% latency reduction relative to LightMem while also improving answer quality.

Zero-token operation does not remove the cost of embeddings, named-entity recognition, index construction, graph traversal, lexical retrieval, or deterministic post-processing. Those costs are included as computation rather than LLM-token consumption.

The HotpotQA ablation at 56K context uses GPT-4o-mini. The complete system obtains 72.07 F1 and 69.66 BLEU-1. A graph-only system falls to 62.50 and 59.90, while a hierarchy-only system falls to 54.88 and 51.40. Removing evidence closure yields 67.90 and 65.43; removing calibration yields 70.13 and 66.45. These results support complementarity within this benchmark, where distributed entity relations strongly favor the graph view.

On LoCoMo, increasing the retrieval budget from one to five candidates raises F1 from 52.59 to 59.15. Performance peaks at ten candidates; the top-five configuration used for comparison trails it by only 0.65 F1 and 0.83 BLEU-1.

## Strengths

- The raw trace remains the source of record, and every derived view preserves provenance.
- The paper separates memory-operation cost from the unavoidable cost of final answer generation.
- Both readers and all baselines share the final-QA model and context budget, reducing a common source of confounding.
- The design combines exact lexical access, dense similarity, relational traversal, temporal locality, and hard boundaries rather than assuming one retrieval score solves every query.
- The ablations isolate the two structural views, evidence closure, and deterministic calibration.
- Results are consistent across a closed reader and an open reader, two task families, and several nominal context sizes.
- The negative architectural claim is useful: an LLM-generated memory abstraction is not required for strong performance on these retrieval-centered tasks.

## Limitations and cautions

- LoCoMo and the curated HotpotQA variant are question-answering benchmarks over static text. They do not test an acting agent that must remember tool outcomes, unfinished intentions, code changes, permissions, causal dependencies, or a rapidly changing environment.
- HotpotQA includes the gold supporting documents among distractors. The experiment tests selection and connection inside a prepared workspace, not discovery from an open or adversarial corpus.
- F1 and BLEU-1 reward lexical overlap and are imperfect measures of factual correctness, evidence completeness, temporal consistency, and calibrated uncertainty.
- The reported system depends on hand-designed query profiling, routing rules, boundaries, type checks, and fusion weights. Their portability to new languages, domains, schemas, and unconventional questions is not established.
- Named-entity recognition and entity alignment can split aliases, merge distinct entities, or miss domain-specific identifiers. The evaluated corpora do not establish robustness to those production cases.
- A provenance-bearing edge records co-occurrence or adjacency, not trust, causality, contradiction, or semantic truth. The graph must not be mistaken for a validated knowledge graph.
- The paper does not evaluate deletion, correction, conflict resolution, privacy boundaries, access control, prompt injection inside stored traces, or incremental index maintenance under sustained writes.
- The timing result should not be treated as a universal production cost. Hardware, implementation quality, corpus size, index-building frequency, update workload, and amortization all affect the balance between generative and non-generative memory.
- No confidence intervals, repeated-run variance, or statistical tests accompany the principal quality comparisons.
- The GitHub repository is promised only after peer review and was not available when this version was reviewed, preventing independent implementation inspection and reproduction.

## Implications for Broadside

Zero-Mem supports a clean separation between an archival layer and its access structures. Observer should preserve fetched papers, metadata, extraction timestamps, source URLs, and exact text as authoritative records. Summaries, embeddings, graphs, topic labels, and retrieval indexes should be rebuildable derived views, never the only surviving representation of evidence.

Observer can expose several retrieval surfaces over the same records. Exact lexical search is appropriate for identifiers, paper titles, model names, dates, and numerical results. Dense retrieval is appropriate for conceptual similarity. A citation or entity graph can connect papers, authors, projects, methods, and claims. A temporal hierarchy can preserve publication versions, observation order, and the local context surrounding a result. The point is not that Zero-Mem's PageRank formula must be copied, but that these access patterns have different failure modes and should remain independently inspectable.

Retrieval should return provenance-bearing spans and adjacent context rather than generated memory statements. Any synthesis generated for Garden should carry links back to exact Observer records. Query boundaries such as organization, topic, source class, cutoff date, and confidentiality level should be hard filters before semantic ranking, not suggestions embedded only in a prompt.

The paper also argues for measuring when model inference is actually necessary. Deterministic parsing, normalization, deduplication, date filtering, identifier matching, and schema checks should not consume an LLM call merely because the larger system is agentic. A reader or synthesis model should enter only where semantic judgment is needed.

At the same time, Broadside cannot assume its evidence resembles LoCoMo. Research sources disagree, revise claims, cite one another incorrectly, and contain untrusted instructions. Observer needs explicit contradiction, version, trust, and access-control semantics beyond an entity co-occurrence graph. Zero-Mem supplies a retrieval pattern, not a complete organizational memory model.

## Bottom line

Zero-Mem demonstrates a credible and reproducible-looking architectural principle: keep the evidence verbatim, construct multiple non-generative indexes over it, and spend model inference only on the final semantic task. Its benchmark gains are substantial under shared readers and retrieval budgets, and the latency advantage is plausible because competing systems repeatedly invoke language models. The evidence remains limited to static QA, hand-engineered routing, lexical-overlap metrics, and unavailable code. For Broadside, the durable contribution is provenance-first memory with rebuildable relational and temporal views—not the claim that all real agent memory can be reduced to benchmark retrieval.
