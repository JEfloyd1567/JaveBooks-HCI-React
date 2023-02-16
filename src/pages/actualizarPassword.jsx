import React, { Component } from 'react';
import styles from './actualizarPassword.css';
import { Link } from 'react-router-dom';
class actualizarPassword extends Component {
  render() {
    return(
      <div class= "registro">
        <form>
        <label className = "etiqueta" style={{ fontSize: '25px', fontWeight: 'bold' }}>usuario</label>
        <input type="text"className = "input" placeholder="Ingrese su correo" ></input>
        <label className = "etiqueta" style={{ fontSize: '25px', fontWeight: 'bold' }}>password</label>
        <input type="text"className = "input" placeholder="Ingrese su usuario" ></input>
        <label className = "etiqueta" style={{ fontSize: '25px', fontWeight: 'bold' }}>nueva password</label>
        <input type="password"className = "input" placeholder="Ingrese su usuario" ></input>
        <button class="btn btn-primary mb-3" style={{left : "220px"}}>actualizar password</button>
        </form>
      </div>
    );
  }
}

export default actualizarPassword;