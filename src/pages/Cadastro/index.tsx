import styled from "styled-components";
import Botao from "../../components/Botao";
import CampoDigitacao from "../../components/CampoDigitacao";
import { useState } from "react";
import logo from "../../components/Cabecalho/assets/logo.png";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Line } from "recharts";
import IClinica from "../../types/IClinica";
import usePost from "../../usePost";
import { useNavigate } from "react-router-dom";


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

const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 30% 65%;
    justify-content: space-between;
`

export default function Cadastro () {
    const [etapaAtiva, setEtapaAtiva] = useState(0);
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVerificada, setSenhaVerificada] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    const {cadastrarDados, erro, sucesso} = usePost();
    const navigate = useNavigate();


    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //Previne o envio padrão do formulário

        const clinica: IClinica = {
            email: email,
            nome: nome,
            senha: senha,
            endereco: {
                cep: cep,
                rua: rua,
                numero: numero,
                estado: estado,
                complemento: complemento,
            }
        }

        if(etapaAtiva !== 0) {
            try {
                cadastrarDados({url: 'clinica', dados: clinica});
                navigate('/login')
            } catch (error) {
                error && alert('erro ao cadastrar os dados')
            }
        }
        setEtapaAtiva(etapaAtiva + 1); // Atualiza o estado da etapa para a proxima etapa
    }

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


        {etapaAtiva === 0 ? (
            <>
            <Titulo>Primeiro, alguns dados básicos:</Titulo>
            <Formulario onSubmit={handleSubmit}>
                <CampoDigitacao valor={nome} tipo="text" placeholder="Digite o nome da clínica" onChange={setNome} label="Nome"/>
                <CampoDigitacao valor={cnpj} tipo="text" placeholder="Digite o CNPJ" onChange={setCnpj} label="CNPJ"/>
                <CampoDigitacao valor={email} tipo="text" placeholder="Digite o endereço de e-mail para login" onChange={setEmail} label="Email"/>
                <CampoDigitacao valor={senha} tipo="password" placeholder="Digite sua senha" onChange={setSenha} label="Crie uma senha"/>
                <CampoDigitacao valor={senhaVerificada} tipo="password" placeholder="Repita a senha anterior" onChange={setSenhaVerificada} label="Repita sua senha"/>
                <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
            </Formulario>
            </>) 
            :
            (
            <>
            <Titulo>Agora, dados tecnicos</Titulo>
            <Formulario onSubmit={handleSubmit}>
                <CampoDigitacao valor={telefone} tipo="tel" label="Telefone" placeholder="(DDD) XXXXX-XXXX" onChange={setTelefone} />
                <CampoDigitacao valor={cep} tipo="number" label="CEP" placeholder="Insira seu CEP" onChange={setCep} />
                <CampoDigitacao valor={rua} tipo="text" label="Rua" placeholder="Rua" onChange={setRua} />
                <Container>
                    <CampoDigitacao valor={numero} tipo="number" label="Numero" placeholder="Número" onChange={setNumero} />
                    <CampoDigitacao valor={complemento} tipo="text" label="Complemento" placeholder="Complemento" onChange={setComplemento} />
                    <CampoDigitacao valor={estado} tipo="text" label="Estado" placeholder="Estado" onChange={setEstado} />
                </Container>
                <BotaoCustomizado type="submit">Cadastrar</BotaoCustomizado>
            </Formulario>
            </>
            )}
        
        </>
    )
}