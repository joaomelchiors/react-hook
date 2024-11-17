import { useRef, useState } from "react";
import InputFormatado from "../formulario/InputFormatado";
import Botao from "../templates/Botao";
import Janela from "../templates/Janela";
import { IconPlus } from "@tabler/icons-react";
import { Produto } from "@/types";

interface AdicionarProdutoProps {
    comunicacaoIndireta: (obj:Produto) => number
}

export default function AdicionarProduto(props:AdicionarProdutoProps) {
    const [quantidade, setQuantidade] = useState(1);
    const [preco, setPreco] = useState(1.99);
    console.log('renderizei AddProduto')
    /*
    const adicionar = () => {
        console.log('adicionar')
        const sequencia = 1;
        const produto = {
            id: sequencia,
            nome: `Produto ${sequencia}`,
            quantidade: quantidade,
            preco: preco,
        };
    };
    */

    const sequencia = useRef(1)
    const produto = {
        id: sequencia.current,
        nome: `Produto ${sequencia.current}`,
        quantidade: quantidade,
        preco: preco,
    };
    

    return (
        <Janela
            titulo="Adicionar Produto"
            backGroundColor="bg-purple-700"
        >
            {sequencia.current}
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
                onClick={() => {
                    sequencia.current = props.comunicacaoIndireta(produto)
                }}
            />
        </Janela>
    );
}
