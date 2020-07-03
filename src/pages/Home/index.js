import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ]= useState('');// [usuario, setUsuario]
  const [ erro, setErro ] = useState(false);
  


  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      
      const repositoriesName = [];
      repositories.map((repository) => {
      repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories');//mudar para rota repositories
      
      /*--novo atributo

      const repositoriesUrl = [];
      repositories.map((repositoryUrl) => {
        repositoriesUrl.push(repositoryUrl.url)
      });

      localStorage.setItem('repositoriesUrl', JSON.stringify(repositoriesUrl));
      setErro(false);
      //console.log(response.data);
      //console.log(repositoriesName);
      //console.log(repositoriesUrl);
      */
      
    
    })
    .catch(err => {
        setErro(true);
    });
  }
  //https://api.github.com/users/pedr0hug0
  //https://api.github.com/users/pedr0hug0/repos

  return (
    
    <S.HomeContainer>
      <h1>{props.title}</h1>
      <h2>{props.users}</h2>
      Olá <h3 style={{fontSize:'50px', color:'red'}}>{usuario}</h3>.
      <S.Content>
      
        
        <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
      
    </S.HomeContainer>
  );
}

export default App;

