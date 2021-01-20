import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DialogoForm from './DialogoForm'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  root2: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  productos: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  producto: {
    padding: '40px',
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: '3.5rem',
    maxWidth: 400,
  },
  
  agregar: {
    backgroundColor: '#FFD900',
    '&:hover': {
      backgroundColor: '#D8B800',
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  
  },
  colorAcor:{
    justifyContent: 'center',
    backgroundColor: '#bee5d3',
    color: 'black',
    border: '0.5px solid #eb5e30',
    width:'40%'
  },
  total: {
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft:'8rem',
    // marginLeft: '30rem',
    // marginRight: '30rem',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
    padding: '0.5rem',
    border: '1.5px solid #eb5e30',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cantidad: {
    marginRight: '1rem',
    color: 'whiteSmoke',
    backgroundColor: '#EB5D2F',
    '&:hover': {
      backgroundColor: '#C4380A',
    }
  },
  
}))
 
export default function Cart({ cart, setCart }) {
  const classes = useStyles(); 
  const [open, setOpen] = React.useState(false);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };
   const productsWhatsapp = cart.map(
    (product) =>
          "Producto:    "+ product.name + ","+
          "Cantidad: "+ product.quantity +","+
           "Costo por unidad: " + "$" + product.cost+""+""
  );
  
  console.table(productsWhatsapp);
  
console.groupEnd()

  function getLinkWhastapp() {
    var url =
      "https://api.whatsapp.com/send?phone=" +
      "541150350078" +
      "&text=" +
      encodeURIComponent("Mi pedido es: ") +
      "%0a%0a" +
      
      productsWhatsapp +"//" +
      "%0a" +
       
      encodeURIComponent("El total es: $" + getTotalSum());

    return window.open(url);
  }

  return (
    
      <div class="flex-container">
      

       <div class="flex-item-left" >
       <div className={classes.header}>
      <Button variant="outlined" color="primary" onClick={() => getLinkWhastapp()} className={classes.total}>
      Confirmar: <WhatsAppIcon fontSize="small"/>

      </Button>
      <Button variant="outlined" color="primary"  className={classes.total}>
      Total: ${getTotalSum()}

      </Button>
      <Button variant="outlined" color="primary" onClick={clearCart} className={classes.total}>
      Vaciar carrito <DeleteIcon fontSize="small"/>

      </Button>
      <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.total}>
        Completa tus datos
      </Button>

      <Dialog open={open} onClose={handleClose} >
        <DialogTitle id="form-dialog-title">Completa los datos  </DialogTitle>
        <DialogContent>
        
          <DialogoForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
      {/* <Accordion className={classes.colorAcor} container justify="center" >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" aling="center"
        >
          <Typography className={classes.heading}>Complete sus datos</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
      
       <DialogoForm/>
          
        </AccordionDetails>
      </Accordion> */}
      </div>
    </div>
    <div className={classes.productos}>
      {cart.map((producto, index) => (
        <div className={classes.producto} key={index}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img 
              className= {classes.img} 
              alt= {producto.name} 
              src= {producto.image} 
            />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {producto.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {producto.descripcion}
                </Typography>
                
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Button 
                  onClick={() => removeFromCart(producto)}
                  className={classes.agregar} 
                  variant="outlined"
                  >
                  Eliminar
                </Button>
                </Typography>

                <Grid item>
                
                <Button id="boton"
                className={classes.agregar}
                    
                  variant="outlined"
                  >
                    <input type="number" 
                   value={producto.quantity}
              onChange={(e) =>
                setQuantity(
                  producto,
                  parseInt(e.target.value)
                )
              }
            />
                  Cantidad
                </Button>
              
                </Grid>

              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">${producto.cost}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div> 
    ))}
    </div>
    
    </div>
    
  );
}
