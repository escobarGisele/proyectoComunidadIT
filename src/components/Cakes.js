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
        name: 'Letter cake',
        cost: 900,
        descripcion: 'Torta de letra (a elección) brownie con relleno de nutella, copos de merengue, decorada con chocolates varios',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/letter1.jpg?alt=media&token=d97641e4-b232-4b6e-a54a-b7e70f23b7a0',
      },
      
      {
      
        name: 'Number cake',
        descripcion: 'Torta de números (a elección) brownie con relleno de dulce de leche, copos de merengue, decorada con chocolates',
        cost: 1300,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/numberCake1.jpg?alt=media&token=047b2853-c451-4a78-946d-d495d3683463',
      },
      
      {
        name: 'Torta Helada',
        descripcion: 'Torta helada de crema oreo  con nutella, bañada en chocolate con mini alfajores oreos',
        cost: 1300,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/tortaHelada.jpg?alt=media&token=4c755578-be03-4d5b-9cec-21832c3fc6c6',
      },
      {
      
        name: 'Torta Matilda',
        descripcion: 'Bizcochuelo de chocolate, rellena de crema y ganache de chocolate, con frutillas y oreos',
        cost: 1700,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/tortaMatilda.jpg?alt=media&token=b51c8206-0fc6-4140-b5bb-0c074e356939',
      },
      {
      
        name: 'Torta Cookies',
        descripcion: 'Bizcochuelo de vainilla y chocolate,con 2 capas de crema con chips de chocolate, cubierta con crema, oreos, toddys, frutillas y bañada de chocolate.',
        cost: 2600,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/tortaCokies.jpg?alt=media&token=bc2a1e35-cb18-4ec5-a4cd-9857d3e40aea',
      },
      {
      
        name: 'Torta Chocolate',
        descripcion: 'Bizcochuelo de chocolate relleno de mousse de chocolate con chips de chocolate, cubierto de chocolate con cremay ganache de chocolate, con chocolates varios',
        cost: 2600,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/tortaChocolate.jpg?alt=media&token=4d25e1fa-6d37-4995-aa52-bf48b5b3a577',
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
      <h1 className={classes.h1}>Tortas </h1>
      
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