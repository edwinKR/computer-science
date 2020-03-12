## JavaScript Concepts

### Primitive Values vs Non-primitive values
- Primitive values: Passed by values (Number, String, Boolean, Null, Undefined). Gets a spot in memory everytime it is assigned.
- Non-primitive values: Passed by reference (Object, Array, Function, Promises, etc). Often sharing the same place in memory.
- Popular practice: You don't want to mutate non-primitive values and is why you get a copy of it to avoide side effects.