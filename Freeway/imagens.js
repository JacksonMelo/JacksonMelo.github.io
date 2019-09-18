//Imagens.js
//Fefinição das variáveis do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro = [];

let trilhaSonora;
let somcolidiu;
let somPonto;

function preload(){
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
  //Pré-carregamento das imagens nas variáveis
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro[0] = loadImage("imagens/carro-1.png");
  imagemDoCarro[1] = loadImage("imagens/carro-2.png");
  imagemDoCarro[2] = loadImage("imagens/carro-3.png");
  imagemDoCarro[3] = loadImage("imagens/carro-1.png");
  imagemDoCarro[4] = loadImage("imagens/carro-2.png");
  imagemDoCarro[5] = loadImage("imagens/carro-3.png");
} 