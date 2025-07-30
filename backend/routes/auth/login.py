from fastapi import APIRouter, HTTPException
from backend.schemas.usuario import LoginData
from backend.database import conectar_banco

router = APIRouter(prefix="/user", tags=["Login"])

@router.post("/login")
def login(dados: LoginData):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("SELECT * FROM usuarios WHERE login = ? AND senha = ?", (dados.login, dados.senha))
        resultado = cursor.fetchone()
        conexao.close()

        if resultado:
            return {"mensagem": "Login realizado com sucesso!"}
        else:
            raise HTTPException(status_code=401, detail="Login ou senha inválidos")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
