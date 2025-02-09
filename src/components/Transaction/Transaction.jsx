import PropTypes from "prop-types";
import { motion } from "framer-motion";
// npm install framer-motion
import { useContext } from "react";
import { AppContext } from "../../provaiders/context/context";


import { LiStyle } from "./Transaction.module";

// npx storybook@latest init
// npm run storybook
// краще компонент там створити протестувати а потім вже вставити собі
// зразок в навва сторис джиек икс тільки воно ніхрена не працює

const Tranaction = ({ value = 0, date = "", comment = "" }) => {
  const state = useContext(AppContext);

  return (
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
      {/* // пропсом велю дали стайл компоненту щоб колір змінбвати в стилях */}
      <LiStyle value={value}>
        <br></br>
        <p>Значення: {value.toFixed(2)}, {state.currensy}</p>
        <p>Дата: {date}</p>
        <p>Кометар: {comment}</p>
      </LiStyle>
    </motion.div>
  );
};

// дефолтні пропси якщо буде щось не те передане то візьме дефолтне значення і омине помилку
// але краще дефолт прописувати прямо в пропсах
// Tranaction.defaultProps = {
//   label: '',
//   value: 0,
// }

// проптайп
Tranaction.propTypes = {
  comment: PropTypes.string,
  value: PropTypes.number,
};
export default Tranaction;
