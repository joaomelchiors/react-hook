import Display from "@/components/templates/Display";
import Pagina from "@/components/templates/Pagina";
import { useEffect, useState } from "react";

export default function Home() {
    console.log('renderizei')
    const codeHTML = `Com várias renderizações
const quantCaract: number = 400
const [caractRestante, setCaractRestante] = useState<number> (quantCaract)
const [texto, setTexto] = useState<string | undefined>()

function calcCaract() {
    if(!texto){
        return
    }
    const quantCaractDig:number = texto.length
    setCaractRestante(quantCaract - quantCaractDig)
}

useEffect(()=> {calcCaract()}, [texto])

Nova Sintaxe para o useEfect "Com retorno no bloco da callBack"
useEffect(()=> { 
    const timer = setTimeout(() => calcCaract(), 1000)
    return ()=>{clearTimeout(timer)}
}, [texto])
    `

    const observacao = `Este exemplo mostra com fazer uma contagem de caracteres.***
    Uso de multiplos Hoocks.***
    No primiero jeito temos várias renderizações, pois a cada caracter digitado o componente texto sofre 
    alteração e com isso o seu estado muda, sendo acompanhando pelo useEffect que executa o set.. e renderiza 
    a pg.***
    Caso pensamos em usar um setTimeOut o problema irá persistir porém com delay.***
    Então para isso Utilizatemos uma Função de Limpeza.***
    Como ela funciona? Elá é o seguinte, se criarmos uma função de RETORNO na callback do useEffect, 
    ela só será executada quando o estado monitorado for chamado novamente. Previnindo repetições por exemplo. ***
    Porém seu uso de limpeza é util mesmo sem um timer veja outras aplicações:***
    Se você estivesse configurando um listener de evento, como window.addEventListener, num resize, por exemplo. ***
    Se você estiver fazendo uma chamada de API ou usando WebSockets, pode ser necessário cancelar a 
    assinatura ou a requisição quando o componente for desmontado.`
    
    //400 é a quantidade total de caracteres
    const quantCaract: number = 400
    const [caractRestante, setCaractRestante] = useState<number> (quantCaract)
    const [texto, setTexto] = useState<string | undefined>()

    function calcCaract() {
        if(!texto){
            return
        }
        const quantCaractDig:number = texto.length
        setCaractRestante(quantCaract - quantCaractDig)
        console.log('renderizando')
    }

    useEffect(()=> { 
        const timer = setTimeout(() => calcCaract(), 300)
        return ()=>{clearTimeout(timer)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [texto])

    return (
        <Pagina 
            titulo={"Contagem de Caracteres"} 
            subtitulo={"Entendendo as funções de limpeza"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Display texto={`Digite um texto`} textoComplementar={`${caractRestante}`} />
            <textarea 
                value={texto} 
                onChange={(e) => {setTexto(e.currentTarget.value)}}
                className={`
                    border border-zinc-700 bg-zinc-700 rounded-md
                    text-white text-2xl w-3/5 h-72
                    p-5
            `}>

            </textarea>
        </Pagina>
  );
}