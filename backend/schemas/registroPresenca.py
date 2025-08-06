from pydantic import BaseModel

class Presenca(BaseModel):
    data: str
    hora: str
    aluno_id: int
    atividade_id: int
    registrado_por: int