import PropTypes from "prop-types";
import { H4BancrotStyle } from "./Balance.module";
import { H4BalanceStyle } from "../../Pages/Home/Home.module";

const Balance = ({ balance, children }) => {
  return (
    <>
      {balance <= 0 ? (
        <>
          {" "}
          <H4BancrotStyle> Ви банкрот</H4BancrotStyle>
        </>
      ) : (
        <div>
          <H4BalanceStyle> Ви міліонер </H4BalanceStyle>
          {children}
          {/* прибрав щоб проп не виводився  */}
          {/* {balance} */}
        </div>
      )}
    </>
  );
};

// проптайпи
Balance.propTypes = {
  balance: PropTypes.number,
};

export default Balance;
