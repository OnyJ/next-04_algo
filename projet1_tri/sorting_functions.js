class Classifier {
  constructor(data) {
    this.data = data;
  }

  checkErrors() {
    // fs.stat(this.data, function (err, stats) {
    // if (err) {
    // switch (err.code) {
    // case "ENOENT":
    // console.log(this.data + " does not exist");
    // break;
    // }
    // return;
    // }
    // });
    if (this.data == "") return console.error("The file is empty");
    for (let i = 0; i < data.length - 1; i++) {
      if (
        this.data[i] < 0 &&
        this.data[i] > 9 &&
        this.data[i] != " " &&
        this.data[i] != "-"
      )
        return console.error(
          "There must be only numbers, spaces and '-' symbols"
        );
    }
  }

  bubble() {
    let data = this.data.split(" ").map((x) => +x);
    let count = 0;
    for (let i = data.length; i > 0; i--) {
      let sortedTable = true;
      for (let j = 0; j < i; j++) {
        if (data[j + 1] < data[j]) {
          // // data.sort((a, b) => a - b);
          let tmp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = tmp;
          count++;
          sortedTable = false;
        }
      }
      if (sortedTable)
        return console.log(`Bubble sort : ${count} comparisons | ${data}`);
    }
  }

  insertSort() {
    let data = this.data.split(" ").map((x) => +x);
    let comparisons = 0;

    for (let i = 0; i < data.length; i++) {
      let tmp = data[i];
      let j = i;
      while (j > 0 && data[j - 1] > tmp) {
        data[j] = data[j - 1];
        comparisons++;
        j--;
      }
      data[j] = tmp;
    }
    return console.log(`Insert sort : ${comparisons} comparisons | ${data}`);
  }
}

let fs = require("fs");
const data = fs.readFileSync(process.argv[2], "utf8"); //Throw en cas d'erreur (donc il faut catch)
let sort = new Classifier(data);
console.log(data);
sort.checkErrors();
sort.bubble();
sort.insertSort();
