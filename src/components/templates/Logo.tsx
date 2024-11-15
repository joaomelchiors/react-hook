import { IconFishHook } from "@tabler/icons-react";
import Link from "next/link";

interface LogoProps {
    col?: boolean
    className?: string
    grande?: boolean
    subtitulo?: string
    mini?: boolean
}

export default function Logo(props:LogoProps) {
    return (
        <Link id="renderLogo" href={"/"} className={`cursor-pointer flex ${!props.mini ? 'gap-3' : '' } items-center`}>
            <div id="renderBoxLogoImg" className={`
                flex flex-col items-center
                ${props.col ? 'flex-col' : ''}
                ${props.className ?? ''}
            `}>
                <div id="renderBoxAzul" className={`
                    flex justify-center items-center
                    bg-blue-500 rounded-lg
                    ${props.grande ? 'w-[150px] h-[150px]' : 'w-[50px] h-[50px]'}
                `}>
                    <IconFishHook size={props.grande ? 100 : 30} />
                </div>
            </div>
            <div id="renderLogotitulo" className="
                flex flex-col items-center
            ">
                {!props.mini ? 
                    <div className={`
                        ${props.grande ? 'text-4xl' : 'text-2xl'}
                        font-black
                    `}>
                        React Hooks
                    </div>
                : ''}
                {props.subtitulo && (
                    <div id="renderLogoSubtitulo" className="
                        text-zinc-500 text-sm
                    ">
                        {props.subtitulo}
                    </div>
                )}
            </div>
        </Link>
    )
}