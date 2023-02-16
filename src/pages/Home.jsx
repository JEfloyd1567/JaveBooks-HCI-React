import React, { Component } from 'react';
import styles from './Home.css';
import divina from './images/divina.jpg'
import princi from './images/principito.jpg'
import levedad from './images/levedad.jpg'
import lupa from './images/lupa.png';
import Book from '../components/Book/auxi';
class Home extends Component {
  render() {
    return(
      <nav className = "principal">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Acción</a>
                <a className="dropdown-item" href="#">Terror</a>
                <a className="dropdown-item" href="#">Superación</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                libros por idioma
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Español</a>
                <a className="dropdown-item" href="#">Ingles</a>
                <a className="dropdown-item" href="#">Frances</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Formato
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Pasta dura</a>
                <a className="dropdown-item" href="#">Digital</a>
              </div>
            </li>
          </ul>
        </div>
        </nav>
        <nav>
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <input type="text" className="form-control" placeholder="Busca tu libro..." aria-label="Username" aria-describedby="basic-addon1" style={{fontSize: '35px'}}></input>
              </div>
              <span className="input-group-text" id="basic-addon1">
              <img src={lupa} width= "25">
              </img>
              </span> 
            </div>
          </form>
        </nav>
        <nav>
          <h1 className="titulo1">Lo mas vendido</h1>
          <hr className="raya"></hr>
          <Book className="books"></Book>
        </nav>
    </nav>
    
    );
  }
}
export default Home;