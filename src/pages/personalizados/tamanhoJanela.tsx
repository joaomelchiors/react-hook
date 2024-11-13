import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import useSizeWindow from "@/data/hooks/useSizeWindow";
//import { useEffect, useState } from "react";

export default function Home() {
    const codeHTML = 'Modelo'

    const observacao = 'Modelo'
    //console.log('executando useSizeWindow')
    const tamanho = useSizeWindow()
    
/*
    const [tamanhoFinal, setTamanhoFinal] = useState("")
    
    useEffect(()=> {
        setTamanhoFinal(tamanho || 'Calculando ...')
        console.log('renderizando...')
    }, [tamanho])
*/    
    return (
        <Pagina 
            titulo={"Qual é o tamanho da página?"} 
            subtitulo={"Usando um hook personalizado para identificar o tamanho da página"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Display texto={tamanho} />
            <div className="w-40 h-40
            sm:bg-blue-300
            md:bg-pink-300
            lg:bg-green-300
            xl:bg-red-300
            2xl:bg-purple-300
            "></div>
        </Pagina>
  );
}