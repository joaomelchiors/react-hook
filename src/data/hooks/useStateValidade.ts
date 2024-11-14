import { useState } from "react";


//a ideia é criar um useState que não só retorna um valor, mas sim dois
export default function useStateValidado(paramValor:string, paramFuncaoValidar: (e:string)=>boolean){
    
    const [valor, setValor] = useState<string> (paramValor)
    const [validado, setValidado] = useState<boolean> (false)

    function setValorAndValidado(novoValor: string) {
        setValor(novoValor)
        setValidado(paramFuncaoValidar(novoValor))
    }

    //o retorno da função é poder chamar a função de fora da função que encasulou ela
    //assim podemos de fora mudar o valor e o status de validado
    return [valor, validado, setValorAndValidado] as const
}

/*
    Sem o as const, o TypeScript pode inferir o tipo do retorno de useStateValidado de forma mais genérica, ou seja, 
    ele trata o tipo como uma tupla mutável. Isso significa que ele pode inferir que o terceiro valor retornado 
    (a função setValorAndValidado) pode ser de qualquer tipo, incluindo string ou boolean ou a própria função.
    Quando você utiliza as const, o TypeScript trata o retorno como constante e imutável. Ou seja, ele fixa o 
    tipo de cada valor dentro da tupla com precisão.
*/