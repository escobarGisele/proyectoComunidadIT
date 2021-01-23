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



export default function Box({ setCart, cart }) {
  const classes = useStyles();
  
  const theme = useTheme();
  


  const [products] = useState([
    {
        name: 'Box Uno',
        cost: 1500,
        descripcion: 'Torta mini number, 2 cupcakes, 1 mini brownie, 1 corazon relleno, 2 mini patita,2 cookies grandes',
        
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Box1.jpg?alt=media&token=8726265d-58d4-46b0-a5cc-4654ec893049',
      },
      
      {
      
        name: 'Box 2',
        descripcion: '1 corazon de chocolate relleno de nutella, 1 cupcake, 2 conitos, 1 mini brownie, 2 paletas rellenas',
        cost: 1600,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/box2.jpg?alt=media&token=85dd5ad6-c300-440c-b6ee-d0425c751dbd',
      },
      
      {
        name: 'Box 3',
        descripcion: '1 Budin grande de limon con glace, 2 cupcakes, 1 tarta de limon, 1 corazon blanco de dulce de leche ',
        cost: 1300,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/box3.jpg?alt=media&token=eab9ce10-4724-4ed8-a86c-d61921eefb0a',
      },
      {
      
        name: 'Box 4',
        descripcion: '2 medialunas, 4 chipas , 1 mini brownie, 2 sandwich de miga triples , 1 jugo natural de naranja de 1L',
        cost: 1500,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/box4.jpg?alt=media&token=7770bd49-00da-4a93-ae0d-2a360ffe01d4',
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
      <h1 className={classes.h1}>Box armados </h1>
      
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