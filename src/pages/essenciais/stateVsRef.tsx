import Botao from "@/components/templates/Botao";
import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useEffect, useRef, useState } from "react";

let qualquer = 1

export default function Home() {
    const codeHTML = `const [estado, setEstado] = useState<number> (0)
const referencia = useRef<number>(0)

function incrementaReferencia() {
    referencia.current = referencia.current +1
}`

    const observacao = `useState armazena estados que afetam a renderização do componente, 
    causando re-renderização quando alterado. Já useRef mantém valores persistentes entre 
    renderizações sem causar re-renderizações, sendo ideal para dados que não precisam atualizar a interface.***
    O useState retorna um Array.***
    O useRef retorna um Objeto.***
    Esse objeto tem uma propriedade current, onde nos permite fazer alterações.***
    Vale ressalta que não é legal usar as variáveis que guardam o useRef não sejam associados a elementos da DOM,
    portanto esse exercício serve para mostrar o comportamento do useRef.

    `
    console.log('renderizando')
    const [estado, setEstado] = useState<number> (0)
    const referencia = useRef<number>(0)

    function incrementaReferencia() {
        referencia.current = referencia.current +1
        console.log(qualquer)
    }

    useEffect(()=> {
        return () => {qualquer = 1}
    }
    ,[])
        
    return (
        <Pagina 
            titulo={"Referência Vs State"} 
            subtitulo={"Entendendo useRef"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Display texto={`R: ${referencia.current} vs S: ${estado.toString()} vs qualquer ${qualquer}`}/>
            <div className="
                flex
                gap-5
            ">
                <Botao 
                    redondo
                    tamanho="2xl"
                    backGroundColor="bg-pink-500"
                    texto="R+"
                    onClick={() => incrementaReferencia()}
                />
                <Botao 
                    redondo
                    tamanho="2xl"
                    backGroundColor="bg-green-500"
                    texto="S+"
                    onClick={() => setEstado(estado + 1)}
                />                
                <Botao 
                    redondo
                    tamanho="2xl"
                    backGroundColor="bg-blue-500"
                    texto="Var"
                    onClick={() => qualquer += 1}
                />
            </div>

        </Pagina>
  );
}