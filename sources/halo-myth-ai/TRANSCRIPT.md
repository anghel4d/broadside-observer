# The Illusion of Intelligence
## The Integration of AI and Level Design in Halo

**Chris Butcher** (butcher@bungie.com) & **Jaime Griesemer** (jaime@bungie.com)  
GDC 2002. Slides archived here as [`slides.pdf`](slides.pdf).  
Public notes (fan transcription of the spoken intro): http://halo.bungie.org/misc/gdc.2002.haloai/talk.html  
Video: https://www.youtube.com/watch?v=xp468IY99ag  
Cleaner slide PDF: https://www.jmeiners.com/shamans/papers/ai/the_illusion_of_intelligence.pdf

Cited by Damian Isla (GDC 2005) as [Greisemer02].

This file is a **slide transcript** reconstructed from the deck (OCR of the attached GDC slides) plus the bungie.org spoken intro. It is not a word-for-word recording of the whole hour.

---

## Spoken intro (bungie.org notes)

This is not a full postmortem of Halo. It is a discussion of Halo's AI for designers and AI programmers (and anyone stuck on Legendary). Agenda: design goals and how they changed; implementation under technical constraints; how the level-creation process grew out of that; a demo of production tools.

The title is *The Illusion of Intelligence*, not the reality. They do not claim to know how to make enemies actually intelligent. The craft is making them *appear* intelligent.

---

## Design goals

Player expectations vs naive methods:

| Expectation | Naive method they discarded |
|-------------|-----------------------------|
| Novel situations | Heavy scripting of every beat |
| Total interactivity | An extended omniscient interface |
| Significant challenge | Omniscient, relentless enemies |

Where design and code overlap: **combat behavior**. Design owns ~3-minute scope, racial personalities, strategic purpose, mission objectives, object placement, scripting. Code owns ~30-second scope: combat behavior.

Design goals distilled: **intelligible**, **interactive**, **unpredictable**.

Technical constraints (Xbox): ~20–25 actors, 2–4 vehicles, ~15% of CPU, two-player co-op. Still must support individual knowledge, emergent behavior, and understandability.

### Interactive
Individual knowledge model. Discarded: a complete/omniscient world model. "Real" perception: vision, hearing, touch, (joking) ESP. Selective memory of local and crucial objects. Persistent state — the AI **can be fooled**.

### Intelligible
Communication of intent. Discarded: hidden states. Inform the player via language, posture, gesture, focus of attention. React to the player with dialogue and animation.

### Unpredictable
Emergent behavior. Discarded: a fuzzy emotion system. Cause-and-effect stimuli (discovery, weapon fire, damage, death). Rich world simulation. Unforced group behavior.

Playtest loop: difficulty, battle lines, lifespan. "Smarter = tougher" and "tougher = smarter." Weak-enemy playtest vs tough-enemy playtest (they show % too-hard / about-right / too-easy against % very/somewhat/not intelligent). Consistent challenge; negative reinforcement of boring tactics; reward experimentation.

Battle lines as **strategic spaces**: interconnectivity, killing zones, attacking/defending states (aggressive territory, retreat conditions, defensive fortification). Avoid subtlety, looking broken, insufficient challenge. Refine communication, animations, engagement distances.

---

## Anatomy of an actor

- **World interface** — information flow is restricted.
- **Knowledge model** — layered analysis, distributed over time, generates stimuli.
- **Decision logic** selects from actions.

Enemies cause alert. Innate combat cycle. Behaviors activated by stimuli: charge, flee, seek cover, throw grenade, enter vehicle, check dead body. Each race is a **black box** for action selection (Grunts flee easily; Elites seek cover if hurt; Jackals carry shields).

## Firing points

"This is my goal. Where should I be standing?" Discrete answer to a continuous problem. Weighted selection by line of sight, distance to target, proximity of cover, friends/enemies, vehicles, grenades. Senses the environment by multiple ray-casts.

## Combat dialogue

Driven from decisions and stimuli: hurt, death, saw enemy, throw grenade, seek cover. Hundreds of candidates per second. Filter by priority, context, uniqueness, relevance; pick a random dialogue type; nearby characters can reply.

---

## Closing slide (from deck)

Combat behavior is where design and code overlap.

Design goals: intelligible, interactive, unpredictable.  
Design implementation: difficulty, battle lines, playtest.

Technical goals: communication of intent, individual knowledge model, unpredictability.  
Technical implementation: actor structure, decision logic, firing points, context-based dialog.

Simple systems → emergent behavior. But make it **look** intelligent.
