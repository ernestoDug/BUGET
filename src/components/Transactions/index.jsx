import { nanoid } from "nanoid";

import Tranaction from "../Transaction";

const Transactions = ({ transactions }) =>
  transactions.map((transaction) => (
    
      <Tranaction
        key={nanoid()}
        label={transaction.label}
        value={transaction.value}
      />

  ));

export default Transactions;
