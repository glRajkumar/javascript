// Given a staircase of 'n' steps, count the number of distinct ways to climb to the top, you can either climb 1 or 2 steps at a time.
// ex: climbingStaircase(3) => 3 [(1,1,1) (1,2) (2,1)]
// ex: climbingStaircase(5) => 8 [(1,1,1,1,1) (2,1,1,1) (1,2,1,1) (1,1,2,1) (1,1,1,2) (2,2,1) (2,1,2) (1,2,2)]

// Note: It follows fibbonaci pattern. so we can use fibbonaci function.

function climbingStaircase(num = 1) {
  if (num < 1) return null
  const noOfWays = [1, 1, 2]

  for (let i = 2; i <= num; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
  }

  return noOfWays[num]
}

console.log(climbingStaircase(4))