// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    const chunkedArr = []
    let i = 0

    while (i < arr.length) {
        chunkedArr.push(arr.slice(i, i + len))
        console.log(arr.slice(i, i + len))
        i += len
        console.log(i)
    }

    return chunkedArr

    // const chunked = []
    // while (arr.length) {
    //     chunked.push(arr.splice(0, len))
    // }
    // return chunked
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))