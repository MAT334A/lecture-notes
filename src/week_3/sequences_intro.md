# Sequences

{{#include ../tex_common.md}}

## Formal Definition of a Sequence

A sequence is a function \\(f: \N \rightarrow X\\) for some set \\(X\\). Instead of writing \\(f(1), f(2), ...\\) to refer to the individual terms of a sequence, it is common to use \\(a_1, a_2, ...\\) instead.

## The Limit of a Sequence \\(\leftrightarrow\\) Convergence

How do we understand the expression \\(\lim\limits_{n \to \infty} a_n\\)? Intuitively, this should equal whatever the sequence **converges** to, or the value that the sequences gets arbitrarily close to.

We can modify the \\(\epsilon\\)-\\(\delta\\) definition as thus: \\[\lim\limits_{n \to \infty} a_n = L \iff \forall \epsilon > 0 \exists N \in \N : \forall n \ge N, ||a_n - L|| < \epsilon\\]

If the limit exists, then we say the sequence _converges to \\(L\\)_. 

> Finding the limit of a sequence (or even demonstrating a sequence converegs) is usually a lot harder than finding the limit of a function approaching infinity. For example, the function \\(f(x) = \frac{1}{x^3\sin x}\\) does not have a limit as \\(x\\) goes to infinity, as \\(\sin x\\) has infinitely many zeroes. However, it is not known whether the sequence defined by \\(a_n = \frac{1}{n^3\sin n}\\) converges.
>
> Loosely speaking, the resolution to this problem depends on whether or not fractional approximations for \\(\pi\\) improve faster than \\(x^3\\). The limit is known to be \\(0\\) for \\(\frac{1}{n^k\sin x}\\) for roughly \\(k \ge 7.7\\).

## Convergence and Sets

Let's demonstrate some theorems relating sets, convergence, and continuity!

### For Any element in the Closure, There Exists a Sequence Converging to It

Given a subset \\(S \subseteq \R^n\\), \\(x \in \bar{S}\\) is equivalent to the existence of a sequence \\(\{a_i\} \subseteq S\\) such that \\(\lim\limits_{n \to \infty} a_n = x\\).

We are demonstrating equivalence, so we need to show two different directions. Suppose that \\(x \in \bar{S}\\). Remember that \\(\bar{S} = S \cup \partial S\\), so either \\(x \in S\\) or \\(x \in \partial S\\). If \\(x \in S\\), then the constant sequence _obviously_ converges (regardless of the choice of \\(n\\), \\(|a_n - x| = 0 < \epsilon\\) for any \\(\epsilon\\)). Otherwise, by the definition of \\(x \in \partial S\\), a ball of any positive radius centered \\(x\\) intersects \\(S\\). Define \\(a_i\\) as the point guaranteed to exist in the intersection of \\(S\\) and \\(B\left(x, \frac{1}{i}\right)\\). Then, for the convergence proof, let \\(N = \left\lceil \frac{2}{\epsilon}\right\rceil\\). Therefore, for any \\(n \ge N \rightarrow \frac{2}{n} \le \epsilon\\), we have \\(|a_n - x| < \frac{1}{n} < \frac{2}{n} \le \epsilon\\).

Now, suppose that \\(\lim\limits_{n \to \infty} a_n = x\\), where \\(\{a_i\} \subseteq S\\). Note that either \\(x \in S\\) (in which case we are done) or \\(x \in S^c\\). In the latter case, we just need to show that for any ball centered at \\(x\\), there is a point in the ball that is also in \\(S\\). (Note that \\(x\\) automatically satisfies that the intersection of the ball and \\(S^c\\) is non-empty.) By the definition of convergence, for any \\(\epsilon > 0\\), there is some positive integer \\(N\\) such that \\(n \ge N\\) guarantees that \\(|a_n - x| < \epsilon\\). Consider the ball \\(B(x, \epsilon)\\). By applying the definition of convergence, we can guarantee the existence of some \\(n\\) such that \\(|a_n - x| \le \epsilon\\), which implies \\(a_n \in B(x, \epsilon)\\). Therefore, \\(S \cap B(x, \epsilon) \ne \emptyset\\) and we are done.

#### Obviously...

<details>
<summary>Dictionary of Definitions of Terms Commonly Used in Math lectures</summary>
CLEARLY:
I don't want to write down all the "in- between" steps.

TRIVIAL:
If I have to show you how to do this, you're in the wrong class.

OBVIOUSLY:
I hope you weren't sleeping when we discussed this earlier, because I refuse to repeat it.

RECALL:
I shouldn't have to tell you this, but for those of you who erase your memory tapes after every test...

WLOG (Without Loss Of Generality):
I'm not about to do all the possible cases, so I'll do one and let you figure out the rest.

IT CAN EASILY BE SHOWN:
Even you, in your finite wisdom, should be able to prove this without me holding your hand.

CHECK or CHECK FOR YOURSELF:
This is the boring part of the proof, so you can do it on your own time.

SKETCH OF A PROOF:
I couldn't verify all the details, so I'll break it down into the parts I couldn't prove.

HINT:
The hardest of several possible ways to do a proof.

BRUTE FORCE (AND IGNORANCE):
Four special cases, three counting arguments, two long inductions, "and a partridge in a pair tree."

SOFT PROOF:
One third less filling (of the page) than your regular proof, but it requires two extra years of course work just to understand the terms.

ELEGANT PROOF:
Requires no previous knowledge of the subject matter and is less than ten lines long.

SIMILARLY:
At least one line of the proof of this case is the same as before.

CANONICAL FORM:
4 out of 5 mathematicians surveyed recommended this as the final form for their students who choose to finish.

TFAE (The Following Are Equivalent):
If I say this it means that, and if I say that it means the other thing, and if I say the other thing...

BY A PREVIOUS THEOREM:
I don't remember how it goes (come to think of it I'm not really sure we did this at all), but if I stated it right (or at all), then the rest of this follows.

TWO LINE PROOF:
I'll leave out everything but the conclusion, you can't question 'em if you can't see 'em.

BRIEFLY:
I'm running out of time, so I'll just write and talk faster.

LET'S TALK THROUGH IT:
I don't want to write it on the board lest I make a mistake.

PROCEED FORMALLY:
Manipulate symbols by the rules without any hint of their true meaning (popular in pure math courses).

QUANTIFY:
I can't find anything wrong with your proof except that it won't work if x is a moon of Jupiter (Popular in applied math courses).

PROOF OMITTED:
Trust me, It's true.

[Credits](https://www.math.utah.edu/~cherk/mathjokes.html)
</details>

### Continuity!

We can relate sequences in \\(\R^n\\) to continuity with the following theorem:

Given \\(S \subseteq \R^n\\) and a function \\(f: S \rightarrow \R^m\\), \\(f\\) is continuous at a point \\(a \in S\\) if and only if for any sequence \\(\{x_k\}_{k = 1}^{\infty} \in S\\) that converges to \\(a\\), the sequence \\(\{f(x_k)\}_{k = 1}^{\infty} \in \R^m\\) converges to \\(f(a)\\).

The fowards direction is fairly straightforward. Given \\(f\\) is continuous at \\(a\\), consider some fixed positive \\(\epsilon\\). There is some positive \\(\delta\\) such that for any \\(y \in S\\), \\(||y - a|| < \delta \implies ||f(y) - f(a)|| < \epsilon\\). If \\(\{x_k\}\\) converges, then whatever \\(\delta\\) is, there exists some \\(K \in \N\\) that guarantees \\(||x_k - a|| < \delta\\) if \\(k \ge K\\), guaranteeing \\(||f(x_k) - f(a)|| < \epsilon\\).

The backwards direction is more sophisticated, and uses proof by contradiction. Suppose that for any converging sequence \\(\{x_k\}_{k = 1}^{\infty} \in S\\) to \\(a\\), the sequence \\(\{f(x_k)\}_{k = 1}^{\infty} \in \R^m\\) converges to \\(f(a)\\). For contradiction, suppose that \\(f\\) is not continuous at \\(a\\). Therefore, there exists some \\(\epsilon > 0\\) such that for any choice of \\(\delta\\), there is some \\(y \in S\\) such that both \\(||y - a|| < \delta\\) and \\(||f(y) - f(a)|| > \epsilon\\). 

Let \\(x_k\\) be the vector guaranteed to exists that satisfies \\(||x_k - a|| < \delta\\) and \\(||f(x_k) - f(a)|| > \epsilon\\) for \\(\delta = \frac{1}{k}\\). As when \\(k\\) gets arbitrarily big, \\(\delta\\) becomes arbitrarily close to \\(0\\), we have a sequence that converges to \\(a\\), but violates the condition that \\(\{f(x_k)\}_{k = 1}^{\infty} \in \R^m\\) converges to \\(f(a)\\). Contradiction, therefore, we must have \\(f\\) continuous at \\(a\\).