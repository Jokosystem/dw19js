// Les Conditions :

/* IF
/* ELSE
/* THEN
/*

*/
/*
age= prompt("Veuillez entrez votre âge"); // Variable va contenir le texte entré par l'utilisateur
age =parseInt(age) // on transforme age au format numérique



// Si l'âge est > 18 alors on écrit dans la console que la personne est majeur sinon la personne est mineur
 

if (age>18){
    console.error("Vous êtes majeur")
}
if (age<18){
    console.error("Vous êtes mineur")
}
if (age==18){ // Tester la valeur entre deux informations == ou ===
    console.error("Vous êtes pile Majeur !")
}

// == on veut tes l'égalité de la valeur entre les deux informations
//


/* Ex 1:
Demander avec prompt un nombre à l'utilisateur 
Afficher dans la console si ce nombre est positif ou négatif
*/

nombre = prompt("Veuillez entrer un nombre");
nombre =parseInt(nombre)

if (nombre>0){
    console.error("Ce nombre est positif")
}

else {
    console.error("ce nombre est négatif")
}


/**
 * EX 2 : 
 * Demander avec prompt un nombre à l'utilisateur
 * AFficher dans la console si ce le nombre est pair ou impair
 * 

 nombre = prompt("veuillez rentrer un numéro ! ") // ouvre un tiroire pour le nombre entré par l'utilisateur
 nombre=parseInt(nombre) // convertir la chaine de caractere en nombre
 if ( (nombre % 2) == 0   )  {
     console.error("le nombre est pair")
 }
 else  {
     console.error("le nombre est impair")
 }
  */


 prenom = prompt("Veuillez entrez votre Prénom");
 monprenom="Chris";
 if (prenom==monprenom) {
     console.error("Sympa ! Vous avez le même prénom que moi ;)")
 }

 //Repeter une action de façon definie ou indefinie



 for (i=0;i<5;i++) {
 //affiche une fois
 alert("test")
 }

 //

 /* EXO 3
 * Initialiser une variable avec votre prenom
 * prenom=yoel
 * vous demandez à l'utilisateur son prenom
 * si le prenom == à votre prenom alors on ecrit dans la console
 * sympa vous avez le même prenom que moi
 * si non rien ...
 * 
 */
/*
// la variable prenom recoit la saisie utilisateur EX : prenom=Yoel
monprenom="Yoel"
prenom=prompt("Quel est votre prénom ? ");
// la variable mike recoit ce qui est dans la variable prenom mike=Yoel
if ( prenom==monprenom ) {
    console.error("sympa vous avez le même prenom que moi")
}
*/