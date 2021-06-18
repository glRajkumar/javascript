// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// Anagram is a word or phrase formed by rearranging the letters of a diffirent word or phrase, 
// typically using the original letters exactly once.

function isAnagram(str1 = "", str2 = "") {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str = "") {
    return str
        .replace(/[^\w]/g, '') // only access the alphabets
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

console.log(formatStr('dirty room## gggg gby 3e4#'))

console.log(isAnagram("elbow", "below"))
console.log(isAnagram("Dormitory", "dirty room##"))