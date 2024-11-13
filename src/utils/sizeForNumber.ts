/*
    type, enum ou interface?
    1-type: 
        É a opção mais leve e direta, especialmente para uma lista simples de valores. 
        Se você só precisa da lista para validação e não precisa de valores associados, type é geralmente mais adequado.
    2-enum:
        Recomendado se você precisar que os valores tenham representação numérica ou mapeamento específico
        (por exemplo, associar valores como "xs" = 1, "md" = 2, etc.). 
        enum é também uma boa escolha se for necessário referenciar os tamanhos em outras partes do código de maneira constante.
    3-interface
        Não é ideal para este caso, pois uma interface é mais apropriada para definir a estrutura de objetos, não uma lista de valores. 
*/

import { Tamanho } from "@/types/Tamanho"

export default function sizeForNumber(size:Tamanho):number{
    switch(size) {
        case 'xs':
            return 9
        case 'base':
            return 11
        case 'lg':
            return 14
        case 'xl':
            return 16
        case '2xl':
            return 20
        case '3xl':
            return 24
    }
}

