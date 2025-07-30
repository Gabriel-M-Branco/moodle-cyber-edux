from fastapi import APIRouter, HTTPException
from backend.database import conectar_banco
from backend.schemas.registroPresenca import Presenca

router = APIRouter(prefix="/presenca", tags=["Professor"])

@router.post("/criar")
def registrar_presenca(pres: Presenca):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("""
            INSERT INTO registroPresencas (data, hora)
            VALUES (?, ?)
        """, (pres.data,
              pres.hora
              ))
        conexao.commit()
        conexao.close()
        return {"mensagem": "Presença registrada com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))