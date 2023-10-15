import PropTypes from "prop-types"

const NavBar = ({pok, funct, array}) => {


        if (pok.name === "pikachu") {
            alert("pika pikachu !!")
        }

    


    return (
      <>
    {array.map((article) => <button key={article.id} onClick={() => funct(article.id)}>
        {article.name}
        </button>)}
      </>
    );

    }
    NavBar.propTypes = {
        pok: PropTypes.number.isRequired,
        funct: PropTypes.func.isRequired,
        array : PropTypes.array.isRequired}
export default NavBar;