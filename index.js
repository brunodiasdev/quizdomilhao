//-------------------------
/*seleções do HTML */

let iniproj = document.querySelector('.comecar')
let perg = document.querySelector('.pergunta')
let respA = document.querySelector('.respostaA')
let respB = document.querySelector('.respostaB')
let respC = document.querySelector('.respostaC')
let respD = document.querySelector('.respostaD')

iniproj.onclick = function(){
    ini()
} 

//-----------------------------------
/*Criando array de perguntas*/
const perguntas = [
    p1 = [
        pergunta = "Qual sobrenome no Mickey, desenho da Disney?",
        respostas = [ 'Donald', 'Julio', 'venâncio', 'Mouse']
    ],
    p2 = [
        pergunta = 'Qual a capital do Brasil?',
        respostas = [ 'Prado', 'Japão', 'São Paulo', 'Brasília']
    ],
    p3 = [
        pergunta = 'Em que país fica o Hawaii?',
        respostas = [ 'Brasil', 'Congo', 'India', 'USA']
    ]
]

//----------------------------
/*Função para partida do jogo, ela interliga com a próxima etapa que são as funções de alternar as pergultas aleatóriamente*/
function ini(){
    pergnov = perguntas[num][0]
    perg.innerHTML = pergnov
    respA.innerHTML = perguntas[num][1][numVar]
    respB.innerHTML = perguntas[num][1][numVar2]
    respC.innerHTML = perguntas[num][1][numVar3]
    respD.innerHTML = perguntas[num][1][numVar4]
}

const num = parseInt(variante())

function variante() {
   let x = Math.random() * (perguntas.length - 0) + 0;
   let num = x
   return num   
}
//---------------------------------
/* Funções que servem para de forma "ramdomizada" alternar as perguntas.*/ 
const numVar = parseInt(varianteResp())
const numVar2 = parseInt(varianteResp2())
const numVar3 = parseInt(varianteResp3())
const numVar4 = parseInt(varianteResp4())

function varianteResp(){
    let x = parseInt(Math.random() * (4 - 0) + 0);
    return x
}
function varianteResp2(){
    let x = Math.trunc(Math.random() * (4 - 0) + 0);
    if( x !== numVar){
        return x
    } else {
        do {
            x = Math.trunc(Math.random() * (4 - 0) + 0);
        } while( x == numVar)
        return x
    }
}

function varianteResp3(){
    let x = Math.trunc(Math.random() * (4 - 0) + 0);
    if( x !== numVar && x !== numVar2){
        return x
    } else{
        while (x == numVar || x == numVar2){
            x = Math.trunc(Math.random() * (4 - 0) + 0);
        }
        return x
    }
}

function varianteResp4(){
    let x = Math.trunc(Math.random() * (4 - 0) + 0);
    if( x !== numVar && x !== numVar2 && x !== numVar3){
        return x
    } else{
        while (x == numVar || x == numVar2 || x == numVar3){
            x = Math.trunc(Math.random() * (4 - 0) + 0);
        }
        return x
    }
}
//s