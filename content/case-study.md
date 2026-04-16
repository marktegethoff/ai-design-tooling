# Case Study

**Eyebrow:** Case Study

**Title:** What the right infrastructure makes possible. This is the proof.

**Subtitle:** Your AI Tooling lead used this methodology to build a production-quality digital product — design system, AI features, database architecture, sync infrastructure, release model — with the scope that previously required a full team.

---

> The product is private IP and is not named here. What is documented is the methodology — the system structure, the decisions made, the practice that evolved, and the honest account of where judgment was irreplaceable.

---

## What I actually learned

*A personal account of how this practice was built — what worked, what broke, and what I still don't know.*

---

### How I started

I didn't start with Claude Code. I started in ChatGPT, building an app I had no idea how to build.

I'm a designer. I have opinions about product strategy. I understand systems. I'd never written a line of Swift. But I had an idea for a personal journaling app, and I approached it the way I approach design: start with the ethos, define the principles, build the system before you build anything in it. I spent weeks in ChatGPT working out what the app should stand for before I wrote a line of anything.

Then I needed to actually build it. I opened Claude, and my first serious session involved asking it — step by step — what to click in Xcode to create an iOS project. Not "how does SwiftUI work." Literally: what do I click. That was the starting point.

What I learned in that first phase was how much I didn't know I didn't know. I thought setting up agents meant I had structured AI collaboration. I didn't — the agents weren't installed anywhere that persisted between sessions. I thought HTML prototypes would tell me something useful about iOS. They didn't — the medium actively misleads you about what the native platform will actually feel like. I was making confident decisions on a shaky foundation.

---

### What broke

The first thing that broke was the prototype-to-production translation. I'd validated something in HTML that couldn't work the same way on iOS. The feedback from the prototype was real feedback about the wrong thing. I had to build a dedicated prototyping environment — a lightweight SwiftUI canvas, separated from the production codebase — to get feedback that was actually legible for what I was building.

The second thing that broke was context. I was having what felt like conversations with a team. The interface was fluid. The responses were coherent. And then an agent would produce a beautifully reasoned recommendation that was confidently wrong — not because the reasoning was bad, but because the agent didn't know what I knew. It had the context I'd given it in that session. It did not have the context I'd accumulated over months of work.

This is the thing I most want you to sit with, because it's the insight I see people miss most often: when you're having a natural language conversation with what feels like a collaborator, you forget the system is stateless. There is no persistent memory unless you build it. An agent can produce a well-reasoned rationale and be completely wrong about the system it's operating inside — and the rationale will feel convincing precisely because it's well-reasoned. Evaluating that output requires knowing more than the agent does. That knowledge doesn't exist anywhere except what you've built and maintained.

I built a lot of infrastructure around this problem. Sixty-four architectural decisions, logged and indexed — so nothing gets re-litigated in session 12 that was resolved in session 4. Memory files that load at session start and give agents the current state of the system. Specifications that codify exactly what a surface should do before any code is written, so the engineer agent and the design agent are working from the same document. A session start protocol that confirms scope before a token is spent. The context has to be actively built and maintained. It doesn't accumulate automatically.

---

### What I built

What I actually built is a mech suit.

Not a replacement. Not automation. Something that extends what I can do — that fills in capabilities I don't have while leaving the judgment where it belongs.

I don't know Swift. But my system speaks a technical language fluently, and working inside it means I've learned to speak it too. I'm not more technical than I was. But I ask better questions, I challenge weak answers, I understand tradeoffs in the data model in ways I didn't before. The system teaches me as I use it. That was not something I planned for — it happened as a consequence of the way the work is structured.

I also built a team that argues. That part I did deliberately, even if I wasn't sure it would work.

The specific failure I was trying to prevent: one person with complete context, building a product where the user is themselves, running decisions through agents that are wired to agree. A closed loop. The longer it runs, the more it confirms itself. I've seen this in design teams — the longer a team goes without real friction, the more their decisions start to look inevitable to themselves and arbitrary to everyone else.

