import { Link, useParams } from 'react-router';
import magicat from '../../images/no_magicat.webp';
import Ivanico from '../../images/ivanico.png';


function MagicDetail({ magic }) {

    const params = useParams();
    const magicInfo = magic.find((eachMagic) =>
        eachMagic.id === params.magid);

    const houseClass = {
        Gryffindor: 'house_red',
        Slytherin: 'house_green',
        Ravenclaw: 'house_blue',
        Hufflepuff: 'house_yellow'
    };

    return (
        <>
            {magicInfo ? (
                <>
                <div className={`detail ${houseClass[magicInfo.house] || ''}`}>                    <div className='detail_photo'>
                    <img
                        src={magicInfo.image || Ivanico}
                        alt='foto de la bruja' />
                </div>
                    <h2 className='.detail_name'>
                        {magicInfo.name ? magicInfo.name : "NO name"}
                    </h2>
                    <ul className='.detail_list'>
                        <li><strong>House: </strong>{magicInfo.house ? magicInfo.house : "ø"}</li>
                        <li><strong>Specie: </strong>{magicInfo.species ? magicInfo.species : "ø"}</li>
                        <li><strong>Gender: </strong>{magicInfo.gender ? magicInfo.gender : "ø"}</li>
                        <li><strong>Birth: </strong>{magicInfo.yearOfBirth ? magicInfo.yearOfBirth : "ø?"}</li>
                    </ul>
                    <ul className='.detail_more'>
                        <li><strong>Alive: </strong>{magicInfo.alive ? "♡" : "✚"}</li>
                        <li><strong>Blood: </strong>{magicInfo.ancestry ? magicInfo.ancestry : "Unrevealed"}</li>  
                        <li><strong>Patronus: </strong>{magicInfo.patronus ? magicInfo.patronus : "Secret"}</li>
                    </ul>
                    <div className='detail_back'><Link to='/'>🡸</Link></div>
                </div>
                
                </>
            ) :
                (
                    <div className='no_magic'>
                        <p>No creature found D:</p >
                        <img src={magicat} alt="imagen del magicat" />
                    </div >
                )
            }

        </>
    );
}

export default MagicDetail;