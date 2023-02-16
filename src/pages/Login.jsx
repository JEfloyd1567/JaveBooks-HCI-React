import React, { Component, useState } from 'react';
import styles from './Login.css';
import retro from './images/retro.png';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
 

export default (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const firebase= useFirebaseApp();
  const user = useUser();
  const submit = async()=> {
    await firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  const iniciar = async () =>{
    await firebase.auth().signInWithEmailAndPassword(email,password);
  } 
  return(
    <div class= "formulario">
      <div>
        <label htmlfor="email" className='label'> correo electronico </label>
        <input type="label" className='input' onChange={(ev) => setEmail(ev.target.value)}></input>
        <label htmlfor="email" className='label'> password </label>
        <input type="password"  className='input'onChange={(ev) => setPassword(ev.target.value)}></input>
        <button onClick={submit} class="btn btn-primary mb-3">registrar</button>
        <button onClick={iniciar} class="btn btn-primary mb-3">iniciar sesion</button>        
        </div> 
      </div>
  );
}