
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var row = event.target.getAttribute("data-row");
  var col = event.target.getAttribute("data-col");

  if (board[row][col] === "" ) {
    event.target.innerText = data;
    board[row][col] = data;
    
  }
}

