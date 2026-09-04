# OSS — Agent Handoff Brief

> Purpose of the file: a self-contained set of tasks for an AI agent (Claude Code, Cursor, or any Gauntlet Loop-compatible agent) that will build concrete artifacts for the OSS project. Requires context from the main document `OSS_WP_PRD.md` — pass both files together, as well as `OSS_Core_Articles.md` (canonical signable Core text), `OSS_MVP_TS.md` (civil application specification), `OSS_Polis_Reference.md` (Polis context), and `mindmap.html` (interactive project map, part of the site TASK 3 — keep synchronized with any WP changes).
>
> The brief was updated after a Gauntlet Loop session in which 6 new `DEPLOYED` modules were ratified and 6 structural bugs in the main document were fixed. Below — what is already decided (do not restart from scratch), then the tasks that remain relevant.
>
> **Further update**: TASK 1–5 have been built (see the new status summary table below, immediately after the registry of ratified modules) — the task sections below are left as the original specification, not as current status.

---

## Status — what has already been ratified; do not revisit without strong reason

All listed modules passed a full Gauntlet Loop cycle (Root Fault Predictor + independent blind Critic, minimum 1 round, average 3–4) and `HUMAN_RATIFICATION_GATE`. If a task below appears to overlap with one of these modules — check the source; do not re-solve the question from zero.

| Module | What it resolves | Where in the source |
|---|---|---|
| Tiered Mandatory Response | Civic sentiment receives weight without direct legislative force — cascade of mandatory official response → repeated signal → court → recall | 7.4.2 |
| Transparency of Influence | Disclosure of funding of public “opinion leaders” and labor representation, threshold-based by reach, with cluster detection of coordination | 7.4.6 |
| Inter-Fork Connectivity | Voluntary layer of cooperation between diverged OSS versions — without recentralization or quiet hegemony of a standard | 8, 8.1 |
| Turnout and Emergency Path | Quorum calibration for Extensions — transparency instead of hard turnout quorum; 72-hour path for urgent technical fixes | 2.4.2 |
| Principle 5.0 | Accountability institutions evaluate observed behavior, not predicted predisposition — interpretive frame for Arts. VI/VII/XI | 5.0 |
| Inheritance | Distinction between realized right of disposition (protected by Art. II) and unaccepted remainder (Sovereign Fund, with heir search) | 2.8, 3.13 |

**Known residual risks that are honestly not closed** (they do not block, but do not present them as solved): METRIC_GAMING in 7.4.6 (a coordinator can theoretically distribute presence across all 4 indicators simultaneously), detection of hidden oral agreements on nominal holding of inheritance (2.8/3.13), quiet hegemony of a standard between audits (8.1) — once every 2 years plus extraordinary launch, not continuous protection.

**Development methodology** currently includes the Root Fault Predictor / Loki layer. See Sections 9.1–9.3 of the source for revision history.

---

## Status of TASK 1–5 — check before starting; the table below is more current than the text of the sections themselves

The TASK 1–5 sections below describe the **original** assignment and are left as-is for context; actual build status has moved forward and is not line-by-line synchronized everywhere. Current summary:

| Task | Status | Artifact | Important caveat |
|---|---|---|---|
| TASK 1 (Mind Map) | Built, lives inside the site | `mindmap.html` (part of TASK 3, not a separate `oss_mindmap.html`) | Trilingual (EN/UA/RU), 47 subtopics in 7 domains |
| TASK 2 (Excalidraw) | Built, red flag closed | `OSS_TopLevel_Architecture.excalidraw` | 17 labeled directed arrows added (institutional flows + both gateways A↔B/B↔C); the diagram previously had 0 arrow objects |
| TASK 3 (Site) | Built | 11 HTML pages + `assets/site.css`/`site.js` | EN by default, UA/RU fully working; interactive LVT/Dividend calculator, rating system per §§5.1–5.2, public memory |
| TASK 4 (Court MVP) | Built as an **autonomous** MVP, not integrated | `OSS_Court_MVP.html` | Categories 1/2/3 + SLA, jury lottery, Schelling reputation, HUMAN_RATIFICATION_GATE on verdict — implemented. Integration with Tier 2/3 (7.4.2) and cluster detection (7.4.6) — **no**, these dependencies remain functionally blocked |
| TASK 5 (Polis application) | Built, including part of the roadmap | `OSS_Polis_MVP.html` | Group-Aware Consensus (multiplicative model, Laplace smoothing) and Topic Overview (4 quadrants) implemented — this was a roadmap item in `OSS_Polis_Reference.md` §7, now in code, not only in the document |

**Practical consequence for the agent**: if a task looks like “TASK N is not yet done” according to the section text below — before restarting from scratch, check the table above and the artifact itself. The difference between “MVP built” and “integrated with the rest of the system” is material — do not confuse them when updating status.

---

## 0. Mandatory order of actions for the agent

