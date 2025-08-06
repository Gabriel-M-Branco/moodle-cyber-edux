from pydantic import BaseModel

class RespostaQuestaoDto(BaseModel):
    aluno_id: int
    questao_id: int
    alternativa_id: int | None = None
    resposta_texto: str | None = None
    data_resposta: str

class RespostaQuestao(RespostaQuestaoDto):
    id: int
