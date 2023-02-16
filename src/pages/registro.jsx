import React, { Component } from 'react';
import styles from './registro.css';
import { Link } from 'react-router-dom';
class registro extends Component {
  render() {
    return(
      <div class= "registro">
        <form>
        <label className = "etiqueta" style={{ fontSize: '25px', fontWeight: 'bold' }}>correo</label>
        <input type="text"className = "input" placeholder="Ingrese su correo" ></input>
        <label className = "etiqueta" style={{ fontSize: '25px', fontWeight: 'bold' }}>Usuario</label>
        <input type="text"className = "input" placeholder="Ingrese su usuario" ></input>
        <label className = "etiqueta" style={{ fontSize: '25px', fontWeight: 'bold' }}>password</label>
        <input type="password"className = "input" placeholder="Ingrese su usuario" ></input>
        <button class="btn btn-primary mb-3" style={{left : "260px"}}>registrarse</button>
        </form>
      </div>
    );
  }
}

export default registro;