
//Ator
let yAtor = 365;
let xAtor = 100;
let colidiu = false;
let placar = 0;

function mostrarPlacar(){
  if(yAtor < 15){
  placar += 1;
  voltaParaPosiçaoInicial();
  somPonto.play();
  }
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,255));
  text (placar,160,30)
}

function verificarColisao(){
  
for(let i=0; i<imagemDoCarro.length; i++ )

{ 
  colidiu = collideRectCircle(xCarros[i],yCarros[i],comprimetoCarros[i],altura,xAtor,yAtor,15);
    if(colidiu){
      console.log("colidiu");
      voltaParaPosiçaoInicial();
      somColidiu.play();
      
      if(placar >0)
      placar -= 1;
      
  }
 }
}

function voltaParaPosiçaoInicial(){
yAtor = 366
}

//mostar ATOR
function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);

}
//movimento do ATOR
function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    if(yAtor > 5)
  yAtor -= 3;//y +=5;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor < 366)
  yAtor +=3;//
  }
  }