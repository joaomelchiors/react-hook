import { IconAppWindow, IconArrowsLeftRight, IconBug, IconDimensions, IconFunction, IconLetterCase, IconLock, IconMathGreater, IconNumbers, IconPin, IconRefreshAlert, IconSection, IconShoppingCart, IconShoppingCartOff, IconUsers } from "@tabler/icons-react"

export const listaSecao = 
[
    {
        titulo: "Essenciais",
        aberta: false,
        items: [
            {
                icone: <IconNumbers />,
                titulo: "Contador",
                tag: "useState",
                url: "/essenciais/contador",
            },
            {
                icone: <IconUsers />,
                titulo: "Votação",
                tag: "useState",
                url: "/essenciais/votacao",
            },
            {
                icone: <IconFunction />,
                titulo: "Efeito Colateral",
                tag: "useEffect",
                url: "/essenciais/efeitoColateral",
            },
            {
                icone: <IconArrowsLeftRight />,
                titulo: "Consulta",
                tag: "useEffect",
                url: "/essenciais/consulta",
            },
            {
                icone: <IconBug />,
                titulo: "Maior c/ Efeito Colatertal",
                tag: "useEffect",
                url: "/essenciais/maiorComColateral",
            },
            {
                icone: <IconMathGreater />,
                titulo: "Maior",
                tag: "useEffect",
                url: "/essenciais/maior",
            },
            {
                icone: <IconLetterCase />,
                titulo: "Contagem Caracteres",
                tag: "useEffect",
                url: "/essenciais/contagemCaracteres",
            },
            {
                icone: <IconRefreshAlert />,
                titulo: "State Vs Ref",
                tag: "useRef",
                url: "/essenciais/stateVsRef",
            },
            {
                icone: <IconSection />,
                titulo: "Ref Elemento DOM",
                tag: "useRef",
                url: "/essenciais/refElemento",
            },
            {
                icone: <IconLetterCase />,
                titulo: "Contagem Caracteres",
                tag: "useRef",
                url: "/essenciais/contagemCaracteresRef",
            }
        ]
    },
    {
        titulo: "Personaliados",
        aberta: false,
        items: [
            {
                icone: <IconAppWindow />,
                titulo: "Modal",
                tag: "personalizados",
                url: "/personalizados/modal",
            },
            {
                icone: <IconDimensions />,
                titulo: "Tamanho Janela",
                tag: "personalizados",
                url: "/personalizados/tamanhoJanela",
            },
            {
                icone: <IconLock />,
                titulo: "Validando Senha",
                tag: "personalizados",
                url: "/personalizados/senha",
            }
        ]
    },
    {
        titulo: "Contexto",
        aberta: false,
        items: [
            {
                icone: <IconShoppingCartOff />,
                titulo: "Loja Sem Contexto",
                tag: "useContext",
                url: "/contexto/lojaSemContexto",
            },
            {
                icone: <IconShoppingCart />,
                titulo: "Loja Com Contexto",
                tag: "useContext",
                url: "/contexto/lojaComContexto",
            }
        ]
    },
    {
        titulo: "Outros Hoocks",
        aberta: true,
        items: [
            {
                icone: <IconPin />,
                titulo: "Memoização Elementos",
                tag: "useMemo",
                url: "/outros/memoizacao",
            },
            {
                icone: <IconPin />,
                titulo: "Memoização Referência",
                tag: "useMemo",
                url: "/outros/memoizacao2",
            },
            {
                icone: <IconPin />,
                titulo: "Memoização Funções",
                tag: "useCallback",
                url: "/outros/memoizandoFuncoes",
            },
        ]
    }
]