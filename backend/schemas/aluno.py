from pydantic import BaseModel

class AlunoDto(BaseModel):
    usuario_id: int
    matricula: str

class Aluno(AlunoDto):
    id: int