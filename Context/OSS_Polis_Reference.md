# OSS ↔ Polis: Source of the Idea, Borrowings, Differences

> Context document for the civic layer of OSS (TASK 5 / `OSS_MVP_TS.md`).  
> Allows subsequent reference to the Polis repository as an **example of building a tool**, without mixing its product and legal model with OSS.

**Canonical link to the source of the idea**  
https://github.com/compdemocracy/polis  

**Additionally**  
- Knowledge base: https://compdemocracy.org/Welcome  
- Methods paper: *Polis: Scaling Deliberation by Mapping High Dimensional Opinion Spaces* (Small et al.)  
- Main instance: https://pol.is  
- Upstream license: **AGPL-3.0**

---

## 1. Why Polis in the Context of OSS

The civic layer of OSS (7.4) is needed as a **low-threshold sentiment tool**: short statements, vote without discussion thread, visible distribution of opinions, comparison with official rhetoric (“divergence card”).

Polis is a proven open-source reference of precisely this paradigm (including the experience of vTaiwan). It sets the **THE_BAR** for UX and the math pipeline, but is **not** a constitutional or identity model of OSS.

---

## 2. What We Borrow (Fits OSS)

| Element of Polis | How we use it in OSS | Status |
|---------------|----------------------|--------|
| Statement ≤140 characters | Core of the voting UI | In MVP TS and prototype |
| Agree / Disagree / Pass (Skip) | Three buttons, no “reply” | In MVP |
| **No reply / no thread** | Invariant `SENTIMENT_NOT_DELIBERATION` | Hard in MVP |
| Opinion matrix (participant × statement) | Data schema for clustering | Roadmap after MVP |
| PCA → 2D map → K-means groups | Replacement of demo clusters by a real pipeline | Roadmap |
| **Repness** (characteristic statements of a group) | Descriptive analytics of clusters | Roadmap |
| **Group-aware consensus** | Statements with which *different* groups agree | Roadmap; feeds the divergence card |
| Semi-random display of statements | Efficient use of participant time | Roadmap UX |
| Wikisurvey logic (dimensions are set by participants) | Topics/statements are not imposed from above as the sole axis | Already in the spirit of 7.4 |
| Moderation of statements before entry into the matrix | Anti-spam / hate without turning into opinion censorship | Roadmap |
| Export of matrix + notebooks | Offline/batch analysis, reproducibility | Roadmap |
| Low threshold: many voters, few writers (~10:1) | Civic scaffolding, retention | MVP success metric |

**Important:** we borrow **ideas, UX patterns, and algorithmic logic**, not necessarily the whole monorepo under AGPL. The decision on self-host full Polis vs clean-room math service is separate (see §5).

---

## 3. What We Consciously Do Not Borrow (Differences)

| Polis | OSS | Reason |
|-------|-----|---------|
| Participant identity / auth of Polis | Soulbound / Genesis-lite (Art. VIII), Principle 5.0 | Anti-concentration, privacy, no social-network entry (7.4) |
| Aggregates + export with pid in research mode | Individual votes are not published; MIN_N; threat model “pseudonym ≠ anonymity” | RIGHTS_AFFECTING; abort on deanonymization |
| Conversation as a self-sufficient product | Sentiment **does not** create an obligation of response/enforcement | Enforcement only through the court (5.3) + HUMAN_RATIFICATION; Tiered Response **out of** MVP |
| No constitutional separation of spheres | Art. VI: data / law enforcement / finance are separated | Clusters ≠ basis for sanction (NO_SCORE_AS_POLICY) |
| AGPL-3.0 on the whole stack | OSS may cite and learn; full fork = copyleft on network use | Legal readiness before embedding code |
| Model “collective intelligence / NVC” | Geolibertarian core + NAP + LVT; civic layer — one module | Different normative frame |
| Reports may feed decision-makers directly | Divergence card — civic signal; escalation only under ratified rules 7.4.2 **after** the court | No hidden enforcement from analytics |

---

## 4. Reasons for Divergence (Briefly)

