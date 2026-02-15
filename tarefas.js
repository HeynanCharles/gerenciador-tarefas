const fs = require("fs");

function lerTarefas() {
    try {
        const dados = fs.readFileSync("tarefas.json", "utf-8");

        if (!dados.trim()) {
            return [];
        }

        return JSON.parse(dados);
    } catch (erro) {
        console.log("Erro ao ler arquivo.");
        return []
    }
}

function salvarTarefas(tarefas) {
    fs.writeFileSync(
       "tarefas.json",
       JSON.stringify(tarefas, null, 2)
    );
}

function listar() {
    const tarefas = lerTarefas();

     if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

        tarefas.forEach((tarefa, index) => {
            const status = tarefa.concluida ? "[x]" : "[ ]";
            console.log(`${index + 1}. ${status} ${tarefa.titulo}`);
        });
}

function adicionar(argumento) {

    if (!argumento || !argumento.trim()) {
        console.log("Informe um título válido para a tarefa.");
        return;
    }

    const tarefas = lerTarefas();
    
    const novaTarefa = {
        titulo: argumento,
        concluida: false
    };

    tarefas.push(novaTarefa);

    salvarTarefas(tarefas);

    console.log("Tarefa adicionada com sucesso!");
}

function remover(argumento) {

    const indice = parseInt(argumento) - 1;
    const tarefas = lerTarefas();

    if (indice < 0 || indice >= tarefas.length) {
        console.log("Número inválido.");
        return;
    }

    const removida = tarefas.splice(indice, 1);

    salvarTarefas(tarefas);

    console.log(`Tarefa removida: ${removida[0].titulo}`);
}

function completar(argumento) {

    const indice = parseInt(argumento) - 1;
    const tarefas = lerTarefas();

    if (indice < 0 || indice >= tarefas.length) {
        console.log("Número inválido.");
        return;
    }

    if (tarefas[indice].concluida) {
        console.log("Essa tarefa já está concluída.");
        return;
    }

    tarefas[indice].concluida = true;

    salvarTarefas(tarefas);

    console.log("Tarefa marcada como concluída!");
}

module.exports = {
    listar,
    adicionar,
    remover,
    completar
};