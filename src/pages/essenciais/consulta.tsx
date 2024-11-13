import Pagina from "@/components/templates/Pagina";
import { useEffect, useState } from "react";

export default function Home() {
    const codeHTML = `const [url, setUrl] = useState();

  fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(obj => (setUrl(obj.message), console.log('executando')))        

return (
  <Pagina 
    titulo={"Resquisição à API"} 
    subtitulo={"Requerindo dados"}
    codigoHTML={codeHTML}
    observacao={observacao}
  >
    <img className="mx-w-sm" src={url}></img>
  </Pagina>
);

Incluindo o useEffect
//dois paramentos 1- função callBack e um Array com os elementos de contorle.

useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(obj => (setUrl(obj.message), console.log('executando')))    
}, [])
`
    const observacao = `Nó primeiro codigo o fetch está sendo chamado diretamente dentro do componente Home, 
    o que faz com que a requisição ocorra em cada renderização do componente. No React, o estado (useState) 
    ou as atualizações de props podem causar re-renderizações, e se o fetch está fora de um controle de 
    efeito (useEffect), ele é chamado toda vez que o componente renderiza. ***
    Causando o efeito colateral***
    O useEffect tem dois parametros 1- uma função callBack e um Array com os elementos que ele controlará alteração. ***
    Quando ele notar alteração em algum dos elementos do array ele executa a função do primeiro paramentro.***
    O array vazio faz com que o fetch só no carregamento inicial da página seja executado.`

    const [url, setUrl] = useState();

    useEffect(() => {
      fetch("https://api.nekosia.cat/api/v1/images/catgirl")
        .then(resp => resp.json())
        .then(obj => (setUrl(obj.image.original.url), console.log('executando')))    
    }, [])
    

  return (
    <Pagina 
      titulo={"Resquisição à API"} 
      subtitulo={"Requerindo dados"}
      codigoHTML={codeHTML}
      observacao={observacao}
    >
      <img className="mx-w-sm" src={url}></img>
    </Pagina>
  );
}

