from fastapi import APIRouter, HTTPException, Depends
from backend.schemas.usuario import UsuarioCreate, LoginData
from backend.core.security import verificar_nivel
from backend.utils.executar_sql import executar

router = APIRouter(prefix="/user", tags=["Admin"])

@router.post("/cadastrar", dependencies=[Depends(verificar_nivel(4))])
def cadastrar_usuario(usuario: UsuarioCreate):
    try:
        consulta = "SELECT id FROM usuarios WHERE cpf = ? OR login = ?"
        existe = executar(consulta, (usuario.cpf, usuario.login), fetchone=True)

        if existe:
            raise HTTPException(status_code=400, detail="CPF ou login já cadastrado.")

        insercao = """
            INSERT INTO usuarios (nome, cpf, email, nivel_acesso, data_nascimento, login, senha)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """
        dados = (
            usuario.nome,
            usuario.cpf,
            usuario.email,
            usuario.nivel_acesso,
            usuario.data_nascimento,
            usuario.login,
            usuario.senha
        )
        executar(insercao, dados)
        return {"status": "sucesso", "mensagem": "Usuário cadastrado com sucesso!"}

    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/login")
def login(dados: LoginData):
    try:
        query = "SELECT * FROM usuarios WHERE login = ? AND senha = ?"
        resultado = executar(query, (dados.login, dados.senha), fetchone=True)

        if resultado:
            return {"mensagem": "Login realizado com sucesso!"}
        else:
            raise HTTPException(status_code=401, detail="Login ou senha inválidos")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
