import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import { Container } from './components/Container';
import Rodape from './components/Footer';
import Grafico from './components/Grafico';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Table';
import Title from './components/Title';
import useDadosConsulta from './useDadosConsultas';
import useDadosProfissional from './useDadosProfissional';

function App() {
  const {dados: consultas, erro: consutlasErro} = useDadosConsulta();
  const {dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if(consutlasErro || profissionaisErro){
    console.log("Ocorreu um erro na requisição")
  }


  return (
    <>
     <Cabecalho />
     <Container>
      <Title>Àrea Administrativa</Title>
      <Botao>Cadastrar especialista</Botao>
      <Title imagem='consulta'>Consulta do dia</Title>
      <Tabela consultas={consultas}/>
      <Title imagem='grafico'>Consultas mensais por especialista</Title>
      <Subtitulo>Dezembro/24</Subtitulo>
      <Grafico consultas={consultas} profissionais={profissionais} />
      <Title imagem='avaliacao'>Avaliação de especialista</Title>
      <Subtitulo>Dezembro/24</Subtitulo>
      <Avaliacao profissionais={profissionais}/>
     </Container>
     <Rodape />
    </>
  );
}

export default App;
