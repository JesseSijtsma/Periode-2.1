"use strict";

// Declare variables
const studentName = "JesseSijtsma";
const studentGroup = "MD2B";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;
    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    // Activate the first navigation link
    intro();
	ChangeName();
	ChangeGroup();
	ChangeYear();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Brendan Eich";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);
    
    // Add the paragraph to the DOM
    element.appendChild(p); 
}

function ChangeName() {
	var names = document.getElementsByClassName('studentName');
	
	for(var i = 0; i < names.length; i++ ) {
		names[i].innerText = "Jesse Sijtsma";
	}
}

function ChangeGroup() {
	var group = document.getElementsByClassName('studentGroup');
	
	for(var i = 0; i < group.length; i++ ){
		group[i].innerText = "MD2B";
	}
}

function ChangeYear() {
	var year = document.getElementsByClassName('pageYear');
	
	for(var i = 0; i < year.length; i++ ){
		year[i].innerText = "2018";
	}
}
