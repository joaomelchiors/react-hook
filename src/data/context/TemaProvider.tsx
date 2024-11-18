import { createContext, ReactNode, useEffect, useState } from "react";
import { listaDeCores } from "../listaDeCores";

interface TemaProviderProps {
    children: NonNullable<ReactNode>
}

export interface TemaContextoType {
    corDeDestaque: string
    setCorTema: (cor:string) => void
}

export const ContextoTema = createContext<TemaContextoType | null>(null)

export function TemaProvider(props:TemaProviderProps) {
    
    const [corDeDestaque, setCorDeDestaque] = useState('')
    
    useEffect(()=>{
        if(corDeDestaque == ''){
            const corLocal = localStorage.getItem('temaCor') ?? listaDeCores[0]
            setCorDeDestaque(corLocal)
            console.log('não tinha cor')
        }
    }, [corDeDestaque])
   
    function setCorTema (cor:string) {
        localStorage.setItem('temaCor', cor)
        setCorDeDestaque(cor)
    }

    return (
        <ContextoTema.Provider value={{corDeDestaque, setCorTema}}>
            {props.children}
        </ContextoTema.Provider>
    )
}




