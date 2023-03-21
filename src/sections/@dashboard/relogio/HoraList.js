import PropTypes, { object } from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import HoraCard from './HoraCard';

// ----------------------------------------------------------------------

// HoraList.propTypes = {
//   horas: PropTypes.array.isRequired,
//   onClickCard: pro
// };

export default function HoraList({ relogio, onClickCard, onDeletePerson, ...other }) {
  
  
  return (
    <Grid container spacing={3} {...other}>
      {Object.keys(relogio).map((hora) => (
        <Grid item key={hora} xs={12} sm={6} md={3}>
          <HoraCard onDelete={onDeletePerson} onClickCard={onClickCard} hora={hora} pessoas={relogio[hora].pessoas} />
        </Grid>
      ))}
    </Grid>
  );
}  
 