So I engineered friction. There's a culture document in the system — not a configuration file, an actual statement of how the team works. "Argue hard. Commit fully. Trust the craft." And the individual agent files go further: the Critic's file describes the Architect as the discipline most likely to resist its cuts, and gives explicit instructions for how to handle that resistance. The Marketer's file describes its working relationship with the Architect — one explodes scope, the other prices it. The Strategist is required to engage with the Historian's evidence even when it argues against the Strategist's position. These aren't personality quirks. They're designed accountability relationships.

I'll be honest about what I can and can't claim here. The hypothesis is that designed opposition between agents — where the tension is baked into the agent definition, not imposed procedurally from outside — produces more genuinely diverse reasoning than either a single agent or a team of agents with different system prompts but no encoded relationship to each other. The historical precedent supports it: red teams, devil's advocate roles, legal adversarial process all show that mandatory counterposition prevents the confirmation drift that kills creative judgment over time. But I can't prove the AI version works better. I can only say it lines up with the theory, and that without it, I'd have no friction at all.

I also built synthetic users for the same reason — archetypes that represent the different ways people actually use the kind of product I was making. The Thinker, the Reviewer, the Processor. The user I've been building for is me. That's useful and also dangerous. Synthetic users are the counterforce.

---

### What I didn't expect to relearn

I spent fifteen minutes recently trying to describe a layout problem to Claude. What I was trying to communicate was spatial — a relationship between elements on a surface, a proportion question, a question about hierarchy under different content conditions. I kept restating it. The responses were coherent and kept missing the thing. Then I stopped, sketched it on paper, took a screenshot, and dropped it in. The conversation resolved in two exchanges.

The sketch wasn't a deliverable. It was the kind of thing I'd have drawn on a whiteboard to get aligned with another designer — rough, structurally accurate, enough to give the idea shape without giving it form. That's what made it work. Not the image itself, but what the image communicated: the idea, directly, without the translation loss that comes from converting a spatial relationship into a verbal description of a spatial relationship.

The text interface creates a pressure that's easy to absorb without noticing. The tool speaks in text, so maybe the work has to happen in text. It doesn't. The gravitational pull is real — when your primary interface is a prompt box, your visual tools start to feel like things you're meant to work around rather than with. That's worth resisting. Visual input is a full channel. For anything spatial, anything about proportion or relationship or structure, it's often the sharper one. Figma exports, design screenshots, rough sketches: the AI sees what you show it. Show it the thing.

The secondary observation: the rough sketch isn't just faster to communicate than a verbal description. It might also be a reason to pick up a pen before opening a tool. The constraint of analog forces a different kind of thinking — more structural, less component-driven. Whether AI collaboration quietly brings that back as a side effect is something I'm watching. It would be an odd but welcome outcome.

---

### What I still don't know

The honest version: I don't know how this translates to a team.

What I've built works because I'm one person with complete context — I'm the designer, the product manager, the QA, and the end user. The infrastructure I've described exists to extend that one-person context across time, not across people. A team is a different problem. Multiple people building shared context, with different backgrounds, different mental models, different relationships to ambiguity. Their questions won't be my questions.

I have a point of view on what matters — behavioral contracts that persist, memory that accumulates, quality gates that enforce the process. But the honest answer about team translation is that I haven't had to solve it yet. What I can tell you is what it's been like for one designer, and what I believe is transferable. Where the evidence stops, I'll tell you it stops.

That's what this site is: the transferable part, documented carefully, with the honest account of where judgment is still required.

---

---

## The scope

A well-resourced product team for this scope of work would have staffed a lead designer, two product designers, a design systems designer, a researcher, a lead iOS engineer, two iOS engineers, a QA engineer, and a product manager. Ten people. Six to twelve months of coordinated work.

