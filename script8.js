// Jeu de devinette entre 0 et 100 :

function entierAleatoire(min, max) {
    let nb = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(nb)
    return nb;
}
document.getElementById("bouton").addEventListener("click", check)
function alea() {

}
var aleatoire = entierAleatoire(1, 100)
var compteur =10
  
function reinitialiser(){
    document.getElementById("bouton").disabled=false
    document.getElementById("madiv").innerHTML=""
    document.getElementById("madiv2").innerHTML=""
    document.getElementById("madiv3").innerHTML=""
    document.getElementById("montext").value=""
    var aleatoire=entierAleatoire(1, 100)
    compteur=10 
}


function cas3(){

document.getElementById("madiv").innerHTML = "GAME OVER"
document.getElementById("madiv").style.background= "red";
document.getElementById("bouton").disabled=true;
document.getElementById("madiv3").innerHTML="<input type='button' id='reset' value='redémarrer le jeu'>"
document.getElementById("reset").addEventListener("click", reinitialiser)
}


function check() {
    console.log(compteur)
    nb_user = parseInt(document.getElementById("montext").value)
    
    console.log(nb_user);
    document.getElementById("madiv2").innerHTML+= " "+ document.getElementById("montext").value;    

    if (nb_user == aleatoire) {

        document.getElementById("madiv").innerHTML = "BIEN JOUE !";
        document.getElementById("madiv").style.background = "green";
        console.log("OK")
    }
    if (nb_user < aleatoire) {

        document.getElementById("madiv").innerHTML = "C'est Plus !";
        document.getElementById("madiv").style.background = "red";
        console.log("c'est plus!")
        compteur--
    }
    if (nb_user > aleatoire) {

        document.getElementById("madiv").innerHTML = "C'est Moins !";
        document.getElementById("madiv").style.background = "red";
        console.log("c'est moins!")
        compteur--
    }
if (compteur<= 1){
    cas3()


}


}
//window.addEventListener("load", alea)

document.getElementById("bouton").addEventListener("click", check)













