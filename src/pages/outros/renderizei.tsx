import InputFormatado from "@/components/formulario/InputFormatado";
import PasseiAqui from "@/components/templates/passeiAqui";
import PasseiAquiTambém from "@/components/templates/PasseiAquiTambem";
import React, { useState } from "react";

export default function RenderizeiPagina() {

    const [quantidade, setQuantidade] = useState<number>(0)

    return (
        <div>
            <InputFormatado tipo={"number"} valor={quantidade}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setQuantidade(Number(e.target.value)) }/>
            <PasseiAqui/>
            <PasseiAquiTambém/>
        </div>
    )
}