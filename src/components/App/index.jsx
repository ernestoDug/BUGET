import { Component } from "react";

import Balance from "../Balance";
import Tranactions from "../Transactions";
import Form from "../Form";

// ч1 2.20 +++++++++++++++++++++++++++++++++++
// const name = "Chudo";

class App extends Component {
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
      transactions: [{ value, label: "ch" }, ...state.transactions],
    }));
  };

  render() {
    return (
      <>
        <Balance balance={this.state.balance}>Мій баланс:</Balance>
        {/* прокинули пропсом функцію ормі
після сабімту викликається чанжер тут з отриманими на формі параметрамаи  */}
        <Form changer={this.changer} />
        {!this.state.transactions.length ? (
          <>
            {" "}
            <br></br> "Транзакції відсутні"
          </>
        ) : (
          // меп создаёт новый массив
          <>
            <ul>
              <Tranactions transactions={this.state.transactions} />
            </ul>
          </>
        )}
      </>
    );
  }
}

export default App;
