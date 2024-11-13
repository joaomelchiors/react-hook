import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: string;
    subtitulo?: string;
}

export default function Cabecalho(props:CabecalhoProps) {
    return (
        <div id="renderCabecalho" className="
            Flex justify-between items-center
        ">
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}