function calculadoraIdade(anos) {
    return ` daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos}
    anos de idade.`;
    // esta declarando uma função que informa os nomes e calcula a idade
};
const pessoa1 = {
    nome: 'Amelia',
    idade: 23,
};

const pessoa2 = {
    nome: 'marcia',
    idade: 20,
};

const pessoa3 = {
    nome: 'jonas',
    idade: 13,

};
// esta informando a idade e nome das pessoas

console.log(calculadoraIdade.call(pessoa3, 40));
console.log(calculadoraIdade.apply(pessoa2, [24]));
// determina o que o codigo vai exibir na tela console
alert(calculadoraIdade.call(pessoa3, 40));
alert(calculadoraIdade.apply(pessoa2, [24]));
// colocamos alert para que o código seja exibido  na tela principal
