---
title: "Conditional Random Fields: Probabilistic Models for Segmenting and Labeling Sequence Data"
authors:
  - "John D. Lafferty"
  - "Andrew McCallum"
  - "Fernando C. N. Pereira"
year: 2001
venue: "ICML"
arxiv: null
doi: "10.5555/645530.655813"
source: "https://repository.upenn.edu/entities/publication/c9aea099-b5c8-4fdd-901c-15b6f889e4a7"
topics:
  - "crf"
  - "sequence-labeling"
  - "computational-linguistics-interfaces"
  - "japanese-morphology"
seed_rank: 1104
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "languages"
relevance_score: 10
lineage: conditional-random-fields
cites:
  - title: "Applying Conditional Random Fields to Japanese Morphological Analysis"
    url: "https://aclanthology.org/W04-3230/"
    year: 2004
    arxiv: null
    doi: null
  - title: "Maximum Entropy Markov Models for Information Extraction and Segmentation"
    url: "https://www.cs.cmu.edu/~lafferty/pub/memm.pdf"
    year: 2000
    arxiv: null
    doi: null
  - title: "Two-Level Morphology: A General Computational Model for Word-Form Recognition and Production"
    url: "http://www.ling.helsinki.fi/~koskenniemi/doc/Two-LevelMorphology.pdf"
    year: 1983
    arxiv: null
    doi: null
  - title: "An Efficient Context-Free Parsing Algorithm"
    url: "https://doi.org/10.1145/362007.362035"
    year: 1970
    arxiv: null
    doi: "10.1145/362007.362035"
see:
  - "1074-applying-conditional-random-fields-to-japanese-morphological-analysis"
  - "1073-two-level-morphology"
  - "1102-an-efficient-context-free-parsing-algorithm"
---

# Conditional Random Fields: Probabilistic Models for Segmenting and Labeling Sequence Data

## One-sentence takeaway

Undirected global normalization: *p(Y|X) ∝ exp(∑ λₖ fₖ)* over the whole label sequence, so you get HMM-style structure without label bias or a generative *p(X)*.

## Why it matters here

Kudo 1074 *is* MeCab; this is the model MeCab instantiates. Archive 2026-08-18 minted the Japanese lattice application and cited Lafferty–McCallum–Pereira 2001 without having the origin card. CRFs let ano's morphological / POS / BIO command-tagger use overlapping, hierarchical features (characters, dictionary hits, previous labels) without the MEMM "states with few successors steal mass" bug. Pair with Koskenniemi (1073) for the FST morphophonology and Earley (1102) for the CFG command grammar: FST → lattice, CRF → labels, Earley → tree.

## Key ideas

- *(X, Y)* is a CRF on graph *G* if, conditioned on *X*, the *Yᵥ* obey the Markov property on *G*. The chain is the usual case.
- Discriminative: model *p(Y|X)* only. Features *fₖ* can look at the whole observation *X* at every position, not just a local emission.
- Label bias of MEMMs / directed maximum-entropy Markov models: local per-state normalization starves transitions out of high-entropy states. CRFs normalize *once*, globally.
- Iterative scaling / gradient methods for the λₖ. Compared to HMMs and MEMMs on synthetic data and POS.

## Caveats

- Training is global and convex but not cheap; linear-chain forward-backward is the workhorse, not a neural net. Later neural CRFs are a different paper.
- Japanese (1074) cannot assume observed token boundaries — the lattice CRF is the extra construction, not in this ICML paper.
- Independent of two-level rules (1073); do not treat CRF emission features as a rewrite-rule compiler.

## Links

- ACM: [10.5555/645530.655813](https://doi.org/10.5555/645530.655813)
- Penn ScholarlyCommons: [https://repository.upenn.edu/entities/publication/c9aea099-b5c8-4fdd-901c-15b6f889e4a7](https://repository.upenn.edu/entities/publication/c9aea099-b5c8-4fdd-901c-15b6f889e4a7)
- ICML 2001, pp. 282–289
