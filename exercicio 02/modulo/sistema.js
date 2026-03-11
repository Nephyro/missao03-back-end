/******************************************************************************************************************
 * Objetivo: Arquivo responsável pelos calculos e tratrativas da aplicação Médias Escolares
 * Data: 05/03/2026
 * Autor: Anderson Ribeiro
 * Versão: 1.1
 ******************************************************************************************************************/

// Função para tratar as entradas gerais
const tratrativas = function(nota1, nota2, nota3, nota4, nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, cursoAluno, disciplinaCurso){
    let valor1 = Number(String(nota1).replace(',', '.'))
    let valor2 = Number(String(nota2).replace(',', '.'))
    let valor3 = Number(String(nota3).replace(',', '.'))
    let valor4 = Number(String(nota4).replace(',', '.'))

    let validacaoGenero = ['feminino', 'feminina', 'masculino', 'masculina']

    let nomeDoAluno = nomeAluno
    let nomeDoProfessor = nomeProfessor
    let sexo1 = sexoAluno
    let sexo2 = sexoProfessor
    let curso = cursoAluno
    let disciplina = disciplinaCurso

    if(isNaN(valor1) || valor1 == '' || valor1 < 0 || valor1 > 100 || isNaN(valor2) || valor2 == '' || valor2 < 0 || 
        valor2 > 100 || isNaN(valor3) || valor3 == '' || valor3 < 0 || valor3 > 100 || isNaN(valor4) || valor4 == '' || valor4 < 0 || 
        valor4 > 100 || !isNaN(nomeDoAluno) || nomeDoAluno == '' || !isNaN(nomeDoProfessor) || !isNaN(curso) || curso == '' || !isNaN(disciplina) ||
        disciplina == '' || nomeDoProfessor == '' || !isNaN(sexo1) || sexo1 == '' || !isNaN(sexo2) || sexo2 == '' ||
        !validacaoGenero.includes(sexo1) || !validacaoGenero.includes(sexo2)){
            return false
        }else{
            return true
        }
}


// Função responsável pelo calculo da media do aluno
const mediaAluno = function(nota1, nota2, nota3, nota4){
    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)
    
    let media = (valor1 + valor2 + valor3 + valor4) / 4
    
    return media
}


// Função para validar a situaçao do aluno com base na média e a regra da instituição
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


// Função responsável pelo calculo do exame com a media anterior mais a nota do exame
const mediaFinal = function(nota1, nota2, nota3, nota4, notaExame){
    let mediaDoAluno = mediaAluno(nota1, nota2, nota3, nota4)
    let situacao = situacaoAluno(nota1, nota2, nota3, nota4)

    let situacaoFinal
    let resultadoFinal

    if(situacao == 'EXAME!'){

        resultadoFinal = (mediaDoAluno + notaExame) / 2

        if(resultadoFinal >= 60){
            situacaoFinal = 'APROVADO NO EXAME!'
        }else{
            situacaoFinal = 'REPROVADO NO EXAME!'
        }
    }

    return {
        mediaExame: resultadoFinal,
        statusFinal: situacaoFinal
    }
}


// Função dedicada para identificar tanto o gênero do aluno quanto do professor
const validacaoGenero = function(sexoAluno, sexoProfessor, status){
    

    let genero = {
        aluno: 'O aluno',
        professor: 'Professor',
        status: status
    }

    if(['feminino', 'feminina'].includes(sexoAluno.trim().toLowerCase())){
        genero.aluno = 'A aluna'

        if(status === 'APROVADO!') genero.status = 'APROVADA!'
        if(status === 'REPROVADO!') genero.status = 'REPROVADA!'
        if(status === 'EXAME!') genero.status = 'EXAME!'
        }

    if(['feminina', 'feminino'].includes(sexoProfessor.trim().toLowerCase())){
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