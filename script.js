// ==========================
// BIOCOLOR LAB V3
// ==========================

const pantallas = document.querySelectorAll(".pantalla");

function ocultarPantallas(){

pantallas.forEach(pantalla=>{

pantalla.classList.remove("activa");

});

}

function mostrarMenu(){

ocultarPantallas();

document.getElementById("menu").classList.add("activa");

window.scrollTo(0,0);

}

function abrirPantalla(id){

ocultarPantallas();

document.getElementById(id).classList.add("activa");

window.scrollTo(0,0);

}

function volverMenu(){

mostrarMenu();

}

const datos={

alcohol:{

color:"#22c55e",

nombre:"🍺 Alcohol",

fisico:"Moderado",

psicologico:"Moderado",

riesgo:"🟢 Riesgo moderado",

mensaje:"El consumo excesivo puede afectar el hígado, el corazón, la coordinación y la capacidad para tomar decisiones.",

cerebro:"El alcohol disminuye los reflejos, altera la memoria y reduce la capacidad de concentración.",

consecuencia:"Puede provocar dependencia, accidentes y problemas familiares."

},

tabaco:{

color:"#2563eb",

nombre:"🚬 Tabaco",

fisico:"Alto",

psicologico:"Moderado",

riesgo:"🔵 Riesgo alto",

mensaje:"El tabaco contiene sustancias que dañan los pulmones y aumentan el riesgo de enfermedades cardiovasculares.",

cerebro:"La nicotina genera dependencia y modifica el sistema de recompensa del cerebro.",

consecuencia:"Mayor riesgo de cáncer y enfermedades respiratorias."

},

marihuana:{

color:"#7c3aed",

nombre:"🌿 Marihuana",

fisico:"Moderado",

psicologico:"Alto",

riesgo:"🟣 Riesgo alto",

mensaje:"Puede afectar la memoria, la atención, la coordinación y el aprendizaje.",

cerebro:"Altera funciones relacionadas con la memoria y la percepción.",

consecuencia:"Disminución del rendimiento académico y dependencia en algunos casos."

},
cocaina:{

color:"#f97316",

nombre:"💉 Cocaína",

fisico:"Muy alto",

psicologico:"Muy alto",

riesgo:"🟠 Riesgo muy alto",

mensaje:"Puede aumentar la presión arterial, provocar arritmias, infartos y generar una fuerte dependencia.",

cerebro:"Estimula de forma intensa el sistema de recompensa, alterando el autocontrol y la toma de decisiones.",

consecuencia:"Alto riesgo de adicción, problemas cardiovasculares y deterioro social."

},

tusi:{

color:"#ec4899",

nombre:"🩷 Tusi",

fisico:"Muy alto",

psicologico:"Muy alto",

riesgo:"🔴 Riesgo muy alto",

mensaje:"El tusi es una mezcla de sustancias cuya composición puede variar. Su consumo puede afectar gravemente la salud física y mental.",

cerebro:"Puede alterar la percepción, el estado de ánimo y el juicio, además de aumentar el riesgo de dependencia y otras complicaciones.",

consecuencia:"Puede ocasionar intoxicaciones graves, problemas cardiovasculares y trastornos psicológicos."
}
};
// ==========================
// INICIALIZACIÓN
// ==========================

document.addEventListener("DOMContentLoaded",()=>{

const fondo=document.getElementById("fondo-animado");

for(let i=0;i<35;i++){

const burbuja=document.createElement("div");

burbuja.className="burbuja";

const tamaño=Math.random()*35+10;

burbuja.style.width=tamaño+"px";

burbuja.style.height=tamaño+"px";

burbuja.style.left=Math.random()*100+"%";

burbuja.style.animationDuration=(Math.random()*8+8)+"s";

burbuja.style.animationDelay=(Math.random()*6)+"s";

fondo.appendChild(burbuja);

}

// Sustancia mostrada al iniciar
mostrarDroga("alcohol");

});
function mostrarDroga(nombre){

const droga = datos[nombre];

document.getElementById("liquido").style.background = droga.color;

document.getElementById("nombreDroga").textContent = droga.nombre;

document.getElementById("danioFisico").textContent =
"🩺 Daño físico: " + droga.fisico;

document.getElementById("danioPsicologico").textContent =
"🧠 Daño psicológico: " + droga.psicologico;

document.getElementById("nivelRiesgo").textContent =
droga.riesgo;

document.getElementById("mensaje").textContent =
droga.mensaje;

document.getElementById("textoCerebro").textContent =
droga.cerebro;

document.getElementById("tituloDroga").textContent =
droga.nombre;

document.getElementById("descripcionDroga").textContent =
droga.mensaje;

document.getElementById("fisicoInfo").textContent =
droga.fisico;

document.getElementById("psicoInfo").textContent =
droga.psicologico;

document.getElementById("consecuenciaInfo").textContent =
droga.consecuencia;

}
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")

    .then(() => {

        console.log("BioColor Lab V3 lista para instalar");

    })

    .catch(error => {

        console.log("Error del Service Worker:", error);

    });

}