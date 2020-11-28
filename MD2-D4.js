let list = document.getElementById("listPlayers");
let inputText = document.getElementById("myText");

function addPlayer() {
  console.log(inputText.value);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(inputText.value));
  list.appendChild(li);
}
function removePlayer() {
  list.innerHTML = "";
}

function randomizeTeams() {
  let list2 = list.childNodes;
  let theArray = [];
  for (var i = 0; i < list2.length; i++) {
    let arrValue = list2[i].innerHTML;
  } //take the array and divide it in random arrays
} //add to colon, then delete it from the thing list2[i].innerHTML = ""
