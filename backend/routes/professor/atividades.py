from fastapi import APIRouter, HTTPException
from backend.database import conectar_banco
from backend.schemas.atividade import Atividade

router = APIRouter(prefix="/atividades", tags=["Professor"])

@router.post("/criar")
def cadastrar_atividade(atv: Atividade):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("""
            INSERT INTO atividades (titulo, descricao, data_inicio, hora_inicio, data_fim, hora_fim)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (atv.titulo,
              atv.descricao,
              atv.data_inicio,
              atv.hora_fim,
              atv.data_fim,
              atv.hora_fim
              ))
        conexao.commit()
        conexao.close()
        return {"mensagem": "Atividade cadastrada com sucesso!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/listar")
def listar_atividades():
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("SELECT * FROM atividades")
        atividades = cursor.fetchall()
        conexao.close()
        return {"atividades": atividades}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
