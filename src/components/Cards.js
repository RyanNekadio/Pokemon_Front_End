
const Cards = ({pokemon}) => {

    return (
        <article>
            <h4>{pokemon.name}</h4>
            <img src={pokemon.images.small} alt='pokemon tcg card' />
        </article>
    );
}

export default Cards;