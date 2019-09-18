function setup() {
  createCanvas(500, 400);
//trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
 if(!(placar >= 10 || placar2 >=10))
    jogo();
  else
    mostraVencedor();
  
   //fim do draww
}
 function mostraVencedor(){
    if(placar >= 10){
      fill(255,130,0);
      rect(300,0,0,0);
      textAlign(CENTER);
      fill(0);
      text(30);
      text("LADO ESQUERDO É CAMPEÃO",300,200);
    }else{
      
      if (placar2 >=10){
      fill(255,130,0);
      rect(0,0,0,0);
      textAlign(CENTER);
      fill(0);
      text(30);
      text("LADO DIREITO É CAMPEÃO",300,200);
    }
          }
  
  }
  
function jogo(){
 mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentoCarro();
  verificaColisao();
  mostraPlacar ();
  mostraAtor2();
  movimentaAtor2();
  verificaColisao2();
  mostraPlacar2();
  mostraVencedor();
}

