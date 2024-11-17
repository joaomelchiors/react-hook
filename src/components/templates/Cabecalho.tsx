import useToggle from "@/data/hooks/useToggle";
import Titulo from "./Titulo";
import { IconPaint, IconX } from "@tabler/icons-react";
import SeletorDeCor from "./SeletorDeCor";

interface CabecalhoProps {
    titulo: string;
    subtitulo?: string;
}

export default function Cabecalho(props:CabecalhoProps) {
    const [mostrarSeletor, toggleMostrarSeletor] = useToggle(false)

    function fecharMenuFromSeletor () {
        toggleMostrarSeletor()
    }

    return (
        <div id="renderCabecalho" className="
            inline-flex justify-between items-center
        ">
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            {mostrarSeletor?
                <> 
                    <div onClick={() => toggleMostrarSeletor()} className="
                        cursor-pointer 
                    ">
                        <IconX />
                    </div>
                    <SeletorDeCor fecharMenu={fecharMenuFromSeletor}/>
                </>
            : 
                <div onClick={() => toggleMostrarSeletor()} className="
                    cursor-pointer 
                ">
                    <IconPaint />
                </div>
            }

        </div>
    )
}