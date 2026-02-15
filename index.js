const {
    listar,
    adicionar,
    remover,
    completar
} = require("./tarefas");

const comando = process.argv[2];
const argumento = process.argv[3];

if (comando === "list") {
    listar();

} else if (comando === "add") {
    adicionar(argumento);

} else if (comando === "remove") {
    remover(argumento);

} else if (comando === "complete") {
    completar(argumento);

} else {
    console.log("Comando inválido.");
    console.log("Use: add | list | remove | complete");
}