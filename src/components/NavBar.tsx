
interface NavBarProps {
    pokemonIndexProp: number;
    setPokemonIndexProp: (index: number) => void;
    pokemonListProp: ({ name: string; imgSrc: string; } | { name: string; imgSrc?: undefined; })[];
  }

  
    function NavBar ({pokemonIndexProp, setPokemonIndexProp,pokemonListProp}: NavBarProps) {

function handlePokemonClick (i: number) {
  setPokemonIndexProp (i)
}

return (
    <>

    {pokemonListProp.map((pokemon,index) => 
    
    (
        <button key={pokemon.name} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
    )    )}

    </>
)


}

  
  export default NavBar
