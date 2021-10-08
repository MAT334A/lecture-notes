# Open, Closed, and Completion

{{#include ../tex_common.md}}

We've learned what open and closed sets are. We know what it means to complete a set, but how does completing a set change its boundary? Let's investigate.

## \\(\partial \overline{S} \subseteq \partial S\\)?

This was used as a lemma in the quiz section notes, but it's useful in its own right, so let's call it a theorem.

Let \\(x \in \partial \overline{S}\\). We want to show that a ball, \\(B(x, r)\\) (for arbitary \\(r\\)), intersects both points in \\(S\\) and in \\(S^c\\). If we do this, we've satisfied our definition of a boundary point for every point \\(x \in \partial \overline{S}\\).

Because \\(x \in \partial \overline{S}\\), \\(B(x, r)\\) contains \\(y \in \overline{S}\\) and \\(z \in \left(\overline{S}\right)^c\\).

Expanding the definition of \\(\overline{S}\\),
\\[
\begin{aligned}
 &y\in \overline{S}\\\\
 \implies& y \in S \cup \partial S\\\\
\end{aligned}
\\]

As such, \\(y\\) is in either \\(S\\) or \\(\partial S\\) (or both!).
 * If \\(y \in S\\), then we're done (with this part)! We've shown that the ball contains a point in \\(S\\)!
 * If \\(y \in \partial S\\), then an arbitrarily small ball centered at \\(y\\), \\(B(y, r_2)\\), contains a point in \\(S\\) and in \\(S^c\\). Therefore, our original ball must contain a point in \\(S\\) and \\(S^c\\) because the points in \\(S\\) and \\(S^c\\) are arbitrarily close to \\(y\\) (and \\(y\\) is arbitrarily close to \\(x\\)).

We now just need to show that our ball contains a point in \\(S^c\\). We'll do this using point \\(z\\):
\\[
\begin{aligned}
 &z \in \overline{S}^c\\\\
 \implies& z \in \left(S \cup \partial S\right)^c\\\\
 \implies& z \in S^c \cap \left(\partial S\right)^c && \texttt{...from DeMorgan's laws}
\end{aligned}
\\]

From this, we have that \\(z \in S^c\\) because if \\(z\\) is in **both** \\((\partial S)^c\\) and \\(S^c\\), it must be in \\(S^c\\).

Because we've shown that a ball of arbitrary size centered at \\(x\\) must contain a point in \\(S^c\\) and \\(S\\), and so, because \\(x\\) is an arbitrary point in \\(\partial \overline{S}\\), we have that every point in \\(\overline{S}\\) satisfies the definition of a boundary point of \\(S\\).

We can therefore conclude that \\(\partial \overline{S} \subseteq S\\).<span style="float: right;">☺</span>

## Closing Closed Sets

Say we have an arbitrary set \\(S\\). Must \\(\bar{S}\\) be closed?

By definition, \\(\bar{S} = S \cup \partial S\\). As such, because \\(\partial S \subseteq \partial S \cup S\\), we have that \\(\partial S \subseteq\bar{S}\\).

## The boundary of the completion of a set

> **Aside: The Rationals, Completion, Boundaries, and ...What?!?**
>
> At a glance, it might seem that, for any set \\(S\\), \\(\partial S = \partial \bar{S}\\). You might think this because \\(\bar{S} = \partial S \cup S\\), so they should have the same boundary points, right? Wrong!
>
> Consider the set of rational numbers, \\(\Q\\). Rational numbers, like \\(\frac{245}{246}\\), are separated by irrational numbers, even though rational numbers can get arbitrarily close to one another.
>
> As such, if we choose _any_ real number, a ball with non-zero radius centered at that number will contain rational numbers, as well as the irrational numbers between them. In other words, \\(\forall x \in \R, \forall r, B(x, r) \cap \Q \neq \emptyset \wedge B(x, r) \cap \Q^C \neq \emptyset\\), satisfying our definition of a boundary point. As such, \\(\partial Q = \R\\).
>
> Clearly, we have \\(\bar{\Q} = \Q \cap \partial \R = \Q \cap \R = \R\\).
>
> ... but \\(\R\\) has no boundary points! As such, \\(\partial \Q \neq \partial \overline{\Q}\\) because \\(\partial \overline{\Q} = \partial \R = \emptyset\\).<span style="float: right;">☺</span>
>

Let \\(S\\) be an arbitrary set. Then \\(\overline{\bar{S}} = \overline{S}\\). Let's prove it!

We defined \\(\overline{S} = \partial S \cup S\\). As such,
\\[
\begin{aligned}
   \overline{\bar{S}} &= \partial \bar{S} \cup \bar{S}\\\\
   &= \partial \bar{S} \cup \left(S \cup \partial S\right)
\end{aligned}
\\]

Above we showed that \\(\partial \bar{S} \subseteq \partial S\\). As such, \\(\partial\bar{S} \subseteq \overline{\bar{S}}\\), satisfying the definition of "closed".<span style="float: right;">☺</span>

## Intersections of open sets

``TODO``

## Union of closed sets

``TODO``

## References
 * Section on 10/7/21
 * Lecture notes for the section (published on Canvas)

