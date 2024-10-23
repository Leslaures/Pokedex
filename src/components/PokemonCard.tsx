interface pokemonProps {
    name: string;
    imgSrc?: string;
}


  function PokemonCard({ name, imgSrc }: pokemonProps){

    return imgSrc? (
        <figure>
            <img src={imgSrc} alt= "" />
            <figcaption>{name}</figcaption>
        </figure> 
    )
        : (
    <figure>
        <p>???</p>
        <figcaption>{name}</figcaption>
    </figure>);
}


export default PokemonCard;