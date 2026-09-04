https://pol.is/home2

---

### How Data Visualization Works (“Opinion Map”)

Visualization in Pol.is is built on machine-learning algorithms (in particular, Principal Component Analysis — **PCA** — and clustering):

1. **Multidimensional vector space:** Each participant forms a voting profile (a vector of “yes/no/skip” answers across dozens of statements).
2. **2D projection (dimensionality reduction):** The algorithm compresses the multidimensional data onto a two-dimensional plane. People who vote similarly on most questions end up close to one another on the plane; people with opposite views end up far apart.
3. **Opinion clusters (Groups A, B, C…):** The algorithm automatically joins dense concentrations of similar users into groups (denoted by polygons or colored regions).
4. **Dynamic avatar in real time:** As a user answers more and more questions, their avatar (blue dot) shifts in real time across the map, showing which group of views they are currently closest to.

---

### Difference Between a Single Survey and a Series of Evolving Statements

This is the key distinction that determines Pol.is’s ability to overcome polarization:

| Characteristic | Single survey (1 question) | Series of statements in Pol.is (evolving dialogue) |
| :--- | :--- | :--- |
| **Format** | Binary choice (e.g., *“Allow Uber in the country? Yes / No”*). | Dozens and hundreds of different statements covering the nuances of the problem. |
| **Result** | **Polarization 52% to 48%**. Creates a “winner takes all” situation in which the minority feels unheard. | **Map of complex sentiments**. Reveals hidden shared values even between opposing groups. |
| **Nature of opinions** | Static fixation of a position at one moment in time. | Dynamic process: people vote as new arguments appear. |
| **Participant motivation** | Take an extreme position and win by number of votes. | **Iterative rephrasing:** for a statement to obtain broad support, the author is forced to seek formulations acceptable to opponents. |
| **Focus of analysis** | Share of the majority. | Separation into **Divisive Statements** (polarizing theses) and **Consensus Statements** (consensual theses). |

#### Why a Series of Statements Gives a Full Picture:
* **Identification of “polarizing” topics:** Pol.is shows on which precise points groups categorically disagree (e.g., one cluster believes traditional taxis should disappear, another that Uber should be completely banned).
* **Search for “rough consensus”:** A series of diverse questions makes it possible to discover non-obvious statements with which **80–90% of people from both opposing groups** agree (e.g.: *“Drivers should undergo a safety check”*, *“Tax rules should be fair for everyone”*).
* **From dialogue to lawmaking:** In Taiwanese practice regulators take consensual statements identified in such a series of surveys and place them at the foundation of laws or regulatory “sandboxes.” Questions that caused hard polarization are postponed for additional pilot experiments.

**Group-Aware Consensus (GAC)** (or *Group-Informed Consensus*) is the key mathematical and algorithmic principle of the Pol.is platform and of bridging-moderation systems (Bridging Algorithms).

It solves a fundamental problem of classical democracy and web surveys — the **“tyranny of the majority.”**

---

### 1. The Problem of Traditional Vote Counting

In classical voting systems (and in recommendation algorithms of social networks) counting is performed by overall sum:
* If 100 people participate in a discussion: 80 representatives of group $A$ and 20 of group $B$.
* A statement advantageous to group $A$ and unacceptable to group $B$ receives **80% of “FOR” votes**.
* In an ordinary survey this thesis will be considered “won by majority,” although in reality it polarizes society and ignores the minority.

**Group-Aware Consensus** changes the very formula: a thesis is considered consensual not when many people vote for it in sum, but when it **receives support inside each independent opinion cluster**.

---

### 2. How Group-Aware Consensus Is Computed

The process of computing GAC consists of several steps:

#### Step 1. Clustering of Participants (PCA + K-Means / EM)
The system builds a vote matrix $M$ ($N$ participants $\times$ $K$ statements). On the basis of principal-component analysis (PCA) participants are distributed into clusters $G = \{g_1, g_2, \dots, g_m\}$ (e.g., “Supporters of traditional taxis,” “Uber users,” “City regulators”).

#### Step 2. Estimation of the Probability of Agreement Inside a Group
For each statement $c$ and each group $g$ a smoothed probability that a participant of that group will vote “Agree” ($P_{\text{agree}}(g, c)$) is computed:
$$P_{\text{agree}}(g, c) = \frac{1 + N_{\text{agree}}(g, c)}{2 + N_{\text{total}}(g, c)}$$
*(Pseudo-counts $+1$ and $+2$ — Bayesian Laplace smoothing, so that with a small number of votes the probability by default tends toward $0.5$, not toward the extreme values $0$ or $1$)*.

