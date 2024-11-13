interface DemonstracaoCodigoProps {
    codigoHTML?: string
    observacao?: string
}

export default function DemonstracaoCodigo(props: DemonstracaoCodigoProps) {
    const paragrafos: string[] = props.observacao? props.observacao.split('***') : [];
    
    return (
        <div className="
            flex flex-col mt-6 text-zinc-600
            mx-16
            max-w-[800px]
        ">
            Código:
            <pre className="bg-black text-zinc-300 rounded-lg p-2">
                <code>{props.codigoHTML}</code>
            </pre>        
            <span>
                {props.observacao && <h3 className="mt-3 text-zinc-500 ">Anotações:</h3>}
                {props.observacao && paragrafos.map((paragrafo:string, index) => (
                    <p key={index} className="text-indent text-zinc-200">{`• ${paragrafo}`}</p>
                ))}
                
            </span>
        </div>
    )
}