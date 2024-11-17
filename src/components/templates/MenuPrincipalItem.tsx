import useTema from "@/data/hooks/useTema";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface MenuPrincipalItemProps {
    id: string
    titulo: string
    url: string
    icone?: NonNullable<ReactNode>
    tag?: string
    mini?: boolean
}

export default function MenuPrincipalItem(props:MenuPrincipalItemProps) {

    const router = useRouter();
    const ativo = props.url === router.asPath;

    const contextTema = useTema()

    if(!contextTema) {
        return <p>Não há contextTema</p>
    }
    
    const {corDeDestaque} = contextTema

    return (
        <Link 
            id={props.id} 
            href={props.url}
            className={`
                flex items-center gap-2 px-3 py-2
                text-zinc-400 
                rounded-md
                hover:bg-zinc-800
                ${ativo && `text-${corDeDestaque} bg-zinc-900`}
        `}>
            {props.icone ?? <IconCode />}
            {!props.mini && props.titulo}
            {!props.mini && props.tag && (
                <span className={`
                    px-2 rounded-full
                    text-white text-[11px]
                    ${ativo ? `bg-${corDeDestaque}` : 'bg-zinc-700'}
                `}>
                    {props.tag}                    
                </span>
            )}
        </Link>
    )
}