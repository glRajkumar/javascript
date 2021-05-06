// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// new array method
// return arrays.flat(Infinity)


function arrReducer(arr) {
    return arr.reduce((acc, cv) => {
        if (Array.isArray(cv)) {
            acc.push(...cv)
        } else {
            acc.push(cv)
        }
        return acc
    }, [])
}


function flattenArray(arrays = [], optDeepen = 1) {
    if (optDeepen === 0) return arrays

    let isDeependEnough = 0
    let arr = arrays.reduce((acc, cv) => {
        acc.push(...cv)
        return acc
    }, [])

    while (isDeependEnough <= optDeepen) {
        let isAlreadyDeepend = arr.reduce((acc, vc) => acc && !Array.isArray(vc), true)
        if (isAlreadyDeepend) {
            break
        }
        isDeependEnough++
        arr = arrReducer(arr)
    }

    return arr
}

function flattenArrayRecr(arrays) {
    let arr = arrReducer(arrays)
    let isDeepend = arr.reduce((acc, vc) => acc && !Array.isArray(vc), true)
    if (!isDeepend) {
        arr = flattenArrayRecr(arr)
    }
    return arr
}

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]], 0))
console.log(flattenArray([[1, 2], [3, 4, [12, 13], [34, 56]], [5, 6, [[34, 56, [34, 56, [34, 56, [34, 56]]]]]], [7]], Infinity))


// console.log(flattenArrayRecr([[1, 2], [3, 4], [5, 6], [7]], 0))
// console.log(flattenArrayRecr([[1, 2], [3, 4, [12, 13]], [5, 6], [7]], 0))
console.log(flattenArrayRecr([[1, 2], [3, 4, [12, 13], [34, 56]], [5, 6, [[34, 56, [34, 56, [34, 56, [34, 56]]]]]], [7]], Infinity))
