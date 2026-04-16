# EPS.xd OS — Design AI Operating System

A site for Capital One's EPS.xd design team (~100 designers) documenting how we use Claude Code for design work. Layers on top of `richhemsley3/claude-for-design` (mechanics curriculum). This covers the operating model on top of those mechanics.

## What this is

EPS.xd OS is the team's shared framework for structured AI-assisted design work: behavioral contracts, governance, shared vocabulary, onboarding, and institutional memory. The case study documents the methodology used to build a production-quality digital product and provides the capability proof for team adoption.

## Structure

```
index.html          Single-page app — all 13 pages, JS navigation
assets/
  style.css         Design system, component styles
  app.js            Page navigation, dropdown handling, copy-to-clipboard
content/            Markdown extractions of each page (canonical content source)
  home.md
  behavioral-contract.md
  agents.md
  skills.md
  memory.md
  governance.md
  vocabulary.md
  onboarding.md
  ceremony.md
  proof.md
  case-study.md
  setup.md
  reference.md
memory/             Project memory files (persistent context)
```

## Pages

| Page | Nav location | Purpose |
|---|---|---|
| Overview | Top nav | Entry point — two-layer model, five pillars, sequence argument |
| Behavioral Contract | The System | What a CLAUDE.md is, what belongs in it, decision hierarchy |
| Agents | The System | Discipline agents vs. workflow orchestrators, model assignment |
| Skills | The System | How skills differ from prompts, four-stage evolution |
| Memory | The System | Global vs. project memory, what goes where |
| Governance | Five Pillars | Three-layer inheritance: org → team → personal |
| Vocabulary | Five Pillars | Critical reframes — behavioral contract, brief, directing |
| Onboarding | Five Pillars | IT/MDM deployment, first session structure |
| Commit Ceremony | Five Pillars | Slack-based institutional memory ritual |
| Capability Proof | Five Pillars | What the proof must demonstrate, on-ramp requirement |
| Case Study | Top nav | Full methodology documentation — scope, decisions, evolution, honest account |
| Setup | Top nav | Sequence guide for AI Tooling leads and individual designers |
| Reference | Top nav | Org layer + team CLAUDE.md templates, warning signs |

## Content editing

Edit content in the `content/` markdown files — one file per page. The markdown files are the canonical content source. After editing, update the corresponding section in `index.html` to match.

The site is a static SPA with no build step. Open `index.html` directly in a browser.

## Navigation model

`app.js` manages navigation via `showPage(id)`. The `navMap` object maps page IDs to nav link IDs for active state tracking. Dropdowns are handled by `toggleDropdown(id)`.

## Audience

Senior Capital One designers skeptical of AI adoption. They respond to proof of quality from a peer, not to marketing or enthusiasm. All framing must position AI as expanding what each designer can access — not replacing the team.

## Maintained by

AI Tooling — EPS.xd
