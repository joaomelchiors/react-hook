
import { IconCheck } from "@tabler/icons-react";
import Botao from "../templates/Botao";
import Janela from "../templates/Janela";
import { useContext } from "react";
import { ProdutoContext } from "@/pages/contexto/lojaComContexto";

export default function FinalizarCompra() {
    const contexto = useContext(ProdutoContext)
    if(!contexto) {
        return <p>Contexto não Disponível</p>
    }
    
    const {setListaProduto, total} = contexto
    
    function finalizar() {
        window.alert("Compra realizada com sucesso!");
        setListaProduto([])
    }

    return (
        <Janela titulo="Finalizar" backGroundColor="bg-red-600" vertical>
            <span className="text-2xl text-center">
                Total: <strong>{total}</strong>
            </span>

            <Botao
                tamanho="base"
                backGroundColor="bg-white text-red-600"
                icone={<IconCheck />}
                texto="Finalizar"
                onClick={finalizar}
                className="w-32"
            />
        </Janela>
    );
}
