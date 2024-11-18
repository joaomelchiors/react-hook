import { ReactNode } from "react";

interface DisplayProps {
    texto: string | ReactNode;
    textoComplementar?: string
}

export default function Display(props:DisplayProps) {
    return (
        <>
            <p id="renderDisplay" className="
                m-4
                text-6xl text-gray-300
           ">
                {props.texto}
            </p>
            {props.textoComplementar && (
                <p className="
                    m-4
                    text-4xl text-gray-300
                ">
                    {props.textoComplementar}
                </p>
            )}
        </>
    )
}

/*
    <> </> é usado pois não consigo colocar direto no retorno dois elementos HTML
    dessa forma eu consigo sem gerar um elemento a mais na DOM
*/