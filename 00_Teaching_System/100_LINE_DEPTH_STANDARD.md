# 100+ Line Depth Standard

This repository is being upgraded so that **every major topic** is deep enough to study once, practise, debug, and teach.

## Minimum requirement

Each major topic should contain **at least 100 meaningful lines** of educational material. Line count is a floor, not the goal: explanations must remain useful rather than padded.

## Required depth

01. Precise definition.
02. Simple-English definition.
03. Why the concept exists.
04. Problem it solves.
05. Mental model.
06. Terminology.
07. Syntax.
08. Smallest valid example.
09. Expected output.
10. Line-by-line explanation.
11. Execution flow.
12. Internal JavaScript behavior.
13. Important rules.
14. Boundary conditions.
15. Edge cases.
16. Variations.
17. Related syntax.
18. Similar concepts.
19. Difference between similar concepts.
20. Wrong example.
21. Why the wrong example fails.
22. Correct example.
23. Common beginner mistake.
24. Common intermediate mistake.
25. Debugging technique.
26. Output-prediction exercise.
27. Practical example.
28. Real-world use case.
29. Browser use case when relevant.
30. Node.js use case when relevant.
31. Performance consideration.
32. Security consideration when relevant.
33. Maintainability consideration.
34. Accessibility consideration for UI topics.
35. Error handling.
36. Testing strategy.
37. Refactoring example.
38. API/design consideration.
39. Interview question.
40. Interview answer.
41. Trick question.
42. Teach-back question.
43. Beginner exercise.
44. Intermediate exercise.
45. Advanced exercise.
46. Debugging challenge.
47. Mini project.
48. Project extension.
49. Revision checklist.
50. Memory trick.

## Learning ladder

L1 Recall — define the concept.
L2 Understand — explain why it works.
L3 Predict — determine output before running code.
L4 Apply — write a fresh example.
L5 Debug — repair broken code.
L6 Design — choose the concept for a real requirement.
L7 Teach — explain it without reading notes.
L8 Build — use it in a project.
L9 Review — compare alternatives and trade-offs.
L10 Master — solve an unfamiliar problem using the concept.

## Code quality rules

- Runnable examples must actually run.
- Intentionally broken examples must be commented out or clearly isolated.
- Do not teach inaccurate memory-address models as JavaScript facts.
- Distinguish ECMAScript language features from browser and Node.js host APIs.
- Explain prototype behavior when teaching classes and objects.
- Explain asynchronous behavior using the event loop model without claiming that JavaScript itself executes all work on multiple threads.
- Prefer modern JavaScript unless a historical feature is explicitly being taught.
- Show both mutation and non-mutating alternatives when the distinction matters.
- Mention shallow-copy behavior where spread or copying APIs are involved.
- Explain coercion instead of merely memorizing outputs.
- Use exact terminology for scope, bindings, execution contexts, promises, iterables, prototypes, and descriptors.

## Teacher test

Before marking a topic complete, Ravi should be able to answer:

- What is it?
- Why does it exist?
- When should I use it?
- When should I avoid it?
- What happens internally?
- What are the important rules?
- What are the common traps?
- Can I predict the output?
- Can I debug it?
- Can I implement it from memory?
- Can I compare it with alternatives?
- Can I teach it to a beginner using a simple analogy?
- Can I use it in a real project?

## Repository transformation rule

All modules 01–28 follow this standard.
The existing files are not treated as finished merely because they mention a topic.
A topic is finished only when its explanation, examples, exercises, debugging material, and teach-back material are deep enough to support independent learning.

The final repository should behave like a **self-contained JavaScript textbook + exercise bank + teaching manual + project curriculum**.
