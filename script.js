var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteLiButtons = document.getElementsByClassName("fa fa-close");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));

	var deleteButton = document.createElement("li");
	deleteButton.classList.add("fa", "fa-close", "red");
	deleteButton.addEventListener("click", removeItem);
	li.appendChild(deleteButton);

	
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function lineThrough(event)
{
	if(event.target.tagName === "LI"){
	event.target.classList.toggle("done");
	}
}

function removeItem(event){
	event.target.parentNode.remove();
	for(var i=0; i < deleteLiButtons.length; i++){
		
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", lineThrough);
