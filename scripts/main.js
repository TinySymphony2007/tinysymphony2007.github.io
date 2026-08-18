const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sample-image.jpg") {
    myImage.setAttribute("src", "images/sara-eating.gif");
  } else {
    myImage.setAttribute("src", "images/sample-image.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `初次见面, ${myName}殿下`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `您好, ${storedName}殿下`;
}

myButton.onclick = function () {
  setUserName();
};
