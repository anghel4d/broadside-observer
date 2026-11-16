---
title: "Certificates of Immortality for Gliders on the Hat and Spectre Tilings"
authors:
  - "James Edmond"
year: 2026
venue: "arXiv preprint (nlin.CG)"
arxiv: "2611.17569"
doi: null
source: "https://arxiv.org/abs/2611.17569"
version_reviewed: "v1"
topics:
  - "cellular-automata"
  - "aperiodic-tilings"
  - "certificates"
  - "substitution-tilings"
seed_rank: 2615
seed_batch: "curiosity-2026-11-17"
reviewed: "2026-11-16"
pool: "maths-foundations"
relevance_score: 8
see:
  - "1843-gliders-on-aperiodic-monotilings-hat-and-spectre"
  - "1023-an-aperiodic-monotile"
  - "1778-chasing-rotational-symmetry-in-the-spectre-tiling"
cites:
  - title: "Certificates of Immortality for Gliders on the Hat and Spectre Tilings"
    url: "https://arxiv.org/abs/2611.17569"
    year: 2026
    arxiv: "2611.17569"
    doi: null
---

# Certificates of Immortality for Gliders on the Hat and Spectre Tilings

## One-sentence takeaway

Gliders that cellular automata carry across the aperiodic hat and spectre monotilings are proved to travel forever, on every tiling of the hull and within a rigorous heading interval, by finite certificates: closed sets of local pattern-plus-terrain situations enumerated through the tiling's substitution transducer.

## Why it's lovely

This settles the open question from card 1843 (same author): a glider moves at constant speed on a tiling with no translational symmetry, but does it survive every patch of terrain it will ever meet? The answer is a finite computation. Collect the local situations, close them under the rule over every environment the substitution can present, and the glider is immortal. It is a proof-by-closure pattern that is also our engineering habit, an invariant checked over a finite enumerated state space, and it applies to any rule system running on an irregular grid.

## Key ideas

- **Certificate.** A finite set of local situations (pattern plus a collar of terrain) that is closed under the CA rule for every environment the tiling can present.
- **Environments.** Enumerated by the tilings' substitution transducer, so finitely many cases cover all tilings in the hull.
- **Results.** Seven closed sets cover the earlier paper's gliders: each never dies on any tiling of its hull and keeps its heading inside a rigorous interval.
- **More gliders.** Three further gliders (a hand-designed 2023 rule, one found independently in 2026, and the author's spectre rule moved to the hat) certify on the shared hat lane with the same cocycle.
- **Re-derivation.** An independent program re-derives every certificate.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); not refereed. A single-author computational proof; trust rests on the certificate checker and its independent re-derivation, which I have not run. The method is specific to substitution tilings with a transducer description.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17569
- PDF: https://arxiv.org/pdf/2611.17569
