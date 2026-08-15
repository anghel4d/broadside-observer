---
title: "Behavioral Mathematics for Game AI"
authors:
  - "Dave Mark"
year: 2009
venue: "Course Technology PTR"
arxiv: null
doi: null
source: "https://openlibrary.org/books/OL25155853M/Behavioral_mathematics_for_game_AI"
topics:
  - utility-ai
seed_rank: 351
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Building a Better Battle: DAMN and Utility Theory for Games"
    url: "https://www.gdcvault.com/play/1012459/Building-a-Better-Battle-The"
    year: 2010
    arxiv: null
    doi: null
  - title: "An Introduction to Utility Theory"
    url: "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter09_An_Introduction_to_Utility_Theory.pdf"
    year: 2013
    arxiv: null
    doi: null
---

# Behavioral Mathematics for Game AI

## One-sentence takeaway

Mark treats NPC choice as scoring many considerations through designer-authored response curves, then combining those scores instead of walking a brittle boolean tree.

## Why it matters here

GRID COMMAND / Broadside agents need more than “if enemy then shoot”: utility plus response curves let a soldier’s fire / take-cover / reload / flee decision stay continuous and tunable while the sim ticks. That is the decision layer that sits on top of ano queries and ECS components without turning every rule into a new behavior-tree node.

## Key ideas

- A decision is a bag of considerations (distance, ammo, morale, cover) each mapped through a response curve — logistic, linear, quadratic, inverse — so designers shape “how much this matters” without rewriting control flow.
- Scores combine (often multiply after normalization) so one failing consideration can veto an action without a special-case `if`.
- Dual-utility / inertia ideas in the same lineage keep agents from dithering when two actions score almost equally.
- The book is the civilian textbook behind later Infinite Axis Utility System talks and the Game AI Pro utility chapters.

## Caveats

## Links

- Open Library: https://openlibrary.org/books/OL25155853M/Behavioral_mathematics_for_game_AI
- ISBN-13: 978-1-58450-684-3
