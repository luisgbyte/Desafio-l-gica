let prompt = require("prompt-sync")();

let str1 = "";
let str2 = "";

const T = prompt("Qual o tamanho da ampulheta? ");

if (T < 20) {
  console.log("O tamanho precisa ser >= 20");
  process.exit(1);
}

for (let i = 0; i < T; i++) {
  for (let j = 0; j < T; j++) {
    if (
      (j >= i && j <= T - i) ||
      j == T - 1 ||
      j == 0 ||
      i == T - 1 ||
      i + j == T - 1 ||
      i - j == 0
    ) {
      str1 += "#";
    } else {
      str1 += " ";
    }
  }
  str1 += "\n";
}

for (let i = 0; i < T; i++) {
  for (let j = 0; j < T; j++) {
    if (
      (j <= i && j >= T - i) ||
      j == T - 1 ||
      j == 0 ||
      i + j == T - 1 ||
      i - j == 0 ||
      i == 0
    ) {
      str2 += "#";
    } else {
      str2 += " ";
    }
  }
  str2 += "\n";
}

console.log(str1);
console.log(str2);
