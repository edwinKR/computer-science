**Hash Table**
- Organizes data for "quick look up" on values for a given key.
  - Key: Memory lookup address
- Utilize "Hash functions"!. It's a function, so no side effects and would always give us an expected output. The output would usually be a numeric value representing the index of an array(or Hash Table). This index is the address to the data/content.
- You wouldn't choose this data structure if you need to store things in order.
- Normally, we wouldn't be expected to implement a Hash Table from scratch in interviews.
- If you are task is to do a FAST LOOKUP, we should be using Hash Table.

- Pros: 
  - Fast lookups
  - Flexible keys
- Cons: 
  - Slow worst-case lookups
  - Unordered
  - Single-directional lookups 

  ***JavaScript Usage***
  - `Map` & `Set` 