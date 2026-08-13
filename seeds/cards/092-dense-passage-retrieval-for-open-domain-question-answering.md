---
title: Dense Passage Retrieval for Open-Domain Question Answering
authors:
- Vladimir Karpukhin
- Barlas Oğuz
- Sewon Min
- Patrick Lewis
- Ledell Wu
- Sergey Edunov
- Danqi Chen
- Wen-tau Yih
year: 2020
venue: EMNLP
arxiv: '2004.04906'
doi: null
source: https://arxiv.org/abs/2004.04906
topics:
- rag
- retrieval
seed_rank: 92
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 9
cites:
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
  - title: "Natural Questions: A Benchmark for Question Answering Research"
    url: "https://doi.org/10.1162/tacl_a_00276"
    year: 2019
    arxiv: null
    doi: "10.1162/tacl_a_00276"
  - title: "BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension"
    url: "https://doi.org/10.18653/v1/2020.acl-main.703"
    year: 2020
    arxiv: null
    doi: "10.18653/v1/2020.acl-main.703"
  - title: "ColBERT"
    url: "https://doi.org/10.1145/3397271.3401075"
    year: 2020
    arxiv: null
    doi: "10.1145/3397271.3401075"
  - title: "SQuAD: 100,000+ Questions for Machine Comprehension of Text"
    url: "https://doi.org/10.18653/v1/d16-1264"
    year: 2016
    arxiv: null
    doi: "10.18653/v1/d16-1264"
  - title: "Learning deep structured semantic models for web search using clickthrough data"
    url: "https://doi.org/10.1145/2505515.2505665"
    year: 2013
    arxiv: null
    doi: "10.1145/2505515.2505665"
  - title: "Semantic Parsing on Freebase from Question-Answer Pairs"
    url: "https://doi.org/10.18653/v1/d13-1160"
    year: 2013
    arxiv: null
    doi: "10.18653/v1/d13-1160"
  - title: "Learning to rank using gradient descent"
    url: "https://doi.org/10.1145/1102351.1102363"
    year: 2005
    arxiv: null
    doi: "10.1145/1102351.1102363"
  - title: "Billion-Scale Similarity Search with GPUs"
    url: "https://doi.org/10.1109/tbdata.2019.2921572"
    year: 2019
    arxiv: null
    doi: "10.1109/tbdata.2019.2921572"
  - title: "SIGNATURE VERIFICATION USING A “SIAMESE” TIME DELAY NEURAL NETWORK"
    url: "https://doi.org/10.1142/9789812797926_0003"
    year: 1994
    arxiv: null
    doi: "10.1142/9789812797926_0003"
  - title: "Indexing by latent semantic analysis"
    url: "https://doi.org/10.1002/(sici)1097-4571(199009)41:6<391::aid-asi1>3.0.co;2-9"
    year: 1990
    arxiv: null
    doi: "10.1002/(sici)1097-4571(199009)41:6<391::aid-asi1>3.0.co;2-9"
  - title: "REALM: Retrieval-Augmented Language Model Pre-Training"
    url: "http://arxiv.org/abs/2002.08909"
    year: 2020
    arxiv: "2002.08909"
    doi: "10.48550/arxiv.2002.08909"
see:
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
---

# Dense Passage Retrieval for Open-Domain Question Answering

## One-sentence takeaway

Open-domain question answering relies on efficient passage retrieval to select candidate contexts, where traditional sparse vector space models, such as TF-IDF or BM25, are the de facto method.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests (Dense Passage Retrieval for Open-Domain Question Answering)

## Key ideas

- Open-domain question answering relies on efficient passage retrieval to select candidate contexts, where traditional sparse vector space models, such as TF-IDF or BM25, are the de facto method.
- In this work, we show that retrieval can be practically implemented using dense representations alone, where embeddings are learned from a small number of questions and passages by a simple dual-encoder framework.
- When evaluated on a wide range of open-domain QA datasets, our dense retriever outperforms a strong Lucene-BM25 system largely by 9%-19% absolute in terms of top-20 passage retrieval accuracy, and helps our end-to-end QA system establish new state-of-the-art on multiple open-domain QA benchmarks.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2004.04906](https://arxiv.org/abs/2004.04906)
- URL: https://arxiv.org/abs/2004.04906
