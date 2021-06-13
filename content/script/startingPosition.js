var number;
window.onload = function(){
    var mainObject = JSON.parse(startingPosition);
    positioning(mainObject);
}
function positioning(object){
    var quantity = object.positions.quantity;
    for(number = 0; number < quantity; number++){
        var pieceName = object.positions.pieces[number].name;
        var piecePosition = object.positions.pieces[number].position;
        var parent = document.getElementById(piecePosition);
        var child = document.createElement("img");
        child.src = "../images/" + pieceName +".png";
        child.className = pieceName;
        parent.appendChild(child);
   }
}