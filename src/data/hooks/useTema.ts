import { useContext } from "react";
import { ContextoTema } from "../context/TemaProvider";

export default function useTema() {

    return useContext(ContextoTema)
}

//ideia aqui é encapsular o useContext() passando já o ContextoTema