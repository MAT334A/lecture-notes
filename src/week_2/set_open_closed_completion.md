# Open, Closed, and Completion

{{#include ../tex_common.md}}

We've learned what open and closed sets are. We know what it means to complete a set, but how does completing a set change its boundary? Let's investigate.

## \\(\partial \overline{S} \subseteq \partial S\\)

This was used as a lemma in the quiz section notes, but it's useful in its own right, so let's call it a theorem.

Let \\(x \in \partial \overline{S}\\). We want to show that a ball, \\(B(x, r)\\) (for arbitary \\(r\\)), intersects both points in \\(S\\) and in \\(S^c\\). If we do this, we've satisfied the definition of a boundary point of \\(S\\) for every point \\(x \in \partial \overline{S}\\).

Now, because \\(x \in \partial \overline{S}\\), \\(B(x, r)\\) contains some \\(y \in \overline{S}\\) and \\(z \in \left(\overline{S}\right)^c\\) for any choice of \\(r > 0\\). 

Let's first show the existence of some point in \\(B(x, r)\\) also in \\(S\\). Expanding the definition of \\(\overline{S}\\),
\\[
\begin{aligned}
 &y\in \overline{S}\\\\
 \implies& y \in S \cup \partial S\\\\
\end{aligned}
\\]

As such, \\(y\\) is in either \\(S\\) or \\(\partial S\\) (or both!).
 * If \\(y \in S\\), then we're done (with this part)! We've shown that \\(y\\), a point in \\(B(x, r)\\), is also in \\(S\\)!
 * If \\(y \in \partial S\\), then as \\(B(x, r)\\) is an open set, there exists a ball with a sufficiently small radius centered at \\(y\\), \\(B(y, r_2)\\) such that $\\(B(y, r_2) \subseteq B(x, r)\\). As \\(y\\) is a boundary point of \\(S\\), the ball \\(B(y, r_2)\\) must contain a point \\(y' \in S\\) (and some point in \\(S^c\\)). Therefore, as \\(y' \in B(y, r_2) \subseteq B(x, r)\\), we know that \\(y'\\) is a point in \\(B(x, r)\\) also in \\(S\\), completing this case.

We now just need to show that our ball contains a point in \\(S^c\\). We'll do this using point \\(z \in \left(\overline{S}\right)^c\\):
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

> **Aside: \\(\partial S = \partial \bar{S}\\)? A Note about the Rationals, Completion, and Boundaries**
>
> At a glance, it might seem that, for any set \\(S\\), \\(\partial S = \partial \bar{S}\\). You might think this because \\(\bar{S} = \partial S \cup S\\), so they should have the same boundary points, right? 
>
> Wrong!
>
> Consider the set of rational numbers, \\(\Q\\). Rational numbers, like \\(\frac{245}{246}\\), are separated by irrational numbers, even though rational numbers can get arbitrarily close to one another.
>
> As such, if we choose _any_ real number \\(x\\), a ball with positive radius centered at \\(x\\) will contain rational numbers, as well as the irrational numbers between them. In other words, \\(\forall x \in \R, \forall r, B(x, r) \cap \Q \neq \emptyset \land B(x, r) \cap \Q^C \neq \emptyset\\), satisfying our definition of a boundary point. As such, \\(\partial Q = \R\\).
>
> Clearly, we have \\(\bar{\Q} = \Q \cap \partial \Q = \Q \cap \R = \R\\).
>
> ... but \\(\R\\) has no boundary points! As such, \\(\partial \Q \neq \partial \overline{\Q}\\) because \\(\partial \overline{\Q} = \partial \R = \emptyset\\).<span style="float: right;">☺</span>

## Closing Closed Sets

Say we have an arbitrary set \\(S\\). Must \\(\bar{S}\\) be closed?

By definition, \\(\bar{S} = S \cup \partial S\\). As such, because \\(\partial S \subseteq \partial S \cup S\\), we have that \\(\partial S \subseteq\bar{S}\\).

As we've proved that \\(\partial \overline{S} \subseteq \partial S\\), we conclude that \\(\partial \bar{S} \subseteq\bar{S}\\) and therefore \\(\bar{S}\\) is closed.

## The boundary of the completion of a set

Let \\(S\\) be an arbitrary set. Then \\(\overline{\bar{S}} = \overline{S}\\). Let's prove it!

We defined \\(\overline{S} = \partial S \cup S\\). As such,
\\[
\begin{aligned}
   \overline{\bar{S}} &= \partial \bar{S} \cup \bar{S}\\\\
   &= \partial \bar{S} \cup \left(S \cup \partial S\right)
\end{aligned}
\\]

Above we showed that \\(\partial \bar{S} \subseteq \partial S\\). As such, \\(\partial\bar{S} \subseteq \overline{\bar{S}}\\), satisfying the definition of "closed".<span style="float: right;">☺</span>

## Unions or Intersections of a Finite Number of Open or Closed Sets

Unions or intersections of many sets which are all open or all closed more or less behave as one might expect, provided that "many" is still finite. We will present the proof that the intersection of a finite number of open sets is open, the union of a finite number of open sets is open, and leave the other two cases as an exercise.

Let us first show that the intersection of a finite number of open sets is open. Suppose that \\(S = \cap_{i = 1}^n S_i\\) for a finite positive integer \\(n\\) and open sets \\(S_i\\). To prove that \\(S\\) is open, it suffices to show that every point \\(x \in S\\) is an interior point of \\(S\\).

Let \\(x \in S\\) be given. We must have \\(x \in S_i\\) for all \\(S_i\\). As \\(S_i\\) is open, there exists some \\(r_i > 0\\) such that for any \\(0 < r \le r_i\\), we know that \\(B(x, r)\\) is a subset of \\(S_i\\). 

Consider the values \\R: \{r_1, r_2, ..., r_n\}\\). Let \\(r_k \in R\\) be such that \\(r_i \ge r_k\\) for any \\(r_i \in R\\). Therefore, \\(B(x, r_k)\\) is a subset of every \\(S_i\\), and is therefore a subset of \\(S\\). Therefore, there exists a ball at \\(x\\) with some positive radius that is a subset of \\(S\\), so \\(x\\) is an interior point of \\(S\\).

The proof that the union of a finite number of open sets is open is even simpler. Consider \\(S = \cup_{i = 1}^n S_i\\), similar to before. We just need to show that every point \\(x \in S\\) is an interior point of \\(S\\).

Let \\(x \in S\\) be given. By the construction of \\(S\\), we know that there is at least one set \\(S_i\\) such that \\(x \in S_i\\). As \\(S_i\\) is open, there exists some positive \\(r\\) such that \\(B(x, r)\\) is a subset of \\(S_i\\). But since \\(B(x, r)\\) is a subset of \\(S_i\\), we know that \\(B(x, r)\\) is a subset of \\(S\\). Therefore, there exists a ball at \\(x\\), namely, \\(B\\), with some positive radius that is a subset of \\(S\\), so \\(x\\) is an interior point of \\(S\\).

> Note that, by knowing that the intersection of a finite number of open sets is itself open, you can show that the union of a finite number of closed sets is itself closed. What do we know about the **complement** of the union of a finite number of closed sets? Using a similar method, can you show that the intersection of a finite number of closed sets is itself closed?

## How About Infinite Sets?

`TODO`

## References
 * Section on 10/7/21
 * Lecture notes for the section (published on Canvas)

