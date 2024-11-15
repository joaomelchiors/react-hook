import { ReactNode } from "react";
import Cabecalho from "./Cabecalho";
import MenuPrincipal from "./MenuPrincipal";
import DemonstracaoCodigo from "./DemonstracaoCodigo";

interface PaginaProps {
    titulo: string;
    subtitulo: string;
    children: NonNullable<ReactNode>
    codigoHTML?: string
    observacao?: string
}

export default function Pagina(props:PaginaProps) {
    const mini:boolean = false
    
    return (
        <div className={`
            grid
            ${mini ? 'grid-cols-[130px_1fr]' : 'grid-cols-[370px_1fr]'}
             h-screen w-screen
            bg-zinc-900 text-white overflow-auto`
        }>
            <MenuPrincipal />
            <div id="areaCabecalhoConteudo" className="
                flex-1
                flex flex-col p-7
            ">
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <div id="renderConteudo" className="
                    flex-1
                    flex flex-col justify-center items-center
                    text-gray-200 
                ">
                    {props.children}
                    {props.codigoHTML && <DemonstracaoCodigo codigoHTML={props.codigoHTML} observacao={props.observacao} />}
                </div>
            </div>
        </div>
    )
}