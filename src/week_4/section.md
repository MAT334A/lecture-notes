

{{#include ../tex_common.md}}

## "Covering" of S

Given \\(S \subseteq \R^n\\), a **covering** of \\(S\\) is defined to be: \\(\l\\\{S_\alpha\r\\\}\_{\alpha\in A}\\) such that \\(S \subseteq \cup_{\alpha \in A} S_\alpha\\).

## Other definitions
S is complete and totally bounded (for any \\(\epsilon > 0\\), \\(\exists\lbrk B_\epsilon(x_n)\rbrk_{n = 1}^{N}\\) such that \\(S \subseteq \cup_{n = 1}^N B_\epsilon (x_n)\\).

\\(A \subseteq \R^m\\), \\(x\\) is a limit point of A if \\(x \in A \setminus\lbrk x\rbrk, \forall r > 0, \l(B_r(x) \setminus\lbrk x\rbrk\r)\\), such that \\(xₙ → x\\).

S is **limit point compact** if \\(∀ A ⊆ S\\), \\(A\\) has a limit point in \\(S\\).


## Heine-Borel Theorem
Given \\(S \subseteq \R^n\\), we say that,

**Bolzono-Weierstrauss Property**, \\(\forall \l\\\{x_n\r\\\}\_{n = 1}^\infty\\) s.t. \\( x_n_k \to x \in S\\)

**Heine-Borel Property**: There exists an open covering of S.


The Heine-Borel theorem states that S satisfies the Bolzono-Weierstrauss Property iff it satisfies the Heine-Borel Property.


Suppose S satisfies the Bolzono-Weierstrass property. Take any \\(\lbrk U_\alpha\rbrk_\alpha\\).

**Lemma**: The lebergue number lemma: Given \\(S\\) that satisfies the Bolzano-Weierstrass property, \\(\exists\epsilon > 0\\), \\(\lbrk U_\alpha\rbrk_{\alpha\in A}\\).
