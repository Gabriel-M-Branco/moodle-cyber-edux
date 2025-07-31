from fastapi import APIRouter, HTTPException
from backend.schemas.usuario import LoginData
from backend.utils.executar_sql import executar

router = APIRouter(prefix="/user", tags=["Login"])

@router.post("/login")
def login(dados: LoginData):
    try:
        query = "SELECT * FROM usuarios WHERE login = ? AND senha = ?"
        resultado = executar(query, (dados.login, dados.senha), fetchone=True)

        if resultado:
            return {"mensagem": "Login realizado com sucesso!"}
        else:
            raise HTTPException(status_code=401, detail="Login ou senha inválidos")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
