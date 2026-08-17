---
title: "Understanding Natural Language"
authors:
  - "Terry Winograd"
year: 1972
venue: "Cognitive Psychology"
arxiv: null
doi: "10.1016/0010-0285(72)90002-3"
source: "https://doi.org/10.1016/0010-0285(72)90002-3"
topics:
  - "shrdlu"
  - "nl-commands"
  - "procedural-semantics"
  - "blocks-world"
seed_rank: 1076
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "game-ai"
relevance_score: 10
lineage: shrdlu
cites:
  - title: "Procedures as a Representation for Data in a Computer Program for Understanding Natural Language"
    url: "https://apps.dtic.mil/sti/tr/pdf/AD0721399.pdf"
    year: 1971
    arxiv: null
    doi: null
  - title: "Transition Network Grammars for Natural Language Analysis"
    url: "https://doi.org/10.1145/355598.362773"
    year: 1970
    arxiv: null
    doi: "10.1145/355598.362773"
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://www.gamedeveloper.com/design/three-states-and-a-plan-the-ai-of-f-e-a-r-"
    year: 2006
    arxiv: null
    doi: null
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
see:
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "201-steering-behaviors-for-autonomous-characters"
  - "299-influence-mapping"
  - "1049-production-matching-for-large-learning-systems"
---

# Understanding Natural Language

## One-sentence takeaway

SHRDLU: English in, actions and English out, in a closed blocks world, because syntax, semantics, and inference are *procedures* that share one model — not a pipeline of tables.

## Why it matters here

GRID COMMAND's whole pitch is NL soldier orders in a simulated world. The modern feed will hand you an LLM wrapper; this 1972 paper is the Archive gem that actually did it, with a world model, a parser, and the ability to ask "why did you do that?" F.E.A.R. GOAP (022) is the action planner; Rete (042) / Rete/UL (1049) is the matcher; SHRDLU is the missing NL-command *grounding* paper — the soldier-order ancestor that is not a chatbot.

## Key ideas

- Knowledge is procedures, not static rules: each syntactic/semantic/inference fragment can call any other.
- A detailed domain model is mandatory; the program will not "deal reasonably with language" otherwise.
- Combined complete syntactic analysis with a heuristic understander that uses discourse, context, and physics to disambiguate.
- The system remembers its own plans and can discuss them — a tiny theory of mind for clarification questions.
- MIT AI TR 235 (1971, "Procedures as a Representation…") is the dissertation cut; this Cognitive Psychology issue is the archival paper.

## Caveats

- Blocks world does not scale; the 1970s AI winter reading is fair. The architecture (ground language in a sim you actually run) is the gem, not the coverage.
- ATN (Woods 1970) is the parser cousin; we kept the whole-system paper.
- Not an LLM paper and not a 2024–2026 "agent memory" clone.

## Links

- DOI: [10.1016/0010-0285(72)90002-3](https://doi.org/10.1016/0010-0285(72)90002-3)
- MIT TR 235: https://hci.stanford.edu/winograd/shrdlu/
- DTIC: https://apps.dtic.mil/sti/tr/pdf/AD0721399.pdf
