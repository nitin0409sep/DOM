const title = document.getElementById("heading");

//! Attributes -
// console.log(title);
// console.log(title.getAttribute("id"));
// console.log(title.getAttribute("class"));

// title.setAttribute("id", "heading-id"); //! Replaces the existing id attribute on the dom
// console.log(title.getAttribute("id"));

//! Styling -
// title.style.backgroundColor = "green";
// title.style.borderRadius = "50px";
// title.style.padding = "20px";

//! Text Content
// console.log(title.innerHTML);
// console.log(title.innerText);
// console.log(title.textContent); //! Display All text, even though if some text is hidden due to CSS properties

console.log(document.querySelector("ul"));
console.log(document.querySelectorAll("li")); //? You will get a node list

//? You will get a node list
const liList = document.querySelectorAll("li"); //! You can apply for each on node list
const arrLiList = Array.from(liList); //? Convert NodeList to Array
arrLiList.map((val) => (val.style.color = "red"));

//? You will get a HTML COLLECTIONS
const liCollection = document.querySelectorAll("li"); //! We Dont Get for each with HTMLCollections
const arrLiCollection = Array.from(liList); //? Convert NodeList to Array
arrLiCollection.map((val) => (val.style.color = "pink"));

//! We can pass selectors in different ways
console.log(document.querySelector("li:first-child"));
console.log(document.querySelector("li:last-child"));
console.log(document.querySelector("li:nth-child(2)"));

console.log(document.querySelector("input[type=password]"));
console.log(document.querySelector("input[type=checkbox]"));
