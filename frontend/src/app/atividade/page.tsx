"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface AtividadeDetalhes {
    id: number
    titulo: string
    duracao: string
    descricao: string
    conteudo: string
    tipoAtividade: "texto" | "envio" | "video" | "quiz"
    dataEntrega?: string
    temEnvio: boolean
    arquivoEnviado?: string
    nota?: number
    feedbackProfessor?: string
}

export default function PaginaAtividade() {
    const searchParams = useSearchParams()
    const aulaId = searchParams.get("aulaId")
    const moduloId = searchParams.get("moduloId")
    const cursoId = searchParams.get("cursoId")
    const cursoNome = searchParams.get("cursoNome")

    const [atividade, setAtividade] = useState<AtividadeDetalhes | null>(null)
    const [respostaTexto, setRespostaTexto] = useState("")
    const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(null)

    // Dados simulados das atividades
    const atividadesSimuladas: { [key: string]: AtividadeDetalhes } = {
        "1": {
            id: 1,
            titulo: "O que é React?",
            duracao: "15 min",
            descricao: "Uma introdução conceitual ao React e seus fundamentos",
            conteudo: `
                <h2>Introdução ao React</h2>
                <p>React é uma biblioteca JavaScript para construção de interfaces de usuário. Ela foi criada pelo Facebook e é mantida por uma comunidade ativa de desenvolvedores.</p>
                
                <h3>Principais características:</h3>
                <ul>
                    <li><strong>Componentização:</strong> O React permite criar interfaces através de componentes reutilizáveis</li>
                    <li><strong>Virtual DOM:</strong> Utiliza uma representação virtual do DOM para otimizar performance</li>
                    <li><strong>Unidirecional:</strong> Os dados fluem em uma única direção, facilitando o controle do estado</li>
                </ul>

                <h3>Por que usar React?</h3>
                <p>React oferece uma abordagem moderna e eficiente para desenvolvimento de interfaces web, com uma curva de aprendizado suave e uma comunidade muito ativa.</p>
            `,
            tipoAtividade: "texto",
            temEnvio: false
        },
        "7": {
            id: 7,
            titulo: "Usando o useState",
            duracao: "40 min",
            descricao: "Aprenda a gerenciar estado em componentes funcionais usando o hook useState",
            conteudo: `
                <h2>Hook useState</h2>
                <p>O useState é um hook fundamental do React que permite adicionar estado a componentes funcionais.</p>
                
                <h3>Como funciona:</h3>
                <pre><code>
import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);
    
    return (
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}>
                Clique aqui
            </button>
        </div>
    );
}
                </code></pre>

                <h3>Exercício Prático:</h3>
                <p>Crie um componente que utilize useState para gerenciar uma lista de tarefas. O componente deve permitir adicionar e remover itens da lista.</p>
            `,
            tipoAtividade: "envio",
            temEnvio: true,
            dataEntrega: "2024-12-15"
        }
    }

    useEffect(() => {
        if (aulaId) {
            const atividadeData = atividadesSimuladas[aulaId]
            if (atividadeData) {
                setAtividade(atividadeData)
            }
        }
    }, [aulaId])

    const handleEnviarResposta = () => {
        // Aqui você implementaria a lógica de envio
        console.log("Resposta enviada:", respostaTexto)
        console.log("Arquivo enviado:", arquivoSelecionado)
        alert("Resposta enviada com sucesso!")
    }

    const handleUploadArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const arquivo = event.target.files?.[0]
        if (arquivo) {
            setArquivoSelecionado(arquivo)
        }
    }

    if (!atividade) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Carregando atividade...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen w-screen bg-gray-50 overflow-hidden">
            {/* Header */}
            <header className="bg-[rgba(79,17,163,255)] w-full h-[75px] flex items-center justify-between px-6 shadow-md">
                <div className="flex items-center">
                    <img
                        src="/images/logo-cyberedux.png"
                        alt="Logo do Site"
                        className="h-[55px] w-auto"
                    />
                    <div className="ml-6">
                        <h1 className="text-white text-xl font-semibold">{cursoNome}</h1>
                        <p className="text-gray-200 text-sm">Módulo {moduloId} - {atividade.titulo}</p>
                    </div>
                </div>
                
                <Button 
                    variant="secondary" 
                    onClick={() => window.close()}
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                    Fechar
                </Button>
            </header>

            <div className="h-[calc(100vh-75px)] flex">
                {/* Conteúdo principal */}
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 shadow-lg">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{atividade.titulo}</h1>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span>📚 Duração: {atividade.duracao}</span>
                                    {atividade.dataEntrega && (
                                        <span>📅 Entrega até: {new Date(atividade.dataEntrega).toLocaleDateString('pt-BR')}</span>
                                    )}
                                </div>
                            </div>

                            <div className="prose max-w-none mb-8">
                                <p className="text-gray-600 mb-6">{atividade.descricao}</p>
                                <div 
                                    className="text-gray-800 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: atividade.conteudo }}
                                />
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Sidebar de envio - COMENTAR/DESCOMENTAR ESTA SEÇÃO CONFORME NECESSÁRIO */}
                {atividade.temEnvio && (
                    <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                📝 Área de Envio
                            </h3>
                            
                            <div className="space-y-4">
                                {/* Resposta em texto */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sua resposta:
                                    </label>
                                    <Textarea
                                        value={respostaTexto}
                                        onChange={(e) => setRespostaTexto(e.target.value)}
                                        placeholder="Digite sua resposta aqui..."
                                        className="min-h-[120px] resize-none"
                                    />
                                </div>

                                {/* Upload de arquivo */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Anexar arquivo (opcional):
                                    </label>
                                    <input
                                        type="file"
                                        onChange={handleUploadArquivo}
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                                        accept=".pdf,.doc,.docx,.txt,.zip"
                                    />
                                    {arquivoSelecionado && (
                                        <p className="text-sm text-green-600 mt-2">
                                            📎 {arquivoSelecionado.name}
                                        </p>
                                    )}
                                </div>

                                {/* Data de entrega */}
                                {atividade.dataEntrega && (
                                    <div className="p-3 bg-yellow-50 rounded-lg">
                                        <p className="text-sm text-yellow-700">
                                            <strong>⚠️ Prazo:</strong> {new Date(atividade.dataEntrega).toLocaleDateString('pt-BR')}
                                        </p>
                                    </div>
                                )}

                                <Button 
                                    onClick={handleEnviarResposta}
                                    className="w-full bg-[rgba(79,17,163,255)] hover:bg-purple-700"
                                    disabled={!respostaTexto.trim() && !arquivoSelecionado}
                                >
                                    Enviar Resposta
                                </Button>
                            </div>

                            {/* Feedback do professor (se houver) */}
                            {atividade.feedbackProfessor && (
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <h4 className="text-sm font-semibold text-blue-800 mb-2">
                                        💬 Feedback do Professor:
                                    </h4>
                                    <p className="text-sm text-blue-700">
                                        {atividade.feedbackProfessor}
                                    </p>
                                    {atividade.nota && (
                                        <div className="mt-2 pt-2 border-t border-blue-200">
                                            <span className="text-sm font-semibold text-blue-800">
                                                Nota: {atividade.nota}/10
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Card>
                    </div>
                )}
                {/* FIM DA SEÇÃO DE ENVIO */}
            </div>
        </div>
    )
}