import PropTypes from "prop-types"

const NavBar = ({precedentPok, suivantPok, pokemonIndex, pokemonList}) => {
    NavBar.propTypes = {
        precedentPok : PropTypes.func.isRequired,
        suivantPok : PropTypes.func.isRequired,
        pokemonIndex : PropTypes.number.isRequired,
        pokemonList : PropTypes.array.isRequired

    }


    return (
      <>
        <button onClick={precedentPok} disabled={pokemonIndex === 0}>Précédent</button>
    <button onClick={suivantPok} disabled={pokemonIndex === (pokemonList.length - 1)}>Suivant</button>
      </>
    );
};

export default NavBar;