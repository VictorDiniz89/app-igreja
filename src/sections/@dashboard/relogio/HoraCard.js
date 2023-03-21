import PropTypes from 'prop-types';
// @mui
import { Stack, Card, Link, Typography, } from '@mui/material';
import { styled } from '@mui/material/styles';
import './HoraCard.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { id } from 'date-fns/locale';
import API from '../../../api/api'
// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

// HoraCard.propTypes = {
//   hora: PropTypes.number,
//   pessoas: PropTypes.array,
// };

export default function HoraCard({ hora, pessoas, onClickCard, onDelete }) {
  

  const handleDelete = async id => {
    
    await API.delete(`/${hora}/${id}`);
    onDelete()
    
  }

  return (

    <Card>
      <div className='container' onClick={(e) => {onClickCard(hora)}} aria-hidden="true">
        <div className='card'>
          <h1>{hora}h</h1>
          
        </div>
      </div>

      <Stack spacing={2} sx={{ p: 3 }}>
      
        {
          pessoas.map( (pessoa) => (
            <Stack direction={'row'}>
            <Typography key={pessoa.id} variant="subtitle2" noWrap>
              {pessoa.nome}
            </Typography>
            <DeleteOutlineIcon onClick={() => (handleDelete(pessoa.id))}/>
            </Stack>
          ))
        }
      </Stack>
    </Card>    
  );
} 
 