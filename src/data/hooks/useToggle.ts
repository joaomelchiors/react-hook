import { useState } from "react";

export default function useToggle(valor?:boolean):[boolean, (e?:boolean) => void, () => void, () => void]  {
    
    const [ativo, setAtivo] = useState<boolean> (valor ?? false);

    function toggleAtivo (valor?:boolean) {
        const params:boolean = valor ? valor : !ativo
        setAtivo(params); //o parametro negação inverte sempre a posição ativo
    }

    function ativar () {
        setAtivo(true)
    }

    function desativar () {
        setAtivo(false)
    }

    return [ativo, toggleAtivo, ativar, desativar]
}

