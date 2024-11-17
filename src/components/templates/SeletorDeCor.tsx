import { listaDeCores } from "@/data"
import Botao from "./Botao"
import useTema from "@/data/hooks/useTema"

interface SeletorDeCorProps {
    fecharMenu: () => void
}

export default function SeletorDeCor(props:SeletorDeCorProps) {
    const contextTema = useTema()

    if(!contextTema) {
        return <p>Não há contextTema</p>
    }
    
    const {setCorTema} = contextTema

    const renderizarListaBotoes = () => listaDeCores.map((cor, index) => (
        <Botao 
            key={index} 
            backGroundColor={`bg-${cor}`} 
            tamanho={"base"}
            onClick={() => {
                setCorTema(cor)
                props.fecharMenu()  
            }}
            className="
                border-solid border-2 border-zinc-500"
        />
    ))

    return (
        <div className="
            flex items-center justify-center gap-4
            absolute right-5 top-20 z-10 
        ">
            {renderizarListaBotoes()}
        </div>
    )
}