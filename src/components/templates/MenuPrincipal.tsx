import { ReactNode } from "react"
import { useEffect } from "react"
//import { useState } from "react"
import Logo from "./Logo"
import { MenuSecao } from "@/data/models/menuSecao"
import MenuPrincipalSecao from "./MenuPrincipalSecao"
import { MenuItem } from "@/data/models/menuItem"
import MenuPrincipalItem from "./MenuPrincipalItem"
import { listaSecao } from "@/data/listaSecao"
import useToggle from "@/data/hooks/useToggle"
import { IconMenu, IconX } from "@tabler/icons-react"
import useSizeWindow from "@/data/hooks/useSizeWindow"
import { IsSectionOpenProvider } from "@/data/context/IsSectionOpen"
//import useBoolean from "@/data/hooks/useBoolean"



export default function MenuPrincipal() {
    
    const [isMini, setIsMini, setTrue, setFalse] = useToggle (false)
    //const [isSectionOpen, setIsSectionOpen] = useToggle (true)
    //const [isMini, setIsMini,  miniTrue] = useBoolean()
    //console.log('renderizei MenuPrincipal')
    const [tamanho, ] = useSizeWindow()

    /*
    useEffect(() => {
        if(sizeGrupo === 'md' || sizeGrupo === 'sm') {
            miniTrue()
        }
    }, [sizeGrupo, miniTrue])
    */

    useEffect(() => {
        if(tamanho === 'md' || tamanho === 'sd') {
            setTrue()
        } else {
            setFalse()
        }
    }, [tamanho, setTrue, setFalse])
    
    function renderizarItems(listItems:MenuItem[]):NonNullable<ReactNode>{
        return listItems.map((items:MenuItem, index) => (
            <MenuPrincipalItem 
                key={index}
                id={index.toString()}
                titulo={items.titulo} 
                url={items.url} 
                icone={items.icone}
                tag={items.tag}
                mini={isMini} 
            />
        ))
    }
       
    function renderizarSecoes():NonNullable<ReactNode> { 
        return listaSecao.map((secao:MenuSecao, index) => (
            <IsSectionOpenProvider key={index}>
                <MenuPrincipalSecao
                    key={index}
                    indice={index}
                    titulo={secao.titulo} 
                    mini={isMini}
                >
                    {renderizarItems(secao.items)}
                </MenuPrincipalSecao>
            </IsSectionOpenProvider>
        )) 
    }

    return( 
            <aside id="renderBarraLateral" className={`
                flex flex-col
                bg-black shadow-md shadow-zinc-800
                overflow-x-hidden overflow-y-scroll
                scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
                scrollbar-thin
                ${isMini ? 'items-center w-[130px]' : 'w-[370px]'}
            `}>
                <div id="renderLogo" className="
                    flex justify-center items-center
                    m-7 gap-2
                ">
                    <Logo mini={isMini}/>
                    {!isMini?
                        <div className="cursor-pointer" onClick={()=>setIsMini()}>
                            <IconMenu />
                        </div>: ''
                        }
                    
                </div>
                    <div className="cursor-pointer" onClick={()=>setIsMini()}>
                                {isMini?<IconX />: ''}
                    </div>

                <nav id="rederMenuNavegacao" className="
                    flex-1 flex flex-col gap-4 m-7
                ">
                    {renderizarSecoes()}
                </nav>
            </aside>
    )
}