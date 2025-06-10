import { useState, useEffect } from 'react';
import '../styles/App.scss';
import MagicList from './Magic/MagicList';
import MagicFilters from './Magic/MagicFilters';
import LogoHP from '../images/HP_logo.png';

function App() {

  //VAR ESTADO
  const [magic, setMagic] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    house: '',
    ancestry: ''
  });

  //DATA: USE-EFFECTS
  useEffect(() => {
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
        <img
          src={LogoHP}
          alt='logo de Harry Potter'
        />
        <MagicFilters
          magic={magic}
          filters={filters}
          handleFilterName={handleFilterName}
          handleFilterHouse={handleFilterHouse}
          handleFilterBlood={handleFilterBlood}
        />
      </header>
      <main>
        <MagicList filteredMagic={filteredMagic} />
      </main>
    </div>
  );
}

export default App;
