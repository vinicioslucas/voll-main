import React from "react";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";
import styled from "styled-components";



const FooterEstilizado = styled.footer`
    height: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: var(--azul-escuro);
    flex-direction: column;
    img {
        margin: 0 10px;
    };
    div {
        display: flex;
        justify-content: center;
        margin-bottom: 1em
    }
`;

export default function Rodape(){
    const imagemArray = [
    {src: facebook, nome: 'Facebook'},
    {src: whatsapp, nome: 'WhatsApp'},
    {src: google, nome: 'Google'},
    {src: instagram, nome: 'Instagram'}
]


    return(
        <FooterEstilizado>
            <div>
                {imagemArray.map((image, index) => <img key={index} src={image.src} alt={image.nome}/>)}
            </div>
            <p>2024 © Desenvolvido por Lucas Vinícios | Projeto fictício sem fins comerciais.</p>
        </FooterEstilizado>
    )
}