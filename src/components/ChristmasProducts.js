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



export default function ChristmasProducts({ setCart, cart }) {
  const classes = useStyles();
  
  const theme = useTheme();
  


  const [products] = useState([
    {
        name: 'Pan dulce Oreo',
        cost: 500,
        descripcion: 'Pan dulce de relleno de chocolate y decorado con trozos de oreo',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad3.png?alt=media&token=fe23464f-3f3e-4e3b-bb1a-73bab4fe6ae4',
      },
      
      {
      
        name: 'Mini pan dulce oreo',
        descripcion: 'Mini pan dulce de 250gr, con trozos de oreo, bañado en chocolate',
        cost: 150,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad1.png?alt=media&token=7cb1571e-3204-4893-9b70-331c408e7e34',
      },
      
      {
        name: 'Box cookies',
        descripcion: 'Cookies de navidad, personajes varios la caja contiene 6 unidades',
        cost: 500,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad.png?alt=media&token=b9ed787b-c104-4b8e-b97f-1d886ce86c4f',
      },
      {
      
        name: 'Box Navidad',
        descripcion: 'Pan dulce oreo bañado en chocolate, 1 budin de limon, 4 cookies personajes navidad. 4 bocados mantecol,2 cookies chip',
        cost: 1700,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Navidad%2FNavidad2.png?alt=media&token=c6197554-da25-4916-bd83-d2251a539b70',
      },
      {
      
        name: 'Box Navidad Chandon',
        descripcion: 'Pan dulce oreo bañado y relleno en chocolate, 1 budin de chocolate, 1 budin de chocolate, 4 cookies decoradas,1 tableta mantecol,1 chandon',
        cost: 2600,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/CajaNavide%C3%B1a2.jpg?alt=media&token=09fec8bd-2a35-472c-a2b4-16b91a9a9cc4',
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
      <h1 className={classes.h1}>Navidad</h1>
      
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