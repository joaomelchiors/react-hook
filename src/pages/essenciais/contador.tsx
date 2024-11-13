import Botao from "@/components/templates/Botao";
import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function contador(){
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contador, setContador] = useState(0)

    const codigoHTML = `<function qualquer() {
    let a = 1;
    function incrementar() {
        console.log('A foi alterado para = {a}')
        return a++
    }

    return (console.log('Renderizando A = {a}'),
            setInterval(() => incrementar(), 1000)
    )
}
    
-> Declaração useState: -------------------------
const [contador, setContador] = useState(0)

-> Na Renderização ------------------------------
onClick={() => {
            setContador(contador - 1)
        }}`

    const observacoes = `Olhando o código acima, percebe-se que o ato de renderizar acontece na execução incial, 
    porém mesmo alterando as variáveis vc não renderiza ou seja a linha console.log('Renderizando...) não é executada novamente
    isso acontece nos componentes. ***
    Nesse sentido, o React tem seus Hoocks que existem para modificar e monitorar os elementos que farão a renderização dos
    componentes. ***
    O useState é esse hoock que consegue alterar os valores das variáveis e após renderizar o componente.
     `

    return (
        <Pagina 
            titulo={"Contador"} subtitulo={"Entendendo o que é um estado"}
            codigoHTML={codigoHTML} observacao={observacoes}
        >
            <Display texto={contador.toString()} />
            <div className="inline-flex Flex gap-2">
                <Botao 
                    redondo
                    icone={<IconMinus size={20}/>} 
                    tamanho={"base"} 
                    backGroundColor="bg-blue-500"
                    onClick={() => {
                        setContador(contador - 1)
                    }}
                />
                <Botao 
                    redondo
                    texto={'0'} 
                    tamanho={"base"} 
                    backGroundColor="bg-red-500"
                    onClick={() => {
                        setContador(0)
                    }}
                />
                <Botao 
                    redondo
                    icone={<IconPlus size={20}/>} 
                    tamanho={"base"} 
                    backGroundColor="bg-green-500"
                    onClick={() => {
                        setContador(contador + 1)
                    }}
                />
            </div>
        </Pagina>
    )
}