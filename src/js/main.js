"use strict";
import '/src/sass/main.scss';

const darkBtn = document.querySelector(".btn-darkened"); // Knapp för att toggla mörkt/ljust tema på startsidan.

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark"); // Lägger till classlist dark på body.
    darkBtn.classList.toggle("dark"); // Lägger till classlist dark på knappen
    if (document.body.classList.contains("dark")) { // Om body.dark finns ändras knappens text
        darkBtn.innerHTML = "Ljust tema"; // Ändrar texten inom knappen
    } else {
        darkBtn.innerHTML = "Mörkt tema";
    }
})