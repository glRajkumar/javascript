// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

// ex 1: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"] => 2
// explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// ex 2: ["a@leetcode.com","b@leetcode.com","c@leetcode.com"] => 3


function uniqueEmailsNumber(arr = []) {
  return arr.reduce((prev, curr) => {
    let [local, domain] = curr?.split("@")
    local = local.split("+", "")?.[0]?.replaceAll(".", "")
    const email = local + domain
    if (!prev.includes(email)) {
      prev.push(email)
    }
    return prev
  }, []).length
}

console.log(uniqueEmailsNumber(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))
console.log(uniqueEmailsNumber(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]))
