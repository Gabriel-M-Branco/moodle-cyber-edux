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
            carga_horaria INTEGER NOT NULL
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
            hora_fim TEXT NOT NULL
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS registroPresencas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT NOT NULL,
            hora TEXT NOT NULL
        )
        """,
        """
        CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT UNIQUE NOT NULL,
            email TEXT,
            data_nascimento TEXT,
            matricula TEXT UNIQUE NOT NULL,
            curso_id INTEGER,
            FOREIGN KEY (curso_id) REFERENCES cursos(id)
        )
        """
    ]

    for sql in tabelas:
        cursor.execute(sql)

    conexao.commit()