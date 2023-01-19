let LearnPlaces = ["resources/Udistrital.png", "resources/Uandes.png", "resources/Platzi.png"]
let indice = 0
function ChangeImage(){
    if (indice < 2) {
        indice = indice + 1;
        document.getElementById('ButtonSection03').src = LearnPlaces[indice];
    } 
}
function ChangeImageBack(){ 
    if (indice > 0) {
        indice = indice - 1;
        document.getElementById('ButtonSection03').src = LearnPlaces[indice];
    } 
}