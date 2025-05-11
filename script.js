let activado = false;
let control, gBuho, buho, cara, mascara, ojoIzq, ojoDer, basePico;

window.onload = function() {
    control = document.querySelector("svg");
    gBuho = document.querySelector("#g-buho");
    buho = document.querySelector("#buho");
    cara = document.querySelector("#cara");
    mascara = document.querySelector("#mascara");
    ojoIzq = document.querySelector("#ojo-izq");
    ojoDer = document.querySelector("#ojo-der");
    basePico = document.querySelector("#base-pico");

    control.addEventListener("click", () => {
        activado = !activado;

        agregarAnimaciones(gBuho, "g-buho");
        agregarAnimaciones(buho, "buho");
        agregarAnimaciones(cara, "cara");
        agregarAnimaciones(mascara, "mascara");
        agregarAnimaciones(ojoIzq, "ojo-izq");
        agregarAnimaciones(ojoDer, "ojo-der");
        agregarAnimaciones(basePico, "base-pico");
    });
};

function agregarAnimaciones(elem, nombre) {
    elem.style.animationName = !activado ? "noche-" + nombre : "dia-" + nombre;
    elem.addEventListener("animationend", () => {
        //elem.style.animationName = "none";
    });
}