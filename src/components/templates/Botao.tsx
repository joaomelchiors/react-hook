import { Tamanho } from "@/types/Tamanho"
import { ReactNode } from "react"
import sizeForNumber from "@/utils/sizeForNumber"

interface BotaoProps {
    texto?: string
    icone?: NonNullable<ReactNode>
    className?: string
    backGroundColor?: string
    redondo?: boolean
    onClick?: () => void
    tamanho: Tamanho
}

export default function Botao(props:BotaoProps) {

    

    return (
        <button id="renderBotao" onClick={props.onClick}
            className={`
            flex items-center justify-center
            gap-2 px-1 h-${sizeForNumber(props.tamanho)}
            ${`text-${props.tamanho ?? 'base'}`}
            hover:bg-opacity-80 select-none
            ${props.redondo && `rounded-full justify-center w-${sizeForNumber(props.tamanho)}`}
            ${props.backGroundColor ?? 'bg-blue-500'}
            ${props.className ?? ''}
        `}>
            {props.icone ?? null}
            {props.texto ?? null}
        </button>
    )
}

//O operador && (AND lógico) retorna o segundo valor apenas se o primeiro for verdadeiro.
//Tendo em vista a interpolação, colocar as classes que poderão ser formadas na safetlist dentro do tailwind.config.js