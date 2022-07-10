function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let REF_MAX = 0
function maxtab(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > REF_MAX) { REF_MAX = tab[i] }
    }

    return REF_MAX
}
console.log(maxtab)
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var entier = entierAleatoire(1, 100);
console.log(entier)
var entier = entierAleatoire(1, 10)
console.log(entier)
var entier = entierAleatoire(5, 15)
console.log(entier)

/**
 * RECUPERER LA FONCTION
 * ET AFFICHER DANS LA LOG UN NOMBRE ENTRE 1 ET 10 .. ENTRE 1 ET 100 .. ENTRE 5 ET 15
 * 
 * CREER UNE FONCTION QUI VA RENVOYER UN NOMBRE ENTRE 1 et un parametre de la fonction
 * 
 * 
 * EXO 1
 * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR 10 NOMBRE A L INTERIEUR . IL SERONT ALEATOIRE ENTRE 1 ET 100
 * 
 *  * EXO 2
 * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR ENTRE 1 ET 100 NOMBRE A L INTERIEUR  . IL SERONT ALEATOIRE ENTRE 1 ET 100
 *  * EXO 3. Creer une fonction qui va utiliser la fonction deja creer precedemement en 1.  On va imaginer qu on a des prix HT. La fonction renvoyé 
 * le tableau avec les même prix en TTC : prix * 1.2
 */
num = 6
function entierAleatoire(min, num) {
    return Math.floor(Math.random() * (num - min + 1)) + min;
}
var entier = entierAleatoire(1, num)
console.log(entier)






//Exo 1


function tabf() {
    let tab = [];
    for (let i = 0; i < 10; i++) {
        tab[i] = entierAleatoire(1, 100)
    }
    return tab;
}

console.table(tabf())

//Exo 2
//autre exemple
/*
function tabfalea(){
   
    let m = entierAleatoire(1,100) 
    let tableau =  new Array(m);
    for (let i=0 ; i < m ; i ++){
        tableau[i]=entierAleatoire(1,100)
    }
    return tableau
}

console.table(tabfalea())



function tabf2() {
    let tab = [];
    let m = entierAleatoire(1, 100)
    for (let i = 0; i < m; i++) {
        tab[i]=entierAleatoire(1, 100)
    }
    return tab;
}

console.table(tabf2())
*/

function maxtabalea() {
    let tab = tabf()
    console.table(tab)
    let max = maxtab(tab)
    console.table(max);

}

maxtabalea()

function nbmaj() {
    let toto = tabf()
    console.table(toto)
    let tableausup18 = new Array();

    let compteur = 0

    for (let i = 0; i < toto.length; i++) {
        if (toto[i] > 18) {
            compteur = compteur + 1
            tableausup18[compteur] = toto[i]
        }
    }
    console.log(compteur);
    console.table(tableausup18)

}

nbmaj()


function pricettc() {
    let tab = tabf()
    console.table(tab)

    let pricettc = new Array()

    for (let i = 0; i < tab.length; i++) {
        pricettc[i] = tab[i] * 1, 2
    }
    console.table(pricettc)
}

pricettc()


let tableau1 = ['Axel', "34", 'Robert', 'etc', "Yoel", 'Paul', 'Yoel', 'Paul'];
 let tableau2 = [ "Yoel"];
 console.table(tableau1);
 
 function monprenom(tab) {
     for (i = 0; i < tab.length; i++) {
     mavar=tab[i]
     console.log(mavar);
         if (mavar == "Yoel") {
             return true; 
         } 
    }
    return false

 
 }
  console.info(monprenom(tableau1));
