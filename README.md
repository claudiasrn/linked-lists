# Linked Lists

A singly linked list implementation in JavaScript, built for [The Odin Project's Linked List project](https://www.theodinproject.com/lessons/javascript-linked-lists). Includes a `Node` class and a `LinkedList` class with the core methods for adding, removing, and inspecting nodes, plus the extra credit insert/remove-at-index methods.

## Methods

- **`append(value)`** — adds a new node to the end of the list.
- **`prepend(value)`** — adds a new node to the start of the list.
- **`size()`** — returns the total number of nodes.
- **`head()`** — returns the value of the first node (`undefined` if empty).
- **`tail()`** — returns the value of the last node (`undefined` if empty).
- **`at(index)`** — returns the value of the node at the given index (`undefined` if out of bounds).
- **`pop()`** — removes the head node and returns its value (`undefined` if empty).
- **`contains(value)`** — returns `true`/`false` depending on whether the value exists in the list.
- **`findIndex(value)`** — returns the index of the first node matching the value, or `-1` if not found.
- **`toString()`** — returns a string representation of the list, e.g. `( 1 ) -> ( 2 ) -> ( 3 ) -> null`.
- **`insertAt(index, ...values)`** — inserts new node(s) at the given index; throws a `RangeError` if the index is out of bounds.
- **`removeAt(index)`** — removes the node at the given index; throws a `RangeError` if the index is out of bounds.

`main.js` builds a sample list and logs it out with `toString()` to demonstrate the implementation.

## Stack

- Plain JavaScript (ES6 modules)
- Node.js