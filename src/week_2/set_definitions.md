# Some Set-Related Definitions

{{#include ../tex_common.md}}

## A `Ball`

Define a ball, \\(B(x, r) := \left\\{ y\in\R^n : \norm{x - y} < r \right\\}\\), where \\(x \in \R^n\\) and \\(r \in \R\\).

A ball is a set of points. If we let \\(n = 2\\), then it is an [open disk](https://en.wikipedia.org/wiki/Disk_%28mathematics%29).

Notice that we're writing "\\(\norm{x - y} < r\\)" with a `<`, not a `≤`. This means that the points that are a distance \\(r\\) from \\(x\\), the center of the ball, **are not in the ball \\(B(x, r)\\)**.

_Note: It is common to use the alternate and equivalent notation_ \\(B_r(x)\\) _for_ \\(B(x, r)\\)_._

## A `Bounded Set`

A set, \\(S \subseteq \R^n\\), is **bounded** iff there exists \\(x \in \R^n\\) and \\(r > 0\\) such that \\(S \subseteq B(x, r)\\).

In other words, a set is **bounded** if we can find a ball that contains \\(S\\).

## The Complement of a Set

Let \\(S \subseteq \R^n\\), then we define \\(S^c := \R^n \setminus S = \left\\{ t\in \R^n : t\not\in S\right\\}\\).

Note that the \\(\setminus\\) operator is `\setminus` in \\(\LaTeX\\). It computes the difference between two sets.

## Cauchy's Mistake

`TODO`. Perhaps see [this StackExchange post?](https://math.stackexchange.com/questions/1250968/where-is-cauchys-wrong-proof)

## `Interior Point` of a Set

A point \\(x \in \R^n\\) is an **interior point** of a set, \\(S\subseteq \R^n\\), iff \\(\exists r.\ B(x, r) \subseteq S\\).

In other words, if we can find a "small enough" ball (but still with non-zero size) around \\(x\\) that is a subset of \\(S\\), then it is an interior point of \\(S\\).

<details><summary>Interior Point Demonstration</summary>
<iframe src="https://www.desmos.com/calculator/7izucmc1fz?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>
</details>

## `Boundary Points` of a Set

We denote the boundary points of a set with \\(\partial S\\). (In \\(\LaTeX\\), \\(\partial\\) is typed as `\partial`.)

Again, if \\(S \subseteq \R^n\\),
\\[
 \partial S := \left\\{x \in \R^n\ :\ \forall r. \left(\left(B(x, r) \cap S \neq \emptyset \right)\wedge \left(B(x, r) \cap S^C \neq \emptyset \right)\right) \right\\}
\\]

Intuitively, \\(x\\) is a boundary point of \\(S\\) iff any ball centered at \\(x\\) contains points in \\(S\\) and points outside \\(S\\).

Note that it is possible that \\(\partial S = \emptyset\\).

## A `Closed` Set

\\(S\\) is `closed` iff \\(\partial S \subseteq S\\).

Less formally, a set is closed if it includes _all_ of its boundary points.

## An `Open` Set

\\(S\\) is `open` iff \\(\partial S \subseteq S^C\\).

Less formally, a set is open if it includes _none_ of its boundary points.

# Sets can be both open and closed

Note that sets with no boundary points are **both** open and closed. A common example is \\(S = \R^n\\), where \\(\partial S\\) is empty as \\(S^c\\) is empty. Thus, \\(S\\) is both closed (vacuously) and open, and such sets are commonly called _clopen_ sets. Similarly, sets that contain only _some_ of their boundary points are neither open nor closed.

## The `Closure` of a Set

We define the closure of a set as \\(\bar{S} := S \cup \partial S\\).

In English, the closure of \\(S\\) is \\(S\\) and its boundary points.

## The `Neighborhood` of a Point

For \\(x \in \R^n\\), the neighborhood of \\(x\\) is _any_ set \\(S\\) such that \\(x\\) is an interior point of \\(S\\); i.e. a set such that it is possible to draw a ball with a sufficiently small radius at \\(x\\) fully contained in the set.

The notion of a neighborhood is frequently used when it's important to establish a proposition about points close to \\(x\\).
