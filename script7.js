/*document.getElementById("bouton").addEventListener("click", colchange)

function colchange() {
    document.getElementById("madiv").style.color = "red";
    document.getElementById("madiv").style.background = "blue";
}
*/
/**
 * Lorsque on clique sur le bouton GO la texte de la div devient rouge
 */
/*
 document.getElementById("bouton").addEventListener("click", changecouleur)

 function changecouleur(){
     document.getElementById("body").style.background = "red";
     document.getElementById("madiv").style.color = "blue";
  
 }
*/
//faire changer la couleur aléatoirement de la page en cliquant sur le bouton.
document.getElementById("bouton").addEventListener("click", colchange2) 

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let tabcolor=["yellow","red","black","blue"]



function colchange2(){
   document.getElementById("body").style.background = tabcolor [ entierAleatoire(0, tabcolor.length - 1)]
    
}

/* JEU DU PLUS OU MOINS
* 
* 
* 1 AU CHARGEMENT DE LA PAGE
* ON A UN NOMBRE ALEATOIRE QUI EST TROUVE
* 
* 2 AU CLIQUE SUR LE BOUTON GO 
* L ELEMENT HTML DU TEXTE EST ANALYSE PARSINT ON VERIFIE SI IL EST = AU NOMBRE ALEATOIRE OK VERT
*                                                                  > CEST MOINS ROUGE
*                                                                  < CEST PLUS ROUGE
* 
* UNE DIV INDIQUE L ENSEMBLE DES REPONSES
* 
* AU BOUT DE 10 FOIS IL VOUS MARQUE GAME OVER
* 
*/


// 1 GENERER MON NOMBRE ALEATOIRE



function entierAleatoire(min, max) {
    let nb= Math.floor(Math.random() * (max - min + 1)) + min
    console.log(nb) 
    return nb;
}
 
/**
 * AU CHARGEMENT DE LA PAGE
* ON A UN NOMBRE ALEATOIRE QUI EST TROUVE
 */
    var aleatoire=entierAleatoire(1,100)
 


function check(){
    // RECUPERER L ELEMENT DU TEXTE
    nb_user=parseInt(document.getElementById("montexte").value)
    console.log(nb_user);

        if (  nb_user == aleatoire ) {
            console.log("OK")
         }

       if (  nb_user > aleatoire ) {
        console.log("c 'est moins ")
        }

        if (  nb_user < aleatoire ) {
            console.log("c 'est plus ")
        }
        
    }
    
/**
 * 1 . COMPLETER FONCTION QUI CHECK 
 *   1 . QUI VA ECRIRE DANS LA DIV LORSQUE C EST > < = L INFORMATION 
 *   2 . CHANGER DE COULEUR DANS LA DIV . ROUGE KO / VERT OK
 * 
 * 2  1. ECRIRE DANS LA DIV1 LES DIFFERENTS NOMBRES ENTRE PAR LE USER
 *    2. AU BOUT DE 10 NOMBRES => GAME OVER LE JEU NE MARCHE PLUS 
 * 
 * 
 */

// window.addEventListener("load" , alea)

document.getElementById("monboutton").addEventListener("click", check)




