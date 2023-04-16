// function hasDuplicate(arr) {
//   return new Set(arr).size !== arr.length;
// }

function hasDuplicate(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return false;
    }
    set.add(arr[i]);
  }
  return true;
}

