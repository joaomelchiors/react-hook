function qualquer() {
    let a = 1;
    function incrementar() {
        console.log(`A foi alterado para = ${a}`)
        return a++
    }

    return (console.log(`Renderizando A = ${a}`),
            setInterval(() => incrementar(), 1000)
    )
}

qualquer()


