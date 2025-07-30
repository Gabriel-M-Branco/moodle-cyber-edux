from pydantic import BaseModel

class Presenca(BaseModel):
    data: str
    hora: str