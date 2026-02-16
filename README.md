# 📝 Gerenciador de Tarefas CLI

Projeto desenvolvido em Node.js para gerenciamento de tarefas via linha de comando.

## 📖 Descrição

Aplicação simples que permite:

- Adicionar tarefas
- Listar tarefas
- Remover tarefas
- Marcar tarefas como concluídas

Os dados são armazenados em um arquivo `tarefas.json`.

---

## ⚙️ Tecnologias utilizadas

- Node.js
- JavaScript
- Módulo `fs` (File System)

---

## 🚀 Como executar

1. Clone o repositório:

```bash
git clone https://github.com/HeynanCharles/gerenciador-tarefas.git
```

2. Entre na pasta:

```bash
cd gerenciador-tarefas
```

3. Execute os comandos:

### ➕ Adicionar tarefa

```bash
node index.js add "Estudar JavaScript"
```

### 📋 Listar tarefas

```bash
node index.js list
```

### ❌ Remover tarefa

```bash
node index.js remove 1
```

### ✔ Marcar como concluída

```bash
node index.js complete 1
```

---

## 🧩 Funcionalidades

- Criar tarefas
- Listar tarefas com status
- Remover tarefas pelo índice
- Marcar tarefas como concluídas

---

## 📂 Estrutura do projeto

```bash
📁 projeto
├── index.js
├── tarefas.js
├── tarefas.json
└── README.md
```

---

## 🧠 Aprendizados

- Manipulação de arquivos com o módulo `fs`
- Uso de JSON
- Organização de código em módulos
- Tratamento de erros
- Estruturação de projetos Node.js

---

## 👨‍💻 Autor

Desenvolvido por Heynan Charles.

> Projeto desenvolvido para fins de estudo.