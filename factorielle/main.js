function factorielBis(n) {
  let x = 1;
  let i = 1;
  let y;
  // Pour i de 1 à n
  while (i <= n) {
    // Passage de l'état N à l'état N + 1
    x = x * i;
    // On passe à l'etat suivant
    i++;
  } // Fin de la boucle, on a donc finit de calculer
  // On quitte la focntion en renvoyant notre resultat
  console.log(x);
  return x;
}
console.log(factorielBis(7));
//on attribut la valeur à chaque variable
let a = factorielBis(1);
let b = factorielBis(2);
let c = factorielBis(3);
let d = factorielBis(4);
let e = factorielBis(5);
let f = factorielBis(6);
let g = factorielBis(7);
//un attribue a une variable la valeur de leur somme
let total = a + b + c + d + e + f + g;

console.log(total);