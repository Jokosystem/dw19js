/**
 * 
 * CREATION DE VARIABLE
 * x=3
 * 
 * 
 

 let x=3
 var y=2
 const z=7 
 // a="test3"
 function test(){
     let a="test"
 }
 let a="test2"
 
 test()
 console.log(a) // AFFICHE ?*/






//EXO : Creer une fonction pour calculereturn  de 2,3, 4,  nombres:


/*
function moyenne(moy1, moy2) {


    result = (moy1 + moy2) / 2
    return result

}

function moyenne2(moy1, moy2, moy3) {


    result = (moy1 + moy2 + moy3) / 3
    return result

}

function moyenne3(moy1, moy2, moy3, moy4) {


    result = (moy1 + moy2 + moy3 + moy4) / 4
    return result

}

let monresultat = moyenne3(12, 13, 15, 18)
console.log(monresultat)
 */

//Tableau pour calculer un nombre indefinif de nombres pour une moyenne
/**
 * Fonction qui me retourne la moyenne d'un nombre de note indefinie
 * moyenne4(12,14,13,10) => 12
 * moyenneindef(     ) => moyenne des 50 nombres X
 * envoyer un tableau en parametre
 * [  ,    ,    ,   ]
 */

let tab = [12, 14, 16, 10, 15];
console.log(tab[2])
console.table(tab)

function moyenneindef(tab) {
    let result = 0
    for (let i = 0; i < tab.length; i++) {
        result = result + tab[i]
    }
    result=result/tab.length
    return result
}
console.log(moyenneindef([12,14]))

/**
 * 1 CREEZ UNE FONCTION PRENANT EN PARAMETRE UN TABLEAU
 * QUI VA RETOURNER LE MEME TABLEAU
 * Afficher le tableau
 * 
 * 2 FAIRE PAREIL QUE LA 1 EN ECHANGEANT LES DEUX PREMIERES VALEUR DU TABLEAU
 * ET VOUS RENVOYER LE NOUVEAU TABLEAU
 * ET VOUS L AFFICHER
 */
// EXO 1 & 2

function retournetableau(tab) {

    let TEMP = tab[0]
    tab[0] = tab[1]
    tab[1] = TEMP
    return tab
}
console.table(retournetableau([34,234,55]))

/*===================================================================== */
//exo1
/*
function turntab(tab){
    let TEMP = tab[0]
    tab[0]= tab[2]
    tab[2] = TEMP
    return tab
}
console.table(turntab([55,155,255]))
*/
//exo2
/*
SOMME=0
function turntab2(tab){
    for (i=1;i<num;i++){
        console.error(SOMME)
        SOMME=SOMME+tab;
    
}}
*/
//exo3:
function turntab3(tab){
    let max = 10000000000;
    for (let j=0; j>tab.length; j++) {
        if (tab[j] > max){
            max = tab[j];
        }
    }
     "L'élément maximum du tableau est : " + max
}
console.info(turntab3(tab))





//exo4:
function turntab4(tab){
    let min = 10000000000;
    for (let i=0; i<tab.length; i++) {
        if (tab[i] < min){
            min = tab[i];
        }
    }
    return "L'élément minimum du tableau est : " + min
}
console.info(turntab4(tab))