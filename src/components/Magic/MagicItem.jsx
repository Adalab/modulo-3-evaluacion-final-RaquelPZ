function MagicItem({ magic }) {
    return (
        <>
            <div className='photo'>
                <img
                    src={magic.image ? magic.image : "/ivanico.png"}
                    alt='foto de la bruja'
                />
            </div>
            <h4>{magic.name}</h4>
            <p>{magic.species}</p>
        </>
    );
}


export default MagicItem;