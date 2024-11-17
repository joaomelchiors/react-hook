import { useContext, useState } from "react";
import InputFormatado from "../formulario/InputFormatado";
import Botao from "../templates/Botao";
import Janela from "../templates/Janela";
import { IconPlus } from "@tabler/icons-react";
import { ProdutoContext } from "@/pages/contexto/lojaComContexto";
import { Produto } from "@/types";


export default function AdicionarProduto() {
    //o useState não pode ficar depois da condição
    const [quantidade, setQuantidade] = useState(1);
    const [preco, setPreco] = useState(1.99);
    
    const contexto = useContext(ProdutoContext)
    
    if(!contexto) { //essa verificação é para eliminar o null
        return <p>Contexto não disponível</p>
    }

    const {listaProduto, setListaProduto} = contexto
    
    

    const adicionar = () => {
        console.log('adicionar', )
        const produto:Produto = {
            id: listaProduto.length + 1,
            nome: `Produto ${listaProduto.length + 1}`,
            quantidade: quantidade,
            preco: (preco * quantidade),
        };
        setListaProduto([...listaProduto, produto])
    };

    
    return (
        <Janela
            titulo="Adicionar Produto"
            backGroundColor="bg-purple-700"
        >
            <InputFormatado
                label="Adicionar"
                tipo="number"
                valor={quantidade}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setQuantidade(Number(e.target.value))}
            ></InputFormatado>
            <InputFormatado
                label="Itens de R$"
                tipo="number"
                valor={preco}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPreco(Number(e.target.value))}
            ></InputFormatado>
            <Botao
                tamanho="base"
                className="bg-green-600 w-32"
                icone={<IconPlus />}
                texto="Adicionar"
                onClick={adicionar}
            />
        </Janela>
    );
}
