import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import ChristmasProducts from './ChristmasProducts';
import Cakes from './Cakes';
import ValentinesDay from './ValentinesDay';
import Box from './Box';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { grey } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const PAGE_PRODUCTS = 'products';
const PAGE_PRODUCTS_chistmas = 'ChristmasProducts';
const PAGE_PRODUCTS_Cakes = 'Cakes';
const PAGE_PRODUCTS_Valentin = 'Valentin';
const PAGE_PRODUCTS_Box = 'Box';
const PAGE_CART = 'cart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -5,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    
  },
  image: {
    position: 'relative',
    height: 260,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },


  titulo: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '3rem',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    
    background:'black'
  },
  button: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
    color: 'white',
    '&:hover': {
      color: '#FFD900'
    }
  },
  cart: {
    marginLeft: '16.5rem',
  },
  root: {
    flexGrow: 1,
  },
}));


export default function HomeProductos() {
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS, PAGE_PRODUCTS_chistmas, PAGE_PRODUCTS_Cakes, PAGE_PRODUCTS_Valentin, PAGE_PRODUCTS_Box);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([])
  };

  const removePromoCart = (deleteCart) => {
    setCart(cart.filter(promocion => promocion !== deleteCart))
  }
  

  return (
    <div class="flex-container">

      <div class="flex-item-left">
        
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ButtonGroup className={classes.buttons} size="large" variant="text" aria-label="text primary button group">
                <Button
                  onClick={() => navigateTo(PAGE_PRODUCTS)} className={classes.button}
                >
                  Desayunos/Meriendas
              </Button>
                <Button
                  onClick={() => navigateTo(PAGE_PRODUCTS_chistmas)} className={classes.button}
                >
                  Navidad
              </Button>
              <Button
                  onClick={() => navigateTo(PAGE_PRODUCTS_Cakes)} className={classes.button}
                >
                  Tortas
              </Button>
              <Button
                  onClick={() => navigateTo(PAGE_PRODUCTS_Valentin)} className={classes.button}
                >
                  San Valentin 
              </Button>
              
              <Button
                  onClick={() => navigateTo(PAGE_PRODUCTS_Box)} className={classes.button}
                >
                  Box Armados
              </Button>
             
              
                <IconButton
                  onClick={() => navigateTo(PAGE_CART)}
                  aria-label="add to shopping cart"
                  style={{ color: grey[50] }}
                  className={classes.cart} 
                >
                  Ver carrito
                <StyledBadge badgeContent={getCartTotal()} showZero color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </ButtonGroup>
            </Grid>
          </Grid>
    
      </div>

      <div class="flex-item-right">
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />

      )}
      {page === PAGE_PRODUCTS_chistmas && (
        <ChristmasProducts cart={cart} setCart={setCart} />

      )}
      
      {page === PAGE_PRODUCTS_Cakes && (
        <Cakes cart={cart} setCart={setCart} />

      )}
      
      {page === PAGE_PRODUCTS_Valentin && (
        <ValentinesDay cart={cart} setCart={setCart} />

      )}
      
      {page === PAGE_PRODUCTS_Box && (
        <Box cart={cart} setCart={setCart} />

      )}
      {page === PAGE_CART && (
        <Cart
          cart={cart}
          setCart={setCart}
          removePromoCart={removePromoCart}
          clearCart={clearCart}
        />
      )}

        </div>
    </div>
  );
};

