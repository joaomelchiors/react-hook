import { IconMinus, IconPlus } from "@tabler/icons-react"
import { ReactNode } from "react"

interface MenuPrincipalSecaoProps {
    titulo: string
    aberta: boolean
    mini: boolean
    children: NonNullable<ReactNode>
    onClick?: () => void
}

export default function MenuPrincipalSecao(props:MenuPrincipalSecaoProps) {
    return (
        <div className={`
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