"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)


        setTimeout(() => {
            setIsLoading(false)
            router.push("/home")
        }, 500)
    }
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="w-full max-w-lg mx-auto min-w-[500px] p-8 shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Bem vindo</CardTitle>
                    <CardDescription className="font-semibold text-base">
                        Faça login com sua conta Google
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-4">
                            <div className="flex flex-col gap-4">
                                <Button variant="outline" className="w-full text-base cursor-pointer my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Login com Google
                                </Button>
                            </div>
                            <div className="after:border-border relative text-center text-base after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-card text-muted-foreground relative z-10 px-2 text-base">
                                    Ou continue com
                                </span>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="email" className="text-base">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        required
                                        className="text-base"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <div className="flex items-center">
                                        <Label htmlFor="password" className="text-base">Senha</Label>
                                        <a
                                            href="#"
                                            tabIndex={-1}
                                            className="ml-auto text-base underline-offset-4 hover:underline"
                                        >
                                            Esqueceu sua senha?
                                        </a>
                                    </div>
                                    <Input
                                        id="password" 
                                        type="password" 
                                        placeholder="••••••••••••••••••"
                                        required 
                                        className="text-base" />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-[rgba(79,17,163,255)] text-base cursor-pointer hover:bg-[rgba(79,17,163,0.9)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Entrando...
                                        </div>
                                    ) : (
                                        'Login'
                                    )}
                                </Button>
                            </div>
                            {/* 
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="#" className="underline underline-offset-4">
                                Sign up
                                </a>
                            </div> 
                            */}
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="text-white my-3 *:[a]:hover:text-primary text-center text-balance *:[a]:underline *:[a]:underline-offset-4">
                Copyright © 2025 - Desenvolvido por Gabriel Moreira Branco <br /> e Fabrício Mauro De Oliveira Figueiredo.
            </div>
        </div>
    )
}
