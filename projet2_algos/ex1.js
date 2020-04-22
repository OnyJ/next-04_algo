compare = (numbers, k) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (i != j && numbers[i] + numbers[j] == k) return true;
    }
  }
  return false;
};

console.log(compare([10, 15, 3, 7], 17));
console.log(compare([1, 8, 10, 21], 19));
