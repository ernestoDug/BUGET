import PropTypes from "prop-types";
import { H4BancrotStyle } from "./Balance.module";

const Balance = ({ balance, children }) => {
  return (
    <>
      {balance === 0 ? (
        <>
          {" "}
          <H4BancrotStyle> Ви банкрот</H4BancrotStyle> <br></br>{" "}
        </>
      ) : (
        <div>
          Ви міліонер <br></br>
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
