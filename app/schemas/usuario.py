from pydantic import BaseModel

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