This is not that. One designer. The same scope. The difference is not capability — it is infrastructure.

### Previously required

- Design Lead × 1
- Product Designer × 2
- Design Systems Designer × 1
- UX Researcher × 1
- iOS Engineer (Lead) × 1
- iOS Engineer × 2
- QA Engineer × 1
- Product Manager × 1

~10 people · 6–12 months

### Now accessible to each designer

- 23 discipline agents
- 10 workflow skills
- 64 architectural decisions logged
- dev / beta / main release model
- Full design system — Web + iOS tokens
- Production iOS app shipped
- Dedicated prototyping canvas
- Quality gate: SHIP / REVISE / REJECT

1 designer · 17 sessions

---

The substitution is not perfect and is not claimed to be. A team brings things a methodology cannot replace: domain expertise across specializations, lived research, the friction of disagreement. What the methodology provides is structure dense enough to make one person's judgment legible and consistent at the scale where it would otherwise collapse.

---

## Artifact — Interface States

Three interface states: intent-tagged compose (6 signal types), append-only timeline with 32-hour micro-label threshold, thread detail with AI synthesis header. Each surface specified before any code was written.

**Compose** — Intent type picker with 6 signal types (observation, question, idea, tension, action, reflection). Append-only entry field with active cursor state.

**Timeline** — Entry rows with intent-signal dots, append-only scroll. Micro-label appears when gap between entries exceeds 32 hours — suppressed at hour-level intervals to protect the quiet tape principle.

**Thread detail** — AI synthesis block at top (tinted header, AI-generated summary lines). Member entry list below with matching intent dots.

---

## Artifact — Design System Tokens

### Surface — Neutral Scale

| Token | Web (CSS) | iOS (SwiftUI) | Value |
|---|---|---|---|
| paper-00 | --color-paper-00 | Color.paper00 | #FAFAF8 |
| paper-05 | --color-paper-05 | Color.paper05 | #F2F0ED |
| paper-30 | --color-paper-30 | Color.paper30 | #D6D3CE |
| paper-80 | --color-paper-80 | Color.paper80 | #3A3730 |
| paper-100 | --color-paper-100 | Color.paper100 | #0D0B09 |

### Signal — Semantic Intent

| Token | Web (CSS) | iOS (SwiftUI) | Value |
|---|---|---|---|
| signal-observation | --signal-observation | Color.signalObservation | #8892a4 |
| signal-question | --signal-question | Color.signalQuestion | #4a8ef0 |
| signal-idea | --signal-idea | Color.signalIdea | #4caf82 |
| signal-tension | --signal-tension | Color.signalTension | #e8a44a |
| signal-action | --signal-action | Color.signalAction | #e05454 |
| signal-reflection | --signal-reflection | Color.signalReflection | #8b5cf6 |
| brand-mark | --color-brand-mark | Color.brandMark | #C4652A |

### Type — Scale + Role

| Token | Web (CSS) | iOS (SwiftUI) |
|---|---|---|
| mechanism / mono | Space Mono | Font.mechanism |
| tape / sans | IBM Plex Sans | Font.tape |
| type-title | 2rem / 700 / tape | Typography.title |
| type-body | 1rem / 400 / tape | Typography.body |
| type-mono | 0.8rem / 500 / mechanism | Typography.mono |
| type-label | 0.7rem / 600 / mechanism | Typography.label |

Signal colors carry semantic meaning only; decorative use is a defect.

---

## One decision, shown in full

A single prompt asking Claude to "design the navigation model for a content-dense mobile app" produces one answer — usually the obvious answer. The methodology produces a reasoning trail.

**The problem:** A mobile app requires simultaneous access to three persistent states — a content record, a compose surface, and an organizational view. Standard navigation patterns (tab bar, navigation stack, modal sheets) each fail a specific requirement: tabs imply parallel content of equal weight; stacks imply hierarchy that must be traversed; modals imply temporary interruption. None of these match the actual model.

