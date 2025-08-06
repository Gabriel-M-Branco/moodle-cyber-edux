"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PaginaCurso() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const cursoId = searchParams.get("id") || "1"
    const cursoNome = searchParams.get("nome") || "Curso de React"

    // Dados simulados do curso
    const [curso, setCurso] = useState({
        id: cursoId,
        nome: cursoNome,
        progresso: 35,
        instrutor: "Ana Silva",
        turma: "Turma 1",
        turno: "Vespertino",
        polo: "Cuiabá",
        cargaHoraria: "40 horas",
        modulos: [
            {
                id: 1,
                titulo: "Introdução ao React",
                concluido: true,
                aulas: [
                    { id: 1, titulo: "O que é React?", duracao: "15 min", concluida: true },
                    { id: 2, titulo: "Configurando o ambiente", duracao: "20 min", concluida: true },
                    { id: 3, titulo: "Primeiro componente", duracao: "25 min", concluida: true }
                ]
            },
            {
                id: 2,
                titulo: "Componentes e Props",
                concluido: false,
                aulas: [
                    { id: 4, titulo: "Componentes funcionais", duracao: "30 min", concluida: true },
                    { id: 5, titulo: "Componentes de classe", duracao: "35 min", concluida: false },
                    { id: 6, titulo: "Passando props", duracao: "25 min", concluida: false }
                ]
            },
            {
                id: 3,
                titulo: "Estado e Ciclo de Vida",
                concluido: false,
                aulas: [
                    { id: 7, titulo: "Usando o useState", duracao: "40 min", concluida: false },
                    { id: 8, titulo: "useEffect na prática", duracao: "45 min", concluida: false },
                    { id: 9, titulo: "Outros hooks importantes", duracao: "35 min", concluida: false }
                ]
            }
        ]
    })

    // Função para alternar o status de conclusão de uma aula
    const toggleAulaConcluida = (aulaId: number) => {
        setCurso(prevCurso => ({
            ...prevCurso,
            modulos: prevCurso.modulos.map(modulo => ({
                ...modulo,
                aulas: modulo.aulas.map(aula => 
                    aula.id === aulaId 
                        ? { ...aula, concluida: !aula.concluida }
                        : aula
                )
            }))
        }))
    }

    // Função para abrir detalhes da aula
    const abrirDetalhesAula = (aulaId: number, moduloId: number) => {
        const url = `/atividade?aulaId=${aulaId}&moduloId=${moduloId}&cursoId=${cursoId}&cursoNome=${encodeURIComponent(cursoNome)}`
        window.open(url, '_blank')
    }

    // Criando o menu dinâmico com o nome do curso
    const menuItems = [
        { href: `/curso?id=${cursoId}&nome=${encodeURIComponent(cursoNome)}`, label: cursoNome },
        { href: "/home", label: "Meus Cursos" },
        { href: "/explorar", label: "Explorar" },
        { href: "/certificados", label: "Certificados" },
        { href: "/perfil", label: "Perfil" },
        { href: "/configuracoes", label: "Configurações" }
    ]

    return (
        <div className="h-[100vh] w-[100vw] flex flex-col overflow-hidden">
            <header className="bg-[rgba(79,17,163,255)] w-full h-[75px] flex items-center justify-between px-3 flex-shrink-0">
                <div className="h-full flex items-center">
                    <img
                        src="/images/logo-cyberedux.png"
                        alt="Logo do Site"
                        className="h-[55px] w-auto"
                    />
                    <div className="ml-4">
                        <NavigationMenu className="bg-transparent">
                            <NavigationMenuList className="bg-transparent">
                                <NavigationMenuItem>
                                    {menuItems.map((item) => (
                                        <NavigationMenuLink
                                            key={item.href}
                                            asChild
                                            className={`cursor-pointer h-[60px] text-md font-semibold transition-all duration-200 ${pathname === item.href
                                                ? "!text-[rgba(255,173,40,255)] !bg-black/20 border-b-2 border-[rgba(255,173,40,255)]"
                                                : "!text-white hover:!bg-black/15 !bg-transparent"
                                                }`}
                                            onClick={() => window.location.href = item.href}
                                        >
                                            <div>{item.label}</div>
                                        </NavigationMenuLink>
                                    ))}
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuViewport className="!bg-[rgba(79,17,163,255)] border-none" />
                        </NavigationMenu>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-white text-2xl font-semibold">Gabriel Moreira Branco</span>
                    <img src="/images/fotoperfilteste.jpg" className="h-[45px] w-[45px] rounded-full object-cover cursor-pointer" />
                </div>
            </header>
            <div className="bg-white w-full overflow-y-auto p-4">
                {/* Cabeçalho do curso */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{curso.nome}</h1>

                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">Instrutor:</span>
                                <span className="text-sm text-gray-800">{curso.instrutor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">Turma:</span>
                                <span className="text-sm text-gray-800">{curso.turma}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">Turno:</span>
                                <span className="text-sm text-gray-800">{curso.turno}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">Polo:</span>
                                <span className="text-sm text-gray-800">{curso.polo}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">Carga Horária:</span>
                                <span className="text-sm text-gray-800">{curso.cargaHoraria}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="mb-2">
                            <span className="text-sm font-medium text-gray-600">Progresso total:</span>
                            <span className="text-sm font-semibold text-gray-800 ml-1">{curso.progresso}%</span>
                        </div>
                        <div className="w-[130px] h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[rgba(79,17,163,255)]"
                                style={{ width: `${curso.progresso}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Módulos do curso */}
                <div className="space-y-4">
                    {curso.modulos.map((modulo) => (
                        <Card key={modulo.id} className="p-6 border border-gray-200 shadow-sm bg-white">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                                    {modulo.concluido && (
                                        <span className="flex w-5 h-5 rounded-full bg-green-500 mr-2 items-center justify-center text-white text-xs">✓</span>
                                    )}
                                    Módulo {modulo.id}: {modulo.titulo}
                                </h2>
                            </div>

                            <div className="space-y-2">
                                {modulo.aulas.map((aula) => (
                                    <div
                                        key={aula.id}
                                        className={`flex justify-between items-center p-3 rounded border border-gray-200 transition-all duration-200 cursor-pointer ${
                                            aula.concluida 
                                                ? 'bg-gray-100 opacity-60 hover:opacity-80' 
                                                : 'bg-white hover:bg-gray-50 hover:shadow-sm'
                                        }`}
                                        onClick={() => abrirDetalhesAula(aula.id, modulo.id)}
                                    >
                                        <div className="flex items-center">
                                            <div 
                                                className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-200 mr-3 ${
                                                    aula.concluida ? 'bg-green-500' : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                                onClick={(e) => {
                                                    e.stopPropagation() // Evita que o clique no círculo abra a atividade
                                                    toggleAulaConcluida(aula.id)
                                                }}
                                            ></div>
                                            <span className={`${aula.concluida ? 'text-gray-500' : 'text-gray-800'}`}>
                                                {aula.titulo}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm ${aula.concluida ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {aula.duracao}
                                            </span>
                                            <span className={`text-sm ${aula.concluida ? 'text-gray-400' : 'text-blue-600'} font-medium`}>
                                                Acessar →
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}