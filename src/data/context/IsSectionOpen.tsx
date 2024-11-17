import { createContext, ReactNode, useState } from "react"
import { listaSecao } from "../listaSecao"

export interface ContextSectionIsOpenType {
    listIsSectionOpen: boolean[]
    setIsSectionOpen: (e:number) => void
}

interface IsSectionOpenProviderProps {
    children: NonNullable<ReactNode>
}
const objetoInicial = {
    listIsSectionOpen: listaSecao.map((e) => e.aberta),
    setIsSectionOpen: (e:number) => {console.log(e)}
}

export const ContextIsSectionOpen = createContext<ContextSectionIsOpenType>(objetoInicial)

export function IsSectionOpenProvider (props:IsSectionOpenProviderProps) {
    console.log('executa isso aqui?!?!?1')
    
    const [controler, setControler] = useState<boolean>(true)

    const listIsSectionOpen = objetoInicial.listIsSectionOpen

    function setIsSectionOpen(indice:number) {
        listIsSectionOpen[indice] = !listIsSectionOpen[indice]
        console.log(listIsSectionOpen)
        setControler(!controler)
    }

    return (
        <ContextIsSectionOpen.Provider value={{listIsSectionOpen, setIsSectionOpen}}>
            {props.children}
        </ContextIsSectionOpen.Provider>
    )
}


