# Getting Started — Deep Master Guide

## 1. Definition
JavaScript is a high-level, dynamically typed, garbage-collected programming language standardized by ECMAScript.

## 2. Why it exists
JavaScript was created to make web pages interactive, but it is now used for browsers, servers, CLIs, automation, desktop apps, mobile apps, and tooling.

## 3. ECMAScript vs JavaScript
ECMAScript is the language specification.
JavaScript is an implementation of that language plus host-provided capabilities.

## 4. Engine
A JavaScript engine parses source code and executes it.
Examples include V8, SpiderMonkey, and JavaScriptCore.

## 5. Runtime
A runtime combines an engine with host APIs and execution infrastructure.
A browser provides DOM, timers, fetch, storage, and many other APIs.
Node.js provides filesystem, networking, processes, streams, and other server-side APIs.

## 6. Source to execution
Typical mental model:
source code → parsing → internal representation → execution/optimization → observable result.
Modern engines use multiple optimization strategies; do not reduce this to a literal one-step interpretation model.

## 7. Values
JavaScript programs manipulate values such as numbers, strings, booleans, undefined, null, symbols, bigints, objects, and functions.

## 8. Statements and expressions
An expression produces a value.
A statement performs an action or controls execution.
Some constructs can behave as both syntactic forms depending on context.

## 9. Console
The console is a host debugging interface.
`console.log()` displays values but does not return those values to the caller.

## 10. Strict mode
Strict mode changes several language behaviors and catches some mistakes earlier.
Use `'use strict';` where explicit strict mode is required; modules are strict by default.

## 11. Browser execution
A browser downloads resources, parses HTML, constructs the DOM, loads scripts, and runs JavaScript according to script/module rules.

## 12. Script vs module
Classic scripts and ES modules have different loading, scoping, and strictness behavior.
Modules are automatically strict and have their own module scope.

## 13. Node execution
Node runs JavaScript outside the browser using V8 plus Node APIs.
`window` and `document` are not Node globals by default.

## 14. First program
```js
console.log('Hello, JavaScript');
```
Execution: evaluate the call → resolve `console` → invoke `log` → host displays the value.

## 15. Variables preview
A variable is a binding between an identifier and a value/reference.
`let` and `const` are block scoped.
`var` is function scoped.

## 16. Comments
Comments document intent and are ignored by JavaScript execution.
Prefer comments that explain why, not obvious syntax.

## 17. Common mistake
Thinking JavaScript and Java are the same language.
They are separate languages with different designs and ecosystems.

## 18. Common mistake
Thinking the browser itself is JavaScript.
The browser is a host environment that embeds a JavaScript engine and exposes Web APIs.

## 19. Common mistake
Thinking `console.log()` is part of ECMAScript core.
The console API is a host/developer-tool capability rather than a core language primitive.

## 20. Debugging workflow
Read the error message.
Locate the file and line.
Reproduce the smallest failing example.
Inspect values.
Check assumptions.
Change one thing at a time.

## 21. Output prediction
Before running code, identify bindings, expressions, control flow, and side effects.
Prediction is stronger than passive reading because it exposes incorrect mental models.

## 22. Tooling
Learn an editor, terminal, browser DevTools, Node, package manager, formatter, and debugger.
Tool knowledge should support JavaScript rather than replace language understanding.

## 23. Runtime distinction
A language feature should not be confused with a host API.
`Promise` is standardized language/platform functionality; `fetch` is a Web API standardized separately from ECMAScript.

## 24. Error categories
Syntax errors prevent valid parsing.
Runtime errors occur during execution.
Logic errors produce incorrect results without necessarily throwing.

## 25. Learning strategy
Write tiny programs.
Predict output.
Run them.
Explain differences.
Modify one variable.
Predict again.

## 26. Teaching strategy
Start with the problem.
Give the definition.
Draw the mental model.
Show the smallest example.
Trace execution.
Then add complexity.

## 27. Practice ladder
L1 define JavaScript.
L2 explain engine vs runtime.
L3 predict output.
L4 create a Node script.
L5 debug a syntax error.
L6 explain browser vs Node.

## 28. Mini challenge
Create one script that prints your name, calculates two values, and reports the runtime environment.

## 29. Interview questions
What is ECMAScript?
What is a JavaScript engine?
What is a runtime?
Browser vs Node?
Script vs module?
What is strict mode?

## 30. Memory map
ECMAScript = language specification.
Engine = executes JavaScript.
Runtime = engine + host capabilities.
Browser = Web host.
Node = server/runtime host.

## 31. Deep understanding checklist
Can you explain the difference between language and host API?
Can you explain what an engine does?
Can you explain why `document` is unavailable in Node?
Can you run the same JavaScript concept in browser and Node?
Can you debug a basic program?

## 32. Teaching test
Explain JavaScript to a beginner without saying only “it makes websites interactive.”
Explain that it is a general-purpose language with multiple runtimes.

## 33. Real-world use
Frontend frameworks, backend services, build tools, testing, automation, browser extensions, desktop applications, and command-line tooling all use JavaScript ecosystems.

## 34. Final rule
Do not memorize isolated facts.
Build a mental model of language, engine, runtime, values, execution, and host APIs.

## 35. Revision
Re-read definitions.
Run examples.
Predict outputs.
Solve one debugging task.
Teach the chapter aloud.

## 36. Mastery criterion
You have mastered Getting Started when you can explain what JavaScript is, where it runs, what executes it, what the host provides, and how you debug a program.
