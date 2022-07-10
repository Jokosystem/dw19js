let tableau = ["Jean", "Nayanka", "Axelle", 23, "Chris", "Yussef", "Boris", "Lucia"];
let tableau2 = ["Yamsha", "XiuDong", "Oscar"]
console.table(tableau)                                                     //Je cree un tableau avec des noms et un chiffre 

function myname(name) {
    for (let i = 0; i < name.length; i++)
        //Je cree une fonction on peut aussi créér une variable(ex : myvar=name[i])
        if (name[i] === "Chris") { // avec une condition à l'intérieur Qui si elle trouve mon prénom 
            return true;  //Me retourne "true"
        }
    return false              //Et si elle ne le trouve pas me renvoi "false"

}


console.table(myname(tableau));
console.table(myname(tableau2));


//je contrôle sue la console pour vérifier si cela fonctionne.


// Exo 2 :
let tableau3 = ["Jean", "Nayanka", "Axelle", 23, "Chris", "Yussef", "Boris", "Lucia"];
function findcar(tab, prenom) {
    for (let k = 0; k < tab.length; k++)
    

        if (tab[k] == prenom) {
            return true;
        }

    return false;
}
console.log(findcar(tableau3, "Yussef" ))

//Exo3:

/**
 *  *  EX 3 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
 * QUI RENVOIE LA PREMIERE POSITION / LA CLE / L INDICE DE L EMPLACEMENT DANS LE TABLEAU CORRESPONDANT
 * A LA CHAINE DE CARACTERE TROUVE. SI IL LA TROUVE PAS LA FONCTION RENVOIE 0
 */
 function detecte_nom_param_cle(tab, prenom){
    for (let i=0; i < tab.length; i++){
        if ( tab[i] == prenom  ){
            return i
        }
    }
    return 0
}


console.log(detecte_nom_param_cle(tableau3,"Yussef"))


/*
* EX 4 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
* QUI RENVOIE LA LE NOMBRE DE FOIS OU IL RETROUVE CETTE CHAINE DE CARACTERE
* 
*/

tableau1 = ['Axel', "34", 'Robert', 'etc', "Yoel", 'Paul', 'Yoel', 'Paul'];

function detecte_nom_param_nb(tab, prenom){

    let compteur=0

    for (let i=0; i < tab.length; i++){

        if (prenom  ==   tab[i]){
            compteur++
        }
        
    }

    return compteur;

}

console.log(detecte_nom_param_nb(tableau1,"Yoel"))