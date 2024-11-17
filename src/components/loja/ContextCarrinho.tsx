import { useContext } from "react";
import Janela from "../templates/Janela";
import { ProdutoContext } from "@/pages/contexto/lojaComContexto";


export default function Carrinho() {
    const contexto = useContext(ProdutoContext)

    if(!contexto) {
       return <p>Contexto não Disponível</p>
    }

    const {listaProduto, total} = contexto



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
                        {listaProduto.map((produto) => {
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
                        Total: <strong>{total}</strong>
                    </span>
                </div>
        </Janela>
    );
}
