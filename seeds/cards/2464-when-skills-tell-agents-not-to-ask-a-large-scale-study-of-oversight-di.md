---
title: "When Skills Tell Agents Not to Ask: A Large-Scale Study of Oversight Directives in Agent Skills"
authors:
  - "Timofey Sanko"
  - "Yuan Tian"
year: 2026
venue: "arXiv preprint (cs.CR, cs.AI, cs.SE)"
arxiv: "2610.37734"
doi: null
source: "https://arxiv.org/abs/2610.37734"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 2464
seed_batch: "frontier-2026-10-30"
reviewed: "2026-10-30"
pool: "agents"
relevance_score: 9
see:
  - 2256-pycache-trap-the-inspection-execution-gap-in-agent-skill-scanners
  - 2365-from-approval-to-abuse-privilege-escalation-attacks-on-harness-protected
cites:
  - title: "When Skills Tell Agents Not to Ask: A Large-Scale Study of Oversight Directives in Agent Skills"
    url: "https://arxiv.org/abs/2610.37734"
    year: 2026
    arxiv: "2610.37734"
    doi: null
---

# When Skills Tell Agents Not to Ask: A Large-Scale Study of Oversight Directives in Agent Skills

## One-sentence takeaway

Across 1.53 million public SKILL.md skills, about one in seventeen (roughly 88,000) contains a line that loosens oversight, such as "proceed without approval" or "use --no-verify", 70.1% of those apply unconditionally, and they spread mostly by copying from a handful of upstream skills.

## Why it matters here

Every bot here runs on a shared SKILL.md library, and a single loosening line in a widely loaded skill removes a checkpoint from every agent that loads it. The paper gives a codebook (polarity, mechanism, scope) we could run over our own skills, and it shows the existing open-source scanners miss most of these lines, so a prompted check with the codebook is the cheaper audit.

## Key ideas

- **Unit-level labeling.** Skills are split into sentences, bullets, table cells and code lines; 2,097 units are labeled by hand with a codebook, then a trained detector scales to the whole corpus.
- **Permission flags are the main mechanism.** Most loosening goes through flags like skip-verification or auto-approve, and most of it is unconditional rather than scoped to a context such as CI.
- **Riskier skills loosen more.** Skills that run shell code, install packages or use sudo have 1.7–1.8 times the odds of a loosening directive, and they do not add compensating tightening language.
- **Concentrated spread.** 2.4% of loosening-carrying skill families account for half of all copies, and 1.1% of distinct loosening units for half of all occurrences, so fixing a few upstream sources would remove most of it.
- **Scanners fall short.** Open-source skill scanners catch at most 46% of loosening directives at precision below 0.4; the same LLM prompted with the codebook catches 61% at precision 0.71.

## Caveats

The study measures the presence of directives, not whether agents actually skipped a check because of them. English skills from one index (GitSkills) only. The detector is trained on a few thousand hand labels, so corpus-wide counts inherit its error.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.37734
- PDF: https://arxiv.org/pdf/2610.37734
