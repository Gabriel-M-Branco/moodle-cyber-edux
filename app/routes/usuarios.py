from fastapi import APIRouter, HTTPException
from app.models.usuario import Usuario
from app.database import conectar_banco

router = APIRouter()

@router.post("/usuarios")
def cadastrar_usuario(usuario: Usuario):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("""
            INSERT INTO usuarios (nome, cpf, email, nivel_acesso, data_nascimento)
            VALUES (?, ?, ?, ?, ?)
        """, (
            usuario.nome,
            usuario.cpf,
            usuario.email,
            usuario.nivel_acesso,
            usuario.data_nascimento
        ))
        conexao.commit()
        conexao.close()
        return {"mensagem": "Usuário cadastrado com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
