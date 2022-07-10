

/*
Commentaire :
Nous allons apprendre
1. les variables
2. Les conditions
3. les boucles
4. les Fonctions

*/

// les Variables 
/*1. Pourquoi les variables ? pour stocker les données ex : nom d'un jeux plus ou moins ;
2. Une variable : le nom de la variable et la valeur de la variable : tiroir qui porte un nom.
ex : tiroir A <= 10 Valeur
Le numérique ne contien pas de guillemets
Les chaines de caracteres contiennet des guillemets
Additionner des nombres ça fonctionne
Additionner une chaine de caractère avec une autre fait de la concaténation
*/

a = 10
b = 50
c = "80"
b = 90

console.error(a + b);
console.error(typeof (c));
console.error(b);

//
SEL = 100;
SUCRE = 80;
console.error("Nous avons du SEL en Q. de " + SEL + ". Nous avons du sucre en q. de " + SUCRE + "")


// 

console.error("Nous avons du sel en Q. de " + SUCRE + ". Nous avons du sucre en Q. de " + SEL + ".");

console.error("Nous avons du sel en Q. de " + SUCRE + ". Nous avons du sucre en Q. de " + SEL + ".");

//Votre code inverse les variables

// Créez un ustensile, une variable qui sert de mémoire

TEMP = SEL //TEMP sauvegarde avec la valeur de sel
SEL = SUCRE // SEL on peut l'écraser avec celle de sucre 
SUCRE = TEMP // sucre on peut le garder avec la valeur de sel 
//SEL ne peut pas contenir la valeur de sucre initial car il a été écrasé

/*

console.error("Nous avons du SEL en Q. de "+ SEL +". Nous avons du sucre en q. de "+ SUCRE +"");


age = prompt("Veuillez indiquer votre age"); // variable age va contenir le texte entré par l'utilisateur.

console.error("l'utilisateur a " + age + " ans");



AGEPLUSDEUX=parseInt(age)+2 // convertir en nombres 
console.error("L'utilisateur aura " + AGEPLUSDEUX + " ans")


 */
//exo 3 


/* 
prix = prompt("Quel est le montant de l'aticle ?");

console.error("L'article vaut "+ prix +" euros");

PRIXTTC=parseInt(prix)*1.2;


console.error("L'article vaut "+ PRIXTTC +"euros"); 
*/

//Exo 4 afficher dans la console "nous sommes le: DATEDUJOUR"

/*var now = new Date()
var annee = now.getFullYear();
var mois = ('0' + (now.getMonth() + 1)).slice(-2);
var jour = ('0' + (now.getDate())).slice(-2);



console.info("Nous sommes le : " + jour + "/" + mois + "/" + annee + "");*/

/*date= new Date();
console.error(date);*/

age= prompt("Veuillez entrez votre âge"); // Variable va contenir le texte entré par l'utilisateur
age =parseInt(age) // on transforme age au format numérique



// Si l'âge est > 18 alors on écrit dans la console que la personne est majeur sinon la personne est mineur
 

/*if (age>18){
    console.error("Vous êtes majeur")
}
if (age<18){
    console.error("Vous êtes mineur")
}
if (age==18){ // Tester la valeur entre deux informations == ou ===
    console.error("Vous êtes pile Majeur !")
}*/


/*
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
 *//*
 nombre = prompt("veuillez rentrer un numéro ! ") // ouvre un tiroire pour le nombre entré par l'utilisateur
 nombre=parseInt(nombre) // convertir la chaine de caractere en nombre
 if ( (nombre % 2) == 0   )  {
     console.error("le nombre est pair")
 }
 else  {
     console.error("le nombre est impair")
 }
 /*
 * EXO 3
 * Initialiser une variable avec votre prenom
 * prenom=yoel
 * vous demandez à l'utilisateur son prenom
 * si le prenom == à votre prenom alors on ecrit dans la console
 * sympa vous avez le même prenom que moi
 * si non rien ...
 * 
 */

/*
prenom = prompt("Veuillez entrez votre Prénom");
monprenom="Chris";
if (prenom==monprenom) {
    console.error("Sympa ! Vous avez le même prénom que moi ;)")
}

//Boucle for qui initialise un compteur que l'on a nommé i qui démarre à 0 et termine à 5
/*Exemple
for (i=0;i<5;i++) {
    //affiche une fois
    alert("test")
}
*/
/*Exo
for (i=0;i<101;i++) {
    console.info(i)
}


for (i=100;i<201;i++) {
    console.info(i)

}
*/   /* //Tables de multiplication *2

for (i=1;i<11;i++) {
    result=i*2
    console.error("2*"+i+"="+result)
}
 */

//exo Toutes les tables de multiplications 
/*for (h=1;h<11;h++) {
    console.error("Table de "+ h)

    for (j=1;j<11;j++) {
        console.error( h +"*"+ j+"=" + h*j )
    }
}
*/

//Toutes les tables d'additions :
/*
for (h=1;h<11;h++) {
    console.error("Table de "+ h)

    for (j=1;j<11;j++) {
        console.error( h +"+"+ j+"=" +(h + j) )
    }
}
*/



for (a=1;a<101;a++) {
    console.error("*")
}



for (b=1;b<6;b++){
    console.error(b+"*****")
}

