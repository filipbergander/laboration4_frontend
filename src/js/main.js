"use strict";
import '/src/sass/main.scss';

const btnDemo = document.getElementById("btn-demo"); // Knapp för att starta demonstration inom animeringar
const loadingSpin = document.getElementById("load-spin");
const toggleBtn = document.getElementById("btn-menu");

const closeBtn = document.getElementById("btn-close");

const menuArea = document.getElementById("nav-menu");

const darkBtn = document.querySelector(".btn-darkened"); // Knapp för att toggla mörkt/ljust tema på startsidan.

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark"); // Lägger till classlist dark på body.
        darkBtn.classList.toggle("dark"); // Lägger till classlist dark på knappen
        if (document.body.classList.contains("dark")) { // Om body.dark finns ändras knappens text
            darkBtn.innerHTML = "Ljust tema"; // Ändrar texten inom knappen
        } else {
            darkBtn.innerHTML = "Mörkt tema";
        }
    })
}
toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("close");
    closeBtn.classList.toggle("show");
    menuArea.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
    closeBtn.classList.remove("show");
    toggleBtn.classList.remove("close");
    menuArea.classList.remove("show");
});

if (btnDemo) {
    btnDemo.addEventListener("click", () => {
        loadingSpin.classList.add("show");
        btnDemo.classList.add("unshow");
        console.log("du klickade på knappen");
        setTimeout(() => {
            console.log("det fungerade");
        }, 3000);
    });
}