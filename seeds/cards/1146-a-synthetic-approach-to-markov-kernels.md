---
title: "A synthetic approach to Markov kernels, conditional independence and theorems on sufficient statistics"
authors: ["Tobias Fritz"]
year: 2020
venue: "Adv. Math."
arxiv: "1908.07021"
doi: "10.1016/j.aim.2020.107239"
source: "https://arxiv.org/abs/1908.07021"
topics: [curiosity]
seed_rank: 1146
seed_batch: "curiosity-2026-08-23"
reviewed: "2026-08-23"
pool: "maths-foundations"
relevance_score: 9
lineage: markov-categories
cites:
  - title: "Disintegration and Bayesian Inversion via String Diagrams"
    url: "https://arxiv.org/abs/1709.00322"
    year: 2019
    arxiv: "1709.00322"
    doi: "10.1017/S0960129518000488"
  - title: "Representable Markov Categories and Comparison of Statistical Experiments in Categorical Probability"
    url: "https://arxiv.org/abs/2010.07416"
    year: 2023
    arxiv: "2010.07416"
    doi: "10.1016/j.tcs.2023.113896"
  - title: "Free gs-monoidal categories and free Markov categories"
    url: "https://arxiv.org/abs/2204.02284"
    year: 2023
    arxiv: "2204.02284"
    doi: "10.1007/s10485-023-09717-0"
  - title: "Partial Markov Categories"
    url: "https://arxiv.org/abs/2502.03477"
    year: 2025
    arxiv: "2502.03477"
    doi: null
see:
  - "944-representable-markov-categories-statistical-experiments"
  - "1026-complete-diagrammatic-axiomatisations-of-relative-entropy"
  - "1057-profunctor-optics-modular-data-accessors"
  - "1126-polynomial-functors-and-polynomial-monads"
---

# A synthetic approach to Markov kernels, conditional independence and theorems on sufficient statistics

## One-sentence takeaway

A Markov category is a symmetric monoidal category in which every object has a copy-discard comonoid and the monoidal unit is terminal: conditioning, Bayes, and the classical theorems on sufficient statistics become string diagrams, with no measure spaces required.

## Why it's lovely

Why you might love this: probability without measures. Copy is a comonoid, discard is the unique map to the unit, and a stochastic map is any morphism. Conditional independence is a commuting diagram; Fisher–Neyman, Basu, and Bahadur are theorems about those diagrams that hold equally for finite, measure-theoretic, Gaussian, and process-valued probability. Broadside already has the *sequel* as card 944 (representable Markov categories); this is the founding paper that 944 cites.

## Problem

Kolmogorov probability is a tower of σ-algebras, regular conditionals, and almost-sure caveats that must be re-proved for every concrete category of kernels. What is the purely algebraic content of "stochastic map", "condition", and "sufficient statistic", stated so that discrete, Gaussian, and measure-theoretic probability are models of one theory?

## Design

Start from Cho–Jacobs / Golubtsov: gs-monoidal (copy-discard) categories. Impose that the monoidal unit is terminal (normalisation / no extra scalar) to obtain Markov categories. Define disintegration and Bayesian inversion as string-diagram factorisations; define conditional independence as a copy-then-compare identity; prove the standard calculus of CI, almost-sure equality, and the Fisher–Neyman / Basu / Bahadur theorems synthetically.

## Evidence

The axioms specialise to FinStoch, BorelStoch, Gauss, and stochastic processes. The synthetic theorems recover the classical ones in each model. Journal: *Adv. Math.* 370 (2020) 107239, DOI `10.1016/j.aim.2020.107239`. Representable Markov categories (2010.07416, already minted as 944) and free gs-monoidal / partial Markov sequels are cited, not reminted.

## Limitations

Does not itself construct Kolmogorov products of all small diagrams (Fritz–Rischel Problem 6.7; later work). Quantum / involutive Markov categories are a different axiom set. The 98-page development is the reference, not a tutorial.

## Implications for Broadside

String diagrams of copy and discard are the same vocabulary as optics (1057) and polynomial functors (1126), now aimed at probability rather than accessors. Relative entropy as a diagram (1026) sits on top of this. If Broadside ever types a Bayesian update, the type is a morphism in a Markov category.

## Bottom line

Mint the founding copy-discard; cite 944 rather than reminting it. Probability is a string diagram.

## Links

- arXiv: [1908.07021](https://arxiv.org/abs/1908.07021)
- Journal: [Adv. Math. 370 (2020) 107239](https://doi.org/10.1016/j.aim.2020.107239)
