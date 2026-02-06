"use strict";
import '/src/sass/main.scss';

const btnDemo = document.getElementById("btn-demo"); // Knapp för att starta demonstration inom animeringar
const loadingSpin = document.getElementById("load-spin"); // Laddikon
const imageDisplay = document.getElementById("images-animations"); // Bilder inom animeringar
const gironaEl = document.querySelector(".grass-pic"); // Bild för Girona
const skuleEl = document.querySelector(".water-pic"); // Bild för Skuleskogen
const skuleTextEl = document.getElementById("skule-text"); // Text till bilden för skuleskog
const gironaTextEl = document.getElementById("girona-text"); // Text till bilden för Girona'
const iconsEl = document.getElementById("icons"); // Text till bilden för Girona
const btnRestartEl = document.getElementById("btn-restart"); // För att starta om demonstrationen
const headlineEl = document.getElementById("headline"); // Rubriken



const toggleBtn = document.getElementById("btn-menu"); // Knappen för att öppna hamburgermeny

const closeBtn = document.getElementById("btn-close"); // Knappen för att stänga hamburgermeny

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
            loadingSpin.classList.remove("show")
            console.log("det fungerade");
            imageDisplay.classList.add("show")
        }, 2500);
    });
}

if (skuleEl && gironaEl) {
    skuleEl.addEventListener("click", () => {
        gironaEl.classList.add("unshow");
        skuleTextEl.classList.add("show");
        iconsEl.classList.add("show");
        btnRestartEl.classList.add("show");
        headlineEl.classList.add("unshow");
    });

    gironaEl.addEventListener("click", () => {
        skuleEl.classList.add("unshow");
        gironaTextEl.classList.add("show");
        iconsEl.classList.add("show");
        btnRestartEl.classList.add("show");
        headlineEl.classList.add("unshow");
    });
}