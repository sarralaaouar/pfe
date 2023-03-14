import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    color:"pink",
  },
  emptyButton: {
    minWidth: '150px',
    backgroundColor:'pink',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
      
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    backgroundColor:'pink',
    
  },
  link: {
    textDecoration: 'none',
    color : "pink",
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    color:'blue',
  },
}));