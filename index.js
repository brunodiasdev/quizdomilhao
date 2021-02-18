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
    pergnov = perguntas[novaPergunta(i)][0]
    perg.innerHTML = pergnov
}
function novaPergunta(i){
    for(i=0; i < perguntas.length; i++){
        return i
    }

}
