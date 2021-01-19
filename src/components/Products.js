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
  productos: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    display:'flex',
    flexWrap: 'wrap',
  },
  producto: {
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
      name: 'Box numero 1',
      cost: 180,
      descripcion: 'Paletas bañadas con relleno de helado sabor americana',
      image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/miniTartaFrutilla.jpg?alt=media&token=89adea20-1ab6-4d09-baed-3ad4c350ae79',
    },
  
    {
        name: 'Box numero 1',
        cost: 180,
        descripcion: 'Paletas bañadas con relleno de helado sabor americana',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Desayuno%2Fbox.png?alt=media&token=27c09eee-5c95-4657-84ec-d82cb4627aca',
      },
      {
        
        name: 'Box numero 2',
        descripcion: 'Doble carne, bacon, cheddar y cebolla',
        cost: 170,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Desayuno%2Fbox1.png?alt=media&token=a5fbd34b-d4e8-4664-83b3-c7a6b63db3ab',
      },
      {
        name: 'Box numero 1',
        cost: 180,
        descripcion: 'Paletas bañadas con relleno de helado sabor americana',
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Desayuno%2Fbox.png?alt=media&token=27c09eee-5c95-4657-84ec-d82cb4627aca',
      },
      {
        
        name: 'Box numero 2',
        descripcion: 'Doble carne, bacon, cheddar y cebolla',
        cost: 170,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Desayuno%2Fbox1.png?alt=media&token=a5fbd34b-d4e8-4664-83b3-c7a6b63db3ab',
      },
    
      {
        
        name: 'Box numero 3',
        descripcion: 'Doble carne, cheddar, tomate, y pepino',
        cost: 150,
        image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Desayuno%2Fdesayuno.png?alt=media&token=dcdd0aa7-7d6e-489f-ae9e-413dbb442bd3',
      },
      
      // {
        
      //   name: 'Box numero 4',
      //   descripcion: 'Doble carne, cheddar, tomate, y pepino',
      //   cost: 150,
      //   image: 'https://firebasestorage.googleapis.com/v0/b/bakerysunny-4b7d3.appspot.com/o/Desayuno%2Fdesayuno2.png?alt=media&token=b1e373b0-cc0e-4d73-b143-1652c15e4d32',
      // },
      
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
     
     <h1 className={classes.h1}>Box de desayuno/merienda</h1>
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
                
                <Typography variant="subtitle1" className="hola"> ${producto.cost}</Typography>
              
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
                        {producto.index}
                      </Typography>
                       <img 
                        className= {classes.img} 
                        alt= {producto.name} 
                        src= {producto.img} 
                      /> 
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
              
            </Grid>
          </Grid>
        </Paper>
      
        </div> 
      ))}
      
      </div>
     
      </div>
  );
}