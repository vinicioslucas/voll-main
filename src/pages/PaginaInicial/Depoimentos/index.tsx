import styled from "styled-components"

const Container = styled.section`
width: 50%;
`

const Titulo = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
color: var(--azul-escuro);
`

const Texto = styled.p`
line-height: 19px;
color: var(--cinza);
`

const Subtitulo = styled.h3`
line-height: 19px;
font-weight: 700;
color: var(--cinza-escuro);
text-align: center;
`

const Linha = styled.hr`
color: var(--cinza);
`

export default function Depoimentos(){
    return (
        <Container>
            <Titulo>Depoimentos</Titulo>
            <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia itaque quasi facere sit, natus, minus accusamus maxime error necessitatibus delectus mollitia provident enim officiis id dignissimos, maiores quia? Adipisci.</Texto>
            <Subtitulo>Lucas, 26 anos, Imperatriz-MA</Subtitulo>
            <Linha />
            <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia itaque quasi facere sit, natus, minus accusamus maxime error necessitatibus delectus mollitia provident enim officiis id dignissimos, maiores quia? Adipisci.</Texto>
            <Subtitulo>Lucas, 26 anos, Imperatriz-MA</Subtitulo>
            <Linha />
            <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia itaque quasi facere sit, natus, minus accusamus maxime error necessitatibus delectus mollitia provident enim officiis id dignissimos, maiores quia? Adipisci.</Texto>
            <Subtitulo>Lucas, 26 anos, Imperatriz-MA</Subtitulo>
            <Linha />
        </Container>
    )
}