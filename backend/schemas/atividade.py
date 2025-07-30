from pydantic import BaseModel

class Atividade(BaseModel):
    titulo: str
    descricao: str
    data_inicio: str
    hora_inicio: str
    data_fim: str
    hora_fim: str