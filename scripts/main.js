// Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// Update the text content of the <h1>
// myHeading.textContent = "Meowwwww! This is a cat page.";

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.jpeg") {
    myImage.setAttribute("src", "images/ragdoll.jpeg");
  } else {
    myImage.setAttribute("src", "images/cat.jpeg");
  }
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Hello ${myName}!! Meowwwwww` ;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello ${storedName}!! Meowwwwww`;
}

myButton.addEventListener("click", () => {
  setUserName();
});




