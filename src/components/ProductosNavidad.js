import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const HOME_GARDEN = 'home and garden';
const UTILITY = 'utility';
const useStyles = makeStyles((theme) => ({
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
  agregar: {
    marginRight: '1rem',
    backgroundColor: '#FFD900',
    '&:hover': {
      backgroundColor: '#D8B800',
    }
  },
  verMas: {
    color: 'whiteSmoke',
    backgroundColor: '#EB5D2F',
    '&:hover': {
      backgroundColor: '#C4380A',
    }
  },
  botones: {
    display: 'flex',
  },
  h1:{
    background:'#f4f5db'
  }
}))



export default function ProductosNavidad({ setCart, cart }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [products] = useState([
    {
        category: UTILITY,
        name: 'Navidad',
        
        cost: 180,
        descripcion: 'Pa',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad3.png?alt=media&token=fe23464f-3f3e-4e3b-bb1a-73bab4fe6ae4',
      },
      {
        category: HOME_GARDEN,
        name: 'Navidad2',
        descripcion: 'Doble carne, bacon, cheddar y cebolla',
        cost: 170,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad2.png?alt=media&token=c6197554-da25-4916-bd83-d2251a539b70',
      },
      {
        category: HOME_GARDEN,
        name: 'Navidad3',
        descripcion: 'Doble carne, cheddar, tomate, y pepino',
        cost: 150,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad1.png?alt=media&token=7cb1571e-3204-4893-9b70-331c408e7e34',
      },
      
      {
        category: UTILITY,
        name: 'Navidad 4',
        descripcion: 'Doble carne, cheddar, tomate, y pepino',
        cost: 150,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad.png?alt=media&token=b9ed787b-c104-4b8e-b97f-1d886ce86c4f',
      },
      
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(HOME_GARDEN);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <div class="flex-container">
      <h1 className={classes.h1}>Navidad</h1>
      
        <div className={classes.productos}>
        
       {products.map((producto, index) => (
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
                <Grid item  className={classes.botones}>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button 
                    onClick={() => addToCart(producto)}
                    className={classes.agregar} 
                    variant="outlined"
                    >
                    Agregar
                  </Button>
                  </Typography>

                  <Button 
                    onClick={handleClickOpen}
                    className={classes.verMas}
                    variant="outlined"  
                  >
                    Ver Foto
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogTitle id="responsive-dialog-title">{"Foto"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                      <Typography gutterBottom variant="subtitle1">
                        {producto.nombre}
                      </Typography>
                      {/* <img 
                        className= {classes.img} 
                        alt= {producto.name} 
                        src= {producto.img} 
                      /> */}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary" autoFocus>
                        Cerrar
                      </Button>
                    </DialogActions>
                  </Dialog>

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