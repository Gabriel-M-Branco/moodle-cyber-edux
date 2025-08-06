from pydantic import BaseModel

class MatriculaDto(BaseModel):
    aluno_id: int
    curso_id: int
    data_matricula: str

class Matricula(MatriculaDto):
    id: int
