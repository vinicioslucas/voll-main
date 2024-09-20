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
            {profissionais?.map((profissional) => {
                return <Card profissional={profissional}></Card>
            })}
        </SecaoCard>
        <Botao>Ver Mais</Botao>
        </>
    )
}