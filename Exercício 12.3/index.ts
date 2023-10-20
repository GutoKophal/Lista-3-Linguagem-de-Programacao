type Alunos = {
    nome: string;
    notaProva: number;
    notaTrabalho: number;
};

// Exemplo de uso do Type Alias:
const aluno5: Alunos = {
    nome: "João",
    notaProva: 8.5,
    notaTrabalho: 9.0
};

const aluno6: Alunos = {
    nome: "Maria",
    notaProva: 7.0,
    notaTrabalho: 8.5
};

console.log("Aluno 5:", aluno5.nome, "Nota Prova:", aluno5.notaProva, "Nota Trabalho:", aluno5.notaTrabalho);
console.log("Aluno 6:", aluno6.nome, "Nota Prova:", aluno6.notaProva, "Nota Trabalho:", aluno6.notaTrabalho);
