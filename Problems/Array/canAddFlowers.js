// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// ex 1: flowerbed = [1,0,0,0,1], n = 1 => true
// ex 2: flowerbed = [1,0,0,0,1], n = 2 => false


function canAddFlowers(flowerbed = [], flowers = 0) {
  const f = [0, ...flowerbed, 0]

  for (let i = 1; i < f.length - 1; i++) {
    if (f[i - 1] === 0 && f[i] === 0 && f[i + 1] === 0) {
      f[i] = 1
      flowers--
    }
  }
  return flowers <= 0;
}

console.log(canAddFlowers([0, 1, 0, 0, 1], 1))
console.log(canAddFlowers([1, 0, 0, 0, 1], 1))
console.log(canAddFlowers([1, 0, 0, 0, 1], 2))
