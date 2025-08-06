from pydantic import BaseModel
from typing import Optional

class NotaDto(BaseModel):
    aluno_id: int
    atividade_id: int
    nota: float
    observacao: Optional[str] = None
    data_avaliacao: Optional[str] = None  # formato: 'YYYY-MM-DD HH:MM:SS'

class Nota(NotaDto):
    id: int