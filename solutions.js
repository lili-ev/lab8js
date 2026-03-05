
const double = x => x * 2;                   
const salut = () => "Hello";                   
const somme = (a, b) => a + b;                 
const creerPoint = (x, y) => ({ x, y });       

const avecFlechee = (...nums) => nums.reduce((a, n) => a + n, 0);

const carres = [1,2,3,4,5,6].map(n => n * n);
const pairs = [1,2,3,4,5,6].filter(n => n % 2 === 0);
const sommeTotal = [1,2,3,4,5,6].reduce((a, n) => a + n, 0);
const premierPair = [1,2,3,4,5,6].find(n => n % 2 === 0);
const aGrand = [1,2,3,4,5,6].some(n => n > 5);
const tousPositifs = [1,2,3,4,5,6].every(n => n > 0);


const multiplierPar = f => x => x * f;
const fois3 = multiplierPar(3);

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const rechercher = (items, q) => {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return items.filter(p => p.nom.toLowerCase().includes(s) || p.cat.toLowerCase().includes(s));
};

const getJSON = async url => (await fetch(url)).json();

const genererId = items => (items.length ? Math.max(...items.map(i => i.id ?? 0)) + 1 : 1);
const ajouter = (items, item) => [...items, { ...item, id: item.id ?? genererId(items) }];
const maj = (items, id, patch) => items.map(i => (i.id === id ? { ...i, ...patch } : i));
const supprimer = (items, id) => items.filter(i => i.id !== id);