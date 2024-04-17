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

export default Balance;
