import sqlite3

def conectar_banco():
    conexao = sqlite3.connect("banco.db")
    cursor = conexao.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            cpf TEXT,
            email TEXT,
            nivel_acesso TEXT,
            data_nascimento TEXT,
            login TEXT,
            senha TEXT
        )
    """)

    conexao.commit()
    return conexao
