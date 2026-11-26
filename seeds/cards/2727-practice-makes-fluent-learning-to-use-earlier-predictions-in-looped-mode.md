---
title: "Practice Makes Fluent: Learning to Use Earlier Predictions in Looped Models"
authors:
  - "Minseok seo"
  - "Hee-Seon Kim"
  - "Changick Kim"
year: 2026
venue: "arXiv preprint (cs.RO)"
arxiv: "2611.33722"
doi: null
source: "https://arxiv.org/abs/2611.33722"
version_reviewed: "v1"
topics:
  - "autoresearch-experiment-selection"
  - "continual-agent-skills"
  - "looped-transformers"
  - "adaptive-computation"
seed_rank: 2727
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 7
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 185-cacheblend-fast-large-language-model-serving-for-rag-with-ca
cites:
  - title: "Practice Makes Fluent: Learning to Use Earlier Predictions in Looped Models"
    url: "https://arxiv.org/abs/2611.33722"
    year: 2026
    arxiv: "2611.33722"
    doi: null
  - title: "Recurrent-Depth VLA: Implicit Test-Time Compute Scaling of Vision-Language-Action Models via Latent Iterative Reasoning"
    url: "https://arxiv.org/abs/2602.07845"
    year: 2026
    arxiv: "2602.07845"
    doi: null
  - title: "Benchmarking the Spectrum of Agent Capabilities (Crafter)"
    url: "https://arxiv.org/abs/2109.06780"
    year: 2021
    arxiv: "2109.06780"
    doi: null
  - title: "LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning"
    url: "https://arxiv.org/abs/2306.03310"
    year: 2023
    arxiv: "2306.03310"
    doi: null
  - title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
    url: "https://arxiv.org/abs/2305.16291"
    year: 2023
    arxiv: "2305.16291"
    doi: null
  - title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
    url: "https://arxiv.org/abs/2303.11366"
    year: 2023
    arxiv: "2303.11366"
    doi: null
---

# Practice Makes Fluent: Learning to Use Earlier Predictions in Looped Models

## One-sentence takeaway

FLUENT trains looped models to need fewer loops on tasks they have practised, with no extra labels or rewards. It distills the frozen initial model's final-loop prediction into early loops, anchors the current final loop to the same teacher, and trains the exit gate against the anchored output. On LIBERO it uses 36.7% fewer action-head iterations than RD-VLA while improving success, and on a real robot success rises from 62.3% to 74.6% while mean time on successful episodes falls from 69 s to 31 s.

## Why it matters here

Most agent "experience" work stores practice outside the model: reasoning traces, skill libraries, cached computation (Reflexion, Voyager, CacheBlend are all cited). FLUENT stores it in the weights and measures it as compute saved: practice makes a once-hard task cheaper, not only more accurate. That is a concrete, label-free version of the rehearsal/practice loop on Broadside's list, and it connects to the looped-model thread (cards 2680, 2703) through early exits.

## Key ideas

- **Question:** can experience make a previously difficult task need less computation? This complements input-adaptive early exit.
- **Translate:** distill the frozen initial model's final-loop output into early predictions.
- **Anchor:** shared weights mean early-loop updates move later loops too, so keep the current final-loop prediction close to the same frozen teacher.
- **Gate:** retrain the exit policy on updated predictions, trading disagreement with the current final loop against further computation.
- **Evaluated** in Crafter (new worlds, better performance at shallower depth), LIBERO, a language-model setting (accuracy kept at lower selected depth), and a real robot.

## Caveats

I read the abstract and introduction of the v1 HTML. It is a robotics-first paper: the language-model result is one setting, and the gains are on tasks drawn from the practised distribution. The teacher is the frozen initial model, so practice can make the model cheaper but not better than that teacher's final loop on its own terms. The real-robot numbers come from one platform.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.33722
- PDF: https://arxiv.org/pdf/2611.33722
- HTML: https://arxiv.org/html/2611.33722v1
- Project page: https://msseok96-cpu.github.io/FLUENT/
