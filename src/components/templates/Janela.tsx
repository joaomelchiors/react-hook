import { ReactNode } from "react"

interface JanelaProps {
    titulo: string;
    children: NonNullable<ReactNode>;
    backGroundColor?: string;
    className?: string;
    vertical?: boolean;
    gap?: string;
}

export default function Janela(props:JanelaProps) {
    return (
        <div id="renderJanela"
        className={`
            flex flex-col gap-0
            overflow-hidden
            border border-zinc-700 rounded-lg
            ${props.className ?? ''}
        `}>
            <div id="tituloJanela"
            className={`
                flex justify-center
                p-4
                text-lg font-black
                ${props.backGroundColor ?? 'bg-black'} bg-opacity-70
            `}>
                {props.titulo}
            </div>
            <div id="filhoJanela"
            className={`
                flex-1
                flex justify-center items-center ${props.vertical && 'flex-col'}
                gap-${props.gap ?? `3`}
                px-12 py-5
                ${props.backGroundColor ?? 'bg-transparent'}
            `}>
                {props.children}
            </div>
        </div>
    )
}