import MagicItem from "./MagicItem";
import magicat from '../../images/no_magicat.webp';
import { Link } from 'react-router';

function MagicList({ filteredMagic }) {

  const houseClass = {
    Gryffindor: 'house_red',
    Slytherin: 'house_green',
    Ravenclaw: 'house_blue',
    Hufflepuff: 'house_yellow'
  };

  return (
    <>
      {filteredMagic.length === 0 ? (
        <div className='no_magic'>
          <p>No creature found D:</p>
          <img src={magicat} alt="imagen del magicat" />
        </div>
      ) :
        (
          filteredMagic.map((eachMagic) => (
            <Link to={"/detail/" + eachMagic.id} key={eachMagic.id}>
              <div className={`card ${houseClass[eachMagic.house] || ''}`}>
                <MagicItem magic={eachMagic} />
              </div>
            </Link>
          ))
        )}
    </>
  );
}

export default MagicList;