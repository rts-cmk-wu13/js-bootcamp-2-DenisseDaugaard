let buttons = document.querySelectorAll(".button")
console.log(buttons);


buttons.forEach(btn => {
    btn.addEventListener("click", changeColor);
});

function changeColor(event) {
    buttons.forEach(btn => btn.style.backgroundColor = ""); // her all the buttons are the defult color

    event.target.style.backgroundColor = "green"; // her we change the color with event.target
}