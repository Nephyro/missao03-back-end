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

entradaDeDados.question('Qual o gênero do aluno(a)? \nFeminino ou Masculino: ', function(generoAluno){
    let sexoAluno = generoAluno.trim().toLowerCase()

    entradaDeDados.question('Qual o gênero do professor(a)? \nFeminino ou Masculino: ', function(generoProfessor){
        let sexoProfessor = generoProfessor.trim().toLowerCase()

        entradaDeDados.question('Digite o nome do professor(a): ', function(nomeDoProfessor){
            let nomeProfessor = nomeDoProfessor

            entradaDeDados.question('Digite o nome do aluno(a): ', function(nomedoAluno){
                let nomeAluno = nomedoAluno

                entradaDeDados.question('Digite o curso que o aluno(a) está: ', function(curso){
                    let cursoAluno = curso

                    entradaDeDados.question('Digite a disciplina do curso: ', function(disciplina){
                        let disciplinaCurso = disciplina

                        entradaDeDados.question('Digite a nota 1: ', function(valor1){
                            let nota1 = Number(valor1)

                            entradaDeDados.question('Digite a nota 2: ', function(valor2){
                                let nota2 = Number(valor2)

                                entradaDeDados.question('Digite a nota 3: ', function(valor3){
                                    let nota3 = Number(valor3)

                                    entradaDeDados.question('Digite a nota 4: ', function(valor4){
                                        let nota4 = Number(valor4)

                                    let validar = sistem.tratrativas(nota1, nota2, nota3, nota4, nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, cursoAluno, disciplinaCurso)
                                    let media = sistem.mediaAluno(nota1, nota2, nota3, nota4)
                                    let statusAluno = sistem.situacaoAluno(nota1, nota2, nota3, nota4)
                                    let validarGenero = sistem.validacaoGenero(sexoAluno, sexoProfessor)

                                    if(media.situacaoAluno == 'APROVADO!' || validar !== false){
                                        console.log(`\n${validarGenero.aluno}: ${nomeAluno} foi ${statusAluno} na disciplina ${disciplinaCurso}
                                                    \nCurso: ${cursoAluno}
                                                    \n${validarGenero.professor}: ${nomeProfessor}
                                                    \nMédia final: ${media.toFixed(2)}\n`)
                                                entradaDeDados.close()
                                    }else if(media.situacaoAluno == 'REPROVADO!'){
                                        console.log(`\n${validarGenero.aluno}: ${nomeAluno} foi ${statusAluno} na disciplina ${disciplinaCurso}
                                                    \nCurso: ${cursoAluno}
                                                    \n${validarGenero.professor}: ${nomeProfessor}
                                                    \nMédia final: ${media.toFixed(2)}\n`)
                                    }else if(media.sexoAluno == 'EXAME!'){
                                        entradaDeDados.question('Digite a nota do exame: ', function(notaExtra){
                                            let notaExame = Number(notaExtra)

                                            let mediaFinalAluno = sistem.mediaFinal(nota1, nota2, nota3, nota4, notaExame)

                                            let mediaExame = sistem.mediaFinal(media, notaExame)

                                            

                                        })
                                    }



                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

// if(['feminino', 'feminina'].includes(sexoAluno)){
        //     entradaDeDados.question('Digite o nome da aluna: ', function(identidadeAluno){
        //         let nomeAluno = identidadeAluno

        //         entradaDeDados.question('Digite a nota 1: ', function(valor1){
        //             let nota1 = valor1

        //             entradaDeDados.question('Digite a nota 2: ', function(valor2){
        //                 let nota2 = valor2

        //                 entradaDeDados.question('Digite a nota 3: ', function(valor3){
        //                     let nota3 = valor3

        //                     entradaDeDados.question('Digite a nota 4: ', function(valor4){
        //                         let nota4 = valor4


        //                         let verificacao = sistem.tratrativas(nota1, nota2, nota3, nota4, nomeAluno, sexoAluno)
        //                         let calculoMedia = sistem.mediaAluno(nota1, nota2, nota3, nota4)
        //                         let situacaoDoAluno = sistem.situacaoAluno(nota1, nota2, nota3, nota4)

        //                         if(verificacao !== false){
        //                             console.log('ERRO! Informações inválidas')
        //                         }else{


        //                             if(['feminino', 'feminina'].includes(sexoProfessor)){
        //                                 let
        //                             }else if(['masculino', 'masculina'].includes(sexoProfessor)){
        //                                 return 'Professor'
        //                             }

                                    
        //                             console.log(`\nA aluna ${nomeAluno} foi ${situacaoDoAluno} na disciplina **** 
        //                                          \nCurso: Desenvolvimento de Sistemas
        //                                          \n${escolhaProfessor}
        //                                          \nMédia Final: ${calculoMedia.toFixed(2)}\n`)
        //                             entradaDeDados.close()
        //                         }
        //                     })
        //                 })
        //             })
        //         })
        //     })
        // }else if(['masculino', 'masculina'].includes(sexoAluno)){
        //     entradaDeDados.question('Digite o nome do aluno: ', function(identidadeAluno){
        //         let nomeAluno = identidadeAluno

        //         entradaDeDados.question('Digite a nota 1: ', function(valor1){
        //             let nota1 = valor1

        //             entradaDeDados.question('Digite a nota 2: ', function(valor2){
        //                 let nota2 = valor2

        //                 entradaDeDados.question('Digite a nota 3: ', function(valor3){
        //                     let nota3 = valor3

        //                     entradaDeDados.question('Digite a nota 4: ', function(valor4){
        //                         let nota4 = valor4


        //                         let verificacao = sistem.tratrativas(nota1, nota2, nota3, nota4, nomeAluno, sexoAluno)
        //                         let calculoMedia = sistem.mediaAluno(nota1, nota2, nota3, nota4)
        //                         let situacaoDoAluno = sistem.situacaoAluno(nota1, nota2, nota3, nota4)

        //                         if(verificacao !== false){
        //                             console.log('ERRO! Informações inválidas')
        //                         }else{
        //                             console.log(`\nO aluno ${nomeAluno} foi ${situacaoDoAluno} na disciplina **** 
        //                                          \nCurso: Desenvolvimento de Sistemas
        //                                          \n${escolhaProfessor}
        //                                          \nMédia Final: ${calculoMedia.toFixed(2)}\n`)
        //                             entradaDeDados.close()
        //                         }
        //                     })
        //                 })
        //             })
        //         })
                
        //     })
        // }