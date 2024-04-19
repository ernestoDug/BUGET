import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


import Tranaction from "../Transaction";

const Transactions = ({ transactions }) =>
  transactions.map((transaction) => (
    
      <Tranaction
        key={nanoid()}
        label={transaction.label}
        value={transaction.value}
      />

  ));

// проптайпи
Transactions.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

  
export default Transactions;
