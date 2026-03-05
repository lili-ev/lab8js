
const produits = [
  { id: 1, nom: "Stylo", cat: "Bureau", prix: 1.2, stock: 50 },
  { id: 2, nom: "Cahier", cat: "Bureau", prix: 2.5, stock: 0 },
  { id: 3, nom: "Clavier", cat: "Informatique", prix: 29.9, stock: 10 },
  { id: 4, nom: "Souris", cat: "Informatique", prix: 19.9, stock: 5 },
];

const unique = arr => [...new Set(arr)];
console.log("unique:", unique([1, 2, 2, 3, 4, 4, 5])); 

const groupBy = (arr, key) => arr.reduce((acc, x) => ((acc[x[key]] ||= []).push(x), acc), {});
console.log("groupBy cat:", groupBy(produits, "cat"));

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const trim = s => s.trim();
const upper = s => s.toUpperCase();
const exclam = s => s + "!";
const compositon = compose(exclam, upper, trim);
console.log("compose:", compositon("  hello  ")); 