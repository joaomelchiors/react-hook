import InputFormatado from "@/components/formulario/InputFormatado";
import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useMemo, useState } from "react";

export default function Memoizacao() {
    const codeHTML = 'Modelo'

    const observacao = `Usar useMemo apenas com***
    funções puras:***
        Sem interagir com APIs externas.***
        Sem manipular o DOM diretamente.***
        Sem modificar estados ou variáveis fora do escopo local.***
        ***
    A memoização é uma técnica para aumentar o desenpenho das aplicações, isso porque uma 
    operação que demora muito tempo, quando a página é rendeirzada ele passa a ser processada e isso intrronpe
    toda a navegação. A tela fica congelada!!! Isso porque mesmo não tendo alterado os parametros durante a 
    renderização a função será recalculada.***
    Usando a memoização, agora guarda-se os valores dos paramentros e o resultado para que este só seja calculado 
    após a modificação deles.
    `

    const [numero1, setNumero1] = useState<number>(0)
    const [numero2, setNumero2] = useState<number>(0)
    const [numero3, setNumero3] = useState<number>(0)
    const [numero4, setNumero4] = useState<number>(0)
    //const [numero5, setNumero5] = useState<number>(0)

    /*
        function potencia() {
            const future = Date.now() + 3000;
            while (Date.now() < future);
            return numero1 ** numero2
        }
    */

    //assinatura igual a do useEffect
    /*
        useEffect(() => {
            const future = Date.now() + 3000;
            while (Date.now() < future);
            setNumero5(numero1 ** numero2)
        }, [numero1, numero2]); 
    */

    //assinatura igual a do useEffect
    const potencia = useMemo(()=>{
        const future = Date.now() + 1500;
        while (Date.now() < future);
        return numero1 ** numero2
    }, [numero1, numero2])

    
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
                        <sup>{numero2}</sup> = <span>{potencia}</span>
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