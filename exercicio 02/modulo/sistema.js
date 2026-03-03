/******************************************************************************************************************
 * Objetivo: Arquivo responsável pelos calculos e tratrativas da aplicação Médias Escolares
 * Data: 27/02/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.0 
 ******************************************************************************************************************/

const tratrativas = function(nota1, nota2, nota3, nota4, nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, cursoAluno, disciplinaCurso, notaExame){
    let valor1 = Number(String(nota1).replace(',', '.'))
    let valor2 = Number(String(nota2).replace(',', '.'))
    let valor3 = Number(String(nota3).replace(',', '.'))
    let valor4 = Number(String(nota4).replace(',', '.'))

    let validacaoGenero = ['feminino', 'feminina', 'masculino', 'masculina']

    let nomeDoAluno = nomeAluno
    let nomeDoProfessor = nomeProfessor
    let sexo1 = sexoAluno
    let sexo2 = sexoProfessor
    let notaAdicional = Number(String(notaExame).replace(',', '.'))
    let curso = cursoAluno
    let disciplina = disciplinaCurso

    if(isNaN(valor1) || valor1 == '' || valor1 < 0 || valor1 > 100 || isNaN(valor2) || valor2 == '' || valor2 < 0 || 
        valor2 > 100 || isNaN(valor3) || valor3 == '' || valor3 < 0 || valor3 > 100 || isNaN(valor4) || valor4 == '' || valor4 < 0 || 
        valor4 > 100 || !isNaN(nomeDoAluno) || nomeDoAluno == '' || !isNaN(nomeDoProfessor) || !isNaN(curso) || curso == '' || !isNaN(disciplina) ||
        disciplina == '' || nomeDoProfessor == '' || !isNaN(sexo1) || sexo1 == '' || !isNaN(sexo2) || sexo2 == '' || isNaN(notaAdicional) ||
        notaAdicional == '' || !validacaoGenero.includes(sexo1.toLowerCase()) || !validacaoGenero.includes(sexo2.toLowerCase())){
            return false
        }else{
            return true
        }
}

const mediaAluno = function(nota1, nota2, nota3, nota4){
    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)
    
    let media = (valor1 + valor2 + valor3 + valor4) / 4
    
    return media
}

const situacaoAluno = function(nota1, nota2, nota3, nota4){
    let media = mediaAluno(nota1, nota2, nota3, nota4)
    let situacao

    if(media >= 70){
        situacao = 'APROVADO!'
    }else if(media < 50){
        situacao = 'REPROVADO!'
    }else{
        situacao = 'EXAME!'
    }

    return situacao
}

const mediaFinal = function(media, notaExame){
    let situacao        = situacaoAluno(nota1, nota2, nota3, nota4)
    let mediaDoAluno    = mediaAluno(nota1, nota2, nota3, nota4)
    let notaAdicional   = Number(String(notaExame).replace(',', '.'))
    let situacaoFinal
    let situacaoDasituacao

    if(situacao == 'EXAME!'){
        situacaoFinal = (mediaDoAluno + notaAdicional) / 2

        if(situacaoFinal > 60){
            situacaoDasituacao = 'APROVADO NO EXAME!'
        }else{
            situacaoDasituacao = 'REPROVADO NO EXAME!'
        }
    }

    return situacaoDasituacao
}

const validacaoGenero = function(sexoAluno, sexoProfessor){
    

    let genero = {
        aluno: 'O aluno',
        professor: 'Professor',
        status: situacaoAluno
    }

    if(['feminina', 'feminino'].includes(sexoAluno)){
        genero.aluno = 'A aluna'

        if(mediaAluno === 'APROVADO!') genero.status = 'APROVADA!'
        if(mediaAluno === 'REPROVADO!') genero.status = 'REPROVADA!'
        }

    if(['feminina', 'feminino'].includes(sexoProfessor)){
        genero.professor = 'Professora'
    }
    
    return genero
}

module.exports = {
    tratrativas,
    mediaAluno,
    situacaoAluno,
    mediaFinal,
    validacaoGenero
}