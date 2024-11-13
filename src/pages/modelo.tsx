import Pagina from "@/components/templates/Pagina";
import Link from "next/link";

export default function Home() {
    const codeHTML = 'Modelo'

    const observacao = 'Modelo'

    return (
        <Pagina 
            titulo={"Modelo"} 
            subtitulo={"Modelo"}
            codigoHTML={codeHTML}
            observacao={observacao}
        >
            <>{console.log('renderizando')}
                <Link href={'/'}>Teste</Link>
            </>
        </Pagina>
  );
}