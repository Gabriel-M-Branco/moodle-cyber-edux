"use client"

import { CircleUser } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function PaginaInicial() {
    return (
        <div className="flex flex-col">
            <header className="bg-[rgba(79,17,163,255)] w-full h-[90px] flex items-center justify-between px-3">
                <div className="h-full flex items-center">
                    <img
                        src="images/logo-cyberedux.png"
                        alt="Logo do Site"
                        className="h-[70px] w-auto"
                    />
                    <div className="ml-4">
                        <NavigationMenu className="bg-transparent">
                            <NavigationMenuList className="bg-transparent">
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="!text-white cursor-pointer hover:!bg-black/15 !bg-transparent h-[60px] mx-3 text-lg font-semibold">Meus Cursos</NavigationMenuLink>
                                    <NavigationMenuLink href="/" className="!text-white cursor-pointer hover:!bg-black/15 !bg-transparent h-[60px] mx-3 text-lg font-semibold">Teste 123</NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuViewport className="!bg-[rgba(79,17,163,255)] border-none" />
                        </NavigationMenu>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-white text-2xl font-semibold">Gabriel Moreira Branco</span>
                    <CircleUser size={60} color="white" cursor="pointer" />
                </div>
            </header>
            <div className="bg-red-500 h-full">
                <h1>Meus Cursos</h1>
                <p>Bem-vindo ao seu painel de controle.</p>
            </div>
        </div>
    )
}