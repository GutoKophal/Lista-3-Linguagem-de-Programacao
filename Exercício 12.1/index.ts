interface Aluno {
    nome: string;
    notaProva: number;
    notaTrabalho: number;
    }

// Exemplo de uso da interface:
const aluno1: Aluno = {
    nome: "João",
    notaProva: 8.5,
    notaTrabalho: 9.0
    };

const aluno2: Aluno = {
    nome: "Maria",
    notaProva: 7.0,
    notaTrabalho: 8.5
    };

console.log("Aluno 1:", aluno1.nome, "Nota Prova:", aluno1.notaProva, "Nota Trabalho:", aluno1.notaTrabalho);
console.log("Aluno 2:", aluno2.nome, "Nota Prova:", aluno2.notaProva, "Nota Trabalho:", aluno2.notaTrabalho);