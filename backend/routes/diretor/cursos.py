from fastapi import APIRouter, HTTPException
from backend.database import conectar_banco
from backend.schemas.curso import Curso

router = APIRouter(prefix="/cursos", tags=["Diretor"])

@router.post("/criar")
def criar_curso(curso: Curso):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("""
            INSERT INTO cursos (nome, descricao, carga_horaria)
            VALUES (?, ?, ?)
        """, (curso.nome, curso.descricao, curso.carga_horaria))
        conexao.commit()
        conexao.close()
        return {"mensagem": "Curso cadastrado com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/listar")
def listar_cursos():
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("SELECT * FROM cursos")
        cursos = cursor.fetchall()
        conexao.close()
        return {"cursos": cursos}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
