import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DetailModal from './DetailModal';

const Pokemon = ({pokemon}) => {
    const [pokeImage, setPokeImage] = useState('');
    const [isShowing, setIsShowing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(async () => {
        const result = await axios.get(pokemon.url)
        // .then((response)=>{
        //     console.log('this is image response', response.data.sprites.front_default)
        // })
        .catch(err => console.log(err));
        console.log('this is result', result)
        setPokeImage(result.data.sprites.front_default);
    }, [])
    
    
    return (
        <div onClick ={() => setIsShowing(!isShowing)}>
            <DetailModal isOpen={isOpen}/>
            <img src={pokeImage}/>
            <div>
                {pokemon.name}
            </div>
        </div>

    );
};


export default Pokemon;