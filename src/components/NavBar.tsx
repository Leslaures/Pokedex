
interface NavBarProps {
    pokemonIndexProp: number;
    setPokemonIndexProp: (index: number) => void;
    pokemonListProp: ({ name: string; imgSrc: string; } | { name: string; imgSrc?: undefined; })[];
  }

  function NavBar ({pokemonIndexProp, setPokemonIndexProp,pokemonListProp}: NavBarProps) {

    function handleClickPokemonIndexPrécédent () {
      if (pokemonIndexProp > 0) {
      setPokemonIndexProp (pokemonIndexProp - 1)};
    }
  
    function handleClickPokemonIndexSuivant () {
      if (pokemonIndexProp < (pokemonListProp.length)-1) {
        setPokemonIndexProp (pokemonIndexProp +1)};
    }


return (
    <>
    <button type="button" onClick={handleClickPokemonIndexPrécédent}>Précédent</button>
    <button type="button" onClick={handleClickPokemonIndexSuivant}>Suivant</button>
    </>

)
  }

  export default NavBar

  