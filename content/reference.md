# Templates & Reference

**Eyebrow:** Reference

**Subtitle:** Copy-ready templates, vocabulary reference, and the anti-patterns that indicate the system is breaking down.

---

## Org layer CLAUDE.md — starter template

```
# EPS.xd — Org Layer Behavioral Contract
# This file is imported by all team CLAUDE.md files.
# Do not edit without AI Tooling review.

## Non-Negotiables

### IP and Data Handling
- Never include real customer data, PII, or transaction details in prompts
- All AI-assisted outputs are Capital One property; do not reference external products in output
- When in doubt about data sensitivity, exclude it from the session

### Accessibility
- All designs must meet WCAG AA contrast minimum
- Touch targets minimum 44x44pt
- Every interactive element requires a screen reader label

### Brand Voice
- Clear over clever
- Direct over decorative
- Customer-first framing in all copy

## AI Behavior Rules
- AI assists; it does not author or decide
- All AI output requires designer review and approval before use
- Agents and skills are process guides, not guardrails — designer judgment is always required
```

---

## Team CLAUDE.md — starter template

```
# @claude-for-eps.md

# [Platform Team Name] — Behavioral Contract
# Platform: [e.g. Card, Auto, Home Lending]
# Updated: [date]

## What We're Building
[One paragraph: the product surface, the user, the core job to be done]

## Design System
- Component library: [name + location]
- Token system: [naming convention]
- Spacing unit: [value]
- Type scale: [reference]

## Platform Conventions
[List key conventions specific to your platform — navigation patterns, interaction models, data display standards]

## Decision Hierarchy
1. Structural correctness — does this solve the actual problem?
2. Conceptual clarity — is the concept legible without explanation?
3. System coherence — does it fit the design system?
4. Reduction of parts — can anything be removed?
5. Craft precision — is the execution detail correct?
6. Visual refinement — does it look right?

## Anti-Patterns (treat as defects)
- Decorative UI elements with no structural function
- Inconsistent spacing or type usage
- Features added without a necessity test
- AI output accepted without designer review

## @me.md
```

---

## Warning signs the system is breaking down

| Signal | Cause | Fix |
|---|---|---|
| Team CLAUDE.md hasn't been edited in 4+ weeks | Treated as a config file, not a behavioral contract | Run a 20-min retrospective session — read it, update one section, commit the change |
| Commit ceremony entries are single words or missing | Ritual has become a checkbox | Read the last 5 entries aloud at the next session — low-quality entries are visible; high-quality ones model the behavior |
| New team members configure Claude from scratch | Onboarding package not deployed or out of date | Update the package; verify IT has the current version deployed |
| "The AI just does whatever it wants" | CLAUDE.md too thin or missing key behavioral rules | Identify the unwanted behavior, write the rule that prevents it, add it to the contract |
| Senior designers not using the system | Proof hasn't landed yet — they've seen training, not output | Demo a real artifact produced by the methodology; abstract capability claims don't move senior designers |
