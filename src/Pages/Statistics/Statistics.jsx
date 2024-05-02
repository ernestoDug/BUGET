// 2 20 03/05 


// для краисвої появи 
import { motion } from 'framer-motion';

import Counter from '../../components/Counter/Counter';
import {H4StepStyle} from '../../components/Counter/Counter.module'



const Statistics = () => {
    return(
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
        <H4StepStyle>
         Підіб'ємо статистику
          </H4StepStyle>
      <Counter/>

        </motion.div>
    )
};

// дефолтні пропси якщо буде щось не те передане то візьме дефолтне значення і омине помилку
// але краще дефолт прописувати прямо в пропсах

// Transactions.defaultProps = {
//   transactions: []
// }



export default Statistics;
