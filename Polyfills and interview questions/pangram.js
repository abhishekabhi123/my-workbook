function isPangram(str) {
  str = str.toLowerCase();
  let charSet = new Set();

  for (let char of str) {
    if (char >= "a" && char <= "z") {
      charSet.add(char);
    }
  }
  return charSet.size === 26;
}

const sentence1 = "The quick brown fox jumps over the lazy dog"; // true
const sentence2 = "Hello world"; // false

console.log(isPangram(sentence1));
console.log(isPangram(sentence2));
