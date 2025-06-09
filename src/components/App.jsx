import { useState, useEffect } from 'react';
import '../styles/App.scss';
// import data from '../data/magic.json';

function App() {

  //VAR ESTADO
  const [magic, setMagic] = useState([]);
  const [filters, setFilters] = useState({
    name:'',
    house:'',
    ancestry:''
  });

  //DATA: USE-EFFECTS
  useEffect( () => { 
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => {
        setMagic(data);
      });
  }, []);

  //EVENTS
  const handleFilterName = (ev) => {
    setFilters({
      ...filters,
      name: ev.target.value
    });
  };
  const handleFilterHouse = (ev) => {
    setFilters({
      ...filters,
      house: ev.target.value
    });
  };
  const handleFilterBlood = (ev) => {
    setFilters({
      ...filters,
      ancestry: ev.target.value
    });
  };

  const filteredMagic = magic
    .filter((eachMagic) =>
      eachMagic.name.toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase())
  )
    .filter((eachMagic) =>
      eachMagic.house
        .includes(filters.house)
  )
    .filter((eachMagic) =>
      eachMagic.ancestry
        .includes(filters.ancestry)
  );
  
  //FUNCTIONS


  return (
    <div className='page'>

      <header>
        <h1>HARRY POTTER</h1>

        <div className='filter'>
          <form onSubmit={ev => ev.preventDefault()}>
            <input
              type="text"
              placeholder='Nombre de la bruja'
              id='filterName'
              name='filterName'
              value={filters.name}
              onInput={handleFilterName}
            />
          </form>
          <select
            name="filterHouse"
            id="filterHouse"
            value={filters.house}
            onInput={handleFilterHouse}
          >
            <option value="">All houses</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
          <select
            name="filterBlood"
            id="filterBlood"
            value={filters.ancestry}
            onInput={handleFilterBlood}
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
          {filteredMagic.map((eachMagic) => (
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
