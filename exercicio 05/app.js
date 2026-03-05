/******************************************************************************************************************
 * Objetivo: Aplicação para separar números ímpares de números pares
 * Data: 05/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(`
            \n***************************************************
            \n*** SEJA BEM-VINDO(A) AO SEPARADOR DE NÚMEROS ***
            \n***************************************************\n`)

entradaDeDados.question('Digite um número inícial entre 0 à 500: ', function(valor1){
    let numInicial = valor1

    entradaDeDados.question('Digite um número final entre 100 à 1000: ', function(valor2){
        let numFinal = valor2

        const separar = require('./modulo/separacaoSistem.js')

        let verificacao = separar.tratativa(numInicial, numFinal)
        let verificarNumero = separar.verificacaoNumeros(numInicial, numFinal)

        if(verificacao !== true){
            console.log(verificacao)
            entradaDeDados.close()
        }else if( verificarNumero !== true){
            console.log(verificarNumero)
            entradaDeDados.close()
        }else{
            separar.separacaoNumero(numInicial, numFinal)
            entradaDeDados.close()
        }
    })
})