from pydantic import BaseModel

class AlternativaDto(BaseModel):
    questao_id: int
    texto: str
    correta: int

class Alternativa(AlternativaDto):
    id: int