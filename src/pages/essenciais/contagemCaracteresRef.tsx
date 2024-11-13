import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useRef, useState } from "react";

export default function Home() {
    const codeHTML = `const quantCaract: number = 400
const [caractRestante, setCaractRestante] = useState<number> (quantCaract)

const refTexto = useRef<HTMLTextAreaElement> (null)
const contador = useRef<NodeJS.Timeout | undefined> ()  
    
function iniciaContador() {
clearTimeout(contador.current)
contador.current = setTimeout(()=>{
        const caractDigitados = refTexto.current?.value.length ?? 0
        setCaractRestante(quantCaract - caractDigitados)
    }, 1000)
}
    `

    const observacao = ``
    
    //400 é a quantidade total de caracteres
    const quantCaract: number = 400
    const [caractRestante, setCaractRestante] = useState<number> (quantCaract)
    

    const refTexto = useRef<HTMLTextAreaElement> (null)
    const contador = useRef<NodeJS.Timeout | undefined> (undefined)        


    function iniciaContador() {
        clearTimeout(contador.current) // Limpa o timeout anterior
        contador.current = setTimeout(()=>{
                const caractDigitados = refTexto.current?.value.length ?? 0
                setCaractRestante(quantCaract - caractDigitados)
            }, 1000)
    }

    return (
        <Pagina 
            titulo={"Contagem de Caracteres"} 
            subtitulo={"Usando uma referência para controlar o tempo"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Display texto={`Digite um texto`} textoComplementar={`${caractRestante}`} />
            <textarea 
                ref={refTexto} 
                onChange={() => {iniciaContador()}}
                className={`
                    border border-zinc-700 bg-zinc-700 rounded-md
                    text-white text-2xl w-3/5 h-72
                    p-5
            `}>

            </textarea>
        </Pagina>
  );
}