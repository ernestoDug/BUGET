import { Component } from "react";

import Balance from "../Balance";

// ч1 1,47 +++++++++++++++++++++++++++++++++++
// const name = "Chudo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };
    // фіксуємо зис байндемо його щоб не втратився контекст при клік
    this.onIncrease = this.onIncrease.bind(this);
    // в декрис ми беремо стірлочну функ і тому контекст завязуємо автоматично без байнд
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

  // +1

  onIncrease() {
    this.setState((state) => ({ 
      balance: state.balance + 1,
      transactions: [{
        label: 'increase',
        value: +1,
      }, ...state.transactions],
    }));
  };

  
  // -1
  onDecrease = () => {
    this.setState((state) => ({ 
      balance: state.balance - 1,
      // створено новий масив для демутації 
      transactions: [{
        label: 'decrease',
        value: -1,
      }, ...state.transactions],
    }));
  };

  render() {

    return (
      <>
        <Balance balance={this.state.balance}>Мій баланс:</Balance>

        <button onClick={this.onIncrease}> Додати 1 </button>

        <button onClick={this.onDecrease}> Забрати 1 </button>
        {!this.state.transactions.length ? (
          <>
            {" "}
            <br></br> "Транзакції відсутні"
          </>
          // меп создаёт новый массив 
        ) : (
        <> {this.state.transactions.map((transaction) => (
          <div>
           <br></br>
Label: {transaction.label}, 
<p>
Value: {transaction.value}
</p>
          </div>

        )    
        ) 
         }
        </>
        
        
                )}
      </>
    );
  }
}

export default App;
