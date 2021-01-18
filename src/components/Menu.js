import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Footer from './Footer';
import '../App.css';

const Menu = () => {

    return (
        <div class="flex-container">

            <div class="flex-item-left"><h3>Bienvenidos a Bakerysunny</h3>

            </div>

            <div class="flex-item-right">
                <div className="container">

                    <div className="center">

                        <p className="pSarasa" >Soy Sol Lencina, dueña de bakerysunny, realizo pasteleria artesanal con mucho amor y dedicación.</p>
                    </div>
                    <p className="prod">Te invito a ver </p>
                    <Link to="/confirmarCompra">

                        <span className="text1"> mis productos </span>

                    </Link>
                </div>

            </div>
            <Footer />
        </div>

    );
}

export default Menu;

