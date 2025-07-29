from fastapi import APIRouter, HTTPException
from app.models.usuario import Usuario
from pydantic import BaseModel
from app.database import conectar_banco

router = APIRouter()

@router.post("/usuarios")
def cadastrar_usuario(usuario: Usuario):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("""
            INSERT INTO usuarios (nome, cpf, email, nivel_acesso, data_nascimento, login, senha)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            usuario.nome,
            usuario.cpf,
            usuario.email,
            usuario.nivel_acesso,
            usuario.data_nascimento,
            usuario.login,
            usuario.senha
        ))
        conexao.commit()
        conexao.close()
        return {"mensagem": "Usuário cadastrado com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


class LoginData(BaseModel):
    login: str
    senha: str

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
