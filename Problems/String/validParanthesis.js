// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// ex. 1: "()" => true
// ex. 2: "()[]{}" => true
// ex. 3: "(]" => false
// ex. 4: "([])" => true


function validParanthesis(str = "") {
  const stack = []
  const mapped = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let c of str) {
    if (mapped[c]) {
      if (stack.length > 0 && stack[stack.length - 1] === mapped[c]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(c)
    }
  }

  return stack.length === 0
}


console.log(validParanthesis("()"))
console.log(validParanthesis("()[]{}"))
console.log(validParanthesis("(]"))
console.log(validParanthesis("([])"))
