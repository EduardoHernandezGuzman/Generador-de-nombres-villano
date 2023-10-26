import "bootstrap";
import "./style.css";

window.onload = function() {
  let noun1 = [
    "El monstruo",
    "El psicópata",
    "El loco",
    "El ente",
    "El hechicero",
    "El fantasma",
    "El vampiro",
    "El zombi",
    "El chupacabras",
    "El asaltador",
    "El devorador",
    "El espíritu",
    "El espectro",
    "El intruso",
    "El mutante"
  ];

  let adjective = [
    "tenebroso",
    "oscuro",
    "horroroso",
    "maligno",
    "sobrenatural",
    "aterrador",
    "horripilante",
    "macabro",
    "inquietante",
    "sobrecogedor",
    "espeluznante",
    "peligroso",
    "terrible",
    "atroz",
    "caótico"
  ];

  let noun2 = [
    "del pantano",
    "del bosque fantasmal",
    "del cementerio abandonado",
    "del túnel",
    "del ascensor",
    "de la bahía lúgubre",
    "del averno",
    "del oscuro pasillo",
    "del sótano húmedo",
    "del universo paralelo",
    "de la casa embrujada",
    "de la mansión abandonada",
    "de la montaña embrujada",
    "de la dimensión desconocida",
    "del mundo de los sueños"
  ];
  function randomName() {
    let randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
    let randomAdjective =
      adjective[Math.floor(Math.random() * adjective.length)];
    let randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];

    return `${randomNoun1} ${randomAdjective} ${randomNoun2}`;
  }
};
