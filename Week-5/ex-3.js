function vowelCount(str) {
  const map = new Map();

  for (let char of str) {
    char = char.toLowerCase();
    if (/[aeiou]/i.test(char)) {
      map.set(char.charCodeAt(0), map.get(char.charCodeAt(0)) + 1 || 1);
    }
  }
  return map;
}

console.log(vowelCount("hello world"));
// Map(2) { 'e' => 1, 'o' => 2 }