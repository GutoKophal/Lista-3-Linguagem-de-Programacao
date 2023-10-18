interface Aluno {
    nome: string;
    notaProva: number;
    notaTrabalho: number;
}

function verifica(aluno: Aluno): void {
    const media = (aluno.notaProva + aluno.notaTrabalho) / 2;

    if (media > 6) {
        console.log(`${aluno.nome} foi aprovado com média ${media.toFixed(2)}.`);
    } else {
        console.log(`${aluno.nome} foi reprovado com média ${media.toFixed(2)}.`);
    }
}

// Exemplo de uso da função com um objeto de aluno
const aluno3: Aluno = {
    nome: "João",
    notaProva: 8.5,
    notaTrabalho: 9.0
};

verificaAprovacao(aluno3);

const aluno4: Aluno = {
    nome: "Maria",
    notaProva: 7.0,
    notaTrabalho: 5.5
};

verificaAprovacao(aluno4);
