import { createContext, useEffect, useState } from "react";
import { listaSecao } from "../listaSecao";
import useToggle from "../hooks/useToggle";
import useSizeWindow from "../hooks/useSizeWindow";
import { useRouter } from "next/router";
import { isStringObject } from "util/types";
import { MenuSecao } from "../models/menuSecao";

const ContextoMenu = createContext({} as any)

export function MenuProvider(props) {

    const [isMini, setIsMini, setTrue, setFalse] = useToggle (false)
    const [secoes, setSecoes] = useState<any>(listaSecao)
    const [tamanho, ] = useSizeWindow()
    
    const router = useRouter();
    
    useEffect(() => {
        if(tamanho === 'md' || tamanho === 'sd') {
            setTrue()
        } else {
            setFalse()
        }
    }, [tamanho, setTrue, setFalse])

    useEffect(() => {
        setSecoes(() => selecionarItems(router.asPath))
    }, [router.asPath]) //monitarar alteração no roteamento

    function alternarSecao(secaoSelecionada:MenuSecao) {
        const novasSecoes = secoes.map((secao) => {
            if(secao.titulo === secaoSelecionada.titulo) {
                return {...secao, aberta: !secao.aberta}
            } else {
                return secao
            }
        })
        setSecoes(() => novasSecoes)
    }

    function selecionarItems(url:string){
        const novasSecoes = secoes.map((secao) => {
            const novosItems = secao.items.map((item) => {
                return {...item, selecionado: item.url === url} //retorna o item com atributo selecionado e valor verdadeiro para quando as urls forma iguais
            })
            return {...secao, items: novosItems}
        })
        return novasSecoes
    }

    return (
        <ContextoMenu.Provider value={{secoes, isMini, setIsMini, alternarSecao}}>
            {props.children}
        </ContextoMenu.Provider>
    )
}

export default ContextoMenu

