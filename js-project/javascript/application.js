console.log("Hello from application.js!");

// ////////
// Select DOM elements
// ////////

// document.querySelector(CSS_SELECTOR)

// with its ID (cadeyrn-rattur)
const cadeyrn = document.querySelector("#cadeyrn-rattur");
// const cadeyrn = document.getElementById("cadeyrn-rattur");
console.log(cadeyrn);

// with its tag type (h2)
const title = document.querySelector("h2");
console.log(title);

// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
const list = group.querySelector("ul");
console.log(list);

// select multiple elements (all the card)
// cards is a NodeList, looks like an array
const cards = document.querySelectorAll(".card");
console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Yokohama FC)
const unorderedList = document.querySelector(".group ul");
unorderedList.insertAdjacentHTML("afterbegin" , "<li>Yokohama <em>FC</em> ⚽️'</li>")

// same but more complex (add Akitaka!!!)
const yokoCard = document.querySelector(".card:nth-child(2) ul");
yokoCard.insertAdjacentHTML(
  "beforeend", 
  `<li>
    <img id="akitaka-sakiyama" src="https://avatars.githubusercontent.com/u/173691791?v=4" alt="">
    <p>Akitaka Sakiyama</p>
  </li>`
)

// change the element style (group background to green)
// Careful! background-color => backgroundColor
// group.style.color = "red";
const teamGroup = document.querySelector(".group");
teamGroup.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
teamGroup.classList.add("text-white");

// remove it
teamGroup.classList.remove("text-white");



// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value); //.value is for user inputs
email.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (Yokohama FC ⚽️ title)
const yokoTitle = document.querySelector("#yoko-fc");
console.log(yokoTitle.innerText);
console.log(yokoTitle.outerHTML);
console.log(yokoTitle.innerHTML);

yokoTitle.innerHTML = "Hello <em> everyone </em>";