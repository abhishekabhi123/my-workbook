function isAnagram(str1, str2) {
  const formatted1 = str1.toLowerCase();
  const formatted2 = str2.toLowerCase();

  if (formatted1.length !== formatted2.length) return false;

  let charMap = {};

  for (let char of formatted1) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  for (let char of formatted2) {
    if (!charMap[char]) return false;
    charMap[char]--;
  }
  return true;
}

console.log(isAnagram("dog", "GoD")); // Output: true
console.log(isAnagram("banana", "nana")); // Output: false
console.log(isAnagram("catt", "caat"));
