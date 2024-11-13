import { useState } from "react";

export default function useToggle(valor?:boolean) {
    const [ativo, setAtivo] = useState<boolean> (valor ?? false);

    function toggleAtivo () {
        setAtivo(!ativo); //o parametro negação inverte sempre a posição ativo
    }

    /*
        como estou fazendo um hook personalizado do useState (cont.)
        o retorno tb é um array com valor e função.
        O retorno é uma variável para eu poder tipar.
    */
    const returnArray:[boolean, ()=>void] = [ativo, toggleAtivo]

    return returnArray
}

