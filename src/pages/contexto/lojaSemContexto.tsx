import AdicionarProduto from "@/components/loja/SemContextAdicionarProduto";
import Carrinho from "@/components/loja/SemContextCarrinho";
import FinalizarCompra from "@/components/loja/SemContextFinalizarCompra";
import Pagina from "@/components/templates/Pagina";
import { Produto } from "@/types";
import { useEffect, useState } from "react";


export default function PageLoja() {
    const codeHTML = 'Modelo'

    const observacao = 'Carrinho é uma lista, que tem que ser atua+Render, logo useState'

    const [listaProduto, setListaProduto] = useState<Produto[]>([])
    const [total, setTotal] = useState(0)

    console.log('renderizei pgloja')

    
    function produto(obj: Produto) {
        const novoProduto = {
            id: obj.id,
            nome: obj.nome,
            preco: obj.preco,
            quantidade: obj.quantidade
        }
        setListaProduto([...listaProduto, novoProduto])
        
        return (novoProduto.id + 1)
    }

    useEffect(()=>{
        const somaPrecos = listaProduto.reduce((soma, produto) => soma + produto.preco, 0)
        setTotal(somaPrecos)
    }, [listaProduto])
    

    return (
        <Pagina 
            titulo={"Loja"} 
            subtitulo={"Compartilhando informações entre múltiplos componentes com contexto"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <div className={`
                flex flex-col gap-4
            `}>
                <div className={`
                    flex gap-4
                `}>
                    <AdicionarProduto comunicacaoIndireta={produto} />
                    <FinalizarCompra total={total}/>
                </div>
                <Carrinho total={total}>
                    {listaProduto}
                </Carrinho>
            </div>
        </Pagina>
  );
}