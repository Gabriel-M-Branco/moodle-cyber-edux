from pydantic import BaseModel

class Curso(BaseModel):
    nome: str
    descricao: str
    carga_horaria: int
