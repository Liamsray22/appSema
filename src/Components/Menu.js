import React, { useState } from 'react'
import '../Css/menu.css'
import {Link} from 'react-router-dom'




const Menu =()=>(
    <>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" 
rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

 <nav className="main-navigation">
        <div className="navbar-header animated fadeInUp">
            <Link className="navbar-brand" to="/principal">ISemaforo</Link>
        </div>
        <ul className="nav-list">
            <li className="nav-list-item">
                <Link to="/principal" className="nav-link">Home</Link>
            </li>
            <li className="nav-list-item">
                <Link to="/pbocina" className="nav-link">Semaforo Peatonal</Link>
            </li>
            <li className="nav-list-item">
                <Link to="/funcion" className="nav-link">Funcionalidades del semaforo</Link>
            </li>
            <li className="nav-list-item">
                <Link to="/historial" className="nav-link">Historial</Link>
            </li>
            <li className="nav-list-item">
                <Link to="/" className="nav-link">Cerrar Sesion</Link>
            </li>
        </ul>

    </nav>
    </>
)

export default Menu