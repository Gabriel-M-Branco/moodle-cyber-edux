from fastapi import Depends, HTTPException
from backend.schemas.usuario import LoginData, NivelAcesso
from backend.database.database import conectar_banco

def verificar_nivel(minimo: NivelAcesso):
    def dependencia(dados: LoginData = Depends()):
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("SELECT nivel_acesso FROM usuarios WHERE login = ? AND senha = ?", (dados.login, dados.senha))
        resultado = cursor.fetchone()
        conexao.close()

        if not resultado:
            raise HTTPException(status_code=401, detail="Credenciais inválidas")
        if resultado[0] < minimo:
            raise HTTPException(status_code=403, detail="Acesso negado")
    return dependencia
