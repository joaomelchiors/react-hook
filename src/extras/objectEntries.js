function valorIgualX(valor) {
    return valor == 'x'
}

const obj = {
    sm: valorIgualX('Y'),
    md: valorIgualX('Y'),
    lg: valorIgualX('Y'),
    xl: valorIgualX('Y'),
    xl2: valorIgualX('x')
}

const arrayObjeto = Object.entries(obj)
console.log(arrayObjeto)

const arrayFiltrado = arrayObjeto.filter((e)=>e[1])
console.log(arrayFiltrado)

const tamanho = arrayFiltrado[0][0]
console.log(tamanho)
