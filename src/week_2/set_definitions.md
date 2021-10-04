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

`TODO`

## `Boundary Point` of a Set

`TODO`

## An `Open` Set

`TODO`

## A `Closed` Set

`TODO`

## The `Closure` of a Set

\\(\bar{S}\\)
