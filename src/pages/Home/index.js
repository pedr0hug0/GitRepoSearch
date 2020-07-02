import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ]= useState('');// [usuario, setUsuario]


  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
    const repositories = response.data;
    const repositoriesName = [];
    const repositoriesUrl = [];
    repositories.map((repository) => {
      repositoriesName.push(repository.name);
    });
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    history.push('/repositories');

    repositories.map((repository) => {
      repositoriesUrl.push(repository.url)
    });

    localStorage.setItem('repositoriesUrl', JSON.stringify(repositoriesUrl));

    console.log(response.data);
    console.log(repositoriesName);
    console.log(repositoriesUrl);
    
    });
  }
  //https://api.github.com/users/pedr0hug0
  //https://api.github.com/users/pedr0hug0/repos

  return (
        
    <S.Container>
      
    <h1>{props.title}</h1>
    <h2>{props.users}</h2>
    Olá <h3 style={{fontSize:'50px', color:'red'}}>{usuario}</h3>.
    <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
    </S.Container>
       
  );
}

export default App;

