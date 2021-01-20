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


const useStyles = makeStyles((theme) => ({
  products: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  product: {
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
  add: {
    marginRight: '1rem',
    backgroundColor: '#FFD900',
    '&:hover': {
      backgroundColor: '#D8B800',
    }
  },
  
  buttons: {
    display: 'flex',
  },
  h1:{
    background:'#f4f5db'
  }
}))



export default function Cakes({ setCart, cart }) {
  const classes = useStyles();
  
  const theme = useTheme();
  


  const [products] = useState([
    {
        name: 'Bombones "TE AMO "',
        cost: 600,
        descripcion: 'Bombones con frase te amo, rellenos de dulce de leche y nutella , la caja pesa 750 grs ',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/teAmo.jpg?alt=media&token=5e953210-b131-4456-9e38-4c3176190773',
      },
      {
        name: 'Caja corazones',
        descripcion: 'Bombones de chocolate, rellenos de dulce de leche y  fruit nuit, caja de 500gr',
        cost: 500,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/cajaCorazones.jpg?alt=media&token=61224b84-f7a6-4d5c-9765-6e333fc24487',
      },
      {
      
        name: 'Box para compartir',
        descripcion: '1 botella de jugo naranja de 250,1 cookie con glase real "LOVE",1 mini corazón diamante relleno de oreo,1 mini doble oreo en forma de corazón,2 sándwich de miga, 2 medialunas, 5 bombones',
        cost: 1800,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/boxSanValentin.jpg?alt=media&token=72f8e9a8-5b76-4208-9c0f-b1c96a783dba',
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


  return (
    <div class="flex-container">
      <h1 className={classes.h1}>San Valentin </h1>
      
        <div className={classes.products}>
        
       {products.map((product, index) => (
        <div className={classes.product} key={index}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
              <img 
                className= {classes.img} 
                alt= {product.name} 
                src= {product.image} 
              />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {product.descripcion}
                  </Typography>
                  
                </Grid>
                <Grid item  className={classes.buttons}>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button 
                    onClick={() => addToCart(product)}
                    className={classes.add} 
                    variant="outlined"
                    >
                    Agregar
                  </Button>
                  </Typography>

                
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">${product.cost}</Typography>
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