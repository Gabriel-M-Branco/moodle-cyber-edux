"use client"

import { usePathname } from "next/navigation"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function PaginaInicial() {
    const pathname = usePathname()

    const menuItems = [
        { href: "/home", label: "Meus Cursos" },
        { href: "/explorar", label: "Explorar" },
        { href: "/certificados", label: "Certificados" },
        { href: "/perfil", label: "Perfil" },
        { href: "/configuracoes", label: "Configurações" }
    ]
    
    // Dados simulados dos cursos
    const cursos = [
        { id: "1", nome: "Curso de React", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, suscipit?", progresso: 75 },
        { id: "2", nome: "Curso de Node.js", descricao: "Backend com JavaScript", progresso: 45 },
        { id: "3", nome: "Curso de TypeScript", descricao: "JavaScript tipado para projetos robustos", progresso: 90 },
        { id: "4", nome: "Curso de Next.js", descricao: "Framework React para produção", progresso: 30 },
        { id: "5", nome: "Curso de Tailwind CSS", descricao: "CSS utilitário para desenvolvimento rápido", progresso: 60 },
        { id: "6", nome: "Curso de Python", descricao: "Introdução à programação com Python", progresso: 80 },
        { id: "7", nome: "Curso de Docker", descricao: "Contêineres para desenvolvimento e produção", progresso: 55 },
        { id: "8", nome: "Curso de Git e GitHub", descricao: "Controle de versão e colaboração em projetos", progresso: 70 },
        { id: "9", nome: "Curso de Firebase", descricao: "Backend serverless para aplicações web", progresso: 40 },
        { id: "10", nome: "Curso de GraphQL", descricao: "Consultas flexíveis para APIs modernas", progresso: 65 },
        { id: "11", nome: "Curso de UX/UI Design", descricao: "Fundamentos de design para interfaces digitais", progresso: 50 },
        { id: "12", nome: "Curso de Segurança da Informação", descricao: "Proteja seus dados e aplicações", progresso: 35 },
        { id: "13", nome: "Curso de Inteligência Artificial", descricao: "Conceitos e aplicações práticas de IA", progresso: 20 },
        { id: "14", nome: "Curso de Desenvolvimento Mobile", descricao: "Crie apps para Android e iOS", progresso: 60 },
        { id: "15", nome: "Curso de Banco de Dados SQL", descricao: "Modelagem e consultas em bancos relacionais", progresso: 75 },
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
                                            className={`cursor-pointer h-[60px] text-md font-semibold transition-all mx-0.5 duration-200 ${pathname === item.href
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
            <div className="bg-gray-300 flex-1 w-full px-0 pt-0 pb-2 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-6 overflow-y-auto h-full pl-4 pr-4 pt-4 content-start">
                    {/* Renderizando os cursos do array de dados */}
                    {cursos.map((curso) => (
                        <div key={curso.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-[170px]">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{curso.nome}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{curso.descricao}</p>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-xs text-gray-500">Progresso: {curso.progresso}%</span>
                                <button 
                                    onClick={() => window.location.href = `/curso?id=${curso.id}&nome=${encodeURIComponent(curso.nome)}`}
                                    className="bg-[rgba(79,17,163,255)] text-white px-4 py-2 rounded text-sm hover:bg-[rgba(60,14,130,255)]"
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}