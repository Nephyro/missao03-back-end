/******************************************************************************************************************
 * Objetivo: Criação de aplicação para forar números
 * Data: 04/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o número para ser fatorado: ', function(valor1){
    let numeroDigitado = valor1

    const calc = require('./modulo/fatorialCalc.js')

    let verificacao = calc.tratativa(numeroDigitado)

    if(verificacao !== true){
        console.log(verificacao)
        entradaDeDados.close()
    }else{
        calc.calcularFatorial(numeroDigitado)
        entradaDeDados.close()
    }
})