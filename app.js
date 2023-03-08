JS:// Obtém a referência para a imagem
var img1 = document.getElementById("myImage1");
var img2 = document.getElementById("myImage2");
var img3 = document.getElementById("myImage3");
var img4 = document.getElementById("myImage4");
var img5 = document.getElementById("myImage5");
var img6 = document.getElementById("myImage6");

// Cria um novo objeto de áudio e define a fonte do arquivo MP3
var audio1 = new Audio();
audio1.src = "Complicado.mp3";
var audio2 = new Audio();
audio2.src = "Bateu saudades.mp3";
var audio3 = new Audio();
audio3.src = "Falta você.mp3";
var audio4 = new Audio();
audio4.src = "Fulminante.mp3";
var audio5 = new Audio();
audio5.src = "Amanhã.mp3";
var audio6 = new Audio();
audio6.src = "Insegurança.mp3";

// Adiciona um ouvinte de eventos de clique à imagem
img1.addEventListener("click", function() {
  // Verifica se o áudio está tocando
  if (audio1.paused) {
    // Inicia a reprodução do áudio
    audio1.play();
  } else {
    // Pausa a reprodução do áudio
    audio1.pause();
  }
});
// Adiciona um ouvinte de eventos de clique à imagem
img2.addEventListener("click", function() {
  // Verifica se o áudio está tocando
  if (audio2.paused) {
    // Inicia a reprodução do áudio
    audio2.play();
  } else {
    // Pausa a reprodução do áudio
    audio2.pause();
  }
});
// Adiciona um ouvinte de eventos de clique à imagem
img3.addEventListener("click", function() {
  // Verifica se o áudio está tocando
  if (audio3.paused) {
    // Inicia a reprodução do áudio
    audio3.play();
  } else {
    // Pausa a reprodução do áudio
    audio3.pause();
  }
});
// Adiciona um ouvinte de eventos de clique à imagem
img4.addEventListener("click", function() {
  // Verifica se o áudio está tocando
  if (audio4.paused) {
    // Inicia a reprodução do áudio
    audio4.play();
  } else {
    // Pausa a reprodução do áudio
    audio4.pause();
  }
});
// Adiciona um ouvinte de eventos de clique à imagem
img5.addEventListener("click", function() {
  // Verifica se o áudio está tocando
  if (audio5.paused) {
    // Inicia a reprodução do áudio
    audio5.play();
  } else {
    // Pausa a reprodução do áudio
    audio5.pause();
  }
});
// Adiciona um ouvinte de eventos de clique à imagem
img6.addEventListener("click", function() {
  // Verifica se o áudio está tocando
  if (audio6.paused) {
    // Inicia a reprodução do áudio
    audio6.play();
  } else {
    // Pausa a reprodução do áudio
    audio6.pause();
  }
});