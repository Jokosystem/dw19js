/*
//Exemple:

function mafonction(){
    alert("Vous avez cliqué");
    document.getElementById("montext").value="Coucou !"
    document.getElementById("monbouton").value="Cliqez ici !"
    document.getElementById("madiv").innerHTML="Ma div a été changé !"
}

mafonction()

console.error(document.getElementById("montext"))
console.error(document.getElementById("monbouton"))
console.error(document.getElementById("madiv"))
*/


//Exo :
/*
function mafonction() {
    alert("Bienvenue !");
    alert(document.getElementById("monbouton2").value)
    document.getElementById("madiv").innerHTML = document.getElementById("montext").value
    document.getElementById("madiv").innerHTML ="Le texte contient :" + document.getElementById("montext").value
    RESULT=parseInt(document.getElementById("montext").value)*1.2
    document.getElementById("madiv").innerHTML ="Le prix est :" + parseInt(document.getElementById("montext").value) + "La TVA est " + RESULT
}
*/
//exo 6
/*
function myfonction(){
    document.getElementById("madiv").innerHTML = document.getElementById("montext").value
    
}
document.getElementById("montext").addEventListener( " input")

*/

/**
 * EXO 6
 * ECRIRE une fonction qui affiche dans la div ce qu il y a dans le champs texte .
 * Cette fonction se declenche au moment ou vous tapez du texte dans le champs texte
 * 
 * EXO 7
 *  * CREEZ UNE FONCTION QUI AFFICHE  DANS LA DIV UN NUMERO QUI S INCREMENTE DE 1 A CHAQUE FOIS QUE LON CLIQUE SUR LE BOUTON
 * 
 *  * EXO 8
 *  * CREEZ UNE FONCTION QUI AFFICHE DANS LA DIV SI L AGE DANS LE TEXTE EST > 18 OU < EN ECRIVANT MAJEUR OU MINEUR
 */



// EX 6
/* 
function mafonction2(){
    document.getElementById("madiv").innerHTML=document.getElementById("montexte").value
}
document.getElementById("montexte").addEventListener(  "input", mafonction2       )

document.getElementById("monboutton").addEventListener(  "click", mafonction       )
document.getElementById("boutton").addEventListener(  "click", alert2       )*/

//exo 7
//correction
/* 
document.getElementById("compteur").addEventListener(  "click" , mafonction3 )

function mafonction2() {
    compteur = parseInt(document.getElementById("madiv").innerHTML);
    compteur = (compteur + 1)
    console.error(compteur) //juste pour tester sur la console //
    document.getElementById("madiv").innerHTML = compteur;
}

//exo 8
//correction

document.getElementById("bouton4").addEventListener(  "click", mafonction3 )

function mafonction3() {
    age=parseInt(document.getElementById("age").value)

    if (age>18){
    document.getElementById("madiv2").innerHTML="Vous êtes majeur"
    }
    if (age<18){
    document.getElementById("madiv2").innerHTML="Vous êtes mineur"
    }
    if (age==18){ 
    document.getElementById("madiv2").innerHTML="Vous êtes pile Majeur !"
    }



}
*/
//EXo
/* 
document.getElementById("bouton5").addEventListener("click", mafonction4)

function mafonction4() {
    num = parseInt(document.getElementById("multiplication_text").value)
    console.error(num)
    document.getElementById("madiv3").innerHTML = "Table de " + num;

    for (h = 1; h < 11; h++) {
        document.getElementById("madiv3").innerHTML+="<br />" + num +" * "+ h + " = " + (num * h ) 
        console.error(h)

    }
}
*/
/*
document.getElementById("bouton6").addEventListener("click", mafonction4)

function mafonction4() {
    num = parseInt(document.getElementById("textnum").value)
    console.error(num)
    document.getElementById("madiv4").innerHTML = "Table de " + num;

    for (h = 1; h < 11; h++) {
        document.getElementById("madiv4").innerHTML+="<br />" + num +" * "+ h + " = " + (num * h ) 
        console.error(h)

    }
if (num){
    
}
else {
    alert("Veuillez entrer un nombre !")

}

}
 */

document.getElementById("bouton6").addEventListener("click", mafonction4)

function mafonction4() {
    num=parseInt(document.getElementById("textnum").value)
    SOMME=1
    

    for (i=1;i<num;i++){
        console.error(SOMME)
        SOMME=SOMME*i
        document.getElementById("madiv4").innerHTML+= i + " * ";
        

}

document.getElementById("madiv4").innerHTML+="Somme de " + "=" + SOMME ;


}

mafonction4()






/**
 * EXO 1 : LES IF ?
 * EXO 2 : CREEZ UN CHAMP TEXTE, UN BOUTON, UNE DIV 
 * SI J ECRIS DANS LE CHAMPS TEXTE LE NOMBRE 5
 * JE VAIS AVOIR LE RESULTAT 1 * 2 * 3 * 4 * 5 = 
 */

 document.getElementById("SOMME_boutton").addEventListener("click", sommef)
 function sommef(){
     // 1 DE QUOI ON A BESOIN  CHAMP TEXTE
    let  nb=parseInt(document.getElementById("SOMME_texte").value) // PARSINT => X
     // ON VERFIE SI CE NOMBRE EST BIEN UN NOMBRE DANS CE CAS ON CONTINUE SI NON ON S ARRETE 
     console.error(nb)
 
     if (isNaN(nb)) {
         return;
     }
      
     // On affiche dans la div LE NOMBRE DE 5 + 4 + 3 +2 +1 
 
     SOMME=1
 
     for (i=1; i<=nb ; i++    ){
         
         SOMME=SOMME*i
         console.error(SOMME)
         document.getElementById("SOMME_div").innerHTML+=i+" * " 
     } 
     document.getElementById("SOMME_div").innerHTML+= " = " +  SOMME 
 }
