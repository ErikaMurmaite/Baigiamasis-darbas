

const button = document.getElementById("colorChangeBtn");

const colors = [
    "rgb(194, 74, 138)",  
    "rgb(146, 14, 87)"    
];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;
}

setInterval(changeColor, 1000);


// Surandame hamburger meniu ikoną ir navigaciją
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

// Įvykio klausytojas paspaudimui
hamburger.addEventListener("click", function () {
    nav.classList.toggle("hidden"); // Prideda/pašalina 'hidden' klasę
});
