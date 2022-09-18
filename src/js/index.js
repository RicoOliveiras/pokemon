/*
    OBJETIVO 1 - quando clicarmos na seta avançar temos que mostrar o proximo cartáo da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
        - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
        - passo 3 - fazer aparecer o próximo cartão da lista
        - passo 4 - buscar o cartã selecionado e esconder

    OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o proximo cartáo da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
        - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
        - passo 3 - fazer aparecer o cartão anterior da lista
        - passo 4 - buscar o cartã selecionado e esconder

*/

const btnAvancar = document.getElementById("btn-avancar"); /* variável btnAvancar irá receber o elemento BUTTON */ 
const btnVoltar = document.getElementById("btn-voltar");  /* variável btnVoltar irá receber o elemento BUTTON */ 
const cartoes = document.querySelectorAll(".cartao");  /* querySelectorAll irá selecionar todos os objetos da classe cartao, e colocorá na variável cartoes */
let cartaoAtual = 0; /* contador que inicia do 0 */


function esconderCartaoSelecionado (){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao (indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

/* botão avançar */
btnAvancar.addEventListener("click", function(){ /* variável btnAvancar terá um evento de click e uma funcão */

    if (cartaoAtual === 2 ) return; /* código parar */

    esconderCartaoSelecionado();

    cartaoAtual ++;
    cartoes[cartaoAtual].classList.add("selecionado");
   
});

/* botão voltar */
btnVoltar.addEventListener("click", function() { /* variável btnVoltar irá receber o elemento BUTTON */ 

    if (cartaoAtual === 0) return; /* código parar */

    esconderCartaoSelecionado();

    cartaoAtual --;
    mostrarCartao(cartaoAtual);
}
)






