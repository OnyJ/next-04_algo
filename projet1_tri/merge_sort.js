let fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
  if (error) return console.log(error);
  mainMerge(data.split(" ").map(Number));
});

const mainMerge = (array) => {
  let count = 0;

  const merge = (arrA, arrB) => {
    const array = [];
    while (arrA.length && arrB.length) {
      if (arrA[0] < arrB[0]) {
        array.push(arrA.shift());
      } else {
        array.push(arrB.shift());
      }
    }
    return array.concat(arrA).concat(arrB);
  };

  const divide = (array) => {
    if (array.length <= 1) {
      return array;
    }
    const half = Math.floor(array.length / 2);
    const arrA = array.slice(0, half);
    const arrB = array.slice(half);
    count++;
    return merge(divide(arrA), divide(arrB), count);
  };

  array = divide(array);
  console.log(`Merge sort : ${count} comparisons | ${array}`);
};
