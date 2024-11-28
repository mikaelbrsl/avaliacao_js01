export class Exams{
    constructor() {
        this.gabarito = ['a', 'b', 'a', 'c', 'd'];
        this.peso = 2;
        this.alunos = [];

    }

    add(nome, questoes) {
        this.students.push({ nome, questoes });
    }

    nota(nome) {
        let nota = 0;
        for (let flag = 0; flag < 5; flag++) {
            if (questoes[flag] === this.gabarito[flag]) {
                nota += this.peso
            }
        }
        return nota;
    }

    min() {
        let minNota = Infinity;
        let minAluno = null;

        for (const aluno of this.alunos) {
        const notaAluno = this.nota(student.questoes);
        if (notaAluno < minNota) {
            minNota = notaAluno;
            minAluno = aluno.nome;
        }
        }

        return { nome: minAluno, nota: minNota };
    }
}