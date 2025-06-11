import { useState, useEffect } from 'react';
import '../styles/App.scss';
import MagicList from './Magic/MagicList';
import MagicFilters from './Magic/MagicFilters';
import LogoHP from '../images/HP_logo.png';
import { Routes, Route } from 'react-router';
import MagicDetail from './MagicDetail/MagicDetail';
import magicat from '../images/no_magicat.webp';

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
        const abcData = [...data].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setMagic(abcData);
      });
  }, []);

  //EVENTS+FUNCTION
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
  const handleFilterReset = (ev) => {
    setFilters({
      ...filters,
      name: "",
      house: "",
      ancestry: ""
    });
  }

  //FILTERS
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

  //HTML
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
          handleFilterReset={handleFilterReset}
        />

      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<MagicList
              filteredMagic={filteredMagic}
              filters={filters}
              setFilters={setFilters} />}
          />
          <Route
            path="/detail/:magid"
            element={<MagicDetail magic={filteredMagic} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
