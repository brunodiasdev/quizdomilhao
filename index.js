/*Crianto array de perguntas*/
let iniproj = document.querySelector('.comecar')
let perg = document.querySelector('.pergunta')
let respA = document.querySelector('.respostaA')
let respB = document.querySelector('.respostaB')
let respC = document.querySelector('.respostaC')
let respD = document.querySelector('.respostaD')

iniproj.onclick = function(){
    ini()
} 
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
function ini(){
    pergnov = perguntas[num][0]
    perg.innerHTML = pergnov
    respA.innerHTML = perguntas[num][1][numVar]
    respB.innerHTML = perguntas[num][1][numVar2]
    respC.innerHTML = perguntas[num][1][numVar3]
    respD.innerHTML = perguntas[num][1][numVar]
}

function alter(){
    
}

var num = parseInt(variante())

function variante() {
   let x = Math.random() * (perguntas.length - 0) + 0;
   let num = x
   return num   
}

const numVar = parseInt(varianteResp())
const numVar2 = parseInt(varianteResp2())
const numVar3 = parseInt(varianteResp3())

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
        while (x == numVar && x == numVar2){
            x = Math.trunc(Math.random() * (4 - 0) + 0);
        }
        return x
    }
}

console.log(num)
function novaPergunta(){
    let i = 0
    return i = Math.random() * (perguntas.length - 0) + 0;
    
    /*for(i=0; i < perguntas.length; i++){
        return i
    }*/

}
console.log(perguntas.length)