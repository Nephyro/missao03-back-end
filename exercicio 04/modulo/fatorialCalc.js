/******************************************************************************************************************
 * Objetivo: Arquivo responsável pelo fatoramento de números
 * Data: 04/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

// Função para tratar valores não listados
const tratativa = function(numeroDigitado){
    if(numeroDigitado == ''){
        return 'Erro! Campo não pode ficar vazio'
    }

    let n1 = Number(numeroDigitado)

    if(n1 == 0){
        return 'Não existe fatorial de 0'
    }

    if(n1 == 1){
        return 'Não é possível fatorar 1'
    }

    if(isNaN(n1)){
        return 'Erro! valor inválido, insira apenas números'
    }

    return true
}

// Função para calcular o fatorial
const calcularFatorial = function(numeroDigitado){
    let numero = Number(numeroDigitado)
    let cont = numero
    let resultado = 1
    let expressao = ''

    while(cont > 0){
        resultado *= cont
        expressao += cont
        
        if(cont > 1 ){
            expressao += ' x '
        }

        cont--
    }
    console.log(`${expressao} = ${resultado}`)
}

module.exports = {
    tratativa,
    calcularFatorial
}