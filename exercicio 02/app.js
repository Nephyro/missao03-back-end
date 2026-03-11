/******************************************************************************************************************
 * Objetivo: Criação de uma aplicação para calcular a média dos alunos
 * Data: 05/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.1 
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
                                        let validarGenero = sistem.validacaoGenero(sexoAluno, sexoProfessor, statusAluno)
                                        
                                        if(validar){

                                            if(statusAluno === 'EXAME!'){
                                                entradaDeDados.question(`\n${validarGenero.aluno} ${nomeAluno} ficou de exame, por favor, informe a nota do exame para calcular a média final e a situação final do aluno: `, function(valorExame){
                                                    let notaExame = Number(valorExame)

                                                    if(isNaN(notaExame)){
                                                        console.log('Erro! Digite apenas números válidos.')
                                                        entradaDeDados.close()
                                                        return
                                                    }else if(notaExame == ''){
                                                        console.log('Erro! Preencha o campo com uma nota válida.')
                                                        entradaDeDados.close()
                                                        return
                                                    }else if(notaExame < 0 || notaExame > 100){
                                                        console.log('Erro! Digite uma nota válida entre 0 e 100.')
                                                        entradaDeDados.close()
                                                        return
                                                    }


                                                    let exame = sistem.mediaFinal(nota1, nota2, nota3, nota4, notaExame)

                                                    console.log(`Nota do exame: ${notaExame}`)
                                                    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`)
                                                    console.log(`Média do exame: ${exame.mediaExame.toFixed(2)}`)
                                                    console.log(`Situação final: ${exame.statusFinal}`)

                                                    entradaDeDados.close()
                                                })

                                            }else{    

                                                console.log('\nRELATÓRIO DO ALUNO\n')
                                                console.log(`${validarGenero.aluno} ${nomeAluno} foi ${validarGenero.status} na disciplina ${disciplinaCurso}.`)
                                                console.log(`Curso: ${cursoAluno}`)
                                                console.log(`${validarGenero.professor}: ${nomeProfessor}`)
                                                console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
                                                console.log(`Média Final: ${media.toFixed(2)}\n`)
                                                
                                                entradaDeDados.close()
                                            }
                                        }else{
                                            console.log('Erro! Verifique as informações digitadas.')
                                            entradaDeDados.close()
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