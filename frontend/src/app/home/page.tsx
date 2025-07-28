"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
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

    return (
        <div className="h-[100vh] w-[100vw] flex flex-col">
            <header className="bg-[rgba(79,17,163,255)] w-full h-[75px] flex items-center justify-between px-3">
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
                                        <Link key={item.href} href={item.href} passHref legacyBehavior>
                                            <NavigationMenuLink
                                                className={`cursor-pointer h-[60px] text-md font-semibold transition-all duration-200 ${
                                                    pathname === item.href
                                                        ? "!text-[rgba(255,173,40,255)] !bg-black/20 border-b-2 border-[rgba(255,173,40,255)]"
                                                        : "!text-white hover:!bg-black/15 !bg-transparent"
                                                }`}
                                            >
                                                {item.label}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuViewport className="!bg-[rgba(79,17,163,255)] border-none" />
                        </NavigationMenu>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-white text-2xl font-semibold">Gabriel Moreira Branco</span>
                    <img src="/images/fotoperfilteste.jpg" className="h-[45px] w-[45px] rounded-full object-cover" />
                </div>
            </header>
            <div className="bg-gray-200 h-full w-full p-6 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 flex-1">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-[170px]">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Curso de React</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, suscipit?</p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-xs text-gray-500">Progresso: 75%</span>
                            <button className="bg-[rgba(79,17,163,255)] text-white px-4 py-2 rounded text-sm hover:bg-[rgba(60,14,130,255)]">Continuar</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-[170px]">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Curso de Node.js</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">Backend com JavaScript</p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-xs text-gray-500">Progresso: 45%</span>
                            <button className="bg-[rgba(79,17,163,255)] text-white px-4 py-2 rounded text-sm hover:bg-[rgba(60,14,130,255)]">Continuar</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-[170px]">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Curso de TypeScript</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">JavaScript tipado para projetos robustos</p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-xs text-gray-500">Progresso: 90%</span>
                            <button className="bg-[rgba(79,17,163,255)] text-white px-4 py-2 rounded text-sm hover:bg-[rgba(60,14,130,255)]">Continuar</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-[170px]">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Curso de Next.js</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">Framework React para produção</p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-xs text-gray-500">Progresso: 30%</span>
                            <button className="bg-[rgba(79,17,163,255)] text-white px-4 py-2 rounded text-sm hover:bg-[rgba(60,14,130,255)]">Continuar</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between h-[170px]">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Curso de Tailwind CSS</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">CSS utilitário para desenvolvimento rápido</p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-xs text-gray-500">Progresso: 60%</span>
                            <button className="bg-[rgba(79,17,163,255)] text-white px-4 py-2 rounded text-sm hover:bg-[rgba(60,14,130,255)]">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}