# Connecting Boolean and Set Operators

{{#include ../tex_common.md}}

The proofs we did with [boolean logic](../week_1/boolean_logic.md) can be applied to sets!

Say we have sets \\(S\\) and \\(T\\), and propositions \\(A\\) and \\(B\\). In general, we can map boolean operators to set operators:

<style>
/* Give the set operation diagrams a minimum width to prevent them from disappearing on small-width screens. */
img.set_op_demo {
    min-width: 40px;
    border-radius: 4px;

    transition: 0.3s ease transform, 0.4s ease box-shadow;
}


/* Devices with thin screens. */
@media (max-width: 640px) {
    /* Make the image easier to see on hover. */
    img.set_op_demo:hover {
        box-shadow: 0 0 2px rgba(100, 100, 100, 0.5);
        transform: translate(-50%, -10%) scale(2.3);
    }
}
</style>
<table>
<thead><th>Boolean Operator</th><th>Set Operation</th><th></th>
<tbody>
<tr><td>

\\(A \vee B\\)

</td><td>

\\(S \cup T\\)

</td><td>

<img alt="Any element in S union T is in S OR T" src="./set_operations/union.svg" class="set_op_demo"/>

</td></tr>
<tr><td>

\\(A \wedge B\\)

</td><td>

\\(S\cap T\\)

</td><td>

<img alt="Any element in S intersection is in S AND T" src="./set_operations/intersection.svg" class="set_op_demo"/>

</td></tr>
<tr><td>

\\(\neg A\\)

</td><td>

\\(S^c\\)

</td><td>

<img alt="Any element in S's complement is not in S" src="./set_operations/complement.svg" class="set_op_demo"/>

</td></tr>
<tr><td>

\\(A \iff B\\)

</td><td>

\\(S = T\\)

</td><td>

<img alt="Any element in S is also in T" src="./set_operations/equals.svg" class="set_op_demo"/>

</td></tr>
</tbody></table>

For example, say we have two sets \\(U\\) and \\(V\\).
\\[
\begin{aligned}
 S &= \left\\{ a\ :\ a \in U \wedge a \in V \right\\}\\\\
  &= \left\\{ a\ :\ a \in U \right\\} \cap \left\\{ a\ :\ a \in V\right\\}\\\\
  &= U \cap V
\end{aligned}
\\]

Similarly,
\\[
\begin{aligned}
       & S = T\\\\
   \iff& \forall a, \left(a \in S \iff a \in T\right)
\end{aligned}
\\]

Notice that by applying the boolean operators to elements in each set, we get the corresponding set operation!

<!-- ## Let's prove something! -->

