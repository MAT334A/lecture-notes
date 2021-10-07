# Open, Closed, and Completion

{{#include ../tex_common.md}}

We've learned what open and closed sets are. We know what it means to complete a set, but how does completing a set change its boundary? Let's investigate.

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

Let \\(S\\) be an arbitrary set. Then \\(\overline{\bar{S}} = \overline{S}\\).
