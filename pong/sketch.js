//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [242, 78, 7];
let velocidadeX = 5;
let velocidadeY = 5;

//Variáveis Raquete
let alturaRaquete = 100;
let larguraRaquete = 20;

//Variáveis Minha Raquete
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = 0;//preto

//Variáveis Raquete do OPonente
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [255,0,0]//vermelho

//Placar
let pontosMeus = 0; 
let pontosOponentes = 0

let ponto;
let raquetada;

function preLoad(){
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
}

//Configuração Inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("Largura: "+largura+" Altura: "+altura);
}

//Desenha - Lopping infinito while(1)
function draw() {
  background(0,255,255);
  //se os pontos meus nao forem maires ou 
  //iguais a 10 ou os pontos do oponentes
  //nao forem maiores ou iguais a 10, entao
  //JOGA!!!!
  if(!(pontosMeus >= 10 || pontosOponentes >= 10))
  jogo();
 else
    mostrarVencedor();

  function mostrarVencedor(){
    if(pontosMeus >= 10){
      fill(255,130,0);
      rect(300,0,300,400);
      textAlign(CENTER);
      fill(0);
      text(30);
      text("Lado direito é campeão",300,200);
    }else{
      fill(255,130,0);
      rect(0,0,300,400);
      textAlign(CENTER);
      fill(0);
      text(30);
      text("Lado esquerdo é campeão",300,200);
    }
  
  }
  
    
  function jogo(){
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete();
  mostrarPlacar();
  mostrarPontos();
  }
  
  
  function mostrarPlacar(){
    textSize(30);
    strokeWeight(4);
    stroke(93, 36, 173);
    
    fill(0, 200, 0);
    rect(430,12,60,35,10);
    rect(130,12,60,35,10);
    
    fill(255);
    textAlign(CENTER);
    text(pontosMeus, 450, 40);
    text(pontosOponentes, 150, 40);
  }
  
  function mostrarPontos(){
    if(xBolinha < 15){
      pontosMeus += 1;
    }
    if(xBolinha > 585){
      pontosOponentes += 1;
    }
  }
 
  //Colisão Vertical com bordas superior e inferior
  if(yBolinha + raio > altura || yBolinha - raio < 0){
   velocidadeY *= -1; }
  //Não apaga esse bigode!
} //draw - desenha

function verificaColisaoRaquete(){
  
 if(xBolinha + raio > xMinhaRaquete && 
    yBolinha -raio < yMinhaRaquete + alturaRaquete &&
    yBolinha +raio > yMinhaRaquete){
   
   if(!(xBolinha < 300 && velocidadeX > 0 ||
       xBolinha > 300 && velocidadeX < 0)){
    velocidadeX *= -1;
      }
     }
   if(xBolinha - raio < xRaqueteOponente + larguraRaquete && 
    yBolinha - raio < yRaqueteOponente + alturaRaquete &&
    yBolinha + raio > yRaqueteOponente){
    
   if(!(xBolinha < 300 && velocidadeX > 0 ||
       xBolinha > 300 && velocidadeX < 0)){
    velocidadeX *= -1;
      }
     }
    }

function movimentaMinhaRaquete(){ 
  
  if(keyIsDown(UP_ARROW)){//SETA_PARA_CIMA - 87 w
    yMinhaRaquete -= 5;//Velocidade da Raquete
    if(yMinhaRaquete < 0){
     yMinhaRaquete = 0;
    }
    else{
   yMinhaRaquete -= 5;//Velocidade da Raquete
    }    
  }
  if(keyIsDown(DOWN_ARROW)){//SETA_PARA_BAIXO - 83 S
    yMinhaRaquete += 5;//Velocidade da Raquete
    if(yMinhaRaquete > 300){
     yMinhaRaquete =300;
    }
    else{
   yMinhaRaquete += 5;//Velocidade da Raquete
    }  
  }
}

function movimentaRaqueteOponente(){ 
  
  if(keyIsDown(87)){//SETA_PARA_CIMA - 87 w
   yRaqueteOponente -= 5;//Velocidade da Raquete
     if(yRaqueteOponente < 0){
     yRaqueteOponente = 0;
    }
    else{
   yRaqueteOponente -= 5;//Velocidade da Raquete
    }   
  }
  if(keyIsDown(83)){//SETA_PARA_BAIXO - 83 S
    yRaqueteOponente += 5;//Velocidade da Raquete
     if(yRaqueteOponente > 300){
     yRaqueteOponente =300;
    }
    else{
   yRaqueteOponente += 5;//Velocidade da Raquete
    }  
  }
}


function mostraRaquete(){
  //minha raquete a direita
 fill(corMinhaRaquete);
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  
  //raquete Do Oponete á esquerda
  fill(corRaqueteOponente);
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}



function verificaColisao(){
 //Colisão Horizontal com bordas laterais
  if (xBolinha + raio > largura || xBolinha - raio <0){
    //velocidadeX = velocidadeX * -1
   velocidadeX *= -1; }
}


function movimentaBolinha(){
  if(frameCount > 60 ){
  //Velocidade Horizontal
  xBolinha = xBolinha + velocidadeX ;//Incremento de x
  //Velocidade Vertical
  yBolinha = yBolinha + velocidadeY;//Incremento de y
  }
}

function mostraBolinha(){
  noStroke();
  fill(corBolinha);
  circle(xBolinha,yBolinha,diametro);
 
}

