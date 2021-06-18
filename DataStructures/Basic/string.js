// The String object is used to represent and manipulate a sequence of characters.


// we can create a string with single quote, double quote, template literal and with contructor.
let str1 = "A string primitive"
let str2 = 'Also a string primitive'
let str3 = `Yet another string primitive which has embedded expression ${0 + 1}`
let str4 = new String("A String object")


// Instance properties
// length - returns the length of the array
let str4 = "Raj"
str4.length  // 3


// Static methods
// fromCharCode - it returns a string created from the specified sequence of UTF-16 code units.
// syntax - fromCharCode(num1, num2, ..., numN)
String.fromCharCode(65)          // "A"
String.fromCharCode(65, 66, 67)  // "ABC"

// fromCodePoint - it returns a string created by using the specified sequence of code points.
// syntax - fromCodePoint(num1, num2, ..., numN)
String.fromCodePoint(65, 90)    // "AZ"



// Instance methods
// charAt - it returns the character at the specified index.
// syntax - charAt(?index = 0)
// prefer array like syntax.
let sentence = 'The quick brown fox jumps over the lazy dog.'
sentence.charAt()    // 'T'
sentence.charAt(2)   // 'e'
sentence.charAt(200) // ''

sentence[2]    // 'e'
sentence[200]  // ''


// charCodeAt - it returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// syntax - charCodeAt(?index = 0)
// If index is out of range, it returns NaN.
'ABC'.charCodeAt()  // 65
'ABC'.charCodeAt(1) // 66


// The codePointAt() method returns a non-negative integer that is the UTF-16 code point value.
// if there is no element at pos, returns undefined.
'ABC'.codePointAt(1) // 66


// The concat() method concatenates the string arguments to the calling string and returns a new string.
// syntax - concat(str1, str2, ... , strN)
let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

let firstName = "Raj", secName = "kumar"
let h = "".concat(firstName, " ", secName)  // "Raj kumar"
let h = `${firstName} ${secName}`           // "Raj kumar" (prefer this)


// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
// syntax - includes(searchString, ?position = 0)
'Blue Whale'.includes('blue')  // false
'Blue Whale'.includes('Blue')  // true


// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// syntax - indexOf(searchValue, ?fromIndex = 0)
// For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.
'Blue Whale'.indexOf('')          //  0
'Blue Whale'.indexOf('', 9)       //  9
'Blue Whale'.indexOf('', 10)      // 10
'Blue Whale'.indexOf('', 11)      // 10
'Blue Whale'.indexOf('Blue')      //  0
'Blue Whale'.indexOf('Blute')     // -1
'Blue Whale'.indexOf('Whale', 0)  //  5
'Blue Whale'.indexOf('Whale', 5)  //  5
'Blue Whale'.indexOf('Whale', 7)  // -1
'Blue Whale'.indexOf('blue')      // -1


// The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
// syntax - lastIndexOf(searchValue, ?fromIndex = +Infinity)
// If fromIndex >= str.length, the whole string is searched. If fromIndex < 0, the behavior will be the same as if it would be 0
'canal'.lastIndexOf('a')     // 3
'canal'.lastIndexOf('a', 2)  // 1
'canal'.lastIndexOf('a', 0)  // -1
'canal'.lastIndexOf('x')     // -1
'canal'.lastIndexOf('c', -5) // 0
'canal'.lastIndexOf('c', 0)  // 0
'canal'.lastIndexOf('')      // 5
'canal'.lastIndexOf('', 2)   // 2
'abab'.lastIndexOf('ab', 2)   // 2


// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
// syntax - localeCompare(compareString, ?locales, ?options)
// Negative when the referenceStr occurs before compareString
// Positive when the referenceStr occurs after compareString
// Returns 0 if they are equivalent

// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c') // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against') // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a') // 0

let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu']
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }))
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']


// The match() method retrieves the result of matching a string against a regular expression.
// syntax - match(regexp)
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
str.match(/[A-E]/gi) // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']


// The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
// syntax - matchAll(regexp)
// see the mdn doc


// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// syntax - repeat(count)
// repeat count must be non-negative, less than infinity and not overflow maximum string size.
'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1 / 0) // RangeError


// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
// syntax - method(regexp | substr, newSubstr | replacerFunction)
let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
p.replace('dog', 'monkey')      // "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
p.replace(/Dog/i, 'ferret')     // "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
p.replaceAll('dog', 'monkey')   // "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
p.replaceAll(/Dog/ig, 'ferret') // "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"


// The search() method executes a search for a match between a regular expression and this String object
// The index of the first match between the regular expression and the given string, or -1 if no match was found.
p.search(/[^\w\s]/g) // 43 (any character that is not a word character or whitespace)


// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// syntax - slice(beginIndex = 0, ?endIndex)
// If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.
// If beginIndex is greater than or equal to str.length, an empty string is returned.
let str1 = 'The morning is upon us.' // the length of str1 is 23.
str1.slice(1, 8)     // he morn
str1.slice(4, -2)    // morning is upon u
str1.slice(12)       // is upon us.
str1.slice(30)       // ""
str.slice(-3)        // 'us.'
str.slice(-3, -1)    // 'us'
str.slice(0, -1)     // 'The morning is upon us'
str.slice(-11, 16)   // is u
str.slice(11, -7)    // " is u"
str.slice(-5, -1)    // "n us"


// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 
// The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  
// syntax - split(?separator, ?limit)
let a1 = 'The quick brown fox jumps over the lazy dog.'.split()
let a2 = 'The quick brown fox jumps over the lazy dog.'.split("")
let a3 = 'The quick brown fox jumps over the lazy dog.'.split(" ")
let a4 = 'The quick brown fox jumps over the lazy dog.'.split("fox")
let a5 = 'The quick brown fox jumps over the lazy dog.'.split(" ", 0)
let a6 = 'The quick brown fox jumps over the lazy dog.'.split(" ", 4)
let a7 = 'The quick brown fox jumps over the lazy dog.'.split(" ", -3)
let a8 = 'The quick brown fox jumps over the lazy dog.'.split(" ", 60)

a1  // ['The quick brown fox jumps over the lazy dog.']
a2  // ['T', 'h', 'e', ' ', 'q', ..., '.']
a3  // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
a4  // ['The quick brown ', ' jumps over the lazy dog.']
a5  // []
a6  // ['The', 'quick', 'brown', 'fox']
a7  // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
a8  // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']


// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// syntax - substring(indexStart, indexEnd)
// substring() extracts characters from indexStart up to but not including indexEnd.
// If indexEnd is omitted, substring() extracts characters to the end of the string.
// If indexStart is equal to indexEnd, substring() returns an empty string.
// If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; See example below.
// Any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length, respectively.
// Any argument value that is NaN is treated as if it were 0.
let anyString = 'Mozilla'
anyString.substring(4)     // 'lla'
anyString.substring(0, 1)  // 'M'
anyString.substring(1, 0)  // 'M'
anyString.substring(0, 6)  // 'Mozill'
anyString.substring(4, 7)  // 'lla'
anyString.substring(7, 4)  // 'lla'
anyString.substring(0, 7)  // 'Mozilla'
anyString.substring(0, 10) // 'Mozilla'
anyString.substring(5, 2)  // "zil"
anyString.slice(5, 2)      // ""
anyString.substring(-5, 2) // "Mo"
anyString.substring(-5, -2)// ""
anyString.slice(-5, 2)     // ""
anyString.slice(-5, -2)    // "zil"


// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// syntax - startsWith(searchString, ?position = 0)
// The position in this string at which to begin searching for searchString
//startswith
let str2 = 'To be, or not to be, that is the question.'
str2.startsWith('To be')         // true
str2.startsWith('not to be')     // false
str2.startsWith('not to be', 10) // true


// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
// syntax - endsWith(searchString, ?length = str.length)
let str = 'To be, or not to be, that is the question.'

str.endsWith('question.')  // true
str.endsWith('to be')      // false
str.endsWith('to be', 19)  // true


// The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
// syntax - toLocaleLowerCase(?locale) | toLocaleLowerCase([locale1, locale2, ...])
'ALPHABET'.toLocaleLowerCase()              // 'alphabet'
'\u0130'.toLocaleLowerCase('tr') === 'i'    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i' // false


// The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
// syntax - toLocaleUpperCase(?locale) | toLocaleUpperCase([locale1, locale2, ...])
'istanbul'.toLocaleUpperCase('en-US') // "ISTANBUL"
'alphabet'.toLocaleUpperCase()        // 'ALPHABET'


// The toLowerCase() method returns the calling string value converted to lower case.
'The quick brown fox jumps over the lazy dog.'.toLowerCase()  // "the quick brown fox jumps over the lazy dog."


// The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
'The quick brown fox jumps over the lazy dog.'.toUpperCase()  // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


// The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
// syntax - padEnd(targetLength, ?padString = " ")
// The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
'abc'.padEnd(10)          // "abc       "
'abc'.padEnd(10, "foo")   // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(6, ".")      // "abc..."
'abc'.padEnd(1)           // "abc"


// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
// syntax - padStart(targetLength, padString)
// The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
'abc'.padStart(10)         // "       abc"
'abc'.padStart(10, "foo")  // "foofoofabc"
'abc'.padStart(6, "123465") // "123abc"
'abc'.padStart(8, "0")     // "00000abc"
'abc'.padStart(1)          // "abc"


// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
'   foo  '.trim() // "foo"

// The trimEnd() | trimRight method removes whitespace from the end of a string. trimRight() is an alias of this method.
'   foo  '.trimEnd() // "   foo"

// The trimStart() | trimLeft method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
'   foo  '.trimStart()  // 'foo  '
