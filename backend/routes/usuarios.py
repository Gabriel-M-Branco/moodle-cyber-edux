from fastapi import APIRouter, HTTPException
from backend.schemas.usuario import UsuarioCreate, LoginData
from backend.database import conectar_banco

router = APIRouter(prefix="/user", tags=["Usuarios"])

@router.post("/cadastrar")
def cadastrar_usuario(usuario: UsuarioCreate):
    try:
        with conectar_banco() as conexao:
            cursor = conexao.cursor()
            cursor.execute(
                "SELECT id FROM usuarios WHERE cpf = ? OR login = ?",
                (usuario.cpf, usuario.login)
            )
            if cursor.fetchone():
                raise HTTPException(status_code=400, detail="CPF ou login já cadastrado.")

            cursor.execute("""
                INSERT INTO usuarios (nome, cpf, email, nivel_acesso, data_nascimento, login, senha)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (
                usuario.nome,
                usuario.cpf,
                usuario.email,
                usuario.nivel_acesso,
                usuario.data_nascimento,
                usuario.login,
                usuario.senha
            ))

            conexao.commit()

        return {"status": "sucesso", "mensagem": "Usuário cadastrado com sucesso!"}

    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/login")
def login(dados: LoginData):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("SELECT * FROM usuarios WHERE login = ? AND senha = ?", (dados.login, dados.senha))
        resultado = cursor.fetchone()
        conexao.close()

        if resultado:
            return {"mensagem": "Login realizado com sucesso!"}
        else:
            raise HTTPException(status_code=401, detail="Login ou senha inválidos")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
