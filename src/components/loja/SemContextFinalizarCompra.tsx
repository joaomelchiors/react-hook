
import { IconCheck } from "@tabler/icons-react";
import Botao from "../templates/Botao";
import Janela from "../templates/Janela";

interface FinalizarCompraProps {
    total: number
}

export default function FinalizarCompra(props:FinalizarCompraProps) {
    const total = props.total
    console.log('renderizei Finalizar ', total)
    function finalizar() {
        window.alert("Compra realizada com sucesso!");
    }

    return (
        <Janela titulo="Finalizar" backGroundColor="bg-red-600" vertical>
            <span className="text-2xl text-center">
                Total: <strong>{total.toFixed(2)}</strong>
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
