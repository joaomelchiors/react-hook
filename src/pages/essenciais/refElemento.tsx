import Botao from "@/components/templates/Botao";
import Pagina from "@/components/templates/Pagina";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRef } from "react";

export default function Home() {
    const codeHTML = `const referencia = useRef<HTMLParagraphElement | null> (null)

const handleClick = () => {
    if (referencia.current) {
        referencia.current.style.color = "blue";
    }
};

<p ref={referencia} className="
    text-4xl text-gray-300 m-4
">Texto Legal</p>`

    const observacao = `Neste exemplo, estamos criando uma referência referencia com o hook useRef() e aplicando-a ao parágrafo <p ref={referencia}>. 
    Isso permite acessar o elemento diretamente no DOM sem causar uma re-renderização quando o valor de "referencia.current" é atualizado.***
    No exemplo acima, ao clicar no botão Botao, a função handleClick é executada, alterando a cor do texto Texto Legal para azul. Esse é o benefício do useRef: 
    você pode acessar e manipular diretamente um elemento DOM sem re-renderizar o componente.***
    o useRef é especialmente útil para armazenar referências diretas a elementos HTML (ou DOM), como <div>, <input>, <p>, etc., 
    dentro de um componente React.***
    Essas referências são usadas quando queremos manipular esses elementos diretamente sem precisar re-renderizar o componente. 
    Por exemplo, você pode alterar o estilo ou o foco de um <input> ou <p> sem re-renderizar todo o componente. 
    Esse uso é comum em casos onde você precisa acessar o elemento físico da página (no DOM) para manipulá-lo diretamente, 
    como acontece ao acessar current de uma referência criada com useRef.***
    A principal vantagem é que, ao manipular o inputRef.current, a renderização do componente não é acionada — o estado do componente não muda, 
    apenas o comportamento do elemento DOM.
    `

    const referencia = useRef<HTMLParagraphElement | null> (null)

    const handleClick = () => {
        if (referencia.current) {
            referencia.current.style.color = "blue";
        }
    };

    return (
        <Pagina 
            titulo={"Referênciando um elemento"} 
            subtitulo={"Referências na DOM"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <div className="
                flex flex-col justify-center items-center
            ">
                <p ref={referencia} className="
                    text-4xl text-gray-300 m-4
                ">Texto Legal</p>
                <Botao 
                    redondo
                    tamanho="2xl"
                    backGroundColor="bg-sky-500"
                    icone={<IconArrowLeft />}
                    onClick={handleClick}
                />
            </div>
        </Pagina>
  );
}