#### Step 3. Calculation of the GAC Metric (Multiplicative Model)
The final consensus indicator of statement $c$ is computed as the **product** of the probabilities of agreement in all discovered groups:
$$C_{\text{GAC}}(c) = \prod_{g \in G} P_{\text{agree}}(g, c)$$

**Why precisely multiplication?**
* **Polarizing thesis:** In group $A$ it has $90\%$ ($0.9$), in group $B$ — $10\%$ ($0.1$). 
  * Simple average: $(90\% + 10\%) / 2 = 50\%$.
  * **GAC:** $0.9 \times 0.1 = \mathbf{0.09}$ *(very low consensus score)*.
* **Bridging thesis:** In group $A$ it has $75\%$ ($0.75$), in group $B$ — $75\%$ ($0.75$).
  * Simple average: $75\%$.
  * **GAC:** $0.75 \times 0.75 = \mathbf{0.5625}$ *(high score, enters the top of consensus)*.

If at least one group is categorically against the statement, multiplicative scoring sharply zeros the overall rating.

---

### 3. Topic Overview: Structure of the Final Report

In the analytical interface of Pol.is the **Topic Overview** section lays out the results of the discussion into 4 functional categories:

```
                           [ High GAC ]
                                 ▲
                                 │
                   1. Overall consensus (Consensus)
                      “Points of contact”
                                 │
 [ Only Group A ] ────────────┼──────────── [ Only Group B ]
 2. Markers of Group A             │             3. Markers of Group B
    (Rv > 1)                     │                (Rv > 1)
                                 │
                   4. Polarizing (Divisive)
                      “Polarizing topics”
                                 ▼
                           [ Low GAC ]
```

1. **Consensus Statements:**
   * Statements with the highest GAC indicator.
   * These are not a “compromise in the middle,” but fundamental shared values (e.g.: *“Passenger safety is more important than speed of vehicle dispatch”*).
2. **Group-Representative Statements (Marker theses of groups):**
   * Computed via the representativeness metric $R_v(g, c)$ (odds ratio).
   * Show which statements are shared precisely by members of group $A$ relative to the rest of the audience. This makes it possible to understand the cultural and logical basis of each cluster without speculation.
3. **Divisive Statements:**
   * Theses with maximal variance between clusters (one group places $90\%$ “for,” the other $90\%$ “against”). They identify the “red lines” of conflict.
4. **Pass/Unsure Statements (Blind spots):**
   * Statements on which the majority pressed “Skip” or where votes were distributed randomly. Indicate lack of information or poor wording.

---

### 4. Algorithmic Routing (Bridging Routing)

Pol.is uses GAC not only for building reports, but also in **real time for forming the user’s feed**:

Unlike classical social networks that optimize the feed for *engagement* (involvement through anger and disputes), the Pol.is algorithm computes which statement to show a person next, pursuing three goals:
1. **Explore:** Show new, still little-rated statements.
2. **Cluster Assignment:** Show a marker statement in order to determine more precisely which opinion cluster the user belongs to.
3. **Consensus Testing:** Show a statement claiming the status of Group-Aware Consensus to a participant from the opposite cluster, in order to check whether the consensus holds.

---

### 5. Where This Is Applied

* **Lawmaking (vTaiwan, GovZero):** Officials take formulations from the *Group-Aware Consensus* block and translate them into normative acts, because they already carry a mandate of agreement from all opposing parties.
* **Moderation in social networks (Community Notes / Birdwatch on X):** A similar matrix-factorization algorithm is used for showing notes on tweets — a note is published only when it has been recognized as useful by users with historically opposite voting profiles.
* **Collective Constitutional AI:** Training and alignment of large language models (LLM) on the basis of collective citizen consensus obtained via GAC metrics.

---

The four images presented illustrate the **full cycle of work of the Pol.is platform and of modern deliberative AI systems**: from the voting of a concrete user in real time to semantic clustering of topics and computation of consensus metrics (*Group-Aware Consensus*).

---

### Image 1: Semantic Topic Map (NLP Topic Embedding Map)

```
        [0_92: Affordable Housing]        [0_2: Christian Community Values]
                 \                              /
                  • • • •                • • • •
               • • • • • •              • • • • • •
                 /                              \
[0_80: Downtown Revitalization]          [0_64: Public Education]
```

