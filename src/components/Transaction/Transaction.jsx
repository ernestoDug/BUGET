import PropTypes from "prop-types";

import { LiStyle } from './Transaction.module';

const Tranaction = ({ label = "", value = 0 }) => {
  return (
    // пропсом велю дали стайл компоненту щоб колір змінбвати в стилях
    <LiStyle value={value}>
        <br></br>
        Label: {label},<p>Value: {value}</p>
    </LiStyle>
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
