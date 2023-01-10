var button = document.getElementById("enter");
var user = document.getElementById("userinput");
var ul = document.querySelector("ul");


function enableToggle() {
    li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function() {
        li[i].classList.toggle("done");
    })
    }
}

// function enableNewToggle() {
//     li = 
//     document.querySelectorAll("li")[]
// }

function inputLength() {
    return user.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(document.createTextNode(user.value));
    li.appendChild(deleteButton);
    ul.appendChild(li);
    user.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    } 

}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick);

user.addEventListener("keypress", addListAfterKeypress);

enableToggle();

