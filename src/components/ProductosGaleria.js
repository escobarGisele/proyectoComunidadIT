import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import box from '../imagenes/Box/box.png';
import boxSanValentin from '../imagenes/boxSanValentin.jpg';
import pascuas from '../imagenes/pascuas.png'
import miniTorta from '../imagenes/miniTorta.jpg';
import paletas from '../imagenes/paletas.png';
import Navidad from '../imagenes/Navidad.png';
import rellenos from '../imagenes/rellenos.png';
import {Link} from "react-router-dom";

const images = [
  {
    url: `${box}`,
    
    width: '30%',
    link:'/confirmarCompra'
  },
  {
    url: `${boxSanValentin}`,
    
    width: '40%',
    link:'/confirmarCompra'
  },
  {
    url: `${miniTorta}`,
   
    width: '30%',
    link:'/confirmarCompra'
  },
  {
    url: `${Navidad}`,
   // title: 'Navidad',
    width: '30%',
    link:'/confirmarCompra'
  },
  {
    url:`${paletas}`,
    //title: 'Paletas',
    width: '40%',
    link:'/confirmarCompra'
  },
  {
    url: `${rellenos}`,
    //title: 'Corazón relleno',
    width: '30%',
    link:'/confirmarCompra'
  },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    
  },
  image: {
    position: 'relative',
    height: 260,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
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
  
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  
}));

export default function ProductosGaleria() {
  const classes = useStyles();
  


  return (
    
    <div class="flex-container2" >
      <div class="center"> 
        <Link to="/confirmarCompra">
          <span className="text1"> Mis productos </span>
            </Link>
      </div>
      
      <h4>Podes ver algunos de mis de mis trabajos e ir a la tienda presionando sobre cualquier foto, además 
        podés personalizarlo de la manera que más te guste! 
      </h4>
    
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase 
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
           <Link to={image.link}> 
        
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
         <span className={classes.imageButton}></span>
        
          </Link>
        </ButtonBase>
       
      ))}
        </div>
       </div>
  
  );
}