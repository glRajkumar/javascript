// take arrays of arrays and return arrays with grouped by index wise
// [[1, 2, "k"],[4, true, "k2"], ["loki", "thor", false]] === [[1, 4, "loki"], [2, true, "thor"], ["k", "k2", false]]


function zip(array = []) {
    let canZip = array.every(a => Array.isArray(a) && a.length === array[0].length)
    if (!canZip) return undefined

    let finalArr = []
    for (let i = 0; i < array[0].length; i++) {
        finalArr.push([])
    }

    console.log(finalArr)
    array.forEach(el => el.forEach((a, i) => finalArr[i].push(a)))

    return finalArr
}

console.log(zip([
    [1, 2, true, "k", "ke"],
    [4, true, "k2", true, "dsk"],
    [true, "loki", "thor", false, "kqsw"]
]))