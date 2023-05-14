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