from pydantic import BaseModel

class Usuario(BaseModel):
    nome: str
    cpf: str
    email: str
    nivel_acesso: int
    data_nascimento: str