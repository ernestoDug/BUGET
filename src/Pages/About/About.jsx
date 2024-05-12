import { motion } from 'framer-motion';
import { useContext } from 'react';

import СurencyContext from "../../provaiders/context/context.js";


const About = () => {
  const currensy2 = useContext(СurencyContext);
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
       <h1>ЦІКАВИНКИ ПРО НАС</h1>
        </motion.div>
    )
};

// дефолтні пропси якщо буде щось не те передане то візьме дефолтне значення і омине помилку
// але краще дефолт прописувати прямо в пропсах

// Transactions.defaultProps = {
//   transactions: []
// }



export default About;
