// Iteration 1: Names and Input
const hacker1 = "Paulo";
console.log("The driver's name is ", hacker1);
const hacker2 = "Fernando";
console.log("The navigator's name is ", hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log("Wow, you both have equally long names, XX characters!");
}
// Iteration 3: Loops
let nameSpace = "";
for (let i = 0; i < hacker1.length - 1; i++) {
  nameSpace += hacker1[i].toUpperCase() + " ";
}
nameSpace += hacker1[hacker1.length - 1].toUpperCase();
console.log(nameSpace);

let nameReverse = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  nameReverse += hacker2[j];
}
console.log(nameReverse);

let names = [hacker1, hacker2];
names.sort();
if (hacker1 !== hacker2) {
  if (names[0] === hacker1) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first definitely.");
  }
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate, arcu et sodales vulputate, lacus lacus ultrices sapien, ut elementum magna elit a ligula. Suspendisse quis urna ut augue aliquam tristique vitae nec mi. Etiam fringilla augue felis, quis sagittis lorem congue et. Aenean egestas, metus commodo mollis laoreet, sapien diam mollis nisi, eu rhoncus dolor risus vitae enim. Aliquam pellentesque eros ac auctor ullamcorper. Suspendisse fermentum a libero id posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam at ligula rhoncus, finibus velit sed, malesuada elit. Vestibulum a elit sed ipsum malesuada elementum eu faucibus dolor.Morbi cursus aliquam maximus. Donec sit amet fringilla justo. Aliquam finibus, purus vitae pulvinar auctor, odio lacus tincidunt tellus, ac semper diam lorem nec ante. Donec placerat bibendum nulla, ut porttitor quam ultrices id. Duis cursus tristique malesuada. In sed massa ut felis ullamcorper tristique. Curabitur vehicula eu velit vitae venenatis. Phasellus aliquet et metus et pretium. Etiam et venenatis enim, quis interdum metus. Donec sit amet bibendum nisi. Pellentesque vitae tincidunt libero. Morbi et imperdiet purus, at ultricies turpis. Duis in lacus non arcu feugiat consequat. Phasellus rutrum ante ut libero luctus lobortis. Aliquam in vulputate nibh, feugiat pharetra massa. Nunc at lectus sem. Pellentesque tincidunt, mi rhoncus dictum efficitur, velit purus scelerisque enim, ut bibendum mauris elit nec lectus. Nullam vehicula vulputate mi sed molestie. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque nec neque eu est finibus consectetur. Integer maximus diam at cursus luctus. Duis scelerisque tristique mi, in venenatis ligula tempor in. Donec et elit urna.";
console.log(texto);
let palavra = "";
console.log("palavra", palavra.length);
let arrPalavras = [];

for (let i = 0; i < texto.length; i++) {
  if (texto[i] !== " " && texto[i] !== "." && texto[i] !== ",") {
    palavra += texto[i];
  } else if (palavra.length > 0) {
    arrPalavras.push(palavra);
    palavra = "";
  }
}
console.log("Quantidade de palavras nos 3 parágrafos:", arrPalavras.length);
let numberEt = arrPalavras.filter((x) => x === "et");
console.log("Número de vezes que a palavra 'et' aparece:", numberEt.length);

//Bonus2
const str = "Was it a car or a cat I saw?";
let phraseToCheck = "";
for (let i = 0; i < str.length; i++) {
  if (
    str[i] !== " " &&
    str[i] !== "." &&
    str[i] !== "," &&
    str[i] !== "!" &&
    str[i] !== "?" &&
    str[i] !== "'" &&
    str[i] !== '"'
  ) {
    phraseToCheck += str[i];
  }
}
phraseToCheckUC = phraseToCheck.toUpperCase();
let tamanho;
let count = 0;
let z = 0;
if (phraseToCheck.length % 2 === 0) {
  tamanho = phraseToCheck.length / 2;
  while (z === count && z < tamanho) {
    if (phraseToCheckUC[z] === phraseToCheckUC[phraseToCheck.length - 1 - z]) {
      count++;
    }
    z++;
  }
} else {
  tamanho = (phraseToCheck.length - 1) / 2;
  while (z === count && z < tamanho) {
    if (phraseToCheckUC[z] === phraseToCheckUC[phraseToCheck.length - 1 - z]) {
      count++;
    }
    z++;
  }
}
if (z === count) {
  console.log("é palíndromo", z, count);
} else {
  console.log("não é palíndromo", z, count);
}
