import { ReactNode } from "react"
import Logo from "./Logo"
import { MenuSecao } from "@/data/models/menuSecao"
import MenuPrincipalSecao from "./MenuPrincipalSecao"
import { MenuItem } from "@/data/models/menuItem"
import MenuPrincipalItem from "./MenuPrincipalItem"
import { listaSecao } from "@/data/listaSecao"


interface MenuPrincipalProps {
    mini: boolean
}

export default function MenuPrincipal(props:MenuPrincipalProps) {
    console.log('renderizeiMenuPrincipal')
    
    function renderizarItems(listItems:MenuItem[]):NonNullable<ReactNode>{
        return listItems.map((items:MenuItem, index) => (
            <MenuPrincipalItem 
                key={index}
                id={index.toString()}
                titulo={items.titulo} 
                url={items.url} 
                icone={items.icone}
                tag={items.tag}
                mini={props.mini} 
            />
        ))
    }
       
    function renderizarSecoes():NonNullable<ReactNode> { 
        return listaSecao.map((secao:MenuSecao, index) => (
            <MenuPrincipalSecao 
                key={index} 
                titulo={secao.titulo} 
                aberta={secao.aberta} 
                mini={props.mini}
            >
                {renderizarItems(secao.items)}
            </MenuPrincipalSecao>
        )) 
    }

    return(
        <aside id="renderBarraLateral" className={`
            flex flex-col 
            bg-black shadow-md shadow-zinc-800
            overflow-x-hidden overflow-y-scroll
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${props.mini ? 'items-center w-[130px]' : 'w-[370px]'}
        `}>
            <div id="renderLogo" className="
                flex justify-center items-center
                m-7
            ">
                {!props.mini && <Logo />}
            </div>
            <nav id="rederMenuNavegacao" className="
                flex-1 flex flex-col gap-4 m-7
            ">
                {renderizarSecoes()}
            </nav>
        </aside>
    )
}