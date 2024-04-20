import PropTypes from 'prop-types';



const Tranaction = ({label = '', value = 0}) => {
  return (
    <li>
      <br></br>
      Label: {label},
      <p>Value: {value}</p>
    </li>
  );
};

// дефолтні пропси якщо буде щось не те передане то візьме дефолтне значення і омине помилку 
// але краще дефолт прописувати прямо в пропсах 
// Tranaction.defaultProps = {
//   label: '',
//   value: 0,
// }


// проптайп
Tranaction.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
export default Tranaction;
