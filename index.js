const oneButton = document.querySelector("one");
const selectedNumber = document.querySelector("selectedNumber");
const submit = document.querySelector("submit");
selectedNumber.innerHTML;

oneButton.addEventListener("click", () => {
    selectedNumber.innerHTML = "You selected 1 of 5";
})

submit.addEventListener("click", () => {
    console.log("Hola Que tal");
})