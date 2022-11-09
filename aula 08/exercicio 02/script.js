const alunos = [
    { nome: 'João',
    nota: 5,
    turma: '1B',},
    {nome: 'Sofia',
    nota: 4,
    turma:'1B',},
    {nome:'Paulo',
    nota: 6,
    turma: '2C',}
];
// A função declarada serve para informar o nome, nota e turma   
function alunosAprovados(alunos, media) {
    let aprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        let {nota, nome} = alunos[i];
        if (nota >= media){
             aprovados.push(nome);
        }

    }
    return aprovados;

}
// a funcao  esta calculando a media dos aluno e se eles serao aprovados, for e a estrutura de repeticao que serve para repetir um mesmo processamento ate que uma certa condicao seja feita e if 

console.log(alunosAprovados(alunos, 5)); 
// o console.log ira exibir se o aluno que tirou acima de 5 vai ser aprovado
alert(alunosAprovados(alunos, 5)); 
// alert ira mostrar se o aluno que tirou acima e 5 foi aprovado na tela principal


