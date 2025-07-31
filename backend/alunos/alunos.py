from fastapi import APIRouter, HTTPException, Depends
from backend.schemas.aluno import AlunoDto
from backend.utils.executar_sql import executar
from backend.core.security import verificar_nivel

router = APIRouter(prefix="/alunos", tags=["Secretaria"])

@router.post("/criar", dependencies=[Depends(verificar_nivel(2))])
def criar_aluno(aluno: AlunoDto):
    try:
        query = """
            INSERT INTO alunos (nome, cpf, email, data_nascimento, matricula, curso_id)
            VALUES (?, ?, ?, ?, ?, ?)
        """
        params = (
            aluno.nome,
            aluno.cpf,
            aluno.email,
            aluno.data_nascimento,
            aluno.matricula,
            aluno.curso_id
        )
        executar(query, params)
        return {"mensagem": "Aluno cadastrado com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/listar")
def listar_alunos():
    try:
        query = "SELECT * FROM alunos"
        resultado = executar(query, fetch=True)
        return {"alunos": resultado}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
