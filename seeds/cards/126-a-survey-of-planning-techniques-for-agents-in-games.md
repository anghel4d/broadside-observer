---
title: "A Survey of Planning Techniques for Agents in Games"
authors:
  - "Jeff Orkin"
year: 2006
venue: "GDC"
arxiv: null
doi: null
source: "https://madwomb.com/tutorials/gamedesign/prototyping/gdc2006_JeffOrkin_AI_FEAR.pdf"
topics:
  - planning
  - game-ai
seed_rank: 126
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "Managing Complexity in the Halo 2 AI System"
    url: "https://www.gdcvault.com/play/1020359/Managing-Complexity-in-the-Halo"
    year: 2005
    arxiv: null
    doi: null
  - title: "STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving"
    url: "https://doi.org/10.1016/0004-3702(71)90010-5"
    year: 1971
    arxiv: null
    doi: "10.1016/0004-3702(71)90010-5"
see:
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
  - "296-shop2-an-htn-planning-system"
  - "360-managing-complexity-in-the-halo-2-ai-system"
---

# A Survey of Planning Techniques for Agents in Games

## One-sentence takeaway

Orkin’s GDC 2006 F.E.A.R. talk is GOAP in a shipped FPS: the animation FSM has three states (Goto, Animate, UseSmartObject), and A* over STRIPS actions on a working-memory world state decides which one to enter.

## Why it matters here

GRID COMMAND squads should plan, not grow a 200-state chart. GOAP is the production proof that competing goals plus a blackboard of facts can look coordinated under fire without per-NPC scripts.

## Key ideas

- Every visible behavior is still “move or play an animation.” Cover, blind-fire, dive-through-window, melee — those are plans, not states. Designers author Goal Sets and Action Sets in the game database; they do not draw transition arrows.
- Goals compete by priority (Patrol vs KillEnemy). The planner searches for a lowest-cost action sequence whose effects satisfy the winning goal. Soldiers, assassins, and rats share the same goals and look different only because their Action Sets differ.
- World state is a fixed-size array of four-byte slots (`TargetDead`, `WeaponLoaded`, `AtNode`, …), not STRIPS add/delete lists. Procedural precondition hooks run expensive tests (NavMesh escape path) on demand; `ActivateAction()` writes the FSM state and its parameters.
- Layering is additive: Attack, then Dodge, then AttackMelee, then Cover / AttackFromCover, then BlindFireFromCover, then Ambush. Adding `TurnOnLights` is one action with a `LightsOn` effect and a precondition on Goto — no visit to every old state machine.
- Failed plans write facts back into working memory (door is blocked), so re-planning kicks, then dives the window. A proximity squad coordinator issues orders (Get-to-Cover, Advance-Cover, Search) that individual GOAP agents may still refuse if a higher-priority personal goal wins.

## Caveats

## Links

- PDF: https://madwomb.com/tutorials/gamedesign/prototyping/gdc2006_JeffOrkin_AI_FEAR.pdf
- Historical MIT alumni URL (currently 404): https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf
- Twin card: `022-three-states-and-a-plan-the-ai-of-f-e-a-r`
