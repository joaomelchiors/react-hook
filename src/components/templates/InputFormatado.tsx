interface InputFormatadoProps {
    tipo: string
    valor: string | number
    label?: string
    className?: string
    onInput?: () => void
}

export default function InputFormatado(props:InputFormatadoProps) {
    return(
        <>
            {props.label && (
                <label className="m-1">{props.label}</label>
            )}
            <input 
                type={props.tipo} 
                value={props.valor} 
                onInput={props.onInput} 
                className={`
                    px-2 w-40 h-11 rounded-md
                    text-gray-600
                    ${props.className ?? ''}
                `}    
            />
        </>
    )
}