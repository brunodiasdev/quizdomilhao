/*Crianto array de perguntas*/
let iniproj = document.querySelector('.comecar')
let perg = document.querySelector('.pergunta')

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
        pergunta = 'Em que país fica o Hawaii',
        respostas = [ 'Brasil', 'Congo', 'India', 'USA']
    ]
]
function ini(){
    pergnov = perguntas[num][0]
    perg.innerHTML = pergnov
}
var num = parseInt(variante())
function variante() {
   let x = Math.random() * (perguntas.length - 0) + 0;
   let num = x
   return num   
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