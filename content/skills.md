# Skills

**Eyebrow:** The System

**Subtitle:** Skills are workflow orchestrators — slash commands that invoke a defined sequence of agents, gates, and pauses. They encode process, not just prompts.

---

## How skills differ from prompts

| A prompt | A skill |
|---|---|
| "Design the navigation model for this app." Claude responds once. The quality depends entirely on how well the prompt was written. No gates. No structure. No checkpoints. | /studio-design triggers: check prior decisions → Historian pass → Strategist evaluation → Architect constraints → Critic reduction → Designer directions → Accessibility review. Pauses for approval at each gate. The designer controls the sequence. |

---

## Skill evolution

Skills evolve as you learn what sequence produces the best output. This is the arc from the EPS.xd OS case study:

**1 — Simple slash commands**
Single-agent invocations with no structure. Fast to write, inconsistent output.

**2 — Sequenced workflows**
Multi-agent sequences with pauses for approval. Consistent structure, but latency from sequential execution.

**3 — Parallel orchestration**
Outer background agents spawn inner specialists simultaneously. One notification per phase instead of one per agent. Dramatically lower perceived latency.

**4 — Multi-model workflows**
Skills that switch models by phase — Haiku for gates, Sonnet for synthesis, Opus for verdicts. Each phase uses the right model for the task.

> Start with step 1. Build a skill when you repeat the same sequence three times and the sequence matters. Optimize latency only after the sequence is proven.
