# Governance

**Eyebrow:** Pillar 03

**Subtitle:** A three-layer inheritance structure so shared context is always present without overriding team autonomy.

---

> Claude Code supports `@filename` imports inside CLAUDE.md natively. The three-layer stack uses this — no custom tooling required. Each layer imports the layer above it and extends it.

---

## The three layers

**1 — Kernel layer — `claude-for-eps.md`**
Capital One non-negotiables. IP handling. Accessibility floor. Brand voice. 3–5 rules maximum. The kernel is protected — it doesn't change without AI Tooling review. Every team CLAUDE.md imports it automatically.

**2 — Process layer — `CLAUDE.md`**
Platform-specific context. Design system vocabulary. Component library rules. Team decision hierarchy. This is where each team runs its own processes — owned by the team lead, updated at retrospectives, versioned like any other team artifact.

**3 — Session layer — bottom of your CLAUDE.md**
In-progress work, personal context, temporary state. Never overwrites the kernel or process layers. Added at the bottom of the team file or in a personal `@me.md` import. Cleared or updated each session.

---

## Team CLAUDE.md — layer import pattern

```
# @claude-for-eps.md
# (org layer imports automatically — do not edit above this line)

# [TEAM NAME] Design Team
# Platform: [Platform name]

## Team Standards
[Your team-specific content here]

## Design System
[Token names, component vocab, platform conventions]

## Decision Hierarchy
1. Structural correctness
2. Conceptual clarity
3. System coherence
4. Reduction of parts
5. Craft precision
6. Visual refinement

## Anti-patterns (treat as defects)
- [Your team's specific anti-patterns]

## @me.md
# (personal overrides — do not commit)
```

---

> **Warning: Keep the org layer thin.**
> If the org layer becomes opinionated about craft — component patterns, visual style, prompt strategy — senior designers will reject it as top-down prescription. The org layer's authority comes from its restraint. It governs only what the org must govern.
