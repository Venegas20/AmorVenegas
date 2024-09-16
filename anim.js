
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
  { text: "Un día llegaste", time: 1},
  { text: "En mis sueños", time: 2 },
  { text: "Mi mundo cambiaste", time: 6 },
  { text: "De nuevo", time: 10 },
  { text: "Oh, ya eres parte de mis", time: 14 },
  { text: "Pensamientos", time: 18 },
  { text: "Es tan grande el amor", time: 22 },
  { text: "Que por ti siento", time: 26 },
  { text: "Un día llegaste", time: 30 },
  { text: "En mis sueños", time: 34 },
  { text: "Mi mundo cambiaste", time: 38 },
  { text: "De nuevo", time: 42 },
  { text: "Oh, ya eres parte de mis", time: 46 },
  { text: "Pensamientos", time: 50 },
  { text: "Es tan grande el amor", time: 54 },
  { text: "Que por ti siento", time: 58 },
  { text: "Tú brillas más", time: 62 },/*  */
  { text: "Más que el mismo sol", time: 66 },
  { text: "E iluminaste mi mundo de color", time: 70},
  { text: "Tú te robaste mi corazón", time: 74 },
  { text: "Me enamoraste, y te quiero solo a ti", time: 78 },
  { text: "No puedo ocultarte", time: 82 },
  { text: "Lo que siento", time: 86 },
  { text: "Yo quiero solo darte amor a ti (amor a ti)", time: 92 },
  { text: "Tengo que confesarte", time: 94 },
  { text: "Lo que siento", time: 98 },
  { text: "De ti no espero más", time: 102 },
  { text: "Que un simple sí", time: 106 },
  { text: "Me encanta tu tierna mirada", time: 110 },
  { text: "Tus labios dulces que me hablan", time: 114 },
  { text: "Me enamoraste", time: 118 },
  { text: "Tú me cambiaste, me atrapaste", time: 122 },
  { text: "Me encanta tu tierna mirada", time: 126 },
  { text: "Tus labios dulces que me hablan", time: 130 },
  { text: "Me enamoraste", time: 134 },
  { text: "Tú me cambiaste, me atrapaste", time: 138 },
  { text: "Tú brillas más", time: 142 },
  { text: "Más que el mismo sol (más que el mismo sol)", time: 146 },
  { text: "E iluminaste mi mundo de color", time: 150 },
  { text: "Tú te robaste mi corazón", time: 154 },
  { text: "Me enamoraste, y te quiero solo a ti", time: 158 },
  { text: "Amor, cada vez que tú llegaste", time: 162 },
  { text: "Mi vida la cambiaste", time: 168 },
  { text: "Amor", time: 170 },
  { text: "Esta canción es para ti", time: 174 },
  { text: "Miguel Ángel", time: 178 },
  { text: "El Genio", time: 182 },
  { text: "Dazel Records", time: 186 },
  { text: "Night Piano en el beat", time: 190 },
  { text: "Tú brillas más", time: 194 },
  { text: "Más que el mismo sol (más que el mismo sol)", time: 198},
  { text: "E iluminaste mi mundo de color (mi mundo de color)", time: 202 },
  { text: "Tú te robaste mi corazón y", time: 206 },
  { text: "Me enamoraste", time: 210 },
  { text: "Tú me cambiaste", time: 214 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);