//No hay necesidad de colocar las tags HTML (gracias a los fragments).
import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './Components/FormSignUp';
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = ( valores ) => {
    console.log('APPJS: ', valores);
  }

  return (
    <Container component='section' maxWidth='sm' sx={{p:'25px'}} >
    <Typography variant='h3' align='center' >Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
