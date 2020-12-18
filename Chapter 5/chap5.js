var item1;
var item2;
var item3;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    item4 = prompt("Enter a new fourth thing: ");
    item5 = prompt("Enter a new fifth thing: ");
    item6 = prompt("Enter a new sixth thing: ");
    updateList();
}

function updateList() {
    document.getElementById("o").innerHTML = item1;
    document.getElementById("d").innerHTML = item2;
    document.getElementById("g").innerHTML = item3;
    document.getElementById("j").innerHTML = item4;
    document.getElementById("z").innerHTML = item5;
    document.getElementById("h").innerHTML = item6;
}