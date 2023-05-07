let LearnPlaces = ["resources/studied/Unacional.png", "resources/studied/Udistrital.png", "resources/studied/Uandes.png"]
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