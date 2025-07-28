import sqlite3

def conectar_banco():
    return sqlite3.connect("banco.db")
