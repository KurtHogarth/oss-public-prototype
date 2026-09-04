# Technical Specification — MVP of the OSS Civic Application

> Context of the project — see `OSS_WP_PRD.md`, sections 5.0, 5.1, 7.3, 7.4 (including 7.4.2 — Tiered Mandatory Response, and 7.4.6 — Transparency of Influence, both `DEPLOYED`, ratified under `HUMAN_RATIFICATION_GATE`). This document is self-contained for hand-off to a development team / AI agent without the necessity of reading the full context, but references to the source are retained for verification of decisions.

> **History notes (cleaned of version markers)**: Trigger of the divergence card was decoupled from wording; Tier 1–3 explicitly out of scope; criterion 6.2 clarified for future compatibility. Outdated wording about the court module corrected — TASK 4 (Handoff Brief) is built as an MVP prototype (`OSS_Court_MVP.html`, categories 1/2/3, SLA, jury lottery, Schelling reputation, HUMAN_RATIFICATION_GATE on verdict), but **not integrated** with Tier 2/3 (7.4.2) and cluster detection (7.4.6) — escalation from the civic application remains non-automated; the functional perimeter of the MVP is unchanged. Additionally: Group-Aware Consensus (multiplicative model with Laplace smoothing) and Topic Overview (4 quadrants — Consensus/Divisive/Group-Representative/Pass) are implemented in `OSS_Polis_MVP.html`, replacing the “semi-random display” placeholder from `OSS_Polis_Reference.md` §7. Explicit link to upstream Polis (github.com/compdemocracy/polis) as the source of the product idea and THE_BAR was fixed; the context document `OSS_Polis_Reference.md` was added. After ratification of modules 8.1 / 7.4.6 / 2.4.2 / 5.0: (1) reference to the new Section 5.0 of the source (principle “observed behavior, not predicted predisposition”) was added as an explicit philosophical foundation of the already existing privacy requirements in Section 3 of the MVP; (2) Section 4 (out of scope) was supplemented with 7.4.6 and 8/8.1. The functional perimeter of the MVP was not expanded.

---

## 1. Purpose and Strategic Role

The MVP is not a demonstration of the full architecture of OSS, but a narrow, independently valuable product: a tool that gives citizens a low-threshold way to see the real distribution of opinions on concrete decisions of power and to compare it with official statements of “support” or “absence of objections.” The product must deliver value from the first day of use without requiring the user to accept the rest of the OSS ideology.

**Hypothesis the MVP must test**: people are ready to interact regularly, without coercion, with the application if it gives them (a) a quick way to speak (low entry barrier) and (b) visible, concrete exposure of divergence between official rhetoric and the real opinion of the majority.

## 2. Functional Requirements

### 2.1 Core — Polis-like Voting

- A user may publish a short statement (≤140 characters) on a pre-defined topic/decision.
- Other users vote: Agree / Disagree / Skip.
- **A reply button to another’s statement is absent technically** — not a moderation restriction, but an architectural decision (eliminates direct confrontation and trolling — see justification in the source, 7.4).
- The system clusters voters by patterns of agreement (ML, analogue of the Polis algorithm) and visualizes the opinion map in real time.

### 2.2 Binding to Concrete Decisions of Power

- Each voting “topic” may be bound to a concrete public decision (law, official statement) with indication of date, source, and involved persons.
- If the decision was officially accompanied by the wording “adopted without objections” / “supported by the population” — the system separately marks and highlights this statement as verifiable.
- **Marking a topic as verifiable is not limited to the presence of such wording.** A divergence card is also generated for topics without an official support formulation if the actual distribution of opinions exceeds the divergence threshold (the same threshold fixed for 7.4.2 — at the MVP stage a single default threshold is permissible, without differentiation by type of decision). Reason: binding the trigger exclusively to the presence of wording creates a cheap and predictable bypass — it is enough to stop using the marked words for a decision to fall out of verification while remaining factually implied as supported. The same risk (`CATEGORY_LAUNDERING`) was already found and closed at the level of the full mechanism 7.4.2 in the source; the MVP must not reproduce a closed vulnerability merely because it is a simplified version.
- Upon completion of a voting cycle — automatic generation of a comparison card: declared level of support vs actual distribution by opinion clusters.
- The card and the underlying data structure must store: topic, date, divergence threshold at the moment of generation, whether the decision was officially marked as “without objections.” This is not MVP functionality, but a data-schema requirement — so that the card is compatible with future Tier 1 (7.4.2, out of MVP scope, see Section 4) without retrospective data migration.

### 2.3 Identification and Sybil Protection

- Registration via an own soulbound identifier (simplified version of Genesis signature of the source, Art. VIII) — not via third-party social networks (see justification of the ban in 7.4 of the source).
- For the MVP a simplified implementation is permissible: binding to a phone number with hashing + one-time check for duplication, with an explicit roadmap item of transition to full DID/soulbound after the MVP.
- One confirmed identifier = one vote. It is technically impossible to link a vote to a personality even at the level of the database administrator (storage exclusively of hashes, without reverse mapping).

### 2.4 Publicity and Aggregation

