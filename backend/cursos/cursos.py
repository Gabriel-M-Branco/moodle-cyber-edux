from fastapi import APIRouter, HTTPException, Depends
from backend.schemas.curso import Curso
from backend.schemas.usuario import NivelAcesso
from backend.core.security import verificar_nivel
from backend.utils.executar_sql import executar

router = APIRouter(prefix="/cursos", tags=["Diretor"])

@router.post("/criar", dependencies=[Depends(verificar_nivel(NivelAcesso.DIRETOR))])
def criar_curso(curso: Curso):
    try:
        query = """
            INSERT INTO cursos (nome, descricao, carga_horaria, diretor_id)
            VALUES (?, ?, ?, ?)
        """
        params = (curso.nome, curso.descricao, curso.carga_horaria, curso.diretor_id)
        executar(query, params)
        return {"mensagem": "Curso cadastrado com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/listar")
def listar_cursos():
    try:
        query = "SELECT * FROM cursos"
        cursos = executar(query, fetch=True)
        return {"cursos": cursos}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
