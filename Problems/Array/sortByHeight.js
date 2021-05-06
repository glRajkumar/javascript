// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex. a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
    const arr1 = []
    const arr2 = []

    a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)))

    const sortArr = arr2.sort((a, b) => a - b)

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))

    return sortArr
}

function sortByHeight2(array) {
    let num = 0
    const sortArr = array.filter(a => a !== -1).sort((a, b) => a - b)

    return array.map(a => {
        if (a !== -1) {
            let cu = sortArr[num]
            num++
            return cu
        }
        return -1
    })
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(sortByHeight2([-1, 150, 190, 170, -1, -1, 160, 180]))
