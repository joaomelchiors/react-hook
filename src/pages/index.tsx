import Logo from "@/components/templates/Logo";
import Pagina from "@/components/templates/Pagina";

export default function Home() {
  return (
    <Pagina titulo={"Especialista"} subtitulo={"Trilha React & Next"}>
      <Logo grande={true}></Logo>
      <span className="text-sm text-zinc-500">Todo o poder do React em components funcionais.</span>
    </Pagina>
  );
}