* **What is depicted:** A two-dimensional projection of the semantic space of all statements proposed by participants (on the example of a city dialogue in Bowling Green / WKU).
* **Mechanism of work:**
  1. **Text vectorization (Embeddings):** Each textual statement is translated by a language model (LLM / Sentence Transformers) into a dense vector of semantic features.
  2. **Dimensionality reduction (UMAP / t-SNE):** Semantic vectors are projected onto a 2D plane. Statements with similar topic and lexicon end up close (points of the same color).
  3. **Clustering and auto-naming (HDBSCAN + LLM):** The algorithm automatically joins close points into topics and generates titles for them (e.g., `0_92: Affordable Housing Solutions Needed`, `0_64: Improving Public Education Systems`, `0_21: WKU Campus Improvement Needs`).
* **Purpose:** Allows administrators and analysts to see not merely scattered phrases, but the **semantic structure** of problems that concern the community.

---

### Image 2: Consensus Graph by Topics (Topic Overview: Group-Aware Consensus)

* **What is depicted:** A bubble diagram evaluating each identified topic by the level of inter-group agreement (*Group-Aware Consensus*).
* **Mechanism and axes of the graph:**
  * **Y axis (Group-Aware Consensus, 0.4 – 0.9):** Mathematical indicator of agreement between polar opinion groups (extracted via PCA).
    * *Green bubbles at the top ($>0.75$):* “Bridge” topics on which even opposite clusters vote equally positively.
    * *Red/orange bubbles at the bottom ($<0.55$):* “Polarizing” topics that cause polarization between groups.
  * **X axis (Average Votes per Comment):** Average number of votes per statement in the topic (indicator of statistical reliability and engagement).
  * **Bubble size:** Number of comments entering the given semantic topic (volume of the topic in the discussion).
* **Purpose:** Separates socially significant consensus from local disputes. Allows instant prioritization of topics ready for decision-making.

---

### Image 3: Polarization Profile of the Dialogue (How Divisive Was the Conversation?)

* **What is depicted:** A classical final report of Pol.is (statistics: 2 026 participants, 225 460 votes, 403 theses).
* **Visualization mechanisms:**
  1. **“Onion” scale (Consensus vs. Divisive continuum):**
     * Each black point on the scale is **one concrete statement**.
     * Position on the horizontal shows the degree of polarization: left — theses with absolute consensus, right — theses that polarize the audience.
     * **The drop/onion shape on the left** visually demonstrates the sociological phenomenon: *the overwhelming majority of questions in society unite people*, rather than divide them (although media often create the opposite illusion).
  2. **Matrix of group vote distribution (lower table):**
     * Shows how groups **A (751 people)** and **B (827 people)** voted.
     * Color indicators: **Green** = “Agree,” **Red** = “Disagree,” **Gray** = “Skipped,” **White** = “Did not vote.”
     * It is visible that consensus theses (Nos. 21, 64, 82, 83) have a high green bar **simultaneously in groups A and B**.

---

### Image 4: User Voting Interface and Live Map (Live Pol.is Interface)

* **What is depicted:** A participant’s screen during real voting (case of *vTaiwan / UberX*, statement by Audrey Tang on mandatory passenger liability insurance).
* **Mechanism of work in real time:**
  1. **Voting block (top):** Offers a statement and three buttons (`Agree`, `Disagree`, `Pass / Unsure`).
  2. **Opinion space (PCA 2D Map):**
     * The plane is formed on the basis of singular-value decomposition of the answer matrix of all participants.
     * Gray polygons — automatically identified opinion clusters (**Group A: 550 people**, **Group C: 242 people**, **Group D: 205 people**).
  3. **Group indicators (horizontal bars inside polygons):** Show the current slice of voting inside each cluster on the statement open on the screen.
  4. **Blue circular avatar:** Position of the current user. With each new press of “Agree” or “Disagree” the avatar dynamically moves closer to those people whose answers coincide with their choice.

---

### Summary Scheme of Interaction of These Mechanisms:

```
[User votes (Fig. 4)] 
        │ (Vote matrix N × M)
        ▼
[Clustering of participants into groups via PCA (Fig. 4)] 
        │ 
        ├─────────────────────────────────────────┐
        ▼                                         ▼
[Semantic clustering of theses (Fig. 1)]   [Polarization analysis of theses (Fig. 3)]
        │                                         │
        └───────────────────┬─────────────────────┘
                            ▼
      [Computation of Group-Aware Consensus by topics (Fig. 2)]
```
