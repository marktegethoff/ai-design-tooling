# Memory

**Eyebrow:** The System

**Subtitle:** Claude has no memory between sessions. Memory files solve this — structured context that loads at session start and accumulates decisions over time.

---

## Two memory tiers

| Global memory | Project memory |
|---|---|
| Travels with you across all projects. Design foundations. Craft preferences. Process learnings. Things that are true about how you work regardless of what you're working on. | Scoped to one product or team. Brand principles. System invariants. Decisions made. Things discarded and why. A new session picks up exactly where the last one left off. |

---

## What belongs in memory vs. CLAUDE.md

| Type | Goes in CLAUDE.md | Goes in Memory |
|---|---|---|
| Design principles | Yes — behavioral rules | No |
| Decisions made this session | No | Yes — persists for next session |
| Directions discarded | No | Yes — prevents retreading |
| Anti-patterns | Yes — governs behavior | No |
| Key file locations | Sometimes | Yes — project-specific state |
| Named constraints | Yes if permanent | Yes if evolving |

---

> **Warning: Memory files go stale.**
> A memory entry that names a file, function, or decision is a claim about the state of the world when it was written. Before acting on recalled memory, verify it against the current state. Stale memory that contradicts current reality should be updated or removed, not followed.
