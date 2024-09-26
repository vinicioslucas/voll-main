import styled from "styled-components";
import Fundo from "./Fundo.png";
import { Outlet } from "react-router-dom";


const ContainerPrincipal = styled.div`
    background-image: url(${Fundo});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    background-color: var(--branco);
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function PaginaBaseFormulario(){
    return (
        <ContainerPrincipal>
            <Container>
                <Outlet />
            </Container>
        </ContainerPrincipal>
    )
}