import React from 'react';

function render(){ 
    let langs = ["Ruby","ES6","Scala"] 
    return (<div>
    {langs.map(it => <p>{it}</p>)} 
    console.log("teste");
    </div>) 
    
    };


    
    