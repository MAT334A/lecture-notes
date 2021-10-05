# Some Set-Related Definitions

{{#include ../tex_common.md}}

## A `Ball`

Define a ball, \\(B(x, r) := \left\\{ y\in\mathbb{R}^n : \norm{x - y} < r \right\\}\\), where \\(x \in \mathbb{R}^n\\) and \\(r \in \mathbb{R}\\).

A ball is a set of points. If we let \\(n = 2\\), then it is an [open disk](https://en.wikipedia.org/wiki/Disk_%28mathematics%29).

Notice that we're writing "\\(\norm{x - y} < r\\)" with a `<`, not a `≤`. This means that the points a distance \\(r\\) from the center of the ball **are not in the ball**.

## A `Bounded Set`

A set, \\(S \subseteq \mathbb{R}^n\\), is **bounded** iff there exists \\(x \in \mathbb{R}^n\\) and \\(r > 0\\) such that \\(S \subseteq B(x, r)\\).

In other words, a set is **bounded** if we can find a ball that it is a subset of.

## The Compliment of a Set

Let \\(S \subseteq \mathbb{R}^n\\), then we define \\(S^c := \mathbb{R}^n \setminus S = \left\\{ t\in \mathbb{R}^n : t\not\in S\right\\}\\).

Note that the \\(\setminus\\) operator is `\setminus` in \\(\LaTeX\\). It computes the difference between two sets.

## Cauchy's Mistake

`TODO`. Perhaps see [this StackExchange post?](https://math.stackexchange.com/questions/1250968/where-is-cauchys-wrong-proof)

## `Interior Point` of a Set

A point \\(x \in \mathbb{R}^n\\) is an **interior point** of a set, \\(S\subseteq \mathbb{R}^n\\), iff \\(\forall r.\  B(x, r) \cap S \neq \emptyset\\), where \\(\emptyset\\) is the empty set.

In other words, if we can make a ball around \\(x\\) that intersects \\(S\\) arbitrarially small (but still with non-zero size), then it is an interior point of \\(S\\).

```none
TODO: Include a demo here.
```

## `Boundary Points` of a Set

We denote the boundary points of a set with \\(\partial S\\).

Again, if \\(S \subseteq \mathbb{R}^n\\),
\\[
 \partial S := \left\\{x \in \mathbb{R}^n\ :\ \forall r. \left(\left(B(x, r) \cap S \neq \emptyset \right)\wedge \left(B(x, r) \cap S^C \neq \emptyset \right)\right) \right\\}
\\]

## A `Closed` Set

\\(S\\) is `closed` iff \\(\partial S \subseteq S\\).

Less formally, a set is closed if it includes all of its boundary points.

## A `Open` Set

\\(S\\) is `open` iff \\(\partial S \subseteq S^C\\).

Less formally, a set is open if it includes **none** of its boundary points.

## Sets can be both open and closed

Note that sets with no boundary points are **both** open and closed. Similarly, sets that contain only _some_ of their boundary points are neither open nor closed.

## The `Closure` of a Set

\\(\bar{S} = S \cup \partial S\\)
