import Botao from "@/components/templates/Botao";
import Pagina from "@/components/templates/Pagina";
import useToggle from "@/data/hooks/useToggle";
import { IconX } from "@tabler/icons-react";


export default function Home() {
    const codeHTML = `import { useState } from "react";

export default function useToggle(valor?:boolean) {
    const [ativo, setAtivo] = useState<boolean> (valor ?? false);

    function toggleAtivo () {
        setAtivo(!ativo); //o parametro negação inverte sempre a posição ativo
    }

    /*
        como estou fazendo um hook personalizado do useState (cont.)
        o retorno tb é um array com valor e função.
        O retorno é uma variável para eu poder tipar.
    */
    const returnArray:[boolean, ()=>void] = [ativo, toggleAtivo]
        
    return returnArray
}
    
No codigo da página a chamada ao hook personalizado
const [mostrar, toggleMostrar] = useToggle(false)`

    const observacao = `Cria-se um hoock personalizado com funções mais específicas, neste caso uma switch para 
    verdadeiro e falso.***
    Ao fazer o retorno do hook personalizado não esquecer de declarar uma varáivel para tipar o retorno.`

    const [mostrar, toggleMostrar] = useToggle(false)
   
    return (
        <Pagina 
            titulo={"Modal"} 
            subtitulo={"Usando o hook personalizado para abrir e fechar um modal"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Botao texto={"Abrir"} backGroundColor="bg-cyan-500" tamanho={"base"} className="w-80 rounded-md"
                onClick={toggleMostrar}
            />
            {mostrar ? 
                <div className={`
                    flex flex-center justify-center flex-col
                    w-80 h-80 p-4 m-4 rounded-md
                    bg-gray-500 
                    text-white text-2xl
                    ${``/*
                        CODIGO PARA FAZER ANIMADO
                        ${mostrar ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                        transition-opacity duration-500 ease-in-out
                    */}
                `}>
                    <Botao tamanho="xl" backGroundColor="bg-red-700" icone={<IconX />} className="rounded-md"
                        onClick={toggleMostrar}
                    />
                    <h1 className="mt-5">Clique no X para sair</h1>
                </div>
            : ""}
        </Pagina>
  );
}