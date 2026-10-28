---
title: "WAKMan: Workload Aware KVCache Manager"
authors:
  - "Suhas Kumar Morisetty"
  - "Vaibhavi Lokegaonkar"
  - "Sachin Mathew Varghese"
  - "Wesley Harris"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.36355"
doi: null
source: "https://arxiv.org/abs/2610.36355"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2450
seed_batch: "frontier-2026-10-28"
reviewed: "2026-10-28"
pool: "systems"
relevance_score: 8
see:
  - 2439-prefix-sharing-is-a-sorting-problem
  - 2431-kvstream-adaptive-parallel-storage-management-for-kv-caching
cites:
  - title: "WAKMan: Workload Aware KVCache Manager"
    url: "https://arxiv.org/abs/2610.36355"
    year: 2026
    arxiv: "2610.36355"
    doi: null
---

# WAKMan: Workload Aware KVCache Manager

## One-sentence takeaway

Agentic steps come back to the prefix cache within seconds and reward recency, while popular prompts and long chats come back after many other requests and reward frequency, so across 20 traffic mixes no single eviction policy wins (vLLM's LRU beats S3FIFO by 12% on agent-heavy mixes and loses by up to 22% elsewhere), and WAKMan picks the policy from live traffic, gaining about 5 points of hit rate over LRU on average.

## Why it matters here

Prefix and KV caching for agents is a standing topic, and this is a measured answer to a practical question: what eviction policy should a server use when agent loops share it with chat traffic. The useful finding is the reuse-distance split by request type, which is exactly the signal an agent harness could pass to the server explicitly instead of making it guess.

## Key ideas

- **Reuse distance differs by workload.** Agent tool loops re-request their prefix within seconds; popular system prompts and long conversations recur after many intervening requests.
- **No universal winner.** LRU vs frequency-oriented S3FIFO flips across 20 mixes, and a single workload parameter can flip the winner within one mix.
- **Online selection.** WAKMan chooses among eviction policies from live traffic statistics without knowing request types or reading prompts.
- **Result.** About +5 percentage points hit rate over LRU on average, with the lowest mean and worst-case gap to the best policy per mix.

## Caveats

Internship work; the abstract reports cache hit rate only, not end-to-end latency or cost in a production server. Policy menu is limited to known eviction schemes, and an explicit hint from the client (agent session, expected return time) is not explored.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.36355
- PDF: https://arxiv.org/pdf/2610.36355