### Decision anatomy

**Problem**
Three persistent states. No standard navigation pattern fits. Any choice forces a compromise.

**Historian**
Tab bars: fail. Imply equal-weight parallel destinations — one state here is dominant. Nav stacks: partial. Depth navigation is correct for one transition, not all three. Spatial models (Palm OS, early iOS): survived when states exist simultaneously in physical space, not hierarchically.

**Architect**
Constraint: the three states must coexist spatially, not sequentially. A gesture model is required — the user moves between states, not navigates to them. Two detent positions define the rest state and the exposed state of each surface.

**Critic**
Remove the tab bar — permanent chrome for a model where one state is always dominant is visual noise. Remove the modal for organizational view — dismissal creates context loss that breaks the spatial metaphor. Keep the nav stack for depth transitions only.

**Designer**
Gesture-driven horizontal spine. Two detent positions: rest (content dominant) and revealed (organizational view exposed). Compose surface always accessible via gesture, never requiring navigation. Haptic feedback at detent crossings. Spring animation to snap target.

**Creative Director**
**INEVITABLE.** The spatial model is the only solution that satisfies all three requirements simultaneously. Nothing can be removed without losing a constraint. Nothing was added that the constraints didn't require.

---

> A single prompt produces one node. This process produces six — each one eliminating options that seemed viable until examined. The reasoning trail is the output. The navigation model is a consequence of the trail, not the other way around.

---

## Artifact — Spatial Model

No tab bar. Cabinet / Timeline / Compose coexist at fixed offsets — the interface shifts to reveal, it does not navigate.

- **Cabinet** (left) — Revealed by gesture. Organizational view, thread list.
- **Timeline** (center) — Always dominant. Append-only entry list, intent dots, micro-labels.
- **Compose** (right) — Always accessible via gesture. Append-only entry field, intent-tagged.

The output of the decision anatomy. Spatial offset replaces navigation — three persistent states, zero tabs, gesture-driven.

---

## How the practice evolved

This methodology was not designed in advance. It was grown in response to what the previous version couldn't do. Each inflection point below exists because the prior state failed in a specific, legible way.

**01 — Building directly in production**
*Failure mode:* Design decisions were being validated in the wrong environment. Prototyping and implementation are different cognitive modes. Conflating them produced worse output in both directions.
*Response:* A dedicated design canvas — a lightweight environment separated from the production codebase, built specifically for prototyping without the constraints of production architecture.

**02 — Single discipline commands**
*Failure mode:* One agent, one answer. No reasoning trail. The output quality was inconsistent because the process producing it was invisible.
*Response:* Sequential workflows — multi-agent processes that enforced a reasoning sequence. The designer approves each stage before the next begins.

**03 — Workflows without enforcement**
*Failure mode:* The sequence existed but wasn't enforced. Gates were voluntary. The canvas could be skipped. Specs could be bypassed. Good process that isn't enforced is just documentation.
*Response:* Hard skill gates — the design workflow cannot write to any production file without a canvas prototype. Engineering cannot begin without a specification. The methodology made its own shortcuts structurally unavailable.

**04 — Dev-only work, no release model**
*Failure mode:* Experimental work and stable work were indistinguishable. Every session was potentially in production state. There was no promotion model, no stability boundary.
*Response:* dev / beta / main branch model. Release discipline is usually a team constraint — coordination requires it. Here it became a solo designer's infrastructure choice, applied for the same reason: stability requires separation.

**05 — Generalist agents for all work**
*Failure mode:* A generalist AI produces mediocre output at every specialty. Design critique, architectural analysis, historical research, implementation — each requires a different lens. One agent applying all of them produces none of them well.
*Response:* Specialist agents — 23 discipline agents, each scoped to a single lens, each assigned the right model for its task. Historian uses one model. Creative Director uses another. The specialist produces better output than the generalist because its scope is narrower.

