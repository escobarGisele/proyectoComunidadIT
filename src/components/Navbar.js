import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button, ButtonGroup } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import logo from '../imagenes/logo.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    flexWrap: 'wrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Link to="/">
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            
          <Avatar alt="" src={logo} className={classes.large}/>
          </IconButton>
          </Link>          
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Inicio</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/productos">Productos</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/confirmarCompra">Comprar</Link></MenuItem>
      </Menu>
      
          <Typography className={classes.title} variant="h4" noWrap>
           Bakerysunny
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}
