import React from "react";
import avaliacao from "./assets/avaliacao.png";
import consulta from "./assets/consulta.png";
import grafico from "./assets/grafico.png";
import styled from "styled-components";

interface TitleProps{
    imagem?: string,
    children?: React.ReactNode
}
interface ImagemProps{
    avaliacao: string,
    grafico: string,
    consulta: string
}

const SpanEstilizado = styled.span<TitleProps>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: conver;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'}
`

const TituloEstilizado = styled.h2`
    color: var(--azul-claro);
`
const ContainerEstilizado = styled.div`
    display: flex;
    align-items: center
`

export default function Title({imagem, children}: TitleProps){
    const listaDeImagem: ImagemProps ={
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return(
        <ContainerEstilizado>
           {imagem && <SpanEstilizado imagem={listaDeImagem[imagem as keyof ImagemProps]} />}
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}