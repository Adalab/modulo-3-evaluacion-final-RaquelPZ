import MagicItem from "./MagicItem";
import magicat from '../../images/no_magicat.webp';

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
      ) : (
        filteredMagic.map((eachMagic) => (
          <div
            key={eachMagic.id}
            className={`card ${houseClass[eachMagic.house] || ''}`}
          >
            <MagicItem magic={eachMagic} />
          </div>
        ))
      )}
    </>
  );
}

export default MagicList;