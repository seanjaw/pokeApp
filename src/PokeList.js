import React from 'react';
import Pokemon from './Pokemon';
 
 
const PokeList = ({pokeList}) => {
   return (
       <div>
           {pokeList.map(pokemon => {
               console.log('this is pokemon', pokemon)
               return (
                   <Pokemon pokemon={pokemon} key ={pokemon.name} />
               )
           })}
       </div>
   );
};
 
export default PokeList;