# Agents

**Eyebrow:** The System

**Subtitle:** Specialist agents are AI personas with defined scope, model, and tools. They are not guardrails — they are structured collaborators that apply a specific lens to a problem.

---

> **Warning: Agents are not bulletproof.**
> An agent's defined scope is a behavioral instruction, not enforcement. Claude will follow the scope while the conversation is fresh — but in long sessions, or with contradictory prompts, it can drift. Check agent output the same way you check any AI output: read it, verify it, apply judgment.

---

## Two categories of agent

| Discipline agents | Workflow orchestrators |
|---|---|
| Single-purpose specialists. Each applies one lens: Historian surfaces precedent. Critic removes unnecessary elements. Architect defines data models. Designer specifies interaction states. They don't make final decisions — they bring specific analysis. | Skills that route work through a sequence of discipline agents. A design workflow might invoke Historian → Strategist → Architect → Critic → Designer in order, each building on the previous. The orchestrator manages the sequence; the designer approves each gate. |

---

## Model assignment by role

Assigning the right model to each agent reduces cost and latency without sacrificing quality.

| Model | Best for | Examples |
|---|---|---|
| Haiku | Classification, gates, brief structured tasks | Problem gate, design system validation, accessibility checks |
| Sonnet | Implementation, synthesis, multi-step reasoning | Architect, Designer, iOS Engineer, QA, research compilation |
| Opus | Taste, quality verdicts, final review | Creative Director, Distinguished Engineer, facilitated reduction |

> The model assignment matters most at the quality gate. Running everything through Sonnet is fine for drafting; the final ship/no-ship verdict should go to Opus. The cost difference is negligible per session; the quality difference on taste-level decisions is significant.
