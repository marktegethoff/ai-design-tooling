# The Behavioral Contract

**Eyebrow:** The System

**Subtitle:** A CLAUDE.md is not a config file. It is a contract that governs how your AI collaborator behaves — encoding your design philosophy, decision hierarchy, and constraints into every session.

---

## What changes when you name it correctly

| Called a "config file" | Called a "behavioral contract" |
|---|---|
| Designers treat it as IT setup. It gets written once, never updated, and becomes stale within a month. Claude's behavior drifts from team standards. No one feels responsible for maintaining it. | Every edit becomes a design decision with consequence. Designers debate what goes in. Updating it feels like craft, not housekeeping. The contract evolves with the team's standards. |

> **The live demo is required.**
> The phrase only lands if a designer edits the CLAUDE.md and immediately sees AI behavior change in response. Without that visceral before/after, "behavioral contract" is just a slogan. Start every introduction with a live edit and its consequence.

---

## What belongs in a behavioral contract

**Non-negotiables**
Brand rules, IP handling, accessibility floor, tone. These are the org layer — they must never be overridden downstream.

**Team standards**
Design system tokens, component vocabulary, platform conventions, decision hierarchy. How this team makes decisions.

**Process philosophy**
What the AI should never do. What it should always do. How it should surface uncertainty. Anti-patterns that are treated as defects.

> **Warning: Agents and skills are not guardrails.**
> Claude Code agents and workflow skills encode *process*, not enforcement. They guide the sequence of work and surface the right questions — they do not prevent bad output or enforce compliance. Judgment remains with the designer. The behavioral contract is a statement of intent, not a safety net.

---

## The decision hierarchy

When Claude makes a judgment call, what order should it apply criteria? Encoding this explicitly prevents arbitrary output.

1. **Structural correctness** — Does the solution solve the actual problem?
2. **Conceptual clarity** — Is the concept legible without explanation?
3. **System coherence** — Does it fit the design system and platform conventions?
4. **Reduction of parts** — Can anything be removed without losing function?
5. **Craft precision** — Is the execution correct at the detail level?
6. **Visual refinement** — Does it look right?

> Add this hierarchy to your team CLAUDE.md verbatim. When Claude produces output that prioritizes visual polish over structural correctness, the hierarchy is missing or not being enforced through prompting.
