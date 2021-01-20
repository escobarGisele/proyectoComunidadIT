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
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  products: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    display:'flex',
    flexWrap: 'wrap',
  },
  product: {
    padding: '40px',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    marginLeft: '3.5rem',
    maxWidth: 400,
  },
  image: {
    width: 128,
    height: 128,
    display:'block',
    margin:'block',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    }

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


export default function Products({ setCart, cart }) {
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
      name: 'Mini tarta Frutilla',
      cost: 100,
      description: 'Mini tarta de frutilla con copos de crema',
      image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/miniTartaFrutilla.jpg?alt=media&token=89adea20-1ab6-4d09-baed-3ad4c350ae79',
    },
  
    {
        name: 'Mini tarta Oreo',
        cost: 100,
        description: 'Mini tarta de oreo con dulce de leche y relleno oreo',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/miniTartaOreo.jpg?alt=media&token=7ceb2cbd-11ac-4a73-8af6-bd2d24f2df30',
      },
      {
        
        name: 'Vaso tiramisu',
        description: 'Vaso de 350cc de tiramisu, relleno de queso mascarpone',
        cost: 120,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/vasoTiramisu.jpg?alt=media&token=451891e2-50fc-4ae8-a729-9f67ae1969dd',
      },
      {
        name: 'Vaso de chocotorta',
        cost: 120,
        description: 'Vaso de 350 cc de chocotorta, relleno de queso crema y dulce de leche',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/vasoChocotorta.jpg?alt=media&token=b3c07eda-a87e-4064-ba06-46b4992b05b1',
      },
      {
        
        name: 'AlfaCookies',
        description: 'Alfajor de cookies relleno de nutella',
        cost: 60,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/alfaCookies.jpg?alt=media&token=3e2bf9f6-3c7c-434b-842a-af594e376976',
      },
    
      {
        
        name: 'AlfaCookies bañadas',
        description: 'Alfajor de cookies relleno de dulce de leche',
        cost: 80,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/alfaBa%C3%B1adas.jpg?alt=media&token=8231e901-47a1-4722-af23-cd9d3332e7c2',
      },
      {
        
        name: 'Cupcake Marroc',
        description: 'Cupcake marroc con trozos de oreo',
        cost: 60,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/cupcakeMarroc.jpg?alt=media&token=3f60f747-866b-429f-9cbc-ecf98c352623',
      },
      
      {
        
        name: 'Medialunas',
        description: 'Medialunas de grasa caseras(unidades com)',
        cost: 40,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/medialunas.jpg?alt=media&token=1843d2df-7c90-48f6-bd33-e609bed61ac0',
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
     
     <h1 className={classes.h1}>Arma tu Box de desayuno/merienda</h1>
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
                
                <Typography variant="subtitle1" > ${product.cost}</Typography>
              
                  <Typography variant="body2" >
                    {product.description}
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
              
            </Grid>
          </Grid>
        </Paper>
      
        </div> 
      ))}
      
      </div>
     
      </div>
  );
}