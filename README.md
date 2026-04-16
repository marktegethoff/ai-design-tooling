# Design AI Operating System

A site documenting how we use Claude Code for design work. Covers the operating model: behavioral contracts, governance, shared vocabulary, onboarding, and institutional memory. The case study documents the methodology used to build a production-quality digital product and provides the capability proof for team adoption.

## What this is

A shared framework for structured AI-assisted work: behavioral contracts, governance, shared vocabulary, onboarding, and institutional memory. Serves two personas (practitioner adopting Claude Code, team lead rolling it out) across designers, PMs, and engineers.

## Structure

```
index.html          Single-page app — all pages, JS navigation
assets/
  style.css         Design system, component styles
  app.js            Page navigation, dropdown handling, copy-to-clipboard
content/            Markdown extractions of each page (canonical content source)
memory/             Project memory files (persistent context)
```

## Pages

| Page | Nav location | Purpose |
|---|---|---|
| Home | Top nav | Two-door entry — practitioner vs. team lead paths |
| Start Here | Top nav | Practitioner door — first session structure, behavioral contract intro |
| Rolling Out | Top nav | Team lead door — deployment sequence, governance, commit ceremony |
| Case Study | Top nav | Full methodology narrative — scope, decisions, evolution, honest account |
| Behavioral Contract | The System | What a CLAUDE.md is, decision hierarchy, three-layer governance, vocabulary |
| Agents & Skills | The System | Discipline agents, workflow orchestrators, model assignment, skill evolution |
| Memory | The System | Global vs. project memory, what goes where |
| Setup | The System | Technical setup, onboarding package, individual getting started |
| Reference | Top nav | Org + team CLAUDE.md templates, warning signs, vocabulary glossary, commit ceremony template |

## Content editing

Edit content in the `content/` markdown files — one file per page. The markdown files are the canonical content source. After editing, update the corresponding section in `index.html` to match.

The site is a static SPA with no build step. Open `index.html` directly in a browser.

## Navigation model

`app.js` manages navigation via `showPage(id)`. The `navMap` object maps page IDs to nav link IDs for active state tracking. Dropdowns are handled by `toggleDropdown(id)`.

## Illustration placeholders

The site has 9 placeholder locations marked with `<!-- PLACEHOLDER: ... -->` comments for internal illustration/iconography to be added later.

## Audience

Designers, PMs, and engineers evaluating AI adoption. They respond to proof of quality from a peer, not to marketing or enthusiasm.

## Maintained by

AI Tooling
