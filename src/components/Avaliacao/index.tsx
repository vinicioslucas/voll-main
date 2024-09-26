import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";
import Botao from "../Botao";


const SecaoCard = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%
`

export default function Avaliacao({profissionais}: {profissionais: IProfissional[] | null }) {
    return (
        <>
        <SecaoCard>
            {profissionais && profissionais.length ? profissionais?.map((profissional) => {
                return <Card profissional={profissional}></Card>
            }) : "Não há avaliações para mostrar"}
        </SecaoCard>
        {profissionais && profissionais.length > 4 ? 
        <Botao>Ver Mais</Botao>  : "" }
        </>
    )
}