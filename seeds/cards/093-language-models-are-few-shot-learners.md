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
seed_rank: 93
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
    doi: null
  - title: "Language Models are Unsupervised Multitask Learners"
    url: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
    year: 2019
    arxiv: null
    doi: null
see:
  - "013-attention-is-all-you-need"
---

# Language Models are Few-Shot Learners

## One-sentence takeaway

GPT-3, a 175B autoregressive LM, does translation, QA, cloze, and on-the-fly reasoning from text demonstrations alone — no gradient updates — and sometimes matches prior fine-tuned SOTA.

## Why it matters here

In-context learning is the default interface of every ano/Broadside agent: tasks arrive as prompts, not as fine-tunes.

## Key ideas

- Pretrain-then-fine-tune still needed thousands of labeled examples per task; humans do the same work from a few examples or instructions.
- Scaling to 10× any previous dense LM makes that few-shot regime competitive, with the task specified purely in the prompt.
- Strong results on translation, question answering, cloze, word unscrambling, novel-word use, and 3-digit arithmetic.
- Some datasets still fail, and web-scale training introduces contamination/methodology issues the paper flags.
- Human evaluators struggle to distinguish GPT-3 news samples from human articles; societal impacts are discussed in the paper.

## Caveats

## Links

- arXiv: [2005.14165](https://arxiv.org/abs/2005.14165)
- PDF: https://arxiv.org/pdf/2005.14165