1. **Constitution of OSS** (Arts. VI, VII, VIII, Principle 5.0) requires separation of observation and enforcement and prohibition of a deanonymization path — stronger than typical product privacy of Polis.  
2. **Institutional contour:** OSS already has a court (TASK 4), Tiered Mandatory Response and 7.4.6 as DEPLOYED *on paper*; the MVP of the civic application **intentionally** does not include escalation, in order to test the participation hypothesis, not the coercion hypothesis.  
3. **Identity:** soulbound / ZK-nullifier — part of Genesis and anti-sybil without creating a reverse map; this is not a participant cookie of Polis.  
4. **License:** AGPL obliges upon network distribution; for an OSS pilot a clear boundary is preferable: reference + optional later compliance, not accidental vendor lock into copyleft.

---

## 5. How to Approach the Repository When Building

**Permitted practices**
- Read README, `docs/pca.md`, math architecture, methods paper.
- Reproduce the pipeline on **one’s own** opinion matrix (PCA, silhouette K-means, repness/consensus logic) in Python/offline.
- Align UX: no reply, three votes, group map, consensus vs divisive statements.
- Cite Polis / vTaiwan as THE_BAR and a precedent of scale.

**With caution**
- Copying of sources of `server` / `client-*` / `math` → AGPL trigger; an explicit compliance decision is required.
- Transfer of their identity model or “report → policy” without HUMAN_RATIFICATION_GATE and Art. VI.

**Recommended engineering trajectory of OSS**
1. MVP (LOCK): HTML/JS sentiment UI + privacy invariants (`OSS_Polis_MVP.html`).  
2. Schema: conversation → statements → votes(pseudonym, stmt, {agree,disagree,pass}).  
3. Batch math: export matrix → PCA + groups + consensus/repness (notebooks / clean-room).  
4. UI: 2D map + descriptive divergence card (without participant labels).  
5. Decision: self-host Polis (AGPL) **or** own math service under the invariants of OSS.

---

## 6. Link to OSS Artifacts

| Artifact | Role |
|----------|------|
| `OSS_MVP_TS.md` | Normative requirements of the MVP; THE_BAR = Polis/vTaiwan |
| `OSS_Polis_MVP.html` | STATE_LOCK prototype of UI + threat model |
| `OSS_WP_PRD.md` §7.4 | Institutional place of the civic layer |
| This file | Context: what was taken from Polis, what was not, and why; §7 — mathematics of the roadmap |

---

## 7. Mathematical Layer of Pol.is — GAC and Topic Overview Implemented in the MVP

> Source: user summary of the full cycle of the platform’s work (voting → clustering → consensus), verified for internal consistency; not hosted as a separate public document.
>
> **Status: not only described — implemented.** `OSS_Polis_MVP.html` computes GAC on real (demo-scale) data: k=2 clustering of participants via maximin seeding + several Lloyd iterations on vote vectors, GAC = P(A)×P(B) with Bayesian smoothing, classification of each statement into one of the 4 quadrants of Topic Overview. The algorithm is not fitted to the scenario — on the first run it found its own partition into groups, slightly different from what was intended when designing the synthetic data, which confirms: this is working mathematics, not decoration.

### 7.1 Group-Aware Consensus (GAC) — Why It Is Needed and How It Is Calculated

Classical vote counting produces “tyranny of the majority”: a statement for which 80 of 100 participants voted “for” formally wins, even if all 80 are from one opinion cluster and the 20 disagreeing are from another. GAC changes the very formula of consensus: a thesis is counted as consensual not when it receives many votes **in sum**, but when it receives support **inside each independently discovered cluster**.

Calculation in three steps:
1. **Clustering of participants** — PCA + K-Means/EM on the vote matrix (participants × statements).
2. **Probability of agreement inside a group**, with Bayesian Laplace smoothing (pseudo-counts +1/+2), so that a small number of votes by default tends toward 0.5, not toward extreme values:
   `P_agree(g,c) = (1 + N_agree(g,c)) / (2 + N_total(g,c))`
3. **Final GAC — the product**, not the average, of the probabilities of agreement across all groups:
   `C_GAC(c) = ∏ P_agree(g,c)`

Why multiplication, not averaging — the key detail: a polarizing thesis (90% in group A, 10% in group B) yields an average of 50%, but GAC = 0.9×0.1 = **0.09** (failure). A bridging thesis (75%/75%) yields the same average of 75%, but GAC = 0.75×0.75 = **0.5625** (enters the top of consensus). If at least one group is categorically against — the multiplicative model sharply zeros the result, while the arithmetic mean would have hidden that information.

