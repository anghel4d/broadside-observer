---
title: "Capability Myths Demolished"
authors:
  - "Mark S. Miller"
  - "Ka-Ping Yee"
  - "Jonathan Shapiro"
year: 2003
venue: "Technical Report SRL2003-02, Systems Research Laboratory, Johns Hopkins University"
arxiv: null
doi: null
source: "https://papers.agoric.com/assets/pdf/papers/capability-myths-demolished.pdf"
topics:
  - object-capabilities
  - access-control
  - least-privilege
  - region-memory-capabilities
seed_rank: 2336
seed_batch: "archive-2026-10-18"
reviewed: "2026-10-18"
pool: "systems"
relevance_score: 9
lineage: capability-security
see:
  - 1792-capability-based-computer-systems
  - 1767-authority-is-not-a-string-a-capability-scoped-harness-for-prompt
  - 2306-efficient-software-based-fault-isolation
  - 028-typed-memory-management-in-a-calculus-of-capabilities
cites:
  - title: "Capability Myths Demolished"
    url: "https://papers.agoric.com/assets/pdf/papers/capability-myths-demolished.pdf"
    year: 2003
    arxiv: null
    doi: null
---

# Capability Myths Demolished

## One-sentence takeaway

Miller, Yee and Shapiro show that three pieces of security folklore — ACLs and capabilities are formally equivalent, capability systems cannot enforce confinement, and capability access cannot be revoked — come from reasoning about the wrong model of capabilities, and they separate four models (ACLs as columns, capabilities as rows, capabilities as keys, object capabilities) by seven properties labelled A to G.

## Why it matters here

Agent harnesses (1767), sandboxed plugin code (2306) and ano's region/capability type ideas (028) all need a precise vocabulary for "who may do what, and how is that authority passed on," and this paper supplies it. The property list doubles as a design checklist: no designation without authority, no ambient authority and access-controlled delegation channels are exactly what keeps a tool-calling agent or a modded RTS script from becoming a confused deputy.

## Key ideas

- **The access matrix is static.** ACLs (columns) and C-lists (rows) look like two layouts of Lampson's matrix, but equivalence ignores the update rules, and those rules decide the security properties.
- **A–C separate rows from columns.** A: No Designation Without Authority (the reference that names a resource is the one that grants access, so no shared namespace); B: Dynamic Subject Creation (every process instance can be a subject); C: Subject-Aggregated Authority Management (authority is edited per subject, not per resource ACL).
- **D–G separate keys from objects.** D: No Ambient Authority (subjects must select the authority they exercise; Unix open() is ambient); E: Composability of Authorities (subjects are resources, so authority networks compose); F: Access-Controlled Delegation Channels (Alice can only hand Bob a capability over a capability she holds to Bob); G: Dynamic Resource Creation (which POSIX "capabilities" lack).
- **Confinement and revocation fall out.** Property F means a subgraph not connected to Bob cannot delegate to Bob, which is confinement; Property E lets Alice interpose a revocable forwarder pair (forwarding facet plus revoking facet), which is revocation. The paper also dissects Boebert's 1984 argument and shows it applies to capabilities-as-keys systems, not object-capability ones.
- **Confused deputies.** Properties A and D let a deputy keep the authority it uses for its own purposes separate from authority handed in by a client, which is the structural fix for Hardy's compiler-writes-the-billing-file problem.

## Caveats

It is an argument from models and historical systems (KeyKOS, EROS, E and others), not a formal proof or measurement; the formal confinement results it leans on are cited rather than reproduced. Object-capability discipline assumes memory-safe references and no ambient channels, which real platforms only approximate (covert channels and side channels are out of scope). Published as a technical report, so wording varies slightly between copies.

## Links

- Paper (PDF, Agoric papers archive): https://papers.agoric.com/assets/pdf/papers/capability-myths-demolished.pdf
