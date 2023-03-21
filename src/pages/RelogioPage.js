import { Helmet } from 'react-helmet-async';
import { useEffect, useState, forwardRef } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { HoraList } from '../sections/@dashboard/relogio';
import API from '../api/api'



// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [relogio, setRelogio] = useState({});

  const [nome, setNome] = useState();
  const [hora, setHora] = useState(0);
  const [open, setOpen] = useState(false);
  const [openMsg, setOpenMsg] = useState(false)

  const fetchData = async () => {
      
    const res = await API.get()
  
    const data = res.data;
    setRelogio( data );
  }

  useEffect( ()=>{

    if (!open) fetchData();

  },[open])

  const Alert = forwardRef((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const handleChange = event => {
    setNome(event.target.value)
  }

  const handleClickOpen = (horaSelecionada) => {
    setOpen(true);
    setHora(horaSelecionada)
    
  };

  const doSave = async event => {

    const data = {
      nome 
    };
 
     await API.post(`${hora}`, data)
     // window.location.reload();
      
  }

  const handleCloseAlert = () => {
   setOpenMsg(false)

  }

  const handleClose = async (confirmed) => {
    setOpen(false);
    setNome('')
    
    if(! nome && confirmed){ // false, 0, '', undefind, null
      setOpenMsg(true)
      return 
    }
    if(confirmed){
     await doSave()
    }
  }; 

  const onDeletePerson =  () => {
    fetchData()
  }


  return (
    <>
      <Helmet>
        <title> IDERP | Relógio de oração</title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Olá, bem vindo a IDERP Monte Castelo
        </Typography>

        <Typography variant="h6" sx={{ mb: 5 }}>
          Selecione abaixo um horário para oração
        </Typography>

        <HoraList onClickCard={handleClickOpen} onDeletePerson={onDeletePerson} relogio={relogio} />
        

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Ore Conosco</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para participar das nossas 24hs de oração, digite seu nome no campo abaixo.
            </DialogContentText>
            <TextField onChange={handleChange}
              autoFocus
              margin="dense"
              id="name"
              placeholder="Digite Seu Nome"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose(false)}>Cancelar</Button>
            <Button onClick={() => handleClose(true)}>Participar</Button>
          </DialogActions>
      </Dialog> 
      <Snackbar open={openMsg} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
        Digite um Nome válido!
        
        </Alert>
      </Snackbar> 
   
      </Container>
    </>
  );
}
 