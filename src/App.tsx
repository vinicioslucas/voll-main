import './App.css';
import Cabecalho from './components/Cabecalho';
import { Container } from './components/Container';
import Rodape from './components/Footer';
import Tabela from './components/Table';
import Title from './components/Title';
import useDadosConsulta from './useDadosConsultas';

function App() {
  const {dados, erro} = useDadosConsulta();
  return (
    <>
     <Cabecalho />
     <Container>
      <Title>Àrea Administrativa</Title>
      <Tabela consultas={dados}/>
     </Container>
     <Rodape />
    </>
     

  );
}

export default App;
