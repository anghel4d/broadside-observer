---
title: "Inferring Strategies from Limited Reconnaissance in Real-time Strategy Games"
authors:
  - "Jesse Hostetler"
  - "Ethan W. Dereszynski"
  - "Thomas G. Dietterich"
  - "Alan Fern"
year: 2012
venue: "UAI"
arxiv: "1210.4880"
doi: null
source: "https://arxiv.org/abs/1210.4880"
topics:
  - opponent-modeling
  - partial-observability
  - rts-bots
seed_rank: 114
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "scratch_curated.json"
relevance_score: 9
cites:
  - title: "A Bayesian model for opening prediction in RTS games with application to StarCraft"
    url: "https://doi.org/10.1109/CIG.2011.6032018"
    year: 2011
    arxiv: "1111.3735"
    doi: "10.1109/CIG.2011.6032018"
  - title: "Learning Probabilistic Behavior Models in Real-Time Strategy Games"
    url: "https://doi.org/10.1609/aiide.v7i1.12433"
    year: 2011
    arxiv: null
    doi: "10.1609/aiide.v7i1.12433"
  - title: "A data mining approach to strategy prediction"
    url: "https://doi.org/10.1109/cig.2009.5286483"
    year: 2009
    arxiv: null
    doi: "10.1109/cig.2009.5286483"
  - title: "Building a player strategy model by analyzing replays of real-time strategy games"
    url: "https://doi.org/10.1109/ijcnn.2008.4634237"
    year: 2008
    arxiv: null
    doi: "10.1109/ijcnn.2008.4634237"
  - title: "Opponent Modeling in Real-Time Strategy Games."
    url: "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.387.92"
    year: 2007
    arxiv: null
    doi: null
  - title: "Rao-Blackwellised Particle Filtering for Dynamic Bayesian Networks"
    url: "https://doi.org/10.1007/978-1-4757-3437-9_24"
    year: 2000
    arxiv: null
    doi: "10.1007/978-1-4757-3437-9_24"
  - title: "ESTIMATING SITE OCCUPANCY RATES WHEN DETECTION PROBABILITIES ARE LESS THAN ONE"
    url: "https://doi.org/10.1890/0012-9658(2002)083[2248:esorwd]2.0.co;2"
    year: 2002
    arxiv: null
    doi: "10.1890/0012-9658(2002)083[2248:esorwd]2.0.co;2"
see:
  - "115-a-bayesian-model-for-opening-prediction-in-rts-games-with-ap"
---

# Inferring Strategies from Limited Reconnaissance in Real-time Strategy Games

## One-sentence takeaway

A dynamic Bayes net tracks latent StarCraft unit counts under a zero-inflated Poisson production model and treats scouting coverage of the main and natural as Beta-Binomial detection effort, so unseen units can be inferred from failed searches.

## Why it matters here

Broadside / GRID COMMAND fog-of-war is costly evidence, not missing data: this is the generative opponent model that turns a scout's empty pass over a base into a posterior on unobserved tech and army composition.

## Key ideas

- Hidden strategy state $S_t$ steps every 30 s; given $S_t$, each unit type independently decides whether to produce (Bernoulli $\nu_{is}$) and then how many extra (Poisson $\lambda_{is}$), which captures the "build exactly one tech building" decision that a plain Poisson smears.
- Battle-space counts $U_t^i$ accumulate production minus observed kills and a small unobserved-loss probability; observations $O_t^i$ are Beta-Binomial in $U_t^i$ with mean a logistic of scouting effort $E_t$ (fraction of main + natural seen), because units clump and binomials under-disperse.
- Training factors: EM on the $S,P$ HMM from fully observed replays, then logistic regression for the detection maps $f^i(E_t)$; inference is a Rao-Blackwellised particle filter over strategy histories with exact HMM forwards on each unit-count chain, and no resampling so rare strategies survive long dark periods.
- Evaluated as Terran inferring Protoss on 509 Gosu Gamers PvT replays; peak scouting is epochs 5–8, and the model is scored on count error for army types and presence/absence for singleton tech buildings.

## Caveats

## Links

- arXiv: [1210.4880](https://arxiv.org/abs/1210.4880)
- UAI PDF: https://auai.org/uai2012/papers/294.pdf
