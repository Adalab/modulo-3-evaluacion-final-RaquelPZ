import MagicItem from "./MagicItem";

function MagicList({ filteredMagic }) {
  return (
    <>
      {filteredMagic.map((eachMagic) => (
        <div key={eachMagic.id} className='card'>
         <MagicItem magic={eachMagic} />


        </div>
      ))}
    </>
  );
}

export default MagicList;