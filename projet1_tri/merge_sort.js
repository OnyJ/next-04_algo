const mergeSort = function (arrA, arrB) {
  let singleSorted = [];
  while (arrA.length && arrB.length) {
    if (arrA[0] < arrB[0]) {
      singleSorted.push(arrA[0]);
      arrA.shift();
    } else {
      singleSorted.push(arrB[0]);
      arrB.shift();
    }
  }
  console.log(arrB);
  console.log;
  return singleSorted.concat(arrA, arrB);
};

let arrA = [
  0,
  1,
  3,
  4,
  4,
  5,
  7,
  10,
  13,
  14,
  16,
  17,
  18,
  19,
  21,
  24,
  25,
  27,
  28,
  30,
];
let arrB = [
  1,
  2,
  3,
  5,
  7,
  8,
  10,
  11,
  12,
  13,
  15,
  18,
  22,
  22,
  23,
  25,
  28,
  28,
  29,
  29,
];
console.log(mergeSort(arrA, arrB));
