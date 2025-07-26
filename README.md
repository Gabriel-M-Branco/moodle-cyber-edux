# MVP do Moodle

## Funcionalidades principais

- **Login** (admin - usuário)
- **Cadastro e listagem de cursos e disciplinas**
- **Postagem de atividades** (texto e respostas discursivas, questionários)
- **Registro de presença** (marcar presença manual)
- **Visualização de notas**
- **Calendário básico**

---
## Tecnologias

| Camada         | Tecnologia                                               |
| -------------- | -------------------------------------------------------- |
| Front-end      | React + Next.js + TailwindCSS                            |
| Back-end       | FastAPI                                                  |
| Banco de dados | SQLite                                                   |
| Armazenamento  | Google Drive pessoal (via OAuth2 com token da sua conta) |

---
## Coisas a fazer se der tempo
### Analise de desempenho

- **Upload de arquivos do usuário para o Google Drive da sua conta pessoal**, organizados em pastas por curso, disciplina e usuário  
  (exemplo: `/CursoA/DisciplinaX/Usuario123/arquivo.pdf`)

- Dashboard de desempenho dos alunos (geral, individual e por turma/turmas) correlacionando com as condições socioeconômicas. Pra analisar questão de evasão, desempenho e interesse no curso. Coleta de desempenho escolar deve ser levado em conta.

- Sistema de coleta de informações socioeconômicas, coleta periódica dos registros escolares, etc.

- Sistema de inscrição automatizado de alunos
