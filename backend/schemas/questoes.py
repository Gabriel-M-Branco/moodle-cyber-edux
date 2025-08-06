from pydantic import BaseModel
from enum import Enum

class TipoQuestao(str, Enum):
    MULTIPLA_ESCOLHA = 'MULTIPLA_ESCOLHA'
    VERDADEIRO_FALSO = 'VERDADEIRO_FALSO'
    DISSERTATIVA = 'DISSERTATIVA'

class QuestaoDto(BaseModel):
    atividade_id: int
    enunciado: str
    tipo: TipoQuestao

class Questao(QuestaoDto):
    id: int