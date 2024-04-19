import PropTypes from 'prop-types';


const Balance = ({ balance, children }) => {
  return (
    <>
        { balance === 0 ?    <>  "Банкрот" <br></br> </> : 
      <div>
        "Міліонер" <br></br>
        {children}
        {balance}
      </div>
}
    </>
  );
};

// проптайпи
Balance.propTypes = {
  balance: PropTypes.number,
};


export default Balance;
