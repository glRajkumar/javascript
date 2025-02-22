// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x - Record a new score of x.
// '+' - Record a new score that is the sum of the previous two scores.
// 'D' - Record a new score that is the double of the previous score.
// 'C' - Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.
// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// ex. 1: ["5","2","C","D","+"] => 30
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// ex. 2: ["5","-2","4","C","D","9","+","+"] => 27
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

// ex. 3: ["1","C"] => 0
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.


function baseballGame(arr = [""]) {
  const scores = []

  arr.forEach(a => {
    if (a === "+") {
      const len = scores.length
      scores.push(scores[len - 1] + scores[len - 2])
    }
    else if (a === "D") {
      const len = scores.length
      scores.push(scores[len - 1] * 2)
    }
    else if (a === "C") {
      scores.pop()
    }
    else {
      scores.push(Number(a))
    }
  })

  return scores.reduce((prev, curr) => prev + curr, 0)
}

console.log(baseballGame(["5", "2", "C", "D", "+"]))
console.log(baseballGame(["5", "-2", "4", "C", "D", "9", "+", "+"]))
console.log(baseballGame(["1", "C"]))
