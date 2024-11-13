import { ReactNode } from "react"

export interface MenuItem {
    icone: NonNullable<ReactNode>;
    titulo: string;
    tag: string;
    url: string;
    selecionado?: boolean;
}