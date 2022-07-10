/*
/**
TAB= [23,34,54,34,45]
for (i=0;i<TAB.length;i++){
    console.log(TAB[i] + " - "   )
}
 * Fonction qui vont prendre en parametre un tableau qui retourne
 *  EXO 1 : le nombre d'éléments dans un tableau
 *  EXO 2 : la somme des éléments d'un tableau
 *  EXO 3 : l'élément maximum d'un tableau
 *  EXO 4 : l'élément minimum d'un tableau
 *  EXO 5 : Trouver le premier élément supérieur à 500
 *  BONUS : Copier les premiers éléments d'un tableau dont la somme fait au moins 500
 */

/**
 * BOUCLE 
 * ACCUMULATION
 * 
 * 
 * 1 ETAPE ECRIRE EN FRANCAIS CE QU IL FAUT FAIRE VOTRE METHODE POUR TROUVER LA SOLUTION
 * 2 ME L ENVOYE
 * 3 CODE
 */
/*
 function comptetab(tableau){
    let compteur=0;
    for (i=0; i<tableau.length;i++){
        compteur=compteur+1 // compteur++
    }
    return compteur
 }
 
 
 function sommetab(tableau){
     let result=0
     for(r=0;r<tab.length;r++){
         result=result+tab[r]
     }
     return result
 }
 
 function maxtab(Tableau){
     let REF_MAX=0
     for (let i=0; i < tab.length; i++){
         if ( Tableau[i] > REF_MAX    )  {  REF_MAX=Tableau[i]   }
     }
     return REF_MAX
 
   
 }
 
 let tab=[234,45,34,45,99999999999999]
 console.log(comptetab(tab))
 console.log(sommetab(tab))
 console.log(maxtab(tab))
 
 * 
  * MIN DU TABLEAU
  * 
  * REF_MIN=MAX(TABLEAU)
  * 
  * BOUCLE
  * 
  * SI VARIABLE LUE < REF_MIN   '{   MAJ REF_MIN  }
  * 
  * FIN BOUCLE
  * RETOURNE REF_MIN
  * 
  * 
  * MAX D UN TABLEAU
  * [234,45,34,45]
  * 
  * REF_MAX=0
  * BOUCLE DU TABLEAU
  *   SI LA VALEUR LU > REF_MAX alors on met a jours REF_MAX
  * FIN DE LA BOUCLE
  * RENVOIE REF_MAX
  * 
  */



let REF_MAX = 0
function maxtab(tab) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > REF_MAX) { REF_MAX = tab[i] }
    }

    return REF_MAX
}  
console.log(maxtab)




//Afficher le minimum d'un tableau
function mintab(tab) {
    REF_MIN = tab[0]
    for (let j = 0; j < tab.length; j++) {
        if (tab[j] < REF_MIN) {
            REF_MIN = tab[j]
        }



    }

    return REF_MIN
}





//Superieur à 500

function suptab(tab) {
    for (let k = 0; k < tab.length; k++) {
        if (tab[k] > 500) { return tab[k]}
         

    }
 
     
}


let tab = [234, 545, 68, 9999999]

console.log(suptab(tab))

//autre technique
function suptab2(tab , n) {

    for (let k = 0; k < tab.length; k++) {
        if (tab[k] > n) { return tab[k]}
         

    }
 
     
}

console.log(suptab2(tab, 10000))

//===============================//
/**
 * Fonction qui
 * 1 prend en parametre un nombre et qui va renvoyer vrai si il est positif  ou faux si il est negatif
 * 2 prend en parametre un nombre et qui va renvoyer vrai si il est pair  ou faux si il est impair
 * 3 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = à votre prenom
 * 4 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = au deuxieme parametre
 */
 /*
 let tab=[234, 530, 502, 45,34,45, 99999999999999]
 let tab2=["Robert","Jean","Axel",23]
 console.log(comptetab(tab))
 console.log(sommetab(tab))
 console.log(maxtab(tab))
 console.log(mintab(tab))
 console.log(supcinq(tab, 1000))
* 
  * MIN DU TABLEAU
  * 
  * REF_MIN=MAX(TABLEAU)
  * 
  * BOUCLE
  * 
  * SI VARIABLE LUE < REF_MIN   '{   MAJ REF_MIN  }
  * 
  * FIN BOUCLE
  * RETOURNE REF_MIN
  * 
  * 
  * MAX D UN TABLEAU
  * [234,45,34,45]
  * 
  * REF_MAX=0
  * BOUCLE DU TABLEAU
  *   SI LA VALEUR LU > REF_MAX alors on met a jours REF_MAX
  * FIN DE LA BOUCLE
  * RENVOIE REF_MAX
  * 
  
 

let tab2 = ["Jean", "Robert", "Axel",23]

function positif(nombp){
  
      if (nombp>0){
        console.info ("vrai")

      }
    else{
      console.info ("faux")
    }

    
    
    }
console.info(positif(-20));



*/


//Exo 1
function vouf(nombre){
    

    if (nombre > 0   )  {
        return true
    }
    else  {
        return false
    }    

} 
console.info(vouf(-15));

//exo 2


function pair(nombre){
    if (( nombre % 2   ) === 0 ) {
        return true
    }
    else {
        return false
    }
}

pair(2)

//exo 3

function myname(name){
    if( name==="Chris"){
        return true
    }
    else{
        return false
    }
}

console.info(myname("Jack"))

//exo 4

function mememot(mot1, mot2){
    if( mot1=== mot2){
        return true;
    }
    else{
        return false;
    }

}

console.info(mememot("Yoel","Yoel"))