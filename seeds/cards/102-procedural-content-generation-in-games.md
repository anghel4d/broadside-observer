---

title: "Procedural Content Generation in Games"
authors:
  - "Noor Shaker"
  - "Julian Togelius"
  - "Mark J. Nelson"
year: 2016
venue: "Springer"
arxiv: null
doi: "10.1007/978-3-319-42716-4"
source: "https://doi.org/10.1007/978-3-319-42716-4"
topics:
  - pcg
seed_rank: 102
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: procedural-generation
cites:
  - title: "Search-Based Procedural Content Generation: A Taxonomy and Survey"
    url: "https://doi.org/10.1109/TCIAIG.2011.2148116"
    year: 2011
    arxiv: null
    doi: "10.1109/TCIAIG.2011.2148116"
  - title: "Wave Function Collapse"
    url: "https://github.com/mxgmn/WaveFunctionCollapse"
    year: 2016
    arxiv: null
    doi: null
  - title: "Example-Based Model Synthesis"
    url: "https://doi.org/10.1145/1230100.1230119"
    year: 2007
    arxiv: null
    doi: "10.1145/1230100.1230119"
see:
  - "019-search-based-procedural-content-generation-a-taxonomy-and-su"
  - "103-wave-function-collapse"
  - "459-example-based-model-synthesis"
---

# Procedural Content Generation in Games

## One-sentence takeaway

PCG is the algorithmic creation of playable game content — levels, maps, rules, quests, items, terrain — with limited or indirect human input, surveyed here as constructive, search-based, constraint, and experience-driven methods plus how to evaluate them.

## Why it matters here

Broadside / GRID COMMAND worldgen needs the same split the book uses: a fast constructive pass that always emits a playable map, search or ASP when you have an explicit fitness, and an evaluation story so generated fleets and terrain are not just pretty noise.

## Key ideas

- Constructive methods (ch. 3) build dungeons and platformer levels in one pass — cellular automata, room placement, agents — with predictable runtime and no inner evaluate/regenerate loop.
- Search-based PCG (ch. 2, 9) treats content as an optimization problem: a representation, a search space, variation operators, and a fitness function, usually an evolutionary algorithm.
- Constraint and grammar chapters cover ASP mazes (ch. 8), L-systems / vegetation (ch. 5), fractals and noise for landscapes (ch. 4), and planning for quests and story (ch. 7).
- Experience-driven PCG (ch. 10) closes a player–content–experience loop so the generator is steered by a model of affect or skill, not only by designer parameters.
- Mixed-initiative tools (ch. 11) and generator evaluation (ch. 12) are first-class: Tanagra-style human+solver editors, plus explicit tests for speed, reliability, controllability, and diversity.
- Taxonomy axes that actually change the implementation: online vs offline, necessary vs optional content, generic vs adaptive, constructive vs generate-and-test.

## Caveats

## Links

- DOI: [10.1007/978-3-319-42716-4](https://doi.org/10.1007/978-3-319-42716-4)
- Author PDFs: https://www.pcgbook.com/
- URL: https://doi.org/10.1007/978-3-319-42716-4
