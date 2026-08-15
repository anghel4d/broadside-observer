---
title: "Game AI Pro — Utility-Based Decision Architectures"
authors:
  - "Steve Rabin"
  - "David Graham"
  - "Bill Merrill"
year: 2013
venue: "Game AI Pro"
arxiv: null
doi: null
source: "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter09_An_Introduction_to_Utility_Theory.pdf"
topics:
  - utility-ai
seed_rank: 395
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 7
cites:
  - title: "Behavioral Mathematics for Game AI"
    url: "https://openlibrary.org/books/OL25155853M/Behavioral_mathematics_for_game_AI"
    year: 2009
    arxiv: null
    doi: null
  - title: "Building Utility Decisions into Your Existing Behavior Tree"
    url: "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter10_Building_Utility_Decisions_into_Your_Existing_Behavior_Tree.pdf"
    year: 2013
    arxiv: null
    doi: null
see:
  - "351-behavioral-mathematics-for-game-ai"
---

# Game AI Pro — Utility-Based Decision Architectures

## One-sentence takeaway

The Game AI Pro utility chapters turn Mark’s response-curve book into production recipes: score considerations, multiply, pick (or mix into a BT selector), and add inertia so agents don’t flicker.

## Why it matters here

This is the industry handbook GRID COMMAND designers would actually read. Graham’s intro, Merrill’s “utility inside a behavior tree,” and later Dill/Lewis chapters are how you graft continuous scoring onto an Isla-style tree without throwing the tree away.

## Key ideas

- A consideration is a normalized [0,1] response curve of one input (distance, health, ammo); the action score is usually the product of its considerations so a single zero vetoes.
- Graham’s chapter is the canonical tutorial; Merrill shows a BT decorator/selector that asks utility which child to run.
- Dual-utility / Infinite Axis work (Mark, Dill, Lewis in later volumes) adds a second axis so “how committed am I” is not the same number as “how good is this.”
- Free official PDFs live on gameaipro.com; the 2013 hardcover is the archival venue.

## Caveats

## Links

- Utility theory chapter: https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter09_An_Introduction_to_Utility_Theory.pdf
- Utility in BTs: https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter10_Building_Utility_Decisions_into_Your_Existing_Behavior_Tree.pdf
- Book index: https://www.gameaipro.com/
