function PokemonCard({ pokemon }){

    return pokemon.imgSrc? (
        <figure>
            <img src={pokemon.imgSrc} alt= "" />
            <figcaption>{pokemon.name}</figcaption>
        </figure> 
    )
        : (
    <figure>
        <p>???</p>
        <figcaption>{pokemon.name}</figcaption>
    </figure>);
}


export default PokemonCard;