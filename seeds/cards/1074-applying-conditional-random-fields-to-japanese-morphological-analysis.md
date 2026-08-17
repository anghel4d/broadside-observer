---
title: "Applying Conditional Random Fields to Japanese Morphological Analysis"
authors:
  - "Taku Kudo"
  - "Kaoru Yamamoto"
  - "Yuji Matsumoto"
year: 2004
venue: "EMNLP"
arxiv: null
doi: null
source: "https://aclanthology.org/W04-3230/"
topics:
  - "japanese-morphology"
  - "crf"
  - "mecab"
  - "word-segmentation"
seed_rank: 1074
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "languages"
relevance_score: 10
lineage: japanese-crf-morphology
cites:
  - title: "Two-Level Morphology: A General Computational Model for Word-Form Recognition and Production"
    url: "http://www.ling.helsinki.fi/~koskenni/doc/Two-LevelMorphology.pdf"
    year: 1983
    arxiv: null
    doi: null
  - title: "A Stochastic Japanese Morphological Analyzer Using a Forward-DP Backward-A* N-Best Search Algorithm"
    url: "https://aclanthology.org/C94-1032/"
    year: 1994
    arxiv: null
    doi: "10.3115/991886.991920"
  - title: "Conditional Random Fields: Probabilistic Models for Segmenting and Labeling Sequence Data"
    url: "https://doi.org/10.5555/645530.655813"
    year: 2001
    arxiv: null
    doi: null
see:
  - "1073-two-level-morphology"
---

# Applying Conditional Random Fields to Japanese Morphological Analysis

## One-sentence takeaway

Japanese has no spaces, so CRFs have to score a *lattice* of (span, POS) together — and that is how you get flexible hierarchical features without MEMM label/length bias. MeCab's academic paper.

## Why it matters here

ano's Japanese tokenizer is this paper, not a modern LLM BPE. Kudo–Yamamoto–Matsumoto 2004 is the EMNLP write-up of applying CRFs to joint segmentation+POS on the standard Japanese testbed, beating HMM/MEMM, and it is the design MeCab shipped. Pair with Koskenniemi (1073): two-level FSTs for morphophonology, CRFs for the lattice of word boundaries. GRID COMMAND's Japanese orders need exactly this joint decode, not a space-tokenized English pipeline.

## Key ideas

- Standard CRFs assume observed token boundaries; Japanese does not have them, so the model is defined on candidate morpheme lattices.
- Hierarchical POS tagsets, overlapping character-type features, and neighboring-word features are first-class (HMMs could not take them).
- Global path normalization kills MEMM label bias and the length bias that short segmentations otherwise win.
- Same experimental split as prior HMM/MEMM Japanese morphology papers; CRFs win on the standard corpus.
- L1 vs L2 regularization: L1 yields a smaller feature set at near-equal accuracy.

## Caveats

- MeCab the *software* also has dictionary/unidic engineering this paper does not cover.
- Nagata 1994 (forward-DP / backward-A*) is the stochastic precursor; we kept the CRF paper as the one that became the analyzer.
- 2004, not 20th c., but pre-2018 and the Japanese-morphology gem that slipped every modern feed.

## Links

- ACL Anthology: https://aclanthology.org/W04-3230/
- PDF: https://aclanthology.org/W04-3230.pdf
