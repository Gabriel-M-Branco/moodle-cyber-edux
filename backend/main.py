from fastapi import FastAPI
from backend.atividades import atividades
from backend.auth import login
from backend.users import usuarios
from backend.cursos import cursos
from backend.presencas import registroPresencas
from backend.alunos import alunos

app = FastAPI()
app.include_router(usuarios.router)
app.include_router(login.router)
app.include_router(cursos.router)
app.include_router(atividades.router)
app.include_router(registroPresencas.router)
app.include_router(alunos.router)