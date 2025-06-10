import Ivanico from '../../images/ivanico.png';

function MagicItem({ magic }) {
    return (
        <>
            <div className='photo'><img
                src={magic.image || Ivanico}
                alt='foto de la bruja'
            /></div>
            <h4>{magic.name ? magic.name: "NO name"} </h4>
            <p>{magic.species ? magic.species: "NO specie"}</p>
        </>
    );
}

export default MagicItem;