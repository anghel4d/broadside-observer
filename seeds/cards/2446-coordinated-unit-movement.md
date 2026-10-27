---
title: "Coordinated Unit Movement"
authors:
  - "Dave Pottinger"
year: 1999
venue: "Game Developer magazine, January 1999 (republished on Gamasutra)"
arxiv: null
doi: null
source: "https://www.gamedeveloper.com/programming/coordinated-unit-movement"
topics:
  - rts-movement
  - collision-resolution
  - unit-cooperation
  - game-ai
seed_rank: 2446
seed_batch: "archive-2026-10-28"
reviewed: "2026-10-28"
pool: "game-ai"
relevance_score: 9
lineage: crowd-steering
see:
  - 027-1500-archers-on-a-28-8-network-programming-in-age-of-empires
  - 201-steering-behaviors-for-autonomous-characters
  - 294-near-optimal-hierarchical-pathfinding-hpa
  - 1433-crowd-pathfinding-and-steering-using-flow-field-tiles
cites:
  - title: "Coordinated Unit Movement"
    url: "https://www.gamedeveloper.com/programming/coordinated-unit-movement"
    year: 1999
---

# Coordinated Unit Movement

## One-sentence takeaway

Pottinger, an Age of Empires programmer at Ensemble Studios, argues that RTS movement (executing a path) is the other half of pathfinding, and lays out the pieces that make hundreds of units cooperate: a stateful per-unit movement loop, sphere-based collision culling for units, groups and formations, rolling predicted positions that double as the actual move, and a priority-based case table for resolving unit-to-unit collisions without calling the pathfinder.

## Why it matters here

GRID COMMAND needs exactly this layer between the pathfinder and the sim: dense melee, gatherers crossing each other, formations through chokepoints. The article is a concrete rulebook from a shipped RTS, including the specific failure Age of Empires shipped with (units re-deciding every update and oscillating), and its fixes, such as remembering resolved collisions and computing each move once from predictions, map onto a deterministic fixed-tick ECS where determinism and CPU budget both matter.

## Key ideas

- **Movement issues.** Scaling from one unit to hundreds, the CPU cost of acceleration and turn radii (which many pathfinders ignore), variable update lengths (smooth the step), how much collision overlap gameplay should allow, map complexity, random maps, and above all maximum object density.
- **State-based loop.** Per-unit states WaitingForPath, ReachedGoal and IncrementWaypoint persist across updates; each update steers toward the waypoint, applies turn limits, tests the next position for collision and repaths only if it fails.
- **Collision determination.** Circles or spheres for quick culling; groups check each member, formations additionally forbid outsiders in internal gaps; collisions are tagged immediate or future and unresolved, resolving or resolved, with immediate ones resolved first.
- **Discrete versus continuous.** Fast units can tunnel through others in long laggy updates; fix by sub-sampling the move at intervals smaller than any unit, or by testing a move line (point-to-segment distance) culled through an existing spatial hierarchy.
- **Predicted positions.** A rolling list of timestamped future positions, line segments where motion is straight and point samples on curves, computed once and then used to drive the actual move so prediction adds little cost beyond start-up.
- **Cooperation rules.** Four cases by who is moving (both still, only them, only us, both), each resolved by unit priority: the higher-priority unit computes a "get-to point" and tells the lower one to move aside, slow down, pause or be pushed, falling back to avoid, then stop and repath. Hard collisions outrank soft ones, and high-collision-density areas can steer other units' pathfinding away.
- **Planning.** Keep resolved collisions around for a while and skip re-checking a pair under an active avoidance plan; the author names single-frame decision-making as one of the biggest mistakes in Age of Empires' movement.

## Caveats

A magazine article with pseudocode, no measurements and no source; the promised companion piece (group and formation movement, compound collisions) is a separate article not reviewed here. Priority rules can deadlock or starve in compound collisions this part explicitly defers. Techniques predate flow fields and reciprocal velocity obstacles, which handle dense crowds more uniformly. The reviewed copy is the Game Developer website republication (dated January 22, 1999 there), and the figures were not available.

## Links

- Article (Game Developer / Gamasutra): https://www.gamedeveloper.com/programming/coordinated-unit-movement
