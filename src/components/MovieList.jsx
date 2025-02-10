import PropTypes from "prop-types";
const MovieList = ({ title }) => {
  return <div className="text-white p-10 mb-10 text-lg">{title} </div>;
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MovieList;
