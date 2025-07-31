from backend.database.database import conectar_banco

def executar(query: str, params: tuple = (), fetch: bool = False, fetchone: bool = False):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute(query, params)
        resultado = cursor.fetchone() if fetchone else cursor.fetchall() if fetch else None
        conexao.commit()
        conexao.close()
        return resultado
    except Exception as e:
        raise Exception(f"Erro ao executar SQL: {str(e)}")
