function isArrayOfNumbersConsecutive(arr) {
  if (arr.length === 0) {
    return false;
  }

  if (arr.length === 1) {
    return true;
  }

  const sortedArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] !== 1) {
      return false;
    }
  }

  return true;
}

function getSortedArrayOfUniqNumbers(arr) {
  return Array.from(new Set(arr)).sort(((a, b) => a - b));
}

function countNumbersInArray(arr) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < arr.length; i++) {

    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (const [key, value] of map) {
    result.push({[key]: value});
  }

  return result;
}

console.log(isArrayOfNumbersConsecutive([5, 2, 3, 1, 4]));
console.log(isArrayOfNumbersConsecutive([34, 23, 52, 12, 3]));
console.log(isArrayOfNumbersConsecutive([7, 6, 5, 5, 3, 4]));

console.log(getSortedArrayOfUniqNumbers([1, 3, 2, 2, 4, 3, 5, 6, 5]));
console.log(getSortedArrayOfUniqNumbers([9, 9, 9, 9, 9]));
console.log(getSortedArrayOfUniqNumbers([1, 2, 3, 4, 5]));

console.log( countNumbersInArray([1, 3, 2, 2, 4, 3, 5, 6, 5]));
