**Stack**
- Stores items in a LIFO(Last-in, First-out) order
- Operations: push, pop

**Queues**
- Stores items in a FIFO (First-in, First-out) order
- Operations: enqueue, dequeue

**Advantages**
- Fast operations.

**JavaScript Runtime**
- JavaScript engines have a call stack and a message queue that executes your code at runtime.
- Case of using a stack: When hitting 'undo' in your text editor or 'back' in your browser.
- `.unshift()`: Typically, this native method is a linear operation. After getting rid of the first element in the list, you would need to shift over the following elements to fill in the empty index. But in modern browsers, it is optimized and really don't do the shifting over after the dequeue.
