import AdicionarProduto from "@/components/loja/ContextAdicionarProduto";
import Carrinho from "@/components/loja/ContextCarrinho";
import FinalizarCompra from "@/components/loja/ContextFinalizarCompra";
import Pagina from "@/components/templates/Pagina";
import { Produto } from "@/types";
import { createContext, Dispatch, SetStateAction, useMemo, useState } from "react";

export interface ProdutoContextType {
    listaProduto: Produto[];
    setListaProduto: Dispatch<SetStateAction<Produto[]>>
    total: string
}

export const ProdutoContext = createContext<ProdutoContextType | null>(null)

export default function PageLoja() {
    const codeHTML = `export interface ProdutoContextType {
    listaProduto: Produto[];
    setListaProduto: Dispatch<SetStateAction<Produto[]>>
    total: string
}

export const ProdutoContext = createContext<ProdutoContextType | null>(null)

const [listaProduto, setListaProduto] = useState<Produto[]>([])

const total = useMemo(() => {
    const soma =  listaProduto.reduce((acc, produtoInListaProduto) => acc + produtoInListaProduto.preco, 0)
    const formatar = soma
        .toFixed(2)
        .toString()
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.') //separar unidades de milhar
    
    return R$ {formatar}

}, [listaProduto])

return (
    <ProdutoContext.Provider value={{listaProduto, setListaProduto, total}}>
)`

    const observacao = `Nas páginas filho:***
const contexto = useContext(ProdutoContext)***
if(!contexto) {return <p>Contexto não disponível</p>}***
const {listaProduto, setListaProduto} = contexto`
    
    const [listaProduto, setListaProduto] = useState<Produto[]>([])
    
    const total = useMemo(() => {
        const soma =  listaProduto.reduce((acc, produtoInListaProduto) => acc + produtoInListaProduto.preco, 0)
        const formatar = soma
            .toFixed(2)
            .toString()
            .replace('.', ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.') //separar unidades de milhar
        
        return `R$ ${formatar}`

    }, [listaProduto])
    
    return (
        <ProdutoContext.Provider value={{listaProduto, setListaProduto, total}}>
            <Pagina 
                titulo={"Loja"} 
                subtitulo={"Compartilhando informações entre múltiplos componentes com contexto"}
                codigoHTML={codeHTML}
                observacao={observacao}
            >
                <div className={`
                    flex flex-col gap-4
                    mt-10
                `}>
                    <div className={`
                        flex gap-4
                    `}>
                        <AdicionarProduto />
                        <FinalizarCompra />
                    </div>
                    <Carrinho >
                        
                    </Carrinho>
                </div>
            </Pagina>
        </ProdutoContext.Provider>
  );
}