/******************************************************************************************************************
 * Objetivo: Arquivo responsável pelo funcionamento e criação da tabuada
 * Data: 04/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

// Tratar valores inseridos para aceitar apenas números
const tratacao = function(tabInicial, numInicial, numFinal, tabFinal){

    if(tabInicial == '' || tabFinal == '' || numInicial == '' || numFinal == ''){
        return 'Erro! Campos não podem ser vazios'
    }

    let tab1 = Number(tabInicial)
    let tab2 = Number(tabFinal)
    let num1 = Number(numInicial)
    let num2 = Number(numFinal)

    if(isNaN(tab1) || isNaN(tab2) || isNaN(num1) || isNaN(num2) ){
        return 'Valores inválidos! Digite apenas números'
    }

    if(tab1 == 0 || tab2 == 0){
        return 'Erro! Tabuada não pode ser 0'
    }

    return true
}

// Validar número minímo e máximo tanto das tabuadas quanto dos contadores
const validarTab = function(tabInicial, numInicial, numFinal, tabFinal){
    let tab1 = Number(tabInicial)
    let tab2 = Number(tabFinal)
    let num1 = Number(numInicial)
    let num2 = Number(numFinal)


    if(tab1 < 2 || tab1 > 100 || tab2 < 2 || tab2 > 100){
        return 'Valor inválido! O número da tabuada deve estar entre 2 e 100'
    }

    if(num1 < 0 || num1 > 50 || num2 < 0 || num2 > 50){
        return 'Valor inválido! O número do contador deve estar entre 0 e 50'
    }
}

// Função para criar a tabuada inicial e adicionar mais tabuadas
const fluxoTab = function(tabInicial, numInicial, numFinal, tabFinal){
    let tabI        = Number(tabInicial)
    
    let limite      = Number(numFinal)
    let tabF        = Number(tabFinal)

    while(tabI <= tabF){

        console.log(`\n********************
                     \n Tabuada do ${tabI}`)

        let cont = Number(numInicial)

        while(cont <= limite){
            let resultado = tabI * cont
            console.log(`${tabI} x ${cont} = ${resultado}`)

            cont += 1
        }

        tabI += 1
    }
}


module.exports = {
    tratacao,
    validarTab,
    fluxoTab,
}
