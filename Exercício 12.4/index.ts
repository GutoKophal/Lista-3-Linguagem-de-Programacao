type Estudante = {
    nome: string;
    notaProva: number;
    notaTrabalho: number;
    notaProvaSubstitutiva?: number; // Nota de prova substitutiva é opcional
};

function verificaAprovacao(estudante: Estudante): void {
    // Verifica se a nota de prova substitutiva está presente e é maior do que zero.
    if (estudante.notaProvaSubstitutiva && estudante.notaProvaSubstitutiva > 0) {
        const notas = [estudante.notaProva, estudante.notaTrabalho, estudante.notaProvaSubstitutiva];
        const menorNota = Math.min(...notas); // Encontra a menor nota
        const media = (estudante.notaProva + estudante.notaTrabalho + estudante.notaProvaSubstitutiva - menorNota) / 2;
        console.log(`${estudante.nome} fez a prova substitutiva e foi aprovado com média ${media.toFixed(2)}.`);
    } else {
        const media = (estudante.notaProva + estudante.notaTrabalho) / 2;
        if (media > 6) {
            console.log(`${estudante.nome} foi aprovado com média ${media.toFixed(2)}.`);
        } else {
            console.log(`${estudante.nome} foi reprovado com média ${media.toFixed(2)}.`);
        }
    }
}

// Exemplo de uso da função com um objeto de estudante
const estudante1: Estudante = {
    nome: "João",
    notaProva: 8.5,
    notaTrabalho: 9.0,
    notaProvaSubstitutiva: 7.0
};

verificaAprovacao(estudante1);

const estudante2: Estudante = {
    nome: "Maria",
    notaProva: 7.0,
    notaTrabalho: 5.5
};

verificaAprovacao(estudante2);
