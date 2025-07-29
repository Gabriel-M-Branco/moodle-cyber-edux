from fastapi import FastAPI
from app.routes import usuarios, cursos

app = FastAPI()
app.include_router(usuarios.router)
app.include_router(cursos.router)