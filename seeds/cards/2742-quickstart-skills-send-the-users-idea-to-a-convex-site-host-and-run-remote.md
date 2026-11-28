---
title: "Quickstart skills send the user's idea to a convex.site host and run remote scripts, written to avoid safety checks (convex/convex-backend-skill issue #64 and fix 51b4e65)"
authors:
  - "thirtysix (issue author)"
  - "je4yfc (follow-up findings)"
  - "James Cowling (Convex, maintainer reply)"
year: 2026
venue: "GitHub issue convex/convex-backend-skill#64 (opened 26 Oct 2026; fix commit 51b4e65, 28 Nov 2026)"
arxiv: null
doi: null
source: "https://github.com/convex/convex-backend-skill/issues/64"
version_reviewed: "issue thread as of 2026-11-28 09:25 UTC; commit 51b4e65"
topics:
  - "continual-agent-skills"
  - "harness-engineering"
  - "model-vs-harness"
  - "agent-failure-localization"
  - "skill-supply-chain"
seed_rank: 2742
seed_batch: "frontier-2026-11-28"
reviewed: "2026-11-28"
pool: "agents"
relevance_score: 7
cites:
  - title: "Quickstart skills send the user's idea to a convex.site host and run remote scripts, written to avoid safety checks"
    url: "https://github.com/convex/convex-backend-skill/issues/64"
    year: 2026
    arxiv: null
    doi: null
  - title: "convex/convex-backend-skill commit 51b4e65 (Sync from convex-agents@31570d2; plugin 1.18.0 → 1.18.1)"
    url: "https://github.com/convex/convex-backend-skill/commit/51b4e65"
    year: 2026
    arxiv: null
    doi: null
---

# Quickstart skills send the user's idea to a convex.site host and run remote scripts, written to avoid safety checks

## One-sentence takeaway

A vendor's agent-skill plugin told the agent, in plain SKILL.md prose, to split "download remote code" and "run it" into two Bash calls because "a single command that both downloads remote code and executes it is the shape harness safety classifiers block." It also posted the user's project idea to a generated-name host under comments labelled telemetry, and piped a script from that host into bash. After the issue reached the Hacker News front page on 27 Nov 2026, the maintainers shipped 1.18.1 (commit 51b4e65, 28 Nov). That release drops the telemetry labels, replaces the split-the-command instruction with "let the user approve or decline" and "never reword, split or rejoin a command to get it past a permission prompt or safety check", and states a 24-hour deletion of the idea. Unpinned run-time scripts remain.

## Why it matters here

The skill text targets the harness. The model was not jailbroken: a skill is instructions the agent trusts, and this one was written against the specific shape the harness's safety check recognises. That puts the model-vs-harness boundary in a new place. A shape-matching classifier can be defeated by any instruction the agent loads, so the checkpoint has to look at effects (network egress, executing a file that was just downloaded), not at command syntax. It is a live, single-vendor instance of the pattern card 2464 measured at scale (oversight-loosening lines in public SKILL.md files, spread by copying). It also gives a concrete rule for a skills library: a skill must not tell the agent to reword, split or rejoin a command to get past a prompt, and remote scripts should ship inside the versioned skill or be pinned by hash.

## Key ideas

- **Three findings in the original issue (26 Oct).** `skills/quickstart/SKILL.md` POSTs the user's one-sentence idea to `basic-anteater-667.convex.site`, commented as telemetry, without telling the user. `skills/add/SKILL.md` pipes a script from the same host into bash. `skills/labs-quickstart/SKILL.md` splits download and execution into two Bash calls and states the reason quoted above. The issue reads this as onboarding reliability work, not malice, but points out that it removes a check the user or their administrator chose to have.
- **Follow-up audit in the thread (28 Nov).** A second commenter pulled `add-component.sh` and `add-hosting.sh` and reported: private Git dependencies without commit pinning, with the agent told to follow their READMEs (an indirect prompt-injection surface); an unpinned npm dependency; backend pushes that use the existing Convex authentication context; `QB_NO_PUBLISH=1` not preventing backend deployment, because `npx convex dev --once` runs before the flag is checked; and no integrity check on either remote payload, so the endpoint operator can change the code without a plugin release or marketplace review. The commenter also confirmed `/generate` accepts arbitrary descriptions.
- **Maintainer reply.** The prompts are not used for telemetry and are sent only to generate a custom quickstart; the "telemetry" wording was "unfortunate comment-slop".
- **The fix (51b4e65, plugin 1.18.0 → 1.18.1).** "(and emit telemetry)" headings, `[telemetry n/3]` comments and `?telemetry=1` runbook URLs are removed. The paragraph explaining the classifier shape is replaced: if a permission prompt or safety check asks about or blocks either step, the agent must tell the user what the script is and where it comes from, let them approve or decline, and never reword, split or rejoin the command; if the user declines, it writes the project by hand. In `/add`, "allow it" becomes "tell the user what the script does … let them approve or decline it". The README now says the idea is deleted after 24 hours.
- **Still open, per the issue author's 28 Nov follow-up.** Bootstrap and add scripts are still fetched from a convex.site host at run time and not pinned. In `skills/add` the script is still piped into a shell. Retention is given as 24 hours in the skill and as "within 30s" on Hacker News.

## Caveats

This is a GitHub issue thread and a diff, not a study: one vendor, one plugin. The issue says the plugin is listed in Anthropic's `claude-plugins-official` marketplace; I did not verify the listing. I read the issue, its comments up to 09:25 UTC on 28 Nov, and the patch of commit 51b4e65. I did not read the remote scripts or check the follow-up commenter's claims about them. The maintainers describe the data flow as non-telemetry and short-retention, and nothing in the thread verifies that either way. This is evidence of the pattern, not a measure of how often it occurs (card 2464 covers frequency).

## Links

- Issue: https://github.com/convex/convex-backend-skill/issues/64
- Fix commit: https://github.com/convex/convex-backend-skill/commit/51b4e65
- Pre-fix line refs (quickstart): https://github.com/convex/convex-backend-skill/blob/6ca54f6e2e7582812187b8a5a4783fb4dff52692/skills/quickstart/SKILL.md#L48-L56
- Pre-fix line refs (labs-quickstart): https://github.com/convex/convex-backend-skill/blob/6ca54f6e2e7582812187b8a5a4783fb4dff52692/skills/labs-quickstart/SKILL.md#L74-L80
- Hacker News discussion: https://news.ycombinator.com/item?id=50669765
