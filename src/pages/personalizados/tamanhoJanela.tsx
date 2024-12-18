import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import useSizeWindow from "@/data/hooks/useSizeWindow";
import { useEffect, useState } from "react";

export default function Home() {
    const codeHTML = 'Modelo'

    const observacao = 'Modelo'
    //console.log('executando useSizeWindow')
    const [tamanho] = useSizeWindow()
    
    //usa-se a variável tamanhoFinal para renderizar a pagina para não dar erro de hidratação
    const [tamanhoFinal, setTamanhoFinal] = useState("")
    
    useEffect(()=> {
        setTamanhoFinal(tamanho || 'calculando...')
        console.log('renderizando...')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Pagina 
            titulo={"Qual é o tamanho da página?"} 
            subtitulo={"Usando um hook personalizado para identificar o tamanho da página"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Display texto={tamanhoFinal} />
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