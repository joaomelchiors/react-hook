import { MenuItem } from "./menuItem";

export interface MenuSecao {
    titulo: string;
    items: MenuItem[];
    aberta: boolean;
}