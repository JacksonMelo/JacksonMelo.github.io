function setup() { //Preparação
  createCanvas(500, 400);
  trilhaSonora.loop();
}

//Começo do draw
function draw() { //Desenha o jogo
  background(imagemDaEstrada);
  movimentoAtor();
  movimentoCarro();
  mostraAtor();
  mostraCarro();
  verificarColisao();
  mostrarPlacar();
}//Fim draw


