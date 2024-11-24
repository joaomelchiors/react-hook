import InputFormatado from "@/components/formulario/InputFormatado";
import Botao from "@/components/templates/Botao";
import Display from "@/components/templates/Display";
import Logo from "@/components/templates/Logo";
import Pagina from "@/components/templates/Pagina";
import { useState } from "react";

export default function Home() {
    const codeHTML = `Funcão fora do useCallback
export default function Home() {

const [quantidade, setQuantidade] = useState<number>(0);

function finalizar (e:React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    window.alert("Compra Finalizada!");
    setQuantidade(0)
}

`

    const observacao = `A função fora do callback é executada a cada renderização da página que acontece a cada alteração no useState 
    quandidade`

    const [quantidade, setQuantidade] = useState<number>(0);

    function finalizar (e:React.MouseEvent<HTMLElement>) {
        console.log("passei aqui")
        e.preventDefault();
        window.alert("Compra Finalizada!");
        setQuantidade(0)
    }


    return (
        <Pagina 
            titulo={"Memoizando Funções"} 
            subtitulo={"Entendendo o Hook useCallBack"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <Logo />
            <Display texto="Quantos produtos vc quer?" />
            <form>
                <div className="flex flex-col justify-center items-center">
                    <InputFormatado 
                        valor={quantidade}
                        tipo="number"
                        onInput={(e:React.ChangeEvent<HTMLInputElement>) => 
                            setQuantidade(Number(e.target.value))}></InputFormatado>
                    <Botao texto="Confirmar" onClick={(e:React.MouseEvent<HTMLElement>) => 
                            finalizar(e)} tamanho={"base"} className="w-24 mt-4"></Botao>
                </div>
            </form>
        </Pagina>
  );
}