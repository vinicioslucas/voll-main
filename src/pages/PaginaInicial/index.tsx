import styled from "styled-components";
import Cabecalho from "../../components/Cabecalho";
import Atividade from "./Atividade";
import Banner from "./Banner";
import Depoimentos from "./Depoimentos";
import Formulario from "./Pesquisa";

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export default function PaginaInicial(){
    return (
        <>
            <Banner />
            <Container>
                <Formulario />
                <Atividade />
                <Depoimentos /> 
            </Container>
            
        </>
    )
}