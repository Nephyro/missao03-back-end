/******************************************************************************************************************
 * Objetivo: Criação de uma aplicação para calcular a média dos alunos
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

console.log(`\n*******************************************
             \n Boas Vindas ao Sistema Calcular de médias
             \n*******************************************\n`)

