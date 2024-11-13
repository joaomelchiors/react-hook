import Pagina from "@/components/templates/Pagina";

export default function Home() {
  const codeHTML = `Função Pura
function somar(a, b) {
    return a + b;
}
somar(4,5)

Função Impura
let contador = 0;
function incrementar() {
    contador += 1;
    return contador;
}
incrementar()
`

  const observacao = `Uma função pura é uma função que, para um dado conjunto de entradas, 
    sempre retorna o mesmo resultado e não tem efeitos colaterais externos.***
    Uma função pura precisa atender aos seguintes critérios: ***
    A função sempre retorna o mesmo valor para os mesmos argumentos, independentemente do contexto ou do número de vezes que é chamada.***
    A função não altera nada fora dela mesma. Ela não modifica variáveis globais, não escreve em arquivos, não modifica o DOM e 
    não depende de variáveis externas que possam mudar. Toda a lógica ocorre dentro da função. ***
    ***
    Uma função impura é uma função que pode retornar resultados 
    diferentes para os mesmos argumentos ou que interage com o estado externo 
    (causando efeitos colaterais). Isso acontece porque ela depende de algo fora do seu escopo ou modifica algo fora dela. ***
    ***
    Então os Efeitos colaterais em programação são quaisquer alterações feitas fora do escopo da função,
    que impactam o estado ou o comportamento de outras partes do sistema. Essas alterações podem incluir 
    modificar variáveis externas, alterar o DOM (em um ambiente de navegador), fazer requisições a uma API,
    manipular arquivos ou bancos de dados, ou mesmo exibir mensagens na tela. *** 
    ***
    No react é considerado como Efeito Colateral, tudo aquilo que não está ligado a Renderização e ao input do usuário.`
    



  return (
    <Pagina 
      titulo={"Efeito Colateral"} 
      subtitulo={"useEfect"}
      codigoHTML={codeHTML}
      observacao={observacao}
    >
      <span className="text-4xl">Conceito</span>
    </Pagina>
  );
}