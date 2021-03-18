const nomeAluno = prompt("Informe o nome do aluno:");

for(let i = 0; i < 3; i++){
    notas[i] = parseFloat(prompt(`Informe a nota da atividade ${i + 1}:`));
}

const notaFinal = notas.reduce((total, nota) => total + nota) / 3;

alert(`A nota final do(a) aluno(a) ${nomeAluno} foi ${notaFinal}`);