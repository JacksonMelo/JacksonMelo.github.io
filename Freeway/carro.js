//carros.js
//carro
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,98,150,260,210,318,];
let velocidadeCarros = [6,2,5,4,3.5,3];
let comprimetoCarros = [50,50,80,50,50,80,];
let altura = 40;

//mostrar CARRO
function mostraCarro(){
  //print("qunatidade de carros: "+imagensCarros.length);
  for(let i=0; i< imagemDoCarro.length; i++){
  image(imagemDoCarro[i],xCarros[i] , yCarros[i], comprimetoCarros[i],altura);
  }
  //image(imagemDoCarro[0],xCarros[0] , yCarros[0], comprimetoCarros[0],altura);
  
  //image(imagemDoCarro[1],xCarros[1] , yCarros[1], comprimetoCarros[1],altura);
  
  //image(imagemDoCarro[2],xCarros[2], yCarros[2], comprimetoCarros[2],altura);
}

//movimento do CARRO
function movimentoCarro(){
 for(let i=0; i< imagemDoCarro.length; i++ ){
  xCarros[i] -= velocidadeCarros[i];

  //xCarros[0] -= velocidadeCarros[0];
 // xCarros[1] -= velocidadeCarros[1]; 
  //xCarros[2] -= velocidadeCarros[2];

  
    if (xCarros[i] < -50){
    xCarros[i] = 600;
    }
   
}   
  
  //if (xCarros[1] < -50){
  //xCarros[1] = 600;
  //}
  
  //if (xCarros[2] < -50){
  //xCarros[2]= 600;
  //}


}
