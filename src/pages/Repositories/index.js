import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Repositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    const [repositoriesUrl, setRepositoriesUrl] = useState([]);
    const [ vazio, setVazio ] = useState(false);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        if (repositoriesName != null && repositoriesName.length > 0) {
            
            console.log(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
            
        
        }
        else if (repositoriesName.length === 0) {
            setVazio(true);
        }else{
            history.push('/');
          
        }
        
        

        /*novo atributo
        let repositoriesUrl = localStorage.getItem('repositoriesUrl');
        repositoriesUrl = JSON.parse(repositoriesUrl);
        console.log(repositoriesUrl);
        setRepositoriesUrl(repositoriesUrl);
        //localStorage.clear();
        */
    }, []);
    
    return (
        <S.Container>
         <S.Title>Repositories</S.Title>
        <S.List>
        { vazio ? <S.ListItem> Repositorio Vazio. </S.ListItem> : ''}
                
                { repositories.map(repository => {
                    return (
                        <S.ListItem>
                           
                           { repository }
                        </S.ListItem>
                    )
                })}
            
        </S.List>
        <S.LinkLinkHome to="/">Voltar</S.LinkLinkHome>
        </S.Container>
    )

}

