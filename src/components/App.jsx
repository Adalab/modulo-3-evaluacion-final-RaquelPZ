import { useState } from 'react';
import '../styles/App.scss';
import data from '../data/magic.json';

function App() {

  //VAR ESTADO
  const [magic, setMagic] = useState(data);
  console.log(data);

  //EVENTOS
  

  //FUNCTIONS

  return (
    <div className='page'>
      <header>
        <h1>HARRY POTTER</h1>
        <div className='filter'>
          <input
            type="text"
            placeholder='Nombre de la bruja'
            id=''
            name=''
            // value={}
            // onInput={}
          />
          <select
            name=""
            id=""
            // value={}
            // onInput={}
          >
            <option value="">All houses</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
          <select
            name=""
            id=""
            // value={}
            // onInput={}
          >
            <option value="">All blood</option>
            <option value="pure-blood">Limpia</option>
            <option value="half-blood">Mestiza</option>
            <option value="muggleborn">Sucia</option>
            <option value="others">Otras</option>
          </select>
        </div>
      </header>
      <main>
          {magic.map((eachMagic) => (
            <div className='card'>
              <li key={eachMagic.id}>
                <div className='photo'>
                  <img src={eachMagic.image} alt="foto de la bruja" />
                </div>
                <h4>{eachMagic.name}</h4>
                <p>{eachMagic.species}</p>
              </li>
            </div>
          ))}
      </main>
    </div>
  );
}

export default App;
