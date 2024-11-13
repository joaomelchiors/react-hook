import Botao from "@/components/templates/Botao";
import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useState } from "react";

export default function Home() {
    const codeHTML = `const [n1, setN1] = useState<number>(0)
const [n2, setN2] = useState<number>(0)
const [maior, setMaior] = useState<string>('Inicio')

function qualMaior(n1:number, n2:number) {
    if(n1 > n2) {
        setMaior('N1 é maior que N2')
    } else if (n2 > n1) {
        setMaior('N2 é maior que N1')
    } else {
        setMaior('N1 é igual a N2')
    }
}

<Display texto={N1: {n1} | N2 {n2}}></Display>
<Display texto={maior} />
<div className="
    flex gap-3
">
    <Botao 
        texto={'n1'} 
        tamanho={"base"}
        backGroundColor="bg-blue-500"
        onClick={() => {
            setN1(n1 + 1);
            qualMaior(n1, n2);
        }}
        className="w-32 rounded-md justify-center font-black
    "/>
    <Botao 
        texto={'n2'} 
        tamanho={"base"}
        backGroundColor="bg-orange-500"
        onClick={() => {
            setN2(n2 + 1);
            qualMaior(n1, n2);
        }}
        className="w-32 rounded-md justify-center font-black
    "/>
}`

    const observacao = `O que acontece é que dado todo a asyncronismo entre o estados a renderização acontece, 
    mesmo antes da função "qualMaior" saber que foi modificado o valor das variáveis n1 e n2, a abordagem 
    de executar tanto o estado de nX junto de "qualMaior" com intuito de incrementar o número e verificar, causa 
    um efeito colateral, um DELAY, um erro. Abordagem certa é deixar o useEffect chamar o "qualMaior" quando notar a mudança 
    de n1 ou n2.`

    const [n1, setN1] = useState<number>(0)
    const [n2, setN2] = useState<number>(0)
    const [maior, setMaior] = useState<string>('Inicio')

    function qualMaior(n1:number, n2:number) {
        if(n1 > n2) {
            setMaior('N1 é maior que N2')
        } else if (n2 > n1) {
            setMaior('N2 é maior que N1')
        } else {
            setMaior('N1 é igual a N2')
        }
    }

    

    return (
        <Pagina 
            titulo={"Maior Com Colateral"} 
            subtitulo={`Projeto "marior" com o efeito colateral`}
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
                    onClick={() => {
                        qualMaior(n1, n2);
                        setN1(n1 + 1);  
                    }}
                    className="w-32 rounded-md justify-center font-black
                "/>
                <Botao 
                    texto={'n2'} 
                    tamanho={"base"}
                    backGroundColor="bg-orange-500"
                    onClick={() => {
                        setN2(n2 + 1);
                        qualMaior(n1, n2);
                    }}
                    className="w-32 rounded-md justify-center font-black
                "/>
            </div>
        </Pagina>
  );
}