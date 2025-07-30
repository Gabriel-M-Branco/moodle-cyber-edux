from fastapi import FastAPI
from backend.routes.auth import login
from backend.routes.admin import usuarios
from backend.routes.diretor import cursos
from backend.routes.professor import atividades, registroPresencas

app = FastAPI()
app.include_router(usuarios.router)
app.include_router(login.router)
app.include_router(cursos.router)
app.include_router(atividades.router)
app.include_router(registroPresencas.router)