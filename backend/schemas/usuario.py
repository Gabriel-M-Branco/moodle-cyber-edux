from pydantic import BaseModel
from enum import IntEnum

class UsuarioBase(BaseModel):
    nome: str
    cpf: str
    email: str
    nivel_acesso: int
    data_nascimento: str
    login: str

class UsuarioCreate(UsuarioBase):
    senha: str

class Usuario(UsuarioBase):
    id: int
    class Config:
        orm_mode = True

class LoginData(BaseModel):
    login: str
    senha: str

class NivelAcesso(IntEnum):
    ADMIN = 0
    DIRETOR = 1
    SECRETARIA = 2
    PROFESSOR = 3
    ALUNO = 4