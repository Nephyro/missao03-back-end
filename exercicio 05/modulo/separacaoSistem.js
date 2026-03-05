/******************************************************************************************************************
 * Objetivo: Arquivo responsável pelo funcionamento e separação de números ímpares e pares
 * Data: 04/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

// Função responsável pela tratação de campos vazios e não números
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

// Função para verificar se o número inicial e final estão dentro dos parâmetros estabelecidos
const verificacaoNumeros = function(numInicial, numFinal){
    let num1 = Number(numInicial)
    let num2 = Number(numFinal)

    if(num1 < 0){
        return 'Valor inválido! Valor inicial não pode ser menor que 0'
    }else if(num1 > 500){
        return 'Valor inválido! Não é permitido número acima de 500'
    }

    if(num2 < num1){
        return `Erro! Não é possível separar devido o número final ${num2} ser menor que o número inícial ${num1}`
    }

    if(num2 < 100 || num2 > 1000){
        return 'Valor inválido! valor final deve estar entre 100 à 1000'
    }

    if(num1 == num2){
        return `Erro! Valor ${num1} e ${num2} são iguais e não é possível prosseguir`
    }

    return true
}

// Função para separar e mostrar quantos números tem sendo ímpares ou pares
const separacaoNumero = function(numeroInicial, numeroFinal){
    let numIni = Number(numeroInicial)
    let numFim = Number(numeroFinal)

    // os contadores começaram com valor 0
    let contPares = 0
    let contImpares = 0

    console.log('\nLista de números Pares')
    // Crio a variável cont que receberá o valor inicial entre 0 a 500  -> let cont = numIni
    // Defino que se cont for menor ou igual ao numero final digitado   -> cont <= numFim
    // Adiciono mais 1 número com o anterior para aumentar o valor      -> cont++
    for(let cont = numIni; cont <= numFim; cont++){

        // Condição para ser par
        // Se o cont for dividido por 2 e o menor resultado de várias 
        // divisões do mesmo número for igual a 0 então será par
        if(cont % 2 == 0){
            console.log(cont) // Adicionará o valor da soma do número anterior com mais 1 e imprimirá em baixo até chegar no número final
            contPares++       // Adiciona mais 1 no contador para a qtde de números imprimidos
        }
    }
    console.log(`\nQtde de números encontrados: ${contPares}`)


    console.log('\nLista de números Impares')
    for(cont = numIni; cont <= numFim; cont++){

        if(cont % 2 != 0){ // Caso o valor da divisão entre o número por 2 seja diferente de 0, então será considerada um número ímpar
            console.log(cont)
            contImpares++
        }
    }
    console.log(`\nQtde de números encontrados: ${contImpares}`)
}

module.exports = {
    tratativa,
    verificacaoNumeros,
    separacaoNumero
}

