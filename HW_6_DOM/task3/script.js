// Create the main elements for the page
const body = document.body;
const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");

// Add attributes to the elements
main.className = "mainClass check item";
div.id = "myDiv";

// Add text to the paragraph
p.textContent = "First paragraph";

// Build the DOM structure
div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

// Add the body to the document
document.documentElement.appendChild(body);