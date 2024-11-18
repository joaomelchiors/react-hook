//import useToggle from "@/data/hooks/useToggle"
//import { ContextIsSectionOpen } from "@/data/context/IsSectionOpen"
//import useToggle from "@/data/hooks/useToggle"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { ReactNode } from "react"
//import useToggle from "@/data/hooks/useToggle"



interface MenuPrincipalSecaoProps {
    titulo: string
    mini: boolean
    children: NonNullable<ReactNode>
    onClick?: () => void
    aberta: boolean
}

export default function MenuPrincipalSecao(props:MenuPrincipalSecaoProps) {
    
    //const [isAberta, setIsAberta] = useToggle(true)
    

    return (
        <div
            className={`
            flex flex-col gap-4
            ${props.mini && `items-center`}
        `}>
            <span 
                onClick={() => props.onClick?.()}
                className={`
                flex justify-between items-center
                text-zinc-400 font-bold uppercase
                cursor-pointer
                ${props.mini && "text-[11px]"}
            `}>
                {props.mini ? props.titulo : (
                    <>
                        {props.titulo}
                        {props.aberta ? <IconMinus size={15}/> : <IconPlus size={15} />}
                    </>
                )}
            </span>
            {props.aberta && (
                <div className="flex flex-col gap-1.5">
                    {props.children}
                </div>
            )}
    
        </div>
    )
}