- The map of opinion clusters is public and accessible without registration (for reach and viral spread).
- Individual votes are never published or exported in a breakdown by personality — only aggregated clusters.
- The “share” function generates a static comparison card for distribution outside the application (social networks — only as an output channel, not an input, see 7.4 of the source).

### 2.5 Civic Scaffolding — Engagement

- A daily short cycle (1–3 statements) instead of a one-off long survey — lowers the entry barrier.
- A simple visible participation tracker (without tokens/gamification in the MVP — simplification to the first iteration; the full reputation system from the source 5.1/7.4 is out of MVP scope).

## 3. Non-Functional Requirements

- **Privacy by default**: no component of the system, including hosting infrastructure, must have the technical ability to deanonymize a voter. This requirement is `RIGHTS_AFFECTING` under the terminology of the Gauntlet Loop of the source (Appendix B) — blocks `STATE_LOCK` upon violation independently of other criteria. **Foundation — Principle 5.0 of the source**: the system records aggregated opinion as an observed fact and does not profile an individual voter as a personality with a certain cast of mind. This is not a new requirement of the MVP, but a formalization of why privacy here is not a technical option but a direct consequence of the project’s philosophy.
- **Resilience to inflation**: rate-limiting on creation of statements and voting from one identifier; detection of patterns of coordinated inflation (bot farms) — at the MVP level a basic heuristic detector is permissible, not full ML protection.
- **Performance**: opinion clustering must be recomputed and updated on the client no less often than once every few seconds under active voting on a topic — for the effect “the map changes before one’s eyes,” important for engagement.
- **Accessibility**: mobile web (PWA) as the primary platform for the MVP — not a native application, for speed of release and cross-platform character.

## 4. Explicitly Out of Scope of the MVP

- Full agent architecture (Section 7.1 of the source) — not required for the MVP.
- Integration with the official rating system (5.1) as automatic real-time update — at the MVP stage manual publication of comparison cards is sufficient; automation is the next iteration.
- LVT/economic module — a completely separate system, not linked to the MVP.
- Full DID/soulbound (blockchain-based) — simplified identification at the MVP; migration to the full scheme is a separate task after hypothesis verification.
- **Tiered Mandatory Response in full (7.4.2, `DEPLOYED`)** — mandatory official response (Tier 1), repeated civic cycle, automatic escalation into the court module (Tier 2), access to the recall procedure via ZK-proof (Tier 3) — all of this requires **integration** with the court module (TASK 4 of the Handoff Brief — MVP prototype is built, `OSS_Court_MVP.html`, but not connected to this pipeline) and a full rating system. The MVP publishes a divergence card manually and escalates nothing automatically — this is a consciously narrow test of the hypothesis “people are ready to participate,” not of the hypothesis “escalation changes official behavior,” which requires entirely different metrics and institutional infrastructure that does not exist at the MVP stage.
- **Transparency of Influence of public representatives (7.4.6, `DEPLOYED`)** — disclosure of beneficial funding and cluster detection of coordination for media “opinion leaders” and the labor sphere. Requires the same court module (5.3) as Tier 2/3, plus separate analytical infrastructure (4-indicator coordination score). Has no relation to the functional core of the MVP (voting on topics of a concrete community) — this is a separate, institutionally far heavier product.
- **Inter-fork connectivity (8, 8.1, `DEPLOYED`)** — inapplicable by definition: the MVP is a single implementation within one pilot; forks of the OSS between which connectivity would need to be established do not yet exist.

## 5. Quality Standard (THE_BAR) and Working Regime

**Reference (source of the product idea)**: [Polis](https://github.com/compdemocracy/polis) / vTaiwan — open-source platform of sentiment gathering (Computational Democracy Project).

OSS borrows from Polis: statement format ≤140, votes Agree/Disagree/Pass, absence of reply-thread, the idea of opinion matrix → clusters → consensus/repness, low participation barrier.  
OSS **does not** borrow: the identity/auth model of Polis, the path “report → obligation/enforcement,” mixing of observation and enforcement.

Full table of borrowings, differences, reasons, and rules of approach to the repository when developing: **`OSS_Polis_Reference.md`**.

**Development regime**: Gauntlet Loop (see the Gauntlet skill / Appendix B of the source). TASK_CLASS = ENGINEERING for the voting/clustering core, NORMATIVE element for wording of voting topics (must not push toward an answer — BAR_PLURALISM rule). Red flag that blocks STATE_LOCK independently of other criteria: any functionality that allows deanonymization of a participant.

## 6. Success Criteria of the MVP (for Hypothesis Verification)

1. A user can pass from registration to the first vote in less than 60 seconds.
2. At least one public “divergence card” (official statement or factually implied support vs real distribution of opinions — see 2.2; the trigger is not limited to the presence of wording) is generated and published within the first month of the pilot.
3. User return on day 7 (retention) — basic engagement metric for assessing viability of the Civic Scaffolding hypothesis.
4. Absence of a single recorded case of deanonymization of a participant for the period of the pilot — this is not a success metric but an abort condition: any such case stops the pilot immediately.
