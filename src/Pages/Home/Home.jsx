import { Component } from "react";
import { motion } from 'framer-motion';


import Balance from "../../components/Balance/Balance";
import Tranactions from "../../components/Transactions/Transactions";
import Form from "../../components/Form/Form";



import { H4NotTransactionStyle, H4BalanceStyle } from "./Home.module";

// ч1 3 30
// 24/04 +++++++++++++++++++++++++++++++++++

class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };
    // фіксуємо зис байндемо його щоб не втратився контекст при клік
    this.changer = this.changer.bind(this);
    // в  стірлочну функ у контекст завязуємо автоматично без байнд
  }

  // повторемо життевий цикл
  // componentDidMount() {
  // отримаємо з сторидж
  // const balance = JSON.parse(window.localStorage.getItem("balance"));
  // сетемо в стан з локал сторидж
  // this.setState({ balance });
  // }

  // componentWillUnmount() {
  // сетимо перед закриттямb хоча воно на спрауює але так заносимо в сторидж
  // window.localStorage.setItem("balance", JSON.stringify(this.state.balance));
  // }

  // shouldComponentUpdate (nextProps, nextState) {

  // фалс тобто не треба перерндувати при зміні стейта
  // return false

  // буде перерендувати поки баланс менше 5 а потім стейт змінються але не рендериться
  // return nextState.balance < 5;
  // return true;
  // }
  // завершили  повторемо життевий цикл

  changer = (value) => {
    // debugger
    this.setState((state) => ({
      balance: state.balance + +value,
      transactions: [{ value, label: "це в хоме в стані тр" }, ...state.transactions],
    }));
  };

  render() {
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

  
        <Balance balance={this.state.balance}>
          {" "}
          <H4BalanceStyle> Мій баланс: {this.state.balance}</H4BalanceStyle>
        </Balance>
        {/* прокинули пропсом функцію ормі
після сабімту викликається чанжер тут з отриманими на формі параметрамаи  */}
        <Form changer={this.changer} />
        {!this.state.transactions.length ? (
          <>
            {" "}
            <br></br>{" "}
            <H4NotTransactionStyle> Транзакції відсутні </H4NotTransactionStyle>
          </>
        ) : (
          // меп создаёт новый массив
          <>
            <Tranactions transactions={this.state.transactions} />
          </>
        )}
      </motion.div>
      </>
    );
  }
}

export default Home;