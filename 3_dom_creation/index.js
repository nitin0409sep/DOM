// Create the first div
const createDiv = () => {
  const div = document.createElement("div");
  div.className = "main";
  div.id = Math.round(Math.random() * 10 + 1);

  div.setAttribute("title", "new title");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = "green";

  // div.innerText = "Hello Nitin!!!"; //! Not a good way, as its override the exisiting innerText, for that it first
  //! fetch it and then update it, hence 2 trip hogyi so its bad practise

  const innerText = document.createTextNode("div");
  div.appendChild(innerText);

  return div;
};

document.body.appendChild(createDiv());
document.body.append(createDiv());

const createLi = (msg = "L4") => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(msg));

  return li;
};

const ul = document.querySelector("ul");

ul.appendChild(createLi("LI 1"));
ul.appendChild(createLi("LI 3"));

//? InsertBefore
const p1 = document.getElementById("p1");
const div1 = document.querySelector("#div1");

function createEle() {
  const insertEle = document.createElement("p");
  const textNode = document.createTextNode("Insert Before Text Node");

  insertEle.appendChild(textNode);
  return insertEle;
}

div1.insertBefore(createEle(), p1);
div1.insertAdjacentElement("afterend", createEle());
div1.insertAdjacentElement("beforeend", createEle());

//! Remove Element
const p2 = document.querySelector("#p2");

// Remove Child
div1.removeChild(p2);

// Remove Element itself
div1.remove();
