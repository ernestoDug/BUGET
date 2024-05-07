import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import Tranaction from "../Transaction/Transaction";
import { UlStyle } from "./Transactions.module";

const Transactions = ({ transactions = [] }) => (
  <UlStyle>
    {transactions.map((transaction) => (
      <Tranaction
        key={nanoid()}
        comment={transaction.comment}
        value={transaction.value}
        date={transaction.date}
      />
    ))}
  </UlStyle>
);

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
      value: PropTypes.number,
    })
  ),
};

export default Transactions;
