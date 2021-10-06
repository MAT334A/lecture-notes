# Boolean Logic

{{#include ../tex_common.md}}

<!--
We use \\(math here\\) for inline math and \\[math here\\] for display/block math.
See https://rust-lang.github.io/mdBook/format/mathjax.html for details.
-->

## Boolean Logic
 We'll be using \\(\T\\), \\(\F\\), and the operators \\(\wedge, \vee\\), and \\(\neg\\).

### Summary of Notation
<table>
<tr><th>

\\(\T, \F\\)

</th><td>

`true`, `false`

</td></tr>
<tr><th>

\\(\wedge\\)

</th><td>

`and`

</td></tr>
<tr><th>

\\(\vee\\)

</th><td>

`or`

</td></tr>
<tr><th>

\\(\neg\\)

</th><td>

`not`

</td></tr>
<tr><th>

\\(\iff\\)

</th><td>

Bi-implication/"if and only if"

</td></tr>
</table>

\\(\vee\\) and \\(\wedge\\) are both associative and commutative. Generally, we let \\(\wedge\\) have higher precedence than \\(\vee\\) and \\(\neg\\) have higher precedence than \\(\\wedge\\). In this way,
\\[
    a \vee b \wedge \neg c \vee d = a \vee (b \wedge (\neg c)) \vee d
\\]

### Propositions

Also called sentences, propositions are statements that are either `true` or `false`. We'll be representing them with capital letters. For example, `A`.

## DeMorgan's Laws

\\[
 \neg \left( A \vee B \right) = \neg A \wedge \neg B
\\]
and
\\[
 \neg \left( A \wedge B \right) = \neg A \vee \neg B
\\]

## Precedence

Conventionally, \\(\wedge\\) has higher precedence than \\(\vee\\) and \\(\neg\\) has higher precedence than \\(\wedge\\). This means that \\(A \vee \neg B \wedge C = A \vee ((\neg B) \wedge C)\\), because operators with higher precedence are **evaluated/applied first**.

## Applying DeMorgan's Laws to \\(\exists\\) and \\(\forall\\)

First, it's useful to define \\(\exists x. P(x) := \vee_{x \in D} P(x) \\) and \\(\forall x. P(x) := \wedge_{x \in D} P(x)\\), where \\(D\\) is some domain we're interested in.

Using these definitions, we get:

\\[
\begin{aligned}
 \neg \left(\exists x. x \neq 0\right) \iff \forall x. \left(x = 0\right) \\\\
 \neg \left(\forall x. x \neq 0\right) \iff \exists x. \left(x = 0\right)
\end{aligned}
\\]

`TODO`

## References
 - Lecture notes published for quiz section
 - Lecture
