/******************************************************************************************************************
 * Objetivo: Criação de uma aplicação para calcular o IMC
 * Data: 27/02/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

const readline = require('readline')
const sistem = require('./modulo/sistema.js')

const entradaDeDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
})

console.log(`\n**************************************
             \n Boas Vindas ao Sistema Calcular IMC!
             \n**************************************\n`)


entradaDeDados.question('Digite seu nome: ', function(nome){
    let nomeUsuario = nome

    entradaDeDados.question('Digite seu peso em kg: ', function(valor1){
        let peso = valor1

        entradaDeDados.question('Digite sua altura: ', function(valor2){
            let altura = valor2

            
            let calcular = sistem.calculoImc(peso, altura)
            let verificacao = sistem.tratrativa(nomeUsuario, peso, altura)
            let situacaoUsuario = sistem.tabelaImc(peso, altura)

            if(verificacao !== true){
                console.log('ERRO! Informações inválidas')
                entradaDeDados.close()
            }else if(calcular !== false){
                console.log(`\n\n***********************RESULTADO***********************
                             \nNome do(a) usuário(a): ${nomeUsuario}
                             \nSeu IMC foi: ${calcular.toFixed(2)}
                             \nVocê está com: ${situacaoUsuario}
                             \n******************************************************\n\n`)
                entradaDeDados.close()
            }

            
        })
    })
})