**06 — Specialist agents, no quality arbiter**
*Failure mode:* Good specialist output across many disciplines produced inconsistent final quality. There was no agent whose job was to evaluate the whole — to ask whether the sum of the parts was right.
*Response:* Distinguished Engineer and Creative Director as terminal quality gates. Every significant implementation passes through a SHIP / REVISE / REJECT verdict before it moves forward. The gate is real — not everything shipped on the first pass.

**07 — Sequential execution**
*Failure mode:* Each agent waited for the previous one to complete. The methodology was correct but slow. Latency killed the rhythm of a working session — waiting for results interrupted the thinking they were supposed to support.
*Response:* Parallel orchestration. Multiple agents run simultaneously inside a background process. One notification per phase, not one per agent. The thinking happens in parallel; the designer receives a compiled result.

**08 — Single model for all tasks**
*Failure mode:* Treating model selection as an implementation detail rather than a design decision. A classification task and a taste-level judgment require different models — using the same model for both wastes capability on one and underinvests in the other.
*Response:* Multi-model workflows. Haiku for gates and classification. Sonnet for synthesis and implementation. Opus for quality verdicts. Model selection is now part of the methodology — each phase uses the right tool for its task.

---

> **The most valuable practice isn't on this list.**
> Each inflection point above is something added. The practice that compounded more than any of them was subtraction — learning to solve the problem before reaching for the tool, to run the critic pass before the design pass, to ask whether the prototype was necessary before opening the canvas.
>
> The AI makes it effortless to act. Restraint is what makes the action worth taking. This cannot be installed. It has to be practiced. But it can be named — and naming it is the first step toward building it as a team habit.

---

## The honest account

Most case studies show what worked. This one is incomplete without showing where the methodology was tested — where the system produced output that was structurally wrong, where judgment was the only tool available, where the process nearly failed.

**01 — Knowing when to skip the workflow**
The full methodology is expensive. A bug fix that runs through Historian → Architect → Critic → Designer → QA is absurd. But a bug fix that reveals a structural failure — where the root cause is a design decision made three months ago — is not a bug fix. It requires the full pass.

The methodology cannot tell you which one you're looking at. That judgment is irreplaceable. Getting it wrong in either direction has costs: unnecessary workflow overhead makes the system feel like a burden; skipped workflow on a structural problem creates technical debt that compounds.

**02 — When the agent is convincing and wrong**
A Critic agent will remove things. That is its job. On one pass, it removed a component that appeared redundant — its rationale was structurally coherent, well-reasoned, and wrong. The component was doing work that wasn't visible in the context the Critic was given.

Agents produce output shaped by the context they receive. A well-reasoned rationale is evidence that the agent understood its prompt — it is not evidence that the agent understood the system. Evaluating agent output requires knowing more than the agent does. That knowledge lives with the designer.

**03 — When two principles pointed in opposite directions**
The decision hierarchy resolves most conflicts. Structural correctness outranks visual refinement; system coherence outranks craft precision. But there were decisions where structural correctness and system coherence were genuinely in tension — where the most structurally correct solution for this component broke the coherence of the broader system it lived inside.

The hierarchy doesn't resolve this. It names the conflict more precisely. The resolution required understanding what the product was becoming — not just what it was — and making a judgment about which principle the product's next state would require more. No agent holds that understanding. It accumulates through the work.

---

## This is what we're building together

The methodology doesn't replace a team — it closes the access gap. The scope that previously required coordinating ten people becomes accessible to each designer working within it. What the case study demonstrates in one person's hands is what we're putting in yours.

The five pillars in EPS.xd OS are the distillation of what made the difference between a session that compounded and a session that wasted time. Not theory. Not a framework imported from somewhere else. The residue of real work.

The setup guide walks through exactly how to get your team on the system — in the right sequence, with the right foundations in place before any infrastructure is built.
