import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    maxHeight:'100%',
  },
  
  
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    maxHeight:'100%',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight:'100%',
  },

 
  product__card: {
    justifyContent: 'flex-end',
    display: 'flex',
    maxHeight:'100%',
  },

  product__image :{
    display: 'block',
    marginLeft : 'auto' ,
    width: '100%',
     
  },
}));