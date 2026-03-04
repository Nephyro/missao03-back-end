/******************************************************************************************************************
 * Objetivo: Arquivo responsável pelo funcionamento e separação de números ímpares e pares
 * Data: 04/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

const tratativa = function(numInicial, numFinal){

    if(numInicial == '' || numFinal == ''){
        return 'Erro! Campos não podem ficar vazios'
    }

    let num1 = Number(numInicial)
    let num2 = Number(numFinal)

    if(isNaN(num1) || isNaN(num2)){
        return 'Erro! Digite apenas números'
    }

    return true
}

const verificacaoNumeros = function(numInicial, numFinal){
    let num1 = Number(numInicial)
    let num2 = Number(numFinal)

    if(num1 < 0 || num1 > 500){
        return 'Valor inválido! valor inicial deve estar entre 0 à 500'
    }

    if(num2 < 100 || num2 > 1000){
        return 'Valor inválido! valor final deve estar entre 100 à 1000'
    }

    if(num1 == num2){
        return `Erro! Valor ${num1} e ${num2} são iguais e não é possível prosseguir`
    }

    return true
}

module.exports = {
    tratativa,
    verificacaoNumeros,
}

console.log(tratativa(a))