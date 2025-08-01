from fastapi import APIRouter, HTTPException, Depends
from backend.schemas.registroPresenca import Presenca
from backend.utils.executar_sql import executar
from backend.core.security import verificar_nivel
from backend.schemas.usuario import NivelAcesso

router = APIRouter(prefix="/presenca", tags=["Professor"])

@router.post("/criar", dependencies=[Depends(verificar_nivel(NivelAcesso.PROFESSOR))])
def registrar_presenca(pres: Presenca):
    try:
        query = "INSERT INTO registroPresencas (data, hora) VALUES (?, ?)"
        params = (pres.data, pres.hora)
        executar(query, params)
        return {"mensagem": "Presença registrada com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))