import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


import Tranaction from "../Transaction";

const Transactions = ({ transactions = [] }) =>
  transactions.map((transaction) => (
    
      <Tranaction
        key={nanoid()}
        label={transaction.label}
        value={transaction.value}
      />

  ));

// дефолтні пропси якщо буде щось не те передане то візьме дефолтне значення і омине помилку 
// але краще дефолт прописувати прямо в пропсах 

  // Transactions.defaultProps = {
  //   transactions: []
  // }

// проптайпи
Transactions.propTypes = {
transactions: PropTypes.arrayOf(

  PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
})),
}

  
export default Transactions;
