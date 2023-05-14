import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(true);

  const [errorName, setErrorName] = useState({
    name: {
      error: false,
      message: 'Deben ser al menos 3 caracteres',
    }
  });

  const [errorLastName, setErrorLastName] = useState({
    lastName: {
      error: false,
      message: 'Deben ser al menos 3 caracteres',
    }
  });

  const [errorEmail, setErrorEmail] = useState({
    email: {
      error: false,
      message: 'Debe ser un email valido',
    }
  });


  function validarNombre(nombre) {
    if(nombre.length >= 3){
      return { name: { error: false, message: '' } }
    } else{
      return { name: { error: true, message: 'Debe contener al menos 3 caracteres' } }
    };
  }

  function validarLastName(apellido) {
    if(apellido.length >= 3){
      return { lastName: { error: false, message: '' } }
    } else{
      return { lastName: { error: true, message: 'Debe contener al menos 3 caracteres' } }
    };
  }

  function validarEmail(email) {
    if(email.includes('@') && email.includes('.')){
      return { email: { error: false, message: '' } }
    } else{
      return { email: { error: true, message: 'Debe ser un email valido' } }
    };
  }

  return <form onSubmit={(e) => {
    e.preventDefault();
    handleSubmit({ name, lastName, email, prom, nov });
  }}>
    <TextField
      required
      id='name'
      label='Nombres'
      variant='outlined'
      fullWidth
      margin='normal'
      value={name}
      onChange={(e) => setName(e.target.value)}
      error={ errorName.name.error }
      helperText={ errorName.name.error ? errorName.name.message : '' }
      onBlur={ (e) => {
        setErrorName(validarNombre(e.target.value));
      }}
    />
    <TextField
      required
      id='lastName'
      label='Apellido'
      variant='outlined'
      fullWidth
      margin='normal'
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      error={ errorLastName.lastName.error }
      helperText={ errorLastName.lastName.error ? errorLastName.lastName.message : '' }
      onBlur={ (e) => {
        setErrorLastName(validarLastName(e.target.value))
      }}
    />
    <TextField
      required
      id='email'
      label='Email'
      variant='outlined'
      fullWidth
      margin='normal'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={ errorEmail.email.error }
      helperText={ errorEmail.email.error ? errorEmail.email.message : '' }
      onBlur={ (e) => {
        setErrorEmail(validarEmail(e.target.value))
      }}
    />

    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={prom}
            onChange={(e) => {
              setProm(e.target.checked)
            }}
          />
        } label='Promociones' />
      <FormControlLabel 
        control={
          <Switch
            checked={nov}
            onChange={(e) => {
              setNov(e.target.checked)
            }}
          />
          } label='Novedades' />
    </FormGroup>

    <Button variant='contained' type='submit' >Registrarse</Button>
  </form>
}

export default FormSignUp;