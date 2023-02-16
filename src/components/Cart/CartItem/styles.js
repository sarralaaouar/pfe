import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
    alignItems : 'center',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },


}));