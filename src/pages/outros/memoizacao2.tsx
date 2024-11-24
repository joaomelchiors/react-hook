import Pagina from "@/components/templates/Pagina";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
    const codeHTML = `const themStyle = useMemo( () => { 
return {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black' 
}
}, [dark])

useEffect(() => console.log('Renderizei ThemStyle'), [themStyle])
`

    const observacao = `Uma segunda abordagem para o useMemo é o fato de que a cada nova renderização, um 
    uma variável definida no escopo da função, será motanda na memória, mesmo ela sendo igual como por 
    exemplo o const themStyle. Ou seja o useEffect que é chamado após a execução da mudança da variável, 
    será executado a cada nova renderização, pois o javaScript não compara conteudo e sim referência e mesmo 
    o conteúdo sendo igual ele terá diferença na referência e será visto pelo useEffect como modificado.***
    Ao aplicar useMemo o themStyle só passa ser modificado a cada alteração de dark e com isso não é criado nova
    referencia.`

    const [number, setNumber] = useState<number>(0)
    const [dark, setDark] = useState<boolean>(false)
    const doubleNumber = useMemo( () => slowFunction(number), [number])

    //https://www.youtube.com/watch?v=THL1OPn72vo
    const themStyle = useMemo( () => { 
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black' 
        }
    }, [dark])

    useEffect(() => console.log('Renderizei ThemStyle'), [themStyle])

    return (
        <Pagina 
            titulo={"Memoizando"} 
            subtitulo={"Memoizando variáveis para não sofrer renderizações a cada atualização"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <input className="w-1/3 text-black px-2"
            type="number" value={number} onChange={( e ) => setNumber(parseInt(e.target.value))} />
            <button className="bg-zinc-600 hover:bg-zinc-700 rounded-md px-7 py-2 border-2 hover:border-zinc-500 m-3"
            onClick={() => setDark(!dark)}>Change Theme</button>
            <div className="w-1/3 px-2" style={themStyle}>{doubleNumber}</div>
        </Pagina>
  );
}

function slowFunction(num: number):number {
    console.log('Calling Slow Function')
    for (let i = 0 ; i <= 1000000000; i++) {}
    return num * 2
}