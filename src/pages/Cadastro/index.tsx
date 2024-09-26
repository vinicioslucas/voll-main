import styled from "styled-components";
import Botao from "../../components/Botao";
import CampoDigitacao from "../../components/CampoDigitacao";
import { useState } from "react";
import logo from "../../components/Cabecalho/assets/logo.png";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Line } from "recharts";


interface PropsCustomizada {
    cor: string
}
const Imagem = styled.img`
  padding: 2em 0;
`;

const StepCustomizada = styled.div<PropsCustomizada>`
    background-color: ${({cor}) => cor};
    width: 16px;
    height: 16px;
    border-radius: 50%
`

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza)
`;
const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;


export default function Cadastro () {
    const [etapaAtiva, setEtapaAtiva] = useState(0);
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [criaSenha, setCriaSenha] = useState('');
    const [repeteSenha, setRepeteSenha] = useState('');



    return (
        <>
        <Imagem src={logo} alt="Logo da voll"/>

        <Stepper activeStep={etapaAtiva}>
            <Step>
                <StepLabel StepIconComponent={(props) => (
                    <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                )}/>
            </Step>
            <Step>
                <StepLabel StepIconComponent={(props) => (
                    <StepCustomizada cor={props.active ? 'lightblue' : 'lightgray'} />
                )}/>
            </Step>
        </Stepper>

        <Titulo>Primeiro, alguns dados básicos:</Titulo>
        <Formulario>
            <CampoDigitacao valor={nome} tipo="text" placeholder="Digite o nome da clínica" onChange={setNome} label="Nome"/>
            <CampoDigitacao valor={cnpj} tipo="text" placeholder="Digite o CNPJ" onChange={setCnpj} label="CNPJ"/>
            <CampoDigitacao valor={email} tipo="text" placeholder="Digite o endereço de e-mail para login" onChange={setEmail} label="Email"/>
            <CampoDigitacao valor={criaSenha} tipo="password" placeholder="Digite sua senha" onChange={setCriaSenha} label="Crie uma senha"/>
            <CampoDigitacao valor={repeteSenha} tipo="password" placeholder="Repita a senha anterior" onChange={setRepeteSenha} label="Repita sua senha"/>
        </Formulario>
        <BotaoCustomizado>Avançar</BotaoCustomizado>
        </>
    )
}