1. Read `OSS_WP_PRD.md` in full, including Appendix B (specification of the `gauntlet-loop-orchestrator` — Loki/Root Fault Predictor is already part of the specification, not a separate overlay).
2. Work according to the protocol — including `HUMAN_RATIFICATION_GATE` for any artifact whose decisions touch constitutional principles (Section 2 of the source) or are marked `RIGHTS_AFFECTING`, and honestly state the `HONEST_HARNESS_DISCLOSURE` limitation if Builder/Critic are executed without independent orchestration.
3. Do not begin with a textual plan — proceed immediately to Fan-Out decomposition per the protocol.
4. For NORMATIVE/RIGHTS_AFFECTING tasks — Root Fault Predictor is mandatory before hand-off to the blind Critic, not optional.
5. Upon completion of each TASK below — present: `STATE_CURRENT`, Root Fault Predictor findings, Critic verdict, state of `STATE_BEST`/`STAGNATION_COUNTER`.
6. **For interactive HTML artifacts** — runtime verification (e.g., via jsdom) is mandatory before delivery, not only syntactic (`node --check`). This is not a formality: in this session syntactically valid code twice proved non-functional in the browser.

---

## TASK 1 — Project Mind Map for OSS

**Status: implemented and actively maintained — `mindmap.html`, 47 subtopics in 7 domains.** Do not restart from scratch. Upon any new `DEPLOYED` modules in the WP — add the corresponding node to the existing file (domain, short label, 2–4 word anchor chip, hint, teen-friendly explain, src), checking for duplicates before addition. Interactivity: click expands domain, drag moves individual nodes, zoom/pan are bounded (not infinite) over the whole canvas.

---

## TASK 2 — Excalidraw Architecture Plan

**GOAL (TASK)**: a detailed diagram in Excalidraw format (.excalidraw JSON, editable) showing: (a) the institutional architecture of OSS — separation of the three spheres of control from Article VI (law enforcement / data / finance) and which modules belong to which sphere; (b) the agent-system flow (Section 7.1) — hierarchical pattern with domain supervisors and linkage via A2A.

**TASK_CLASS**: ENGINEERING.

**THE_BAR**: system-architecture diagrams of the level found in public RFCs of large distributed systems (e.g., consensus-protocol schematics) — clear domain boundaries, directed links with labeled data-transfer protocols, absence of crossing lines without necessity.

**Mandatory content**:
- Three isolated domains (Art. VI) as visually separated zones, with explicit indication of which institutions (Sovereign Fund, court module, LVT oracle, InTruth, etc.) reside in each, and confirmation that no institution crosses the boundary of two zones.
- Genesis Consent flow (Art. VIII) from a person’s entry into the system to obtaining voting/role rights.
- Case flow through the court module (5.3) by three categories with SLA indication (24–48 h / 5–10 days / no fixed term).

**Task-specific red flags**: a diagram in which two institutions from different spheres (Art. VI) are joined by a direct line without an intermediate control node — this is a visual signal of architectural violation, not merely aesthetic carelessness, and must either be corrected or explicitly marked as an open question.

---

## TASK 3 — Project Website (Public Presentation)

**GOAL (TASK)**: a static site (landing + sub-pages by source sections) explaining OSS to a person without prior context — from philosophy to current development status. Not the governance tool itself (that is a separate, far larger task), but a public showcase of the project.

**TASK_CLASS**: NORMATIVE (content of the “Philosophy” and “Constitutional Core” pages — value material; layout and navigation — ENGINEERING).

**THE_BAR — dual, under the BAR_PLURALISM rule**:
- For content pages (philosophy, economy): synthesis of the style of explanatory landings of existing geolibertarian/DAO projects (e.g., public materials of Prospera, public explainers of Georgism.org) — not to be an advertising brochure, not to hide trade-offs.
- For visual/technical quality: the level of public landings of open governance protocols (e.g., Kleros documentation, the public GPFG page of Norges Bank).

**Mandatory site sections**:
1. Home — 4 principles (Arts. I, III, IV, VII) in plain language, without jargon.
2. Constitutional Core — Articles I–XI with a brief justification of each (not the full commentary from the source — a shortened version for an uninitiated reader).
3. Economy — LVT, Dividend, Sovereign Fund with an interactive “how much I pay / receive” calculator on examples.
4. How accountability works — rating system, court module, Conscientious Refusal.
5. Open questions (Section 10) — explicitly; do not hide what is unresolved; this is part of the project’s good faith.
6. How to participate / Genesis Consent — explanation of the mechanics without technical jargon of zk/soulbound.

**Task-specific red flags**: any page that quietly treats the geolibertarian position as “obviously correct” without showing that it is a conscious choice among alternatives (see the philosophy of the source — “not the sole standard, but a fork-testable choice”) — violation of BAR_PLURALISM; must be rewritten.

---

## TASK 4 — Application Prototype (MVP of One Module)

**GOAL (TASK)**: do not attempt to assemble the whole OSS in one pass — select one module with the most self-contained logic for a demonstration prototype. Recommendation: **the court/arbitration module (5.3)** — the most self-contained logically, does not require external integrations (unlike the LVT oracle, which needs a real transaction registry, or the Sovereign Fund, which needs real assets).

