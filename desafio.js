const T = 20;

let str = "";

if (T < 20) {
  console.log("O tamanho precisa ser >= 20");
  process.exit(1);
}

for (let i = 0; i < T; i++) {
  for (let j = 0; j < T; j++) {
    if ((j >= i && j < T - i) || j == T - 1 || j == 0 || i == T - 1 || i + j == T - 1 || i - j == 0) {
      str += "#";
    } else {
      str += " ";
    }
  }
  str += "\n";
}

console.log(str);
