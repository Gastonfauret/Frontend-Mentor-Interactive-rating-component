const oneButton = document.querySelector(".one");
const page1 = document.querySelector("page1");
const submit = document.querySelector(".submit");

function addMessage() {
    console.log("Hola Que Tal");
    
}

function message() {
    window.location.href="./page1.html";
    addMessage();
    document.querySelector(".selectedNumber").innerHTML = "You selected 3 of 5";
}