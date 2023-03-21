// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.png`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'relógio de oração',
    path: '/dashboard/relogio',
    icon: icon('ic_relogio'),
  }
];

export default navConfig;
