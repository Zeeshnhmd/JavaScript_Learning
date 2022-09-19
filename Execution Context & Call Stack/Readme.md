# How Javascript code is executed?

- Every thing in Javascript happens inside an **Execution Context**.
- When ever we run a JavaScript program an **Execution Context** is created.

(So now lets see how this **Execution Context** is created when ever we run a JavaScript Program)

```javascript
var n = 2;
function square(num) {
	var ans = num * num;
	return ans;
}
var square2 = square(n);
var square3 = square(4);
```

- When we will **run** the above code an **Execution Context** will be created.
- So, when ever **Execution Context** is created it has two phases.

  - Memory creation phase.

  - Code execution phase.

- When we run a JavaScript program it allocates memory to all variables and functions in the **_first phase (Memory Creation Phase)_**.

- | Memory             | Code |
  | ------------------ | ---- |
  | n: undefined       |      |
  | square: {...}      |      |
  | square2: undefined |      |
  | square3: undefined |      |

  - For Variables it stores **_undefined_** in the memory space.

  - For **_functions_** it stores the whole function in the memory space.

- Now in the **_Second Phase (Code Execution Phase)_** JavaScript run the whole program again line by line and executes the code.
- | Memory             | Code |
  | ------------------ | ---- |
  | n: 2               |      |
  | square: {...}      |      |
  | square2: undefined |      |
  | square3: undefined |      |
