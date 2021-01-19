import React, {useState} from 'react';
import {makeStyles, TextField, Grid, Button, Typography} from '@material-ui/core';
import {db} from '../firebase'
import {storage} from '../firebase'

import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    containerForm: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
        marginTop: '20px',
        width: '100%',
        [theme.breakpoints.up('sm')] : {
            width: '60%',
        }
    },
    containerButtons: {
        height: '15px',
        backgroundColor: 'blue'
    },
    inputFile:{
        padding: '10px',
        margin: '10px',
        backgroundColor:'black',
    },
    tituloForm: {
        textAlign: 'center'
    },
    containerPaso2: {
        display: 'none',
        marginTop: '20px',
        width: '100%', 
        [theme.breakpoints.up('sm')] : {
            width: '60%',
        }
    
    },
    
    containerSubmit: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
   
    
    buttonSig: {
        display: 'flex',
        justifyContent: 'center',
    }
}));



const DialogoForm = () => {
    const classes = useStyles();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setdireccion] = useState('');
    const [comentarios, setComentarios] = useState('')
    const [mostrarSnackbar, setMostrarSnackbar] = useState(false)
    const [fechaDeEntrega, setFechaDeEntrega] = useState("")
    const [provincia, setProvincia] = useState('')
    const [zona, setZona] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')

    

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleChangeApellido = (e) => {
        setApellido(e.target.value)
    }

    const handleChangedireccion = (e) => {
        setdireccion(e.target.value)
    }

    
    const handleChangeComentarios = (e) => {
        setComentarios(e.target.value)
        
    }
    

    const handleFechaDeEntrega = (e) => {
        setFechaDeEntrega(e.target.value)
    }

    
    
    const handleZona = (e) => {
        setZona(e.target.value)
    }



    const nuevoRegistro = async (e) => {
        e.preventDefault();
        
            const date = new Date();
            const numeroDia = date.getDate();
            const mes = date.getMonth();
            const año = date.getFullYear();
            const hora = date.getHours();
            const minuto = date.getMinutes();
            const segundo = date.getSeconds();
            const meses = [
                "Enero", "Febrero", "Marzo",
                "Abril", "Mayo", "Junio", "Julio",
                "Agosto", "Septiembre", "Octubre",
                "Noviembre", "Diciembre"
            ]
            const fechaRegistro = `${numeroDia} de ${meses[mes]} del ${año} a las ${hora}:${minuto}:${segundo}`
        
            db.collection('datosUsuario').add({
                emailUsuario: emailUsuario,
                fechaRegistro: fechaRegistro,
                nombre: nombre,
                apellido: apellido,
                direccion: direccion,
                comentarios: comentarios,
                fechaDeEntrega: fechaDeEntrega,
                provincia: provincia,
                zona: zona
            })
            alert('Datos cargados correctamente');
            console.log("Datos cargados con éxito.");
            setMostrarSnackbar(true)
           
        setTimeout(function() {
            window.location.replace("/confirmarCompra");
        }, 2000)
    }

    const Snackbar = () => {
        (mostrarSnackbar) ?
        <div>
            datos cargados
        </div> 
        : 
        <></>
    }



    return ( 
        <div class="flex-container-form">
        <form onSubmit={nuevoRegistro}  className={classes.containerForm}>

            <Grid container spacing={3} className={classes.grid} id="paso1">
                  <Grid item xs={12} sm={6}>
                    <TextField
                    name="nombre" 
                    type="text"  
                    label="Nombre/s"
                    onChange={handleChangeNombre}
                    variant="outlined"
                    fullWidth
                    autoComplete="fname"
                    required
                    autoFocus
                    />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <TextField
                    name="apellido" 
                    type="text"  
                    label="Apellido/s"
                    onChange={handleChangeApellido}
                    variant="outlined"
                    fullWidth
                    autoComplete="lname"
                    required
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                    name="direccion" 
                    type="text"  
                    onChange={handleChangedireccion}
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    autoComplete="lname"           
                    />
                </Grid>

        

                <Grid item xs={12} >
                    <TextField
                    name="comentarios"
                    type="text"
                    label="Comentarios"
                    onChange={handleChangeComentarios}
                    placeholder="Si desea agregar deje su comentario"
                    required
                    id="outlined-multiline-static"
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        id="date"
                        label="Fecha de entrega"
                        type="date"
                        defaultValue="2017-05-24"
                        variant="outlined"
                        fullWidth
                        className={classes.textField}
                        onChange={handleFechaDeEntrega}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                    name="zona" 
                    type="text"
                    onChange={handleZona}
                    label="Zona"
                    variant="outlined"
                    fullWidth
                    autoComplete="lname"   
                    required                
                    />
                </Grid>
                <Grid >
                    <Grid item xs={12} >
                        <Button type="submit" variant="contained" color="primary" >Añadir registro</Button>
                        
                    </Grid>
                    {Snackbar()}
                </Grid>
                
            </Grid>   

           
         
        </form>
        </div>
        
     );
}

export default DialogoForm;