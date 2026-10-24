---
title: "Permutation classes need not have proper growth rates"
authors:
  - "Jay Pantone"
  - "Vincent Vatter"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2610.30369"
doi: null
source: "https://arxiv.org/abs/2610.30369"
topics:
  - "enumerative-combinatorics"
  - "permutation-patterns"
  - "spectral-graph-theory"
  - "counterexample"
  - "ai-assisted-proof"
seed_rank: 2414
seed_batch: "curiosity-2026-10-25"
reviewed: "2026-10-25"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Permutation classes need not have proper growth rates"
    url: "https://arxiv.org/abs/2610.30369"
    year: 2026
    arxiv: "2610.30369"
    doi: null
see: []
---

# Permutation classes need not have proper growth rates

## One-sentence takeaway

Some downward-closed permutation classes have an nth-root count |Cₙ|^(1/n) that never converges, oscillating between bounds below 36944 and above 36945. This disproves a conjecture that has been "widely" believed since 2006, along with the ordered-graph version by Balogh, Bollobás and Morris.

## Why it's lovely

Marcus–Tardos (the Stanley–Wilf conjecture) says every proper permutation class grows at most exponentially. Everyone then assumed the exponential rate was a true limit, because Fekete's lemma gives one for every class defined by avoiding a single pattern. The counterexample rests on a spectral gap. A monotone grid class grows like the squared spectral radius of its row–column graph, which is 9 for a cubic graph but below 8 for any forest of maximum degree 3. Cubic graphs of large girth look like forests to any permutation shorter than the girth. So a union of ever-higher-girth grid classes, truncated at chosen lengths, can be made to look like rate 9 at some lengths and like forest-rate at others, forever. There is also a candid AI disclosure. One of four ChatGPT 5.6 Pro instances produced a convoluted, partly unattributed argument of roughly the right shape. The humans untangled it, verified it and simplified it into this paper.

## Key ideas

- **Grid classes and spectral radius.** The growth rate of a monotone grid class equals the square of the spectral radius of its row–column graph. Degree 3 is the smallest degree with a gap between cubic graphs (9) and forests (< 8); cycles and paths both sit at about 4.
- **Girth makes cubic look like forest.** A permutation shorter than the girth can only occupy cells whose edges form a forest. So the limit superior of the sequence (permutations lying in infinitely many of the grid classes) consists of forest-griddable permutations.
- **Haar graphs of 2-groups keep the union small.** The cubic graphs are built as Haar graphs of finite 2-groups along chains of index-2 subgroups, which allows a 3-edge-colouring with each colour class a separable permutation. Only exponentially many ordered forests can then occur.
- **Amplify the gap.** Every nonempty cell is filled with a large class of growth rate 4105, so the 8-versus-9 gap survives the union bound. Truncating selected grid classes at successively larger lengths then forces the nth root above a threshold infinitely often and back below a smaller one infinitely often.
- **New positive result.** Every proper permutation class with a D-finite generating function has a proper growth rate. The paper also gives refined enumerative bounds for grid classes and a short proof of Albert–Vatter's generalization of Bevan's theorem.

## Caveats

The constants (about 37000 to 41562) are deliberately unoptimized, and the class is an infinite-basis construction, not a natural class. Whether finitely based, or other structurally natural, classes always have growth rates is still open. The authors survey these open cases. The AI-originated first argument is described as considerably more complicated and as reproducing proofs from prior work without attribution; the published proof is the authors' verified simplification. Not yet refereed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30369
- PDF: https://arxiv.org/pdf/2610.30369
