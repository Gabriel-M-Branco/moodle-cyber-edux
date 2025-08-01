from fastapi import APIRouter, HTTPException, Depends
from backend.schemas.atividade import Atividade
from backend.core.security import verificar_nivel
from backend.utils.executar_sql import executar
from backend.schemas.usuario import NivelAcesso

router = APIRouter(prefix="/atividades", tags=["Professor"])

@router.post("/criar", dependencies=[Depends(verificar_nivel(NivelAcesso.PROFESSOR))])
def cadastrar_atividade(atv: Atividade):
    try:
        query = """
            INSERT INTO atividades (titulo, descricao, data_inicio, hora_inicio, data_fim, hora_fim)
            VALUES (?, ?, ?, ?, ?, ?)
        """
        params = (
            atv.titulo,
            atv.descricao,
            atv.data_inicio,
            atv.hora_inicio,
            atv.data_fim,
            atv.hora_fim
        )
        executar(query, params)
        return {"mensagem": "Atividade cadastrada com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/listar")
def listar_atividades():
    try:
        atividades = executar("SELECT * FROM atividades", fetch=True)
        return {"atividades": atividades}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))