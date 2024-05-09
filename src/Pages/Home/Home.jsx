import { Component } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

import Balance from "../../components/Balance/Balance";
import Tranactions from "../../components/Transactions/Transactions";
import Form from "../../components/Form/Form";

import { H4NotTransactionStyle, H4BalanceStyle } from "./Home.module";

import { getItems, addItem } from "../../utils/indexdb";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTtransactions] = useState([]);

  useEffect(() => {
    // з бази
    getItems()
      .then((items) => {
        setTtransactions(items);
      })
      .catch((e) => {
        debugger;
      });
  }, [setTtransactions]);
  // пустий масив залежностей спрацюю раз при монтуванні

  // так заносимо в сторидж
  // window.localStorage.setItem("balance", JSON.stringify(this.state.balance));
  // }

  const changer = (value, date, comment) => {
    // id використовується я ключ до бази глянь в утилсах индекс дб**
    const transaction = { value: +value, date, comment, id: nanoid() };

    setTtransactions([transaction, ...transactions]);

    setBalance(balance + +value);

    // до бази 
    addItem(transaction);
    // console.log(transactions, 999);
  };

  return (
    <>
      {/* для анімашки  */}
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Balance balance={balance}>
          {" "}
          <H4BalanceStyle> Мій баланс: {balance}</H4BalanceStyle>
        </Balance>
        {/* прокинули пропсом функцію формі
         */}
        <Form changer={changer} />
        {!transactions.length ? (
          <>
            {" "}
            <br></br>{" "}
            <H4NotTransactionStyle> Транзакції відсутні </H4NotTransactionStyle>
          </>
        ) : (
          <>
            <Tranactions transactions={transactions} />
          </>
        )}
      </motion.div>
    </>
  );
};

export default Home;
