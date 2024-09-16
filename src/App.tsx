import './App.css';
import Cabecalho from './components/Cabecalho';
import { Container } from './components/Container';
import Rodape from './components/Footer';
import Title from './components/Title';

function App() {
  return (
    <>
     <Cabecalho />
     <Container>
      <Title>Àrea Administrativa</Title>
     </Container>
     <Rodape />
    </>
     

  );
}

export default App;
