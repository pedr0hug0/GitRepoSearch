import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [ usuario, setUsuario ]= useState('');// [usuario, setUsuario]


  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
    //https://api.github.com/users/pedr0hug0
    //https://api.github.com/users/pedr0hug0/repos
  }

  return (
    <>
  <h1>{props.title}</h1>
    <h2>{props.users}</h2>
    Olá <h3 style={{fontSize:'50px', color:'red'}}>{usuario}</h3>.
    <input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}> Pesquisar </button>
  </>
       
  );
}

export default App;

