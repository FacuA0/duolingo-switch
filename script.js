let activado = false;
let control, gBuho, buho, cara, mascara, ojoIzq, ojoDer, basePico;
let ojoIzqPup, ojoIzqRef, ojoIzqBol, ojoIzqPar, ojoDerPup, ojoDerRef, ojoDerBol, ojoDerPar;

window.onload = function() {
    control = document.querySelector("svg");
    gBuho = document.querySelector("#g-buho");
    buho = document.querySelector("#buho");
    cara = document.querySelector("#cara");
    mascara = document.querySelector("#mascara");
    ojoIzq = document.querySelector("#ojo-izq");
    ojoIzqPup = document.querySelector("#ojo-izq-pup");
    ojoIzqRef = document.querySelector("#ojo-izq-ref");
    ojoIzqBol = document.querySelector("#ojo-izq-bolsa");
    ojoIzqPar = document.querySelector("#ojo-izq-parpado");
    ojoDer = document.querySelector("#ojo-der");
    ojoDerPup = document.querySelector("#ojo-der-pup");
    ojoDerRef = document.querySelector("#ojo-der-ref");
    ojoDerBol = document.querySelector("#ojo-der-bolsa");
    ojoDerPar = document.querySelector("#ojo-der-parpado");
    basePico = document.querySelector("#base-pico");

    control.addEventListener("click", () => {
        activado = !activado;

        control.classList.toggle("dia");

        agregarAnimaciones(gBuho, "g-buho");
        agregarAnimaciones(buho, "buho");
        agregarAnimaciones(cara, "cara");
        agregarAnimaciones(mascara, "mascara");
        //agregarAnimaciones(ojoIzq, "ojo-izq");
        agregarAnimaciones(ojoIzqPup, "ojo-izq-pup");
        agregarAnimaciones(ojoIzqRef, "ojo-izq-ref");
        agregarAnimaciones(ojoIzqBol, "ojo-izq-bolsa");
        agregarAnimaciones(ojoIzqPar, "ojo-izq-parpado");
        //agregarAnimaciones(ojoDer, "ojo-der");
        agregarAnimaciones(ojoDerPup, "ojo-der-pup");
        agregarAnimaciones(ojoDerRef, "ojo-der-ref");
        agregarAnimaciones(ojoDerBol, "ojo-der-bolsa");
        agregarAnimaciones(ojoDerPar, "ojo-der-parpado");
        agregarAnimaciones(basePico, "base-pico");
    });
};

function agregarAnimaciones(elem, nombre) {
    elem.style.animationName = !activado ? "noche-" + nombre : "dia-" + nombre;
    elem.addEventListener("animationend", () => {
        //elem.style.animationName = "none";
    });
}