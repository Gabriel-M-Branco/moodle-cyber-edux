from pydantic import BaseModel

class AlunoDto(BaseModel):
    nome: str
    cpf: str
    email: str | None
    data_nascimento: str
    matricula: str
    curso_id: int

class Aluno(AlunoDto):
    id: int