import React, {useEffect, useState} from 'react';
import './style.css';

var url = "https://sujeitoprogramador.com/rn-api/?api=posts";

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi(){
      fetch(url)
      .then((e)=>e.json())
      .then((json)=>{
        setNutri(json);
      });
    }

    loadApi();

  }, []);

  return (
    <div className="container">
      <header>
       <h1>React Nutri</h1>
      </header>
      <ul>
        {nutri.map((item)=>{
          return(
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa"/>
              <p classname="subtitulo">
                {item.subtitulo}
              </p>
              <h4>Categoria: {item.categoria}</h4>
              <a className="botao">Acessar</a>
            </article>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
