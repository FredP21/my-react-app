import PropTypes from "prop-types"

const NavBar = ({funct, array}) => {
    NavBar.propTypes = {
        funct: PropTypes.func,
        array : PropTypes.array.isRequired}

    


    return (
      <>
    {array.map((article) => <button key={article.id} onClick={() => funct(article.id)}>
        {article.name}
    </button>)}
      </>
    );

    }
export default NavBar;