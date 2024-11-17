import { useEffect, useState } from "react";

function getSizeWindow() {
    if(typeof window !== 'undefined') {
        const {innerWidth: largura, innerHeight: altura} = window
        return {largura, altura}
    } else {
        return {largura: -1, altura: -1}
    }
}

export default function useSizeWindow() {

    const [sizeWindow, setSizeWindow] = useState(getSizeWindow())

    useEffect(()=>{
        function sizeChange(){
            setSizeWindow(getSizeWindow())
            console.log('pegandoSize')
        }
        window.addEventListener("resize", sizeChange)
        return ()=>{
            window.removeEventListener("resize", sizeChange)
            console.log('parei de escutar')
        }
    }, []) 
    //para usar o useEffect só não primeira renderização
    
    if (sizeWindow.largura <= 640) {
        sizeWindow.largura = 640
    }

    function entre(min: number, max:number) {
        return sizeWindow.largura >= min && sizeWindow.largura <= max
    }

    const dimensoes = {
        sm: entre(640, 780),
        md: entre(768,1024),
        lg: entre(1024, 1280),
        xl: entre(1280, 1536),
        xl2: entre(1536, Number.MAX_VALUE)
    }

    const tamanhoVerdadeiro = Object.entries(dimensoes).filter((e)=> e[1])


    return [tamanhoVerdadeiro[0]?.[0], sizeWindow.largura] as const
}