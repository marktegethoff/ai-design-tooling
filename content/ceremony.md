# The Commit Ceremony

**Eyebrow:** Pillar 05

**Subtitle:** One sentence at the end of every team session. Three months of that and you have institutional memory the AI can use.

---

## Why shared knowledge systems fail

Every team has tried a shared knowledge system. Most die within six weeks. The cause is always the same: contribution is voluntary, asynchronous, and competes with real work. The commit ceremony solves this by making contribution synchronous with work — it's the closing ritual of every session, not a separate task.

| Voluntary contribution | The commit ceremony |
|---|---|
| "Remember to update the docs after the session." Nobody does. The record is always 3 weeks behind. New members inherit an incomplete picture. | The session isn't closed until someone writes the sentence. One rotation. One sentence. The record grows every session without any separate effort. |

---

## What makes a good entry

| Type | Good entry | Weak entry |
|---|---|---|
| Decision | "We use a single bottom sheet for all filter states — multiple sheets created context-switching overhead." | "We decided on the filter design." |
| Discarded direction | "Rejected tab-based navigation — tabs imply parallel content, our flows are sequential." | "We tried tabs and didn't like them." |
| Named constraint | "The transaction list must render within 200ms — anything slower breaks the sense of responsiveness users expect from banking." | "Performance matters for the transaction list." |

---

> **Warning: Git is the wrong first surface for non-technical designers.**
> Git write access at an enterprise requires an access request that can take 2–4 weeks. Terminal commits create social pressure to appear competent; designers who don't know how will skip rather than admit it. Use a **#design-decisions Slack channel** with a one-sentence template as the commit surface. Sync to the shared repo weekly in the background. Designers never touch git to participate in the ceremony.

---

## Slack template — commit ceremony entry

```
📝 [Team] [Date]
Decision / Direction discarded / Constraint named:
[One sentence. Include the reason — "because X" is the part that makes it useful later.]
```
