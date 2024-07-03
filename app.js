let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute =  document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
      exibirTextoNaTela("h1", "Acertou!");
      let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela("p", mensagemTentativas);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
          }
          tentativas ++;
          limparCampo();
      }
}



/*
Exercicios 

Criar uma função que exibe "Olá, mundo!" no console.
function exibirOla() {
  console.log("Olá, mundo!");
}

exibirOla();
Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Alice");
Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
  return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);
Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);
Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);
Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 
*/

