---
title: "Unreal Networking Architecture"
authors:
  - "Tim Sweeney"
year: 1999
venue: "Epic MegaGames"
arxiv: null
doi: null
source: "https://docs.unrealengine.com/udk/Three/NetworkingOverview.html"
topics:
  - netcode
seed_rank: 371
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
lineage: game-networking
cites:
  - title: "Source Multiplayer Networking"
    url: "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"
    year: 2001
    arxiv: null
    doi: null
  - title: "Client-Side Prediction & Server Reconciliation"
    url: "https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html"
    year: 2013
    arxiv: null
    doi: null
see:
  - "300-source-multiplayer-networking"
  - "269-client-side-prediction-server-reconciliation"
---

# Unreal Networking Architecture

## One-sentence takeaway

Sweeney’s 1999 note defines Unreal’s authoritative-server model: actors replicate by role, relevancy, and property/RPC channels rather than by lockstepping the whole world.

## Why it matters here

If Broadside ever grows a multiplayer layer, this — not lockstep — is the default FPS/sim architecture: server owns state, clients own input, relevancy culls the actor set, and simulated proxies interpolate. Anoptic ECS replication would be the same idea with components instead of `AActor`.

## Key ideas

- Roles: `ROLE_Authority` on the server, `ROLE_AutonomousProxy` for the owning client, `ROLE_SimulatedProxy` for everyone else.
- Replication is per-property and per-RPC, not a full world snapshot; `bNetRelevant` / priority / dormancy decide who hears about an actor.
- Server is authoritative; clients predict locally and get corrected. Bandwidth is spent on relevant, high-priority channels first.
- The 1999 `Network.htm` essay is the origin; UDK Three/NetworkingOverview and modern Epic “Networking Overview” pages are the living descendants.

## Caveats

## Links

- UDK overview (stable): https://docs.unrealengine.com/udk/Three/NetworkingOverview.html
- Historical essay: http://unreal.epicgames.com/Network.htm
- Current Epic overview: https://dev.epicgames.com/documentation/unreal-engine/networking-overview-for-unreal-engine
