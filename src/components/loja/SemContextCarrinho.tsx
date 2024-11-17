import Janela from "../templates/Janela";
import { Produto } from "@/types";


interface CarrinhoProps {
    total: number
    children: Produto[]
}


export default function Carrinho(props:CarrinhoProps) {
    const produtos = props.children

    const total = props.total //produtos.reduce((acc, produto) => acc + +produto.preco, 0);
    
    return (
        <Janela titulo="Carrinho" backGroundColor="bg-green-700" vertical>
            <div className="overflow-y-auto relative max-h-60 h-fit min-w-full">
                <table className="table-auto w-full h-full text-center">
                    <thead>
                        <tr>
                            <th className="w-1/3">Nome</th>
                            <th className="w-1/3">Qtde</th>
                            <th className="w-1/3">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => {
                            return (
                                <tr key={produto.id}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidade}</td>
                                    <td>{produto.preco}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
                <div className="text-2xl">
                    <span>
                        Total: <strong>{total.toFixed(2).toString()}</strong>
                    </span>
                </div>
        </Janela>
    );
}
