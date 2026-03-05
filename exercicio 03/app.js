/******************************************************************************************************************
 * Objetivo: Criação de uma aplicação para fazer tabuadas
 * Data: 27/02/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o número da tabuada inicial entre 2 à 100: ', function(valor1){
    let tabInicial = valor1

    entradaDeDados.question('Digite o contador inicial sendo entre 0 à 50: ', function(valor2){
        let numInicial = valor2

        entradaDeDados.question(`Digite o contador final, deve ser maior e diferente de ${numInicial}: `, function(valor3){
            let numFinal = valor3
        
            entradaDeDados.question(`Digite o número da tabuada final, deve se diferente de ${tabInicial} e até 100: `, function(valor4){
                let tabFinal = valor4

                const tabSistem = require('./modulo/tabuadaCalculos.js')

                let verificar = tabSistem.tratacao(tabInicial, numInicial, numFinal, tabFinal)
                let validacaoTab = tabSistem.validarTab(tabInicial, numInicial, numFinal, tabFinal)

                if(verificar !== true){
                    console.log(verificar)
                    entradaDeDados.close()
                }else if(validacaoTab !== true){
                    console.log(validacaoTab)
                    entradaDeDados.close()
                }else{
                    tabSistem.fluxoTab(tabInicial, numInicial, numFinal, tabFinal)
                    entradaDeDados.close()
                }
            })
        })    
    })
})