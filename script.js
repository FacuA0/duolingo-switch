let activado = false;
let control, fondo, gBuho, buho, cara, mascara, basePico;
let ojoIzqPup, ojoIzqRef, ojoIzqBol, ojoIzqPar, ojoDerPup, ojoDerRef, ojoDerBol, ojoDerPar;

window.onload = function() {
    control = document.querySelector("svg");
    control.addEventListener("click", () => {
        activado = !activado;

        control.classList.toggle("dia");

        agregarAnimaciones("fondo");
        agregarAnimaciones("g-astro");
        agregarAnimaciones("astro");
        agregarAnimaciones("astro-sup");
        agregarAnimaciones("astro-inf");
        agregarAnimaciones("astro-crateres");
        agregarAnimaciones("astro-sombra");
        agregarAnimaciones("nubes");
        agregarAnimaciones("g-buho");
        agregarAnimaciones("buho");
        agregarAnimaciones("cara");
        agregarAnimaciones("mascara");
        agregarAnimaciones("ojo-izq-pup");
        agregarAnimaciones("ojo-izq-ref");
        agregarAnimaciones("ojo-izq-bolsa");
        agregarAnimaciones("ojo-izq-parpado");
        agregarAnimaciones("ojo-der-pup");
        agregarAnimaciones("ojo-der-ref");
        agregarAnimaciones("ojo-der-bolsa");
        agregarAnimaciones("ojo-der-parpado");
        agregarAnimaciones("base-pico");
    });
};

function agregarAnimaciones(nombre) {
    let elem = document.querySelector("#" + nombre);
    elem.style.animationName = !activado ? "noche-" + nombre : "dia-" + nombre;
    elem.addEventListener("animationend", () => {
        //elem.style.animationName = "none";
    });
}