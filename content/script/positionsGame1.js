var index;
window.onload = function(){
    var mainObject = JSON.parse(game1);
    positioning(mainObject);
}
function positioning(object){
    var quantity = object.positions.quantity;
    for(index = 0; index < quantity; index++){
        var pieceName = object.positions.pieces[index].name;
        var piecePosition = object.positions.pieces[index].position;
        var parent = document.getElementById(piecePosition);
        var child = document.createElement("img");
        child.src = "../images/" + pieceName +".png";
        child.className = pieceName;
        parent.appendChild(child);
   }
}


