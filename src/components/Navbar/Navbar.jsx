import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import holla from './holla.png';
import login from './login.png';


class Navbar extends Component {
  render() {
    return(
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.bgOrange}`}>
        <div className="container-fluid">
        <img src={holla} width='130'/>
          <Link to='/' className="nav-link" style = {{color: 'white', fontSize: '50px', }} href="/" >Jave Books</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"/>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link to='/Login' className="nav-link" style = {{color: 'white', fontSize: '30px', alignItems : "center"}} href="/" >Login</Link>
              </li>
              <img src={login} width='55' style = {{margin : "4%"}}/>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{color: 'white', fontSize: '30px', alignItems : "center"}}>
                Menú
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Carrito</a>
                <a class="dropdown-item" href="#">Contacto</a>
                <a class="dropdown-item" href="#">Ayuda</a>
                <a class="dropdown-item" href="#">Cerrar Sesión</a>
              </div>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;