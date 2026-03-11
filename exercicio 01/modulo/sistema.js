/******************************************************************************************************************
 * Objetivo: Arquivo responsável pelos calculos e tratrativas da aplicação IMC
 * Data: 27/02/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
// ******************************************************************************************************************/

// Função responsável pela tratação das entradas
const tratativa = function(nomeUsuario, peso, altura){
    let kg      = Number(String(peso).replace(',', '.'))
    let alt     = Number(String(altura).replace(',', '.'))
    let nome    = nomeUsuario

    if(isNaN(kg) || kg == '' || isNaN(alt) || alt == '' || !isNaN(nome) || nome == ''){
        return false
    }else{
        return true
    }
}


// Função para calcular o Imc
const calculoImc = function(peso, altura){

    let kg      = Number(String(peso).replace(',', '.'))
    let alt     = Number(String(altura).replace(',', '.'))
   
    if(alt > 3){
        alt = alt / 100
    }
    
    let imc     = kg / (alt * alt)
    return imc
    
}


// Função para identificar a situação do usuário
const tabelaImc = function(peso, altura){
    
    let imc = calculoImc(peso, altura)
    let situacao

    if(imc < 18.5)
        situacao = 'Magreza (abaixo do peso)'
    else if(imc < 24.9)
        situacao = 'Peso normal'
    else if(imc < 29.9)
        situacao = 'Sobre preso (acima do peso)'
    else if(imc < 34.9)
        situacao = 'Obesidade I'
    else if(imc < 39.9)
        situacao = 'Obesidade II'
    else if(imc > 40)
        situacao = 'Obesidade III'

    return situacao
}



module.exports = {
    tratativa,
    calculoImc,
    tabelaImc
}