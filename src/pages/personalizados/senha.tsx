import InputFormatado from "@/components/formulario/InputFormatado";
import Pagina from "@/components/templates/Pagina";
import useStateValidado from "@/data/hooks/useStateValidade";


export default function Senha() {
    const codeHTML = `export default function useStateValidado(
        paramValor:string, paramFuncaoValidar: (e:string)=>boolean){

    const [valor, setValor] = useState<string> (paramValor)
    const [validado, setValidado] = useState<boolean> (false)

    function setValorAndValidado(novoValor: string) {
        setValor(novoValor)
        setValidado(paramFuncaoValidar(novoValor))
    }
        
    return [valor, validado, setValorAndValidado] as const
}

//codigo na pagina//

const [senha, senhaEhValida, setSenha] = useStateValidado('', validarSenha)

let borda: string

if(senha === "") {
    borda = 'border-none'
} else if(senhaEhValida) {
    borda = 'border-green-600'
} else {
    borda = 'border-red-600'
}`

    const observacao = `o retorno da função é poder chamar a função de fora da função que encasulou ela
assim podemos de fora mudar o valor e o status de validado.***
Sem o as const, o TypeScript pode inferir o tipo do retorno de useStateValidado de forma mais genérica, ou seja, 
ele trata o tipo como uma tupla mutável. Isso significa que ele pode inferir que o terceiro valor retornado 
(a função setValorAndValidado) pode ser de qualquer tipo, incluindo string ou boolean ou a própria função.
Quando você utiliza as const, o TypeScript trata o retorno como constante e imutável. Ou seja, ele fixa o 
tipo de cada valor dentro da tupla com precisão.***
regex => /[\d\S]{8,}/ => indica ***
[] -> Delimitam uma classe de caracteres, o que significa
        que qualquer caractere dentro deles pode ser combinado. ***
\d -> Qualquer dígito de 0 a 9. ***
\S -> Qualquer caractere que não seja um espaço em branco ***
{8, } -> Isso é um quantificador. 8 para o mínimo e vazio sem limite máximo.

`

    function validarSenha(paramSenha: string) {
        /*
            regex => /[\d\S]{8,}/ => indica 
            [] -> Delimitam uma classe de caracteres, o que significa 
                  que qualquer caractere dentro deles pode ser combinado.
            \d -> Qualquer dígito de 0 a 9.
            \S -> Qualquer caractere que não seja um espaço em branco
            {8, } -> Isso é um quantificador. 8 para o mínimo e vazio sem limite máximo
        */
        const correspondencia = paramSenha.match(/[\d\S]{8,}/)
        
        return correspondencia?.[0].length === paramSenha.length
    }

    const [senha, senhaEhValida, setSenha] = useStateValidado('', validarSenha)
    
    let borda: string
    
    if(senha === "") {
        borda = 'border-none'
    } else if(senhaEhValida) {
        borda = 'border-green-600'
    } else {
        borda = 'border-red-600'
    }
    
    return (
        <Pagina 
            titulo={"Validando Senha"} 
            subtitulo={"Usando um hook personalizado para validação"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <InputFormatado 
                label={'senha'} 
                tipo={"text"} 
                valor={senha}
                className={`
                    flex
                    border-4 w-30
                    ${borda}
                `}
                onInput={(e) => setSenha((e.target as HTMLInputElement).value)}                
            />
        </Pagina>
  );
}