> **Updated**: priority of this task has risen during work on the project — the court module (5.3) is now a direct functional dependency of at least five already ratified mechanisms that do not work without it: Tier 2/3 in 7.4.2, cluster detection and labor disputes in 7.4.6, standard-hegemony audit in 8.1, TECHNICAL/NORMATIVE classification for the emergency path in 2.4.2, dispute over nominal holding of inheritance in 2.8/3.13. If choosing the next task by criticality of dependencies rather than by order in this file — this is TASK 4.

**TASK_CLASS**: ENGINEERING.

**THE_BAR**: functionality and UX at the level of Kleros (a real working product with similar logic — lottery, Schelling incentives, appeal with growing number of jurors) — not necessarily on-chain at the start; simulation is sufficient for MVP.

**Mandatory MVP functionality**:
1. Case filing with category selection (1/2/3 per 5.3) → automatic SLA determination.
2. Simulation of jury lottery (for category 2) with a visible log of who was selected and why (for trust in the transparency of the mechanism).
3. Simple Schelling mechanics: demo accrual of “reputation” to a juror upon coincidence with the majority.
4. Category 1 — simple AI processing of an undisputed case under pre-defined rules (contract template → condition check → verdict).

**Task-specific red flags**: do not postpone HUMAN_RATIFICATION_GATE “until later, when production exists” — even for an MVP that claims to demonstrate judicial logic, there must be a point at which the final verdict on a demo case is confirmed by a human and is not automatically published by AI.

---

## TASK 5 — Civic Sentiment Application (on the Polis basis)

**GOAL (TASK)**: a mobile/web application giving citizens a low-threshold, gamified way to signal support/opposition to specific power-holders and political positions — without risk of identifying an individual participant.

**TASK_CLASS**: ENGINEERING (clustering algorithm and sybil protection are objectively verifiable) with a NORMATIVE element (wording of questions/statements must not push toward a particular answer — see BAR_PLURALISM).

**THE_BAR**: Polis / vTaiwan — [github.com/compdemocracy/polis](https://github.com/compdemocracy/polis) — a concrete working reference, not an abstraction. Key mechanics to copy: absence of a “reply” button to others’ statements, ML clustering of voters, real-time visualization of the opinion map.

**Context of borrowings and differences**: `OSS_Polis_Reference.md` — what is taken from Polis (UX, opinion matrix → PCA/groups/consensus), what is consciously not taken (identity, enforcement path, AGPL-fork without a decision), and how to approach the repository when building. Normative narrowing of TASK 5: `OSS_MVP_TS.md`. Prototype STATE_LOCK: `OSS_Polis_MVP.html`.

**Mandatory functionality**:
1. Short statements (≤140 characters) from users + vote agree/disagree/skip — without the possibility of direct reply to another user.
2. Sybil protection via Genesis signature (soulbound identity, Art. VIII of the source) — without disclosure of the voter’s identity to anyone, including application administrators.
3. Public aggregated map of opinion clusters (never — named data).
4. Civic Scaffolding: daily short engagement cycles instead of one-off long surveys.

**Task-specific red flags**: any functionality that allows deanonymization of a concrete participant (even for an administrator/infrastructure owner) — this is a direct violation of Art. VII of the source (principle of reciprocal transparency applied to itself) and must block STATE_LOCK independently of the Critic’s verdict on other criteria.

---

## Appendix — Quick Access to Key Sections of the Source

For an agent that does not need the full context at once — a map of where to look in `OSS_WP_PRD.md`:

| Needed for | Source section |
|---|---|
| Formal text of Core articles (or clean version for signing) | 2.0–2.8 (Articles I–XI); `OSS_Core_Articles.md` — separate file |
| Numbers/thresholds (LVT rate, quorums, sunset, emergency path) | 2.4.1, 2.4.2, 2.6, 3.4, 3.5 |
| Inheritance — principle vs calibrated parameters | 2.8 (principle), 3.13 (mechanism) |
| Economic flows and precedents | 3.1–3.13 |
| Principle “observed behavior, not predisposition” | 5.0 |
| UX/logic of the court module | 5.3 — see also the note in TASK 4 on its centrality |
| Agent architecture and communication protocols | 7.1 |
| Civic Tiered Mandatory Response (escalation without direct legislative force) | 7.4.2 |
| Transparency of influence of public representatives and the labor sphere | 7.4.6 |
| International coexistence, charter cities, inter-fork connectivity | 8, 8.1 |
| Methodology of development itself (Gauntlet Loop, including Loki) | 9.1–9.3, Appendix B |
| Registry of open questions (may be supplemented — not static) | 10 |

**Other project files besides the main WP:**
- `OSS_Core_Articles.md` — canonical signable Core text (Articles I–XI), without justifications.
- `OSS_MVP_TS.md` — specification of the civic Polis application (narrowing of TASK 5), synchronized with the WP.
- `OSS_Polis_Reference.md` — context: link to github.com/compdemocracy/polis, borrowings, differences, AGPL boundary, math-pipeline trajectory.
- `mindmap.html` — interactive project map, synchronized with the WP; now inside the TASK 3 site, not a separate file (47 nodes at the time of this brief version, trilingual EN/UA/RU).
