//import useToggle from "@/data/hooks/useToggle"
import { ContextIsSectionOpen } from "@/data/context/IsSectionOpen"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { ReactNode, useContext } from "react"
//import useToggle from "@/data/hooks/useToggle"



interface MenuPrincipalSecaoProps {
    titulo: string
    mini: boolean
    children: NonNullable<ReactNode>
    onClick?: () => void
    indice: number
}

export default function MenuPrincipalSecao(props:MenuPrincipalSecaoProps) {
    
    //const [isAberta, setIsAberta] = useToggle(true)

    const contexto = useContext(ContextIsSectionOpen)
    

    if(!contexto) {
        return <p>Sem Contexto</p>
    }

    const {listIsSectionOpen, setIsSectionOpen} = contexto

    console.log(`Rendeizando secão da chave ${props.indice} de forma ${listIsSectionOpen[props.indice]? 'Aberta' : 'Fechada'}`)

    return (
        <div
            className={`
            flex flex-col gap-4
            ${props.mini && `items-center`}
        `}>
            <span 
                onClick={() => setIsSectionOpen(props.indice)}
                className={`
                flex justify-between items-center
                text-zinc-400 font-bold uppercase
                cursor-pointer
                ${props.mini && "text-[11px]"}
            `}>
                {props.mini ? props.titulo : (
                    <>
                        {props.titulo}
                        {listIsSectionOpen[props.indice] ? <IconMinus size={15}/> : <IconPlus size={15} />}
                    </>
                )}
            </span>
            {listIsSectionOpen[props.indice] && (
                <div className="flex flex-col gap-1.5">
                    {props.children}
                </div>
            )}
    
        </div>
    )
}