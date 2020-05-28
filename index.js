var button = document.getElementById("enter");
var input = document.getElementById("ListItems");
var ul = document.querySelector("ul");
var list = document.querySelector('ul');


function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = "X"
    li.appendChild(document.createTextNode(input.value))
    li.appendChild(span)
    ul.appendChild(li)
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0){
        createListElement();
    }
}

function removeItem() {
    let list = document.getElementById("things");
    list.removeChild(list.childNodes[0]);
  }

input.addEventListener("keypress", function(event){
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
})

button.addEventListener("click", function(){
    if (inputLength() > 0){
        createListElement();
    }
})

ul.addEventListener("click", function(event){
    if (event.target.tagName === "SPAN"){
       event.target.parentNode.remove()
    }
})

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);
