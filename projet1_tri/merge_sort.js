const mergeSort = (arrA, arrB) => {
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

checkError = (array) => {
  if (array == "") return console.error("The file is empty");
  // Valid characters
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < 0 && array[i] > 9 && array[i] != " " && array[i] != "-")
      return console.error(
        "There must be only numbers, spaces and '-' symbols"
      );
  }
};
let fs = require("fs");
let arrA = fs.readFileSync(process.argv[2], "utf8");
let arrB = fs.readFileSync(process.argv[3], "utf8");
checkError(arrA);
checkError(arrB);
console.log(arrA);
console.log(arrB);
console.log(mergeSort(arrA, arrB));
