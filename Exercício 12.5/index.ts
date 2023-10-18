enum DiasDoMes {
    Domingo = 1,
    Segunda = 2,
    Terca = 3,
    Quarta = 4,
    Quinta = 5,
    Sexta = 6,
    Sabado = 7
}

// Exemplo de uso do tipo de enumeração
const dia1: DiasDoMes = DiasDoMes.Domingo;
const dia15: DiasDoMes = DiasDoMes.Quarta;

console.log("Dia 1:", DiasDoMes[dia1]);
console.log("Dia 15:", DiasDoMes[dia15]);
