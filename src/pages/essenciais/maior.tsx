import Botao from "@/components/templates/Botao";
import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useEffect, useState } from "react";

export default function Home() {
    const codeHTML = `useEffect(() => qualMaior(n1, n2), [n1, n2])
    
useEffect(() => {
    if (n1 > 20 || n2 > 20) {
        window.alert("Limite atingido, números zerados")
        setN1(0)
        setN2(0)
    }
}, [n1, n2])`

    const observacao = `useEffect acompanhando o estado de n1 e n2, 
    modificando variável maior e também abrindo pop'up com condicional.`

    const [n1, setN1] = useState<number>(0)
    const [n2, setN2] = useState<number>(0)
    const [maior, setMaior] = useState<string>()

    useEffect(() => qualMaior(n1, n2), [n1, n2])

    useEffect(() => {
        if (n1 > 20 || n2 > 20) {
            window.alert("Limite atingido, números zerados")
            setN1(0)
            setN2(0)
        }
    }, [n1, n2])

    function qualMaior(n1:number, n2:number) {
        if(n1 == 0 && n2 == 0) {
            setMaior('Início')
        } else if (n1 > n2) {
            setMaior('N1 é maior que N2')
        } else if (n2> n1){
            setMaior('N2 é maior que N1')
        } else {
            setMaior('N1 é igual a N2')
        }
    }

    
    return (
        <Pagina 
            titulo={"Maior"} 
            subtitulo={`Variável maior é renderizada pelo useEffect`}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Display texto={`N1: ${n1} | N2: ${n2}`}></Display>
            <span>{maior}</span>
            <div className="
                flex gap-3
            ">
                <Botao 
                    texto={'n1'} 
                    tamanho={"base"}
                    backGroundColor="bg-blue-500"
                    onClick={() => setN1(n1 + 1)}
                    className="w-32 rounded-md justify-center font-black
                "/>
                <Botao 
                    texto={'n2'} 
                    tamanho={"base"}
                    backGroundColor="bg-orange-500"
                    onClick={() => setN2(n2 +1)}
                    className="w-32 rounded-md justify-center font-black
                "/>
            </div>
        </Pagina>
  );
}