compare = (numbers, k) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (i != j && numbers[i] + numbers[j] == k) return true;
    }
  }
  return false;
};

let fs = require("fs");

fs.readFile(process.argv[2], "utf8", (error, data) => {
  // Instructions
  console.log(
    "(Lancer le programme se fait de la meme maniere que les autres exos."
  );
  console.log("Il faut juste choisir le nombre k à la main.)");

  numbers = data.split(" ").map(Number);
  console.log(numbers);
  console.log(compare(numbers, 10));
});
