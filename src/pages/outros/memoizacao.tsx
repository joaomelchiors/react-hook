import InputFormatado from "@/components/formulario/InputFormatado";
import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useState } from "react";

export default function Memoizacao() {
    const codeHTML = 'Modelo'

    const observacao = 'Modelo'

    const [numero1, setNumero1] = useState<number>(0)
    const [numero2, setNumero2] = useState<number>(0)
    const [numero3, setNumero3] = useState<number>(0)
    const [numero4, setNumero4] = useState<number>(0)

    const potencia = numero1 ** numero2
    const soma = numero3 + numero4


    return (
        <Pagina 
            titulo={"Memoizacao"} 
            subtitulo={"Usando hook useMemo()"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <div className="
                flex flex-col
                justify-center items-center
            ">
                <Display texto={
                    <>
                        <span>{numero1}</span>
                        <sup>{numero2}</sup>
                        <span>{potencia}</span>
                    </>
                }/>
                <div className="flex gap-4">
                    <InputFormatado 
                        tipo={"number"} 
                        valor={numero1}
                        onInput={(e) => setNumero1(Number((e.target as HTMLInputElement).value))}
                    />
                    <InputFormatado 
                        tipo={"number"} 
                        valor={numero2}
                        onInput={(e) => setNumero2(Number((e.target as HTMLInputElement).value))}
                    />
                </div>
                <Display texto={`${numero3} + ${numero4} = ${soma}`}/>
                <div className="flex gap-4">
                    <InputFormatado 
                        tipo={"number"} 
                        valor={numero3}
                        onInput={(e) => setNumero3(Number((e.target as HTMLInputElement).value))}
                    />
                    <InputFormatado 
                        tipo={"number"} 
                        valor={numero4}
                        onInput={(e) => setNumero4(Number((e.target as HTMLInputElement).value))}
                    />
                </div>

            </div>    
        </Pagina>
  );
}