**Link to the Core of OSS**: this is a mathematical expression of the same idea as Arts. VI / Principle 5.0 — protection not through majority count, but through structural check across independent slices. The direct parallel is worth explicitly fixing when moving from demo clusters (`OSS_Polis_MVP.html`) to a real pipeline.

### 7.2 Topic Overview — 4 Functional Categories of the Report

**Implemented.** In the MVP — exactly these 4 categories (plus the retained honesty wrapper of the project):

- **Consensus Statements** — maximum GAC; not a “compromise in the middle,” but points of genuine common agreement.
- **Group-Representative Statements** — representativeness metric: difference in “conviction” between groups (not merely difference of shares). In the MVP — attribution to a concrete group (A or B), without speculation about the personality of participants.
- **Divisive Statements** — both groups confidently pull in opposite directions; explicit “red lines” of conflict.
- **Pass/Unsure Statements** — where engagement is low or votes are distributed around 50/50 in both groups; a signal of poor wording or lack of information, not of consensus.

**Extension of the privacy invariant of the MVP**: the original `MIN_N` suppressed only the overall aggregate by statement. Upon transition to per-group breakdown (Group A: N% · Group B: N%) the same threshold `MIN_N` is now applied **separately to each group** — if in any of the two groups the number of voters is less than `MIN_N`, the group breakdown is hidden entirely (`groupSuppressed`), and only the fact of the quadrant is shown. This is the same anti-inference principle that was in the original MVP, simply correctly extended to more granular data — the very fact that finer analytics requires finer protection was worth thinking through explicitly, rather than inheriting by default.

### 7.3 Bridging Routing — Which Statement to Show Next

Pol.is does not sort the feed by engagement (unlike typical social networks), but balances three goals when choosing the next statement for a concrete participant:
1. **Explore** — new, still little-rated statements.
2. **Cluster Assignment** — a marker statement that clarifies to which opinion cluster the participant is closer.
3. **Consensus Testing** — showing a consensus candidate to a participant from the **opposite** cluster, in order to check whether the agreement holds.

Our MVP currently uses “semi-random display” as a temporary stub (see the borrowings table above) — this is a direct specification of what to replace it with.

### 7.4 Semantic Clustering of Topics (for Growth of Utterance Volume)

When the number of statements exceeds a “readable by eye” volume — an NLP pipeline: text embedding (LLM/Sentence Transformers) → dimensionality reduction (UMAP/t-SNE) → clustering and auto-naming of topics (HDBSCAN + LLM). Gives administrators a semantic map of problems, not a list of scattered phrases. Roadmap element, not MVP.

### 7.5 Where This Is Already Applied — Real Precedents

- **vTaiwan / GovZero** — regulators take formulations from the Group-Aware Consensus block directly into normative acts, because they already carry a mandate of agreement of conflicting parties.
- **Community Notes / Birdwatch (X)** — a similar principle of factorization of the vote matrix: a note is published only when it is recognized as useful by users with historically opposite voting profiles. A useful parallel for future moderation of statements in 7.4.
- **Collective Constitutional AI** — training and alignment of language models on the basis of collective citizen consensus via metrics analogous to GAC. This is a real research direction of Anthropic; a direct substantive resonance with Principle 5.0 of OSS (observed coordinated behavior as the basis of legitimacy, not a declaration or a profile). Worth citing precisely if the material goes into a public text — at present this is only an internal note for the roadmap.

---

## 8. History

| Date | Change |
|------|-----------|
| 2026-08-22 | First fixation: link to github.com/compdemocracy/polis, table of borrowings/differences, math-pipeline trajectory, AGPL boundary |
| 2026-08-25 | Added §7: GAC formula (multiplicative model, Laplace smoothing), structure of Topic Overview, bridging routing, roadmap of semantic clustering, precedents (vTaiwan/GovZero, Community Notes, Collective Constitutional AI) |
| 2026-08-26 | GAC + Topic Overview from §7.1–7.2 implemented in `OSS_Polis_MVP.html` (not only described): k=2 clustering of participants (maximin+Lloyd), real GAC calculation, 4 quadrants, per-group extension of MIN_N privacy |

*The document is informational (ENGINEERING/context), not RIGHTS_AFFECTING. A change of borrowings that affects privacy or the enforcement path requires revision of the MVP TS and, if necessary, a Gauntlet Loop.*
