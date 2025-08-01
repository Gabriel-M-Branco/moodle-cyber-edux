import sqlite3

def conectar_banco():
    conexao = sqlite3.connect("backend/database/banco.db")
    criar_tabelas(conexao)
    return conexao

def criar_tabelas(conexao):
    cursor = conexao.cursor()

    tabelas = [
        """
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            nivel_acesso INTEGER NOT NULL,
            data_nascimento TEXT NOT NULL,
            login TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        )
        """,

        """
        CREATE TABLE IF NOT EXISTS cursos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL,
            carga_horaria INTEGER NOT NULL,
            diretor_id INTEGER NOT NULL,
            FOREIGN KEY (diretor_id) REFERENCES usuarios(id)
        )
        """,

        """
        CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER UNIQUE NOT NULL,
            matricula TEXT UNIQUE NOT NULL,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        )
        """,

        """
        CREATE TABLE IF NOT EXISTS matriculas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            aluno_id INTEGER NOT NULL,
            curso_id INTEGER NOT NULL,
            data_matricula TEXT NOT NULL,
            FOREIGN KEY (aluno_id) REFERENCES alunos(id),
            FOREIGN KEY (curso_id) REFERENCES cursos(id),
            UNIQUE (aluno_id, curso_id)
        )
        """,

        """
        CREATE TABLE IF NOT EXISTS atividades (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descricao TEXT NOT NULL,
            data_inicio TEXT NOT NULL,
            hora_inicio TEXT NOT NULL,
            data_fim TEXT NOT NULL,
            hora_fim TEXT NOT NULL,
            curso_id INTEGER NOT NULL,
            professor_id INTEGER NOT NULL,
            FOREIGN KEY (curso_id) REFERENCES cursos(id),
            FOREIGN KEY (professor_id) REFERENCES usuarios(id)
        )
        """,

        """
        CREATE TABLE IF NOT EXISTS registro_presencas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT NOT NULL,
            hora TEXT NOT NULL,
            aluno_id INTEGER NOT NULL,
            atividade_id INTEGER NOT NULL,
            registrado_por INTEGER NOT NULL,
            FOREIGN KEY (aluno_id) REFERENCES alunos(id),
            FOREIGN KEY (atividade_id) REFERENCES atividades(id),
            FOREIGN KEY (registrado_por) REFERENCES usuarios(id)
        )
        """
    ]

    for sql in tabelas:
        cursor.execute(sql)

    conexao.commit()