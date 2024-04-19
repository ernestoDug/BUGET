import PropTypes from 'prop-types';



const Tranaction = ({label, value}) => {
  return (
    <li>
      <br></br>
      Label: {label},
      <p>Value: {value}</p>
    </li>
  );
};

Tranaction.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
export default Tranaction;
