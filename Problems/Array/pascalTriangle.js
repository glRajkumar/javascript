// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it

// ex. 1: 5 => [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// ex. 2: 1 => [[1]]


function pascalTriangle(num = 0) {
  // if (num === 1) return [[1]]
  // if (num === 2) return [[1], [1, 1]]

  // const final = [[1], [1, 1]]
  // for (let i = 2; i < num; i++) {
  //   final.push([1])
  //   for (let j = 1; j < i; j++) {
  //     final[i][j] = final[i - 1][j - 1] + final[i - 1][j]
  //   }
  //   final[i].push(1)
  // }

  // return final


  let res = Array.from({ length: num }, (_, i) => Array(i + 1).fill(1));

  for (let i = 2; i < num; i++) {
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
}


console.log(pascalTriangle(5))
console.log(pascalTriangle(1))
