import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Footer";

export default function PaginaBase(){
    return (
        <>
        <Cabecalho />
        <main>
            <Outlet />
        </main>
        <Rodape />
        </>
    )
}