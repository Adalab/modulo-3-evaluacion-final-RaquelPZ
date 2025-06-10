import MagicItem from "./MagicItem";
import magicat from '../../images/no_magicat.webp';

function MagicList({ filteredMagic }) {
  return (
    <>
      {filteredMagic.length === 0 ? (
        <div className='no_magic'>
          <p>No creature found D:</p>
          <img src={magicat} alt="imagen del magicat" />
        </div>
      ) : (
        filteredMagic.map((eachMagic) => (
          <div key={eachMagic.id} className='card'>
            <MagicItem magic={eachMagic} />
          </div>
        ))
      )}
    </>
  );
}

export default MagicList;