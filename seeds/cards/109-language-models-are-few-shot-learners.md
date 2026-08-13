---
title: "Language Models are Few-Shot Learners"
authors:
  - "Tom B. Brown"
  - "Benjamin Mann"
  - "Nick Ryder"
  - "Melanie Subbiah"
  - "Jared Kaplan"
  - "Prafulla Dhariwal"
  - "Arvind Neelakantan"
  - "Pranav Shyam"
  - "Girish Sastry"
  - "Amanda Askell"
  - "Sandhini Agarwal"
  - "Ariel Herbert-Voss"
  - "Gretchen Krueger"
  - "Tom Henighan"
  - "Rewon Child"
  - "Aditya Ramesh"
  - "Daniel M. Ziegler"
  - "Jeffrey Wu"
  - "Clemens Winter"
  - "Christopher Hesse"
  - "Mark Chen"
  - "Eric Sigler"
  - "Mateusz Litwin"
  - "Scott Gray"
  - "Benjamin Chess"
  - "Jack Clark"
  - "Christopher Berner"
  - "Sam McCandlish"
  - "Alec Radford"
  - "Ilya Sutskever"
  - "Dario Amodei"
year: 2020
venue: "arXiv:cs.CL"
arxiv: "2005.14165"
doi: null
source: "https://arxiv.org/abs/2005.14165"
topics:
  - llm-systems
seed_rank: 109
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Natural Questions: A Benchmark for Question Answering Research"
    url: "https://doi.org/10.1162/tacl_a_00276"
    year: 2019
    arxiv: null
    doi: "10.1162/tacl_a_00276"
    card: null
  - title: "Domain randomization for transferring deep neural networks from simulation to the real world"
    url: "https://doi.org/10.1109/iros.2017.8202133"
    year: 2017
    arxiv: null
    doi: "10.1109/iros.2017.8202133"
    card: null
  - title: "Distilling the Knowledge in a Neural Network"
    url: "http://arxiv.org/abs/1503.02531"
    year: 2015
    arxiv: "1503.02531"
    doi: "10.48550/arxiv.1503.02531"
    card: null
  - title: "Glove: Global Vectors for Word Representation"
    url: "https://doi.org/10.3115/v1/d14-1162"
    year: 2014
    arxiv: null
    doi: "10.3115/v1/d14-1162"
    card: null
  - title: "Semantic Parsing on Freebase from Question-Answer Pairs"
    url: "https://doi.org/10.18653/v1/d13-1160"
    year: 2013
    arxiv: null
    doi: "10.18653/v1/d13-1160"
    card: null
  - title: "Estimating or Propagating Gradients Through Stochastic Neurons for Conditional Computation"
    url: "http://arxiv.org/abs/1308.3432"
    year: 2013
    arxiv: "1308.3432"
    doi: "10.48550/arxiv.1308.3432"
    card: null
  - title: "Exploring the Limits of Language Modeling"
    url: "http://arxiv.org/abs/1602.02410"
    year: 2016
    arxiv: "1602.02410"
    doi: "10.48550/arxiv.1602.02410"
    card: null
  - title: "SentiWordNet 3.0: An Enhanced Lexical Resource for Sentiment Analysis and Opinion Mining"
    url: "https://doi.org/10.63317/2jktnrykui9s"
    year: 2010
    arxiv: null
    doi: "10.63317/2jktnrykui9s"
    card: null
  - title: "The PASCAL Recognising Textual Entailment Challenge"
    url: "https://doi.org/10.1007/11736790_9"
    year: 2006
    arxiv: null
    doi: "10.1007/11736790_9"
    card: null
  - title: "QuAC: Question Answering in Context"
    url: "https://doi.org/10.18653/v1/d18-1241"
    year: 2018
    arxiv: null
    doi: "10.18653/v1/d18-1241"
    card: null
  - title: "Optimization as a Model for Few-Shot Learning"
    url: "https://openreview.net/pdf?id=rJY0-Kcll"
    year: 2017
    arxiv: null
    doi: null
    card: null
  - title: "Bootstrapping a Data-Set and Model for Question-Answering in Portuguese (Short Paper)"
    url: "http://arxiv.org/abs/1901.02860"
    year: 2019
    arxiv: "1901.02860"
    doi: "10.4230/lipics.ecrts.2023.7"
    card: null
---

# Language Models are Few-Shot Learners

## One-sentence takeaway

Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task.

## Why it matters here

in-cluster systems/agents paper for historical shortlist coverage (Language Models are Few-Shot Learners)

## Key ideas

- Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task.
- While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets of thousands or tens of thousands of examples.
- By contrast, humans can generally perform a new language task from only a few examples or from simple instructions - something which current NLP systems still largely struggle to do.
- Here we show that scaling up language models greatly improves task-agnostic, few-shot performance, sometimes even reaching competitiveness with prior state-of-the-art fine-tuning approaches.
- Specifically, we train GPT-3, an autoregressive language model with 175 billion parameters, 10x more tha

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2005.14165](https://arxiv.org/abs/2005.14165)
- URL: https://arxiv.org/abs/2005.14165
