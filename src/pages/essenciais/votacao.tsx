import Botao from "@/components/templates/Botao";
import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useState } from "react";

export default function Home() {
    const codeHTML = `Declarando o useState com Objeto
const [dados, setDados] = useState({votosVerde: 0, votosRoxo:0})

//Atualizando os dados de forma direta
setDados({ votosVerde: dados.votosVerde, votosRoxo: dados.votosRoxo + 1 });

//Atualiando com a função de callback
setDados({ votosVerde: dados.votosVerde, votosRoxo: dados.votosRoxo + 1 });`

    const observacao = `Forma Direta ***
Quando você está fazendo uma atualização direta pode causar problemas se o estado dados for atualizado rapidamente
 várias vezes em sucessão, como em casos de múltiplos cliques ou chamadas assíncronas. ***
***
Com função CallBACK ***
Quando você está usando uma função de atualização baseada no estado mais recente "CALLBACK". 
Essa função recebe o valor atualizado mais recente de dadosAtuais, garantindo que o incremento 
ou a mudança ocorra com o estado correto.`


    const [dados, setDados] = useState({votosVerde: 0, votosRoxo:0})



  return (
    <Pagina 
      titulo={"Votação"} 
      subtitulo={"Usando estado com objeto"}
      codigoHTML={codeHTML}
      observacao={observacao}
    >
        <div className={`
            flex flex-col
            justify-center items-center
        `}>
            <Display
                texto="Qual a melhor cor"
                textoComplementar={`Verde: ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}
            />
            <div className={`
                flex gap-2 pb-3
            `}>
                <Botao 
                    redondo
                    tamanho="2xl"
                    backGroundColor="bg-green-600" 
                    onClick={() => setDados((dadosAtuais)=>({votosVerde: dadosAtuais.votosVerde, votosRoxo: dadosAtuais.votosRoxo + 1}))}
                />
                <Botao 
                    redondo
                    tamanho="2xl"
                    backGroundColor="bg-purple-600" 
                    onClick={() => setDados((dadosAtuais)=>({votosVerde: dadosAtuais.votosVerde + 1, votosRoxo: dadosAtuais.votosRoxo}))}
                />
            </div>
            <Botao
                texto="Zerar" 
                tamanho="lg"
                backGroundColor="bg-gray-300" 
                onClick={() => setDados({votosVerde: 0, votosRoxo: 0})}
                className="rounded-md text-black w-20 justify-center"
                />
        </div>
    </Pagina>
  );
}